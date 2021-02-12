<template>
    <v-app>
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
            height="0px"
        >
            <v-toolbar-title
                class="font-weight-black"
                :style="{
                    transform: 'translateY(30px)'
                }"
            >
                Proyecto Integrador
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span
                :style="{
                    transform: 'translateY(30px)'
                }"
            >
                <v-btn
                    @click="sidebar = !sidebar"
                    icon
                >
                    <fa icon="bars" size="2x"/>
                </v-btn>
            </span>
        </v-app-bar>
        <v-main>
            <nuxt/>
        </v-main>
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
