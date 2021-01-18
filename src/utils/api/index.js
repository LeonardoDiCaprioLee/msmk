import server from '../server/http';

// 获取数据
// const getBanners = async function() {
//     var {data} = await server.get('/small4/banner/list')
//     return Promise.resolve(data.data);
// }
// import {getBanners} from ''
// getBanners().then(res=>{
//      this.list = res
// })

// 课程数据
const courseBasis = async function(){
    let { data } = await server.get('/api/app/courseBasis?page=1&limit=10&');
    return Promise.resolve(data)
}

// 首页轮播图
const getBanners = async function () {
    // let list = [
    //     {
    //         banner_img: "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg",
    //         link_content: "https://www.365msmk.com/oto/2",
    //         link_type: 0
    //     },
    //     {
    //         banner_img: "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg",
    //         link_content: "",
    //         link_type: 0,
    //     },
    //     {
    //         banner_img: "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg",
    //         link_content: "",
    //         link_type: 0,
    //     },
    //     {
    //         banner_img: "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20197Cxc53hktC1569839552.jpg",
    //         link_content: "",
    //         link_type: 0,
    //     }
    // ]
    var { data } = await server.get('/api/app/banner')
    // console.log(data)
    // 因为请求不到数据自己模拟数据
    return data
}

// 首页轮播图

// 获取首页列表
const get_indexlist=async function(){
    var {data} = await server.get('/api/app/recommend/appIndex');
    console.log(data)
    return data
}
// 获取首页列表

// const getCurrData = async () => {
//     const data =  await server.get('https://new-api.meiqia.com/visit/get_base_config?ent_id=149768');
//     console.log(data)
// }

// 登录接口


// const login = async function () {
//     var { data } = await server.get('/small4/banner/list')
// const login = async function() {
//     var {data} = await server.get('/small4/banner/list',{limit : 10})

// }
const login = async function(obj) {
    var {data} = await server.post('/api/app/login?mobile='+obj.mobile+'&password='+obj.password+'&type='+obj.type)
    return Promise.resolve(data);
}
// 注册接口
const BindingNumber = async function(obj) {
    var {data} = await server.post('/api/app/smsCode?mobile='+obj.mobile+'&sms_type='+obj.sms_type)
    return Promise.resolve(data.data);
}
// 修改密码接口
const ResetPasss = async function(obj) {
    var {data} = await server.post('/api/app/password')
    console.log(data);

    return Promise.resolve(data.data);
}
// 个人信息接口
const Personal = async function() {
    var {data} = await server.get('/api/app/userInfo')
    return Promise.resolve(data.data);
}
// 个人信息修改接口
// const Personal = async function() {
//     var {data} = await server.get('/api/app/user')
//     return Promise.resolve(data.data);
// }


// 首页列表数据详情
const indexdettails =async function(id){
    var {data}=await server.get(`/api/app/teacher/info/${id}`)
    console.log(data)
    return data
}
export {
    getBanners,
    // getCurrData,
    login,
    get_indexlist,
    indexdettails,
    courseBasis,
    BindingNumber,
    ResetPasss,
    Personal
}
