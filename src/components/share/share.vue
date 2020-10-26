<style lang='less' scoped>
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
      background: url(../../assets/img/back3.png) no-repeat;
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
    background: url(../../assets/img/home.png) no-repeat;
    background-size: 100% 100%;
  }
}
.my_box {
  width: 100%;
  height: 100%;
  .main_box {
    width: 100%;
    height: 5rem;
    background-image: linear-gradient(
      to right,
      #ff3200 0%,
      #ff6d34 35%,
      #0dcaef 100%
    );
  }
  .content_box {
    width: 100%;
    .content_text {
      padding: 0.5rem;
      box-sizing: border-box;
      background-color: #fff;
      .content_title {
        height: 1.5rem;
        font-size: 1rem;
        color: orange;
        text-align: left;
        margin-bottom: 0.5rem;
      }
      .content_describe{
        text-align: left;
        text-indent: 2em;
        font-size: 0.75rem;
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
      <div class="head_title">我是关于我们</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="my_box">
      <div class="main_box"></div>
      <div class="content_box">
        <div class="content_text">
          <div class="content_title">
            {{ myList.station_name }}
          </div>
          <div class="content_describe" v-html="myList.station_about"></div>
        </div>
      </div>
    </div>
    <bottomnav></bottomnav>
  </div>
</template>

<script>
import bottomnav from "../../zujian/bottomnav.vue";
export default {
  name: "share",
  data() {
    return {
      myList: {},
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
    my_data() {
      this.$axios.post("/User/station", { id: 1 }).then((res) => {
        // console.log(res.data.data);
        this.myList = res.data.data;
        console.log(this.myList);
      });
    },
  },
  components: {
    bottomnav,
  },
  mounted() {
    this.my_data();
  },
};
</script>