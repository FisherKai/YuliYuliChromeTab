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

function addSearchEvent() {
    var searchEle = document.getElementById("search-input");
    searchEle.onkeydown = function (e) {
        if (e.keyCode === 13) {
            console.log(e.target.value);
            window.open(`https://www.baidu.com/s?ie=UTF-8&wd=${e.target.value}`,"_parent");
        }
    }
}