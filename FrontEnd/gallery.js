// add interactivity here
document.querySelectorAll('.gallery-item .overlay i').forEach(icon => {
    icon.addEventListener('click', function() {
        alert('You liked this image!');
    });
});
