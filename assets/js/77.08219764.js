(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{571:function(s,a,t){"use strict";t.r(a);var n=t(18),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-解压安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-解压安装包"}},[s._v("#")]),s._v(" 1 解压安装包")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("kibana-7.6.1-linux-x86_64.tar.gz 安装包已先上传到 / 根目录上。")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zvxf kibana-7.6.1-linux-x86_64.tar.gz -C /louis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重命名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" kibana-7.6.1-linux-x86_64 kibana-7.6.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_2-配置文件修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置文件修改"}},[s._v("#")]),s._v(" 2 配置文件修改")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /louis/kibana-7.6.1/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" kibana.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("server.port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v("\nserver.host: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.16.227.132"')]),s._v("\nelasticsearch.hosts: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://172.16.227.132:9200"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里是elasticsearch的访问地址")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_3-启动kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动kibana"}},[s._v("#")]),s._v(" 3 启动Kibana")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("/louis/kibana-7.6.1/bin/kibana\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_4-访问kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-访问kibana"}},[s._v("#")]),s._v(" 4 访问Kibana")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://172.16.227.132:5601/app/kibana\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);