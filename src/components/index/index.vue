<style lang="less" scoped>
a {
  color: red;
  text-decoration: underline;
}

.index_box {
  width: 100%;
  height: 100%;
  .head_box {
    width: 100%;
    height: 4rem;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .header {
      height: 2rem;
      font-size: 0.853333rem;
      line-height: 2rem;
      border-bottom: 1px solid #eee;
    }
    .nav_main {
      height: 2rem;
      width: 100%;
      padding: 0.3rem;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      a {
        float: left;
        display: block;
        height: 100%;
        width: calc(100% / 4);
      }
    }
  }
}

.cur {
  color: red;
  border-bottom: 1px solid red;
}

.main_box {
  width: 100%;
  height: 100%;
  z-index: 98;
  overflow: scroll;
  margin-top: 4rem;
  .main_content {
    width: 100%;
    background-color: #fff;
    padding: 0 1rem 0.5rem 1rem;
    box-sizing: border-box;
    .shop_box {
      border-bottom: 1px dashed #eee;
      .shop_title {
        text-align: left;
        height: 2.3rem;
        font-size: 1rem;
        line-height: 2.3rem;
      }
      .look_more {
        height: 2rem;
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;

        a {
          display: block;
          width: 3.5rem;
          height: 100%;
          line-height: 1rem;
          margin: 0 auto;
          // float: left;
          img {
            display: block;
            width: 0.4rem;
            height: 0.4rem;
            float: right;
            margin-top: 0.25rem;
          }
        }
      }
    }
  }
}

.jzmsg_main {
  .jzmsg_content {
    width: 100%;
    height: 7.5rem;
    border: 1px solid #eeeeee;
    margin-bottom: 1rem;
    position: relative;
    .jz_title {
      height: 1.5rem;
      width: 100%;
      font-size: 0.75rem;
      color: orange;
    }
    .jz_msg {
      height: 3rem;
    }
    .jz_address,
    .jz_time,
    .fabu_time {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
    }
    .fabu_time {
      position: absolute;
      bottom: 0;
    }
  }
}

