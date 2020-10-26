<style lang="less" scoped>
.head_box {
  height: 2.2rem;
  width: 100%;
  border: 1px solid #eee;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  .header {
    height: 2.2rem;
    padding: 0 0.725314rem;
    font-size: 0.853333rem;
    border-bottom: 1px dashed #eee;
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
}

.xzlist_box {
  margin-top: 2.2rem;
  width: 100%;
  height: 100%;
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
  .xzlist_content {
    width: 70%;
    height: 100%;
    border-left: 1px solid #eee;
    box-sizing: border-box;
    margin-left: 5.2rem;
  }
  .xz_content {
    width: 100%;
    height: 10rem;
    box-sizing: border-box;
    padding: 0.5rem;
    background: #fff;
    margin-bottom: 1rem;
    .xz_main {
      width: 100%;
      height: 100%;
      .xz_pic {
        width: 100%;
        height: 5rem;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .xz_text {
        width: 100%;
        height: 2.5rem;
        text-align: left;
        margin-top: 0.5rem;
        div {
          font-size: 0.7rem;
          height: 1rem;
          line-height: 1rem;
        }
        .xz_title {
          font-size: 0.75rem;
          height: 1.5rem;
          line-height: 1.5rem;
        }
        .xzxq {
          a {
            color: red;
          }
        }
      }
      .xz_time {
        height: 1rem;
        background-color: #fff;
        line-height: 1rem;
        text-align: right;
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="head_box">
      <div class="header">
        <div class="head_back_box">
          <div class="head_back" @click="go_back"></div>
        </div>
        <div class="head_title">闲置交流</div>
        <div class="head_home" @click="home"></div>
      </div>
    </div>
    <div class="xzlist_box">
      <ul>
        <li v-for="(item, index) of xzflList" :key="index">
          <a href="###" @click="go_xzfl(index)">{{ item }}</a>
        </li>
      </ul>
      <div class="xzlist_content">
        <div
          class="xz_content"
          v-for="(ditem, index) in idelgoods"
          :key="index"
        >
          <div class="xz_main">
            <div class="xz_pic">
              <img :src="yum + ditem.cover" alt />
            </div>
            <div class="xz_text">
              <div class="xz_title">{{ ditem.title }}</div>
              <div class="xzxq">
                <a href="###" @click="go_xzxq(ditem.id)">查看详情</a>
              </div>
            </div>
            <div class="xz_time">发布时间：{{ ditem.created_at }}</div>
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
      idelgoods: [], // 分好类的列表
      xzflList: [], // 闲置分类列表
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
    go_xzxq(e) {
      this.$router.push({ path: "/xz_xq", query: { xid: e } });
    },
    fun() {
      this.yum = yum.utils.photoPrefix;
    },
    xzfl_list() {
      this.$axios.post("/Idlegoods/typeIdlegoods").then((res) => {
        // console.log(res.data.data);
        this.xzflList = res.data.data;
        console.log(this.xzflList);
      });
    },
    go_xzfl(e) {
      // console.log(e);
      this.$axios
        .post("/Idlegoods/showIdlegoods", { pageNumber: 1, type: e })
        .then((res) => {
          // console.log(res.data.data);
          this.idelgoods = res.data.data;
          console.log(this.idelgoods);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.xzfl_list();
    this.go_xzfl();
  },
  beforeMount() {
    this.fun();
  },
};
</script>