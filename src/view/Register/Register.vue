<template>
  <div>
    <div class="form_login">
      <h3 class="title">Sign up</h3>
      <div :class="{ 'form-group--error': $v.formData.username.$error }">
        <div class="form_item">
          <span class="iconfont">&#xe63e;</span>
          <input type="email" v-model.trim="$v.formData.username.$model" @blur="$v.formData.username.$touch()" placeholder="请输入用户名">
        </div>
        <div class="error" v-if="!$v.formData.username.required">用户名不得为空</div>
        <div class="error" v-if="!$v.formData.username.minLength">用户名长度不得小于{{$v.formData.username.$params.minLength.min}}位</div>
      </div>
      <div :class="{ 'form-group--error': $v.formData.email.$error }">
        <div class="form_item">
          <span class="iconfont">&#xe643;</span>
          <input type="email" v-model.trim="$v.formData.email.$model" @blur="$v.formData.email.$touch()" placeholder="请输入邮箱">
        </div>
        <div class="error" v-if="!$v.formData.email.required">邮箱不得为空</div>
        <div class="error" v-if="!$v.formData.email.email">邮箱输入格式错误</div>
      </div>
      <div :class="{ 'form-group--error': $v.formData.password.$error }">
        <div class="form_item">
          <span class="iconfont">&#xe663;</span>
          <input type="password" v-model="$v.formData.password.$model" @blur="$v.formData.password.$touch()" placeholder="请输入密码">
        </div>
        <div class="error" v-if="!$v.formData.password.required">密码不得为空</div>
        <div class="error" v-if="!$v.formData.password.minLength">密码长度不得小于{{$v.formData.password.$params.minLength.min}}位</div>
        <div class="error" v-if="!$v.formData.password.maxLength">密码长度不得大于{{$v.formData.password.$params.maxLength.max}}位</div>
      </div>
      <div :class="{ 'form-group--error': $v.formData.repeatPassword.$error }">
        <div class="form_item">
          <span class="iconfont">&#xe663;</span>
          <input type="password" v-model="$v.formData.repeatPassword.$model" @blur="$v.formData.repeatPassword.$touch()" @keyup.enter="register" placeholder="请确认密码">
        </div>
        <div class="error" v-if="!$v.formData.repeatPassword.sameAsPassword">两次输入的密码不一样</div>
      </div>
      <div class="btn_item"><div class="btn" @click="register()">注册</div></div>
      <div class="tiparea">
        <p>已有账号, 快去 <router-link to='/login'>登录</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  validations: {
    formData: {
      username: {
        required,
        minLength: minLength(4)
      },
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  },
  components: {
  },
  methods: {
    register () {
      this.$v.formData.$touch()
      if (this.$v.$invalid) {
        this.$messageBox({
          title: '错误!',
          message: '<span style="color:red;">请填写正确的注册信息</span>'
        })
      } else {
        console.log('校验注册')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/form.scss'
</style>
