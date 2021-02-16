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
                    :style="{
                        background: 'rgb(27, 27, 27)'
                    }"
                >
                    <p class="text-h6 text-md-h5 text-lg-h4 font-weight-bold">Acerca del proyecto</p>
                    <p>
                        En Colombia se tiene una baja tecnificación de procesos en la industria. <br>
                        Como aporte al desarrollo de la industria de la logística, nuestra solución se basa en la implementación de robótica móvil para el transporte interno de mercancías dentro de instalaciones de tipo industrial. <br>
                        La implementación de robots de logística de tipo industrial esta siendo de acogida por múltiples compañías como BMW, DHL, Amazon, entre otros. <br>
                        Cada uno de estos robots cuenta con diferentes tipos de tecnologías como visión artificial, IOT, RFID. Este tipo de tecnologías les permiten desde reconocer elementos en su entorno hasta identificar en tiempo real requerimientos de la zona industrial en la que se encuentren. <br>
                        Nuestra solución busca tratar de introducir a la industria colombiana a la 4ta revolución industrial al desarrollar una plataforma robótica móvil básica, en la cual se puedan implementar diferentes tipos tecnologías para sus aplicaciones específicas.
                    </p>
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