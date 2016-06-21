function createXHR(callback, type) {
    var xhr;
    if (typeof XMLHttpRequest != 'undefined') {
        xhr = new XMLHttpRequest();
    } else if (typeof ActiveXObject != 'undefined') {
        var versions = ["MSXML2.XMLHttp6.0", "MSXML2.XMLHttp3.0", "MSXML2.XMLHttp6.0"];
        for (var key in versions) {
            try {
                xhr = new ActiveXObject(versions[key]);
            } catch (error) {
                console.log(error);
            }
        }
    } else {
        throw new Error("No XHR object available");
    }
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                if (type == 'json') {
                    callback(JSON.parse(this.responseText));
                } else if (type == 'xml') {
                    callback(this.responseXML);
                } else {
                    callback(this.responseText);
                }
            } else {
                alert("An error occurred trying to contact the server.");
            }
        }
    }
    return xhr;
}
