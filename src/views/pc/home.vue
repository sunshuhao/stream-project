<template>
  <div style="height: 100%; background: #f7f7f7">
    <header class="pc-header">
      <van-row style="height: 100%">
        <van-col span="8" class="disF alignCenter">
          <!-- <img
            class="pc-img-module"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          /> -->
          <div style="padding-left: 20px; font-weight: 600; font-size: 20px;text-align:center;width:100%;">
            平衡点
          </div>
        </van-col>
        <van-col span="8" class="disF alignCenter justifyCenter">
          <van-search v-model="value" placeholder="搜索" />
        </van-col>
        <van-col span="8" class="disF alignCenter justifyCenter">
          <!-- <van-icon
            v-for="item in tabBtnList"
            :name="item.isActived ? item.iconActived : item.icon"
            size="25"
            style="margin-right: 20px"
            @click="handleTabIcon(item)"
          /> -->
          <img :src="allImgs.Imgs11" style="width: 60px" />
          <img :src="allImgs.Imgs22" style="width: 52px; margin-left: 10px" />
          <img :src="allImgs.Imgs33" style="width: 48px; margin-left: 10px" />

          <van-popover
            v-model:show="showPopover"
            trigger="click"
            :actions="actions"
            placement="bottom-end"
            :offset="[15, 8]"
          >
            <template #reference>
              <!-- <van-button type="primary">展示图标</van-button> -->
              <img
                src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg"
                style="width: 40px; height: 40px; border-radius: 50%;vertical-align:middle;margin-left: 10px"
              />
              <!-- <van-icon name="manager-o" size="25" style="margin-left:10px;" /> -->
            </template>
          </van-popover>
        </van-col>
      </van-row>
    </header>
    <div class="pc-content">
      <div class="disF">
        <pubList id="pubList" class="pub-list"></pubList>
        <div v-if="userListStatus" style="width: 30px"></div>
        <van-sticky v-if="userListStatus" :offset-top="54">
          <userList class="user-list"></userList>
        </van-sticky>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import pubList from "@/components/public/list";
import userList from "@/components/pc/userList";
import Imgs11 from "@/assets/11.png";
import Imgs22 from "@/assets/22.png";
import Imgs33 from "@/assets/33.png";
export default {
  setup() {
    const state = reactive({
      allImgs: {
        Imgs11: Imgs11,
        Imgs22: Imgs22,
        Imgs33: Imgs33,
      },
      value: "",
      showPopover: false,
      userListStatus: false,
      actions: [
        { text: "个人主页", icon: "user-circle-o" },
        { text: "收藏夹", icon: "bookmark-o" },
        { text: "设置", icon: "setting-o" },
        { text: "切换用户", icon: "exchange" },
        { text: "退出", icon: "warn-o" },
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
      setWindowWidth() {
        if (document.body.clientWidth > 850) {
          state.userListStatus = true;
        } else {
          state.userListStatus = false;
        }
      },
    });

    stateFun.setWindowWidth();
    // 监听窗口大小
    window.onresize = () => {
      return (() => {
        stateFun.setWindowWidth();
      })();
    };

    return {
      ...toRefs(state),
      ...toRefs(stateFun),
    };
  },
  components: {
    pubList,
    userList,
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
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 54px;
  padding: 0 20px;
  background: white;
}
.pc-img-module {
  min-width: 105px;
}
.pc-content {
  padding-top: 54px;
  max-width: 1000px;
  height: 100%;
  display: table;
  margin: 0 auto;
}
.pub-list {
  flex: 1;
}
.user-list {
  position: relative;
  width: 300px;
}
</style>
