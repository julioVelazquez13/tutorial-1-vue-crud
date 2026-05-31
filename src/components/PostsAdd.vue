<script setup>
import axios from 'axios'
import { reactive } from 'vue'
import router from '../router'

const form = reactive({
  title: '',
  description: ''
})

const handleSubmit = async () => {
  const newPost = {
    title: form.title,
    description: form.description
  }

  try {
    await axios.post(
      'http://localhost:3000/posts',
      newPost
    )

    router.push('/posts')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div>
    <h1>Add Post</h1>

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
        Save
      </button>
    </form>
  </div>
</template>