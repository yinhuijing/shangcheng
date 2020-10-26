<style lang="less" scoped>
.box {
  letter-spacing: 0.1rem;
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

  .jf_box {
    height: 8rem;
    background-image: linear-gradient(
      to right,
      #ff3200 0%,
      #ff6d34 35%,
      #0dcaef 100%
    );
    width: 100%;
    position: relative;
    .jf_znum {
      height: 3rem;
      .qd_gz {
        width: 30%;
        height: 100%;
        margin: 0 auto;
        .zijin_pic {
          width: 40%;
          height: 100%;
          float: left;
          img {
            display: block;
            width: 50%;
            padding: 33% 0 0 50%;
          }
        }
        .zijin_num {
          width: 60%;
          height: 100%;
          line-height: 3rem;
          font-size: 1.5rem;
          text-align: left;
          box-sizing: border-box;
          padding-left: 0.4rem;
          float: left;
          color: white;
        }
      }
    }
    .day_qiand {
      width: calc(100% - 1rem);
      height: 7.5rem;
      // margin: 0 0.5rem 0 0.5rem;
      position: absolute;
      top: 4rem;
      left: 0.5rem;
      .qd_main {
        padding: 0.5rem;
        height: 100%;
        background-color: #fff;
        box-sizing: border-box;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        border-radius: 0.7rem;
        .qd_title {
          height: 1.5rem;
          line-height: 1.5rem;
        }
        .qd_form {
          width: 100%;
          height: 6.5rem;
          margin-top: 0.5rem;
          ul {
            height: 100%;
            li {
              list-style: none;
              float: left;
              width: calc(100% / 7);
              height: 4rem;
              padding-left: 0.2rem;
              box-sizing: border-box;
              &:first-child {
                margin-left: 0;
              }
            }
            .qd_num {
              a {
                display: block;
                width: 100%;
                height: 100%;
                border: 1px solid #eeeeee;
                border-radius: 50%;
                text-align: center;
                line-height: 2.4rem;
              }
            }
            .qd_js {
              margin-top: 0.35rem;
            }
          }
        }
      }
    }
  }

  .jifen_huoq {
    height: 20rem;
    background-color: #fff;
    margin-top: 6rem;
    margin-bottom: 2rem;
    text-align: left;
    .hq_main {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      box-sizing: border-box;
      .hq_title {
        font-size: 0.8rem;
        height: 10%;
        line-height: 2rem;
        margin-left: 0.5rem;
      }
      ul {
        height: 90%;
        li {
          height: calc(100% / 5);
          width: 100%;
          border-bottom: 1px solid #eee;
          .hq_tj {
            width: 15%;
            height: 100%;
            float: left;
            img {
              display: block;
              width: 1.5rem;
              height: 1.5rem;
              padding: 1rem 0.5rem;
            }
          }
          .hq_text {
            width: 65%;
            height: 100%;
            float: left;
            font-size: 0.7rem;
            letter-spacing: normal;
            padding-left: 0.5rem;
            padding-top: 0.3rem;
            box-sizing: border-box;
            .hqtj_title {
              width: 100%;
              height: 30%;
            }
            .hqtj_num {
              width: 100%;
              height: 70%;
              .hqjb_pic {
                width: 20%;
                height: 100%;
                float: left;
                img {
                  display: block;
                  width: 60%;
                  height: 60%;
                  padding: 0.4rem;
                }
              }
              .hqjb_box {
                width: 80%;
                height: 100%;
                float: left;
                padding: 0.3rem 0 0 0.3rem;
                box-sizing: border-box;
                .yiwan_box {
                  font-size: 0.5rem;
                  color: gray;
                }
              }
            }
          }
          .success_box {
            width: 20%;
            height: 100%;
            float: left;
            text-align: right;
            a {
              display: block;
              width: 100%;
              height: 40%;
              text-align: center;
              line-height: 1.37rem;
              background-color: orange;
              border-radius: 0.6rem;
              color: white;
              margin-top: 25%;
            }
          }
        }
      }
    }
  }
}

.active {
  background-image: url(../../../assets/img/qiandaochenggong-cai.png);
  background-size: cover;
}
</style>

