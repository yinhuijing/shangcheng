<style scoped lang='less'>
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
      background: url(../../assets/img/back3.png) no-repeat;
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
    background: url(../../assets/img/home2.png) no-repeat;
    background-size: 100% 100%;
  }
}
.main-header {
  height: 6.5rem;
  display: flex;
  align-items: center;
  margin: 0.5rem;
  background: url(../../assets/img/main_03.png) 0 0 no-repeat;
  background-size: 100% 100%;
  position: relative;
  .main-info {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    .main-img {
      width: 3rem;
      height: 3rem;
      margin-left: 1rem;
      margin-right: 0.8rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .main-p {
      margin: auto;
      .main-p-name {
        font-size: 0.8rem;
        color: #fff;
        margin: 0;
        font-weight: 500;
      }
      .main-p-id {
        color: #fff;
        font-size: 0.6rem;
        margin: 0.3rem 0 0 0;
      }
    }
  }
  .main-bottom {
    position: absolute;
    bottom: 0.3rem;
    display: flex;
    width: 100%;
    justify-content: space-around;
    span {
      background: #fff;
      border-radius: 3px;
      color: #333;
      padding: 0.2rem;
      font-size: 0.2rem;
    }
  }
  .main-shezhi {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
}
.name {
  width: 100%;
  height: 7rem;
  background-color: olivedrab;
}
.order_list {
  height: 4.5rem;
  background-color: white;
  margin-top: 1rem;
  .order_title {
    padding-left: 0.5rem;
    border-bottom: 1px solid #eaeaea;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.7rem;
    i {
      display: inline-block;
      vertical-align: middle;
      width: 1rem;
      height: 1rem;
      background-size: 1rem;
      margin-right: 0.5rem;
    }
    .go_order {
      text-align: right;
      margin-right: 0.6rem;
    }
  }
  .list_main {
    display: flex;
    a {
      width: 5rem;
      text-align: center;
      display: inline-block;
      margin: 0;
      padding: 0.5rem 0;
      text-decoration: none;
      font-size: 0.75rem;
      color: #666;
      .van-icon {
        display: block;
        width: 1rem;
        height: 1rem;
        margin: 0.1rem auto;
        background-size: 1rem;
      }
    }
  }
}
.main-list {
  width: 100%;
  padding: 1rem 0.6rem;
  box-sizing: border-box;
  .main-li {
    padding: 0.4rem 0;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #eee;
    .main-li-left {
      display: flex;
      align-items: center;
      img {
        width: 0.9rem;
      }
      span {
        margin-left: 0.5rem;
        font-size: 0.75rem;
      }
    }
    .main-li-right {
      width: 0.3rem;
    }
  }
}

.qiandao {
  width: 3rem;
  height: 1.2rem;
  line-height: 1.2rem;
  position: absolute;
  top: 40%;
  right: 8%;
  border: 1px solid #fff;
  border-radius: 0.6rem;
  // img {
  //   display: block;
  //   width: 100%;
  //   height: 100%;
  // }
}

.day_qiand {
  height: 7.5rem;
  margin: 1rem 0.5rem 0 0.5rem;
  .qd_main {
    padding: 0.5rem;
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    border-radius: 0.7rem;
    .qd_title {
      height: 1.5rem;
      line-height: 1.5rem;
      button {
        width: 3.4rem;
        height: 1.2rem;
        float: right;
        margin: 0.1rem 0.3rem 0 0;
        border: none;
        padding: 0 0.5rem;
        border-radius: 0.65rem;
        font-size: 0.5rem;
        color: white;
        background: orange;
        line-height: 1.2rem;
      }
    }
    .qd_form {
      width: 100%;
      height: calc(100% - 1.5rem);
      padding-top: 0.5rem;
      box-sizing: border-box;
      ul {
        height: 100%;
        li {
          list-style: none;
          float: left;
          width: calc(100% / 7);
          height: 4rem;
          &:first-child {
            margin-left: 0;
          }
        }
        .qd_num {
          width: 2.5rem;
          height: 2.5rem;
          margin: 0 auto;
          .qiandao_num {
            display: block;
            width: 100%;
            height: 100%;
            border: 1px solid #eeeeee;
            border-radius: 50%;
            text-align: center;
            line-height: 2.5rem;
            box-sizing: border-box;
          }
        }
        .qd_js {
          height: 1.5rem;
          line-height: 1.5rem;
          // margin-top: 0.35rem;
        }
      }
    }
  }
}

.active {
  background-image: url(../../assets/img/qiandaochenggong-cai.png);
  background-size: cover;
}

.cgqd_box {
  width: 70%;
  height: 7rem;
  position: absolute;
  top: 10rem;
  left: 3rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 100;
  .close_box {
    height: 1.5rem;
    border-bottom: 1px solid gray;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    .close {
      float: right;
      height: 100%;
      width: 1.5rem;
      img {
        width: 70%;
        height: 70%;
        margin: 0.2rem;
        display: block;
      }
    }
  }
}
#fade {
  display: none;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 98;
  -moz-opacity: 0.8;
  opacity: 0.8;
  filter: alpha(opacity=80);
}

.main-li-tg {
  width: 100%;
  height: 100%;
  img {
    float: left;
    display: block;
    width: 0.9rem;
    height: 0.9rem;
  }
  .van-cell {
    width: calc(100% - 0.9rem);
    float: left;
    height: 100%;
    padding: 0;
    background: none;
    .van-cell__title {
      span {
        display: block;
        text-align: left;
        margin-left: 0.5rem;
        font-size: 0.75rem;
      }
    }
  }
}
</style>

<template>
  <div class="hello">
    <div id="fade"></div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div>
      <div class="head_title">我的</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="main-header">
      <div class="main-info">
        <div class="main-img">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600166840429&di=919caf61bcdefb793616a1065bc90e3e&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F14%2Fw500h314%2F20190422%2F_yhd-hvvuiyn4823756.jpg"
            alt
          />
        </div>
        <div class="main-p">
          <p class="main-p-name">何焉悦色</p>
          <p class="main-p-id">邀请码：145555</p>
        </div>
      </div>
      <div class="main-shezhi" @click="jump('setup')">
        <img src="../../assets/img/shezhi.png" alt />
      </div>
      <!-- <div class="main-bottom">
        <span @click="jump('paypwd')">修改密码</span>
        <span @click="jump('address')">收货地址</span>
      </div>-->
      <!-- <button data-method="offset" data-type="auto" class="layui-btn layui-btn-normal qiandao">  
      </button>-->

      <!-- <div class="qiandao" @click="qiandao">
        签到
      </div> -->

      <div class="cgqd_box" v-if="isShow">
        <div class="close_box">
          <div class="close" @click="close">
            <img src="../../assets/img/guanbi.png" alt />
          </div>
        </div>
        <div class="qd_content">签到成功</div>
      </div>
    </div>
    <!-- <div class="order_list">
      <div class="order_title">
        <van-icon name="records" />我的订单
        <a href="/order" class="go_order">查看我的全部订单</a>
      </div>
      <div class="list_main">
        <a href="###">
          <van-icon name="balance-pay" />
          <span>待付款</span>
        </a>
        <a href="###">
          <van-icon name="records" />
          <span>待发货</span>
        </a>
        <a href="###">
          <van-icon name="records" />
          <span>待收货</span>
        </a>
        <a href="###">
          <van-icon name="records" />
          <span>待评价</span>
        </a>
      </div>
    </div>-->
    <div class="day_qiand">
      <div class="qd_main">
        <div class="qd_title">
          <div style="float: left; font-size: 0.8rem" class="no_qd">
            您还没有签到？
          </div>
          <div style="float: left; font-size: 0.6rem; margin-left: 0.3rem">
            <a href="/jifen_xq" style="color:red; F" class="qd_ljf"
              >签到领积分</a
            >
          </div>
          <button @click="qiandao" class="qiandao_success">立即签到</button>
        </div>
        <div class="qd_form">
          <ul>
            <li v-for="(item, index) in qd_list" :key="index">
              <div class="qd_num">
                <a
                  href="###"
                  class="qiandao_num"
                  @click="qiaodao_cg(index)"
                  v-bind:class="[idx == index ? 'active' : '']"
                  >{{ item.qd_jf }}</a
                >
              </div>
              <div class="qd_js">{{ item.name }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="main-list">
      <div class="main-li" @click="jump('jifen')">
        <div class="main-li-left">
          <img src="../../assets/img/jifen.png" alt />
          <span>我的积分</span>
        </div>
        <img class="main-li-right" src="../../assets/img/8.png" alt />
      </div>
      <div class="main-li" @click="jump('shop')">
        <div class="main-li-left">
          <img src="../../assets/img/shangcheng.png" alt />
          <span>积分商城</span>
        </div>
        <img class="main-li-right" src="../../assets/img/8.png" alt />
      </div>
      <div class="main-li" @click="jump('yue')">
        <div class="main-li-left">
          <img src="../../assets/img/xunibi.png" alt />
          <span>余额</span>
        </div>
        <img class="main-li-right" src="../../assets/img/8.png" alt />
      </div>
      <div class="main-li" @click="jump('xianzhi')">
        <div class="main-li-left">
          <img src="../../assets/img/lie-b.png" alt />
          <span>闲置发布</span>
        </div>
        <img class="main-li-right" src="../../assets/img/8.png" alt />
      </div>
      <!-- <span>推广分享</span> -->
      <div class="main-li">
        <div class="main-li-tg">
          <img src="../../assets/img/fenxiang.png" alt />
          <van-cell is-link title="推广分享" @click="show = true" />
          <van-action-sheet
            v-model="show"
            :actions="actions"
            @select="onSelect"
            cancel-text="取消"
            close-on-click-action
            @cancel="onCancel"
          />
        </div>
        <!-- <img class="main-li-right" src="../assets/img/8.png" alt /> -->
      </div>
    </div>

    <bottomnav></bottomnav>
  </div>
</template>

<script>
import bottomnav from "../../zujian/bottomnav.vue";
import $ from "jquery";
import qdList from "../../../../student/data/qdList.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      isShow: false,
      idx: 0,
      qd_list: [],
      show: false,
      actions: [{ name: "推广链接" }, { name: "推广图片" }],
    };
  },
  components: {
    bottomnav,
  },
  beforeMount() {
    this.fun();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push({ path: "/shop" });
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      this.$toast(item.name);
    },
    onCancel() {
      this.$toast("取消");
    },
    jump(e) {
      this.$router.push(e);
    },
    qiaodao_cg(index) {
      this.idx = index;
    },
    fun() {
      this.qd_list = qdList.qdList;
    },
    qiandao() {
      if ($(".qiandao_success").html() == "立即签到") {
        console.log("签到成功");
        $("#fade").css("display", "block");
        this.isShow = !this.isShow;
        $(".qiandao_success").html("已签到");
        $(".no_qd").html("您已获得首签");
        $(".qd_ljf").html("断签需要重新累计连签");
      } else if ($(".qiandao_success").html() == "已签到") {
        this.$router.push({ path: "/jifen_xq" });
      }
    },
    close() {
      $("#fade").css("display", "none");
      this.isShow = !this.isShow;
    },
  },
};
</script>