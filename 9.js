var v =  new Vue({
    el:"#our-app",
    data:{
        character:"zain",
    /*    name:"",
        email:""*/


    },
    methods:{
        keypressfunction:function (event) {
            console.log(event);
            this.character = event.key;
           /* this.name = event.key;
            this.email = event.key;*/
        }
    }
});