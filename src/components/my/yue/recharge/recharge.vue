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
      background: url(../../../../assets/img/back3.png) no-repeat;
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
    background: url(../../../../assets/img/home2.png) no-repeat;
    background-size: 100% 100%;
  }
}
.cz_box {
  width: 100%;
  height: 12rem;
  font-size: 0.8rem;
  background-color: #fff;
  .cz_title {
    height: 30%;
    text-align: left;
    padding: 0.5rem;
    box-sizing: border-box;
    div {
      width: 100%;
      height: 50%;
      line-height: 1.3rem;
    }
  }
  .cz_num {
    width: 100%;
    height: 50%;
    ul {
      width: 100%;
      height: 100%;
      list-style: none;
      padding: 0.5rem;
      box-sizing: border-box;
      li {
        float: left;
        width: calc(100% / 3);
        height: 50%;
        a {
          display: block;
          width: 70%;
          height: 50%;
          margin: 0.6rem 0.7rem;
          text-align: center;
          border: 1px solid #4e4949;
          border-radius: 0.8rem;
        }
      }
    }
  }
  .zhif {
    width: 100%;
    height: 20%;
    a {
      display: block;
      height: 70%;
      width: 30%;
      margin: 0 auto;
      color: white;
      border-radius: 0.8rem;
      text-align: center;
      line-height: 1.7rem;
      background-color: orange;
      opacity: 0.5;
    }
  }
}

.active {
  color: white;
  background-color: red;
  border: none;
}
</style>
<template>
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div>
      <div class="head_title">充值中心</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="cz_box">
      <div class="cz_title">
        <div class="xzje">请选择你要充值的金额</div>
        <div style="font-size: 0.7rem">
          实际充值金额：
          <span>
            ￥
            <span class="cznum">{{ cznum_val }}</span>
          </span>
        </div>
      </div>
      <div class="cz_num">
        <ul>
          <li>
            <a href="###" class="active">10元</a>
          </li>
          <li>
            <a href="###">20元</a>
          </li>
          <li>
            <a href="###">30元</a>
          </li>
          <li>
            <a href="###">50元</a>
          </li>
          <li>
            <a href="###">100元</a>
          </li>
          <li>
            <a href="###">500元</a>
          </li>
        </ul>
      </div>
      <div class="zhif">
        <a href="###">确认支付</a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      cznum_val: 0,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push({ path: "/shop" });
    },
    cz_num() {
      console.log($('.cznum').html());
      $(".cz_num ul li").click(function () {
        $(this).find("a").addClass("active");
        $(this).siblings().find("a").removeClass("active");
        var a = $(this).find("a").text();
        console.log(a);
        $('.cznum').html(a)
      });
    },
  },
  mounted() {
    this.cz_num();
  },
};
</script>