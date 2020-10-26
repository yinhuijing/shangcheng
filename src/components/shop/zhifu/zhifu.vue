<style lang="less" scoped>
div {
  color: inherit;
}
a {
  text-decoration: none;
}
.clearfix {
  display: block;
}
.zhifu {
  .header {
    height: 2.2347826rem;
    padding: 0 0.725314rem;
    font-size: 0.853333rem;
    border-bottom: 1px solid #eee;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .content {
    .summary {
      background: #fff;
      height: 2.3466184rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.426667rem 0 0.26667rem 0;
      span {
        font-size: 0.746667rem;
        color: #333;
        margin-left: 0.85333rem;
      }
    }
    .need_pay {
      height: 2.8798rem;
      border-bottom: 1px solid #eee;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      div {
        font-size: 0.746667rem;
        line-height: 1.06666rem;
        color: #333;
        margin-left: 0.85333rem;
        text-align: left;
      }
    }
    .pay_list {
      background-color: #fff;
      .pay_item_box {
        margin: 0 0.64rem;
        border: 0;
        .pay_item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 2.8798rem;
          div {
            display: flex;
            align-items: center;
            margin-left: 0.213333rem;
            font-size: 0.75rem;
            img {
              width: 1.3rem;
              height: 1.3rem;
            }
          }
        }
        .checked_box {
          width: 0.9rem;
          height: 0.9rem;
          margin-right: 0.21333rem;
          float: right;
          margin-top: -42px;
        }
        .chacked {
          background: url(../../../assets/img/dui2.png);
          background-size: 100% 100%;
        }
        .unchecked {
          background: url(../../../assets/img/quan.png);
          background-size: 100% 100%;
        }
      }
    }
    .pay_butn {
      border-radius: 1.5625rem;
      width: 15rem;
      height: 2.25rem;
      color: #fff;
      font-size: 0.875rem;
      line-height: 2.25rem;
      text-align: center;
      margin: 1.5rem auto;
      letter-spacing: 0.0625rem;
      background-color: #fe4070;
    }
  }
}
.jies {
  font-size: 0.5rem;
  color: #999;
  max-width: 16.8125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
<template>
  <div class="zhifu">
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div>
      <div class="head_title">支付</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="content">
      <div class="summary">
        <span>订单金额</span>
        <span style="color:#fe4070;margin-right:0.85333rem;">¥747</span>
      </div>
      <div class="need_pay">
        <div>
          <span>选择支付方式</span>
        </div>
      </div>
      <div class="pay_list">
        <div class="pay_item_box">
          <div class="pay_item">
            <div>
              <img
                src="https://p2.jmstatic.com/static/static_cart_mobile/images/cashier/zhifubao.png"
                alt
              />
              <div>
                <div>支付宝</div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="checked_box chacked"></div>
        </div>
        <div class="pay_item_box">
          <div class="pay_item">
            <div>
              <img
                src="https://p2.jmstatic.com/static/static_cart_mobile/images/cashier/weixin.png"
                alt
              />
              <div>
                <div>微信支付</div>
                <div class="jies" style="font-size:0.5rem">亿万用户的选择，更快更安全</div>
              </div>
            </div>
          </div>
          <div class="checked_box unchecked"></div>
        </div>
        <div class="pay_item_box">
          <div class="pay_item">
            <div>
              <img
                src="https://p2.jmstatic.com/static/static_cart_mobile/images/cashier/group.png"
                alt
              />
              <div>
                <div>到货付款</div>
                <div class="jies"></div>
              </div>
            </div>
          </div>
          <div class="checked_box unchecked"></div>
        </div>
      </div>
      <div class="pay_butn">去支付</div>
    </div>
  </div>
</template>
<script>
export default {
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