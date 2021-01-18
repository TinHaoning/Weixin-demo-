<template>
  <section class="sidebar">
    <h4>{{ title }}</h4>
    <ul>
      <li
        v-for="(item, index) in children"
        :key="index"
        :class="item.value == value ? 'active' : ''"
      >
        <a :href="item.href">{{ item.label }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {};
  },
  props: {
    title: String,
    value: {
      type: String,
      default: 'term'
    },
    children: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  line-height: 62px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  padding-left: 60px;
}
li a {
  position: relative;
  padding-left: 60px;
  display: inline-block;
  width: 100%;
  line-height: 56px;
  color: #ccc;
  font-size: 14px;
  transition: 130ms ease-in;
}
li a::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: transparent;
    border-radius: 50%;
    left: 44px;
    top: 24px;
}
li.active a,
li a:hover {
    font-size: 16px;
    color: #fff;
}
li.active a::before ,
li a:hover::before {
    background-color: #ff8a00;
}
</style>
