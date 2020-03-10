<template>
  <div>
    <span>{{name_data}}</span>
    <button @click = "goBack">Go Back</button>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import { ACTION_LOGIN,GET_NAME_DATA } from '@/store/modules/User';
  import router from '../../router'
    export default {
        name: "Dashboard",
        computed: {
            ...mapGetters('User', {
                name_data: GET_NAME_DATA
            })
        },
        methods:{
            goBack(){
                router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>
