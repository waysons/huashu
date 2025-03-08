//   -------------------- 域名 --------------------

cloudupup1 = `https://cloudupup.net`;
cloudupup2 = `https://up01.cloudupup17.com`;
cloudupup3 = `https://cloudupup.cc`;
cloudupup4 = `https://help.cloudupup.net`;
cloudupup5 = `https://106.52.178.206:9000/auth/login`;

idinshop = `https://idinshop.com/`;

banana1 = `https://banana-fast01.com/`;
banana2 = `https://web.yakoo.one/`;
banana3 = `https://go.bananapro.club/`;

flyint1 = `https://to.FlyintPro.com`;
flyint2 = `https://www.flyintpro04.com/`; // 默认可以导入的
flyint3 = `https://flyintpro06.com`;
flyint4 = `https://flyintpro06.pro`;
flyint31 = `https://node.flyintpro06.com`;

shaoshupai1 = `https://sspai.ink`;

miaomiao1 = `https://mm.yakoo.one/`;
miaomiao2 = `https://kda03.abcabclink.net/auth/login`;

//   -------------------- 通用 --------------------

const generalData = {
  咨询详细问题: `您好 方便截图发我看看吗? 或 提供更详细的信息 这边才方便给您排查核心问题`,
  GPT等账号销售: `这边有谷歌账号 / GPT3.5和4.0 / Apple ID
${idinshop}`,
  toDesk远程: `可以帮您远程仔细排查下
下载toDesk, 然后把首页 设备代码 发我
https://www.todesk.com/download.html
❗windows电脑不用设置
❗mac电脑需要要把三个权限都打开, todesk首页有红色提示引导`,
  开发票说明: `因为这边是海外公司, 所以无法开大陆发票, 但这边可以给您开invoice, 如果您需要的话, 写下您的 (公司全称) 和 (收款邮箱) 以及 (支付截图), 这边记录一下, 24小时内给您开, 请您耐心等待~`,
  致谢用户: `感谢您的支持和关注~~我们会继续加油的
遇到问题随时咨询我们~~我们会提供更好品质的服务！！!`,
  邮箱不存在: `为了用户的账户安全, 我们会在套餐过期一个月后会自动注销, 可以保障用户的个人信息安全, 您可以用原有的账号重新注册并购买即可~`,
  电脑开机没网: `这种情况大部分原因是因为关机的时候没正常退出软件 您可以手动设置下
1️⃣ 进入电脑设置 => 网络与Internet => 代理 => 将代理服务器关闭 (就恢复国内网络了)`,
  新疆地区: `新疆那边边境地区 很严格 官方封了不少新疆用户的宽带网络
换个客户端吧
${banana1}
这个可以注册试试看
注册有试用
看看节点是否适配自己的本地网络`,
  修改密码: `官网首页也可以通过忘记密码修改
或
提供账号给我们 这边帮您和技术申请
重置密码为1234
后续自行前往官网个人中心修改`,
  智能全局解释: `全局模式是指打开我们的软件后无论海外还是国内软件都走外流量 智能模式是国内软件走国内的流量，国外软件走我们软件的国外流量`,
  支付延迟了: `您好, 可能是今天支付宝和微信的海外支付都有延迟, 这边在海外用支付宝超时买东西都有延迟了
着急使用的话,  这边让技术给您优先补单.  有支付截图是可以随时补上的, 别担心. 这边会尽快给您补上`,
};
const cloudupupAppData = {
  iOS无法使用TK: `解决办法的操作步骤如下：
  (必要条件: 可以正常访问 youtube.com)
  
  第1️⃣步: 拔手机Sim卡
    (由于tiktok识别到国内的sim卡后，会屏蔽)
  第2️⃣步: 设置语言:将手机的语言切换成 非简体中文 即可 
  第3️⃣步: 关闭GPS定位
  
  完成上述步骤后即可正常使用tik tok了。
              
  注1：打开tiktok需要拔掉手机卡，打开后可以正常插卡使用
  注2：香港、印度、加拿大三个区域因Tiktok停止运营，所以连接上述三个区域依旧不能观看`,
  ins等软件风控: `ins、推特、tiktok、pinterest等软件的风控:
1️⃣ios手机确认 shadowrocket软件里第二行全局路由设置代理模式
2️⃣安卓、pc设备软件里规则设置全局模式、global模式
3️⃣如果之前您是台湾线路 以后一直用台湾来访问，不要一会台湾一会美国日本，频繁切换，也不要频繁不同设备不同过来来访问，都会触发风控，误以为你被盗号等
4️⃣长时间不活跃的账号也会容易被平台风控。

解决方法，去平台申诉验证您的邮箱信息等等，修改密码解决。如果不行，重新注册一个，然后遵守1-4来使用。`,
  WA电脑无法使用: `这里有来自网上很详细的教程
关于whatsAPP在clash中无法使用的情况: 
链接: https://www.bilibili.com/read/cv33297180/`,
  WA无法接收验证码: `前往浏览器访问 youtube.com 看看网络是否正常
您可以尝试打开全局模式后
用美国或日本的线路去发送验证码
一切正常且发送验证码成功了但仍无法收到
这可能是您的当地运营商给屏蔽了
您可以选择过段时间试试
或
上网进行查询下网络大神的解决办法
例如: https://www.bilibili.com/read/cv26605529/`,
  GPT无法使用: `GPT对大陆比较严格
线路需要选择 日本或美国节点
以及把代理软件的 全局模式 打开

(如果是Shadowrocket软件 把全局路由 改成 代理模式)`,
  Telegram转圈圈: `Telegram 群组不断转圈
说明：此情况是 Telegram 的限制，一天内若访问超过200个群组或者频道（点击打开就算访问，不需要加入），则会被限制24小时，被限制后无法通过链接打开任何群组或者频道

解决办法：只能等待24小时后再尝试访问或加入。
Ps: 以上提示为 Telegram 本身自带问题，并非我们软件跳出的错误提示或是限制`,
  Telegram连接中: `Telegram 群组显示连接中
说明：若您 Telegram 加入过多群组或是存在大量下载的进程，可能会导致访问时群组上方显示连接中，无法马上看见信息内容

解决办法：找到 Telegram 导航 → 找到到右下角的 “settings” 选项卡 → data and storage  → automatic media download → 将里面的内容全部关闭即可。
Ps: 以上提示为 Telegram 本身自带问题，并非我们软件跳出的错误提示或是限制`,
  X无法收到验证码: `登入帐号时收不到验证码 解决办法：
方法1️⃣：您可以在电脑设备连接快连后在浏览器中访问推特官网登录您的账号，再重新登入手机即可。
方法2️⃣：若以上方法无效，麻烦请您将系统语言更改为英文，再重新尝试一下就能够正常使用了
ps: 因为验证码是不需要网络的, 是运营商那边发送的短信, 这并非我们软件网络问题`,
  Adobe断网: `adobe断网教程: 
https://www.sohu.com/a/835843168_121849756

在日常使用Adobe的时候尽量别开VPN、因为有了VPN、adobe软件就能连上海外服务器、就会鉴别出来你这个不使用的正版、就会给你弹窗、禁止你使用`,
  ID常见问题: `Apple ID常见问题
Apple lD规范使用几乎不会出现被锁定，但以下情况可能会被Apple锁定
  1.同时提供太多设备、他人使用
  2.频繁更换使用地区
  3.账号不活跃，长期未使用
  4.多次输入错误的密码、密保问题
  5.频繁反复登录、登出账号
如果Apple ID被锁定，在Apple ID官网验证密保或密码即可解锁。如果提示停用则表示这个账号被封停禁用，基本无法找回和继续使用。
若你登录iCloud(我们不推荐你这样做)后无法退出设备，我们将无法提供任何支持，请自行联系Apple服务。`,
  过质保: `过质保的意思是我们卖给用户账号后 为了用户个人隐私安全 三天后就删除记录了 这边没有任何账号信息
如果您违反苹果规则 或 长时间不登陆导致被苹果官方封号之类的 这边无法提供任何帮助

您只能通过联系苹果客服找回了`,
};

