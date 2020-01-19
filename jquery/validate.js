function foLogin() {
            var pattern =/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            var phonen = /^1[34578]\d{9}$/;
			var email = document.getElementById("email").value;
            var oUname = document.getElementById("userid");
            var oError = document.getElementById("error_box");
            var oUpass = document.getElementById("password");
            var oUpass1 = document.getElementById("againpassword");
            var phone = document.getElementById("phone").value;
            var isError = true;
            oError.innerHTML = "<br>";
            
            if (!pattern.test(email)) {
                oError.innerHTML = "邮箱格式不对";
                isError = false;
                return;
            }


            if (oUname.value.length < 11 || oUname.value.length > 13) {
                oError.innerHTML = "账号要12位";
                isError = false;
                return;
            }else if(oUname.value.charCodeAt(0)>=48 &&(oUname.value.charCodeAt(0)<=57)){
                oError.innerHTML="首位不能为数字";
                return;


            }else for (var i=0;i<oUname.value.length;i++){
               if((oUname.value.charCodeAt(i)<48)||(oUname.value.charCodeAt(i)>57)&&(oUname.value.charCodeAt(i)<58)&&(oUname.value.charCodeAt(i)>97)){
                oError.innerHTML="只能为数字和字母";
                return;

            }}
            if (oUpass.value.length < 6 || oUpass.value.length > 16) {
                oError.innerHTML = "密码要6-12位";
                isError = false;
                return;
            }else if(oUname.value!=oUpass1.value) {
                oError.innerHTML = "设置密码和验证密码不一致";
                return;
            }
            if (!phonen.test(phone)) {
                oError.innerHTML = "电话格式不对";
                isError = false;
                return;
            }

}




function foLogin2() {
            var pattern =/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
			var email = document.getElementById("email").value;
            var oUname = document.getElementById("userid");
            var oError = document.getElementById("error_box");
            var oUpass = document.getElementById("password");
            var oUpass1 = document.getElementById("againpassword");
            var isError = true;
            oError.innerHTML = "<br>";
            if (oUname.value.length < 11 || oUname.value.length > 13) {
                oError.innerHTML = "账号要12位";
                isError = false;
                return;
            }else if(oUname.value.charCodeAt(0)>=48 &&(oUname.value.charCodeAt(0)<=57)){
                oError.innerHTML="首位不能为数字";
                return;


            }else for (var i=0;i<oUname.value.length;i++){
               if((oUname.value.charCodeAt(i)<48)||(oUname.value.charCodeAt(i)>57)&&(oUname.value.charCodeAt(i)<58)&&(oUname.value.charCodeAt(i)>97)){
                oError.innerHTML="只能为数字和字母";
                return;

            }}
            if (!pattern.test(email)) {
                oError.innerHTML = "邮箱格式不对";
                isError = false;
                return;
            }


            
            if (oUpass.value.length < 6 || oUpass.value.length > 16) {
                oError.innerHTML = "密码要6-12位";
                isError = false;
                return;
            }else if(oUname.value!=oUpass1.value) {
                oError.innerHTML = "设置密码和验证密码不一致";
                return;
            }


            if(isError!=false){
                return true;
            }
}