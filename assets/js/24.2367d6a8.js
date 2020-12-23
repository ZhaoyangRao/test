(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{160:function(e,a,n){"use strict";n.r(a);var t=n(0),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"常用封装工具函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用封装工具函数"}},[e._v("#")]),e._v(" 常用封装工具函数")]),e._v(" "),n("h3",{attrs:{id:"树状数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#树状数据结构"}},[e._v("#")]),e._v(" 树状数据结构")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" // 使用示例代码：\nlist: [{id: 1, pid: 0, name: 11}, {id: 2, pid: 1, name: 2}]\ngetTreeArr({ key: 'id', pKey: 'pid', data: list })\nresult: [\n    {id: 1, pid: 0, name: 11, children: [\n        {id: 2, pid: 1, name: 2}\n    ]}\n]\n */\n/**\n * 将一级的数据结构处理成树状数据结构\n * @param {Object} obj {key, pKey, data}\n *  @param obj.key  字段名称 比如id\n *  @param obj.pKey 父字段名称 比如 pid\n *  @param obj.rootPValue 根节点的父字段的值\n *  @param obj.data 需要处理的数据\n *  @param obj.jsonData 是否深复制数据（默认是true）\n * @return {Array} arr\n   */\n function getTreeArr(obj) {\n    if (!Array.isArray(obj.data)) {\n      console.log('getTreeArr=>请传入数组')\n      return []\n    }\n    obj.jsonData = obj.jsonData === false ? obj.jsonData : true\n    const arr = obj.jsonData ? JSON.parse(JSON.stringify(obj.data)) : obj.data\n    const arr1 = []\n    // 将数据处理成数状结构\n    arr.forEach(item => {\n      let index = 0\n      item.children = []\n      arr.forEach(item1 => {\n        // 得到树结构关系\n        if (item[obj.key] === item1[obj.pKey]) {\n          item.children.push(item1)\n        }\n        // 判断根节点\n        if (item1[obj.key] !== item[obj.pKey]) {\n          index++\n        }\n      })\n      // 没传入根节点，根据当前数据结构得到根节点\n      if (!('rootPValue' in obj) && index === arr.length) {\n        arr1.push(item)\n      }\n    })\n    // 传入根节点，根据传入的根节点组成树结构\n    if ('rootPValue' in obj) {\n      arr.forEach(item => {\n        if (item[obj.pKey] === obj.rootPValue) {\n          arr1.push(item)\n        }\n      })\n    }\n    return arr1\n  }\n")])])]),n("h3",{attrs:{id:"保留n位小数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#保留n位小数"}},[e._v("#")]),e._v(" 保留n位小数")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function toFixed(val, num) {\n    val = parseFloat(val);\n    if (val) {\n        val = parseFloat(val.toFixed(num || 1));\n    } else {\n        val = 0;\n    }\n    return val;\n}\n")])])]),n("h3",{attrs:{id:"判断是否是-null-undefined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断是否是-null-undefined"}},[e._v("#")]),e._v(" 判断是否是 null, '', undefined")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function isNot(val) {\n    if (val === null || val === '' || val === undefined) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\n\n")])])]),n("h3",{attrs:{id:"设置-本地缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置-本地缓存"}},[e._v("#")]),e._v(" 设置 本地缓存")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function setStorage(key, obj) {\n   if (typeof obj === 'string') {\n       localStorage.setItem(key, obj);\n   } else {\n       localStorage.setItem(key, JSON.stringify(obj));\n   }\n}\n\n/**\n* 获取\n*/\nfunction getStorage(key) {\n   let val = localStorage.getItem(key);\n   try {\n       return JSON.parse(val);\n   } catch (e) {\n       return val;\n   }\n}\n\n/**\n* 删除， 如果不传值，删除所有\n*/\nfunction clearStorage(key) {\n   if (key) {\n       localStorage.removeItem(key);\n   } else {\n       localStorage.clear();\n   }\n}\n")])])]),n("h3",{attrs:{id:"深拷贝，支持常见类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝，支持常见类型"}},[e._v("#")]),e._v(" 深拷贝，支持常见类型")]),e._v(" "),n("ul",[n("li",[e._v("@param {Any} values")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('function deepClone(values) {\n    var copy;\n\n    // Handle the 3 simple types, and null or undefined\n    if (null == values || "object" != typeof values) return values;\n\n    // Handle Date\n    if (values instanceof Date) {\n        copy = new Date();\n        copy.setTime(values.getTime());\n        return copy;\n    }\n\n    // Handle Array\n    if (values instanceof Array) {\n        copy = [];\n        for (var i = 0, len = values.length; i < len; i++) {\n            copy[i] = deepClone(values[i]);\n        }\n        return copy;\n    }\n\n    // Handle Object\n    if (values instanceof Object) {\n        copy = {};\n        for (var attr in values) {\n            if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);\n        }\n        return copy;\n    }\n\n    throw new Error("Unable to copy values! Its type isn\'t supported.");\n}\n')])])]),n("h3",{attrs:{id:"获取操作系统类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取操作系统类型"}},[e._v("#")]),e._v(" 获取操作系统类型")]),e._v(" "),n("ul",[n("li",[e._v("@return {String}")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function getOS() {\n    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';\n    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';\n    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';\n\n    if (/mac/i.test(appVersion)) return 'MacOSX'\n    if (/win/i.test(appVersion)) return 'windows'\n    if (/linux/i.test(appVersion)) return 'linux'\n    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios'\n    if (/android/i.test(userAgent)) return 'android'\n    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'\n}\n")])])]),n("h3",{attrs:{id:"获取浏览器类型和版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取浏览器类型和版本"}},[e._v("#")]),e._v(" 获取浏览器类型和版本")]),e._v(" "),n("ul",[n("li",[e._v("@return {String}")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function getExplore() {\n    var sys = {},\n        ua = navigator.userAgent.toLowerCase(),\n        s;\n    (s = ua.match(/rv:([\\d.]+)\\) like gecko/)) ? sys.ie = s[1]:\n        (s = ua.match(/msie ([\\d\\.]+)/)) ? sys.ie = s[1] :\n        (s = ua.match(/edge\\/([\\d\\.]+)/)) ? sys.edge = s[1] :\n        (s = ua.match(/firefox\\/([\\d\\.]+)/)) ? sys.firefox = s[1] :\n        (s = ua.match(/(?:opera|opr).([\\d\\.]+)/)) ? sys.opera = s[1] :\n        (s = ua.match(/chrome\\/([\\d\\.]+)/)) ? sys.chrome = s[1] :\n        (s = ua.match(/version\\/([\\d\\.]+).*safari/)) ? sys.safari = s[1] : 0;\n    // 根据关系进行判断\n    if (sys.ie) return ('IE: ' + sys.ie)\n    if (sys.edge) return ('EDGE: ' + sys.edge)\n    if (sys.firefox) return ('Firefox: ' + sys.firefox)\n    if (sys.chrome) return ('Chrome: ' + sys.chrome)\n    if (sys.opera) return ('Opera: ' + sys.opera)\n    if (sys.safari) return ('Safari: ' + sys.safari)\n    return 'Unkonwn'\n}\n")])])]),n("h3",{attrs:{id:"url参数转对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#url参数转对象"}},[e._v("#")]),e._v(" url参数转对象")]),e._v(" "),n("ul",[n("li",[e._v("@param  {String} url  default: window.location.href")]),e._v(" "),n("li",[e._v("@return {Object}")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function parseQueryString(url) {\n    url = url == null ? window.location.href : url\n    var search = url.substring(url.lastIndexOf('?') + 1)\n    if (!search) {\n        return {}\n    }\n    return JSON.parse('{\"' + decodeURIComponent(search).replace(/\"/g, '\\\\\"').replace(/&/g, '\",\"').replace(/=/g, '\":\"') + '\"}')\n}\n")])])]),n("h3",{attrs:{id:"随机生成颜色"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#随机生成颜色"}},[e._v("#")]),e._v(" 随机生成颜色")]),e._v(" "),n("ul",[n("li",[e._v("@return {String}")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function randomColor() {\n    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);\n}\n")])])]),n("h3",{attrs:{id:"生成指定范围随机数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成指定范围随机数"}},[e._v("#")]),e._v(" 生成指定范围随机数")]),e._v(" "),n("ul",[n("li",[e._v("@param  {Number} min")]),e._v(" "),n("li",[e._v("@param  {Number} max")]),e._v(" "),n("li",[e._v("@return {Number}")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function randomNum(min, max) {\n    return Math.floor(min + Math.random() * (max - min));\n}\n")])])]),n("h3",{attrs:{id:"格式化时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#格式化时间"}},[e._v("#")]),e._v(" 格式化时间")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('function formatDate(date) {\n    date = new Date(date);\n    var y = date.getFullYear();\n    var m = date.getMonth() + 1;\n    var d = date.getDate();\n    var h = date.getHours();\n    var m1 = date.getMinutes();\n    var s = date.getSeconds();\n    m = m < 10 ? ("0" + m) : m;\n    d = d < 10 ? ("0" + d) : d;\n    return y + "-" + m + "-" + d + " " + h + ":" + m1 + ":" + s;\n}\n')])])]),n("h3",{attrs:{id:"获取当前时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取当前时间"}},[e._v("#")]),e._v(" 获取当前时间")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function getNowFormatDate() {\n    var date = new Date();\n    var seperator1 = '/';\n    var seperator2 = ':';\n    var month = date.getMonth() + 1;\n    var strDate = date.getDate();\n    if (month >= 1 && month <= 9) {\n        month = '0' + month;\n    }\n    if (strDate >= 0 && strDate <= 9) {\n        strDate = '0' + strDate;\n    }\n    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +\n        \" \" + date.getHours() + seperator2 + date.getMinutes() +\n        seperator2 + date.getSeconds();\n    return currentdate;\n}\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);