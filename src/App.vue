<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'" >
      <router-view/>
    </component>
  </div>
</template>

<style lang="scss">
body {
  margin-top: 0;
}
#app {
  @import "~@storefront-ui/vue/styles";
  @include generate-color-variants(--_c-green-primary, #c72d37);
  @include assign-color-variants(--c-primary, --_c-green-primary);
}
</style>
