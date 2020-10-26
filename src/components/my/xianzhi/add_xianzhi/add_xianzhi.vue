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
      margin: 0.5rem;
      margin-left: 0.3rem;
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
        margin-left: -11rem;
      }
      .layui-elem-quote {
        text-align: left;
        margin: 0;
        padding: 0;
        border: none;
        .layui-upload-list {
          width: 100%;
          height: 5rem;
          border: 1px solid black;
        }
      }
    }
    .layui-form-text {
      height: 5rem;
    }
  }
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
      <form class="layui-form" action>
        <div class="layui-form-item">
          <label class="layui-form-label">物品名称：</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入名称"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>

        <fieldset
          class="layui-elem-field layui-field-title"
          style="margin-top: 0.5rem"
        >
          <legend>上传多张图片：</legend>
        </fieldset>

        <div class="layui-upload">
          <button type="button" class="layui-btn" id="test2">多图片上传</button>
          <blockquote
            class="layui-elem-quote layui-quote-nm"
            style="margin-top: 10px"
          >
            预览图：
            <div class="layui-upload-list" id="demo2"></div>
          </blockquote>
        </div>
        <div class="layui-form-item layui-form-text">
          <label class="layui-form-label">闲置理由：</label>
          <div class="layui-input-block">
            <textarea
              name="desc"
              placeholder="请输入内容"
              class="layui-textarea"
            ></textarea>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button class="layui-btn" lay-submit lay-filter="formDemo">
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
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push({ path: "/shop" });
    },
    mounted() {
      layui.use(["form,upload"], () => {
        var form = layui.form;
        var $ = layui.jquery,
          upload = layui.upload;
        //多图片上传
        upload.render({
          elem: "#test2",
          url: "https://httpbin.org/post", //改成您自己的上传接口
          multiple: true,
          before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
              $("#demo2").append(
                '<img src="' +
                  result +
                  '" alt="' +
                  file.name +
                  '" class="layui-upload-img">'
              );
            });
          },
          done: function (res) {
            //上传完毕
          },
        });
        layer.msg("Hello World");
      });
    },
  },
};
</script>