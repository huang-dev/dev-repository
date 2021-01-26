package com.hxl.common.util;

import com.hxl.common.BaseModel;

public class ResultUtil {
    public static BaseModel success(Object object) {
        BaseModel result = new BaseModel();
        result.setCode(0);
        result.setMsg("成功");
        result.setData(object);
        return result;
    }

    public static BaseModel success() {
        return success(null);
    }

    public static BaseModel error(Integer code, String msg) {
        BaseModel result = new BaseModel();
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }
}
