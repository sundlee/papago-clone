<template>
  <div>
    <Header></Header>
    <Contents></Contents>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Contents from '@/components/Contents.vue';
  
export default {
  name: 'PapagoTranslate',

  components: {
      Header,
      Contents,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
