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

const getCurrData = async () => {
    const data =  await server.get('https://new-api.meiqia.com/visit/get_base_config?ent_id=149768');
    console.log(data)
}

export {
    getBanners,
    getCurrData
}