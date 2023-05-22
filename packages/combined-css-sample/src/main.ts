import Container from './components/Container.vue'
import { defineCustomElement } from 'vue'
import { getCombinedCss } from './CssCombinedPluginBrowser'

const css = getCombinedCss('./components/Container.vue')
const ce = defineCustomElement({...Container, styles: [css]} as any)
customElements.define('my-container', ce)
