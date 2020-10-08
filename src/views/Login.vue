<template>
  <div id="loginform">
    <v-form>
            <div id="loginheader">
                <h2>Login</h2>
            </div>
            <div id="loginfields">
                <p style="text-align:left; color: white; font-family:Lato; margin-bottom:-1px">Email</p>
                <v-text-field  v-model="email"  style="border-radius:0px;" label="Email" placeholder="Your Email" solo></v-text-field>
                <p style="text-align:left; color: white; font-family:Lato; margin-bottom:-1px">Password</p>
                <v-text-field v-model="password" style="border-radius:0px;" label="Password" :append-icon="show3 ? 'visibility' : 'visibility_off'"
                 :rules="[rules.required, rules.min]"
                 :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            hint="At least 5 characters"
            value=""
            class="input-group--focused"
            @click:append="show3 = !show3"
                placeholder="Your Password" solo></v-text-field>
                <p style="text-align:right; color: blue; font-size: 12px; font-weight: 200px; font-family:Lato; margin-top:-20px">Forgot Password?</p>
            </div>
            <div id="loginbutton">   
                    <v-btn rounded :loading ="loading"  @click="Login()" color="#2f4698" class="text-capitalize pl-7 pr-7" style="font-family: Lato;" dark large>Submit</v-btn>
                
            </div>
        </v-form>

</div>
  
</template>

<script>


export default {
  name: 'Login',

   data () {
      return {
        loading: false,
           text: "",
      text1: "Invalid email or password",
       mode: '',
        snackbar: false,
         snackbar1: false,
        timeout: 6000,
        x: null,
        y: 'top',
        email:"",
      password: "",  
        show3: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 5 || 'Min 5 characters',
        },
      }
    },

    methods :{
       Login(){
             this.$router.push({ path: "/dashboard"})
               
          }
      }   
 
}
</script>
<style scoped>
#loginform{
    background: url(/bgt3.jpg);
    background-size: cover;
    background-position: center;
    min-height:100vh;
    padding: 9.375rem;
}
#loginheader{
    padding-bottom: 30px;
    text-align: center;
}
#loginbutton{
    padding-bottom: 30px;
    text-align: center;
}
#loginheader h2{
    color:#2f4698;
  
}
#logincontainer{
    background-color: rgba(255, 255, 255, 0.14);
    max-width: 500px;
    margin: auto;
    padding: 1.125rem;
    border-radius: 6px;
}
#loginfields{
    width:30%;
    margin: auto;
}
/* @media only screen and (max-width: 480px) {
  #loginform {
    padding: 5.975rem;
  }
} */
@media only screen and (max-width: 768px) {
  #loginform {
    padding: 1.175rem;
  }
}
</style>
