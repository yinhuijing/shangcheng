<style lang="less" scoped>
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

.wupin_list {
  margin-top: 1rem;
  font-size: 0.75rem;
  display: none;
  a {
    text-decoration: underline;
    color: red;
  }
}

.xianzih_list {
  display: none;
}
</style>

<template>
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div>
      <div class="head_title">闲置物品</div>
      <div class="head_home" @click="home"></div>
    </div>

    <div class="wupin_list">
      暂无闲置物品
      <a href="/add_xianzhi">请添加</a>
    </div>

    <div class="xianzih_list" v-for="(item, index) in zxlist" :key="index">
      <a href="">{{ item.name }}</a>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      zxlist: [],
      showList: true,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push({ path: "/shop" });
    },
    change_page() {
      if (this.zxlist.length == "") {
        $(".wupin_list").css("display", "block");
      } else {
        $(".xianzih_list").css("display", "block");
      }
    },
  },
  mounted() {
    this.change_page();
  },
};
</script>