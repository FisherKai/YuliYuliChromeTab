// 定义全局变量
var SEO = "baidu"; // 定义搜索引擎
var _container_left = document.getElementById('left');
var _container_center = document.getElementById('center');
var _container_right = document.getElementById('right');

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
            var baseUrl = SEO === "baidu" ? `https://www.baidu.com/s?ie=UTF-8&wd=` : `https://www.google.com/search?q=`;
            window.open(`${baseUrl}${e.target.value}`, "_parent");
        }
    }

    // 给search-icon添加icon选择
    var searchIcon = document.getElementById("search-icon");
    searchIcon.setAttribute("src", "./images/icon/baidu.png");
    searchIcon.onclick = function () {
        console.log(searchIcon.getAttribute("src") === "./images/icon/baidu.png");
        if (searchIcon.getAttribute("src") === "./images/icon/baidu.png") {
            searchIcon.setAttribute("src", "./images/icon/google.png ");
            SEO = "google";
        } else {
            searchIcon.setAttribute("src", "./images/icon/baidu.png");
            SEO = "baidu";
        }
    }
}

// 加载容器左边
function loadLeftContainer() {
    console.log(chrome);
    createItem();
}

function createItem() {
    // 创建节点
    var vDom = document.createDocumentFragment();
    var item = document.createElement('div');
    var introduce = document.createElement('p');
    var time = document.createElement('span');
    var number = document.createElement('span');

    // 对节点添加class
    item.setAttribute("class", "container-item");
    introduce.setAttribute("class", "container-introduce");
    time.setAttribute("class", "container-time");
    number.setAttribute("class", "container-number");

    // todo 对节点添加数据
    introduce.innerHTML = "测试标题";
    time.innerHTML = "2021.09.12";
    number.innerHTML = "2980";

    item.appendChild(introduce);
    item.appendChild(time);
    item.appendChild(number);
    vDom.appendChild(item);
    _container_left.appendChild(vDom);
}

window.onload = function () {
    loadLive2d();
    addSearchEvent();
    loadLeftContainer();
}