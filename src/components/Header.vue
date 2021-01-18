<template>
  <header class="header">
    <div class="container">
      <div class="flx a-c j-s">
        <a href="/" class="flx a-c logo">
          <img src="../assets/Pikbest.png" alt="Pikbest" class="logo" />
        </a>
        <div class="user flx a-c">
          <a href="/?m=designers&a=center">
            <Poptip
              trigger="hover"
              word-wrap
              :width="240"
              content="The old upload port will be open for another 30 days(since Dec XX,2020), it will be automatically closed when it expires."
              ><i class="iconfont icon-information-variant"></i
            ></Poptip>
            back to old version >>
          </a>
          <i class="iconfont icon-xiaoxitongzhitixinglingshenglingdang"></i>
          <img
            :src="user.pic"
            alt=""
          />
          <p>{{user.name}}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Cookies from 'js-cookie'
import { Poptip } from "view-design";
export default {
  name: "Header",
  components: {
    Poptip
  },
  data() {
    return {
      user: {
        name: '',
        pic: ''
      }
    };
  },
  created(){
    let auth_id = Cookies.get('auth_id')
    if(auth_id){
      let auth_id_arr = decodeURI(auth_id).split('|')
      this.user.name = auth_id_arr[1]
      let user_img = Cookies.get('head_' + auth_id_arr[0])
      this.user.pic = unescape(user_img)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #212121;
}
a{
  color: #666;
  text-decoration: underline;
}
a.logo {
  height: 72px;
  text-decoration: none;
}
img.logo {
  width: 113px;
  margin-right: 10px;
}
.user img {
  width: 32px;
  height: 32px;
  border-radius: 4px;
}
.user p {
  font-size: 14px;
  font-weight: 600;
  color: #666;
  padding: 0 10px;
}
.user i {
  font-size: 18px;
  color: #999;
  margin: 0 20px;
}
.user i.icon-information-variant{
  font-size: 14px;
  color: #333;
  background-color: #999;
  border-radius: 50%;
  margin: 0 5px;
}
</style>
