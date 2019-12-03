// Vue.directive('directive_name' , {directive_function});

Vue.directive('custom-zain' , {
    bind:function (el , binding , vnode) {
        console.log(el); //dom element
        el.style.backgroundColor = "yellow";
        el.style.fontSize = '30px';
        el.style.color = "pink";
        el.style.borderRadius = '100%';
        el.title = "hi kia hall h?";     //el.property in html code

        console.log(binding); //properties of directives
        console.log("Value = " + binding.value);
        console.log("Name: "+ binding.value.name);
        console.log("Course: "+ binding.value.course);
        
    },
    update:function (object1 , object2) {
        console.log('running');
        var data = JSON.parse(JSON.stringify(object2));
        console.log(data);

    },
    unbind:function () {
        
    }
});

var v1 =  new Vue({
    el:"#our-app1",
    data:{
        message:"hello g"

    },
    methods:{
        updateValue:function () {
            console.log('update');
            this.message = 'value updated';
        }

    },
    computed:{

    }
});





