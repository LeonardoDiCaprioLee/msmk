// 子路由
export default [
    // 主页
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/jun/index.vue')
    },
    // 考点专练
    {
        path: '/site',
        name: 'site',
        component: () => import('../views/jun/site.vue')
    },
    // 测评记录
    {
        path: '/Wrong',
        name: 'Wrong',
        component: () => import('../views/jun/Wrong.vue')
    },
    {
        path: '/Collection',
        name: 'Collection',
        component: () => import('../views/jun/Collection.vue')
    },
    {
        path: '/Detailspage',
        name: 'Detailspage',
        component: () => import('../views/jun/Detailspage.vue')
    },
   
]

