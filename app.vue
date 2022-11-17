<script setup>
useHead({
    title: 'EverLog',
    meta: [
        { name: 'description', content: 'Everlog Website.' }
    ],
});
</script>

<template>
    <div>
        <NuxtLoadingIndicator />
        <div class="page-layout">
            <NavbarComponent />
            <main class="page-full">
                <NuxtPage />
            </main>
            <FooterComponent />
        </div>
    </div>
</template>