<script setup>
definePageMeta({
    middleware: 'check'
});

const route = useRoute();
const { data, pending, errors } = await useFetch(`https://63759fb27e93bcb006b5da11.mockapi.io/products/${route.params.id}`);

const quantity = ref(1);
const currentImageIndex = ref(0);
const currentVariant = ref(data.value.variants[ 0 ].options[ 0 ]);

const selectImage = (val) => {
    currentImageIndex.value = val;
}
const increaseQuantity = () => {
    quantity.value++;
    if (quantity.value >= data.value.stock) quantity.value = data.value.stock
}
const decreaseQuantity = () => {
    quantity.value--;
    if (quantity.value < 1) quantity.value = 1;
}
watch(() => quantity.value, value => {
    if (value === '' | value === 0 | value === undefined | value === null) value = 1;
    if (value >= data.value.stock) quantity.value = data.value.stock;
})
</script>

<template>
    <section class="section">
        <div class="container detail">
            <div class="detail__images">
                <div class="detail__image image-thumbnail">
                    <img :src="data.images[currentImageIndex]" :alt="data.name" class="detail__image-img">
                </div>
                <div class="detail__images-smalls">
                    <button class="detail__image" :class="{ 'image-selected' : currentImageIndex === index }"
                        v-for="(image, index) in data.images" @click.prevent="selectImage(index)">
                        <img :src="image" :alt="data.name" class="detail__image-img">
                    </button>
                </div>
            </div>
            
            <div class="detail__content">
                <h1 class="detail__title">{{ data.name }}</h1>
                <p class="detail__price">{{ useRupiahFormat(data.price) }}</p>
                <p class="detail__description">
                    {{data.description}}
                </p>

                <div class="detail__variant" v-for="variant in data.variants" :key="variant">
                    <p class="detail__variant-title">{{ variant.name }}</p>
                    <div class="detail__variant-options">
                        <button class="detail__variant-option" :class="{ 'option-selected' : currentVariant === option }"
                            v-for="option in variant.options" :key="option" @click.prevent="currentVariant = option">
                            {{ option }}
                        </button>
                    </div>
                </div>

                <div class="detail__stock">
                    <div class="detail__available">
                        Stock:
                        <span class="detail__available-count" :class="{ 'available-low' : data.stock <= 10 }">
                            {{ data.stock | '-' }}
                        </span>
                    </div>
                    <div class="detail__quantity">
                        <button class="detail__quantity-button" @click.prevent="decreaseQuantity"
                            :disabled="quantity < 1">&minus;</button>
                        <input v-model.number="quantity" type="number" class="detail__quantity-input" placeholder="1" />
                        <button class="detail__quantity-button" @click.prevent="increaseQuantity">&plus;</button>
                    </div>
                </div>

                <button class="detail__checkout">Checkout</button>
            </div>
        </div>
    </section>
</template>
