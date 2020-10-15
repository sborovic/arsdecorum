<template>
  <SfDropdown
    :class="customClass"
    :is-open="open"
    @click:close="closeMenu"
    @click:open="openMenu"
    :persistent="persistent"
    :title="title"
  >
    <template>
      <SfList>
        <SfListItem v-for="(action, key) in actionList" :key="key">
          <SfButton
            class="sf-button--full-width sf-button--underlined color-primary"
            @click="isOpen = false"
            >{{ action }}</SfButton
          >
        </SfListItem>
      </SfList>
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
  data() {
    return {
      isOpen: true,
      title: 'Choose size',
      persistent: false,
      customClass: '',
    };
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
      required: true,
    },
  },
  computed: {
    ...mapState({
      open(state) {
        return state[this.namespace][this.name].open;
      },
    }),
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
