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

.logo_box {
  width: 100%;
  .logo_content {
    background-color: #fff;
    height: 17rem;
    padding: 1rem;
    box-sizing: border-box;
    .logo_js {
      width: 100%;
      display: flex;
      height: 35%;
      .logo_pic {
        flex: 0.664;
        flex-direction: column;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .logo_text {
        padding: 0 0 0 0.5rem;
        box-sizing: border-box;
        flex: 1.5;
        text-align: left;
        .logo_title {
          font-size: 1rem;
          color: orange;
        }
        .logo_address,
        .logo_iphone {
          margin-top: 0.6rem;
        }
        .logo_address {
          img {
            width: 0.8rem;
          }
        }
      }
    }
    .logo_yh {
      height: 50%;
      text-align: left;
      padding-top: 0.5rem;
      box-sizing: border-box;
      p {
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.85rem;
        color: burlywood;
      }
      .yh_main {
        height: calc(100% - 1.5rem);
        text-indent: 2em;
        font-size: 0.7rem;
      }
    }
    .logo_time {
      height: 15%;
      text-align: right;
      line-height: 2rem;
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
      <div class="head_title">品牌详情</div>
      <div class="head_home" @click="home"></div>
    </div>

    <div class="logo_box">
      <div class="logo_content">
        <div class="logo_js">
          <div class="logo_pic">
            <img :src="yum + logoxq_list.logo" alt />
          </div>
          <div class="logo_text">
            <div class="logo_title">{{ logoxq_list.name }}</div>
            <div class="logo_address">
              <img src="../../../../assets/img/address2.png" alt />
              {{ logoxq_list.address }}
            </div>
            <div class="logo_iphone">联系电话：13859748516</div>
          </div>
        </div>
        <div class="logo_yh">
          <p>商家优惠信息：</p>
          <div class="yh_main">{{ logoxq_list.describe }}</div>
          <!-- <button type="button" v-if="isShowMore" @click="showmore($event)"></button> -->
        </div>
        <div class="logo_time">{{ logoxq_list.created_at }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import yum from "../../../../../data/yum";
export default {
  data() {
    return {
      ppid: "",
      logoxq_list: "",
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
    logo_xq() {
      this.$axios
        .post("/Activity/oneActivity", { id: this.ppid })
        .then((res) => {
          console.log(res.data.data);
          this.logoxq_list = res.data.data;
          console.log(this.logoxq_list);
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
    this.logo_xq();
  },
  beforeMount() {
    this.fun();
  },
  created() {
    this.ppid = this.$route.query.ppid;
  },
};
</script>