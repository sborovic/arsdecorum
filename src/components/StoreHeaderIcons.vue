<template>
    <div class="sf-header__icons">
      <SfButton
        v-if="accountIcon"
        class="sf-button--pure sf-header__action "
        @click="showAccount"
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
          <StoreHeaderIconsMenu
            :namespace="menusNamespace"
            :name="accountMenu"
            :action-list="['option1', 'option2']"
            >
          </StoreHeaderIconsMenu>
        </template>
      </SfButton>
      <SfButton
        v-if="wishlistIcon"
        class="sf-button--pure sf-header__action"
        @click="openWishlistMenu"
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
        <template>
          <SfChevron/>
          <StoreHeaderIconsMenu
            :namespace="menusNamespace"
            :name="wishlistMenu"
            :actionList="['wish1', 'wish2']"
            />
        </template>
      </SfButton>
      <SfButton
        v-if="cartIcon"
        class="sf-button--pure sf-header__action"
        @click="openCartMenu"
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
        <template>
          <SfChevron/>
          <StoreHeaderIconsMenu
            :namespace="menusNamespace"
            :name="cartMenu"
            :actionList="['cart1', 'cart2']"
            />
        </template>
      </SfButton>
    </div>
</template>

<script>
import { SfButton, SfIcon, SfChevron } from '@storefront-ui/vue';
import { mapGetters, mapMutations } from 'vuex';
import StoreHeaderIconsMenu from '@/components/StoreHeaderIconsMenu.vue';

export default {
  name: 'StoreHeaderIcons',
  components: {
    SfButton,
    SfIcon,
    SfChevron,
    StoreHeaderIconsMenu,
  },
  data() {
    return {
      menusNamespace: 'menus',
      accountMenu: 'accountMenu',
      wishlistMenu: 'wishlistMenu',
      cartMenu: 'cartMenu',
    };
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
      default: '',
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
  methods: {
    ...mapMutations({
      showModal: 'modal/showModal',
      openAccountMenu(commit) {
        commit(`${this.menusNamespace}/${this.accountMenu}/openMenu`);
      },
      openWishlistMenu(commit) {
        commit(`${this.menusNamespace}/${this.wishlistMenu}/openMenu`);
      },
      openCartMenu(commit) {
        commit(`${this.menusNamespace}/${this.cartMenu}/openMenu`);
      },
    }),
    showAccount() {
      if (!this.isUserAuth) {
        this.showModal();
      } else {
        this.openAccountMenu();
      }
    },
  },
};
</script>

<style lang='scss' scoped>

</style>
