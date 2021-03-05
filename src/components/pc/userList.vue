<template>
  <div class="pc-user-list" style="padding-top: 50px">
    <div class="pc-user-box disF" style="height: 80px">
      <div style="width: 70px; text-align: center; padding-top: 10px">
        <img
          src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg"
          style="width: 60px; height: 60px; border-radius: 50%"
        />
      </div>
      <div style="flex: 0.6">
        <div style="height: 40px; line-height: 60px; font-weight: 600">
          ssh9800
        </div>
        <div
          style="
            height: 40px;
            line-height: 20px;
            color: #999999;
            font-size: 12px;
          "
        >
          accSun
        </div>
      </div>
      <div
        class="curP"
        style="
          flex: 0.4;
          line-height: 80px;
          text-align: right;
          font-size: 12px;
          color: #0095f6;
        "
      >
        切换
      </div>
    </div>
    <div class="pm20"></div>
    <div class="disF">
      <div class="curP" style="flex: 0.5; font-weight: 600; color: #888888">
        为你推荐
      </div>
      <div
        class="curP"
        style="
          flex: 0.5;
          text-align: right;
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;
        "
      >
        查看全部
      </div>
    </div>
    <div v-for="item in list" class="pc-user-box disF" style="height: 60px">
      <div style="width: 50px; text-align: center; padding-top: 10px">
        <img
          src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg"
          style="width: 40px; height: 40px; border-radius: 50%"
        />
      </div>
      <div style="flex: 0.6">
        <div style="height: 30px; line-height: 40px; font-weight: 600">
          ssh9800
        </div>
        <div
          style="
            height: 30px;
            line-height: 20px;
            color: #999999;
            font-size: 12px;
          "
        >
          {{item.subTitle}}
        </div>
      </div>
      <div
        class="curP"
        style="
          flex: 0.4;
          line-height: 60px;
          text-align: right;
          font-size: 12px;
          color: #0095f6;
        "
      >
        关注
      </div>
    </div>
    <div style="height:30px;"></div>
    <div class="disF">
      <div style="font-size:14px;color:#999999;">关于·帮助·新闻中心·API·工作·隐私·条款·地点<br/>热门账户·话题标签·语言</div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      list: [{ subTitle: "在关注你" }, { subTitle: "user和其他6位用户关注你" }],
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
.pm20 {
  height: 20px;
}
.curP {
  cursor: pointer;
}
</style>
