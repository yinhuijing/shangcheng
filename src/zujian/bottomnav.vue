<template>
  <div class="box" style="height: 2.5rem">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="friends-o" to="/helloworld">我的</van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/share">关于我们</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "one",
  data() {
    return {
      active: 0,
    };
  },
};
</script>