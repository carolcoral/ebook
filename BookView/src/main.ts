import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn'
import '../public/css/container.css'

import App from './App.vue'
import router from './router'

import HeaderComponent from './components/common/HeaderComponent.vue'
import FooterComponent from './components/common/FooterComponent.vue'
import AsideComponent from './components/common/AsideComponent.vue'


const app = createApp(App)

app.component("FooterComponent", FooterComponent)
  .component("HeaderComponent", HeaderComponent)
  .component("AsideComponent", AsideComponent)

app.use(createPinia())
app.use(router)

app.use(ElementPlus)
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
