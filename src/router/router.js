import { createWebHistory, createRouter } from 'vue-router';
import TodoList from '../components/TodoList'
import LoginPage from '../components/LoginPage'
import SignUp from '../components/SignUp'

const routes = [
  {
    path: '/', component:LoginPage
  },
  {
    path: '/todos', component:TodoList
  },
  {
    path: '/login', component:LoginPage
  },
  {
    path: '/signup', component:SignUp
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router };