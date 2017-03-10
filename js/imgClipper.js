/****
 *
 * @param origin_img
 * @param clip_W
 * @param clip_H
 * @returns {boolean}
 * @constructor
 */
function ImgClip(origin_img,clip_W,clip_H) {//新建对象的参数（原始图像所在的fileInput控件，剪裁宽度，剪裁高度）
    if(origin_img == undefined || $(origin_img).attr('type') != 'file'){
        alert("第一个参数必须是文件input控件\nthe first parameter must be a file input control");
        return false;
    }
    if(clip_W == undefined){
        clip_W = 200;
        clip_H = 280;
    }
    this.originImg = origin_img;//原始图片file input控件
    this.displayImg = $('<img src="../source/noPic.jpg" height="'+clip_H+'" width="'+clip_W+'" />')[0];//图片展示的img控件
    this.canvasObj = $('<canvas width="'+clip_W+'" height="'+clip_H+'"></canvas>')[0];//画布，对图片进行裁剪
    this.tempImg = $('<img src=""/>')[0];//存储处理后的图片
    this.afterDeal = '';
    this.clip_W = clip_W;//剪裁宽度
    this.clip_H = clip_H;//剪裁高度
    this.x_bar = $('<div class="imgClipSlider imgClipSlider-horizontal" style="position: absolute;width: '+clip_W+'px;bottom: 30px;"></div>');//放置于下边框
    this.y_bar = $('<div class="imgClipSlider imgClipSlider-perpendicular" style="position: absolute;top: 30px;height: '+clip_H+'px;left: 16px;"></div>');//放置于左边框
    this.zoom_bar = $('<div style="position: absolute;width: '+clip_W+'px;top: 16px;">' +
        '<span class="ui-icon ui-icon-zoomout" style="position: absolute;top: -2px;left: -20px"></span>' +
        '<div class="imgClipSlider imgClipSlider-horizontal" style="margin: auto;"></div>' +
        '<span class="ui-icon ui-icon-zoomin" style="position: absolute;top: -2px;right: -20px"></span></div>');//放置于上边框
    this.pos_x = 0;//左上角x坐标
    this.pos_y = 0;//左上角y坐标
    this.zoom_val = 1;//放大倍数
    this.selectBtn = $('<button class="imgClip-fileSelectBtn"></button>');
}
/*****
 *
 * @param show_box
 * @param btnText
 * @constructor
 */
ImgClip.prototype.ImgClipInit = function (show_box,btnText) {
    var ImgClipObj = this;
    var container = $('<div class="imgClip-container" style="width: '+this.clip_W+'px;"></div>');

    $(this.originImg).css('display','none');//将原来的input隐藏
    $(this.originImg).change(function (e) {//change事件
        ImgClipObj.imgDealer();
    });

    if(btnText == undefined){
        btnText = '选择一张图片';
    }
    this.selectBtn.html(btnText);
    this.selectBtn.bind('click',function () {
        $(ImgClipObj.originImg).click();
    });

    container.append(this.displayImg);
    container.append(this.x_bar);
    container.append(this.y_bar);
    container.append(this.zoom_bar);
    container.append(this.selectBtn);
    $(show_box).append(container);

    this.x_bar.slider({
        range: "min",
        value: 0,
        min: -300,
        max: 300,
        step:0.1,
        slide: function( event, ui ) {
            ImgClipObj.pos_x = -ui.value;
            ImgClipObj.imgDealer();
        }
    });
    this.y_bar.slider({
        range: "min",
        value: 0,
        min: -300,
        max: 300,
        step:0.1,
        orientation: "vertical",
        slide: function( event, ui ) {
            ImgClipObj.pos_y = ui.value;
            ImgClipObj.imgDealer();
        }
    });
    $(this.zoom_bar[0].childNodes[1]).slider({
        range: "min",
        value: 1,
        min: 0,
        max: 4,
        step:0.01,
        slide: function( event, ui ) {
            ImgClipObj.zoom_val = ui.value;
            ImgClipObj.imgDealer();
        }
    });

};

/****
 *
 * @returns {*}
 */
ImgClip.prototype.imgDealer = function () {
    if(this.originImg.files[0]){
        var ImgClipObj = this;//保存指针
        var fileReader = new FileReader();//新建filereader对象
        ImgClipObj.selectBtn.html('已选择“'+ImgClipObj.originImg.files[0].name.substring(0,10)+'..”');//文件名显示

        fileReader.readAsDataURL(ImgClipObj.originImg.files[0]);//读取图片操作
        fileReader.onload = function (e) {//callback
            var ctx = ImgClipObj.canvasObj.getContext('2d');
            ImgClipObj.afterDeal = fileReader.result;
            ImgClipObj.tempImg.src = fileReader.result;
            ctx.clearRect(0,0,ImgClipObj.clip_W,ImgClipObj.clip_H);
            ctx.drawImage(ImgClipObj.tempImg,ImgClipObj.pos_x,ImgClipObj.pos_y,ImgClipObj.tempImg.naturalWidth * ImgClipObj.zoom_val,ImgClipObj.tempImg.naturalHeight * ImgClipObj.zoom_val);
            ImgClipObj.displayImg.src = ImgClipObj.canvasObj.toDataURL();
        };
        return this.afterDeal;
    }else{
        return false;
    }
};
