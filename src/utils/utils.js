function getDate() {
    const date = new Date();
    const y = date.getFullYear();
    const mm = (parseInt(date.getMonth()) + 1) < 10 ? '0' + (parseInt(date.getMonth()) + 1) : (parseInt(date.getMonth()) + 1);
    const d = parseInt(date.getDate()) < 10 ? '0' + parseInt(date.getDate()) : parseInt(date.getDate());
    const h = parseInt(date.getHours()) < 10 ? '0' + parseInt(date.getHours()) : parseInt(date.getHours());
    const m = parseInt(date.getMinutes()) < 10 ? '0' + parseInt(date.getMinutes()) : parseInt(date.getMinutes());
    const s = parseInt(date.getSeconds()) < 10 ? '0' + parseInt(date.getSeconds()) : parseInt(date.getSeconds());
    return y + '-' + mm + '-' + d + ' ' + h + ':' + m + ':' + s
}
export { getDate }

export function uuid(before = '', after = '') {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    const charsLen = chars.length
    let uuid = []
    const len = 16
    for (let i = 0; i < len; i++) {
        uuid[i] = chars[0 | Math.random() * charsLen]
    }
    return before + uuid.join('') + after
}
/**
获取当前时间 格式：yyyy-MM-dd HH:MM:SS
*/
export function getDataString() {
    var date = new Date();//当前时间
    var month = zeroFill(date.getMonth() + 1);//月
    var day = zeroFill(date.getDate());//日
    var hour = zeroFill(date.getHours());//时
    var minute = zeroFill(date.getMinutes());//分
    var second = zeroFill(date.getSeconds());//秒

    //当前时间
    var curTime = date.getFullYear() + "-" + month + "-" + day
        + " " + hour + ":" + minute + ":" + second;
    return curTime;
}

export function getDataStringDay(decrease) {
    var date = new Date();//当前时间
    var month = zeroFill(date.getMonth() + 1);//月
    var day = zeroFill(date.getDate());//日
    var curTime = "";

    if (decrease == 0) {
        curTime = date.getFullYear() + "-" + month + "-" + day;
    } else {
        if (day <= decrease) {
            if (month == 1) {
                month = 12;
                let newDay = 31 - (decrease - day);
                curTime = (date.getFullYear() - 1) + "-" + month + "-" + newDay;
            }
            else {
                month = month - 1;
                let newDay = getDays(date.getFullYear(), month) - (decrease - day);
                if (newDay < 10) {
                    curTime = date.getFullYear() + "-" + month + "-" + "0" + newDay;
                }
                else {
                    curTime = date.getFullYear() + "-" + month + "-" +  newDay;
                }
            }
        }
        else {
            let newDay = day - decrease;
            if (newDay < 10) {
                curTime = date.getFullYear() + "-" + month + "-" + "0" + newDay;
            }
            else {
                curTime = date.getFullYear() + "-" + month + "-" +  newDay;
            }
        }

    }
    //当前时间
    return curTime;
}

function getDays(year, month) {
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        days[1] = 29
    }
    return days[month]
}


export function getseparateDays(day) {
    let days = day.split("-");
    let newDay = days[1] + "/" + days[2];
    return newDay;
}

/**
补零
*/
export function zeroFill(i) {
    if (i >= 0 && i <= 9) {
        return "0" + i;
    } else {
        return i;
    }
}

/**
配置获取ID
*/
export function getNodeId(i) {
    const ids = i.split("e");
    return ids[1];
}

/**
手机号判断
*/
export function judgePhone(i) {
    const length = i.length;
    let first = i.substr(0, 1);
    if (length === 11 && first === "1") {
        return true;
    }
    else {
        return false;
    }
}