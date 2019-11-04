var v =  new Vue({
    el:"#app",
    data:{
        message:"Our First Message",
        Name:"Zain",
        Caste:"Malik"
    },
    methods: {
        run: function (message , name) {
            return "Hello World" + message +" "+ name;
        },
        welcome: function (daytime) {
            return "good" + daytime;
        },
        access: function () {
            return this.message +" "+ this.Name;
        }
    }
});