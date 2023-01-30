<template>
    <form @submit.prevent="addContact" class="container">
        <div class="left">
            <div><img name="image" class="avatar" src="/assets/avatar.jpg" /></div>
            <input name="title" type="text" class="title" placeholder="title" v-model="title">
        </div>
        <div class="right">
            <div class="name">
                <input name="fullname" type="text" placeholder="Full Name" v-model="fullname"><br/>
            </div>
            <div class="company">
                <input name="company" type="text" placeholder="company" v-model="company">
            </div>
            <div class="address">
                <input name="address1" type="text" placeholder="Street name, number, apt" v-model="address1"><br />
                <input name="address2" type="text" placeholder="City, State, Postal Code" v-model="address2"><br />
            </div>
            <div class="phonenumber">
                <!-- verifying if phone number field only takes allowed inputs -->
                <input name="phonenumber" :class="{ valid: isValidPhoneNumber, invalid: !isValidPhoneNumber }" v-model="phonenumber"
                    type="text" placeholder="phone number" @keyup="validatePhoneNumber" />
                <div class="invalid-warning" v-if="!isValidPhoneNumber">
                    Invalid phone number!
                </div>
            </div>
            <!-- <button class="btn" @click="goToContactCard">Add Contact</button> -->
            <button class="btn">Add Contact</button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'AddContactCard',
    data() {
        return {
            image: '/assets/avatar.jpg',
            title: '',
            fullname: '',
            //google API wasnt working, Patricia told me to move on
            // latitude:'',
            // longitude: '',
            company: '',
            address1: '',
            address2: '',
            phonenumber: '',
            isValidPhoneNumber: true,
            readOnly:true,
        }
    },
    methods: {
        ...mapActions(['addContactToList']),

        //validates that phone number field only takes numbers, plus sign and parentheses
        validatePhoneNumber(){
            let validationRegex = /^[+()]*[0-9]*[+()0-9]*[+(0-9)0-9]$/;
            if (this.phonenumber.match(validationRegex)) {
                this.isValidPhoneNumber = true;
            } else {
                this.isValidPhoneNumber = false;
            }
        },
        addContact() {
            const contact = {
                image: '/assets/avatar.jpg',
                title: this.title,
                fullname: this.fullname,
                //google API wasnt working, Patricia told me to move on
                // latitude: this.latitude,
                // longitude: this.longitude,
                company: this.company,
                address1: this.address1,
                address2: this.address2,
                phonenumber: this.phoneNumber,
                readOnly:true
            };
            this.addContactToList(contact)
        },
        // goToContactCard() {
        //     this.$router.push('/')
        // }
    },
    computed: {
        ...mapGetters(['getDisplay']),
    },
}
</script>

<style scoped>
body {
    background-color: lightgray;
    color: grey;
}
.container{
    background-color: white;
    border-radius: 10%;
    width: 300px;
    height: 430px;
    padding-top: 5px;
    padding-left: 100px;
    padding-bottom: 50px;
    margin: 0 auto;
}
.avatar{
    width: 50px;
    border-radius: 50%;
    margin-top: 15px;
    margin-left: 60px;
    margin-bottom: 10px;
}
.btn{
    margin-top: 20px;
    margin-left: 40px;
    margin-bottom: 10px;
}
.invalid {
    border: 2px solid red;
}

.invalid-warning {
    margin: 10px auto;
    color: red;
}
</style>