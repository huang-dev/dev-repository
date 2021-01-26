package com.hxl.common.util;

import com.hxl.common.BaseModel;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalDefultExceptionHandler {

    /**
     * 全局异常捕捉处理
     * @param ex
     * @return
     */
    @ExceptionHandler(value = Exception.class)
    public BaseModel errorHandler(Exception ex) {
        BaseModel map = new BaseModel();
        map.setCode(-1);
        map.setMsg(ex.toString());
        return map;
    }

}
