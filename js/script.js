if (document.getElementById('menu')) {
    fetch('menu_superior.html').then(response => {
        return response.text();
    }).then(htmlContent => {
        document.getElementById('menu').innerHTML = htmlContent;
        window.scrollTo(0, 0);
    });
};

if (document.getElementById('footer')) {
    fetch('menu_inferior.html').then(response => {
        return response.text();
    }).then(htmlContent => {
        document.getElementById('footer').innerHTML = htmlContent;
        window.scrollTo(0, 0);
    });
};