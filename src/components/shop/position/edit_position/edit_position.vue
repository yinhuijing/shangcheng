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
</style>
<template>
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">编辑地址</div>
      <div class="head_home" @click="home"></div>
    </div>

    <van-address-edit
      :area-list="areaList"
      :addressInfo="edit_address"
      show-delete
      show-set-default
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      oid: "",
      areaList: { id: "", name: "", pid: "", level: "" },
      edit_address: { name: "", tel: "", addressDetail: "", isDefault: "" },
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
    // 点击保存
    onSave() {
      Toast("save");
    },
    // 点击删除
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
    edshuju() {
      // console.log(this.oid)
      this.$axios
        .post("/Address/getEdit", { address_id: this.oid })
        .then((res) => {
          // console.log(res.data.data);
          // this.address_edit.push(res.data.data);
          // console.log(this.address_edit);
          this.edit_address.name = res.data.data.receiver_name;
          this.edit_address.tel = res.data.data.mobile;
          this.edit_address.addressDetail = res.data.data.address_info;
          this.edit_address.isDefault = res.data.data.is_default;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    get_address() {
      this.$axios
        .post("/User/getRegion", { pid: 1 })
        .then((res) => {
          console.log(res.data.data);
          this.areaList.id = res.data.data.id;
          this.areaList.name = res.data.data.name;
          this.areaList.pid = res.data.data.pid;
          this.areaList.level = res.data.data.level;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.oid = this.$route.query.oid;
  },
  mounted() {
    this.edshuju();
    this.get_address();
  },
};
</script>