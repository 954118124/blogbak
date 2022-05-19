(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{564:function(s,a,t){"use strict";t.r(a);var e=t(18),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-生成-修改秘钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成-修改秘钥"}},[s._v("#")]),s._v(" 1 生成/修改秘钥")]),s._v(" "),t("p",[s._v("生成SSH密钥的指令如下，想要修改也是用这个先生成再覆盖")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ssh-keygen -t rsa -b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yourid@email.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("看到这个页面就说明成功生成密钥啦！")]),s._v(" "),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/img_jqbw_3.png",width:"70%"}}),s._v(" "),t("h2",{attrs:{id:"_2-ssh密钥添加到ssh-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-ssh密钥添加到ssh-agent"}},[s._v("#")]),s._v(" 2 SSH密钥添加到ssh-agent")]),s._v(" "),t("p",[s._v("1.启动ssh-agent")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("结果如下")]),s._v(" "),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/img_jqbw_4.png",width:"70%"}}),s._v(" "),t("p",[s._v("2.把SSH私钥添加到ssh-agent")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ssh-add ~/.ssh/id_rsa\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/img_jqbw_5.png",width:"70%"}}),s._v(" "),t("h2",{attrs:{id:"ssh秘钥添加到github账户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh秘钥添加到github账户"}},[s._v("#")]),s._v(" SSH秘钥添加到GitHub账户")]),s._v(" "),t("p",[s._v("1.复制密钥")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路径：")]),s._v("\n~/.ssh/id_rsa.pub\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("2.访问GitHub，右上角点击头像，进入Settings")]),s._v(" "),t("p",[s._v("点 SSH and GPG keys")]),s._v(" "),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/img_jqbw_6.png",width:"40%"}}),s._v(" "),t("p",[s._v("新增秘钥")]),s._v(" "),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/img_jqbw_7.png",width:"70%"}}),s._v(" "),t("p",[s._v("测试")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/img_jqbw_8.png",width:"70%"}}),s._v(" "),t("p",[s._v("如果是第一次添加SSH，还应该会问你\nAre you sure you want to continue connecting?")]),s._v(" "),t("p",[t("strong",[s._v("选择 yes")])])])}),[],!1,null,null,null);a.default=n.exports}}]);