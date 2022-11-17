<script setup>
const route = useRoute();
const { data, pending, errors } = await useFetch(`https://63759fb27e93bcb006b5da11.mockapi.io/products/${route.params.id}`, {
    server: true
});

const quantity = ref(1);
const currentImageIndex = ref(0);
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
                        v-for="(image, index) in data.images" @click="selectImage(index)">
                        <img :src="image" :alt="data.name" class="detail__image-img">
                    </button>
                </div>
            </div>
            <div class="detail__content">
                <h1 class="detail__title">{{ data.name }}</h1>
                <p class="detail__price">$ {{ data.price }}</p>
                <!-- <div class="detail__stats">
                                        <div class="detail__rate">
                                            <p class="detail__rate-star">Star</p>
                                            <p class="detail__rate-rating">5.0</p>
                                        </div>
                                        <p class="detail__sold"> | 300 Terjual</p>
                                    </div> -->
                <p class="detail__description">
                    {{data.description}}
                </p>

                <div class="detail__variant">
                    <p class="detail__variant-title">Color</p>
                    <div class="detail__variant-options">
                        <button class="detail__variant-option option-selected">
                            Red
                        </button>
                        <button class="detail__variant-option">Blue</button>
                        <button class="detail__variant-option">Green</button>
                    </div>
                </div>

                <div class="detail__variant">
                    <p class="detail__variant-title">Size</p>
                    <div class="detail__variant-options">
                        <button class="detail__variant-option">L</button>
                        <button class="detail__variant-option option-selected">
                            XL
                        </button>
                    </div>
                </div>

                <div class="detail__stock">
                    <div class="detail__available">
                        Stock:
                        <span class="detail__available-count">
                            {{ data.stock | '-' }}
                        </span>
                    </div>
                    <div class="detail__quantity">
                        <button class="detail__quantity-button" @click="decreaseQuantity"
                            :disabled="quantity < 1">&minus;</button>
                        <input v-model="quantity" type="text" class="detail__quantity-input" placeholder="1" />
                        <button class="detail__quantity-button" @click="increaseQuantity">&plus;</button>
                    </div>
                </div>

                <button class="detail__checkout">Checkout</button>
            </div>
        </div>
    </section>
</template>
