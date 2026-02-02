import { h } from './h.js';
import { domReplacer } from './domReplacer.js';
import styles from './App.module.css';
import { fetchUsers } from './fetchUsers.js';

export const App = () => {
  const state = {
    loading: true,
    users: [] as string[],
    nameFilter: '',
  };

  // ★ 全体のdomReplacer - 初期化中とデータ表示の切り替え
  const { dom: rootDom, render: renderApp } = domReplacer(() => {
    const inputDom = (
      <input
        class={styles.FilterInput}
        type='text'
        value={state.nameFilter}
        placeholder='名前を入力して絞り込み...'
        onKeyup={() => {
          state.nameFilter = inputDom.value;
          renderList(); // ← リスト部分のみ再レンダリング
        }}
      />
    );

    // ★ リスト部分のdomReplacer - フィルター入力時の絞り込み表示
    const { dom: userListDom, render: renderList } = domReplacer(() => {
      const filteredUsers = state.users.filter((user) =>
        user.includes(state.nameFilter),
      );

      if (filteredUsers.length === 0) {
        return (
          <div class={styles.EmptyState}>
            <div class={styles.EmptyIcon}>🔍</div>
            <div class={styles.EmptyText}>該当するユーザーが見つかりません</div>
          </div>
        );
      }

      return (
        <ul class={styles.UserList}>
          {filteredUsers.map((user) => (
            <li class={styles.UserItem}>
              <div class={styles.UserIcon}>{user.charAt(0)}</div>
              <div class={styles.UserName}>{user}</div>
            </li>
          ))}
        </ul>
      );
    });

    return (
      <div class={styles.App}>
        {state.loading ? (
          <div class={styles.Loading}>
            <div class={styles.LoadingSpinner}></div>
            <div>読み込み中...</div>
          </div>
        ) : (
          <div class={styles.Content}>
            <div class={styles.FilterSection}>
              <label class={styles.FilterLabel}>ユーザー検索</label>
              {inputDom}
            </div>
            <div class={styles.ListSection}>{userListDom}</div>
          </div>
        )}
      </div>
    );
  });

  // 名前文字列の一覧データを返すAPIを呼び出す
  fetchUsers().then((users) => {
    state.users = users;
    state.loading = false;
    renderApp(); // ← 全体を再レンダリング
  });

  return rootDom;
};
