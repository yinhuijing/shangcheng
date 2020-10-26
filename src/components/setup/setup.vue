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
      background: url(../../assets/img/back3.png) no-repeat;
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
    background: url(../../assets/img/home2.png) no-repeat;
    background-size: 100% 100%;
  }
}
.set-up-list {
  background: #fff;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
  margin-bottom: 0.6rem;
  .setup-li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 0;
    border-bottom: 1px solid #ddd;
    height: 1.5rem;
    .set-up-left,
    .set-up-right {
      font-size: 0.7rem;
    }
    .set-up-right {
      .set-up-tx {
        display: block;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }
      .rightimg {
        width: 0.3rem;
      }
    }
  }
}

// .van-uploader__upload {
//   width: 0.93rem;
//   height: 0.93rem;
// }
// .set-up-right input {
//   border: 0;
//   text-align: right;
// }
</style>

<template>
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div>
      <div class="head_title">修改个人资料</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="set-up-list">
      <div class="setup-li">
        <div class="set-up-left">头像:</div>
        <div class="set-up-right">
          <img
            class="set-up-tx"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600166840429&di=919caf61bcdefb793616a1065bc90e3e&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F14%2Fw500h314%2F20190422%2F_yhd-hvvuiyn4823756.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="setup-li">
        <div class="set-up-left">昵称:</div>
        <div class="set-up-right">忽而今夏</div>
      </div>
      <div class="setup-li" @click="jump('add_school')">
        <div class="set-up-left">学校</div>
        <div class="set-up-right">
          {{ school }}
          <img class="rightimg" src="../../assets/img/8.png" alt="" />
        </div>
      </div>
      <div class="setup-li">
        <div class="set-up-left">会员号:</div>
        <div class="set-up-right">126845</div>
      </div>
      <div class="setup-li" @click="jump('setiphone')">
        <div class="set-up-left">手机号:</div>
        <div class="set-up-right">
          <!-- {{ phone }} -->
          <img class="rightimg" src="../../assets/img/8.png" alt="" />
        </div>
      </div>
      <div class="setup-li">
        <div class="set-up-left">出生年月:</div>
        <div class="set-up-right">2020.02.03</div>
      </div>
    </div>

    <div class="set-up-list">
      <div class="setup-li">
        <div class="set-up-left">推荐人:</div>
        <div class="set-up-right">{{ tjr }}</div>
      </div>
      <div class="setup-li">
        <div class="set-up-left">推广码:</div>
        <div class="set-up-right">5684</div>
      </div>
      <div class="setup-li">
        <div class="set-up-left">级别:</div>
        <div class="set-up-right">一级</div>
      </div>
    </div>

    <div class="set-up-list">
      <div class="setup-li" @click="jump('address')">
        <div class="set-up-left">地址</div>
        <div class="set-up-right">
          <img class="rightimg" src="../../assets/img/8.png" alt="" />
        </div>
      </div>
      <div class="setup-li">
        <div class="set-up-left">是否开启充值显示:</div>
        <div class="set-up-right">
          <van-switch
            v-model="checked"
            active-color="#07c160"
            inactive-color="#f44"
            size="24px"
          />
        </div>
      </div>
      <div class="setup-li border-0" @click="jump('setmima')">
        <div class="set-up-left">支付密码修改</div>
        <div class="set-up-right">
          <img class="rightimg" src="../../assets/img/8.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      sid: "",
      school: "",
      tjr: "",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push({ path: "/shop" });
    },
    jump(e) {
      console.log(e);
      this.$router.push(e);
    },
    gettjr() {
      this.$axios
        .post("/User/referrerInfo")
        .then((res) => {
          // console.log(res);
          this.tjr = res.data.data.nickname;
          // console.log(this.tjr)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getschool() {
      this.$axios
        .post("/User/getoneSchool", { school: this.sid })
        .then((res) => {
          console.log(res.data.data[0].name);
          this.school = res.data.data[0].name;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.sid = this.$route.query.id;
  },
  mounted() {
    this.gettjr();
    this.getschool();
  },
};
</script>