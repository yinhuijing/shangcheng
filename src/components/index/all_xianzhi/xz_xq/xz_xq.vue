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
      background: url(../../../../assets/img/back3.png) no-repeat;
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
    background: url(../../../../assets/img/home.png) no-repeat;
    background-size: 100% 100%;
  }
}

.xz_content {
  width: 100%;
  height: 20rem;
  background-color: #fff;
  .xz_main {
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    .xz_pic {
      width: 100%;
      height: 35%;
      .van-swipe {
        width: 100%;
        height: 100%;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .xz_text {
      width: 100%;
      height: 55%;
      padding: 0.5rem;
      box-sizing: border-box;
      text-align: left;
      .xz_title {
        height: 2rem;
        color: salmon;
        font-size: 0.9rem;
        line-height: 2rem;
      }
      .xz_describe {
        height: calc(100% - 2rem);
        font-size: 0.7rem;
        span {
          display: block;
          height: 1rem;
          font-size: 0.75rem;
          color: rgb(8, 124, 219);
        }
        p {
          height: calc(100% - 1rem);
          text-indent: 2em;
        }
      }
    }
    .xz_time {
      height: 10%;
      line-height: 1.8rem;
      border-top: 1px solid #eeeeee;
      box-sizing: border-box;
      text-align: right;
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
      <div class="head_title">闲置物品详情</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="xz_content">
      <div class="xz_main">
        <div class="xz_pic">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in imgs" :key="index">
              <img v-lazy="yum + image" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="xz_text">
          <div class="xz_title">{{ idel_goods.title }}</div>
          <div class="xz_describe">
            <span>闲置理由：</span>
            <p>{{ idel_goods.describe }}</p>
          </div>
        </div>
        <div class="xz_time">发布时间：{{ idel_goods.created_at }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import yum from "../../../../../data/yum";
export default {
  data() {
    return {
      idel_goods: {},
      imgs: [],
      xid: "",
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
    xianzhi_data() {
      //   console.log(this.xid);
      this.$axios
        .post("/Idlegoods/oneIdlegoods", { id: 2 })
        .then((res) => {
          //   console.log(res.data);
          this.idel_goods = res.data.data;
          //   console.log(this.idel_goods.photo);
          this.imgs = this.idel_goods.photo.split("，");
          console.log(this.imgs);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fun() {
      this.yum = yum.utils.photoPrefix;
    },
  },
  mounted() {
    this.xianzhi_data();
  },
  beforeMount() {
    this.fun();
  },
  created() {
    this.xid = this.$route.query.xid;
  },
};
</script>