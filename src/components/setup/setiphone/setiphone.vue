<template>
  <div class="upMobile">
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div>
      <div class="head_title">修改手机号</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="upMobile-list">
      <div class="upMobile-lis">
        <div class="iphone_main">
          <p>手机号:</p>
          <input type="tel" v-model="phone" placeholder="请输入手机号" />
        </div>
        <span v-show="show" @click="getCode">{{ msg }}</span>
        <span v-show="!show" class="count">{{ count }}s</span>
      </div>
      <div class="upMobile-li">
        <p>验证码:</p>
        <input type="number" v-model="code" placeholder="请输入验证码" />
      </div>
    </div>

    <div class="upMobile-btn">
      <button @click="upMobile">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "upMobile",
  data() {
    return {
      show: true,
      code: "",
      phone: "",
      count: "",
      timer: null,
      msg: "获取验证码",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push({ path: "/shop" });
    },
    upMobile() {
      //按钮
      var phone = this.phone;
      var code = this.code;
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (code == "" || phone == "") {
        this.$toast("请将信息填写完整");
        return false;
      } else if (!myreg.test(phone)) {
        this.$toast("请填写正确的手机号");
        return false;
      } else {
        this.$axios
          .post("/User/updatePhone", {
            phone: phone,
            code: code,
          })
          .then((res) => {
            console.log(res);
            // 获取验证码
            if (res.data.code == 200) {
              this.$toast("修改成功");
            } else {
              this.$toast(res.data.message);
            }
          })
          .catch(function (error) {});
      }
      this.$router.push({ path: "/setup", query: { phone: this.phone } });
    },
    getCode() {
      var phone = this.phone;
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/; // 验证手机号
      if (!myreg.test(phone)) {
        this.$toast("请填写正确的手机号");
        return false;
      } else {
        this.msg = "重新获取验证码";
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;

          this.$axios
            .post("/User/sendCode", {
              phone: phone,
            })
            .then(function (res) {
              // 获取验证码
              if (res.data.code == 200) {
                console.log(res);
              } else {
                this.$toast("请求失败");
              }
            })
            .catch(function (error) {});

          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }
      }
    },
    // bc() {
    //   // this.$router.push({ path: "/setup", query: { phone: this.phone } });
    // },
  },
};
</script>

<style lang='less' scoped>
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

input {
  background-color: #f5f5f5;
  border: none;
}
p {
  font-size: 0.7rem;
  color: #333;
  margin: 0 0.5rem 0 0;
  width: 2.3rem;
}

.areaList {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.upMobile-list {
  width: 100%;
  padding: 0.4rem;
  box-sizing: border-box;
  .upMobile-lis {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    border-bottom: 1px solid #ddd;
    .iphone_main {
      height: 100%;
      line-height: 2rem;
      display: flex;
      align-items: center;
    }
  }
  .upMobile-li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 2rem;
    border-bottom: 1px solid #ddd;
    input {
      font-size: 0.32rem;
      color: #999999;
      width: 7rem;
    }
  }
}

.address-img {
  width: 0.2rem;
}

.upMobile-btn {
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  button {
    border: none;
    background-color: red;
    border-radius: 0.7rem;
    padding: 0.3rem;
    width: 5rem;
    letter-spacing: 0.3rem;
    margin-top: 0.2rem;
    color: white;
  }
}
</style>