.xz_content,
.logo_content,
.play_content {
  width: 100%;
  height: 5rem;
  background-color: #fff;
  margin-bottom: 0.5rem;
  border: 1px solid #eee;
  font-size: 0.7rem;
  padding: 0.5rem;
  box-sizing: border-box;
  .xz_top,
  .logo_top {
    height: 3rem;
    .xz_pic,
    .logo_pic {
      width: 3rem;
      height: 100%;
      float: left;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .xz_text,
    .logo_text {
      float: left;
      width: calc(100% - 3rem);
      padding-left: 0.5rem;
      box-sizing: border-box;
      text-align: left;
      div {
        height: 1.5rem;
        line-height: 1.5rem;
      }
      .logo_xq {
        color: red;
      }
      .xz_xq {
        color: red;
      }
      .xz_title {
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
      }
    }
  }
  .xz_bottom,
  .logo_bottom {
    height: 1rem;
    line-height: 1rem;
    text-align: right;
  }
  .play_left {
    width: 26%;
    height: 100%;
    float: left;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .play_right {
    width: 74%;
    height: 100%;
    float: left;
    div {
      width: 100%;
      height: 1rem;
      text-align: left;
      padding-left: 0.5rem;
      box-sizing: border-box;
    }
    .go_playxq,
    .play_time {
      text-align: right;
    }
  }
}

.text_left {
  padding: 0.3rem 0 0 0.3rem;
  text-align: left;
  box-sizing: border-box;
}
.text_right {
  padding: 0 0.3rem 0.3rem 0;
  text-align: right;
  box-sizing: border-box;
}
.nav_main,
.look_more {
  a {
    color: black;
    text-decoration: none;
  }
}
</style>
<template>
  <div class="index_box">
    <div class="head_box">
      <div class="header">首页</div>
      <div class="nav_main">
        <a href="#xianzhi" class="cur">闲置物品</a>
        <a href="#jianzhi">兼职广场</a>
        <a href="#pinpai">品牌优惠</a>
        <a href="#youwan">周边游</a>
      </div>
    </div>
    <div class="main_box">
      <div class="main_content">
        <div class="shop_box">
          <div class="shop_title">闲置物品</div>
          <div class="xzmsg_main" id="xianzhi">
            <div
              class="xzmsg_conent"
              v-for="xitem in xz_list[0]"
              :key="xitem.id"
            >
              <div class="xz_content">
                <div class="xz_top">
                  <div class="xz_pic">
                    <img :src="yum + xitem.cover" alt="" />
                  </div>
                  <div class="xz_text">
                    <div class="xz_title">{{ xitem.title }}</div>
                    <div class="xz_xq">
                      <a href="###" @click="go_xzxq(xitem.id)">查看详情</a>
                    </div>
                  </div>
                </div>
                <div class="xz_bottom">发布时间：{{ xitem.created_at }}</div>
              </div>
            </div>
          </div>
          <div class="look_more">
            <a href="/all_xianzhi" style="color: black; text-decoration: none"
              >查看更多 <img src="../../assets/img/8.png" alt=""
            /></a>
          </div>
        </div>
        <div class="shop_box">
          <div class="shop_title">兼职广场</div>
          <div class="jzmsg_main" id="jianzhi">
            <div
              class="jzmsg_content"
              v-for="item in jz_list[0]"
              :key="item.id"
            >
              <div class="jz_title text_left">
                {{ item.title }}
              </div>
              <div class="jz_msg text_left">兼职描述：{{ item.describe }}</div>
              <div class="jz_time text_right">{{ item.time }}</div>
              <div class="address text_right">地址：{{ item.address }}</div>
              <div class="fabu_time text_right">{{ item.created_at }}</div>
            </div>
          </div>
          <div class="look_more">
            <a href="/jianzhi"
              >查看更多 <img src="../../assets/img/8.png" alt=""
            /></a>
          </div>
        </div>
        <div class="shop_box">
          <div class="shop_title">品牌优惠</div>
          <div class="ppmsg_main" id="pinpai">
            <div
              class="logo_content"
              v-for="litem in logoList[0]"
              :key="litem.id"
            >
              <div class="logo_top">
                <div class="logo_pic">
                  <img :src="yum + litem.logo" alt="" />
                </div>
                <div class="logo_text">
                  <div
                    class="logo_title"
                    style="height: 1rem; line-height: 1rem"
                  >
                    {{ litem.name }}
                  </div>
                  <div class="logo_tel" style="height: 1rem; line-height: 1rem">
                    联系电话：13859748516
                  </div>
                  <div
                    class="logo_xq"
                    style="height: 1rem; line-height: 1rem; text-align: right"
                  >
                    <a href="###" @click="pinpai_xq(litem.id)">查看详情</a>
                  </div>
                </div>
              </div>
              <div class="logo_bottom">{{ litem.created_at }}</div>
            </div>
          </div>
          <div class="look_more">
            <a href="/logo"
              >查看更多 <img src="../../assets/img/8.png" alt=""
            /></a>
          </div>
        </div>
        <div class="shop_box" style="border-bottom: none">
          <div class="shop_title">周边游</div>
          <div class="wanmsg_main" id="youwan">
            <div
              class="play_content"
              v-for="pitem in play_list[0]"
              :key="pitem.id"
            >
              <div class="play_left">
                <img :src="yum + pitem.cover" alt="" />
              </div>
              <div class="play_right">
                <div class="text_title">{{ pitem.title }}</div>
                <div class="text_address">
                  游玩地点：<span>{{ pitem.address }}</span>
                </div>
                <div class="go_playxq">
                  <a href="###" @click="go_play(pitem.id)">查看详情</a>
                </div>
                <div class="play_time">{{ pitem.created_at }}</div>
              </div>
            </div>
          </div>
          <div class="look_more">
            <a href="/play"
              >查看更多 <img src="../../assets/img/8.png" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
    <bottomnav></bottomnav>
  </div>
</template>

<script>
import $ from "jquery";
import bottomnav from "../../zujian/bottomnav";
import yum from "../../../data/yum";
export default {
  data() {
    return {
      jz_list: [],
      play_list: [],
      xz_list: [],
      logoList: [],
    };
  },
  methods: {
    get_jianzhi() {
      this.$axios
        .post("Parttime/showParttime", { pageNumber: 1 })
        .then((res) => {
          // console.log(res.data.data);
          this.jz_list.push(res.data.data);
          // console.log(this.jz_list);
        });
      this.$axios.post("/Travel/showTravel", { pageNumber: 1 }).then((res) => {
        // console.log(res.data.data);
        this.play_list.push(res.data.data);
        // console.log(this.play_list);
      });
      this.$axios
        .post("Idlegoods/showIdlegoods", { pageNumber: 1 })
        .then((res) => {
          // console.log(res.data.data);
          this.xz_list.push(res.data.data);
          console.log(this.xz_list);
        });
      this.$axios
        .post("/Activity/showActivity", { pageNumber: 1 })
        .then((res) => {
          // console.log(res.data.data);
          this.logoList.push(res.data.data);
          // console.log(this.logoList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fun() {
      this.yum = yum.utils.photoPrefix;
    },
    go_play(e) {
      this.$router.push({ path: "/play_xq", query: { pid: e } });
    },
    pinpai_xq(e) {
      this.$router.push({ path: "/logo_xq", query: { ppid: e } });
    },
    go_xzxq(e) {
      this.$router.push({ path: "/xz_xq", query: { xid: e } });
    },
  },
  components: {
    bottomnav,
  },
  mounted() {
    this.get_jianzhi();
    $(".nav_main>a").click(function () {
      var idx = $(this).index();
      // console.log(idx);
      $(this).addClass("cur").siblings().removeClass("cur");
    });
  },
  beforeMount() {
    this.fun();
  },
};
</script>