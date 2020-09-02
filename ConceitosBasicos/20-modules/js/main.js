import HelloWorld from './components/HelloWorld'
import { agrupaPorMaiorEMenor } from './modules/utils'

import pessoas from './mock/pessoas'

console.log(agrupaPorMaiorEMenor(pessoas))

const html =`${HelloWorld('Douglas')}`

document.querySelector('#app').innerHTML = html











console.log('')