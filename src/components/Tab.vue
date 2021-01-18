<template>
  <div class="container">
    <nav class="flx j-c a-c">
      <router-link to="/" >Designer Center</router-link>
      <a href="/?m=designers&a=portfolio" >Portfolio</a>
      <a href="/?m=designers&a=help">Help Center</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      title: 'Pikbest Uploading System'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  margin-top: 20px;
}
a{
  line-height: 62px;
  display: inline-block;
  font-size: 20px;
  margin: 0 40px;
  color: #999;
  position: relative;
}
a.router-link-active,
a:hover{
  color: #fff;
}
a.router-link-active::after,
a:hover::after{
  display: block;
}
a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    color: transparent;
    background: 0 0;
    background: #fff linear-gradient(to right,#f3b133,#f38c31);
    background-image: linear-gradient(to right,#f3b133,#f38c31);
    background-clip: border-box;
    display: none;
}
img{
  width: 113px;
  margin-right: 10px;
}
h1{
  font-size: 28px;
}
</style>
