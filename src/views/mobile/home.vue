<template>
  <div>
    <header class="pc-header">
      <van-row style="height: 100%">
        <van-col span="8" class="disF alignCenter">
          <img
            class="pc-img-module"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          />
        </van-col>
        <van-col span="8" class="disF alignCenter justifyCenter">
          <van-search v-model="value" placeholder="搜索" />
        </van-col>
        <van-col span="8" class="disF alignCenter justifyCenter">
          <van-icon
            v-for="item in tabBtnList"
            :name="item.isActived ? item.iconActived : item.icon"
            size="25"
            style="margin-right: 20px"
            @click="handleTabIcon(item)"
          />

          <van-popover v-model:show="showPopover" trigger="click" :actions="actions">
            <template #reference>
              <!-- <van-button type="primary">展示图标</van-button> -->
              <van-icon name="manager-o" size="25" />
            </template>
          </van-popover>
        </van-col>
      </van-row>
    </header>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
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
</style>
