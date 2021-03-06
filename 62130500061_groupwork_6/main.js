const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    username: {
        presence: true,
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
    chosensocialmedia: {
        presence: true
    }
    
}

const app = Vue.createApp({
    data() {
        return {   
            firstname: null,
            lastname: null,
            gender: null,
            username: null,
            email: null,
            phone: null,
            chosensocialmedia: null,
            socialmedia_lists: [{socialmedia_id: 1, socialmedia_name:'Instagram'},
                            {socialmedia_id: 2, socialmedia_name: 'Facebook'},
                            {socialmedia_id: 3, socialmedia_name: 'Twitter'},
                            {socialmedia_id: 4, socialmedia_name: 'Tiktok'},
                            {socialmedia_id: 5, socialmedia_name: 'Line'},
                            {socialmedia_id: 6, socialmedia_name: 'Snap Chat'}],
            errors: null,
            name:'mukpch',
            image: './images/profile.JPG',
        }
    },
    methods: {
        checkForm(e){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    username: this.username,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone,
                                    chosensocialmedia: this.chosensocialmedia},
                                    constraints)
            if(this.errors){
                e.preventDefault();
            }
            else{
                alert("Registered successfully.")
            }
        }
    }
})

app.mount('#app')

