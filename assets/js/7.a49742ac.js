(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{406:function(t,s,e){t.exports=e.p+"assets/img/zset.14883b86.jpg"},407:function(t,s,e){t.exports=e.p+"assets/img/skiplist01.4a2f1e68.png"},408:function(t,s,e){t.exports=e.p+"assets/img/skiplist02.c3f2fe20.png"},409:function(t,s,e){t.exports=e.p+"assets/img/skiplist03.c15d2a51.jpg"},410:function(t,s,e){t.exports=e.p+"assets/img/skiplist04.42660ffd.png"},411:function(t,s,e){t.exports=e.p+"assets/img/redisHash.006145fd.png"},412:function(t,s,e){t.exports=e.p+"assets/img/bigData.14cbbfa6.png"},492:function(t,s,e){"use strict";e.r(s);var r=e(0),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"一-业务场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-业务场景"}},[t._v("#")]),t._v(" 一.业务场景")]),t._v(" "),r("blockquote",[r("p",[t._v("排行榜业务场景比较多如 微信步数排行、新浪热门话题排行、王者荣耀战绩排行等。")])]),t._v(" "),r("ol",[r("li",[t._v("一般应用于大量数据的排行，如top10。")]),t._v(" "),r("li",[t._v("对实时性要求相对较高，如当前top10.")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"二-排行榜实现方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-排行榜实现方式"}},[t._v("#")]),t._v(" 二.排行榜实现方式")]),t._v(" "),r("ol",[r("li",[t._v("通过数据库实现，在小数据量的场景中数据库order by可以实现。")]),t._v(" "),r("li",[t._v("通过Redis实现，大数据量的排行用Redis的sorted set 数据结构。")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"三-redis的sorted-set介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三-redis的sorted-set介绍"}},[t._v("#")]),t._v(" 三.Redis的Sorted Set介绍")]),t._v(" "),r("h3",{attrs:{id:"存储结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#存储结构"}},[t._v("#")]),t._v(" 存储结构")]),t._v(" "),r("blockquote",[r("p",[t._v("zset底层的存储结构包括ziplist或skiplist，在同时满足以下两个条件的时候使用ziplist，其他时候使用skiplist，两个条件如下：")])]),t._v(" "),r("ul",[r("li",[t._v("有序集合保存的元素数量小于128个")]),t._v(" "),r("li",[t._v("有序集合保存的所有元素的长度小于64字节")])]),t._v(" "),r("h3",{attrs:{id:"ziplist"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ziplist"}},[t._v("#")]),t._v(" ZipList")]),t._v(" "),r("p",[t._v("ziplist作为zset的存储结构时，格式如下图。紧挨着的是元素memeber和分值socore，整体数据是有序格式。")]),t._v(" "),r("p",[r("img",{attrs:{src:e(406),alt:"图0"}})]),t._v(" "),r("br"),t._v(" "),r("h3",{attrs:{id:"skiplist"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#skiplist"}},[t._v("#")]),t._v(" SkipList")]),t._v(" "),r("blockquote",[r("p",[t._v("数据量比较大时Redis 的 zset 是一个复合结构由 hash 和 skiplist组成。")])]),t._v(" "),r("br"),t._v(" "),r("p",[r("img",{attrs:{src:e(407),alt:"图1"}})]),t._v(" "),r("br"),t._v(" "),r("ol",[r("li",[r("p",[t._v("一方面它需要一个 hash 结构来存储 member 和 score 的对应关系，键为成员，值为分值。")])]),t._v(" "),r("li",[r("p",[t._v("另一方面「跳跃列表」提供按照 score 来排序成员member的功能。")])])]),t._v(" "),r("p",[r("img",{attrs:{src:e(408),alt:"图2"}})]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"四-redis实现排行榜设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四-redis实现排行榜设计"}},[t._v("#")]),t._v(" 四.Redis实现排行榜设计")]),t._v(" "),r("blockquote",[r("p",[t._v("我们就以微信步数排行榜微例子")])]),t._v(" "),r("br"),t._v(" "),r("h3",{attrs:{id:"如何存储"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何存储"}},[t._v("#")]),t._v(" 如何存储")]),t._v(" "),r("blockquote",[r("p",[t._v("2021-02-27这一天的排行榜用skiplist存储")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(409),alt:"图4"}})]),t._v(" "),r("br"),t._v(" "),r("blockquote",[r("p",[t._v("如果score步数相同会按照member的字典顺序排序")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(410),alt:"图4"}})]),t._v(" "),r("br"),t._v(" "),r("h3",{attrs:{id:"涉及命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#涉及命令"}},[t._v("#")]),t._v(" 涉及命令")]),t._v(" "),r("ol",[r("li",[t._v("添加 member 语法：zadd key score member [score member ...]")]),t._v(" "),r("li",[t._v("增加 member 的 score 语法：zincrby key increment member")]),t._v(" "),r("li",[t._v("获取 member 排名 : 从低到高排名 zrank key member，从高到低排名zrevrank key member。")]),t._v(" "),r("li",[t._v("返回指定排名范围内的 member：zrange/zrevrange key start end [withscores] ，当带上withsocres这个参数之后，会返回对应 member 的 score。")])]),t._v(" "),r("br"),t._v(" "),r("h3",{attrs:{id:"排行榜个人视角"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#排行榜个人视角"}},[t._v("#")]),t._v(" 排行榜个人视角")]),t._v(" "),r("blockquote",[r("p",[t._v("微信步数排行榜每个人看到的都不相同")])]),t._v(" "),r("ul",[r("li",[t._v("我们只需要在key上加上用户名作为区分即可,如 sprt:ranking:why:20210227")])]),t._v(" "),r("br"),t._v(" "),r("h3",{attrs:{id:"微信头像和点赞数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微信头像和点赞数"}},[t._v("#")]),t._v(" 微信头像和点赞数")]),t._v(" "),r("blockquote",[r("p",[t._v("微信步数排行榜都有微信头像和点赞数量，这两个字段如何加上去?")])]),t._v(" "),r("ul",[r("li",[t._v("我们可以用hash进行存储，如在why的排行榜中jay的点赞、头像，key的设计可以是sprt:ranking:why:20210227，key和value如下图：")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(411),alt:"图5"}})]),t._v(" "),r("ul",[r("li",[t._v("我们通过命令 hincrby sport:ranking:why:20210227:jay likeNum 500 对点赞数进行增加。")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"四-排行榜问题扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四-排行榜问题扩展"}},[t._v("#")]),t._v(" 四.排行榜问题扩展")]),t._v(" "),r("br"),t._v(" "),r("h3",{attrs:{id:"最近七天排行榜"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#最近七天排行榜"}},[t._v("#")]),t._v(" 最近七天排行榜")]),t._v(" "),r("blockquote",[r("p",[t._v("求why同学微信步数最近七天排行榜，用并集")])]),t._v(" "),r("ul",[r("li",[t._v("使用命令 zunionstore destination numkeys key [key ...] [weights weight [weight ...]] [aggregate sum|min|max] 获取并集")])]),t._v(" "),r("blockquote",[r("p",[t._v("求why同学最近七天里都上传微信步数的同学的排行榜，用交集")])]),t._v(" "),r("ul",[r("li",[t._v("使用命令 zinterstore destination numkeys key [key ...] [weights weight [weight ...]] [aggregate sum|min|max] 获取交集")])]),t._v(" "),r("br"),t._v(" "),r("h3",{attrs:{id:"亿级用户排行榜"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#亿级用户排行榜"}},[t._v("#")]),t._v(" 亿级用户排行榜")]),t._v(" "),r("blockquote",[r("p",[t._v("像王者荣耀这样的上亿用户做排行榜该怎么做？")])]),t._v(" "),r("ol",[r("li",[t._v("使用分治的思想，王者排行分为8个段位，分别是青铜、白银、黄金、铂金、钻石、星耀、最强王者和荣耀王者。")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(412),alt:"图6"}})]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("这样在计算的时候why哥的排名就是 x+y+why哥在星耀的排名。当然8个桶太少，我们还可以分，8个段位每个段位又有不同的级别，每个级别都可以是一个桶。")])]),t._v(" "),r("br"),t._v(" "),r("blockquote",[r("p",[t._v("参考：")])]),t._v(" "),r("ul",[r("li",[t._v("https://segmentfault.com/a/1190000039320528")]),t._v(" "),r("li",[t._v("https://www.jianshu.com/p/fb7547369655")])])])}),[],!1,null,null,null);s.default=a.exports}}]);