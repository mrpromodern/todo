import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

export function setupMock() {
  const mock = new AxiosMockAdapter(axios);

  let todos = [
    { id: crypto.randomUUID(), text: "Купить продукты", completed: false },
    {
      id: crypto.randomUUID(),
      text: "Позвонить родственникам",
      completed: false,
    },
    { id: crypto.randomUUID(), text: "Сходить в спортзал", completed: true },
    {
      id: crypto.randomUUID(),
      text: "Разобраться с FSD-архитектурой",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      text: "Посмотреть новый эпизод сериала",
      completed: true,
    },
  ];

  mock.onGet("/api/todos").reply(200, todos);

  mock.onPatch(/\/api\/todos\/[^/]+\/toggle/).reply((config) => {
    const id = config.url.match(/\/api\/todos\/([^/]+)\/toggle/)[1];

    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      return [200, todo];
    }
    return [404];
  });

  mock.onPost("/api/todos").reply((config) => {
    const { text } = JSON.parse(config.data);
    const newTodo = { id: crypto.randomUUID(), text, completed: false };
    todos.push(newTodo);
    return [201, newTodo];
  });

  mock.onDelete(/\/api\/todos\/\d+/).reply((config) => {
    const id = Number(config.url.split("/").pop());
    todos = todos.filter((t) => t.id !== id);
    return [200];
  });
}
