/**
 * Created by xs on 2017/7/24.
 */

const Site_Weibo_VideoPlay = 10;

const Site_Toutiao_VideoPlay = 20;


function getSiteType() {

    var hostStr = location.hostname;
    if (hostStr.match("weibo.com") || hostStr.match("weibo.cn")) {
        return Site_Weibo_VideoPlay;
    }
}

function onStart() {
    var siteType = getSiteType();
    if (siteType === Site_Weibo_VideoPlay) {
        parseWeiboVideo();
    }
}

onStart();


//提取微博视频
function parseWeiboVideo() {

}