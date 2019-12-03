// Vue.directive('directive_name' , {directive_function});

Vue.directive('zain' , function (el , binding) {
    // console.log(el);
    // console.log(binding);
    var dir_arg = binding.arg;
    if (dir_arg=="red")
    {
        el.style.backgroundColor = 'red';
        el.style.fontSize = '20px';
        el.style.color = 'white';

    }
    if (dir_arg=="blue")
    {
        var mod = binding.modifiers.change;
        if (mod == true)
        {
            el.style.backgroundColor = 'orange';
            el.style.fontSize = '20px';
            el.style.color = 'white';
        }
        else
        {
            el.style.backgroundColor = 'blue';
            el.style.fontSize = '20px';
            el.style.color = 'white';
        }


    }

    
});

var v1 =  new Vue({
    el:"#our-app1",
    data:{
        channelName:"zain"


    },
    methods:{


    },
    computed:{

    }
});





