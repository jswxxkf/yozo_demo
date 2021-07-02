import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

setHtmlFontSize()
// rem compatability
function setHtmlFontSize() {
  let clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
  const htmlDOM = document.querySelector("html")
  if (clientWidth >= 3840) {
    // support max 4K screen
    clientWidth = 3840
  } else if (clientWidth <= 750) {
    clientWidth = 750
  }
  htmlDOM.style.fontSize = `${clientWidth / 20}px`
}

window.onresize = setHtmlFontSize;

new Vue({
  render: h => h(App),
}).$mount('#app')
