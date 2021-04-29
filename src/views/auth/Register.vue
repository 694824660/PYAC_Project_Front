<template>
  <div class="login_box">
    <div class="login_card">
      <div class="card_box">
        <div shadow="never">
          <div class="card_title">
            用户注册
          </div>
          <div>
            <el-form
              ref="ruleForm"
              v-loading="loading"
              :model="ruleForm"
              status-icon
              :rules="rules"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="账号" prop="name">
                <el-input v-model="ruleForm.name" />
              </el-form-item>

              <el-form-item label="密码" prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  type="password"
                  autocomplete="off"
                />
              </el-form-item>

              <el-form-item label="确认密码" prop="checkPass">
                <el-input
                  v-model="ruleForm.checkPass"
                  type="password"
                  autocomplete="off"
                />
              </el-form-item>

              <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email" autocomplete="off" />
              </el-form-item>

              <el-form-item>
                <el-button class="submit_btn"
                  type="primary"
                  @click="submitForm('ruleForm')"
                >立即注册</el-button>
                <p class="item_p">已有账号？请</p>
                <el-button class="login_btn" @click="resetForm('ruleForm')">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userRegister } from '@/api/auth/auth'
export default {
  name: 'Register',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      ruleForm: {
        name: '',
        pass: '',
        checkPass: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 10 个字符',
            trigger: 'blur'
          }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: '长度在 6 到 20 个字符',
            trigger: 'blur'
          }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          userRegister(this.ruleForm)
            .then((value) => {
              const { code, message } = value
              if (code === 200) {
                this.$message({
                  message: '账号注册成功',
                  type: 'success'
                })
                setTimeout(() => {
                  this.loading = false
                  this.$router.push({ path: this.redirect || '/login' })
                }, 0.1 * 1000)
              } else {
                this.$message.error('注册失败，' + message)
              }
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>
.login_box{
  width: 100%;
  height: 100%;
  background-image: url("../../assets/image/pyac_bg1.png");
  background-size: 100% 100%;
  position: relative;
  z-index: 100;
}
.login_card{
  width: 450px;
  height: 650px;
  display: block;
  position: absolute;
  top: 120px;
  right: 300px;
  box-shadow: 2px 4px 24px 0 rgba(0, 0, 0, 0.459);
  border-radius: 16px;
}
.card_box{
  height: 100%;
  background-color: #fff;
  border-radius: 16px;
}
.card_title{
  display: block;
  text-align: center;
  font-weight: bold;
  padding-top: 80px;
  font-size: 1.3em;
  margin: 0 auto 80px auto;
}
.demo-ruleForm{
  width: 90%;
}
.submit_btn{
    width: 110%;
    height: 50px;
    line-height: 25px;
    background: #124de5;
    border-radius: 28px;
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 50px;
    right: 7px;
}
.login_btn{
  border: none;
  color: #124de5;
  position: absolute;
  top: 120px;
  right: 90px;
  font-weight: bold;
}
.item_p{
  display: block;
  position: absolute;
  top: 119px;
  right: 160px;
  z-index: 999;
}
</style> 