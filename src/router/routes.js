let routes = [
    {
        path:"/home",
        component:()=>import("../components/homePage.vue")
    },
    {
        path:"/fenlei",
        component:()=>import("../components/classification.vue")
    },
    {
        path:"/xq",
        component:()=>import("../components/details.vue")
    },
    {
        path:"/land",
        component:()=>import("../components/land.vue")
    },
    {
        path:"/",
        component:()=>import("../components/homePage.vue"),
    }
]


export default routes;