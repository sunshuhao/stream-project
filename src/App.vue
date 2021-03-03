<template>
  <div id="nav">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "appHome",
  data() {
    return {};
  },
  mounted() {
    // 监听窗口大小
    const that = this;
    window.onresize = () => {
      that.resize();
    };
    this.resize();
  },
  methods: {
    resize() {
      if (this.isMobile()) {
        // 手机端
        this.$router.replace("/mobile/home");
      } else {
        // pc端
        this.$router.replace("/");
      }
    },
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows phone)/i
      );
      return flag;
    },
  },
};
</script>

<style lang="scss">
#nav {
  // height: 100%;
}
</style>
