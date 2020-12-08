(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{148:function(e,t,n){"use strict";n.r(t);var l=n(0),a=Object(l.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"null与undefined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#null与undefined"}},[e._v("#")]),e._v(" null与undefined")]),e._v(" "),n("p",[e._v("作为一个前端工程师，对js里面的null与undefined，很多人都会感到困惑，也有可能当时看了知道了，过段时间又忘了这两个的区别，主要还是它们在js里面的表现形式很相近，但其实js对他们的定义是大不一样的。"),n("br")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("定义")]),e._v(" "),n("p",[e._v("首先我们要明确的是Undefined 和 Null 是 Javascript 中两种特殊的原始数据类型,它们都只有一个值，分别对应 undefined 和 null")])]),e._v(" "),n("h3",{attrs:{id:"null"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[e._v("#")]),e._v(" null")]),e._v(" "),n("p",[e._v("null 表示一个值被定义了，定义为“空值”,被人为的重置为空对象。"),n("br"),e._v("\nGC会择机回收该对象并释放内存。因此，如果需要释放某个对象，就将变量设置为null，即表示该对象已经被清空，目前无效状态")]),e._v(" "),n("h3",{attrs:{id:"undefined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#undefined"}},[e._v("#")]),e._v(" undefined")]),e._v(" "),n("p",[e._v("undefined 的字面意思就是未定义，根本不存在定义"),n("br"),e._v("\n例如：")]),e._v(" "),n("ul",[n("li",[e._v("变量被声明了，但没有赋值  var a;  console.log(a)//undefined")]),e._v(" "),n("li",[e._v("调用函数时，应该提供的参数没有提供  function a(p){console.log(p)}  a()// undefined")]),e._v(" "),n("li",[e._v("对象没有赋值的属性，该属性的值为undefined   var a={name:'123'}  console.log(a.sex)// undefined")]),e._v(" "),n("li",[e._v("函数执行操作后没有返回值var x = function a(){}() alert(x)//undefined")])]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),n("p",[e._v("综上，所以设置一个值为 null 是合理的,如var a= null;值为null但已经可以用代码来处理了。"),n("br"),e._v("\n但设置一个值为 undefined 是不合理，也没有意义的，本来 var a它此时就是undefined，你再var a=undefined毫无意义，而且在我们的代码里面undefined更多的时候指向一种错误")])]),e._v(" "),n("h3",{attrs:{id:"js中异同表现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js中异同表现"}},[e._v("#")]),e._v(" js中异同表现")]),e._v(" "),n("p",[e._v("上面对基本概念有所理解，我们再看一看js里面对null和undefined的表现"),n("br"),e._v("\n首先看一个判断题：null和undefined 是否相等")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("console.log(null==undefined)//true\nconsole.log(null===undefined)//false\n")])])]),n("p",[e._v("再看")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("alert(!undefined) //true\nalert(!null) //true\n\n")])])]),n("p",[e._v("null与undefined在js里面的行为非常相似，从上面的几个简单的例子里面我们肯定会困惑"),n("br")]),e._v(" "),n("p",[e._v("为什么双等下是true？"),n("br")]),e._v(" "),n("p",[e._v("全等我们能理解，本来两者又不属于同一种类型.双等是因为 ECMAScript 规范认为，既然 null 和  undefined 的行为很相似，并且都表示 一个无效的值，那么它们所表示的内容也具有相似性，所以知道了吧，是es规范这样搞事情的。"),n("br")]),e._v(" "),n("p",[e._v("为什么遇到“！”关键字符，null,undefined又被转换成了false?"),n("br")]),e._v(" "),n("p",[e._v('其实不只是“！”这个关键字符，包括遇到if语句，null,undefined都会被转换成false，在这里可以去把js的类型转换看一看，尤其特色的null,undefined,[ ],"",{ },NaN的各种特殊转换')]),e._v(" "),n("h4",{attrs:{id:"在number-parseint-parsefloat中的表现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在number-parseint-parsefloat中的表现"}},[e._v("#")]),e._v(" 在Number parseInt parseFloat中的表现")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Number(null) //0\nNumber(undefined) //NAN\n这表明null能转为0 undefined转为的数字为NAN\nparseInt(null) //NAN\nparseInt(undefined) //NAN\nparseFloat(null)//NAN\nparseFloat(undefined)//NAN\n")])])]),n("p",[e._v("为什么会出现这些结果？")]),e._v(" "),n("ul",[n("li",[e._v("parseInt()按字符解析，直到遇见第一个非数字字符为止。")]),e._v(" "),n("li",[e._v("parseFloat()按字符解析，直到遇见一个无效的浮点数字字符为止。")]),e._v(" "),n("li",[e._v("Number()能转换boolean值，null，只含整数或小数的字符串，空字符串，对象。")])]),e._v(" "),n("h4",{attrs:{id:"typeof中的表现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typeof中的表现"}},[e._v("#")]),e._v(" typeof中的表现")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("typeof(null) object   \ntypeof(undefined) undefined\n")])])]),n("p",[e._v("参考《The history of “typeof null”》\n第一版的JavaScript的数据类型在底层都是以二进制的形式，二进制的前三位为 0 会被 typeof 判断为对象类型，而 null 的二进制位恰好都是 0 ，因此，null 被误判断为 Object 类型。")]),e._v(" "),n("ol",[n("li",[e._v("整型（int）000")]),e._v(" "),n("li",[e._v("引用类型（object）010")]),e._v(" "),n("li",[e._v("双精度浮点型（double）100")]),e._v(" "),n("li",[e._v("字符串（string）110")]),e._v(" "),n("li",[e._v("布尔型（boolean）另外还用两个特殊值")]),e._v(" "),n("li",[e._v("undefined，用整数−2^30（负2的30次方，不在整型的范围内）")]),e._v(" "),n("li",[e._v("null，机器码空指针（C/C++ 宏定义），低三位也是000 "),n("br"),e._v("\ntypeof的源代码里面没有过滤null，导致在判断obj阶段产生了误会。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("JS_PUBLIC_API(JSType)\nJS_TypeOfValue(JSContext *cx, jsval v)\n{\n    JSType type = JSTYPE_VOID;\n    JSObject *obj;\n    JSObjectOps *ops;\n    JSClass *clasp;\n\n    CHECK_REQUEST(cx);\n    if (JSVAL_IS_VOID(v)) {  // (1)\n        type = JSTYPE_VOID;\n    } else if (JSVAL_IS_OBJECT(v)) {  // (2)\n        obj = JSVAL_TO_OBJECT(v);\n        if (obj &&\n            (ops = obj->map->ops,\n              ops == &js_ObjectOps\n              ? (clasp = OBJ_GET_CLASS(cx, obj),\n                clasp->call || clasp == &js_FunctionClass) // (3,4)\n              : ops->call != 0)) {  // (3)\n            type = JSTYPE_FUNCTION;\n        } else {\n            type = JSTYPE_OBJECT;\n        }\n    } else if (JSVAL_IS_NUMBER(v)) {\n        type = JSTYPE_NUMBER;\n    } else if (JSVAL_IS_STRING(v)) {\n        type = JSTYPE_STRING;\n    } else if (JSVAL_IS_BOOLEAN(v)) {\n        type = JSTYPE_BOOLEAN;\n    }\n    return type;\n}\n")])])]),n("p",[e._v("所以typeof(null) 的结果为object，这是js里面的一个bug，曾经有提案 typeof null === 'null'.但提案被拒绝。")]),e._v(" "),n("h3",{attrs:{id:"校验数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#校验数据类型"}},[e._v("#")]),e._v(" 校验数据类型")]),e._v(" "),n("p",[e._v("前面我们提到 typeof(null) //object ,那么我们怎么获得我们想要的结果null呢，当然有，我们这里再简单的复习一下js校验数据类型的几个方式")]),e._v(" "),n("ol",[n("li",[n("h4",{attrs:{id:"typeof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typeof"}},[e._v("#")]),e._v(" typeof")])])]),e._v(" "),n("ul",[n("li",[e._v('typeof "";  //string')]),e._v(" "),n("li",[e._v("typeof 1;   //number")]),e._v(" "),n("li",[e._v("typeof false; //boolean")]),e._v(" "),n("li",[e._v("typeof undefined; //undefined")]),e._v(" "),n("li",[e._v("typeof function(){}; //function")]),e._v(" "),n("li",[e._v("typeof {}; //object")]),e._v(" "),n("li",[e._v("typeof Symbol(); //symbol")]),e._v(" "),n("li",[e._v("typeof null; //object---------------\x3e无效")]),e._v(" "),n("li",[e._v("typeof []; //object---------------\x3e无效")]),e._v(" "),n("li",[e._v("typeof new Date(); //object---------------\x3e无效")]),e._v(" "),n("li",[e._v("typeof new RegExp(); //object   ---------------\x3e无效\n可以看到 typeof只能判断几种简单的数据类型")])]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("h4",{attrs:{id:"instanceof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instanceof"}},[e._v("#")]),e._v(" instanceof")])])]),e._v(" "),n("ul",[n("li",[e._v("[] instanceof Array; "),n("em",[e._v("//true")])]),e._v(" "),n("li",[e._v("{} instanceof Object;"),n("em",[e._v("//true")])]),e._v(" "),n("li",[e._v("new Date() instanceof Date;"),n("em",[e._v("//true")])]),e._v(" "),n("li",[e._v("new RegExp() instanceof RegExp*//true*")]),e._v(" "),n("li",[e._v("null instanceof Null--------------\x3e报错")]),e._v(" "),n("li",[e._v("undefined instanceof undefined--------------\x3e报错")])]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[n("h4",{attrs:{id:"constructor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[e._v("#")]),e._v(" constructor")])])]),e._v(" "),n("ul",[n("li",[e._v("alert(c.constructor === Array) ----------\x3e true")]),e._v(" "),n("li",[e._v("alert(d.constructor === Date) -----------\x3e true")]),e._v(" "),n("li",[e._v("alert(e.constructor === Function) -------\x3e true")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),n("p",[e._v("注意： null 和 undefined constructor "),n("br"),e._v("\n如果自定义对象，开发者重写prototype之后，原有的constructor会丢失")])]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("h4",{attrs:{id:"tostring-通用的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tostring-通用的方法"}},[e._v("#")]),e._v(" toString 通用的方法")])])]),e._v(" "),n("ul",[n("li",[e._v("alert(Object.prototype.toString.call(a) === ‘[object String]’) -------\x3e true;")]),e._v(" "),n("li",[e._v("alert(Object.prototype.toString.call(b) === ‘[object Number]’) -------\x3e true;")]),e._v(" "),n("li",[e._v("alert(Object.prototype.toString.call(c) === ‘[object Array]’) -------\x3e true;")]),e._v(" "),n("li",[e._v("alert(Object.prototype.toString.call(d) === ‘[object Date]’) -------\x3e true;")]),e._v(" "),n("li",[e._v("alert(Object.prototype.toString.call(e) === ‘[object Function]’) -------\x3e true;")]),e._v(" "),n("li",[e._v("alert(Object.prototype.toString.call(f) === ‘[object Function]’) -------\x3e true;\n该方法基本能满足js里面的类型校验了，就是代码有点多，不考虑其他函数库的情况下通用的方法")])]),e._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[n("h4",{attrs:{id:"lodash-underscore-jquery都有现成的函数库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lodash-underscore-jquery都有现成的函数库"}},[e._v("#")]),e._v(" lodash,underscore,jquery都有现成的函数库")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);