// 获取容器
const containers = {
  DailyData: document.getElementById("DailyData"),
  AppData: document.getElementById("AppData"),
  IOSData: document.getElementById("IOSData"),
  WinData: document.getElementById("WinData"),
  MacData: document.getElementById("MacData"),
  AndroidData: document.getElementById("AndroidData"),
};

// 数据源定义
const dataSources = {
  upup: {
    DailyData: cloudupupDailyData,
    AppData: cloudupupAppData,
    IOSData: cloudupupIOSData,
    WinData: cloudupupWinData,
    MacData: cloudupupMacData,
    AndroidData: cloudupupAndroidData,
  },
  banana: {
    DailyData: bananaDailyData,
    AppData: bananaAppData,
    IOSData: bananaIOSData,
    WinData: bananaWinData,
    MacData: bananaMacData,
    AndroidData: bananaAndroidData,
  },
  flyint: {
    DailyData: flyintDailyData,
    AppData: flyintAppData,
    IOSData: flyintIOSData,
    WinData: flyintWinData,
    MacData: flyintMacData,
    AndroidData: flyintAndroidData,
  },
  ssp: {
    DailyData: shaoshupaiDailyData,
    AppData: shaoshupaiAppData,
    IOSData: shaoshupaiIOSData,
    WinData: shaoshupaiWinData,
    MacData: shaoshupaiMacData,
    AndroidData: shaoshupaiAndroidData,
  },
  miao: {
    DailyData: miaomiaoDailyData,
    AppData: miaomiaoAppData,
    IOSData: miaomiaoIOSData,
    WinData: miaomiaoWinData,
    MacData: miaomiaoMacData,
    AndroidData: miaomiaoAndroidData,
  },
};

// 默认数据源
let currentDataSource = "upup";
let dataSourceTemp = "upup";
// 通用话术的顺序标注
let checkLength = 10;

// 创建切换数据源按钮
function createSwitchButtons() {
  const sources = ["upup", "banana", "flyint", "ssp", "miao"];
  const sourcesColor = ["red", "gold", "slateblue", "royalblue", "slategray"];

  const buttonContainer = document.createElement("div");
  sources.forEach((source, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${source}`;
    if (source == `upup`) {
      btn.style.visibility = "hidden";
      previousButton = btn;
    }
    btn.style.background = sourcesColor[index];

    btn.onclick = () => setDataSource(source, btn);
    buttonContainer.appendChild(btn);
  });

  // 设置当前话术页面提示
  setName(`upup`, `upup`, sourcesColor);

  document.body.insertBefore(buttonContainer, document.body.firstChild);
}

// 切换数据源
function setDataSource(source, btn) {
  setName(btn.textContent, source);

  // 显示所有按钮
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.visibility = "visible";
  });

  // 隐藏当前点击的按钮
  if (dataSources[source]) {
    btn.style.visibility = "hidden";
    currentDataSource = source;
  }

  // 更新数据源临时存储
  dataSourceTemp = source;

  // 更新按钮显示
  updateButtons();
}

// 设置标题并隐藏按钮
function setName(name, s) {
  const h5 = document.getElementById("nameContainer");
  h5.textContent = name + "快捷回复";
  h5.style.color = "white";

  switch (s) {
    case "upup":
      h5.style.background = "red";
      break;
    case "banana":
      h5.style.background = "gold";
      break;
    case "flyint":
      h5.style.background = "slateblue";
      break;
    case "ssp":
      h5.style.background = "royalblue";
      break;
    case "miao":
      h5.style.background = "slategray";
      break;
  }
}

// 更新按钮
function updateButtons() {
  const data = dataSources[currentDataSource];
  if (!data) {
    console.error(`数据源 "${currentDataSource}" 不存在！`);
    return;
  }

  // 清空已有按钮，避免重复渲染
  Object.values(containers).forEach((container) => (container.innerHTML = ""));

  createButtons("DailyData", data.DailyData, currentDataSource);
  createButtons("AppData", data.AppData, currentDataSource);
  createButtons("IOSData", data.IOSData, currentDataSource);
  createButtons("WinData", data.WinData, currentDataSource);
  createButtons("MacData", data.MacData, currentDataSource);
  createButtons("AndroidData", data.AndroidData, currentDataSource);
}

// 预加载图片并更新进度条
function preloadImage(url, loadingText) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = () => {
      setTimeout(() => loadingText.remove(), 500);
      resolve(img);
    };
    img.onerror = (err) => {
      loadingText.textContent = "图片加载失败";
      reject(err);
    };
  });
}

// 创建按钮
function createButtons(containerId, data) {
  const container = containers[containerId];
  if (!container) return;

  container.innerHTML = ""; // 清空容器
  const keys = Object.keys(data);
  const btnList = [];

  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    const btn = document.createElement("button");
    btn.textContent = key;

    if (containerId !== "DailyData" && containerId !== "AppData") {
      btn.style.borderLeft = "2px solid black";
    } else if (containerId === "DailyData" && i < keys.length - checkLength) {
      btn.style.borderLeft = "2px solid black";
    }

    if (key.includes("图")) {
      if (!data[key]) continue;

      const loadingText = document.createElement("span");
      loadingText.textContent = "加载图片中...";
      loadingText.style.cssText = "display: block; font-size: 12px; text-align: center; margin-top: 5px; color: red";
      
      btn.appendChild(loadingText);
      preloadImage(data[key], loadingText);
      btn.onclick = () => copyImage(data[key], btn);
    } else {
      btn.onclick = () => copyToClipboard(data[key], btn);
    }

    btnList.unshift(btn);
  }

  btnList.forEach((btn) => container.appendChild(btn));
}

// 复制文本
function copyToClipboard(text, button) {
  if (button) button.disabled = true;
  document.body.style.pointerEvents = "none";

  navigator.clipboard
    .writeText(text)
    .then(() => {
      button.style.backgroundColor = "lime";
      setTimeout(() => {
        button.style.backgroundColor = "";
      }, 500);
    })
    .catch((err) => {
      alert("复制失败!");
      console.error("复制失败:", err);
    })
    .finally(() => {
      if (button) button.disabled = false;
      document.body.style.pointerEvents = "auto";
    });
}

// 复制图片
async function copyImage(value, button) {
  if (button) button.disabled = true;
  document.body.style.pointerEvents = "none";

  try {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = value;
    await img.decode();

    button.style.backgroundColor = "lime";
    setTimeout(() => {
      button.style.backgroundColor = "";
    }, 500);

    // 创建 Canvas 并绘制图片
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);

    // 转换为 Blob
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/png")
    );

    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
  } catch (err) {
    console.error("复制失败:", err);
    alert("复制失败! 可能是延迟或浏览器不支持, 重新复制下试试看");
  } finally {
    if (button) button.disabled = false;
    document.body.style.pointerEvents = "auto";
  }
}

// 跳转开发票文本
function fapiao() {
  window.open("http://fp.imwayson.com/", "_blank");
}

// 初始化
createSwitchButtons();
updateButtons();
