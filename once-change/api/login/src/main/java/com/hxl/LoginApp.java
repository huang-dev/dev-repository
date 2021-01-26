package com.hxl;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.hxl.*.mapper")
@SpringBootApplication
public class LoginApp {
    public static void main(String[] args) {
        SpringApplication.run(LoginApp.class,args);
    }
}
