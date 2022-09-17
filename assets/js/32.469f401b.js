(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{403:function(r,v,_){r.exports=_.p+"assets/img/mqNodeInteract.1f15f84d.png"},487:function(r,v,_){"use strict";_.r(v);var o=_(0),t=Object(o.a)({},(function(){var r=this,v=r.$createElement,o=r._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[o("h2",{attrs:{id:"一-mq的交互雏形"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一-mq的交互雏形"}},[r._v("#")]),r._v(" 一.MQ的交互雏形")]),r._v(" "),o("blockquote",[o("p",[r._v("一发一存一消费，这是 MQ 最核心的功能需求。从技术维度来看 MQ 的通信模型，可以理解成：两次 RPC + 消息转储。")])]),r._v(" "),o("ol",[o("li",[r._v("直接利用成熟的 RPC 框架（Dubbo 或者 Thrift），实现两个接口：发消息和读消息。")]),r._v(" "),o("li",[r._v("消息放在本地内存中即可，数据结构可以用 JDK 自带的 ArrayBlockingQueue。")])]),r._v(" "),o("br"),r._v(" "),o("h2",{attrs:{id:"二-mq的节点模型"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#二-mq的节点模型"}},[r._v("#")]),r._v(" 二.MQ的节点模型")]),r._v(" "),o("ol",[o("li",[r._v("Broker（服务端）：MQ 中最核心的部分，是 MQ 的服务端，核心逻辑几乎全在这里，它为生产者和消费者提供 RPC 接口，负责消息的存储、备份和删除，以及消费关系的维护等。")]),r._v(" "),o("li",[r._v("Producer（生产者）：MQ 的客户端之一，调用 Broker 提供的 RPC 接口发送消息。")]),r._v(" "),o("li",[r._v("Consumer（消费者）：MQ 的另外一个客户端，调用 Broker 提供的 RPC 接口接收消息，同时完成消费确认。")])]),r._v(" "),o("br"),r._v(" "),o("p",[o("img",{attrs:{src:_(403),alt:"图0"}})]),r._v(" "),o("br"),r._v(" "),o("h2",{attrs:{id:"三-mq设计难点"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#三-mq设计难点"}},[r._v("#")]),r._v(" 三.MQ设计难点")]),r._v(" "),o("br"),r._v(" "),o("p",[o("strong",[r._v("难点1：RPC 通信")])]),r._v(" "),o("blockquote",[o("p",[r._v("解决的是 Broker 与 Producer 以及 Consumer 之间的通信问题。")])]),r._v(" "),o("ol",[o("li",[o("p",[r._v("直接利用成熟的 RPC 框架 Dubbo 或者 Thrift 实现即可。这样不需要考虑服务注册与发现、负载均衡、通信协议、序列化方式等一系列问题了。")])]),r._v(" "),o("li",[o("p",[r._v("自定义通信协议。你也可以基于 Netty 来做底层通信，用 Zookeeper、Euraka 等来做注册中心，然后自定义一套新的通信协议（类似 Kafka），也可以基于 AMQP 这种标准化的 MQ 协议来做实现。对比直接用 RPC 框架，这种方案的定制化能力和优化空间更大。")])])]),r._v(" "),o("br"),r._v(" "),o("p",[o("strong",[r._v("难点2：高可用设计")])]),r._v(" "),o("blockquote",[o("p",[r._v("高可用主要涉及两方面：Broker 服务的高可用、存储方案的高可用。")])]),r._v(" "),o("ol",[o("li",[o("p",[r._v("Broker 服务的高可用，只需要保证 Broker 可水平扩展进行集群部署即可，进一步通过服务自动注册与发现、负载均衡、超时重试机制、发送和消费消息时的 ack 机制来保证。")])]),r._v(" "),o("li",[o("p",[r._v("存储方案的高可用有两个思路：")]),r._v(" "),o("ol",[o("li",[r._v("参考 Kafka 的分区 + 多副本模式，但是需要考虑分布式场景下数据复制和一致性方案（类似 Zab、Raft等协议），并实现自动故障转移；")]),r._v(" "),o("li",[r._v("还可以用主流的 DB、分布式文件系统、带持久化能力的 KV 系统，它们都有自己的高可用方案。")])])])]),r._v(" "),o("br"),r._v(" "),o("p",[o("strong",[r._v("难点3：存储设计")])]),r._v(" "),o("blockquote",[o("p",[r._v("消息的存储方案是 MQ 的核心部分，可靠性保证已经在高可用设计中谈过了，可靠性要求不高的话直接用内存或者分布式缓存也可以。存这里重点说一下储的高性能如何保证？这个问题的决定因素在于存储结构的设计。")])]),r._v(" "),o("ol",[o("li",[o("p",[r._v("目前主流的方案是：追加写日志文件（数据部分） + 索引文件的方式（很多主流的开源 MQ 都是这种方式），索引设计上可以考虑稠密索引或者稀疏索引，查找消息可以利用跳转表、二份查找等，还可以通过操作系统的页缓存、零拷贝等技术来提升磁盘文件的读写性能。")])]),r._v(" "),o("li",[o("p",[r._v("如果不追求很高的性能，也可以考虑现成的分布式文件系统、KV 存储或者数据库方案。")])])]),r._v(" "),o("br"),r._v(" "),o("p",[o("strong",[r._v("难点4：消费关系管理")])]),r._v(" "),o("blockquote",[o("p",[r._v("为了支持发布-订阅的广播模式，Broker 需要知道每个主题都有哪些 Consumer 订阅了，基于这个关系进行消息投递。")])]),r._v(" "),o("ol",[o("li",[r._v("由于 Broker 是集群部署的，所以消费关系通常维护在公共存储上，可以基于 Zookeeper、Apollo 等配置中心来管理以及进行变更通知。")])]),r._v(" "),o("br"),r._v(" "),o("p",[o("strong",[r._v("难点5：高性能设计")])]),r._v(" "),o("blockquote",[o("p",[r._v("存储的高性能前面已经谈过了，当然还可以从其他方面进一步优化性能。")])]),r._v(" "),o("ol",[o("li",[r._v("比如 Reactor 网络 IO 模型、业务线程池的设计、生产端的批量发送、Broker 端的异步刷盘、消费端的批量拉取等等。")])]),r._v(" "),o("h2",{attrs:{id:"四-mq其他考量"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#四-mq其他考量"}},[r._v("#")]),r._v(" 四.MQ其他考量")]),r._v(" "),o("blockquote",[o("p",[r._v("除了以上的考量，我们还需要考虑消息数据的下面这些处理")])]),r._v(" "),o("ol",[o("li",[o("p",[r._v("消息可靠投递：通过通信逻辑和策略来保证消息能够完整的存入broker。")])]),r._v(" "),o("li",[o("p",[r._v("消息可靠消费：consumer端消费消息成功的手动ACK和自动ACK。")])]),r._v(" "),o("li",[o("p",[r._v("消息顺序性：相同key的消息如何保证顺序性的到达consumer端。")])])])])}),[],!1,null,null,null);v.default=t.exports}}]);