<template>
  <div>
    <SfHeader
      :class="customClass"
      :title="title"
      :logo="logo"
      :active-icon="activeIcon"
      :search-placeholder="searchPlaceholder"
      :search-value="searchValue"
      :cart-icon="cartIcon"
      :wishlist-icon="wishlistIcon"
      :is-sticky="isSticky"
      :account-icon="accountIcon"
      :style="spacer"
      :cart-items-qty="cartItemsQty"
      :wishlist-items-qty="wishlistItemsQty"
      @click:cart="alert('@click:cart')"
      @click:wishlist="alert('@click:wishlist')"
      @click:account="isModalVisible = true"
      @change:search="searchValue = $event"
    >
      <template #navigation>
        <SfHeaderNavigationItem v-for="item in navigation" :key="item">
          <SfLink :link="{ name: item }">{{ item }}</SfLink>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>
    <StoreLogin :visible="isModalVisible" @close="isModalVisible = false"/>
  </div>
</template>
<script>
import { SfHeader, SfLink } from '@storefront-ui/vue';
import SiteLogo from '@/assets/logo.svg';
import StoreLogin from '@/components/StoreLogin.vue';

export default {
  components: {
    SfHeader,
    SfLink,
    StoreLogin,
  },
  data() {
    return {
      isMobile: false,
      isModalVisible: false,
      navigation: ['Home', 'Products', 'About'],
      searchValue: '',
      title: 'ArsDecorum',
      logo: SiteLogo,
      activeIcon: 'account',
      isSticky: true,
      searchPlaceholder: 'Search for items',
      cartIcon: 'empty_cart',
      wishlistIcon: 'heart',
      accountIcon: 'profile',
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

</style>
