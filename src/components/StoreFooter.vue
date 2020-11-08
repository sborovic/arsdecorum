<template>
  <SfFooter
    column="4"
    :multiple="multiple"
    :open="open"
    class="sb-footer"
  >
    <SfFooterColumn
      v-for="column in columns"
      :key="column.title"
      :title="column.title"
    >
      <SfList v-if="column.items">
        <SfListItem
          v-for="item in column.items"
          :key="item"
        >
          <SfMenuItem :label="item" />
        </SfListItem>
      </SfList>
      <div
        v-else
        class="sb-footer__social"
      >
        <SfImage
          v-for="picture in column.pictures"
          :key="picture"
          width="12"
          height="12"
          :src="'/assets/storybook/SfFooter/' + picture + '.svg'"
          class="sb-social-icon"
        />
      </div>
    </SfFooterColumn>
  </SfFooter>
</template>
<script>
import {
  SfFooter, SfList, SfImage, SfMenuItem,
} from '@storefront-ui/vue';

export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem,
  },
  data() {
    return {
      columns: [
        {
          title: 'About us',
          items: ['Who we are', 'Quality in the details', 'Customer Reviews'],
        },
        {
          title: 'Departments',
          items: ['Women fashion', 'Men fashion', 'Kidswear', 'Home'],
        },
        {
          title: 'Help',
          items: ['Customer service', 'Size guide', 'Contact us'],
        },
        { title: 'Payment & delivery', items: ['Purchase terms', 'Guarantee'] },
        {
          title: 'Social',
          pictures: ['facebook', 'pinterest', 'twitter', 'youtube'],
        },
      ],
      multiple: false,
      open: ['About us', 'Help', 'Social'],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
