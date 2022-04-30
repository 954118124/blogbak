(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{494:function(_,a,v){"use strict";v.r(a);var t=v(30),r=Object(t.a)({},(function(){var _=this,a=_.$createElement,v=_._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"jvm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[_._v("#")]),_._v(" JVM")]),_._v(" "),v("h2",{attrs:{id:"_1、云路生产环境节点配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、云路生产环境节点配置"}},[_._v("#")]),_._v(" -1、云路生产环境节点配置")]),_._v(" "),v("p",[v("strong",[_._v("-XX:+UseContainerSupport")])]),_._v(" "),v("p",[_._v("此参数用于使 JVM 在分配堆大小时考虑容器内存限制，而不是主机配置。")]),_._v(" "),v("p",[v("strong",[_._v("-XX:MaxRAMPercentage=60.0")])]),_._v(" "),v("p",[_._v("堆最大内存大小（容器总内存的百分比）")]),_._v(" "),v("p",[v("strong",[_._v("-XX:InitialRAMPercentage=60.0")])]),_._v(" "),v("p",[_._v("初始堆大小（容器总内存的百分比）")]),_._v(" "),v("p",[v("strong",[_._v("-XX:MinRAMPercentage=60.0")])]),_._v(" "),v("p",[_._v("堆最小内存大小（容器总内存的百分比）")]),_._v(" "),v("p",[v("strong",[_._v("-XX:NewRatio=2")])]),_._v(" "),v("p",[_._v("老年代除以新生代比例，2代表新生代占1，老年代占2，年轻代占整个堆内存的1/3。")]),_._v(" "),v("p",[v("strong",[_._v("-Xss512k")])]),_._v(" "),v("p",[_._v("栈内存的大小（决定方法调用深度）")]),_._v(" "),v("p",[v("strong",[_._v("-XX:MetaspaceSize=256M")])]),_._v(" "),v("p",[_._v("元空间")]),_._v(" "),v("p",[v("strong",[_._v("-XX:MaxMetaspaceSize=512M")])]),_._v(" "),v("p",[_._v("最大元空间大小")]),_._v(" "),v("h2",{attrs:{id:"_0、java虚拟机补充说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0、java虚拟机补充说明"}},[_._v("#")]),_._v(" 0、JAVA虚拟机补充说明")]),_._v(" "),v("p",[_._v("从Java SE 7开始，HotSpot VM就是Java规范的“参考实现”。把它叫做“标准JVM”完全不为过。")]),_._v(" "),v("p",[_._v("当大家说起“Java性能如何如何”、“Java有多少种GC”、“JVM如何调优”云云，经常默认说的就是特指HotSpot VM。可见其“主流性”。")]),_._v(" "),v("p",[_._v("JDK8的HotSpot VM已经是以前的HotSpot VM与JRockit VM的合并版，也就是传说中的“HotRockit”，只是产品里名字还是叫HotSpot VM。")]),_._v(" "),v("p",[_._v("这个合并并不是要把JRockit的部分代码插进HotSpot里，而是把前者一些有价值的功能在后者里重新实现一遍。移除PermGen、Java Flight Recorder、jcmd等都属于合并项目的一部分。")]),_._v(" "),v("h2",{attrs:{id:"_1、jvm内存模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、jvm内存模型"}},[_._v("#")]),_._v(" 1、JVM内存模型")]),_._v(" "),v("h3",{attrs:{id:"_1-1-内存模型图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-内存模型图"}},[_._v("#")]),_._v(" 1.1 内存模型图")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/90c03b577608a9ec1503e8b44f6828dd.png",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"_1-2-jvm内存参数设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-jvm内存参数设置"}},[_._v("#")]),_._v(" 1.2 JVM内存参数设置")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/a6b6c0f3eb6b5c9864de998fd7f2678e.png",alt:""}})]),_._v(" "),v("p",[_._v("-Xss设越小count值越小，说明一个线程栈里能分配的栈帧就越少，但对JVM整体来说能开启的线程数会更多。")]),_._v(" "),v("h3",{attrs:{id:"_1-3-为什么要将永久代-permgen-替换为元空间-metaspace"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-为什么要将永久代-permgen-替换为元空间-metaspace"}},[_._v("#")]),_._v(" 1.3 为什么要将永久代（PermGen）替换为元空间（MetaSpace）？")]),_._v(" "),v("p",[_._v("1.永久代受限于JVM本身设置的固定大小上限。元空间使用的是直接内存，只受本机可用内存限制。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/923dd695a303b0ca78c8d89aa57c1fae.png",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"_1-4-jvm内存模型包括哪些数据区域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-jvm内存模型包括哪些数据区域"}},[_._v("#")]),_._v(" 1.4 JVM内存模型包括哪些数据区域？")]),_._v(" "),v("p",[_._v("主要包括5大块。")]),_._v(" "),v("p",[_._v("1.方法区（元空间），堆都为数据共享区域，有线程安全问题。")]),_._v(" "),v("p",[_._v("2.栈、本地方法栈、程序计数器为独享区域，不存在线程问题。")]),_._v(" "),v("h4",{attrs:{id:"_1-4-1-方法区-元空间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-方法区-元空间"}},[_._v("#")]),_._v(" 1.4.1 方法区（元空间）")]),_._v(" "),v("p",[_._v("存储已被虚拟机加载的类信息、常量、静态变量，即编译器编译后的代码等数据。方法区还有一个别名叫Non-Heap（非堆）。")]),_._v(" "),v("h4",{attrs:{id:"_1-4-2-堆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-堆"}},[_._v("#")]),_._v(" 1.4.2 堆")]),_._v(" "),v("p",[_._v("此内存区域的唯一目的就是存放对象实例，几乎所有对象实例以及数组都在这里分配内存。")]),_._v(" "),v("p",[_._v("JDK1.7之后开始默认开启逃逸分析：如果某些方法中的对象没有被返回或者未被外面引用（未逃逸），那么该对象可以在栈上分配内存。")]),_._v(" "),v("h4",{attrs:{id:"_1-4-3-栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-3-栈"}},[_._v("#")]),_._v(" 1.4.3 栈")]),_._v(" "),v("p",[_._v("栈也就是Java虚拟机栈，由一个个栈帧组成，每个栈帧拥有：")]),_._v(" "),v("p",[_._v("局部变量表、操作数栈、动态链接、方法出口信息。")]),_._v(" "),v("p",[_._v("局部变量表主要存放编译期可知的各种数据类型（byte、short、int、long、float、double、boolean、char）、对象引用。")]),_._v(" "),v("p",[_._v("每一次方法的调用都会有一个对应的栈帧被压入java栈，方法调用结束后，栈帧弹出。")]),_._v(" "),v("p",[_._v("Java方法有2种返回方式：")]),_._v(" "),v("p",[_._v("1.return语句。")]),_._v(" "),v("p",[_._v("2.抛出异常。")]),_._v(" "),v("p",[_._v("不管哪种返回方式都会导致栈帧弹出。")]),_._v(" "),v("h4",{attrs:{id:"_1-4-4-本地方法栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-4-本地方法栈"}},[_._v("#")]),_._v(" 1.4.4 本地方法栈")]),_._v(" "),v("p",[_._v("和虚拟机栈发挥的作用非常相似，区别是：虚拟机栈执行的是Java方法服务，本地方法栈执行的是Native方法服务。")]),_._v(" "),v("p",[_._v("本地方法执行的时候，在本地方法栈也会创建一个栈帧，用于存放该本地方法的局部变量表、操作数栈、动态链接、出口信息。")]),_._v(" "),v("p",[_._v("本地方法执行完毕后也会出栈并释放内存空间。")]),_._v(" "),v("h4",{attrs:{id:"_1-4-5-程序计数器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-5-程序计数器"}},[_._v("#")]),_._v(" 1.4.5 程序计数器")]),_._v(" "),v("p",[_._v("每条线程都有独立的程序计数器，各线程之间计数器互不影响。")]),_._v(" "),v("h2",{attrs:{id:"_2、类加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、类加载"}},[_._v("#")]),_._v(" 2、类加载")]),_._v(" "),v("h3",{attrs:{id:"_2-1-说一下类的加载流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-说一下类的加载流程"}},[_._v("#")]),_._v(" 2.1 说一下类的加载流程？")]),_._v(" "),v("p",[_._v("一个类的完整生命周期如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/92be1cfff48e53610f6e5d74b71d15d4.png",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"_2-1-1-加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-加载"}},[_._v("#")]),_._v(" 2.1.1 加载")]),_._v(" "),v("p",[_._v("类加载过程的第一步，主要完成3件事情：")]),_._v(" "),v("p",[_._v("1.通过全类名获取定义此类的二进制字节流。")]),_._v(" "),v("p",[_._v("2.将字节流信息转换成方法区的数据结构。")]),_._v(" "),v("p",[_._v("3.在方法区（元空间）内存中生成一个代表该类的Class对象，作为方法区这些数据的访问入口。")]),_._v(" "),v("h4",{attrs:{id:"_2-1-2-验证"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-验证"}},[_._v("#")]),_._v(" 2.1.2 验证")]),_._v(" "),v("p",[_._v("确保加载的类符合JVM规范和安全，其实就是一个安全检查。")]),_._v(" "),v("h4",{attrs:{id:"_2-1-3-准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-准备"}},[_._v("#")]),_._v(" 2.1.3 准备")]),_._v(" "),v("p",[_._v("为静态变量分配内存并赋予默认值的阶段。")]),_._v(" "),v("h4",{attrs:{id:"_2-1-4-解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-解析"}},[_._v("#")]),_._v(" 2.1.4 解析")]),_._v(" "),v("p",[_._v("虚拟机将常量池内的符号引用替换为直接引用。")]),_._v(" "),v("p",[_._v("也就是得到类或者字段、方法在内存中的指针或者偏移量。")]),_._v(" "),v("h4",{attrs:{id:"_2-1-5-初始化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-5-初始化"}},[_._v("#")]),_._v(" 2.1.5 初始化")]),_._v(" "),v("p",[_._v("初始化静态变量为指定的值，执行静态代码块。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/188a245d7af8283989542821d9245ef0.png",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"_2-1-6-卸载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-6-卸载"}},[_._v("#")]),_._v(" 2.1.6 卸载")]),_._v(" "),v("p",[_._v("卸载类即该类的Class对象被GC。")]),_._v(" "),v("p",[_._v("卸载需要满足3个条件：")]),_._v(" "),v("p",[_._v("1.该类的所有实例对象已被GC。")]),_._v(" "),v("p",[_._v("2.该类没有在其他任何地方被引用。")]),_._v(" "),v("p",[_._v("3.该类的类加载器的实例已被GC。")]),_._v(" "),v("p",[_._v("所以，在JVM生命周期内，由jvm自带的类加载器加载的类是不会被卸载的。自定义的类加载器加载的类可能被卸载。")]),_._v(" "),v("h3",{attrs:{id:"_2-2-双亲委派机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-双亲委派机制"}},[_._v("#")]),_._v(" 2.2 双亲委派机制")]),_._v(" "),v("h4",{attrs:{id:"_2-2-1-为什么要设计双亲委派机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-为什么要设计双亲委派机制"}},[_._v("#")]),_._v(" 2.2.1 为什么要设计双亲委派机制?")]),_._v(" "),v("p",[_._v("1）沙箱安全机制:自己写的java.lang.String.class类不会被加载，这样便可以防止核心API库被随意篡改。")]),_._v(" "),v("p",[_._v("2）避免类的重复加载:当父亲已经加载了该类时，就没有必要子ClassLoader再加载一次，保证被加载类的唯一性。")]),_._v(" "),v("h4",{attrs:{id:"_2-2-2-双亲委派的加载顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-双亲委派的加载顺序"}},[_._v("#")]),_._v(" 2.2.2 双亲委派的加载顺序？")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/0b5eb7a39337bf9d1722b66bb65747d7.png",alt:""}})]),_._v(" "),v("p",[_._v("双亲委派加载顺序为什么要从:")]),_._v(" "),v("p",[_._v("AppcClassLoader -> ExtClassLoader -> BootstrapClassLoader -> ExtClassLoader -> AppcClassLoader")]),_._v(" "),v("p",[_._v("为什么不直接:")]),_._v(" "),v("p",[_._v("BootstrapClassLoader -> ExtClassLoader -> AppcClassLoader")]),_._v(" "),v("p",[_._v("答：开发的应用中大部分用到的是appclassloader，第一次加载会麻烦一点，但是第二次加载如果发现该类已经加载过（c++实现），则直接用该加载器加载。")]),_._v(" "),v("h4",{attrs:{id:"_2-2-3-怎么实现自定义加载器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-怎么实现自定义加载器"}},[_._v("#")]),_._v(" 2.2.3 怎么实现自定义加载器？")]),_._v(" "),v("p",[_._v("继承ClassLoader，重写ClassLoader类中的findClass方法。")]),_._v(" "),v("p",[_._v("除了BootstrapClassLoader，其他类加载器均由Java实现且全部继承自java.lang.ClassLoader。")]),_._v(" "),v("h4",{attrs:{id:"_2-2-4-怎么打破双亲委派机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-怎么打破双亲委派机制"}},[_._v("#")]),_._v(" 2.2.4 怎么打破双亲委派机制？")]),_._v(" "),v("p",[_._v("重写loadClass方法。")]),_._v(" "),v("h2",{attrs:{id:"_3、虚拟机对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、虚拟机对象"}},[_._v("#")]),_._v(" 3、虚拟机对象")]),_._v(" "),v("h3",{attrs:{id:"_3-1-对象的创建包含哪些步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-对象的创建包含哪些步骤"}},[_._v("#")]),_._v(" 3.1 对象的创建包含哪些步骤？")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/a08353fdebb3dffe0ad5a12e884b6826.png",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"_3-1-1-类加载检查"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-类加载检查"}},[_._v("#")]),_._v(" 3.1.1 类加载检查")]),_._v(" "),v("p",[_._v("虚拟机遇到一条new指令时，首先去检查这个指令的参数能否在Class常量池中定位到一个类的符号引用，且检查这个符号引用代表的类是否已加载、解析和初始化过。如果没有，先执行相应的类加载过程。")]),_._v(" "),v("p",[_._v("new指令指：new关键词、对象克隆、对象序列化等。")]),_._v(" "),v("h4",{attrs:{id:"_3-1-2内存分配"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2内存分配"}},[_._v("#")]),_._v(" 3.1.2内存分配")]),_._v(" "),v("p",[_._v("在"),v("strong",[_._v("类加载检查")]),_._v("通过后，接下来虚拟机将为新生对象"),v("strong",[_._v("分配内存")]),_._v("。")]),_._v(" "),v("p",[_._v("对象所需的内存大小在类加载完成后便可确定，为对象分配内存等同把一块确定大小的内存从java堆中划分出来。")]),_._v(" "),v("h5",{attrs:{id:"_3-1-2-1-内存分配有哪些方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-1-内存分配有哪些方式"}},[_._v("#")]),_._v(" 3.1.2.1 内存分配有哪些方式？")]),_._v(" "),v("p",[_._v("分配内存的方式有 "),v("strong",[_._v("指针碰撞")]),_._v(" 和 "),v("strong",[_._v("空闲列表")]),_._v(" 2种。")]),_._v(" "),v("p",[_._v("选择哪种分配方式由java堆是否规整决定，而java堆是否规整又由所采用的垃圾收集器是否有压缩整理功能决定。")]),_._v(" "),v("h6",{attrs:{id:"_1-指针碰撞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-指针碰撞"}},[_._v("#")]),_._v(" 1 指针碰撞")]),_._v(" "),v("p",[v("strong",[_._v("适用场合")]),_._v("：堆内存规整（即没有内存碎片）的情况下。")]),_._v(" "),v("p",[v("strong",[_._v("原理")]),_._v("：所有用过的内存全部整合到一边，没有用过的内存放在另外一边，中间有一个分界指针，只需要向着没用过的内存方向将指针移动对象内存大小位置即可。")]),_._v(" "),v("p",[v("strong",[_._v("使用该分配方式的GC收集器")]),_._v("：Serial，ParNew。")]),_._v(" "),v("h6",{attrs:{id:"_2-空闲列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-空闲列表"}},[_._v("#")]),_._v(" 2 空闲列表")]),_._v(" "),v("p",[v("strong",[_._v("适用场合")]),_._v("：堆内存不规整的情况下。")]),_._v(" "),v("p",[v("strong",[_._v("原理")]),_._v("：JVM维护一个列表，该列表会记录哪些内存块是可用的，在分配内存的时候，找到一块足够大的内存块划分给对象实例，最后更新列表记录。")]),_._v(" "),v("p",[v("strong",[_._v("使用该分配方式的GC收集器")]),_._v("：CMS。")]),_._v(" "),v("h5",{attrs:{id:"_3-1-2-2-内存分配的并发问题怎么解决"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-2-内存分配的并发问题怎么解决"}},[_._v("#")]),_._v(" 3.1.2.2 内存分配的并发问题怎么解决？")]),_._v(" "),v("p",[_._v("创建对象是很频繁的问题，需保证线程安全。目前，虚拟机采用了2种方式来保证线程安全：")]),_._v(" "),v("h6",{attrs:{id:"_1-cas-失败重试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-cas-失败重试"}},[_._v("#")]),_._v(" 1 CAS+失败重试")]),_._v(" "),v("p",[_._v("CAS操作失败就重试，直到成功为止。保证更新操作的原子性。")]),_._v(" "),v("h6",{attrs:{id:"_2-tlab"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-tlab"}},[_._v("#")]),_._v(" 2 TLAB")]),_._v(" "),v("p",[v("strong",[_._v("缓冲区（Thread Local Allocation Buffer）")])]),_._v(" "),v("p",[v("strong",[_._v("JVM为每一个线程预先在Eden区分配一块内存")]),_._v("，给线程中的对象分配内存时，先在"),v("strong",[_._v("TLAB")]),_._v("上分配，当对象大于"),v("strong",[_._v("TLAB")]),_._v("的剩余内存或"),v("strong",[_._v("TLAB")]),_._v("的内存用尽时，采用 "),v("strong",[_._v("CAS+失败重试")]),_._v(" 的方式分配内存。")]),_._v(" "),v("h4",{attrs:{id:"_3-1-3-初始化零值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-初始化零值"}},[_._v("#")]),_._v(" 3.1.3 初始化零值")]),_._v(" "),v("p",[v("strong",[_._v("内存分配")]),_._v("完成后，"),v("strong",[_._v("JVM将分配到的内存空间都初始化为零值")]),_._v("。")]),_._v(" "),v("p",[_._v("这一步保证了对象的实例字段可以不赋初始值就直接使用。")]),_._v(" "),v("h4",{attrs:{id:"_3-1-4-设置对象头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-设置对象头"}},[_._v("#")]),_._v(" 3.1.4 设置对象头")]),_._v(" "),v("p",[v("strong",[_._v("初始化零值")]),_._v("完成后，JVM开始"),v("strong",[_._v("设置对象头")]),_._v("。")]),_._v(" "),v("p",[_._v("对象头主要包括2部分信息（如果是数组对象，还有一个数组长度）：")]),_._v(" "),v("p",[_._v("1.哈希码、GC分代年龄、锁状态标识等。")]),_._v(" "),v("p",[_._v("2.指向类元数据的指针，JVM通过这个指针来确定这个对象是哪个类的实例。")]),_._v(" "),v("h4",{attrs:{id:"_3-1-5-执行init方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-执行init方法"}},[_._v("#")]),_._v(" 3.1.5 执行init方法")]),_._v(" "),v("p",[_._v("执行innit方法，对应到语言层面上讲，就是"),v("strong",[_._v("为属性赋值")]),_._v("（与上面的赋零值不同），和"),v("strong",[_._v("执行构造方法")]),_._v("。")]),_._v(" "),v("h3",{attrs:{id:"_3-2-对象栈上分配"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-对象栈上分配"}},[_._v("#")]),_._v(" 3.2 对象栈上分配")]),_._v(" "),v("p",[_._v("通过创建对象时的内存分配可以知道JAVA中的对象都是在堆上进行分配，需要依靠GC进行内存回收，如果对象数量较多的时候，会给GC带来较大压力，间接影响应用的性能。")]),_._v(" "),v("p",[_._v("JVM通过逃逸分析来确定方法内的对象会不会被外部访问（即会不会“逃逸”），如果不会逃逸就可以在栈上给该对象分配内存，这样该对象所占用的内存空间就可以随着栈帧的出栈而销毁。")]),_._v(" "),v("p",[v("strong",[_._v("栈上分配一般同时依赖逃逸分析和标量替换。")])]),_._v(" "),v("h4",{attrs:{id:"_3-2-1-对象逃逸分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-对象逃逸分析"}},[_._v("#")]),_._v(" 3.2.1 对象逃逸分析")]),_._v(" "),v("p",[_._v("就是分析方法内对象是否会被外部引用（是否逃逸），未逃逸的对象在栈上分配内存。")]),_._v(" "),v("p",[_._v("JDK7之后默认开启逃逸分析。")]),_._v(" "),v("h4",{attrs:{id:"_3-2-2-标量替换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-标量替换"}},[_._v("#")]),_._v(" 3.2.2 标量替换")]),_._v(" "),v("p",[v("strong",[_._v("标量和聚合量")]),_._v("：")]),_._v(" "),v("p",[_._v("1.基础类型和对象的引用可以理解为"),v("strong",[_._v("标量")]),_._v("，它们不能被进一步分解。")]),_._v(" "),v("p",[_._v("2.能被进一步分解的就是"),v("strong",[_._v("聚合量")]),_._v("，比如：对象。")]),_._v(" "),v("p",[v("strong",[_._v("标量替换")]),_._v("：将对象成员变量分解成分散的变量，这些分散的变量在栈帧或寄存器上分配空间，这样就不会因为没有一大块连续空间导致对象内存不够分配。")]),_._v(" "),v("h3",{attrs:{id:"_3-3-对象的内存布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-对象的内存布局"}},[_._v("#")]),_._v(" 3.3 对象的内存布局")]),_._v(" "),v("p",[_._v("对象在内存中的布局可以分为3块区域："),v("strong",[_._v("对象头")]),_._v("、"),v("strong",[_._v("实例数据")]),_._v("和"),v("strong",[_._v("对齐填充")]),_._v("。")]),_._v(" "),v("h4",{attrs:{id:"_3-3-1-对象头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-对象头"}},[_._v("#")]),_._v(" 3.3.1 对象头")]),_._v(" "),v("p",[v("strong",[_._v("对象头主要由3部分组成：Mark Word、指向类的指针、数组长度（只有数组对象有）")])]),_._v(" "),v("h5",{attrs:{id:"_1-mark-word"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-mark-word"}},[_._v("#")]),_._v(" 1 Mark Word")]),_._v(" "),v("p",[_._v("Mark Word记录了哈希码、GC分代年龄、锁标识等信息。")]),_._v(" "),v("p",[_._v("在32位的JVM中长度是32bit，在64位的JVM中长度是64bit。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/682973622a174c1739687fc1dbb237bf.png",alt:""}})]),_._v(" "),v("h5",{attrs:{id:"_2-指向类的指针"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-指向类的指针"}},[_._v("#")]),_._v(" 2 指向类的指针")]),_._v(" "),v("p",[_._v("JAVA对象的类数据保存在方法区。")]),_._v(" "),v("p",[_._v("该指针在32位的JVM中长度是32bit，在64位的JVM中长度是64bit。")]),_._v(" "),v("h5",{attrs:{id:"_3-数组长度-只有数组对象有"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-数组长度-只有数组对象有"}},[_._v("#")]),_._v(" 3 数组长度（只有数组对象有）")]),_._v(" "),v("p",[_._v("该对象在32位和64位的JVM中长度都是32bit。")]),_._v(" "),v("h4",{attrs:{id:"_3-3-2-实例数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-实例数据"}},[_._v("#")]),_._v(" 3.3.2 实例数据")]),_._v(" "),v("p",[_._v("对象真正存储的有效信息，也就是程序中定义的各种类型的字段内容。")]),_._v(" "),v("h4",{attrs:{id:"_3-3-3-对齐填充"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-对齐填充"}},[_._v("#")]),_._v(" 3.3.3 对齐填充")]),_._v(" "),v("p",[_._v("对齐填充不是必然存在的，只是因为Hotspot要求对象大小必须是8字节的整数倍。")]),_._v(" "),v("p",[_._v("而"),v("strong",[_._v("对象头")]),_._v("部分是8字节的倍数（1倍或2倍），所以"),v("strong",[_._v("实例数据")]),_._v("部分没有对齐时，需要"),v("strong",[_._v("对齐填充")]),_._v("来补全。")]),_._v(" "),v("h3",{attrs:{id:"_3-4-对象的访问定位"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-对象的访问定位"}},[_._v("#")]),_._v(" 3.4 对象的访问定位")]),_._v(" "),v("p",[_._v("JAVA程序通过栈上的reference数据来操作堆上的具体对象。由于reference类型在JVM规范中只定义了一个指向对象的引用，没有说明这个引用通过何种方式去定位、访问堆中对象的具体位置，所以访问的方式取决于JVM的实现。目前主要的访问方式由2种："),v("strong",[_._v("句柄")]),_._v("和"),v("strong",[_._v("直接指针")]),_._v("。")]),_._v(" "),v("h4",{attrs:{id:"_3-4-1-句柄"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-句柄"}},[_._v("#")]),_._v(" 3.4.1 句柄")]),_._v(" "),v("p",[_._v("JAVA堆中会划分出一块内存来作为句柄池，reference存放的是对象的句柄地址，而句柄中包括对象实例的地址和对象Class的地址。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/ee18a27a152f1d1ce1c74b99ad5df1e9.png",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"_3-4-2-直接指针"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-直接指针"}},[_._v("#")]),_._v(" 3.4.2 直接指针")]),_._v(" "),v("p",[_._v("reference存放的是对象实例地址。对象实例数据的对象头里包含Class的地址。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/81e68bb318d0d5e26176bd646d6eb10b.png",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"_3-4-3-两种访问方式各有什么优势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-3-两种访问方式各有什么优势"}},[_._v("#")]),_._v(" 3.4.3 两种访问方式各有什么优势？")]),_._v(" "),v("p",[_._v("1.句柄访问最大的好处是reference中存储的是稳定的句柄地址，对象移动时只会改变句柄中的实例数据指针，reference不需要修改。")]),_._v(" "),v("p",[_._v("2.直接指针访问的好处是速度快，减少了一次指针定位的时间开销。")]),_._v(" "),v("h2",{attrs:{id:"_4、垃圾回收"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、垃圾回收"}},[_._v("#")]),_._v(" 4、垃圾回收")]),_._v(" "),v("p",[_._v("内存回收很多优化无非就是让短期存活的对象尽量都留在survivor里，不要进入老年代，这样在minor gc的时候这些对象都会被回收，不会进到老年代从而导致full gc。")]),_._v(" "),v("h3",{attrs:{id:"_4-1-java堆的内存分配与回收"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-java堆的内存分配与回收"}},[_._v("#")]),_._v(" 4.1 JAVA堆的内存分配与回收")]),_._v(" "),v("p",[v("strong",[_._v("堆空间的基本结构：")])]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/4ef035d9ff7a3cb9d3cde9664c732414.png",alt:""}})]),_._v(" "),v("p",[_._v("1.大部分情况下，对象首先在Eden区域分配。")]),_._v(" "),v("p",[_._v("2.在一次新生代垃圾回收后（Eden区和Survivor区回收），如果对象还存活，则进入s0或s1，并且年龄加1。")]),_._v(" "),v("p",[_._v("3.当对象年龄增加到一定程度（默认大于15），就会被晋升到老年代。")]),_._v(" "),v("p",[_._v("晋升到老年代的年龄设置可以通过指定参数配置，但这个值会在虚拟机运行过程中调整。")]),_._v(" "),v("h3",{attrs:{id:"_4-2-空间分配担保"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-空间分配担保"}},[_._v("#")]),_._v(" 4.2 空间分配担保")]),_._v(" "),v("p",[_._v("空间分配担保是为了确保在Minor GC之前老年代本身还有容纳新生代所有对象的剩余空间。")]),_._v(" "),v("p",[v("strong",[_._v("空间分配担保的规则为：")])]),_._v(" "),v("p",[_._v("只要老年代的连续空间大于新生代对象的总大小或者大于历次晋升的平均大小，就会进行Minor GC，")]),_._v(" "),v("p",[_._v("否则进行Full GC。")]),_._v(" "),v("h3",{attrs:{id:"_4-3-怎么判断对象已经死亡"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-怎么判断对象已经死亡"}},[_._v("#")]),_._v(" 4.3 怎么判断对象已经死亡？")]),_._v(" "),v("h4",{attrs:{id:"_4-3-1-引用计数法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-引用计数法"}},[_._v("#")]),_._v(" 4.3.1 引用计数法")]),_._v(" "),v("p",[_._v("给对象中添加一个引用计数器，每当有一个地方引用它，计数器就加1；当引用失效时，计数器就减1；任何时候计数器为0的对象就是不可能再被使用的。")]),_._v(" "),v("p",[_._v("这个方法使用简单，效率高，但是主流的虚拟机都没有用它来管理内存，主要原因是它很难解决对象之间相互循环引用的问题。")]),_._v(" "),v("h4",{attrs:{id:"_4-3-2-可达性分析算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-可达性分析算法"}},[_._v("#")]),_._v(" 4.3.2 可达性分析算法")]),_._v(" "),v("h5",{attrs:{id:"_1-介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[_._v("#")]),_._v(" 1 介绍")]),_._v(" "),v("p",[_._v("将指定类型的对象作为GC Roots节点，从这些节点开始搜索，将有引用的节点串成一条引用链，当一个对象到GC Roots没有任何引用链相连的话，则证明此对象是不可用的，需要被回收。")]),_._v(" "),v("p",[_._v("下图中Object6 ~ Object10之间虽有引用关系，但他们到GC Roots不可达，因此为需要被回收的对象。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/e43b1d866c6329a55b33521c2774a547.png",alt:""}})]),_._v(" "),v("h5",{attrs:{id:"_2-哪些对象可以作为gc-roots呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-哪些对象可以作为gc-roots呢"}},[_._v("#")]),_._v(" 2 哪些对象可以作为GC Roots呢？")]),_._v(" "),v("p",[_._v("1.虚拟机栈中引用的对象")]),_._v(" "),v("p",[_._v("2.本地方法栈中引用的对象")]),_._v(" "),v("p",[_._v("3.方法区中类静态属性引用的对象")]),_._v(" "),v("p",[_._v("4.方法区中常量引用的对象")]),_._v(" "),v("p",[_._v("5.所有被同步锁持有的对象")]),_._v(" "),v("h3",{attrs:{id:"_4-4-怎么判断一个类是无用的类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-怎么判断一个类是无用的类"}},[_._v("#")]),_._v(" 4.4 怎么判断一个类是无用的类？")]),_._v(" "),v("p",[_._v("方法区主要回收的是无用的类，判断一个类无用，需要同时满足以下3个条件：")]),_._v(" "),v("p",[_._v("1.该类的所有实例都已经被回收，也就是JVM堆中不存在该类的任何实例。")]),_._v(" "),v("p",[_._v("2.加载该类的加载器ClassLoader已经被回收。")]),_._v(" "),v("p",[_._v("3.该类对应的java.lang.Class对象没有在任何地方被引用，无法在任何地方通过反射的方式访问该类。")]),_._v(" "),v("h3",{attrs:{id:"_4-5-垃圾收集算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-垃圾收集算法"}},[_._v("#")]),_._v(" 4.5 垃圾收集算法")]),_._v(" "),v("h4",{attrs:{id:"_4-5-1-标记-清除算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-1-标记-清除算法"}},[_._v("#")]),_._v(" 4.5.1 标记-清除算法")]),_._v(" "),v("p",[_._v("该算法分为“标记”和“清除”阶段：首先标记出所有不需要回收的对象，在标记完成后统一回收掉所有没有被标记的对象。它是最基础的收集算法，后续的算法都是对其不足进行改进得到。这种垃圾收集算法会带来两个明显的问题：")]),_._v(" "),v("p",[_._v("1.效率问题")]),_._v(" "),v("p",[_._v("2.空间问题（标记清除后会产生大量不连续的碎片）")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/1e9660cc32d2ae7887c3a73c94bc569d.png",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"_4-5-2-标记-复制算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-2-标记-复制算法"}},[_._v("#")]),_._v(" 4.5.2 标记-复制算法")]),_._v(" "),v("p",[_._v("将内存分为大小相同的两块，每次使用其中的一块。当这一块的内存使用完后，就将还存活的对象复制到另一块去，然后再把使用的空间一次清理掉。这样就使每次的内存回收都是对内存区间的一半进行回收。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/ceaead6c0a4c0b3bab006b08d1db8c1c.png",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"_4-5-3-标记-整理算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-3-标记-整理算法"}},[_._v("#")]),_._v(" 4.5.3 标记-整理算法")]),_._v(" "),v("p",[_._v("标记过程仍然与“标记-清除”算法一样，但后续步骤不是直接对可回收对象回收，而是让所有存活的对象向一端移动，然后直接清理掉端边界以外的内存。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/33be3f03a3ba8350fce4342047886d07.png",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"_4-5-4-分代收集算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-4-分代收集算法"}},[_._v("#")]),_._v(" 4.5.4 分代收集算法")]),_._v(" "),v("p",[_._v("当前虚拟机的垃圾收集都采用分代收集算法，这种算法没有什么新的思想，只是根据对象存活周期的不同将内存分为几块。")]),_._v(" "),v("p",[_._v("一般将java堆分为新生代和老年代，这样我们就可以根据各个年代的特点选择合适的垃圾收集算法。")]),_._v(" "),v("p",[_._v("比如在新生代中，每次收集都会有大量对象死去，所以可以选择”标记-复制“算法，只需要付出少量对象的复制成本就可以完成每次垃圾收集。")]),_._v(" "),v("p",[_._v("而老年代的对象存活几率是比较高的，而且没有额外的空间对它进行分配担保，所以我们必须选择“标记-清除”或“标记-整理”算法进行垃圾收集。")]),_._v(" "),v("h3",{attrs:{id:"_4-6-垃圾收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-垃圾收集器"}},[_._v("#")]),_._v(" 4.6 垃圾收集器")]),_._v(" "),v("h4",{attrs:{id:"_4-6-1-serial收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-1-serial收集器"}},[_._v("#")]),_._v(" 4.6.1 Serial收集器")]),_._v(" "),v("p",[_._v("Serial（串行）收集器：单线程收集器。仅用一条线程完成垃圾收集工作，且运行期间必须暂停其他所有工作线程（Stop The World），直到它收集结束。")]),_._v(" "),v("p",[v("strong",[_._v("新生代采用标记-复制算法，老年代采用标记-整理算法。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/44f670ddf448c22b2bd2d9f3c33217f8.png",alt:""}})]),_._v(" "),v("p",[_._v("缺点：暂停所有线程影响用户体验。")]),_._v(" "),v("p",[_._v("优点：简单高效，没有线程交互的开销。")]),_._v(" "),v("h4",{attrs:{id:"_4-6-2-parnew收集器-xx-useparnewgc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-2-parnew收集器-xx-useparnewgc"}},[_._v("#")]),_._v(" 4.6.2 ParNew收集器(-XX:+UseParNewGC)")]),_._v(" "),v("p",[_._v("ParNew收集器其实就是Serial收集器的多线程版本，除了多线程，其他行为一样。")]),_._v(" "),v("p",[v("strong",[_._v("它可以和CMS收集器配合使用（新生代使用ParNew，老年代使用CMS）")]),_._v("。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/510312c8295c92dc3c1b893bfbc06950.png",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"_4-6-3-parallel-scanvenge-收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-3-parallel-scanvenge-收集器"}},[_._v("#")]),_._v(" 4.6.3 Parallel Scanvenge 收集器")]),_._v(" "),v("p",[v("strong",[_._v("JDK1.8的默认收集器")]),_._v("，新生代采用标记-复制算法，老年代采用标记-整理算法。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/510312c8295c92dc3c1b893bfbc06950.png",alt:""}})]),_._v(" "),v("p",[_._v("看上去几乎和ParNew都一样。Parallel Scavenge收集器主要在于高效率的利用CPU。")]),_._v(" "),v("h4",{attrs:{id:"_4-6-4-cms收集器-4-8g"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-4-cms收集器-4-8g"}},[_._v("#")]),_._v(" 4.6.4 CMS收集器（4-8G）")]),_._v(" "),v("p",[_._v("-XX:+UseConcMarkSweepGC(old)")]),_._v(" "),v("h5",{attrs:{id:"_4-6-4-1介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-4-1介绍"}},[_._v("#")]),_._v(" 4.6.4.1介绍")]),_._v(" "),v("p",[_._v("CMS(Concurrent Mark Sweep)收集器是一种以获取最短回收停顿时间为目标的收集器。")]),_._v(" "),v("p",[_._v("它非常符合在注重用户体验的应用上使用，它是HotSpot虚拟机第一款真正意义上的并发收集器，它第一次实现了让垃圾收集线程与用户线程 (基本上)同时工作。")]),_._v(" "),v("p",[_._v("从名字中的Mark Sweep这两个词可以看出，CMS收集器是一种 “标记-清除”算法实现的，它的运作过程相对复杂一些。整个过程分为四个步骤:")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/02e72e2d586610fd49f59c7dff68aae2.png",alt:""}})]),_._v(" "),v("p",[v("strong",[_._v("1 初始标记")])]),_._v(" "),v("p",[_._v("暂停所有的其他线程(STW)，并记录下gc roots直接能引用的对象，速度很快。")]),_._v(" "),v("p",[v("strong",[_._v("2 并发标记")])]),_._v(" "),v("p",[_._v("并发标记阶段就是从GC Roots的直接关联对象开始遍历整个对象图的过程，这个过程耗时较长但是不需要停顿用户线程，可以与垃圾收集线程一起并发运行。因为用户程序继续运行，可能会有导致已经标记过的对象状态发生改变。")]),_._v(" "),v("p",[v("strong",[_._v("3 重新标记")])]),_._v(" "),v("p",[_._v("重新标记阶段就是为了修正并发标记期间因为用户程序继续运行而导致标记产生变动的那一部分对象的标记记录，这个阶段的停顿时间一般会比初始标记阶段的时间稍长，远远比并发标记阶段时间短。主要用到三色标记里的增量更新算法做重新标记。")]),_._v(" "),v("p",[v("strong",[_._v("4 并发清理")])]),_._v(" "),v("p",[_._v("开启用户线程，同时GC线程开始对未标记的区域做清扫。这个阶段如果有新增对象会被标记为黑色不做任何处理。")]),_._v(" "),v("p",[v("strong",[_._v("5 并发重置")])]),_._v(" "),v("p",[_._v("重置本次GC过程中的标记数据。")]),_._v(" "),v("h5",{attrs:{id:"_4-6-4-2-cms优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-4-2-cms优缺点"}},[_._v("#")]),_._v(" 4.6.4.2 CMS优缺点")]),_._v(" "),v("p",[v("strong",[_._v("优点:")])]),_._v(" "),v("p",[_._v("并发收集、低停顿。")]),_._v(" "),v("p",[v("strong",[_._v("缺点:")])]),_._v(" "),v("p",[_._v("1）"),v("strong",[_._v("对CPU资源敏感")]),_._v("(会和服务抢资源)。")]),_._v(" "),v("p",[_._v("2）"),v("strong",[_._v("无法处理浮动垃圾")]),_._v("(在并发标记和并发清理阶段又产生垃圾，这种浮动垃圾要等到下一次gc再清理)。")]),_._v(" "),v("p",[_._v("3）"),v("strong",[_._v("它使用的回收算法是“标记-清除”算法，会导致收集结束时会有大量空间碎片产生")]),_._v("。当然通过参数- XX:+UseCMSCompactAtFullCollection可以让jvm在执行完标记清除后再做整理。")]),_._v(" "),v("p",[_._v('4）执行过程中的不确定性，会存在上一次垃圾回收还没执行完，然后垃圾回收又被触发的情况，特别是在并 发标记和并发清理阶段会出现，一边回收，系统一边运行，也许没回收完就再次触发full gc，也就是"concurrent mode failure"，此时会进入stop the world，用serial old垃圾收集器来回收。')]),_._v(" "),v("h4",{attrs:{id:"_4-6-5-g1收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-5-g1收集器"}},[_._v("#")]),_._v(" 4.6.5 G1收集器")]),_._v(" "),v("p",[_._v("G1是一款面向服务器的垃圾收集器，"),v("strong",[_._v("主要针对配备多颗处理器及大容量内存的机器")]),_._v("。具备高吞吐量性能特征。")]),_._v(" "),v("p",[_._v("G1收集器在后台维护了一个优先列表，每次根据允许的收集时间，优先选择回收价值最大的Region。")]),_._v(" "),v("p",[v("strong",[_._v("G1收集器具备以下特点：")])]),_._v(" "),v("p",[_._v("1.并行与并发")]),_._v(" "),v("p",[_._v("2.分代收集")]),_._v(" "),v("p",[_._v("3.空间整合")]),_._v(" "),v("p",[_._v("4.可预测的停顿")]),_._v(" "),v("h4",{attrs:{id:"_4-6-6-如何选择垃圾收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-6-如何选择垃圾收集器"}},[_._v("#")]),_._v(" 4.6.6 如何选择垃圾收集器？")]),_._v(" "),v("p",[v("strong",[_._v("JDK1.8默认使用Parallel。JDK1.9默认使用G1。")])]),_._v(" "),v("p",[v("strong",[_._v("ES、KAFKA内存较大的可使用G1。")])]),_._v(" "),v("p",[_._v("1.如果内存小于100M，使用串行收集器。")]),_._v(" "),v("p",[_._v("2.如果是单核，并且没有停顿时间要求，串行或者JVM自己选择。")]),_._v(" "),v("p",[_._v("3.如果响应时间最重要，并且不能超过1秒，使用并发收集器。")]),_._v(" "),v("p",[v("strong",[_._v("1.内存4G以下可以用Parallel。")])]),_._v(" "),v("p",[v("strong",[_._v("2.内存4-8G可以用ParNew+CMS。")])]),_._v(" "),v("p",[v("strong",[_._v("3.内存8G以上可以用G1。")])]),_._v(" "),v("p",[v("strong",[_._v("4.内存几百G以上用ZGC。")])]),_._v(" "),v("h3",{attrs:{id:"_4-7-三色标记"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-三色标记"}},[_._v("#")]),_._v(" 4.7 三色标记")]),_._v(" "),v("h4",{attrs:{id:"_4-7-1-介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-1-介绍"}},[_._v("#")]),_._v(" 4.7.1 介绍")]),_._v(" "),v("p",[_._v("JVM中的垃圾回收是基于"),v("strong",[_._v("标记-复制")]),_._v("、"),v("strong",[_._v("标记清除")]),_._v("和"),v("strong",[_._v("标记-整理")]),_._v("三种模式的，其中最重要的是如何标记。")]),_._v(" "),v("p",[_._v("像Serial、ParNew这类回收器，本质是暂停用户线程进行全面标记的算法。缺点是标记时间长导致STW时间也长，影响体验。")]),_._v(" "),v("p",[_._v("像CMS、G1这类回收器，使用的是并发标记，可以在不暂停用户线程的情况下进行标记，从而可以用极少的时间或者没有中断来进行GC。实现并发标记的算法就是"),v("strong",[_._v("三色标记法")]),_._v("。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/7f408edcd2a3fae429f38f3a383c8fff.png",alt:""}})]),_._v(" "),v("p",[v("strong",[_._v("标记过程：")])]),_._v(" "),v("p",[_._v("1.在GC标记刚开始的阶段，所有对象均为白色集合。")]),_._v(" "),v("p",[_._v("2.将所有GC Roots直接引用的对象标记成灰色集合。")]),_._v(" "),v("p",[_._v("3.判断若灰色集合中的对象不存在子引用，则将其放入黑色集合，若存在子引用对象，则将所有子引用对象放入灰色集合，当前对象放入黑色集合。")]),_._v(" "),v("p",[_._v("4.按照步骤3，以此类推，直到灰色集合中所有对象变成黑色后，本轮标记完成。当前白色集合内所有对象称为不可达对象，即垃圾对象。")]),_._v(" "),v("p",[v("strong",[_._v("问题：")])]),_._v(" "),v("p",[_._v("三色标记过程是跟用户线程并发运行的，对象引用处于随时可变的情况，可能出现"),v("strong",[_._v("多标")]),_._v("或"),v("strong",[_._v("漏标")]),_._v("问题。")]),_._v(" "),v("h4",{attrs:{id:"_4-7-2-浮动垃圾-多标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-2-浮动垃圾-多标"}},[_._v("#")]),_._v(" 4.7.2 浮动垃圾（多标）")]),_._v(" "),v("p",[_._v("本来应该是标记白色的对象，结果被标记成灰色或黑色，造成该对象不会被回收。")]),_._v(" "),v("p",[_._v("比如E对象被D对象引用着，刚好GC在扫描，将E对象标记成灰色，此时，D对E的引用被置空，这时候E对象以及后续子引用应该被当成垃圾回收，但是因为E已经被标记为灰色，导致没有被及时清理掉，变成浮动垃圾。")]),_._v(" "),v("p",[_._v("还有一种情况，并发标记开始后产生的新对象，通常做法是直接当成黑色，本轮不会进行清除。但是这部分对象也有可能变成垃圾，所以也算是浮动垃圾的一部分。")]),_._v(" "),v("h4",{attrs:{id:"_4-7-3-漏标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-3-漏标"}},[_._v("#")]),_._v(" 4.7.3 漏标")]),_._v(" "),v("p",[_._v("灰色对象指向白色对象的引用消失了，然后一个黑色对象重新引用了白色对象。")]),_._v(" "),v("p",[_._v("按照三色标记算法，黑色对象是已完成状态，不会再去找子引用，这样会导致这个白色对象虽然正在被线程使用中，但是无法被标记为灰色或者黑色，造成一个正在使用的对象被错误回收。")]),_._v(" "),v("p",[_._v("总结：漏标只有同时满足以下两个条件才会发生：")]),_._v(" "),v("p",[_._v("1.灰色对象断开了白色对象的引用。")]),_._v(" "),v("p",[_._v("2.黑色对象重新引用了该白色对象。")]),_._v(" "),v("p",[v("strong",[_._v("解决方案：")])]),_._v(" "),v("p",[_._v("CMS：Incremental Update算法")]),_._v(" "),v("p",[_._v("当一个白色对象被一个黑色对象引用，将黑色对象重新标记为灰色，让垃圾回收器重新扫描。")]),_._v(" "),v("h3",{attrs:{id:"_4-8-gc安全点与安全区域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-gc安全点与安全区域"}},[_._v("#")]),_._v(" 4.8 GC安全点与安全区域")]),_._v(" "),v("h4",{attrs:{id:"_4-8-1-gc安全点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-1-gc安全点"}},[_._v("#")]),_._v(" 4.8.1 GC安全点")]),_._v(" "),v("p",[_._v("当垃圾收集需要回收线程时，不直接对线程操作，仅仅简单地设置一个标志位，各个线程执行过程中会去查询这个标志位，一旦发现标志位为true时就自己在最近的安全点上主动中断挂起。查询标志位的地方跟安全点是重合的。")]),_._v(" "),v("p",[v("strong",[_._v("触发点：")])]),_._v(" "),v("p",[_._v("1.方法返回之前。")]),_._v(" "),v("p",[_._v("2.调用某个方法之后。")]),_._v(" "),v("p",[_._v("3.抛出异常的位置。")]),_._v(" "),v("p",[_._v("4.循环的末尾。")]),_._v(" "),v("h4",{attrs:{id:"_4-8-2-安全区域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-2-安全区域"}},[_._v("#")]),_._v(" 4.8.2 安全区域")]),_._v(" "),v("p",[v("strong",[_._v("安全点")]),_._v("是针对正在执行的线程设定的。")]),_._v(" "),v("p",[_._v("如果一个线程处在Sleep或者中断状态，它就不能响应JVM的中断请求，再运行到"),v("strong",[_._v("安全点")]),_._v("上。")]),_._v(" "),v("p",[_._v("因此JVM引入了"),v("strong",[_._v("安全区域")]),_._v("的概念。")]),_._v(" "),v("p",[v("strong",[_._v("安全区域")]),_._v("是指在一段代码中，引用关系不会发生变化。在这个区域内的任意地方开始GC都是安全的。")]),_._v(" "),v("h2",{attrs:{id:"_5、工具命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、工具命令"}},[_._v("#")]),_._v(" 5、工具命令")]),_._v(" "),v("h3",{attrs:{id:"_5-1-jmap"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-jmap"}},[_._v("#")]),_._v(" 5.1 jmap")]),_._v(" "),v("p",[_._v("jps")]),_._v(" "),v("p",[_._v("14660 jar")]),_._v(" "),v("p",[_._v("jmap -histo 14660 > ./log.txt")]),_._v(" "),v("p",[_._v("此命令可查看内存信息，实例个数以及占用内存大小")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/ee5cae1992ecc99c25fe99dfeb74e9b7.png",alt:""}})]),_._v(" "),v("p",[_._v("jmap -heap 14660")]),_._v(" "),v("p",[_._v("查看堆信息")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/aa281fb8c926c6d659fb47b8db3f896b.png",alt:""}})]),_._v(" "),v("p",[_._v("jmap -dump:format=b,file=test.hprof 14660")]),_._v(" "),v("p",[_._v("也可以设置内存溢出自动导出dump文件（内存很大的时候，可能会导不出来）")]),_._v(" "),v("p",[_._v("1.-XX:+HeapDumpOnOutOfMemoryError")]),_._v(" "),v("p",[_._v("2.-XX:HeapDumpPath=./ （路径）")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/7273cd62e89d1b5ea88fec5aae2e3266.png",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"_5-2-jstack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-jstack"}},[_._v("#")]),_._v(" 5.2 jstack")]),_._v(" "),v("p",[_._v("找出占用cpu最高的线程堆栈信息")]),_._v(" "),v("p",[_._v("top")]),_._v(" "),v("p",[v("strong",[v("img",{attrs:{src:"/blog/img/media/f8ef0d688842a566f723cc57002f2142.png",alt:""}})])]),_._v(" "),v("p",[_._v("top -p 24")]),_._v(" "),v("p",[v("strong",[v("img",{attrs:{src:"/blog/img/media/f60d39f68a8f605e4f1c5a9b838b64aa.png",alt:""}})])]),_._v(" "),v("p",[_._v("按H，获取每个线程的内存情况")]),_._v(" "),v("p",[v("strong",[v("img",{attrs:{src:"/blog/img/media/f94a3070340bc6b32f3040ec15ae5415.png",alt:""}})])]),_._v(" "),v("p",[_._v("1.找到内存和cpu占用最高的线程pid，比如797，转换成16进制得到0x31D")]),_._v(" "),v("p",[_._v("2.执行jstack 24 | grep -A 10 31D")]),_._v(" "),v("p",[v("strong",[v("img",{attrs:{src:"/blog/img/media/a3c38455a85d0c65c0df1d199cc9d6c8.png",alt:""}})])]),_._v(" "),v("h3",{attrs:{id:"_5-3-jinfo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-jinfo"}},[_._v("#")]),_._v(" 5.3 jinfo")]),_._v(" "),v("p",[_._v("jinfo -flags 24")]),_._v(" "),v("p",[_._v("查看jvm的参数")]),_._v(" "),v("p",[v("strong",[v("img",{attrs:{src:"/blog/img/media/bdb2fcaa138bb5963da172cfcd237d9e.png",alt:""}})])]),_._v(" "),v("h3",{attrs:{id:"_5-4-jstat"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-jstat"}},[_._v("#")]),_._v(" 5.4 jstat")]),_._v(" "),v("p",[_._v("jstat -gc 24")]),_._v(" "),v("p",[_._v("jstat -gc pid 最常用，可以评估程序内存使用及gc压力整体情况")]),_._v(" "),v("p",[v("strong",[v("img",{attrs:{src:"/blog/img/media/02f80bcf0ae26cdd134bae7f6e3a21c4.png",alt:""}})])]),_._v(" "),v("p",[_._v("可以执行命令 jstat -gc pid 1000 10 (每隔1秒执行1次命令，共执行10次)，通过观察EU(eden区的使用)来估算每秒eden大概新增多少对 象，如果系统负载不高，可以把频率1秒换成1分钟，甚至10分钟来观察整体情况。")]),_._v(" "),v("p",[_._v("S0C：第一个幸存区的大小，单位KB")]),_._v(" "),v("p",[_._v("S1C：第二个幸存区的大小")]),_._v(" "),v("p",[_._v("S0U：第一个幸存区的使用大小")]),_._v(" "),v("p",[_._v("S1U：第二个幸存区的使用大小")]),_._v(" "),v("p",[_._v("EC：伊甸园区的大小")]),_._v(" "),v("p",[_._v("EU：伊甸园区的使用大小")]),_._v(" "),v("p",[_._v("OC：老年代大小")]),_._v(" "),v("p",[_._v("OU：老年代使用大小")]),_._v(" "),v("p",[_._v("MC：方法区大小（元空间）")]),_._v(" "),v("p",[_._v("MU：方法区使用大小")]),_._v(" "),v("p",[_._v("CCSC：压缩类空间大小")]),_._v(" "),v("p",[_._v("CCSU：压缩类空间使用大小")]),_._v(" "),v("p",[_._v("YGC：年轻代垃圾回收次数")]),_._v(" "),v("p",[_._v("YGCT：年轻代垃圾回收消耗时间，单位s")]),_._v(" "),v("p",[_._v("FGC：老年代垃圾回收次数")]),_._v(" "),v("p",[_._v("FGCT：老年代垃圾回收消耗时间，单位s")]),_._v(" "),v("p",[_._v("GCT：垃圾回收消耗总时间，单位s")]),_._v(" "),v("p",[v("strong",[_._v("优化思路其实简单来说就是尽量让每次Young GC后的存活对象小于Survivor区域的50%，都留存在年轻代里。尽量别让对象进入老年 代。尽量减少Full GC的频率，避免频繁Full GC对JVM性能的影响。")])]),_._v(" "),v("p",[v("strong",[_._v("内存泄漏的一种情况")]),_._v("：一般电商架构可能会使用多级缓存架构，就是redis加上JVM级缓存，大多数同学可能为了图方便对于JVM级缓存就 简单使用一个hashmap，于是不断往里面放缓存数据，但是很少考虑这个map的容量问题，结果这个缓存map越来越大，一直占用着老 年代的很多空间，时间长了就会导致full gc非常频繁，这就是一种内存泄漏，对于一些老旧数据没有及时清理导致一直占用着宝贵的内存 资源，时间长了除了导致full gc，还有可能导致OOM。")]),_._v(" "),v("h2",{attrs:{id:"_6、阿尔萨斯-arthas"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、阿尔萨斯-arthas"}},[_._v("#")]),_._v(" 6、阿尔萨斯（Arthas）")]),_._v(" "),v("h3",{attrs:{id:"_6-1-trace"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-trace"}},[_._v("#")]),_._v(" 6.1 trace")]),_._v(" "),v("p",[_._v("利用trace命令追踪方法耗时。")]),_._v(" "),v("p",[_._v("https://arthas.aliyun.com/doc/trace.html")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/5f987fcb30fb938420581eb30ec32d1f.png",alt:""}})]),_._v(" "),v("p",[_._v("curl -O https://arthas.aliyun.com/arthas-boot.jar")]),_._v(" "),v("p",[_._v("java -jar arthas-boot.jar")]),_._v(" "),v("p",[_._v("trace com.yl.mhs.api.stream.kafka.receiver.WaybillOggApiReceiver doOggWaybillHandel")]),_._v(" "),v("h3",{attrs:{id:"_6-2-reset"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-reset"}},[_._v("#")]),_._v(" 6.2 reset")]),_._v(" "),v("p",[_._v("通过reset命令可以重置增强类，将被 Arthas 增强过的类全部还原，"),v("strong",[_._v("Arthas 服务端关闭 时会重置所有增强过的类")]),_._v("。")]),_._v(" "),v("p",[_._v("Arthas在 watch/trace 等命令时，实际上是修改了应用的字节码，插入增强的代码。显式执行reset命令，可以清除掉这些增强代码。")]),_._v(" "),v("h3",{attrs:{id:"_6-3-quit-stop"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-quit-stop"}},[_._v("#")]),_._v(" 6.3 quit-stop")]),_._v(" "),v("p",[v("strong",[_._v("退出Arthas")])]),_._v(" "),v("p",[_._v("用exit或者quit命令可以退出Arthas。")]),_._v(" "),v("p",[_._v("exit quit")]),_._v(" "),v("p",[_._v("退出Arthas之后，还可以再次用 java -jar arthas-boot.jar来连接。")]),_._v(" "),v("p",[v("strong",[_._v("彻底退出Arthas")])]),_._v(" "),v("p",[_._v("exit/quit命令只是退出当前session，arthas server还在目标进程中运行。")]),_._v(" "),v("p",[_._v("想完成退出Arthas，可以执行stop命令。")]),_._v(" "),v("p",[_._v("stop")]),_._v(" "),v("h3",{attrs:{id:"_6-4-thread"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-thread"}},[_._v("#")]),_._v(" 6.4 thread")]),_._v(" "),v("p",[_._v("查看当前线程信息，查看线程的堆栈。")]),_._v(" "),v("p",[v("strong",[_._v("thread -b")])]),_._v(" "),v("p",[_._v("找出当前阻塞其他线程的线程")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/249e15f38419dc5327610163a4169769.png",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"_6-5-sysprop"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-sysprop"}},[_._v("#")]),_._v(" 6.5 sysprop")]),_._v(" "),v("p",[_._v("查看当前JVM的系统属性。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/61e59f6b82d3dc24b3f291b3df117d4b.png",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"_6-6-heapdump"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-heapdump"}},[_._v("#")]),_._v(" 6.6 heapdump")]),_._v(" "),v("p",[_._v("类似jmap命令的heap dump功能。")]),_._v(" "),v("p",[_._v("heapdump /tmp/dump.hprof")]),_._v(" "),v("h3",{attrs:{id:"_6-7-dashboard"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-7-dashboard"}},[_._v("#")]),_._v(" 6.7 dashboard")]),_._v(" "),v("p",[_._v("dashboard命令可以查看当前系统的实时数据面板。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/a6a7da26ae685c3481590b9df2345434.png",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"_6-8-watch"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-watch"}},[_._v("#")]),_._v(" 6.8 watch")]),_._v(" "),v("p",[_._v("观察指定方法的调用情况。能观察到的范围为：返回值、抛出异常、入参，通过编写 OGNL 表达式进行对应变量的查看。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/94a1c110b2a409c83cfee94f5183f215.png",alt:""}})]),_._v(" "),v("p",[v("strong",[_._v("观察异常信息的例子：")])]),_._v(" "),v("p",[_._v('watch demo.MathGame primeFactors "{params[0],throwExp}" -e -x 2')]),_._v(" "),v("p",[v("img",{attrs:{src:"/blog/img/media/4401c427d15dc0424d83bed27543fe1c.png",alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);