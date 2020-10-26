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

.logo_box {
  width: 100%;
  .logo_content {
    background-color: #fff;
    height: 6.5rem;
    margin-bottom: 1rem;
    .logo_main {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      box-sizing: border-box;
      .logo_js {
        height: 78%;
        width: 100%;
        .logo_pic {
          width: 4rem;
          height: 100%;
          float: left;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .logo_text {
          width: calc(100% - 4rem);
          height: 100%;
          float: left;
          text-align: left;
          div {
            height: calc(100% / 3);
            margin-left: 0.5rem;
            line-height: 1.5rem;
          }
          .logo_title {
            font-size: 1rem;
            color: orange;
          }
          .go_logoxq {
            a {
              color: red;
            }
            text-align: right;
          }
        }
      }
      .logo_time {
        height: 22%;
        text-align: right;
        line-height: 1.2rem;
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
      <div class="head_title">品牌信息</div>
      <div class="head_home" @click="home"></div>
    </div>

    <div class="logo_box">
      <div class="logo_content" v-for="item in logoList[0]" :key="item.id">
        <div class="logo_main">
          <div class="logo_js">
            <div class="logo_pic">
              <img :src="yum + item.logo" alt />
            </div>
            <div class="logo_text">
              <div class="logo_title">{{ item.name }}</div>
              <div class="logo_iphone">联系电话：13859748516</div>
              <div class="go_logoxq">
                <a href="###" @click="logo_xq(item.id)">查看详情</a>
              </div>
            </div>
          </div>
          <div class="logo_time">{{ item.created_at }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import yum from "../../../../data/yum";
export default {
  data() {
    return {
      logoList: [],
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
    logo_data() {
      this.$axios
        .post("/Activity/showActivity", { pageNumber: 1 })
        .then((res) => {
          // console.log(res.data.data);
          this.logoList.push(res.data.data);
          // console.log(this.logoList[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fun() {
      this.yum = yum.utils.photoPrefix;
    },
    logo_xq(item) {
      this.$router.push({ path: "/logo_xq", query: { ppid: item } });
      // console.log(item);
    },
  },
  mounted() {
    this.logo_data();
  },
  beforeMount() {
    this.fun();
  },
};
</script>