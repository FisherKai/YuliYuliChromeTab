window.onload = function () {
    loadLive2d();
    addSearchEvent();
}

/**
 * 加载看板娘
 */
function loadLive2d() {
    initModel();
}

// 谷歌搜索 https://www.google.com/search?q=
// 百度搜索 https://www.baidu.com/s?ie=UTF-8&wd=
function addSearchEvent() {
    // 给搜索框添加回车查询事件
    var searchEle = document.getElementById("search-input");
    searchEle.onkeydown = function (e) {
        if (e.keyCode === 13) {
            window.open(`https://www.baidu.com/s?ie=UTF-8&wd=${e.target.value}`, "_parent");
        }
    }

    // 给search-icon添加icon选择
    var searchIcon = document.getElementById("search-icon");
    searchIcon.setAttribute("src","./images/icon/baidu.png")
}