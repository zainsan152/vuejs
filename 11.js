var v =  new Vue({
    el:"#our-app",
    data:{
            isActive:true //false

    },
    methods:{
        toggleClass:function () {
            this.isActive = !this.isActive;
            
        }

    },

});