//   -------------------- Cloudupup --------------------

const cloudupupSelfData = {
  最新官网域名: `请登陆以下官网:
永久域名: ${cloudupup1}
官网网址: ${cloudupup2}
备用网址: ${cloudupup3}
问题指南: ${cloudupup4}
🚫不要直接点击打开链接🚫
✅ 请手动复制去浏览器 ✅
          
官网可以及时联系到我们客服的噢~`,
  福建或其他用户: `试试这个看 ${cloudupup5}`,
  微信不添加好友: `复制去浏览器打开噢 ${cloudupup3} 登陆官网后右下角可以联系客服`,
  其他线路测速: `点击其他线路 点击小闪电 多点几个 有延迟数值吗?`,
  邀请返利: `请登陆以下官网:
永久域名: ${cloudupup1}
官网网址: ${cloudupup2}
备用网址: ${cloudupup3}
问题指南: ${cloudupup4}
🚫不要直接点击打开链接🚫
✅ 请手动复制去浏览器 ✅

您可以登陆官网 => 我的账号 => 邀请返利
把邀请返利有个"链接地址", 发给朋友去注册

如果对方无法打开 请使用新域名去打开
确保链接用的是最新的域名
例如: https://旧的官网/auth/register?code=ABCD
改成: https://新的域名/auth/register?code=ABCD

每次朋友购买都会有20%返利到您的账户,
满300可以提现也可以发工单,
或者转成余额,抵扣套餐费用哦~`,
  无优惠活动: `实在抱歉, 最近没什么活动
一般情况下节假日才有活动噢
        
目前年卡:190元 (月卡22元x12=264元)
年卡是月卡的7折，可以冲

我们有专线独享套餐,比其他产品的公网服务成本要高7-8倍
稳定性也是最好的，可以放心使用
且有任何疑惑都可以向我们咨询
同类产品价格基本都是翻倍，主打品质，感谢您的支持~
大流量和超大流量套餐 折扣更是划算~`,
  推荐关注: `我们有官方推特和Facebook账号了，上面会不定时更新如何注册及使用外网app的教程。 
如果有需要的教程，可对我们提出 会给大家安排。
推特账号: cloudupupvpn （https://x.com/cloudupupvpn）
Facebook账号: cloudupupvpn 
https://www.facebook.com/profile.php?id=61559661946393`,
  专线咨询: `专享线路为定制线路，定制线路688元起每月，一人专享一条企业级高速线路。
如果您想要定制的话需要先跟客服说您的线路需求后 我们会为您量身定制，
线路会在付款后的2-3天后为您开通。`,
};
const cloudupupDailyData = { ...cloudupupSelfData, ...generalData };

