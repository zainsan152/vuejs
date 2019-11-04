var v =  new Vue({
    el:"#our-app",
    data:{

    },
    methods:{
        keypressfunction:function (event) {
            console.log(event.key);
        },
        keyupfunction:function () {
            console.log("yes");
        },
        keydownfunction:function (event) {
            console.log(event);
        }

    }
});