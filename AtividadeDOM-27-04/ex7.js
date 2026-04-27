document.getElementById('listaRemovivel').addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.remove();
    }
});