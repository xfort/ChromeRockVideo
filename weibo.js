/**
 * Created by xs on 2017/7/24.
 */


findVideo();

//dofunc 必须返回true或false
function waitFunc(doFunc, timeout, timemeta, resFunc) {
    var index = 0;
    var timeId = setInterval(function () {
        index++;
        if (index * timemeta > timeout || doFunc()) {
            window.clearInterval(timeId);
            resFunc();
        }
    }, timemeta);
}

//寻找video节点元素
function findVideo() {
    waitFunc(function () {
        var videoNodeArray = document.getElementsByTagName("video");
        if (videoNodeArray === null || typeof videoNodeArray === "undefined" || videoNodeArray.length <= 0) {
            return false;
        }
        var srcStr = videoNodeArray[0].getAttribute("src");
        if (srcStr === null || typeof srcStr === "undefined") {
            return false;
        }
        return true;
    }, 5000, 1000, function () {
        showVideoH5();
    });
}
//显示h5标准video
function showVideoH5() {
    var videoSrc = document.getElementsByTagName("video")[0].getAttribute("src");
    if (videoSrc === null || typeof videoSrc === "undefined") {
        return;
    }

    var nodeTmp = document.getElementsByClassName("weibo_player_wrap clearfix")[0];
    if (nodeTmp === null || typeof nodeTmp === "undefined") {
        return;
    }
    var videoNode = document.createElement("video");
    videoNode.setAttribute("src", videoSrc);
    // videoNode.setAttribute("autoplay", "false");
    videoNode.setAttribute("controls", "controls");
    nodeTmp.insertBefore(videoNode, nodeTmp.children[1]);
}


