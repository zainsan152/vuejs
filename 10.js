var v =  new Vue({
    el:"#our-app",
    data:{
        firstname:"",
        lastname:"",
        meter:"",
        maths:0,
        science:0,
        english:0
    },
    methods:{
        runme:function () {
            console.log("hello");
            return "method";
        }
    },
    computed:{
        getFullName:function () {
            return this.firstname+" "+this.lastname;
        },
        convertToCentimeter:function () {
            return this.meter*100; //1m = 100cm
            
        },
        totalSubjectMarks:function () {
            return parseInt(this.maths) + parseInt(this.science) + parseInt(this.english);
            
        }
    }
});