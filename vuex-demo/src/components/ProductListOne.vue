<template>
  <div class="ProductListOne">
  	<h2>Product List One</h2>
  	<ul>
  		<li v-for="wealthPerson in changeWealthPersons">
  			<span>{{wealthPerson.name}}</span>
  			<span>{{wealthPerson.price}}</span>
  		</li>
  	</ul>
  	<button v-on:click="splitprice(3)">商品降价</button>
  </div>
</template>

<script>
import mapGetters from 'vuex'
import mapActions from 'vuex'
export default {
  name: 'ProductListOne',
  methods:{
  	splitprice(num){
  		this.$store.dispatch("splitprice",num);
  	}
  },
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
.ProductListOne{
	padding: 10px;
    background: pink;
    margin: 10px 10px;
    /*width:90%; */
    border-radius: 5px;
}
li{
	padding: 10px;
	background: orange;
	margin: 10px;
}
</style>
