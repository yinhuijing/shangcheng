<template>
  <div class="goods">
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">商品详情</div>
      <div class="head_home" @click="home"></div>
    </div>
    <div class="spxq">
      <!-- 商品轮播 -->
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="(item, index) of gxqList.slideshow" :key="index">
          <img :src="yum + item" />
        </van-swipe-item>
      </van-swipe>
      <!-- 商品价格 -->
      <article class="prod_detail">
        <div class="price_info">
          <span class="cur_price">￥{{ gxqList.price }}</span>
          <div class="dbtext">
            <del class="cost_price">￥{{ gxqList.original_price }}</del>
          </div>
          <div class="dbtext" style="width: 5rem; margin-left: 0">
            <span
              style="
                display: block;
                float: left;
                line-height: 1.49333rem;
                position: absolute;
                bottom: 0;
              "
              >会员价：<span>￥{{ gxqList.virtual_coin }}</span>
            </span>
          </div>
          <strong
            ><span>{{ gxqList.actual_sales }}</span
            >人已购买</strong
          >
        </div>
      </article>
      <!-- 商品名称 -->
      <div class="desc_wrap" style="border-top: 1px solid #eee">
        <div class="normal_desc">{{ gxqList.name }}</div>
      </div>
      <!-- 商品地址 -->
      <div class="additional_info">
        <div class="select_site">
          <strong class="site_label">地址</strong>
          <p class="site_choice" @click="q_address">
            至
            <i></i>北京市-市辖区-东城区
          </p>
        </div>
        <a href="###" class="additional_list">
          <div class="postage_wrap">
            <div class="postage_type">运费</div>
            <div class="postage_content">
              <span class="tip_word">单品包邮</span>
              <span class="arrow_icon_right"></span>
            </div>
          </div>
        </a>
      </div>
      <!-- 图文详情 -->
      <div class="tuwen_main">
        <div class="detail_img">
          <div v-html="gxqList.detail_urls"></div>
        </div>
      </div>
      <!-- 购物车栏 -->
      <van-goods-action>
        <van-goods-action-icon icon="chat-o">客服</van-goods-action-icon>
        <van-goods-action-icon icon="cart-o" @click="onClickCart"
          >购物车</van-goods-action-icon
        >
        <van-goods-action-button type="warning" @click="sorry"
          >加入购物车</van-goods-action-button
        >
        <van-goods-action-button type="danger" @click="sorry"
          >立即购买</van-goods-action-button
        >
      </van-goods-action>

      <!-- <van-popup v-model="showBase" position="bottom" round>
        <div class="title">
          <img :src="yum + gxqList.cover" alt="" />
          <div class="text">
            <div class="price">
              ￥<b>{{ price }}</b>
            </div>
            <span>请选择商品规格</span>
          </div>
        </div>
        <div class="content">
          <div class="item" v-for="(item, index) in guig_type" :key="index">
            <h2>{{ item.name }}</h2>
            <div class="val">
              <p
                @click="sku_id(val.id, index, i)"
                :class="{ active: val.active == true }"
                v-for="(val, i) in item.list"
                :key="i"
              >
                {{ val.name }}
              </p>
            </div>
          </div>
          <div class="num">
            <p>购买数量</p>
            <van-stepper min="1" v-model="value" />
          </div>
          <div class="btn">
            <button>加入购物车</button>
            <button>立即购买</button>
          </div>
        </div>
      </van-popup> -->

      <div class="guige" v-show="showBase">
        <div class="close">
          <img src="../../../assets/img/10close.png" alt="" @click="close" />
        </div>
        <div class="shop_pic">
          <div class="shopic_main">
            <img :src="yum + gxqList.cover" alt="" />
          </div>
          <div class="shop_text">
            <span class="shop_js">{{ gxqList.name }}</span>
            <span class="shop_js" style="color: red; font-size: 0.75rem"
              >￥{{ price }}
            </span>
            <span class="shop_js" style="display: block; float: left"
              >(库存：{{ stock_num }})</span
            >
            <span class="shop_js"
              >已选规格：<span
                v-for="(sitem, index) in showSelectSpec"
                :key="index"
                >{{ sitem[0].standardName }}</span
              >
            </span>
          </div>
        </div>
        <div
          class="guige_list"
          v-for="(gitem, index) in guig_type"
          :key="index"
        >
          <div class="gglist_text">{{ gitem.name }}：</div>
          <div class="gglist_main">
            <ul>
              <!-- sku_id 方法，用来获取点击项，给对应的数据高亮显示，并拿到点击的id -->
              <li
                v-for="(val, i) in gitem.list"
                :key="i"
                @click="sku_id(val.attrValueId, index, i)"
                :class="{ active: val.active == true }"
              >
                {{ val.standardName }}
              </li>
            </ul>
          </div>
        </div>
        <div class="number_box">
          <div class="number_text">购买数量：</div>
          <div class="add_reduce_box">
            <span class="decrease"></span>
            <span>{{ value }}</span>
            <span class="increase"></span>
          </div>
        </div>
        <van-goods-action>
          <van-goods-action-button type="warning" @click="addCart"
            >加入购物车</van-goods-action-button
          >
          <van-goods-action-button type="danger"
            >立即购买</van-goods-action-button
          >
        </van-goods-action>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import yum from "../../../../data/yum.js";
