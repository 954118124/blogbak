(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{517:function(s,e,t){"use strict";t.r(e);var _=t(18),a=Object(_.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-redis是单线程的吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis是单线程的吗"}},[s._v("#")]),s._v(" 1 Redis是单线程的吗？")]),s._v(" "),t("p",[t("strong",[s._v("Redis 的单线程主要是指 Redis 的网络 IO（即一个线程处理所有网络请求） 和键值对读写是由一个线程来完成的")]),s._v("，这也是 Redis 对外 提供键值存储服务的主要流程。但 Redis的其他功能，比如持久化、异步删除、集群数据同步等，其实是由额外的线程执行的。")]),s._v(" "),t("h2",{attrs:{id:"_2-redis单线程为什么还能这么快"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis单线程为什么还能这么快"}},[s._v("#")]),s._v(" 2 Redis单线程为什么还能这么快？")]),s._v(" "),t("p",[t("strong",[s._v("因为Redis所有数据都在内存中，所有的运算都是内存级别的运算，而且单线程避免了多线程的切换性能损耗问题。")])]),s._v(" "),t("p",[s._v("正因为Redis是单线程的，所有要小心使用Redis指令，对于那些耗时的指令（比如keys），一定要谨慎使用，一不小心就可能会导致Redis卡顿。")]),s._v(" "),t("h2",{attrs:{id:"_3-redis单线程如何处理那么多的并发客户端连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis单线程如何处理那么多的并发客户端连接"}},[s._v("#")]),s._v(" 3 Redis单线程如何处理那么多的并发客户端连接？")]),s._v(" "),t("p",[t("strong",[s._v("核心是利用epoll来使用IO多路复用。")])]),s._v(" "),t("p",[s._v("Redis基于"),t("strong",[s._v("Reactor模式")]),s._v("开发了自己的网络事件处理器，称之为文件事件处理器。文件事件处理器由"),t("strong",[s._v("Socket")]),s._v("、"),t("strong",[s._v("IO多路复用程序")]),s._v("、"),t("strong",[s._v("文件事件分派器")]),s._v("、"),t("strong",[s._v("事件处理器")]),s._v("四部分组成。")]),s._v(" "),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/ce3a583097ca8caa1c4fb85258d726b2.png",width:"70%"}}),s._v(" "),t("p",[s._v("IO多路复用程序会把所有产生事件的socket压入一个队列中，然后有序地每次仅一个socket的方式传送给文件事件分派器，文件事件分派器接收到socket之后会根据socket产生的事件类型调用对应的事件处理器进行处理。")]),s._v(" "),t("p",[t("strong",[s._v("Reactor模式")])]),s._v(" "),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/f6eecf2af0ba96a3f5f5cada6d8e81ec.png",width:"70%"}}),s._v(" "),t("p",[s._v("Reactor模式：基于事件驱动的设计，当有事件触发时，才会调用处理器进行数据处理。"),t("br"),s._v("\n从结构上，这有点类似生产者消费者模式，即有一个或多个生产者将事件放入一个Queue中，而一个或多个消费者主动的从这个Queue中Poll事件来处理；"),t("br"),s._v("\n而Reactor模式则并没有Queue来做缓冲，每当一个Event输入到Service Handler之后，"),t("br"),s._v("\n该Service Handler会主动的根据不同的Event类型将其分发给对应的Request Handler来处理。")]),s._v(" "),t("h2",{attrs:{id:"_4-redis支持哪些数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-redis支持哪些数据类型"}},[s._v("#")]),s._v(" 4 Redis支持哪些数据类型？")]),s._v(" "),t("p",[s._v("Redis主要支持5种数据类型，分别是：")]),s._v(" "),t("p",[s._v("string（字符串），hash（哈希），list（列表），set（集合），zset（有序集合）")]),s._v(" "),t("p",[t("strong",[s._v("string:")])]),s._v(" "),t("p",[s._v("string类型是redis最基本的数据类型，一个键最大能存储512M")]),s._v(" "),t("p",[s._v('示例：增加：set name "testname" 查看：get name')]),s._v(" "),t("p",[t("strong",[s._v("hash:")])]),s._v(" "),t("p",[s._v("hash是一个string类型的field和value的映射表。hash特别适合存储对象。")]),s._v(" "),t("p",[s._v('示例：增加：hset myhash myfield1 "hello" myfield2 "world" 查看：hget myhash myfield2')]),s._v(" "),t("p",[t("strong",[s._v("list:")])]),s._v(" "),t("p",[s._v("list是简单的字符串列表。可以从队头或者队尾插入元素。")]),s._v(" "),t("p",[s._v("示例：增加：lpush mytestlist value1 value2 查看：lrange mytestlist 0 10")]),s._v(" "),t("p",[t("strong",[s._v("set:")])]),s._v(" "),t("p",[s._v("set是string类型的无序集合，集合成员是唯一的。")]),s._v(" "),t("p",[s._v("示例：增加：sadd mytestset value1 查看：smembers mytestset")]),s._v(" "),t("p",[t("strong",[s._v("zset:")])]),s._v(" "),t("p",[s._v("zset是一个有序的set集合，每个元素会关联一个double型的分数，分数可以重复。")]),s._v(" "),t("p",[s._v("示例：增加：zadd mytestzset 1 value1 查看：zrange mytestzset 0 10 withscores")]),s._v(" "),t("h2",{attrs:{id:"_5-redis的单点吞吐量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-redis的单点吞吐量"}},[s._v("#")]),s._v(" 5 Redis的单点吞吐量？")]),s._v(" "),t("p",[s._v("单点TPS达8万/秒，QPS达10万/秒。")]),s._v(" "),t("h2",{attrs:{id:"_6-其他高级命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-其他高级命令"}},[s._v("#")]),s._v(" 6 其他高级命令")]),s._v(" "),t("p",[s._v("keys:全量遍历键，用来列出所有满足特定正则字符串规则的key，当redis数据量比较大时，性能比较差，要避免使用。")]),s._v(" "),t("h2",{attrs:{id:"_7-redis最大内存配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-redis最大内存配置"}},[s._v("#")]),s._v(" 7 Redis最大内存配置")]),s._v(" "),t("p",[s._v("一般推荐Redis设置最大内存"),t("strong",[s._v("maxmemory")]),s._v("为最大物理内存的四分之三。")]),s._v(" "),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/c7b9efa73f31b780ab3dfb4b17cbe588.png",width:"70%"}}),s._v(" "),t("p",[s._v("如果不设置最大内存，当 Redis 内存超出物理内存限制时，内存的数据会开始和磁盘产生频繁的交 换 (swap)，会让 Redis 的性能急剧下降。")]),s._v(" "),t("p",[s._v("当Redis运行在主从模式时，只有主结点才会执行过期删除策略，然后把删除操作”del key”同步到从结点删除数据。")])])}),[],!1,null,null,null);e.default=a.exports}}]);