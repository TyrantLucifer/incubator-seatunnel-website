"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3352],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(a),k=r,h=m["".concat(c,".").concat(k)]||m[k]||p[k]||s;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8405:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return o},assets:function(){return u},toc:function(){return p},default:function(){return k}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),l=["components"],i={slug:"spark-execute-elasticsearch",title:"\u5982\u4f55\u4f7f\u7528 Spark \u5feb\u901f\u5c06\u6570\u636e\u5199\u5165 Elasticsearch",tags:["Spark","Kafka","Elasticsearch"]},c=void 0,o={permalink:"/zh-CN/blog/spark-execute-elasticsearch",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2021-12-30-spark-execute-elasticsearch.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2021-12-30-spark-execute-elasticsearch.md",title:"\u5982\u4f55\u4f7f\u7528 Spark \u5feb\u901f\u5c06\u6570\u636e\u5199\u5165 Elasticsearch",description:"\u8bf4\u5230\u6570\u636e\u5199\u5165 Elasticsearch\uff0c\u6700\u5148\u60f3\u5230\u7684\u80af\u5b9a\u662fLogstash\u3002Logstash\u56e0\u4e3a\u5176\u7b80\u5355\u4e0a\u624b\u3001\u53ef\u6269\u5c55\u3001\u53ef\u4f38\u7f29\u7b49\u4f18\u70b9\u88ab\u5e7f\u5927\u7528\u6237\u63a5\u53d7\u3002\u4f46\u662f\u5c3a\u6709\u6240\u77ed\uff0c\u5bf8\u6709\u6240\u957f\uff0cLogstash\u80af\u5b9a\u4e5f\u6709\u5b83\u65e0\u6cd5\u9002\u7528\u7684\u5e94\u7528\u573a\u666f\uff0c\u6bd4\u5982\uff1a",date:"2021-12-30T00:00:00.000Z",formattedDate:"2021\u5e7412\u670830\u65e5",tags:[{label:"Spark",permalink:"/zh-CN/blog/tags/spark"},{label:"Kafka",permalink:"/zh-CN/blog/tags/kafka"},{label:"Elasticsearch",permalink:"/zh-CN/blog/tags/elasticsearch"}],readingTime:7.415,truncated:!1,authors:[],frontMatter:{slug:"spark-execute-elasticsearch",title:"\u5982\u4f55\u4f7f\u7528 Spark \u5feb\u901f\u5c06\u6570\u636e\u5199\u5165 Elasticsearch",tags:["Spark","Kafka","Elasticsearch"]},prevItem:{title:"\u5982\u4f55\u5feb\u901f\u5730\u628a Hive \u4e2d\u7684\u6570\u636e\u5bfc\u5165 ClickHouse",permalink:"/zh-CN/blog/hive-to-clickhouse"},nextItem:{title:"\u600e\u4e48\u7528 Spark \u5728 TiDB \u4e0a\u505a OLAP \u5206\u6790",permalink:"/zh-CN/blog/spark-execute-tidb"}},u={authorsImageUrls:[]},p=[{value:"Kafka to Elasticsearch",id:"kafka-to-elasticsearch",level:2},{value:"Log Sample",id:"log-sample",level:3},{value:"Elasticsearch Document",id:"elasticsearch-document",level:3},{value:"Seatunnel with Elasticsearch",id:"seatunnel-with-elasticsearch",level:2},{value:"Seatunnel",id:"seatunnel",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Seatunnel Pipeline",id:"seatunnel-pipeline",level:3},{value:"Spark",id:"spark",level:4},{value:"Input",id:"input",level:4},{value:"Filter",id:"filter",level:4},{value:"Output",id:"output",level:4},{value:"Running Seatunnel",id:"running-seatunnel",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Contract us",id:"contract-us",level:2}],m={toc:p};function k(e){var t=e.components,i=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8bf4\u5230\u6570\u636e\u5199\u5165 Elasticsearch\uff0c\u6700\u5148\u60f3\u5230\u7684\u80af\u5b9a\u662fLogstash\u3002Logstash\u56e0\u4e3a\u5176\u7b80\u5355\u4e0a\u624b\u3001\u53ef\u6269\u5c55\u3001\u53ef\u4f38\u7f29\u7b49\u4f18\u70b9\u88ab\u5e7f\u5927\u7528\u6237\u63a5\u53d7\u3002\u4f46\u662f\u5c3a\u6709\u6240\u77ed\uff0c\u5bf8\u6709\u6240\u957f\uff0cLogstash\u80af\u5b9a\u4e5f\u6709\u5b83\u65e0\u6cd5\u9002\u7528\u7684\u5e94\u7528\u573a\u666f\uff0c\u6bd4\u5982\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6d77\u91cf\u6570\u636eETL"),(0,s.kt)("li",{parentName:"ul"},"\u6d77\u91cf\u6570\u636e\u805a\u5408"),(0,s.kt)("li",{parentName:"ul"},"\u591a\u6e90\u6570\u636e\u5904\u7406")),(0,s.kt)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u8fd9\u4e9b\u573a\u666f\uff0c\u5f88\u591a\u540c\u5b66\u90fd\u4f1a\u9009\u62e9Spark\uff0c\u501f\u52a9Spark\u7b97\u5b50\u8fdb\u884c\u6570\u636e\u5904\u7406\uff0c\u6700\u540e\u5c06\u5904\u7406\u7ed3\u679c\u5199\u5165Elasticsearch\u3002"),(0,s.kt)("p",null,"\u6211\u4eec\u90e8\u95e8\u4e4b\u524d\u5229\u7528Spark\u5bf9Nginx\u65e5\u5fd7\u8fdb\u884c\u5206\u6790\uff0c\u7edf\u8ba1\u6211\u4eec\u7684Web\u670d\u52a1\u8bbf\u95ee\u60c5\u51b5\uff0c\u5c06Nginx\u65e5\u5fd7\u6bcf\u5206\u949f\u805a\u5408\u4e00\u6b21\u6700\u540e\u5c06\u7ed3\u679c\u5199\u5165Elasticsearch\uff0c\u7136\u540e\u5229\u7528Kibana\u914d\u7f6e\u5b9e\u65f6\u76d1\u63a7Dashboard\u3002Elasticsearch\u548cKibana\u90fd\u5f88\u65b9\u4fbf\u3001\u5b9e\u7528\uff0c\u4f46\u662f\u968f\u7740\u7c7b\u4f3c\u9700\u6c42\u8d8a\u6765\u8d8a\u591a\uff0c\u5982\u4f55\u5feb\u901f\u901a\u8fc7Spark\u5c06\u6570\u636e\u5199\u5165Elasticsearch\u6210\u4e3a\u4e86\u6211\u4eec\u7684\u4e00\u5927\u95ee\u9898\u3002"),(0,s.kt)("p",null,"\u4eca\u5929\u7ed9\u5927\u5bb6\u63a8\u8350\u4e00\u6b3e\u80fd\u591f\u5b9e\u73b0\u6570\u636e\u5feb\u901f\u5199\u5165\u7684\u9ed1\u79d1\u6280 Seatunnel ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"https://github.com/apache/incubator-seatunnel")," \u4e00\u4e2a\u975e\u5e38\u6613\u7528\uff0c\u9ad8\u6027\u80fd\uff0c\u80fd\u591f\u5e94\u5bf9\u6d77\u91cf\u6570\u636e\u7684\u5b9e\u65f6\u6570\u636e\u5904\u7406\u4ea7\u54c1\uff0c\u5b83\u6784\u5efa\u5728Spark\u4e4b\u4e0a\uff0c\u7b80\u5355\u6613\u7528\uff0c\u7075\u6d3b\u914d\u7f6e\uff0c\u65e0\u9700\u5f00\u53d1\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",src:a(9434).Z,width:"818",height:"466"})),(0,s.kt)("h2",{id:"kafka-to-elasticsearch"},"Kafka to Elasticsearch"),(0,s.kt)("p",null,"\u548cLogstash\u4e00\u6837\uff0cSeatunnel\u540c\u6837\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\u8f93\u5165\uff0c\u8fd9\u91cc\u6211\u4eec\u4ee5\u6700\u5e38\u89c1\u7684Kakfa\u4f5c\u4e3a\u8f93\u5165\u6e90\u4e3a\u4f8b\uff0c\u8bb2\u89e3\u5982\u4f55\u4f7f\u7528 Seatunnel \u5c06\u6570\u636e\u5feb\u901f\u5199\u5165Elasticsearch"),(0,s.kt)("h3",{id:"log-sample"},"Log Sample"),(0,s.kt)("p",null,"\u539f\u59cb\u65e5\u5fd7\u683c\u5f0f\u5982\u4e0b:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'127.0.0.1 elasticsearch.cn 114.250.140.241 0.001s "127.0.0.1:80" [26/Oct/2018:21:54:32 +0800] "GET /article HTTP/1.1" 200 123 "-" - "Dalvik/2.1.0 (Linux; U; Android 7.1.1; OPPO R11 Build/NMF26X)"\n')),(0,s.kt)("h3",{id:"elasticsearch-document"},"Elasticsearch Document"),(0,s.kt)("p",null,"\u6211\u4eec\u60f3\u8981\u7edf\u8ba1\uff0c\u4e00\u5206\u949f\u6bcf\u4e2a\u57df\u540d\u7684\u8bbf\u95ee\u60c5\u51b5\uff0c\u805a\u5408\u5b8c\u7684\u6570\u636e\u6709\u4ee5\u4e0b\u5b57\u6bb5:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"domain String\nhostname String\nstatus int\ndatetime String\ncount int\n")),(0,s.kt)("h2",{id:"seatunnel-with-elasticsearch"},"Seatunnel with Elasticsearch"),(0,s.kt)("p",null,"\u63a5\u4e0b\u6765\u4f1a\u7ed9\u5927\u5bb6\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u6211\u4eec\u5982\u4f55\u901a\u8fc7 Seatunnel \u8bfb\u53d6Kafka\u4e2d\u7684\u6570\u636e\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u89e3\u6790\u4ee5\u53ca\u805a\u5408\uff0c\u6700\u540e\u5c06\u5904\u7406\u7ed3\u679c\u5199\u5165Elasticsearch\u4e2d\u3002"),(0,s.kt)("h3",{id:"seatunnel"},"Seatunnel"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"Seatunnel")," \u540c\u6837\u62e5\u6709\u7740\u975e\u5e38\u4e30\u5bcc\u7684\u63d2\u4ef6\uff0c\u652f\u6301\u4eceKafka\u3001HDFS\u3001Hive\u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u8fdb\u884c\u5404\u79cd\u5404\u6837\u7684\u6570\u636e\u5904\u7406\uff0c\u5e76\u5c06\u7ed3\u679c\u5199\u5165Elasticsearch\u3001Kudu\u6216\u8005Kafka\u4e2d\u3002"),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u5b89\u88c5seatunnel\uff0c\u5b89\u88c5\u5341\u5206\u7b80\u5355\uff0c\u65e0\u9700\u914d\u7f6e\u7cfb\u7edf\u73af\u5883\u53d8\u91cf"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u51c6\u5907Spark\u73af\u5883"),(0,s.kt)("li",{parentName:"ol"},"\u5b89\u88c5 Seatunnel"),(0,s.kt)("li",{parentName:"ol"},"\u914d\u7f6e Seatunnel")),(0,s.kt)("p",null,"\u4ee5\u4e0b\u662f\u7b80\u6613\u6b65\u9aa4\uff0c\u5177\u4f53\u5b89\u88c5\u53ef\u4ee5\u53c2\u7167 ",(0,s.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"cd /usr/local\nwget https://archive.apache.org/dist/spark/spark-2.2.0/spark-2.2.0-bin-hadoop2.7.tgz\ntar -xvf https://archive.apache.org/dist/spark/spark-2.2.0/spark-2.2.0-bin-hadoop2.7.tgz\nwget https://github.com/InterestingLab/seatunnel/releases/download/v1.1.1/seatunnel-1.1.1.zip\nunzip seatunnel-1.1.1.zip\ncd seatunnel-1.1.1\n\nvim config/seatunnel-env.sh\n# \u6307\u5b9aSpark\u5b89\u88c5\u8def\u5f84\nSPARK_HOME=${SPARK_HOME:-/usr/local/spark-2.2.0-bin-hadoop2.7}\n")),(0,s.kt)("h3",{id:"seatunnel-pipeline"},"Seatunnel Pipeline"),(0,s.kt)("p",null,"\u4e0eLogstash\u4e00\u6837\uff0c\u6211\u4eec\u4ec5\u9700\u8981\u7f16\u5199\u4e00\u4e2aSeatunnel Pipeline\u7684\u914d\u7f6e\u6587\u4ef6\u5373\u53ef\u5b8c\u6210\u6570\u636e\u7684\u5bfc\u5165\uff0c\u76f8\u4fe1\u4e86\u89e3Logstash\u7684\u670b\u53cb\u53ef\u4ee5\u5f88\u5feb\u5165\u624b Seatunnel \u914d\u7f6e\u3002"),(0,s.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5305\u62ec\u56db\u4e2a\u90e8\u5206\uff0c\u5206\u522b\u662fSpark\u3001Input\u3001filter\u548cOutput\u3002"),(0,s.kt)("h4",{id:"spark"},"Spark"),(0,s.kt)("p",null,"\u8fd9\u4e00\u90e8\u5206\u662fSpark\u7684\u76f8\u5173\u914d\u7f6e\uff0c\u4e3b\u8981\u914d\u7f6eSpark\u6267\u884c\u65f6\u6240\u9700\u7684\u8d44\u6e90\u5927\u5c0f\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'spark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  spark.streaming.batchDuration = 5\n}\n')),(0,s.kt)("h4",{id:"input"},"Input"),(0,s.kt)("p",null,"\u8fd9\u4e00\u90e8\u5206\u5b9a\u4e49\u6570\u636e\u6e90\uff0c\u5982\u4e0b\u662f\u4eceKafka\u4e2d\u8bfb\u53d6\u6570\u636e\u7684\u914d\u7f6e\u6848\u4f8b\uff0c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'kafkaStream {\n    topics = "seatunnel-es"\n    consumer.bootstrap.servers = "localhost:9092"\n    consumer.group.id = "seatunnel_es_group"\n    consumer.rebalance.max.retries = 100\n}\n')),(0,s.kt)("h4",{id:"filter"},"Filter"),(0,s.kt)("p",null,"\u5728Filter\u90e8\u5206\uff0c\u8fd9\u91cc\u6211\u4eec\u914d\u7f6e\u4e00\u7cfb\u5217\u7684\u8f6c\u5316\uff0c\u5305\u62ec\u6b63\u5219\u89e3\u6790\u5c06\u65e5\u5fd7\u8fdb\u884c\u62c6\u5206\u3001\u65f6\u95f4\u8f6c\u6362\u5c06HTTPDATE\u8f6c\u5316\u4e3aElasticsearch\u652f\u6301\u7684\u65e5\u671f\u683c\u5f0f\u3001\u5bf9Number\u7c7b\u578b\u7684\u5b57\u6bb5\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\u4ee5\u53ca\u901a\u8fc7SQL\u8fdb\u884c\u6570\u636e\u805a\u5408"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'filter {\n    # \u4f7f\u7528\u6b63\u5219\u89e3\u6790\u539f\u59cb\u65e5\u5fd7\n    # \u6700\u5f00\u59cb\u6570\u636e\u90fd\u5728raw_message\u5b57\u6bb5\u4e2d\n    grok {\n        source_field = "raw_message"\n        pattern = \'%{NOTSPACE:hostname}\\\\s%{NOTSPACE:domain}\\\\s%{IP:remote_addr}\\\\s%{NUMBER:request_time}s\\\\s\\"%{DATA:upstream_ip}\\"\\\\s\\\\[%{HTTPDATE:timestamp}\\\\]\\\\s\\"%{NOTSPACE:method}\\\\s%{DATA:url}\\\\s%{NOTSPACE:http_ver}\\"\\\\s%{NUMBER:status}\\\\s%{NUMBER:body_bytes_send}\\\\s%{DATA:referer}\\\\s%{NOTSPACE:cookie_info}\\\\s\\"%{DATA:user_agent}\'\n   }\n    # \u5c06"dd/MMM/yyyy:HH:mm:ss Z"\u683c\u5f0f\u7684\u6570\u636e\u8f6c\u6362\u4e3a\n    # Elasticsearch\u4e2d\u652f\u6301\u7684\u683c\u5f0f\n    date {\n        source_field = "timestamp"\n        target_field = "datetime"\n        source_time_format = "dd/MMM/yyyy:HH:mm:ss Z"\n        target_time_format = "yyyy-MM-dd\'T\'HH:mm:ss.SSS+08:00"\n    }\n    ## \u5229\u7528SQL\u5bf9\u6570\u636e\u8fdb\u884c\u805a\u5408\n    sql {\n        table_name = "access_log"\n        sql = "select domain, hostname, int(status), datetime, count(*) from access_log group by domain, hostname, status, datetime"\n    }\n }\n')),(0,s.kt)("h4",{id:"output"},"Output"),(0,s.kt)("p",null,"\u6700\u540e\u6211\u4eec\u5c06\u5904\u7406\u597d\u7684\u7ed3\u6784\u5316\u6570\u636e\u5199\u5165Elasticsearch\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'output {\n    elasticsearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${now}"\n        es.batch.size.entries = 100000\n        index_time_format = "yyyy.MM.dd"\n    }\n}\n')),(0,s.kt)("h3",{id:"running-seatunnel"},"Running Seatunnel"),(0,s.kt)("p",null,"\u6211\u4eec\u5c06\u4e0a\u8ff0\u56db\u90e8\u5206\u914d\u7f6e\u7ec4\u5408\u6210\u4e3a\u6211\u4eec\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,s.kt)("inlineCode",{parentName:"p"},"config/batch.conf"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"vim config/batch.conf\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'spark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  spark.streaming.batchDuration = 5\n}\ninput {\n    kafkaStream {\n        topics = "seatunnel-es"\n        consumer.bootstrap.servers = "localhost:9092"\n        consumer.group.id = "seatunnel_es_group"\n        consumer.rebalance.max.retries = 100\n    }\n}\nfilter {\n    # \u4f7f\u7528\u6b63\u5219\u89e3\u6790\u539f\u59cb\u65e5\u5fd7\n    # \u6700\u5f00\u59cb\u6570\u636e\u90fd\u5728raw_message\u5b57\u6bb5\u4e2d\n    grok {\n        source_field = "raw_message"\n        pattern = \'%{IP:hostname}\\\\s%{NOTSPACE:domain}\\\\s%{IP:remote_addr}\\\\s%{NUMBER:request_time}s\\\\s\\"%{DATA:upstream_ip}\\"\\\\s\\\\[%{HTTPDATE:timestamp}\\\\]\\\\s\\"%{NOTSPACE:method}\\\\s%{DATA:url}\\\\s%{NOTSPACE:http_ver}\\"\\\\s%{NUMBER:status}\\\\s%{NUMBER:body_bytes_send}\\\\s%{DATA:referer}\\\\s%{NOTSPACE:cookie_info}\\\\s\\"%{DATA:user_agent}\'\n   }\n    # \u5c06"dd/MMM/yyyy:HH:mm:ss Z"\u683c\u5f0f\u7684\u6570\u636e\u8f6c\u6362\u4e3a\n    # Elasticsearch\u4e2d\u652f\u6301\u7684\u683c\u5f0f\n    date {\n        source_field = "timestamp"\n        target_field = "datetime"\n        source_time_format = "dd/MMM/yyyy:HH:mm:ss Z"\n        target_time_format = "yyyy-MM-dd\'T\'HH:mm:00.SSS+08:00"\n    }\n    ## \u5229\u7528SQL\u5bf9\u6570\u636e\u8fdb\u884c\u805a\u5408\n    sql {\n        table_name = "access_log"\n        sql = "select domain, hostname, status, datetime, count(*) from access_log group by domain, hostname, status, datetime"\n    }\n }\noutput {\n    elasticsearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${now}"\n        es.batch.size.entries = 100000\n        index_time_format = "yyyy.MM.dd"\n    }\n}\n')),(0,s.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff0c\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd0\u884c Seatunnel\uff0c\u5373\u53ef\u5c06\u6570\u636e\u5199\u5165Elasticsearch\u3002\u8fd9\u91cc\u6211\u4eec\u4ee5\u672c\u5730\u6a21\u5f0f\u4e3a\u4f8b\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"./bin/start-seatunnel.sh --config config/batch.conf -e client -m 'local[2]'\n")),(0,s.kt)("p",null,"\u6700\u540e\uff0c\u5199\u5165Elasticsearch\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff0c\u518d\u914d\u4e0aKibana\u5c31\u53ef\u4ee5\u5b9e\u73b0Web\u670d\u52a1\u7684\u5b9e\u65f6\u76d1\u63a7\u4e86^_^."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'"_source": {\n    "domain": "elasticsearch.cn",\n    "hostname": "localhost",\n    "status": "200",\n    "datetime": "2018-11-26T21:54:00.000+08:00",\n    "count": 26\n  }\n')),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 Seatunnel \u5c06Kafka\u4e2d\u7684\u6570\u636e\u5199\u5165Elasticsearch\u4e2d\u3002\u4ec5\u4ec5\u901a\u8fc7\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u4fbf\u53ef\u5feb\u901f\u8fd0\u884c\u4e00\u4e2aSpark Application\uff0c\u5b8c\u6210\u6570\u636e\u7684\u5904\u7406\u3001\u5199\u5165\uff0c\u65e0\u9700\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\uff0c\u5341\u5206\u7b80\u5355\u3002"),(0,s.kt)("p",null,"\u5f53\u6570\u636e\u5904\u7406\u8fc7\u7a0b\u4e2d\u6709\u9047\u5230Logstash\u65e0\u6cd5\u652f\u6301\u7684\u573a\u666f\u6216\u8005Logstah\u6027\u80fd\u65e0\u6cd5\u8fbe\u5230\u9884\u671f\u7684\u60c5\u51b5\u4e0b\uff0c\u90fd\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 Seatunnel \u89e3\u51b3\u95ee\u9898\u3002"),(0,s.kt)("p",null,"\u5e0c\u671b\u4e86\u89e3 Seatunnel \u4e0eElasticsearch\u3001Kafka\u3001Hadoop\u7ed3\u5408\u4f7f\u7528\u7684\u66f4\u591a\u529f\u80fd\u548c\u6848\u4f8b\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165\u5b98\u7f51 ",(0,s.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/"},"https://seatunnel.apache.org/")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u6211\u4eec\u8fd1\u671f\u4f1a\u518d\u53d1\u5e03\u4e00\u7bc7\u300a\u5982\u4f55\u7528Spark\u548cElasticsearch\u505a\u4ea4\u4e92\u5f0f\u6570\u636e\u5206\u6790\u300b\uff0c\u656c\u8bf7\u671f\u5f85.")),(0,s.kt)("h2",{id:"contract-us"},"Contract us"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u90ae\u4ef6\u5217\u8868 : ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"mailto:dev@seatunnel.apache.org"},"dev@seatunnel.apache.org")),". \u53d1\u9001\u4efb\u610f\u5185\u5bb9\u81f3 ",(0,s.kt)("inlineCode",{parentName:"li"},"dev-subscribe@seatunnel.apache.org"),"\uff0c \u6309\u7167\u56de\u590d\u8ba2\u9605\u90ae\u4ef6\u5217\u8868\u3002"),(0,s.kt)("li",{parentName:"ul"},"Slack: \u53d1\u9001 ",(0,s.kt)("inlineCode",{parentName:"li"},"Request to join SeaTunnel slack")," \u90ae\u4ef6\u5230\u90ae\u4ef6\u5217\u8868 (",(0,s.kt)("inlineCode",{parentName:"li"},"dev@seatunnel.apache.org"),"), \u6211\u4eec\u4f1a\u9080\u8bf7\u4f60\u52a0\u5165\uff08\u5728\u6b64\u4e4b\u524d\u8bf7\u786e\u8ba4\u5df2\u7ecf\u6ce8\u518cSlack\uff09."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://space.bilibili.com/1542095008"},"bilibili B\u7ad9 \u89c6\u9891"))))}k.isMDXComponent=!0},9434:function(e,t,a){t.Z=a.p+"assets/images/wd-struct-fd963482dc80fdee6e4930107709bd28.png"}}]);