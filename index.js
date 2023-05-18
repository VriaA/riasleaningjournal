const viewMore = document.getElementById('view-more')
const hiddenArticles = document.querySelectorAll('.hidden-article')

viewMore.addEventListener('click', _=>{
    for (article of hiddenArticles) {
        article.classList.toggle('show')
    }
    if(viewMore.innerText === "View More") {
        viewMore.innerText = "View Less"
    } else {
        viewMore.innerText = "View More"
    }
})