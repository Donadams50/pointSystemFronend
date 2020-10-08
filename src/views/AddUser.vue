<template>
     <div id="registeruser" >
            
            <div id="userdetailsfields">
                            <v-text-field dark  v-model="firstname" label="FirstName" filled></v-text-field>
                            <v-text-field dark  v-model="lastname" label="LastName" filled></v-text-field>
                            <v-text-field dark  v-model="phoneNo" label="Phone Number" filled></v-text-field>
                            <v-text-field dark  v-model="location" label="Location" filled></v-text-field>
                            <v-text-field dark  v-model="address" label="Address" filled></v-text-field>
                            <v-text-field dark  v-model="password" label="Password" filled></v-text-field>
                            <v-text-field dark background-color="#370000" v-model="confirmPassword" label="Confirm Password" filled></v-text-field>
                            
                         
                            <v-btn rounded class="mb-6" @click="postUser()">
                            <div style="font-size:13px; font-weight:800; color:#560202; text-align:right;" class=" mx-3 text-capitalize"> 
                                Create 
                            </div>
                            </v-btn>
                        </div>
          </div>
</template>

<script>
export default {
    
}
</script>