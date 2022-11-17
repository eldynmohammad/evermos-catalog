<script setup>
import ArrowLeftIcon from "~icons/fa6-solid/arrow-left-long"
import ArrowRightIcon from "~icons/fa6-solid/arrow-right-long"

const { data, pending, errors } = await useFetch('https://63759fb27e93bcb006b5da11.mockapi.io/products');

const banners = 3;
const bannerSelected = ref(0);
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

const nextBanner = () => {
    bannerSelected.value++;
    if (bannerSelected.value >= banners) return bannerSelected.value = 0;
}
const prevBanner = () => {
    bannerSelected.value--;
    if (bannerSelected.value < 0) return bannerSelected.value = banners - 1;
}
const selectCategory = (val) => {
    categorySelected.value = val;
}
</script>

<template>
    <div>
        <!-- Banner -->
        <section class="section container">
            <div class="banner">
                <div class="banner__content">
                    Banner no. {{ bannerSelected + 1 }}
                </div>
                <div class="banner__pagination">
                    <div class="banner__dot" :class="{ 'banner-active' : bannerSelected === index }"
                        v-for="(dot, index) in banners" :key="dot"></div>
                </div>
                <button class="banner__navigation banner__prev" @click.prevent="prevBanner">
                    <ArrowLeftIcon />
                </button>
                <button class="banner__navigation banner__next" @click.prevent="nextBanner">
                    <ArrowRightIcon />
                </button>
            </div>
        </section>
        
        <!-- Categories -->
        <section class="section container">
            <h1 class="section__title">Categories</h1>
            <div class="categories">
                <button class="categories__item" :class="{ 'category-active' : categorySelected === 'all' }"
                    @click.prevent="selectCategory('all')">All</button>
                <button class="categories__item" :class="{ 'category-active' : categorySelected === category }"
                    v-for="(category, index) in categories" :key="index" @click.prevent="selectCategory(category)">
                    {{ category }}
                </button>
            </div>
        </section>
        
        <!-- Product List -->
        <section class="section container">
            <h1 class="section__title">Product List</h1>
            <div class="products">
                <NuxtLink :to="`/product/${product.id}`" class="products__item" v-for="product in dataFiltered">
                    <div class="products__image">
                        <img v-show="product.images[0]" :src="product.images[0]" class="products__image-img"
                            :alt="product.name">
                    </div>
                    <div class="products__content">
                        <p class="products__title">{{ product.name }}</p>
                        <p class="products__price">{{ useRupiahFormat(product.price) }}</p>
                    </div>
                </NuxtLink>
            </div>
        </section>
    </div>
</template>
