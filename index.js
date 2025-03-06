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
setName(`upup`, `upup`);

// 切换数据源
function setDataSource(source, btn) {
  // 设置名称显示
  setName(btn.textContent, source);

  // 显示所有按钮
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.visibility = "visible"; // 恢复所有按钮显示
  });

  // 隐藏当前点击的按钮
  if (dataSources[source]) {
    btn.style.visibility = "hidden"; // 隐藏当前按钮
    currentDataSource = source;
  }

  // 更新数据源临时存储
  dataSourceTemp = source;

  // 更新按钮显示
  updateButtons();
}

// 预加载图片并更新进度条
function preloadImage(url, progressBarContainer, progressBar) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // 避免跨域问题
    img.src = url;

    img.onload = () => {
      progressBar.style.width = "0%";
      setTimeout(() => {
        progressBarContainer.remove();
      }, 500);
      resolve(img);
    };

    img.onerror = (err) => {
      progressBar.style.backgroundColor = "gray";
      reject(err);
    };

    // 模拟加载进度
    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= 90) {
        clearInterval(interval);
      } else {
        progress += 10;
        progressBar.style.width = progress + "%"; // 修正进度百分比
      }
    }, 300);
  });
}

// 隐藏按钮
function setName(name, s) {
  const h5 = document.getElementById("nameContainer");
  h5.textContent = name + "快捷回复";
  h5.style.color = "white"
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

// 创建按钮
function createButtons(containerId, data) {
  const container = containers[containerId];
  if (!container) return;

  container.innerHTML = ""; // 清空容器

  Object.keys(data).forEach((key) => {
    const btn = document.createElement("button");
    btn.textContent = key;

    if(key.includes("最新官网域名")){
      btn.style.background = `red`
    }

    if (key.includes("图")) {
      // 处理图片按钮
      if (data[key] == `` || data[key] == null) {
        return;
      }

      const progressBarContainer = document.createElement("div");
      progressBarContainer.style.cssText =
        "width: 100%; height: 10px; background-color: lightgray; position: relative; margin-bottom: 10px;";

      const progressText = document.createElement("span");
      progressText.textContent = "图片加载中...";
      progressText.style.cssText =
        "position: absolute; width: 100%; text-align: center; font-size: 12px;";

      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";
      progressBar.style.cssText =
        "width: 0; height: 100%; background-color: green;";

      progressBarContainer.appendChild(progressText);
      progressBarContainer.appendChild(progressBar);
      btn.appendChild(progressBarContainer);

      preloadImage(data[key], progressBarContainer, progressBar);
      btn.onclick = () => copyImage(data[key], btn);
    } else {
      // 处理文本按钮
      btn.onclick = () => copyToClipboard(data[key], btn);
    }

    container.appendChild(btn);
  });
}

// 更新按钮
function updateButtons() {
  const data = dataSources[currentDataSource]; // 获取当前数据源的数据
  if (!data) {
    console.error(`数据源 "${currentDataSource}" 不存在！`);
    return;
  }

  // 清空已有按钮，避免重复渲染
  Object.values(containers).forEach((container) => (container.innerHTML = ""));

  createButtons("DailyData", data.DailyData);
  createButtons("AppData", data.AppData);
  createButtons("IOSData", data.IOSData);
  createButtons("WinData", data.WinData);
  createButtons("MacData", data.MacData);
  createButtons("AndroidData", data.AndroidData);
}

// 创建切换数据源按钮
function createSwitchButtons() {
  const buttonContainer = document.createElement("div");
  buttonContainer.style.marginBottom = "20px";

  const sources = ["upup", "banana", "flyint", "ssp", "miao"];
  sources.forEach((source) => {
    const btn = document.createElement("button");
    btn.textContent = `${source}`;
    switch (btn.textContent) {
      case "upup":
        btn.style.background = "red";
        btn.style.visibility = "hidden";
        previousButton = btn;
        setName("upup");
        break;
      case "banana":
        btn.style.background = "gold";
        break;
      case "flyint":
        btn.style.background = "slateblue";
        break;
      case "ssp":
        btn.style.background = "royalblue";
        break;
      case "miao":
        btn.style.background = "slategray";
        break;
    }
    btn.onclick = () => setDataSource(source, btn);
    buttonContainer.appendChild(btn);
  });

  document.body.insertBefore(buttonContainer, document.body.firstChild);
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

// 跳转开发票文本
function fapiao() {
  window.open("http://fp.imwayson.com/", "_blank");
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

// 初始化
createSwitchButtons();
updateButtons();
