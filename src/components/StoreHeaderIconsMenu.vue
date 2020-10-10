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
            >vode{{ action }}</SfButton
          >
        </SfListItem>
      </SfList>
    </template>
  </SfDropdown>
</template>
<script>
import { SfDropdown, SfList, SfButton } from '@storefront-ui/vue';
import { mapMutations, mapState } from 'vuex';
import menu from '@/store/menu';

export default {
  name: 'StoreHeaderIconsMenu',
  components: {
    SfDropdown,
    SfList,
    SfButton,
  },
  created() {
    this.$store.registerModule('menu', menu);
  },
  beforeDestroy() {
    this.$store.unregisterModule('menu');
  },
  data() {
    return {
      isOpen: true,
      namespace: `menu/${this.name}`,
      title: 'Chfghoose size',
      persistent: false,
      customClass: '',
    };
  },
  props: {
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
    ...mapState('menu', ['open']),
    // ...mapState({
    //   // open(state) {
    //   // return state[`${this.namespace}/open`];
    //   // },
    // }),
  },
  methods: {
    // ...mapMutations({
    //   openMenu(commit) {
    //     commit(`${this.namespace}/openMenu`);
    //   },
    //   closeMenu(commit) {
    //     commit(`${this.namespace}/closeMenu`);
    //   },
    // }),
    ...mapMutations('menu', ['openMenu', 'closeMenu']),
  },
};
</script>
