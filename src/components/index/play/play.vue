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
.play_list {
  width: 100%;
  border-bottom: 1px solid #eee;
  margin-bottom: 0.5rem;
  .play_content {
    width: 100%;
    height: 13rem;
    .play_main {
      width: 100%;
      height: 100%;
      padding: 0.8rem 0.8rem 0 0.8rem;
      background-color: #fff;
      box-sizing: border-box;
      .picture {
        width: 100%;
        height: 60%;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .play_text {
        height: 40%;
        padding-top: 0.5rem;
        box-sizing: border-box;
        text-align: left;
        font-size: 0.7rem;
        .play_title {
          height: 35%;
          font-size: 1rem;
          color: orange;
          .ck_xq {
            float: right;
            a {
              display: block;
              font-size: 0.75rem;
              line-height: 2rem;
              color: red;
              text-decoration: underline;
            }
          }
        }
        .play_address {
          height: 30%;
          line-height: 1.3436rem;
        }
        .fabu_time {
          height: 35%;
          text-align: right;
          line-height: 1.5329rem;
        }
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
      <div class="head_title">周边游</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="play_list" v-for="(item, index) in playList[0]" :key="index">
      <div class="play_content">
        <div class="play_main">
          <div class="picture">
            <img :src="yum + item.cover" alt />
          </div>
          <div class="play_text">
            <div class="play_title">
              {{ item.title }}
              <div class="ck_xq">
                <a href="###" @click="play_xq(item.id)">查看详情</a>
              </div>
            </div>
            <div class="play_address">
              游玩地点：<span>{{ item.address }}</span>
            </div>
            <div class="fabu_time">发布时间：{{ item.created_at }}</div>
          </div>
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
      playList: [],
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
    play_data() {
      this.$axios
        .post("/Travel/showTravel", { pageNumber: 1 })
        .then((res) => {
          console.log(res.data.data);
          this.playList.push(res.data.data);
          console.log(this.playList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fun() {
      this.yum = yum.utils.photoPrefix;
    },
    play_xq(e) {
      console.log(e);
      this.$router.push({ path: "/play_xq", query: { pid: e } });
    },
  },
  mounted() {
    this.play_data();
  },
  beforeMount() {
    this.fun();
  },
};
</script>