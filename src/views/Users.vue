<template>
    <div id="users">
         <Navbar/>
          <div id="pagename">
                <h3 class="mt-3">
                  Customers
                </h3>
            </div>
                  <v-row class="mx-5">
              <v-col cols="12" md="10" sm="8">
                <div id="searchfield">
                  <v-text-field placeholder="Search for a customer" v-model="searchWord" @keyup="searchComponent()" prepend-inner-icon="mdi-magnify" solo></v-text-field>
                </div>
              </v-col>
              <!-- <v-col cols="12" md="2" sm="4">
                  <div>
                    <v-btn color="primary" style="margin-right -50px;" router-link to="/" class="mt-3"  dark rounded>
                        <div style="font-size: 13px; text-align:right;" class="text-capitalize" >
                            Add new user
                        </div>
                    </v-btn>
                  </div>
              </v-col> -->
            </v-row> 
            
 <v-data-table
    :headers="headers"
    :items="desserts"
    multi-sort
    class="elevation-1"
  >
  <template v-slot:item.action="{ item }">
                 <div @click="getUserdetails(item.CustomerId)" style="color:blue; cursor: pointer;">
                            View more
                        </div>
      
    </template>
  </v-data-table>

    </div>
</template>
<script>
import  Navbar from '../components/Navbar'
export default {
     components: {
        Navbar
    },
     mounted () {
     this.$store.dispatch('loadListOfUsers')
         .then((success)=>{
              console.log( this.$store.state.listofusers.result);
              this.desserts = this.$store.state.listofusers.result;            
          })
          .catch((error)=>{
              console.log(error)
               alert(error)
                
          })     
    },

    data () { 
     return {
        headers: [
          {
            text: 'CustomerId',
            align: 'left',
            sortable: false,
            value: 'CustomerId',
          },
          { text: 'Point', value: 'Point' },
           { text: 'Principal', value: 'Principal' },
            { text: 'Total amount payed', value: 'AmountPayed' },
           { text: '', value: 'action', sortable: false },
         
        ],
        desserts: [],
      }

   

      
    }, 
     methods:{
       //get the details of a clicked item from the DOM into the URL path and push id to store
        getUserdetails(userid){
            alert(userid)
            this.$router.push({ path: `/viewusers/${userid}`})
           
            console.log(userid)
        },
         //search for Components
    //       searchComponent() {         
    //         this.$store.dispatch('searchComponent',this.searchWord)
    //   },
    }

    
}
</script>
<style scoped>
#pagename h3{
  text-align:left;
  padding-left: 30px;
  padding-top: 13px;
  color: #111;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
}

</style>