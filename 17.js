
var v1 =  new Vue({
    el:"#our-app1",
    data:{

    },
    methods:{
        btnSubmit:function () {
            //console.log("clicked");
            console.log(this.$refs);
            console.log(this.$refs.txtname.value);
            console.log(this.$refs.txtemail.value);
            
        }


    },
    computed:{

    }
});

var v2 =  new Vue({
    el:"#our-app2",
    data:{


    },
    methods:{


    }
});



