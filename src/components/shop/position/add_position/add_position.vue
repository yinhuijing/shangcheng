<style lang="less" scoped>
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

.addAddress-list {
  width: 100%;
  padding: 0.4rem;
  box-sizing: border-box;
  .addAddress-li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 1.26rem;
    border-bottom: 1px solid #ddd;
  }
  .addAddress-lis {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.26rem;
    border-bottom: 1px solid #ddd;
    div {
      display: flex;
      align-items: center;
    }
  }
}

.vanpopup-top {
  display: flex;
  justify-content: space-between;
  span {
    font-size: 0.4rem;
    margin: 0.2rem 0.3rem;
    color: #301de6;
  }
}
</style>
<template>
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">添加地址</div>
      <div class="head_home" @click="home"></div>
    </div>

    <div class="addAddress-list">
      <div class="addAddress-li">
        <p>收货人:</p>
        <input type="text" v-model="receiver_name" placeholder="收货人姓名" />
      </div>
      <div class="addAddress-li">
        <p>手机号码:</p>
        <input type="tel" v-model="mobile" placeholder="收货人手机号" />
      </div>
      <!-- 	<div class="addAddress-lis" @click="addlist">
				<div>
					<p>所在地区:</p>
					<span class="span">{{address}}</span>
				</div>
				<img class="address-img" src="../../assets/img/8.png" alt="">
			</div> -->
      <div class="addAddress-lis">
        <div>
          <p>所在地区:</p>
          <span class="span" @click="shows1"
            >{{ addressname1 }} <img src="../../../../assets/img/bottomss.png" alt=""
          /></span>
          <span class="span" @click="shows2"
            >{{ addressname2 }} <img src="../../../../assets/img/bottomss.png" alt=""
          /></span>
          <span class="span" @click="shows3"
            >{{ addressname3 }} <img src="../../../../assets/img/bottomss.png" alt=""
          /></span>
        </div>
        <!-- <img class="address-img" src="../../assets/img/8.png" alt=""> -->
      </div>
      <div class="addAddress-li">
        <p>详细地址:</p>
        <input
          type="text"
          v-model="address_info"
          placeholder="请输入详细的收货地址,如道路、门牌号、
小区等"
        />
      </div>
    </div>
    <div class="addAddress-btn" @click="addAddress">
      <p>保存</p>
    </div>
    <van-popup v-model="show1" position="bottom" :overlay="true">
      <van-picker
        show-toolbar
        :columns="addList1"
        @confirm="confirm1"
        @cancel="shows"
        value-key="name"
      />
      <!-- <van-area :area-list="addList1" value-key="name" value="" @confirm="confirm" @cancel="shows"/> -->
    </van-popup>
    <van-popup v-model="show2" position="bottom" :overlay="true">
      <van-picker
        show-toolbar
        :columns="addList2"
        @confirm="confirm2"
        @cancel="shows"
        value-key="name"
      />
    </van-popup>
    <van-popup v-model="show3" position="bottom" :overlay="true">
      <van-picker
        show-toolbar
        :columns="addList3"
        @confirm="confirm3"
        @cancel="shows"
        value-key="name"
      />
    </van-popup>

    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      areaList: {},
      searchResult: [],
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/shop" });
    },
    go_back() {
      this.$router.go(-1);
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  add_address() {
    this.$axios
      .post("/Idle/addIdle", {
        receiver_name: addressInfo.name,
        mobile: addressInfo.tel,
        domain_id: addressInfo.id,
        address_info: addressInfo.addressDetail,
        is_default: addressInfo.isDefault,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>