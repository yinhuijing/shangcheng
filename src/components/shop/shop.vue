<style scoped lang="less">
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
      background: url(../../assets/img/back3.png) no-repeat;
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
    background: url(../../assets/img/home.png) no-repeat;
    background-size: 100% 100%;
  }
}
.van-grid {
  margin-top: 0.8rem;
  .van-grid-item {
    padding: 0.2rem;
  }
}
.index-nav {
  width: 100%;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  .index-nav-li {
    text-align: center;
    width: calc(100% / 4);
    img {
      width: 1rem;
      height: 1rem;
      display: inline-block;
    }
    p {
      color: #666;
      margin-top: 0.2rem;
      font-size: 0.26rem;
    }
  }
}
.good_list {
  background-color: white;
  width: 100%;
  .main_good {
    padding: 0px 15px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .popular {
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 45px;
      padding-bottom: 0px;
      font-weight: 300;
      white-space: normal;
      height: 45px;
      width: 100%;
      .popular_main {
        width: 40%;
        margin-right: 5%;
        margin-left: 6%;
        float: left;
        min-height: 0.1rem;
        overflow: visible;
        span {
          font-size: 0.8rem;
        }
      }
    }
    .good_conetnt {
      padding: 0;
      margin: 0;
      position: relative;
      width: 100%;
    }
  }
  .goods_content {
    width: 100%;
    overflow: scroll;
    position: relative;
    .content-main-good {
      display: block;
      float: left;
      width: 50%;
      height: 12rem;
      padding: 0.5rem;
      box-sizing: border-box;
      // border: 1px solid #eee;
      background-color: #fff;
      .img_box {
        width: 100%;
        height: 70%;
        padding: 0.5rem;
        box-sizing: border-box;
        img {
          width: 100%;
          height: 100%;
          border: 0;
        }
      }
      .product_box {
        width: 100%;
        height: 30%;
        padding: 0 0.5rem;
        box-sizing: border-box;
        .product_title {
          height: 50%;
          font-size: 0.8rem;
          line-height: 1.6493rem;
          color: red;
          text-align: left;
        }
        .product_price {
          height: 50%;
          text-align: left;
          .price_list {
            .xj_content {
              color: #fe4070;
              font-size: 0.5rem;
              span {
                font-size: 1.2rem;
                margin: 0 0.1rem;
              }
            }
            .original_price {
              color: #999;
              font-size: 0.745rem;
              text-decoration: line-through;
            }
          }
          .buy_num {
            color: #999;
            font-size: 11px;
            text-align: left;
          }
        }
      }
    }
    .load-more {
      width: 100%;
      height: 2rem;
      position: absolute;
      bottom: 0;
      left: 0;
      margin-top: 1rem;
      a {
        display: block;
        width: 20%;
        height: 100%;
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="go_back"></div>
      </div>
      <div class="head_title">积分商城</div>
      <div class="head_home" @click="home"></div>
    </div>

    <div>
      <van-search
        v-model="value"
        shape="round"
        placeholder="请输入你要搜索的商品"
      />
    </div>

    <!-- 6个nav导航 -->
    <div class="index-nav">
      <div class="index-nav-li" @click="jump('money')">
        <img src="../../assets/img/index_account.png" alt />
        <p>我的账户</p>
      </div>
      <div class="index-nav-li" @click="jump('order')">
        <img src="../../assets/img/index_order.png" alt />
        <p>我的订单</p>
      </div>
      <div class="index-nav-li" @click="jump('address')">
        <img src="../../assets/img/index_address.png" alt />
        <p>收货地址</p>
      </div>
      <div class="index-nav-li" @click="jump('buycar')">
        <img src="../../assets/img/index_car.png" alt />
        <p>购物车</p>
      </div>
    </div>

    <!-- 商品展示 -->
    <div class="good_list">
      <div class="main_good">
        <div class="popular">
          <div class="popular_main">
            <span>热门单品</span>
          </div>
        </div>
      </div>
      <div class="goods_content">
        <a
          href="###"
          class="content-main-good"
          v-for="item in goodlist[0]"
          :key="item.id"
          @click="good_xq(item.id)"
        >
          <div class="img_box">
            <img :src="yum + item.cover" alt />
          </div>
          <div class="product_box">
            <div class="product_title">{{ item.name }}</div>
            <div class="product_price">
              <div class="price_list">
                <span class="xj_content">
                  ¥
                  <span>{{ item.price }}</span>
                </span>
                <span class="original_price">¥{{ item.original_price }}</span>
              </div>
            </div>
          </div>
        </a>
        <div class="load-more"><a href="###">点击加载更多</a></div>
        <!-- <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-row>
            <van-col span="12" class="pic-box">
              <a href="###" class="content-main-good" @click="good_xq(item.id)">
                <div class="img_box">
                  <img :src="yum + item.cover" alt />
                </div>
                <div class="product_box">
                  <div class="product_title">{{ item.name }}</div>
                  <div class="product_price">
                    <div class="price_list">
                      <span class="xj_content">
                        ¥
                        <span>{{ item.price }}</span>
                      </span>
                      <span class="original_price"
                        >¥{{ item.original_price }}</span
                      >
                    </div>
                  </div>
                </div>
              </a>
            </van-col>
          </van-row>
        </van-list> -->
      </div>
    </div>

    <bottomnav></bottomnav>
  </div>
</template>

<script>
import bottomnav from "../../zujian/bottomnav.vue";
import yum from "../../../data/yum";
export default {
  name: "shop",
  data() {
    return {
      value: "",
      goodlist: [],
      // page:1,
      // page_count:''
      // finished: false,
      // loading: false,
    };
  },
  components: {
    bottomnav,
  },
  beforeMount() {
    this.fun();
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
    get_good() {
      this.$axios
        .post("/Goods/getGoods", { pageNumber: 1 })
        .then((res) => {
          // console.log(res);
          this.goodlist.push(res.data.data.data);
          console.log(this.goodlist);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    good_xq(e) {
      console.log(e);
      // this.$router.push({ path: "/good", query: { id: e } });
      this.$router.push({ path: "/good2", query: { id: e } });
    },
    fun() {
      this.yum = yum.utils.photoPrefix;
    },
  },
  mounted() {
    this.get_good();
    // layui.use("flow", () => {
    //   var $ = layui.jquery;
    //   var flow = layui.flow;
    //   flow.load({
    //     elem: "#LAY_demo2", //流加载容器
    //     scrollElem: "#LAY_demo2",
    //     done: function (page, next) {
    //       //到达临界点（默认滚动触发），触发下一页
    //       setTimeout(function () {
    //         var lis = [];
    //         //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
    //         $.post("/Goods/getGoods", { page: page }, function () {
    //           //假设你的列表返回在data集合中
    //           console.log(res);
    //           layui.each(res.data, function (index, item) {
    //             lis.push(
    //               "<li><a href='/good_xq' class='content-main-good'><div class='img_box'><imgsrc=" +
    //                 item.cover +
    //                 "alt/></div><div class='product_box'><div class='product_title'>" +
    //                 item.name +
    //                 "</div><div class='product_pric'><div class='price_list'><span class='jumei_price'>¥<span>" +
    //                 item.price +
    //                 "</span></span></div></div></div></a></li>"
    //             );
    //           });
    //           // layui.each(res.data.data.data, (index, item) => {
    //           //   lis.push(
    //           //     "<li><a href='/good_xq' class='content-main-good'><div class='img_box'><imgsrc=" +
    //           //       item.cover +
    //           //       "alt/></div><div class='product_box'><div class='product_title'>" +
    //           //       item.name +
    //           //       "</div><div class='product_pric'><div class='price_list'><span class='jumei_price'>¥<span>" +
    //           //       item.price +
    //           //       "</span></span></div></div></div></a></li>"
    //           //   );
    //           // });
    //           //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
    //           //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
    //           next(lis.join(), page < res.count);
    //           $('[data-toggle="tooltip"]').tooltip();
    //         });
    //       });
    //     },
    //   });
    // });
  },
};
</script>