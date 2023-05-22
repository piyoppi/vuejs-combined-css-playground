import Container from './components/Container.vue'
import { defineCustomElement } from 'vue'
import { getCombinedCssPromise } from './CssCombinedPluginBrowser'

getCombinedCssPromise('./components/Container.vue').then(css => {
  const ce = defineCustomElement({...Container, styles: [css.default]} as any)
  customElements.define('my-container', ce)
})
