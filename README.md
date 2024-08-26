# 阿里云 Grafana Datasource 使用指南

阿里云 Grafana Datasource 是一款强大的数据源插件，能够帮助您在 Grafana 中轻松集成和可视化阿里云的监控数据。通过该插件，您可以实时监控云资源的性能指标，快速定位问题，提升运维效率。

## 特性

- **多样化的数据支持**：支持阿里云多种服务的监控数据，包括LB、ECS、RDS、KVSTORE、NAT等所有CMS支持监控的基础资源。
- **实时监控**：提供实时的数据更新，帮助您及时发现和解决问题。
- **自定义仪表盘**：支持创建和定制符合您需求的监控仪表盘。
- **报警功能**：设置报警规则，在指标异常时及时通知。
- **低资源占用**: 使用goroutine解决资源共享问题, 用最少的请求量实现更多资源监控。
- **支持grafana12**: 使用react hook实现监控配置页, 完美支持最新版本的grafana。

---

## 快速开始

按照以下步骤，您可以快速配置并使用阿里云 Grafana Datasource。
![image](https://github.com/user-attachments/assets/9052b482-5618-4327-bbf7-bb3df23b6cb8)


### 步骤一：设置账号

1. **获取阿里云 AccessKey**
   - 登录 [阿里云控制台](https://home.console.aliyun.com/)。
   - 在右上角点击您的用户名，选择“AccessKey管理”。
   - 创建新的 AccessKey，并妥善保存 `AccessKey ID` 和 `AccessKey Secret`。
   - 授权以下资源:
     | 权限 | 作用             |
     | :------ | :------------------- |
     |AliyunCloudMonitorReadOnlyAccess|用于读取各种监控指标|
     |AliyunALBReadOnlyAccess|用于读取server group service name|

2. **安装阿里云 Grafana Datasource 插件**
   - 将dist目录复制到```plugins/aliyuncms-datasource```
   - 在ini文件设置```allow_loading_unsigned_plugins = aliyuncms-datasource```
   - 重启 Grafana 服务以加载新安装的插件。

3. **配置数据源**
   - 登录 Grafana，点击左侧菜单中的“Configuration” > “Data sources”。
   - 点击“Add data source”，搜索并选择“aliyun cms datasource”。
   - 在配置页面中填写您的`UserID`, `AccessKey ID` 和 `AccessKey Secret`。
   - 点击“Save & Test”确认配置无误。

### 步骤二：添加监控图表

1. **创建新的仪表盘**
   - 在 Grafana 主界面，点击左侧菜单中的“Create” > “Dashboard”。
   - 点击“Add new panel”添加新的面板。

2. **配置面板数据**
   - 在“Datasource”选项卡中，选择您之前配置的阿里云数据源。
   - 选择您想要监控的服务和指标，例如：ECS 的 CPU 使用率。
   - 配置时间范围和其他查询参数，以满足您的监控需求。
 ![image](https://github.com/user-attachments/assets/f39a031a-e969-481f-852f-9bb20fe3bb1d)


3. **自定义面板显示**
   - 在“Visualization”选项卡中，选择合适的图表类型（折线图、柱状图等）。
   - 配置图表的标题、标签和样式，使其更直观易读。

4. **保存仪表盘**
   - 完成配置后，点击右上角的“Apply”保存面板。
   - 在仪表盘页面，点击顶部的“Save dashboard”保存整个仪表盘配置。

---

## ☕ Buy Me a Coffee

您的支持是我持续改进的动力！如果您觉得本项目对您有帮助，欢迎通过以下方式支持我：

| 支持金额 | 回馈内容             |
| :------: | :------------------- |
|  **￥5** | 感谢您的打赏！ 您的名字将显示在赞助者列表页。      |
| **￥20** | 解锁报警功能。  |
| **￥50** | 支持各种名称的显示   |
| **￥100**| 赠送一套阿里云资源监控 Grafana 模板, 可以帮您快速定位各种问题。 |
| **￥200-???**| 支持定制修改, 视需求复杂程度定价, 欢迎垂询。 |

**扫码支持：**

<img src="https://github.com/user-attachments/assets/d87a83af-9f5a-4574-afc5-aa99adfb16fe" alt="" width="240" height="360">


非常感谢您的支持！😊

---

## 参考链接

- [阿里云云监控文档](https://help.aliyun.com/product/28572.html)
- [Grafana 官方网站](https://grafana.com/)
- [Grafana 插件市场](https://grafana.com/grafana/plugins/)

## 联系我

如有任何问题或建议，欢迎通过以下方式与我联系：

- **Email**: buaacss@gmail.com

感谢您使用阿里云 Grafana Datasource，祝您监控愉快！
