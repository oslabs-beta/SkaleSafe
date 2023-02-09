const customPanelData = [
    {
      "collapsed": false,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 0
      },
      "id": 10,
      "panels": [],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "CPU",
      "type": "row"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "uid": "$datasource"
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 0,
        "y": 1
      },
      "hiddenSeries": false,
      "id": 2,
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": true,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "(\n  (1 - sum without (mode) (rate(node_cpu_seconds_total{job=\"node-exporter\", mode=~\"idle|iowait|steal\", instance=\"$instance\"}[$__rate_interval])))\n/ ignoring(cpu) group_left\n  count without (cpu, mode) (node_cpu_seconds_total{job=\"node-exporter\", mode=\"idle\", instance=\"$instance\"})\n)\n",
          "format": "time_series",
          "intervalFactor": 5,
          "legendFormat": "{{cpu}}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "CPU Usage",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "percentunit",
          "logBase": 1,
          "max": 1,
          "min": 0,
          "show": true
        },
        {
          "format": "percentunit",
          "logBase": 1,
          "max": 1,
          "min": 0,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "uid": "$datasource"
      },
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 12,
        "y": 1
      },
      "hiddenSeries": false,
      "id": 3,
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "node_load1{job=\"node-exporter\", instance=\"$instance\"}",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "1m load average",
          "refId": "A"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "node_load5{job=\"node-exporter\", instance=\"$instance\"}",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "5m load average",
          "refId": "B"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "node_load15{job=\"node-exporter\", instance=\"$instance\"}",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "15m load average",
          "refId": "C"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "count(node_cpu_seconds_total{job=\"node-exporter\", instance=\"$instance\", mode=\"idle\"})",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "logical cores",
          "refId": "D"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "Load Average",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "logBase": 1,
          "min": 0,
          "show": true
        },
        {
          "format": "short",
          "logBase": 1,
          "min": 0,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "$datasource"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "percentunit"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 0,
        "y": 8
      },
      "id": 28,
      "interval": "1m",
      "links": [],
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "editorMode": "code",
          "expr": "cluster:node_cpu:ratio_rate5m{cluster=\"$cluster\"}",
          "format": "time_series",
          "instant": true,
          "intervalFactor": 2,
          "refId": "A"
        }
      ],
      "title": "CPU Utilisation",
      "type": "stat"
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "percentunit"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 4,
        "y": 8
      },
      "id": 29,
      "interval": "1m",
      "links": [],
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(namespace_cpu:kube_pod_container_resource_requests:sum{cluster=\"$cluster\"}) / sum(kube_node_status_allocatable{job=\"kube-state-metrics\",resource=\"cpu\",cluster=\"$cluster\"})",
          "format": "time_series",
          "instant": true,
          "intervalFactor": 2,
          "refId": "A"
        }
      ],
      "title": "CPU Requests Commitment",
      "type": "stat"
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "percentunit"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 8,
        "y": 8
      },
      "id": 30,
      "interval": "1m",
      "links": [],
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(namespace_cpu:kube_pod_container_resource_limits:sum{cluster=\"$cluster\"}) / sum(kube_node_status_allocatable{job=\"kube-state-metrics\",resource=\"cpu\",cluster=\"$cluster\"})",
          "format": "time_series",
          "instant": true,
          "intervalFactor": 2,
          "refId": "A"
        }
      ],
      "title": "CPU Limits Commitment",
      "type": "stat"
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "percentunit"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 12,
        "y": 8
      },
      "id": 31,
      "interval": "1m",
      "links": [],
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "1 - sum(:node_memory_MemAvailable_bytes:sum{cluster=\"$cluster\"}) / sum(node_memory_MemTotal_bytes{job=\"node-exporter\",cluster=\"$cluster\"})",
          "format": "time_series",
          "instant": true,
          "intervalFactor": 2,
          "refId": "A"
        }
      ],
      "title": "Memory Utilisation",
      "type": "stat"
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "percentunit"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 16,
        "y": 8
      },
      "id": 32,
      "interval": "1m",
      "links": [],
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(namespace_memory:kube_pod_container_resource_requests:sum{cluster=\"$cluster\"}) / sum(kube_node_status_allocatable{job=\"kube-state-metrics\",resource=\"memory\",cluster=\"$cluster\"})",
          "format": "time_series",
          "instant": true,
          "intervalFactor": 2,
          "refId": "A"
        }
      ],
      "title": "Memory Requests Commitment",
      "type": "stat"
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "percentunit"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 20,
        "y": 8
      },
      "id": 33,
      "interval": "1m",
      "links": [],
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(namespace_memory:kube_pod_container_resource_limits:sum{cluster=\"$cluster\"}) / sum(kube_node_status_allocatable{job=\"kube-state-metrics\",resource=\"memory\",cluster=\"$cluster\"})",
          "format": "time_series",
          "instant": true,
          "intervalFactor": 2,
          "refId": "A"
        }
      ],
      "title": "Memory Limits Commitment",
      "type": "stat"
    },
    {
      "collapsed": false,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 11
      },
      "id": 11,
      "panels": [],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "Memory",
      "type": "row"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "uid": "$datasource"
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 7,
        "w": 18,
        "x": 0,
        "y": 12
      },
      "hiddenSeries": false,
      "id": 4,
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": true,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "(\n  node_memory_MemTotal_bytes{job=\"node-exporter\", instance=\"$instance\"}\n-\n  node_memory_MemFree_bytes{job=\"node-exporter\", instance=\"$instance\"}\n-\n  node_memory_Buffers_bytes{job=\"node-exporter\", instance=\"$instance\"}\n-\n  node_memory_Cached_bytes{job=\"node-exporter\", instance=\"$instance\"}\n)\n",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "memory used",
          "refId": "A"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "node_memory_Buffers_bytes{job=\"node-exporter\", instance=\"$instance\"}",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "memory buffers",
          "refId": "B"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "node_memory_Cached_bytes{job=\"node-exporter\", instance=\"$instance\"}",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "memory cached",
          "refId": "C"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "node_memory_MemFree_bytes{job=\"node-exporter\", instance=\"$instance\"}",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "memory free",
          "refId": "D"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "Memory Usage",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "bytes",
          "logBase": 1,
          "min": 0,
          "show": true
        },
        {
          "format": "bytes",
          "logBase": 1,
          "min": 0,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "fieldConfig": {
        "defaults": {
          "mappings": [],
          "max": 100,
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "rgba(50, 172, 45, 0.97)",
                "value": null
              },
              {
                "color": "rgba(237, 129, 40, 0.89)",
                "value": 80
              },
              {
                "color": "rgba(245, 54, 54, 0.9)",
                "value": 90
              }
            ]
          },
          "unit": "percent"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 6,
        "x": 18,
        "y": 12
      },
      "id": 5,
      "options": {
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "100 -\n(\n  avg(node_memory_MemAvailable_bytes{job=\"node-exporter\", instance=\"$instance\"}) /\n  avg(node_memory_MemTotal_bytes{job=\"node-exporter\", instance=\"$instance\"})\n* 100\n)\n",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "",
          "refId": "A"
        }
      ],
      "title": "Memory Usage",
      "type": "gauge"
    },
    {
      "collapsed": false,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 19
      },
      "id": 12,
      "panels": [],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "Disk",
      "type": "row"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "uid": "$datasource"
      },
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 0,
        "y": 20
      },
      "hiddenSeries": false,
      "id": 6,
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "/ read| written/",
          "yaxis": 1
        },
        {
          "alias": "/ io time/",
          "yaxis": 2
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "rate(node_disk_read_bytes_total{job=\"node-exporter\", instance=\"$instance\", device=~\"(/dev/)?(mmcblk.p.+|nvme.+|rbd.+|sd.+|vd.+|xvd.+|dm-.+|md.+|dasd.+)\"}[$__rate_interval])",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{device}} read",
          "refId": "A"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "rate(node_disk_written_bytes_total{job=\"node-exporter\", instance=\"$instance\", device=~\"(/dev/)?(mmcblk.p.+|nvme.+|rbd.+|sd.+|vd.+|xvd.+|dm-.+|md.+|dasd.+)\"}[$__rate_interval])",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{device}} written",
          "refId": "B"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "rate(node_disk_io_time_seconds_total{job=\"node-exporter\", instance=\"$instance\", device=~\"(/dev/)?(mmcblk.p.+|nvme.+|rbd.+|sd.+|vd.+|xvd.+|dm-.+|md.+|dasd.+)\"}[$__rate_interval])",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{device}} io time",
          "refId": "C"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "Disk I/O",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "Bps",
          "logBase": 1,
          "show": true
        },
        {
          "format": "percentunit",
          "logBase": 1,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "fieldConfig": {
        "defaults": {
          "custom": {
            "align": "auto",
            "displayMode": "auto",
            "inspect": false
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "yellow",
                "value": 0.8
              },
              {
                "color": "red",
                "value": 0.9
              }
            ]
          },
          "unit": "decbytes"
        },
        "overrides": [
          {
            "matcher": {
              "id": "byName",
              "options": "Mounted on"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 260
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "Size"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 93
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "Used"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 72
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "Available"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 88
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "Used, %"
            },
            "properties": [
              {
                "id": "unit",
                "value": "percentunit"
              },
              {
                "id": "custom.displayMode",
                "value": "gradient-gauge"
              },
              {
                "id": "max",
                "value": 1
              },
              {
                "id": "min",
                "value": 0
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 12,
        "y": 20
      },
      "id": 7,
      "options": {
        "footer": {
          "fields": "",
          "reducer": [
            "sum"
          ],
          "show": false
        },
        "showHeader": true
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "max by (mountpoint) (node_filesystem_size_bytes{job=\"node-exporter\", instance=\"$instance\", fstype!=\"\", mountpoint!=\"\"})\n",
          "format": "table",
          "instant": true,
          "intervalFactor": 2,
          "legendFormat": "",
          "refId": "A"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "max by (mountpoint) (node_filesystem_avail_bytes{job=\"node-exporter\", instance=\"$instance\", fstype!=\"\", mountpoint!=\"\"})\n",
          "format": "table",
          "instant": true,
          "intervalFactor": 2,
          "legendFormat": "",
          "refId": "B"
        }
      ],
      "title": "Disk Space Usage",
      "transformations": [
        {
          "id": "groupBy",
          "options": {
            "fields": {
              "Value #A": {
                "aggregations": [
                  "lastNotNull"
                ],
                "operation": "aggregate"
              },
              "Value #B": {
                "aggregations": [
                  "lastNotNull"
                ],
                "operation": "aggregate"
              },
              "mountpoint": {
                "aggregations": [],
                "operation": "groupby"
              }
            }
          }
        },
        {
          "id": "merge",
          "options": {}
        },
        {
          "id": "calculateField",
          "options": {
            "alias": "Used",
            "binary": {
              "left": "Value #A (lastNotNull)",
              "operator": "-",
              "reducer": "sum",
              "right": "Value #B (lastNotNull)"
            },
            "mode": "binary",
            "reduce": {
              "reducer": "sum"
            }
          }
        },
        {
          "id": "calculateField",
          "options": {
            "alias": "Used, %",
            "binary": {
              "left": "Used",
              "operator": "/",
              "reducer": "sum",
              "right": "Value #A (lastNotNull)"
            },
            "mode": "binary",
            "reduce": {
              "reducer": "sum"
            }
          }
        },
        {
          "id": "organize",
          "options": {
            "excludeByName": {},
            "indexByName": {},
            "renameByName": {
              "Value #A (lastNotNull)": "Size",
              "Value #B (lastNotNull)": "Available",
              "mountpoint": "Mounted on"
            }
          }
        },
        {
          "id": "sortBy",
          "options": {
            "fields": {},
            "sort": [
              {
                "field": "Mounted on"
              }
            ]
          }
        }
      ],
      "type": "table"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "decimals": 3,
      "editable": true,
      "error": false,
      "fill": 0,
      "fillGradient": 0,
      "grid": {},
      "gridPos": {
        "h": 14,
        "w": 24,
        "x": 0,
        "y": 27
      },
      "hiddenSeries": false,
      "id": 23,
      "isNew": true,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "expr": "sum (rate (container_cpu_usage_seconds_total{id!=\"/\",pod_name=~\"^$Deployment.*$\"}[1m])) by (id)",
          "hide": false,
          "interval": "10s",
          "intervalFactor": 1,
          "legendFormat": "{{ id }}",
          "metric": "container_cpu",
          "refId": "A",
          "step": 10
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "All processes CPU usage",
      "tooltip": {
        "msResolution": true,
        "shared": true,
        "sort": 2,
        "value_type": "cumulative"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "percent",
          "logBase": 1,
          "show": true
        },
        {
          "format": "short",
          "logBase": 1,
          "show": false
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "collapsed": false,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 41
      },
      "id": 13,
      "panels": [],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "Network",
      "type": "row"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "uid": "$datasource"
      },
      "description": "Network received (bits/s)",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 0,
        "y": 42
      },
      "hiddenSeries": false,
      "id": 8,
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "rate(node_network_receive_bytes_total{job=\"node-exporter\", instance=\"$instance\", device!=\"lo\"}[$__rate_interval]) * 8",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{device}}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "Network Received",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "bps",
          "logBase": 1,
          "min": 0,
          "show": true
        },
        {
          "format": "bps",
          "logBase": 1,
          "min": 0,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "uid": "$datasource"
      },
      "description": "Network transmitted (bits/s)",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 12,
        "y": 42
      },
      "hiddenSeries": false,
      "id": 9,
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "rate(node_network_transmit_bytes_total{job=\"node-exporter\", instance=\"$instance\", device!=\"lo\"}[$__rate_interval]) * 8",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{device}}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "Network Transmitted",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "bps",
          "logBase": 1,
          "min": 0,
          "show": true
        },
        {
          "format": "bps",
          "logBase": 1,
          "min": 0,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "max": 100,
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "#EAB839",
                "value": 65
              },
              {
                "color": "red",
                "value": 90
              }
            ]
          },
          "unit": "percent"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 8,
        "x": 0,
        "y": 49
      },
      "id": 14,
      "maxDataPoints": 100,
      "options": {
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum (container_memory_working_set_bytes{pod_name=~\"^$Deployment.*$\"}) / sum (machine_memory_bytes{kubernetes_io_hostname=~\"^$Node$\"}) * 100",
          "interval": "10s",
          "legendFormat": "",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "Deployment memory usage",
      "type": "gauge"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "decimals": 2,
          "mappings": [],
          "max": 100,
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "#EAB839",
                "value": 65
              },
              {
                "color": "red",
                "value": 90
              }
            ]
          },
          "unit": "percent"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 8,
        "x": 8,
        "y": 49
      },
      "id": 15,
      "maxDataPoints": 100,
      "options": {
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum (rate (container_cpu_usage_seconds_total{pod_name=~\"^$Deployment.*$\"}[1m])) / sum (machine_cpu_cores{kubernetes_io_hostname=~\"^$Node$\"}) * 100",
          "legendFormat": "__auto",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "Deployment CPU usage",
      "type": "gauge"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "max": 100,
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "percent"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 8,
        "x": 16,
        "y": 49
      },
      "id": 20,
      "maxDataPoints": 100,
      "options": {
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum(kube_deployment_status_replicas_available{deployment=~\"^$Deployment$\"}) / sum(kube_deployment_status_replicas{deployment=~\"^$Deployment$\"}) * 100",
          "legendFormat": "",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "Replicas",
      "type": "gauge"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [
            {
              "options": {
                "null": {
                  "index": 0,
                  "text": "N/A"
                }
              },
              "type": "value"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "bytes"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 0,
        "y": 56
      },
      "id": 16,
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum (container_memory_working_set_bytes{pod_name=~\"^$Deployment.*$\"})",
          "legendFormat": "",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "Used",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "bytes"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 4,
        "y": 56
      },
      "id": 17,
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum (container_memory_working_set_bytes{kubernetes_io_hostname=~\"^$Node.*$\"})",
          "legendFormat": "",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "Total",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [
            {
              "options": {
                "null": {
                  "index": 0,
                  "text": "N/A"
                }
              },
              "type": "value"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 8,
        "y": 56
      },
      "id": 18,
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum (rate (container_cpu_usage_seconds_total{pod_name=~\"^$Deployment.*$\"}[1m]))",
          "legendFormat": "",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "Used",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [
            {
              "options": {
                "null": {
                  "index": 0,
                  "text": "N/A"
                }
              },
              "type": "value"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 12,
        "y": 56
      },
      "id": 19,
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum (machine_cpu_cores{kubernetes_io_hostname=~\"^$Node$\"})",
          "legendFormat": "",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "Total",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 16,
        "y": 56
      },
      "id": 21,
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum(kube_deployment_status_replicas_available{deployment=~\"^$Deployment$\"})",
          "legendFormat": "__auto",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "Available",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "decimals": 0,
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 3,
        "w": 4,
        "x": 20,
        "y": 56
      },
      "id": 22,
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "text": {
          "titleSize": 1
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum(kube_deployment_status_replicas{deployment=~\"^$Deployment$\"})",
          "legendFormat": "",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "Total",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "description": "How many percent of requests (both read and write) in 30 days have been answered successfully and fast enough?",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "decimals": 3,
          "mappings": [
            {
              "options": {
                "match": "null",
                "result": {
                  "text": "N/A"
                }
              },
              "type": "special"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "percentunit"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 5,
        "w": 24,
        "x": 0,
        "y": 59
      },
      "id": 25,
      "interval": "1m",
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "apiserver_request:availability30d{verb=\"all\", cluster=\"$cluster\"}",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "Availability (30d) > 99.000%",
      "type": "stat"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "decimals": 2,
      "editable": true,
      "error": false,
      "fill": 0,
      "fillGradient": 0,
      "grid": {},
      "gridPos": {
        "h": 14,
        "w": 24,
        "x": 0,
        "y": 64
      },
      "hiddenSeries": false,
      "id": 24,
      "isNew": true,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "sideWidth": 200,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "expr": "sum (container_memory_working_set_bytes{id!=\"/\",pod_name=~\"^$Deployment.*$\"}) by (id)",
          "interval": "10s",
          "intervalFactor": 1,
          "legendFormat": "{{ id }}",
          "metric": "container_memory_usage:sort_desc",
          "refId": "A",
          "step": 10
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "All processes memory usage",
      "tooltip": {
        "msResolution": false,
        "shared": true,
        "sort": 2,
        "value_type": "cumulative"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "bytes",
          "logBase": 1,
          "show": true
        },
        {
          "format": "short",
          "logBase": 1,
          "show": false
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "aliasColors": {},
      "bars": false,
      "columns": [],
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "uid": "$datasource"
      },
      "fill": 1,
      "fontSize": "100%",
      "gridPos": {
        "h": 7,
        "w": 24,
        "x": 0,
        "y": 78
      },
      "id": 27,
      "interval": "1m",
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": true,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null as zero",
      "percentage": false,
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "showHeader": true,
      "sort": {
        "col": 0,
        "desc": true
      },
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "styles": [
        {
          "alias": "Time",
          "align": "auto",
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "pattern": "Time",
          "type": "hidden"
        },
        {
          "alias": "Pods",
          "align": "auto",
          "colors": [],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 0,
          "link": true,
          "linkTargetBlank": false,
          "linkTooltip": "Drill down to pods",
          "linkUrl": "/d/85a562078cdf77779eaa1add43ccec1e/k8s-resources-namespace?var-datasource=$datasource&var-cluster=$cluster&var-namespace=$__cell_1",
          "pattern": "Value #A",
          "thresholds": [],
          "type": "number",
          "unit": "short"
        },
        {
          "alias": "Workloads",
          "align": "auto",
          "colors": [],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 0,
          "link": true,
          "linkTargetBlank": false,
          "linkTooltip": "Drill down to workloads",
          "linkUrl": "/d/a87fb0d919ec0ea5f6543124e16c42a5/k8s-resources-workloads-namespace?var-datasource=$datasource&var-cluster=$cluster&var-namespace=$__cell_1",
          "pattern": "Value #B",
          "thresholds": [],
          "type": "number",
          "unit": "short"
        },
        {
          "alias": "CPU Usage",
          "align": "auto",
          "colors": [],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "link": false,
          "linkTargetBlank": false,
          "linkTooltip": "Drill down",
          "linkUrl": "",
          "pattern": "Value #C",
          "thresholds": [],
          "type": "number",
          "unit": "short"
        },
        {
          "alias": "CPU Requests",
          "align": "auto",
          "colors": [],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "link": false,
          "linkTargetBlank": false,
          "linkTooltip": "Drill down",
          "linkUrl": "",
          "pattern": "Value #D",
          "thresholds": [],
          "type": "number",
          "unit": "short"
        },
        {
          "alias": "CPU Requests %",
          "align": "auto",
          "colors": [],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "link": false,
          "linkTargetBlank": false,
          "linkTooltip": "Drill down",
          "linkUrl": "",
          "pattern": "Value #E",
          "thresholds": [],
          "type": "number",
          "unit": "percentunit"
        },
        {
          "alias": "CPU Limits",
          "align": "auto",
          "colors": [],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "link": false,
          "linkTargetBlank": false,
          "linkTooltip": "Drill down",
          "linkUrl": "",
          "pattern": "Value #F",
          "thresholds": [],
          "type": "number",
          "unit": "short"
        },
        {
          "alias": "CPU Limits %",
          "align": "auto",
          "colors": [],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "link": false,
          "linkTargetBlank": false,
          "linkTooltip": "Drill down",
          "linkUrl": "",
          "pattern": "Value #G",
          "thresholds": [],
          "type": "number",
          "unit": "percentunit"
        },
        {
          "alias": "Namespace",
          "align": "auto",
          "colors": [],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "link": true,
          "linkTargetBlank": false,
          "linkTooltip": "Drill down to pods",
          "linkUrl": "/d/85a562078cdf77779eaa1add43ccec1e/k8s-resources-namespace?var-datasource=$datasource&var-cluster=$cluster&var-namespace=$__cell",
          "pattern": "namespace",
          "thresholds": [],
          "type": "number",
          "unit": "short"
        },
        {
          "alias": "",
          "align": "auto",
          "colors": [],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "pattern": "/.*/",
          "thresholds": [],
          "type": "string",
          "unit": "short"
        }
      ],
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(kube_pod_owner{job=\"kube-state-metrics\", cluster=\"$cluster\"}) by (namespace)",
          "format": "table",
          "instant": true,
          "intervalFactor": 2,
          "legendFormat": "",
          "refId": "A",
          "step": 10
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "count(avg(namespace_workload_pod:kube_pod_owner:relabel{cluster=\"$cluster\"}) by (workload, namespace)) by (namespace)",
          "format": "table",
          "instant": true,
          "intervalFactor": 2,
          "legendFormat": "",
          "refId": "B",
          "step": 10
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(node_namespace_pod_container:container_cpu_usage_seconds_total:sum_irate{cluster=\"$cluster\"}) by (namespace)",
          "format": "table",
          "instant": true,
          "intervalFactor": 2,
          "legendFormat": "",
          "refId": "C",
          "step": 10
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(namespace_cpu:kube_pod_container_resource_requests:sum{cluster=\"$cluster\"}) by (namespace)",
          "format": "table",
          "instant": true,
          "intervalFactor": 2,
          "legendFormat": "",
          "refId": "D",
          "step": 10
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(node_namespace_pod_container:container_cpu_usage_seconds_total:sum_irate{cluster=\"$cluster\"}) by (namespace) / sum(namespace_cpu:kube_pod_container_resource_requests:sum{cluster=\"$cluster\"}) by (namespace)",
          "format": "table",
          "instant": true,
          "intervalFactor": 2,
          "legendFormat": "",
          "refId": "E",
          "step": 10
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(namespace_cpu:kube_pod_container_resource_limits:sum{cluster=\"$cluster\"}) by (namespace)",
          "format": "table",
          "instant": true,
          "intervalFactor": 2,
          "legendFormat": "",
          "refId": "F",
          "step": 10
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(node_namespace_pod_container:container_cpu_usage_seconds_total:sum_irate{cluster=\"$cluster\"}) by (namespace) / sum(namespace_cpu:kube_pod_container_resource_limits:sum{cluster=\"$cluster\"}) by (namespace)",
          "format": "table",
          "instant": true,
          "intervalFactor": 2,
          "legendFormat": "",
          "refId": "G",
          "step": 10
        }
      ],
      "thresholds": [],
      "title": "CPU Quota",
      "tooltip": {
        "shared": false,
        "sort": 2,
        "value_type": "individual"
      },
      "transform": "table",
      "type": "table-old",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "logBase": 1,
          "min": 0,
          "show": true
        },
        {
          "format": "short",
          "logBase": 1,
          "show": false
        }
      ]
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "$datasource"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisCenteredZero": false,
            "axisColorMode": "text",
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "never",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "s"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 24,
        "x": 0,
        "y": 85
      },
      "id": 35,
      "links": [],
      "options": {
        "legend": {
          "calcs": [
            "lastNotNull"
          ],
          "displayMode": "table",
          "placement": "right",
          "showLegend": true
        },
        "tooltip": {
          "mode": "multi",
          "sort": "none"
        }
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "editorMode": "code",
          "expr": "histogram_quantile(0.99, sum(rate(kubelet_pleg_relist_duration_seconds_bucket{cluster=\"$kubelet_cluster\",job=\"kubelet\", metrics_path=\"/metrics\",instance=~\"$kubelet_instance\"}[$__rate_interval])) by (instance, le))",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "{{instance}}",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "PLEG relist duration",
      "type": "timeseries"
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "description": "Pod lifecycle event generator",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisCenteredZero": false,
            "axisColorMode": "text",
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "ops"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 24,
        "x": 0,
        "y": 92
      },
      "id": 41,
      "options": {
        "legend": {
          "calcs": [
            "lastNotNull"
          ],
          "displayMode": "table",
          "placement": "right",
          "showLegend": true
        },
        "tooltip": {
          "mode": "single",
          "sort": "none"
        }
      },
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum(rate(kubelet_pleg_relist_duration_seconds_count{cluster=\"$kubelet_cluster\", job=\"kubelet\", metrics_path=\"/metrics\", instance=~\"$kubelet_instance\"}[$__rate_interval])) by (instance)",
          "interval": "",
          "legendFormat": "{{instance}}",
          "range": true,
          "refId": "A"
        }
      ],
      "title": "PLEG relist rate",
      "type": "timeseries"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "type": "prometheus",
        "uid": "$datasource"
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 0,
        "y": 100
      },
      "hiddenSeries": false,
      "id": 34,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "max": false,
        "min": false,
        "rightSide": true,
        "show": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "editorMode": "code",
          "expr": "sum(rate(kubelet_pod_start_duration_seconds_count{cluster=\"$kubelet_cluster\",job=\"kubelet\", metrics_path=\"/metrics\",instance=~\"$kubelet_instance\"}[$__rate_interval])) by (instance)",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "{{instance}} pod",
          "range": true,
          "refId": "A"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "editorMode": "code",
          "expr": "sum(rate(kubelet_pod_worker_duration_seconds_count{cluster=\"$kubelet_cluster\",job=\"kubelet\", metrics_path=\"/metrics\",instance=~\"$kubelet_instance\"}[$__rate_interval])) by (instance)",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "{{instance}} worker",
          "range": true,
          "refId": "B"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "Pod Start Rate",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "$$hashKey": "object:745",
          "format": "ops",
          "logBase": 1,
          "show": true
        },
        {
          "$$hashKey": "object:746",
          "format": "ops",
          "logBase": 1,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisCenteredZero": false,
            "axisColorMode": "text",
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "never",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 12,
        "y": 100
      },
      "id": 37,
      "options": {
        "legend": {
          "calcs": [
            "lastNotNull"
          ],
          "displayMode": "table",
          "placement": "right",
          "showLegend": true
        },
        "tooltip": {
          "mode": "single",
          "sort": "none"
        }
      },
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "histogram_quantile(0.99, sum(rate(kubelet_pod_start_duration_seconds_bucket{cluster=\"$kubelet_cluster\",job=\"kubelet\", metrics_path=\"/metrics\",instance=~\"$kubelet_instance\"}[$__rate_interval])) by (instance, le))",
          "legendFormat": "{{instance}} pod",
          "range": true,
          "refId": "A"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "histogram_quantile(0.99, sum(rate(kubelet_pod_worker_duration_seconds_bucket{cluster=\"$kubelet_cluster\",job=\"kubelet\", metrics_path=\"/metrics\",instance=~\"$kubelet_instance\"}[$__rate_interval])) by (instance, le))",
          "hide": false,
          "legendFormat": "{{instance}} worker",
          "range": true,
          "refId": "B"
        }
      ],
      "title": "Pod Start Duration",
      "type": "timeseries"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "type": "prometheus",
        "uid": "$datasource"
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 0,
        "y": 107
      },
      "hiddenSeries": false,
      "id": 26,
      "interval": "30s",
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "editorMode": "code",
          "expr": "process_resident_memory_bytes{cluster=\"$kubelet_cluster\",job=\"kubelet\", metrics_path=\"/metrics\",instance=~\"$kubelet_instance\"}",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "{{instance}}",
          "range": true,
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "Memory",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "$$hashKey": "object:1053",
          "format": "bytes",
          "logBase": 1,
          "show": true
        },
        {
          "$$hashKey": "object:1054",
          "format": "bytes",
          "logBase": 1,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisCenteredZero": false,
            "axisColorMode": "text",
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 0,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "ops"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 12,
        "y": 107
      },
      "id": 39,
      "options": {
        "legend": {
          "calcs": [],
          "displayMode": "list",
          "placement": "bottom",
          "showLegend": true
        },
        "tooltip": {
          "mode": "single",
          "sort": "none"
        }
      },
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum(rate(rest_client_requests_total{cluster=\"$kubelet_cluster\",job=\"kubelet\", metrics_path=\"/metrics\", instance=~\"$kubelet_instance\",code=~\"2..\"}[$__rate_interval]))",
          "legendFormat": "2xx",
          "range": true,
          "refId": "A"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum(rate(rest_client_requests_total{cluster=\"$kluster_cluster\",job=\"kubelet\", metrics_path=\"/metrics\", instance=~\"$kluster_instance\",code=~\"3..\"}[$__rate_interval]))",
          "hide": false,
          "legendFormat": "3xx",
          "range": true,
          "refId": "B"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum(rate(rest_client_requests_total{cluster=\"$kubelet_cluster\",job=\"kubelet\", metrics_path=\"/metrics\", instance=~\"$kubelet_instance\",code=~\"4..\"}[$__rate_interval]))",
          "hide": false,
          "legendFormat": "4xx",
          "range": true,
          "refId": "C"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "editorMode": "code",
          "expr": "sum(rate(rest_client_requests_total{cluster=\"$kubelet_cluster\",job=\"kubelet\", metrics_path=\"/metrics\", instance=~\"$kubelet_instance\",code=~\"5..\"}[$__rate_interval]))",
          "hide": false,
          "legendFormat": "5xx",
          "range": true,
          "refId": "D"
        }
      ],
      "title": "RPC Rate",
      "type": "timeseries"
    }
  ];

  export default customPanelData