/**
 * Created by xs on 2017/7/24.
 */

const Site_Weibo_VideoPlay = 10;

const Site_Toutiao_VideoPlay = 20;


function getSiteType() {

    var hostStr = location.hostname;
    if (hostStr.match("weibo.com") || hostStr.match("weibo.cn")) {
        return Site_Weibo_VideoPlay;
    } else if (hostStr.match("365yg.com")) {
        return Site_Toutiao_VideoPlay;
    }
    return 0;
}

function onStart() {
    var siteType = getSiteType();
    if (siteType === Site_Weibo_VideoPlay) {
        parseWeiboVideo();
    } else if (siteType === Site_Toutiao_VideoPlay) {
        parseToutiaoVideo();
    }
}

onStart();

//提取微博视频
function parseWeiboVideo() {
    var scriptNode = document.createElement("script");
    scriptNode.src = chrome.extension.getURL("weibo.js");
    document.getElementsByTagName("body")[0].appendChild(scriptNode);
}

//提取今日头条视频
function parseToutiaoVideo() {
    var scriptNode = document.createElement("script");
    scriptNode.src = chrome.extension.getURL("toutiao.js");
    document.getElementsByTagName("body")[0].appendChild(scriptNode);
}