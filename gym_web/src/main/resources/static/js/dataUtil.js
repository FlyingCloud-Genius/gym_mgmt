/**
 * 千位符
 * @param num
 * @returns {string}
 */
function format (num) {
    if (num != null) {
        var reg=/\d{1,3}(?=(\d{3})+$)/g;
        return (num + '').replace(reg, '$&,');
    } else {
        return 0;
    }

}

// 验证身份证号
function isCardNo(card) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(card) === false) {
        return false
    } else {
        return true
    }
}

// 验证身份证号(香港)
function isHKCardNo(card) {
    var reg = /^((\s?[A-Za-z])|([A-Za-z]{2}))\d{6}(\([0−9aA]\)|[0-9aA])$/;
    if (reg.test(card) === false) {
        return false
    } else {
        return true
    }
}
// 验证身份证号(台湾)
function isTWCardNo(card) {
    var reg = /^[a-zA-Z][0-9]{9}$/;
    if (reg.test(card) === false) {
        return false
    } else {
        return true
    }
}


// 验证身份证号(澳门)
function isMMCardNo(card) {
    var reg = /^[1|5|7][0-9]{6}\([0-9Aa]\)/;
    if (reg.test(card) === false) {
        return false
    } else {
        return true
    }
}

// 验证手机号
function checkMobile(str) {
    var re = /^1\d{10}$/
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}