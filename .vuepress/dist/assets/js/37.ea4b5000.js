(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{176:function(e,r,s){"use strict";s.r(r);var n=s(0),o=Object(n.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"web-worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-worker"}},[e._v("#")]),e._v(" Web Worker")]),e._v(" "),s("p",[e._v("js是单线程的，而Web Worker就是为js创造了多线程的环境，主线程执行代码遇到new Worker，就创建了一个独立于主线程外的worker线程，两者互不干扰，woker线程执行完成再把结果通知主线程。")]),e._v(" "),s("h3",{attrs:{id:"特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[e._v("#")]),e._v(" 特点")]),e._v(" "),s("ul",[s("li",[e._v("与主线程同源")]),e._v(" "),s("li",[e._v("不能读取或者操作DOM")]),e._v(" "),s("li",[e._v("不能读取本地文件")]),e._v(" "),s("li",[e._v("也不能读取或者更改主线程的变量")])]),e._v(" "),s("p",[e._v("简单的理解它就是独立于主线程外的一个单独的线程，浏览器为了安全考虑，限制其对主线程运行的网页代码环境进行操作，只能通过特定的通信机制传递消息给主线程，有点安全沙箱的意思。")]),e._v(" "),s("h3",{attrs:{id:"常见的用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的用法"}},[e._v("#")]),e._v(" 常见的用法")]),e._v(" "),s("p",[e._v("先看下面的一个简单的例子")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("worker线程给主线程发送消息\n<script>\nif (window.Worker) {\n    const myWorker = new Worker(\"myWorker.js\");\n    myWorker.onmessage = function(e) {\n        console.log('收到了');\n    }\n    myWorker.terminate()\n} else {\n    console.log('Your browser doesn\\'t support web workers.')\n}\n<\/script>\n\nmyWorker.js\n<script>\n setTimeout(()=>{\n       postMessage('发送');\n },500);\n<\/script>\n\n\n主线程也可以给worker线程发送消息\n<script>\nif (window.Worker) {\n    const myWorker = new Worker(\"myWorker.js\");\n     myWorker.postMessage('发送'); \n} else {\n    console.log('Your browser doesn\\'t support web workers.')\n}\n<\/script>\n\nmyWorker.js\n<script>\naddEventListener('message', function (e) {  \n \n}, false);\n\n等价于\n\nthis.addEventListener('message', function (e) {  \n \n}, false);\n等价于\n\nself.addEventListener('message', function (e) {  \n \n}, false);\n\n\n<\/script>\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),s("p",[e._v("web worker有自己的全局对象，不是主线程的window，所以worker没有alert confirm这些方法")])]),e._v(" "),s("p",[e._v("上面例子中用到了两个api，方法postMessage,terminate和事件onmessage。")]),e._v(" "),s("p",[s("strong",[e._v("主要的方法：")])]),e._v(" "),s("ul",[s("li",[e._v("postMessage\n字面意思发送消息")]),e._v(" "),s("li",[e._v("terminate\n终止worker")])]),e._v(" "),s("p",[s("strong",[e._v("主要的事件：")])]),e._v(" "),s("ul",[s("li",[e._v("onmessage\n接收postMessage发送来的消息")]),e._v(" "),s("li",[e._v("onmessageerror\n当messageerror 类型的事件发生时，对应的EventHandler 代码被调用")])]),e._v(" "),s("p",[s("strong",[e._v("Worker自身内部的属性方法事件：")])]),e._v(" "),s("ul",[s("li",[e._v("importScripts();\n加载脚本(该方法可加装多个脚本)：self.importScripts('script1.js', 'script2.js')")]),e._v(" "),s("li",[e._v("close"),s("br"),e._v("\nworker内部关闭自身self.close()")]),e._v(" "),s("li",[e._v("onmessage")]),e._v(" "),s("li",[e._v("onmessageerror")]),e._v(" "),s("li",[e._v("postMessage")])]),e._v(" "),s("h3",{attrs:{id:"web-worker分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-worker分类"}},[e._v("#")]),e._v(" web worker分类")]),e._v(" "),s("p",[e._v("web worker分为")]),e._v(" "),s("ul",[s("li",[e._v("DedicatedWorker(专用线程)")]),e._v(" "),s("li",[e._v("SharedWorker(共享线程)")])]),e._v(" "),s("p",[e._v("概念上简单的理解专用线程就是专为当前页面服务的线程，而共享线程则可以为多个页面共享的线程。"),s("br")]),e._v(" "),s("p",[e._v("表现上来看，专用线程一般就在本页面调用，推送也只能推送本页面，当前页面关闭，则线程结束。共享线程则可以同时推送多个页面信息，要调用它的多个页面都关闭，线程才会结束，其实你可以把他理解成单页面里面store的概念，多个组件共享这个状态。"),s("br")]),e._v(" "),s("p",[e._v("DedicatedWorker(专用线程)用法就是普通的web worker"),s("br")]),e._v(" "),s("p",[s("strong",[e._v("SharedWorker(共享线程)")])]),e._v(" "),s("p",[e._v("其实跟普通的web worker也只有些许的不同,只是它的事件方法都是在port对象上")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<script>\nif (window.Worker) {\n    const myWorker = new SharedWorker(\"myWorker.js\");\n    \n    myWorker.port.start()//onmessage事件或者start事件，这两种事件都可以启动一个SharedWorker\n    \n    myWorker.port.onmessage = function(e) {\n        console.log('收到了');\n    }\n    myWorker.port.terminate()\n} else {\n    console.log('Your browser doesn\\'t support web workers.')\n}\n<\/script>\n\nmyWorker.js\n<script>\naddEventListener('onconnect ', function (e) {  \n  var port = e.ports[0];\n  port.postMessage('发送');\n  \n}, false);\n<\/script>\n")])])]),s("p",[e._v("当然SharedWorker这个兼容性太差了，基本很多浏览器都不支持")])])}),[],!1,null,null,null);r.default=o.exports}}]);