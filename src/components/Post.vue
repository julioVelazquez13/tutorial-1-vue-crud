<script setup>
import axios from 'axios'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  post: Object
})

const deletePost = async (postId) => {
  try {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this post?'
    )

    if (confirmDelete) {
      await axios.delete(
        `http://localhost:3000/posts/${postId}`
      )

      router.push('/posts')

      window.location.reload()
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <tr>
    <td>{{ post.id }}</td>
    <td>{{ post.title }}</td>

    <td>
      <RouterLink :to="`/posts/${post.id}`">
        O
      </RouterLink>

      <RouterLink :to="`/posts/edit/${post.id}`">
        /
      </RouterLink>

      <button @click="deletePost(post.id)">
        X
      </button>
    </td>
  </tr>
</template>