const cloudupupIOSData = {
  iOS安装教程文: `美区ID切换教程及安装小火箭教程:
  1️⃣ 请登陆以下官网:
  永久域名: ${cloudupup1}
  官网网址: ${cloudupup2}
  备用网址: ${cloudupup3}
  问题指南: ${cloudupup4}
  🚫不要直接点击打开链接🚫
  ✅ 请手动复制去浏览器 ✅
  
  2️⃣ 然后在主页 => 找到"iOS/iPad安装(美区共享ID)" 点击打开
      往下拉可以看到我们官网提供的 美区共享ID
  3️⃣ 在app store登陆美区ID后
  4️⃣ 会弹出安全验证, 选 其他选项 => 不升级
  (请不要在手机设置或其他地方登陆)
  ❗❗❗这里很重要❗❗❗
  
  ✅成功登陆后后✅
  5️⃣ 搜索shadowrocket（或您想要的其他软件）下载
  6️⃣ 下载完成后退出共享id （因为20分钟后会自动修改密码）
  
  ps. 步骤看起来多是因为非常的详细
      有任何问题随时联系客服`,
  iOS安装教程图: `./img/ios_shadowrocket.png`,
  iOS更新教程文: `1️⃣ 关闭连接。
2️⃣ 将全局路由改为 代理 模式
3️⃣ 删除全部节点线路
4️⃣ 使用苹果自带浏览器(safari)登录以下官网:
  永久域名: ${cloudupup1}
  官网网址: ${cloudupup2}
  备用网址: ${cloudupup3}
  问题指南: ${cloudupup4}
  🚫不要直接点击打开链接🚫
  ✅ 请手动复制去浏览器 ✅
5️⃣ 在官网找到"订阅更新", 直接点击后导入
  (或者 在官网拉到底部找到 Shadowrocket订阅 => 一键导入)
  🚫微信直接打开的官网无法导入, 请使用safari

注: 在选择国家的节点后 , 再打开连接即可使用`,
  iOS更新教程图: `./img/ios_update.png`,
  iOS手动更新: `访问最新官网 => 复制订阅地址 => 然后手动导入
以下是手动导入的图片教程
https://cloudupup01.org/images/prefix/03.jpg`,
  美区无法登陆: `美区id无法登录：
1️⃣如果是"无法登录"/"显示已锁定"/"双重验证"/"验证码", 您可以直接换个id登陆尝试即可
    (刷新网页即可出现新ID, 每30分钟刷新一次密码和账号)
2️⃣您需要手机用数据流量(或用手机开热点给ipad连接)
    因为美国app store是苹果内网，对大陆的宽带网络不友好，被中国限制，手机流量4g/5g网络可以
    (关闭代理软件)

ps: 美区共享ID在30分钟内退出(每30分钟更改一次密码)
在30分钟后官网重新登陆刷新一下, 页面就会刷新出新的共享ID 
---多使用新美区共享ID重新去登陆试试噢---`,
  共享ID位置图: `./img/ios_storeid.png`,
  iOS更新软件问题: `目前苹果新规则不允许不同的ID去更新软件了
您卸载重新下载软件即可继续试用
(有担心更新后没有聊天记录的问题, 可以提前备份)`,
};
const cloudupupWinData = {
  V2ray更新upup: `推荐使用新的客户端:cloudupup
  前往官网下载安装即可立刻使用:
  永久域名: ${cloudupup1}
  官网网址: ${cloudupup2}
  备用网址: ${cloudupup3}
  问题指南: ${cloudupup4}
  🚫不要直接点击打开链接🚫
  ✅ 请手动复制去浏览器 ✅
  
  1️⃣ 进入官网后 往下拉 找到Windows
  2️⃣ 点击 下载地址1 (地址2也可以)
  3️⃣ 下载后安装时选择 所有用户可用!
  4️⃣ 建议安装到默认地址c盘，不要改!`,
  upup使用教程图: `./img/cloudupup.png`,
  upup连接无反应: `尝试一下以下办法:
  1️⃣关闭并卸载所有安全软件和杀毒软件
  2️⃣尝试进入设置 => 关闭防火墙
  3️⃣尝试重装软件后 => 重启电脑
      (*把软件安装在C盘后)
  4️⃣在电脑的状态栏 右键cloudupup小图标
      并选"重启并清除配置"
  
  如果还是不行, 这边可以给您远程看一下
  下载toDesk, 发我 设备代码, 这边帮您排查下
  https://www.todesk.com/download.html
  (*windows电脑不用设置)
  (*mac电脑需要要把三个权限都打开, todesk首页有红色提示的`,
  Clash更新教程图: `./img/win_clash.png`,
  Clash更新教程文: `Clash教程:
  1️⃣进入以下官网：
  永久域名: ${cloudupup1}
  官网网址: ${cloudupup2}
  备用网址: ${cloudupup3}
  问题指南: ${cloudupup4}
  🚫不要直接点击打开链接🚫
  ✅ 请手动复制去浏览器 ✅
  
  2️⃣登陆个人账号后 -> 官网首页 -> 点击 Clash订阅 -> 使用一键导入即可
    *也可以使用复制订阅手动导入, 看图片教程`,
  Win设置电脑代理: `1️⃣ 进入电脑设置 => 网络与Internet => 代理 => 将代理服务器
-- 代理ip 设置为: 127️.0.0.1
-- 端口   设置为: 17890 
2️⃣ 保存成功后 尝试下网络是否恢复正常
  *重新进入第一步, 看看是否保存成功`,
  // 设置电脑代理图: ``,
  Win设置DNS: `Windows的DNS设置教程链接 https://zhuanlan.zhihu.com/p/305914414`,
  Win设置DNS图: `./img/win_dns.png`,
  右下角清除重启: `在电脑右下角的状态栏找到cloudupup小图标 => 点击cloudupup小图标 => 选择 重启并清除配置 => 试试看`,
  关闭代理: `进入电脑的设置 => 网络与Internet => 代理 => 关闭代理服务器`,
  电脑信任软件图: `./img/win_save.png`,
};
const cloudupupMacData = {
  upup使用教程图: `/img/cloudupup.png`,
  Mac安装使用upup: `推荐使用新的客户端:cloudupup
  新客户端更简洁的页面, 更方便的操作
  自动化更新, 内含永久客服, 官网账号密码登录即可。
  永久域名: ${cloudupup1}
  官网网址: ${cloudupup2}
  备用网址: ${cloudupup3}
  问题指南: ${cloudupup4}
  🚫不要直接点击打开链接🚫
  ✅ 请手动复制去浏览器 ✅
  
  ❗如果无法安装根据客服发的图片步骤来打开权限`,
  Mac无法安装图: `./img/mac_cloudupup.png`,
  Mac安装使用clash: `mac电脑安装/更新clash教程:
1️⃣ 先登陆官网后
永久域名: https://cloudupup.net
官网网址: up17.cloudupup17.com
备用网址: cloudupup.cc
问题指南: help.cloudupup.net
🚫 不要直接点击打开 🚫
✅请手动复制去浏览器✅
2️⃣ 往下拉找到mac的clash下载地址, 下载安装

✅安装完成后 打开clash✅: 
3️⃣ 在官网首页找到clash订阅地址
      点击clash订阅 => 一键导入即可
4️⃣ 右键clash后, 出站规则改为 全局模式 以及 global选一个节点
   *(确保把 设置为系统代理 勾上)`,
  Mac更新clash图: `./img/mac_clash.png`,
  Mac打开代理图: `./img/mac_proxy.png`,
  右下角清除重启: `在mac电脑的状态栏的右上角 => 点击cloudupup小图标 => 选择 重启并清除配置 => 试试看`,
};
const cloudupupAndroidData = {
  Android使用教程图: `./img/android_cloudupup.png`,
  Android安装下载: `推荐使用新的客户端:cloudupup
永久域名: ${cloudupup1}
官网网址: ${cloudupup2}
备用网址: ${cloudupup3}
问题指南: ${cloudupup4}
🚫不要直接点击打开链接🚫
✅ 请手动复制去浏览器 ✅

1️⃣ 登陆官网后, 找到安卓下载
2️⃣ 点击下载地址1 (下载地址2也可以)
3️⃣ 安装即可马上使用`,
  安卓无法使用: `安卓无法使用：
1️⃣多个软件冲突，造成权限被其他软件无法使用
解决：删除所有代理软件后，重启手机重装
2️⃣切换4g或者wifi试试，可能是路由器或者本地宽带有一些限制，或者第三方代理
3️⃣设备时间设置北京时间自动同步即可
4️⃣卸载反炸app等安全软件
5️⃣套餐过期

如果还解决不了，请提供更多的信息或截图以及视频，客服会尽快帮您解决！`,
  Android海外软件: `可以访问链接进行下载海外应用
打开代理软件才能访问
https://apkpure.com
(以上网址请复制去浏览器打开~)`,
  谷歌商店下载: `谷歌商店无法下载："
1️⃣ 清除Play商店和谷歌三件套的应用数据和缓存
  点击 个人设置，点击 应用，找到谷歌Play商店 、谷歌服务框架等应用。按 清除缓存数据，然后全局模式启动VPN尝试。
2️⃣ 新机内置 Play 为原厂预置中国版框架，需要去 apkpure 或者 apkmirror 下一个版本更新的正常谷歌三件套来框架来覆盖安装。
  下载地址：https://github.com/hideuvpn/android-google-play-store

或者也可以尝试，把现有google三件套，包括谷歌商店、谷歌框架、谷歌服务的缓存都清空，然后全局模式下，试试，一般都可以解决的。`,
  小米无法安装: `请您根据以下步骤完成设置即可安装成功：
1️⃣ 在手机找到设置 ; 
2️⃣ 找到更多设置后，找到开发者选项 ; 
3️⃣ 关闭开发者选项里的最下面的 "MIUI优化" 高风险功能提醒 ; 
4️⃣ 若安装有提示需要输入密码，请输入自己的小米帐号密码即可`,
  华为无法安装: `请您根据以下步骤完成设置即可安装成功：
1️⃣ 找到在手机设置 ; 
2️⃣ 找到 系统和更新 ; 
3️⃣ 找到 纯净模式 ; 
4️⃣ 点击 退出 `,
};

