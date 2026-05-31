<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  post: Object
})
</script>

<template>
  <tr>
    <td>{{ post.id }}</td>
    <td>{{ post.title }}</td>
    <td>
      <RouterLink :to="`/posts/${post.id}`">
        O
      </RouterLink>

      <button>/</button>
      <button>X</button>
    </td>
  </tr>
</template>