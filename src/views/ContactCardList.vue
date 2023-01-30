<template>
    <div v-for="(contactData ,index) in getContactList" :key="index" class="flex-container">
        <ContactCard :contactData="contactData" :index="index"></ContactCard>
    </div>
    <AddContactIcon/>
    <AddContactCard v-if="getDisplay" />
</template>

<script>
// import axios from 'axios';
import AddContactIcon from '@/components/AddContactIcon.vue';
import AddContactCard from '@/views/AddContactCard.vue';
import ContactCard from './ContactCard.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'ContactCardList',
    components: {
        ContactCard,
        AddContactIcon,
        AddContactCard
    }, 
    data() {
        return {
            contactDataList: []
        };
    },
    computed: {
        ...mapGetters( ['getContactList','getDisplay']),
    },

};
</script>

<style>
body{
    background-color: lightgray;
    color: grey;
}
.flex-container {

    display: inline-block;
    margin: 15px;
    /* width: 33%; */
}
@media (max-width:1000px) {
    .flex-container{
        width: 92vw;
    }
}
@media (max-width:480px) {
    .flex-container {
        width: 100%;
    }
}
</style>