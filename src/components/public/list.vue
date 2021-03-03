<template>
  <div class="pc-user-list">
    <div class="pc-user-box">
      <div class="pc-list-li" v-for="(item, index) in list">
        <div class="disF" style="width: 100%; margin-bottom: 10px">
          <div style="width: 100px; padding-left: 20px">
            <img
              src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg"
              style="
                width: 40px;
                height: 40px;
                border-radius: 50%;
                vertical-align: middle;
              "
            />
            <span style="padding-left: 20px">asda</span>
          </div>
          <div style="flex: 1">&nbsp;</div>
          <div
            @click="show = true"
            style="width: 100px; padding-top: 5px; text-align: right; padding-right: 10px"
          >
            <van-icon name="ellipsis" size="30" />
          </div>
        </div>
        <img
          style="width: 100%; max-width: 700px"
          src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1963304009,2816364381&fm=26&gp=0.jpg"
        />
        <div></div>
      </div>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block" @click.stop>
          <div class="list-li red">举报</div>
          <div class="list-li red">停止关注</div>
          <div class="list-li">打开帖子</div>
          <div class="list-li">分享到...</div>
          <div class="list-li">复制链接</div>
          <div class="list-li">内嵌</div>
          <div class="list-li">取消</div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      show: false,
      list: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    });

    const stateFun = reactive({});

    return {
      ...toRefs(state),
      ...toRefs(stateFun),
    };
  },
};
</script>

<style lang="scss">
.disF {
  display: flex;
}
.pc-user-list {
  max-width: 600;
  //   position: relative;
  //   .pc-user-box{
  //       position: absolute;
  //       left: 0;
  //       top: 0;
  //   }
}
.pc-list-li {
  padding: 10px 0;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  margin-top: 20px;
  background: white;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 240px;
  background-color: #fff;
  border-radius: 10px;
}
.list-li {
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
}
.list-li:hover {
  background: #f7f7f7;
}
.list-li:nth-child(n + 2) {
  border-top: 1px solid #e6e6e6;
}
.red {
  color: #ed4956;
}
</style>
