<script setup>
const links = [
    { name: 'GitHub', href: 'https://github.com/Raphael-Estrade',  icon: 'entypo-social:github-with-circle' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rapha%C3%ABl-estrade-ba379b2b0/',  icon: 'entypo-social:linkedin-with-circle' },
]
</script>

<template>
    <footer class="bg-black">
        <section class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row">
            <p class="flex-1">&copy; Estrade Raphaël. Tous droits réservés</p>
                <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
                    <a v-for="link in links" :key="link.name" :href="link.href">
                        <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
                    </a>
                </div>
        </section>
    </footer>
</template>