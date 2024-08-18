function showSurprise() {
    const image = document.getElementById('birthday-image');
    const message = document.getElementById('surprise-message');
    const song = document.getElementById('birthday-song');
    
    image.style.display = 'block';
    image.style.opacity = '1';
    message.textContent = "We Love You";
    song.play();
}