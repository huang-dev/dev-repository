package com.hxl.login.service.impl;

import com.hxl.login.mapper.LoginMapper;
import com.hxl.login.model.UserInfo;
import com.hxl.login.service.LoginService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class LoginServiceImpl implements LoginService {

    @Resource
    LoginMapper loginMapper;

    @Override
    public void login() {
        UserInfo user = loginMapper.getLoginUserById();

        String userName =  user.getUserName();


    }
}
