(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{510:function(_,t,a){"use strict";a.r(t);var v=a(18),s=Object(v.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"_1-对象的创建包含哪些步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-对象的创建包含哪些步骤"}},[_._v("#")]),_._v(" 1 对象的创建包含哪些步骤？")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/a08353fdebb3dffe0ad5a12e884b6826.png",width:"25%"}}),_._v(" "),a("h3",{attrs:{id:"_1-1-类加载检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-类加载检查"}},[_._v("#")]),_._v(" 1.1 类加载检查")]),_._v(" "),a("p",[_._v("虚拟机遇到一条new指令时，首先去检查这个指令的参数能否在Class常量池中定位到一个类的符号引用，且检查这个符号引用代表的类是否已加载、解析和初始化过。如果没有，先执行相应的类加载过程。")]),_._v(" "),a("p",[_._v("new指令指：new关键词、对象克隆、对象序列化等。")]),_._v(" "),a("h3",{attrs:{id:"_1-2内存分配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2内存分配"}},[_._v("#")]),_._v(" 1.2内存分配")]),_._v(" "),a("p",[_._v("在"),a("strong",[_._v("类加载检查")]),_._v("通过后，接下来虚拟机将为新生对象"),a("strong",[_._v("分配内存")]),_._v("。")]),_._v(" "),a("p",[_._v("对象所需的内存大小在类加载完成后便可确定，为对象分配内存等同把一块确定大小的内存从java堆中划分出来。")]),_._v(" "),a("h5",{attrs:{id:"_1-2-1-内存分配有哪些方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-内存分配有哪些方式"}},[_._v("#")]),_._v(" 1.2.1 内存分配有哪些方式？")]),_._v(" "),a("p",[_._v("分配内存的方式有 "),a("strong",[_._v("指针碰撞")]),_._v(" 和 "),a("strong",[_._v("空闲列表")]),_._v(" 2种。")]),_._v(" "),a("p",[_._v("选择哪种分配方式由java堆是否规整决定，而java堆是否规整又由所采用的垃圾收集器是否有压缩整理功能决定。")]),_._v(" "),a("h6",{attrs:{id:"_1-指针碰撞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-指针碰撞"}},[_._v("#")]),_._v(" 1 指针碰撞")]),_._v(" "),a("p",[a("strong",[_._v("适用场合")]),_._v("：堆内存规整（即没有内存碎片）的情况下。")]),_._v(" "),a("p",[a("strong",[_._v("原理")]),_._v("：所有用过的内存全部整合到一边，没有用过的内存放在另外一边，中间有一个分界指针，只需要向着没用过的内存方向将指针移动对象内存大小位置即可。")]),_._v(" "),a("p",[a("strong",[_._v("使用该分配方式的GC收集器")]),_._v("：Serial，ParNew。")]),_._v(" "),a("h6",{attrs:{id:"_2-空闲列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-空闲列表"}},[_._v("#")]),_._v(" 2 空闲列表")]),_._v(" "),a("p",[a("strong",[_._v("适用场合")]),_._v("：堆内存不规整的情况下。")]),_._v(" "),a("p",[a("strong",[_._v("原理")]),_._v("：JVM维护一个列表，该列表会记录哪些内存块是可用的，在分配内存的时候，找到一块足够大的内存块划分给对象实例，最后更新列表记录。")]),_._v(" "),a("p",[a("strong",[_._v("使用该分配方式的GC收集器")]),_._v("：CMS。")]),_._v(" "),a("h5",{attrs:{id:"_1-2-2-内存分配的并发问题怎么解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-内存分配的并发问题怎么解决"}},[_._v("#")]),_._v(" 1.2.2 内存分配的并发问题怎么解决？")]),_._v(" "),a("p",[_._v("创建对象是很频繁的问题，需保证线程安全。目前，虚拟机采用了2种方式来保证线程安全：")]),_._v(" "),a("h6",{attrs:{id:"_1-cas-失败重试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-cas-失败重试"}},[_._v("#")]),_._v(" 1 CAS+失败重试")]),_._v(" "),a("p",[_._v("CAS操作失败就重试，直到成功为止。保证更新操作的原子性。")]),_._v(" "),a("h6",{attrs:{id:"_2-tlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-tlab"}},[_._v("#")]),_._v(" 2 TLAB")]),_._v(" "),a("p",[a("strong",[_._v("缓冲区（Thread Local Allocation Buffer）")])]),_._v(" "),a("p",[a("strong",[_._v("JVM为每一个线程预先在Eden区分配一块内存")]),_._v("，给线程中的对象分配内存时，先在"),a("strong",[_._v("TLAB")]),_._v("上分配，当对象大于"),a("strong",[_._v("TLAB")]),_._v("的剩余内存或"),a("strong",[_._v("TLAB")]),_._v("的内存用尽时，采用 "),a("strong",[_._v("CAS+失败重试")]),_._v(" 的方式分配内存。")]),_._v(" "),a("h3",{attrs:{id:"_1-3-初始化零值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-初始化零值"}},[_._v("#")]),_._v(" 1.3 初始化零值")]),_._v(" "),a("p",[a("strong",[_._v("内存分配")]),_._v("完成后，"),a("strong",[_._v("JVM将分配到的内存空间都初始化为零值")]),_._v("。")]),_._v(" "),a("p",[_._v("这一步保证了对象的实例字段可以不赋初始值就直接使用。")]),_._v(" "),a("h3",{attrs:{id:"_1-4-设置对象头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-设置对象头"}},[_._v("#")]),_._v(" 1.4 设置对象头")]),_._v(" "),a("p",[a("strong",[_._v("初始化零值")]),_._v("完成后，JVM开始"),a("strong",[_._v("设置对象头")]),_._v("。")]),_._v(" "),a("p",[_._v("对象头主要包括2部分信息（如果是数组对象，还有一个数组长度）：")]),_._v(" "),a("p",[_._v("1.哈希码、GC分代年龄、锁状态标识等。")]),_._v(" "),a("p",[_._v("2.指向类元数据的指针，JVM通过这个指针来确定这个对象是哪个类的实例。")]),_._v(" "),a("h3",{attrs:{id:"_1-5-执行init方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-执行init方法"}},[_._v("#")]),_._v(" 1.5 执行init方法")]),_._v(" "),a("p",[_._v("执行innit方法，对应到语言层面上讲，就是"),a("strong",[_._v("为属性赋值")]),_._v("（与上面的赋零值不同），和"),a("strong",[_._v("执行构造方法")]),_._v("。")]),_._v(" "),a("h2",{attrs:{id:"_2-对象栈上分配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-对象栈上分配"}},[_._v("#")]),_._v(" 2 对象栈上分配")]),_._v(" "),a("p",[_._v("通过创建对象时的内存分配可以知道JAVA中的对象都是在堆上进行分配，需要依靠GC进行内存回收，如果对象数量较多的时候，会给GC带来较大压力，间接影响应用的性能。")]),_._v(" "),a("p",[_._v("JVM通过逃逸分析来确定方法内的对象会不会被外部访问（即会不会“逃逸”），如果不会逃逸就可以在栈上给该对象分配内存，这样该对象所占用的内存空间就可以随着栈帧的出栈而销毁。")]),_._v(" "),a("p",[a("strong",[_._v("栈上分配一般同时依赖逃逸分析和标量替换。")])]),_._v(" "),a("h3",{attrs:{id:"_2-1-对象逃逸分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-对象逃逸分析"}},[_._v("#")]),_._v(" 2.1 对象逃逸分析")]),_._v(" "),a("p",[_._v("就是分析方法内对象是否会被外部引用（是否逃逸），未逃逸的对象在栈上分配内存。")]),_._v(" "),a("p",[_._v("JDK7之后默认开启逃逸分析。")]),_._v(" "),a("h3",{attrs:{id:"_2-2-标量替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-标量替换"}},[_._v("#")]),_._v(" 2.2 标量替换")]),_._v(" "),a("p",[a("strong",[_._v("标量和聚合量")]),_._v("：")]),_._v(" "),a("p",[_._v("1.基础类型和对象的引用可以理解为"),a("strong",[_._v("标量")]),_._v("，它们不能被进一步分解。")]),_._v(" "),a("p",[_._v("2.能被进一步分解的就是"),a("strong",[_._v("聚合量")]),_._v("，比如：对象。")]),_._v(" "),a("p",[a("strong",[_._v("标量替换")]),_._v("：将对象成员变量分解成分散的变量，这些分散的变量在栈帧或寄存器上分配空间，这样就不会因为没有一大块连续空间导致对象内存不够分配。")]),_._v(" "),a("h2",{attrs:{id:"_3-对象的内存布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-对象的内存布局"}},[_._v("#")]),_._v(" 3 对象的内存布局")]),_._v(" "),a("p",[_._v("对象在内存中的布局可以分为3块区域："),a("strong",[_._v("对象头")]),_._v("、"),a("strong",[_._v("实例数据")]),_._v("和"),a("strong",[_._v("对齐填充")]),_._v("。")]),_._v(" "),a("h3",{attrs:{id:"_3-1-对象头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-对象头"}},[_._v("#")]),_._v(" 3.1 对象头")]),_._v(" "),a("p",[a("strong",[_._v("对象头主要由3部分组成：Mark Word、指向类的指针、数组长度（只有数组对象有）")])]),_._v(" "),a("h5",{attrs:{id:"_1-mark-word"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mark-word"}},[_._v("#")]),_._v(" 1 Mark Word")]),_._v(" "),a("p",[_._v("Mark Word记录了哈希码、GC分代年龄、锁标识等信息。")]),_._v(" "),a("p",[_._v("在32位的JVM中长度是32bit，在64位的JVM中长度是64bit。")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/682973622a174c1739687fc1dbb237bf.png",width:"70%"}}),_._v(" "),a("h5",{attrs:{id:"_2-指向类的指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-指向类的指针"}},[_._v("#")]),_._v(" 2 指向类的指针")]),_._v(" "),a("p",[_._v("JAVA对象的类数据保存在方法区。")]),_._v(" "),a("p",[_._v("该指针在32位的JVM中长度是32bit，在64位的JVM中长度是64bit。")]),_._v(" "),a("h5",{attrs:{id:"_3-数组长度-只有数组对象有"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-数组长度-只有数组对象有"}},[_._v("#")]),_._v(" 3 数组长度（只有数组对象有）")]),_._v(" "),a("p",[_._v("该对象在32位和64位的JVM中长度都是32bit。")]),_._v(" "),a("h3",{attrs:{id:"_3-2-实例数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-实例数据"}},[_._v("#")]),_._v(" 3.2 实例数据")]),_._v(" "),a("p",[_._v("对象真正存储的有效信息，也就是程序中定义的各种类型的字段内容。")]),_._v(" "),a("h3",{attrs:{id:"_3-3-对齐填充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-对齐填充"}},[_._v("#")]),_._v(" 3.3 对齐填充")]),_._v(" "),a("p",[_._v("对齐填充不是必然存在的，只是因为Hotspot要求对象大小必须是8字节的整数倍。")]),_._v(" "),a("p",[_._v("而"),a("strong",[_._v("对象头")]),_._v("部分是8字节的倍数（1倍或2倍），所以"),a("strong",[_._v("实例数据")]),_._v("部分没有对齐时，需要"),a("strong",[_._v("对齐填充")]),_._v("来补全。")]),_._v(" "),a("h2",{attrs:{id:"_4-对象的访问定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-对象的访问定位"}},[_._v("#")]),_._v(" 4 对象的访问定位")]),_._v(" "),a("p",[_._v("JAVA程序通过栈上的reference数据来操作堆上的具体对象。由于reference类型在JVM规范中只定义了一个指向对象的引用，没有说明这个引用通过何种方式去定位、访问堆中对象的具体位置，所以访问的方式取决于JVM的实现。目前主要的访问方式由2种："),a("strong",[_._v("句柄")]),_._v("和"),a("strong",[_._v("直接指针")]),_._v("。")]),_._v(" "),a("h3",{attrs:{id:"_4-1-句柄"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-句柄"}},[_._v("#")]),_._v(" 4.1 句柄")]),_._v(" "),a("p",[_._v("JAVA堆中会划分出一块内存来作为句柄池，reference存放的是对象的句柄地址，而句柄中包括对象实例的地址和对象Class的地址。")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/ee18a27a152f1d1ce1c74b99ad5df1e9.png",width:"70%"}}),_._v(" "),a("h3",{attrs:{id:"_4-2-直接指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-直接指针"}},[_._v("#")]),_._v(" 4.2 直接指针")]),_._v(" "),a("p",[_._v("reference存放的是对象实例地址。对象实例数据的对象头里包含Class的地址。")]),_._v(" "),a("img",{staticClass:"imgcss",attrs:{src:"http://media.luoxiaofeng.cn/blog/img/81e68bb318d0d5e26176bd646d6eb10b.png",width:"70%"}}),_._v(" "),a("h3",{attrs:{id:"_4-3-两种访问方式各有什么优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-两种访问方式各有什么优势"}},[_._v("#")]),_._v(" 4.3 两种访问方式各有什么优势？")]),_._v(" "),a("p",[_._v("1.句柄访问最大的好处是reference中存储的是稳定的句柄地址，对象移动时只会改变句柄中的实例数据指针，reference不需要修改。")]),_._v(" "),a("p",[_._v("2.直接指针访问的好处是速度快，减少了一次指针定位的时间开销。")])])}),[],!1,null,null,null);t.default=s.exports}}]);