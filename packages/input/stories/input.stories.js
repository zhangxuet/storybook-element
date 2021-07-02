import MjInput from '../'

export default {
  title: 'MjInput',
  component: MjInput
}

export const Text = () => ({
  components: { MjInput },
  template: '<mj-input v-model="value"></mj-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { MjInput },
  template: '<mj-input type="password" v-model="value"></mj-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})