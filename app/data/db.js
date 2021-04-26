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
                                title: '拖放(Drag 和 Drop)各属性生命周期',
                                url: 'html5-drag-1'
                            },
                            {
                                title: '设置元素为可拖放',
                                url: 'html5-drag-2'
                            },
                            {
                                title: '拖动什么 - ondragstart 和 setData()',
                                url: 'html5-drag-3'
                            },
                            {
                                title: '放到何处 - ondragover',
                                url: 'html5-drag-4'
                            },
                            {
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
                                title: 'Manifest 基础',
                                url: 'html5-manifest-1'
                            },
                            {
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
                                title: '检查浏览器是否支持Cache API',
                                url: 'html5-caches-1'
                            },
                            {
                                title: '创建一个缓存对象',
                                url: 'html5-caches-2'
                            },
                            {
                                title: '添加缓存数据',
                                url: 'html5-caches-3'
                            },
                            {
                                title: '访问缓存数据',
                                url: 'html5-caches-4'
                            },
                            {
                                title: '删除缓存里的数据',
                                url: 'html5-caches-5'
                            },
                            {
                                title: '获取现有的缓存里的缓存名称',
                                url: 'html5-caches-6'
                            },
                            {
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
                                title: 'localStorage',
                                url: 'html5-storage-1'
                            },
                            {
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
                                title: 'Worker使用注意点',
                                url: 'html5-workers-1'
                            },
                            {
                                title: 'Worker主线程用法',
                                url: 'html5-workers-2'
                            },
                            {
                                title: 'Worker线程用法',
                                url: 'html5-workers-3'
                            },
                            {
                                title: 'Worker加载脚本',
                                url: 'html5-workers-4'
                            },
                            {
                                title: 'Worker错误处理',
                                url: 'html5-workers-5'
                            },
                            {
                                title: '关闭Worker',
                                url: 'html5-workers-6'
                            },
                            {
                                title: 'Worker数据通信',
                                url: 'html5-workers-7'
                            },
                            {
                                title: '同页面的Web Worker',
                                url: 'html5-workers-8'
                            },
                            {
                                title: 'Worker线程完成轮询',
                                url: 'html5-workers-9'
                            },
                            {
                                title: 'Worker 新建 Worker',
                                url: 'html5-workers-10'
                            },
                            {
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
                                title: 'WebSocket的JavaScript接口详解',
                                url: 'html5-socket-0'
                            },
                            {
                                title: 'WebSocket介绍',
                                url: 'html5-socket-1'
                            },
                            {
                                title: '客户端的示例',
                                url: 'html5-socket-2'
                            },
                            {
                                title: '客户端的API',
                                url: 'html5-socket-3'
                            },
                            {
                                title: '服务端的实现',
                                url: 'html5-socket-4'
                            }
                        ]
                    },
                    {
                        id: 110007,
                        title: 'SSE',
                        desc: '服务器发送事件（Server-sent Events）是基于 WebSocket 协议的一种服务器向客户端发送事件和数据的单向通讯。SSE允许网页获得来自服务器的更新。以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。例子：Facebook/Twitter 更新、股价更新、新的博文、赛事结果等。',
                        child: [
                            {
                                title: '接收Server-Sent事件通知',
                                url: 'html5-sse-1'
                            },
                            {
                                title: '检测Server-Sent事件支持',
                                url: 'html5-sse-2'
                            },
                            {
                                title: '服务器端代码实例',
                                url: 'html5-sse-3'
                            },
                            {
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
                                title: '复制：将文本写入剪贴板',
                                url: 'html5-clipboard-1'
                            },
                            {
                                title: '粘贴：从剪贴板中读取文本',
                                url: 'html5-clipboard-2'
                            },
                            {
                                title: '处理粘贴事件',
                                url: 'html5-clipboard-3'
                            },
                            {
                                title: '安全和权限',
                                url: 'html5-clipboard-4'
                            },
                            {
                                title: '回顾',
                                url: 'html5-clipboard-5'
                            },
                            {
                                title: '检测和回退',
                                url: 'html5-clipboard-6'
                            },
                            {
                                title: 'copy,cut事件',
                                url: 'html5-clipboard-7'
                            },
                            {
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
                        desc: 'HTML5 Geolocation API 用于获得用户的地理位置。鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。',
                        child: [
                            {
                                title: 'Geolocation对象的方法',
                                url: 'html5-geolocation-1'
                            },
                            {
                                title: 'getCurrentPosition',
                                url: 'html5-geolocation-2'
                            },
                            {
                                title: 'watchPosition',
                                url: 'html5-geolocation-3'
                            }
                        ]
                    },
                    {
                        id: 110010,
                        title: 'img响应式图像',
                        icon: '',
                        desc: '网页在不同尺寸的设备上，都有良好的显示效果，叫做"响应式设计",响应式设计的网页图像，就是"响应式图像"',
                        child: [
                            {
                                title: '像素密度的选择srcset属性',
                                url: 'html5-img-1'
                            },
                            {
                                title: '图像大小的选择srcset属性+sizes属性',
                                url: 'html5-img-2'
                            },
                            {
                                title: 'picture,source标签',
                                url: 'html5-img-3'
                            },
                            {
                                title: 'source标签的type属性',
                                url: 'html5-img-4'
                            }
                        ]
                    },
                    {
                        id: 110011,
                        title: '电池状态',
                        desc: 'Battery Status API，更多时候被称之为 Battery API, 提供了有关系统充电级别的信息并提供了通过电池等级或者充电状态的改变提醒用户的事件。 这个可以在设备电量低的时候调整应用的资源使用状态，或者在电池用尽前保存应用中的修改以防数据丢失。',
                        child: [
                            {
                                title: '获取电池状态的基本用法',
                                url: 'html5-battery-1'
                            },
                            {
                                title: 'getBattery方法返回值',
                                url: 'html5-battery-2'
                            },
                            {
                                title: 'getBattery方法返回值详解',
                                url: 'html5-battery-4'
                            },
                            {
                                title: 'Battery的事件',
                                url: 'html5-battery-3'
                            }
                        ]
                    },

                    {
                        id: 110012,
                        title: '交叉观察器',
                        desc: 'Intersection Observer API提供了一种异步检测目标元素与祖先元素或 viewport 相交情况变化的方法。比如，下面这些情况都需要用到相交检测：<br>图片懒加载——当图片滚动到可见时才进行加载<br>内容无限滚动——也就是用户滚动到接近内容底部时直接加载更多，而无需用户操作翻页，给用户一种网页可以无限滚动的错觉<br>检测广告的曝光情况——为了计算广告收益，需要知道广告元素的曝光情况<br>在用户看见某个区域时执行任务或播放动画',
                        child: [
                            {
                                title: 'IntersectionObserver API',
                                url: 'html5-IntersectionObserver-1'
                            },
                            {
                                title: 'IntersectionObserverEntry对象',
                                url: 'html5-IntersectionObserver-2'
                            },
                            {
                                title: '惰性加载(lazy load)',
                                url: 'html5-IntersectionObserver-3'
                            },
                            {
                                title: '无限滚动',
                                url: 'html5-IntersectionObserver-4'
                            },
                            {
                                title: '注意点',
                                url: 'html5-IntersectionObserver-5'
                            }
                        ]
                    },
                    {
                        id: 110013,
                        title: 'Navigation Timing',
                        desc: 'Navigation Timing API 提供了可用于衡量一个网站性能的数据。与用于相同目的的其他基于JavaScript的机制不同，该API可以提供可以更有用和更准确的端到端延迟数据。',
                        child: [
                            {
                                title: 'Navigation Timing API',
                                url: 'html5-NavigationTiming-1'
                            },
                            {
                                title: '利用performance.timing进行性能分析',
                                url: 'html5-NavigationTiming-2'
                            }
                        ]
                    },
                    {
                        id: 110014,
                        title: 'Page Visibility',
                        desc: '使用选项卡式浏览，任何给定网页都有可能在后台，因此对用户不可见。页面可见性 API提供了您可以观察的事件，以便了解文档何时可见或隐藏，以及查看页面当前可见性状态的功能。页面可见性 API对于节省资源和提高性能特别有用，它使页面在文档不可见时避免执行不必要的任务。',
                        child: [
                            {
                                title: 'Page Visibility API',
                                url: 'html5-PageVisibility-1'
                            },
                            {
                                title: 'document.visibilityState',
                                url: 'html5-PageVisibility-2'
                            },
                            {
                                title: 'document.hidden',
                                url: 'html5-PageVisibility-3'
                            },
                            {
                                title: 'visibilitychange事件',
                                url: 'html5-PageVisibility-4'
                            },
                            {
                                title: '页面卸载',
                                url: 'html5-PageVisibility-5'
                            }
                        ]
                    },
                    {
                        id: 110015,
                        title: '手机振动',
                        desc: '现代浏览器里提供的新的API越来越倾向于移动手机应用，而不是传统的桌面应用，比如JavaScript地理位置信息API。另外一个只针对手机应用的JavaScript API就是振动(Vibration) API。很明显，这个API就是允许mobile程序员使用JavaScript调用手机的振动功能，并且能设定振动的方式和时长。',
                        child: [
                            {
                                title: '振动API基础应用',
                                url: 'html5-vibrate-1'
                            }
                        ]
                    },
                    {
                        id: 110016,
                        title: 'Touch Events',
                        desc: '触摸事件接口是较为底层的 API，可为特定程序提供多点触控交互（比如双指手势）的支持。多点触控交互开始于一个手指（或触控笔）开始接触设备平面的时刻。随后其他手指也可触摸设备表面，并随意进行划动。当所有手指离开设备平面时，交互结束。整个交互期间，程序接收开始、移动、结束三个阶段的触摸事件。每 个 Touch 对象代表一个触点; 每个触点都由其位置，大小，形状，压力大小，和目标 element 描述。 TouchList 对象代表多个触点的一个列表.',
                        child: [
                            {
                                title: 'TouchEvents API',
                                url: 'html5-TouchEvents-1'
                            }
                        ]
                    },
                    {
                        id: 110017,
                        title: 'URL',
                        desc: 'URL API是一个URL标准的组件，它定义了有效的Uniform Resource Locator和访问、操作URL的API。URL标准还定义了像域名、主机和IP地址等概念，并尝试以标准的方式去描述用于以键/值对的形式提交web表单内容的遗留application/x-www-form-urlencoded MIME type 。',
                        child: [
                            {
                                title: 'URL API',
                                url: 'html5-urlapi-1'
                            }
                        ]
                    },
                    {
                        id: 110018,
                        title: 'Notifications',
                        desc: 'Notifications API 允许网页控制向最终用户显示系统通知 —这些都在顶级浏览上下文视口之外，因此即使用户已经切换标签页或移动到不同的应用程序，也可以显示。该API被设计成与不同平台上的现有通知系统兼容。',
                        child: [
                            {
                                title: 'Notifications API',
                                url: 'html5-notifications-1'
                            },
                            {
                                title: 'Notifications基础说明',
                                url: 'html5-notifications-2'
                            },
                            {
                                title: 'Notifications实例',
                                url: 'html5-notifications-3'
                            },
                            {
                                title: '使用Notification API实现html5桌面通知',
                                url: 'html5-notifications-4'
                            }
                        ]
                    },
                    {
                        id: 110019,
                        title: 'Meta',
                        desc: 'meta属性在HTML中占据了很重要的位置。如：针对搜索引擎的SEO，文档的字符编码，设置刷新缓存等。虽然一些网页可能没有使用meta，但是作为正规军，我们还是有必要了解一些meta的属性，并且能够熟练使用它们。 ',
                        child: [
                            {
                                title: 'meta属性的使用详解',
                                url: 'html5-meta-1'
                            }
                        ]
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
                                title: 'Video对象属性',
                                url: 'html5-video-1'
                            },
                            {
                                title: 'Video支持视频格式',
                                url: 'html5-video-2'
                            },
                            {
                                title: 'Video对象方法',
                                url: 'html5-video-3'
                            },
                            {
                                title: 'Video 标签沉浸式播放解决方案',
                                url: 'html5-video-4'
                            },
                            {
                                title: '能省流量的 HTML5 视频播放器 西瓜播放器',
                                url: 'html5-video-5'
                            }
                        ]
                    },
                    {
                        id: 111101,
                        title: '音频',
                        flag: 'recommend',
                        icon: './app/img/edu/speak.jpg',
                        desc: 'Web Audio API 提供了在Web上控制音频的一个非常有效通用的系统，允许开发者来自选音频源，对音频添加特效，使音频可视化，添加空间效果 （如平移），等等。',
                        child: [
                            {
                                title: '文本的语音朗读',
                                url: 'html5-audio-1'
                            },
                            {
                                title: '文本合成语音',
                                url: 'html5-audio-2'
                            },
                            {
                                title: '网页中文本朗读功能开发实现',
                                url: 'html5-audio-3'
                            }
                        ]
                    },
                    {
                        id: 111102,
                        title: 'Canvas',
                        flag: 'recommend',
                        icon: './app/img/edu/canvas.jpg',
                        desc: '标签定义图形，比如图表和其他图像，您必须使用脚本来绘制图形。你可以通过多种方法使用 canvas 绘制路径,盒、圆、字符以及添加图像。',
                        child: [
                            {
                                title: 'Pointer Lock API实现的图片无限3D旋转实例',
                                url: 'html5-canvas-1'
                            },
                            {
                                title: '使用Canvas实现黑客帝国数字雨',
                                url: 'html5-canvas-2'
                            },
                            {
                                title: 'canvas 实现本地文件上传预览功能',
                                url: 'html5-canvas-3'
                            },
                            {
                                title: 'Canvas手写字',
                                url: 'html5-canvas-4'
                            },
                            {
                                title: '让Canvas全屏',
                                url: 'html5-canvas-5'
                            }
                        ]
                    },
                    {
                        id: 111103,
                        title: 'WebGL',
                        icon: './app/img/edu/webgl.jpg',
                        desc: 'WebGL（Web图形库）是Web上的3D图形的新标准，它是专用于绘制2D图形和交互式3D图形的目的。它是从OpenGL ES 2.0库，用于手机和其他移动设备的低级3D的API衍生。 WebGL提供ES2.0（嵌入式系统）类似的功能并在现代3D图形硬件上表现优异。它可以与HTML5使用一个JavaScript的API。 HTML5有几个功能，支持3D图形，如2D画布，WebGL，SVG，CSS3D变换和SMIL。WebGL代码编写在HTML5的canvas标签内。它是一种规范，允许互联网浏览器使用的计算机访问图形处理单元（GPU）。',
                        child: [
                            { title: "WebGL是什么东西?", url: "html5-webgl-1" },
                            { title: "WebGL的优势", url: "html5-webgl-2" },
                            { title: "WebGL基本图形概念", url: "html5-webgl-3" },
                            { title: "Html5 Canvas介绍", url: "html5-webgl-4" },
                            { title: "WebGL基础", url: "html5-webgl-5" },
                            { title: "WebGL着色器程序", url: "html5-webgl-6" },
                            { title: "WebGL图形管线", url: "html5-webgl-7" },
                            { title: "WebGL示例程序", url: "html5-webgl-8" },
                            { title: "WebGL Context上下文", url: "html5-webgl-9" },
                            { title: "WebGL几何体", url: "html5-webgl-10" },
                            { title: "WebGL着色器", url: "html5-webgl-11" },
                            { title: "WebGL关联属性和缓冲区对象", url: "html5-webgl-12" },
                            { title: "WebGL绘制模型", url: "html5-webgl-13" },
                            { title: "WebGL绘制点", url: "html5-webgl-14" },
                            { title: "WebGL绘制三角形", url: "html5-webgl-15" },
                            { title: "WebGL绘图的模式", url: "html5-webgl-16" },
                            { title: "WebGL绘制四边形", url: "html5-webgl-17" },
                            { title: "WebGL颜色", url: "html5-webgl-18" },
                            { title: "WebGL平移", url: "html5-webgl-19" },
                            { title: "WebGL缩放", url: "html5-webgl-20" },
                            { title: "WebGL旋转", url: "html5-webgl-21" },
                            { title: "WebGL立方体旋转", url: "html5-webgl-22" },
                            { title: "WebGL交互式立方体", url: "html5-webgl-23" }
                        ]
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
                        desc: 'HTML5 支持内联 SVG,可伸缩矢量图形。',
                        child: [
                            { title: "模糊滤镜", url: "html5-svg-feGaussianBlur" },
                            { title: "投/阴影滤镜", url: "html5-svg-dropShadow" },
                            { title: "feBlend", url: "html5-svg-feBlend" },
                            { title: "feColorMatrix", url: "html5-svg-feColorMatrix" },
                            { title: "feComponentTransfer", url: "html5-svg-feComponentTransfer" },
                            { title: "feDiffuseLighting", url: "html5-svg-feDiffuseLighting" },
                            { title: "线性渐变色", url: "html5-svg-linearGradient" },
                            { title: "辐射式渐变色", url: "html5-svg-radialGradient" },
                            { title: "animation概览", url: "html5-svg-1" },
                            { title: "animation概览 set", url: "html5-svg-2" },
                            { title: "animate", url: "html5-svg-3" },
                            { title: "animateTransform", url: "html5-svg-4" },
                            { title: "animateMotion", url: "html5-svg-5" },
                            { title: "自由组合", url: "html5-svg-6" },
                            { title: "暂停与播放", url: "html5-svg-7" },
                            { title: "animation参数详解", url: "html5-svg-8" },
                            { title: "SVG 实现动态模糊动画效果", url: "html5-svg-17" }
                        ]
                    },
                    {
                        id: 111107,
                        title: 'IndexedDB',
                        desc: 'IndexedDB是HTML5规范里新出现的浏览器里内置的数据库。对于在浏览器里存储数据，你可以使用cookies或local storage，但它们都是比较简单的技术，而IndexedDB提供了类似数据库风格的数据存储和使用方式。存储在IndexedDB里的数据是永久保存，不像cookies那样只是临时的。IndexedDB里提供了查询数据的功能，在online和offline模式下都能使用。你可以用IndexedDB存储大型数据。<br>IndexedDB里数据以对象的形式存储，每个对象都有一个key值索引。IndexedDB里的操作都是事务性的。一种对象存储在一个objectStore里，objectStore就相当于关系数据库里的表。IndexedDB可以有很多objectStore，objectStore里可以有很多对象。每个对象可以用key值获取。',
                        child: [
                            { title: "IndexedDB vs LocalStorage", url: "html5-IndexedDB-1" },
                            { title: "IndexedDB vs Web SQL", url: "html5-IndexedDB-2" },
                            { title: "IndexedDB vs Cookies", url: "html5-IndexedDB-3" },
                            { title: "打开一个IndexedDB数据库", url: "html5-IndexedDB-4" },
                            { title: "往ObjectStore里新增对象", url: "html5-IndexedDB-5" },
                            { title: "从ObjectStore里删除对象", url: "html5-IndexedDB-6" },
                            { title: "通过key取出对象", url: "html5-IndexedDB-7" },
                            { title: "更新一个对象", url: "html5-IndexedDB-8" }
                        ]
                    },
                    {
                        id: 111108,
                        title: 'img',
                        desc: 'img 元素向网页中嵌入一幅图像。img标签并不会在网页中插入图像，而是从网页上链接图像。img标签创建的是被引用图像的占位空间。img标签每出现一次，一个 Image 对象就会被创建。',
                        child: [
                            { title: "base64数据 1×1的Gif透明图片", url: "html5-img-5" }
                        ]
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
                        desc: 'CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。通过CSS3,您能够创建圆角边框,向矩形添加阴影,使用图片来绘制边框。',
                        child: [
                            {
                                title: 'border-image',
                                url: 'css3-border-1'
                            }
                        ]
                    },
                    {
                        id: 220002,
                        title: '阴影',
                        desc: 'CSS3 box-shadow 属性用来描述一个元素的一个或多个阴影效果,该属性几乎可以让你完成你想要的任何阴影效果。',
                        child: [
                            {
                                title: 'box-shadow',
                                url: 'css3-shadow-1'
                            }
                        ]
                    },
                    {
                        id: 220003,
                        title: '圆角',
                        desc: 'CSS3 border-radius 属性,你可以给任何元素制作 "圆角"。'
                    },
                    {
                        id: 220004,
                        title: '背景',
                        desc: 'CSS3 包含多个新的背景属性,它们提供了对背景更强大的控制。例如背景剪切,多个背景以及调整背景大小的选项。',
                        child: [
                            {
                                title: 'background-blend-mode',
                                url: 'css3-background-1'
                            },
                            {
                                title: 'background-size',
                                url: 'css3-background-2'
                            }
                        ]
                    },
                    {
                        id: 220005,
                        title: '文本',
                        desc: 'CSS3 包含多个新的背景属性,它们提供了对背景更强大的控制。例如背景剪切,多个背景以及调整背景大小的选项。',
                        child: [
                            {
                                title: 'text-overflow',
                                url: 'css3-text-1'
                            },
                            {
                                title: 'text-transform',
                                url: 'css3-text-2'
                            },
                            {
                                title: 'writing-mode',
                                url: 'css3-text-3'
                            },
                            {
                                title: 'word-break',
                                url: 'css3-text-4'
                            },
                            {
                                title: 'word-spacing',
                                url: 'css3-text-5'
                            },
                            {
                                title: 'word-wrap',
                                url: 'css3-text-6'
                            },
                            {
                                title: '单行或多行文本溢出显示省略号',
                                url: 'css3-text-7'
                            }
                        ]
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
                                title: '两栏式布局',
                                url: 'css3-grid-1'
                            },
                            {
                                title: '三明治布局',
                                url: 'css3-grid-2'
                            },
                            {
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
                        desc: 'CSS3中新出现的多列布局(multi-column)是传统HTML网页中块状布局模式的有力扩充。这种新语法能够让WEB开发人员轻松的让文本呈现多列显示。',
                        child: [
                            {
                                title: '多列(Multi-column) 属性',
                                url: 'css3-multiColumn-1'
                            },
                            {
                                title: 'column-count',
                                url: 'css3-multiColumn-2'
                            },
                            {
                                title: 'column-width',
                                url: 'css3-multiColumn-3'
                            },
                            {
                                title: 'columns',
                                url: 'css3-multiColumn-4'
                            },
                            {
                                title: 'column-gap(列间隙)',
                                url: 'css3-multiColumn-5'
                            },
                            {
                                title: 'column-rule',
                                url: 'css3-multiColumn-6'
                            },
                            {
                                title: 'column-span',
                                url: 'css3-multiColumn-7'
                            }
                        ]
                    },
                    {
                        id: 221103,
                        title: '用户界面',
                        flag: 'recommend',
                        icon: './app/img/edu/boxsizing.jpg',
                        desc: 'CSS3 用户界面 在CSS3 中, 增加了一些新的用户界面特性来调整元素尺寸,框尺寸和外边框。 resize, box-sizing, outline-offset',
                        child: [
                            {
                                title: 'box-sizing',
                                url: 'css3-boxsizing-1'
                            }
                        ]
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
                        desc: 'animation是CSS3中新增的属性,它可以制作出多种酷炫的动画效果,如果对flash有一定的了解,那这个属性就会很容易学习。 ',
                        child: [
                            {
                                title: 'CSS3动画之逐帧动画',
                                url: 'css3-animation-1'
                            },
                            {
                                title: 'CSS3实现闪光字',
                                url: 'css3-animation-2'
                            }
                        ]
                    },
                    {
                        id: 221106,
                        title: '滤镜',
                        flag: 'recommend',
                        icon: './app/img/edu/filter.jpg',
                        desc: 'css3 的滤镜 filter 属性,可以对网页中的图片进行类似 Photoshop 图片处理的效果, h5 时代的来临,我们可以通过 css 对图像进行处理。',
                        child: [
                            {
                                title: '高斯模糊blur',
                                url: 'css3-filter-1'
                            },
                            {
                                title: '图片变亮brightness',
                                url: 'css3-filter-2'
                            },
                            {
                                title: '调整图像的对比度contrast',
                                url: 'css3-filter-3'
                            },
                            {
                                title: '阴影效果drop-shadow',
                                url: 'css3-filter-4'
                            },
                            {
                                title: '灰度图像grayscale',
                                url: 'css3-filter-5'
                            },
                            {
                                title: '色相旋转hue-rotate',
                                url: 'css3-filter-6'
                            },
                            {
                                title: '反转输入图像invert',
                                url: 'css3-filter-7'
                            },
                            {
                                title: '图像透明度opacity',
                                url: 'css3-filter-8'
                            },
                            {
                                title: '图像饱和度saturate',
                                url: 'css3-filter-9'
                            },
                            {
                                title: '图像转换为深褐色sepia',
                                url: 'css3-filter-10'
                            },
                            {
                                title: '复合滤镜',
                                url: 'css3-filter-11'
                            },
                            {
                                title: '所有滤镜实例',
                                url: 'css3-filter-12'
                            }
                        ]
                    },
                    {
                        id: 221107,
                        title: '裁剪样式',
                        desc: '通过clip-path把一个div（元素，可以是图片等）裁切成不同的形状',
                        flag: 'recommend',
                        icon: './app/img/edu/css-clip-path.png',
                        child: [
                            {
                                title: '定义和用法',
                                url: 'css3-clipPath-1'
                            },
                            {
                                title: 'css3的clip-path方法剪裁实现（三角形，多边形，圆，椭圆）',
                                url: 'css3-clipPath-2'
                            },
                            {
                                title: '圆形circle（半径at圆心坐标）',
                                url: 'css3-clipPath-3'
                            },
                            {
                                title: '椭圆形ellipse（长、短轴半径at圆心坐标）',
                                url: 'css3-clipPath-4'
                            },
                            {
                                title: '内置矩形inset（上右下左的边距round上右下左圆角）',
                                url: 'css3-clipPath-5'
                            },
                            {
                                title: '正三角形',
                                url: 'css3-clipPath-6'
                            },
                            {
                                title: '正方形',
                                url: 'css3-clipPath-7'
                            },
                            {
                                title: '正五边形',
                                url: 'css3-clipPath-8'
                            },
                            {
                                title: '正六边形',
                                url: 'css3-clipPath-9'
                            },
                            {
                                title: '正七边形',
                                url: 'css3-clipPath-10'
                            },
                            {
                                title: '正八边形',
                                url: 'css3-clipPath-11'
                            }
                        ]
                    },
                    {
                        id: 221108,
                        title: 'Scroll Snap',
                        desc: 'CSS的新特性 scroll-snap 能解决平时开发的什么问题呢？主要是滚动商品列表、滚动图片列表等，日常开发中为了实现这类效果我们往往需要借助js来实现滚动时的平滑过渡，而有了 scroll-snap 我们则可以摆脱js，直接使用css来实现这类效果。',
                        child: [
                            {
                                title: 'Scroll Snap介绍',
                                url: 'css3-scrollSnap-1'
                            },
                            {
                                title: 'scroll-snap-type',
                                url: 'css3-scrollSnap-2'
                            },
                            {
                                title: 'scroll-snap-align',
                                url: 'css3-scrollSnap-3'
                            },
                            {
                                title: 'scroll-snap-stop',
                                url: 'css3-scrollSnap-4'
                            },
                            {
                                title: 'scroll-padding',
                                url: 'css3-scrollSnap-5'
                            }
                        ]
                    },
                    {
                        id: 221109,
                        title: 'object-fit',
                        desc: 'object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度。object-fit 一般用于 img 和 video 标签，一般可以对这些元素进行保留原始比例的剪切、缩放或者直接进行拉伸等。注意: Internet Explorer/Edge 15 或更早版本的浏览器不支持 object-fit 属性。',
                        child: [
                            {
                                title: 'object-fit',
                                url: 'css3-object-1'
                            }
                        ]
                    },
                    {
                        id: 221110,
                        title: 'object-position',
                        desc: '根据容器大小重置图片的大小，并设置图片的位置',
                        child: [
                            {
                                title: 'object-position',
                                url: 'css3-object-2'
                            }
                        ]
                    },
                    {
                        id: 221111,
                        title: 'perspective',
                        desc: '设置元素被查看位置的视图,perspective 属性定义 3D 元素距视图的距离，以像素计。该属性允许您改变 3D 元素查看 3D 元素的视图。<br>当为元素定义 perspective 属性时，其子元素会获得透视效果，而不是元素本身。<br>注释：perspective 属性只影响 3D 转换元素。<br>请与 perspective-origin 属性一同使用该属性，这样您就能够改变 3D 元素的底部位置。',
                        child: [
                            {
                                title: 'perspective',
                                url: 'css3-perspective-1'
                            },
                            {
                                title: 'perspective-origin',
                                url: 'css3-perspective-2'
                            }
                        ]
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
                        title: '移动端',
                        child: [
                            { title: "修改手机地址栏状态栏颜色", url: "css3-mt-1" },
                            { title: "移动端1px问题的解决办法", url: "css3-mt-2" },
                            { title: "CSS3 动画卡顿性能优化解决方案", url: "css3-mt-3" },
                            { title: "解决UC浏览器默认把wap页面字体放大问题", url: "css3-mt-4" },
                            { title: "解决苹果浏览器iframe不能滚动问题", url: "css3-mt-5" }
                        ]
                    },
                    {
                        id: 223301,
                        title: '布局适配',
                        flag: 'recommend',
                        icon: './app/img/edu/layout.jpg'
                    },
                    {
                        id: 223302,
                        title: '实例',
                        child: [
                            {
                                title: '滚动视差',
                                url: 'css3-case-1'
                            },
                            {
                                title: 'CSS实现代码高亮显示行数原理解析',
                                url: 'css3-case-2'
                            }
                        ]
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
                        title: 'TypeScript',
                        desc: '',
                        icon: './app/img/edu/ts.jpg'
                    }
                ]
            },
            {
                id: 3311,
                title: 'JS对象',
                child: [
                    {
                        id: 331100,
                        title: 'Array',
                        flag: 'recommend',
                        icon: './app/img/edu/array.jpg',
                        desc: 'JavaScript的 Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。',
                        child: [
                            {
                                title: '数组思维导图',
                                url: 'js-array-1'
                            },
                            {
                                title: 'Array对象方法',
                                url: 'js-array-12'
                            },
                            {
                                title: 'Array.from',
                                url: 'js-array-2'
                            },
                            {
                                title: 'Array.of',
                                url: 'js-array-3'
                            },
                            {
                                title: '从数组中删除虚值',
                                url: 'js-array-4'
                            },
                            {
                                title: '从数组中获取随机值',
                                url: 'js-array-5'
                            },
                            {
                                title: '求两个数组的交集',
                                url: 'js-array-6'
                            },
                            {
                                title: '将数组转换为对象',
                                url: 'js-array-7'
                            },
                            {
                                title: 'Array.from达到.map 的效果',
                                url: 'js-array-8'
                            },
                            {
                                title: '5种迭代方法',
                                url: 'js-array-9'
                            },
                            {
                                title: 'flat将多维数组展平成一维数组',
                                url: 'js-array-10'
                            },
                            {
                                title: 'flatMap',
                                url: 'js-array-11'
                            },
                            {
                                title: '扁平化并去重并排序',
                                url: 'js-array-13'
                            }
                        ]
                    },
                    {
                        id: 331101,
                        title: 'Boolean',
                        desc: ''
                    },
                    {
                        id: 331102,
                        title: 'Date',
                        desc: ''
                    },
                    {
                        id: 331103,
                        title: 'Math',
                        desc: 'Math 是一个内置对象，它拥有一些数学常数属性和数学函数方法。',
                        child: [
                            {
                                title: '绝对值 Math.abs',
                                url: 'js-math-1'
                            },
                            {
                                title: '反余弦值 Math.acos',
                                url: 'js-math-2'
                            },
                            {
                                title: '反双曲余弦值 Math.acosh',
                                url: 'js-math-3'
                            },
                            {
                                title: '反正弦 Math.asin',
                                url: 'js-math-4'
                            },
                            {
                                title: '反双曲正弦值 Math.asinh',
                                url: 'js-math-5'
                            },
                            {
                                title: '反正切 Math.atan',
                                url: 'js-math-6'
                            },
                            {
                                title: 'Math.atan2',
                                url: 'js-math-7'
                            },
                            {
                                title: '反双曲正切值 Math.atanh',
                                url: 'js-math-8'
                            },
                            {
                                title: '立方根 Math.cbrt',
                                url: 'js-math-9'
                            },
                            {
                                title: '最小整数 Math.ceil',
                                url: 'js-math-10'
                            },
                            {
                                title: '余弦值 Math.cos',
                                url: 'js-math-11'
                            },
                            {
                                title: '双曲余弦函数 Math.cosh',
                                url: 'js-math-12'
                            },
                            {
                                title: '最大整数 Math.floor',
                                url: 'js-math-13'
                            },
                            {
                                title: '平方和的平方根 Math.hypot',
                                url: 'js-math-14'
                            },
                            {
                                title: '相乘 Math.imul',
                                url: 'js-math-15'
                            },
                            {
                                title: 'Math.sign',
                                url: 'js-math-16'
                            },
                            {
                                title: '正弦值 Math.sin',
                                url: 'js-math-17'
                            },
                            {
                                title: '双曲正弦值 Math.sinh',
                                url: 'js-math-18'
                            },
                            {
                                title: '平方根 Math.sqrt',
                                url: 'js-math-19'
                            },
                            {
                                title: '正切值 Math.tan',
                                url: 'js-math-20'
                            },
                            {
                                title: '双曲正切函数值 Math.tanh',
                                url: 'js-math-21'
                            },
                            {
                                title: '留整 Math.trunc',
                                url: 'js-math-22'
                            },
                            {
                                title: '三角函数在动画中的应用',
                                url: 'js-math-23'
                            },
                            {
                                title: '水波图实现原理',
                                url: 'js-math-24'
                            }
                        ]
                    },
                    {
                        id: 331104,
                        title: 'Number',
                        desc: ''
                    },
                    {
                        id: 331105,
                        title: 'String',
                        desc: 'String 全局对象是一个用于字符串或一个字符序列的构造函数。',
                        child: [
                            {
                                title: '字符串函数学习思维导图',
                                url: 'js-string-5'
                            },
                            {
                                title: 'charAt',
                                url: 'js-string-1'
                            },
                            {
                                title: 'repeat',
                                url: 'js-string-2'
                            },
                            {
                                title: 'substring',
                                url: 'js-string-3'
                            },
                            {
                                title: 'raw',
                                url: 'js-string-4'
                            }
                        ]
                    },
                    {
                        id: 331106,
                        title: 'RegExp',
                        desc: '正则表达式(regular expression)描述了一种字符串匹配的模式（pattern），可以用来检查一个串是否含有某种子串、将匹配的子串替换或者从某个串中取出符合某个条件的子串等。',
                        child: [
                            { title: '正则表达式图示', url: 'js-regexp-1' },
                            { title: "test,exec,match,replace方法的区别", url: 'js-regexp-2' },
                            { title: "元字符", url: 'js-regexp-3' },
                            { title: "非打印字符", url: 'js-regexp-4' },
                            { title: "特殊字符", url: 'js-regexp-5' },
                            { title: "限定符", url: 'js-regexp-6' },
                            { title: "定位符", url: 'js-regexp-7' },
                            { title: "选择", url: 'js-regexp-8' },
                            { title: "反向引用", url: 'js-regexp-9' },
                            { title: "运算符优先级", url: 'js-regexp-10' },
                            { title: "基本模式匹配", url: 'js-regexp-11' },
                            { title: "字符簇", url: 'js-regexp-12' },
                            { title: "确定重复出现", url: 'js-regexp-13' },
                            { title: "常见表达式示例", url: 'js-regexp-14' },
                            { title: "去除字符串左右两端的空格", url: 'js-regexp-15' },
                            { title: "正则验证固话与手机", url: 'js-regexp-16' },
                            { title: "正则实例", url: 'js-regexp-17' }
                        ]
                    },
                    {
                        id: 331107,
                        title: 'Functions',
                        desc: '',
                        child: [
                            {
                                title: '函数基础',
                                url: 'js-function-1'
                            },
                            {
                                title: '字符串函数',
                                url: 'js-function-2'
                            },
                            {
                                title: '函数的调用模式',
                                url: 'js-function-3'
                            }
                        ]
                    },
                    {
                        id: 331108,
                        title: 'Events',
                        desc: ''
                    },
                    {
                        id: 331109,
                        title: 'NaN',
                        desc: '全局属性 NaN 的值表示不是一个数字（Not-A-Number）。',
                        child: [
                            {
                                title: 'NaN',
                                url: 'js-nan-1'
                            }
                        ]
                    },
                    {
                        id: 331110,
                        title: 'Object',
                        desc: 'Object 构造函数创建一个对象包装器。',
                        child: [
                            {
                                title: 'Object.assign',
                                url: 'js-object-1'
                            },
                            {
                                title: 'Object.create',
                                url: 'js-object-2'
                            },
                            {
                                title: 'Object.defineProperties',
                                url: 'js-object-3'
                            },
                            {
                                title: 'Object.defineProperty',
                                url: 'js-object-4'
                            },
                            {
                                title: 'Object.entries',
                                url: 'js-object-5'
                            },
                            {
                                title: 'Object.freeze',
                                url: 'js-object-6'
                            },
                            {
                                title: 'Object.fromEntries',
                                url: 'js-object-7'
                            },
                            {
                                title: 'Object.isFrozen',
                                url: 'js-object-8'
                            },
                            {
                                title: 'Object.isSealed',
                                url: 'js-object-9'
                            }
                        ]
                    },
                    {
                        id: 331111,
                        title: 'Reflect',
                        desc: 'Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。',
                        child: [
                            {
                                title: '常见的方法',
                                url: 'js-reflect-1'
                            },
                            {
                                title: 'Reflect.set',
                                url: 'js-reflect-2'
                            },
                            {
                                title: 'Reflect.construct',
                                url: 'js-reflect-3'
                            },
                            {
                                title: 'Reflect.get',
                                url: 'js-reflect-4'
                            },
                            {
                                title: 'Reflect.apply',
                                url: 'js-reflect-5'
                            },
                            {
                                title: 'Reflect.has',
                                url: 'js-reflect-6'
                            },
                            {
                                title: 'Reflect.defineProperty',
                                url: 'js-reflect-7'
                            },
                            {
                                title: 'Reflect.deleteProperty',
                                url: 'js-reflect-8'
                            },
                            {
                                title: 'Reflect.getOwnPropertyDescriptor',
                                url: 'js-reflect-9'
                            },
                            {
                                title: 'Reflect.ownKeys',
                                url: 'js-reflect-10'
                            },
                            {
                                title: 'Reflect.isExtensible',
                                url: 'js-reflect-11'
                            },
                            {
                                title: 'Reflect.preventExtensions',
                                url: 'js-reflect-12'
                            },
                            {
                                title: 'Reflect.setPrototypeOf',
                                url: 'js-reflect-13'
                            }
                        ]
                    },
                    {
                        id: 331112,
                        title: 'Promise',
                        flag: 'recommend',
                        icon: './app/img/edu/promise.jpg',
                        desc: 'Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。',
                        child: [
                            {
                                title: 'Promise.all',
                                url: 'js-promise-1'
                            },
                            {
                                title: 'Promise.allSettled',
                                url: 'js-promise-2'
                            },
                            {
                                title: 'Promise.any',
                                url: 'js-promise-3'
                            },
                            {
                                title: 'Promise.prototype.then',
                                url: 'js-promise-4'
                            },
                            {
                                title: 'Promise.prototype.catch',
                                url: 'js-promise-5'
                            },
                            {
                                title: 'Promise.prototype.finally',
                                url: 'js-promise-6'
                            },
                            {
                                title: 'Promise.race',
                                url: 'js-promise-7'
                            }
                        ]
                    },
                    {
                        id: 331113,
                        title: 'Proxy',
                        desc: 'Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。',
                        child: [
                            {
                                title: 'Proxy',
                                url: 'js-proxy-1'
                            },
                            {
                                title: 'Proxy.revocable',
                                url: 'js-proxy-2'
                            },
                            {
                                title: 'handler 对象的方法',
                                url: 'js-proxy-3'
                            },
                            {
                                title: '无操作转发代理',
                                url: 'js-proxy-4'
                            },
                            {
                                title: '验证',
                                url: 'js-proxy-5'
                            },
                            {
                                title: '扩展构造函数',
                                url: 'js-proxy-6'
                            },
                            {
                                title: '操作 DOM 节点',
                                url: 'js-proxy-7'
                            },
                            {
                                title: '值修正及附加属性',
                                url: 'js-proxy-8'
                            },
                            {
                                title: '通过属性查找数组中的特定对象',
                                url: 'js-proxy-9'
                            },
                            {
                                title: '一个完整的 traps 列表示例',
                                url: 'js-proxy-10'
                            }
                        ]
                    },
                    {
                        id: 331114,
                        title: 'Fetch',
                        flag: 'recommend',
                        icon: './app/img/edu/fetch.jpg',
                        desc: 'XMLHttpRequest来完成ajax有些老而过时了。fetch()能让我们完成类似 XMLHttpRequest (XHR) 提供的ajax功能。它们之间的主要区别是，Fetch API 使用了 Promises，它让接口更简单、简洁，避免了回调的复杂性，省去了使用复杂的 XMLHttpRequest API。',
                        child: [
                            {
                                title: '基本Fetch用法',
                                url: 'js-fetch-1'
                            },
                            {
                                title: '返回数据对象的元数据(Metadata)',
                                url: 'js-fetch-2'
                            },
                            {
                                title: '响应的对象Response类型',
                                url: 'js-fetch-3'
                            },
                            {
                                title: '串联Promises',
                                url: 'js-fetch-4'
                            },
                            {
                                title: '用fetch执行表单数据提交',
                                url: 'js-fetch-5'
                            },
                            {
                                title: '在Fetch请求里发送用户身份凭证信息',
                                url: 'js-fetch-6'
                            },
                            {
                                title: 'POST请求',
                                url: 'js-fetch-14'
                            },
                            {
                                title: '提交JSON数据',
                                url: 'js-fetch-7'
                            },
                            {
                                title: '提交表单',
                                url: 'js-fetch-8'
                            },
                            {
                                title: '文件上传',
                                url: 'js-fetch-9'
                            },
                            {
                                title: '直接上传二进制数据',
                                url: 'js-fetch-10'
                            },
                            {
                                title: 'cache',
                                url: 'js-fetch-11'
                            },
                            {
                                title: 'credentials是否发送Cookie',
                                url: 'js-fetch-12'
                            },
                            {
                                title: '取消fetch请求',
                                url: 'js-fetch-13'
                            },
                            {
                                title: '读取内容的方法',
                                url: 'js-fetch-15'
                            },
                            {
                                title: 'Response.clone',
                                url: 'js-fetch-16'
                            }
                        ]
                    },
                    {
                        id: 331115,
                        title: 'JSON',
                        flag: 'recommend',
                        icon: './app/img/edu/json.jpg',
                        desc: 'JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。是JavaScript的一个子集。JSON还定死了字符集必须是UTF-8，表示多语言就没有问题了。为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。',
                        child: [
                            {
                                title: 'stringify转字符串',
                                url: 'js-json-1'
                            },
                            {
                                title: 'stringify转格式化字符串',
                                url: 'js-json-2'
                            },
                            {
                                title: 'stringify转指定key的字符串',
                                url: 'js-json-3'
                            },
                            {
                                title: 'stringify传函数',
                                url: 'js-json-4'
                            },
                            {
                                title: 'stringify定义toJSON',
                                url: 'js-json-5'
                            },
                            {
                                title: 'JSON.parse',
                                url: 'js-json-6'
                            }
                        ]
                    },
                    {
                        id: 331116,
                        title: 'WeakSet',
                        desc: 'WeakSet 对象允许你将弱保持对象存储在一个集合中。',
                        child: [
                            {
                                title: 'WeakSet',
                                url: 'js-weakset-1'
                            }
                        ]
                    }
                ]
            },
            {
                id: 3322,
                title: 'BOM',
                child: [
                    {
                        id: 332200,
                        title: 'Window',
                        desc: '',
                        child: [
                            {
                                title: 'Window对象',
                                url: 'js-window-1'
                            },
                            {
                                title: 'atob/btoa',
                                url: 'js-window-2'
                            },
                            {
                                title: 'crypto',
                                url: 'js-window-3'
                            },
                            {
                                title: 'Fullscreen',
                                url: 'js-window-4'
                            },
                            {
                                title: 'History',
                                url: 'js-window-5'
                            }
                        ]
                    },
                    {
                        id: 332201,
                        title: 'Navigator',
                        desc: ''
                    },
                    {
                        id: 332202,
                        title: 'Screen',
                        desc: ''
                    },
                    {
                        id: 332203,
                        title: 'History',
                        desc: ''
                    },
                    {
                        id: 332204,
                        title: 'Location',
                        desc: ''
                    }
                ]
            },
            {
                id: 3333,
                title: 'DOM',
                child: [
                    {
                        id: 333300,
                        title: 'DOM',
                        flag: 'recommend',
                        icon: './app/img/edu/dom.jpg',
                        desc: '通过HTML DOM,JavaScript 能够访问和改变 HTML 文档的所有元素。',
                        child: [
                            {
                                title: 'DOM思维导图',
                                url: 'js-dom-1'
                            },
                            {
                                title: 'DOM对象方法',
                                url: 'js-dom-2'
                            },
                            {
                                title: 'DOM属性',
                                url: 'js-dom-3'
                            }
                        ]
                    },
                    {
                        id: 333301,
                        title: 'Document',
                        desc: ''
                    },
                    {
                        id: 333302,
                        title: 'Element',
                        desc: ''
                    },
                    {
                        id: 333303,
                        title: 'Attribute',
                        desc: ''
                    },
                    {
                        id: 333304,
                        title: 'Event',
                        desc: ''
                    }
                ]
            },
            {
                id: 3344,
                title: '设计模式',
                child: [
                    {
                        id: 334400,
                        title: '设计模式',
                        flag: 'recommend',
                        icon: './app/img/edu/module.jpg',
                        desc: '每个JS开发者都力求写出可维护、复用性和可读性高的代码。随着应用不断扩大，代码组织的合理性也越来越重要。设计模式为特定环境下的常见问题提供了一个组织结构，对于克服这些挑战起到至关重要的作用。'
                    }
                ]
            },
            {
                id: 3355,
                title: '数据结构',
                child: [
                    {
                        id: 335500,
                        title: '栈',
                        desc: '栈(Stack)是一种遵循后进先出（LIFO）原则的有序集合。新添加的或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都接近栈顶，旧元素都接近栈底。',
                        child: [
                            {
                                title: '栈数据结构',
                                url: 'js-dataStructure-stack1'
                            },
                            {
                                title: '栈的实现',
                                url: 'js-dataStructure-stack2'
                            },
                            {
                                title: '栈的应用,十进制转任意进制',
                                url: 'js-dataStructure-stack3'
                            },
                            {
                                title: '栈的应用,逆波兰表达式计算',
                                url: 'js-dataStructure-stack4'
                            },
                            {
                                title: '栈的应用,利用普通栈实现一个有min方法的栈',
                                url: 'js-dataStructure-stack5'
                            }
                        ]
                    },
                    {
                        id: 335501,
                        title: '队列',
                        desc: '队列(Queue)是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。',
                        child: [
                            {
                                title: '队列数据结构',
                                url: 'js-dataStructure-queue1'
                            },
                            {
                                title: '队列的实现',
                                url: 'js-dataStructure-queue2'
                            },
                            {
                                title: '队列的应用,约瑟夫环（普通模式）',
                                url: 'js-dataStructure-queue3'
                            },
                            {
                                title: '队列的应用,菲波那切数列（普通模式）',
                                url: 'js-dataStructure-queue4'
                            },
                            {
                                title: '队列的应用,用队列实现一个栈',
                                url: 'js-dataStructure-queue5'
                            }
                        ]
                    },
                    {
                        id: 335502,
                        title: '链表',
                        desc: '链表(Linked List)'
                    },
                    {
                        id: 335503,
                        title: '树',
                        desc: '树(Tree)'
                    },
                    {
                        id: 335504,
                        title: '图',
                        desc: '图(Graph)'
                    },
                    {
                        id: 335505,
                        title: '堆',
                        desc: '堆(Heap)'
                    },
                    {
                        id: 335506,
                        title: '散列表',
                        desc: '散列表(Hash)'
                    },
                    {
                        id: 335507,
                        title: '算法',
                        flag: 'recommend',
                        icon: './app/img/edu/suanfa.jpg',
                        desc: '',
                        child: [
                            {
                                title: '翻转字符串算法',
                                url: 'js-suanfa-1'
                            },
                            {
                                title: '计算所提供整数的阶乘',
                                url: 'js-suanfa-2'
                            },
                            {
                                title: '回文算法',
                                url: 'js-suanfa-3'
                            },
                            {
                                title: '查找最长单词',
                                url: 'js-suanfa-4'
                            },
                            {
                                title: '设置首字母大写算法',
                                url: 'js-suanfa-5'
                            },
                            {
                                title: '寻找数组中的最大值算法',
                                url: 'js-suanfa-6'
                            },
                            {
                                title: '确认末尾字符算法',
                                url: 'js-suanfa-7'
                            },
                            {
                                title: '斐波那契数列',
                                url: 'js-suanfa-8'
                            }
                        ]
                    }
                ]
            },
            {
                id: 3366,
                title: '实例',
                child: [
                    {
                        id: 336601,
                        title: '常用函数',
                        desc: '收集一些实用性很强的函数',
                        child: [
                            {
                                title: '获取地址栏参数',
                                url: 'js-casefun-1'
                            },
                            {
                                title: '判断微信浏览器',
                                url: 'js-casefun-2'
                            },
                            {
                                title: '手机端判断浏览器类型',
                                url: 'js-casefun-3'
                            },
                            {
                                title: '防抖&节流',
                                url: 'js-casefun-4'
                            },
                            {
                                title: '转义还原html标签',
                                url: 'js-casefun-5'
                            },
                            {
                                title: '判断是否为数字类型',
                                url: 'js-casefun-6'
                            },
                            {
                                title: '设置获取cookie',
                                url: 'js-casefun-7'
                            },
                            {
                                title: '加入收藏夹',
                                url: 'js-casefun-8'
                            },
                            {
                                title: '设为首页',
                                url: 'js-casefun-9'
                            },
                            {
                                title: '返回浏览器版本',
                                url: 'js-casefun-10'
                            },
                            {
                                title: '兼容浏览器绑定元素事件',
                                url: 'js-casefun-11'
                            },
                            {
                                title: '格式化压缩CSS样式',
                                url: 'js-casefun-12'
                            },
                            {
                                title: 'base64数据导出下载文件',
                                url: 'js-casefun-13'
                            },
                            {
                                title: '全屏退出全屏',
                                url: 'js-casefun-14'
                            },
                            {
                                title: '时间个性化输出功能',
                                url: 'js-casefun-15'
                            },
                            {
                                title: 'file转为base64',
                                url: 'js-casefun-16'
                            },
                            {
                                title: 'blob流转换为base64',
                                url: 'js-casefun-17'
                            },
                            {
                                title: 'base64转换为blob',
                                url: 'js-casefun-18'
                            },
                            {
                                title: 'base64转换为file,IE低版本不兼容',
                                url: 'js-casefun-19'
                            },
                            {
                                title: '图片url转化成base64',
                                url: 'js-casefun-20'
                            },
                            {
                                title: '浏览器环境检测',
                                url: 'js-casefun-21'
                            },
                            {
                                title: '实现锚点滚动',
                                url: 'js-casefun-22'
                            },
                            {
                                title: '把原始list转换成树形结构',
                                url: 'js-casefun-23'
                            },
                            {
                                title: '删除左右两端的空格',
                                url: 'js-casefun-24'
                            },
                            {
                                title: '判断密码强度',
                                url: 'js-casefun-25'
                            },
                            {
                                title: '判断是否为email',
                                url: 'js-casefun-26'
                            },
                            {
                                title: '生成X位随机数',
                                url: 'js-casefun-27'
                            },
                            {
                                title: '获取日期前几后几天',
                                url: 'js-casefun-28'
                            },
                            {
                                title: '获取最近的12个月份',
                                url: 'js-casefun-29'
                            },
                            {
                                title: '生成一个uuid',
                                url: 'js-casefun-30'
                            },
                            {
                                title: '实现平滑返回顶部动画',
                                url: 'js-casefun-31'
                            },
                            {
                                title: '原生scrollTo平滑滚动',
                                url: 'js-casefun-32'
                            },
                            {
                                title: '无阻塞加载',
                                url: 'js-casefun-33'
                            },
                            {
                                title: '把json导出为xls',
                                url: 'js-casefun-34'
                            },
                            {
                                title: '跨浏览器绑定事件',
                                url: 'js-casefun-35'
                            },
                            {
                                title: '加入收藏夹',
                                url: 'js-casefun-36'
                            },
                            {
                                title: '提取页面代码中所有网址',
                                url: 'js-casefun-37'
                            },
                            {
                                title: '实现base64解码',
                                url: 'js-casefun-38'
                            },
                            {
                                title: '确认是否是键盘有效输入值',
                                url: 'js-casefun-39'
                            },
                            {
                                title: '全角半角转换',
                                url: 'js-casefun-40'
                            },
                            {
                                title: '字符串长度截取',
                                url: 'js-casefun-41'
                            },
                            {
                                title: '跨浏览器删除事件',
                                url: 'js-casefun-42'
                            },
                            {
                                title: '获取cookie值',
                                url: 'js-casefun-43'
                            },
                            {
                                title: '获得URL中GET参数值',
                                url: 'js-casefun-44'
                            },
                            {
                                title: '获取移动设备初始化大小',
                                url: 'js-casefun-45'
                            },
                            {
                                title: '获取页面高度',
                                url: 'js-casefun-46'
                            },
                            {
                                title: '获取页面scrollLeft,scrollTop',
                                url: 'js-casefun-47'
                            },
                            {
                                title: '获取页面宽度,可视宽度,高度',
                                url: 'js-casefun-48'
                            },
                            {
                                title: '获取移动设备屏幕宽度',
                                url: 'js-casefun-49'
                            },
                            {
                                title: '获取网页被卷去的位置',
                                url: 'js-casefun-50'
                            },
                            {
                                title: '获取移动设备最大化大小',
                                url: 'js-casefun-51'
                            },
                            {
                                title: '判断是否安卓/苹果移动设备访问',
                                url: 'js-casefun-52'
                            },
                            {
                                title: '替换地址栏',
                                url: 'js-casefun-53'
                            },
                            {
                                title: '解决offsetX兼容性问题',
                                url: 'js-casefun-54'
                            },
                            {
                                title: '将键值对拼接成URL带参数',
                                url: 'js-casefun-55'
                            },
                            {
                                title: '去掉url前缀',
                                url: 'js-casefun-56'
                            },
                            {
                                title: 'resize的操作',
                                url: 'js-casefun-57'
                            },
                            {
                                title: '设置cookie值',
                                url: 'js-casefun-58'
                            },
                            {
                                title: '设为首页',
                                url: 'js-casefun-59'
                            },
                            {
                                title: '延时执行',
                                url: 'js-casefun-60'
                            },
                            {
                                title: '清除脚本内容',
                                url: 'js-casefun-61'
                            },
                            {
                                title: '时间个性化输出功能',
                                url: 'js-casefun-62'
                            },
                            {
                                title: '金额大写转换函数',
                                url: 'js-casefun-63'
                            },
                            {
                                title: '实现utf8解码',
                                url: 'js-casefun-64'
                            },
                            {
                                title: '前端js实现打印/导出excel表格',
                                url: 'js-casefun-65'
                            },
                            {
                                title: '函数柯里化',
                                url: 'js-casefun-66'
                            },
                            {
                                title: '类型判断',
                                url: 'js-casefun-67'
                            },
                            {
                                title: '防抖节流原理、区别以及应用',
                                url: 'js-casefun-68'
                            },
                            {
                                title: '把一堆整数分成三份，确保每一份和尽量相等',
                                url: 'js-casefun-69'
                            },
                            {
                                title: '前端网页截图：Canvas截图 vs SVG截图',
                                url: 'js-casefun-70'
                            },
                            {
                                title: '获取日历的上一个月和下一个月',
                                url: 'js-casefun-71'
                            }
                        ]
                    },
                    {
                        id: 336602,
                        title: '动画',
                        desc: 'JS动画特效实例演示',
                        child: [
                            {
                                title: '原生js实现碰撞反弹球特效',
                                url: 'js-animation-1'
                            }
                        ]
                    },
                    {
                        id: 336603,
                        title: '大数据处理',
                        desc: '大量数据渲染时的处理',
                        child: [
                            {
                                title: 'JS控制html分屏加载',
                                url: 'js-bigdata-1'
                            },
                            {
                                title: '大规格文件的上传优化',
                                url: 'js-bigdata-2'
                            },
                            {
                                title: 'JavaScript操作文件和二进制数据',
                                url: 'js-bigdata-3'
                            }
                        ]
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
                                title: '平级组件通信',
                                url: 'frames-vue-1'
                            },
                            {
                                title: '跨域设置',
                                url: 'frames-vue-2'
                            },
                            {
                                title: 'setup中不能使用this问题',
                                url: 'frames-vue-3'
                            },
                            {
                                title: 'setup中不能使用router.push问题',
                                url: 'frames-vue-4'
                            },
                            {
                                title: 'setup',
                                url: 'frames-vue-5'
                            },
                            {
                                title: 'effect',
                                url: 'frames-vue-6'
                            },
                            {
                                title: 'Vue中的事件修饰符',
                                url: 'frames-vue-7'
                            },
                            {
                                title: 'v-for里面数据层次太多，数据不刷新怎么办',
                                url: 'frames-vue-8'
                            },
                            {
                                title: 'keep-alive',
                                url: 'frames-vue-9'
                            },
                            {
                                title: 'Vue中key的作用',
                                url: 'frames-vue-10'
                            },
                            {
                                title: 'Vue.use与Vue.component的区别',
                                url: 'frames-vue-11'
                            },
                            {
                                title: 'Vue中常见的性能优化',
                                url: 'frames-vue-12'
                            },
                            {
                                title: '高精度全局权限处理',
                                url: 'frames-vue-13'
                            },
                            {
                                title: 'Proxy,defineProperty',
                                url: 'frames-vue-14'
                            },
                            {
                                title: 'Vue性能优化方法',
                                url: 'frames-vue-15'
                            },
                            {
                                title: 'vue使用cdn',
                                url: 'frames-vue-16'
                            },
                            {
                                title: 'vue中怎么重置data',
                                url: 'frames-vue-17'
                            },
                            {
                                title: '组件中写name选项的作用',
                                url: 'frames-vue-18'
                            },
                            {
                                title: 'errorCaptured与errorHandler',
                                url: 'frames-vue-19'
                            },
                            {
                                title: 'vue渲染大量数据时优化',
                                url: 'frames-vue-20'
                            },
                            {
                                title: '在watch监听开始之后立即被调用',
                                url: 'frames-vue-21'
                            },
                            {
                                title: 'Vue自定义指令实现按钮级权限控制功能',
                                url: 'frames-vue-22'
                            },
                            {
                                title: 'Vue项目中,如何禁止页面的缩放',
                                url: 'frames-vue-23'
                            },
                            {
                                title: '路由变化页面数据不刷新问题',
                                url: 'frames-vue-24'
                            },
                            {
                                title: '异步回调函数中使用this无法指向vue实例对象',
                                url: 'frames-vue-25'
                            },
                            {
                                title: 'setInterval路由跳转继续运行并没有及时进行销毁',
                                url: 'frames-vue-26'
                            },
                            {
                                title: 'vue 滚动行为用法，进入路由需要滚动到浏览器底部、头部等等',
                                url: 'frames-vue-27'
                            },
                            {
                                title: '实现vue路由拦截浏览器的需求，进行一系列操作，如草稿保存等等',
                                url: 'frames-vue-28'
                            },
                            {
                                title: 'Vue3 ref、reactive、toRef、toRefs、customRef的区别',
                                url: 'frames-vue-29'
                            }
                        ]
                    },
                    {
                        id: 440002,
                        title: 'Vue源码解析',
                        icon: './app/img/edu/vue3.jpg',
                        child: [
                            {
                                title: 'Vue实现数据双向绑定的原理',
                                url: 'frames-vuesource-1'
                            },
                            {
                                title: 'Vue响应式数据的原理',
                                url: 'frames-vuesource-2'
                            },
                            {
                                title: '为何Vue采用异步渲染',
                                url: 'frames-vuesource-3'
                            },
                            {
                                title: 'nextTick实现原理',
                                url: 'frames-vuesource-4'
                            },
                            {
                                title: 'Vue中Computed和watch',
                                url: 'frames-vuesource-5'
                            },
                            {
                                title: 'Vue组件中data为什么必须是一个函数',
                                url: 'frames-vuesource-6'
                            },
                            {
                                title: 'Vue中事件绑定原理',
                                url: 'frames-vuesource-7'
                            },
                            {
                                title: 'v-model的实现原理',
                                url: 'frames-vuesource-8'
                            },
                            {
                                title: 'Vue中的v-show和v-if',
                                url: 'frames-vuesource-9'
                            },
                            {
                                title: 'v-if和v-for为什么不能连用',
                                url: 'frames-vuesource-10'
                            },
                            {
                                title: 'Vue中的v-html会导致哪些问题',
                                url: 'frames-vuesource-11'
                            },
                            {
                                title: 'Vue中父子组件的调用顺序',
                                url: 'frames-vuesource-12'
                            },
                            {
                                title: 'Vue中父组件监听子组件的生命周期',
                                url: 'frames-vuesource-13'
                            },
                            {
                                title: 'Vue中组件怎么通讯',
                                url: 'frames-vuesource-14'
                            },
                            {
                                title: '为什么使用异步组件',
                                url: 'frames-vuesource-15'
                            },
                            {
                                title: '用vnode描述一个DOM结构',
                                url: 'frames-vuesource-16'
                            },
                            {
                                title: 'Vue中diff算法原理',
                                url: 'frames-vuesource-17'
                            },
                            {
                                title: 'vue是怎么实现数据侦测的？',
                                url: 'frames-vuesource-18'
                            },
                            {
                                title: 'vue的模版编译过程?',
                                url: 'frames-vuesource-19'
                            },
                            {
                                title: 'vm.$set()具体是做什么的?',
                                url: 'frames-vuesource-20'
                            },
                            {
                                title: 'vm.$delete()具体是做什么的？',
                                url: 'frames-vuesource-21'
                            },
                            {
                                title: 'vm.$on,vm.$off,vm.$once,vm.$emit实现原理',
                                url: 'frames-vuesource-22'
                            },
                            {
                                title: '指令的执行原理',
                                url: 'frames-vuesource-23'
                            },
                            {
                                title: 'Vue的事件绑定原理',
                                url: 'frames-vuesource-24'
                            },
                            {
                                title: '为什么Vue采用异步渲染呢？',
                                url: 'frames-vuesource-25'
                            },
                            {
                                title: 'Vue中判断是否为自定义组件',
                                url: 'frames-vuesource-26'
                            },
                            {
                                title: 'Vue3里为什么要用Proxy替代defineProperty',
                                url: 'frames-vuesource-27'
                            }
                        ]
                    },
                    {
                        id: 440003,
                        title: 'VueX',
                        icon: './app/img/edu/vuex.jpg',
                        desc: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。',
                        child: [
                            {
                                title: 'Vuex是什么? 怎么使用它? 哪种功能场景使用?',
                                url: 'frames-vuex-1'
                            },
                            {
                                title: '同级action如何互相调用',
                                url: 'frames-vuex-2'
                            },
                            {
                                title: 'actions和mutations的区别',
                                url: 'frames-vuex-3'
                            },
                            {
                                title: 'assets和static的区别',
                                url: 'frames-vuex-4'
                            }
                        ]
                    },
                    {
                        id: 440004,
                        title: 'VueRouter',
                        desc: 'Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。',
                        child: [
                            {
                                title: '$route和$router的区别',
                                url: 'frames-vuerouter-1'
                            },
                            {
                                title: '路由的钩子函数',
                                url: 'frames-vuerouter-2'
                            },
                            {
                                title: 'vue-router路由守卫',
                                url: 'frames-vuerouter-3'
                            },
                            {
                                title: 'hash模式和history模式',
                                url: 'frames-vuerouter-4'
                            }
                        ]
                    },
                    {
                        id: 440005,
                        title: 'VueCLI',
                        desc: 'Vue-cli是vue官方出品的快速构建单页应用的脚手架',
                        icon: './app/img/edu/vuecli.jpg',
                        child: [
                            {
                                title: 'vue init命令来初始化项目',
                                url: 'frames-vuecli-1'
                            },
                            {
                                title: 'VueCLI项目结构详解',
                                url: 'frames-vuecli-2'
                            },
                            {
                                title: 'VueCLI原理分析',
                                url: 'frames-vuecli-3'
                            }
                        ]
                    },
                    {
                        id: 440006,
                        title: 'SSR',
                        icon: ''
                    },
                    {
                        id: 440007,
                        title: 'VuePress',
                        icon: ''
                    },
                    {
                        id: 440008,
                        title: 'Nuxt',
                        icon: ''
                    },
                    {
                        id: 440009,
                        title: 'Element',
                        desc: 'Element,一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库'
                    },
                    {
                        id: 440010,
                        title: 'Vant',
                        desc: 'Vant 是有赞开源的一套基于 vue 的Mobile 组件库。通过 Vant,可以快速搭建出风格统一的页面,提升开发效率。'
                    },
                    {
                        id: 440011,
                        title: 'NutUI',
                        desc: 'NutUI 是一套来自京东用户体验设计部(JDC)前端开发部的移动端 Vue 组件库'
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
                        desc: 'React 是一个用于构建用户界面的 JAVASCRIPT 库。 React主要用于构建UI,很多人认为 React 是 MVC 中的 V(视图)。',
                        child: [
                            { title: "React16.8+的⽣命周期", url: "frames-react-25" },
                            { title: "阻止多次点击", url: "frames-react-1" },
                            { title: "在create-react-app中使用装饰器", url: "frames-react-2" },
                            { title: "render里面尽量减少新建变量和bind函数", url: "frames-react-3" },
                            { title: "定制shouldComponentUpdate函数", url: "frames-react-4" },
                            { title: "Immutable.js", url: "frames-react-5" },
                            { title: "多个react组件性能优化，key的优化", url: "frames-react-6" },
                            { title: "带坑的写法", url: "frames-react-7" },
                            { title: "首屏加载优化", url: "frames-react-8" },
                            { title: "在生产中部署ES2015+代码", url: "frames-react-9" },
                            { title: "组件简写优化", url: "frames-react-10" },
                            { title: "组件static的使用", url: "frames-react-11" },
                            { title: "react设置代理服务器", url: "frames-react-12" },
                            { title: "setState更新状态的2种写法", url: "frames-react-13" },
                            { title: "路由组件lazy", url: "frames-react-14" },
                            { title: "stateHook", url: "frames-react-15" },
                            { title: "effectHook", url: "frames-react-16" },
                            { title: "refHook", url: "frames-react-17" },
                            { title: "Fragment", url: "frames-react-18" },
                            { title: "Context", url: "frames-react-19" },
                            { title: "组件优化", url: "frames-react-20" },
                            { title: "renderProps", url: "frames-react-21" },
                            { title: "错误边界", url: "frames-react-22" },
                            { title: "组件通信方式总结", url: "frames-react-23" },
                            { title: "非受控组件与受控组件", url: "frames-react-24" }
                        ]
                    },
                    {
                        id: 441101,
                        title: 'ReactRouter',
                        desc: 'React Router 是导航组件的集合，可与你的应用程序进行声明式的组合。无论你是想为你的 Web 应用程序添加书签，还是在 React Native 中进行组件化导航，React Router 都可以在 React 的任何位置渲染使用 - 所以请考虑使用！',
                        child: [
                            {
                                title: '路由安装',
                                url: 'frames-reactRouter-1'
                            },
                            {
                                title: '路由的基本使用',
                                url: 'frames-reactRouter-2'
                            },
                            {
                                title: '路由组件与一般组件有什么不同',
                                url: 'frames-reactRouter-3'
                            },
                            {
                                title: '路由的严格匹配与模糊匹配',
                                url: 'frames-reactRouter-4'
                            },
                            {
                                title: 'Redirect的使用',
                                url: 'frames-reactRouter-5'
                            },
                            {
                                title: '向路由组件传递params参数',
                                url: 'frames-reactRouter-6'
                            },
                            {
                                title: '向路由组件传递search参数',
                                url: 'frames-reactRouter-7'
                            },
                            {
                                title: '向路由组件传递state参数',
                                url: 'frames-reactRouter-8'
                            },
                            {
                                title: 'withRouter的使用',
                                url: 'frames-reactRouter-9'
                            }
                        ]
                    },
                    {
                        id: 441102,
                        title: 'PubSubJS',
                        desc: '一个利用JavaScript进行发布/订阅的库',
                        child: [
                            {
                                title: '安装及使用',
                                url: 'frames-pubsubjs-1'
                            }
                        ]
                    },
                    {
                        id: 441103,
                        title: 'Redux',
                        desc: 'redux是一个专门用于做状态管理的js库(不是react的插件库),作用是集中式管理react应用中多个组件共享的状态。',
                        child: [
                            {
                                title: 'react-redux开发者工具',
                                url: 'frames-redux-1'
                            }
                        ]
                    },
                    {
                        id: 441104,
                        title: 'MobX',
                        desc: 'MobX是一个经久考验的库,使得状态管理简单而且透明、可伸缩的应用功能反应性编程(TFRP)。MobX背后的哲学很简单:任何源自应用状态的东西都应该自动地获得。其中包括UI、数据序列化、服务器通讯，等等。',
                        child: [
                            {
                                title: '安装与使用',
                                url: 'frames-mobx-1'
                            }
                        ]
                    },
                    {
                        id: 441105,
                        title: 'antd',
                        desc: 'antd 是基于 Ant Design 设计体系的 React UI 组件库,主要用于研发企业级中后台产品。',
                        child: [
                            {
                                title: 'antd按需引入与自定义主题',
                                url: 'frames-antd-1'
                            }
                        ]
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
                        desc: 'ECharts开源来自百度商业前端数据可视化团队,基于html5 Canvas，是一个纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。创新的拖拽重计算、数据视图、值域漫游等特性大大增强了用户体验，赋予了用户对数据进行挖掘、整合的能力。',
                        child: [
                            { title: "柱状图虚线显示", url: "frames-echarts-1" },
                            { title: "折线图虚线显示", url: "frames-echarts-2" },
                            { title: "渐变的折线", url: "frames-echarts-3" },
                            { title: "用阴影加背色添加虚构数据", url: "frames-echarts-4" },
                            { title: "折线分段颜色", url: "frames-echarts-5" }
                        ]
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
                                title: 'ie9,10,11环境下发现axios存在兼容性',
                                url: 'frames-axios-1'
                            },
                            {
                                title: 'axios 库封装',
                                url: 'frames-axios-2'
                            }
                        ]
                    },
                    {
                        id: 443301,
                        title: 'CryptoJS',
                        desc: 'crypto-js(GitHub)是谷歌开发的一个纯JavaScript的加密算法类库，可以非常方便的在前端进行其所支持的加解密操作。目前crypto-js已支持的算法有：MD5,SHA-1,SHA-256,AES,Rabbit,MARC4,HMAC,HMAC-MD5,HMAC-SHA1,HMAC-SHA256,PBKDF2。常用的加密方式有MD5和AES，使用时可以引用总文件，也可以单独引用某一文件。',
                        child: [
                            {
                                title: 'Hash、AES、Base64和HEX功能',
                                url: 'frames-crypto-1'
                            },
                            {
                                title: 'vue应用Aes',
                                url: 'frames-crypto-2'
                            }
                        ]
                    },
                    {
                        id: 443302,
                        title: 'wowjs',
                        icon: './app/img/edu/wowjs.jpg',
                        desc: '如果你希望你的页面也更加有趣，那么你可以试试 WOW.js。WOW.js 依赖 animate.css，所以它支持 animate.css 多达 60 多种的动画效果，能满足您的各种需求。',
                        child: [
                            { title: "WOW.js介绍及浏览器兼容", url: "frames-wowjs-1" },
                            { title: "WOW.js使用方法", url: "frames-wowjs-2" },
                            { title: "WOW.js配置", url: "frames-wowjs-3" }
                        ]
                    },
                    {
                        id: 443303,
                        title: 'chobi',
                        desc: 'chobi是一款轻量级的客户端处理图片javascript插件。该图片处理插件使用过滤器算法来处理图片，为图片设置不同的亮度、对比度和饱和度。它使用canvas来重绘图片，可以下载处理后的图片。',
                        child: [
                            { title: "支持的图片效果", url: "frames-chobi-1" },
                            { title: "使用方法", url: "frames-chobi-2" },
                            { title: "chobi API", url: "frames-chobi-3" },
                            { title: "chobi 下载地址", url: "frames-chobi-4" }
                        ]
                    },
                    {
                        id: 443304,
                        title: 'Syntaxy',
                        desc: 'Syntaxy.js是一款小巧灵活的网页语法高亮js插件。Syntaxy.js支持各种主流的编程语言，提供3种主题样式。它默认是JS插件，但是也可以作为jQuery插件来使用。',
                        child: [
                            { title: "使用方法", url: "frames-syntaxy-1" },
                        ]
                    },
                    {
                        id: 443305,
                        title: 'clipboard',
                        desc: 'clipboard.js是一款轻量级的实现复制文本到剪贴板功能的JavaScript插件。通过该插件可以将输入框，文本域，DIV元素中的文本等文本内容复制到剪贴板中。它不依赖flash，使用非常简单。',
                        child: [
                            { title: "浏览器兼容及安装使用与下载", url: "frames-clipboard-s1" },
                            { title: "复制文本", url: "frames-clipboard-s2" },
                            { title: "剪切文本", url: "frames-clipboard-s3" },
                            { title: "从属性中复制", url: "frames-clipboard-s4" },
                            { title: "事件", url: "frames-clipboard-s5" },
                            { title: "高级参数", url: "frames-clipboard-s6" }
                        ]
                    },
                    {
                        id: 443306,
                        title: 'lib-flexible',
                        desc: '移动端自适配方案lib-flexible.js 的作用就是让你在不同的终端设备之间如鱼得水，如入无人之境。',
                        child: [
                            {
                                title: '移动端自适配方案lib-flexible',
                                url: 'frames-flexible-1'
                            }
                        ]
                    },
                    {
                        id: 443307,
                        title: 'vue-simple-uploader',
                        desc: '基于vue-simple-uploader封装文件分片上传、秒传及断点续传的全局上传插件',
                        child: [
                            {
                                title: '关于vue-simple-uploader',
                                url: 'frames-vueSimpleUploader-1'
                            },
                            {
                                title: '基于vue-simple-uploader封装全局上传组件',
                                url: 'frames-vueSimpleUploader-2'
                            },
                            {
                                title: '文件上传流程概览',
                                url: 'frames-vueSimpleUploader-3'
                            },
                            {
                                title: '文件分片',
                                url: 'frames-vueSimpleUploader-4'
                            },
                            {
                                title: 'MD5的计算过程',
                                url: 'frames-vueSimpleUploader-5'
                            },
                            {
                                title: '秒传及断点续传',
                                url: 'frames-vueSimpleUploader-6'
                            },
                            {
                                title: '对于前端来说',
                                url: 'frames-vueSimpleUploader-7'
                            },
                            {
                                title: '前端做分片检验',
                                url: 'frames-vueSimpleUploader-8'
                            },
                            {
                                title: '源码及后记',
                                url: 'frames-vueSimpleUploader-9'
                            }
                        ]
                    },
                    {
                        id: 443308,
                        title: 'face-api',
                        desc: '一个建立在「tensorflow.js」内核上的 javascript API——「face-api.js」，它实现了三种卷积神经网络架构，用于完成人脸检测、识别和特征点检测任务，可以在浏览器中进行人脸识别。',
                        child: []
                    },
                    {
                        id: 443309,
                        title: '二维码',
                        flag: 'recommend',
                        icon: './app/img/edu/qrcode.jpg',
                        desc: '',
                        child: []
                    },
                    {
                        id: 443310,
                        title: 'Alipay',
                        flag: 'recommend',
                        icon: './app/img/edu/alipay.jpg',
                        desc: '',
                        child: []
                    },
                    {
                        id: 443311,
                        title: 'templateJS',
                        flag: 'recommend',
                        icon: './app/img/edu/template.jpg',
                        desc: '',
                        child: []
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
                                title: '2XX状态码',
                                url: 'nodejs-http-2'
                            },
                            {
                                title: '3XX状态码',
                                url: 'nodejs-http-3'
                            },
                            {
                                title: '4XX状态码',
                                url: 'nodejs-http-4'
                            },
                            {
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
                                title: 'JWT的原理',
                                url: 'nodejs-jwt-1'
                            },
                            {
                                title: 'JWT的数据结构',
                                url: 'nodejs-jwt-2'
                            },
                            {
                                title: 'JWT的使用方式',
                                url: 'nodejs-jwt-3'
                            },
                            {
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
                        desc: 'nodemon是一种工具，可以自动检测到目录中的文件更改时通过重新启动应用程序来调试基于node.js的应用程序。',
                        child: [
                            {
                                title: 'nodemon安装与使用',
                                url: 'nodejs-nodemon-1'
                            },
                            {
                                title: '通过配置nodemon.json文件来使用',
                                url: 'nodejs-nodemon-2'
                            }
                        ]
                    },
                    {
                        id: 551101,
                        title: 'nvm',
                        flag: 'recommend',
                        desc: 'nvm全名node.js version management,顾名思义是一个nodejs的版本管理工具。通过它可以安装和切换不同版本的nodejs。',
                        icon: './app/img/edu/nvm.jpg',
                        child: [
                            {
                                title: 'nvm安装',
                                url: 'nodejs-nvm-1'
                            },
                            {
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
                                title: 'nrm安装',
                                url: 'nodejs-nrm-1'
                            }
                        ]
                    },
                    {
                        id: 551103,
                        title: 'PM2',
                        flag: 'recommend',
                        desc: 'PM2（Process Manager 2 ）是具有内置负载均衡器的Node.js应用程序的生产运行时和进程管理器。 它允许您永久保持应用程序活跃，无需停机即可重新加载它们，并促进常见的Devops任务。',
                        icon: './app/img/edu/pm2.jpg',
                        child: [
                            {
                                title: 'PM2特性',
                                url: 'nodejs-pm2-1'
                            },
                            {
                                title: 'PM2安装',
                                url: 'nodejs-pm2-2'
                            },
                            {
                                title: 'PM2命令大全',
                                url: 'nodejs-pm2-3'
                            },
                            {
                                title: 'PM2配置文件方式',
                                url: 'nodejs-pm2-4'
                            },
                            {
                                title: 'PM2命令方式',
                                url: 'nodejs-pm2-5'
                            }
                        ]
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
                title: 'Fastify',
                child: [
                    {
                        id: 554400,
                        title: 'Fastify',
                        desc: 'Fastify 是一个高度专注于以最少的开销和强大的插件架构为开发人员提供最佳开发体验的 Web 框架。 Fastify 受到 Hapi 和 Express 框架的启发。据我们所知，Fastify 是我们村最快的 web 框架之一，也是我们“全村的希望”！',
                        child: [
                            {
                                title: 'Fastify核心功能',
                                url: 'nodejs-fastify-1'
                            }
                        ]
                    }
                ]
            },
            {
                id: 5545,
                title: 'MongoDB',
                child: [
                    {
                        id: 554500,
                        title: 'MongoDB',
                        flag: 'recommend',
                        icon: './app/img/edu/MongoDB.jpg'
                    },
                    {
                        id: 554501,
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
                        icon: './app/img/edu/flutter.jpg',
                        desc: 'Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。',
                        child: [
                            {
                                title: '安装与配置',
                                url: 'applets-flutter-1'
                            },
                            {
                                title: 'StatelessWidget与StatefulWidget的选择',
                                url: 'applets-flutter-2'
                            }
                        ]
                    },
                    {
                        id: 660001,
                        title: 'Weex',
                        flag: 'recommend',
                        icon: './app/img/edu/weex.jpg'
                    },
                    {
                        id: 660002,
                        title: 'uni-app',
                        flag: 'recommend',
                        icon: './app/img/edu/uniapp.jpg'
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
                        flag: 'recommend,hot',
                        icon: './app/img/edu/webpack.jpg',
                        desc: 'Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析,然后将这些模块按照指定的规则生成对应的静态资源。',
                        child: [
                            {
                                title: '常见的Loader',
                                url: 'tools-webpack-1'
                            },
                            {
                                title: '常见的Plugin',
                                url: 'tools-webpack-2'
                            },
                            {
                                title: '介绍bundle,chunk,module',
                                url: 'tools-webpack-3'
                            },
                            {
                                title: '提高webpack的构建速度',
                                url: 'tools-webpack-4'
                            },
                            {
                                title: '文件指纹',
                                url: 'tools-webpack-5'
                            },
                            {
                                title: '多进程打包',
                                url: 'tools-webpack-6'
                            },
                            {
                                title: 'babel缓存',
                                url: 'tools-webpack-7'
                            },
                            {
                                title: '代码分割code split',
                                url: 'tools-webpack-8'
                            },
                            {
                                title: '懒加载 预加载',
                                url: 'tools-webpack-9'
                            },
                            {
                                title: 'dll对第三方库单独打包',
                                url: 'tools-webpack-10'
                            },
                            {
                                title: 'externals拒绝包打入',
                                url: 'tools-webpack-11'
                            },
                            {
                                title: 'Vue页面骨架屏',
                                url: 'tools-webpack-12'
                            },
                            {
                                title: '使用 .vue 文件来完成骨架屏',
                                url: 'tools-webpack-13'
                            },
                            {
                                title: '骨架屏插件',
                                url: 'tools-webpack-14'
                            },
                            {
                                title: 'splitChunks',
                                url: 'tools-webpack-15'
                            },
                            {
                                title: '优化 Webpack 的构建速度',
                                url: 'tools-webpack-16'
                            },
                            {
                                title: 'noParse',
                                url: 'tools-webpack-17'
                            },
                            {
                                title: 'IgnorePlugin',
                                url: 'tools-webpack-18'
                            },
                            {
                                title: 'thread-loader',
                                url: 'tools-webpack-19'
                            },
                            {
                                title: '压缩加速——开启多线程压缩',
                                url: 'tools-webpack-20'
                            },
                            {
                                title: '优化 Webpack 的打包体积',
                                url: 'tools-webpack-21'
                            },
                            {
                                title: '添加 IE 兼容',
                                url: 'tools-webpack-22'
                            },
                            {
                                title: '压缩图片',
                                url: 'tools-webpack-23'
                            },
                            {
                                title: '添加打包分析',
                                url: 'tools-webpack-24'
                            },
                            {
                                title: '配置 externals 引入 cdn 资源',
                                url: 'tools-webpack-25'
                            },
                            {
                                title: '多页面打包 multi-page',
                                url: 'tools-webpack-26'
                            },
                            {
                                title: '删除 moment 语言包',
                                url: 'tools-webpack-27'
                            },
                            {
                                title: '去掉 console.log',
                                url: 'tools-webpack-28'
                            },
                            {
                                title: '利用 splitChunks 单独打包第三方模块',
                                url: 'tools-webpack-29'
                            },
                            {
                                title: '开启 gzip Zopfli 压缩',
                                url: 'tools-webpack-30'
                            },
                            {
                                title: '为 sass 提供全局样式，以及全局变量',
                                url: 'tools-webpack-31'
                            },
                            {
                                title: '为 stylus 提供全局变量',
                                url: 'tools-webpack-32'
                            },
                            {
                                title: '预渲染 prerender-spa-plugin',
                                url: 'tools-webpack-33'
                            },
                            {
                                title: '静态资源自动打包上传阿里 oss、华为 obs',
                                url: 'tools-webpack-34'
                            },
                            {
                                title: '配置多环境变量',
                                url: 'tools-webpack-35'
                            },
                            {
                                title: '修复 HMR(热更新)失效',
                                url: 'tools-webpack-36'
                            },
                            {
                                title: '修复 Lazy loading routes Error： Cyclic dependency',
                                url: 'tools-webpack-37'
                            },
                            {
                                title: '添加别名 alias',
                                url: 'tools-webpack-38'
                            },
                            {
                                title: '自动生成雪碧图',
                                url: 'tools-webpack-39'
                            },
                            {
                                title: 'SVG 转 font 字体',
                                url: 'tools-webpack-40'
                            },
                            {
                                title: '使用 SVG 组件',
                                url: 'tools-webpack-41'
                            },
                            {
                                title: '揭秘webpack按需加载原理',
                                url: 'tools-webpack-42'
                            }
                        ]
                    },
                    {
                        id: 770001,
                        title: 'Vite',
                        desc: '相当于Vue项目构建的第二代产品，当然它也包含了项目的编译功能。需要注意一下Vite的生产环境下打包是通过Rollup来完成的',
                        child: [
                            {
                                title: 'vite使用',
                                url: 'tools-vite-1'
                            }
                        ]
                    },
                    {
                        id: 770002,
                        title: 'Parcel',
                        desc: '极速零配置Web应用打包工具',
                        child: [
                            {
                                title: 'vite使用',
                                url: 'tools-vite-1'
                            }
                        ]
                    },
                    {
                        id: 770003,
                        title: 'Rollup',
                        desc: 'Rollup 是一个 JavaScript 模块打包器,可以将小块代码编译成大块复杂的代码,Rollup 对代码模块使用新的标准化格式,这些标准都包含在 JavaScript 的 ES6 版本中。',
                        child: [
                            {
                                title: 'Rollup使用',
                                url: 'tools-Rollup-1'
                            }
                        ]
                    },
                    {
                        id: 770004,
                        title: 'FIS',
                        flag: 'recommend',
                        icon: './app/img/edu/fis.jpg',
                        desc: 'FIS3 , 为你定制的前端工程构建工具,解决前端开发中自动化工具、性能优化、模块化框架、开发规范、代码部署、开发流程等问题',
                        child: []
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
                        desc: '将 ECMAScript 2015 及其版本以后的 javascript 代码转为旧版本浏览器或者是环境中向后兼容版本的 javascript 代码。',
                        child: [
                            {
                                title: 'Babel',
                                url: 'tools-babel-1'
                            },
                            {
                                title: 'babel-preset-es2015 ( ES2015 / ES6 插件集合 )',
                                url: 'tools-babel-2'
                            },
                            {
                                title: 'babel-preset-es2016 （ ES2016 / ES7 插件集合 ）',
                                url: 'tools-babel-3'
                            },
                            {
                                title: 'babel-preset-es2017（ ES2017 / es8 插件集合 ）',
                                url: 'tools-babel-4'
                            },
                            {
                                title: 'babel-preset-stage-x （ ES2018/stage 插件集合 ）',
                                url: 'tools-babel-5'
                            },
                            {
                                title: '预设(presets)',
                                url: 'tools-babel-6'
                            },
                            {
                                title: '插件(plugins)',
                                url: 'tools-babel-7'
                            }
                        ]
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
                    },
                    {
                        id: 772201,
                        title: 'Performance',
                        desc: 'Chrome dev tools 家族的一个小兄弟，它在 Chrome 57 之前叫作「Timeline」，而现在换了个更长的马甲 —— 「Performance」',
                        child: [
                            {
                                title: '什么会影响你的页面性能',
                                url: 'tools-Performance-1'
                            },
                            {
                                title: '用正确的姿势启动 Performance',
                                url: 'tools-Performance-2'
                            },
                            {
                                title: '简单页面分析',
                                url: 'tools-Performance-3'
                            },
                            {
                                title: '动画分析',
                                url: 'tools-Performance-4'
                            }
                        ]
                    },
                    {
                        id: 772202,
                        title: 'Mock',
                        desc: 'mockjs 一个国人开发的库，可以拦截 ajax 请求和生成随机数据。',
                        child: [
                            {
                                title: 'mockjs的基础语法',
                                url: 'tools-mock-1'
                            },
                            {
                                title: 'mockjs基础API',
                                url: 'tools-mock-2'
                            }
                        ]
                    },
                    {
                        id: 772203,
                        title: 'Charles',
                        desc: 'Charles 中文叫「青花瓷」，是一款 Mac 网络代理软件，前端开发者应该挺熟悉的一个 App，通常用于网络请求抓包调试',
                        child: [
                            {
                                title: 'Charles用法',
                                url: 'tools-charles-1'
                            }
                        ]
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
                                title: 'vscode自动编译ts',
                                url: 'tools-vscode-1'
                            },
                            {
                                title: 'VSCODE解决禁止运行脚本',
                                url: 'tools-vscode-2'
                            },
                            {
                                title: 'VSCode里直接预览效果',
                                url: 'tools-vscode-3'
                            },
                            {
                                title: 'VSCode一个插件让你的代码更职业',
                                url: 'tools-vscode-4'
                            }
                        ]
                    }
                ]
            }, {
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
                                title: 'git流程图示',
                                url: 'tools-git-1'
                            },
                            {
                                title: '新建代码库',
                                url: 'tools-git-2'
                            },
                            {
                                title: '配置',
                                url: 'tools-git-3'
                            },
                            {
                                title: '增加/删除文件',
                                url: 'tools-git-4'
                            },
                            {
                                title: '代码提交',
                                url: 'tools-git-5'
                            },
                            {
                                title: '分支',
                                url: 'tools-git-6'
                            },
                            {
                                title: '标签',
                                url: 'tools-git-7'
                            },
                            {
                                title: '查看信息',
                                url: 'tools-git-8'
                            },
                            {
                                title: '远程同步',
                                url: 'tools-git-9'
                            },
                            {
                                title: '撤销',
                                url: 'tools-git-10'
                            },
                            {
                                title: '压缩包',
                                url: 'tools-git-11'
                            },
                            {
                                title: 'git clone',
                                url: 'tools-git-12'
                            },
                            {
                                title: 'git remote',
                                url: 'tools-git-13'
                            },
                            {
                                title: 'git fetch',
                                url: 'tools-git-14'
                            },
                            {
                                title: 'git pull',
                                url: 'tools-git-15'
                            },
                            {
                                title: 'git push',
                                url: 'tools-git-16'
                            },
                            {
                                title: 'error SSL_connect 443',
                                url: 'tools-git-17'
                            },
                            {
                                title: '撤销 git revert',
                                url: 'tools-git-18'
                            },
                            {
                                title: '解决远程冲突',
                                url: 'tools-git-19'
                            },
                            {
                                title: '本地branch改名',
                                url: 'tools-git-20'
                            },
                            {
                                title: '合并本地branch',
                                url: 'tools-git-21'
                            },
                            {
                                title: 'git stash 用法总结和注意点',
                                url: 'tools-git-22'
                            },
                            {
                                title: 'Git 如何优雅的版本回退',
                                url: 'tools-git-23'
                            }
                        ]
                    },
                    {
                        id: 774401,
                        title: 'Jenkins',
                        desc: 'Jenkins是一个开源的持续集成的服务器，Jenkins开源帮助我们自动构建各类项目。Jenkins强大的插件式，使得Jenkins可以集成很多软件，可能帮助我们持续集成我们的工程项目。',
                        flag: 'recommend',
                        icon: './app/img/edu/Jenkins.jpg'
                    }
                ]
            },
            {
                id: 7755,
                title: '服务',
                child: [
                    {
                        id: 775500,
                        title: 'Nginx',
                        desc: 'Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。',
                        child: [
                            {
                                title: 'nginx环境安装',
                                url: 'tools-nginx-1'
                            },
                            {
                                title: 'nginx基本配置文件详解',
                                url: 'tools-nginx-2'
                            },
                            {
                                title: 'nginx服务启动、停止、重启',
                                url: 'tools-nginx-3'
                            },
                            {
                                title: '自定义错误页和访问设置',
                                url: 'tools-nginx-4'
                            },
                            {
                                title: 'nginx访问权限详解',
                                url: 'tools-nginx-5'
                            },
                            {
                                title: 'nginx设置虚拟主机',
                                url: 'tools-nginx-6'
                            },
                            {
                                title: 'nginx设置反向代理',
                                url: 'tools-nginx-7'
                            },
                            {
                                title: 'nginx适配PC或移动设备',
                                url: 'tools-nginx-8'
                            },
                            {
                                title: 'nginx的Gzip压缩配置',
                                url: 'tools-nginx-9'
                            },
                            {
                                title: 'CORS nginx 添加跨域',
                                url: 'tools-nginx-10'
                            },
                            {
                                title: '配置结构',
                                url: 'tools-nginx-11'
                            },
                            {
                                title: '请求过滤',
                                url: 'tools-nginx-12'
                            },
                            {
                                title: '负载均衡',
                                url: 'tools-nginx-13'
                            },
                            {
                                title: '静态资源服务器',
                                url: 'tools-nginx-14'
                            }
                        ]
                    }
                ]
            }
        ]
    }
]