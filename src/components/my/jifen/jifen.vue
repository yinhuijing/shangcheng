<style lang="less" scoped>
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
.jifen_box {
  width: 95%;
  height: 8rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  background: url(../../../assets/img/juxing.png) no-repeat 100% 100%;
  .jiesuan,
  .tixian {
    width: 30%;
    height: 100%;
    text-align: center;
    color: white;
  }
  .js_content,
  .tx_content {
    padding-top: 45%;
  }
  .tixian {
    float: right;
    margin-top: -8rem;
  }
}
.tx_button {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  box-shadow: 0.155rem 0.155rem 0.5rem skyblue;
  margin: -2rem auto;
  line-height: 4rem;
  text-align: center;
  font-size: 0.8rem;
  color: purple;
  background-color: #fff;
  opacity: 0.7;
}
</style>

<template>
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">我的积分</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="jifen_box">
      <div class="jiesuan">
        <div class="js_content">
          <div class="js_mum" style="margin-bottom:0.5rem;font-size:1rem">0</div>
          <div class="js_text">待结算的积分</div>
        </div>
      </div>
      <div class="tixian">
        <div class="tx_content">
          <div class="tx_mum" style="margin-bottom:0.5rem;font-size:1rem">0</div>
          <div class="tx_text">待提现的积分</div>
        </div>
      </div>
    </div>
    <div class="tx_button" @click="tixian">提现</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    tixian() {
      this.$router.push({ path: "/tixian" });
    },
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
  },
};
</script>