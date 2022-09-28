export const ICONS = [
  // 通用图标
  { name: 'star-full', text: '满星', category: 'universal' },
  { name: 'star-half', text: '半星', category: 'universal' },
  { name: 'star-empty', text: '空星', category: 'universal' },
  { name: 'eye-open', text: '睁眼', category: 'universal' },
  { name: 'eye-close', text: '闭眼', category: 'universal' },
  { name: 'clear', text: '清除', category: 'universal' },
  { name: 'more', text: '更多', category: 'universal' },
  { name: 'finish', text: '完成', category: 'universal' },
  { name: 'current', text: '当前', category: 'universal' },
  { name: 'global', text: '国际', category: 'universal' },
  { name: 'grid', text: '菜单', category: 'universal' },
  { name: 'apps', text: '菜单', category: 'universal' },
  { name: 'burger', text: '菜单', category: 'universal' },
  { name: 'setting', text: '设置', category: 'universal' },
  { name: 'download', text: '下载', category: 'universal' },
  { name: 'upload', text: '上传', category: 'universal' },
  { name: 'spinning', text: '加载中', category: 'universal' },
  { name: 'ringing', text: '加载中', category: 'universal' },
  // 数学
  { name: 'plus', text: '加', category: 'math' },
  { name: 'minus', text: '减', category: 'math' },
  { name: 'times', text: '乘', category: 'math' },
  { name: 'division', text: '除', category: 'math' },
  { name: 'percent', text: '百分号', category: 'math' },
  // 方向
  { name: 'arrow-up', text: '上', category: 'direction' },
  { name: 'arrow-right', text: '右', category: 'direction' },
  { name: 'arrow-down', text: '下', category: 'direction' },
  { name: 'arrow-left', text: '左', category: 'direction' },
  { name: 'narrow-up', text: '上', category: 'direction' },
  { name: 'narrow-right', text: '右', category: 'direction' },
  { name: 'narrow-down', text: '下', category: 'direction' },
  { name: 'narrow-left', text: '左', category: 'direction' },
  // 通知
  { name: 'info', text: '消息', category: 'notification' },
  { name: 'success', text: '成功', category: 'notification' },
  { name: 'warning', text: '警告', category: 'notification' },
  { name: 'error', text: '错误', category: 'notification' },
  // 电商
  { name: 'coupon', text: '优惠券', category: 'ec' },
  { name: 'coin', text: '金币/积分', category: 'ec' },
  { name: 'cart', text: '购物车', category: 'ec' },
  { name: 'wallet', text: '钱包', category: 'ec' },
  { name: 'stamp', text: '印章', category: 'ec' },
  { name: 'date', text: '日期', category: 'ec' },
  { name: 'time', text: '时间', category: 'ec' },
  { name: 'timer', text: '计时器', category: 'ec' },
  { name: 'tag', text: '标签', category: 'ec' },
  { name: 'flame', text: '火', category: 'ec' },
  // 社交
  { name: 'share', text: '分享', category: 'social' },
  { name: 'flag', text: '旗', category: 'social' },
  { name: 'message', text: '消息', category: 'social' },
  { name: 'idea', text: '想法', category: 'social' },
  { name: 'mouse', text: '鼠标', category: 'social' },
  { name: 'keyboard', text: '键盘', category: 'social' },
  { name: 'mail', text: '邮件', category: 'social' },
  { name: 'power', text: '电源开关', category: 'social' },
  { name: 'aim', text: '目标', category: 'social' },
  { name: 'trophy', text: '奖杯', category: 'social' },
  { name: 'medal', text: '奖牌', category: 'social' },
  { name: 'award', text: '徽章', category: 'social' },
  { name: 'discover', text: '发现', category: 'social' },
  { name: 'position', text: '定位', category: 'social' },
  { name: 'map', text: '地图', category: 'social' },
  { name: 'key', text: '钥匙', category: 'social' },
  { name: 'lock', text: '锁', category: 'social' },
  { name: 'lock-open', text: '锁（开）', category: 'social' },
  { name: 'qr', text: '二维码', category: 'social' },
  { name: 'pay-qr', text: '支付二维码', category: 'social' },
  { name: 'barcode', text: '条形码', category: 'social' },
  { name: 'scan', text: '扫描', category: 'social' },
  // 后台
  { name: 'create', text: '创建', category: 'backstage' },
  { name: 'edit', text: '编辑', category: 'backstage' },
  { name: 'delete', text: '删除', category: 'backstage' },
  { name: 'paperclip', text: '回形针', category: 'backstage' },
  { name: 'person', text: '人', category: 'backstage' },
  { name: 'usb', text: 'USB', category: 'backstage' },
  { name: 'dashboard', text: '控制台', category: 'backstage' },
  { name: 'dashpad', text: '控制台', category: 'backstage' },
  { name: 'statistics', text: '统计', category: 'backstage' },
  // RnD
  { name: 'git', text: 'Git', category: 'rnd' },
  { name: 'branch', text: '分支', category: 'rnd' },
  { name: 'commit', text: '提交', category: 'rnd' },
  { name: 'merge', text: '合并', category: 'rnd' },
  { name: 'pull-request', text: 'PR', category: 'rnd' },
  { name: 'layers', text: '层/涂层', category: 'rnd' },
  { name: 'app-store', text: '苹果应用商店', category: 'rnd' },
  { name: 'googleplay', text: '谷歌应用商店', category: 'rnd' },
  { name: 'bug', text: '缺陷', category: 'rnd' },
  { name: 'buffer', text: '缓冲', category: 'rnd' },
  { name: 'guide', text: '指南', category: 'rnd' },
  // 品牌
  { name: 'apple', text: '苹果', category: 'brand' },
  { name: 'android', text: '安卓', category: 'brand' },
  { name: 'telegram', text: 'Telegram', category: 'brand' },
  { name: 'google', text: '谷歌', category: 'brand' },
  { name: 'facebook', text: 'Facebook', category: 'brand' },
  { name: 'twitter', text: '推特', category: 'brand' },
  { name: 'weibo', text: '微博', category: 'brand' },
  { name: 'wechat', text: '微信', category: 'brand' },
  { name: 'qq', text: '腾讯 QQ', category: 'brand' },
  { name: 'instagram', text: 'Instagram', category: 'brand' },
  { name: 'tik-tok', text: '抖音', category: 'brand' },
  { name: 'redbook', text: '小红书', category: 'brand' },
  { name: 'hangouts', text: 'Hangouts', category: 'brand' },
  { name: 'mi', text: '小米', category: 'brand' },
  { name: 'disney', text: '迪士尼', category: 'brand' },
  { name: 'skype', text: 'Skype', category: 'brand' },
  { name: 'taobao', text: '淘宝', category: 'brand' },
  { name: 'amazon', text: '亚马逊', category: 'brand' },
  { name: 'ebay', text: '易贝', category: 'brand' },
  { name: 'davinci-latex', text: '达芬奇', category: 'brand' },
  { name: 'funplus', text: 'FunPlus', category: 'brand' },
  { name: 'airbnb', text: 'Airbnb', category: 'brand' },
  { name: 'bitcoin', text: '比特币', category: 'brand' },
  { name: 'codeopen', text: 'codeOpen', category: 'brand' },
  { name: 'behance', text: 'Bēhance', category: 'brand' },
  { name: 'pinterest', text: 'Pinterest', category: 'brand' },
  { name: 'steam', text: 'Steam', category: 'brand' },
  { name: 'playstation', text: 'PlayStation', category: 'brand' },
  { name: 'nintendo-switch', text: '任天堂 Switch', category: 'brand' },
  { name: 'confluence', text: 'Confluence', category: 'brand' },
  { name: 'youtube', text: 'YouTube', category: 'brand' },
  { name: 'icon-apron', text: 'IconApron', category: 'brand' },
  // 媒体
  { name: 'play', text: '播放', category: 'media' },
  { name: 'pause', text: '暂停', category: 'media' },
  { name: 'prev', text: '上一首', category: 'media' },
  { name: 'next', text: '下一首', category: 'media' },
  { name: 'stop', text: '停止', category: 'media' },
  { name: 'fullscreen', text: '全屏', category: 'media' },
  { name: 'volume-0', text: '音量-0', category: 'media' },
  { name: 'volume-1', text: '音量-1', category: 'media' },
  { name: 'volume-2', text: '音量-2', category: 'media' },
  { name: 'volume-mute', text: '静音', category: 'media' },
  { name: 'volume-increase', text: '音量+', category: 'media' },
  { name: 'volume-decrease', text: '音量-', category: 'media' },
  // 支付
  { name: 'wechatpay', text: '微信支付', category: 'payment' },
  { name: 'alipay', text: '支付宝', category: 'payment' },
  { name: 'paypal', text: 'PayPal', category: 'payment' },
  { name: 'union-pay', text: '中国银联', category: 'payment' },
  { name: 'american-express', text: '美国运通', category: 'payment' },
  { name: 'mastercard', text: '万事达', category: 'payment' },
  { name: 'visa', text: 'VISA', category: 'payment' },
  { name: 'jcb', text: 'JCB', category: 'payment' },
  { name: 'apple-pay', text: 'Apple Pay', category: 'payment' },
  { name: 'google-pay', text: 'Google Pay', category: 'payment' }
]

export const CATEGORYS = [
  { name: 'universal', text: '通用图标' },
  { name: 'math', text: '数学' },
  { name: 'direction', text: '方向' },
  { name: 'notification', text: '通知' },
  { name: 'ec', text: '电商' },
  { name: 'social', text: '社交' },
  { name: 'backstage', text: '后台' },
  { name: 'rnd', text: 'RnD' },
  { name: 'brand', text: '品牌' },
  { name: 'media', text: '媒体' },
  { name: 'payment', text: '支付' }
]

export function RenderAsList (keyword) {
  // 渲染成列表
  // 暂时不写 keyword 筛选
  const ret = []
  CATEGORYS.map(CY => {
    const obj = {
      ...CY,
      children: []
    }
    ICONS.map(IN => {
      if (CY.name === IN.category) {
        obj.children.push(IN)
      }
    })
    if (obj.children.length > 0) {
      ret.push(obj)
    }
  })
  return ret
}
