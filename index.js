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
    }

    // Khởi tạo sự kiện cho input
    initEventInput() {
        // Khi nhập thì tự động viết hoa
        $("input").on("keyup", function () {
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

           }else{
               alert("Vui lòng nhập đủ thông tin");
           }
        });
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

        return valid;
    }
}

// Khởi tạo đối tượng cho binance
var binance = new Binance();