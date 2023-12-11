<script setup></script>

<template>
  <section class="projects mt-5">
    <div class="projects__container container">
      <h1 class="projects__title">Proyectos</h1>

      <div class="projects__cards row row-cols-1 row-cols-md-3 g-4 mt-1">
        <div class="projects__cards-container col">
          <div class="projects__card card">
            <img
              src="https://th.bing.com/th/id/OIP.5oxMycCej-zSQJuqXos5nAHaEK?pid=ImgDet&rs=1"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="projects__card-title">Proyecto 1</h5>
              <p class="projects__card-paragraph">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>

              <div class="projects__card-skills">
                <div class="projects__card-skill">
                    <p class="projects__card-skill-p">Html</p>
                </div>

                <div class="projects__card-skill">
                    <p class="projects__card-skill-p">Css</p>
                </div>

                <div class="projects__card-skill">
                    <p class="projects__card-skill-p">Javascript</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__title {
  font-size: var(--font-h2-mobile);
  font-weight: bold;
}

.projects__title::after {
  content: "";
  display: block;
  background: var(--purple);
  margin-top: 3px;
  width: 20%;
  height: 4px;
  border-radius: 10px;
}

.projects__card-title {
  font-size: var(--font-title-mobile);
  font-weight: 700;
}

.projects__card-paragraph {
  font-size: var(--font-p-mobile);
  font-weight: 400;
}

.projects__card-skills {
    display: flex;
    gap: 10px;
}

.projects__card-skill {
    background: var(--yellow);
    border-radius: 20px;
    display: flex;
    height: 20px;
    padding: 3px 15px 2px 15px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.projects__card-skill-p {
    font-size: var(--font-plittle-mobile);
    font-weight: 400;
}
</style>
