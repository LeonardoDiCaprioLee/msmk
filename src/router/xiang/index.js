export default [
        {
            path: '/my',
            name: 'My',
            component: () => import('../../views/xiang/My.vue')
        },{
            path: '/exercise',
            name: 'Exercise',
            component: () => import('../../views/xiang/Exercise.vue')
        },
]
