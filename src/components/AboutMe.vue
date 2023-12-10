<script setup></script>

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
          <font-awesome-icon class="about-me__card-icon" :icon="['fab', 'github']" />
          <p class="about-me__card-text">Github</p>
        </div>

        <div class="about-me__card">
          <!-- icon -->
          <font-awesome-icon class="about-me__card-icon" :icon="['fab', 'linkedin']" />
          <p class="about-me__card-text">LinkedIn</p>
        </div>

        <div class="about-me__card">
          <!-- icon -->
          <font-awesome-icon class="about-me__card-icon" :icon="['fas', 'file-pdf']" />
          <p class="about-me__card-text">CV</p>
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
  background: #8e48ff;
  box-shadow: var(--shadow);
}

.about-me__cards {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.about-me__card {
  background: var(--white);
  display: flex;
  width: 80px;
  padding: 16px 16px 0px 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;

  border-radius: 10px;
  background: var(--white);
  box-shadow: var(--shadow);
}

.about-me__card-icon {
  width: 20px;
  height: 20px;
  color: var(--purple);
}

.about-me__card-text {
  font-size: var(--font-p-mobile);
  font-weight: 400;
}
</style>
