function init(i, moments) {
    moments[i] = {
        ele: document.createElement("div"),
        height: Math.ceil(i / limit) * size,
        top: moments[i - 1].top + moments[i - 1].height + gap
    };
    moments[i].ele.className = "moment";
    moments[i].ele.style.height = moments[i].height + "px";
    moments[i].ele.style.top = moments[i].top + "px";
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    selectImgs.call(moments[i].ele, arr.concat(), i, moments[i].ele.style.width * 0.32, moments[i].ele.style.width*0.02, addClipImg));    
}

//从数组里面随机选择出 n 个对象
function selectImgs(arr, n, size, gap, callback) {
    for (var i = 0; i < n; i++) {
        var index = Math.floor(Math.random() * arr.length);
        var img = document.createElement("img");
        img.src = "images/" + arr.splice(index, 1) + ".jpg";
        if (img.complete) {
            callback.call(this, img, size, gap, i%3, Math.ceil(i/3), img.width, img.height);
        } else {
            img.onload = function() {
                callback.call(this, img, gao, x, y, width, height);
                img.onload = null;
            }
        }
    }
}

function addClipImg(img, qs, gap, x, y, width, height) {
    var size = width > height ? height : width,
        scale = qs / size,
        newHeight = height * scale,
        newWidth = width * scale,
        top = (newHeight - qs) / 2,
        right = (newWidth + qs) / 2,
        bottom = (newHeight + qs) / 2,
        left = (newWidth - qs) / 2;
    img.width = newWidth;
    img.height = newHeight;
    clipEle.call(img, top, right, bottom, left);
    img.style.top = (y - 1) * (qs + gap) + gap - top;
    img.style.left = (x - 1) * (qs + gap) + gap - left;
    this.appendChild(img);
}

function clipEle(top, right, bottom, left) {
    this.style.position = "absolute";
    this.style.clip = "rect(" + top + "px," + right + "px," + bottom + "px," + left + "px)";
}
