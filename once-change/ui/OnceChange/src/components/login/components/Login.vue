<template>
  <div>
    <img src="../assets/login1.png" />
    <div class="loginArea">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submitButton" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script type="text/javascript">
import { LoginService } from "../service/LoginService";
import {popMessage} from '../../common/message'

export default {
  name: "login",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit: function () {
        // this.$message('123');
      LoginService.login().then((date)=>  {
        // popMessage.error(date);
        this.$router.push({path:'/home'})
        // this.$message(date);
      });
      //   return alert(1);
    },
  },
};
</script>

<style scoped>
@import "../css/login.css";
</style>