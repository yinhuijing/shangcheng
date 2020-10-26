<style lang="less" scoped>
.header {
  height: 2.2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.725314rem;
  font-size: 0.853333rem;
  border-bottom: 1px solid #eee;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
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
.jz_box {
  width: 100%;
  height: 100%;
  margin-top: 2.2rem;
  ul {
    width: 30%;
    height: 100%;
    background-color: #fff;
    position: fixed;
    left: 0;
    list-style: none;
    li {
      a {
        display: block;
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        border-bottom: 1px solid #eee;
        &:hover {
          color: red;
        }
      }
    }
  }
  .jz_main {
    width: 70%;
    border-left: 1px solid #eee;
    box-sizing: border-box;
    margin-left: 5.2rem;
    .jz_list {
      width: 100%;
      border-bottom: 1px solid #eee;
      .fl_name {
        height: 2rem;
        width: 100%;
        background-color: #fff;
        padding-left: 0.5rem;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        text-align: left;
        line-height: 2rem;
        font-size: 0.75rem;
      }
      .mgjz_box {
        width: 100%;
        height: 10rem;
        margin-bottom: 0.5rem;
        background-color: #fff;
        .mgjz_main {
          width: 100%;
          height: 100%;
          padding: 0.4rem;
          box-sizing: border-box;
          text-align: left;
          .mgjz_title {
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: 0.75rem;
            color: orange;
          }
          .mgjz_text {
            height: 2rem;
            div {
              height: 50%;
              line-height: 1rem;
            }
          }
          .jz_describe {
            height: 50%;
            span {
              display: block;
              height: 1rem;
              line-height: 1rem;
              width: 100%;
            }
            div {
              text-indent: 2em;
            }
          }
          .mgjz_time {
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: right;
            color: red;
          }
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
      <div class="head_title">兼职信息</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="jz_box">
      <ul>
        <li v-for="(item, index) of flList" :key="index">
          <a href="###" @click="go_fl(index)">{{ item }}</a>
        </li>
      </ul>
      <div class="jz_main">
        <div class="jz_list" v-for="(jitem, index) in jzfl_list" :key="index">
          <!-- <div class="fl_name">{{ jitem.type }}</div> -->
          <div class="mgjz_box">
            <div class="mgjz_main">
              <div class="mgjz_title">{{ jitem.title }}</div>
              <div class="mgjz_text">
                <div class="text_address">{{ jitem.address }}</div>
                <div class="text_time">{{ jitem.time }}</div>
              </div>
              <div class="jz_describe">
                <span style="color: red">兼职信息：</span>
                <div>{{ jitem.describe }}</div>
              </div>
              <div class="mgjz_time">{{ jitem.created_at }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "left",
      jzfl_list: [], // 兼职列表
      flList: {}, // 分类列表
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
    hq_feilei() {
      this.$axios.post("/Parttime/typeParttime").then((res) => {
        // console.log(res.data.data);
        this.flList = res.data.data;
        console.log(this.flList);
      });
    },

    go_fl(e) {
      this.$axios
        .post("/Parttime/showParttime", { pageNumber: 1, type: e })
        .then((res) => {
          // console.log(res.data.data);
          this.jzfl_list = res.data.data;
          // console.log(this.jzfl_list);
        });
    },
  },
  mounted() {
    this.hq_feilei();
    this.go_fl()
  },
};
</script>