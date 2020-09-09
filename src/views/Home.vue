<template>
  <div class="home">
    <StoreHeader/>
    <StoreHero/>
    <StoreFooter/>
    <StoreLogin/>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreHeader from '@/components/StoreHeader.vue';
import StoreHero from '@/components/StoreHero.vue';
import StoreFooter from '@/components/StoreFooter.vue';
import StoreLogin from '@/components/StoreLogin.vue';

export default {
  name: 'Home',
  components: {
    StoreHeader,
    StoreHero,
    StoreFooter,
    StoreLogin,
  },
};
</script>
