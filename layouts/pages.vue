<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="sidebar"
      app
      right
      width="300"
      temporary
      color="rgba(27, 27, 27, 0.9)"
    >
      <v-list>
        <v-list-item-content>
          <v-list-item-title v-text="'Proyecto Integrador'" class="text-h5 text-xl-h2 text-center font-weight-bold"></v-list-item-title>
        </v-list-item-content>
        <v-list-item
          v-for="(link, index) in links"
          :key="index"
          :to="{ name: link.url }"
          router
          exact
        >
          <v-list-item-action>
            <fa :icon="link.icon" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="link.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      height="60px"
      hide-on-scroll
      elevation="0"
      color="rgba(0, 0, 0, 0.3)"
    >
      <v-toolbar-title
        class="font-weight-black"
      >
        <nuxt-link 
          :to="{ name: 'index' }"
          :style="{
            color: 'white'
          }"
        >
          Proyecto integrador
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        v-for="(link, index) in links"
        :key="index"
        class="hidden-sm-and-down"
      >
        <v-btn
          text
          :to="{
            name: `${ link.url }`
          }"
        >
          {{ link.name }}
        </v-btn>
      </v-toolbar-items>
      <span class="hidden-md-and-up">
        <v-btn
          @click="sidebar = !sidebar"
          icon
          small
        >
          <fa icon="bars" size="2x" />
        </v-btn>
      </span>
    </v-app-bar>
    <v-main class="pages-bg">
      <nuxt/>
    </v-main>
    <v-footer 
      padless 
      app 
      absolute
      color="rgba(0, 0, 0, 0.3)"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} &boxh; Proyecto Integrador
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sidebar: false,
      links: [
        {
          name: 'Inicio',
          url: 'index',
          icon: 'home'
        },
        {
          name: 'Acerca del proyecto',
          url: 'acerca',
          icon: 'tools'
        },
        {
          name: 'Blog',
          url: 'blog',
          icon: 'blog'
        },
        {
          name: 'Integrantes',
          url: 'integrantes',
          icon: 'users'
        }
      ]
    }
  }
}
</script>

<style scoped>
.pages-bg {
  background: url("../static/background_cdiferencial.png") no-repeat center center fixed;
  background-size: cover;
}
a {
  text-decoration: none;
}
</style>
