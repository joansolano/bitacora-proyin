export default async ($content, params) => {
    const articles = await $content('articles', params.article)
        .only(['title', 'description', 'img', 'slug'])
        .sortBy('createdAt', 'desc')
        .fetch()

    return {
        articles
    }
}