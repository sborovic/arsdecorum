<template>
  <div>
    <SfHeader
      :class="customClass"
      :title="title"
      :logo="logo"
      :search-placeholder="searchPlaceholder"
      :search-value="searchValue"
      :is-sticky="isSticky"
      @click:cart="alert('@click:cart')"
      @click:wishlist="alert('@click:wishlist')"
      @change:search="searchValue = $event"
    >
      <template #navigation>
        <SfHeaderNavigationItem v-for="item in navigation" :key="item">
          <SfLink :link="{ name: item }">{{ item }}</SfLink>
        </SfHeaderNavigationItem>
      </template>
      <template #header-icons>
        <StoreHeaderIcons @click:account="isModalVisible = true"/>
      </template>
    </SfHeader>
    <StoreLogin :visible="isModalVisible" @close="isModalVisible = false"/>
  </div>
</template>
<script>
import { SfHeader, SfLink } from '@storefront-ui/vue';
import SiteLogo from '@/assets/logo.svg';
import StoreLogin from '@/components/StoreLogin.vue';
import StoreHeaderIcons from '@/components/StoreHeaderIcons.vue';

export default {
  components: {
    SfHeader,
    SfLink,
    StoreLogin,
    StoreHeaderIcons,
  },
  data() {
    return {
      isModalVisible: false,
      navigation: ['Home', 'Products', 'About'],
      searchValue: '',
      title: this.$appName,
      logo: SiteLogo,
      activeIcon: 'profile',
      isSticky: true,
      searchPlaceholder: 'Search for items',
      cartItemsQty: '0',
      wishlistItemsQty: '0',
      customClass: [
        'sf-header--has-mobile-navigation',
        'sf-header--has-mobile-search',
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sf-header--is-hidden {
  --header-wrapper-transform: none !important;
}
</style>
