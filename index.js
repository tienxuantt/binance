class Binance {
    // Hàm khởi tạo
    constructor() {
        let me = this;

        // Khởi tạo sự kiện
        me.initEvents();
    }

    // Khởi tạo các sự kiện
    initEvents() {
        let me = this;

        // Khởi tạo sự kiện cho input
        me.initEventInput();

        // Sự kiện khi thêm dòng
        me.initEventAddRow();

        // Sự kiện khi submit
        me.initEventSubmit();

        // Khởi tạo sự kiện taskbar
        me.initEventClickTaskBar();
    }

    // Khởi tạo sự kiện cho input
    initEventInput() {
        // Khi nhập thì tự động viết hoa
        $("input[type='text']").on("keyup", function () {
            let value = $(this).val();

            $(this).val(value.toLocaleUpperCase());
        });

        // Tự động bôi đen
        $("input").on("focus", function () {
            $(this).select();
        });

         // Xóa dòng
         $("input.deleteIcon").on("click", function () {
            if($(".rows").length > 1){
                $(this).closest(".rows").remove();
            }
        });
    }

    // Sự kiện khi thêm dòng
    initEventAddRow(){
        $(".addRow").on("click", function(){
            let row = $(".rows").eq(0).clone(true);

            // Reset giá trị input
            row.find("input[type='text']").val("");

            $(".form-content").append(row);
        });
    }

    // Sự kiện khi submit
    initEventSubmit(){
        let me = this;

        $(".submit").on("click", function(){
            let valid = me.validateForm();

            if(valid){
                me.showStep(2);
                me.submitData();
            }
        });
    }

    // Submit dữ liệu
    submitData(){
        let me = this;
    }

    // Validate form
    validateForm(){
        let valid = true;

        // Duyệt từng phàn tử để validate
        $("input[type='text']").each(function(){
            let value = $(this).val();

            if(!value){
                valid = false;
            }
        });

        if(!valid){
            alert("Vui lòng nhập đủ thông tin");
        }

        return valid;
    }

    // Khởi tạo sự kiện task bar
    initEventClickTaskBar(){
        let me = this;

        // Khi click vào thiết lập
        $(".setting-data").on("click", function(){
           me.showStep(1);
        });

        // Khi click vào thống kê
        $(".statistic-data").on("click", function(){
            let valid = me.validateForm();

            if(valid){
                me.showStep(2);
                me.submitData();
            }
        });

        // Nạp lại dữ liệu mới
        $(".refresh-data").on("click", function(){
            me.submitData();
        });
    }

    // Hiển thị step
    showStep(step){
        if(step == 1){
            $(".setting, .statistic-data").show();
            $(".table-result, .refresh-data, .setting-data").hide();
        }else{
            $(".setting, .statistic-data").hide();
            $(".table-result, .refresh-data, .setting-data").show();
        }
    }
}

// Khởi tạo đối tượng cho binance
var binance = new Binance();