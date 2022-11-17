export default defineNuxtRouteMiddleware(async (to, from) => {
    const pageId = to.params.id;
    const { data } = await useFetch(
        `https://63759fb27e93bcb006b5da11.mockapi.io/products/`
    );
    const exists = data.value.some((product) => product.id === pageId);

    if (!exists) return navigateTo("/404");
});
