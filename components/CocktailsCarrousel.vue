<script setup>
import { lookupRandomCocktail } from '@/api/cocktails'
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import translate from "translate"
import { useRouter } from 'vue-router'

translate.engine

const cocktails = ref([])

const splideOptions = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '2rem',
    lazyLoad: 'nearby',
    breakpoints: {
        768: {
            perPage: 1,
            perMove: 1,
        }
    }
}

const router = useRouter()

onMounted(async () => {
    for (let i = 0; i < 10; i++) {
        const cocktail = await lookupRandomCocktail()
        cocktail.strInstructions = await translate(cocktail.strInstructions, 'fr')
        cocktails.value.push(cocktail)
    }
})

</script>
<template>
    <div class="carrousel">
        <h2 class="text-4xl font-bold mt-24 mb-2">Sélection de cocktails au hasard</h2>
        <p class="text-xl mb-5 text-gray-300 italic">Voici une sélection de cocktails au hasard, cliquez sur un cocktail pour
            en savoir plus.</p>
        <Splide v-if="cocktails.length !== 0" :options="splideOptions">
            <SplideSlide v-for="cocktail in cocktails" :key="cocktail.idDrink">
                <NuxtLink :to="`/cocktail/${cocktail.idDrink}`">
                <div class="cocktail-slide">
                    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink"/>
                    <div class="cocktail-overlay">
                        <h2>{{ cocktail.strDrink }}</h2>
                    </div>
                </div>
                </NuxtLink>
            </SplideSlide>
        </Splide>
    </div>
</template>

<style scoped>
.carrousel {
    margin: 50px auto;
}
.cocktail-slide {
    position: relative;
    transition: transform 0.3s ease;
}

.cocktail-slide:hover {
    transform: scale(1.1);
}

.cocktail-slide img {
    width: 100%;
    height: auto;
    filter: brightness(40%);
}

.cocktail-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    font-size: 24px;
}

.cocktail-overlay h2 {
    font-weight: 800;
}
</style>