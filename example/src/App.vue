<template>
  <nav>
    <router-link to="/">Шрифты</router-link> | <router-link to="/colors">Цвета</router-link> |
    <router-link to="/other">Остальное</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  @include title;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
