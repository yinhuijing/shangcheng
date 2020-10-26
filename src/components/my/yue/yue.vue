<template>
  <div>
    <div v-for="(item, index) in moneyList" :key="index">
      <div class="header">
        <div class="head_back_box">
          <div class="head_back" @click="go_back"></div>
        </div>
        <div class="head_title">余额</div>
        <div class="head_home" @click="home"></div>
      </div>

      <div class="currency">
        <div class="currency-header">
          <div class="currency-header-center">
            <p class="currency-header-p1">余额</p>
            <p class="currency-header-p2">{{ item.balance_price }}</p>
            <div class="currency-header-btn" @click="jump('recharge')">
              <p>充值</p>
            </div>
          </div>
        </div>

        <div class="currency-bottom">
          <p class="currency-bottom-p1">账单流水记录</p>
          <van-list v-model="loading" :finished="finished" @load="onLoad">
            <div class="currency-list">
              <div
                class="currency-li"
                v-for="(yueitem, index) in moneyList[0].price_score"
                :key="index"
              >
                <div class="currency-li-left">
                  <p class="currency-li-p1">{{ yueitem.content }}</p>
                  <p class="currency-li-p2">{{ yueitem.created_at }}</p>
                </div>
                <div class="currency-li-right" v-if="item.type == 1">
                  -{{ yueitem.virtual_coin }}
                </div>
                <div class="currency-li-right" v-if="item.type != 1">
                  +{{ yueitem.virtual_coin }}
                </div>
              </div>
            </div>
          </van-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moneyList: [],
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    jump(e) {
      console.log(e);
      this.$router.push(e);
    },
    home() {
      this.$router.push({ path: "/index" });
    },
    go_back() {
      this.$router.go(-1);
    },
    moneylData() {
      this.$axios
        .post("/User/topUpScore", { pageNumber: 1 })
        .then((res) => {
          console.log(res);
          this.moneyList.push(res.data.data);
          console.log(this.moneyList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onLoad() {
      // 异步更新数据
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 500);
    },
  },
  mounted() {
    this.moneylData();
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

.currency p {
  margin: 0;
}

.currency {
  .currency-header {
    width: 100%;
    height: 8rem;
    background: url(../../../assets/img/25curry.png) 50% 50%;
    background-size: 100%;
    display: flex;
    justify-content: flex-end;
    .currency-header-center {
      width: 5rem;
      height: 3.5rem;
      margin-right: 1rem;
      margin-top: 2rem;
      color: #fff;
      p {
        height: 1rem;
        text-align: left;
        margin-left: 0.5rem;
        font-size: 0.7rem;
        line-height: 1rem;
      }
      .currency-header-btn {
        height: 1.5rem;
        p {
          padding: 0.1rem 0.3rem;
          border-radius: 2px;
          background: #fff;
          color: #301de6;
          font-size: 0.32rem;
          float: left;
          margin-top: 0.15rem;
        }
      }
    }
  }
  .currency-bottom {
    padding: 0.4rem;
    box-sizing: border-box;
    .currency-bottom-p1 {
      color: #301de6;
      font-size: 0.75rem;
      margin: 0.1rem 0;
    }
  }
}

.currency-list {
  margin: 0.5rem 0;
  .currency-li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 0.2rem 0;
    align-items: center;
    height: 2rem;
    text-align: left;
    font-size: 0.7rem;
    .currency-li-left {
      .currency-li-p1 {
        color: #666;
        margin-bottom: 0.2rem;
      }
      .currency-li-p2 {
        color: #999999;
      }
    }
    .currency-li .currency-li-left .currency-li .currency-li-right {
      color: #333333;
    }
  }
}
</style>
