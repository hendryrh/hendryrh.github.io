<template>
<div>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <img src = "../assets/cat.png" style="width:40px;height:40px" class="mr-2">
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light-center"><h5 class="text-md-center">hendryrh</h5></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary" clipped temporary>
            <v-list>                 
                <v-list-item                 
                v-for="item in links"                 
                :key="item.title"
                router :to="item.route"                 
                link                 
                >                 
                <v-list-item-icon>                     
                    <v-icon>{{ item.icon }}</v-icon>                 
                </v-list-item-icon> 
     
                <v-list-item-content>                     
                    <v-list-item-title>{{ item.title }}</v-list-item-title>                 
                </v-list-item-content>  
                </v-list-item>
                <v-list-item>
                  
                <v-list-item-content>                     
                    <v-icon>mdi-white-balance-sunny</v-icon>         
                </v-list-item-content>                 
                <v-list-item-action>
                  <v-switch v-model="theme" class="ma-4" ></v-switch> 
                </v-list-item-action>
                <v-list-item-content>                     
                    <v-icon>mdi-weather-night</v-icon>         
                </v-list-item-content>                                 
                </v-list-item>                               
            </v-list>             
    </v-navigation-drawer>
  </nav>
      <VContent >
      <router-view />
    </VContent>
</div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      theme: true,
      links: [
        { icon: 'mdi-account-tie', title: 'About', route: '/About' },
        { icon: 'mdi-view-dashboard', title: 'Portofolio', route: '/Dashboard' }
      ]
    }
  },
  created(){
    this.$vuetify.theme.dark = true
  },
  watch:{
    theme: function(old){
      this.$vuetify.theme.dark = old; 
    }
  }
}
</script>

<style>
</style>