(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{526:function(_,t,v){"use strict";v.r(t);var r=v(18),s=Object(r.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-什么是http"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是http"}},[_._v("#")]),_._v(" 1 什么是HTTP？")]),_._v(" "),v("p",[_._v("HTTP（Hypertext Transfer Protocol）超文本传输协议，是一种用于分布式、协作式和超媒体信息系统的应用层协议，可以说HTTP是当代互联网通信的基础。")]),_._v(" "),v("p",[_._v("但是，HTTP 有着一个致命的缺陷，那就是内容是明文传输的，没有经过任何加密，而这些明文数据会经过WiFi、路由器、运营商、机房等多个物理设备节点，如果在这中间任意一个节点被监听，传输的内容就会完全暴露。")]),_._v(" "),v("h2",{attrs:{id:"_2-什么是https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是https"}},[_._v("#")]),_._v(" 2 什么是HTTPS？")]),_._v(" "),v("p",[_._v("HTTPS其实就是将HTTP的数据包再通过SSL/TLS加密后传输，那么SSL/TLS又是什么呢？")]),_._v(" "),v("p",[_._v("SSL（Secure Sockets Layer）安全套接层和TLS（Transport Layer Security）传输层安全协议其实是一套东西。")]),_._v(" "),v("h2",{attrs:{id:"_3-什么是对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么是对称加密"}},[_._v("#")]),_._v(" 3 什么是对称加密？")]),_._v(" "),v("p",[_._v("对称加密是指有一个密钥，用它可以对一段明文加密，加密之后也只能用这个密钥来解密得到明文。")]),_._v(" "),v("h2",{attrs:{id:"_4-什么是非对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-什么是非对称加密"}},[_._v("#")]),_._v(" 4 什么是非对称加密？")]),_._v(" "),v("p",[_._v("非对称加密有两个密钥，一个是公钥，另一个是私钥。一般来说，公钥用来加密，这时密文只能用私钥才能解开。")]),_._v(" "),v("h2",{attrs:{id:"_5-https加解密过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-https加解密过程"}},[_._v("#")]),_._v(" 5 HTTPS加解密过程？")]),_._v(" "),v("p",[_._v("1.服务端有非对称加密的公钥A1，私钥A2。")]),_._v(" "),v("p",[_._v("2.客户端有非对称加密的公钥B1，私钥B2。")]),_._v(" "),v("p",[_._v("3.客户端向服务端发起请求，服务端将公钥A1返回给客户端。")]),_._v(" "),v("p",[_._v("4.浏览器收到公钥A1，将自己保存的公钥B1发送给服务端。")]),_._v(" "),v("p",[_._v("5.之后浏览器所有向客户端发送的数据，使用公钥B1加密，客户端可以使用私钥B2解密。")]),_._v(" "),v("p",[_._v("6.客户端所有向服务端发送的数据，使用公钥A1加密，服务端可以使用私钥A2解密。")]),_._v(" "),v("p",[v("strong",[_._v("此时，两条传输方向的数据都经过非对称加密，都能保证安全性，那么为什么不采用这种方案呢？")])]),_._v(" "),v("p",[v("strong",[_._v("最主要的原因是非对称加解密耗时要远大于对称加解密，对性能有很大损耗，大家的使用体验很差。")])]),_._v(" "),v("p",[v("strong",[_._v("所以，我们才最终选用了上文介绍到非对称加密+对称加密的方案：")])]),_._v(" "),v("p",[_._v("1.服务端有非对称加密的公钥A1，私钥A2。")]),_._v(" "),v("p",[_._v("2.客户端发起请求，服务端将公钥A1返回给客户端。")]),_._v(" "),v("p",[_._v("3.客户端随机生成一个对称加密的密钥K，用公钥A1加密后发送给服务端。")]),_._v(" "),v("p",[_._v("4.服务端收到密文后用自己的私钥A2解密，得到对称密钥K，此时完成了安全的对称密钥交换，解决了对称加密时密钥传输被人窃取的问题。")]),_._v(" "),v("p",[_._v("5.之后双方通信都使用密钥K进行对称加解密。")]),_._v(" "),v("p",[v("strong",[_._v("看起来是一个非常完美的方案，兼顾了安全性和性能，但是，真的就安全了么？")])]),_._v(" "),v("p",[_._v("依然考虑中间人攻击的情况，非对称加密的算法都是公开的，所有人都可以自己生成一对公钥私钥。")]),_._v(" "),v("p",[_._v("当服务端向客户端返回公钥A1的时候，中间人将其替换成自己的公钥B1传送给浏览器。")]),_._v(" "),v("p",[_._v("而浏览器此时一无所知，傻乎乎地使用公钥B1加密了密钥K发送出去，又被中间人截获。")]),_._v(" "),v("p",[v("strong",[_._v("出现这一问题的核心原因是客户端无法确认收到的公钥是不是真的是服务端发来的。为了解决这个问题，互联网引入了一个公信机构，这就是CA。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);