<script setup>
import { filterByCategory } from '@/api/cocktails'
import translate from "translate"

const { params } = useRoute()

const cocktails = ref([])
const isLoading = ref(true)

let category = params.slug
// remplace le - par un / pour la requête
category = category.replaceAll('-', '/')

onMounted(async () => {
    await fetchCocktails()
})

async function fetchCocktails() {
    isLoading.value = true
    cocktails.value = await filterByCategory(category)
    category = await translate(category, 'fr')
    isLoading.value = false
}

</script>

<template>
    <Loader v-if="isLoading" />
    <main v-else>
        <BackButton class="text-primary" />
        <h2 class="text-4xl font-bold mb-8">{{ category }}</h2>
        <ul class="cocktails-list">
            <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
                <NuxtLink :to="`/cocktail/${cocktail.idDrink}`">
                    <div class="cocktail-slide">
                        <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink"/>
                        <div class="cocktail-overlay">
                            <h2>{{ cocktail.strDrink }}</h2>
                        </div>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </main>
</template>

<style scoped>
main {
    width: 84%;
    margin: 0 auto;
}
.cocktails-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
}

.cocktail-slide {
    width: 300px;
    height: 300px;
    margin: 1rem;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: var(--bg-color);
}

.cocktail-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.cocktail-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}

.cocktail-overlay h2 {
    font-weight: 800;
    font-size: 1.5rem;
    margin-top: 40%;
}

.cocktail-slide:hover {
    cursor: pointer;
    transform: scale(1.1);
}

</style>