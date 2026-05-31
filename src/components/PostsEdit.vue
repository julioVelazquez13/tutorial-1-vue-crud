<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const postId = route.params.id

const form = reactive({
  title: '',
  description: ''
})

onMounted(async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/posts/${postId}`
    )

    form.title = response.data.title
    form.description = response.data.description
  } catch (error) {
    console.error(error)
  }
})

const handleSubmit = async () => {
  const updatedPost = {
    title: form.title,
    description: form.description
  }

  try {
    const response = await axios.put(
      `http://localhost:3000/posts/${postId}`,
      updatedPost
    )

    router.push(`/posts/${response.data.id}`)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div>
    <h1>Edit Post</h1>

    <form @submit.prevent="handleSubmit">
      <label>Title</label>

      <br />

      <input
        v-model="form.title"
        type="text"
      />

      <br /><br />

      <label>Description</label>

      <br />

      <textarea
        v-model="form.description"
      ></textarea>

      <br /><br />

      <button type="submit">
        Update
      </button>
    </form>
  </div>
</template>