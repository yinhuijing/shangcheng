<style lang="less" scoped>
.row,
.box {
  display: flex;
}
.col,
.row {
  width: 100%;
}
.row,
.ellipsis {
  white-space: nowrap;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
}
.order-id,
.order-text {
  font-size: 0.5rem;
  line-height: 2.25rem;
  height: 2.25rem;
}
.col-180 {
  flex: 0 0 5.625rem;
  max-width: 5.625rem;
}
.col-180,
.col-200,
.col-120,
.col-140,
.col-458,
.col-35,
.col46 {
  -webkit-box-flex: 0;
}
.col-140 {
  flex: 0 0 3.2rem;
  max-width: 3.2rem;
}
.col-458 {
  flex: 0 0 10.5rem;
  max-width: 10.5rem;
}
.col-46 {
  flex: 0 0 1.227rem;
  max-width: 1.227rem;
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
.order-border-default,
.order-border-checked {
  width: 0.7rem;
  height: 0.7rem;
  vertical-align: middle;
  outline: none;
  background-repeat: no-repeat;
  background-size: 100%;
  display: inline-block;
  margin-bottom: 0.11rem;
  background-position: 50%;
}
.box-r1,
.box-1r {
  -webkit-box-orient: horizontal;
}

.content_box {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 98;
  .order_content {
    border-bottom: 1px solid #eee;
    border-top: 0.5rem solid #f5f5f5;
    color: #333;
    background: #fff;
    .row {
      .order-id {
        color: #999;
        padding-left: 0.75rem;
        .row-align {
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          .order-border {
            position: relative;
            .order-border-default {
              background-image: url(../../../../assets/img/default.png);
            }
            .order-border-checked {
              background-image: url(../../../../assets/img/checked.png);
            }
          }
        }
      }
      .row_right {
        padding-right: 0.75rem;
        text-align: right;
      }
    }
  }
}

.row_main {
  border-top: 1px solid #eee;
  .row_item {
    background: #fff;
    padding: 0 0.55rem;
    display: block;
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
.heji {
  border-top: 1px solid #eee;
  box-sizing: border-box;
  .status-span {
    height: 2.3125rem;
    line-height: 2.3125rem;
    padding-right: 0.75rem;
  }
  .status-nav {
    padding: 0 0.65rem;
    height: 2.1rem;
    .box-r1 {
      -webkit-box-direction: reverse;
      flex-direction: row-reverse;
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
}
.zhifu_butn,
.cancel_butn {
  text-align: center;
  margin-left: 0.75rem;
  display: block;
  box-sizing: border-box;
}
</style>

<template>
  <div class="content_box" style="top:4.5rem">
    <div class="order_content" style="border-top: none;" @click="order_xq">
      <!-- 订单编号 -->
      <div class="row">
        <div class="order-id ellipsis col">
          <div class="row row-align">
            <div class="col col-46 order-border">
              <span class="order-border-checked order-border-click"></span>
            </div>
            <div class="ellipsis">
              <span>交易单号 1153275198</span>
            </div>
          </div>
        </div>
        <div class="row_right col order-text col-180" style="color: rgb(254, 64, 112);">待付款</div>
      </div>
      <!-- 订单内容 -->
      <div class="row_main">
        <div class="row_item">
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
      <div class="heji">
        <div class="row">
          <div class="col text-right status-span">
            <span
              class="status-span-child"
              style="color: rgb(153, 153, 153); font-size: 0.65rem;"
            >共 1 件</span>
            <span
              class="status-span-child"
              style="color: rgb(153, 153, 153); font-size: 0.65rem;"
            >合计</span>
            <span class="status-span-child" style="color: rgb(51, 51, 51); font-size: 0.75rem;">¥515</span>
          </div>
        </div>
        <div class="status-nav">
          <div class="box box-r1">
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
    <div class="order_content" @click="order_xq">
      <!-- 订单编号 -->
      <div class="row">
        <div class="order-id ellipsis col">
          <div class="row row-align">
            <div class="col col-46 order-border">
              <span class="order-border-default order-border-click"></span>
            </div>
            <div class="ellipsis">
              <span>交易单号 1153275198</span>
            </div>
          </div>
        </div>
        <div class="row_right col order-text col-180" style="color: rgb(254,64,112);">待付款</div>
      </div>
      <!-- 订单内容 -->
      <div class="row_main">
        <div class="row_item">
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
      <div class="heji">
        <div class="row">
          <div class="col text-right status-span">
            <span
              class="status-span-child"
              style="color: rgb(153, 153, 153); font-size: 0.65rem;"
            >共 1 件</span>
            <span
              class="status-span-child"
              style="color: rgb(153, 153, 153); font-size: 0.65rem;"
            >合计</span>
            <span class="status-span-child" style="color: rgb(51, 51, 51); font-size: 0.75rem;">¥515</span>
          </div>
        </div>
        <div class="status-nav">
          <div class="box box-r1">
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    order_xq() {
      this.$router.push({ path: "/order_xq" });
    },
  },
};
</script>