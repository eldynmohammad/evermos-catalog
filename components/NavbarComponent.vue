<script setup></script>

<template>
    <header class="header">
        <nav class="navbar container">
            <div class="navbar__logo">Logo</div>
            <div class="navbar__search">
                <input
                    type="text"
                    class="navbar__search-input"
                    placeholder="Search product"
                />
            </div>
            <div class="navbar__menu">
                <div class="navbar__cart">
                    <div class="navbar__cart-badge">2</div>
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
