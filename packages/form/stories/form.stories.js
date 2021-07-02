import MjForm from '../'
import MjFormItem from '../../formitem'
import MjInput from '../../input'
import MjButton from '../../button'

export default {
  title: 'MjForm',
  component: MjForm
}

export const Login = () => ({
  components: { MjForm, MjFormItem, MjInput, MjButton },
  template: `
    <mj-form class="form" ref="form" :model="user" :rules="rules">
        <mj-form-item label="用户名" prop="username">
            <!-- <mj-input v-model="user.username"></mj-input> -->
            <mj-input :value="user.username" @input="user.username = $event" placeholder="请输入用户名"></mj-input>
        </mj-form-item>
        <mj-form-item label="密码" prop="password">
            <mj-input type="password" v-model="user.password"></mj-input>
        </mj-form-item>
        <mj-form-item>
            <mj-button type="primary" @click="login">登 录</mj-button>
        </mj-form-item>
    </mj-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      // console.log('button')
      // return false
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})