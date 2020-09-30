<template>
  <div>
    <StoreHeader/>
        <slot>[NO CONTENT]</slot>
    <StoreFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreHeader from '@/components/StoreHeader.vue';
import StoreFooter from '@/components/StoreFooter.vue';

export default {
  name: 'StoreLayout',
  components: {
    StoreHeader,
    StoreFooter,
  },
};
</script>
