import photoWall from './photo-wall'

photoWall.install = Vue => Vue.component(photoWall.name, photoWall);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(photoWall);
}

export default photoWall