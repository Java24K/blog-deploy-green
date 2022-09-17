(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{510:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一-定义注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-定义注解"}},[t._v("#")]),t._v(" 一.定义注解")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("概念：一个注解准确意义上来说，只不过是一种特殊的注释而已，如果没有解析它的代码，它可能连注释都不如。通过 @interface 关键字进行定义。")])]),t._v(" "),a("li",[a("p",[t._v("举例：")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 创建一个名字为 TestAnnotaion 的注解\npublic @interface TestAnnotation { }\n")])])]),a("h2",{attrs:{id:"二-应用注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-应用注解"}},[t._v("#")]),t._v(" 二.应用注解")]),t._v(" "),a("ul",[a("li",[t._v("举例：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// test类加上@TestAnnotation，使用上面定义的注解 \n@TestAnnotation public class Test { }\n")])])]),a("h2",{attrs:{id:"三-解析注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-解析注解"}},[t._v("#")]),t._v(" 三.解析注解")]),t._v(" "),a("ul",[a("li",[t._v("解析注解方式有两种：一种是编译期直接的扫描，一种是运行期反射（根据类反射得到方法上注解）。可以通过AOP切面对注解进行统一操作添加处理逻辑")])]),t._v(" "),a("h2",{attrs:{id:"四-java注解与属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-java注解与属性"}},[t._v("#")]),t._v(" 四.JAVA注解与属性")]),t._v(" "),a("h3",{attrs:{id:"java元注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java元注解"}},[t._v("#")]),t._v(" JAVA元注解")]),t._v(" "),a("ul",[a("li",[t._v("定义：所谓元注解其实就是可以注解到别的注解上的注解,被注解的注解称之为组合注解,组合注解具备其上元注解的功能。java有四个元注解，如下所示。")])]),t._v(" "),a("ol",[a("li",[t._v("@Target：注解的作用目标，其中ANNOTATION_TYPE 用于注解类型声明即注解注解。")])]),t._v(" "),a("p",[a("code"),a("strong",[t._v("@Target(ElementType.TYPE)")]),t._v("   //接口、类、枚举、注解")]),t._v(" "),a("p",[a("code"),a("strong",[t._v("@Target(ElementType.FIELD)")]),t._v(" //字段、枚举的常量")]),t._v(" "),a("p",[a("code"),a("strong",[t._v("@Target(ElementType.METHOD)")]),t._v(" //方法")]),t._v(" "),a("p",[a("code"),a("strong",[t._v("@Target(ElementType.PARAMETER)")]),t._v(" //方法参数")]),t._v(" "),a("p",[a("code"),a("strong",[t._v("@Target(ElementType.CONSTRUCTOR)")]),t._v("  //构造函数")]),t._v(" "),a("p",[a("code"),a("strong",[t._v("@Target(ElementType.LOCAL_VARIABLE)")]),t._v("//局部变量")]),t._v(" "),a("p",[a("code"),a("strong",[t._v("@Target(ElementType.ANNOTATION_TYPE)")]),t._v("//注解")]),t._v(" "),a("p",[a("code"),a("strong",[t._v("@Target(ElementType.PACKAGE)")]),t._v(" ///包")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("@Retention：注解的保留位置")])]),t._v(" "),a("p",[a("code"),a("strong",[t._v("@Retention(RetentionPolicy.SOURCE)")]),t._v("   //注解仅存在于源码中，在class字节码文件中不包含")]),t._v(" "),a("p",[a("code"),a("strong",[t._v("@Retention(RetentionPolicy.CLASS)")]),t._v("     // 默认的保留策略，注解会在class字节码文件中存在，但运行时无法获得，")]),t._v(" "),a("p",[a("code"),a("strong",[t._v("@Retention(RetentionPolicy.RUNTIME)")]),t._v("  // 注解会在class字节码文件中存在，在运行时可以通过反射获取到")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("@Documented：注解是否应当被包含在 JavaDoc 文档中")])]),t._v(" "),a("li",[a("p",[t._v("@Inherited：是否允许子类继承该注解")])])]),t._v(" "),a("h3",{attrs:{id:"java内置注解举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java内置注解举例"}},[t._v("#")]),t._v(" JAVA内置注解举例")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("@Override 伪代码,表示重写(当然不写也可以)。")])]),t._v(" "),a("li",[a("p",[t._v("@Deprecated 用于表示某个元素（类、方法等）已过时。")])]),t._v(" "),a("li",[a("p",[t._v("@SuppressWarnings 用于抑制编译器产生警告信息。")])]),t._v(" "),a("li",[a("p",[t._v("@FunctionalInterface 表示是函数式接口，接口只能有一个抽象方法，多个则会报错。")])])]),t._v(" "),a("h3",{attrs:{id:"java注解的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java注解的属性"}},[t._v("#")]),t._v(" JAVA注解的属性")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("注解的成员变量在注解的定义中以“无形参的方法”形式来声明")])]),t._v(" "),a("li",[a("p",[t._v("注解中属性可以有默认值，默认值需要用 default 关键值指定。")])])]),t._v(" "),a("h3",{attrs:{id:"java自动定义注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java自动定义注解"}},[t._v("#")]),t._v(" JAVA自动定义注解")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 定义注解\n@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface TestAnnotation {     \n    int id();     \n    String msg(); \n}\n// 使用注解\n@TestAnnotation(id=3, msg="hello annotation")\npublic class Test {}\n')])])]),a("h2",{attrs:{id:"五-最后总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-最后总结"}},[t._v("#")]),t._v(" 五.最后总结")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("注解定义 是 基本\n\n注解拦截 靠 切面\n\n注解提取 用 反射\n\n注解解析 看 业务\n")])])]),a("blockquote",[a("p",[t._v("文章参考：")])]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/jianjiaqqq001/article/details/73440822",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/jianjiaqqq001/article/details/73440822"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/a692150d625c",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/a692150d625c"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000009756015",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000009756015"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=s.exports}}]);