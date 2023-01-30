<template>
    <div class="div-container">
        <div class="left">
            <img ref="image" name="image" class="img" v-bind:src="contactData.image"/>
            <input ref="title" name="title" class="title" label="Title" :value= "contactData.title" size="15"  :readonly="contactData.readOnly"/>
        </div>
        <div class="right">
            <div class="fullname">
                <input ref="fullname" name="fullname" label="First and last name" :value="contactData.fullname" :readonly="contactData.readOnly"/>
            </div>
            <!-- google API wasnt working, Patricia instructed me to move on -->
            <!-- <div class="coordinates">
                <div>{{ contactData.latitude }} {{ contactData.longitude }}</div>
            </div> -->
            <div class="company">
                <input ref="company" name="company" label="Company" :value="contactData.company" :readonly="contactData.readOnly"/>
            </div> 
            <div class="address">
                <input ref="address1" name="address1" label="Street name, number, apt" :value="contactData.address1" :readonly="contactData.readOnly"/>
            </div>
            <div class="address">
                <input ref="address2" name="address2" label="City, State, Postal Code" :value="contactData.address2" :readonly="contactData.readOnly"/>
            </div>
            <div class="phonenumber">
                <input ref="phoneNumber" name="phoneNumber" label="Phone number" P: :value="contactData.phonenumber" :readonly="contactData.readOnly" />
            </div>
        </div>
        <div class="options">
            <button @click="editContactData">
                <font-awesome-icon icon="fa-solid fa-pencil" />&nbsp;&nbsp;
            </button>
            <button @click="deleteContact">
                <font-awesome-icon icon="fa-solid fa-trash" />
            </button>

            <button @click="saveContactData" v-if="contactData.readOnly===false">Save Changes</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name:'contactCard',
    props:{
        contactData:{ type:Object, default:()=>{} },
        index:{type:Number,required:true}
    },
    created(){console.log(this.contactData);},
    methods:{
        ...mapActions(['deleteFromContactList', 'setReadOnly', 'editContactToList']),
        
        deleteContact(){            
            this.deleteFromContactList(this.index);
            console.log("deleteContact",this.index);
        },
        editContactData(){
            this.setReadOnly(this.index)
            console.log('editContact',this.index);
        },
        saveContactData(){
            
            const contact = {
                image: this.$refs.image.src,
                title: this.$refs.title.value,
                fullname: this.$refs.fullname.value,
                //google API wasnt working, Patricia told me to move on
                // latitude: this.latitude,
                // longitude: this.longitude,
                company: this.$refs.company.value,
                address1: this.$refs.address1.value,
                address2: this.$refs.address2.value,
                // postalcode: this.$refs.postalcode.value,
                phonenumber: this.$refs.phoneNumber.value,
                readOnly:true

            };
            this.editContactToList({contact, index:this.index});
            console.log('saveContact', this.index);
        }
    },
    //for input
    computed: {
        ...mapGetters(['getReadOnly']),
    },
}
</script>

<style scoped>
.div-container{
    background-color: white;
    display: flex;
    width: auto;
    padding: 15px 15px;
     
}
.right.left{
    display: inline;
}
input{
    margin-bottom: 5px;
    border: none;
}
.left{
    width: 150px;
    margin-right: 5px;
}
.img{
    border-radius: 100%;
    width:150px;
    height: 150px;
}
.title{
    font-weight: bold;
}
.fullname input{
    padding-bottom: 5px;
    font-weight: bold;
}
.coordinates{
    padding-bottom: 5px;
}
.company.input{
    font-weight: bold;
}
.options{
    align-self: flex-end;
    color: black;
    display: flex;
    flex-direction: column;
}
.button{
    border-radius: 80%;
    border: 2px solid grey;
    padding: 15px;
}
@media(max-width:1000px){
    .div-container{
        justify-content: space-between;
    }
}
@media(max-width:480px) {
    .div-container {
        justify-content:flex-start;
    }
}
</style>