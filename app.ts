import "./assets/scss/core.scss";

function log (txt) {
    document.getElementById('log').innerHTML += '<p>' + txt + '</p>'
}
window.log = log

log("hello world")
log('how are you')