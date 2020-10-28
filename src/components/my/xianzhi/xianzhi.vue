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
  a {
    text-decoration: underline;
    color: red;
  }
}

.xianzih_list {
  width: 100%;
  height: 7rem;
  background-color: #fff;
  margin-bottom: 0.5rem;
  .xianzhi_main {
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    .xzmain_top {
      width: 100%;
      height: 4rem;
      .xzmain_pic {
        width: 4rem;
        height: 100%;
        float: left;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .xzmain_text {
        text-align: left;
        width: calc(100% - 4rem);
        height: 100%;
        float: left;
        div {
          padding-left: 1rem;
          box-sizing: border-box;
          font-size: 0.8rem;
        }
        .xz_height {
          height: 1.5rem;
          line-height: 1.5rem;
        }
        .xzmain_title {
          color: orange;
        }
        .xzmain_edit {
          text-align: right;
          font-size: 0.75rem;
        }
        .go_xzxq {
          height: 1rem;
          line-height: 1rem;
          a {
            font-size: 0.7rem;
            color: red;
            text-decoration: underline;
          }
        }
      }
    }
    .xzmain_bottom {
      height: 1rem;
      line-height: 1rem;
      text-align: right;
    }
  }
}

.bottom_box {
  height: 1.5rem;
  width: 100%;
  position: fixed;
  bottom: 0.5rem;
  left: 0;
  a {
    display: block;
    width: 5rem;
    height: 100%;
    background-color: orange;
    padding: 0.3rem;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 0.8rem;
    color: white;
  }
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

    <div class="xianzih_list" v-for="(item, index) in zxlist[0]" :key="index">
      <div class="xianzhi_main">
        <div class="xzmain_top">
          <div class="xzmain_pic">
            <img :src="yum + item.cover" alt="" />
          </div>
          <div class="xzmain_text">
            <div class="xzmain_title xz_height">{{ item.title }}</div>
            <div class="xzmain_edit xz_height">
              <span @click="edit_xzmsg">编辑</span> |
              <span @click="delete_xzmsg">删除</span>
            </div>
            <div class="go_xzxq"><a href="###">查看详情</a></div>
          </div>
        </div>
        <div class="xzmain_bottom">{{ item.created_at }}</div>
      </div>
    </div>

    <div class="bottom_box">
      <a href="/add_xianzhi">添加闲置</a>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import yum from "../../../../data/yum";
export default {
  data() {
    return {
      zxlist: [],
      showList: true,
      yum: "",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push({ path: "/index" });
    },
    edit_xzmsg() {
      this.$router.push({ path: "edit_xianzhi" });
    },
    delete_xzmsg() {
      console.log("删除成功");
      // this.$axios.post("/Idle/delIdle", { id: 5 }).then((res) => {
      //   console.log(res)
      // });
    },
    huoquData() {
      this.$axios.post("/Idle/showIdle", { pageNumber: 1 }).then((res) => {
        // console.log(res.data.data);
        this.zxlist.push(res.data.data);
        console.log(this.zxlist);
        if (this.zxlist.length == 0) {
          $(".wupin_list").css("display", "block");
          $(".xianzih_list").css("display", "none");
          $(".bottom_box").css("display", "none");
        } else {
          $(".wupin_list").css("display", "none");
          $(".xianzih_list").css("display", "block");
          $(".bottom_box").css("display", "block");
        }
      });
    },
    fun() {
      this.yum = yum.utils.photoPrefix;
    },
  },
  mounted() {
    this.huoquData();
  },
  beforeMount() {
    this.fun();
  },
};
</script>