export default [
    {
        path : "/curriculum",
        name : "Curriculum",
        component : () => import("../views/jie/curriculum")
    },
    {
        path : "/rollUp",
        name : "rollUp",
        component : () => import("../views/jie/rollUp")
    },
    {
        path : "/simulation",
        name : "simulation",
        component : () => import("../views/jie/simulation")
    },
    {
        path : "/Evaluation",
        name : "Evaluation",
        component : () => import("../views/jie/Evaluation")
    },
    {
        path : "/analysis",
        name : "analysis",
        component : () => import("../views/jie/analysis")
    },
    {
        path : "/follow",
        name : "follow",
        component : () => import("../views/jie/follow")
    },
]