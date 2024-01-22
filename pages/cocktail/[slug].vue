<script setup>
import { lookupCocktailById } from '@/api/cocktails'
import translate from "translate"

const { params } = useRoute()

const cocktailId = params.slug
const cocktail = ref({})
const ingredients = ref([])

cocktail.value = await lookupCocktailById(cocktailId)

cocktail.value.strInstructions = await translate(cocktail.value.strInstructions, 'fr')
if (cocktail.value.strCategory === 'Shot' || cocktail.value.strCategory === 'Shake') {

} else {
cocktail.value.strCategory = await translate(cocktail.value.strCategory, 'fr')
}
cocktail.value.strGlass = await translate(cocktail.value.strGlass, 'fr')

if(cocktail.value.strAlcoholic === 'Alcoholic') {
    cocktail.value.strAlcoholic = 'Alcoolisée'
} else {
    cocktail.value.strAlcoholic = 'Sans alcool'
}

for (let i = 1; i <= 15; i++) {
    if (cocktail.value[`strIngredient${i}`] !== null) {
        ingredients.value.push({
            name: cocktail.value[`strIngredient${i}`],
            measure: cocktail.value[`strMeasure${i}`]
            })
    }
}

</script>

<template>
    <div class="w-11/12 mx-auto">
        <BackButton class="mb-8 text-primary" />
        <h1 class="text-4xl font-bold mb-8">{{ cocktail.strDrink }}</h1>
        <div class="mb-16 flex flex-wrap gap-2">
            <UBadge size="lg" :ui="{ rounded: 'rounded-full' }">{{  cocktail.strAlcoholic }}</UBadge>
            <UBadge size="lg" :ui="{ rounded: 'rounded-full' }">{{  cocktail.strCategory }}</UBadge>
            <UBadge size="lg" :ui="{ rounded: 'rounded-full' }">{{  cocktail.strGlass }}</UBadge>
        </div>
        
        <div class="photo-ingredients">
            <img :src="cocktail.strDrinkThumb" alt="Cocktail Image" class="mb-10 w-full md:w-1/2">
            <div class="ingredients-instructions">
                <div class="ingredients">
                    <h2 class="text-2xl font-bold mb-5 text-primary">Ingrédients</h2>
                    <ul>
                        <li v-for="ingredient in ingredients" :key="ingredient.name" class="ingredient-item">
                            <span class="font-bold">{{ ingredient.name }}</span> : {{ ingredient.measure }}
                        </li>
                    </ul>
                </div>
                <div class="instructions">
                    <h2 class="text-2xl font-bold mb-5 text-primary">Instructions</h2>
                    <p>{{ cocktail.strInstructions }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.photo-ingredients {
    display: flex;
    flex-wrap: wrap;
}

h1 {
    font-size: 4rem;
}

.ingredients-instructions {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: 2rem;
}

.ingredients h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}
.ingredient-item {
    margin: 0.5rem 0;
    font-size: 1.2rem;
}

.instructions h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

.instructions p {
    font-size: 1.2rem;
}

@media (min-width: 768px) {
    .photo-ingredients {
        flex-wrap: nowrap;
    }
    .ingredients-instructions {
        margin-left: 4rem;
    }
}
</style>