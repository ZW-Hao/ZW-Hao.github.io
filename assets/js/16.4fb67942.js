(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{456:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[s._v("两数相加")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addTwoNumbers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" l1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Optional"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" l2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Optional"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Optional"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义头节点，val赋值为0")]),s._v("\n        head_node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head_node\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进位标识符carry，初值为0")]),s._v("\n        carry "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# while循环，对两链表对应位和上一位产生的进位carry进行相加操作，并判断是否产生了进位，记录carry值")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" l1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" l2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            l1_num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" l1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n            l2_num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" l2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n            num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l1_num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" l2_num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" carry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获得两数相加后的个位数，carry值：前一次循环中两数相加是否进位")]),s._v("\n            carry "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" l1_num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" l2_num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" carry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断是否产生进位，求和时不要忘记前两位相加时产生的carry值")]),s._v("\n            node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在链表尾部添加本次循环所得节点，num是该节点的值")]),s._v("\n            node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#node向后移动")]),s._v("\n            l1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" l1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# l1指向下一节点")]),s._v("\n            l2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" l2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# l2指向下一节点")]),s._v("\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 循环后若最高位产生了进位则在链表尾部添加一个val为1的节点")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" carry "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最后结果舍弃头节点")]),s._v("\n        head_node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head_node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head_node\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);