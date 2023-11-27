<script setup>

</script>

<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__logo">ORLAHDZ</h1>

      <font-awesome-icon
        class="header__hamburger"
        :icon="['fas', 'bars-staggered']"
      />

      <nav class="header__nav">
        <ul class="header__items">
          <li class="header__item"></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header__container {
  padding: var(--container-mobile);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  color: var(--purple);
  font-weight: bold;
  font-size: var(--font-h1-mobile);
}

.header__hamburger {
  font-size: var(--font-h1-mobile);
}

.header__nav {
  display: none;
}
</style>
