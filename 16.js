
var v1 =  new Vue({
    el:"#our-app1",
    data:{
        fname:"",
        lname:"",
        channel:"owt"


    },
    methods:{


    },
    computed:{
        fullname:{ //getter function
            get:function () {
                return this.fname+" "+this.lname;
            },
            set:function () { //setter function
                return this.channel = "updated";
            }
        }
        /*function () {
            return this.fname+" "+this.lname;
        }*/
    }





});

var v2 =  new Vue({
    el:"#our-app2",
    data:{


    },
    methods:{


    }





});



