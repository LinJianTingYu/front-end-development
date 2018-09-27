<template>
  <div class="ProductListTwo">
  	<h2>Product List Two</h2>
  	<ul>
  		<li v-for="wealthPerson in changeWealthPersons">
  			<span>{{wealthPerson.name}}</span>
  			<span>{{wealthPerson.price}}</span>
  		</li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'ProductListTwo',
  computed:{
  	wealthPersons(){
  		return this.$store.state.wealthPersons;
  	},
  	changeWealthPersons(){
  		return this.$store.getters.changeWealthPersons;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ProductListTwo{
	min-width: 230px;
	padding: 10px;
    background: pink;
    margin: 10px 10px;
    border-radius: 5px;
}
li{
	padding: 10px;
	background: orange;
	margin: 10px;
}
</style>
