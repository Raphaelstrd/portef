<script setup>
const { data: posts } = await useAsyncData('latest-posts', () =>
  queryContent('/projets')
    .sort({ data: 1 })
    .limit(3)
    .find()
)


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';

import './style.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const modules = [EffectCards];

</script>

<template>
    <section>
        <h1 class="text-5xl font-bold mt-20">Raphaël Estrade </h1>
        <p class="text-base text-gray-900 p-2 italic">Bienvenue sur mon portefolio,</p>
    </section>
    <section class="flex flex-col md:flex-row">
       <div class="md:w-3/4">
        <h2 class="text-3xl font-bold mt-12 mb-10">A propos</h2>

            <p class="text-lg py-2">
                Je suis âgé de 20 ans et actuellement étudiant en deuxième année BTS SIO option SLAM (Solutions Logicielles et Applications Métier) au lycée Suzanne Valadon à Limoges.<br><br>
                J'ai toujours été passionné par l'informatique et grâce à mon choix d'option, de développement.
            </p>

            <p class="text-lg py-2">
                Je souhaite poursuivre mes études en Bachelor en alternance. Cela me permettrait d'acquérir de nombreuses compétences supplémentaires et de me plonger dans le monde du travail 
            </p>
       </div> 
       <img src="~/assets/Pink-Floyd.png" class="w-1/2 md:max-w-sm p-8 mx-auto">

    </section>

    <section>


    <h2 class="text-3xl font-bold my-20">Compétences</h2>

    <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="~/assets/html5.png" class="w-2/3 hover:scale-105 transition-all duration-450"></swiper-slide>
    <swiper-slide><img src="~/assets/css.png" class="w-1/2 hover:scale-105 transition-all duration-450"></swiper-slide>
    <swiper-slide><a href="https://www.php.net/"><img src="~/assets/php.png" class="hover:scale-105 transition-all duration-450"></a></swiper-slide>
    <swiper-slide><a href="https://www.python.org/"><img src="~/assets/python.png" class="hover:scale-105 transition-all duration-450"></a></swiper-slide>
    <swiper-slide><a href="https://symfony.com/"><img src="~/assets/symfony.png" class="w-1/2 ml-16 hover:scale-105 transition-all duration-450"></a></swiper-slide>
    <swiper-slide><a href="https://dev.java/"><img src="~/assets/java.png" class="w-1/3 ml-20 hover:scale-105 transition-all duration-450"></a></swiper-slide>
    <swiper-slide><a href="https://nuxt.com/"><img src="~/assets/nuxt.png" class="w-40 hover:scale-105 transition-all duration-450"></a></swiper-slide>
    <swiper-slide><a href="https://tailwindcss.com/"><img src="~/assets/tailwind.svg" class="w-40 hover:scale-105 transition-all duration-450"></a></swiper-slide>


  </swiper>

  <p class="text-lg py-2 mt-16">J'ai acquis lors de ma formation de l'expérience dans des langages de programmation web comme le html, php , css. Des langages orientés objet comme le Java ou encore Symfony, un framework php . 
    J'ai également développé par ma propre initiative ce portefolio avec le framework Nuxt basé sur Vue.js et Node.js.</p>
  <p class="text-lg py-2"></p>

  </section>

  <section>
    <h2 class="text-3xl font-bold my-16">BTS SIO</h2>
    <p class="text-lg">Le BTS SIO, abréviation de "Services Informatiques aux Organisations", est un diplôme de l'enseignement supérieur français. Il forme des étudiants dans le domaine de l'informatique et spécifiquement en tant qu'administrateur réseau ou développeur.
      La suite de la formation peut directement conduire dans le monde tu travail mais elle permet également une poursuite d'étude comme un Bachelor ou une Licence. Le BTS SIO se divise en deux options :</p>
      

      
      <p class="text-lg py-2 font-bold mt-8">Option "Solutions d'infrastructure, systèmes et réseaux" (SISR) :</p>
      
      <p class="text-lg py-2 ">Cette option forme des techniciens spécialisés dans la gestion, la maintenance et l'administration des infrastructures informatiques, des systèmes et des réseaux.</p>

      <p class="text-lg py-2 font-bold mt-8">Option "Solutions logicielles et applications métiers" (SLAM) : </p> 
    
      <p class="text-lg py-2 ">Cette option forme des techniciens spécialisés dans le développement, la programmation et la maintenance des logiciels applicatifs répondant aux besoins des organisations.</p>
  </section>

    <section>
        
        <h2 class="text-3xl font-bold mt-16">Derniers projets</h2>
        <div class="grid md:grid-cols-3 pt-8 gap-10 mt-10">
            <Post :posts="posts" />
        </div>
    </section>
    <p class="mt-16"></p>
    
</template>

