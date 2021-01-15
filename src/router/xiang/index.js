export default [
        {
            path: '/my',
            name: 'My',
            component: () => import('../../views/xiang/my/My.vue')
        },{
            path: '/exercise',
            name: 'Exercise',
            component: () => import('../../views/xiang/Exercise.vue')
        },{
            path: '/record',
            name: 'record',
            component: () => import('../../views/xiang/Record.vue')
        },
]
