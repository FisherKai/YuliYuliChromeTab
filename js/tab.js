// 定义全局变量
var SEO = "baidu"; // 定义搜索引擎

/**
 * 加载看板娘
 */
function loadLive2d() {
    initModel();
}

function readHistory() {

}

// 谷歌搜索 https://www.google.com/search?q=
// 百度搜索 https://www.baidu.com/s?ie=UTF-8&wd=
function addSearchEvent() {
    // 给搜索框添加回车查询事件
    var searchEle = document.getElementById("search-input");
    searchEle.focus();
    searchEle.onkeydown = function (e) {
        if (e.keyCode === 13) {
            var baseUrl = SEO === "baidu" ? `https://www.baidu.com/s?ie=UTF-8&wd=` : `https://www.google.com/search?q=`;
            window.open(`${baseUrl}${e.target.value}`, "_parent");
        }
    }

    // 给search-icon添加icon选择
    var searchIcon = document.getElementById("search-icon");
    searchIcon.setAttribute("src", "./images/icon/baidu.png");
    searchIcon.onclick = function () {
        if (searchIcon.getAttribute("src") === "./images/icon/baidu.png") {
            searchIcon.setAttribute("src", "./images/icon/google.png ");
            SEO = "google";
        } else {
            searchIcon.setAttribute("src", "./images/icon/baidu.png");
            SEO = "baidu";
        }
        setTimeout(function () {
            var searchEle = document.getElementById("search-input");
            searchEle.focus();
        }, 0);
    }
}

/**
 * 全局监听tab事件
 */
function listenerKeyDown() {
    document.body.onkeydown = function (e) {
        var searchIcon = document.getElementById("search-icon");
        if (searchIcon.getAttribute("src") === "./images/icon/baidu.png") {
            searchIcon.setAttribute("src", "./images/icon/google.png ");
            SEO = "google";
        } else {
            searchIcon.setAttribute("src", "./images/icon/baidu.png");
            SEO = "baidu";
        }
        setTimeout(function () {
            var searchEle = document.getElementById("search-input");
            searchEle.focus();
        }, 0);

    }
}

window.onload = function () {
    // 加载第三方插件
    loadLive2d();
    addSearchEvent();
    listenerKeyDown();
}