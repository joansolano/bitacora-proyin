<template>
  <div class="home">
    <v-row id="home" align="center" justify="center">
      <v-col>
        <v-row align="center" justify="center">
          <p class="text-h3 text-md-h2 text-lg-h1 font-weight-black">Proyecto Integrador</p>
        </v-row>
        <v-row align="center" justify="center">
          <p class="text-h6 text-md-h5 text-lg-h4 font-weight-bold">Control Digital &boxh; Robótica &boxh; Diseño Mecatrónico</p>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'home'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  width: 100%;
  height: 100vh;
}
#home {
  width: 100%;
  height: 100vh;
  background: url("../static/background.jpg") no-repeat center center fixed;
  background-size: cover;
}
</style>
