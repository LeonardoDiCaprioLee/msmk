// 外部路由
export default [
    // 日历
    {
        path: '/calendar',
        name: 'calendar',
        component: () => import('../views/jun/calendar.vue')
    },
    // 给我们留言
    {
        path: '/message',
        name: 'message',
        component: () => import('../views/jun/message.vue')
    },
    {
        path: '/wuliao',
        name: 'wuliao',
        component: () => import('../views/jun/wuliao.vue')
    },
    {
        path: '/vip',
        name: 'vip',
        component: () => import('../views/jun/VIP.vue')
    },
]