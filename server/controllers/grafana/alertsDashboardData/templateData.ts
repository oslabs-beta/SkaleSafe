const alertTemplateData = {
    "list": [
      {
        "current": {
          "selected": false,
          "text": "default",
          "value": "default"
        },
        "hide": 0,
        "includeAll": false,
        "label": "Prometheus datasource",
        "multi": false,
        "name": "datasource",
        "options": [],
        "query": "prometheus",
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "type": "datasource"
      },
      {
        "allValue": "",
        "current": {
          "selected": false,
          "text": "All",
          "value": "$__all"
        },
        "datasource": {
          "type": "prometheus",
          "uid": "$datasource"
        },
        "definition": "query_result(alertmanager_build_info)",
        "hide": 0,
        "includeAll": true,
        "label": "Instance",
        "multi": true,
        "name": "instance",
        "options": [],
        "query": {
          "query": "query_result(alertmanager_build_info)",
          "refId": "Prometheus-instance-Variable-Query"
        },
        "refresh": 2,
        "regex": "/.*instance=\"([^\"]+)\".*/",
        "skipUrlSync": false,
        "sort": 1,
        "type": "query",
        "useTags": false
      }
    ]
  }

export default alertTemplateData;