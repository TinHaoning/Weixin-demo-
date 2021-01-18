<template>
  <div>
    <ul v-if="tagArr.length">
      <li v-for="(item, index) in tagArr" :key="index">{{item}}<Icon type="ios-close" @click="handelDel(index)"/></li>
    </ul>
    <input type="hidden" :value="currentValue">
    <Input v-model="inputVal" placeholder="Enter keyword" @on-enter="handelEnter"></Input>
  </div>
</template>

<script>
import { constants } from 'fs';
import { Input, Icon } from 'view-design'
export default {
  name: "EditTag",
  components: {
    Input,
    Icon
  },
  data() {
    return {
      currentValue: this.value,
      inputVal: ''
    };
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    tagArr(){
      return this.value ? this.toArr(this.value) : [];
    }
  },
  methods: {
    toArr(str){
      const reg = /\\|\/|\?|\？|\*|\"|\“|\”|\'|\‘|\’|\<|\>|\{|\}|\[|\]|\【|\】|\：|\:|\、|\，|\^|\$|\!|\~|\`|\|/g;
      let str_temp = str.trim().replace(reg, ",");
      let arr = str_temp.split(',')
      return str_temp ? arr : []
    },
    handelEnter(){
      var addArr = this.toArr(this.inputVal)
      if(addArr.length){
        this.currentValue = Array.from(new Set(this.tagArr.concat(addArr))).filter(t=>t!='').join(',');
        this.inputVal = ''
        this.$emit('input', this.currentValue);
      }
    },
    handelDel(index){
      this.tagArr.splice(index, 1)
      var newStr= this.tagArr.join(',');
      this.$emit('input', newStr);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  padding: 6px;
  background-color: #262626;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
li{
  padding: 0 10px;
  line-height: 24px;
  border-radius: 2px;
  background-color: #444444;
  margin: 6px;
  position: relative;
}
li i{
  background: rgba(255,255,255,0.1);
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    font-size: 14px;
}
</style>
