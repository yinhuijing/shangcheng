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

.layui-form-label {
  width: 3rem;
  padding-left: 0.2rem;
}
.layui-input-inline {
  margin-left: 4rem;
  margin-top: 0.5rem;
  .layui-input {
    margin-top: 0.6rem;
  }
}
.loginpwd-btn {
  width: 100%;
  height: 2rem;
  button {
    border: none;
    // background-color: red;
    background-image: linear-gradient(to right, #ff3200 0%, #ff6d34 35%,#0dcaef 100%);
    border-radius: 0.7rem;
    padding: 0.3rem;
    width: 5rem;
    letter-spacing: 0.3rem;
    margin-top: 0.2rem;
    color: white;
  }
}
</style>

<template>
  <div class="loginpwd">
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">修改支付密码</div>
      <div class="head_home" @click="home"></div>
    </div>

    <div class="loginpwd-list">
      <form class="layui-form" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">初始密码</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="password1"
              v-model="password1"
              required
              lay-verify="required"
              placeholder="请输入初始密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">新密码</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="password2"
              v-model="password2"
              required
              lay-verify="required"
              placeholder="请输入新密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">确认密码</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="password3"
              v-model="password3"
              required
              lay-verify="required"
              placeholder="再次输入密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
      </form>

      <!-- <div class="loginpwd-li">
        <input
          type="password"
          v-model="password1"
          placeholder="请输入初始密码"
        />
      </div>
      <div class="loginpwd-li">
        <input type="password" v-model="password2" placeholder="请输入新密码" />
      </div>
      <div class="loginpwd-li">
        <input
          type="password"
          v-model="password3"
          placeholder="再次输入新密码"
        />
      </div> -->
    </div>

    <div class="loginpwd-btn" @click="paypwd">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "paypwd",
  data() {
    return {
      //   show: true,
      password1: "",
      password2: "",
      password3: "",
    };
  },
  methods: {
    paypwd() {
      //新增按钮
      var name = this.name;
      var password1 = this.password1;
      var password2 = this.password2;
      var password3 = this.password3;

      if (password1 == "" || password2 == "" || password3 == "") {
        this.$toast("请将信息填写完整");
        return false;
      } else if (password1.length != 6) {
        this.$toast("支付密码必须为6位数字");
        return false;
      } else if (password2 != password3) {
        this.$toast("两次密码输入不同");
        return false;
      } else {
        // this.$toast("提交信息");
        this.$axios
          .post("/User/updatePwd", {
            password1: password1,
            password2: password2,
            password3: password3,
          })
          .then(function (res) {
            if (res.data.code == 200) {
              this.$toast("修改成功");
              that.$router.go(-1); //返回上一层
            } else {
              this.$toast(res.data.message);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    loginpwd() {
      console.log("保存成功");
    },
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    // layui.use("form", () => {
    //   var $ = layui.jquery; //不用额外加载jQuery，flow模块本身是有依赖jQuery的，直接用即可。
    //   var form = layui.form;
    //   // 自定义验证规则
    //   form.verify({
    //     pass: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
    //   });
    // });
  },
};
</script>


