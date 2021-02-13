<template>
    <div>
        <div
            id="parallaxEf"
            :style="styleObject"
        >
            <div class="shadow">
                <v-row
                    class="centered"
                    wrap
                >
                    <v-col
                        cols="12"
                    >
                        <p class="text-h4 text-sm-h3 text-md-h2 text-xl-h1 font-weight-bold">{{ article.title }}</p>
                    </v-col>
                </v-row>
            </div>
        </div>
        <v-container class="mt-5">
            <v-row justify="center">
                <v-col
                    cols="11"
                    sm="10"
                    :style="{
                        background: 'rgb(27, 27, 27)',
                        padding: '20px',
                        marginBottom:  '10px'
                    }"
                >
                    <p 
                        class="text-body-2 
                            text-sm-body-1 
                            text-md-subtitle-2 
                            text-xl-subtitle-1"
                    >
                        {{ formatDate(article.createdAt) }}
                    </p>
                    <p 
                        class="text-h6 
                            text-md-h5 
                            text-xl-h4 
                            font-weight-bold"
                    >
                        {{ article.description }}
                    </p>
                    <nuxt-content :document="article" class="text-xl-h5"/>
                    <p 
                        class="text-subtitle-1 
                            text-md-h6 
                            text-xl-h5
                            font-weight-bold" 
                        v-if="article.resEvi.length != 0"
                    >
                        Resultado y evidencias
                    </p>
                    <a
                        v-for="(archive, index) of article.resEvi"
                        :key="index"
                        :href="development ? `http://localhost:3000/${ archive }` : `https://cdiferencialcaj.web.app/${ archive }`"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <v-btn
                            rounded
                            outlined
                            large
                            class="text-xl-h5 mt-2 mb-2"
                            block
                        >
                            {{ archive }}
                            <v-spacer></v-spacer>
                            <fa icon="download"/>
                        </v-btn>
                    </a>
                    <p 
                        class="text-body-2 
                            text-sm-body-1 
                            text-md-subtitle-2 
                            text-xl-subtitle-1
                            mt-4"
                    >
                        Post actualizado por última vez: {{formatDate(article.updatedAt)}}
                    </p>
                    <v-divider></v-divider>
                    <prev-next 
                        :prev="prev" 
                        :next="next" 
                        :name="'blog-slug'" 
                        class="mt-4 mb-2 text-xl-h6"
                    />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    layout: 'pages',
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug)
            .fetch()

        const [prev, next] = await $content('articles')
            .only(['title', 'slug'])
            .sortBy('createdAt', 'desc')
            .surround(params.slug)
            .fetch()

        return {
            article,
            prev,
            next,
            styleObject: {
                height: '90vh',
                width: '100%',
                backgroundImage: 'url(' + require(`~/assets/images/${ article.img }`) + ')',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            },
            development: process.env.NODE_ENV !== 'production'
        }
    },
    methods: {
        formatDate(date) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            return new Date(date).toLocaleDateString('es', options)
        },
        setImages() {
            const arrPimg = document.querySelectorAll('.img')
            if (arrPimg) {
                arrPimg.forEach((el, index) => {
                    const img = require(`~/assets/images/${ this.article.arrImgs[index] }`)
                    el.innerHTML = '<img src="' + img + '">'
                    el.children[0].style.maxWidth = this.setMaxWidth
                })
            }
        }
    },
    computed: {
        setMaxWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '260px'
                case 'sm': return '570px'
                case 'md': return '700px'
                case 'lg': return '900px'
                case 'xl': return '1200px'
            }
        }
    },
    mounted() {
        this.setImages()
    }
}
</script>

<style scoped>
#parallaxEf {
    position: relative;
}
.centered {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
}
a {
  text-decoration: none;
  color: #128f0e;
}
.shadow {
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
}
</style>