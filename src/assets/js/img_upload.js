
function imgPreview(fileDom){
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            // alert("设备不支持图片预览功能");
        }
        //获取文件
        var file = fileDom.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        //读取完成
        reader.onload = function(e) {
            var img = document.getElementById("img_show");
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
function imgPreview2(fileDom){
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            // alert("设备不支持图片预览功能");
        }
        //获取文件
        var file = fileDom.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        //读取完成
        reader.onload = function(e) {
            var img = document.getElementById("img_show2");
            img.src = e.target.result;s
        };
        reader.readAsDataURL(file);
    }


	
function qdqd1(fileDom){
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            // alert("设备不支持图片预览功能");
        }
        //获取文件
        var file = fileDom.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        //读取完成
        reader.onload = function(e) {
            var img = document.getElementById("qdqd_show1");
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
 
    }
function qdqd2(fileDom){
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            // alert("设备不支持图片预览功能");
        }
        //获取文件
        var file = fileDom.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        //读取完成
        reader.onload = function(e) {
            var img = document.getElementById("qdqd_show2");
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
function qdqd3(fileDom){
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            // alert("设备不支持图片预览功能");
        }
        //获取文件
        var file = fileDom.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        //读取完成
        reader.onload = function(e) {
            var img = document.getElementById("qdqd_show3");
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
function qdqd4(fileDom){
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            // alert("设备不支持图片预览功能");
        }
        //获取文件
        var file = fileDom.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        //读取完成
        reader.onload = function(e) {
            var img = document.getElementById("qdqd_show4");
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
function qdqd5(fileDom){
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            // alert("设备不支持图片预览功能");
        }
        //获取文件
        var file = fileDom.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        //读取完成
        reader.onload = function(e) {
            var img = document.getElementById("qdqd_show5");
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
