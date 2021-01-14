import server from '../server/http';

// 请求轮播图数据
// 获取数据
const getBanners = async function() {
    var {data} = await server.get('/small4/banner/list')
    return Promise.resolve(data.data);
}
// import {getBanners} from ''
// getBanners().then(res=>{
//      this.list = res
// })

export {
    getBanners,
}