export default {
  data() {
    return {
      gid: "", //获取该商品的id
      gxqList: {}, //该商品详情的数据
      yum: "", // 数据中图片的域名

      showBase: false, //sku的框的显示
      price: "", // 商品默认价格
      stock_num: "", //商品默认库存
      if_sku: true, //判断该商品是否有规格
      guig_type: [], //规格数据

      skuPrice: [], //规格对应的价格和库存
      select_id: [], //选中的规格id、组成的数组

      select_id2: [], //选中的规格id、需要提交给后台
      value: "", //商品购买数量

      showSelectSpec: [], //已选规格
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/shop" });
    },
    go_back() {
      this.$router.go(-2);
    },
    q_address() {
      this.$router.push({ path: "/address" });
    },
    sorry() {
      this.showBase = !this.showBase;
    },
    close() {
      this.showBase = !this.showBase;
    },
    // 进入购物车
    onClickCart() {
      this.$router.push({ path: "/buy_car" });
    },
    fun() {
      this.yum = yum.utils.photoPrefix;
    },
    // 规格选择
    sku_id(id, index, i) {
      this.select_id[index] = this.guig_type[index].list.filter((item) => {
        return item.attrValueId == id;
      });
      console.log(this.select_id);
      // 已选规格
      this.showSelectSpec = this.select_id;

      // 点击的是哪个规格，在点击后的高亮处理
      this.guig_type[index].list.forEach((item) => {
        if (item.attrValueId == id) {
          this.guig_type[index].list[i].active = true;
        } else {
          item.active = false;
        }
      });

      this.$axios
        .post(
          "/Goods/getAttr",
          qs.stringify({
            applyId: this.select_id[0],
            applyInfo: this.applyInfo,
          })
        )
        .then((res) => {
          // console.log(res.data.data);
          this.logoList.push(res.data.data);
          console.log(this.logoList[0]);
        })
        .catch((err) => {
          console.log(err);
        });

      // 如果我们选择后的规格数组id、和接口返回的skuPrice中的某一项全等，就返回skuPrice中全等的数据
      let arr = this.skuPrice.filter((item) => {
        return (
          this.select_id.length === item.guig_type.length &&
          this.select_id.every((a) => item.guig_type.some((b) => a === b)) &&
          item.guig_type.every((_b) => this.select_id.some((_a) => _a === _b))
        );
      });
      if (arr.length == 0) {
        this.stock_num = 0; // 没有库存
      } else {
        this.select_id2 = arr[0].guig_type;
        this.price = arr[0].price; //商品价格
        this.stock_num = arr[0].stock; //商品库存
      }
    },
  },
  created() {
    this.gid = this.$route.query.id;
  },
  mounted() {
    this.$axios
      .post("/Goods/goodsDetails", { goods_id: this.gid })
      .then((res) => {
        console.log(res.data.data);
        this.price = res.data.data.price; //商品默认价格
        this.stock_num = res.data.data.stock; //商品默认总库存
        this.gxqList = res.data.data;

        if (res.data.data.attr_sku.length == 0) {
          //无规格
          this.if_sku = false;
        } else {
          //有规格
          this.if_sku = true;
          res.data.data.attr_sku.forEach((item) => {
            // 这里的item 就是接口返回的 sku,
            let obj = {
              name: "", // 大规格名称：如颜色，尺寸
              list: [], // 具体的大规格下的小规格，如颜色下边有黑色，白色
            };
            (obj["name"] = item.standardListName), //大规格名称
              (obj["list"] = item.standardInfoList), //具体某个规格下的所有规格
              obj.list.forEach((val) => {
                this.$set(val, "active", false); // 新增active字段来判断当前选中高亮状态
              });
            this.guig_type.push(obj); // this.sku 用来循环渲染页面
            // console.log(this.guig_type)
          });
        }
      })
      .catch(function (error) {
        // 请求失败处理
        console.log(error);
      });
  },
  beforeMount() {
    this.fun();
  },
};
</script>

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
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 0.5rem 0 0 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.tuwen_main {
  min-height: 633.535px;
  background-color: #fff;
  .detail_img {
    position: relative;
    overflow: hidden;
    background-color: #fff;
    img {
      display: block;
      width: 100%;
    }
  }
}
.prod_detail {
  width: 100%;
  height: 2.2rem;
  box-sizing: border-box;
  padding: 0.5rem 0.64rem 0 0.64rem;
  background-color: #fff;
  .price_info {
    width: 100%;
    color: #f33873;
    height: 100%;
    .cur_price {
      float: left;
      font-size: 1.34rem;
      line-height: 1.7rem;
    }
    .dbtext {
      position: relative;
      float: left;
      width: 2rem;
      height: 100%;
      margin-left: 0.3rem;
      font-size: 0.75rem;
      .cost_price {
        color: #666666;
        position: absolute;
        bottom: 0.2rem;
        left: 0rem;
        text-decoration: line-through;
      }
    }
    strong {
      float: right;
      font-weight: 400;
      color: #666;
      font-size: 0.7rem;
      line-height: 1.7rem;
    }
  }
}

