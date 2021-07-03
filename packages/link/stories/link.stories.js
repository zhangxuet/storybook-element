import MjLink from '../src/link.vue'

export default {
  title: 'MjLink',
  component: MjLink
}

export const Link = _ => ({
  components: { MjLink },
  template: `
    <div>
      <mj-link :disabled="true" href="http://www.baidu.com">baidu</mj-link>
    </div>
  `
})