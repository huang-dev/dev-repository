import { Message } from 'element-ui';
var popMessage = {
    info: (msg)=> {
        Message({
            showClose: "true",
            message: msg,
            duration: 2000,
        });
    },
    error: (msg)=>{
        Message({
            showClose: "true",
            message: msg,
            type: 'error',
            duration: 2000,
        });
    },
    warning:(msg)=> {
        Message({
            showClose: "true",
            message: msg,
            type: 'warning',
            duration: 2000,
        });
    },
    success: (msg)=> {
        Message({
            showClose: "true",
            message: msg,
            type: 'success',
            duration: 2000,
        });
    }
}

export {
	popMessage
};