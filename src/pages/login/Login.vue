<template>
  <div class="login-comp">
    <el-row justify="center" style="width: 100%">
      <el-col :xs="15" :sm="10" :md="10" :lg="6">
        <el-card shadow="always">
          <h2>Manage System</h2>
          <el-form label-width="auto" :rules="rules" :model="user" ref="userForm">
            <el-form-item prop="username">
              <el-input type="text" v-model="user.username" placeholder="用户名">
                <template #prefix>
                  <el-icon class="el-input__icon"><User /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item class="password-wrap" prop="password">
              <el-input :type="isHide ? 'password' : 'text'" v-model="user.password" placeholder="密码">
                <template #prefix>
                  <el-icon class="el-input__icon"><Lock /></el-icon>
                </template>
                <template #suffix>
                  <el-icon class="el-input__icon" v-show="isHide" @click="this.isHide = !isHide"><Hide /></el-icon>
                  <el-icon class="el-input__icon" v-show="!isHide" @click="this.isHide = !isHide"><View /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit">提交</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { User, Lock, View, Hide, Male } from '@element-plus/icons-vue'
import { login } from '@/api/user'
import { verifyUserName, verifyPassWord } from '@/utils'
export default {
  name: 'Login',
  props: {},
  components: {
    User,
    Lock,
    View,
    Hide,
    Male
  },
  data() {
    return {
      user: {
        username: 'admin',
        password: 'qwer1234!'
      },
      isHide: true,
      rules: {
        username: [{ validator: verifyUserName, trigger: 'blur' }],
        password: [{ validator: verifyPassWord, trigger: 'blur' }]
      }
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault()
      this.$refs.userForm.validate(async (valid) => {
        if (valid) {
          this.userLogin()
        }
      })
    },
    async userLogin() {
      const res = await login({ ...this.user })
      const { data = {} } = res || {}
    }
  }
}
</script>

<style lang="scss" scoped>
.login-comp {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(../../assets/img/login_background.png);
  background-size: cover;
  background-position: center center;
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  button {
    width: 100%;
  }
  .el-form-item {
    margin-bottom: 22px;
  }
  .password-wrap {
    :deep(.el-input__suffix) {
      cursor: pointer;
    }
  }
}
</style>
