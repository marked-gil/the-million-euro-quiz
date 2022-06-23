document.addEventListener('DOMContentLoaded', function(event) {
    let howToPlayArticle = document.getElementById('how-to-play-container');
    let howToPlayBtn = document.getElementById('howtoplay-btn-homepage');

    howToPlayBtn.addEventListener('click', function() {
        howToPlayArticle.classList.remove('hide');
    })

    let closeHowToPlay = document.getElementById('close-how-to-play');
    closeHowToPlay.addEventListener('click', function() {
        howToPlayArticle.classList.add('hide');
    })
})