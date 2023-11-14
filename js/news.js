const news_nav = document.querySelectorAll('.news-link-nav')

for (let i = 0; i < news_nav.length; i++) {
    news_nav[i].addEventListener('click', function () {
        news_nav.forEach(d => d.classList.remove('active'))
        this.classList.add('active')
    })
}