<template>
  <div class="about">
    <Navbar/>
    <div id="pagename">
                <h3 class="mt-3">
                    Dashboard
                </h3>
            </div>
 <!-- display cards -->
        <div class="mt-8">
            <v-row class="mx-8">
                <v-col md="3">
                    <v-card  max-width="344" style="box-shadow: 0px 4px 22px rgba(86, 2, 2, 0.19);">
                        <v-card-text>
                            <v-icon color="#111" size="50">mdi-account-multiple</v-icon>
                            
                            <div class="text--primary"  style= "margin-top: 10px; font-size:30px; text-align:center; ">
                              <h2>{{allusers[0].NumberOfUsers }} </h2>
                            </div>
                            <p class="title text--primary" style="  margin-top: 10px; font-size:40px; text-align:right;">
                                Users
                            </p>
                        </v-card-text>
                        <v-divider></v-divider>
                        
                    </v-card>
                </v-col>
            </v-row>
        </div>
       
         <div class=" title ml-6 mt-6 ">
           Current point configuration
         </div>
           <v-divider></v-divider>
          <v-data-table
    :headers="headers"
    :items="desserts"
    multi-sort
    class="elevation-1"
  >
  <template v-slot:item.action="{ item }">
                 <div @click="getconfigurationdetails(item.name)" style="color:blue; cursor: pointer;">
                            View more
                        </div>
      
    </template></v-data-table>

  </div>
</template>

<script>
import  Navbar from '../components/Navbar'
import { mapState } from 'vuex'
export default {
  components: {
        Navbar
    },
     mounted () {
      this.$store.dispatch('getAllUsers')     
    },

     computed: mapState([
      'allusers'
    ]),

     data () {
      return {
        headers: [
          {
            text: 'Plan',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Last Date Updated ', value: 'date' },
          { text: '', value: 'action' },
         
        ],
        desserts: [
          {
            name: 'DailyContribution',
            date: '25/12/2020',
            action: 'view more',
           
          },
         
          {
           name: 'OtherTransactions',
            date: '25/12/2020',
            action: 'view more',
           
          },
          {
            name: 'Badges',
            date: '25/12/2020',
            action: 'view more',
           
          },
          
         
        ],
      }
    },
    methods:{

      
       //get the details of a clicked configuration from the DOM into the URL path and push id to store
        getconfigurationdetails(configurationname){
            if(configurationname == "DailyContribution"){
                 this.$router.push({ path: "/dailycontribution"})
            }
            else if(configurationname == "OtherTransactions"){
                   this.$router.push({ path: "/othertransaction"})
            }
            else if(configurationname == "Badges" ){
                  this.$router.push({ path: "/rewards"})
            }
          
           
            console.log(configurationname)
        },
         
    
    }
  
}
</script>

<style scoped>

#dashboard{
    background-color: #FDF8F8;
    font-family: 'Lato', sans-serif;
}
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

