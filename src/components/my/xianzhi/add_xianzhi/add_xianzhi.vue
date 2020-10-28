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

.form_box {
  padding: 0.5rem;
  .layui-form {
    width: 100%;
    height: 100%;
    .layui-form-item {
      width: 100%;
      height: 1.8rem;
      padding: 0.5rem 0;
      margin-bottom: 0;
      .layui-form-label {
        width: 25%;
        height: 1.8rem;
        padding: 0.3rem 0.3rem;
        box-sizing: border-box;
        line-height: 1.2rem;
        float: left;
      }
      .layui-input-block {
        width: 75%;
        height: 100%;
        margin-left: 0;
        float: left;
        .layui-input {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }
      }
    }
    .layui-elem-field {
      border: none;
      height: 1rem;
      margin: 0.3rem;
      margin-left: 1rem;
      margin-top: 0;
      legend {
        font-size: 0.7rem;
        text-align: left;
        padding: 0;
        margin: 0;
      }
    }
    .layui-upload {
      .layui-btn {
        margin-top: 0.5rem;
        margin-left: -11.5rem;
      }
      .layui-elem-quote {
        text-align: left;
        margin-left: 1rem;
        padding: 0;
        border: none;
        .layui-upload-list {
          width: 100%;
          height: 5rem;
          border: 1px solid black;
          padding: 0.5rem;
          box-sizing: border-box;
        }
      }
    }
    .layui-form-text {
      height: 5rem;
    }
  }
}

.upload {
  height: 5rem;
}
</style>

<template>
  <div style="box-sizing: border">
    <div class="header">
      <div class="head_back_box">
        <div class="head_back" @click="back"></div>
      </div>
      <div class="head_title">添加闲置物品</div>
      <div class="head_home" @click="home"></div>
    </div>

    <div class="form_box">
      <form class="layui-form" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">物品名称：</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入闲置物品名称："
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>

        <div class="layui-form-item">
          <label class="layui-form-label">闲置类型：</label>
          <div class="layui-input-block">
            <select name="city" lay-verify="required">
              <!-- <option value=""></option> -->
              <option
                v-for="(item, index) in typeList"
                :key="index"
                value="index"
              >
                {{ item }}
              </option>
            </select>
          </div>
        </div>

        <fieldset
          class="layui-elem-field layui-field-title"
          style="margin-top: 30px"
        >
          <legend>上传多张图片（最多四张）</legend>
        </fieldset>

        <div class="layui-upload">
          <button type="button" class="layui-btn" id="upload">
            多图片上传
          </button>
          <blockquote
            class="layui-elem-quote layui-quote-nm"
            style="margin-top: 10px"
          >
            预览图：
            <div class="layui-upload-list" id="demo1"></div>
          </blockquote>
        </div>

        <div class="layui-form-item layui-form-text">
          <label class="layui-form-label">闲置理由：</label>
          <div class="layui-input-block">
            <textarea
              name="desc"
              placeholder="请输入闲置理由："
              class="layui-textarea"
            ></textarea>
          </div>
        </div>

        <div class="layui-form-item">
          <div class="layui-input-block">
            <button
              type="submit"
              class="layui-btn"
              lay-submit
              lay-filter="formDemo"
            >
              立即提交
            </button>
            <button type="reset" class="layui-btn layui-btn-primary">
              重置
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      add_xianzhi: {}, // 闲置物品名称，类型，理由
      typeList: {}, // 闲置类型
      // fileList: [],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push({ path: "/index" });
    },
    // 闲置类型
    typedata() {
      this.$axios.post("/Idle/typeIdle").then((res) => {
        // console.log(res.data.data);
        this.typeList = res.data.data;
        // console.log(this.typeList);
      });
    },
  },
  created() {
    layui.use(["form", "upload", "layer", "laypage"], function () {
      // 设置配置环境
      var laypage = layui.laypage,
        layer = layui.layer,
        upload = layui.upload,
        form = layui.form;
      //监听提交
      form.on("submit(formDemo)", function (data) {
        this.add_xianzhi = JSON.stringify(data.field);
        console.log(this.add_xianzhi);
        console.log(this.add_xianzhi.city);
        return false;
        // this.$axios.post("/Idle/addIdle",{
        //   title:this.add_xianzhi.title,
        //   describe:this.add_xianzhi.desc,
        // })
      });

      // 多图片上传
      upload.render({
        elem: "#upload",
        url: "http://www.upperstu.com/api/User/uploadPhoto", //自己的上传接口
        methods: "post",
        multiple: true,
        enctype: "multipart/form-data",
        before: function (obj) {
          //预读本地文件示例
          obj.preview(function (index, file, result) {
            $("#demo1").append(
              '<img src="' +
                result +
                '" alt="' +
                file.name +
                '" class="layui-upload-img" style="padding-right:0.4rem;float:left;width:4rem;height:4rem;display:block;">'
            );
          });
        },
        done: function (res) {
          console.log(res);
          if (res.code == 200) {
            return layer.msg("上传成功");
            console.log("图片地址：" + data);
          }
          //上传成功
        },
        error: function () {
          //演示失败状态，并实现重传
          var demoText = $("#demoText");
          demoText.html(
            '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
          );
          demoText.find(".demo-reload").on("click", function () {
            uploadInst.upload();
          });
        },
      });
    });
  },
  mounted() {
    this.typedata();
  },
};
</script>