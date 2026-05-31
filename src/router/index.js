import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Posts from '../components/Posts.vue'
import PostsAdd from '../components/PostsAdd.vue'
import PostsView from '../components/PostsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/posts/add',
    name: 'postsAdd',
    component: PostsAdd
  },
  {
  path: '/posts/:id',
  name: 'postsView',
  component: PostsView
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router