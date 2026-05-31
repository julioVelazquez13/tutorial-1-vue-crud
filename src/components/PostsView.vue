<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const postId = route.params.id

const state = reactive({
  post: {}
})

onMounted(async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/posts/${postId}`
    )

    state.post = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div>
    <h1>{{ state.post.title }}</h1>

    <p>
      {{ state.post.description }}
    </p>
  </div>
</template>