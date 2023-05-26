// import "./style.css"

const $ = selector => document.querySelector(selector)

const $js = $('#js')
const $css = $('#css')
const $html = $('#html')

$js.addEventListener("input", update)
$css.addEventListener("input", update)
$html.addEventListener("input", update)

function init() {
    const { pathname } = window.location
    const [html, css, js] = pathname.slice(1).split('%7C')
    $html.value = window.atob(html)
    $css.value = window.atob(css)
    $js.value = window.atob(js)
}

function update () {
    const html = $html.value
    const js = $js.value
    const css = $css.value

    const hashedCode = `${window.btoa(html)}|${window.btoa(css)}|${window.btoa(js)}`
    window.history.replaceState(null, null, `/${hashedCode}`)
    
    const htmlPreview = createHtml({js, html, css})
    $("iframe").setAttribute("srcdoc", htmlPreview)
}

const createHtml = ({js, html, css}) => {

    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <style>
            ${css}
        </style>
    </head>
    <body>
        ${html}
        <script>
            ${js}
        </script
    </body>
</html>
        `
}

init()

// function download(filename, text) {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);
  
//     element.style.display = 'none';
//     document.body.appendChild(element);
  
//     element.click();
  
//     document.body.removeChild(element);
//   }