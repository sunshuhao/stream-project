<template>
  <div class="pc-user-list">
    <div class="pc-user-box">
      <div v-for="(item, index) in list">
        {{ index }}{{ index }}{{ index }}{{ index }}{{ index }}{{ index }}{{ index
        }}{{ index }}{{ index }}{{ index }}{{ index }}{{ index }}{{ index }}{{ index
        }}{{ index }}{{ index }}{{ index }}{{ index }}{{ index }}{{ index }}{{ index
        }}{{ index }}{{ index }}{{ index }}{{ index }}{{ index }}{{ index }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
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
.pc-user-list {
  max-width: 600;
  //   position: relative;
  //   .pc-user-box{
  //       position: absolute;
  //       left: 0;
  //       top: 0;
  //   }
}
</style>
