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

.money_box {
  width: 100%;
  height: 6rem;
  background: url(../../../assets/img/main_03.png) no-repeat 50% 50%;
  .money_main {
    height: 100%;
    line-height: 6rem;
    font-size: 1rem;
    width: 30%;
    margin: 0 auto;
  }
}

.jf_zj {
  height: 5rem;
  ul {
    height: 100%;
    list-style: none;
    li {
      width: 50%;
      height: 5rem;
      font-size: 0.8rem;
      text-align: center;
      float: left;
      padding-top: 1rem;
      box-sizing: border-box;
    }
  }
}

.money_list {
  width: 100%;
  height: 4rem;
  margin-top: 1rem;
  ul {
    height: 100%;
    li {
      height: 50%;
      border-bottom: 1px solid #eee;
      display: flex;
      .left_box {
        flex-direction: column;
        margin-left: 0.5rem;
        line-height: 2rem;
        img {
          width: 1rem;
          height: 1rem;
          margin-right: 0.3rem;
        }
      }
      .right_box {
        flex: 1;
        img {
          float: right;
          margin-right: 0.5rem;
          margin-top: 0.8rem;
          display: block;
          width: 0.3rem;
          height: 0.5rem;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">账户信息</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="money_box">
      <div class="money_main">
        0
        <span>元</span>
      </div>
    </div>

    <div class="jf_zj">
      <ul>
        <li>
          <div class="djs_jf" style="margin-bottom: 0.5rem">待结算积分</div>
          <div class="djs_num">0</div>
        </li>
        <li>
          <div class="dtx_jf" style="margin-bottom: 0.5rem">待提现积分</div>
          <div class="dtx_num">0</div>
        </li>
      </ul>
    </div>

    <div class="money_list">
      <ul>
        <li @click="go_yuan">
          <div class="left_box">
            <img src="../../../assets/img/yemx.png" alt />
            <a href="###">元明细</a>
          </div>
          <div class="right_box">
            <a href="###"><img src="../../../assets/img/8.png" alt /></a>
          </div>
        </li>
        <li @click="go_jifen">
          <div class="left_box">
            <img src="../../../assets/img/jfmx.png" alt />
            <a href="###">积分明细</a>
          </div>
          <div class="right_box">
            <a href="###"><img src="../../../assets/img/8.png" alt /></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
    go_jifen() {
      this.$router.push({ path: "/jifen" });
    },
    go_yuan() {
      this.$router.push({ path: "/yue" });
    },
  },
};
</script>