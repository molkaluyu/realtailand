# 瑞尔泰国物流网站

这是一个专业的瑞尔泰国物流公司响应式网站，提供英文和泰文双语切换功能，主页采用瀑布流布局展示物流解决方案。

## 网站功能

- 响应式设计，适配各种设备屏幕尺寸
- 英文/泰文语言切换功能
- 瀑布流风格的物流解决方案展示
- 数据统计展示区域
- 平滑滚动和动画效果
- 联系表单功能
- 现代化的UI设计，参考瑞尔物流官方网站色彩方案

## 文件结构

```
瑞尔泰国物流网站/
├── index.html          # 主HTML文件
├── css/
│   └── styles.css      # 样式文件，包含瀑布流布局设计
├── js/
│   └── main.js         # JavaScript功能，包含语言切换逻辑
├── images/             # 图片资源文件夹（需要添加图片）
│   ├── logo.png        # 网站logo
│   ├── logo-white.png  # 页脚白色logo
│   ├── hero-bg.jpg     # 英雄区背景图，建议使用物流相关图片
│   ├── about.jpg       # 关于我们图片，展示物流公司设施
│   └── project1-6.jpg  # 物流解决方案图片
└── README.md           # 项目说明文件
```

## 使用说明

1. 下载或克隆项目文件
2. 在images文件夹中添加相应的物流相关图片资源
3. 通过浏览器打开index.html预览网站
4. 点击右上角的语言切换按钮可以在英文和泰文之间切换

## 图片建议

为了完善网站展示效果，建议添加以下图片：

1. **Logo和品牌图片**：
   - 蓝色调的物流公司logo
   - 白色版本的logo用于页脚

2. **英雄区背景图**：
   - 集装箱船舶或全球物流网络图片
   - 物流枢纽鸟瞰图

3. **服务类图片**：
   - 空运：货机或航空货运场景
   - 海运：集装箱船和港口
   - 陆运：卡车车队
   - 仓储：现代化仓库内部

4. **解决方案图片**：
   - 电子商务物流场景
   - 温控物流运输
   - 特种货物装卸
   - 汽车物流
   - 跨境电商物流
   - 工业设备运输

## 推荐图片资源网站

以下是一些提供免费物流相关图片的网站：

1. **Unsplash**：提供高质量免费图片，有丰富的集装箱、货轮和物流场景
   - 网址：https://unsplash.com/s/photos/shipping-container
   - 关键词搜索：logistics, shipping container, cargo ship, warehouse

2. **Pexels**：免费图片素材库，可搜索物流相关图片
   - 网址：https://www.pexels.com/search/logistics/
   - 关键词搜索：logistics, freight, warehouse, shipping

3. **Pixabay**：提供免费商用图片
   - 网址：https://pixabay.com/images/search/logistics/
   - 关键词搜索：logistics, container, freight

4. **Freepik**：提供部分免费图片和插图
   - 网址：https://www.freepik.com/search?format=search&query=logistics

5. **Wikimedia Commons**：免费使用的图片资源库
   - 示例图片链接：https://commons.wikimedia.org/wiki/File:Container.JPG

选择图片注意事项：
- 确保图片具有商业使用许可
- 选择高分辨率、专业美观的图片
- 图片风格保持一致性
- 尽量选择与公司业务相关的场景

## 自定义内容

- 所有文本内容可以在index.html中修改
- 样式和布局可以在styles.css中调整
- 语言切换功能在main.js中配置

## 网站功能详解

### 语言切换功能

网站使用CSS类和JavaScript来实现语言切换。英文内容使用`.en`类，泰文内容使用`.th`类。点击语言按钮时，JavaScript会切换这些元素的显示状态。

### 瀑布流布局

物流解决方案展示区域使用CSS的column-count属性实现瀑布流布局，根据不同屏幕宽度自动调整列数。

### 数据统计区域

展示公司的服务城市数量、客户数量、全球货运代理数量和国际航线数量等关键数据。

### 响应式设计

网站采用媒体查询技术，在不同的屏幕尺寸下提供最佳的用户体验，确保在手机、平板和桌面设备上都能完美展示。

## 联系方式

如需修改或定制网站，请联系：info@realthailand.com 