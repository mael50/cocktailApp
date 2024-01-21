<script setup>
const q = ref('')

const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
});
</script>

<template>
    <header>
        <img v-if="isDark" src="~/assets/logo_dark.svg" alt="Logo ManyCocktails" />
        <img v-else src="~/assets/logo_light.svg" alt="Logo ManyCocktails" />
        <nav>
            <ULink to="/alcoholic" active-class="text-primary"
                inactive-class="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                style="font-size: 1.2rem;"
                >
                Alcoolisées
            </ULink>
            <ULink to="/non-alcoholic" active-class="text-primary"
                inactive-class="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                style="font-size: 1.2rem;"
                >
                Sans alcool
            </ULink>
        </nav>
        <div class="right">
            <UInput v-model="q" name="q" placeholder="Rechercher..." icon="i-heroicons-magnifying-glass-20-solid"
                autocomplete="off" :ui="{ icon: { trailing: { pointer: '' } } }" style="
                    background-color: #f2f2f2; 
                    color: #333;
                    ">
                <template #trailing>
                    <UButton v-show="q !== ''" color="gray" variant="link" icon="i-heroicons-x-mark-20-solid"
                        :padded="false" @click="q = ''" />
                </template>
            </UInput>
            <ClientOnly>
                <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
                    variant="ghost" aria-label="Theme" @click="isDark = !isDark" />

                <template #fallback>
                    <div class="w-8 h-8" />
                </template>
            </ClientOnly>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3rem;
}

img {
    width: 15rem;
    height: 15rem;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10rem;
}

.right {
    display: flex;
    align-items: center;
    gap: 2rem;
}
</style>