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
		// {
		// 	name: "实例演示",
		// 	url: "./list.html?id=case"
		// }
	],
    web: [
        {
            id: 1,
            title: 'Webpack',
            url: 'https://www.webpackjs.com/'
        },
        {
            id: 2,
            title: 'Vite',
            url: 'https://vite.wiki/zh/'
        },
        {
            id: 3,
            title: 'VueCLI',
            url: 'https://cli.vuejs.org/zh/'
        },
        {
            id: 4,
            title: 'Babel',
            url: 'https://www.babeljs.cn/'
        },
        {
            id: 5,
            title: 'Lodash',
            url: 'https://www.lodashjs.com/'
        },
        {
            id: 6,
            title: 'ES6',
            url: 'https://es6.ruanyifeng.com/'
        },
        {
            id: 7,
            title: 'TypeScript',
            url: 'https://www.javascriptc.com/docs/typescript-manual/ts-version/typescript-3-6'
        },
        {
            id: 8,
            title: 'PM2',
            url: 'https://pm2.keymetrics.io/'
        },
        {
            id: 9,
            title: 'Canvas API',
            url: 'https://www.canvasapi.cn/'
        },
        {
            id: 10,
            title: 'ESLint',
            url: 'http://eslint.cn/'
        },
        {
            id: 11,
            title: 'AnimeJS',
            url: 'https://www.animejs.cn/'
        },
        {
            id: 12,
            title: 'Mithril',
            url: 'https://www.mithriljs.net/'
        },
        {
            id: 13,
            title: 'Vue Test Utils',
            url: 'https://vue-test-utils.vuejs.org/zh/'
        },
        {
            id: 14,
            title: 'TransX',
            url: 'https://github.com/tnfe/transx'
        },
        {
            id: 15,
            title: 'SnapSVG',
            url: 'http://snapsvg.io/'
        },
        {
            id: 16,
            title: 'GPU',
            url: 'https://gpu.rocks/'
        }
    ],
    study: [
        {
            id: 1,
            title: 'B站',
            url: 'https://www.bilibili.com/',
            icon: ''
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
            icon: './app/img/ic/pdf.jpg',
            desc: '提取码：qm6f',
			url: "https://pan.baidu.com/s/1fgD5T2Oz4g1JWorhlcCbyg"
		}
    ]
};