<script setup>
import CartIcon from "~icons/fa6-solid/cart-shopping"
</script>

<template>
    <header class="header">
        <nav class="navbar container">
            <NuxtLink to="/" class="navbar__logo">Ever<span class="navbar__logo-log">Log</span></NuxtLink>
            <div class="navbar__menu">
                <div class="navbar__cart">
                    <CartIcon class="navbar__cart-icon" />
                    <div class="navbar__cart-badge">0</div>
                </div>
                <div class="navbar__user">
                    <p class="navbar__greeting">
                        Hello, <span class="navbar__greeting-name">user</span>
                    </p>
                    <div class="navbar__profile">E</div>
                </div>
            </div>
        </nav>
    </header>
</template>
