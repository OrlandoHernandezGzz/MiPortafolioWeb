<script setup>

</script>

<template>
  <section class="about-me">
    <div class="about-me__container">
      <div class="about-me__description">
        <h2 class="about-me__title">
          Soy <span>Desarrollador</span> de Software
        </h2>

        <p class="about-me__paragraph">
          Me considero un amante y apasionado de la tecnología con más de 2 años
          de experiencia en el desarrollo web con las tecnologías de .NET y
          Javascript.
        </p>

        <button class="about-me__btn-contact">Contáctame</button>
      </div>

      <div class="about-me__cards">
        <div class="about-me__card">
          <!-- icon -->
          <font-awesome-icon :icon="['fab', 'github']" />
          <p>Github</p>
        </div>

        <div class="about-me__card">
          <!-- icon -->
          <p>Linkedln</p>
        </div>

        <div class="about-me__card">
          <!-- icon -->
          <p>CV</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-me__container {
  padding: var(--container-mobile);
}

.about-me__description {
  display: flex;
  flex-direction: column;
}

.about-me__title {
  font-size: var(--font-h2-mobile);
  font-weight: bold;
}

.about-me__title span {
  color: var(--purple);
}

.about-me__paragraph {
  font-size: var(--font-p-mobile);
}

.about-me__btn-contact {
  margin: 20px auto;
  background: var(--purple);
  color: var(--white);
  height: 40px;
  width: 200px;
  border: none;
  border-radius: 10px;
}

.about-me__cards {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* TODO: Terminar las tarjetas de las redes sociales. */
.about-me__card {
  background: var(--white);
  width: 80px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
