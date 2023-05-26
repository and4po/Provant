// import "./style.css"

const $ = selector => document.querySelector(selector)

const $js = $('#js')
const $css = $('#css')
const $html = $('#html')

$js.addEventListener("input", update)
$css.addEventListener("input", update)
$html.addEventListener("input", update)

function update () {
    const html = createHtml()
    $("iframe").setAttribute("srcdoc", html)
}

const createHtml = () => {
    const html = $html.value
    const js = $js.value
    const css = $css.value

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

// function download(filename, text) {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);
  
//     element.style.display = 'none';
//     document.body.appendChild(element);
  
//     element.click();
  
//     document.body.removeChild(element);
//   }