.guige {
  width: 100%;
  height: 25rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  border: 1px solid #eee;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  box-sizing: border-box;
  .close {
    width: 100%;
    height: 2rem;
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
    img {
      float: right;
      margin-right: 0.8rem;
      margin-top: 0.5rem;
    }
  }
  .shop_pic {
    height: 5rem;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
    .shopic_main {
      width: 30%;
      height: 100%;
      float: left;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .shop_text {
      float: left;
      width: 70%;
      height: 100%;
      .shop_js {
        display: block;
        width: 100%;
        height: 1rem;
        text-align: left;
        padding-left: 0.5rem;
        line-height: 1rem;
        box-sizing: border-box;
        margin-top: 0.25rem;
        span {
          margin-right: 0.2rem;
        }
      }
    }
  }
  .guige_list {
    width: 100%;
    height: 3.5rem;
    box-sizing: border-box;
    .gglist_text {
      width: 100%;
      height: 1.5rem;
      line-height: 1.5rem;
      text-align: left;
      padding-left: 1.5rem;
      font-size: 0.75rem;
    }
    .gglist_main {
      height: 2rem;
      ul {
        list-style: none;
        height: 100%;
        li {
          float: left;
          margin: 0.3rem 0 0 1rem;
          width: 4rem;
          height: 1.5rem;
          border: 1px solid #b3b3b3;
          border-radius: 0.8rem;
          line-height: 1.5rem;
          text-align: center;
        }
      }
    }
  }
  .number_box {
    width: 100%;
    height: 1.8rem;
    margin-top: 0.4rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: flex;
    .number_text {
      height: 100%;
      flex-direction: column;
      flex: 1;
      text-align: left;
      margin-left: 1.2rem;
      line-height: 1.7rem;
    }
    .add_reduce_box {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      .decrease,
      .increase {
        display: block;
        width: 1.2rem;
        height: 1.2rem;
      }
      .decrease {
        background: url(../../../assets/img/jian.png) no-repeat;
        background-size: 100% 100%;
      }
      .increase {
        background: url(../../../assets/img/jia.png) no-repeat;
        background-size: 100% 100%;
      }
      span:nth-child(2) {
        width: 1.5rem;
        height: 1.2rem;
        line-height: 1.2rem;
        color: #333;
        text-align: center;
      }
    }
  }
}

.active {
  color: #fff;
  background-color: pink;
}

.desc_wrap {
  padding-top: 0.53333rem;
  padding-bottom: 0.53333rem;
  padding-left: 0.64rem;
  padding-right: 0.64rem;
  line-height: 1.06667rem;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 14px;
  color: #333;
  .normal_desc {
    line-height: 1.25rem;
    height: 1.23671rem;
    text-align: left;
  }
}
.additional_info {
  margin-bottom: 8px;
  background-color: #fff;
  text-align: left;
  .select_site {
    overflow: hidden;
    background: #fff;
    color: #999;
    font-size: 13px;
    position: relative;
    margin-left: 0.61333rem;
    margin-right: 0.61333rem;
    padding-top: 0.61333rem;
    padding-bottom: 0.61333rem;
    border-bottom: 1px solid #eee;
    strong {
      font-weight: normal;
      float: left;
      line-height: 15px;
      width: 22%;
      text-align: left;
    }
    .site_choice {
      float: left;
      cursor: pointer;
      color: #333;
      font-size: 13px;
      line-height: 15px;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 77%;
      height: 15px;
      overflow: hidden;
      i {
        display: inline-block;
        width: 0.50667rem;
        height: 0.64rem;
        background: url(../../../assets/img/address.png) no-repeat center center;
        background-size: 100% 100%;
        margin-top: -2px;
        margin-left: 3px;
        margin-right: 3px;
        vertical-align: middle;
      }
    }
    &::after {
      content: "";
      position: absolute;
      width: 0.32rem;
      height: 0.64rem;
      top: 0.69333rem;
      right: 0.42667rem;
      background-image: url(../../../assets/img/you.png);
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .additional_list {
    display: block;
    margin-left: 0.64rem;
    margin-right: 0.64rem;
    border-bottom: 1px solid #eee;
    font-size: 0.65rem;
    .postage_wrap {
      overflow: hidden;
      line-height: 0;
      .postage_type {
        width: 22%;
        color: #999;
        display: inline-block;
        font-size: 13px;
        line-height: 13px;
        vertical-align: top;
        float: left;
        padding: 0.64rem 0;
      }
      .postage_content {
        display: inline-block;
        width: 78%;
        overflow: hidden;
        position: relative;
        padding-top: 0.64rem;
        padding-bottom: 0.50667rem;
        color: #333;
        font-size: 13px;
        line-height: 13px;
        .tip_word {
          overflow: hidden;
          width: 96%;
        }
        .arrow_icon_right {
          display: inline-block;
          width: 0.32rem;
          height: 0.64rem;
          background: url(../../../assets/img/you.png) no-repeat;
          background-size: contain;
          position: absolute;
          top: 0.69333rem;
          right: 0.42667rem;
        }
      }
    }
  }
}
</style>