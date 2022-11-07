# Monitoring Azure Database for PostgreSQL - Flexible Server

## Metrics - list and alerts

```bash
# Metrics
List of available metrics: [click here](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-monitoring)

# How to set up alerts on metrics:
[click here to see the official guide](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/howto-alert-on-metrics)
1. Go to [Azure portal] (https://portal.azure.com/) and select the Azure Database for PostgreSQL server you want to monitor.
2. Click on "Alerts" (under the Monitoring section of the sidebar).
3. Click on "Create" then click "Alert rule".
4. Under "Condition" select a metric from the list of signals to be alerted on.
    (We followed the "Read Throughput Bytes/Sec" and "Transaction Log Storage Used" since we saw spikes on DB on those specific metrics)
    For "Read Throughput Bytes/Sec" the "Unit" was "M" with a "threshold value" 0.5.
    For "Transaction Log Storage Used" the "Unit" was "MB" with a "threshold value" 600.
5. Select the "time range" of the "Preview" section to "over last week" to see an overview of that metric the threshold.
6. Select "Unit" and "threshold value".
7. Under the "Action" tab select an "action group". (I created a new action group called "Dev" under the "wd_egn_test" resource which contains "2 Emails" (angel.k.wiredelta@gmail.com and dg@wiredelta.com))
8. Fill the rest of the mandatory fields under the "Details" tab then review and create
```

## Configure and access logs

```bash
#How to configure and access logs
[click here to see the official guide](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/howto-configure-and-access-logs)
1. In the [Azure portal] (https://portal.azure.com/) and select the Azure Database for PostgreSQL server you want to monitor.
2. Go to "Diagnostic Settings" in the sidebar of your Postgres server.
3. Select "Add Diagnostic Setting".
4. Name this setting.
5. Select your preferred endpoint (storage account, event hub, log analytics).
    (We selected the "Send to Log Analytics")
6. Select the log type PostgreSQLLogs.
7. Save your setting.

#Usefull links
Fields for the PostgreSQLLogs type: [click here](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-logging?source=recommendations)
Log queries in Azure Monitor: [click here] (https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-query-overview)
```
