<script setup>
</script>

<template>
    <main class="w-11/12 mx-auto">
        <div class="desc">
            <p>Bienvenue sur ManyCocktails, le site qui vous permet de trouver des recettes de cocktails.</p>
            <p>Ce site est un projet personnel, il me permet de prendre en main le framework NuxtJS et de découvrir NuxtUI.</p>
            <p>Les données sont récupérées depuis l'API <a class="text-primary" href="https://www.thecocktaildb.com/api.php"
                    target="_blank">TheCocktailDB</a>.</p>
            <p>Le code source est disponible sur mon <a class="text-primary" href="https://github.com/mael501/manycocktails"
                    target="_blank">GitHub</a>.</p>
        </div>
        <Categories />
        <CocktailsCarrousel />
    </main>
</template>

<style scoped>
.desc {
    margin: 0 auto;
    max-width: 80vw;
    padding: 0 1rem;
}

.desc p {
    margin: 1rem 0;
    text-align: center;
    font-size: 1.2rem;
}
</style>