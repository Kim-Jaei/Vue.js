import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import TodoList from '../components/TodoList.vue';
import AddTodo from '../components/AddTodo.vue';
import EditTodo from '../components/EditTodo.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/todos', component: TodoList },
  { path: '/todos/add', component: AddTodo },
  { path: '/todos/edit/:id', component: EditTodo, props: true },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
