import AddForm from "./components/AddForm";

import ListToDo from "./components/ListTodo";


const routes = [
  { path: "/new", component: AddForm },
  // { path: "/list", component: ListToDo, props: { whatToDisplay: "all" } },
  // { path: "/done", component: ListToDo, props: { whatToDisplay: "done" } },
  // { path: "/todo", component: ListToDo, props: { whatToDisplay: "todo" } },
];

export default routes;
