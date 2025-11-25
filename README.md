# 璞哥游戏 - 小说网站

这是一个用于展示"璞哥游戏"系列小说的静态网站。

## 功能特点

- 🎨 **暗黑主题设计** - 符合小说惊悚氛围的视觉风格
- 📱 **响应式布局** - 支持手机、平板和桌面设备
- 📖 **Markdown 渲染** - 自动将 MD 文件渲染为美观的 HTML
- 💾 **阅读进度记忆** - 自动保存上次阅读的章节
- ⌨️ **键盘导航** - 支持左右箭头键切换章节
- ✨ **流畅动画** - 章节切换时的淡入效果

## 文件结构

```
璞哥游戏/
├── index.html              # 主页面
├── style.css               # 样式文件
├── script.js               # 交互脚本
├── README.md               # 说明文档
├── 开局·铁幕降临.md        # 第一章
├── 迷阵·结盟与裂缝.md      # 第二章
├── 厮杀·背叛溢血.md        # 第三章
├── 黑幕·璞哥的手.md        # 第四章
└── 反转·胜利的代价.md      # 第五章
```

## 使用方法

### 方法一：直接打开（推荐）

1. 直接双击 `index.html` 文件
2. 网页会在浏览器中打开

### 方法二：使用本地服务器

如果直接打开遇到跨域问题，可以使用本地服务器：

```bash
# 使用 Python 3
python3 -m http.server 8000

# 使用 Python 2
python -m SimpleHTTPServer 8000

# 使用 Node.js (需要先安装 http-server)
npx http-server -p 8000
```

然后在浏览器中访问: `http://localhost:8000`

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式和动画
- **JavaScript (ES6+)** - 交互逻辑
- **Marked.js** - Markdown 解析库

## 自定义

### 修改颜色主题

在 `style.css` 的 `:root` 部分修改 CSS 变量：

```css
:root {
  --primary-color: #1a1a1a;
  --accent-color: #c41e3a; /* 主题色 */
  /* ... 其他颜色变量 */
}
```

### 添加新章节

1. 将新的 Markdown 文件放在同一目录下
2. 在 `index.html` 的导航栏中添加按钮：

```html
<button class="nav-btn" data-file="新章节.md">新章节标题</button>
```

3. 在 `script.js` 的 `chapters` 数组中添加文件名

## 浏览器兼容性 特别好

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 许可

© 2025 璞哥游戏 版权所有
