const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {

        updateCart(id){
           
            this.cart.push(id);
        },
        removeCartValue(id){
           
            this.cart.pop(id);
        }
    }
})
