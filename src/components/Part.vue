<template>
  <section class="part">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Part',
  data () {
    return {
      title: 'Pikbest Uploading System'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.part{
  background-color: #262626;
  border-radius: 4px;
  padding: 8px 30px;
}
</style>
