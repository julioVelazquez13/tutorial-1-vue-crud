<script setup>
import { onMounted, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'
import Post from './Post.vue'

const state = reactive({
  posts: []
})

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/posts')
    state.posts = response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
})
</script>

<template>
  <div>
    <h1>All Post</h1>

    <RouterLink to="/">
      Go to Home
    </RouterLink>

    <br />
    <br />

    <table>
      <tr>
        <th>S.N</th>
        <th>Title</th>
        <th>Action</th>
      </tr>

      <Post
        v-for="post in state.posts"
        :key="post.id"
        :post="post"
      />
    </table>
  </div>
</template>