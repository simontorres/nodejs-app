function selectStyle(event, style_name) {
    document.getElementById('style_theme')
        .setAttribute('href',
                      "https://bootswatch.com/4/" + style_name + "/bootstrap.css")
}