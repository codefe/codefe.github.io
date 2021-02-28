let db = [
    {
        id: 11,
        title: 'HTML5',
        child: [
            {
                id: 1100,
                title: '基础',
                child: [
                    {
                        id: 110000,
                        title: '拖放',
                        desc: '拖放（Drag 和 drop）是 HTML5 标准的组成部分。拖放是一种常见的特性，即抓取对象以后拖到另一个位置。',
                        child: [
                            {
                                id:1,
                                title: '拖放(Drag 和 Drop)各属性生命周期',
                                url: 'html5-drag-1'
                            },
                            {
                                id:2,
                                title: '设置元素为可拖放',
                                url: 'html5-drag-2'
                            },
                            {
                                id:3,
                                title: '拖动什么 - ondragstart 和 setData()',
                                url: 'html5-drag-3'
                            },
                            {
                                id:4,
                                title: '放到何处 - ondragover',
                                url: 'html5-drag-4'
                            },
                            {
                                id:5,
                                title: '进行放置 - ondrop',
                                url: 'html5-drag-5'
                            }
                        ]
                    },
                    {
                        id: 110001,
                        title: '应用程序缓存',
                        desc: '使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。这意味着，你可以在没有网络连接的情况下进行访问。应用程序缓存为应用带来三个优势：<br>1.离线浏览 - 用户可在应用离线时使用它们;<br>2.速度 - 已缓存资源加载得更快;<br>3.减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。',
                        child: [
                            {
                                id:1,
                                title: 'Manifest 基础',
                                url: 'html5-manifest-1'
                            },
                            {
                                id:2,
                                title: 'Manifest 文件',
                                url: 'html5-manifest-2'
                            }
                        ]
                    },
                    {
                        id: 110002,
                        title: 'Caches',
                        desc: 'caches 这个 API 是针对 Request Response 的。caches 一般结合 Service Worker 使用，因为请求级别的缓存与具有页面拦截功能的 Service Worker 最配。',
                        child: [
                            {
                                id:1,
                                title: '检查浏览器是否支持Cache API',
                                url: 'html5-caches-1'
                            },
                            {
                                id:2,
                                title: '创建一个缓存对象',
                                url: 'html5-caches-2'
                            },
                            {
                                id:3,
                                title: '添加缓存数据',
                                url: 'html5-caches-3'
                            },
                            {
                                id:4,
                                title: '访问缓存数据',
                                url: 'html5-caches-4'
                            },
                            {
                                id:5,
                                title: '删除缓存里的数据',
                                url: 'html5-caches-5'
                            },
                            {
                                id:6,
                                title: '获取现有的缓存里的缓存名称',
                                url: 'html5-caches-6'
                            },
                            {
                                id:7,
                                title: '删除一个缓存对象',
                                url: 'html5-caches-7'
                            }
                        ]
                    },
                    {
                        id: 110003,
                        title: '本地存储',
                        flag: 'recommend,hot',
                        icon: './app/img/edu/storage.jpg',
                        desc: 'HTML 本地存储：优于 cookies。通过本地存储（Local Storage），web 应用程序能够在用户浏览器中对数据进行本地的存储。HTML 本地存储提供了两个在客户端存储数据的对象：<br>1. window.localStorage - 存储没有截止日期的数据;<br>2. window.sessionStorage - 针对一个 session 来存储数据（当关闭浏览器标签页时数据会丢失）',
                        child: [
                            {
                                id: 1,
                                title: 'localStorage',
                                url: 'html5-storage-1'
                            },
                            {
                                id: 2,
                                title: 'sessionStorage',
                                url: 'html5-storage-2'
                            }
                        ]
                    },
                    {
                        id: 110004,
                        title: 'Workers',
                        flag: 'recommend,hot',
                        icon: './app/img/edu/worker.jpg',
                        desc: 'Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很流畅，不会被阻塞或拖慢。',
                        child: [
                            {
                                id: 1,
                                title: 'Worker使用注意点',
                                url: 'html5-workers-1'
                            },
                            {
                                id: 2,
                                title: 'Worker主线程用法',
                                url: 'html5-workers-2'
                            },
                            {
                                id: 3,
                                title: 'Worker线程用法',
                                url: 'html5-workers-3'
                            },
                            {
                                id: 4,
                                title: 'Worker加载脚本',
                                url: 'html5-workers-4'
                            },
                            {
                                id: 5,
                                title: 'Worker错误处理',
                                url: 'html5-workers-5'
                            },
                            {
                                id: 6,
                                title: '关闭Worker',
                                url: 'html5-workers-6'
                            },
                            {
                                id: 7,
                                title: 'Worker数据通信',
                                url: 'html5-workers-7'
                            },
                            {
                                id: 8,
                                title: '同页面的Web Worker',
                                url: 'html5-workers-8'
                            },
                            {
                                id: 9,
                                title: 'Worker线程完成轮询',
                                url: 'html5-workers-9'
                            },
                            {
                                id: 10,
                                title: 'Worker 新建 Worker',
                                url: 'html5-workers-10'
                            },
                            {
                                id: 11,
                                title: 'Worker API',
                                url: 'html5-workers-11'
                            }
                        ]
                    },
                    {
                        id: 110005,
                        title: 'Sockets',
                        flag: 'recommend,hot',
                        icon: './app/img/edu/websocket.jpg',
                        desc: 'WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。',
                        child: [
                            {
                                id: 1,
                                title: 'WebSocket介绍',
                                url: 'html5-socket-1'
                            },
                            {
                                id: 2,
                                title: '客户端的示例',
                                url: 'html5-socket-2'
                            },
                            {
                                id: 3,
                                title: '客户端的API',
                                url: 'html5-socket-3'
                            },
                            {
                                id: 4,
                                title: '服务端的实现',
                                url: 'html5-socket-4'
                            }
                        ]
                    },
                    {
                        id: 110006,
                        title: 'Fetch',
                        flag: 'recommend,hot',
                        icon: './app/img/edu/fetch.jpg',
                        desc: 'XMLHttpRequest来完成ajax有些老而过时了。fetch()能让我们完成类似 XMLHttpRequest (XHR) 提供的ajax功能。它们之间的主要区别是，Fetch API 使用了 Promises，它让接口更简单、简洁，避免了回调的复杂性，省去了使用复杂的 XMLHttpRequest API。',
                        child: [
                            {
                                id: 1,
                                title: '基本Fetch用法',
                                url: 'html5-fetch-1'
                            },
                            {
                                id: 2,
                                title: '返回数据对象的元数据(Metadata)',
                                url: 'html5-fetch-2'
                            },
                            {
                                id: 3,
                                title: '响应的对象Response类型',
                                url: 'html5-fetch-3'
                            },
                            {
                                id: 4,
                                title: '串联Promises',
                                url: 'html5-fetch-4'
                            },
                            {
                                id: 5,
                                title: '用fetch执行表单数据提交',
                                url: 'html5-fetch-5'
                            },
                            {
                                id: 6,
                                title: '在Fetch请求里发送用户身份凭证信息',
                                url: 'html5-fetch-6'
                            },
                            {
                                id: 14,
                                title: 'POST请求',
                                url: 'html5-fetch-14'
                            },
                            {
                                id: 7,
                                title: '提交JSON数据',
                                url: 'html5-fetch-7'
                            },
                            {
                                id: 8,
                                title: '提交表单',
                                url: 'html5-fetch-8'
                            },
                            {
                                id: 9,
                                title: '文件上传',
                                url: 'html5-fetch-9'
                            },
                            {
                                id: 10,
                                title: '直接上传二进制数据',
                                url: 'html5-fetch-10'
                            },
                            {
                                id: 11,
                                title: 'cache',
                                url: 'html5-fetch-11'
                            },
                            {
                                id: 12,
                                title: 'credentials是否发送Cookie',
                                url: 'html5-fetch-12'
                            },
                            {
                                id: 13,
                                title: '取消fetch请求',
                                url: 'html5-fetch-13'
                            },
                            {
                                id: 15,
                                title: '读取内容的方法',
                                url: 'html5-fetch-15'
                            },
                            {
                                id: 16,
                                title: 'Response.clone',
                                url: 'html5-fetch-16'
                            }
                        ]
                    },
                    {
                        id: 110007,
                        title: 'SSE',
                        desc: '服务器发送事件（Server-sent Events）是基于 WebSocket 协议的一种服务器向客户端发送事件和数据的单向通讯。SSE允许网页获得来自服务器的更新。以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。例子：Facebook/Twitter 更新、股价更新、新的博文、赛事结果等。',
                        child: [
                            {
                                id: 1,
                                title: '接收Server-Sent事件通知',
                                url: 'html5-sse-1'
                            },
                            {
                                id: 2,
                                title: '检测Server-Sent事件支持',
                                url: 'html5-sse-2'
                            },
                            {
                                id: 3,
                                title: '服务器端代码实例',
                                url: 'html5-sse-3'
                            },
                            {
                                id: 4,
                                title: 'EventSource对象',
                                url: 'html5-sse-4'
                            }
                        ]
                    },
                    {
                        id: 110008,
                        title: '剪贴板',
                        flag: 'recommend',
                        icon: './app/img/edu/clipboard.jpg',
                        desc: '在过去的几年里我们只能使用 document.execCommand 来操作剪贴板。不过，这种操作剪贴板的操作是同步的，并且只能读取和写入 DOM。现在 Chrome 66 已经支持了新的 Async Clipboard API，作为 execCommand 替代品。这个新的 Async Clipboard API 还可以使用 Promise 来简化剪贴板事件并将它们与 Drag-&-Drop API 一起使用。',
                        child: [
                            {
                                id: 1,
                                title: '复制：将文本写入剪贴板',
                                url: 'html5-clipboard-1'
                            },
                            {
                                id: 2,
                                title: '粘贴：从剪贴板中读取文本',
                                url: 'html5-clipboard-2'
                            },
                            {
                                id: 3,
                                title: '处理粘贴事件',
                                url: 'html5-clipboard-3'
                            },
                            {
                                id: 4,
                                title: '安全和权限',
                                url: 'html5-clipboard-4'
                            },
                            {
                                id: 5,
                                title: '回顾',
                                url: 'html5-clipboard-5'
                            },
                            {
                                id: 6,
                                title: '检测和回退',
                                url: 'html5-clipboard-6'
                            },
                            {
                                id: 7,
                                title: 'copy,cut事件',
                                url: 'html5-clipboard-7'
                            },
                            {
                                id: 8,
                                title: 'paste事件',
                                url: 'html5-clipboard-8'
                            }
                        ]
                    },
                    {
                        id: 110009,
                        title: '地理定位',
                        flag: 'recommend',
                        icon: './app/img/edu/Geolocation.jpg',
                        desc: 'HTML5 Geolocation API 用于获得用户的地理位置。'
                    },
                    {
                        id: 110010,
                        title: 'img响应式图像',
                        icon: '',
                        desc: '网页在不同尺寸的设备上，都有良好的显示效果，叫做"响应式设计",响应式设计的网页图像，就是"响应式图像"',
                        child: [
                            {
                                id: 1,
                                title: '像素密度的选择srcset属性',
                                url: 'html5-img-1'
                            },
                            {
                                id: 2,
                                title: '图像大小的选择srcset属性+sizes属性',
                                url: 'html5-img-2'
                            },
                            {
                                id: 3,
                                title: 'picture,source标签',
                                url: 'html5-img-3'
                            },
                            {
                                id: 4,
                                title: 'source标签的type属性',
                                url: 'html5-img-4'
                            }
                        ]
                    },
                    {
                        id: 110011,
                        title: 'Battery',
                        desc: 'Battery Status API，更多时候被称之为 Battery API, 提供了有关系统充电级别的信息并提供了通过电池等级或者充电状态的改变提醒用户的事件。 这个可以在设备电量低的时候调整应用的资源使用状态，或者在电池用尽前保存应用中的修改以防数据丢失。'
                    },
                    
                    {
                        id: 110012,
                        title: 'Intersection Observer',
                        desc: 'Intersection Observer API提供了一种异步检测目标元素与祖先元素或 viewport 相交情况变化的方法。比如，下面这些情况都需要用到相交检测：<br>图片懒加载——当图片滚动到可见时才进行加载<br>内容无限滚动——也就是用户滚动到接近内容底部时直接加载更多，而无需用户操作翻页，给用户一种网页可以无限滚动的错觉<br>检测广告的曝光情况——为了计算广告收益，需要知道广告元素的曝光情况<br>在用户看见某个区域时执行任务或播放动画'
                    },
                    {
                        id: 110013,
                        title: 'Navigation Timing',
                        desc: 'Navigation Timing API 提供了可用于衡量一个网站性能的数据。与用于相同目的的其他基于JavaScript的机制不同，该API可以提供可以更有用和更准确的端到端延迟数据。'
                    },
                    {
                        id: 110014,
                        title: 'Network Information',
                        desc: '网络状态 API 可以获取到系统的网络连接信息，比如说连接方式是 WiFi 还是蜂窝。应用程序可以根据此信息为用户展现不同清晰度的内容。'
                    },
                    {
                        id: 110015,
                        title: 'Page Visibility',
                        desc: '使用选项卡式浏览，任何给定网页都有可能在后台，因此对用户不可见。页面可见性 API提供了您可以观察的事件，以便了解文档何时可见或隐藏，以及查看页面当前可见性状态的功能。页面可见性 API对于节省资源和提高性能特别有用，它使页面在文档不可见时避免执行不必要的任务。'
                    },
                    {
                        id: 110016,
                        title: '手机振动',
                        desc: '现代浏览器里提供的新的API越来越倾向于移动手机应用，而不是传统的桌面应用，比如JavaScript地理位置信息API。另外一个只针对手机应用的JavaScript API就是振动(Vibration) API。很明显，这个API就是允许mobile程序员使用JavaScript调用手机的振动功能，并且能设定振动的方式和时长。',
                        child: [
                            {
                                id: 1,
                                title: '振动API基础应用',
                                url: 'html5-vibrate-1'
                            }
                        ]
                    },
                    {
                        id: 110017,
                        title: '电池状态',
                        desc: '从Mozilla Aurora 11起，火狐浏览器里实现了一些新功能，其中一个就是对电池状态接口的基本实现。这个很简单的接口能提供你关于电池当前电量，是否在充电等信息，以及一些电池状态变化事件。',
                        child: [
                            {
                                id: 1,
                                title: '获取电池状态的基本用法',
                                url: 'html5-battery-1'
                            },
                            {
                                id: 2,
                                title: '获取电池状态的Promises用法',
                                url: 'html5-battery-2'
                            }
                        ]
                    },
                    {
                        id: 110018,
                        title: 'Touch Events',
                        desc: '触摸事件接口是较为底层的 API，可为特定程序提供多点触控交互（比如双指手势）的支持。多点触控交互开始于一个手指（或触控笔）开始接触设备平面的时刻。随后其他手指也可触摸设备表面，并随意进行划动。当所有手指离开设备平面时，交互结束。整个交互期间，程序接收开始、移动、结束三个阶段的触摸事件。'
                    },
                    {
                        id: 110019,
                        title: 'URL',
                        desc: 'URL API是一个URL标准的组件，它定义了有效的Uniform Resource Locator和访问、操作URL的API。URL标准还定义了像域名、主机和IP地址等概念，并尝试以标准的方式去描述用于以键/值对的形式提交web表单内容的遗留application/x-www-form-urlencoded MIME type 。'
                    },
                    {
                        id: 110020,
                        title: 'Notifications',
                        desc: 'Notifications API 允许网页控制向最终用户显示系统通知 —这些都在顶级浏览上下文视口之外，因此即使用户已经切换标签页或移动到不同的应用程序，也可以显示。该API被设计成与不同平台上的现有通知系统兼容。'
                    }
                ]
            },
            {
                id: 1111,
                title: '进阶',
                child: [
                    {
                        id: 111100,
                        title: '视频',
                        flag: 'recommend',
                        icon: './app/img/edu/video.jpg',
                        desc: 'HTML5 规定了一种通过 video 元素来包含视频的标准方法。',
                        child: [
                            {
                                id: 1,
                                title: 'Video对象属性',
                                url: 'html5-video-1'
                            },
                            {
                                id: 2,
                                title: 'Video支持视频格式',
                                url: 'html5-video-2'
                            },
                            {
                                id: 3,
                                title: 'Video对象方法',
                                url: 'html5-video-3'
                            }
                        ]
                    },
                    {
                        id: 111101,
                        title: '音频',
                        flag: 'recommend',
                        icon: './app/img/edu/speak.jpg',
                        desc: 'Web Audio API 提供了在Web上控制音频的一个非常有效通用的系统，允许开发者来自选音频源，对音频添加特效，使音频可视化，添加空间效果 （如平移），等等。'
                    },
                    {
                        id: 111102,
                        title: 'Canvas',
                        flag: 'recommend',
                        icon: './app/img/edu/canvas.jpg',
                        desc: '标签定义图形，比如图表和其他图像，您必须使用脚本来绘制图形。你可以通过多种方法使用 canvas 绘制路径,盒、圆、字符以及添加图像。'
                    },
                    {
                        id: 111103,
                        title: 'WebGL',
                        icon: './app/img/edu/webgl.jpg',
                        desc: 'WebGL（Web图形库）是Web上的3D图形的新标准，它是专用于绘制2D图形和交互式3D图形的目的。它是从OpenGL ES 2.0库，用于手机和其他移动设备的低级3D的API衍生。 WebGL提供ES2.0（嵌入式系统）类似的功能并在现代3D图形硬件上表现优异。它可以与HTML5使用一个JavaScript的API。 HTML5有几个功能，支持3D图形，如2D画布，WebGL，SVG，CSS3D变换和SMIL。WebGL代码编写在HTML5的canvas标签内。它是一种规范，允许互联网浏览器使用的计算机访问图形处理单元（GPU）。'
                    },
                    {
                        id: 111104,
                        title: 'WebRTC',
                        desc: 'WebRTC (Web Real-Time Communications) 是一项实时通讯技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的传输。WebRTC包含的这些标准使用户在无需安装任何插件或者第三方的软件的情况下，创建点对点（Peer-to-Peer）的数据分享和电话会议成为可能。'
                    },
                    {
                        id: 111105,
                        title: 'WebXR',
                        desc: 'WebXR 是一组支持将渲染3D场景用来呈现虚拟世界（虚拟现实，也称作VR）或将图形图像添加到现实世界（增强现实，也称作AR）的标准。 WebXR 设备 API 实现了 WebXR 功能集的核心，管理输出设备的选择，以适当的帧速率将3D场景呈现给所选设备，并管理使用输入控制器创建的运动矢量。'
                    },
                    {
                        id: 111106,
                        title: 'SVG',
                        flag: 'recommend,hot',
                        icon: './app/img/edu/svg.jpg',
                        desc: 'HTML5 支持内联 SVG,可伸缩矢量图形。'
                    }
                ]
            },
            {
                id: 1122,
                title: '插件',
                child: [
                    {
                        id: 112200,
                        title: 'SnapSVG',
                        icon: './app/img/edu/snapsvg.jpg',
                        desc: 'Snap.svg是一个强大且直观的SVG动画内容操纵API，支持屏蔽、裁剪、全梯度和组别等使得内容更具吸引力和交互性的功能。'
                    }
                ]
            }
        ]
    },
    {
        id: 22,
        title: 'CSS3',
        child: [
            {
                id: 2200,
                title: '基础',
                child: [
                    {
                        id: 220000,
                        title: '选择器',
                        desc: 'CSS选择器用于选择你想要的元素的样式的模式。'
                    },
                    {
                        id: 220001,
                        title: '边框',
                        desc: 'CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。通过CSS3,您能够创建圆角边框,向矩形添加阴影,使用图片来绘制边框。'
                    },
                    {
                        id: 220002,
                        title: '阴影',
                        desc: 'CSS3 box-shadow 属性用来描述一个元素的一个或多个阴影效果,该属性几乎可以让你完成你想要的任何阴影效果。'
                    },
                    {
                        id: 220003,
                        title: '圆角',
                        desc: 'CSS3 border-radius 属性,你可以给任何元素制作 "圆角"。'
                    },
                    {
                        id: 220004,
                        title: '背景',
                        desc: 'CSS3 包含多个新的背景属性,它们提供了对背景更强大的控制。例如背景剪切,多个背景以及调整背景大小的选项。'
                    }
                ]
            },
            {
                id: 2211,
                title: '进阶',
                child: [
                    {
                        id: 221100,
                        title: 'Flex',
                        flag: 'recommend,hot',
                        icon: './app/img/edu/flex.jpg',
                        desc: '网页布局(layout)是 CSS 的一个重点应用。Flex布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。',
                        child: [
                            {
                                id: 1,
                                title: 'flex',
                                url: 'css3-flex-1'
                            }
                        ]
                    },
                    {
                        id: 221101,
                        title: 'Grid',
                        flag: 'recommend',
                        icon: './app/img/edu/grid.jpg',
                        desc: '网格布局(Grid)是最强大的 CSS 布局方案。 它将网页划分成一个个网格,可以任意组合不同的网格,做出各种各样的布局。',
                        child: [
                            {
                                id: 1,
                                title: '两栏式布局',
                                url: 'css3-grid-1'
                            },
                            {
                                id: 2,
                                title: '三明治布局',
                                url: 'css3-grid-2'
                            },
                            {
                                id: 3,
                                title: '圣杯布局',
                                url: 'css3-grid-3'
                            }
                        ]
                    },
                    {
                        id: 221102,
                        title: '多列',
                        flag: 'recommend',
                        icon: './app/img/edu/colum.jpg',
                        desc: 'CSS3中新出现的多列布局(multi-column)是传统HTML网页中块状布局模式的有力扩充。这种新语法能够让WEB开发人员轻松的让文本呈现多列显示。'
                    },
                    {
                        id: 221103,
                        title: '用户界面',
                        flag: 'recommend',
                        icon: './app/img/edu/boxsizing.jpg',
                        desc: 'CSS3 用户界面 在CSS3 中, 增加了一些新的用户界面特性来调整元素尺寸,框尺寸和外边框。 resize, box-sizing, outline-offset'
                    },
                    {
                        id: 221104,
                        title: '过渡',
                        flag: 'recommend',
                        icon: './app/img/edu/transform1.jpg',
                        desc: 'CSS3中新增的transform属性,可以实现元素在变换过程中的过渡效果,实现了基本的 动画。'
                    },
                    {
                        id: 221105,
                        title: '动画',
                        flag: 'recommend',
                        icon: './app/img/edu/animation.jpg',
                        desc: 'animation是CSS3中新增的属性,它可以制作出多种酷炫的动画效果,如果对flash有一定的了解,那这个属性就会很容易学习。 '
                    },
                    {
                        id: 221106,
                        title: '滤镜',
                        flag: 'recommend',
                        icon: './app/img/edu/filter.jpg',
                        desc: 'css3 的滤镜 filter 属性,可以对网页中的图片进行类似 Photoshop 图片处理的效果, h5 时代的来临,我们可以通过 css 对图像进行处理。'
                    }
                ]
            },
            {
                id: 2222,
                title: '框架',
                child: [
                    {
                        id: 222200,
                        title: 'less',
                        icon: ''
                    }
                ]
            },
            {
                id: 2233,
                title: '实例',
                child: [
                    {
                        id: 223300,
                        title: '布局适配',
                        flag: 'recommend',
                        icon: './app/img/edu/layout.jpg'
                    }
                ]
            }
        ]
    },
    {
        id: 33,
        title: 'ES/TS',
        child: [
            {
                id: 3300,
                title: '基础',
                child: [
                    {
                        id: 330001,
                        title: '面向对象',
                        flag: 'recommend',
                        icon: './app/img/edu/oop.jpg',
                        desc: '如果你想让你的javascript代码变得更加优美，性能更加卓越。或者，你想像jQuery的作者一样，写出属于自己优秀的类库（哪怕是基于jquery的插件）。那么，你请务必要学习javascript面向对象，否则你无法更灵活的使用javascript这门语言。面向对象程序设计（Object-oriented programming，OOP）是一种程序设计范型，同时也是一种程序开发的方法。对象指的是类的实例。它将对象作为程序的基本单元，将程序和数据封装其中，以提高软件的重用性、灵活性和扩展性。一般面向对象包含：继承，封装，多态，抽象'
                    },
                    
                    {
                        id: 330002,
                        title: '闭包',
                        flag: 'recommend',
                        icon: './app/img/edu/closures.jpg',
                        desc: '闭包（closure）是Javascript语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。'
                    },
                    {
                        id: 330003,
                        title: '原型',
                        flag: 'recommend',
                        icon: './app/img/edu/proto.jpg',
                        desc: 'js中没有类的概念，只是把一个对象实例化，这个对象一般会成为原型对象。js中所以的函数都有一个prototype属性，这个属性引用了一个对象， 即原型对象，也简称原型。这个函数包括构造函数和普通函数。'
                    },
                    {
                        id: 330004,
                        title: 'this',
                        flag: 'recommend',
                        icon: './app/img/edu/this.jpg',
                        desc: 'this关键字是 JavaScript 中最复杂的机制之一。它是一个很特别的关键字，即使是非常有经验的 JavaScript 开发者也很难说清它。本书将详解讲解this的方方面面。'
                    },
                    {
                        id: 330005,
                        title: '模块',
                        flag: 'recommend',
                        icon: './app/img/edu/module.jpg'
                    },
                    {
                        id: 330006,
                        title: '正则表达式',
                        desc: '正则表达式(regular expression)描述了一种字符串匹配的模式（pattern），可以用来检查一个串是否含有某种子串、将匹配的子串替换或者从某个串中取出符合某个条件的子串等。',
                        child: [
                            {
                                id: 1,
                                title: '正则表达式图示',
                                url: 'js-regexp-1'
                            }
                        ]
                    },
                    {
                        id: 330007,
                        title: 'DOM',
                        flag: 'recommend',
                        icon: './app/img/edu/dom.jpg',
                        desc: '通过HTML DOM,JavaScript 能够访问和改变 HTML 文档的所有元素。',
                        child: [
                            {
                                id: 1,
                                title: 'DOM思维导图',
                                url: 'js-dom-1'
                            }
                        ]
                    },
                    {
                        id: 330008,
                        title: 'BOM',
                        desc: 'BOM 概念比较古老，但是一直没有被标准化，不过各主流浏览器均支持 BOM，都遵守最基本的规则和用法，W3C 也将 BOM 主要内容纳入了 HTML5 规范之中。',
                    },
                    {
                        id: 330009,
                        title: 'Window',
                        desc: '',
                        child: [
                            {
                                id: 1,
                                title: 'Window对象',
                                url: 'js-window-1'
                            },
                            {
                                id: 2,
                                title: 'atob/btoa',
                                url: 'js-window-2'
                            },
                            {
                                id: 3,
                                title: 'crypto',
                                url: 'js-window-3'
                            },
                            {
                                id: 4,
                                title: 'Fullscreen',
                                url: 'js-window-4'
                            },
                            {
                                id: 5,
                                title: 'History',
                                url: 'js-window-5'
                            }
                        ]
                    },
                    {
                        id: 330010,
                        title: '类型判断',
                        desc: '',
                        child: [
                            {
                                id: 1,
                                title: '类型判断',
                                url: 'js-type-1'
                            }
                        ]
                    },
                    {
                        id: 330011,
                        title: 'TypeScript',
                        desc: '',
                        icon: './app/img/edu/ts.jpg'
                    }
                ]
            },
            {
                id: 3311,
                title: '内置对象',
                child: [
                    {
                        id: 331100,
                        title: '数组',
                        flag: 'recommend',
                        desc: 'JavaScript的 Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。',
                        icon: './app/img/edu/array.jpg',
                        child: [
                            {
                                id: 1,
                                title: '数组思维导图',
                                url: 'js-array-1'
                            },
                            {
                                id: 2,
                                title: 'Array.from',
                                url: 'js-array-2'
                            },
                            {
                                id: 3,
                                title: 'Array.of',
                                url: 'js-array-3'
                            }
                        ]
                    },
                    {
                        id: 331101,
                        title: 'Reflect',
                        desc: 'Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。',
                        child: [
                            {
                                id: 1,
                                title: '常见的方法',
                                url: 'js-reflect-1'
                            },
                            {
                                id: 2,
                                title: 'Reflect.set',
                                url: 'js-reflect-2'
                            },
                            {
                                id: 3,
                                title: 'Reflect.construct',
                                url: 'js-reflect-3'
                            },
                            {
                                id: 4,
                                title: 'Reflect.get',
                                url: 'js-reflect-4'
                            },
                            {
                                id: 5,
                                title: 'Reflect.apply',
                                url: 'js-reflect-5'
                            },
                            {
                                id: 6,
                                title: 'Reflect.has',
                                url: 'js-reflect-6'
                            },
                            {
                                id: 7,
                                title: 'Reflect.defineProperty',
                                url: 'js-reflect-7'
                            },
                            {
                                id: 8,
                                title: 'Reflect.deleteProperty',
                                url: 'js-reflect-8'
                            },
                            {
                                id: 9,
                                title: 'Reflect.getOwnPropertyDescriptor',
                                url: 'js-reflect-9'
                            },
                            {
                                id: 10,
                                title: 'Reflect.ownKeys',
                                url: 'js-reflect-10'
                            },
                            {
                                id: 11,
                                title: 'Reflect.isExtensible',
                                url: 'js-reflect-11'
                            },
                            {
                                id: 12,
                                title: 'Reflect.preventExtensions',
                                url: 'js-reflect-12'
                            },
                            {
                                id: 13,
                                title: 'Reflect.setPrototypeOf',
                                url: 'js-reflect-13'
                            }
                        ]
                    },
                    {
                        id: 331102,
                        title: 'Proxy',
                        desc: 'Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。',
                        child: [
                            {
                                id: 1,
                                title: 'Proxy',
                                url: 'js-proxy-1'
                            },
                            {
                                id: 2,
                                title: 'Proxy.revocable',
                                url: 'js-proxy-2'
                            },
                            {
                                id: 3,
                                title: 'handler 对象的方法',
                                url: 'js-proxy-3'
                            },
                            {
                                id: 4,
                                title: '无操作转发代理',
                                url: 'js-proxy-4'
                            },
                            {
                                id: 5,
                                title: '验证',
                                url: 'js-proxy-5'
                            },
                            {
                                id: 6,
                                title: '扩展构造函数',
                                url: 'js-proxy-6'
                            },
                            {
                                id: 7,
                                title: '操作 DOM 节点',
                                url: 'js-proxy-7'
                            },
                            {
                                id: 8,
                                title: '值修正及附加属性',
                                url: 'js-proxy-8'
                            },
                            {
                                id: 9,
                                title: '通过属性查找数组中的特定对象',
                                url: 'js-proxy-9'
                            },
                            {
                                id: 10,
                                title: '一个完整的 traps 列表示例',
                                url: 'js-proxy-10'
                            }
                        ]
                    },
                    {
                        id: 331103,
                        title: 'Math',
                        desc: 'Math 是一个内置对象，它拥有一些数学常数属性和数学函数方法。',
                        child: [
                            {
                                id: 1,
                                title: '绝对值 Math.abs',
                                url: 'js-math-1'
                            },
                            {
                                id: 2,
                                title: '反余弦值 Math.acos',
                                url: 'js-math-2'
                            },
                            {
                                id: 3,
                                title: '反双曲余弦值 Math.acosh',
                                url: 'js-math-3'
                            },
                            {
                                id: 4,
                                title: '反正弦 Math.asin',
                                url: 'js-math-4'
                            },
                            {
                                id: 5,
                                title: '反双曲正弦值 Math.asinh',
                                url: 'js-math-5'
                            },
                            {
                                id: 6,
                                title: '反正切 Math.atan',
                                url: 'js-math-6'
                            },
                            {
                                id: 7,
                                title: 'Math.atan2',
                                url: 'js-math-7'
                            },
                            {
                                id: 8,
                                title: '反双曲正切值 Math.atanh',
                                url: 'js-math-8'
                            },
                            {
                                id: 9,
                                title: '立方根 Math.cbrt',
                                url: 'js-math-9'
                            },
                            {
                                id: 10,
                                title: '最小整数 Math.ceil',
                                url: 'js-math-10'
                            },
                            {
                                id: 11,
                                title: '余弦值 Math.cos',
                                url: 'js-math-11'
                            },
                            {
                                id: 12,
                                title: '双曲余弦函数 Math.cosh',
                                url: 'js-math-12'
                            },
                            {
                                id: 13,
                                title: '最大整数 Math.floor',
                                url: 'js-math-13'
                            },
                            {
                                id: 14,
                                title: '平方和的平方根 Math.hypot',
                                url: 'js-math-14'
                            },
                            {
                                id: 15,
                                title: '相乘 Math.imul',
                                url: 'js-math-15'
                            },
                            {
                                id: 16,
                                title: 'Math.sign',
                                url: 'js-math-16'
                            },
                            {
                                id: 17,
                                title: '正弦值 Math.sin',
                                url: 'js-math-17'
                            },
                            {
                                id: 18,
                                title: '双曲正弦值 Math.sinh',
                                url: 'js-math-18'
                            },
                            {
                                id: 19,
                                title: '平方根 Math.sqrt',
                                url: 'js-math-19'
                            },
                            {
                                id: 20,
                                title: '正切值 Math.tan',
                                url: 'js-math-20'
                            },
                            {
                                id: 21,
                                title: '双曲正切函数值 Math.tanh',
                                url: 'js-math-21'
                            },
                            {
                                id: 22,
                                title: '留整 Math.trunc',
                                url: 'js-math-22'
                            }
                        ]
                    },
                    {
                        id: 331104,
                        title: 'NaN',
                        desc: '全局属性 NaN 的值表示不是一个数字（Not-A-Number）。',
                        child: [
                            {
                                id: 1,
                                title: 'NaN',
                                url: 'js-nan-1'
                            }
                        ]
                    },
                    {
                        id: 331105,
                        title: 'Object',
                        desc: 'Object 构造函数创建一个对象包装器。',
                        child: [
                            {
                                id: 1,
                                title: 'Object.assign',
                                url: 'js-object-1'
                            },
                            {
                                id: 2,
                                title: 'Object.create',
                                url: 'js-object-2'
                            },
                            {
                                id: 3,
                                title: 'Object.defineProperties',
                                url: 'js-object-3'
                            },
                            {
                                id: 4,
                                title: 'Object.defineProperty',
                                url: 'js-object-4'
                            },
                            {
                                id: 5,
                                title: 'Object.entries',
                                url: 'js-object-5'
                            },
                            {
                                id: 6,
                                title: 'Object.freeze',
                                url: 'js-object-6'
                            },
                            {
                                id: 7,
                                title: 'Object.fromEntries',
                                url: 'js-object-7'
                            },
                            {
                                id: 8,
                                title: 'Object.isFrozen',
                                url: 'js-object-8'
                            },
                            {
                                id: 9,
                                title: 'Object.isSealed',
                                url: 'js-object-9'
                            }
                        ]
                    },
                    {
                        id: 331106,
                        title: 'Promise',
                        desc: 'Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。',
                        child: [
                            {
                                id: 1,
                                title: 'Promise.all',
                                url: 'js-promise-1'
                            },
                            {
                                id: 2,
                                title: 'Promise.allSettled',
                                url: 'js-promise-2'
                            },
                            {
                                id: 3,
                                title: 'Promise.any',
                                url: 'js-promise-3'
                            },
                            {
                                id: 4,
                                title: 'Promise.prototype.then',
                                url: 'js-promise-4'
                            },
                            {
                                id: 5,
                                title: 'Promise.prototype.catch',
                                url: 'js-promise-5'
                            },
                            {
                                id: 6,
                                title: 'Promise.prototype.finally',
                                url: 'js-promise-6'
                            },
                            {
                                id: 7,
                                title: 'Promise.race',
                                url: 'js-promise-7'
                            }
                        ]
                    },
                    {
                        id: 331107,
                        title: 'String',
                        desc: 'String 全局对象是一个用于字符串或一个字符序列的构造函数。',
                        child: [
                            {
                                id: 1,
                                title: 'charAt',
                                url: 'js-string-1'
                            },
                            {
                                id: 2,
                                title: 'repeat',
                                url: 'js-string-2'
                            },
                            {
                                id: 3,
                                title: 'substring',
                                url: 'js-string-3'
                            },
                            {
                                id: 4,
                                title: 'raw',
                                url: 'js-string-4'
                            }
                        ]
                    },
                    {
                        id: 331108,
                        title: 'WeakSet',
                        desc: 'WeakSet 对象允许你将弱保持对象存储在一个集合中。',
                        child: [
                            {
                                id: 1,
                                title: 'WeakSet',
                                url: 'js-weakset-1'
                            }
                        ]
                    },
                    {
                        id: 331109,
                        title: '函数',
                        desc: '',
                        child: [
                            {
                                id: 1,
                                title: '函数基础',
                                url: 'js-function-1'
                            },
                            {
                                id: 2,
                                title: '字符串函数',
                                url: 'js-function-2'
                            }
                        ]
                    },
                    {
                        id: 331110,
                        title: 'JSON',
                        flag: 'recommend',
                        icon: './app/img/edu/json.jpg',
                        desc: 'JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。是JavaScript的一个子集。JSON还定死了字符集必须是UTF-8，表示多语言就没有问题了。为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。',
                        child: [
                            {
                                id: 1,
                                title: 'stringify转字符串',
                                url: 'js-json-1'
                            },
                            {
                                id: 2,
                                title: 'stringify转格式化字符串',
                                url: 'js-json-2'
                            },
                            {
                                id: 3,
                                title: 'stringify转指定key的字符串',
                                url: 'js-json-3'
                            },
                            {
                                id: 4,
                                title: 'stringify传函数',
                                url: 'js-json-4'
                            },
                            {
                                id: 5,
                                title: 'JSON.parse',
                                url: 'js-json-5'
                            }
                        ]
                    }
                ]
            },
            {
                id: 3322,
                title: '算法',
                child: [
                    {
                        id: 332200,
                        title: '初级算法',
                        flag: 'recommend',
                        icon: './app/img/edu/suanfa.jpg'
                    },
                    {
                        id: 332201,
                        title: '中级算法',
                        flag: 'recommend',
                        icon: './app/img/edu/suanfa1.jpg'
                    },
                    {
                        id: 332202,
                        title: '高级算法',
                        flag: 'recommend',
                        icon: './app/img/edu/suanfa2.jpg'
                    }
                ]
            },
            {
                id: 3333,
                title: '模式',
                child: [
                    {
                        id: 333300,
                        title: '设计模式',
                        flag: 'recommend',
                        icon: './app/img/edu/module.jpg',
                        desc: '每个JS开发者都力求写出可维护、复用性和可读性高的代码。随着应用不断扩大，代码组织的合理性也越来越重要。设计模式为特定环境下的常见问题提供了一个组织结构，对于克服这些挑战起到至关重要的作用。'
                    }
                ]
            },
            {
                id: 3344,
                title: 'ES6-11',
                child: [
                    {
                        id: 334400,
                        title: 'ES6',
                        flag: 'recommend',
                        icon: './app/img/edu/es6.jpg'
                    },
                    {
                        id: 334401,
                        title: 'ES7'
                    },
                    {
                        id: 334402,
                        title: 'ES8'
                    },
                    {
                        id: 334403,
                        title: 'ES9'
                    },
                    {
                        id: 334404,
                        title: 'ES10'
                    },
                    {
                        id: 334405,
                        title: 'ES11'
                    }
                ]
            },
            {
                id: 3355,
                title: '实例',
                child: [
                    {
                        id: 335500,
                        title: '功能开发',
                        desc: '收集一些实用性很强的功能接口'
                    },
                    {
                        id: 335501,
                        title: '常用函数',
                        desc: '收集一些实用性很强的函数'
                    },
                    {
                        id: 335502,
                        title: '动画',
                        desc: 'JS动画特效实例演示'
                    },
                    {
                        id: 335503,
                        title: '大数据处理',
                        desc: '大量数据渲染时的处理'
                    }
                ]
            }
        ]
    },
    {
        id: 44,
        title: 'Frames',
        child: [
            {
                id: 4400,
                title: 'Vue',
                child: [
                    {
                        id: 440000,
                        title: 'Vue',
                        flag: 'recommend',
                        icon: './app/img/edu/vue3.jpg',
                        desc: 'Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。',
                        child: [
                            {
                                id:1,
                                title: '平级组件通信',
                                url: 'frames-vue-1'
                            },
                            {
                                id:2,
                                title: '跨域设置',
                                url: 'frames-vue-2'
                            },
                            {
                                id:3,
                                title: 'setup中不能使用this问题',
                                url: 'frames-vue-3'
                            },
                            {
                                id:4,
                                title: 'setup中不能使用router.push问题',
                                url: 'frames-vue-4'
                            },
                            {
                                id:5,
                                title: 'setup',
                                url: 'frames-vue-5'
                            },
                            {
                                id:6,
                                title: 'effect',
                                url: 'frames-vue-6'
                            }
                        ]
                    },
                    {
                        id: 440002,
                        title: 'Vue源码解析',
                        icon: './app/img/edu/vue3.jpg'
                    },
                    {
                        id: 440003,
                        title: 'VueX',
                        icon: './app/img/edu/vuex.jpg',
                        child: [
                            {
                                id:1,
                                title: '同级action如何互相调用',
                                url: 'frames-vuex-1'
                            }
                        ]
                    },
                    {
                        id: 440004,
                        title: 'VueCLI',
                        icon: './app/img/edu/vuecli.jpg'
                    },
                    {
                        id: 440005,
                        title: 'SSR',
                        icon: ''
                    },
                    {
                        id: 440006,
                        title: 'VuePress',
                        icon: ''
                    },
                    {
                        id: 440007,
                        title: 'Nuxt',
                        icon: ''
                    },
                    {
                        id: 440008,
                        title: 'Element',
                        icon: ''
                    },
                    {
                        id: 440009,
                        title: 'NutUI',
                        icon: ''
                    }
                ]
            },
            {
                id: 4411,
                title: 'React',
                child: [
                    {
                        id: 441100,
                        title: 'React',
                        flag: 'recommend',
                        icon: './app/img/edu/react.jpg',
                        desc: 'React 是一个用于构建用户界面的 JAVASCRIPT 库。 React主要用于构建UI,很多人认为 React 是 MVC 中的 V(视图)。'
                    },
                    {
                        id: 441101,
                        title: 'Redux'
                    }
                ]
            },
            {
                id: 4422,
                title: 'Other',
                child: [
                    {
                        id: 442200,
                        title: 'Mithril'
                    },
                    {
                        id: 442201,
                        title: 'Jquery'
                    },
                    {
                        id: 442202,
                        title: 'Template',
                        icon: './app/img/edu/template.jpg'
                    },
                    {
                        id: 442203,
                        title: 'ECharts',
                        flag: 'recommend',
                        icon: './app/img/edu/echarts.jpg',
                        desc: 'ECharts开源来自百度商业前端数据可视化团队,基于html5 Canvas，是一个纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。创新的拖拽重计算、数据视图、值域漫游等特性大大增强了用户体验，赋予了用户对数据进行挖掘、整合的能力。'
                    },
                    {
                        id: 442204,
                        title: '百度地图',
                        flag: 'recommend',
                        icon: './app/img/edu/baidu.jpg'
                    }
                ]
            },
            {
                id: 4433,
                title: '插件',
                child: [
                    {
                        id: 443300,
                        title: 'Axios',
                        flag: 'recommend',
                        icon: './app/img/edu/axios.jpg',
                        child: [
                            {
                                id: 1,
                                title: 'ie9,10,11环境下发现axios存在兼容性',
                                url: 'frames-axios-1'
                            },
                            {
                                id: 2,
                                title: 'axios 库封装',
                                url: 'frames-axios-2'
                            }
                        ]
                    },
                    {
                        id: 443301,
                        title: 'wowjs',
                        icon: './app/img/edu/wowjs.jpg',
                        desc: '如果你希望你的页面也更加有趣，那么你可以试试 WOW.js。WOW.js 依赖 animate.css，所以它支持 animate.css 多达 60 多种的动画效果，能满足您的各种需求。'
                    },
                    {
                        id: 443302,
                        title: 'chobi',
                        desc: 'chobi是一款轻量级的客户端处理图片javascript插件。该图片处理插件使用过滤器算法来处理图片，为图片设置不同的亮度、对比度和饱和度。它使用canvas来重绘图片，可以下载处理后的图片。'
                    },
                    {
                        id: 443303,
                        title: 'Syntaxy',
                        desc: 'Syntaxy.js是一款小巧灵活的网页语法高亮js插件。Syntaxy.js支持各种主流的编程语言，提供3种主题样式。它默认是JS插件，但是也可以作为jQuery插件来使用。'
                    },
                    {
                        id: 443304,
                        title: 'clipboard',
                        desc: 'clipboard.js是一款轻量级的实现复制文本到剪贴板功能的JavaScript插件。通过该插件可以将输入框，文本域，DIV元素中的文本等文本内容复制到剪贴板中。它不依赖flash，使用非常简单。'
                    }
                ]
            }
        ]
    },
    {
        id: 55,
        title: 'NodeJS',
        child: [
            {
                id: 5500,
                title: '基础',
                child: [
                    {
                        id: 550000,
                        title: 'NodeJS',
                        flag: 'recommend',
                        icon: './app/img/edu/node.jpg'
                    },
                    {
                        id: 550001,
                        title: 'http状态码',
                        desc: '客户端的每一次请求，服务器都必须给出回应。回应包括 HTTP 状态码和数据两部分。',
                        child: [
                            {
                                id: 2,
                                title: '2XX状态码',
                                url: 'nodejs-http-2'
                            },
                            {
                                id: 3,
                                title: '3XX状态码',
                                url: 'nodejs-http-3'
                            },
                            {
                                id: 4,
                                title: '4XX状态码',
                                url: 'nodejs-http-4'
                            },
                            {
                                id: 5,
                                title: '5XX状态码',
                                url: 'nodejs-http-5'
                            }
                        ]
                    },
                    {
                        id: 550002,
                        title: 'JWT',
                        desc: 'JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案',
                        child: [
                            {
                                id: 1,
                                title: 'JWT的原理',
                                url: 'nodejs-jwt-1'
                            },
                            {
                                id: 2,
                                title: 'JWT的数据结构',
                                url: 'nodejs-jwt-2'
                            },
                            {
                                id: 3,
                                title: 'JWT的使用方式',
                                url: 'nodejs-jwt-3'
                            },
                            {
                                id: 4,
                                title: 'JWT的几个特点',
                                url: 'nodejs-jwt-4'
                            }
                        ]
                    },
                ]
            },
            {
                id: 5511,
                title: '工具',
                child: [
                    {
                        id: 551100,
                        title: 'nodemon',
                        icon: ''
                    },
                    {
                        id: 551101,
                        title: 'nvm',
                        flag: 'recommend',
                        desc: 'nvm全名node.js version management,顾名思义是一个nodejs的版本管理工具。通过它可以安装和切换不同版本的nodejs。',
                        icon: './app/img/edu/nvm.jpg',
                        child: [
                            {
                                id: 1,
                                title: 'nvm安装',
                                url: 'nodejs-nvm-1'
                            },
                            {
                                id: 2,
                                title: 'nvm安装nodejs',
                                url: 'nodejs-nvm-2'
                            }
                        ]
                    },
                    {
                        id: 551102,
                        title: 'nrm',
                        flag: 'recommend',
                        desc: 'nrm 是一个 npm 源管理器,允许你快速地在 npm源间切换。',
                        icon: './app/img/edu/nrm.jpg',
                        child: [
                            {
                                id: 1,
                                title: 'nrm安装',
                                url: 'nodejs-nrm-1'
                            }
                        ]
                    },
                    {
                        id: 551103,
                        title: 'PM2',
                        flag: 'recommend',
                        icon: './app/img/edu/pm2.jpg'
                    }
                ]
            },
            {
                id: 5522,
                title: 'Express',
                child: [
                    {
                        id: 552200,
                        title: 'Express',
                        flag: 'recommend',
                        icon: './app/img/edu/express.jpg'
                    }
                ]
            },
            {
                id: 5533,
                title: 'Koa2',
                child: [
                    {
                        id: 553300,
                        title: 'Koa2',
                        flag: 'recommend',
                        icon: './app/img/edu/koa.jpg'
                    }
                ]
            },
            {
                id: 5544,
                title: 'MongoDB',
                child: [
                    {
                        id: 554400,
                        title: 'MongoDB',
                        flag: 'recommend',
                        icon: './app/img/edu/MongoDB.jpg'
                    },
                    {
                        id: 554401,
                        title: 'Studio3T',
                        icon: ''
                    }
                ]
            }
        ]
    },
    {
        id: 66,
        title: 'Applets',
        child: [
            {
                id: 6600,
                title: 'App',
                child: [
                    {
                        id: 660000,
                        title: 'Flutter',
                        flag: 'recommend',
                        icon: './app/img/edu/flutter.jpg'
                    },
                    {
                        id: 660001,
                        title: 'Weex',
                        flag: 'recommend',
                        icon: './app/img/edu/weex.jpg'
                    }
                ]
            },
            {
                id: 6611,
                title: '微信',
                child: [
                    {
                        id: 661100,
                        title: '微信小程序',
                        flag: 'recommend',
                        icon: './app/img/edu/weixin.jpg'
                    },
                    {
                        id: 661101,
                        title: 'mpvue',
                        flag: 'recommend',
                        icon: './app/img/edu/mpvue.jpg'
                    }
                ]
            },
            {
                id: 6622,
                title: '钉钉',
                child: [
                    {
                        id: 662200,
                        title: '钉钉小程序',
                        icon: ''
                    }
                ]
            }
        ]
    },
    {
        id: 77,
        title: 'Tools',
        child: [
            {
                id: 7700,
                title: '打包',
                child: [
                    {
                        id: 770000,
                        title: 'Webpack',
                        flag: 'recommend',
                        icon: './app/img/edu/webpack.jpg',
                        desc: 'Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析,然后将这些模块按照指定的规则生成对应的静态资源。'
                    },
                    {
                        id: 770001,
                        title: 'Vite',
                        icon: ''
                    },
                    {
                        id: 770002,
                        title: 'FIS',
                        flag: 'recommend',
                        icon: './app/img/edu/fis.jpg'
                    }
                ]
            },
            {
                id: 7711,
                title: '编译',
                child: [
                    {
                        id: 771100,
                        title: 'Babel',
                        icon: ''
                    },
                    {
                        id: 771101,
                        title: 'ESLint',
                        flag: 'recommend',
                        icon: './app/img/edu/eslint.jpg'
                    }
                ]
            },
            {
                id: 7722,
                title: '调试',
                child: [
                    {
                        id: 772200,
                        title: 'PostMan',
                        flag: 'recommend',
                        icon: './app/img/edu/postman.jpg'
                    }
                ]
            },
            {
                id: 7733,
                title: '编辑',
                child: [
                    {
                        id: 773300,
                        title: 'VSCode',
                        flag: 'recommend',
                        icon: './app/img/edu/vscode.jpg',
                        child: [
                            {
                                id: 1,
                                title: 'vscode自动编译ts',
                                url: 'tools-vscode-1'
                            }
                        ]
                    }
                ]
            },{
                id: 7744,
                title: '管理',
                child: [
                    {
                        id: 774400,
                        title: 'Git',
                        flag: 'recommend',
                        icon: './app/img/edu/git.jpg',
                        desc: 'Git是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。',
                        child: [
                            {
                                id: 1,
                                title: 'git流程图示',
                                url: 'tools-git-1'
                            },
                            {
                                id: 2,
                                title: '新建代码库',
                                url: 'tools-git-2'
                            },
                            {
                                id: 3,
                                title: '配置',
                                url: 'tools-git-3'
                            },
                            {
                                id: 4,
                                title: '增加/删除文件',
                                url: 'tools-git-4'
                            },
                            {
                                id: 5,
                                title: '代码提交',
                                url: 'tools-git-5'
                            },
                            {
                                id: 6,
                                title: '分支',
                                url: 'tools-git-6'
                            },
                            {
                                id: 7,
                                title: '标签',
                                url: 'tools-git-7'
                            },
                            {
                                id: 8,
                                title: '查看信息',
                                url: 'tools-git-8'
                            },
                            {
                                id: 9,
                                title: '远程同步',
                                url: 'tools-git-9'
                            },
                            {
                                id: 10,
                                title: '撤销',
                                url: 'tools-git-10'
                            },
                            {
                                id: 11,
                                title: '压缩包',
                                url: 'tools-git-11'
                            },
                            {
                                id: 12,
                                title: 'git clone',
                                url: 'tools-git-12'
                            },
                            {
                                id: 13,
                                title: 'git remote',
                                url: 'tools-git-13'
                            },
                            {
                                id: 14,
                                title: 'git fetch',
                                url: 'tools-git-14'
                            },
                            {
                                id: 15,
                                title: 'git pull',
                                url: 'tools-git-15'
                            },
                            {
                                id: 16,
                                title: 'git push',
                                url: 'tools-git-16'
                            },
                            {
                                id: 17,
                                title: 'error SSL_connect 443',
                                url: 'tools-git-17'
                            }
                        ]
                    },
                    {
                        id: 774401,
                        title: 'Jenkins',
                        flag: 'recommend',
                        icon: './app/img/edu/Jenkins.jpg'
                    },
                    {
                        id: 774402,
                        title: 'SVN',
                        icon: ''
                    }
                ]
            }
        ]
    }
]