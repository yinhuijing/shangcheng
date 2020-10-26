<style lang="less" scoped>
.col,
.row {
  width: 100%;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.row,
.ellipsis {
  white-space: nowrap;
}
.col-35,
.col-46,
.col458,
.col140 {
  -webkit-box-flex: 0;
}
.col-35 {
  flex: 0 0 1.09375rem;
  max-width: 1.09375rem;
}
.col-140 {
  flex: 0 0 4.375rem;
  max-width: 3.2rem;
}
.col-458 {
  flex: 0 0 14.3125rem;
  max-width: 10.5rem;
}
.item-content,
.bill {
  margin-top: 0.37rem;
  background-color: #fff;
}
.item_ellipis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 0.625rem;
}
.text-right {
  text-align: right;
}
.price-box {
  overflow: hidden;
}

.header {
  width: 100%;
  height: 2.2347826rem;
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
      background: url(../../../../assets/img/back3.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .head_title {
    flex: 1;
    text-align: center;
  }
}
.order_xq_box {
  background: #f5f5f5;
  position: absolute;
  left: 0;
  right: 0;
  padding-bottom: 3.125rem;
  z-index: 98;
  .detail {
    padding: 0.58rem;
    min-height: 3.05rem;
    background: #fff;
    padding-top: 0.73rem;
    margin-bottom: 0.49rem;
    .detail-title {
      font-size: 0.73rem;
      line-height: 0.73rem;
      text-align: left;
    }
    .row {
      .col {
        .detail-text {
          font-size: 0.48rem;
          line-height: 0.48rem;
          text-align: left;
          color: #999;
          margin-top: 0.5rem;
        }
      }
    }
  }
  .address {
    margin-bottom: 0.369rem;
    background: #fff;
    box-shadow: inset 0 -0.03125rem 0 0 #eee;
    font-size: 0.875rem;
    color: #333;
    padding: 0.46rem 0.554rem 0.554rem;
    .row {
      .col-35 {
        .address-location {
          width: 0.51rem;
          height: 0.715rem;
          text-align: right;
          vertical-align: middle;
        }
      }
      .address-left {
        padding-left: 0.2272rem;
        .address-name {
          font-size: 0.663rem;
          color: #333;
          text-align: left;
          .address-iphone {
            margin-left: 0.6rem;
          }
        }
        .address-full {
          font-size: 0.58rem;
          color: #333;
          line-height: 0.83rem;
          text-align: justify;
          margin-top: 0.276rem;
          vertical-align: bottom;
          white-space: pre-wrap;
        }
      }
      .address-right {
        text-align: center;
        width: 3rem;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 0.7rem;
        margin-top: 0.5rem;
        border: 1px solid rgb(254, 64, 112);
        color: rgb(254, 64, 112);
        border-radius: 0.4rem;
      }
    }
  }
  .item-content {
    background: transparent;
    .goods_info_item {
      padding: 0;
      .goods_box {
        padding: 0.554rem;
        .item_main {
          padding: 0.55rem 0 0.5rem;
          .item-img {
            width: 100%;
            max-height: 4.375rem;
          }
          .second_text {
            font-size: 0.75rem;
            color: #333;
            padding-top: 0.125rem;
            vertical-align: bottom;
          }
          .second_price {
            font-size: 0.5rem;
            color: #999;
            margin-top: 0.0625rem;
            vertical-align: bottom;
          }
        }
      }
    }
    .item {
      background-color: #fff;
      display: block;
    }
  }
  .total {
    border-top: 1px solid #eee;
    padding: 0.554rem;
    padding-top: 0;
    background: #fff;
    .total-row {
      padding-top: 0.554rem;
      .total-col {
        vertical-align: bottom;
      }
    }
  }
  .pay_list {
    margin-top: 0.5rem;
    background-color: #fff;
    font-size: 0.75rem;
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
        background: url(../../../../assets/img/dui2.png);
        background-size: 100% 100%;
      }
      .unchecked {
        background: url(../../../../assets/img/quan.png);
        background-size: 100% 100%;
      }
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  background: #fff;
  height: 2.26rem;
  z-index: 99;
  .footer_main {
    margin-top: 0.461rem;
    padding-right: 0.554rem;
    .zhifu_butn {
      border: 1px solid #fe4070;
      border-radius: 0.92rem;
      width: 3.42rem;
      height: 1.25rem;
      line-height: 1.15rem;
      font-size: 0.58rem;
      color: #fe4070;
    }
    .cancel_butn {
      border: 1px solid #e3e3e3;
      border-radius: 0.92rem;
      width: 3.8rem;
      height: 1.3rem;
      line-height: 1.2rem;
      font-size: 0.6rem;
      color: #333;
    }
  }
}
.box {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.box-rl {
  -webkit-box-direction: reverse;
  -webkit-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -webkit-box-orient: horizontal;
}
.zhifu_butn,
.cancel_butn {
  text-align: center;
  margin-left: 0.75rem;
  display: block;
  box-sizing: border-box;
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
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div>
      <div class="head_title">订单详情</div>
    </div>
    <div class="order_xq_box" style="top:2.2rem">
      <!-- 订单地址 -->
      <div class="address">
        <div class="row">
          <div class="col col-35">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAAAXNSR0IArs4c6QAABLJJREFUSA2llk1oXFUYhufejMkmkInVRcNQCdhsij8VqgEVjZQS0JouJKCpgWAyWRUUte2idGupFWNEMD9NREylwUVaXGgsjaIGasBWazZx4Q/SZCFNQjILm2TG5z0953LmZjqZSQ+c+b77fd/7vufnnnMnSGzRBgcHm4IgaMvn8wco3YVt4DmPP0//G38ymUxOdHV1/V6KKrhTcnh4eG8ulzsN8f471fhxBC+FYXi0u7v7qh93/iahqamp5Nzc3HsAjyCCCZawF7AXAM2mUqkbKysrwcbGxk6e95BrI6cZp7CY/IdNTU1vtrS0rDsR2QKhgYGBOoq/oFiz+A+/D/+d3t7eZR8U90dHR1Nra2vHqX2dXA24S/gv+bhIaHx8vGppaekrKzJfVVV1iGX4KU5a6pnlfpyZTlCzU2LMvrW9vX1DmNABFxcXzzgRYs2ViojHYppx58UlTsXVzIx4sx7F/5nkLewzTPmKktttbMETYL9jVtXYxzKZzLWkJTuFiET7i4koNzQ01I19jZo9FjML0dmenp5hrF73qIkDsX7q3yZ3ikRrwLo+yLrqDCzX1tY2dnR0LEYIHABa788APefHnU/uMrnDkOtcRW1sbKx+dXX1DwJ17PfuEJE2ZQFcjItAQPi2CPYfzskrlDaoy1dMA7A10YslPnERvyhfGlo6nXg1nZOCZpdLRBJ5hM2+6RV8zmp8zaH+RWKqJTfk5c3gyb1K7IDeugeUZHq/yfqNIu2JADrxvogpU0w5Pbhak7A/DO66dXdJSCc8UVNTU7DGtsBsPKP+1j5vMl7OvSRRjcfZEDIis7bZbLZgjaPqu3AcpzRCpvyXuLiBdxfhnFWMJXhWtljzcqbWr3Gc0tDSTSvJm9HqF8lnIGdlKTzNxt8r32+KKaeYq/XzHud0wDl5nuSX9OuchYf9Qkh0UHVBmjcPsqNuTzQTidDTxC9zcPdjCw4u3L/C9xD9hbC+vv4bnAUFSLRgoyYg7bCIRIjIOZI31OU7EVsTFxGXRBakEXK73oLoIwKa/luyftOJt6PNENcduGr7FeozysVvBeEdl7iNhoLM5D6Mrota+tMAf8Buu8H3FODv6RpUI3z/6mVIGCcMzZXOCN5V7G6a42Afz4hbXEZIDodLQgusdzOfDV0b22rCigPwguU0PJFQZ2dnlhEcU5TC90dGRu43FRX8CCOsIOISp4NHQgqwsZ9iJuk71tfXP1CskmYxO8BMWq4IXiCkaHV1dS9rnGVkL7OpOmNlNdUKI6w44qBNQvwR/JPiEyrEflzsRoiTqEa1FnNCHPGaTUIq4PrvBzjNCNNcI5/EQfFn1ahWGGHjeT0XFQKQs8ugb9BBluWNYmDFbO4gmJsWkytWW/LTwKv6ImB9edcgepJ/MzM+Cfl95H8kdg/5NvLm0+3XOL/ojFzSAvtERD/P6Otczvrnba6vlIgwJYVUwIV4jNHOMPJGrPlsKC7fxmZUo1ipVnLpHJBPRSO39VWe9d/8uOKI6P/aMgdzL2dG92TJVpaQGLRfmAkEzOcAQWEPbbVkwqptuXS3yxIJS3jSYoQ7Wa6I46jIMrNz6hWBKHb/vcvGpdPprrKLvcL/AdSrSmgKzujmAAAAAElFTkSuQmCC"
              class="address-location"
            />
          </div>
          <div class="col address-left">
            <div class="address-name">
              收件人: *萱
              <span class="address-iphone">138****6871</span>
            </div>
            <div class="address-full">北京市-市辖区-房山区 窦店镇下坡店北窦大路十二号</div>
          </div>
          <div class="col address-right">修改</div>
        </div>
      </div>
      <!-- 订单编号 -->
      <div class="detail">
        <div class="detail-title" style="color: rgb(254, 64, 112);">待付款</div>
        <div class="row">
          <div class="col">
            <div class="detail-text">
              <span>交易单号：c294061197176</span>
            </div>
            <div class="detail-text">
              下单时间：
              <span>2020-09-14 15:38</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 所有订单 -->
      <div class="item-content">
        <div>
          <div class="item goods_info_item">
            <div class="goods_box">
              <div class="item_main row">
                <div class="col-140 col">
                  <img
                    class="item-img"
                    data-src="http://p3.jmstatic.com/product/005/009/5009908_std/5009908_200_200.jpg"
                    src="http://p3.jmstatic.com/product/005/009/5009908_std/5009908_200_200.jpg"
                    lazy="loaded"
                  />
                </div>
                <div class="col-458 col">
                  <div class="second_text item_ellipis">【19年新版】 ESTEE LAUDER /雅诗兰黛 全新高能小棕瓶 20ML</div>
                  <div class="second_price item_ellipis" style="text-align:left">型号:20ml</div>
                </div>
                <div class="col price-box text-right">
                  <div class="second_text text-right">¥515</div>
                  <div class="second_price text-right">
                    x
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 订单金额 -->
      <div class="total">
        <div class="row total-row">
          <div
            class="col total-col"
            style=" color: rgb(153, 153, 153); font-size: 0.554rem; line-height: 0.554rem;text-align:left;"
          >商品总价</div>
          <div
            class="col total-col text-right"
            style="color: rgb(51, 51, 51); font-size: 0.554rem; line-height: 0.554rem;"
          >¥592</div>
        </div>
        <div class="row total-row">
          <div
            class="col total-col"
            style=" color: rgb(153, 153, 153); font-size: 0.554rem; line-height: 0.554rem;text-align:left;"
          >运费</div>
          <div
            class="col total-col text-right"
            style="color: rgb(51, 51, 51); font-size: 0.554rem; line-height: 0.554rem;"
          >+¥0</div>
        </div>
        <div class="row total-row">
          <div
            class="col total-col"
            style=" color: rgb(153, 153, 153); font-size: 0.554rem; line-height: 0.554rem;text-align:left;"
          >应付款</div>
          <div
            class="col total-col text-right"
            style="color: rgb(254, 64,112); font-size: 0.65rem; line-height: 0.65rem;"
          >¥592</div>
        </div>
      </div>
      <!-- 支付方式 -->
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
                <div class="jies">亿万用户的选择，更快更安全</div>
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
    </div>
    <div class="footer">
      <div class="footer_main">
        <div class="box box-rl">
          <div>
            <div class="zhifu_butn">立即支付</div>
          </div>
          <div>
            <div class="cancel_butn">取消订单</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>