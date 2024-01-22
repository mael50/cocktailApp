<script setup>
import { listNonAlcoholicCocktails } from '@/api/cocktails'

const cocktails = ref([])
const isLoading = ref(true)

onMounted(async () => {
    cocktails.value = await listNonAlcoholicCocktails()
    isLoading.value = false
})
</script>

<template>
    <main>
        <h2 class="text-4xl font-bold mb-8">Cocktails Sans Alcool</h2>
        <ul>
            <NuxtLink v-for="cocktail in cocktails" :to="`/cocktail/${cocktail.idDrink}`" :key="cocktail.idDrink">
                <li class="cocktail-item">
                    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" class="cocktail-image">
                    <div class="cocktail-overlay">
                        <h2>{{ cocktail.strDrink }}</h2>
                    </div>
                </li>
            </NuxtLink>
        </ul>
    </main>
</template>

<style scoped>
main {
    width: 84%;
    margin: 0 auto;
}

ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
}

.cocktail-item {
    width: 300px;
    height: 300px;
    margin: 1rem;
    position: relative;
}

.cocktail-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.cocktail-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.cocktail-item:hover .cocktail-overlay {
    opacity: 1;
}

.cocktail-overlay h2 {
    font-weight: 800;
    font-size: 1.5rem;
    color: white;
}

@media (max-width: 768px) {
    main {
        width: 100%;
    }

    .cocktail-item {
        width: 100%;
        height: 200px;
    }
}
</style>