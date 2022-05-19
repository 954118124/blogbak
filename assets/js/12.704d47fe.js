(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{506:function(_,v,t){"use strict";t.r(v);var e=t(18),o=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),t("p",[_._v("线程（thread）是操作系统能够进行运算调度的最小单位，它被包含在进程之中，是进程中的实际运作单位。")])]),_._v(" "),t("h2",{attrs:{id:"_1-线程的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-线程的生命周期"}},[_._v("#")]),_._v(" 1 线程的生命周期？")]),_._v(" "),t("p",[_._v("线程的生命周期主要包括了5种状态")]),_._v(" "),t("p",[t("strong",[_._v("NEW新建、RUNNABLE就绪、RUNNING运行、BLOCKED阻塞、DEAD死亡。")])]),_._v(" "),t("p",[t("strong",[_._v("NEW")]),_._v("：线程创建")]),_._v(" "),t("p",[t("strong",[_._v("RUNNABLE")]),_._v("：执行start方法")]),_._v(" "),t("p",[t("strong",[_._v("RUNNING")]),_._v("：分配到了CPU时间片，开始执行代码")]),_._v(" "),t("p",[t("strong",[_._v("BLOCKED")]),_._v("：")]),_._v(" "),t("p",[_._v("• 等待阻塞：调用了o.wait()方法，该线程放入等待队列")]),_._v(" "),t("p",[_._v("• 同步阻塞：获取对象锁时，锁被其他线程占用，该线程进入lock pool")]),_._v(" "),t("p",[_._v("• 其他阻塞：sleep 或者 join方法时")]),_._v(" "),t("p",[_._v("**DEAD：**线程执行完毕，或者抛出异常")]),_._v(" "),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/f47d307edd9445e00755e38bb0f15782.png",width:"70%"}}),_._v(" "),t("p",[t("strong",[_._v("几个重要方法：")])]),_._v(" "),t("p",[t("strong",[_._v("sleep()")]),_._v("：当前线程进入阻塞，但不释放对象锁。")]),_._v(" "),t("p",[t("strong",[_._v("yield()")]),_._v("：不会阻塞，让出cpu时间。")]),_._v(" "),t("p",[t("strong",[_._v("t.join()")]),_._v("：方法只会使主线程进入等待池并等待t线程执行完毕后才会被唤醒。并不影响同一时刻处在运行状态的其他线程。")]),_._v(" "),t("p",[t("strong",[_._v("obj.wait()")]),_._v("：当前线程调用对象的wait()方法，当前线程释放对象锁，进入等待队列。依靠notify()/notifyAll()唤醒。")]),_._v(" "),t("p",[t("strong",[_._v("obj.notify()")]),_._v("：唤醒任意在此对象监视器上等待的单个线程。")]),_._v(" "),t("h2",{attrs:{id:"_2-线程池有哪些核心参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-线程池有哪些核心参数"}},[_._v("#")]),_._v(" 2 线程池有哪些核心参数？")]),_._v(" "),t("p",[_._v("1、int "),t("strong",[_._v("corePoolSize")]),_._v("：核心池的大小。线程池的基本大小，并且只有在工作队列满了的情况下才会创建超出这个数量的线程。")]),_._v(" "),t("p",[_._v("这里需要注意的是：")]),_._v(" "),t("p",[_._v("在创建ThreadPoolExecutor的时候，线程不会立即启动，要等到有任务提交时才启动，除非调用prestartCoreThread/prestartAllCoreThreads事先启动核心线程。")]),_._v(" "),t("p",[_._v("再考虑到keepAliveTime和allowCoreThreadTimeOut超时参数的影响，所以没有任务需要执行的时候，线程池的大小不一定是corePoolSize。")]),_._v(" "),t("p",[_._v("2、int "),t("strong",[_._v("maximumPoolSize")]),_._v("：线程池最大线程数，它表示在线程池中最多能创建多少个线程。")]),_._v(" "),t("p",[_._v("线程池中允许的最大线程数，线程池中的当前线程数目不会超过该值。")]),_._v(" "),t("p",[_._v("如果队列中任务已满，并且当前线程个数小于maximumPoolSize，那么会创建新的线程来执行任务。")]),_._v(" "),t("p",[_._v("3、long "),t("strong",[_._v("keepAliveTime")]),_._v("：表示线程没有任务执行时最多保持多久时间会终止。")]),_._v(" "),t("p",[_._v("4、TimeUnit "),t("strong",[_._v("unit")]),_._v("：参数keepAliveTime的时间单位，有7种取值，在TimeUnit类中有7种静态属性。")]),_._v(" "),t("p",[_._v("5、BlockingQueue<Runnable> "),t("strong",[_._v("workQueue")]),_._v("：一个阻塞队列，用来存储等待执行的任务。无界、有界、优先级、无缓冲区队列")]),_._v(" "),t("p",[_._v("6、ThreadFactory "),t("strong",[_._v("threadFactory")]),_._v("：线程工厂，主要用来创建线程。")]),_._v(" "),t("p",[_._v("7、RejectedExecutionHandler "),t("strong",[_._v("handler")]),_._v("：拒绝策略，表示当拒绝处理任务时的策略。")]),_._v(" "),t("h2",{attrs:{id:"_3-线程池的执行流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-线程池的执行流程"}},[_._v("#")]),_._v(" 3 线程池的执行流程？")]),_._v(" "),t("p",[_._v("1、如果当前线程池中的线程数目小于corePoolSize，则来一个任务，就创建一个线程去执行这个任务。")]),_._v(" "),t("p",[_._v("2、如果当前线程池中的线程数目>=corePoolSize，则每来一个任务，会尝试将其添加到任务队列当中。")]),_._v(" "),t("p",[_._v("若添加成功，则该任务会等待空闲线程将其取出去执行。")]),_._v(" "),t("p",[_._v("若添加失败（一般来说是任务缓存队列已满），则尝试创建新的线程去执行这个任务maximumPoolSize。")]),_._v(" "),t("p",[_._v("3、如果当前线程池中的线程数目达到maximumPoolSize（此时线程池的任务缓存队列已满），则会采取任务拒绝策略进行处理；")]),_._v(" "),t("p",[_._v("4、线程池中的线程数量大于corePoolSize时，如果某线程空闲时间超过keepAliveTime，线程将被终止，直至线程池中的线程数目不大于corePoolSize；")]),_._v(" "),t("p",[_._v("如果允许为核心池中的线程设置存活时间，那么核心池中的线程空闲时间超过keepAliveTime，线程也会被终止。")]),_._v(" "),t("h2",{attrs:{id:"_4-线程池的拒绝策略有哪几种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-线程池的拒绝策略有哪几种"}},[_._v("#")]),_._v(" 4 线程池的拒绝策略有哪几种？")]),_._v(" "),t("p",[_._v("任务拒绝策略，通常有以下四种策略：")]),_._v(" "),t("p",[_._v("1）ThreadPoolExecutor.AbortPolicy：丢弃任务并抛出RejectedExecutionException异常。")]),_._v(" "),t("p",[_._v("2）ThreadPoolExecutor.DiscardPolicy：也是丢弃任务，但是不抛出异常。")]),_._v(" "),t("p",[_._v("3）ThreadPoolExecutor.DiscardOldestPolicy：丢弃队列最前面的任务，然后重新尝试执行任务。")]),_._v(" "),t("p",[_._v("4）ThreadPoolExecutor.CallerRunsPolicy：由调用线程（提交任务的线程）处理该任务。")]),_._v(" "),t("h2",{attrs:{id:"_5-线程池的核心线程与最大线程数设置多少合适"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-线程池的核心线程与最大线程数设置多少合适"}},[_._v("#")]),_._v(" 5 线程池的核心线程与最大线程数设置多少合适？")]),_._v(" "),t("p",[t("strong",[_._v("核心线程数：")])]),_._v(" "),t("p",[t("strong",[_._v("CPU密集型")]),_._v("任务应配置尽可能小的线程，如配置"),t("strong",[_._v("NCPU+1")]),_._v("个线程的线程池。")]),_._v(" "),t("p",[t("strong",[_._v("IO密集型")]),_._v("任务线程并不是一直在执行任务 ，则应配置尽可能多的线程，如"),t("strong",[_._v("2*NCPU")]),_._v(" 。")]),_._v(" "),t("p",[t("strong",[_._v("最大线程数：")])]),_._v(" "),t("p",[t("strong",[_._v("最大线程数 = （最大任务数-队列容量）/每个线程每秒处理能力")])]),_._v(" "),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/6d7021ba80cfb83f3971fdae8926b94a.png",width:"70%"}}),_._v(" "),t("h2",{attrs:{id:"_6-多线程并行执行-汇总结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-多线程并行执行-汇总结果"}},[_._v("#")]),_._v(" 6 多线程并行执行，汇总结果？")]),_._v(" "),t("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/413c10308c03005874954844ea549eda.png"}})])}),[],!1,null,null,null);v.default=o.exports}}]);