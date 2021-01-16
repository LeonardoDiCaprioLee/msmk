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
const course = async function(){
    let { data } = await server.post('/api/app/teacher/mainCourse',{limit : 10,page : 1});
    return Promise.resolve(data)
}
const comment = async function(){
    let { data } = await server.post('/api/app/teacher/comment',{page : 1,limit : 10,teacher_id:254});
    return Promise.resolve(data)
}
const courseInfo = async function(){
    let { data } = await server.get('/api/app/courseInfo/basis_id=189');
    return Promise.resolve(data)
}
const collect = async function(){
    let { data } = await server.get('/api/app/collect?type=1');
    return Promise.resolve(data)
}
const myStudy = async function(){
    let { data } = await server.get('/api/app/myStudy/2');
    return Promise.resolve(data)
}

// 首页轮播图
const getBanners = async function () {
    let list = [
        {
            banner_img: "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg",
            link_content: "https://www.365msmk.com/oto/2",
            link_type: 0
        },
        {
            banner_img: "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg",
            link_content: "",
            link_type: 0,
        },
        {
            banner_img: "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg",
            link_content: "",
            link_type: 0,
        },
        {
            banner_img: "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20197Cxc53hktC1569839552.jpg",
            link_content: "",
            link_type: 0,
        }
    ]
    // var { data } = await server.get('https://www.365msmk.com/api/app/banner?')
    // 因为请求不到数据自己模拟数据
    return list
}

// 首页轮播图



// const getCurrData = async () => {
//     const data =  await server.get('https://new-api.meiqia.com/visit/get_base_config?ent_id=149768');
//     console.log(data)
// }

// 登录接口
const login = async function() {
    var {data} = await server.get('/small4/banner/list',{limit : 10})
    return Promise.resolve(data.data);
}


export {
    getBanners,
    // getCurrData,
    login,
    course,
    comment,
    courseInfo,
    collect,
    myStudy
}