import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const r = [{
    path: '/helloworld',
    name: 'HelloWorld',
    component: require('../components/my/HelloWorld.vue').default
}, {
    path: '/jifen',
    name: 'jifen',
    component: require('../components/my/jifen/jifen.vue').default
}, {
    path: '/tixian',
    name: 'tixian',
    component: require('../components/my/jifen/tixian/tixian.vue').default,
}, {
    path: '/jifen_xq',
    name: 'jifen_xq',
    component: require('../components/my/jifen_xq/jifen_xq.vue').default
}, {
    path: '/yue',
    name: 'yue',
    component: require('../components/my/yue/yue.vue').default,
}, {
    path: '/recharge',
    name: 'recharge',
    component: require('../components/my/yue/recharge/recharge.vue').default,
}, {
    path: '/xianzhi',
    name: 'xianzhi',
    component: require('../components/my/xianzhi/xianzhi.vue').default
}, {
    path: '/add_xianzhi',
    name: 'add_xianzhi',
    component: require('../components/my/xianzhi/add_xianzhi/add_xianzhi.vue').default
}, {
    path: '/edit_xianzhi',
    name: 'edit_xianzhi',
    component: require('../components/my/xianzhi/edit_xianzhi/edit_xianzhi.vue').default
}, {
    path: '/index',
    name: 'index',
    component: require('../components/index/index.vue').default,

}, {
    path: '/jianzhi',
    name: 'jianzhi',
    component: require('../components/index/jianzhi/jianzhi.vue').default,
}, {
    path: '/play',
    name: 'play',
    component: require('../components/index/play/play.vue').default,
}, {
    path: '/play_xq',
    name: 'play_xq',
    component: require('../components/index/play/play_xq/play_xq.vue').default,
}, {
    path: '/all_xianzhi',
    name: 'all_xianzhi',
    component: require('../components/index/all_xianzhi/all_xianzhi.vue').default,
}, {
    path: '/xz_xq',
    name: 'xz_xq',
    component: require('../components/index/all_xianzhi/xz_xq/xz_xq.vue').default,
}, {
    path: '/logo',
    name: 'logo',
    component: require('../components/index/logo/logo.vue').default,
}, {
    path: '/logo_xq',
    name: 'logo_xq',
    component: require('../components/index/logo/logo_xq/logo_xq.vue').default,
}, {
    path: '/share',
    name: 'share',
    component: require('../components/share/share.vue').default
}, {
    path: '/shop',
    name: 'shop',
    component: require('../components/shop/shop.vue').default,

}, {
    path: '/order',
    name: 'order',
    component: require('../components/shop/order/order.vue').default,
    redirect: '/order/all', // 设置子路由默认选中
    children: [{
        path: '/order/all',
        name: "全部",
        component: require('../components/shop/order/all/all.vue').default,
    }, {
        path: '/order/fukuai',
        name: "待付款",
        component: require('../components/shop/order/fukuai/fukuai.vue').default,
    }, {
        path: '/order/fahuo',
        name: "待发货",
        component: require('../components/shop/order/fahuo/fahuo.vue').default,
    }, {
        path: '/order/shouhuo',
        name: "待收货",
        component: require('../components/shop/order/shouhuo/shouhuo.vue').default,
    }, {
        path: '/order/pingjia',
        name: "待评价",
        component: require('../components/shop/order/pingjia/pingjia.vue').default,
    }]
}, {
    path: '/order_xq',
    name: 'order_xq',
    component: require('../components/shop/order/order_xq/order_xq.vue').default
}, {
    path: '/buycar',
    name: 'buycar',
    component: require('../components/shop/buycar/buycar.vue').default,
}, {
    path: '/good2',
    name: 'good',
    component: require('../components/shop/good/good.vue').default,

}, {
    path: '/address',
    name: 'address',
    component: require('../components/shop/position/address.vue').default
}, {
    path: '/edit_position',
    name: 'edit_position',
    component: require('../components/shop/position/edit_position/edit_position.vue').default
}, {
    path: '/add_position',
    name: 'add_position',
    component: require('../components/shop/position/add_position/add_position.vue').default
}, {
    path: '/pay',
    name: 'pay',
    component: require('../components/shop/pay/pay.vue').default,
}, {
    path: '/zhifu',
    name: 'zhifu',
    component: require('../components/shop/zhifu/zhifu.vue').default
}, {
    path: '/money',
    name: 'money',
    component: require('../components/shop/money/money.vue').default,
}, {
    path: '/setup',
    name: 'setup',
    component: require('../components/setup/setup.vue').default
}, {
    path: '/setmima',
    name: '/setmima',
    component: require('../components/setup/setmima/setmima.vue').default
}, {
    path: '/setiphone',
    name: '/setiphone',
    component: require('../components/setup/setiphone/setiphone.vue').default
}, {
    path: '/add_school',
    name: '/add_school',
    component: require('../components/setup/add_school/school.vue').default
}, {
    path: '*',
    redirect: '/index'
}]

const router = new VueRouter({
    mode: "history",
    routes: r
})

export default router;