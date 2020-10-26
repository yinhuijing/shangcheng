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
</style>

<template>
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">地址列表</div>
      <div class="head_home" @click="home"></div>
    </div>

    <van-address-list
      v-model="chosenAddressId"
      :list="address_type"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: "16",
      address_type: [],
      oid: "",
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/shop" });
    },
    go_back() {
      this.$router.go(-1);
    },
    onAdd() {
      this.$router.push({ path: "/add_position" });
    },
    onEdit(item, index) {
      this.oid = item.id;
      console.log(this.oid);
      this.$router.push({
        path: "/edit_position",
        query: { oid: this.oid },
      });
    },
  },
  mounted() {
    this.$axios.post("/Address/showAddress").then((res) => {
      console.log(res);
      res.data.data.forEach((item) => {
        let obj = {
          name: "", // 收货人姓名
          address: [], // 收货地址
          tel: "", // 收货人电话
          id: "", // 收货地址id
        };
        (obj["name"] = item.receiver_name),
          (obj["address"] = item.address + item.address_info),
          (obj["tel"] = item.mobile),
          (obj["id"] = item.id),
          this.address_type.push(obj);
      });
      // console.log(this.address_type);
    });
  },
};
</script>