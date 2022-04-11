<template>
  <div class="fonts">
    <div class="fonts__form">
      <label>
        <span>Базовый текст</span>
        <input type="number" v-model="size" />
      </label>
      <label>
        <span>Базовый масштаб</span>
        <input type="number" v-model="scale" step="0.01" />
      </label>
    </div>
    <div class="fonts__card">
      <div v-for="(item, index) in fonts" :key="item.text" class="fonts__item">
        <div class="fonts__desc">
          <div>
            <span>font-family: </span>
            <strong>{{ `${item.fontFamily}, ${item.fontWeight}` }}</strong>
          </div>
          <div>
            <span>font-size / line-height: </span>
            <strong>{{ `${item.fontSize} / ${item.lineHeight}` }}</strong>
          </div>

          <div>
            <span>letter-spacing: </span><strong>{{ item.letterSpacing }}</strong>
          </div>
        </div>

        <div :ref="`item_${index}`" class="fonts__text" :class="item.class">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      size: 14,
      scale: 1.15,
      fonts: [
        {
          class: "display-l title",
          text: "Заголовок DISPLAY-L",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "display-m title",
          text: "Заголовок DISPLAY-M",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "display-s title",
          text: "Заголовок DISPLAY-S",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "headline-l title",
          text: "Заголовок HEADLINE-L",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "headline-m title",
          text: "Заголовок HEADLINE-M",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "headline-s title",
          text: "Заголовок HEADLINE-S",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "title-l title",
          text: "Заголовок TITLE-L",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "title-m title",
          text: "Заголовок TITLE-M",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "title-s title",
          text: "Заголовок TITLE-S",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "label-l label",
          text: "Заметка LABEL-L",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "label-m label",
          text: "Заметка LABEL-M",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "label-s label",
          text: "Заметка LABEL-S",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "body-l text",
          text: "Текст BODY-L",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "body-m text",
          text: "Текст BODY-M",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
        {
          class: "body-s text",
          text: "Текст BODY-S",
          fontFamily: "",
          fontSize: 0,
          fontWeight: 0,
          lineHeight: 0,
          letterSpacing: 0,
        },
      ],
    };
  },
  methods: {
    getStyle() {
      this.fonts.forEach((_, index) => {
        const elem = this.$refs[`item_${index}`][0];
        const style = getComputedStyle(elem);
        this.fonts[index].fontFamily = style.fontFamily;
        this.fonts[index].fontSize = style.fontSize;
        this.fonts[index].fontWeight = style.fontWeight;
        this.fonts[index].lineHeight = style.lineHeight;
        this.fonts[index].letterSpacing = style.letterSpacing;
      });
    },
  },
  mounted() {
    this.getStyle();
    window.addEventListener("resize", this.getStyle);
  },
  unmounted() {
    window.removeEventListener("resize", this.getStyle);
  },
  watch: {
    size(val) {
      document.documentElement.style.setProperty("--skr-base-font", `${val}px`);
      this.getStyle();
    },
    scale(val) {
      document.documentElement.style.setProperty("--text-scale-ratio", val);
      this.getStyle();
    },
  },
};
</script>
<style lang="scss" scoped>
.fonts {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: var(--skr-space-5);
  &__form {
    display: flex;
    flex-direction: column;
    column-gap: var(--skr-space-4);
    label {
      display: flex;
      justify-content: space-between;
      padding: var(--skr-space-xs) 0;
    }
    span {
      margin-right: var(--skr-space-2);
    }
  }
  &__card {
    display: flex;
    flex-direction: column;
  }
  &__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    column-gap: var(--skr-space-4);
    padding: var(--skr-space-1) 0;
    &:not(:last-child) {
      border-bottom: 1px solid rgba(black, 0.3);
    }
  }
  &__desc {
    @include body;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__text {
    display: inline-block;
    white-space: nowrap;
    justify-self: start;
    padding: var(--skr-space-2) var(--skr-space-6);
  }
}
.display-l {
  @include display(l);
}
.display-m {
  @include display;
}
.display-s {
  @include display(s);
}
.headline-l {
  @include headline(l);
}
.headline-m {
  @include headline;
}
.headline-s {
  @include headline(s);
}
.title-l {
  @include title(l);
}
.title-m {
  @include title;
}
.title-s {
  @include title(s);
}
.label-l {
  @include label(l);
}
.label-m {
  @include label;
}
.label-s {
  @include label(s);
}
.body-l {
  @include body(l);
}
.body-m {
  @include body;
}
.body-s {
  @include body(s);
}
</style>