<template>
  <div class="box">
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div>
      <div class="head_title">签到中心</div>
      <div class="head_home" @click="home"></div>
    </div>

    <div class="jf_box">
      <div class="jf_znum">
        <div class="qd_gz">
          <div class="zijin_pic">
            <img src="../../../assets/img/ziyuan.png" alt />
          </div>
          <div class="zijin_num">0</div>
        </div>
      </div>
      <div class="day_qiand">
        <div class="qd_main">
          <div class="qd_title">
            <div style="float: left; font-size: 0.8rem">您已获得首签</div>
            <div style="float: left; font-size: 0.7rem; margin-left: 0.4rem">
              <a href="###" style="color: red">断签需要重新累计连签</a>
            </div>
          </div>
          <div class="qd_form">
            <ul>
              <li v-for="(item, index) in qd_list" :key="index">
                <div class="qd_num">
                  <a
                    href="###"
                    class="qiandao_num"
                    @click="qiaodao_cg(index)"
                    v-bind:class="[idx == index ? 'active' : '']"
                    >{{ item.qd_jf }}</a
                  >
                </div>
                <div class="qd_js">{{ item.name }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="jifen_huoq">
      <div class="hq_main">
        <div class="hq_title">每日任务</div>
        <ul>
          <li>
            <div class="hq_tj">
              <img src="../../../assets/img/xiang.png" alt />
            </div>
            <div class="hq_text">
              <div class="hqtj_title">通过二维码或者链接推荐好友</div>
              <div class="hqtj_num">
                <div class="hqjb_pic">
                  <img src="../../../assets/img/ziyuan.png" alt />
                </div>
                <div class="hqjb_box">
                  <div class="jfnum_text">
                    +
                    <span>100</span>
                  </div>
                  <div class="yiwan_box">已完成<span>0</span>次</div>
                </div>
              </div>
            </div>
            <div class="success_box">
              <a href="###">去完成</a>
            </div>
          </li>
          <li>
            <div class="hq_tj">
              <img src="../../../assets/img/fabu.png" alt />
            </div>
            <div class="hq_text">
              <div class="hqtj_title">发布闲置信息</div>
              <div class="hqtj_num">
                <div class="hqjb_pic">
                  <img src="../../../assets/img/ziyuan.png" alt />
                </div>
                <div class="hqjb_box">
                  <div class="jfnum_text">
                    +
                    <span>10</span>
                  </div>
                  <div class="yiwan_box">
                    已完成<span>0</span>/<span>2</span>次
                  </div>
                </div>
              </div>
            </div>
            <div class="success_box">
              <a href="/add_xianzhi">去完成</a>
            </div>
          </li>
          <li>
            <div class="hq_tj">
              <img src="../../../assets/img/goumai.png" alt />
            </div>
            <div class="hq_text">
              <div class="hqtj_title">购买商城的商品</div>
              <div class="hqtj_num">
                <div class="hqjb_pic">
                  <img src="../../../assets/img/ziyuan.png" alt />
                </div>
                <div class="hqjb_box">
                  <div class="jfnum_text">
                    +
                    <span>100</span>
                  </div>
                  <div class="yiwan_box">已完成<span>0</span>次</div>
                </div>
              </div>
            </div>
            <div class="success_box">
              <a href="/shop">去完成</a>
            </div>
          </li>
          <li>
            <div class="hq_tj">
              <img src="../../../assets/img/bangdingshouji.png" alt />
            </div>
            <div class="hq_text">
              <div class="hqtj_title">绑定手机号</div>
              <div class="hqtj_num">
                <div class="hqjb_pic">
                  <img src="../../../assets/img/ziyuan.png" alt />
                </div>
                <div class="hqjb_box">
                  <div class="jfnum_text">
                    +
                    <span>30</span>
                  </div>
                  <div class="yiwan_box">
                    已完成<span>0</span>/<span>1</span>次
                  </div>
                </div>
              </div>
            </div>
            <div class="success_box">
              <a href="###">去完成</a>
            </div>
          </li>
          <li style="border-bottom: none">
            <div class="hq_tj">
              <img src="../../../assets/img/xinxiwanshan.png" alt />
            </div>
            <div class="hq_text">
              <div class="hqtj_title">完善信息</div>
              <div class="hqtj_num">
                <div class="hqjb_pic">
                  <img src="../../../assets/img/ziyuan.png" alt />
                </div>
                <div class="hqjb_box">
                  <div class="jfnum_text">
                    +
                    <span>100</span>
                  </div>
                  <div class="yiwan_box">
                    已完成<span>0</span>/<span>1</span>次
                  </div>
                </div>
              </div>
            </div>
            <div class="success_box">
              <a href="/setup">去完成</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import qdList from "../../../../data/qdList.js";
export default {
  data() {
    return {
      idx: 0,
      qd_list: [],
    };
  },
  beforeMount() {
    this.fun();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push({ path: "/shop" });
    },
    qiaodao_cg(index) {
      console.log(index);
      this.idx = index;
    },
    fun() {
      this.qd_list = qdList.qdList;
      console.log(this.qd_list);
    },
  },
};
</script>