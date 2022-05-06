(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{501:function(_,t,a){"use strict";a.r(t);var v=a(30),s=Object(v.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"系统架构设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统架构设计"}},[_._v("#")]),_._v(" 系统架构设计")]),_._v(" "),a("h2",{attrs:{id:"_0、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0、前言"}},[_._v("#")]),_._v(" 0、前言")]),_._v(" "),a("p",[_._v("一个好的软件架构，应该遵循"),a("strong",[_._v("高性能、高可用、易扩展")]),_._v(" 3 大原则，其中「高可用」在系统规模变得越来越大时，变得尤为重要。")]),_._v(" "),a("h2",{attrs:{id:"_1、高性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、高性能"}},[_._v("#")]),_._v(" 1、高性能")]),_._v(" "),a("h3",{attrs:{id:"_1-1-服务拆分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-服务拆分"}},[_._v("#")]),_._v(" 1.1 服务拆分")]),_._v(" "),a("p",[_._v("按功能纬度、读写维度（如yl-nwm-waybillouter-api）")]),_._v(" "),a("h3",{attrs:{id:"_1-2-缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-缓存"}},[_._v("#")]),_._v(" 1.2 缓存")]),_._v(" "),a("p",[_._v("浏览器缓存、cdn缓存、应用层缓存（redis、内存缓存等）")]),_._v(" "),a("h3",{attrs:{id:"_1-3-消息队列解耦削峰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-消息队列解耦削峰"}},[_._v("#")]),_._v(" 1.3 消息队列解耦削峰")]),_._v(" "),a("p",[_._v("运单收发到派签消息通过RabbitMQ发送")]),_._v(" "),a("h3",{attrs:{id:"_1-4-负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-负载均衡"}},[_._v("#")]),_._v(" 1.4 负载均衡")]),_._v(" "),a("p",[_._v("常见的负载均衡系统包括3种：")]),_._v(" "),a("p",[a("strong",[_._v("DNS负载均衡")]),_._v("：一般用来实现地理级别的均衡。")]),_._v(" "),a("p",[a("strong",[_._v("硬件负载均衡")]),_._v("：通过独立的硬件设备，比如F5，实现负载均衡功能（硬件价格一般较贵）。")]),_._v(" "),a("p",[a("strong",[_._v("软件负载均衡")]),_._v("：通过软件的方式，比如Nginx，实现负载均衡功能。")]),_._v(" "),a("h3",{attrs:{id:"_1-5-读写分离-分库分表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-读写分离-分库分表"}},[_._v("#")]),_._v(" 1.5 读写分离&分库分表")]),_._v(" "),a("h4",{attrs:{id:"_1-5-1-读写分离会带来什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1-读写分离会带来什么问题"}},[_._v("#")]),_._v(" 1.5.1 读写分离会带来什么问题？")]),_._v(" "),a("p",[_._v("主库和从库数据同步存在延迟，写完数据马上读取时可能读不到最新数据。")]),_._v(" "),a("p",[_._v("解决方法：")]),_._v(" "),a("p",[a("strong",[_._v("1.强制将读请求路由到主库处理")])]),_._v(" "),a("p",[_._v("比如 Sharding-JDBC，可以通过 HintManager 分片键值管理器强制使用主库。")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/ce763328ae5e186b847168672f356bf9.png",width:"70%"}}),_._v(" "),a("p",[a("strong",[_._v("2.延迟读取")])]),_._v(" "),a("p",[_._v("这种方式不太合适 ...")]),_._v(" "),a("h4",{attrs:{id:"_1-5-2-主从复制的原理了解吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-2-主从复制的原理了解吗"}},[_._v("#")]),_._v(" 1.5.2 主从复制的原理了解吗？")]),_._v(" "),a("p",[_._v("1.主库将数据变化写入binlog。")]),_._v(" "),a("p",[_._v("2.从库创建一个I/O线程向主库请求更新的binlog。")]),_._v(" "),a("p",[_._v("3.主库创建一个线程发送binlog，从库I/O线程负责接收。")]),_._v(" "),a("p",[_._v("4.从库I/O线程接收的binlog写入到relay log中。")]),_._v(" "),a("p",[_._v("5.从库的SQL线程读取relay log同步数据到本地（也就是再执行一遍SQL）。")]),_._v(" "),a("h4",{attrs:{id:"_1-5-3-分库分表会带来什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-3-分库分表会带来什么问题"}},[_._v("#")]),_._v(" 1.5.3 分库分表会带来什么问题？")]),_._v(" "),a("p",[_._v("1.join操作：表分布到不同数据库，导致无法进行连表操作。")]),_._v(" "),a("p",[_._v("2.事务问题：操作不同数据库的表，自带的事务无法支持。")]),_._v(" "),a("p",[_._v("3.分布式id：自增主键等方式无法使用，需引入分布式ID。")]),_._v(" "),a("h4",{attrs:{id:"_1-5-4-分库分表后-数据怎么迁移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-4-分库分表后-数据怎么迁移"}},[_._v("#")]),_._v(" 1.5.4 分库分表后，数据怎么迁移？")]),_._v(" "),a("p",[_._v("使用数据库同步工具 Canal 做增量数据迁移（还是依赖 binlog，开发和维护成本较低）。")]),_._v(" "),a("h2",{attrs:{id:"_2、高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、高可用"}},[_._v("#")]),_._v(" 2、高可用")]),_._v(" "),a("h3",{attrs:{id:"_2-1-怎么衡量是否高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-怎么衡量是否高可用"}},[_._v("#")]),_._v(" 2.1 怎么衡量是否高可用？")]),_._v(" "),a("p",[_._v("高可用通常通常用两个指标来衡量。")]),_._v(" "),a("p",[a("strong",[_._v("平均故障时间间隔")]),_._v("：表示两次故障的时间间隔，也就是系统正常运行平均时间。这个时间越长越稳定。")]),_._v(" "),a("p",[a("strong",[_._v("故障恢复时间")]),_._v("：系统发生故障后的恢复时间。这个时间越短，对用户影响越小。")]),_._v(" "),a("p",[_._v("可用性跟这两个指标之间的关系为：")]),_._v(" "),a("p",[a("strong",[_._v("可用性")]),_._v(" = "),a("strong",[_._v("平均故障时间间隔")]),_._v(" / ("),a("strong",[_._v("平均故障时间间隔")]),_._v(" + "),a("strong",[_._v("故障恢复时间")]),_._v(") * 100%")]),_._v(" "),a("p",[_._v("这个公式得出的结果是一个「比例」，通常我们会用**「N 个 9」**来描述一个系统的可用性。")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/cbce53612865bf8cbe998c7c7b7f9c23.png",width:"70%"}}),_._v(" "),a("h3",{attrs:{id:"_2-2-硬件层面保证高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-硬件层面保证高可用"}},[_._v("#")]),_._v(" 2.2 硬件层面保证高可用")]),_._v(" "),a("h4",{attrs:{id:"_2-2-1-什么是灾备设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-什么是灾备设计"}},[_._v("#")]),_._v(" 2.2.1 什么是灾备设计？")]),_._v(" "),a("p",[_._v("灾备设计 = 容灾 + 备份")]),_._v(" "),a("p",[a("strong",[_._v("容灾")]),_._v("：建立两个相同的系统。当其中一个系统出问题时，可以直接切换另一个系统使用。")]),_._v(" "),a("p",[a("strong",[_._v("备份")]),_._v("：将系统产生的重要数据进行备份。")]),_._v(" "),a("h4",{attrs:{id:"_2-2-2-什么是异地多活"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-什么是异地多活"}},[_._v("#")]),_._v(" 2.2.2 什么是异地多活？")]),_._v(" "),a("p",[_._v("将服务部署到异地，并且多地服务能同时对外提供服务。")]),_._v(" "),a("p",[_._v("异地多活主要应对突发情况，如火灾、地震、人为灾害等。")]),_._v(" "),a("h4",{attrs:{id:"_2-2-3-灾备到异地多活的演变过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-灾备到异地多活的演变过程"}},[_._v("#")]),_._v(" 2.2.3 灾备到异地多活的演变过程？")]),_._v(" "),a("p",[a("strong",[_._v("同城灾备")]),_._v("分为「冷备」和「热备」，「冷备」只备份数据，不提供服务。「热备」实时同步数据，做好随时切换的准备。")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/1947bba189869dbcfdbc46d9f939cf2e.png",width:"70%"}}),_._v(" "),a("p",[a("strong",[_._v("同城双活")]),_._v("比同城灾备的优势在于，两个机房都可以接入「读写」流量。提高可用性的同时也提高系统性能。（由于机房部署同一城市，可不考虑网络延迟问题。"),a("strong",[_._v("光纤传输的速度大概为 300km/ms")]),_._v("）")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/a2eb2e47789c36c7d626c39c9b51b603.png",width:"70%"}}),_._v(" "),a("p",[a("strong",[_._v("两地三中心")]),_._v("是在同城双活基础上再部署一个异地机房做「灾备」，用来抵御「城市」级别的灾害。但启用灾备机房需要耗费一定时间。（两地是指两个城市，三中心是指三个机房）")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/1c2c0bc9af033cb6b1ceaef2e89d5a0a.png",width:"70%"}}),_._v(" "),a("p",[a("strong",[_._v("异地双活")]),_._v("才是抵御「城市」级别灾害的更好方案。异地两个机房同时提供服务，有故障随时切换，可用性高。但是实现也很复杂。异地双活要两个机房都可以读写（不同城市的两个机房如果只有一个机房数据库做主库，会导致另一个只读的机房查数据延迟很高）。MySQL本身提供了双主架构，支持双向复制数据，但是像redis、mq等都不支持双向同步数据，需要另外开发。")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/dabe61c01c666480910350e9c98272f4.png",width:"70%"}}),_._v(" "),a("p",[_._v("此外，还需要在业务上将数据区分开，保证指定数据操作指定机房，避免各种脏数据的产生。这样，需要在接入层之上再部署一个**「路由层」（通常部署在云服务器上）**，自己可以配置不同路由规则，将用户分流到不同的机房内。")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/f35a987de7f72f0f1f47ba25092d96e6.png",width:"70%"}}),_._v(" "),a("p",[a("strong",[_._v("异地多活")]),_._v("是在异地双活的基础上扩展多个机房，这样不仅保证了高可用，还保证了高性能，可以应对更大规模的流量压力。是实现高可用的最终方案。")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/badde66fe5079933863b9ff1c3695dfe.png",width:"70%"}}),_._v(" "),a("p",[_._v("这种星状的方案必须要设立一个**「中心机房」**，任意机房写入数据后要先同步到中心机房，再由中心机房同步到其他机房。中心机房的稳定性要求比较高，不过中心机房如果发生故障的话，可以把任意一个机房提升为中心机房，继续按照之前的架构提供服务。")]),_._v(" "),a("h3",{attrs:{id:"_2-3-系统及代码层面保证高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-系统及代码层面保证高可用"}},[_._v("#")]),_._v(" 2.3 系统及代码层面保证高可用")]),_._v(" "),a("h4",{attrs:{id:"_2-3-1-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-集群"}},[_._v("#")]),_._v(" 2.3.1 集群")]),_._v(" "),a("p",[_._v("使用集群，减少单点故障。")]),_._v(" "),a("h4",{attrs:{id:"_2-3-2-版本可回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-版本可回滚"}},[_._v("#")]),_._v(" 2.3.2 版本可回滚")]),_._v(" "),a("p",[_._v("应用部署支持版本回滚。")]),_._v(" "),a("p",[_._v("数据库脚本也需要有回滚脚本。")]),_._v(" "),a("h4",{attrs:{id:"_2-3-3-超时重试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-超时重试"}},[_._v("#")]),_._v(" 2.3.3 超时重试")]),_._v(" "),a("p",[_._v("重试次数一般为3次。")]),_._v(" "),a("h4",{attrs:{id:"_2-3-4-降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-降级"}},[_._v("#")]),_._v(" 2.3.4 降级")]),_._v(" "),a("p",[_._v("同步改异步（如同步导出通过配置调整成异步导出）。")]),_._v(" "),a("p",[_._v("直接读缓存（关键功能本来查库的调整成临时查缓存）。")]),_._v(" "),a("h4",{attrs:{id:"_2-3-5-熔断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-5-熔断"}},[_._v("#")]),_._v(" 2.3.5 熔断")]),_._v(" "),a("p",[_._v("熔断和降级是两个容易混淆的概念，这两者的含义并不一样。")]),_._v(" "),a("p",[_._v("降级针对的是自身系统的故障，而熔断是要应对其他系统的故障。")]),_._v(" "),a("h4",{attrs:{id:"_2-3-6-限流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-6-限流"}},[_._v("#")]),_._v(" 2.3.6 限流")]),_._v(" "),a("h5",{attrs:{id:"_2-3-6-1-常见限流方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-6-1-常见限流方案"}},[_._v("#")]),_._v(" 2.3.6.1 常见限流方案")]),_._v(" "),a("h6",{attrs:{id:"_1-计数器法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-计数器法"}},[_._v("#")]),_._v(" 1.计数器法")]),_._v(" "),a("p",[a("strong",[_._v("原理")]),_._v("：在单位时间段内，对请求数进行计数，如果数量超过了单位时间的限制，则执行限流策略，当单位时间结束后，计数器清零，这个过程周而复始，就是计数器法。")]),_._v(" "),a("p",[a("strong",[_._v("缺点")]),_._v("：不能均衡限流，在一个单位时间的末尾和下一个单位时间的开始，很可能会有两个访问的峰值，导致系统崩溃。")]),_._v(" "),a("p",[a("strong",[_._v("改进方式")]),_._v("：可以通过减小单位时间来提高精度。")]),_._v(" "),a("h6",{attrs:{id:"_2-漏桶算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-漏桶算法"}},[_._v("#")]),_._v(" 2.漏桶算法")]),_._v(" "),a("p",[a("strong",[_._v("原理")]),_._v("：假设有一个水桶，水桶有一定的容量，所有请求不论速度都会注入到水桶中，然后水桶以一个恒定的速度向外将请求放出，当水桶满了的时候，新的请求被丢弃。")]),_._v(" "),a("p",[a("strong",[_._v("优点")]),_._v("：可以平滑请求，削减峰值。")]),_._v(" "),a("p",[a("strong",[_._v("缺点")]),_._v("：瓶颈会在漏出的速度，可能会拖慢整个系统，且不能有效地利用系统的资源。")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/d0f56213bda1af35d6aaba121ad6e42a.png",width:"70%"}}),_._v(" "),a("h6",{attrs:{id:"_3-令牌桶算法-推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-令牌桶算法-推荐"}},[_._v("#")]),_._v(" 3.令牌桶算法（推荐）")]),_._v(" "),a("p",[a("strong",[_._v("原理")]),_._v("：有一个令牌桶，单位时间内令牌会以恒定的数量（即令牌的加入速度）加入到令牌桶中，所有请求都需要获取令牌才可正常访问。当令牌桶中没有令牌可取的时候，则拒绝请求。")]),_._v(" "),a("p",[a("strong",[_._v("优点")]),_._v("：相比漏桶算法，令牌桶算法允许一定的突发流量，但是又不会让突发流量超过我们给定的限制（单位时间窗口内的令牌数）。即限制了我们所说的 QPS(每秒查询率)。")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/fe31522d82c8142053e2bf86d71d8741.png",width:"70%"}}),_._v(" "),a("h5",{attrs:{id:"_2-3-6-2-guava限流工具类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-6-2-guava限流工具类"}},[_._v("#")]),_._v(" 2.3.6.2 Guava限流工具类")]),_._v(" "),a("h6",{attrs:{id:"_1-说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-说明"}},[_._v("#")]),_._v(" 1.说明")]),_._v(" "),a("p",[_._v("Google开源工具包Guava提供了限流工具类RateLimiter，基于令牌桶算法实现。")]),_._v(" "),a("p",[_._v("常用方法：")]),_._v(" "),a("p",[a("strong",[_._v("create")]),_._v("(Double permitsPerSecond) 方法根据参数（令牌:单位时间（1s））比例为令牌生成速率。"),a("br"),_._v(" "),a("strong",[_._v("tryAcquire()")]),_._v(" 方法尝试获取一个令牌，立即返回true/false，不阻塞，重载方法具备设置获取令牌个数、获取最大等待时间等参数。"),a("br"),_._v(" "),a("strong",[_._v("acquire()")]),_._v(" 方法与tryAcquire类似，但是会阻塞，尝试获取一个令牌，没有时则阻塞直到获取成功。")]),_._v(" "),a("p",[_._v("可能有人在想既然是令牌桶算法，应该有个类似定时器的东东来持续往桶放令牌才对啊，我刚开始也是这么想的，看了代码觉得自己还是太嫩了，如果开启一个定时器无可厚非，但如果系统需要N个不同速率的桶来针对不同的场景或用户，就会极大的消耗系统资源。")]),_._v(" "),a("p",[_._v("RateLimiter用了一种类似于延迟计算的方法，把桶里令牌数量的计算放在下一个请求中计算，即桶里的令牌数 storedPermits 不是实时更新的，而是等到下一个请求过来时才更新。")]),_._v(" "),a("h6",{attrs:{id:"_2-代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码示例"}},[_._v("#")]),_._v(" 2.代码示例")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/5802889ae03a3bc9ef7e678c7dffeb9f.png",width:"70%"}}),_._v(" "),a("p",[_._v("需关注好服务监控指标，如qps，响应时间，tomcat线程信息等（acceptcount,maxConnections）")]),_._v(" "),a("h2",{attrs:{id:"_3、机器评估"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、机器评估"}},[_._v("#")]),_._v(" 3、机器评估")]),_._v(" "),a("h3",{attrs:{id:"_3-1-pv-qps-tps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-pv-qps-tps"}},[_._v("#")]),_._v(" 3.1 pv｜qps｜tps")]),_._v(" "),a("p",[a("strong",[_._v("pv")]),_._v(" PV(page view)，即页面浏览量。")]),_._v(" "),a("p",[a("strong",[_._v("qps")]),_._v(" Queries Per Second 秒查询率QPS是对一个特定的查询服务器在规定时间内所处理流量多少的衡量标准。在因特网上，作为域名系统服务器的机器的性能经常用每秒查询率来衡量。")]),_._v(" "),a("p",[_._v("原理：每天80%的访问集中在20%的时间里，这20%时间叫做峰值时间")]),_._v(" "),a("p",[_._v("公式：( 总PV数 * 80% ) / ( 每天秒数 * 20% ) = 峰值时间每秒请求数(QPS)")]),_._v(" "),a("p",[_._v("机器：峰值时间每秒QPS / 单台机器的QPS = 需要的机器")]),_._v(" "),a("p",[_._v("问：每天300w PV 的在单台机器上，这台机器需要多少QPS？")]),_._v(" "),a("p",[_._v("答：( 3000000 * 0.8 ) / (86400 * 0.2 ) = 139 (QPS)")]),_._v(" "),a("p",[_._v("问：如果一台机器的QPS是58，需要几台机器来支持？")]),_._v(" "),a("p",[_._v("答：139 / 58 = 3")]),_._v(" "),a("p",[a("strong",[_._v("tps")]),_._v(" Transactions Per Second（每秒传输的事物处理个数），即服务器每秒处理的事务数。TPS包括一条消息入和一条消息出，加上一次用户数据库访问。")]),_._v(" "),a("p",[_._v("一般的，评价系统性能均以每秒钟完成的技术交易的数量来衡量。系统整体处理能力取决于处理能力最低模块的TPS值。")]),_._v(" "),a("h3",{attrs:{id:"_3-2-如何进行容量设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-如何进行容量设计"}},[_._v("#")]),_._v(" 3.2 如何进行容量设计")]),_._v(" "),a("p",[_._v("**1.评估总访问量：**询问业务、产品、运营")]),_._v(" "),a("p",[a("strong",[_._v("2.评估平均QPS")]),_._v("：假设按天来计算，")]),_._v(" "),a("p",[_._v("1天的总访问量（假设8000w） / 12小时（假设只有白天有流量）")]),_._v(" "),a("p",[_._v("= 8000w / 约4万秒")]),_._v(" "),a("p",[_._v("= 2000QPS")]),_._v(" "),a("p",[a("strong",[_._v("3.评估高峰的QPS")]),_._v("：需要根据具体业务特性，通过业务访问曲线来评估，")]),_._v(" "),a("p",[_._v("如：")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/97deb900310d7989744b4e5bf4793950.png",width:"70%"}}),_._v(" "),a("p",[_._v("峰值QPS约为平均QPS的2.5倍，即2000 * 2.5 = 5000QPS")]),_._v(" "),a("p",[a("strong",[_._v("4.评估系统、单机的极限QPS")]),_._v("：需要通过压测")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"/img/media/a32d70b83623d11c01c266d4bc6065d5.png",width:"70%"}}),_._v(" "),a("p",[_._v("假设系统架构如上图，5000QPS的1%流量打到mysql，即500QPS，mysql还是可以轻松应对，另外99%打到redis也没有任何问题。则需要考虑的主要在web层，tomcat能不能扛的住。假设通过压测发现tomcat能扛1200QPS，线上系统一般不会泡满到极限，大概打个8折，差不多1000QPS。所以单机线上允许跑1000QPS。")]),_._v(" "),a("p",[a("strong",[_._v("5.线上机器评估")]),_._v("：假设线上部署了2台机器，")]),_._v(" "),a("p",[_._v("1）机器能扛得住吗：峰值5000QPS，单机能扛1000QPS，2台机器扛不住。")]),_._v(" "),a("p",[_._v("2）扛不住要加多少机器：需要额外3台，另外预留多1台，给4台更稳。")]),_._v(" "),a("h3",{attrs:{id:"_3-3-tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-tomcat"}},[_._v("#")]),_._v(" 3.3 tomcat")]),_._v(" "),a("h4",{attrs:{id:"_3-3-1-tomcat支持多少并发量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-tomcat支持多少并发量"}},[_._v("#")]),_._v(" 3.3.1 tomcat支持多少并发量")]),_._v(" "),a("p",[_._v("Tomcat的最大并发数是可以配置的，实际运用中，最大并发数与硬件性能和CPU数量都有很大关系的。更好的硬件，更多的处理器都会使Tomcat支持更多的并发。")]),_._v(" "),a("p",[_._v("Tomcat默认的HTTP实现是采用阻塞式的Socket通信，每个请求都需要创建一个线程处理，当一个进程有500个线程在跑的话，那性能已经是很低很低了。Tomcat 默认配置的最大请求数是150，也就是说同时支持150个并发。具体能承载多少并发，需要看硬件的配置，CPU越多性能越高，分配给JVM的内存越多性能也就越高，但也会加重GC的负担。")]),_._v(" "),a("p",[_._v("当某个应用拥有 250 个以上并发的时候，应考虑应用服务器的集群。")]),_._v(" "),a("p",[a("strong",[_._v("操作系统对于进程中的线程数有一定的限制：")])]),_._v(" "),a("p",[_._v("Windows 每个进程中的线程数不允许超过 2000")]),_._v(" "),a("p",[_._v("Linux 每个进程中的线程数不允许超过 1000")]),_._v(" "),a("p",[a("strong",[_._v("在Java中每开启一个线程需要耗用1MB的JVM内存空间用于作为线程栈之用，此处也应考虑。")])]),_._v(" "),a("h4",{attrs:{id:"_3-3-2-tomcat参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-tomcat参数"}},[_._v("#")]),_._v(" 3.3.2 tomcat参数")]),_._v(" "),a("p",[a("strong",[_._v("maxConnections、maxThreads、acceptCount关系")])]),_._v(" "),a("p",[_._v("用一个形象的比喻，通俗易懂的解释一下tomcat的"),a("strong",[_._v("最大线程数（maxThreads）")]),_._v("、**最大等待数（acceptCount）"),a("strong",[_._v("和")]),_._v("最大连接数（maxConnections）**三者之间的关系。")]),_._v(" "),a("p",[_._v("我们可以把tomcat比做一个火锅店，流程是取号、入座、叫服务员，可以做一下三个形象的类比：")]),_._v(" "),a("p",[_._v("（1）"),a("strong",[_._v("acceptCount 最大等待数")])]),_._v(" "),a("p",[_._v("可以类比为火锅店的排号处能够容纳排号的最大数量；排号的数量不是无限制的，火锅店的排号到了一定数据量之后，服务往往会说：已经客满。")]),_._v(" "),a("p",[_._v("（2）"),a("strong",[_._v("maxConnections 最大连接数")])]),_._v(" "),a("p",[_._v("可以类比为火锅店的大堂的餐桌数量，也就是可以就餐的桌数。如果所有的桌子都已经坐满，则表示餐厅已满，已经达到了服务的数量上线，不能再有顾客进入餐厅了。")]),_._v(" "),a("p",[_._v("（3）"),a("strong",[_._v("maxThreads：最大线程数")])]),_._v(" "),a("p",[_._v("可以类比为厨师的个数。每一个厨师，在同一时刻，只能给一张餐桌炒菜，就像极了JVM中的一条线程。")]),_._v(" "),a("p",[a("strong",[_._v("整个就餐的流程，大致如下：")])]),_._v(" "),a("p",[_._v("（1）"),a("strong",[_._v("取号")]),_._v("：")]),_._v(" "),a("p",[_._v("如果maxConnections连接数没有满，就不需要取号，因为还有空余的餐桌，直接被大堂服务员领上餐桌，就餐即可。")]),_._v(" "),a("p",[_._v("如果 maxConnections 连接数满了，但是取号人数没有达到 acceptCount，则取号成功。如果取号人数已达到acceptCount，则拿号失败，会得到Tomcat的Connection refused connect 的回复信息。")]),_._v(" "),a("p",[_._v("（2）"),a("strong",[_._v("上桌")]),_._v("：如果有餐桌空出来了，表示maxConnections连接数没有满，排队的人，可以进入大堂上桌就餐。")]),_._v(" "),a("p",[_._v("（3）"),a("strong",[_._v("就餐")]),_._v("：就餐需要厨师炒菜。厨师的数量，比顾客的数量，肯定会少一些。一个厨师一定需要给多张餐桌炒菜，如果就餐的人越多，厨师也会忙不过来。这时候就可以增加厨师，一增加到上限maxThreads的值，如果还是不够，只能是拖慢每一张餐桌的上菜速度，这种情况，就是大家常见的“上一道菜吃光了，下一道菜还没有上”尴尬场景。")]),_._v(" "),a("p",[a("strong",[a("img",{staticClass:"imgcss",attrs:{src:"/img/media/b13a336a731fa78534596c7ee21245b2.png",width:"70%"}})])])])}),[],!1,null,null,null);t.default=s.exports}}]);