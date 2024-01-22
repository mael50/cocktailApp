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
        <img v-if="colorMode.value !== undefined && colorMode.value === 'dark'" src="~/assets/logo_dark.svg"
            alt="Logo ManyCocktails" loading="lazy" />
        <img v-else-if="colorMode.value !== undefined && colorMode.value === 'light'" src="~/assets/logo_light.svg"
            alt="Logo ManyCocktails" loading="lazy" />
        <nav>
            <ULink to="/alcoholic" active-class="text-primary"
                inactive-class="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                style="font-size: 1.2rem; font-weight: 800;">
                Alcoolisées
            </ULink>
            <ULink to="/non-alcoholic" active-class="text-primary"
                inactive-class="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                style="font-size: 1.2rem; font-weight: 800;">
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

.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    font-size: 1.2rem;
    font-weight: 600;
}

@media (max-width: 768px) {
    header {
        flex-direction: column;
        margin: 0 1rem;
    }

    img {
        width: 10rem;
        height: 10rem;
        margin-bottom: 1rem;
    }

    nav {
        flex-direction: column;
        gap: 1rem;
    }

    .right {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>