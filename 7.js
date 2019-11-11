var v =  new Vue({
    el:"#our-app",
    data:{
        counter:0
    },
    methods:{
        incrementby1:function () {
            this.counter++;
        },
        submitClick:function () {
            console.log("Hi, Zain");
        },
        parentClass:function () {
            console.log("Hi");
        },
        btnClick:function () {
            console.log("Button click");
        }
    }
});