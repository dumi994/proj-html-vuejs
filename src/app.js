const app = new Vue({
    el:"#app",
    data:{
        el:"",
        counter:0,
        navbar:[
           
                {link: "Home"},
                {link: "Courses"},
                {link: "Features"},
                {link: "Blog"},
                {link: "Shop"},
           
        ],
        adress:[
            {
                city: "382 NE 191st # 87394 Miami, FL 33179-3899",
                phone: "+1(305)547-9909",
                hours: "(9am - 5pm EST, Monday - Friday",
                mail: "support@maxcoach.com",
        }
        ],
        explore:[
            {
                link: "Start here",
                link: "Blog",
                link: "About us",
                link: "Success story",
                link: "Courses",
                link: "Contact us"
            }
        ],
        information:[
            {
                link:"Memebership",
                link: "Purchase guide",
                link: "Privacy policy",
                link: "Terms of services",
        }
        ],
    },
    methods:{},
    mounted(){

    }

})