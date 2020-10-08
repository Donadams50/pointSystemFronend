<template>
    <div id="dailycontribution">
         <Navbar/>
          <div id="pagename">
                <h3 class="mt-3">
                  Daily Contribution
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
              <span class="headline">Configuration Daily contribution</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.StartPrice" label="Start Price (₦)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.EndPrice" label="End Price (₦)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Point" label="Point (daily basis)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="8" md="6">
                    <v-text-field v-model="editedItem.RollOverPoint" label="Point (rollover monthly basis)"></v-text-field>
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
      <v-btn color="primary" class="mr-2" @click="postConfigurationDc">Submit</v-btn>
      
    </div>

    </div>
</template>
<script>
import  Navbar from '../components/Navbar'
import { mapState } from 'vuex'
export default {
     components: {
        Navbar
    },

     mounted(){
     this.$store.dispatch('loadConfigurationDc')
         .then((success)=>{
              console.log( this.$store.state.configurationdc.result);
              this.desserts = this.$store.state.configurationdc.result;            
          })
          .catch((error)=>{
              console.log(error)
               alert(error)
                
          })     
    },

    data: () => ({
         text: "Configuration for daily contribution Updated Succesfully ",
      text1: "Configuration for daily contribution not sucesfull",
       mode: '',
        snackbar: false,
         snackbar1: false,
        timeout: 6000,
        x: null,
        y: 'top',
      dialog: false,
      headers: [
        {
          text: 'Start Price',
          align: 'left',
          sortable: false,
          value: 'StartPrice',
        },
        { text: 'End Price', value: 'EndPrice' },
        { text: 'Point(daily)', value: 'Point' },
        { text: 'Roll Over Point', value: 'RollOverPoint' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        StartPrice: 0,
        EndPrice: 0,
        Point: 0,
        RollOverPoint : 0,
        
      },
      defaultItem: {
        StartPrice: 0,
        EndPrice: 0,
        Point: 0,
        RollOverPoint : 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
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
    //  submit() {
    //     console.log(this.desserts); 
    //     alert(this.desserts);
    //   },

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
 postConfigurationDc(){
     console.log(this.desserts); 
         alert(this.desserts);
          let newConfigurationDc = {
               configureDc: this.desserts
          }
         // console.log(newComponent)
          this.$store.dispatch('postConfigurationDc', newConfigurationDc)
          .then((success)=>{
              console.log(success.data);
              alert(success.data);
               this.snackbar = true
             
          })
          .catch((error)=>{
              console.log(error.data)
               alert(error)
                this.snackbar1 = true
          })
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