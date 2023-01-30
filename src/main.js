import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import router from './router'

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPencil, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash, faPencil, faPlusCircle)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
// .use(router)
.mount('#app')
