(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{451:function(n,s,e){"use strict";e.r(s);var a=e(1),l=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",[n._v("JS基础知识总结")])]),n._v(" "),s("h2",{attrs:{id:"undefined-和-null"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undefined-和-null"}},[n._v("#")]),n._v(" undefined 和 null")]),n._v(" "),s("p",[n._v("只声明变量，不赋值的情况下，变量默认为undefined。\n在开发经常声明一个变量，等待数据接收，此时我们可以通过检测变量是否为undefined来判断是否有数据传输过来。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("function fun(x,y){\n    x = x || 0        \n} \n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("p",[n._v("此时如果没有给fun函数传递x的值，则x = 0")]),n._v(" "),s("p",[n._v("undefined表示没有赋值，null表示赋值了，但是内容为空。\n把null作为尚未创建的对象。将来有个变量里面存放对象，但是对象还没有创建好，可以先给变量赋值为null。")]),n._v(" "),s("h2",{attrs:{id:"数据类型检测、数据类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型检测、数据类型转换"}},[n._v("#")]),n._v(" 数据类型检测、数据类型转换")]),n._v(" "),s("p",[n._v("通过typeof关键字检测数据类型。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("console.log(typeof 123)        //number\nconsole.log(typeof '123')      //string\nconsole.log(typeof true)       //boolean\nconsole.log(typeof undefined)  //undefined\nconsole.log(typeof null)       //object\n\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("let num = 10\nconsole.log(typeof num + '11')  //number11\nconsole.log(typeof (num + '11'))  //string\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("p",[n._v("js中在表单、prompt中获取的数据默认为是字符串类型的，此时需要将数据转换为自己需要的类型后才能使用。数据转换分为显示和隐式转换。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("//隐式转换\nconsole.log(10 + '10') //1010\nlet num = '10'\nconsole.log(+ num) //10  将字符串转换为数字型\nconsole.log(10 +    +'10') //20 \nconsole.log(10 - '10') //0    - * / 将字符串的值转换为数值型\n//显示转换\nconsole.log(Number('10'))    //10\nconsole.log(parseInt('10.6'))    //10\nconsole.log(parseFloat('10.6'))    //10.6\n\nconsole.log(number('10.6px'))    //NaN   not a number\nconsole.log(parseFloat('10.6px'))    //10.6 , 常用于过滤单位\n\n\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br")])])])}),[],!1,null,null,null);s.default=l.exports}}]);