<template>
  <form
    id="loginForm"
    @submit.prevent="login(loginData)"
  >
    <input v-model="loginData.email" type="text" class="form-control"
           placeholder="Enter Username">
    <button type="submit" color="theme">Submit</button>
     {{ name_data }}
  </form>
</template>

<script type="text/babel">
    import { mapActions, mapGetters } from 'vuex'
    import { ACTION_LOGIN,GET_NAME_DATA } from '@/store/modules/User';
    import router from '../../router';
    export default {
        data () {
            return {
                loginData: {
                    email: ''
                },
                submitted: false,
            }
        },

        methods: {
            ...mapActions('User', {
                login: ACTION_LOGIN,
            })
        },
        computed: {
            ...mapGetters('User', {
                name_data: GET_NAME_DATA
            })
        },
        created() {
          if(this.name_data){
              router.push('/dashboard');
          }
        }
    }
</script>
