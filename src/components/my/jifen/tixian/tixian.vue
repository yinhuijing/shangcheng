<template>
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">积分提现</div>
      <div class="head_home" @click="home"></div>
    </div>

    <div class="cash">
      <div class="cash-top">
        <p class="cash-p">提现金额</p>
        <div class="cash-input">
          <van-cell-group>
            <van-field
              v-model="withdraw_price"
              clearable
              type="number"
              label="￥"
              onkeyup="this.value= this.value.match(/\d+(\.\d{0,2})?/) ? this.value.match(/\d+(\.\d{0,2})?/)[0] : ''"
              placeholder="请输入金额"
            />
          </van-cell-group>
        </div>
        <div class="cash-top-b">
          <p class="cash-top-b-p1">可提现金额为{{value}}元</p>
          <p class="cash-top-b-p2" @click="quanbu">全部提现</p>
        </div>
      </div>

      <div class="cash-radio">
        <p class="cash-radio-p">提现方式</p>
        <van-radio-group class="cash-radio-list" v-model="withdraw_type">
          <van-radio name="1">
            银行卡
            <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal" />
          </van-radio>
          <!-- <van-radio   name="2">
				微信
					<img
					slot="icon"
					slot-scope="props"
					:src="props.checked ? icon.active : icon.normal">
          </van-radio>-->
        </van-radio-group>
      </div>

      <div class="cash-bottom" v-if="withdraw_type==1">
        <p class="cash-p">银行卡</p>
        <div class="cash-li">
          <p>银行卡号</p>
          <input type="number" v-model="bank_card" placeholder="请输入银行卡号" />
        </div>
        <div class="cash-li">
          <p>开户银行</p>
          <input type="text" v-model="open_card" placeholder="请输入开户银行" />
        </div>
        <div class="cash-li">
          <p>持卡人</p>
          <input type="text" v-model="cardholder" placeholder="请输入持卡人姓名" />
        </div>
      </div>

      <div class="cash-btn" @click="sumbit()">
        <p class="cash-btn-p">确认提现</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  methods: {
    quanbu() {
      //全部提现
      console.log("全部提现");
    },
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },

    sumbit() {
      //提交
      var that = this;
      var withdraw_price = that.withdraw_price;
      var withdraw_type = that.withdraw_type;
      var open_card = that.open_card;
      var cardholder = that.cardholder;
      var bank_card = that.bank_card;
      if (
        withdraw_price == "" ||
        withdraw_price == 0 ||
        open_card == "" ||
        cardholder == "" ||
        bank_card == ""
      ) {
        this.$toast("请将新信息填写完整");
      } else {
        this.$axios
          .post("/User/withdrawalInfo", {
            withdraw_price: withdraw_price,
            withdraw_type: withdraw_type,
            open_card: open_card,
            cardholder: cardholder,
            bank_card: bank_card,
          })
          .then(function (res) {
            if (res.data.code == 200) {
              Toast.success("提现申请已提交");
              that.$router.go(-1); //返回上一层
            } else {
              this.$toast(res.data.message);
            }
          })
          .catch(function (error) {});
      }
    },
  },
  data() {
    return {
      withdraw_price: 0, //输入金额
      value: 123400.01,
      price: 0, //实际金额
      checked: true,
      withdraw_type: "1", //支付方式 1银行卡 2微信
      cardholder: "", //持卡人
      open_card: "", //开户行
      bank_card: "", //银行卡号
      icon: {
        normal: require("../../../../assets/img/radio2.png"),
        active: require("../../../../assets/img/radio1.png"),
      },
    };
  },
};
</script>

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
      background: url(../../../../assets/img/back3.png) no-repeat;
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
    background: url(../../../../assets/img/home.png) no-repeat;
    background-size: 100% 100%;
  }
}

.cash {
  width: 100%;
  height: 100vh;
  padding: 0.4rem;
  box-sizing: border-box;
  background: #f2f2f2;
}
.cash-top,
.cash-bottom {
  padding: 0.4rem;
  border-radius: 0.1rem;
  box-shadow: 0px 0px 8px 1px #ddd;
  box-sizing: border-box;
  background: #fff;
}
.cash p {
  margin: 0;
}
.cash-p {
  display: block;
  font-size: 0.8rem;
  color: #333;
}
.cash-input {
  border-bottom: 1px solid #ddd;
}
.van-field__label {
  width: 0.6rem;
  margin-right: 0.3rem;
}
.van-cell {
  padding: 0.5rem 0;
}
.van-radio {
  margin-left: 0.5rem;
}
.van-radio .van-radio__icon {
  line-height: 0.8rem;
}
.cash-top-b {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.cash-top-b p {
  font-size: 0.7rem;
}
.cash-top-b-p1 {
  color: #999;
  font-size: 0.26rem;
}
.cash-top-b-p2 {
  color: #301de6;
  font-size: 0.26rem;
}
.cash-radio {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
}
.cash-radio-p {
  font-size: 0.7rem;
  color: #333;
}
.cash-radio-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cash-li {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  align-items: center;
}
.cash-li input {
  border: 0;
  width: 70%;
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding: 0.2rem 0;
  /* margin-left: 1rem; */
}
.cash-li p {
  color: #666666;
  font-size: 0.7rem;
  width: 30%;
  /* margin-right: 1rem; */
}
.cash-btn {
  margin-top: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
}
.cash-btn-p {
  display: inline-block;
  width: 5rem;
  height: 1.7rem;
  line-height: 1.7rem;
  background: #2b3edc;
  color: #fff;
  border-radius: 1rem;
  font-size: 0.7rem;
}
</style>
