<template>
  <SfHero :style="{ maxWidth: '1240px', margin: 'auto' }">
    <SfHeroItem
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :button-text="buttonText"
      :image="image"
      :background="background"
    />
    <SfHeroItem
      :class="customClass"
      title="Colorful summer dresses are already in store"
      subtitle="Summer Collection 2019"
      button-text="Learn more"
      image="/assets/storybook/SfHero/hero.png"
      background="#FCE4EC"
    />
  </SfHero>
</template>
<script>
import { SfHero } from '@storefront-ui/vue';

export default {
  components: {
    SfHero,
  },
  data() {
    return {
      title: 'Colorful summer dresses are already in store',
      subtitle: 'Summer Collection 2019',
      buttonText: 'Learn more',
      image: {
        mobile: '/assets/storybook/SfHero/hero.png',
        desktop: '/assets/storybook/SfHero/hero.png',
      },
      background: '#ECEFF1',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
