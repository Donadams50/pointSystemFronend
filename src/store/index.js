import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
export default new Vuex.Store({
  state: {
    data:[],
    data1:[],
    data2:[],
    transtype:[],
    configurationothers:[],
    configurationdc:[],
    configurationbadge:[],
    listofusers:[],
    allusers:[]
  },
//...............Mutations............................//

  mutations: {
     // post configuration daily contribution 
     confiDc(state, data) {
      state.data = data.data
    
    },
    // post configuration other transactions
    
    confiOtherTransactions(state, data1) {
      state.data1 = data1.data
    
    },
    // post configuration badge
    
    confiBadge(state, data2) {
      state.data2 = data2.data
    
    },
     // gets all transaction type for other transactions
     GET_TRANSACTIONTYPE (state, transtype) {
      state.transtype = transtype
    
    },

     //get the configuration for other transaction
     SET_CONFIGURATIONOTHERS(state, configurationothers) {
      state.configurationothers = configurationothers.data
    },
    //get the configuration for daily contribution
    SET_CONFIGURATIONDC(state, configurationdc) {
      state.configurationdc = configurationdc.data
    },

   
    //get the configuration for badge
        SET_CONFIGURATIONBADGE(state, configurationbadge) {
      state.configurationbadge = configurationbadge.data
    },
   
    //get the list of all users
    SET_LISTOFUSERS(state, listofusers) {
      state.listofusers = listofusers.data
    },

  
      //gets all users in a system
      GET_ALLUSERS(state, allusers) {
      state.allusers = allusers
                   },
    
  },

//.................ACTIONS...................//
  actions: {

    //to post a new transaction type
    postNewTransaction ({commit}, newTransaction ) {   
      alert(newTransaction.transtype)
      return new Promise ((resolve, reject)=>{
      axios
        .post('/newtransactiontype' ,{
          TransactionType: newTransaction.transtype,
         
        })  
        .then((data) => {
          resolve(data)
         commit('PostTransactionType', data)
            }) 
            .catch((error)=>{
              reject(error)
            });
      });   
  },
     //to post a new configuration for daily contribution to the database
     postConfigurationDc ({commit}, newConfigurationDc ) {   
    //  alert(newConfigurationDc.configureDc[0].StartPrice)
      return new Promise ((resolve, reject)=>{
      axios
        .post('/configuration' ,{
          configureDc: newConfigurationDc.configureDc,
         
        })  
        .then((data) => {
          resolve(data)
         commit('confiDc', data)
            }) 
            .catch((error)=>{
              reject(error)
            });
      });   
  },

//to post a new configuration for other transaction to the database
postConfigurationOtherTransactions({commit}, newConfigurationOtherTransactions ) {   
  alert(newConfigurationOtherTransactions.transtype)
  return new Promise ((resolve, reject)=>{
  axios
    .post('/configurationother' ,{
      configureOthers: newConfigurationOtherTransactions.configureOthers,
      transactiontype : newConfigurationOtherTransactions.transtype
    })  
    .then((data) => {
      resolve(data)
     commit('confiOtherTransactions', data1)
        }) 
        .catch((error)=>{
          reject(error)
        });
  });   
},

//to post a new configuration for badge
postConfigurationBadge({commit}, newConfigurationBadge ) {   
  alert(newConfigurationBadge.transtype)
  return new Promise ((resolve, reject)=>{
  axios
    .post('/badgeconfiguration/' +newConfigurationBadge.transtype ,{
      configureBadge: newConfigurationBadge.configureBadge,
    
    })  
    .then((data) => {
      resolve(data)
     commit('confiBadge', data2)
        }) 
        .catch((error)=>{
          reject(error)
        });
  });   
},

//to get all categories from the category table
getTranstype( {commit}){
  axios
      .get('/transactiontype' )
      .then(r => r.data)
      .then(transtype => {
      commit('GET_TRANSACTIONTYPE', transtype)
      })
  },

  //to get the configuration for other transaction
  loadConfigurationothers ({ commit }, transactiontype) {
    return new Promise ((resolve, reject)=>{
    axios.get('/otherconfiguration?transactiontype=' +transactiontype)
    .then((data)=>{
      resolve(data)
      commit('SET_CONFIGURATIONOTHERS', data)
    })
    .catch((error)=>{
      reject(error)
      alert(error)
    });
     
      });
  
  },
  //to get the configuration for DAILY CONTRIBUTION
  loadConfigurationDc({ commit }) {
    return new Promise ((resolve, reject)=>{
    axios.get('/dailycontributionconfiguration' )
    .then((data)=>{
      resolve(data)
      commit('SET_CONFIGURATIONDC', data)
    })
    .catch((error)=>{
      reject(error)
      alert(error)
    });
     
      });
  
  },

   //to get the configuration for badges
   loadConfigurationBadge({ commit },  typetransaction) {
     alert(typetransaction)
    return new Promise ((resolve, reject)=>{
    axios.get('/rewardconfigurationbadge/'  +typetransaction )
    .then((data)=>{
      resolve(data)
      commit('SET_CONFIGURATIONBADGE', data)
    })
    .catch((error)=>{
      reject(error)
      alert(error)
    });
     
      });
  
  },

  //to get the list of all users 
  loadListOfUsers({ commit }) {
    return new Promise ((resolve, reject)=>{
    axios.get('/users' )
    .then((data)=>{
      resolve(data)
      commit('SET_LISTOFUSERS', data)
    })
    .catch((error)=>{
      reject(error)
      alert(error)
    });
     
      });
  
  },

  //to get the  number of users in the repository
  getAllUsers( {commit}){
    axios
        .get('/allusers' )
        .then(r => r.data)
        .then(allusers => {
        commit('GET_ALLUSERS', allusers)
        })
    },
  
  },



  modules: {
  },
})
