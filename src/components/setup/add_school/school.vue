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

.el-form-item__label {
  width: 30%;
  height: 100%;
  line-height: 3rem;
  padding: 0;
}

.el-form {
  height: 5rem;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  .el-form-item {
    width: 100%;
    height: 100%;
    margin-bottom: 0;

    .el-form-item__content {
      width: 70%;
      height: 100%;
    }
  }
  .layui-input-inline {
    float: left;
    width: 70%;
    margin: 0;
    .select {
      border: none;
      width: 100%;
      height: 2rem;
      border-radius: 0.3rem;
      padding: 0.5rem;
    }
  }
}

.qued {
  width: 100%;
  height: 2rem;
  a {
    display: block;
    background-color: skyblue;
    width: 5rem;
    height: 1.6rem;
    line-height: 1.6rem;
    margin: 0.2rem auto;
    border-radius: 0.8rem;
  }
}
</style>

<template>
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div>
      <div class="head_title">添加学校</div>
      <div class="head_home" @click="home"></div>
    </div>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="选择学校：">
        <el-select
          v-model="form.region"
          @change="xzschool"
          placeholder="请选择学校："
        >
          <el-option
            v-for="(item, index) in schoolList[0]"
            :key="index"
            :label="item.name"
            :value="item.id"
            >{{ item.name }}</el-option
          >
        </el-select>
      </el-form-item>
    </el-form>

    <div class="qued"><a href="###" @click="qued">保存学校</a></div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      schoolList: [],
      form: { region: "" },
      xz_school: "",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push({ path: "/shop" });
    },
    schoolData() {
      this.$axios
        .post("/User/getSchool")
        .then((res) => {
          // console.log(res);
          this.schoolList.push(res.data.data);
          console.log(this.schoolList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    xzschool(xid) {
      console.log(xid);
      let obj = {};
      obj = this.schoolList[0].find((item) => {
        return item.id === xid;
      });
      console.log(obj.id);
      this.xz_school = obj.id;
    },
    qued() {
      this.$router.push({ path: "/setup", query: { id: this.xz_school } });
    },
  },
  mounted() {
    this.schoolData();
  },
};
</script>