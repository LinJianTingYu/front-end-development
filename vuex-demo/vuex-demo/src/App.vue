<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <ProductListOne></ProductListOne>
    <ProductListTwo></ProductListTwo>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import ProductListTwo from './components/ProductListTwo'
import ProductListOne from './components/ProductListOne'

export default {
  name: 'App',
  data:function () {
    return {
      
    }
  },
  components: {
    ProductListTwo,ProductListOne
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
  text-align: center;
}
ul{
  list-style-type: none;
}
</style>
