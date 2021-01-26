package com.hxl.login.controller;

import com.hxl.common.BaseModel;
import com.hxl.common.util.ResultUtil;
import com.hxl.login.model.UserInfo;
import com.hxl.login.service.LoginService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class LoginController {

    @Resource
    LoginService loginService;

    @PostMapping("/login")
    public BaseModel login(@RequestBody UserInfo userInfo){
        Boolean flag = loginService.login(userInfo);
        if(flag){
            return ResultUtil.success();
        }else {
            return ResultUtil.error(999,"登录失败，请重新登录");
        }
    }

}
