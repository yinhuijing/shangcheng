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
  // .head_back_box {
  //   width: 0.7198rem;
  //   .head_back {
  //     width: 0.39975845rem;
  //     height: 0.7198rem;
  //     background: url(../../../assets/img/back3.png) no-repeat;
  //     background-size: 100% 100%;
  //   }
  // }
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

.select_school {
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  box-sizing: border-box;
  font-size: 0.75rem;
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
      <!-- <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div> -->
      <div class="head_title">修改学校</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="select_school">
      选择学校：
      <el-select
        v-model="value"
        filterable
        placeholder="请选择学校："
        @change="xzschool"
      >
        <el-option
          v-for="item in schoolList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </div>

    <div class="qued"><a href="###" @click="qued">保存学校</a></div>

    <div @click="aa">啊啊啊啊啊啊啊啊</div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      value: "",
      schoolList: [], // 学校列表
      // xz_school:"" // 学校id
    };
  },
  methods: {
    // back() {
    //   this.$router.go(-1);
    // },
    home() {
      this.$router.push({ path: "/index" });
    },
    schoolData() {
      this.$axios
        .post("/User/getSchool")
        .then((res) => {
          // console.log(res.data.data);
          this.schoolList = res.data.data;
          console.log(this.schoolList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    xzschool(xid) {
      console.log(xid);
      this.xz_school = xid;
      console.log(this.xz_school);
    },
    aa() {
      console.log(this.xz_school);
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