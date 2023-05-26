// import "./style.css"
import Split from "https://cdn.jsdelivr.net/npm/split-grid@1.0.11/+esm";

const $ = selector => document.querySelector(selector)

Split({
	columnGutters: [{
    track: 1,
    element: document.querySelector('.vertical-gutter'),
  }],
  rowGutters: [{
  	track: 1,
    element: document.querySelector('.horizontal-gutter'),
  }]
})

const $js = $('#js')
const $css = $('#css')
const $html = $('#html')

$js.addEventListener("input", update)
$css.addEventListener("input", update)
$html.addEventListener("input", update)

function init() {
    const { pathname } = window.location

    const [rawHtml, rawCss, rawJs] = pathname.slice(1).split('%7C')

    $html.value = window.atob(rawHtml)
    $css.value = window.atob(rawCss)
    $js.value = window.atob(rawJs)

    const htmlPreview = createHtml({js, html, css})
    $("iframe").setAttribute("srcdoc", htmlPreview)
}

function update () {
    const html = $html.value
    const js = $js.value
    const css = $css.value

    const hashedCode = `${window.btoa(html)}|${window.btoa(css)}|${window.btoa(js)}`
    window.history.replaceState(null, null, `${hashedCode}`)
    
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