//   -------------------- 香蕉 --------------------

const bananaSelfData = {
  最新官网域名: `官网链接-永久域名: ${banana1}
备用付款地址: ${banana2}price
             (如果safari浏览器可能打开支付, 改用谷歌浏览器)
下载地址: ${banana3}

有任何问题可以随时官网右下角联系客服噢`,
  修改密码: `打开官网${banana1}登录你的账号
进入用户中心后点击修改密码进行修改

如果忘记了密码可以在官网首页点击忘记密码通过邮箱找回密码

如果都忘记了可以提供支付截图给我们这边从订单号帮您找回账号去重置密码为1234`,
  邀请返利: `邀请方式：
打开邀请界面${banana1}user/invite
复制邀请链接发送给您的好友，
好友以默认浏览器或谷歌浏览器打开链接注册会获得4元余额奖励用于套餐付费抵值
好友付费您可以获得付费金额20%的返利
满500元可以虚拟货币方式提现 或在官网充值抵值
返利可能会有延迟，如没有到账请联系人工客服`,
  套餐优惠: `
我们最近的优惠活动都写在这里，请复制下述域名到浏览器打开，然后登陆后即可看到活动内容。（因为qq或者微信无法直接打开网站域名，必须复制到浏览器才能打开）
https://banana-fast01.com
您可以选购一下。
这边不支持优惠码的形式兑换了
都是直接发布活动套餐噢
可以直接在浏览器访问官网去购买`,
};
const bananaDailyData = { ...bananaSelfData, ...generalData };
const bananaAppData = cloudupupAppData;
const bananaIOSData = {};
const bananaWinData = {
  电脑信任软件图: `./img/win_save.png`,};
