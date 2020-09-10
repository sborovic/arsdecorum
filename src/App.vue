<template>
  <div id="app">
    <router-view/>
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
