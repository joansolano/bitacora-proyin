<template>
    <div class="prevnext">
        <v-row>
            <nuxt-link
                v-if="prev"
                :to="{ name: name, params: { slug: prev.slug } }"
            >
                <fa icon="angle-left" class="white--text"/>
                {{ prev.title }}
            </nuxt-link>
            <span v-else>&nbsp;</span>
            <v-spacer></v-spacer>
            <nuxt-link
                v-if="next"
                :to="{ name: name, params: { slug: next.slug } }"
            >
                {{ next.title }}
                <fa icon="angle-right" class="white--text"/>
            </nuxt-link>
            <span v-else>&nbsp;</span>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        prev: {
            type: Object,
            default: () => null
        },
        next: {
            type: Object,
            default: () => null
        },
        name: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #128f0e;
}
</style>