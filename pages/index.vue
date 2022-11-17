<script setup>
const { data, pending, errors } = await useFetch('https://63759fb27e93bcb006b5da11.mockapi.io/products');
const categories = computed(() => {
    const list = [];
    data.value.forEach(product => list.push(product.category))
    const filtered = list.filter((item, index) => list.indexOf(item) === index);
    return filtered;
});
const categorySelected = ref('all');
const dataFiltered = computed(() => {
    if (categorySelected.value === 'all') return data.value;

    return data.value.filter((product) => categorySelected.value.toLowerCase() === product.category.toLowerCase());
});

const selectCategory = (val) => {
    categorySelected.value = val;
}
</script>

<template>
    <section class="section container">
        <div class="banner">
            <div class="banner__pagination">
                <div class="banner__dot banner-active"></div>
                <div class="banner__dot"></div>
            </div>
            <button class="banner__navigation banner__next">&raquo;</button>
            <button class="banner__navigation banner__prev">&laquo;</button>
        </div>
    </section>

    <section class="section container">
        <h1 class="section__title">Categories</h1>
        <div class="categories">
            <button class="categories__item" :class="{ 'category-active' : categorySelected === 'all' }"
                @click="selectCategory('all')">All</button>
            <button class="categories__item" :class="{ 'category-active' : categorySelected === category }"
                v-for="(category, index) in categories" :key="index" @click="selectCategory(category)">{{ category }}</button>
        </div>
    </section>

    <section class="section container">
        <h1 class="section__title">Product List</h1>
        <div class="products">
            <NuxtLink :to="`/product/${product.id}`" class="products__item" v-for="product in dataFiltered">
                <div class="products__image">
                    <img v-show="product.images[0]" :src="product.images[0]" class="products__image-img" :alt="product.name">
                </div>
                <div class="products__content">
                    <p class="products__title">{{ product.name }}</p>
                    <p class="products__price">{{ useRupiahFormat(product.price) }}</p>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>
