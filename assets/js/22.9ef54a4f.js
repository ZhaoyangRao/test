(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{158:function(n,a,t){"use strict";t.r(a);var s=t(0),e=Object(s.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"闭包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[n._v("#")]),n._v(" 闭包")]),n._v(" "),t("p",[n._v("了解js的闭包之前，先要了解js的词法作用域")]),n._v(" "),t("h3",{attrs:{id:"词法分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#词法分析"}},[n._v("#")]),n._v(" 词法分析")]),n._v(" "),t("p",[n._v("讲词法作用域之前先看一段代码的输出结果")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var tt = 'aa';\nfunction test(){\nalert(tt);\nvar tt = 'dd';\nalert(tt);\n}\ntest();\n\n太简单了，晃一眼以为结果脱口而出 aa dd \n然而实际结果是undefined和dd\n\n上面的代码js的执行其实是\n\nvar tt;\ntt='aa';\nfunction test(){\nvar tt;\nalert(tt);\ntt = 'dd';\nalert(tt);\n}\ntest();\n")])])]),t("p",[n._v("很明显变量提升了,变量提升的原因就在于词法分析\njs在执行函数的时候有一个类似编译的过程，也就是词法分析，词法分析会做三件事")]),n._v(" "),t("ul",[t("li",[n._v("分析参数")]),n._v(" "),t("li",[n._v("分析变量声明")]),n._v(" "),t("li",[n._v("分析函数声明\n词法分析其实最主要的也是最容易出错的就是变量提升和函数提升。")])]),n._v(" "),t("h4",{attrs:{id:"变量提升"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量提升"}},[n._v("#")]),n._v(" 变量提升")]),n._v(" "),t("p",[n._v("变量提升简单的说就是把变量提升到它所在作用域的最前面，也就是最开始的位置")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("console.log(c);   //undefined\nvar c = \"1\";\nconsole.log(c);   //1\nfunction fn(){\n    console.log(d); //undefined\n    var d = '2';\n    console.log(d); //2\n}\nfn();\n\n等价于\nvar c;\nconsole.log(c); \nc='1';\nfunction fn(){\n    var d;\n    console.log(d);\n    d='2';\n    console.log(d)\n}\nfn();\n\n")])])]),t("h4",{attrs:{id:"函数提升"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数提升"}},[n._v("#")]),n._v(" 函数提升")]),n._v(" "),t("p",[n._v("其实函数提升也是变量提升的一种，顾名思义主要是函数的提升，只有函数声明才有提升")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("console.log(a)  // f a() { console.log(a) }\nconsole.log(b) //undefined\n\n//函数声明\nfunction a() {\n    console.log(a) \n} \n//函数表达式（函数字面量）\nvar b = function(){\n    console.log(b)\n}\n\n等价于\n\nfunction a(){\n    console.log(a)\n}\nvar b;\nconsole.log(a)\nconsole.log(b)\nb=function（）{\n}\n")])])]),t("p",[n._v("可以看见，函数声明的方式，函数提升到了最前面。而函数字面量并没有把函数提升到前面，只是把变量提升了")]),n._v(" "),t("h4",{attrs:{id:"变量提升与函数提升"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量提升与函数提升"}},[n._v("#")]),n._v(" 变量提升与函数提升")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("console.log(a) //function a(){}\nvar a=1;\nfunction a(){}\nconsole.log(a) //1\n等价于\nfunction a(){}\nvar a;\nconsole.log(a)\na=1\nconsole.log(a)\n")])])]),t("p",[n._v("从上面可以看出，函数提升优于变量提升")]),n._v(" "),t("h3",{attrs:{id:"词法作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[n._v("#")]),n._v(" 词法作用域")]),n._v(" "),t("h4",{attrs:{id:"作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[n._v("#")]),n._v(" 作用域")]),n._v(" "),t("p",[n._v("简单的说，作用域，就是能够发挥作用的区域，官方的话是在JavaScript中,作用域为可访问变量，对象，函数的集合\n作用域分为")]),n._v(" "),t("ul",[t("li",[n._v("局部作用域")]),n._v(" "),t("li",[n._v("全局作用域")]),n._v(" "),t("li",[n._v("块级作用域\n对应的变量也分为")]),n._v(" "),t("li",[n._v("全局变量")]),n._v(" "),t("li",[n._v("局部变量")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function a(){\n    var a1=123      //局部变量  相应的这块{ }就是局部作用域\n}\n\n————————————————————\nvar a1=12;          //全局变量  相应的最外层这块就是全局作用域了         \nfunction a(){    \n}\n\n特殊的\n\nfunctio b(){\n    b1=123          //可以看出b1并没有声明，这种js并不会报错，词法分析解析这块的时候会自动在全局var b，强烈不建议此骚操作\n}                   \n等价于\nvar b1;\nfunction b(){\n    b1=123   \n}\n")])])]),t("p",[n._v("全局变量与局部变量除了作用域的区别外，还有就是销毁时机的区别。\n全局变量，声明在全局，除非全局被销毁了，例如页面关掉等清空，或者它的生命周期一直在。\n局部变量，执行时初始化，执行完函数，就会被销毁，不调用的时候，它就没有任何作用，没用的东西要它何用，有点过河拆桥的意思了。")]),n._v(" "),t("p",[n._v("块级作用域\n为什么单独拿出来讲呢，这是es6新增加的一个概念")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("{\n    let a = 1;\n    console.log(a); // 1\n}\n    console.log(a); // 报错 a is not defined\n或者\n{\n    const a = 1;\n    console.log(a); // 1\n}\n    console.log(a); // 报错 a is not defined\n这就是典型的块级作用域\n\n再看这个，为什么var没有报错\n{\n    var a = 1;\n    console.log(a); // 1\n}\n    console.log(a); // 1\n")])])]),t("p",[n._v("从上面我们可以看出“块级作用域”")]),n._v(" "),t("ul",[t("li",[n._v("块级作用域是在{ }里面体现，包括if(){}  for(){}")]),n._v(" "),t("li",[n._v("let const声明的变量才有块级的概念 ，var没有块级作用域的概念")])]),n._v(" "),t("h4",{attrs:{id:"作用域链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[n._v("#")]),n._v(" 作用域链")]),n._v(" "),t("p",[n._v("简单的理解，在执行函数的时候，总是先在函数内部找变量，找不到就往上一级找，直到在全局找，依次往外，这就形成了类似链式的结构")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var d= 123\nfunction a(){\n    b()\n    function b(){\n        c()\n        function c(){\n            console.log(d)\n        }\n    }\n}\na()\n这就是典型的链式,a执行代码，b执行代码，c执行代码，c找变量，找不到=>去b找，找不到=>去a找，找不到=>去全局找\n")])])]),t("h4",{attrs:{id:"词法作用域-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域-2"}},[n._v("#")]),n._v(" 词法作用域")]),n._v(" "),t("p",[n._v("那什么叫做词法作用域呢\n词法作用域更强调的是不执行代码，这个作用域已经被你的代码确定下来了，取决于你的代码，不用执行就能分析出来，所以又叫做静态作用域")]),n._v(" "),t("h3",{attrs:{id:"闭包-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#闭包-2"}},[n._v("#")]),n._v(" 闭包")]),n._v(" "),t("p",[n._v("其实我也看了很多关于闭包的文档或者博客，感觉很多人都说的很晦涩，然后举出一大堆很难理解的函数例子，我觉得没有哪个必要，不能为了闭包而闭包吧，正常人也不会写那么难维护的代码")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function a(){\n    var av=1;\n    function b(){\n        console.log(av)  //1\n    }\n}\n从上面的代码示例就可以看出来，b是能访问到变量av的，所以b函数就是一个闭包，这是最简单的闭包吧\n\n")])])]),t("p",[n._v("闭包就是能够读取其他函数内部变量的函数。"),t("br"),n._v("\n例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的函数“。在本质上，闭包是将函数内部和函数外部连接起来的桥梁。"),t("br")]),n._v(" "),t("p",[n._v("上面就是闭包的官方定义，结合例子一看，应该一下就明白了，简单的说就是能读到其他函数内部的变量的函数就是闭包。")]),n._v(" "),t("h4",{attrs:{id:"闭包的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#闭包的使用"}},[n._v("#")]),n._v(" 闭包的使用")]),n._v(" "),t("p",[n._v("我们了解了闭包的概念，但闭包在工作中的使用，更多的是利用它能访问函数内部变量的机制，把那个变量给return出来，所以你看到很多闭包函数有大量的return")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function a(){\n    var av=1;\n    function b(){\n        console.log(av)\n    }\n    return b\n}\nconsole.log(a());  //function b(){console.log(av)}\na()();   // 1\n")])])]),t("h4",{attrs:{id:"闭包的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#闭包的作用"}},[n._v("#")]),n._v(" 闭包的作用")]),n._v(" "),t("ul",[t("li",[n._v("读取函数内部的变量")]),n._v(" "),t("li",[n._v("让这个变量的值始终保存在内存中"),t("br")])]),n._v(" "),t("p",[n._v("读取变量我们理解了，保存在内存中这个怎么看出来呢，在看一个例子")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function a(){\n    var av=1;\n    function b(){\n        av++\n        console.log(av)\n    }\n    return b\n}\nvar c=a();\nc();   //2\nc();   //3 \n")])])]),t("p",[n._v("闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。直观的说就是形成一个不销毁的栈环境。")]),n._v(" "),t("h4",{attrs:{id:"闭包的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#闭包的问题"}},[n._v("#")]),n._v(" 闭包的问题")]),n._v(" "),t("p",[n._v("闭包的问题其实也来自于它的作用，哲学的角度讲，任务事物都有利有弊，辩证的看待")]),n._v(" "),t("ul",[t("li",[n._v("能读取函数内部变量，也能改变函数内部的变量，数据追踪问题会变得不明确，尤其当你用闭包去玩继承的时候")]),n._v(" "),t("li",[n._v("因为变量的值保存在内存中，会导致浏览器内存问题，甚至严重的会内存泄漏"),t("br")])]),n._v(" "),t("p",[n._v("可以看出闭包的作用与缺点一一对应，其实缺点也不少必然的，良好的编码习惯能避免一些问题，比如用完函数就delete变量等等")])])}),[],!1,null,null,null);a.default=e.exports}}]);