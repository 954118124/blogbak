(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{539:function(t,a,_){"use strict";_.r(a);var s=_(18),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"系统架构设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统架构设计"}},[t._v("#")]),t._v(" 系统架构设计")]),t._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("一个好的软件架构，应该遵循"),_("strong",[t._v("高性能、高可用、易扩展")]),t._v(" 3 大原则，其中「高可用」在系统规模变得越来越大时，变得尤为重要。")]),t._v(" "),_("h2",{attrs:{id:"_1-高性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-高性能"}},[t._v("#")]),t._v(" 1 高性能")]),t._v(" "),_("h3",{attrs:{id:"_1-1-服务拆分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-服务拆分"}},[t._v("#")]),t._v(" 1.1 服务拆分")]),t._v(" "),_("p",[t._v("按功能纬度、读写维度（如yl-nwm-waybillouter-api）")]),t._v(" "),_("h3",{attrs:{id:"_1-2-缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-缓存"}},[t._v("#")]),t._v(" 1.2 缓存")]),t._v(" "),_("p",[t._v("浏览器缓存、cdn缓存、应用层缓存（redis、内存缓存等）")]),t._v(" "),_("h3",{attrs:{id:"_1-3-消息队列解耦削峰"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-消息队列解耦削峰"}},[t._v("#")]),t._v(" 1.3 消息队列解耦削峰")]),t._v(" "),_("p",[t._v("运单收发到派签消息通过RabbitMQ发送")]),t._v(" "),_("h3",{attrs:{id:"_1-4-负载均衡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-负载均衡"}},[t._v("#")]),t._v(" 1.4 负载均衡")]),t._v(" "),_("p",[t._v("常见的负载均衡系统包括3种：")]),t._v(" "),_("p",[_("strong",[t._v("DNS负载均衡")]),t._v("：一般用来实现地理级别的均衡。")]),t._v(" "),_("p",[_("strong",[t._v("硬件负载均衡")]),t._v("：通过独立的硬件设备，比如F5，实现负载均衡功能（硬件价格一般较贵）。")]),t._v(" "),_("p",[_("strong",[t._v("软件负载均衡")]),t._v("：通过软件的方式，比如Nginx，实现负载均衡功能。")]),t._v(" "),_("h3",{attrs:{id:"_1-5-读写分离-分库分表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-读写分离-分库分表"}},[t._v("#")]),t._v(" 1.5 读写分离&分库分表")]),t._v(" "),_("h4",{attrs:{id:"_1-5-1-读写分离会带来的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1-读写分离会带来的问题"}},[t._v("#")]),t._v(" 1.5.1 读写分离会带来的问题")]),t._v(" "),_("p",[t._v("主库和从库数据同步存在延迟，写完数据马上读取时可能读不到最新数据。")]),t._v(" "),_("p",[t._v("解决方法：")]),t._v(" "),_("p",[_("strong",[t._v("1.强制将读请求路由到主库处理")])]),t._v(" "),_("p",[t._v("比如 Sharding-JDBC，可以通过 HintManager 分片键值管理器强制使用主库。")]),t._v(" "),_("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/ce763328ae5e186b847168672f356bf9.png",width:"70%"}}),t._v(" "),_("p",[_("strong",[t._v("2.延迟读取")])]),t._v(" "),_("p",[t._v("这种方式不太合适 ...")]),t._v(" "),_("h4",{attrs:{id:"_1-5-2-主从复制原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-2-主从复制原理"}},[t._v("#")]),t._v(" 1.5.2 主从复制原理")]),t._v(" "),_("p",[t._v("1.主库将数据变化写入binlog。")]),t._v(" "),_("p",[t._v("2.从库创建一个I/O线程向主库请求更新的binlog。")]),t._v(" "),_("p",[t._v("3.主库创建一个线程发送binlog，从库I/O线程负责接收。")]),t._v(" "),_("p",[t._v("4.从库I/O线程接收的binlog写入到relay log中。")]),t._v(" "),_("p",[t._v("5.从库的SQL线程读取relay log同步数据到本地（也就是再执行一遍SQL）。")]),t._v(" "),_("h4",{attrs:{id:"_1-5-3-分库分表带来的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-3-分库分表带来的问题"}},[t._v("#")]),t._v(" 1.5.3 分库分表带来的问题")]),t._v(" "),_("p",[t._v("1.join操作：表分布到不同数据库，导致无法进行连表操作。")]),t._v(" "),_("p",[t._v("2.事务问题：操作不同数据库的表，自带的事务无法支持。")]),t._v(" "),_("p",[t._v("3.分布式id：自增主键等方式无法使用，需引入分布式ID。")]),t._v(" "),_("h4",{attrs:{id:"_1-5-4-分库分表后-数据怎么迁移"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-4-分库分表后-数据怎么迁移"}},[t._v("#")]),t._v(" 1.5.4 分库分表后，数据怎么迁移？")]),t._v(" "),_("p",[t._v("使用数据库同步工具 Canal 做增量数据迁移（还是依赖 binlog，开发和维护成本较低）。")]),t._v(" "),_("h2",{attrs:{id:"_2-高可用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-高可用"}},[t._v("#")]),t._v(" 2 高可用")]),t._v(" "),_("h3",{attrs:{id:"_2-1-衡量高可用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-衡量高可用"}},[t._v("#")]),t._v(" 2.1 衡量高可用")]),t._v(" "),_("p",[t._v("高可用通常通常用两个指标来衡量。")]),t._v(" "),_("p",[_("strong",[t._v("平均故障时间间隔")]),t._v("：表示两次故障的时间间隔，也就是系统正常运行平均时间。这个时间越长越稳定。")]),t._v(" "),_("p",[_("strong",[t._v("故障恢复时间")]),t._v("：系统发生故障后的恢复时间。这个时间越短，对用户影响越小。")]),t._v(" "),_("p",[t._v("可用性跟这两个指标之间的关系为：")]),t._v(" "),_("p",[_("strong",[t._v("可用性")]),t._v(" = "),_("strong",[t._v("平均故障时间间隔")]),t._v(" / ("),_("strong",[t._v("平均故障时间间隔")]),t._v(" + "),_("strong",[t._v("故障恢复时间")]),t._v(") * 100%")]),t._v(" "),_("p",[t._v("这个公式得出的结果是一个「比例」，通常我们会用**「N 个 9」**来描述一个系统的可用性。")]),t._v(" "),_("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/cbce53612865bf8cbe998c7c7b7f9c23.png",width:"70%"}}),t._v(" "),_("h3",{attrs:{id:"_2-2-硬件层面保证高可用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-硬件层面保证高可用"}},[t._v("#")]),t._v(" 2.2 硬件层面保证高可用")]),t._v(" "),_("h4",{attrs:{id:"_2-2-1-灾备设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-灾备设计"}},[t._v("#")]),t._v(" 2.2.1 灾备设计")]),t._v(" "),_("p",[t._v("灾备设计 = 容灾 + 备份")]),t._v(" "),_("p",[_("strong",[t._v("容灾")]),t._v("：建立两个相同的系统。当其中一个系统出问题时，可以直接切换另一个系统使用。")]),t._v(" "),_("p",[_("strong",[t._v("备份")]),t._v("：将系统产生的重要数据进行备份。")]),t._v(" "),_("h4",{attrs:{id:"_2-2-2-异地多活"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-异地多活"}},[t._v("#")]),t._v(" 2.2.2 异地多活")]),t._v(" "),_("p",[t._v("将服务部署到异地，并且多地服务能同时对外提供服务。")]),t._v(" "),_("p",[t._v("异地多活主要应对突发情况，如火灾、地震、人为灾害等。")]),t._v(" "),_("h4",{attrs:{id:"_2-2-3-灾备到异地多活的演变过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-灾备到异地多活的演变过程"}},[t._v("#")]),t._v(" 2.2.3 灾备到异地多活的演变过程")]),t._v(" "),_("p",[_("strong",[t._v("同城灾备")]),t._v("分为「冷备」和「热备」，「冷备」只备份数据，不提供服务。「热备」实时同步数据，做好随时切换的准备。")]),t._v(" "),_("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/1947bba189869dbcfdbc46d9f939cf2e.png",width:"50%"}}),t._v(" "),_("p",[_("strong",[t._v("同城双活")]),t._v("比同城灾备的优势在于，两个机房都可以接入「读写」流量。提高可用性的同时也提高系统性能。（由于机房部署同一城市，可不考虑网络延迟问题。"),_("strong",[t._v("光纤传输的速度大概为 300km/ms")]),t._v("）")]),t._v(" "),_("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/a2eb2e47789c36c7d626c39c9b51b603.png",width:"50%"}}),t._v(" "),_("p",[_("strong",[t._v("两地三中心")]),t._v("是在同城双活基础上再部署一个异地机房做「灾备」，用来抵御「城市」级别的灾害。但启用灾备机房需要耗费一定时间。（两地是指两个城市，三中心是指三个机房）")]),t._v(" "),_("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/1c2c0bc9af033cb6b1ceaef2e89d5a0a.png",width:"50%"}}),t._v(" "),_("p",[_("strong",[t._v("异地双活")]),t._v("才是抵御「城市」级别灾害的更好方案。异地两个机房同时提供服务，有故障随时切换，可用性高。但是实现也很复杂。异地双活要两个机房都可以读写（不同城市的两个机房如果只有一个机房数据库做主库，会导致另一个只读的机房查数据延迟很高）。MySQL本身提供了双主架构，支持双向复制数据，但是像redis、mq等都不支持双向同步数据，需要另外开发。")]),t._v(" "),_("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/dabe61c01c666480910350e9c98272f4.png",width:"50%"}}),t._v(" "),_("p",[t._v("此外，还需要在业务上将数据区分开，保证指定数据操作指定机房，避免各种脏数据的产生。这样，需要在接入层之上再部署一个**「路由层」（通常部署在云服务器上）**，自己可以配置不同路由规则，将用户分流到不同的机房内。")]),t._v(" "),_("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/f35a987de7f72f0f1f47ba25092d96e6.png",width:"50%"}}),t._v(" "),_("p",[_("strong",[t._v("异地多活")]),t._v("是在异地双活的基础上扩展多个机房，这样不仅保证了高可用，还保证了高性能，可以应对更大规模的流量压力。是实现高可用的最终方案。")]),t._v(" "),_("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/badde66fe5079933863b9ff1c3695dfe.png",width:"50%"}}),t._v(" "),_("p",[t._v("这种星状的方案必须要设立一个**「中心机房」**，任意机房写入数据后要先同步到中心机房，再由中心机房同步到其他机房。中心机房的稳定性要求比较高，不过中心机房如果发生故障的话，可以把任意一个机房提升为中心机房，继续按照之前的架构提供服务。")]),t._v(" "),_("h3",{attrs:{id:"_2-3-系统及代码层面保证高可用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-系统及代码层面保证高可用"}},[t._v("#")]),t._v(" 2.3 系统及代码层面保证高可用")]),t._v(" "),_("h4",{attrs:{id:"_2-3-1-集群"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-集群"}},[t._v("#")]),t._v(" 2.3.1 集群")]),t._v(" "),_("p",[t._v("使用集群，减少单点故障。")]),t._v(" "),_("h4",{attrs:{id:"_2-3-2-版本可回滚"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-版本可回滚"}},[t._v("#")]),t._v(" 2.3.2 版本可回滚")]),t._v(" "),_("p",[t._v("应用部署支持版本回滚。")]),t._v(" "),_("p",[t._v("数据库脚本也需要有回滚脚本。")]),t._v(" "),_("h4",{attrs:{id:"_2-3-3-超时重试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-超时重试"}},[t._v("#")]),t._v(" 2.3.3 超时重试")]),t._v(" "),_("p",[t._v("重试次数一般为3次。")]),t._v(" "),_("h4",{attrs:{id:"_2-3-4-降级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-降级"}},[t._v("#")]),t._v(" 2.3.4 降级")]),t._v(" "),_("p",[t._v("同步改异步（如同步导出通过配置调整成异步导出）。")]),t._v(" "),_("p",[t._v("直接读缓存（关键功能本来查库的调整成临时查缓存）。")]),t._v(" "),_("h4",{attrs:{id:"_2-3-5-熔断"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-5-熔断"}},[t._v("#")]),t._v(" 2.3.5 熔断")]),t._v(" "),_("p",[t._v("熔断和降级是两个容易混淆的概念，这两者的含义并不一样。")]),t._v(" "),_("p",[t._v("降级针对的是自身系统的故障，而熔断是要应对其他系统的故障。")]),t._v(" "),_("h4",{attrs:{id:"_2-3-6-限流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-6-限流"}},[t._v("#")]),t._v(" 2.3.6 限流")]),t._v(" "),_("h5",{attrs:{id:"_2-3-6-1-常见限流方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-6-1-常见限流方案"}},[t._v("#")]),t._v(" 2.3.6.1 常见限流方案")]),t._v(" "),_("h6",{attrs:{id:"_1-计数器法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-计数器法"}},[t._v("#")]),t._v(" 1.计数器法")]),t._v(" "),_("p",[_("strong",[t._v("原理")]),t._v("：在单位时间段内，对请求数进行计数，如果数量超过了单位时间的限制，则执行限流策略，当单位时间结束后，计数器清零，这个过程周而复始，就是计数器法。")]),t._v(" "),_("p",[_("strong",[t._v("缺点")]),t._v("：不能均衡限流，在一个单位时间的末尾和下一个单位时间的开始，很可能会有两个访问的峰值，导致系统崩溃。")]),t._v(" "),_("p",[_("strong",[t._v("改进方式")]),t._v("：可以通过减小单位时间来提高精度。")]),t._v(" "),_("h6",{attrs:{id:"_2-漏桶算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-漏桶算法"}},[t._v("#")]),t._v(" 2.漏桶算法")]),t._v(" "),_("p",[_("strong",[t._v("原理")]),t._v("：假设有一个水桶，水桶有一定的容量，所有请求不论速度都会注入到水桶中，然后水桶以一个恒定的速度向外将请求放出，当水桶满了的时候，新的请求被丢弃。")]),t._v(" "),_("p",[_("strong",[t._v("优点")]),t._v("：可以平滑请求，削减峰值。")]),t._v(" "),_("p",[_("strong",[t._v("缺点")]),t._v("：瓶颈会在漏出的速度，可能会拖慢整个系统，且不能有效地利用系统的资源。")]),t._v(" "),_("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/d0f56213bda1af35d6aaba121ad6e42a.png",width:"30%"}}),t._v(" "),_("h6",{attrs:{id:"_3-令牌桶算法-推荐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-令牌桶算法-推荐"}},[t._v("#")]),t._v(" 3.令牌桶算法（推荐）")]),t._v(" "),_("p",[_("strong",[t._v("原理")]),t._v("：有一个令牌桶，单位时间内令牌会以恒定的数量（即令牌的加入速度）加入到令牌桶中，所有请求都需要获取令牌才可正常访问。当令牌桶中没有令牌可取的时候，则拒绝请求。")]),t._v(" "),_("p",[_("strong",[t._v("优点")]),t._v("：相比漏桶算法，令牌桶算法允许一定的突发流量，但是又不会让突发流量超过我们给定的限制（单位时间窗口内的令牌数）。即限制了我们所说的 QPS(每秒查询率)。")]),t._v(" "),_("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/fe31522d82c8142053e2bf86d71d8741.png",width:"50%"}}),t._v(" "),_("h5",{attrs:{id:"_2-3-6-2-guava限流工具类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-6-2-guava限流工具类"}},[t._v("#")]),t._v(" 2.3.6.2 Guava限流工具类")]),t._v(" "),_("h6",{attrs:{id:"_1-说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-说明"}},[t._v("#")]),t._v(" 1.说明")]),t._v(" "),_("p",[t._v("Google开源工具包Guava提供了限流工具类RateLimiter，基于令牌桶算法实现。")]),t._v(" "),_("p",[t._v("常用方法：")]),t._v(" "),_("p",[_("strong",[t._v("create")]),t._v("(Double permitsPerSecond) 方法根据参数（令牌:单位时间（1s））比例为令牌生成速率。"),_("br"),t._v(" "),_("strong",[t._v("tryAcquire()")]),t._v(" 方法尝试获取一个令牌，立即返回true/false，不阻塞，重载方法具备设置获取令牌个数、获取最大等待时间等参数。"),_("br"),t._v(" "),_("strong",[t._v("acquire()")]),t._v(" 方法与tryAcquire类似，但是会阻塞，尝试获取一个令牌，没有时则阻塞直到获取成功。")]),t._v(" "),_("p",[t._v("可能有人在想既然是令牌桶算法，应该有个类似定时器的东东来持续往桶放令牌才对啊，我刚开始也是这么想的，看了代码觉得自己还是太嫩了，如果开启一个定时器无可厚非，但如果系统需要N个不同速率的桶来针对不同的场景或用户，就会极大的消耗系统资源。")]),t._v(" "),_("p",[t._v("RateLimiter用了一种类似于延迟计算的方法，把桶里令牌数量的计算放在下一个请求中计算，即桶里的令牌数 storedPermits 不是实时更新的，而是等到下一个请求过来时才更新。")]),t._v(" "),_("h6",{attrs:{id:"_2-代码示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码示例"}},[t._v("#")]),t._v(" 2.代码示例")]),t._v(" "),_("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/5802889ae03a3bc9ef7e678c7dffeb9f.png",width:"60%"}}),t._v(" "),_("p",[t._v("需关注好服务监控指标，如qps，响应时间，tomcat线程信息等（acceptcount,maxConnections）")])])}),[],!1,null,null,null);a.default=v.exports}}]);