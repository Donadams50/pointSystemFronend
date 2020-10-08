<template>
    <nav>
   <v-app-bar clipped app color="#1976D2">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Kayar</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="white--text">
        <v-icon>mdi-apps</v-icon>
      </v-btn>
       <v-btn icon class="white--text" router-link to="/">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
     <v-navigation-drawer app clipped-left v-model="drawer" color="#D7E9FB">

       <v-flex class="mt-5">
       <v-btn text color="#1976D2" class="switchSize">Switch Role:</v-btn>
          <!-- dropdown -->
    <v-menu offset-y >
      <template v-slot:activator="{ on }">
        <v-btn color="rgba(46, 42, 35, 0.3)"
          v-on="on">
          Admin
        </v-btn>
      </template>
       <v-list>
        <v-list-item v-for="(item, index) in Login" :key="index" @click="Toggle(item)">
          <v-list-item-title>{{ item}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
       </v-flex>
           <v-layout column align-center>
              <v-flex class="mt-10">
                  <v-avatar size="80" class="avatarC" v-for="user in Images" :key="user.id">
                      <!-- <v-icon large color="#1976D2">mdi-account</v-icon> -->
                      <v-img class="" size="20px" :src="getImgUrl(user.Image)" alt="/account.png" lazy-src="/account.png"></v-img>
                  </v-avatar>
              </v-flex>
          </v-layout>
          <v-list-item>
              <v-list-item-content>
                  <v-list-item-title class="title text-center profileName" v-for="user in Username" :key="user.id">
                     {{user.FirstName}} {{user.LastName}}
                  </v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-btn color="#1976D2" class="white--text ml-6 mt-4" router-link to="/create">Create User
              <v-icon right>mdi-plus</v-icon>
            </v-btn>
          </v-list-item>
          <v-list dense nav class="mt-6">
            <v-list-item router-link to="/admin">
              <v-list-item-icon>
                <v-icon color="#1976D2">mdi-apps</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  DASHBOARD
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
            <v-list-item  v-on:click="viewusers()">
              <v-list-item-icon>
                <v-icon color="#1976D2">mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  USERS
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
             <v-list-item router-link to="/viewassets">
              <v-list-item-icon>
                <v-icon color="#1976D2">mdi-dresser</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  VIEW ASSETS
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
              <v-list-item router-link to="/updateadminprofile">
              <v-list-item-icon>
                <v-icon color="#1976D2">mdi-account-edit</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  UPDATE PROFILE
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
          </v-list>
          <v-list class="mt-12 ml-6">
            <v-btn color="#1976D2" text class="ml-6 mb-4" router-link to="/">Sign Out
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
           dropdown: [
                {
                    title : 'StoreKeeper',
                    icon : 'mdi-plus-circle-outline',
                    route : '/storekeeper'
                },
                {
                    title : 'User',
                    icon : 'mdi-map-marker',
                    route: '/users'
                },
            ],
        }
  },
};
</script>
