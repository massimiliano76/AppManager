(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{425:function(t,e,r){"use strict";r.r(e);var a=r(25),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"应用组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用组件"}},[t._v("#")]),t._v(" 应用组件")]),t._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[t._v("目录")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#什么是应用组件"}},[t._v("什么是应用组件？")])]),r("li",[r("a",{attrs:{href:"#为什么被am阻止的组件没有被其他相关应用检测到"}},[t._v("为什么被AM阻止的组件没有被其他相关应用检测到？")])]),r("li",[r("a",{attrs:{href:"#通过其他应用或工具禁用的组件是否在-am-中也被禁用"}},[t._v("通过其他应用或工具禁用的组件是否在 AM 中也被禁用？")])]),r("li",[r("a",{attrs:{href:"#被-am-禁用的组件同时也被其他应用或工具禁用-会发生什么"}},[t._v("被 AM 禁用的组件同时也被其他应用或工具禁用，会发生什么？")])]),r("li",[r("a",{attrs:{href:"#全局拦截组件"}},[t._v("全局拦截组件")])]),r("li",[r("a",{attrs:{href:"#如何取消阻止被一键操作或批量操作阻止的追踪器"}},[t._v("如何取消阻止被一键操作或批量操作阻止的追踪器？")])])])]),r("p")]),t._v(" "),r("h2",{attrs:{id:"什么是应用组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是应用组件"}},[t._v("#")]),t._v(" 什么是应用组件？")]),t._v(" "),r("p",[t._v("活动、服务、广播接收器(也称接收器)和内容提供者(也称提供者)合称为应用组件。 更严格地说，它们都继承了"),r("code",[t._v("ComponentInfo")]),t._v("类。")]),t._v(" "),r("h2",{attrs:{id:"为什么被am阻止的组件没有被其他相关应用检测到"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么被am阻止的组件没有被其他相关应用检测到"}},[t._v("#")]),t._v(" 为什么被AM阻止的组件没有被其他相关应用检测到？")]),t._v(" "),r("p",[t._v("这是因为我使用的阻止方法。 这个方法叫做 "),r("a",{attrs:{href:"https://carteryagemann.com/pages/android-intent-firewall.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("故意防火墙"),r("OutboundLink")],1),t._v(" (IFW) 兼容 "),r("a",{attrs:{href:"https://github.com/tuyafeng/Watt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watt"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://github.com/lihenggui/blocker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blocker"),r("OutboundLink")],1),t._v("。 "),r("a",{attrs:{href:"https://www.myandroidtools.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("MyAndroidTool"),r("OutboundLink")],1),t._v(" (MAT) 支持IFW，但它使用不同的格式。 还有其他阻止应用组件的方法，例如 "),r("em",[t._v("pm")]),t._v(" and "),r("a",{attrs:{href:"https://github.com/RikkaApps/Shizuku",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shizuku"),r("OutboundLink")],1),t._v("。 如果应用组件被使用后一种方法阻止， 受影响的应用可以识别它，并且可以解除屏蔽它，因为它可以完全访问它自己的组件。 许多欺骗性应用实际上利用了这个功能，以保持追踪器组件被解除屏蔽。")]),t._v(" "),r("h2",{attrs:{id:"通过其他应用或工具禁用的组件是否在-am-中也被禁用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通过其他应用或工具禁用的组件是否在-am-中也被禁用"}},[t._v("#")]),t._v(" 通过其他应用或工具禁用的组件是否在 AM 中也被禁用？")]),t._v(" "),r("p",[r("strong",[t._v("不会。")]),t._v(" 但被 Android 系统或其他工具拦截的组件会在"),r("RouterLink",{attrs:{to:"/zh-CN/guide/app-details-page.html#颜色代码含义"}},[t._v(" 应用详情 ")]),t._v("页（在组件页内）显示。 从版本 2.5.12 起，你可在"),r("RouterLink",{attrs:{to:"/zh-CN/guide/settings-page.html#导入现有规则"}},[t._v(" 设置 ")]),t._v("中导入这些规则。 由于无法区分是由其他软件还是系统拦截的组件，故应当仔细选择和使用这些应用。")],1),t._v(" "),r("h2",{attrs:{id:"被-am-禁用的组件同时也被其他应用或工具禁用-会发生什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#被-am-禁用的组件同时也被其他应用或工具禁用-会发生什么"}},[t._v("#")]),t._v(" 被 AM 禁用的组件同时也被其他应用或工具禁用，会发生什么？")]),t._v(" "),r("p",[t._v("AM 通过 "),r("a",{attrs:{href:"https://carteryagemann.com/pages/android-intent-firewall.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Intent Firewall"),r("OutboundLink")],1),t._v("（IFW）来拦截组件。 如果这些组件是通过 "),r("em",[t._v("pm")]),t._v(" 或 "),r("a",{attrs:{href:"https://github.com/RikkaApps/Shizuku",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shizuku"),r("OutboundLink")],1),t._v(" 方法拦截的，则它们不会被取消拦截后并再次拦截。 如果你在 "),r("RouterLink",{attrs:{to:"/zh-CN/guide/app-details-page.html"}},[t._v("应用详情")]),t._v(" 页取消拦截组件，则组件会恢复为默认状态，即根据相应应用的 manifest 文件，通过 IFW 和 "),r("em",[t._v("pm")]),t._v(" 方法拦截或取消拦截组件。 然而，被 [MyAndroidTools（MAT）通过 IFW 方法拦截的组件不会被 AM 取消拦截。 要解决此问题，你可以先在 AM 的 "),r("RouterLink",{attrs:{to:"/zh-CN/guide/settings-page.html#导入现有规则"}},[t._v("设置")]),t._v(" 内导入相应的配置以清除 MAT 的配置。 注意，此选项仅可用于 2.5.12 及之后的版本。")],1),t._v(" "),r("h2",{attrs:{id:"全局拦截组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全局拦截组件"}},[t._v("#")]),t._v(" 全局拦截组件")]),t._v(" "),r("p",[t._v("当您在 "),r("RouterLink",{attrs:{to:"/zh-CN/guide/app-details-page.html"}},[t._v("应用程序详细信息")]),t._v(" 页面中阻止一个组件时，默认情况下不应用。 只有当您在右上角菜单中使用 "),r("em",[t._v("应用规则")]),t._v(" 选项应用阻止时，它才会被应用。 如果您启用了 "),r("em",[t._v("全局组件阻止")]),t._v("，阻止将在您阻止组件后立即应用。 但是，如果您选择阻止追踪器，无论设置如何，阻止都会自动应用。 您也可以通过点击_"),r("strong",[t._v("APP详情")]),t._v("页面中同一菜单中的_删除规则_来移除应用程序的阻止。 由于默认行为让您更多地控制应用，最好保持 "),r("em",[t._v("全局组件阻止")]),t._v(" 选项。")],1),r("p"),t._v(" "),r("p",[r("em",[t._v("另请参阅。"),r("RouterLink",{attrs:{to:"/zh-CN/guide/settings-page.html#默认开启-禁用组件-选项"}},[t._v("全局组件阻止")]),t._v("。")],1)]),t._v(" "),r("h2",{attrs:{id:"如何取消阻止被一键操作或批量操作阻止的追踪器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何取消阻止被一键操作或批量操作阻止的追踪器"}},[t._v("#")]),t._v(" 如何取消阻止被一键操作或批量操作阻止的追踪器？")]),t._v(" "),r("p",[t._v("某些应用可能由于依赖于被应用管理器阻止的追踪器组件而出现错误。 从 v2.5.12版本开始，有一个选项可以解除在 "),r("RouterLink",{attrs:{to:"/zh-CN/guide/one-click-ops-page.html"}},[t._v("1-click Ops")]),t._v(" 页面中的追踪器组件。 但是，在以前的版本中没有这种选择。 要解除阻止这些跟踪，请先前往错误应用的 "),r("RouterLink",{attrs:{to:"/zh-CN/guide/app-details-page.html"}},[t._v("应用详细信息")]),t._v(" 页面。 然后切换到 "),r("em",[t._v("活动")]),t._v(" 标签，点击 "),r("em",[t._v("删除规则")]),t._v(" 在右上角菜单中的选项。 所有与应用组件相关的阻止规则将立即删除。 或者，如果你找到了引起这个问题的组件， 您可以通过点击组件名称旁边的 "),r("em",[t._v("解除阻止")]),t._v(" 按钮来解锁组件. 如果您在设置中启用了 "),r("em",[t._v("全局组件阻止")]),t._v(" 首先禁用 "),r("em",[t._v("删除规则")]),t._v(" 启用时将不可见。")],1),t._v(" "),r("p",[t._v("如果您安装了 "),r("strong",[t._v("Google Play 服务")]),t._v(" ("),r("code",[t._v("com.google.android.gms")]),t._v(")，解锁以下 "),r("RouterLink",{attrs:{to:"/zh-CN/guide/app-details-page.html#服务"}},[t._v("服务")]),t._v(" 可能解决问题：")],1),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Ad Request Broker Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.AdRequestBrokerService")])]),t._v(" "),r("li",[r("strong",[t._v("Cache Broker Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.cache.CacheBrokerService")])]),t._v(" "),r("li",[r("strong",[t._v("Gservices Value Broker Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.GservicesValueBrokerService")])]),t._v(" "),r("li",[r("strong",[t._v("Advertising Id Notification Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.identifier.service.AdvertisingIdNotificationService")])]),t._v(" "),r("li",[r("strong",[t._v("Advertising Id Service")]),r("br"),t._v(" "),r("code",[t._v(".ads.identifier.service.AdvertisingIdService")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);