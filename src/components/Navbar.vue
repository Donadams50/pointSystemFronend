<template>
  <nav>
   <v-app-bar clipped app color="#49b0c7">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Point Configuration</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon class="white--text">
        <v-icon>mdi-apps</v-icon>
      </v-btn> -->
       <!-- <v-btn icon class="white--text" router-link to="/">
        <v-icon>mdi-logout</v-icon>
      </v-btn> -->
    </v-app-bar>
     <v-navigation-drawer app clipped-left v-model="drawer" color="#ffffff">     
          <v-layout column align-center>
              <v-flex class="mt-6">
                  <v-avatar size="80" class="avatarC">
                    
                      <v-img class="" size="20px" aspect-ratio="1" src="/fakeimg.jpg" alt="/account.png" lazy-src="/account.png"></v-img>
                  </v-avatar>
              </v-flex>
          </v-layout>   
          <v-list dense nav class="mt-6">
            <v-list-item router-link to="/dashboard">
              <v-list-item-icon>
                <v-icon color="#111">mdi-apps</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  DASHBOARD
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
            <v-list-item router-link to="/dailycontribution" >
              <v-list-item-icon>
                <v-icon color="#111">mdi-dresser</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  Daily Contribution
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
              <v-list-item router-link to="/othertransaction">
              <v-list-item-icon>
                <v-icon color="#111">mdi-format-float-none</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                 Other Transactions      
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
             <v-list-item router-link to="/rewards">
              <v-list-item-icon>
                <v-icon color="#111">mdi-trophy</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                 Badges
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
          </v-list>
 <v-list-item router-link to="/users">
              <v-list-item-icon>
                <v-icon color="#111">mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                 Customers
                </v-list-item-title>
              </v-item-content>
            </v-list-item>

          <v-list class="mt-12 ml-6">
            <v-btn color="#111" text class="ml-6 mb-4" router-link to="/">Sign Out
              <v-icon right>mdi-logout</v-icon>
            </v-btn>
          </v-list>
      </v-navigation-drawer>
    </nav> 
</template>

<script>
export default {
  data(){
     return{
           right: null,
           drawer: true,
           messages: 2,
          
        }
  },
  }
  </script>

  <style scoped>
.switchSize{
    text-transform: capitalize;
}
.profileName{
  text-transform: uppercase;
  color: #5F5D5D;
  font-size: 35px;
  line-height: 43px;
}
.avatarC{
  border: 3px solid #1976D2;
}
.listColor{
  color: #111;
}

</style>