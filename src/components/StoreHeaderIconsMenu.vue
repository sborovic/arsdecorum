<template>
  <SfDropdown
    :class="customClass"
    :is-open="open"
    :persistent="persistent"
    :title="title"
    @click:close="closeMenu"
    @click:open="openMenu"
  >
    <template>
      <slot>
        <SfList>
          <SfListItem
            v-for="(action, key) in actionList"
            :key="key"
          >
            <SfButton
              class="sf-button--full-width sf-button--underlined color-primary"
              @click="closeMenu"
            >
              {{ action }}
            </SfButton>
          </SfListItem>
        </SfList>
      </slot>
    </template>
  </SfDropdown>
</template>
<script>
import { SfDropdown, SfList, SfButton } from '@storefront-ui/vue';
import { mapState } from 'vuex';
import menu from '@/store/menu';

export default {
  name: 'StoreHeaderIconsMenu',
  components: {
    SfDropdown,
    SfList,
    SfButton,
  },
  props: {
    namespace: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    actionList: {
      type: Array,
      default: () => [''],
    },
  },
  data() {
    return {
      title: 'Choose size',
      persistent: false,
      customClass: '',
    };
  },
  computed: {
    ...mapState({
      open(state) {
        return state[this.namespace][this.name].open;
      },
    }),
  },
  created() {
    if (!this.$store.hasModule([this.namespace, this.name])) {
      this.$store.registerModule([this.namespace, this.name], menu);
    }
  },
  beforeDestroy() {
    if (this.$store.hasModule([this.namespace, this.name])) {
      this.$store.unregisterModule([this.namespace, this.name], menu);
    }
  },
  methods: {
    openMenu() {
      this.$store.commit(`${this.namespace}/${this.name}/openMenu`);
    },
    closeMenu() {
      this.$store.commit(`${this.namespace}/${this.name}/closeMenu`);
    },
  },
};
</script>

<style lang='scss' scoped>
.sf-dropdown {
  --dropdown-width: auto;
}
</style>
