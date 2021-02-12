<template>
    <div>
        <v-container>
            <v-row
                align="center"
                wrap
            >
                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                    justify="center"
                >
                    <img 
                        :data-src="require('~/assets/images/walle.png')"
                        :src="require('~/assets/lazy_img.webp')" 
                        alt="robot"
                        :style="{
                            width: widthImg
                        }"
                        :class="nameClass"
                    >
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="text-h6 text-md-h5 text-lg-h4 font-weight-bold">Acerca del proyecto</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam error alias! Ipsum nulla neque repudiandae, eaque, unde ex numquam hic commodi vel fugit, voluptate eum omnis delectus totam reiciendis!</p>
                    <v-btn
                        outlined
                        :to="{ name: 'blog' }"
                    >
                        Revisa nuestro blog
                    </v-btn>
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
            nameClass: 'lzy-img-acerca'
        }
    },
    computed: {
        widthImg() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '290px'
                case 'sm': return '370px'
                case 'md': return '430px'
                case 'lg': return '550px'
                case 'xl': return '600px'
            }
        }
    },
    mounted() {
        lazyLoad(this.nameClass, true)
    }
}
</script>