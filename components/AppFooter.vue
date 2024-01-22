<script setup>
let year = new Date().getFullYear()
</script>
<template>
    <footer>
        <div class="footer-container">
            <div class="footer-content">
                <h2>© {{ year }} - Maël Laroque</h2>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    height: 100px;
    background-color: var(--bg-color);
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>