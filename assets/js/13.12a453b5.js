(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{619:function(t,e,a){t.exports=a.p+"assets/img/client001.8f384986.png"},620:function(t,e,a){t.exports=a.p+"assets/img/client002.df127277.png"},621:function(t,e,a){t.exports=a.p+"assets/img/client003.7f60f9b5.png"},622:function(t,e,a){t.exports=a.p+"assets/img/client004.8fcee83e.png"},664:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("🔥 写在前面：Oauth2系列配套视频地址 https://t.hk.uy/bdr8 🔥")])]),t._v(" "),s("h2",{attrs:{id:"一-概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-概念"}},[t._v("#")]),t._v(" 一.概念")]),t._v(" "),s("p",[s("strong",[t._v('客户端模式（Client Credentials Grant）指客户端以自己的名义，而不是以用户的名义，向"服务提供商"进行认证。')])]),t._v(" "),s("p",[s("strong",[t._v('严格地说，客户端模式并不属于OAuth框架所要解决的问题。在这种模式中，用户直接向客户端注册，客户端以自己的名义要求"服务提供商"提供服务，其实不存在授权问题。')]),t._v(" "),s("br")]),t._v(" "),s("h2",{attrs:{id:"二-适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-适用场景"}},[t._v("#")]),t._v(" 二.适用场景")]),t._v(" "),s("p",[s("strong",[t._v("认证服务器不提供像用户数据这样的重要资源，仅仅是有限的只读资源或者一些开放的API。")])]),t._v(" "),s("p",[s("strong",[t._v("例如使用了第三方的静态文件服务，如Google Storage或Amazon S3。这样，你的应用需要通过外部API调用并以应用本身而不是单个用户的身份来读取或修改这些资源。这样的场景就很适合使用客户端证书授权。")]),t._v(" "),s("br")]),t._v(" "),s("h2",{attrs:{id:"三-流程图与时序图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-流程图与时序图"}},[t._v("#")]),t._v(" 三.流程图与时序图")]),t._v(" "),s("p",[s("strong",[t._v("授权验证流程示意图")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(619),alt:"clipboard.png"}})]),t._v(" "),s("p",[s("strong",[t._v("A-B-C")])]),t._v(" "),s("p",[s("strong",[t._v("（A）客户端向认证服务器进行身份认证，并要求一个访问令牌。")])]),t._v(" "),s("p",[s("strong",[t._v("（B）认证服务器确认无误后，向客户端提供访问令牌。")])]),t._v(" "),s("p",[s("strong",[t._v("授权验证流程时序图")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(620),alt:"image.png"}}),t._v(" "),s("br")]),t._v(" "),s("h2",{attrs:{id:"四-流程与-参数详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-流程与-参数详解"}},[t._v("#")]),t._v(" 四.流程与 参数详解")]),t._v(" "),s("p",[s("strong",[t._v("A步骤中，客户端发出的HTTP请求，包含以下参数：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("参数名称")])]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("描述")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("grant_type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('表示授权类型，此处的值固定为"client_credentials"，必选项。')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("client_id")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端id")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("client_secret")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端密码")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("scope")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("可选。请求可能会有一个或多个scope值。授权服务器会把客户端请求的范围(scope)展示给用户看。")])])])]),t._v(" "),s("p",[s("strong",[t._v("B步骤中，认证服务器向客户端发送访问令牌")])]),t._v(" "),s("p",[t._v('HTTP/1.1 200 OK        Content-Type: application/json;charset=UTF-8        Cache-Control: no-store        Pragma: no-cache       {          "access_token":"2YotnFZFEjr1zCsicMWpAA",          "token_type":"example",          "expires_in":3600,          "example_parameter":"example_value"}\n'),s("br")]),t._v(" "),s("h2",{attrs:{id:"五-实例演示解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五-实例演示解析"}},[t._v("#")]),t._v(" 五.实例演示解析")]),t._v(" "),s("p",[t._v("1.获取token")]),t._v(" "),s("p",[t._v("http://localhost:8080/oauth/token")]),t._v(" "),s("p",[s("img",{attrs:{src:a(621),alt:"image.png"}})]),t._v(" "),s("p",[s("strong",[t._v("2. 拿着token访问资源")])]),t._v(" "),s("p",[s("a",{attrs:{href:"http://localhost:8080/oauth2/hello?access_token=eb679438-3d6f-472c-b219-8ff33eee934b",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/oauth2/hello?access_token=eb679438-3d6f-472c-b219-8ff33eee934b"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:a(622),alt:"image.png"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);