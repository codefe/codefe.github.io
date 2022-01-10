/**
 * 友情链接 web
 * 学习平台 study
 * 大牛网站 expert
 * 资源下载 download
 */
let links = {
    asideMenu: [
		{
			name: "返回首页",
			url: "./index.html"
		},
        {
			name: "学习平台",
			url: "./study.html?id=study"
		},
		{
			name: "前端大牛",
			url: "./study.html?id=expert"
		},
		{
			name: "资源下载",
			url: "./study.html?id=download"
		},
		{
			name: "前端工具",
			url: "./study.html?id=tool"
		}
	],
    web: [
        {
            title: 'Webpack',
            url: 'https://www.webpackjs.com/'
        },
        {
            title: 'Vite',
            url: 'https://vite.wiki/zh/'
        },
        {
            title: 'VueCLI',
            url: 'https://cli.vuejs.org/zh/'
        },
        {
            title: 'Next',
            url: 'https://www.nextjs.cn/'
        },
        {
            title: 'Docusaurus',
            url: 'https://www.docusaurus.cn/'
        },
        {
            title: 'Gatsby',
            url: 'https://www.gatsbyjs.cn/'
        },
        {
            title: 'Fastify',
            url: 'https://www.fastify.cn/'
        },
        {
            title: 'Babel',
            url: 'https://www.babeljs.cn/'
        },
        {
            title: 'Lodash',
            url: 'https://www.lodashjs.com/'
        },
        {
            title: 'ES6',
            url: 'https://es6.ruanyifeng.com/'
        },
        {
            title: 'TS',
            url: 'https://www.typescriptlang.org/zh/'
        },
        {
            title: 'PM2',
            url: 'https://pm2.keymetrics.io/'
        },
        {
            title: 'Canvas',
            url: 'https://www.canvasapi.cn/'
        },
        {
            title: 'ESLint',
            url: 'http://eslint.cn/'
        },
        {
            title: 'Swiper',
            url: 'https://3.swiper.com.cn/api/index.html'
        },
        {
            title: 'AnimeJS',
            url: 'https://www.animejs.cn/'
        },
        {
            title: 'Vue Test Utils',
            url: 'https://vue-test-utils.vuejs.org/zh/'
        },
        {
            title: 'TransX',
            url: 'https://github.com/tnfe/transx'
        },
        {
            title: 'SnapSVG',
            url: 'http://snapsvg.io/'
        },
        {
            title: 'GPU',
            url: 'https://gpu.rocks/'
        },
        {
            title: 'VAPTCHA',
            url: 'https://www.vaptcha.com/'
        },
        {
            title: 'MockJS',
            url: 'http://mockjs.com/'
        },
        {
            title: 'GraphQL',
            url: 'https://graphql.cn/'
        },
        {
            title: 'axios',
            url: 'http://www.axios-js.com/zh-cn/docs/'
        },
        {
            title: 'FabricJS',
            url: 'http://fabricjs.com/'
        }
    ],
    study: [
        {
            id: 1,
            title: 'B站',
            url: 'https://www.bilibili.com/',
            icon: './app/img/study/bilibili.jpg'
        },
        {
            id: 2,
            title: '网易云课堂',
            url: 'https://study.163.com/',
            icon: './app/img/study/study163.jpg'
        },
        {
            id: 3,
            title: '腾讯课堂',
            url: 'https://ke.qq.com/',
            icon: './app/img/study/keqq.jpg'
        },
        {
            id: 4,
            title: 'MOOC慕课网',
            url: 'https://www.imooc.com/',
            icon: './app/img/study/imooc.jpg'
        },
        {
            id: 5,
            title: '极客学院',
            url: 'https://www.jikexueyuan.com/',
            icon: './app/img/study/jike.jpg'
        },
        {
            id: 6,
            title: 'PHP中文网',
            url: 'https://www.php.cn/',
            icon: './app/img/study/php.jpg'
        },
        {
            id: 7,
            title: '后盾人',
            url: 'https://www.houdunren.com/',
            icon: ''
        },
        {
            id: 8,
            title: '谷粒学院',
            url: 'http://www.gulixueyuan.com/',
            icon: './app/img/study/gulixueyuan.jpg'
        },
        {
            id: 9,
            title: 'IT营',
            url: 'https://www.itying.com/',
            icon: ''
        },
        {
            id: 10,
            title: '蓝桥云课',
            url: 'https://www.lanqiao.cn/',
            icon: ''
        },
        {
            id: 11,
            title: '黑马程序员',
            url: 'https://www.itheima.com/',
            icon: ''
        },
        {
            id: 12,
            title: '谷粒学苑',
            url: 'https://www.gulixueyuan.com/',
            icon: ''
        }
    ],
    expert: [
        {
            id: 1,
            title: '尤雨溪',
            url: 'https://evanyou.me/',
            icon: './app/img/expert/EvanYou.jpg',
            desc: ' 尤雨溪 (Evan You),VueJS作者,独立开源开发者,现居美国新泽西。曾就职于 Google Creative Labs 和 Meteor Development Group。'
        },
        {
            id: 2,
            title: '张鑫旭',
            url: 'https://www.zhangxinxu.com/',
            icon: './app/img/expert/zhangxinxu.jpg',
            desc: '09年华中科技大学毕业,现上海,就职于阅文集团,专注web前端偏前领域,钓鱼爱好者。'
        },
        {
            id: 3,
            title: '阮一峰',
            url: 'http://www.ruanyifeng.com/',
            icon: './app/img/expert/ruanyifeng.jpg',
            desc: '上海财经大学世界经济博士研究生。除了写博客以外，他还有三个网站：微趣、Italo Calvino in China和读书公园'
        },
        {
            id: 4,
            title: '技术胖',
            icon: './app/img/expert/jspang.jpg',
            url: 'http://jspang.com/'
        },
        {
            id: 5,
            title: '刘龙宾',
            url: 'https://www.liulongbin.top/'
        }
    ],
    download: [
        {
			id: 1,
            title: "labuladong的算法小抄官方完整版",
            icon: './app/img/tool/suanfa.jpg',
            desc: '提取码：qm6f',
			url: "https://pan.baidu.com/s/1fgD5T2Oz4g1JWorhlcCbyg"
		}
    ],
    tool: [
        {
			id: 1,
            title: "任意文件转Base64",
            icon: './app/img/tool/base64.jpg',
            desc: '可以在线任意文件转Base64编码工具',
			url: "/app/tool/base64.html"
		},
        {
			id: 2,
            title: "获取键盘Code码",
            icon: './app/img/tool/code.jpg',
            desc: '获取键盘上各个按键的Code码',
			url: "/app/tool/codeValue.html"
		},
        {
			id: 3,
            title: "二维码生成",
            icon: './app/img/tool/qrcode.jpg',
            desc: '在线二维码生成器提供免费的在线二维码生成服务',
			url: "/app/tool/qrcode.html"
		},
        {
			id: 4,
            title: "Canvas 实现三阶贝塞尔曲线",
            icon: './app/img/tool/cubicBezier.jpg',
            desc: '贝塞尔曲线通过控制曲线上的四个点（起始点、终止点以及两个相互分离的中间点）来创造、编辑图形，绘制出一条光滑曲线并以曲线的状态来反映动画过程中速度的变化。',
			url: "/app/tool/cubicBezier.html"
		},
        {
			id: 5,
            title: "获取城市",
            icon: './app/img/tool/city.jpg',
            desc: '利用百度地图接口获取当前城市',
			url: "/app/tool/getCity.html"
		}
    ]
};