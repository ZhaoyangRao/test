(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{171:function(e,n,a){"use strict";a.r(n);var t=a(0),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"iframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[e._v("#")]),e._v(" iframe")]),e._v(" "),a("p",[e._v("iframe在现在的前端项目里面，很多时候我们不得不用它，而用它又不是简单的放在那个位置就完了，更多的现实情况是iframe都并不是同一个域名，并且都会涉及到一些通信")]),e._v(" "),a("p",[e._v("iframe有很多功能，不管是作为组件来布局还是为了利用第三方的网页实现功能，都需要用到的就是iframe的通信功能，而iframe通信分为同域和跨域，这也是浏览器处于安全考虑来进行限制产生的结果。")]),e._v(" "),a("h3",{attrs:{id:"同域通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同域通信"}},[e._v("#")]),e._v(" 同域通信")]),e._v(" "),a("h4",{attrs:{id:"主页面调用子iframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主页面调用子iframe"}},[e._v("#")]),e._v(" 主页面调用子iframe")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<iframe name=\"iframeName\" id=\"iframeId\" src=\"child.html\"></iframe>\n\n1.通过iframe的ID获取子页面的dom，然后通过内置属性contentWindow取得子窗口的window对象此方法兼容各个浏览器\n\ndocument.getElementById('iframeId').contentWindow.func(); \ndocument.getElementById('iframeId').contentWindow.document.getElementById('子页面中的元素ID');\n\n2、通过iframe的name（名字）直接获取子窗口的window对象\n\niframeName.window.func(); \niframeName.window.document.getElementById('子页面中的元素ID');\n\n3、通过window对象的frames[]数组对象直接获取子frame对象\n\nwindow.frames[0].func();\nwindow.frames[0].document.getElementById('子页面中的元素ID');\n//或\nwindow.frames[\"iframeName\"].func();\nwindow.frames[\"iframeName\"].document.getElementById('子页面中的元素ID');\n\n")])])]),a("h4",{attrs:{id:"子iframe页面调用父页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子iframe页面调用父页面"}},[e._v("#")]),e._v(" 子iframe页面调用父页面")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("通过parent或top对象获取父页面的window对象内元素及方法\n\nparent.window.func(); \nparent.window.document.getElementById('父页面中的元素ID');\n//同理\ntop.window.func(); \ntop.window.document.getElementById('父页面中的元素ID');\n\n")])])]),a("h4",{attrs:{id:"主页面内兄弟iframe页面相互调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主页面内兄弟iframe页面相互调用"}},[e._v("#")]),e._v(" 主页面内兄弟iframe页面相互调用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('/*以下为在child1.html页面内访问兄弟frame页面*/\n<iframe name="iframe1Name" id="iframe1Id" src="child1.html"></iframe>\n<iframe name="iframe2Name" id="iframe2Id" src="child2.html"></iframe>\n<iframe name="iframe3Name" id="iframe3Id" src="child3.html"></iframe>\n\n1、通过兄弟iframe的ID获取其dom，然后通过内置属性contentWindow取得window对象\n  此方法兼容各个浏览器\n\nparent.window.document.getElementById(\'iframe2Id\').contentWindow.func(); \nparent.window.document.getElementById(\'iframe3Id\').contentWindow.document.getElementById(\'兄弟页面3中的元素ID\');\n\n2、通过iframe的name（名字）直接获取子窗口的window对象\n\nparent.window.iframe2Name.window.func(); \nparent.window.iframe3Name.window.document.getElementById(\'兄弟页面3中的元素ID\'); \n\n3、通过window对象的frames[]数组对象直接获取子frame对象\n\nparent.window.frames[1].func();\ntop.window.frames[2].document.getElementById(\'兄弟页面3中的元素ID\');\n//或\nparent.window.frames["iframe2Name"].func();\nparent.window.frames["iframe3Name"].document.getElementById(\'兄弟页面3中的元素ID\');\n\n')])])]),a("p",[e._v("其实从上面的例子也可以看出，在同域的情况下，核心还是通过window对象，因为浏览器并不会限制同域下iframe的这些访问。")]),e._v(" "),a("h3",{attrs:{id:"跨域访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域访问"}},[e._v("#")]),e._v(" 跨域访问")]),e._v(" "),a("p",[e._v("网上也有很多间接的方案，但是现在有了更好的更简单方案，也就是postMessage,而且兼容性已经满足主流浏览器了")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('主页\n\nvar iframeWin = document.getElementById("otherPage").contentWindow;       \niframeWin.postMessage(\'发送给ifame\');   \nwindow.addEventListener("message", receiveMessage, false);\nfunction receiveMessage(event)\n{\n console.log(event)\n}\n————————————————————————————————————————————————————————————————————————————————————————\niframe中\nwindow.addEventListener("message", receiveMessage, false);\nfunction receiveMessage(event)\n{\n console.log(event);\n window.parent.postMessage(\'发送给主页\');  \n}\n  \n')])])]),a("p",[e._v("其实很简单就是通过postMessage方法和message事件，来互相派发消息，有点像发布订阅，看到这里你可能发现其实跟web worker也有点像，当然web worker也只能同域，这里不作延申")]),e._v(" "),a("h3",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[e._v("#")]),e._v(" 缺点")]),e._v(" "),a("ul",[a("li",[e._v("会阻塞主页面的onload事件"),a("br"),e._v("\nonload事件会等浏览器当前界面的页面资源加载完成才触发，包括当前界面里面的iframe,所以如果iframe过多，要注意onload事件，或者让iframe异步加载"),a("br")]),e._v(" "),a("li",[e._v("搜索引擎无法解读这种页面，不利于SEO"),a("br")]),e._v(" "),a("li",[e._v("iframe和主页面共享连接池"),a("br"),e._v("\n浏览器同域名请求并发限制，参考我的另外一篇文章"),a("br")]),e._v(" "),a("li",[e._v("开启多余的进程，性能消耗"),a("br"),e._v("\n单独的进程渲染，多个iframe就会有多个进程，消耗内存")])])])}),[],!1,null,null,null);n.default=r.exports}}]);