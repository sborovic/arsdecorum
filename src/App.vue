<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

.sf-header {
  --header-navigation-item-border-color: red;
}

.sf-header--is-hidden {
  --header-wrapper-transform: none !important;
}
</style>
