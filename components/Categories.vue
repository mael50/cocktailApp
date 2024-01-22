<script setup>
import { listCategories } from '~/api/cocktails';
import translate from "translate"
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const categories = ref([]);

const splideOptions = {
    perPage: 5,
    perMove: 1,
    gap: '1rem',
    arrows: false,
    
};

onMounted(async () => {
    categories.value = await listCategories();
    for (let i = 0; i < categories.value.length-1; i++) {
        if (categories.value[i].strCategory === 'Shot' || categories.value[i].strCategory === 'Shake') {
            categories.value[i].strCategoryEN = categories.value[i].strCategory;
            continue;
        }
        categories.value[i].strCategoryEN = categories.value[i].strCategory.replaceAll(' ', '%20').replaceAll('/', '-');
        categories.value[i].strCategory = await translate(categories.value[i].strCategory, 'fr')
    }
});
</script>

<template>
    <h2 class="text-4xl font-bold mt-24 mb-8">Catégories</h2>
    <div class="categories-container">
        <Splide :options="splideOptions" class="splide mx-auto">
            <SplideSlide v-for="categorie in categories" :key="categorie.strCategory" class="categorie">
                <NuxtLink :to="`/categorie/${categorie.strCategoryEN}`" class="categorie-link">
                    <h2 class="text-2xl font-bold hover:text-primary">{{ categorie.strCategory }}</h2>
                </NuxtLink>
            </SplideSlide>
        </Splide>
    </div>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: #1a202c;
        --text-color: #fff;
    }
}

@media (prefers-color-scheme: light) {
    :root {
        --bg-color: #fff;
        --text-color: #000;
    }
}
</style>