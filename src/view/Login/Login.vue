<template>
  <div>
    <div class="form_login">
      <h3 class="title">Sign in</h3>
      <div :class="{ 'form-group--error': $v.formData.email.$error }">
        <div class="form_item">
          <span class="iconfont">&#xe63e;</span>
          <input type="email" v-model.trim="$v.formData.email.$model" value="" placeholder="请输入邮箱">
        </div>
        <div class="error" v-if="!$v.formData.email.required">邮箱不得为空</div>
        <div class="error" v-if="!$v.formData.email.email">邮箱输入格式错误</div>
      </div>
      <div :class="{ 'form-group--error': $v.formData.password.$error }">
        <div class="form_item">
          <span class="iconfont">&#xe663;</span>
          <input type="password" v-model="$v.formData.password.$model" placeholder="请输入密码">
        </div>
        <div class="error" v-if="!$v.formData.password.required">密码不得为空</div>
        <div class="error" v-if="!$v.formData.password.minLength">密码长度不得小于{{$v.formData.password.$params.minLength.min}}位</div>
        <div class="error" v-if="!$v.formData.password.maxLength">密码长度不得大于{{$v.formData.password.$params.maxLength.max}}位</div>
      </div>
      <div class="btn_item"><div class="btn" @click="login_submit()">登录</div></div>
      <p class="text_link"><router-link to="/register"><span>忘记密码?</span></router-link></p>
      <div class="tiparea">
        <p>还没有账号？选择 <router-link to='/register'>注册</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      submitStatus: null,
      formData: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    formData: {
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      }
    }
  },
  components: {
  },
  methods: {
    login_submit () {
      this.$v.formData.$touch()
      if (this.$v.$invalid) {
        this.$messageBox({
          title: '错误!',
          message: '<span style="color:red;">不是正确的账号或密码</span>'
        })
      } else {
        window.localStorage.setItem('eleToken', '123456')
        this.$router.push('/index')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/form.scss'
</style>
