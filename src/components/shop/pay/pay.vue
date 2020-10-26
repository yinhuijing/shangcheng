<style lang="less" scoped>
.page {
  padding-bottom: 5.49333rem;
  font-size: 0.75rem;
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
  .no_address {
    display: flex;
    height: 5.49333rem;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .address_icon {
      width: 3.199855rem;
      height: 3.413043rem;
      background-image: url(../../../assets/img/dizhi.png);
      background-size: 100% 100%;
    }
    .address_text {
      margin-top: 0.32rem;
      a {
        color: #fe4070;
      }
    }
  }
  .autn_box {
    background: #fcf6e6 url(../../../assets/img/xian.png) no-repeat center bottom;
    background-size: 100% 0.25rem;
    padding: 0.96rem 0.64rem;
    display: flex;
    flex-direction: column;
    .autn_head {
      line-height: 0.746667rem;
      .autn_text {
        font-size: 0.64rem;
        line-height: 0.8rem;
        color: #333;
        max-width: 14.4rem;
        text-align: left;
      }
      .icon_box {
        position: relative;
        img {
          width: 0.506667rem;
          height: 0.5331884rem;
          position: absolute;
          left: 0.26667rem;
          top: 0.2133333rem;
        }
      }
    }
    .autn_content {
      display: flex;
      justify-content: space-between;
      margin-top: 0.26667rem;
      .autn_info {
        .autn_name {
          font-size: 0.7466667rem;
          font-weight: 700;
          line-height: 1.066667rem;
          max-width: 4.8rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .autn_id {
          font-size: 0.7466667rem;
          font-weight: 700;
          line-height: 1.066667rem;
          margin-left: 1.3333rem;
        }
      }
      .butn_box {
        display: none;
        width: 2.39976rem;
        height: 1.066667rem;
        line-height: 1.066667rem;
        margin-left: 0.373333rem;
        .autn_butn {
          display: table-cell;
          vertical-align: middle;
          width: 100%;
          height: 100%;
          background: 0 0;
          border-radius: 0.8rem;
          color: #fe4070;
          border: none;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 200%;
            height: 200%;
            border: 1px solid #fe4070;
            border-radius: 1.6rem;
            transform-origin: 0 0;
            transform: scale(0.5, 0.5);
            box-sizing: border-box;
          }
        }
      }
    }
  }
  .time_select_box {
    background: #fff;
    margin-top: 0.426667rem;
    padding: 0.746667rem 0.64rem;
    line-height: 0.853333rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .rili {
      width: 0.853333rem;
      height: 0.853333rem;
      background: url(../../../assets/img/rili.png) no-repeat center center;
      background-size: 100% 100%;
      display: block;
    }
    .time_text {
      width: 16.10628rem;
      height: 0.7995169rem;
      display: block;
      text-align: left;
    }
    .youj {
      width: 0.3189855rem;
      height: 0.4794686rem;
      background-image: url(../../../assets/img/youj.png);
      background-size: 100% 100%;
      display: block;
    }
  }
  .order_group {
    background-color: #fff;
    margin-top: 0.426667rem;
    .group_head {
      position: relative;
      padding: 0.56rem 0.64rem;
      line-height: 0.8rem;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      .warehouse_icon {
        width: 0.85333rem;
        height: 0.85333rem;
        background: url(../../../assets/img/fang.png) no-repeat;
        background-size: 100% 100%;
        display: block;
      }
      .warehouse_name {
        margin-left: 0.746667rem;
        color: #999;
        max-width: 47%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .product_items {
      .product_item {
        margin: 0.64rem;
        padding: 0.64rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .item_img {
          position: relative;
          left: 0;
          top: 0;
          width: 3.199855rem;
          height: 3.199855rem;
          img {
            width: 100%;
            height: 100%;
            display: block;
            border: none;
          }
        }
        .item_info {
          width: 14.986rem;
          height: 3.199855rem;
          font-size: 0.64rem;
          .item_info_1 {
            line-height: 0.73429952rem;
            display: flex;
            justify-content: space-between;
            .item_title {
              width: 11.466183rem;
            }
          }
          .item_info_2 {
            margin-top: 0.42667rem;
            display: flex;
            justify-content: space-between;
            font-size: 0.64rem;
            color: #999;
            line-height: 0.64rem;
            span {
              display: block;
              max-width: 11.466183rem;
            }
          }
        }
      }
    }
    .product_stat {
      .freight {
        border-top: 1px solid #eee;
        .freight_title {
          position: absolute;
          margin-left: 0.64rem;
          margin-top: 0.85333rem;
          line-height: 0.93333rem;
        }
        .freight_info {
          text-align: right;
          margin-right: 0.37777rem;
          .freight_item {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-top: 0.85333rem;
            margin-bottom: 0.85333rem;
            div {
              .freight_item_title {
                line-height: 0.93333rem;
              }
              .freight_item_info {
                line-height: 0.8rem;
                margin-top: 0.213333rem;
                color: #999;
                font-size: 0.64rem;
              }
            }
          }
        }
      }
      .stat_nav {
        height: 2.34662rem;
        border-top: 1px solid #eee;
        display: flex;
        padding: 0 0.64rem;
        justify-content: space-between;
        align-items: center;
        .nav_center {
          display: flex;
          align-items: center;
          .no_select_tag {
            padding: 0.16rem 0.32rem 0.106667rem 0.32rem;
            background: #eee;
            font-size: 0.5333rem;
            color: #999;
            border-radius: 0.4rem;
            display: inline-block;
            margin-left: 0.26667rem;
          }
        }
        .tr {
          text-align: right;
          .notice_num {
            color: #fe4070;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
  .fapiao_box {
    margin-top: 0.426667rem;
    background: #fff;
    .fapiao_head {
      padding: 0.56rem 0.64rem;
      line-height: 0.8rem;
      display: flex;
      align-items: center;
      color: #999;
    }
    .fapiao_info {
      height: 2.34662rem;
      border-top: 1px solid #eee;
      display: flex;
      padding: 0 0.64rem;
      justify-content: space-between;
      align-items: center;
      .nav_center {
        display: flex;
        align-items: center;
        .detail_text {
          margin-left: 0.426667rem;
          color: #999;
          font-size: 0.64rem;
        }
        .ques_icon {
          width: 0.64rem;
          height: 0.64rem;
          margin-left: 0.266667rem;
          background-image: url(../../../assets/img/wen.png);
          background-size: 100% 100%;
          display: inline-block;
        }
      }
      .select_icon {
        width: 1.06642512rem;
        height: 1.06642512rem;
        background-size: 100% 100%;
      }
      .unchecked {
        background-image: url(../../../assets/img/quan.png);
      }
    }
  }
  footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    .submit_box {
      height: 2.6395169rem;
      display: flex;
      padding: 0 0.64rem;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #eee;
      .order_stat {
        font-size: 0.64rem;
        .stat_sum {
          line-height: 0.85333rem;
          span {
            font-size: 0.85333rem;
            color: #fe4070;
          }
        }
        .stat_count {
          margin-top: 0.2667rem;
          color: #999;
        }
      }
      button {
        width: 6.6667rem;
        height: 1.919662rem;
        font: inherit;
        color: #fff;
        font-size: 0.8rem;
        background: #fe4070;
        border: 0;
        border-radius: 0.96rem;
      }
    }
  }
}
.right_norrow {
  display: inline-block;
  width: 0.3189855rem;
  height: 0.479468599rem;
  margin-left: 00.426667rem;
  background-image: url(../../../assets/img/youj.png);
  background-size: 100% 100%;
}
.adderss_box {
  padding-bottom: 0.133333rem;
  background: #fff;
  .address {
    padding: 0.64rem 0.64rem 0.506667rem 0.64rem;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .location_icon {
      margin-right: 0.32rem;
      width: 0.64rem;
      height: 0.85333rem;
      background: url(../../../assets/img/address2.png) no-repeat center center;
      background-size: 100% 100%;
      display: block;
    }
    .addr_text {
      width: 16.7995169rem;
      text-align: left;
      .per_info {
        line-height: 0.8rem;
        .per_tel {
          margin-left: 0.53333rem;
        }
      }
      .address_detail {
        margin-top: 0.5333rem;
        font-size: 0.69333rem;
        line-height: 0.92rem;
      }
    }
    .right_arrow {
      width: 0.3189855rem;
      height: 0.479468599rem;
      background-image: url(../../../assets/img/youj.png);
      background-size: 100% 100%;
      display: block;
    }
  }
}
</style>
<template>
  <div class="page">
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">结算中心</div>
      <div class="head_home" @click="home"></div>
    </div>
    <!-- 未添加地址时 -->
    <div class="no_address_box" style="display: none">
      <div class="no_address">
        <div class="address_icon"></div>
        <div class="address_text">
          还没有收货地址，
          <a href="/add_position">去添加</a>
        </div>
      </div>
    </div>
    <!-- 选择地址后 -->
    <div class="adderss_box" style="display: none">
      <div class="address">
        <span class="location_icon"></span>
        <div class="addr_text">
          <div class="per_info">
            <span>收货人：{{ address.name }}</span>
            <span class="per_tel">{{ address.iphone }}</span>
          </div>
          <div class="address_detail">
            {{ address.address }}
          </div>
        </div>
        <span
          class="right_arrow"
          style="visibility: visible"
          @click="add_position"
        ></span>
      </div>
    </div>
    <div class="id_box">
      <div class="autn_box">
        <div class="autn_head">
          <span class="autn_text"
            >应海关要求，购买跨境商品需提供与支付账号（微信/支付宝）实名信息相一致的订购人、收货人实名信息（将加密处理）注：若信息不一致，则无法通过海关验证，包裹无法正常发出，延长配送时效。</span
          >
          <span class="icon_box"></span>
        </div>
        <div class="autn_content">
          <div class="autn_info" style="display: none">
            <span class="autn_name">{{ address.name }}</span>
            <span class="autn_id">{{ address.zjname }}</span>
          </div>
          <div class="butn_box" style="display: none">
            <button class="autn_butn">添加</button>
          </div>
        </div>
      </div>
    </div>
    <div class="time_select_box">
      <span class="rili"></span>
      <span class="time_text">工作日/双休/节假日均可收货</span>
      <span style="visibility: visible" class="youj"></span>
    </div>
    <div class="fapiao_box">
      <div class="fapiao_head">发票</div>
      <div class="fapiao_info">
        <div class="nav_center">
          索要发票
          <span class="detail_text">部分商品不支持开具发票</span>
          <span class="ques_icon"></span>
        </div>
        <div class="select_icon unchecked"></div>
      </div>
    </div>
    <footer>
      <div class="submit_box">
        <div class="order_stat">
          <div class="stat_sum">
            合计
            <span>¥100</span>
          </div>
          <div class="stat_count">共5件商品</div>
        </div>
        <button type="button" @click="zhifu">提交订单</button>
      </div>
    </footer>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      address: {
        name: "*萱",
        address: "svrjhbport",
        iphone: "138****6871",
        zjname: "1408**********0064",
      },
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/shop" });
    },
    go_back() {
      this.$router.go(-1);
    },
    add_position() {
      this.$router.push({ path: "/address" });
    },
    zhifu() {
      this.$router.push({ path: "/zhifu" });
    },
    change_page() {
      var strobj = JSON.stringify(this.address);
      if (strobj == '{}') {
        $(".no_address_box").css("display", "block");
        $(".butn_box").css("display", "block");
      } else {
        $(".adderss_box").css("display", "block");
        $(".autn_info").css("display", "block");
      }
    },
  },
  mounted() {
    this.change_page();
  },
};
</script>