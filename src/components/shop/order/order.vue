<style lang="less" scoped>
.order_box {
  width: 100%;
  background: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.header {
  width: 100%;
  height: 2.2rem;
  padding: 0 0.725314rem;
  font-size: 0.853333rem;
  border-bottom: 1px solid #eee;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .head_back_box {
    width: 0.7198rem;
    .head_back {
      width: 0.39975845rem;
      height: 0.7198rem;
      background: url(../../../assets/img/back3.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .head_title {
    flex: 1;
    text-align: center;
  }
  .head_home {
    width: 0.95942rem;
    height: 0.95942rem;
    background: url(../../../assets/img/home2.png) no-repeat;
    background-size: 100% 100%;
  }
}
.tab_title {
  width: 100%;
  height: 2.3rem;
  line-height: 2.34667rem;
  color: #666;
  background: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 2.2347826rem;
  z-index: 99;
  span {
    width: calc(100% / 5);
    font-size: 14px;
    display: inline-block;
    text-align: center;
    a {
      text-decoration: none;
      color: #000;
    }
    .router-link-active {
      color: #fe4070;
    }
  }
}
</style>
<template>
  <div class="order_box">
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div>
      <div class="head_title">我的订单</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="tab_title">
      <span v-for="(item,index) of secondNavBar" :key="index">
        <router-link :to="item.url">{{item.name}}</router-link>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secondNavBar: [
        {
          name: "全部",
          url: "/order/all/",
        },
        {
          name: "待付款",
          url: "/order/fukuai",
        },
        {
          name: "待发货",
          url: "/order/fahuo",
        },
        {
          name: "待收货",
          url: "/order/shouhuo",
        },
        {
          name: "待评价",
          url: "/order/pingjia",
        },
      ],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push({ path: "/shop" });
    },
  },
};
</script>