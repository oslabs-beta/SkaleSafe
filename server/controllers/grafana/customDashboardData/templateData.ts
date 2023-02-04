const templateData = {
    "list": [
      {
        "current": {
          "selected": false,
          "text": "Prometheus",
          "value": "Prometheus"
        },
        "hide": 0,
        "includeAll": false,
        "label": "Data Source",
        "multi": false,
        "name": "datasource",
        "options": [],
        "query": "prometheus",
        "queryValue": "",
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "type": "datasource"
      },
      {
        "current": {
          "selected": false,
          "text": "192.168.64.8:9100",
          "value": "192.168.64.8:9100"
        },
        "datasource": {
          "type": "prometheus",
          "uid": "$datasource"
        },
        "definition": "label_values(node_uname_info{job=\"node-exporter\", sysname!=\"Darwin\"}, instance)",
        "hide": 0,
        "includeAll": false,
        "label": "Instance",
        "multi": false,
        "name": "instance",
        "options": [],
        "query": {
          "query": "label_values(node_uname_info{job=\"node-exporter\", sysname!=\"Darwin\"}, instance)",
          "refId": "StandardVariableQuery"
        },
        "refresh": 2,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "tagValuesQuery": "",
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      },
      {
        "allValue": ".*",
        "current": {
          "selected": false,
          "text": "All",
          "value": "$__all"
        },
        "datasource": {
          "type": "prometheus",
          "uid": "prometheus"
        },
        "definition": "label_values(deployment)",
        "hide": 0,
        "includeAll": true,
        "multi": false,
        "name": "Deployment",
        "options": [],
        "query": {
          "query": "label_values(deployment)",
          "refId": "StandardVariableQuery"
        },
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "type": "query"
      },
      {
        "allValue": ".*",
        "current": {
          "selected": false,
          "text": "All",
          "value": "$__all"
        },
        "datasource": {
          "type": "prometheus",
          "uid": "prometheus"
        },
        "definition": "label_values(kubernetes_io_hostname)",
        "hide": 0,
        "includeAll": true,
        "multi": false,
        "name": "Node",
        "options": [],
        "query": {
          "query": "label_values(kubernetes_io_hostname)",
          "refId": "StandardVariableQuery"
        },
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "type": "query"
      },
      {
        "current": {
          "isNone": true,
          "selected": false,
          "text": "None",
          "value": ""
        },
        "datasource": {
          "type": "prometheus",
          "uid": "${datasource}"
        },
        "definition": "label_values(up{job=\"apiserver\"}, cluster)",
        "hide": 2,
        "includeAll": false,
        "label": "cluster",
        "multi": false,
        "name": "cluster",
        "options": [],
        "query": {
          "query": "label_values(up{job=\"apiserver\"}, cluster)",
          "refId": "StandardVariableQuery"
        },
        "refresh": 2,
        "regex": "",
        "skipUrlSync": false,
        "sort": 1,
        "type": "query"
      },
      {
        "current": {
          "isNone": true,
          "selected": false,
          "text": "None",
          "value": ""
        },
        "datasource": {
          "type": "prometheus",
          "uid": "prometheus"
        },
        "definition": "label_values(up{job=\"kubelet\", metrics_path=\"/metrics\"}, cluster)",
        "hide": 2,
        "includeAll": false,
        "multi": false,
        "name": "kubelet_cluster",
        "options": [],
        "query": {
          "query": "label_values(up{job=\"kubelet\", metrics_path=\"/metrics\"}, cluster)",
          "refId": "StandardVariableQuery"
        },
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 1,
        "type": "query"
      },
      {
        "current": {
          "selected": false,
          "text": "192.168.64.8:10250",
          "value": "192.168.64.8:10250"
        },
        "datasource": {
          "type": "prometheus",
          "uid": "prometheus"
        },
        "definition": "label_values(up{job=\"kubelet\", metrics_path=\"/metrics\",cluster=\"$cluster\"}, instance)",
        "hide": 0,
        "includeAll": true,
        "multi": false,
        "name": "kubelet_instance",
        "options": [],
        "query": {
          "query": "label_values(up{job=\"kubelet\", metrics_path=\"/metrics\",cluster=\"$cluster\"}, instance)",
          "refId": "StandardVariableQuery"
        },
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "type": "query"
      }
    ]
  }

export default templateData;