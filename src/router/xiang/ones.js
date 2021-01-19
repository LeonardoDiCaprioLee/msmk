const add = [
    { // 登录路由
        path: '/login',
        name: 'Login',
        component: () => import('../../views/xiang/login/Login.vue')
    },
    { // 注册路由
      path: "/register",
      name: "Register",
      component: () => import("@/views/xiang/login/Register.vue")
    },
    { // 优惠券路由
      path: "/discount",
      name: "Discount",
      component: () => import("@/views/xiang/my/Discount.vue")
    },
    { // 设置路由
      path: "/reset",
      name: "Reset",
      component: () => import("@/views/xiang/my/Reset.vue")
    },
    { // 修改密码路由
      path: "/resetpass",
      name: "Resetpass",
      component: () => import("@/views/xiang/login/ResetPass.vue")
    },
    { // 绑定手机号路由
      path: "/bindingNumber",
      name: "BindingNumber",
      component: () => import("@/views/xiang/login/BindingNumber.vue")
    },
    { // 用户信息路由
      path: "/userinfo",
      name: "Userinfo",
      component: () => import("@/views/xiang/login/Userinfo.vue")
    },
    { // 用户信息路由
      path: "/setUser",
      name: "SetUser",
      component: () => import("@/views/xiang/resetUser/SetUser.vue")
    },
    { // 修改性别路由
      path: "/sex",
      name: "Sex",
      component: () => import("@/views/xiang/resetUser/Sex.vue")
    },
    { // 修改用户名路由
      path: "/resetNikename",
      name: "ResetNikename",
      component: () => import("@/views/xiang/resetUser/ResetNikename.vue")
    },
    { // 修改用户名路由
      path: "/collect",
      name: "Collect",
      component: () => import("@/views/xiang/my/Collect.vue")
    },
    {
        path : "/follow",
        name : "follow",
        component : () => import("@/views/jie/follow")
    },
]
export {
    add
}
    

