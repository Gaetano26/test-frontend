import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    apiURL: 'http://127.0.0.1:8000/api',
    productsList : null,
    isAuth : false,
    isReg : false,
    authUser: null,
    authChart: false,
   
});