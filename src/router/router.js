import { createWebHistory, createRouter } from 'vue-router';
import TodoList from '../components/TodoList'
import LoginPage from '../components/LoginPage'
import SignUp from '../components/SignUp'

const routes = [
  {
    path: '/todos', component:TodoList
  },
  {
    path: '/login', component:LoginPage
  },
  {
    path: '/signup', component:SignUp
  },
//   {
//     path: '/1', component:FirstView
//   },
]; //라우팅 패스, 컴포넌트 등 정의

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router };