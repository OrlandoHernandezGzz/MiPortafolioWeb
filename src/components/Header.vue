<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <header class="header">
    <div class="header__container container ">
      <h1 class="header__logo">ORLAHDZ</h1>

      <label for="menu" class="header__label">
        <font-awesome-icon
          class="header__hamburger"
          :icon="['fas', 'bars-staggered']"
        />
      </label>
      <input type="checkbox" id="menu" class="header__input" v-model="menuOpen">
      

      <nav class="header__menu" @click="closeMenu">
        <a href="#" class="header__item">Proyectos</a>
        <a href="#" class="header__item">Skills</a>
        <a href="#" class="header__item">Educación</a>
        <a href="#" class="header__item">Experiencia</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 80px;
}

.header__container {
  display: flex;
  margin: 16px auto; 
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-size: 1.5em;
  font-weight: bold;
  color: var(--purple);
}

.header__menu {
  display: grid;
  grid-auto-flow: column;
  gap: 3em;
}

.header__item {
  color: var(--black);
  text-decoration: none;
  font-weight: bold;
  --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
}

.header__item::after {
  content: "";
  display: block;
  background: var(--purple);
  margin-top: 3px;
  width: 60%;
  height: 3px;
  clip-path: var(--clippy);
  transition: clip-path .5s;
}

.header__item:hover {
  --clippy: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

.header__hamburger {
  font-size: var(--font-h1-mobile);
}

.header__hamburger, .header__input {
  display: none;
}

/* Media Queries */
@media (max-width: 767px) {
  .header__label {
    display: block;
    cursor: pointer;
  }

  .header__hamburger {
    display: block;
  }

  .header__menu {
    position: fixed;
    top: 80px;
    bottom: 0;
    background: var(--bg-body);
    width: 100%;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    transition: clip-path .5s;
  }

  .header__input:checked + .header__menu {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);;
  }
}

</style>
