<template>
  <div class="colors">
    <div class="colors__head">
      <span class="colors__name">Название</span>
      <div class="colors__palette">
        <span>Light</span>
        <span>Dark</span>
      </div>
    </div>
    <div v-for="(color, key) of colors.light" :key="key" class="colors__item">
      <div class="colors__name">{{ key }}</div>
      <div class="colors__palette">
        <div class="colors__tile">
          <div class="colors__fill" :style="`background-color: ${color}`"></div>
        </div>
        <div class="colors__tile colors__tile--dark">
          <div class="colors__fill" :style="`background-color: ${colors.dark[key]}`"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import customVariables from "../../../";
export default {
  name: "OtherView",
  data() {
    return {
      colors: {
        light: customVariables.LightColors,
        dark: customVariables.DarkColors,
      },
    };
  },
  mounted() {
    console.log(customVariables.LightColors);
  },
};
</script>
<style lang="scss" scoped>
.colors {
  width: 320px;
  padding: var(--skr-space-6);
  border-radius: var(--plx-radius-m);
  box-shadow: var(--plx-shadow-m);
  margin: auto;
  display: flex;
  flex-direction: column;
  &__head {
    width: 100%;
    display: flex;
  }
  &__name {
    width: 60%;
    text-align: left;
    @include title;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child) {
      border-bottom: var(--plx-divider-s) solid var(--plx-secondary);
    }
  }
  &__palette {
    display: flex;
    justify-content: space-around;
    width: 40%;
  }
  &__tile {
    position: relative;
    width: 40px;
    height: 40px;
    padding: var(--skr-space-3);
    margin: var(--skr-space-2);
    box-sizing: border-box;
    box-shadow: var(--plx-shadow-base);
    border-radius: var(--plx-radius-l);
    background-color: var(--plx-base-2);
    &--dark {
      background-color: var(--plx-base-7);
    }
  }
  &__fill {
    width: 100%;
    height: 100%;
    border-radius: var(--plx-radius-m);
  }
}
</style>
