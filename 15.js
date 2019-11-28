var data = {
  name:"zain",
    author:"zain g"
};


Vue.component("zain", {
   template:"<p>This is zain {{name}} & {{author}} & {{method1()}} & {{computed1}} <button @click = 'fireme'>click me</button></p>",
    data: function () {
        return data; /*{
            name:"zain",
            author:"zaini"
        }*/
    },
    methods:{
       method1: function () {
           return"this is zain";
       },

        fireme:function () {
            console.log('hi');
            this.author = "zainiii";
        }
    },
    computed:{
       computed1:function () {
           return "c zain";
       }
    }
});



var v1 =  new Vue({
    el:"#our-app1",
    data:{


    },
    methods:{


        }





});

var v2 =  new Vue({
    el:"#our-app2",
    data:{


    },
    methods:{


    }





});



