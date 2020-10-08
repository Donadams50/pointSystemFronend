<template>
    <div id="rollover">
         <Navbar/>
          <div id="pagename">
                <h3 class="mt-3">
                Other Transactions
                </h3>
            </div>
             
       <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
     <v-snackbar
      v-model="snackbar1"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text1 }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <div class="mx-5 mt-5 ">
      <v-layout>
        <v-select
       v-model="trans"
       :items="getTransactionType"  
        item-value ="Type"
         item-text="Type"
        :menu-props="{ top: true, offsetY: true }"
        label="Transaction type"
         @input='RefreshTransaction'
      ></v-select>
        <v-spacer></v-spacer>
         <div>
                    <!-- <v-btn color="primary" style="margin-left :10px;"  class="mt-3"  dark rounded>
                      <v-icon color="#111">mdi-plus</v-icon>
                        <div style="font-size: 13px; text-align:right;" class="text-capitalize" >
                            Add new transacton type
                        </div>
                    </v-btn> -->
                    <v-dialog v-model="dialog1" persistent max-width="600px">
      <template v-slot:activator="{ on }">
         
        <v-btn color="primary" class="mt-3"  dark rounded  v-on="on"><v-icon color="#111">mdi-plus</v-icon>  <div style="font-size: 13px; text-align:right;" class="text-capitalize" >
                            Add new transacton type
                        </div></v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Transaction type</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row justify="center">
              <v-col  cols="12" sm="6" md="4">
                <v-text-field label="Enter transaction type" v-model="transtype" required></v-text-field>
              </v-col>
              <!-- <v-col cols="12" sm="6" md="4">
                <v-text-field label="category" ></v-text-field>
              </v-col> -->
             
              
            </v-row>
              </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog1 = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="submit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

                  </div>
      </v-layout>

    <!-- <v-row align="center">
    <v-col cols="12" md="4" sm="12">
      
    </v-col>
    
    <v-col cols="12" md="8" sm="12">
                 
              </v-col>
  </v-row> -->
    </div>
             <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
   
   <template v-slot:top>
      <v-toolbar flat color="white">
        
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
  <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="#87cada"  class="mb-2" v-on="on">New</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Configuration Other Transaction</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.StartPrice" label="Start Price  (₦)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.EndPrice" label="End Price (₦) "></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Point" label="Point "></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
          </v-toolbar>
    </template>
        <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
       mdi-delete
      </v-icon>
    </template>
     <!-- <template v-slot:no-data>
      <v-btn style="text-align:right;" color="primary" @click="initialize">Submit</v-btn>
    </template> -->
     </v-data-table>
<div class="text-center pt-2">
      <v-btn color="primary" class="mr-2" @click="postConfigurationOtherTransactions">Submit</v-btn>
      
    </div>

    </div>
</template>
<script>
import  Navbar from '../components/Navbar'
export default {
     components: {
        Navbar
    },

    data: () => ({
      transtype:'',
       trans: '',
      // items: ['Savings', 'Loan', 'Voucher', 'Transfer'],
       text: " Updated Succesfully ",
      text1: "Configuration  for other transactions not sucesfull",
       mode: '',
        snackbar: false,
         snackbar1: false,
        timeout: 6000,
        x: null,
        y: 'top',
      dialog: false,
       dialog1: false,
      headers: [
        {
          text: 'Start Price',
          align: 'left',
          sortable: false,
          value: 'StartPrice',
        },
        { text: 'End Price', value: 'EndPrice' },
        { text: 'Point', value: 'Point' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        StartPrice: 0,
        EndPrice: 0,
        Point: 0,
        
      },
      defaultItem: {
          StartPrice: 0,
        EndPrice: 0,
        Point: 0,
        
      },
    }),
    
    mounted() {

      this.$store.dispatch('getTranstype')
     
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      getTransactionType(){
        return this.$store.state.transtype.result;
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
         
          
        ]
      },
     submit() {
        console.log(this.transtype); 
        alert(this.transtype);
       this.dialog1 = false;
        let newTransaction = {
               transtype: this.transtype,
               //category: this.category
          }
         // console.log(newComponent)
          this.$store.dispatch('postNewTransaction', newTransaction)
          .then((success)=>{
              console.log(success.data);
             
               this.snackbar = true
             
          })
          .catch((error)=>{
              console.log(error.data)
               alert(error)
                this.snackbar1 = true
          })
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this price range?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
 postConfigurationOtherTransactions(){
     console.log(this.desserts); 
         //alert(this.trans);
          let newConfigurationOtherTransactions = {
               configureOthers: this.desserts,
               transtype: this.trans
          }
         // console.log(newComponent)
          this.$store.dispatch('postConfigurationOtherTransactions', newConfigurationOtherTransactions)
          .then((success)=>{
              console.log(success.data);
             
               this.snackbar = true
             
          })
          .catch((error)=>{
              console.log(error.data)
               alert(error)
                this.snackbar1 = true
          })
      },

      RefreshTransaction(){
        this.$store.dispatch('loadConfigurationothers', this.trans)
         .then((success)=>{
              console.log( this.$store.state.configurationothers.result);
              
              this.desserts = this.$store.state.configurationothers.result;
               
             
          })
          .catch((error)=>{
              console.log(error)
               alert(error)
                
          })
        //alert(this.trans)
      }


    },

    
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