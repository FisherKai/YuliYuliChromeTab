// 定义全局变量
var SEO = "baidu"; // 定义搜索引擎
var _container_left = document.getElementById('left');
var _container_center = document.getElementById('center');
var _container_right = document.getElementById('right');
var _leftView = document.getElementById("left-view");

/**
 * 加载看板娘
 */
function loadLive2d() {
    initModel();
}

/**
 * 设置用户信息相关
 */
function setUserInfo() {
    var _userInfo = document.getElementById("user-info");
    _userInfo.onclick = function () {
        window.open(`https://bbs.mihoyo.com/ys/accountCenter/postList`, "_parent");
    }
    // 获取用户信息
    $.get("https://bbs-api.mihoyo.com/user/wapi/getUserFullInfo", function (res) {
        _userInfo.children[0].setAttribute('src', res.data.user_info.avatar_url);
        _userInfo.children[1].innerHTML = res.data.user_info.nickname;
    })
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
    // 获取米游社---酒馆数据
    $.get("https://bbs-api.mihoyo.com/post/wapi/getForumPostList?forum_id=26&is_hot=false&page_size=20&sort_type=1", function (res) {
        if (res.data.list && res.data.list.length > 0) {
            res.data.list.forEach(function (item) {
                _container_left.appendChild(createItem(item));
            })
        }
    })
    _container_left.onclick = function (e) {
        console.log(e.target);
        _leftView.style.display = "block";
    }
}

// 加载容器右边
function loadRightContainer() {
    for (let index = 0; index < 20; index++) {
        _container_right.appendChild(createItem());
    }
}

// 创建节点
function createItem(data) {
    if (!data || !data.post || !data.post.content) return document.createDocumentFragment();
    // 创建节点
    var vDom = document.createDocumentFragment();
    var item = document.createElement('div');
    var introduce = document.createElement('p');

    // 对节点添加class
    item.setAttribute("class", "container-item");
    item.setAttribute("key", data.post.uid);
    introduce.setAttribute("class", "container-introduce");
    introduce.setAttribute("title", data.post.content);

    // todo 对节点添加数据
    introduce.innerHTML = data.post.content;

    item.appendChild(introduce);
    vDom.appendChild(item);
    return vDom;
}

// 左下角小窗口 left-view
function initLeftView() {
    var _maxEle = document.getElementById("max");
    var _minEle = document.getElementById("min");
    var _closeEle = document.getElementById("close");
    var _viewTab = document.getElementById("view-tab");

    // 给tabView绑定事件
    _maxEle.onclick = function () {

    }
    _minEle.onclick = function () {

    }
    _closeEle.onclick = function () {
        _leftView.style.display = "none";
    }
    _viewTab.onclick = function () {
        _leftView.style.display = "none";
    }
}

// reload
function addReload() {
    var _reload = document.getElementById("reload");
    _reload.onclick = function (e) {
        e.target.style.animation = "reload 2s;";
        console.log(e.target.style.animation);
    }
}

window.onload = function () {
    loadLive2d();
    addSearchEvent();
    loadLeftContainer();
    loadRightContainer();
    setUserInfo();
    initLeftView();
    addReload();
}