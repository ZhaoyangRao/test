(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(t,e,a){t.exports=a.p+"assets/img/cookie.c1a9c60c.png"},140:function(t,e,a){t.exports=a.p+"assets/img/cookie2.253eb5b3.png"},164:function(t,e,a){"use strict";a.r(e);var i=a(0),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"cookie"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" cookie")]),t._v(" "),i("p",[t._v("为什么会出现cookie？"),i("br"),t._v("\n主要是现在主流的http协议，是无状态的协议，无状态的意思就是无法记录状态，对于http请求来说每一次都是独立的，各个请求之间没有直接联系。"),i("br"),t._v("\n这样会产生一个问题，日常的前端开发涉及到用户，要怎么去记录每次请求都跟这个用户有联系呢，所以就需要请求每次都携带一个用户的标识，就诞生了cookie。(也不只是cookie，比如session等)")]),t._v(" "),i("h3",{attrs:{id:"cookie机制"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cookie机制"}},[t._v("#")]),t._v(" cookie机制")]),t._v(" "),i("ul",[i("li",[t._v("客户端发起一条请求到服务器")]),t._v(" "),i("li",[t._v("服务器响应，响应里面就包括set-cookie的头部信息")]),t._v(" "),i("li",[t._v("客户端保存下来，之后发起请求就携带cookie的头部信息")])]),t._v(" "),i("p",[i("img",{attrs:{src:a(139),alt:"avatar"}})]),t._v(" "),i("h3",{attrs:{id:"cookie主要属性"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cookie主要属性"}},[t._v("#")]),t._v(" cookie主要属性")]),t._v(" "),i("p",[i("img",{attrs:{src:a(140),alt:"avatar"}})]),t._v(" "),i("p",[t._v("随便从谷歌浏览器一个网站截图cookie的列表，每一条cookie都有Name,Value,Domain,Path,Expires/Max-Age,Size,HttpOnly,Secure,samesite,Priority等等属性")]),t._v(" "),i("h4",{attrs:{id:"domain"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[t._v("#")]),t._v(" Domain")]),t._v(" "),i("p",[t._v("生成该 Cookie 的域名，如 domain=\"www.baidu.com\"\ncookie是不可以跨域名的，诞生可以通过设置domain来间接实现多域名共享cookie，例如设置domain='.baidu.com'，那么'a.baidu.com','b.baidu.com'都可以访问到这个cookie")]),t._v(" "),i("h4",{attrs:{id:"path"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" Path")]),t._v(" "),i("p",[t._v("该 Cookie 是在当前的哪个路径下生成的，如 path=/wp-admin/。"),i("br"),t._v('\npath属性决定允许访问Cookie的路径，比如，设置为"/"表示允许所有路径都可以使用Cookie。')]),t._v(" "),i("h4",{attrs:{id:"expires-max-age"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#expires-max-age"}},[t._v("#")]),t._v(" Expires/Max-Age")]),t._v(" "),i("p",[t._v("这个属性主要是用来设置Cookie的有效期，Max-Age的值，其实你可以看到Expires显示的是 '2022-01-21T02:35:53.288Z'或者Session")]),t._v(" "),i("p",[t._v("其实通通跟设置的max-age有关系"),i("br"),t._v("\n通过getMaxAge()和setMaxAge(int maxAge)来读写该属性。maxAge有3种值，分别为正数，负数和0。max-age单位为秒")]),t._v(" "),i("p",[t._v("max-age默认就是-1"),i("br"),t._v("\ncookie默认是Session的，即cookie默认是浏览器会话期间存在，关闭浏览器就会被清除，此时max-age默认就是-1，如果想让cookie存在一段时间，就需要设置Max-Age为正数了，就会显示具体的失效时间了。")]),t._v(" "),i("p",[t._v("Max-Age为正数"),i("br"),t._v("\n这里的这个时间也很好理解，无非就是当前的服务器时间跟它对比，到期就无效了呗（其实这个时间也是通过Max-Age计算出来的结果）")]),t._v(" "),i("p",[t._v("max-age为0"),i("br"),t._v("\n当设置max-age为0的时候就表示清楚cookie")]),t._v(" "),i("h4",{attrs:{id:"httponly"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[t._v("#")]),t._v(" HttpOnly")]),t._v(" "),i("p",[t._v('这个属性诞生主要还是因为安全，设置httpOnly主要是可以限制js等脚本去获取cookie，忽略那些通过"非 HTTP" 方式对 cookie 的访问。这个属性对于XSS,CSRF攻击其实都有很好的作用')]),t._v(" "),i("h4",{attrs:{id:"secure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#secure"}},[t._v("#")]),t._v(" secure")]),t._v(" "),i("p",[t._v("同样的，这个属性也是因为安全诞生的，主要的功能是设置secure，就只会在https得请求中才会携带cookie")]),t._v(" "),i("h4",{attrs:{id:"samesite"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[t._v("#")]),t._v(" samesite")]),t._v(" "),i("p",[t._v("samesite这个属性我在web安全得时候也提到过，对于CSRF攻击很有用，主要的作用就是限制cookie发送的条件，但是存在兼容性问题\n通常情况下设置samesite的strict和lax已经能杜绝大部分CSRF了")]),t._v(" "),i("p",[t._v("strict完全禁止第三方 Cookie，跨站点时，任何情况下都不会发送 Cookie")]),t._v(" "),i("p",[t._v("Lax属于部分禁止")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("请求类型")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("示例")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("正常情况")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Lax")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("链接")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v('<a href="..."></a>')]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")])]),t._v(" "),i("tr",[i("td",[t._v("预加载")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v('<link rel="prerender" href="..."/>')]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")])]),t._v(" "),i("tr",[i("td",[t._v("GET 表单")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v('<form method="GET" action="...">')]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")])]),t._v(" "),i("tr",[i("td",[t._v("POST 表单")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v('<form method="POST" action="...">')]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("不发送")])]),t._v(" "),i("tr",[i("td",[t._v("iframe")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v('<iframe src="..."></iframe>')]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("不发送")])]),t._v(" "),i("tr",[i("td",[t._v("AJAX")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v('$.get("...")')]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("不发送")])]),t._v(" "),i("tr",[i("td",[t._v("Image")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v('<img src="...">')]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("不发送")])])])]),t._v(" "),i("p",[t._v("None关闭该属性")])])}),[],!1,null,null,null);e.default=o.exports}}]);