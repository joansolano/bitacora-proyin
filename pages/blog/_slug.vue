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
                >
                    <p class="text-body-2 text-sm-body-1 text-md-subtitle-2 text-xl-subtitle-1">{{ formatDate(article.createdAt) }}</p>
                    <p class="text-h6 text-md-h5 text-xl-h4 font-weight-bold">{{ article.description }}</p>
                    <nuxt-content :document="article" class="text-xl-h5"/>
                    <p class="text-body-2 text-sm-body-1 text-md-subtitle-2 text-xl-subtitle-1">Post actualizado por última vez: {{formatDate(article.updatedAt)}}</p>
                    <v-divider></v-divider>
                    <prev-next :prev="prev" :next="next" :name="'blog-slug'" class="mt-4 mb-2 text-xl-h6"/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
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
            }
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
                })
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
}
.shadow {
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
}
</style>