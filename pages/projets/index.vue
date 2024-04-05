<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/projets').find()
)
</script>

<template>
        <h1 class="text-5xl font-bold my-10">Projets</h1>
   <p class="text-lg py-2 mt-2">Vous pourrez trouver sur cette page tout mes projets. Cela regroupe mes travaux effectués lors de ma formation que ce soit en milieu professionnel ou scolaire.</p> 
  
    <section class="grid md:grid-cols-3 mt-16 gap-10 mb-16">
    <Post :posts="posts" />
  </section>
</template>