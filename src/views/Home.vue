<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SfButton/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { SfButton } from '@storefront-ui/vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SfButton,
  },
};
</script>
