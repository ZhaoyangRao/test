(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{151:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"react"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" react")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("用于构建用户界面的 JavaScript 库\nreactjs react-native")])]),t._v(" "),n("p",[t._v("这里先介绍react\n由于公司内部技术栈基本为vue，本文主要是向公司内部实习生简单科普react自己编写的简单资料")]),t._v(" "),n("h2",{attrs:{id:"reactjs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reactjs"}},[t._v("#")]),t._v(" reactjs")]),t._v(" "),n("p",[t._v("官网https://react.docschina.org/")]),t._v(" "),n("h2",{attrs:{id:"reactjs与vue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reactjs与vue"}},[t._v("#")]),t._v(" reactjs与vue")]),t._v(" "),n("p",[t._v("技术无好坏，无比较，看自己选择，都是很成熟的前端框架，技术选型根据自己公司来选择")]),t._v(" "),n("h2",{attrs:{id:"node环境-create-react-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node环境-create-react-app"}},[t._v("#")]),t._v(" node环境 create-react-app")]),t._v(" "),n("p",[t._v("至于用npm yarn看自己了，我选择的还是npm"),n("br"),t._v("\n当然可以直接cdn html引入的方式玩，我这里直接选择官方脚手架create-react-app直接走起")]),t._v(" "),n("h2",{attrs:{id:"reactjs基本技术栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reactjs基本技术栈"}},[t._v("#")]),t._v(" reactjs基本技术栈")]),t._v(" "),n("p",[t._v("reactjs react-router redux(mobx) axios webpack")]),t._v(" "),n("h3",{attrs:{id:"reactjs-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reactjs-2"}},[t._v("#")]),t._v(" reactjs")]),t._v(" "),n("h4",{attrs:{id:"reactdom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reactdom"}},[t._v("#")]),t._v(" ReactDOM")]),t._v(" "),n("p",[t._v("ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ReactDOM.render(\n<p>我是呗插入的模板组件</p>, document.getElementById('app')\n)\n")])])]),n("h4",{attrs:{id:"jsx语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jsx语法"}},[t._v("#")]),t._v(" jsx语法")]),t._v(" "),n("p",[t._v("有点像js和xml结合混写，简单的说react支持在js里面直接写html，有自己的语法规范去解析，比如遇到<这个标签它就用html规则去解析了，如果遇到{}就用js去解析")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var test='解析我吧，我是个变量'\nReactDOM.render(\n<p>{test}</p>, document.getElementById('app')\n)\n")])])]),n("h4",{attrs:{id:"component-fragment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-fragment"}},[t._v("#")]),t._v(" Component Fragment")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//在create-react-app的.js文件\n import React,{Component,Fragment} from 'react'\n 这里用了解构其实等价于\n import React from React;\n const Component =React.Component;\nconst Fragment =React.Fragment;\n 引入了react和全局定义了Component，在组件里面可以看到大量的extends Component,这就是react的核心=>Component（组件）\nclass App extends Component{\n render(){\n  return(\n  <Fragment>\n    <div className='my-div'>\n        <span>123</span>\n    </div>\n    </Fragment>\n  )\n  //其实等价于\n  //var spanN=React.createElement('span',null,'123')\n  //var divN=React.createElement('div',{className:'my-div'},spanN)\n }\n}\n")])])]),n("p",[t._v("值得注意的是在react里面的一些小规范")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("1.自定义组件<App> 大写开头\n2.class=>className\n3.组件外面包裹一层，你可以用Fragment也可以用常用的标签，这个就跟vue template,angular的 ag-container一样\n")])])]),n("h4",{attrs:{id:"es6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6"}},[t._v("#")]),t._v(" es6")]),t._v(" "),n("p",[t._v("react里面大量的es6语法，")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("解构\n箭头函数\nclass extends\nimport  exports\nconstructor\nsuper\nconst let\n扩展运算符\nreduce filter\n等等\n\n")])])]),n("h4",{attrs:{id:"react的响应式设计与虚拟dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react的响应式设计与虚拟dom"}},[t._v("#")]),t._v(" react的响应式设计与虚拟DOM")]),t._v(" "),n("pre",[n("code",[t._v("其实这个目前三大响应式框架vue react 差不多,具体的官网解释的也挺清楚的，框架只是工具，最主要的是你的编程思想，数据驱动，不再是jq时代的节点操作\n")])]),t._v(" "),n("h4",{attrs:{id:"state-setstate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#state-setstate"}},[t._v("#")]),t._v(" state setState")]),t._v(" "),n("p",[t._v("类似于vue中的data,不同的是react的单项数据流做的比较干净")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class App extend Component{\n    constructor(props){\n                super(props)\n                this.state={\n                  valueInput:'123'\n                }\n            }\n    //console.log(this) \n    render(){\n        return(\n            <Fragment>\n                <input value={this.state.valueInput} onChange={this.handelInput.bind(this)}/>\n            </Fragment>\n        )\n    }\n    //这里就可以写方法了，vue methods\n    handelInput(e){\n        console.log(e.target.value)\n        //this.state.valueInput=e.target.value 你想太多了\n        this.setState({\n        valueInput:e.target.value\n        })\n    }\n    \n}\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("1.单项数据流"),n("br"),t._v("\n2.改变state 要用setState方法"),n("br"),t._v("\n3.绑定事件，onClick小驼峰"),n("br"),t._v("\n4.注意this指向绑定"),n("br"),t._v("\n5.数组对象setState前，官方推荐先浅拷贝(这个坑很容易踩到，因为不会报错，程序执行正常，但会出现性能问题)")])]),t._v(" "),n("h4",{attrs:{id:"vue-v-for-pk-react-jsx循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-v-for-pk-react-jsx循环"}},[t._v("#")]),t._v(" vue v-for PK react jsx循环")]),t._v(" "),n("p",[t._v("react一种典型的js加xml的写法就体现出来了，简单粗暴")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class App extend Component(\n    constructor(props){\n      super(props)\n      this.state={\n        list:[11,22,33]\n      }\n    }\n    render(){\n        return(\n             <Fragment> \n                {this.state.list.map((item,index)=>{\n                    return(\n                        <li key={index}>{item}</li>\n                    )\n                })}\n             </Fragment>\n        )\n    }\n)\n")])])]),n("h4",{attrs:{id:"vue-v-if-pk-react-jsx判断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-v-if-pk-react-jsx判断"}},[t._v("#")]),t._v(" vue v-if PK react jsx判断")]),t._v(" "),n("p",[t._v("同理vue中的v-if，react写起来就更加随心所欲了，你可以把数据处理完传给它渲染，也可以在render函数里面直接jsx语法一套秒")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class App extend Component(\n    constructor(props){\n      super(props)\n      this.state={\n        list:[11,22,33]\n      }\n    }\n    render(){\n        return(\n             <Fragment> \n                {this.state.list.map((item,index)=>{\n                    if(index>1){\n                        return(\n                            <li key={index}>{item}</li>\n                        )\n                    }else{\n                        return(\n                            <li key={index}>{item}</li>\n                        )\n                    }\n                    \n                })}\n             </Fragment>\n        )\n    }\n)\n")])])]),n("h4",{attrs:{id:"vue中的v-html-pk-dangerouslysetinnerhtml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue中的v-html-pk-dangerouslysetinnerhtml"}},[t._v("#")]),t._v(" vue中的v-html PK dangerouslySetInnerHtml")]),t._v(" "),n("p",[t._v("为什么前面是dangerous？？？危险？？我推测是react想说哥们你想一下有没有必要这样操作，类似于操作节点耶")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class App extend Component(\n    constructor(props){\n      super(props)\n      this.state={\n        hone:'<h1>标题字体</h1>'\n      }\n    }\n    render(){\n        return(\n             <Fragment> \n                <div  dangerouslySetInnerHtml={{_html:this.state.hone}}>               \n                </div>\n             </Fragment>\n        )\n    }\n)\n")])])]),n("p",[t._v("为毛这里{{}}不要有疑问，因为{html:xxx}里面是一个对象呀")]),t._v(" "),n("h4",{attrs:{id:"htmlfor-pk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#htmlfor-pk"}},[t._v("#")]),t._v(" htmlFor PK "),n("label",{attrs:{for:"xxx"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<lable for='nextInput'>点我就让id='nextInput'的input获取了焦点</label>\n<input id='nextInput'/>\n\nreact中\n<lable htmlFor='nextInput'>点我就让id='nextInput'的input获取了焦点</label>\n<input id='nextInput'/>\n")])])]),n("p",[t._v("为什么又这样？你要理解人家，for也是关键字啊，莫比比")]),t._v(" "),n("h4",{attrs:{id:"标签的class"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标签的class"}},[t._v("#")]),t._v(" 标签的class")]),t._v(" "),n("p",[t._v("这里要说的是css里面的class,在react里面是className,为啥这么做，因为class这是个关键字啊=>class extends")]),t._v(" "),n("h4",{attrs:{id:"simple-react-snippets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-react-snippets"}},[t._v("#")]),t._v(" simple react snippets")]),t._v(" "),n("p",[t._v("我碰巧看见别人快捷生成了一些例如下面这些基本常用的代码，几个单词就生成下面的代码，第一次看见，心中只有两个字无情，好在我的subline也能安装")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("imrc 回车=>\nimport React,{Component} from 'react'\ncc 回车=>\nclass App extends Component{\n    constructor(props){\n      super(props)\n      this.state={\n      }\n      }\n     render(){\n      return(\n      )\n \n }\n}\n}\n")])])]),n("h4",{attrs:{id:"react-component组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-component组件"}},[t._v("#")]),t._v(" react Component组件")]),t._v(" "),n("p",[t._v("其实vue跟react Component组件思想都一样，万物皆组件，一个网页就是很多组件组合起来的，各种组件的组合成各种各样的组件，像斗积木一样开心。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("子组件\nclass Son extends Component{\n    constructor(props){\n      super(props)\n      this.state={\n      }\n      }\n     render(){\n      return(\n       <Fragment> \n                <div>      \n                我是son的文字哦\n                </div>\n         </Fragment>\n      )\n \n }\n}\n}\nexports default Son\n父组件\nimport Son from './Son'\nclass App extends Component{\n    constructor(props){\n      super(props)\n      this.state={\n      }\n      }\n     render(){\n      return(\n           <Fragment> \n                <Son/>\n            </Fragment>\n       \n      )\n }\n}\n}\n")])])]),n("p",[t._v("注意的是：\nreact的自定义组件有自己的语法")]),t._v(" "),n("h4",{attrs:{id:"vue-pk-react组件传值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-pk-react组件传值"}},[t._v("#")]),t._v(" vue PK react组件传值")]),t._v(" "),n("p",[t._v("//props传值")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("父组件\nimport Son from './Son'\nclass App extends Component{\n    constructor(props){\n      super(props)\n      this.state={\n        setSon:'12'\n      }\n      }\n     render(){\n          return(\n                <Fragment> \n                    <Son setSon={this.state.setSon}/>\n                </Fragment>\n\n          )\n }\n}\n\n子组件\nclass Son extends Component{\n    constructor(props){\n      super(props)\n      this.state={\n      }\n      }\n     render(){\n          return(\n               <Fragment> \n                        <div>      \n                         {this.props.setSon}\n                        </div>\n                </Fragment>\n          )\n \n     }\n    }\n\nexports default Son\n")])])]),n("p",[t._v("// 子组件通知父组件改值")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("父组件\nimport Son from './Son'\nclass App extends Component{\n    constructor(props){\n      super(props)\n      this.state={\n        setSon:'12'\n      }\n      }\n     render(){\n          return(\n                <Fragment> \n                    <Son setSon={this.state.setSon} changeData={this.changeData.bind(this)}/>\n                </Fragment>\n\n          )\n     }\n     changeData(){\n         this.setState({\n          setSon:'改了'\n         })\n     }\n}\n子组件\nclass Son extends Component{\n    constructor(props){\n      super(props)\n      this.state={\n      }\n      }\n     render(){\n          return(\n               <Fragment> \n                        <div onClick={this.setParents.bind(this)}>      \n                         {this.props.setSon}\n                        </div>\n                </Fragment>\n          )\n \n     }\n     setParents(){\n        console.log(this.props)\n        this.props.changeData()\n     }\n    }\nexports default Son\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("1.父传子=>通过props自定义属性去传递值或者方法给子组件"),n("br"),t._v("\n2.子通知父=>父组件将自己的方法传递给子组件,子组件通知父组件调用父组件自己的方法去改父组件的值，因为父组件改了自己的值从而让子组件数据变化"),n("br"),t._v("\n3.当然跟vue一样父子通讯不只这一种方式，但这是最基础的")])]),t._v(" "),n("h4",{attrs:{id:"单项数据流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单项数据流"}},[t._v("#")]),t._v(" 单项数据流")]),t._v(" "),n("p",[t._v("就像我前面说的，虽然vue也推荐单项数据流，但是react单项数据流做的比vue干净的多，例如vue中为某些UI控件提供了双向数据绑定的方式，而且在子组件可以操作父组件传过来的值，虽然此时父组件的值没有改变等等。\n通过父子组件数据交互就能清楚的理解单项数据流了，数据永远是父组件那边来的，子组件只能通知父组件改自己的值，因为父组件改了自己的值从而让子组件数据变化，数据流向从来都是父到子，这种设计的好处也是非常明显的，流向清晰，利于追踪数据等\n现在前端三大框架编码主流都是推荐单项数据流")]),t._v(" "),n("h4",{attrs:{id:"函数式编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程"}},[t._v("#")]),t._v(" 函数式编程")]),t._v(" "),n("p",[t._v("react里面简直就是函数式编程的生动体现，可以说每一个组件就是一个函数生成等等。\n有些人不理解函数式编程，lodash,underscore都是典型的函数式编程")])])}),[],!1,null,null,null);e.default=s.exports}}]);