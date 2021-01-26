package com.hxl.login.controller;

import com.hxl.common.BaseModel;
import com.hxl.common.util.ResultUtil;
import com.hxl.login.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class LoginController {

    @Resource
    LoginService loginService;

    @PostMapping("/login")
    public BaseModel login(){
        loginService.login();
        return ResultUtil.success();
    }

}