const bananaMacData = {};
const bananaAndroidData = {};

//   -------------------- 飞数 --------------------

const flyintSelfData = {
  最新官网域名: `请收藏好网站发布页哦
${flyint1}
PS:点击link1 或 link2 即可跳转到官网`,
  订阅问题: `把订阅连接的域名 >> ${flyint31} 替换成 
${flyint2}
或者
${flyint3} `,
  复制订阅重新导入: `您试试改下您的订阅地址去重新导入下
复制订阅地址出来  然后把 旧域名 换成 新域名
新域名为: ${flyint2}
(后面的不变 只需要改动域名)
例如: https://旧的域名/api/v1/client/subscribe?token=1234567890
改成: https://新的域名/api/v1/client/subscribe?token=1234567890

或者 

订阅地址发我看看, 这边帮您排查下噢`,
  无优惠活动: `实在抱歉, 最近没什么活动
一般情况下节假日才有活动噢 可以随时关注官网公告即可`,
  套餐问题: `同一个套餐可以叠加，不同套餐只会重置。(200G和500G 不限时流量，不是同一个套餐）
  如果是续费同一个套餐的话，（尤其不限时的）请截图发给客服当前剩余流量。以及已购买套餐的支付凭证
  ！！支付凭证需带商户！！！`,
  USDT付款: `${idinshop}buy/9
  到上方按照套餐价格拍一下，拍完给我发支付截图。如微信或支付宝含有商户的截图哦
  或者是USDT支付成功的截图`,
};
const flyintDailyData = { ...flyintSelfData, ...generalData };
const flyintAppData = cloudupupAppData;
const flyintIOSData = {
  ios更新订阅: `1. 关闭Shadowrocket连接。
2. 在小火箭首页=>从右往左滑=>删除旧线路
3. 使用苹果自带浏览器登录以下官网:
${flyint2}

4. 在官网底部找到订阅地址
登录网站 -> 仪表盘 ->捷径-> 一键订阅 -> 复制订阅地址
5. 返回小火箭 => 右上角+号，类型选：subscribe，URL的地方粘贴。
6. 选择任何国家的节点, 将全局路由改为 代理 模式
然后打开 连接 即可继续使用

(复制去浏览器打开~)`,
};
const flyintWinData = {
  clash使用教程: `clash使用教程
1. 登录官网，主页下方有使用教程，点击进去即可看到对应的客户端。
${flyint1}
2. 安装完成后，点击官网主页下方的一键订阅，选择导入到clash的选项即可

电脑的请解压到：C盘>>program file>>clash， 然后右键以管理员身份运行`,
  clash排查问题: `请按照以下方法排查，
1. 确保是安装在C盘program file里面
2. 如果不是在C盘的话，请移到C盘program file 右键以管理员模式运行
3. 不支持新疆或海外地区使用，如果您是以上地区请提供支付截图给我。这边给您转到可用平台
4. 退出杀毒软件，打开clash>>tun模式，然后打开控制面板》》网络与共享中心》》clash，点击一下》》属性》》ipv4》》全选自动
5. 请确保用的是最新订阅地址， ${flyint2} 这里重新导入的`,
  Win设置DNS: `DNS设置教程链接 https://zhuanlan.zhihu.com/p/305914414`,
  电脑信任软件图: `./img/win_save.png`,
};
const flyintMacData = {};
const flyintAndroidData = {
  安卓clash: `1. 登录官网，主页下方有使用教程，点击进去即可看到对应的客户端。
${flyint1}
2. 安装完成后，点击官网主页下方的一键订阅，选择导入到clash的选项即可

电脑的请解压到：C盘>>program file>>clash， 然后右键以管理员身份运行`,
};

