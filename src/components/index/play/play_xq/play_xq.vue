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
.jd_box {
  width: 100%;
  .jdpic_tab {
    width: 100%;
    height: 10rem;
    .van-swipe-item {
      height: 10rem;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .jdxq_box {
    width: 100%;
    height: 12rem;
    background-color: #fff;
    text-align: left;
    .jdxq_content {
      height: 4rem;
      padding: 0.5rem 0.5rem 0 0.5rem;
      box-sizing: border-box;
      border: 1px dashed #eeeeee;
      .jdxq_title {
        height: 35%;
        font-size: 0.9rem;
        line-height: 1.39rem;
        color: rgba(17, 49, 190, 0.747);
        margin-bottom: 0.5rem;
      }
      .jdxq_address {
        height: 30%;
        float: left;
        line-height: 1.2rem;
        img {
          display: block;
          height: 100%;
          float: left;
          margin-right: 0.3rem;
        }
      }
    }
    .jd_des {
      height: 5rem;
      padding: 0.5rem 0.5rem 0 0.5rem;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom: 1px dashed #eeeeee;
      .cf_time {
        height: 35%;
        line-height: 1.575rem;
      }
      .cf_des {
        height: 65%;
        .ly_xq {
          font-size: 0.8rem;
          color: red;
        }
      }
    }
    .an_box {
      height: 3rem;
      padding: 0.5rem;
      box-sizing: border-box;
      text-align: right;
      button {
        border: none;
        background-color: orange;
        padding: 0.3rem;
        border-radius: 0.8rem;
        color: white;
        margin-top: 0.3rem;
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
      <div class="head_title">景点概况</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="jd_box">
      <div class="jdpic_tab">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in imgs" :key="index">
            <img v-lazy="yum + image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="jdxq_box">
        <div class="jdxq_content">
          <div class="jdxq_title">{{ play_list.title }}</div>
          <div class="jdxq_address">
            <img src="../../../../assets/img/address2.png" alt />
            地点：{{ play_list.address }}
          </div>
        </div>
        <div class="jd_des">
          <div class="cf_time">出发时间：{{ play_list.time }}</div>
          <div class="cf_des">
            <span class="ly_xq">旅游详情：</span>
            {{ play_list.describe }}
          </div>
        </div>
        <div class="an_box">
          <button>出发去这里</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import yum from '../../../../../data/yum';
export default {
  data() {
    return {
      pid: "",
      play_list: {},
      imgs: [],
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-2);
    },
    play_xq() {
      this.$axios.post("/Travel/oneTravel", { id: this.pid }).then((res) => {
        // console.log(res.data.data);
        this.play_list = res.data.data;
        console.log(this.play_list.photo);
        this.imgs = this.play_list.photo.split(",");
        console.log(this.imgs);
      });
    },
    fun() {
      this.yum = yum.utils.photoPrefix;
    },
  },
  created() {
    this.pid = this.$route.query.pid;
  },
  mounted() {
    this.play_xq();
  },
  beforeMount() {
    this.fun();
  },
};
</script>