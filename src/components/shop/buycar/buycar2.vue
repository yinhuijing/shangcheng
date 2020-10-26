<style lang="less" scoped>
.box {
  font-size: 0.75rem;
}
.car-length-a {
  display: block;
  width: 100%;
  text-align: center;
  padding-top: 4rem;
  img {
    display: block;
    margin: 0 auto;
    width: 4.13rem;
  }
  p {
    text-align: center;
    margin: 1rem 0;
    color: #999999;
    font-size: 0.4rem;
  }
  span {
    padding: 0.2rem 0.5rem;
    display: inline-block;
    margin: 0 auto;
    background: #301de6;
    color: #fff;
    border-radius: 5px;
    font-size: 0.8rem;
  }
}
.header {
  height: 2.2rem;
  padding: 0 0.725314rem;
  font-size: 0.853333rem;
  border-bottom: 1px solid #eee;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .head_back_box {
    .head_back {
      width: 0.5rem;
      height: 0.9rem;
      background: url(../../../assets/img/back3.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .head_title {
    flex: 1;
    text-align: center;
    font-size: 0.8rem;
  }
  .head_home {
    width: 1rem;
    height: 1rem;
    background: url(../../../assets/img/home.png) no-repeat;
    background-size: 100% 100%;
  }
}
.van-card__thumb {
  margin-right: 0;
}
.van-card__content {
  padding-left: 1rem;
  text-align: left;
}
</style>

<template>
  <div class="box">
    <!-- 购物车为空时 -->
    <!-- <div class="car-length-a">
      <img src="../../assets/img/cars.png" alt />
      <p>购物车空空如也，赶紧去逛逛吧</p>
      <span>去看看</span>
    </div>-->
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">购物车</div>
      <div class="head_home" @click="home"></div>
    </div>
    <van-card
      v-for="(item,index) in carList"
      :key="index"
      :num="item.num"
      :price="item.price"
      desc="描述信息"
      :title="item.title"
      :thumb="item.img"
    />
    <van-submit-bar :price="3050" :button-text="submitBarText" @submit="onSubmit" />
  </div>
</template>

<script>
import buycar_list from "../../../../data/buycar";
export default {
  name: "buycar",
  data() {
    return {
      carList: [],
    };
  },
  beforeMount() {
    this.fun();
  },
  methods: {
    onSubmit() {
      console.log("提交订单");
      this.$router.push({ path: "/pay" });
    },
    fun() {
      this.carList = buycar_list.buycar_list;
      console.log(this.carList);
    },
    home() {
      this.$router.push({ path: "/shop" });
    },
    go_back() {
      this.$router.go(-1);
    },
  },
  computed: {
    submitBarText() {
      return "结算";
    },
  },
};
</script>