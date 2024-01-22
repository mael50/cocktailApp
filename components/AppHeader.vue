<script setup>
import { searchCocktailByName } from '@/api/cocktails'
const q = ref('')
const colorMode = useColorMode();

const cocktails = ref([])

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
});

watch(q, async (newValue) => {
    if (newValue.length > 2) {
        cocktails.value = await searchCocktailByName(newValue)
    } else {
        cocktails.value = []
    }
})

</script>

<template>
    <header>
        <RouterLink to="/">
            <img v-if="colorMode.value !== undefined && colorMode.value === 'dark'" src="~/assets/logo_dark.svg"
                alt="Logo ManyCocktails" loading="lazy" />
            <img v-else-if="colorMode.value !== undefined && colorMode.value === 'light'" src="~/assets/logo_light.svg"
                alt="Logo ManyCocktails" loading="lazy" />
        </RouterLink>
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
            <div class="search">
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
                <div class="suggestions" v-if="q.length > 0">
                    <div v-if="q.length > 2 && cocktails.length === 0" class="loading">
                        <UText>Loading...</UText>
                    </div>
                    <div v-else-if="q.length > 2 && cocktails.length > 0">
                        <div class="suggestions-container">
                            <RouterLink v-for="cocktail in cocktails" :to="`/cocktail/${cocktail.idDrink}`"
                                :key="cocktail.idDrink" class="suggestion" @click="q = ''">
                                <h4 class="text-lg font-bold">{{ cocktail.strDrink }}</h4>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
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

.search {
    position: relative;
}

.suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f2f2f2;
    color: #333;
    padding: 0.5rem;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.suggestions h4{
    font-size: 0.8rem;
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