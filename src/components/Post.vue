<script setup>
defineProps({
  post: Object
})
</script>

<template>
  <tr>
    <td>{{ post.id }}</td>
    <td>{{ post.title }}</td>
    <td>
      <button>O</button>
      <button>/</button>
      <button>X</button>
    </td>
  </tr>
</template>