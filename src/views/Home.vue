<template>
  <div>
    <StoreHero/>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreHero from '@/components/StoreHero.vue';

export default {
  name: 'Home',
  components: {
    StoreHero,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
