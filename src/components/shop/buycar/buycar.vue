<style lang="less" scoped>
.page_box {
  padding-bottom: 2.613333rem;
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
  div.no_goods {
    display: none;
    .no_goods_box {
      flex: 1;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      .no_goods_pic {
        width: 4.58637681rem;
        height: 4.3731884rem;
        background: url(../../../assets/img/no_goods.png) no-repeat;
        background-size: 100% 100%;
      }
      .empty_cart {
        font-size: 0.74667rem;
        line-height: 0.8rem;
        color: #333;
        margin-top: 0.853233rem;
        padding: 0 0.64rem;
        text-align: center;
      }
      .go_stroll {
        width: 6.6667rem;
        height: 1.919662rem;
        border-radius: 1.06667rem;
        color: #fff;
        background: #fe4070;
        line-height: 1.92rem;
        text-align: center;
        margin-top: 1.22667rem;
        font-size: 0.702rem;
      }
    }
  }
  .group {
    margin-bottom: 0.42667rem;
    background: #fff;
    .group_item {
      display: none;
      box-sizing: border-box;
      padding: 0 0.5rem 0 0.5rem;
      // .check_shop {
      //   display: block;
      //   background: url(../../assets/img/dui.png) no-repeat;
      //   background-size: 100% 100%;
      //   width: 1.0664251rem;
      //   height: 1.0664251rem;
      //   margin-top: 2.4rem;
      // }
      .item_content {
        display: flex;
        .img_wrap {
          flex-direction: column;
          flex: 0.4;
          // width: 4.47947rem;
          // height: 4.47947rem;
          margin: 0.5rem 0;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .text_wrap {
          margin-left: 0.53333rem;
          margin-top: 0.42667rem;
          flex: 1;
          .title {
            display: block;
            width: 100%;
            height: 1.5rem;
            color: #333;
            line-height: 1.5rem;
            text-align: left;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 2;
            word-break: break-all;
          }
          .sub_title {
            margin-top: 0.1rem;
            line-height: 1rem;
            height: 1rem;
            color: #999;
            display: flex;
            justify-content: space-between;
            span {
              display: block;
              max-width: 12.1875rem;
              font-size: 0.6875rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .price_wrap {
            height: 1.5rem;
            line-height: 1.5rem;
            margin-top: 0.1rem;
            display: flex;
            .price {
              width: 10.7198rem;
              display: block;
              font-size: 0.8rem;
              color: #fe4070;
              flex-direction: column;
              flex: 1;

              text-align: left;
            }
            .edit {
              display: block;
              flex: 1;
              text-align: right;
            }
            .editing {
              width: 8.7198rem;
            }
            .actions {
              display: flex;
              align-items: center;
              .gap_line {
                display: inline-block;
                background: url(../../../assets/img/line.png) no-repeat;
                width: 1px;
                height: 0.6667rem;
                background-size: 100% 100%;
                margin-left: 0.32rem;
                margin-right: 0.32rem;
              }
            }
          }
          .add_reduce_box {
            margin-top: 0.1rem;
            height: 1.5rem;
            line-height: 1.5rem;
            display: flex;
            align-items: center;
            .decrease,
            .increase {
              display: block;
              width: 1.2rem;
              height: 1.2rem;
            }
            .decrease {
              background: url(../../../assets/img/jian.png) no-repeat;
              background-size: 100% 100%;
            }
            .increase {
              background: url(../../../assets/img/jia.png) no-repeat;
              background-size: 100% 100%;
            }
            span:nth-child(2) {
              width: 1.5rem;
              height: 1.2rem;
              line-height: 1.2rem;
              color: #333;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .submit_bottom {
    height: 2.61289855rem;
    background: #fff;
    box-shadow: 0 0 0.15625rem #eee;
    padding: 0 0 0 0.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .sub_info {
      width: 60%;
      height: 100%;
      display: flex;
      align-items: center;
      // .checkbox {
      //   display: block;
      //   // background: url(/dist/dui2.png?2f12bb3…) no-repeat;
      //   background-size: 100% 100%;
      //   width: 1.0664251rem;
      //   height: 1.0664251rem;
      // }
      // .all_check {
      //   font-size: 0.746667rem;
      //   color: #333;
      //   margin-left: 0.64rem;
      // }
      .summary {
        width: 100%;
        height: 100%;
        padding: 0.5rem 0 0.5rem 1rem;
        text-align: left;
        box-sizing: border-box;
        font-size: 0.75rem;
        color: #999;
        display: flex;
        flex-direction: column;
        div {
          height: 100%;
          display: flex;
          align-items: center;
          .red {
            font-size: 0.9rem;
            margin-left: 0.26667rem;
            color: #fe4070;
          }
        }
      }
    }
    .submit_butn {
      width: 40%;
      height: 100%;
      a {
        width: 85%;
        height: 70%;
        margin-left: 7.5%;
        margin-top: 5%;
        font-size: 0.746667rem;
        color: #fff;
        background: #fe4070;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.06667rem;
      }
    }
  }
}
</style>
<template>
  <div class="page_box">
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">购物车</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="no_goods">
      <div class="no_goods_box">
        <div class="no_goods_pic"></div>
        <div class="empty_cart">
          您的购物车中没有商品，请先去挑选心爱的商品吧！
        </div>
        <div class="go_stroll" @click="guang">去逛逛</div>
      </div>
    </div>
    <div class="groups">
      <div class="group" v-for="(item, index) in carList" :key="index">
        <div class="group_item">
          <span class="check_shop" @click="xuanz_box"></span>
          <div class="item_content">
            <div class="img_wrap">
              <img :src="item.img" alt />
            </div>
            <div class="text_wrap" v-if="isShow">
              <span class="title">{{ item.title }}</span>
              <div class="sub_title">
                <span>商品规格</span>
                <span>×{{ item.num }}</span>
              </div>
              <div class="price_wrap">
                <span class="price">¥{{ item.price }}</span>
                <span class="edit" @click="isShow = !isShow">编辑</span>
              </div>
            </div>
            <div class="text_wrap" v-else>
              <span class="title">{{ item.title }}</span>
              <div class="add_reduce_box">
                <span class="decrease" @click="jian"></span>
                <span>{{ item.num }}</span>
                <span class="increase"></span>
              </div>
              <div class="price_wrap">
                <span class="price editing">¥{{ item.price }}</span>
                <div class="actions">
                  <span>删除</span>
                  <span class="gap_line"></span>
                  <span @click="success">完成</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="submit_bottom">
      <div class="sub_info">
        <!-- <span class="checkbox"></span>
        <span class="all_check">全选</span> -->
        <div class="summary">
          <div>
            <span>合计</span>
            <span class="red">¥20</span>
          </div>
        </div>
      </div>
      <div class="submit_butn">
        <a href="###" @click="jiesuan">去结算<span>(<span>20</span>)</span></a>
      </div>
    </div>
  </div>
</template>
<script>
import buycar_list from "../../../../data/buycar.js";
import $ from "jquery";
export default {
  data() {
    return {
      isShow: true,
      carList: [],
    };
  },
  beforeMount() {
    this.fun();
  },
  methods: {
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
    success() {
      this.isShow = !this.isShow;
    },
    fun() {
      this.carList = buycar_list.buycar_list;
    },
    xuanz_box() {
      $(".check_shop").css(
        "background-image",
        "url(../../../assets/img/ding.png)"
      );
    },
    jiesuan() {
      console.log("结算");
      this.$router.push({ path: "/pay" });
    },
    change_page() {
      if (this.carList.length == "") {
        $(".no_goods").css("display", "block");
      } else {
        $(".group_item").css("display", "block");
      }
    },
    guang() {
      this.$router.push({ path: "/shop" });
    },
  },
  mounted() {
    this.change_page();
  },
};
</script>