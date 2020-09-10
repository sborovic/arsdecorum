<template>
  <div class="home">
    <StoreHeader/>
    <StoreHero/>
    <StoreFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreHeader from '@/components/StoreHeader.vue';
import StoreHero from '@/components/StoreHero.vue';
import StoreFooter from '@/components/StoreFooter.vue';

export default {
  name: 'Home',
  components: {
    StoreHeader,
    StoreHero,
    StoreFooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
