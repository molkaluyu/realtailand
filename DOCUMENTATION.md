# 瑞尔泰国物流网站 文档

此文档概述项目的目录结构、主要功能说明以及关键代码示例，帮助快速了解并使用本项目。

---

## 一、项目结构

```text
瑞尔泰国物流网站/
├── index.html          # 主HTML文件，页面结构与内容
├── css/
│   └── styles.css      # 样式文件，包含布局与主题色定义
├── js/
│   └── main.js         # 脚本文件，实现语言切换、轮播、动画及表单交互
├── images/             # 图片资源文件夹，用于存放Logo、背景图及案例图等
└── README.md           # 项目说明文件，包含使用说明与图片资源建议
```

---

## 二、主要功能概述

- 响应式设计：支持各类设备与屏幕尺寸
- 英文/泰文切换：点击按钮即可切换页面语言
- 瀑布流布局：项目案例区域使用CSS列布局实现瀑布流效果
- 数据统计动画：页面滚动时触发数字增量动画
- 滚动动画效果：元素进入视口时触发渐显动画
- 联系表单验证：包含必填校验和邮箱格式验证

---

## 三、关键代码示例

### 1. `index.html`
```html
<!-- 导航与语言切换按钮 -->
<header>
  <div class="container">
    <nav class="menu">
      <!-- 英文菜单 -->
      <a href="#" class="en active">Home</a>
      <!-- 泰文菜单，初始隐藏 -->
      <a href="#" class="th" style="display:none;">หน้าแรก</a>
      <!-- 省略其他菜单项... -->
    </nav>
    <!-- 语言切换按钮组 -->
    <div class="language-switch">
      <button id="en-btn" class="active">EN</button>
      <button id="th-btn">TH</button>
    </div>
  </div>
</header>
```

### 2. `css/styles.css`
```css
:root {
  --primary-color: #0f4c81;   /* 深蓝色：主色调 */
  --secondary-color: #e36c0a; /* 橙色：辅助强调色 */
  --accent-color: #1a7cbd;    /* 亮蓝色：强调色 */
}

/* 瀑布流布局样式 */
.waterfall-grid {
  column-count: 3;     /* 默认三列 */
  column-gap: 20px;    /* 列间距 */
}

@media (max-width: 992px) {
  .waterfall-grid {
    column-count: 2;   /* 中等屏幕两列 */
  }
}

@media (max-width: 576px) {
  .waterfall-grid {
    column-count: 1;   /* 小屏幕一列 */
  }
}
```

### 3. `js/main.js`
```js
// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
  // 语言切换元素
  const enElements = document.querySelectorAll('.en');
  const thElements = document.querySelectorAll('.th');
  
  // 切换到英文函数
  function switchToEnglish() {
    enElements.forEach(el => el.style.display = 'block'); // 显示英文
    thElements.forEach(el => el.style.display = 'none'); // 隐藏泰文
  }
  
  // 切换到泰文函数
  function switchToThai() {
    enElements.forEach(el => el.style.display = 'none');
    thElements.forEach(el => el.style.display = 'block');
  }
  
  // 绑定按钮事件
  document.getElementById('en-btn').addEventListener('click', switchToEnglish);
  document.getElementById('th-btn').addEventListener('click', switchToThai);

  // 初始化轮播
  if ($('.hero-slider').length) {
    $('.hero-slider').slick({ /* 省略配置... */ });
  }

  // 数据统计动画（滚动触发）
  // ... 省略动画实现代码 ...

  // 联系表单提交验证
  const contactForm = document.getElementById('contactForm');
  contactForm && contactForm.addEventListener('submit', e => {
    e.preventDefault();
    // 验证必填和邮箱格式
    // ... 省略验证逻辑 ...
  });
});
```

---

## 四、使用说明

1. 克隆或下载项目到本地
2. 在 `images/` 文件夹中添加Logo、背景图及案例图等资源
3. 使用浏览器打开 `index.html` 进行预览
4. 点击页面右上角的 `EN`/`TH` 按钮切换语言

---

## 五、联系方式

如需定制或有其他问题，请联系：

```
Email: info@realthailand.com
```

## 六、图片尺寸要求

- 轮播图：建议使用1920×1080像素（16:9比例）或更高分辨率的高清图，文件大小建议控制在200KB以内，推荐使用JPEG或WebP格式。
- 移动端：建议使用宽度至少768px的响应式图片，并使用 `srcset` 属性提供多种分辨率的图像以适配不同设备。 