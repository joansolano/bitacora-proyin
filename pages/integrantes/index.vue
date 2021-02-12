<template>
    <div>
        <v-container>
            <v-row align="center" justify="center" wrap>
                <v-col cols="12" align="center" justify="center">
                    <p class="text-h4 text-sm-h5 text-md-h4 text-lg-h3 font-weight-bold">Integrantes del equipo</p>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col
                    v-for="(member, index) in team"
                    :key="index"
                    cols="12"
                    sm="10"
                    md="6"
                    lg="4"
                >
                    <v-card
                        elevation="0"
                    >
                        <img 
                            :data-src="member.imgSrc"
                            :src="require('~/assets/lazy_img.webp')" 
                            :alt="member.name"
                            :style="{ width: '100%', height: '100%' }"
                            :class="nameClass"
                        >
                        <v-card-title v-text="member.name" class="text-h5 text-xl-h3"></v-card-title>
                        <v-card-actions>
                            <a 
                                :href="'mailto:' + member.email" 
                                class="text-xl-h5 ml-2 mb-2"
                                :style="{
                                    color: '#128F0E'
                                }"
                            >
                                {{ member.email }}
                            </a>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import lazyLoad from '~/utils/lazyLoad'

export default {
    layout: 'pages',
    data() {
        return {
            team: [
                {
                    name: 'Joan Sebastian Solano',
                    email: 'jntian-21@hotmail.com',
                    imgSrc: require('~/assets/team/joansolano.webp')
                },
                {
                    name: 'Alejandro López Gómez',
                    email: 'alejandro-lope999@hotmail.com',
                    imgSrc: require('~/assets/team/avatar.webp')
                },
                {
                    name: 'Cristian Castañeda',
                    email: 'cristiancv2012@gmail.com',
                    imgSrc: require('~/assets/team/avatar.webp')
                }
            ],
            nameClass: 'lzy-img-team'
        }
    },
    mounted() {
        lazyLoad(this.nameClass, false)
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>