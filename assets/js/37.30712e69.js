(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{490:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"一-http调用traceid生成使用方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-http调用traceid生成使用方案"}},[t._v("#")]),t._v(" 一.Http调用traceId生成使用方案")]),t._v(" "),r("h3",{attrs:{id:"方案描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方案描述"}},[t._v("#")]),t._v(" 方案描述")]),t._v(" "),r("ol",[r("li",[t._v("加入统一filter，设置traceId到MDC即可，MDC无需清理。")]),t._v(" "),r("li",[t._v("下次请求时规则：若request中存在X-Request-Id则获取作为traceId，若没有，则生成UUID作为traceId。")])]),t._v(" "),r("h3",{attrs:{id:"具体实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[t._v("#")]),t._v(" 具体实现")]),t._v(" "),r("ol",[r("li",[t._v("添加过滤器，查询request是否存在traceId，存在使用，不存在通过UUID生成。")])]),t._v(" "),r("ul",[r("li",[t._v("定义过滤器")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('public class TraceFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {\n        boolean bInsertMDC = insertMDC(httpServletRequest);\n        try {\n            filterChain.doFilter(httpServletRequest, httpServletResponse);\n        } finally {\n            MDC.remove("traceId");\n        }\n    }\n\n    private boolean insertMDC(HttpServletRequest httpServletRequest) {\n        String requestTraceId = httpServletRequest.getHeader("traceId");\n        if(StringUtils.isNotEmpty(requestTraceId)){\n            MDC.put("traceId", requestTraceId);\n        }else{\n            UUID uuid = UUID.randomUUID();\n            String traceId = uuid.toString().replace("-", "");\n            MDC.put("traceId", traceId);\n        }\n        return true;\n    }\n}\n')])])]),r("ul",[r("li",[t._v("添加过滤器")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('@Configuration\npublic class FilterConfig {\n\n    @Bean\n    public FilterRegistrationBean traceFilterRegistration() {\n        FilterRegistrationBean registration = new FilterRegistrationBean();\n        registration.setFilter(new TraceFilter());\n        registration.addUrlPatterns("/*");\n        registration.addInitParameter("paramName", "paramValue");\n        registration.setName("TraceFilter");\n        registration.setOrder(0);\n        return registration;\n    }\n}\n')])])]),r("ol",{attrs:{start:"2"}},[r("li",[t._v("在调用端发起http请求时，将traceId写到header中")])]),t._v(" "),r("p",[r("a",{attrs:{href:"/OKHttpClientUtils.java"}},[t._v("OKHttpClientUtils.java")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"二-dubbo调用traceid生成方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-dubbo调用traceid生成方案"}},[t._v("#")]),t._v(" 二.Dubbo调用traceId生成方案")]),t._v(" "),r("h3",{attrs:{id:"消费端更改"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消费端更改"}},[t._v("#")]),t._v(" 消费端更改")]),t._v(" "),r("ol",[r("li",[t._v("消费端新增一个Filter类")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('@Activate(group = {Constants.CONSUMER, Constants.PROVIDER} , order = -9999)\npublic class GlobalTraceFilter implements Filter {\n\n    @Override\n    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {\n        String traceId = invocation.getAttachment("traceId");\n        if(!StringUtils.isBlank(traceId)) {\n            RpcContext.getContext().setAttachment("traceId",traceId);\n        }else { // 第一次发起调用\n            RpcContext.getContext().setAttachment("traceId", UUID.randomUUID().toString());\n        }\n        return invoker.invoke(invocation);\n    }\n}\n')])])]),r("ol",{attrs:{start:"2"}},[r("li",[t._v("新增配置文件src\\main\\resources\\META-INF\\dubbo\\com.alibaba.dubbo.rpc.Filter并编辑内容")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("dubboRpcFilter=com.alibaba.dubbo.rpc.filter.TraceFilter\n")])])]),r("ol",{attrs:{start:"3"}},[r("li",[t._v("修改consumer.xml，对生产者应用此过滤器")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('\x3c!-- 提供方调用过程缺省拦截器，将拦截所有service --\x3e\n\t<dubbo:provider timeout="30000" filter="dubboRpcFilter"/>\n')])])]),r("h3",{attrs:{id:"生产端更改"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生产端更改"}},[t._v("#")]),t._v(" 生产端更改")]),t._v(" "),r("ol",[r("li",[t._v("生产端自定义拦截器中获取traceId，放入MDC。")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('public class ContextFilter implements Filter\n{\n    @Override\n    public Result invoke(Invoker<?> invoker, Invocation invocation)\n        throws RpcException\n    {\n        String traceId = RpcContext.getContext().getAttachment("traceId");\n        if (StrKit.notBlank(traceId)) {\n        \tMDC.put("traceId", traceId);\n        }\n    \t\n    \tResult result = invoker.invoke(invocation);\n        return result;\n    }\n\n\n}\n')])])]),r("ol",{attrs:{start:"2"}},[r("li",[t._v("新增配置文件src\\main\\resources\\META-INF\\dubbo\\com.alibaba.dubbo.rpc.Filter并编辑内容")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("dubboContextFilter=com.alibaba.dubbo.rpc.interceptor.ContextFilter\n")])])]),r("ol",{attrs:{start:"3"}},[r("li",[t._v("修改provider.xml，对生产者应用此拦截器")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('\x3c!-- 提供方调用过程缺省拦截器，将拦截所有service --\x3e\n\t<dubbo:provider filter="dubboContextFilter"/>\n')])])]),r("blockquote",[r("p",[t._v("备注：无论是生产端还是消费端都要修改log4j文件，输出格式中加上traceId变量（%X{traceId}），这样才能在日志中看到traceId。")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"三-通过集成框架生成traceid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三-通过集成框架生成traceid"}},[t._v("#")]),t._v(" 三.通过集成框架生成traceId")]),t._v(" "),r("ol",[r("li",[t._v("集成Skywalking实现链路追踪")]),t._v(" "),r("li",[t._v("集成zipkin实现链路追踪")])]),t._v(" "),r("blockquote",[r("p",[t._v("集成与使用请自行谷歌搜索")])])])}),[],!1,null,null,null);e.default=n.exports}}]);