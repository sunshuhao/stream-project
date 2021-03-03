<template>
  <div>
    <header class="pc-header">
      <van-row style="height: 100%">
        <van-col span="8" class="disF alignCenter">
          <van-icon name="send-gift-o" size="30" />
        </van-col>
        <van-col span="8" class="disF alignCenter justifyCenter">
          <img
            class="pc-img-module"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          />
        </van-col>
        <van-col span="8" class="disF alignCenter" style="justify-content: flex-end">
          <van-icon name="send-gift-o" size="30" />
        </van-col>
      </van-row>
    </header>

    <div class="pc-content">
      <pubList id="pubList" class="pub-list"></pubList>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import pubList from "@/components/public/list";
export default {
  setup() {
    const state = reactive({
      value: "",
      showPopover: true,
      actions: [
        { text: "选项一", icon: "add-o" },
        { text: "选项二", icon: "music-o" },
        { text: "选项三", icon: "more-o" },
      ],
      tabBtnList: [
        {
          icon: "wap-home-o",
          iconActived: "wap-home",
          isActived: true,
        },
        {
          icon: "comment-circle-o",
          iconActived: "comment-circle",
          isActived: false,
        },
        {
          icon: "browsing-history-o",
          iconActived: "browsing-history",
          isActived: false,
        },
        {
          icon: "like-o",
          iconActived: "like",
          isActived: false,
        },
      ],
    });

    const stateFun = reactive({
      getFocus() {
        console.log("123", 123);
      },
      handleTabIcon(item) {
        stateFun.setAllTabIcon(false);
        item.isActived = true;
      },
      setAllTabIcon(val) {
        state.tabBtnList.forEach((item) => {
          item.isActived = val;
        });
      },
    });

    return {
      ...toRefs(state),
      ...toRefs(stateFun),
    };
  },
  components: {
    pubList,
  },
};
</script>

<style lang="scss">
.fillWidth {
  width: 100%;
}
.disF {
  display: flex;
}
.alignCenter {
  align-items: center;
}
.justifyCenter {
  justify-content: center;
}
.pc-header {
  height: 54px;
  padding: 0 20px;
}
.pc-img-module {
  min-width: 105px;
}
.pc-content {
  max-width: 1000px;
  height: 100%;
  display: table;
  margin: 0 auto;
}
</style>
