(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{171:function(n,a,t){"use strict";t.r(a);var s=t(0),l=Object(s.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"this"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[n._v("#")]),n._v(" this")]),n._v(" "),t("p",[n._v("网上我也看了很多关于this的解读或者例子，这里做一个自己总结的记录吧")]),n._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[n._v("this")]),n._v(" "),t("p",[n._v("this其实简单的说就是函数运行时所在的环境对象，在哪里运行或者说谁在调用它，this就指向谁，记住这个就够了。")]),n._v(" "),t("p",[n._v("所谓函数引用、对象引用、函数名其实都是内存中的一个地址，这个地址指向了某个函数或对象或方法，谁拿到了这个地址，谁就拥有了调用函数、调用方法的权利，此时this就指向调用者。")]),n._v(" "),t("p",[n._v("所以函数没有被调用，就没有this，只有在执行的时候你才能知道到底谁在调用函数。")]),n._v(" "),t("p",[n._v("值得注意的是在严格版中的默认的this不再是window，而是undefined，下面的例子都不是严格模式。")])]),n._v(" "),t("p",[n._v("先来几个例子来缕一缕上面的几句话")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('例1\nfunction a(){\n    var user = "追梦子";\n    console.log(this.user); //undefined\n    console.log(this); //Window\n}\na();   \n\n此时this指向得是window，a()其实是window.a()，所以很显然其实是window在调用它\n————————————————————————————————————————————————\n例2\nvar o = {\n    user:"追梦子",\n    fn:function(){\n        console.log(this.user);  //追梦子\n    }\n}\no.fn();\n\n此时this指向o, o在调用fn()，有人就会想了 o.fn() 其实不就是window.o.fn()吗?为什么没有指向window了\n\n所以this其实只跟谁调用该函数，通常指向的是上一级,跟js的老传统作用域链有关系，虽然最外面是window，但是其实上一级，或者说它的直接调用者是o，所以依然指向o\n——————————————————————————————————————————————————\n例3\nvar o = {\n    a:10,\n    b:{\n        a:12,\n        fn:function(){\n            console.log(this.a); //12\n        }\n    }\n}\no.b.fn();\n\n根据例子2的结论，你能很快判断出此时this指向b \n————————————————————————————————————————————————————\n例4\nvar o = {\n    a:10,\n    b:{\n        a:12,\n        fn:function(){\n            console.log(this.a); //undefined\n        }\n    }\n}\nvar c=o.b.fn;\nc()\n这里可能有人又会迷惑了，这里的this指向了window，为什么不是b？\n牢记this永远指向调用它的对象，c函数是被window调用的毫无疑问，在这里特殊的是虽然fn是在被b引用，但它此时并没有执行。\nfn被赋值给了c，最终执行并调用c的依然是window\n————————————————————————————————————————————————————\n\n\n')])])]),t("h2",{attrs:{id:"改变this指向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改变this指向"}},[n._v("#")]),n._v(" 改变this指向")]),n._v(" "),t("h3",{attrs:{id:"new关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new关键字"}},[n._v("#")]),n._v(" new关键字")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('构造函数调用模式下，this指向被构造的对象\n例5\nfunction Fn(){\n    this.user = "1";\n}\nvar a = new Fn();\nconsole.log(a.user); //1\n\n按照我们前面几个例子的理解，我们也要看Fn是被谁调用的是吧! 这里是看起来被new给调用了啊，难道this指向new，new是什么玩意???\n\n')])])]),t("p",[n._v("我们先要搞清楚new这个特殊的关键字做了什么？")]),n._v(" "),t("ul",[t("li",[n._v("创建了一个空对象")]),n._v(" "),t("li",[n._v("复制了原型")]),n._v(" "),t("li",[n._v("this指向改变，指向刚刚创建的新对象")]),n._v(" "),t("li",[n._v("返回新的对象实例"),t("br")])]),n._v(" "),t("p",[n._v("下面就是一个具体代码化的new的例子")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Fn(){\n    this.user = \"1\";\n}\nvar a = new Fn();\n——————————————————————————\n这里的 var a= new Fn();\n其实在这期间做了很多事情\n\nvar obj={};  //创建了一个空对象\n\nobj._proto_=Fn.prototype; //复制了原型\n\nFn.call(obj,'a'); //this指向改变,指向自己\n\nreturn obj  //返回对象\n")])])]),t("h3",{attrs:{id:"call-apply"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call-apply"}},[n._v("#")]),n._v(" call apply")]),n._v(" "),t("p",[n._v("上面讲new的时候我们其实举例的时候也是举内部有个call去改变了this指向，所以new的改变指向其实本质上也跟call或者apply有关。"),t("br")]),n._v(" "),t("p",[n._v("这是两个可以切换函数运行的上下文环境的方法，直白的说就是可以改变this指向，你想让函数指向谁，就指向谁。"),t("br")]),n._v(" "),t("p",[n._v("使用方法：")]),n._v(" "),t("ul",[t("li",[n._v("callback\n"),t("ul",[t("li",[n._v("第一个参数，是你想指向的函数")]),n._v(" "),t("li",[n._v("第二个参数差别就不一样了，call是直接放进去的用‘,’分割，apply是数组，所以我一般还是用apply较多")])])])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function a(a,b){\n    return a+b\n}\n\nvar a1=a.call(a,1,2)   \n\nconsole.log(a1)   // 3 \n——————————————————————\nvar b1=a.apply(a,[1,2])\n\nconosle.log(b1)   //3\n")])])]),t("h3",{attrs:{id:"bind"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bind"}},[n._v("#")]),n._v(" bind")]),n._v(" "),t("p",[n._v("bind同样的也能改变this指向")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function a(a,b){\n    return a+b\n}\n\nvar a1=a.bind(a,1,2)()   \n\nconsole.log(a1)   // 3 \n\n")])])]),t("p",[n._v("从上面的例子看bind更像call，传参跟call一致")]),n._v(" "),t("ul",[t("li",[n._v("callback\n"),t("ul",[t("li",[n._v("第一个参数，是你想指向的函数")]),n._v(" "),t("li",[n._v("第二个参数用‘,’分割，与call一致")])])])]),n._v(" "),t("p",[n._v("但是它多了一个(),执行符号\n由此可知，bind返回的是一个新的函数，需要调用它才能执行")]),n._v(" "),t("h3",{attrs:{id:"箭头函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[n._v("#")]),n._v(" 箭头函数")]),n._v(" "),t("p",[n._v("箭头函数是es6新增的一种函数"),t("br")]),n._v(" "),t("p",[n._v("箭头函数除了写法的区别外，最大的区别是关于this，其他函数都是谁调用它指向谁，而箭头函数并不遵循这个规则，更像是按照作用域链去继承上一级的this。"),t("br")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(' 例子：\n    var x=2;\n    \n    var fn = (()=>{\n        console.log(this.x)\n    })\n    \n    fn();//2  \n——————————————————————————————\n例子：\n    var fn = (()=>{\n        console.log(this.x)\n    })  \n    var x="2"\n    var obj={\n        x:"1",\n        fn:fn\n    }\n    obj.fn();//2\n    \n这里虽然是obj调用的fn，但是因为fn是箭头函数，它就去找继承上一级的this，也就是全局windows了\n')])])]),t("p",[n._v("值得注意的是\n使用了箭头函数，你再去bind,apply,call，就会发现失去了作用，第一个参数直接被忽略了，因为箭头函数已经继承了this了，你可以理解为箭头函数的优先级更加高。")])])}),[],!1,null,null,null);a.default=l.exports}}]);