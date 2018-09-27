import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
    	wealthPersons:[
	        {name:"刘强东",price:200},
	        {name:"马云1",price:100},
	        {name:"马化腾",price:150},
	        {name:"余建",price:1},
          ]
    },
    getters:{
    	changeWealthPersons:state=> {
    		var changeWealthPersons = state.wealthPersons.map(wealthPerson=>{
    			return {
    				"name":"**"+wealthPerson.name+"**",
    				"price":wealthPerson.price/2
    			}
    		});
    		return changeWealthPersons
    	}
    },
    mutations:{
    	splitprice(state,payload){
    		state.wealthPersons.forEach(function(wealthPerson){
  			    wealthPerson.price-=payload;
  		    });
    	}
    },
    actions:{
    	splitprice(context,payload){
    		context.commit("splitprice",payload);
    	}
    }
});