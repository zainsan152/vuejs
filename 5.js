var v =  new Vue({
    el:"#our-app",
    data:{
        x:0,
        y:0
    },
    methods:{
        movefunction:function (event) {
            //console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        overfunction:function () {
            console.log("Hello Zain");
        },
        outfunction:function () {
            console.log("Bye Zain");
        }
    }
});