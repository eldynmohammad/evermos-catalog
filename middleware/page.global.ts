export default defineNuxtRouteMiddleware((to, from) => {
    // const getDepth = (path) => {
    //     return path.split("/").filter((seg) => seg.length > 0).length;
    // };
    to.meta.pageTransition = { name: "page" };
    from.meta.pageTransition = { name: "page" };
});
