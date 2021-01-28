(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{162:function(a,r,e){"use strict";e.r(r);var t=e(0),n=Object(t.a)({},(function(){var a=this,r=a.$createElement,e=a._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"高阶函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高阶函数"}},[a._v("#")]),a._v(" 高阶函数")]),a._v(" "),e("p",[a._v("一个函数接收另外一个函数作为参数，这个函数就叫高阶函数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function a(x){\n    return x\n}\n\nfunction b(x,f){\n    return f(x)\n}\n\nb(1,a)     // 1  这个b就是一个典型的高阶函数，它接收一个函数作为参数，这里把a函数传给它了\n\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("总结")]),a._v(" "),e("p",[a._v("所谓函数引用、对象引用、函数名其实都是内存中的一个地址，这个地址指向了某个函数或对象或方法，谁拿到了这个地址，谁就拥有了调用函数、调用方法的权利，所以所谓传入函数作为参数，其实就是把这个地址传给了另外一个函数，让另外一个函数拥有操作这个函数的权利.")])]),a._v(" "),e("h2",{attrs:{id:"js自提供的几个高阶函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js自提供的几个高阶函数"}},[a._v("#")]),a._v(" js自提供的几个高阶函数")]),a._v(" "),e("p",[a._v("其实你可能一直在使用高阶函数，只是你不知道它是高阶函数")]),a._v(" "),e("h3",{attrs:{id:"map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[a._v("#")]),a._v(" map")]),a._v(" "),e("ul",[e("li",[a._v("callback\n"),e("ul",[e("li",[a._v("element  也就是集合中的每一个item")]),a._v(" "),e("li",[a._v("index 位置")]),a._v(" "),e("li",[a._v("self  传入的集合")])])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function a(x) {\n    return x * x;\n}\nvar arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];\nvar results = arr.map(a);  \nconsole.log(results); // [1, 4, 9, 16, 25, 36, 49, 64, 81] \n\n这不就等价于,可能你平时更多就下面这样玩\n\nvar results = arr.map(item=>{\n    return item=item*item\n}); \n\n——————————————————————————\n还有更简单的一些技巧用法\narr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9'] \n")])])]),e("h3",{attrs:{id:"reduce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reduce"}},[a._v("#")]),a._v(" reduce")]),a._v(" "),e("p",[a._v("又叫累加器，一版用作累加，最主要的也是previousValue这个callback里面的参数")]),a._v(" "),e("ul",[e("li",[a._v("callback （执行数组中每个值的函数，包含四个参数）\n"),e("ul",[e("li",[a._v("previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））")]),a._v(" "),e("li",[a._v("currentValue （数组中当前被处理的元素）")]),a._v(" "),e("li",[a._v("index （当前元素在数组中的索引）")]),a._v(" "),e("li",[a._v("array （调用 reduce 的数组）")])])]),a._v(" "),e("li",[a._v("initialValue （作为第一次调用 callback 的第一个参数。）")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var arr = [1, 2, 3];\nvar results = arr.reduce((prev, cur)=>{\n    console.log(prev, cur)\n    return prev=prev+cur\n})\nconsole.log(results) //6\n\n————————————————————\ninitialValue的用法，类似于累加之前的一个初始值\nvar arr = [1, 2, 3];\nvar results = arr.reduce((prev, cur)=>{\n    console.log(prev, cur)\n    return prev=prev+cur\n},2)\nconsole.log(results) // 8\n\n")])])]),e("h3",{attrs:{id:"filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[a._v("#")]),a._v(" filter")]),a._v(" "),e("p",[a._v("又叫过滤器，用于筛选，返回过滤后的数据")]),a._v(" "),e("ul",[e("li",[a._v("callback\n"),e("ul",[e("li",[a._v("element  也就是集合中的每一个item")]),a._v(" "),e("li",[a._v("index 位置")]),a._v(" "),e("li",[a._v("self  传入的集合")])])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var arr = [1, 2, 3];\nvar results=arr.filter(item=>{\n    return item>2\n})\nconsole.log(results) //[3]\n\n")])])]),e("h3",{attrs:{id:"sort"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[a._v("#")]),a._v(" sort")]),a._v(" "),e("p",[a._v("排序，需要注意的是sort方法会默认把元素转换为String再排序，直接对数字排，绝对掉坑里")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let arr=[1,2,10,3]\nconsole.log(arr.sort())  //[1, 10, 2, 3] \n")])])]),e("p",[a._v("上面的例子可不是你想要的结果,所以我们需要自己提供一个比较函数传给sort")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let arr=[1,2,10,3]\nlet r=arr.sort((a,b)=>{\nconsole.log(a,b)\nreturn a-b\n})\nconsole.log(r)   //[1,2,3,10]\n___________________\nlet arr=[1,2,10,3]\nlet r=arr.sort((a,b)=>{\nconsole.log(a,b)\nreturn b-a\n})\nconsole.log(r)   //[10,3,2,1]\n\n")])])]),e("p",[a._v("上面的正序倒序一下就排序完成了，但是如果对sort内部机制不明白，这个a和b到底是啥？"),e("br"),a._v("\n通过console其实你大致都能看出来了"),e("br"),a._v("\nsort中的那个函数就叫做比较函数，该函数比较a和b两个值，return一个用来说明a,b相对顺序的数字。"),e("br")]),a._v(" "),e("ul",[e("li",[a._v("a-b>0  所以b相对再a前面")]),a._v(" "),e("li",[a._v("a-b=0  ab相对位置不会变")]),a._v(" "),e("li",[a._v("a-b<0  a相对在b前面\n"),e("br"),a._v("sort函数就是不断的对相邻两个值不断对比，记录位置，不断调整顺序，根据两个值相减返回的值与0对比确认两个值的相对位置。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("按照数组中对象的某一个属性值进行排序\n\nvar arr = [\n    {name:'zopp',age:0},\n    {name:'gpp',age:18},\n    {name:'yjj',age:8}\n];\n\nlet r=arr.sort((a,b)=>{\n    return a.age-b.age\n})\nconsole.log(r)  //[{name:'zopp',age:0},{name:'yjj',age:8},{name:'gpp',age:18}]\n\n我们知道sort是根据return计算的值跟0相比来确定相邻两个值的相对位置，所以只要这个值我们随机生成，不就实现了乱排吗\n\nlet arr=[1,2,10,3]\nlet r=arr.sort(function(a,b){\n    return Math.random() - 0.5;\n})\nconsole.log(r)  //乱序\n")])])]),e("h3",{attrs:{id:"every"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#every"}},[a._v("#")]),a._v(" every")]),a._v(" "),e("p",[a._v("用来检测是不是数组中每一个元素都符合条件,返回一个布尔值")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let arr=[1,2,10,3]\nlet r=arr.every(item=>{\n    return item>2\n})\nconsole.log(r)  //false\n")])])]),e("h3",{attrs:{id:"some"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#some"}},[a._v("#")]),a._v(" some")]),a._v(" "),e("p",[a._v("只要数组中有一个满足条件，就返回布尔值，跟every刚好对应")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let arr=[1,2,10,3]\nlet r=arr.some(item=>{\n    return item>2\n})\nconsole.log(r)  //true\n")])])]),e("p",[a._v("其实还有很多高阶函数，只要能传个函数给他的就是高阶函数，数组里面提供的高阶函数多了去了，例如find,findIndex,forEach等等，这里只是举几个典型的例子")])])}),[],!1,null,null,null);r.default=n.exports}}]);