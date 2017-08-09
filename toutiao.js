/**
 * Created by linglingqi on 17-8-9.
 */



function findVideoSrc() {

    var videoNode = document.getElementById("vjs_video_3_html5_api");
    if (videoNode === null || typeof videoNode === "undefined") {
        return null;
    }
    return videoNode.getAttribute("src");
}

var videoSrc = findVideoSrc();
showVideo(videoSrc)
console.log(videoSrc);

function showVideo(videoSrc) {
    if (videoSrc === null) {
        return;
    }
    var tmpArray = document.getElementsByClassName("video_detail");
    if (tmpArray === null || typeof tmpArray === "undefined" || tmpArray.length < 0) {
        return;
    }
    var rootNode = tmpArray[0].parentNode;
    var videoNode = document.createElement("video");
    videoNode.setAttribute("src", videoSrc);
    rootNode.insertBefore(videoNode, rootNode.children[2]);
}