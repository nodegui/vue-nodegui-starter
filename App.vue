<template>
  <vn-view>
    <hero />
    <vn-view id="counter" :styleSheet="counterStyle">
      <vn-text>Counter: {{count}}</vn-text>
      <vn-button @clicked="inc">Inc</vn-button>
    </vn-view>
  </vn-view>
</template>

<script>
import Hero from './Hero.vue';
import { ref } from 'vue-nodegui';

export default {
  components: { Hero },
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    }

    return {
      inc,
      count,
      counterStyle: `
        #counter {
          flex-direction: row;
          align-items: 'center';
          justify-content: 'center';
        }
      `
    }
  }
}
</script>
