# React + Redux Toolkit + Vite

Базовое todo-приложение на React с использованием Redux Toolkit, Axios и Material UI. В качестве среды разработки используется Vite. Все данные хранятся и обрабатываются через имитированное API с помощью `axios-mock-adapter`.

## Используемые технологии

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)
- [Material UI](https://mui.com/)
- [Vite](https://vitejs.dev/)

## Структура проекта

Код организован по модульному принципу. Каждая функциональность (фича) — в отдельной папке внутри `src/modules`.

```
src/
├── app/
│   └── store.js
├── mocks/
│   └── mock.js
├── modules/
│   └── todos/
│       ├── todos.jsx
│       ├── todo-add.jsx
│       ├── todo-item.jsx
│       └── todos.slice.js
├── App.jsx
└── main.jsx
```

## Запуск проекта

```
npm install
npm run dev
```
