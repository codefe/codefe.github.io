(function () {
	//搜索
	(function () {
		let el = document.querySelector('#searchKey');
		let btn = document.querySelector('#searchBtn');
		if(el && btn){
			btn.addEventListener('click', function () {
				find(el.value);
			});
	
			el.addEventListener('input', debounce(function(){
				find(this.value);
			},500));
		}
		
		function find(str){
			if(str.length<1){
				upsearchdata([],str)
				return;
			}
			let tmp = [];
			db.filter(item=>{//第一层
				let tp = [];
				item.child.filter(itema=>{//第二层分类
					itema.child.filter(itemb=>{//第三层主题
						let arr = [];
						itemb.child && itemb.child.filter(itemc=>{//文章层
							if(itemc.title.indexOf(str) > -1){
								arr.push(itemc);
							}
						});
						if(arr.length>0 || itemb.title.indexOf(str) > -1){
							tp.push({
								id: itemb.id,
								title: itemb.title,
								child: arr
							})
						}
					})
				})
				if(tp.length>0){
					tmp.push({
						id: item.id,
						title:item.title,
						child: tp
					})
				}
			});
			upsearchdata(tmp,str);
		}
		function upsearchdata(data,str){
			let el = document.querySelector('#searchData');
			let fragment = document.createDocumentFragment();
			if(str.length<1){
				let p = document.createElement('p');
				p.appendChild(document.createTextNode('关键字不能少于2个字符'));
				fragment.appendChild(p);
			}else if(data.length===0){
				let p = document.createElement('p');
				p.appendChild(document.createTextNode('没有找到相关信息'));
				fragment.appendChild(p);
			}else{
				for(let itema of data){
					let dt = document.createElement('dt');
					dt.innerHTML = `${itema.title}`;
					fragment.appendChild(dt);
					for(let itemb of itema.child){
						let dd = document.createElement('dd');
						let da = document.createElement('a');
						da.className = 'colgreen';
						da.href = '/list.html?id=' + itemb.id;
						// da.appendChild(document.createTextNode(itemb.title));
						da.innerHTML = itemb.title.replace(new RegExp(str,'g'), '<span>'+str+'</span>');
						dd.appendChild(da);
						for(let itemc of itemb.child){
							let ha = document.createElement('a');
							ha.href = '/article.html?id=' + itemc.url + '-' + itemb.id;
							ha.innerHTML = itemc.title.replace(new RegExp(str,'g'), '<span>'+str+'</span>');
							// ha.appendChild(document.createTextNode(itemc.title.replace(/str/g, '<span>'+str+'</span>')));
							dd.appendChild(ha);
						}
						fragment.appendChild(dd);
					}
				}
				let objdiv = document.createElement('div');//加入一行空的div
				objdiv.appendChild(document.createTextNode('\u00A0'));
				fragment.appendChild(objdiv);
			}
			el.innerHTML = '';
			el.appendChild(fragment);
		}
	})();
	//延迟函数防抖
	function debounce(fn, delay = 500) {
		let timer;
		return function () {
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn.apply(this, arguments)
			}, delay)
		}
	}
	//模板替换
	String.prototype.tpl = function (obj) {
		return this.replace(/\$\w+\$/gi, function (matchs) {
			var returns = obj[matchs.replace(/\$/g, "")];
			return (returns + "") == "undefined" ? "" : returns;
		});
	};
	var Gs = {
		//右侧快速菜单
		quickMenu: function () {
			var quickHTML = '<button class="btn quick-hb" onclick="Gs.hb(event)"></button><button class="btn quick-top" onclick="Gs.scrollToTop(event)"><i class="ic-up"></i></button>',
				quickShell = document.createElement('section');
			quickShell.innerHTML = quickHTML;
			quickShell.className = 'quick-aside';
			document.body.appendChild(quickShell);
		}(),
		//获取url参数
		getPara: function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var para = window.location.search.substring(1).match(reg);
			if (para[2]) {
				return para[2];
			} else {
				history.back(-1);
			}
		},
		//fetch网络请求
		getData: function (url) {
			alert('<img src="./app/img/common/loading.gif">', '数据加载中...');
			return new Promise(function (resolve, reject) {
				fetch("./app/json/" + url + ".json?t=" + Date.now(), { method: 'GET' })
					.then((response) => {
						if (response.ok) {
							return response.json();
						} else {
							reject({ status: response.status })
						}
					})
					.then((response) => {
						resolve(response);
					})
					.catch(() => {
						setTimeout(function () {
							alert('请求失败');
						}, 500);
						reject({ status: -1 });
					})
					.finally(() => {
						setTimeout(function () {
							Gs.pop.hide();
						}, 500);
					})
			});
		},
		tpls: {
			//友情链接
			links: '<a href="$url$" target="_blank">$title$</a>',
			//首页列表模板
			homeList: `<li class="flex-wrap flex-col ani-line">
						<a href="list.html?id=$id$">
						  <p><img src="$icon$"></p>
						  <p>$title$</p>
						</a>
					</li>`,
			//列表模板标题加简介
			listDesc: `<h3 class="navigation"><span><a href="./index.html">首页</a> &raquo; $name$</span></h3>
				<section class="list-title">
					<h1>$title$</h1>
					<p>$desc$</p>
				</section>
				<section class="list-content">`,
			//列表模板子标签
			listStep: `<h5>$step$</h5><ul class="flex-wrap flex-break con-lists">`,
			//列表模板list
			listTitleA: `<li class="ani-line"><a href="$page$.html?id=$subType$/$url$">
							<i class="ic-lock $cla$"></i>
							<p><span>$name$</span></p>
						</a></li>`,
			listTitle: `<li class="ani-line"><a href="./article.html?id=$url$-$pid$">
						<i class="ic-lock"></i>
						<p><span>$title$</span></p>
					</a></li>`,
			listTitleNoa: `<li class="ano">
					<i class="ic-lock ic-lock-open"></i>
					<p><span>$title$</span></p>
				</li>`,
			listTitleTarget: `<li class="ani-line"><a href="$url$" target="_blank">
							<i class="ic-lock"></i>
							<p><span>$title$</span></p>
						</a></li>`,
			// 文章模板 article
			articleDesc: `<h3 class="navigation"><span><a href="index.html">首页</a> &raquo; <a href="list.html?id=$typename$">$type$</a> &raquo; <a href="list.html?id=$subType$">$name$</a></span></h3>
				<section class="list-title">
					<h1>$title$</h1>
					<p>$desc$</p>
					<p class="flex-wrap"><span>By: $author$</span><span>Star：$star$</span></p>
				</section>`,
			articleContent: `<h2 class="article-title">$subTitle$</h2>
					<article>$content$</article>`,
			studyList: `<li class="flex-wrap ani-line">
				<section><a href="$url$" target="_blank"><img src="$icon$"></a></section>
				<section>
					<a href="$url$" target="_blank">$title$</a>
					<p>$desc$</p>
				</section>
			</li>`,
		},
		//获取标签
		$: function (id) {
			return document.querySelector(id)
		},

		//数据处理
		obj: {
			json: {},
			//把name内容添加到listBox标签中
			append: function (name) {
				this.listBox.innerHTML = this[name]();
				return this;
			},
			//加载公共数据
			init: function () {
				this.htmlMenu().then(rs => {
					Gs.$('#menuHead').innerHTML = rs;
				});
				this.getMenuList(db[0]).then(res => {
					Gs.$('#menuHeadList').innerHTML = res;
				});
				this.htmlMenuFooter().then(html => {
					Gs.$('#menuFoot').innerHTML = html;
				});
				this.htmlLinks().then(html => {
					Gs.$('#links').innerHTML = html;
				});
				this.asideMenu().then(html => {
					Gs.$('#asideMenu').innerHTML = html;
				});
			},
			//加载首页数据
			initIndex: function () {
				this.init();
				this.htmlList().then(html => {
					Gs.$('#pageList').innerHTML = html;
				});
				this.hotList().then(html => {
					Gs.$('#aside-hot').innerHTML = html;
				});
				this.getCount().then(rs => {
					Gs.$('#count').innerHTML = rs.count;
					Gs.$('#total').innerHTML = rs.total;
				});
			},
			//加载学习平台数据
			initStudy: function () {
				this.init();
				this.study().then(html => {
					Gs.$('#pageList').innerHTML = html;
				});
				this.hotList().then(html => {
					Gs.$('#aside-hot').innerHTML = html;
				});
				this.getCount().then(rs => {
					Gs.$('#count').innerHTML = rs.count;
					Gs.$('#total').innerHTML = rs.total;
				});
			},
			//加载列表数据
			initList: function () {
				this.init();
				let url = this.getUrl(), html = '';
				this.getList(url.args).then(data => {
					if (data) {
						html += Gs.tpls.listDesc.tpl(data);
						html += this.listHtml(data);
						Gs.$('#pageList').innerHTML = html;
					} else {
						alert('错误了,传参有误!!!');
					}
				});
				this.hotList().then(html => {
					Gs.$('#aside-hot').innerHTML = html;
				});
				this.getCount().then(rs => {
					Gs.$('#count').innerHTML = rs.count;
					Gs.$('#total').innerHTML = rs.total;
				});
			},
			//加载内容数据
			initArticle: function () {
				this.init();
				let str = this.getUrl().args.split('-');
				let pid = str[str.length - 1];
				let url = str.slice(0, 3).join('/');

				Gs.getData(url).then(rs => {
					document.title = rs.data.subTitle + ' - 初学|前端进阶';
					Gs.$('#articleCon').innerHTML = Gs.tpls.articleContent.tpl(rs.data);
				}).catch(err => {
					document.title = '初学|前端进阶';
					let el = Gs.$('#articleCon');
					if (el) {
						el.innerHTML = '<h2 class="nofile">没有找到相关文章</h2>';
					}
				});

				this.getList(pid).then(data => {
					if (data) {
						Gs.$('#articleDesc').innerHTML = Gs.tpls.listDesc.tpl(data);
						Gs.$('#article-list').innerHTML = this.articleList(data);
					} else {
						Gs.$('#articleBox').innerHTML = '<h2 class="nofile">错误了,传参有误!!!</h2>';
					}
				});

				this.getCount().then(rs => {
					Gs.$('#count').innerHTML = rs.count;
					Gs.$('#total').innerHTML = rs.total;
				});
			},
			//统计
			getCount: function () {
				return new Promise(resolve => {
					let data = { count: 0, total: 0 };
					for (let ra of db) {
						for (let rb of ra.child) {
							for (let rc of rb.child) {
								data.count += 1;
								if (rc.child && rc.child.length > 0) {
									for (let rd of rc.child) {
										data.total += 1;
									}
								}
							}
						}
					}
					resolve(data);
				});
			},
			// topmenu 顶部右侧导航1
			htmlMenu: function () {
				return new Promise(resolve => {
					let html = '';
					for (let i = 0, len = db.length; i < len; i++) {
						if (i == 0) {
							html += '<dd class="rnav nos cur" onclick="Gs.obj.htmlMenuList(event,' + i + ')">' + db[i].title + '</dd>';
						} else {
							html += '<dd class="rnav nos" onclick="Gs.obj.htmlMenuList(event,' + i + ')">' + db[i].title + '</dd>';
						}
					}
					resolve(html);
				});
			},
			// topmenu 顶部右侧导航2
			htmlMenuList: function (ev, i) {
				ev.stopPropagation();//停止冒泡
				//设置当前样式
				let strObj = Gs.$('#menuHead').children;
				for (let j = 0; j < strObj.length; j++) {
					if (j == i) {
						strObj[j].classList.add('cur')
					} else {
						strObj[j].classList.remove('cur')
					}
				}
				//获取数据
				this.getMenuList(db[i]).then(res => {
					Gs.$('#menuHeadList').innerHTML = res;
				});

			},
			//topmenu 顶部右侧导航3
			getMenuList: function (data) {
				return new Promise(resolve => {
					let html = '';
					//导航
					html += '<section>';
					for (let ra of data.child) {
						html += '<dl><dt><a href="javascript:void(0)">' + ra.title + '</a></dt><dd>';
						for (let rb of ra.child) {
							if (rb.child) {
								html += '<a href="list.html?id=' + rb.id + '">' + rb.title + '</a>';
							} else {
								html += '<a class="ano" href="javascript:;">' + rb.title + '</a>';
							}

						}
						html += '</dd></dl>'
					}
					html += '</section>';
					resolve(html);
				});
			},
			// footer
			htmlMenuFooter: function () {
				return new Promise(resolve => {
					var html = '';
					for (let item of db) {
						html += '<dl><dt>' + item.title + '</dt>';
						for (let ra of item.child) {
							for (let rb of ra.child) {
								if (rb.flag && rb.flag === 'recommend') {
									html += '<dd><a href="./list.html?id=' + rb.id + '">' + rb.title + '</a></dd>';
								}
							}
						}
						html += '</dl>'
					}
					resolve(html);
				})
			},

			// links
			htmlLinks: function () {
				return new Promise(resolve => {
					let html = '';
					for (let item of links.web) {
						html += Gs.tpls.links.tpl(item);
					}
					resolve(html);
				});
			},
			// aside menu
			asideMenu: function () {
				return new Promise(resolve => {
					let html = '<ul class="nav-side">',
						data = links.asideMenu,
						len = data && data.length;
					for (let i = 0; i < len; i++) {
						html += '<li class="flex-wrap ' + this.isCurpage(data[i].name) + '"><a href="' + data[i].url + '">' + data[i].name + '</a><span>&raquo;</span></li>';
					}
					html += '</ul>';
					resolve(html);
				});
			},
			// 获取当前url及参数
			getUrl: function () {
				var url = location;
				return {
					name: url.pathname,
					args: url.search.substr(1).split('=')[1] || ''
				}
			},
			// 判断是否在当前页
			isCurpage: function (cur) {
				let url = this.getUrl();
				let namearr = url.name.split('/');
				let name = namearr[namearr.length - 1];
				if (url.args) {//?id=有参数
					if (url.args === 'study' && cur === '学习平台') {
						return 'cur';
					} else if (url.args === 'expert' && cur === '前端大牛') {
						return 'cur';
					} else if (url.args === 'download' && cur === '资源下载') {
						return 'cur';
					}
				} else {
					if (name === 'index.html' && cur === '返回首页') {
						return 'cur';
					}
				}
			},
			// home
			htmlList: function () {
				return new Promise(resolve => {
					var html = '';
					for (let item of db) {
						html += '<dl class="flex-wrap flex-break home-item-list"><dt>' + item.title + '</dt>';
						for (let ra of item.child) {
							for (let rb of ra.child) {
								if (rb.flag && rb.flag.indexOf('recommend') === 0) {
									html += Gs.tpls.homeList.tpl(rb);
								}
							}
						}
						html += '</dl>'
					}
					resolve(html);
				})
			},
			// hot
			hotList: function () {
				return new Promise(resolve => {
					var html = '<ul class="flex-wrap flex-break item-list">';
					for (let item of db) {
						for (let ra of item.child) {
							for (let rb of ra.child) {
								if (rb.flag && rb.flag.indexOf('hot') === 10) {
									html += Gs.tpls.homeList.tpl(rb);
								}
							}
						}

					}
					html += '</ul>'
					resolve(html);
				})
			},
			//study
			study: function () {
				let url = this.getUrl();
				Gs.$('#navigation').innerHTML = url.args === 'study' ? '学习平台' : url.args === 'expert' ? '前端大牛' : '资源下载';
				return new Promise(resolve => {
					var html = '';
					if (url.args === 'study') {
						html += '<ul class="flex-wrap flex-break study-list">';
						for (let item of links[url.args]) {
							html += Gs.tpls.studyList.tpl(item);
							if (item.id % 3 === 0) {
								html += '</ul><ul class="flex-wrap flex-break study-list">';
							}
						}
					} else if (url.args === 'expert') {
						html += '<ul class="flex-wrap flex-break study-list expert-list">';
						for (let item of links[url.args]) {
							html += Gs.tpls.studyList.tpl(item);
							if (item.id % 2 === 0) {
								html += '</ul><ul class="flex-wrap flex-break study-list expert-list">';
							}
						}
					} else if (url.args === 'download') {
						html += '<ul class="flex-wrap flex-break study-list expert-list">';
						for (let item of links[url.args]) {
							html += Gs.tpls.studyList.tpl(item);
							if (item.id % 2 === 0) {
								html += '</ul><ul class="flex-wrap flex-break study-list expert-list">';
							}
						}
					}

					html += '</ul>';
					resolve(html);
				});
			},
			// list
			listHtml: function (data) {
				let html = '';
				if (data.child && data.child.length > 0) {
					html += '<ul class="flex-wrap flex-break con-lists">';
					for (let item of data.child) {
						item.pid = data.id;
						if (item.url) {
							html += Gs.tpls.listTitle.tpl(item);
						} else {
							html += Gs.tpls.listTitleNoa.tpl(item);
						}
					}
					html += '</section>';
				}
				return html;
			},
			getList: function (id) {
				return new Promise(resolve => {
					if (!id) {
						alert('错误了,没有传参!!!');
					} else {
						let pid = '' + id, obj = null;
						for (let item of db) {
							if (pid.startsWith(item.id)) {
								for (let ra of item.child) {
									if (pid.startsWith(ra.id)) {
										for (let rb of ra.child) {
											if (pid == rb.id) {
												obj = rb;
												obj.name = item.title;
												break;
											}
										}
										break;
									}
								}
								break;
							}
						}
						resolve(obj);
					}
				})
			},
			articleList: function (data) {
				let url = this.getUrl();
				let html = '';
				if (data.child.length > 0) {
					for (let [key, item] of Object.entries(data.child)) {
						if (url.args === item.url + '-' + data.id) {
							html += `<dd><a class="cur" href="article.html?id=${item.url}-${data.id}">${key}. ${item.title}</a></dd>`;
						} else {
							html += `<dd><a href="article.html?id=${item.url}-${data.id}">${key}. ${item.title}</a></dd>`;
						}
					}
				}
				return html;
			}
		},
		//弹出框
		pop: {
			initflag: false,
			bg: null,
			title: '提示',
			cont: null,
			msg: null,
			btnc: null,
			ok: null,
			init: function () {
				if (this.initflag) {
					this.show();
					return;
				}
				var txt = '<div class="alert-ui-bg"></div><div class="alert-ui-cont"><div class="alert-ui-tit">提示</div><div class="alert-ui-msg"></div><div class="alert-ui-btnc"><a class="alert-ui-btn-ok">确定</a></div></div>';
				var obj = document.createElement('div');
				obj.innerHTML = txt;
				obj.className = 'pop';
				document.body.appendChild(obj);
				var WIN_W = window.innerWidth;
				this.bg = document.querySelector('.alert-ui-bg');
				this.cont = document.querySelector('.alert-ui-cont');
				this.btnc = document.querySelector('.alert-ui-btnc');
				this.title = document.querySelector('.alert-ui-tit');
				this.msg = document.querySelector('.alert-ui-msg');
				this.ok = document.querySelector('.alert-ui-btn-ok');

				this.cont.style.left = (WIN_W - 250) / 2 + 'px';
				this.initflag = true;
				this.ok.addEventListener('click', this.hide);
				this.bg.addEventListener('click', this.hide);
			},
			alert: function (msg, title = '提示') {
				this.init();
				this.title.innerHTML = title;
				if (title === '数据加载中...') {
					this.btnc.style.display = 'none';
					this.bg.style.display = 'none';
				} else {
					this.btnc.style.display = 'block';
					this.bg.style.display = 'block';
				}
				if (this.msg) {
					this.msg.innerHTML = msg;
				}
			},
			hasClass: function (ele, cls) {
				return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
			},
			addClass: function (ele, cls) {
				if (!this.hasClass(ele, cls)) ele.className += " " + cls;
			},
			removeClass: function (ele, cls) {
				if (this.hasClass(ele, cls)) {
					var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
					ele.className = ele.className.replace(reg, " ");
				}
			},
			hide: function () {
				Gs.pop.addClass(Gs.pop.cont, 'alert-hide');
				setTimeout(function () {
					Gs.pop.cont.style.display = "none";
					Gs.pop.bg.style.display = "none";
				}, 300);
			},
			show: function () {
				this.bg.style.display = 'block';
				this.removeClass(this.cont, 'alert-hide');
				this.cont.style.display = 'block';
				this.cont.style.left = (window.innerWidth - 250) / 2 + 'px';
			}
		},
		//读写文件
		file: {
			//编辑器
			flag: false,//是否需要加载
			editor: null,
			//读取文件
			read: function (files) {
				if (files.length) {
					var file = files[0];
					var reader = new FileReader();//new一个FileReader实例
					reader.onload = function () {
						var json = JSON.parse(this.result);
						var html = '';
						for (var obj in json.data) {
							if (obj === 'content') {
								Gs.file.flag = true;
								html += '<dl class="flex-wrap"><dt>' + obj + '</dt><dd id="weditor">' + json.data[obj] + '</dd></dl>';
							} else if (obj === 'items') {
								Gs.file.flag = false;
								html += '<dl class="flex-wrap"><dt>' + obj + '</dt><dd><textarea name="' + obj + '">' + JSON.stringify(json.data[obj]) + '</textarea></dd></dl>';
							} else {
								html += '<dl class="flex-wrap"><dt>' + obj + '</dt><dd><input name="' + obj + '" value="' + json.data[obj] + '"></dd></dl>';
							}
						}
						document.querySelector('#form').innerHTML = html;
						//加载编辑器
						if (Gs.file.flag) {
							var E = window.wangEditor;
							Gs.file.editor = new E('#weditor');
							Gs.file.editor.customConfig.menus = ['head', 'bold', 'italic', 'underline', 'strikeThrough', 'foreColor', 'link', 'list', 'quote', 'image', 'table', 'video', 'code', 'undo', 'redo'];
							Gs.file.editor.create();
						}
					}
					reader.readAsText(file);
				}
			},
			//保存文件
			fake_click: function (obj) {
				var ev = document.createEvent("MouseEvents");
				ev.initMouseEvent(
					"click", true, false, window, 0, 0, 0, 0, 0
					, false, false, false, false, 0, null
				);
				obj.dispatchEvent(ev);
			},
			download: function (name, data) {
				var urlObject = window.URL || window.webkitURL || window;
				var downloadData = new Blob([data]);
				var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
				save_link.href = urlObject.createObjectURL(downloadData);
				save_link.download = name;
				this.fake_click(save_link, name);
			},
			//调用保存方法
			saveFile: function () {
				document.execCommand('saveas', 'true', '11.htm');
				var obj = document.querySelector('#form');
				var data = obj.querySelectorAll('input,textarea');
				var json = { sta: 1, data: {} };
				for (var i = 0, len = data.length; i < len; i++) {
					json.data[data[i].name] = data[i].value;
				}
				if (Gs.file.flag) {
					json.data.content = Gs.file.editor.txt.html();
				}
				this.download("s1-.json", JSON.stringify(json).replace(/(<!--).*?(-->)/g, ''));
			}
		},
		//返回顶部
		scrollToTop: function (e) {
			e.stopPropagation();//停止冒泡;
			(function scrollTo() {
				let c = document.documentElement.scrollTop || document.body.scrollTop;
				if (c > 0) {
					window.requestAnimationFrame(scrollTo);
					window.scrollTo(0, c - c / 10);
				}
			}());
		},
		hb: function (e) {
			e.stopPropagation();//停止冒泡;
		}
	};
	window.Gs = Gs;
	window.alert = function (msg, title) {
		Gs.pop.alert(msg, title);
	}
})();