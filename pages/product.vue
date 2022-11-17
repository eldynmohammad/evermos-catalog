<script setup></script>

<template>
    <section class="section">
        <div class="container detail">
            <div class="detail__images">
                <div class="detail__image"></div>
                <div class="detail__images-smalls">
                    <div class="detail__image"></div>
                    <div class="detail__image"></div>
                    <div class="detail__image"></div>
                </div>
            </div>

            <div class="detail__content">
                <h1 class="detail__title">Product Name</h1>
                <p class="detail__price">Rp. 18.000</p>
                <!-- <div class="detail__stats">
                            <div class="detail__rate">
                                <p class="detail__rate-star">Star</p>
                                <p class="detail__rate-rating">5.0</p>
                            </div>
                            <p class="detail__sold"> | 300 Terjual</p>
                        </div> -->
                <p class="detail__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa tenetur cum necessitatibus dignissimos rem repellat
                    iste veritatis veniam molestias iusto blanditiis rerum nobis
                    et dicta, tempore delectus cumque sint labore dolor beatae
                    nam. Expedita tenetur laboriosam perspiciatis suscipit,
                    provident praesentium unde quisquam blanditiis aliquam hic
                    amet nam debitis, facere facilis!
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

                <div class="detail__quantity">
                    <button class="detail__quantity-button">&minus;</button>
                    <input
                        type="text"
                        class="detail__quantity-input"
                        value="1"
                    />
                    <button class="detail__quantity-button">&plus;</button>
                </div>

                <button class="detail__checkout">Checkout</button>
            </div>
        </div>
    </section>
</template>
