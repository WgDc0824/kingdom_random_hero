// 王者荣耀英雄列表
const heroes = [
    "李白", "韩信", "赵云", "孙悟空", "亚瑟", "妲己", "安琪拉", "貂蝉", "孙尚香", "鲁班七号",
    "后羿", "伽罗", "典韦", "程咬金", "白起", "廉颇", "庄周", "蔡文姬", "孙膑", "大乔",
    "小乔", "王昭君", "诸葛亮", "张良", "司马懿", "上官婉儿", "墨子", "狄仁杰", "李元芳",
    "百里守约", "百里玄策", "铠", "宫本武藏", "娜可露露", "不知火舞", "橘右京", "吕布",
    "貂蝉", "花木兰", "兰陵王", "阿轲", "钟无艳", "夏侯惇", "项羽", "刘邦", "刘禅",
    "孙尚香", "虞姬", "公孙离", "马可波罗", "裴擒虎", "盘古", "曜", "镜", "蒙犽", "鲁班大师",
    "瑶", "云中君", "盘古", "嫦娥", "猪八戒", "嫦娥", "盾山", "司马懿", "元歌", "米莱狄",
    "狂铁", "孙策", "司马懿", "西施", "马超", "曜", "鲁班大师", "蒙恬", "阿古朵", "夏洛特",
    "司空震", "澜", "击云", "桑启", "金蝉", "海月", "戈娅", "云缨", "暃", "鲁班大师",
    "巴宝莉", "花朝月夕", "艾琳", "李信", "梦奇", "瑶", "东皇太一", "女娲", "干将莫邪",
    "鬼谷子"
];

// 初始化变量
let availableHeroes = [...heroes];
let selectedHeroes = [];
let currentHero = '无';
let isRunning = false;
let intervalId;

// 获取 DOM 元素
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const currentHeroElement = document.getElementById('current-hero');
const countInfoElement = document.getElementById('count-info');
const availableHeroesElement = document.getElementById('available-heroes');
const selectedHeroesElement = document.getElementById('selected-heroes');

// 更新显示信息
function updateDisplay() {
    currentHeroElement.textContent = `当前英雄: ${currentHero}`;
    countInfoElement.textContent = `可选英雄数量: ${availableHeroes.length}  已选英雄数量: ${selectedHeroes.length}`;
    availableHeroesElement.textContent = availableHeroes.join(', ');
    selectedHeroesElement.textContent = selectedHeroes.length > 0 ? selectedHeroes.join(', ') : '无';
}

// 开始选择
function startSelection() {
    if (availableHeroes.length > 0) {
        isRunning = true;
        startButton.disabled = true;
        pauseButton.disabled = false;
        intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * availableHeroes.length);
            currentHero = availableHeroes[randomIndex];
            updateDisplay();
        }, 100);
    }
}

// 暂停选择
function pauseSelection() {
    clearInterval(intervalId);
    isRunning = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    if (availableHeroes.length > 0) {
        const index = availableHeroes.indexOf(currentHero);
        if (index!== -1) {
            availableHeroes.splice(index, 1);
            selectedHeroes.push(currentHero);
            updateDisplay();
        }
    }
}

// 绑定事件
startButton.addEventListener('click', startSelection);
pauseButton.addEventListener('click', pauseSelection);

// 初始化显示
updateDisplay();
    