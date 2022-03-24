import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashCan, faCalendarPlus} from '@fortawesome/free-solid-svg-icons'


library.add(faTrashCan, faCalendarPlus);


createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
