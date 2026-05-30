<script setup>
import { RouterLink } from 'vue-router'
import Post from './Post.vue'
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

      <Post />
    </table>
  </div>
</template>