//   -------------------- 少数派 --------------------

const shaoshupaiSelfData = {
  最新官网域名: `少数派的最新网址是：${shaoshupai1}`,
};
const shaoshupaiDailyData = { ...flyintSelfData, ...generalData };
const shaoshupaiAppData = cloudupupAppData;
const shaoshupaiIOSData = {};
const shaoshupaiWinData = {
  电脑信任软件图: `./img/win_save.png`,};
const shaoshupaiMacData = {};
const shaoshupaiAndroidData = {};

//   -------------------- 喵喵 --------------------

const miaomiaoSelfData = {
  最新官网域名: `永久官网: ${miaomiao1}
登陆官网: ${miaomiao2}
下载地址: ${miaomiao1}download
这是我们最新的官网 可以在这购买套餐 或 下载软件使用噢

有任何问题随时咨询我们噢`,
};
const miaomiaoDailyData = { ...miaomiaoSelfData, ...generalData };
const miaomiaoAppData = cloudupupAppData;
const miaomiaoIOSData = {
  iOS下载: `这是我们的最新客户端 都是同步互通的 您看下这个教程噢
${miaomiao1}ios
教程有提供共享ID去登陆app store
登陆成功后可以直接下载客户端我们客户端
也可以用共享ID下载海外软件
下载完成后要及时退出噢`,
};
const miaomiaoWinData = {
  电脑信任软件图: `./img/win_save.png`,};
const miaomiaoMacData = {
  Mac扩展: `mac扩展:
1. 下载软件安装后 点击安装扩展 然后进入电脑的设置 => 通用 => 登陆与扩展 => 网络扩展 => 找到miaomiao => 打开
2.试试也打开下这个权限 => 点击"隐私与安全性"》"完全磁盘访问权限"》 打开BananaTun的按钮，然后就能使用喵喵啦

有任何问题随时咨询我们噢`,
};
const miaomiaoAndroidData = {};
