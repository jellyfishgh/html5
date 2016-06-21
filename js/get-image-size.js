function imgLoad(container, url, gap, callback) {
    if (gap===undefined) gap = 10;
    var img = new Image();
    img.src = url;
    if (img.complete) {
        callback.call(container, img, gap);
    } else {
        img.onload = function() {
            callback.call(container, img, gap);
            img.onload = null;
        }
    }
}

function initCanvas(img, gap) {
    var c = document.createElement("canvas");
    c.innerHTML = "Your Browser Does Not Support Canvas Tag.";
    var width = img.width,
        height = img.height;
    var size = width > height ? height : width;
    c.width = c.height = size + gap*2;
    var sx = (width - size) / 2,
        sy = (height - size) / 2;
    var ctx = c.getContext("2d");
    ctx.drawImage(img, sx, sy, size, size, gap, gap, size, size);
    this.appendChild(c); //谁调用该方法把图片画到谁的身上
}
