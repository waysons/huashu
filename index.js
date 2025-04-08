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
// 缓存图片
const imageCache = new Map();

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
    if (key.includes("____")) {
      btn.textContent = "";
      btn.style.cssText =
        "height: 0; margin:0; background: white; box-shadow: none; pointer-events: none; display: block;";
    }
    if (key.includes("图")) {
      btn.style.borderRight = "5px solid black";
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
async function preloadImage(url, btn, name) {
  return new Promise(async (resolve, reject) => {
    if (imageCache.has(url)) {
      btn.textContent = name;
      btn.style.color = "black";
      return resolve(imageCache.get(url)); // 返回缓存的 Blob
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    btn.textContent = "加载图片中...";
    btn.style.color = "orange";

    img.onload = async () => {
      try {
        const blob = await createImageBlob(img); // 转换为 Blob
        imageCache.set(url, blob); // 存入缓存
        setTimeout(() => {
          btn.textContent = name;
          btn.style.color = "black";
        }, 500);
        resolve(blob);
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = (err) => {
      btn.textContent = "图片加载失败";
      btn.style.cssText = "color: red";
      reject(err);
    };
  });
}


// 复制文本
async function copyToClipboard(text, button) {
  button.style.backgroundColor = "green";
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

  try {
    let blob;
    if (imageCache.has(value)) {
      blob = imageCache.get(value); // 直接使用缓存 Blob
    } else {
      blob = await preloadImage(value, button, "图片");
    }

    if (!(blob instanceof Blob)) {
      throw new Error("缓存中的图片不是 Blob");
    }

    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);

    if (button) {
      button.disabled = true;
      button.style.backgroundColor = "green";
      setTimeout(() => {
        button.disabled = false;
        button.style.backgroundColor = "";
      }, 500);
    }
  } catch (err) {
    console.error("复制失败:", err);
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
  window.open("http://fp.wayson.work/", "_blank");
}

// 更换新的微信背景图
async function wechatBackground() {
  const tc = document.getElementById("tempContainer");
  const wechatSpan = tc.getElementsByTagName("span")[1];

  let wechatText = wechatSpan.textContent;
  wechatSpan.textContent = "复制中...";

  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 850;
  const ctx = canvas.getContext("2d");

  // 填充背景色
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 铺上文本
  ctx.fillStyle = "black";
  ctx.font = "bolder 18px SimHei";
  ctx.fillText(title, 5, 330);
  ctx.fillText(title1, 25, 370);
  ctx.fillText(title2, 25, 400);
  ctx.fillText(title3, 25, 430);
  ctx.fillStyle = "blue";
  ctx.fillText(cloudupup1, 110, 370);
  ctx.fillText(cloudupup2, 110, 400);
  ctx.fillText(cloudupup3, 110, 430);
  ctx.fillStyle = "red";
  ctx.fillText(note1, 100, 480);
  ctx.fillStyle = "black";
  ctx.fillText(note2, 5, 510);
  ctx.fillText(note3, 5, 540);

  try {
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/png")
    );
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    wechatSpan.textContent = "复制成功了、到微信粘贴图片即可";
    setTimeout(() => (wechatSpan.textContent = wechatText), 1000);
  } catch (error) {
    console.error("复制图片失败:", error);
    alert("复制失败，可能是浏览器不支持！");
  }
}

// 初始化
createSwitchButtons();
updateButtons();
