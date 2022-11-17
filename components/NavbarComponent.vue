<script setup>
import CartIcon from "~icons/fa6-solid/cart-shopping"
import HomeIcon from "~icons/fa6-solid/house"
import UserIcon from "~icons/fa6-solid/user"
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
                    <div class="navbar__profile">
                        <UserIcon class="navbar__profile-icon" />
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <div class="navbar__mobile">
        <NuxtLink to="/" class="navbar__mobile-item" :class="{ 'navbar-mobil-active' : $route.path === '/' }">
            <HomeIcon />
        </NuxtLink>
        <div class="navbar__mobile-item navbar__cart--mobile">
            <CartIcon />
            <div class="navbar__cart-badge cart-badge-mobile">0</div>
        </div>
        <div class="navbar__mobile-item">
            <UserIcon />
        </div>
    </div>
</template>
