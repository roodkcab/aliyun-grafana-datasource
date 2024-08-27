[中文文档](https://github.com/roodkcab/aliyun-grafana-datasource/blob/master/README.%E4%B8%AD%E6%96%87.md)

# Alibaba Cloud Grafana Datasource User Guide

The Alibaba Cloud Grafana Datasource is a powerful plugin that helps you easily integrate and visualize Alibaba Cloud monitoring data in Grafana. With this plugin, you can monitor the performance metrics of cloud resources in real-time, quickly identify issues, and improve operational efficiency.

## Features

- **Diverse Data Support**: Supports monitoring data from various Alibaba Cloud services, including LB, ECS, RDS, KVSTORE, NAT, and all CMS-supported basic resources.
- **Real-Time Monitoring**: Provides real-time data updates to help you detect and resolve issues promptly.
- **Custom Dashboards**: Supports the creation and customization of monitoring dashboards according to your needs.
- **Alerting Functionality**: Set up alert rules to get notified when metrics are abnormal.
- **Low Resource Usage**: Uses goroutines to solve resource-sharing issues, allowing you to monitor more resources with fewer requests.
- **Support for Grafana 12**: Uses React hooks to implement the monitoring configuration page, perfectly supporting the latest version of Grafana.

---

## Getting Started

Follow these steps to quickly configure and use the Alibaba Cloud Grafana Datasource.
![image](https://github.com/user-attachments/assets/9052b482-5618-4327-bbf7-bb3df23b6cb8)

### Step 1: Set Up Your Account

1. **Obtain Alibaba Cloud AccessKey**
   - Log in to the [Alibaba Cloud Console](https://home.console.aliyun.com/).
   - Click on your username in the upper right corner and select “AccessKey Management.”
   - Create a new AccessKey and securely save the `AccessKey ID` and `AccessKey Secret`.
   - Authorize the following resources:
     | Permission | Description            |
     | :------ | :------------------- |
     | AliyunCloudMonitorReadOnlyAccess | For reading various monitoring metrics |
     | AliyunALBReadOnlyAccess | For reading server group service names |

2. **Install Alibaba Cloud Grafana Datasource Plugin**
   - Copy the `dist` directory to ```plugins/aliyuncms-datasource```.
   - Set ```allow_loading_unsigned_plugins = aliyuncms-datasource``` in the `ini` file.
   - Restart the Grafana service to load the newly installed plugin.

3. **Configure the Data Source**
   - Log in to Grafana, click on “Configuration” > “Data sources” in the left menu.
   - Click “Add data source,” search for, and select “aliyun cms datasource.”
   - On the configuration page, fill in your `UserID`, `AccessKey ID`, and `AccessKey Secret`.
   - Click “Save & Test” to confirm the configuration is correct.

### Step 2: Add Monitoring Charts

1. **Create a New Dashboard**
   - In the Grafana main interface, click on “Create” > “Dashboard” in the left menu.
   - Click “Add new panel” to add a new panel.

2. **Configure Panel Data**
   - In the “Datasource” tab, select the Alibaba Cloud datasource you configured earlier.
   - Choose the service and metrics you want to monitor, such as the CPU usage of ECS.
   - Configure the time range and other query parameters to meet your monitoring needs.
   ![image](https://github.com/user-attachments/assets/f39a031a-e969-481f-852f-9bb20fe3bb1d)

3. **Customize Panel Display**
   - In the “Visualization” tab, select an appropriate chart type (line chart, bar chart, etc.).
   - Configure the chart title, labels, and style to make it more intuitive and readable.

4. **Save the Dashboard**
   - After completing the configuration, click “Apply” in the upper right corner to save the panel.
   - On the dashboard page, click “Save dashboard” at the top to save the entire dashboard configuration.

---

## References

- [Alibaba Cloud CloudMonitor Documentation](https://help.aliyun.com/product/28572.html)
- [Grafana Official Website](https://grafana.com/)
- [Grafana Plugin Marketplace](https://grafana.com/grafana/plugins/)

## Contact Me

If you have any questions or suggestions, feel free to join the [Grafana Aliyun Telegram Group](https://t.me/grafana_aliyun)

Thank you for using Alibaba Cloud Grafana Datasource, and happy monitoring!
