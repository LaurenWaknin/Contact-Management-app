<template>
    <!-- add new contact icon -->
    <div class="icon">
        <button @click="setFormDisplay">
            <font-awesome-icon  icon="fa-solid fa-plus-circle" size="3x" />
        </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'AddContactIcon',
    methods: {
        ...mapActions(['setDisplay']),

        setFormDisplay() {
            console.log('set display');
            this.setDisplay(true)
        }
    },
}

</script>

<style scoped>
.icon {
    display: flex;
    justify-content: center;
    color: black;
}
</style>