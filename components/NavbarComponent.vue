<script setup>
import Swal from 'sweetalert2'
import CartIcon from "~icons/fa6-solid/cart-shopping"
import HomeIcon from "~icons/fa6-solid/house"
import UserIcon from "~icons/fa6-solid/user"

const fireSwal = () => {
    Swal.fire({
        title: 'Sorry!',
        text: 'The page is not available yet.',
        icon: 'error',
        confirmButtonText: 'Close'
    });
}
</script>

<template>
    <!-- Top Navbar -->
    <header class="header">
        <nav class="navbar container">
            <NuxtLink to="/" class="navbar__logo">Ever<span class="navbar__logo-log">Log</span></NuxtLink>
            <div class="navbar__menu">
                <button class="navbar__cart" @click="fireSwal">
                    <CartIcon class="navbar__cart-icon" />
                    <div class="navbar__cart-badge">0</div>
                </button>
                <div class="navbar__user">
                    <p class="navbar__greeting">
                        Hello, <span class="navbar__greeting-name">user</span>
                    </p>
                    <button class="navbar__profile" @click="fireSwal">
                        <UserIcon class="navbar__profile-icon" />
                    </button>
                </div>
            </div>
        </nav>
    </header>

    <!-- Bottom Navbar -->
    <div class="navbar__mobile">
        <NuxtLink to="/" class="navbar__mobile-item" :class="{ 'navbar-mobil-active' : $route.path === '/' }">
            <HomeIcon />
        </NuxtLink>
        <button class="navbar__mobile-item navbar__cart--mobile" @click="fireSwal">
            <CartIcon />
            <div class="navbar__cart-badge cart-badge-mobile">0</div>
        </button>
        <button class="navbar__mobile-item" @click="fireSwal">
            <UserIcon />
        </button>
    </div>
</template>
