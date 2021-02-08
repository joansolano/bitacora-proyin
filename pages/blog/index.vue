<template>
    <div>
        <v-container>
            <v-row align="center" justify="center" wrap> 
                <v-col cols="12" align="center" justify="center">
                    <p class="text-h4 text-sm-h5 text-md-h4 text-xl-h3">Bitácora</p>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col
                    v-for="article in articles"
                    :key="article.slug"
                    cols="12"
                    sm="10"
                    md="6"
                    lg="4"
                >
                    <v-hover v-slot="{ hover }">
                        <v-card
                            :elevation="hover ? 12 : 0"
                            :class="{ 'on-hover': hover }"
                        >
                            <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                                <img 
                                    :data-src="require(`~/assets/images/${ article.img }`)"
                                    :src="require(`~/assets/lazy_img.webp`)" 
                                    :alt="article.img"
                                    :style="{ width: '100%', height: '100%' }"
                                    :class="nameClass"
                                >
                                <v-card-title v-text="article.title" class="text-h5 text-xl-h3"></v-card-title>
                                <v-card-subtitle v-text="article.description" class="text-subtitle-1 text-xl-h6 mt-2"></v-card-subtitle>
                                <v-card-actions>
                                    <v-btn
                                        text
                                        class="ml-1 mb-1 font-weight-black text-subtitle-1 text-xl-h6"
                                        nuxt
                                        outlined
                                        :large="screen2k"
                                    >
                                        Leer más
                                        <fa icon="arrow-right" class="ml-2 white--text"/>
                                    </v-btn>
                                </v-card-actions>
                            </nuxt-link>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import getArticles from '~/utils/getArticles'
import lazyLoad from '~/utils/lazyLoad'

export default {
    async asyncData({ $content, params }) {
        const articles = await getArticles($content, params)

        return {
            articles: articles.articles,
            nameClass: 'lzy-img-page-bi'
        }
    },
    computed: {
        screen2k() {
            return this.$vuetify.breakpoint.name === 'xl'
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