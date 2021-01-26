package com.hxl.login.mapper;

import com.hxl.login.model.UserInfo;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginMapper {

    /**
     * 使用用户id获取用户信息
     *
     * @param userId 用户Id
     * @return
     */
    UserInfo getLoginUserById(int userId);
}
