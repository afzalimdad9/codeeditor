function run() {
let html = document.querySelector(".editor #html-code").value;
let css =
  "<style>" + document.querySelector(".editor #css-code").value + "</style>";
let js = document.querySelector(".editor #js-code").value;
let output = document.querySelector(".editor #output");
output.contentDocument.body.innerHTML = html+css;
output.contentWindow.eval(js);
}

document.querySelector(".editor #html-code").addEventListener("keyup", run);
document.querySelector(".editor #css-code").addEventListener("keyup", run);
document.querySelector(".editor #js-code").addEventListener("keyup", run);