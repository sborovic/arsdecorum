<template>
  <div>
    <div class="sf-header__icons">
      <SfButton
        v-if="accountIcon"
        class="sf-button--pure sf-header__action "
        @click="$emit('click:account')"
      >
        <SfIcon
          :icon="accountIcon"
          size="1.25rem"
          :class="{
                    'sf-header__icon--is-active': activeIcon === 'account',
                  }"
        />
        <template v-if="isUserAuth">
          {{ customLabel }}
          <SfChevron/>
        </template>
      </SfButton>
      <SfButton
        v-if="wishlistIcon"
        class="sf-button--pure sf-header__action"
        @click="$emit('click:wishlist')"
      >
        <SfIcon
          class="sf-header__icon"
          :icon="wishlistIcon"
          :has-badge="wishlistHasProducts"
          :badge-label="wishlistItemsQty"
          size="1.25rem"
          :class="{
                    'sf-header__icon--is-active': activeIcon === 'wishlist',
                  }"
        />
      </SfButton>
      <SfButton
        v-if="cartIcon"
        class="sf-button--pure sf-header__action"
        @click="$emit('click:cart')"
      >
        <SfIcon
          class="sf-header__icon"
          :icon="cartIcon"
          :has-badge="cartHasProducts"
          :badge-label="cartItemsQty"
          size="1.25rem"
          :class="{
                    'sf-header__icon--is-active': activeIcon === 'cart',
                  }"
        />
      </SfButton>
    </div>
  </div>
</template>

<script>
import { SfButton, SfIcon, SfChevron } from '@storefront-ui/vue';
import { mapGetters } from 'vuex';

export default {
  name: 'StoreHeaderIcons',
  components: {
    SfButton,
    SfIcon,
    SfChevron,
  },
  props: {
    /**
     * Header cartIcon (accepts same value as SfIcon)
     */
    cartIcon: {
      type: [String, Boolean, Array],
      default: 'empty_cart',
    },
    /**
     * Header wishlistIcon (accepts same value as SfIcon)
     */
    wishlistIcon: {
      type: [String, Boolean, Array],
      default: 'heart',
    },
    /**
     * Header accountIcon (accepts same value as SfIcon)
     */
    accountIcon: {
      type: [String, Boolean, Array],
      default: 'profile',
    },
    /**
     * Header activeIcon (accepts account, wishlist and cart)
     */
    activeIcon: {
      type: String,
      default: 'account',
      validator(value) {
        return ['', 'account', 'wishlist', 'cart'].includes(value);
      },
    },
    /**
     * Header cart items quantity
     */
    wishlistItemsQty: {
      type: [String, Number],
      default: '0',
    },
    /**
     * Header cart items quantity
     */
    cartItemsQty: {
      type: [String, Number],
      default: '0',
    },
  },
  computed: {
    ...mapGetters('authentication', ['getUser', 'isUserAuth']),
    cartHasProducts() {
      return parseInt(this.cartItemsQty, 10) > 0;
    },
    wishlistHasProducts() {
      return parseInt(this.wishlistItemsQty, 10) > 0;
    },
    customLabel() {
      return this.getUser.email;
    },
  },
};
</script>

<style lang='scss' scoped>

</style>
