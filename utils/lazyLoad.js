export default (nameClass, setNot) => {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target
                lazyImage.src = lazyImage.dataset.src
                lazyImage.classList.remove(nameClass)
                imgObserver.unobserve(lazyImage)
            }
        })
    })
    if (setNot) {
        const img = document.querySelector(`.${ nameClass }`)
        imageObserver.observe(img)
    } else {
        const arr = document.querySelectorAll(`.${ nameClass }`)
        arr.forEach((v) => {
            imageObserver.observe(v)
        })
    }
}