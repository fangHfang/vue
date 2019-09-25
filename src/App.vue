<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:0;
  padding:0;
}
@font-face {
  font-family: 'iconfont';  /* project id 572244 */
  src: url('https://at.alicdn.com/t/font_572244_5wyxrb22nvjcerk9.eot');
  src: url('https://at.alicdn.com/t/font_572244_5wyxrb22nvjcerk9.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_572244_5wyxrb22nvjcerk9.woff') format('woff'),
  url('https://at.alicdn.com/t/font_572244_5wyxrb22nvjcerk9.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_572244_5wyxrb22nvjcerk9.svg#iconfont') format('svg');
}
@font-face {
  font-family: 'iconfont';  /* project id 572946 */
  src: url('https://at.alicdn.com/t/font_572946_i6hqxv1ume6lmcxr.eot');
  src: url('https://at.alicdn.com/t/font_572946_i6hqxv1ume6lmcxr.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_572946_i6hqxv1ume6lmcxr.woff') format('woff'),
  url('https://at.alicdn.com/t/font_572946_i6hqxv1ume6lmcxr.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_572946_i6hqxv1ume6lmcxr.svg#iconfont') format('svg');
}
*{
  margin: 0;
  padding: 0;
  font-style: normal;
  font-family: "微软雅黑";
  text-decoration: none;
  list-style: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.0);
  box-sizing:border-box;
}
body::-webkit-scrollbar{
  display:none;
}
a{
  text-decoration: none;
}
img{
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
body::-webkit-scrollbar {
  display: none;
}
</style>
