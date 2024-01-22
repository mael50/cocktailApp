<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
    router.go(-1)
}
</script>

<template>
    <div class="my-4 bold back-button">
        <button @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 hover:text-gray-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </button>
    </div>
</template>

<style scoped>

.back-button button {
    background-color: transparent;
    border: none;
    outline: none;
}

.back-button button:hover {
    cursor: pointer;
}

.back-button button svg {
    width: 2rem;
    height: 2rem;
}

.back-button button svg path {
    stroke-width: 3;
}

.back-button button svg:hover {
    color: var(--text-color);
}

</style>