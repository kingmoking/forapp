var is_Android = true;
// 判断安卓
function isAndroid() {
    var u = navigator.userAgent;
    if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
        if (window.ShowFitness !== undefined) return true;
    }
    return false;
};

// 判断设备为 ios
function isIos() {
    var u = navigator.userAgent;
    if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
        return true;
    }
    return false;
};
if (isAndroid() == true) {
    is_Android = true;
    $("#type").attr("src","./image/anzhuo.png");
}
if (isIos() == true) {
    is_Android = false;
    $("#type").attr("src","./image/iPhone.png");
}

//下载按钮事件
$(".button").click(function () {
    if (is_Android) {
        console.log('Android');
        //安卓下载
        location.href = '';
    }
    else {
        console.log('ios');
        //苹果
        location.href = '';
    }
})