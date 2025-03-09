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
  setName(`upup`, `upup`, sourcesColor);
  document.body.insertBefore(buttonContainer, document.body.firstChild);
}

// 切换数据源
function setDataSource(source, btn) {
  setName(btn.textContent, source);
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.visibility = "visible";
  });
  if (dataSources[source]) {
    btn.style.visibility = "hidden";
    currentDataSource = source;
  }
  dataSourceTemp = source;
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

// 创建按钮
function createButtons(containerId, data) {
  const container = containers[containerId];
  if (!container) return;
  // 清空容器
  container.innerHTML = "";
  const keys = Object.keys(data);
  const btnList = [];
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    const btn = document.createElement("button");
    btn.textContent = key;
    if (key.includes("____"))
      btn.style.cssText =
        "background: white; box-shadow: none; pointer-events: none; display: block;";
    if (key.includes("图")) {
      btn.style.borderRight = "3px solid black";
      if (!data[key]) continue;
      preloadImage(data[key], btn, key);
      btn.onclick = () => copyImage(data[key], btn);
    } else {
      btn.onclick = () => copyToClipboard(data[key], btn);
    }
    btnList.unshift(btn);
  }
  btnList.forEach((btn) => container.appendChild(btn));
}

// 预加载图片并更新进度条
function preloadImage(url, btn, name) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    btn.textContent = "加载图片中...";
    btn.style.color = "orange";
    img.onload = () => {
      setTimeout(() => {
        btn.textContent = name;
        btn.style.color = "black";
      }, 500);
      resolve(img);
    };
    img.onerror = (err) => {
      btn.textContent = "图片加载失败";
      btn.style.cssText = "color: red";
      reject(err);
    };
  });
}

// 复制文本
function copyToClipboard(text, button) {
  button.style.backgroundColor = "lime";
  if (button) button.disabled = true;
  document.body.style.pointerEvents = "none";
  navigator.clipboard
    .writeText(text)
    .then(() => {
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
  if (!navigator.clipboard || !window.ClipboardItem) {
    alert("当前浏览器不支持图片复制到剪贴板");
    return;
  }
  if (button) {
    button.disabled = true;
    button.style.backgroundColor = "lime";
    setTimeout(() => (button.style.backgroundColor = ""), 500);
  }
  document.body.style.pointerEvents = "none";
  try {
    window.focus();
    const permissionStatus = await navigator.permissions.query({
      name: "clipboard-write",
    });
    if (permissionStatus.state === "denied") {
      throw new Error("无剪贴板写入权限");
    }
    const img = await loadImageWithFetch(value);
    const blob = await createImageBlob(img);
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
  } catch (err) {
    console.error("复制失败:", err);
    alert("复制失败! 请重试");
  } finally {
    if (button) button.disabled = false;
    document.body.style.pointerEvents = "auto";
  }
}

// 避免跨域问题
async function loadImageWithFetch(url) {
  const response = await fetch(url, { mode: "cors", credentials: "omit" });
  if (!response.ok) throw new Error("图片下载失败");
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(blob);
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("图片加载失败"));
  });
}

// 创建 Blob
async function createImageBlob(img) {
  const canvas = Object.assign(document.createElement("canvas"), {
    width: img.naturalWidth,
    height: img.naturalHeight,
  });
  canvas.getContext("2d").drawImage(img, 0, 0);
  return new Promise((resolve, reject) =>
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Canvas 转换失败"))),
      "image/png"
    )
  );
}

// 跳转开发票文本
function fapiao() {
  window.open("http://fp.imwayson.com/", "_blank");
}

// 初始化
createSwitchButtons();
updateButtons();
