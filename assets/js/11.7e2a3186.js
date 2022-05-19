(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{505:function(_,t,v){"use strict";v.r(t);var a=v(18),s=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-synchronized"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-synchronized"}},[_._v("#")]),_._v(" 1 Synchronized")]),_._v(" "),v("h3",{attrs:{id:"_1-1-cas与synchronized的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-cas与synchronized的区别"}},[_._v("#")]),_._v(" 1.1 CAS与Synchronized的区别？")]),_._v(" "),v("p",[_._v("1）"),v("strong",[_._v("CAS")]),_._v(" 是 compare and swap 的缩写，即我们所说的比较交换。")]),_._v(" "),v("p",[_._v("cas 是一种基于锁的操作，而且是乐观锁。在java中锁分为乐观锁和悲观锁。")]),_._v(" "),v("p",[_._v("悲观锁是将资源锁住，等一个之前获得锁的线程释放锁之后，下一个线程才可以访问。")]),_._v(" "),v("p",[_._v("而乐观锁采取了 一种宽泛的态度，通过某种方式不加锁来处理资源，比如通过给记录加 version 来获取数据， 性能较悲观锁有很大的提高。")]),_._v(" "),v("p",[_._v("CAS 操作包含三个操作数：内存位置(V)、旧值(A)和新值(B)。如果内存地址里面的值和 A 的值是一样的，那么就将内存里面的值更新成 B。")]),_._v(" "),v("p",[_._v("CAS 是通过无限循环来获取数据的，若果在第一轮循环中，a线程获取地址里面的值被b线程修改了，那么a线程需要自旋，到下次循环才有可能机会执行。")]),_._v(" "),v("p",[_._v("java.util.concurrent.atomic 包下的类大多是使用 CAS 操作来实现的 (AtomicInteger,AtomicBoolean,AtomicLong)。")]),_._v(" "),v("p",[v("strong",[_._v("CAS存在的问题")]),_._v("：")]),_._v(" "),v("p",[_._v("1.1）ABA问题：一个线程把值从A改为B再改回A，另一个线程不知道这个过程。")]),_._v(" "),v("p",[_._v("解决方案：使用版本号，每次修改数据时带上一个版本号。")]),_._v(" "),v("p",[_._v("1.2）循环开销大：CAS通过自旋获取锁，当一直获取不到锁时，会不断空循环。")]),_._v(" "),v("p",[_._v("1.3）不能保证代码块的原子性")]),_._v(" "),v("p",[_._v("CAS 机制所保证的知识一个变量的原子性操作，而不能保证整个代码块的原子性。比如需要保证3个变量共同进行原子性的更新，就不得不使用synchronized了。")]),_._v(" "),v("p",[_._v("2）"),v("strong",[_._v("Synchronized")]),_._v("：悲观锁。")]),_._v(" "),v("p",[_._v("synchronized主要解决的是多个线程之间的同步问题，synchronized关键字可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。")]),_._v(" "),v("p",[_._v("jdk1.6之前性能较差，主要基于Monitor机制实现，依赖底层操作系统的互斥原语Mutex。线程之间的切换需要操作系统从用户态转换到内核态进行，时间成本很高。jdk1.6之后做了优化，锁分成了4种状态，分别是无锁状态、偏向锁状态、轻量级锁状态、重量级锁状态。")]),_._v(" "),v("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/682973622a174c1739687fc1dbb237bf.png",width:"70%"}}),_._v(" "),v("p",[v("strong",[_._v("偏向锁")]),_._v("：针对没有锁竞争的场合。jvm启动之后默认有4s的延迟，对每个新建的对象都开启偏向锁模式，在这之前新建的都是无锁状态。（可通过配置调整）")]),_._v(" "),v("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/7fa0c584875bb67a94f0052a85e38fc7.png",width:"70%"}}),_._v(" "),v("p",[v("strong",[_._v("轻量级锁")]),_._v("：出现的场景是线程交替执行同步块。通过CAS获取锁（没有自旋），失败膨胀成重量级锁。")]),_._v(" "),v("p",[_._v("A线程执行完加锁模块，线程还没结束，此时B线程去加锁（发现加不了偏向锁：A线程还在执行），升级为轻量级锁。轻量级锁解锁后后直接到无锁状态。（同样，重量级锁解锁的时候也只会到无锁状态。重量级锁解锁时是GC的时候才清掉标识，较慢，可睡眠一两秒后再看。）")]),_._v(" "),v("p",[v("strong",[_._v("重量级锁")]),_._v("：出现场景：竞争激烈的情况（A线程的锁还没释放，B线程也去加锁）。去内核态操作前，会先尝试自旋CAS获取锁。")]),_._v(" "),v("h3",{attrs:{id:"_1-2-synchronized的加锁方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-synchronized的加锁方式"}},[_._v("#")]),_._v(" 1.2 synchronized的加锁方式")]),_._v(" "),v("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/3d610b3102f2418d67ea06b0eb798c68.png",width:"70%"}}),_._v(" "),v("h3",{attrs:{id:"_1-3-new-object-占多少字节-16"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-new-object-占多少字节-16"}},[_._v("#")]),_._v(" 1.3 new Object(); 占多少字节？ 16")]),_._v(" "),v("p",[_._v("对象在内存中存储的布局可以分为三块区域:")]),_._v(" "),v("p",[_._v("对象头(Header)")]),_._v(" "),v("p",[_._v("实例数据 (Instance Data)")]),_._v(" "),v("p",[_._v("对齐填充(Padding)")]),_._v(" "),v("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/b41ac8ff00bc20cb247e255149ef7708.png",width:"70%"}}),_._v(" "),v("p",[_._v("Mark Word：8字节")]),_._v(" "),v("p",[_._v("MetaData：4字节")]),_._v(" "),v("p",[_._v("数组长度：4字节")]),_._v(" "),v("p",[_._v("长度必须是8的倍数，不够则用“对齐填充”补齐。")]),_._v(" "),v("h3",{attrs:{id:"_1-4-关于无锁偏向锁轻量级锁重量级锁的理解误区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-关于无锁偏向锁轻量级锁重量级锁的理解误区"}},[_._v("#")]),_._v(" 1.4 关于无锁偏向锁轻量级锁重量级锁的理解误区")]),_._v(" "),v("p",[_._v("1. 无锁 --\x3e 偏向锁 --\x3e 轻量级锁 --\x3e 重量级锁。 （不存在无锁 --\x3e 偏向锁）")]),_._v(" "),v("p",[_._v("2. 轻量级锁自旋获取锁失败，会膨胀成重量级锁。 （轻量级锁不存在自旋）")]),_._v(" "),v("p",[_._v("3. 重量级锁不存在自旋。 （重量级锁存在自旋）")]),_._v(" "),v("h3",{attrs:{id:"_1-5-锁状态转换流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-锁状态转换流程"}},[_._v("#")]),_._v(" 1.5 锁状态转换流程")]),_._v(" "),v("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/cea17025824c7f18df589fa3b7211b82.png"}}),_._v(" "),v("h2",{attrs:{id:"_2-aqs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-aqs"}},[_._v("#")]),_._v(" 2 AQS")]),_._v(" "),v("h3",{attrs:{id:"_2-1-聊聊你对aqs的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-聊聊你对aqs的理解"}},[_._v("#")]),_._v(" 2.1 聊聊你对AQS的理解？")]),_._v(" "),v("p",[v("strong",[_._v("AbstractQueuedSynchronizer，抽象队列同步器")])]),_._v(" "),v("p",[_._v("AQS它是JUC（java.util.concurrent）包中多个组件的底层实现。比如像ReentrantLock、Semaphore、CountDownLatch都用到了AQS。")]),_._v(" "),v("p",[_._v("AQS提供了2种锁机制，分别是"),v("strong",[_._v("独占锁")]),_._v("和"),v("strong",[_._v("共享锁")]),_._v("。")]),_._v(" "),v("p",[_._v("所谓独占锁就是存在多个线程去竞争同一共享资源的时候，同一个时刻，只允许一个线程去访问这个共享资源。也就是多个线程，只有一个能获取锁。比如ReentrantLock就是独占锁。")]),_._v(" "),v("p",[_._v("共享锁就是在同一时刻允许多个线程去获取锁。比如CountDownLatch、Semaphore。")]),_._v(" "),v("p",[_._v("然后，关于AQS的设计，它有几个核心的东西：")]),_._v(" "),v("p",[_._v("AQS对象里面有一个int类型变量："),v("strong",[_._v("state，代表了加锁状态")]),_._v("。独占锁初始状态下是0")]),_._v(" "),v("p",[_._v("还有一个关键变量：加锁线程，用来"),v("strong",[_._v("记录当前加锁的是那个线程")]),_._v("。初始状态下是null")]),_._v(" "),v("p",[_._v("另外AQS内部还有一个"),v("strong",[_._v("等待队列")]),_._v("，用来专门存放加锁失败的线程。")]),_._v(" "),v("p",[v("strong",[_._v("关于独占锁加锁和释放锁过程：")])]),_._v(" "),v("p",[_._v("1.线程过来加锁，通过cas的方式把state从0变成1，同时把“加锁线程”设置成自己。")]),_._v(" "),v("p",[_._v("2.如果加锁的时候发现state不是0，会判断一下“加锁线程”是不是自己，是自己的话state累加，不是的话则加锁失败。")]),_._v(" "),v("p",[_._v("3.加锁失败的会将自己放入同步队列中等待，等其他线程释放锁之后，自己再重新尝试加锁。")]),_._v(" "),v("p",[_._v("4.加锁的线程在执行完自己的业务逻辑代码后释放锁，释放锁会将state变量减1，当state变量为0，则会彻底释放锁，同时把“加锁线程”这个变量设置成null。")]),_._v(" "),v("p",[_._v("5.彻底释放锁后，会从同步队列的队头唤醒线程尝试加锁。")]),_._v(" "),v("p",[v("strong",[_._v("还有一个点：公平锁与非公平锁，AQS支持公平和非公平锁：")])]),_._v(" "),v("p",[_._v("AQS的处理方式是：在竞争锁资源的时候，公平锁需要去判断同步等待队列中时候有阻塞的线程，如果有则需要去排队等待。而非公平锁的处理方式是，不管同步等待队列中是否有阻塞线程，它都会直接去尝试更改互斥变量“state”去竞争锁。")]),_._v(" "),v("h3",{attrs:{id:"_2-2-synchronized和reentrantlock的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-synchronized和reentrantlock的区别"}},[_._v("#")]),_._v(" 2.2 synchronized和ReentrantLock的区别？")]),_._v(" "),v("p",[_._v("1.synchronized是JVM层次的锁实现，ReentrantLock是JDK层次的锁实现。")]),_._v(" "),v("p",[_._v("2.synchronized的锁状态无法在代码中直接判断，但ReentrantLock可以通过#isLocked判断。")]),_._v(" "),v("p",[_._v("3.synchronized是非公平锁，ReentrantLock是可以是公平也可以是非公平的。")]),_._v(" "),v("p",[_._v("4.synchronized是不可以被中断的，而ReentrantLock#lockInterruptibly方法是可以被中断的。")]),_._v(" "),v("p",[_._v("5.发生异常时synchronized会自动释放锁，而ReentrantLock需要开发者在finally块中显示释放锁。")]),_._v(" "),v("p",[_._v("6.ReentrantLock获取锁的形式有多种:立即返回是否成功的tryLock(),等待指定时长的获取，更灵活;")]),_._v(" "),v("h3",{attrs:{id:"_2-3-aqs定义的两种队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-aqs定义的两种队列"}},[_._v("#")]),_._v(" 2.3 AQS定义的两种队列？")]),_._v(" "),v("p",[v("strong",[_._v("同步等待队列:")])]),_._v(" "),v("p",[_._v("主要用于维护获取锁失败时入队的线程。")]),_._v(" "),v("p",[v("strong",[_._v("条件等待队列:")])]),_._v(" "),v("p",[_._v("调用await()的时候会释放锁，然后线程会加入到条件队列，调用signal()唤醒的时候会把条件队列中的线程节点移动到同步队列中，等待再次获得锁。")]),_._v(" "),v("h2",{attrs:{id:"_3-死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-死锁"}},[_._v("#")]),_._v(" 3 死锁")]),_._v(" "),v("h3",{attrs:{id:"_3-1-什么是死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-什么是死锁"}},[_._v("#")]),_._v(" 3.1 什么是死锁？")]),_._v(" "),v("p",[_._v("死锁是指两个或两个以上的线程在执行过程中，由于竞争资源而造成的一种阻塞现象，若无外力作用，它们将无法推进下去。")]),_._v(" "),v("h3",{attrs:{id:"_3-2-死锁产生的必要条件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-死锁产生的必要条件"}},[_._v("#")]),_._v(" 3.2 死锁产生的必要条件？")]),_._v(" "),v("p",[_._v("1."),v("strong",[_._v("互斥条件")]),_._v("：即在一段时间内某一资源仅能一个线程占用")]),_._v(" "),v("p",[_._v("2."),v("strong",[_._v("占有且等待条件")]),_._v("：当线程因为请求资源而阻塞的时候，对已经获得的资源保持不放。")]),_._v(" "),v("p",[_._v("3."),v("strong",[_._v("不可剥夺条件")]),_._v("：线程对获得的资源为使用完成之前，不能被剥夺，只能使用完时由自己释放。")]),_._v(" "),v("p",[_._v("4."),v("strong",[_._v("循环等待条件")]),_._v("：发生死锁时，必然存在一个进程和资源的环形链。")]),_._v(" "),v("h3",{attrs:{id:"_3-3-怎么预防死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-怎么预防死锁"}},[_._v("#")]),_._v(" 3.3 怎么预防死锁？")]),_._v(" "),v("p",[_._v("互斥条件无法被破坏，锁本身就是通过互斥来解决线程安全问题。")]),_._v(" "),v("p",[_._v("1."),v("strong",[_._v("资源一次性分配")]),_._v("（破坏占用且等待的条件）")]),_._v(" "),v("p",[_._v("2."),v("strong",[_._v("可剥夺资源")]),_._v("：进程已经获得部分资源，但得不到其他资源，则释放已占有的资源（破坏不可剥夺条件）")]),_._v(" "),v("p",[_._v("3."),v("strong",[_._v("资源有序分配")]),_._v("：按顺序请求资源（破坏循环等待条件）")])])}),[],!1,null,null,null);t.default=s.exports}}]);