import anime from 'animejs'

const install = (Vue, options) => {
    Vue.prototype.$animejs = anime
}

export default install