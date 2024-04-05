<script setup>
const props = defineProps(['posts'])
</script>

<template>
  <div v-for="post in props.posts" :key="post.slug"
    class="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:opacity-90 transition-all duration-450 cursor-pointer ">
    <NuxtLink :to="post._path">
      <img :src="`/images/blog/${post.cover}`" alt="Blog Post Cover Image" class="w-full h-48 object-cover">
    </NuxtLink>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
      <p class="text-gray-700 mb-4">{{ post.description }}</p>
      <NuxtLink :to="post._path"
        class="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded float-right mb-8 transition-all duration-450 cursor-pointer">En savoir plus
      </NuxtLink>
    </div>
  </div>
</template>