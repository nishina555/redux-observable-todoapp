redux-observableを利用して非同期通信を実装したサンプルアプリケーションです。
APIから取得したTodoリストを表示・更新できるTodoリストです。

React Reduxの公式ドキュメント内で紹介されている[Basic Tutorial](https://react-redux.js.org/introduction/basic-tutorial)のTodoアプリがベースとなっています。

実装の詳細については[Todoアプリで理解するredux-observableによる非同期処理の実装方法](https://nishinatoshiharu.com/redux-observable-async-tutorial/)をご覧になってください。

<kbd><img width="268" alt="スクリーンショット 2021-02-14 14 13 12" src="https://user-images.githubusercontent.com/3121046/109912319-27b2f680-7cef-11eb-99f1-36c52895ddcd.png"></kbd>


## 実行方法

### APIサーバーの用意

```
// todos.json

{
  "todos": [
    {
      "id": 1,
      "content": "do something",
      "completed": false
    },
    {
      "id": 2,
      "content": "go somewhere",
      "completed": false
    }
  ]
}
```

```
### json-serverのインストール
$ yarn add json-server

### port4000でJSON Serverを起動し、todos.jsonが取得できるようにする
$ json-server todos.json --port 4000
```

### 起動

```
$ yarn start
```

---

This is a Todo App written in TypeScript for studying redux-observable.
The app is based on the one introduced to [React Redux tutorial]((https://react-redux.js.org/introduction/basic-tutorial)).
