var v2 =  new Vue({
    el:"#our-app2",
    data:{
        author:"zain"

    },
    methods:{
        secondApp:function () {
            return"this is 2nd";
            
        }


    },
    computed:{
        fullname:function () {
            return this.author;
        }
    }
});
var v1 =  new Vue({
    el:"#our-app1",
    data:{
        title:"zain malik",
        author:v2.author

    },
    methods:{
        secondApp:function () {
            return"this is 1st";

        },
        thirdAppfn:function () {
            return v2.secondApp();
            
        },
        accesscomputed:function () {
            return v2.fullname;
            
        }


    }
});

