
/**
 * el 元素名
 * size 以默认大小的多少倍显示
 * state 初始选中的状态 0/1
 */
 ; class Y_Radio {
    constructor({
        el,
        size = 1,
        state = 0
    }) {
        // 检测参数是否合法
        if (el === undefined || el === null || el === "") {
            throw new Error("el不能为空");
        } else if (typeof el !== "string") {
            throw new TypeError("el类型不合法");
        }
        if (state !== 0 && state !== 1) {
            throw new Error("state只能为0或1");
        }
        if (!document.getElementById(el)) {
            throw new Error("元素获取错误，请检查el名称")
        }
        // 定义属性
        // 当前选中状态
        this.state = state;
        this.size = size;
        this.$el = document.getElementById(el);
    }

    // 渲染节点
    render() {
        // 初始化信息
        this._init();
        // 创建节点
        this._create();
        // 添加点击事件
        this._addClick();
    }

    // 
    _init() {
        this.$el.classList.add("y-radio");
        if (this.state === 1) {
            setTimeout(() => {
                this.$bak.style.justifyContent = "flex-end";
            })
        }
        if (this.size !== 1) {
            setTimeout(() => {
                this.$el.style.width = `${this.size * 18}px`;
                this.$el.style.height = `${this.size * 12}px`;
                this.$bak.style.width = `${this.size * 16}px`;
                this.$bak.style.height = `${this.size * 10}px`;
                this.$point.style.width = `${this.size * 8}px`;
                this.$point.style.height = `${this.size * 8}px`;
            })
        }
    }

    // 创建节点
    _create() {
        let frag = document.createDocumentFragment();
        // 背景节点
        this.$bak = document.createElement("div");
        // 创建左右移动的圆点
        this.$point = document.createElement('div');

        // 添加样式
        this.$bak.classList.add('y-radio-bak');
        this.$point.classList.add('y-radio-point');
        this.$bak.style.justifyContent = "flex-start";

        this.$bak.appendChild(this.$point);
        frag.appendChild(this.$bak);

        this.$el.appendChild(frag);
    }

    _addClick() {
        this.$el.onclick = () => {
            if (this.$bak.style.justifyContent === "flex-start") {
                this.$bak.style.justifyContent = "flex-end";
                this.state = 1;
            } else {
                this.$bak.style.justifyContent = "flex-start";
                this.state = 0;
            }
        }
    }
}

