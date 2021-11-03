// Cấu hình chung
var common = {};

// Cấu hình js
common.config = {
    urlBinance: "https://api.binance.com/"
};

// Hàm ajax gọi lên server lấy dữ liệu
common.Ajax = (url, method, data, fnCallBack, async = true) => {
    $.ajax({
        url: url,
        method: method,
        async: async,
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        crossDomain: true,
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {
            fnCallBack(response);
        },
        error: function (errormessage) {
            console.log(errormessage.responseText);
        }
    })
}