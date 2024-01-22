<script setup>
import { listCategories } from '~/api/cocktails';

const categories = ref([]);

onMounted(async () => {
    categories.value = await listCategories();
    console.log(categories.value);
});
</script>

<template>
    <h2 class="text-4xl font-bold mt-24 mb-2">Catégories</h2>
    <div class="categories-container">
        <div class="categorie" v-for="categorie in categories" :key="categorie.strCategory">
            <NuxtLink :to="`/categorie/${categorie.strCategory}`">
                <div class="categorie-content">
                    <h2>{{ categorie.strCategory }}</h2>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.categories-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 80vw;
}

.categorie {
    width: 100%;
    height: 200px;
    margin: 1rem;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: var(--bg-color);
}

.categorie-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.categorie-content h2 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-color);
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.categorie:hover {
    cursor: pointer;
    transform: scale(1.1);
}

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