!
	function(a, b) {
		function D(a) {
			return "" === e ? a : (a = a.charAt(0).toUpperCase() + a.substr(1), e + a)
		}
		var c = Math,
			d = b.createElement("div").style,
			e = function() {
				for (var b, a = "t,webkitT,MozT,msT,OT".split(","), c = 0, e = a.length; e > c; c++) if (b = a[c] + "ransform", b in d) return a[c].substr(0, a[c].length - 1);
				return !1
			}(),
			f = e ? "-" + e.toLowerCase() + "-" : "",
			g = D("transform"),
			h = D("transitionProperty"),
			i = D("transitionDuration"),
			j = D("transformOrigin"),
			k = D("transitionTimingFunction"),
			l = D("transitionDelay"),
			m = /android/gi.test(navigator.appVersion),
			n = /iphone|ipad/gi.test(navigator.appVersion),
			o = /hp-tablet/gi.test(navigator.appVersion),
			p = D("perspective") in d,
			q = "ontouchstart" in a && !o,
			r = e !== !1,
			s = D("transition") in d,
			t = "onorientationchange" in a ? "orientationchange" : "resize",
			u = q ? "touchstart" : "mousedown",
			v = q ? "touchmove" : "mousemove",
			w = q ? "touchend" : "mouseup",
			x = q ? "touchcancel" : "mouseup",
			y = function() {
				if (e === !1) return !1;
				var a = {
					"": "transitionend",
					webkit: "webkitTransitionEnd",
					Moz: "transitionend",
					O: "otransitionend",
					ms: "MSTransitionEnd"
				};
				return a[e]
			}(),
			z = function() {
				return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame ||
					function(a) {
						return setTimeout(a, 1)
					}
			}(),
			A = function() {
				return a.cancelRequestAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || clearTimeout
			}(),
			B = p ? " translateZ(0)" : "",
			C = function(c, d) {
				var l, e = this;
				e.wrapper = "object" == typeof c ? c : b.getElementById(c), e.wrapper.style.overflow = "hidden", e.scroller = e.wrapper.children[0], e.options = {
					hScroll: !0,
					vScroll: !0,
					x: 0,
					y: 0,
					bounce: !0,
					bounceLock: !1,
					momentum: !0,
					lockDirection: !0,
					useTransform: !0,
					useTransition: !1,
					topOffset: 0,
					checkDOMChanges: !1,
					handleClick: !0,
					hScrollbar: !0,
					vScrollbar: !0,
					fixedScrollbar: m,
					hideScrollbar: n,
					fadeScrollbar: n && p,
					scrollbarClass: "",
					zoom: !1,
					zoomMin: 1,
					zoomMax: 4,
					doubleTapZoom: 2,
					wheelAction: "scroll",
					snap: !1,
					snapThreshold: 1,
					onRefresh: null,
					onBeforeScrollStart: function(a) {
						a.preventDefault()
					},
					onScrollStart: null,
					onBeforeScrollMove: null,
					onScrollMove: null,
					onBeforeScrollEnd: null,
					onScrollEnd: null,
					onTouchEnd: null,
					onDestroy: null,
					onZoomStart: null,
					onZoom: null,
					onZoomEnd: null
				};
				for (l in d) e.options[l] = d[l];
				e.x = e.options.x, e.y = e.options.y, e.options.useTransform = r && e.options.useTransform, e.options.hScrollbar = e.options.hScroll && e.options.hScrollbar, e.options.vScrollbar = e.options.vScroll && e.options.vScrollbar, e.options.zoom = e.options.useTransform && e.options.zoom, e.options.useTransition = s && e.options.useTransition, e.options.zoom && m && (B = ""), e.scroller.style[h] = e.options.useTransform ? f + "transform" : "top left", e.scroller.style[i] = "0", e.scroller.style[j] = "0 0", e.options.useTransition && (e.scroller.style[k] = "cubic-bezier(0.33,0.66,0.66,1)"), e.options.useTransform ? e.scroller.style[g] = "translate(" + e.x + "px," + e.y + "px)" + B : e.scroller.style.cssText += ";position:absolute;top:" + e.y + "px;left:" + e.x + "px", e.options.useTransition && (e.options.fixedScrollbar = !0), e.refresh(), e._bind(t, a), e._bind(u), q || "none" != e.options.wheelAction && (e._bind("DOMMouseScroll"), e._bind("mousewheel")), e.options.checkDOMChanges && (e.checkDOMTime = setInterval(function() {
					e._checkDOMChanges()
				}, 500))
			};
		C.prototype = {
			enabled: !0,
			x: 0,
			y: 0,
			steps: [],
			scale: 1,
			currPageX: 0,
			currPageY: 0,
			pagesX: [],
			pagesY: [],
			aniTime: null,
			wheelZoomCount: 0,
			handleEvent: function(a) {
				var b = this;
				switch (a.type) {
					case u:
						if (!q && 0 !== a.button) return;
						b._start(a);
						break;
					case v:
						b._move(a);
						break;
					case w:
					case x:
						b._end(a);
						break;
					case t:
						b._resize();
						break;
					case "DOMMouseScroll":
					case "mousewheel":
						b._wheel(a);
						break;
					case y:
						b._transitionEnd(a)
				}
			},
			_checkDOMChanges: function() {
				this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh()
			},
			_scrollbar: function(a) {
				var e, d = this;
				return d[a + "Scrollbar"] ? (d[a + "ScrollbarWrapper"] || (e = b.createElement("div"), d.options.scrollbarClass ? e.className = d.options.scrollbarClass + a.toUpperCase() : e.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (d.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (d.hScrollbar ? "7" : "2") + "px;top:2px;right:1px"), e.style.cssText += ";pointer-events:none;" + f + "transition-property:opacity;" + f + "transition-duration:" + (d.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (d.options.hideScrollbar ? "0" : "1"), d.wrapper.appendChild(e), d[a + "ScrollbarWrapper"] = e, e = b.createElement("div"), d.options.scrollbarClass || (e.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.9);" + f + "background-clip:padding-box;" + f + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + f + "border-radius:3px;border-radius:3px"), e.style.cssText += ";pointer-events:none;" + f + "transition-property:" + f + "transform;" + f + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + f + "transition-duration:0;" + f + "transform: translate(0,0)" + B, d.options.useTransition && (e.style.cssText += ";" + f + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), d[a + "ScrollbarWrapper"].appendChild(e), d[a + "ScrollbarIndicator"] = e), "h" == a ? (d.hScrollbarSize = d.hScrollbarWrapper.clientWidth, d.hScrollbarIndicatorSize = c.max(c.round(d.hScrollbarSize * d.hScrollbarSize / d.scrollerW), 8), d.hScrollbarIndicator.style.width = d.hScrollbarIndicatorSize + "px", d.hScrollbarMaxScroll = d.hScrollbarSize - d.hScrollbarIndicatorSize, d.hScrollbarProp = d.hScrollbarMaxScroll / d.maxScrollX) : (d.vScrollbarSize = d.vScrollbarWrapper.clientHeight, d.vScrollbarIndicatorSize = c.max(c.round(d.vScrollbarSize * d.vScrollbarSize / d.scrollerH), 8), d.vScrollbarIndicator.style.height = d.vScrollbarIndicatorSize + "px", d.vScrollbarMaxScroll = d.vScrollbarSize - d.vScrollbarIndicatorSize, d.vScrollbarProp = d.vScrollbarMaxScroll / d.maxScrollY), d._scrollbarPos(a, !0), void 0) : (d[a + "ScrollbarWrapper"] && (r && (d[a + "ScrollbarIndicator"].style[g] = ""), d[a + "ScrollbarWrapper"].parentNode.removeChild(d[a + "ScrollbarWrapper"]), d[a + "ScrollbarWrapper"] = null, d[a + "ScrollbarIndicator"] = null), void 0)
			},
			_resize: function() {
				var a = this;
				setTimeout(function() {
					a.refresh()
				}, m ? 200 : 0)
			},
			_pos: function(a, b) {
				this.zoomed || (a = this.hScroll ? a : 0, b = this.vScroll ? b : 0, this.options.useTransform ? this.scroller.style[g] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + B : (a = c.round(a), b = c.round(b), this.scroller.style.left = a + "px", this.scroller.style.top = b + "px"), this.x = a, this.y = b, this._scrollbarPos("h"), this._scrollbarPos("v"))
			},
			_scrollbarPos: function(a, b) {
				var f, d = this,
					e = "h" == a ? d.x : d.y;
				d[a + "Scrollbar"] && (e = d[a + "ScrollbarProp"] * e, 0 > e ? (d.options.fixedScrollbar || (f = d[a + "ScrollbarIndicatorSize"] + c.round(3 * e), 8 > f && (f = 8), d[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = f + "px"), e = 0) : e > d[a + "ScrollbarMaxScroll"] && (d.options.fixedScrollbar ? e = d[a + "ScrollbarMaxScroll"] : (f = d[a + "ScrollbarIndicatorSize"] - c.round(3 * (e - d[a + "ScrollbarMaxScroll"])), 8 > f && (f = 8), d[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = f + "px", e = d[a + "ScrollbarMaxScroll"] + (d[a + "ScrollbarIndicatorSize"] - f))), d[a + "ScrollbarWrapper"].style[l] = "0", d[a + "ScrollbarWrapper"].style.opacity = b && d.options.hideScrollbar ? "0" : "1", d[a + "ScrollbarIndicator"].style[g] = "translate(" + ("h" == a ? e + "px,0)" : "0," + e + "px)") + B)
			},
			_start: function(b) {
				var f, h, i, j, k, d = this,
					e = q ? b.touches[0] : b;
				d.enabled && (d.options.onBeforeScrollStart && d.options.onBeforeScrollStart.call(d, b), (d.options.useTransition || d.options.zoom) && d._transitionTime(0), d.moved = !1, d.animating = !1, d.zoomed = !1, d.distX = 0, d.distY = 0, d.absDistX = 0, d.absDistY = 0, d.dirX = 0, d.dirY = 0, d.options.zoom && q && b.touches.length > 1 && (j = c.abs(b.touches[0].pageX - b.touches[1].pageX), k = c.abs(b.touches[0].pageY - b.touches[1].pageY), d.touchesDistStart = c.sqrt(j * j + k * k), d.originX = c.abs(b.touches[0].pageX + b.touches[1].pageX - 2 * d.wrapperOffsetLeft) / 2 - d.x, d.originY = c.abs(b.touches[0].pageY + b.touches[1].pageY - 2 * d.wrapperOffsetTop) / 2 - d.y, d.options.onZoomStart && d.options.onZoomStart.call(d, b)), d.options.momentum && (d.options.useTransform ? (f = getComputedStyle(d.scroller, null)[g].replace(/[^0-9\-.,]/g, "").split(","), h = +(f[12] || f[4]), i = +(f[13] || f[5])) : (h = +getComputedStyle(d.scroller, null).left.replace(/[^0-9-]/g, ""), i = +getComputedStyle(d.scroller, null).top.replace(/[^0-9-]/g, "")), (h != d.x || i != d.y) && (d.options.useTransition ? d._unbind(y) : A(d.aniTime), d.steps = [], d._pos(h, i), d.options.onScrollEnd && d.options.onScrollEnd.call(d))), d.absStartX = d.x, d.absStartY = d.y, d.startX = d.x, d.startY = d.y, d.pointX = e.pageX, d.pointY = e.pageY, d.startTime = b.timeStamp || Date.now(), d.options.onScrollStart && d.options.onScrollStart.call(d, b), d._bind(v, a), d._bind(w, a), d._bind(x, a))
			},
			_move: function(a) {
				var j, k, l, b = this,
					d = q ? a.touches[0] : a,
					e = d.pageX - b.pointX,
					f = d.pageY - b.pointY,
					h = b.x + e,
					i = b.y + f,
					m = a.timeStamp || Date.now();
				return b.options.onBeforeScrollMove && b.options.onBeforeScrollMove.call(b, a), b.options.zoom && q && a.touches.length > 1 ? (j = c.abs(a.touches[0].pageX - a.touches[1].pageX), k = c.abs(a.touches[0].pageY - a.touches[1].pageY), b.touchesDist = c.sqrt(j * j + k * k), b.zoomed = !0, l = 1 / b.touchesDistStart * b.touchesDist * this.scale, l < b.options.zoomMin ? l = .5 * b.options.zoomMin * Math.pow(2, l / b.options.zoomMin) : l > b.options.zoomMax && (l = 2 * b.options.zoomMax * Math.pow(.5, b.options.zoomMax / l)), b.lastScale = l / this.scale, h = this.originX - this.originX * b.lastScale + this.x, i = this.originY - this.originY * b.lastScale + this.y, this.scroller.style[g] = "translate(" + h + "px," + i + "px) scale(" + l + ")" + B, b.options.onZoom && b.options.onZoom.call(b, a), void 0) : (b.pointX = d.pageX, b.pointY = d.pageY, (h > 0 || h < b.maxScrollX) && (h = b.options.bounce ? b.x + e / 2 : h >= 0 || b.maxScrollX >= 0 ? 0 : b.maxScrollX), (i > b.minScrollY || i < b.maxScrollY) && (i = b.options.bounce ? b.y + f / 2 : i >= b.minScrollY || b.maxScrollY >= 0 ? b.minScrollY : b.maxScrollY), b.distX += e, b.distY += f, b.absDistX = c.abs(b.distX), b.absDistY = c.abs(b.distY), b.absDistX < 6 && b.absDistY < 6 || (b.options.lockDirection && (b.absDistX > b.absDistY + 5 ? (i = b.y, f = 0) : b.absDistY > b.absDistX + 5 && (h = b.x, e = 0)), b.moved = !0, b._pos(h, i), b.dirX = e > 0 ? -1 : 0 > e ? 1 : 0, b.dirY = f > 0 ? -1 : 0 > f ? 1 : 0, m - b.startTime > 300 && (b.startTime = m, b.startX = b.x, b.startY = b.y), b.options.onScrollMove && b.options.onScrollMove.call(b, a)), void 0)
			},
			_end: function(d) {
				if (!q || 0 === d.touches.length) {
					var h, j, p, r, s, t, u, e = this,
						f = q ? d.changedTouches[0] : d,
						k = {
							dist: 0,
							time: 0
						},
						l = {
							dist: 0,
							time: 0
						},
						m = (d.timeStamp || Date.now()) - e.startTime,
						n = e.x,
						o = e.y;
					if (e._unbind(v, a), e._unbind(w, a), e._unbind(x, a), e.options.onBeforeScrollEnd && e.options.onBeforeScrollEnd.call(e, d), e.zoomed) return u = e.scale * e.lastScale, u = Math.max(e.options.zoomMin, u), u = Math.min(e.options.zoomMax, u), e.lastScale = u / e.scale, e.scale = u, e.x = e.originX - e.originX * e.lastScale + e.x, e.y = e.originY - e.originY * e.lastScale + e.y, e.scroller.style[i] = "200ms", e.scroller.style[g] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + ")" + B, e.zoomed = !1, e.refresh(), e.options.onZoomEnd && e.options.onZoomEnd.call(e, d), void 0;
					if (!e.moved) return q && (e.doubleTapTimer && e.options.zoom ? (clearTimeout(e.doubleTapTimer), e.doubleTapTimer = null, e.options.onZoomStart && e.options.onZoomStart.call(e, d), e.zoom(e.pointX, e.pointY, 1 == e.scale ? e.options.doubleTapZoom : 1), e.options.onZoomEnd && setTimeout(function() {
						e.options.onZoomEnd.call(e, d)
					}, 200)) : this.options.handleClick && (e.doubleTapTimer = setTimeout(function() {
						for (e.doubleTapTimer = null, h = f.target; 1 != h.nodeType;) h = h.parentNode;
						"SELECT" != h.tagName && "INPUT" != h.tagName && "TEXTAREA" != h.tagName && (j = b.createEvent("MouseEvents"), j.initMouseEvent("click", !0, !0, d.view, 1, f.screenX, f.screenY, f.clientX, f.clientY, d.ctrlKey, d.altKey, d.shiftKey, d.metaKey, 0, null), j._fake = !0, h.dispatchEvent(j))
					}, e.options.zoom ? 250 : 0))), e._resetPos(400), e.options.onTouchEnd && e.options.onTouchEnd.call(e, d), void 0;
					if (300 > m && e.options.momentum && (k = n ? e._momentum(n - e.startX, m, -e.x, e.scrollerW - e.wrapperW + e.x, e.options.bounce ? e.wrapperW : 0) : k, l = o ? e._momentum(o - e.startY, m, -e.y, e.maxScrollY < 0 ? e.scrollerH - e.wrapperH + e.y - e.minScrollY : 0, e.options.bounce ? e.wrapperH : 0) : l, n = e.x + k.dist, o = e.y + l.dist, (e.x > 0 && n > 0 || e.x < e.maxScrollX && n < e.maxScrollX) && (k = {
							dist: 0,
							time: 0
						}), (e.y > e.minScrollY && o > e.minScrollY || e.y < e.maxScrollY && o < e.maxScrollY) && (l = {
							dist: 0,
							time: 0
						})), k.dist || l.dist) return s = c.max(c.max(k.time, l.time), 10), e.options.snap && (p = n - e.absStartX, r = o - e.absStartY, c.abs(p) < e.options.snapThreshold && c.abs(r) < e.options.snapThreshold ? e.scrollTo(e.absStartX, e.absStartY, 200) : (t = e._snap(n, o), n = t.x, o = t.y, s = c.max(t.time, s))), e.scrollTo(c.round(n), c.round(o), s), e.options.onTouchEnd && e.options.onTouchEnd.call(e, d), void 0;
					if (e.options.snap) return p = n - e.absStartX, r = o - e.absStartY, c.abs(p) < e.options.snapThreshold && c.abs(r) < e.options.snapThreshold ? e.scrollTo(e.absStartX, e.absStartY, 200) : (t = e._snap(e.x, e.y), (t.x != e.x || t.y != e.y) && e.scrollTo(t.x, t.y, t.time)), e.options.onTouchEnd && e.options.onTouchEnd.call(e, d), void 0;
					e._resetPos(200), e.options.onTouchEnd && e.options.onTouchEnd.call(e, d)
				}
			},
			_resetPos: function(a) {
				var b = this,
					c = b.x >= 0 ? 0 : b.x < b.maxScrollX ? b.maxScrollX : b.x,
					d = b.y >= b.minScrollY || b.maxScrollY > 0 ? b.minScrollY : b.y < b.maxScrollY ? b.maxScrollY : b.y;
				return c == b.x && d == b.y ? (b.moved && (b.moved = !1, b.options.onScrollEnd && b.options.onScrollEnd.call(b)), b.hScrollbar && b.options.hideScrollbar && ("webkit" == e && (b.hScrollbarWrapper.style[l] = "300ms"), b.hScrollbarWrapper.style.opacity = "0"), b.vScrollbar && b.options.hideScrollbar && ("webkit" == e && (b.vScrollbarWrapper.style[l] = "300ms"), b.vScrollbarWrapper.style.opacity = "0"), void 0) : (b.scrollTo(c, d, a || 0), void 0)
			},
			_wheel: function(a) {
				var c, d, e, f, g, b = this;
				if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12, d = a.wheelDeltaY / 12;
				else if ("wheelDelta" in a) c = d = a.wheelDelta / 12;
				else {
					if (!("detail" in a)) return;
					c = d = 3 * -a.detail
				}
				return "zoom" == b.options.wheelAction ? (g = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)), g < b.options.zoomMin && (g = b.options.zoomMin), g > b.options.zoomMax && (g = b.options.zoomMax), g != b.scale && (!b.wheelZoomCount && b.options.onZoomStart && b.options.onZoomStart.call(b, a), b.wheelZoomCount++, b.zoom(a.pageX, a.pageY, g, 400), setTimeout(function() {
					b.wheelZoomCount--, !b.wheelZoomCount && b.options.onZoomEnd && b.options.onZoomEnd.call(b, a)
				}, 400)), void 0) : (e = b.x + c, f = b.y + d, e > 0 ? e = 0 : e < b.maxScrollX && (e = b.maxScrollX), f > b.minScrollY ? f = b.minScrollY : f < b.maxScrollY && (f = b.maxScrollY), b.maxScrollY < 0 && b.scrollTo(e, f, 0), void 0)
			},
			_transitionEnd: function(a) {
				var b = this;
				a.target == b.scroller && (b._unbind(y), b._startAni())
			},
			_startAni: function() {
				var f, g, h, a = this,
					b = a.x,
					d = a.y,
					e = Date.now();
				if (!a.animating) {
					if (!a.steps.length) return a._resetPos(400), void 0;
					if (f = a.steps.shift(), f.x == b && f.y == d && (f.time = 0), a.animating = !0, a.moved = !0, a.options.useTransition) return a._transitionTime(f.time), a._pos(f.x, f.y), a.animating = !1, f.time ? a._bind(y) : a._resetPos(0), void 0;
					h = function() {
						var j, k, i = Date.now();
						return i >= e + f.time ? (a._pos(f.x, f.y), a.animating = !1, a.options.onAnimationEnd && a.options.onAnimationEnd.call(a), a._startAni(), void 0) : (i = (i - e) / f.time - 1, g = c.sqrt(1 - i * i), j = (f.x - b) * g + b, k = (f.y - d) * g + d, a._pos(j, k), a.animating && (a.aniTime = z(h)), void 0)
					}, h()
				}
			},
			_transitionTime: function(a) {
				a += "ms", this.scroller.style[i] = a, this.hScrollbar && (this.hScrollbarIndicator.style[i] = a), this.vScrollbar && (this.vScrollbarIndicator.style[i] = a)
			},
			_momentum: function(a, b, d, e, f) {
				var g = 6e-4,
					h = c.abs(a) / b,
					i = h * h / (2 * g),
					j = 0,
					k = 0;
				return a > 0 && i > d ? (k = f / (6 / (i / h * g)), d += k, h = h * d / i, i = d) : 0 > a && i > e && (k = f / (6 / (i / h * g)), e += k, h = h * e / i, i = e), i *= 0 > a ? -1 : 1, j = h / g, {
					dist: i,
					time: c.round(j)
				}
			},
			_offset: function(a) {
				for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
				return a != this.wrapper && (b *= this.scale, c *= this.scale), {
					left: b,
					top: c
				}
			},
			_snap: function(a, b) {
				var e, f, g, h, i, j, d = this;
				for (g = d.pagesX.length - 1, e = 0, f = d.pagesX.length; f > e; e++) if (a >= d.pagesX[e]) {
					g = e;
					break
				}
				for (g == d.currPageX && g > 0 && d.dirX < 0 && g--, a = d.pagesX[g], i = c.abs(a - d.pagesX[d.currPageX]), i = i ? 500 * (c.abs(d.x - a) / i) : 0, d.currPageX = g, g = d.pagesY.length - 1, e = 0; g > e; e++) if (b >= d.pagesY[e]) {
					g = e;
					break
				}
				return g == d.currPageY && g > 0 && d.dirY < 0 && g--, b = d.pagesY[g], j = c.abs(b - d.pagesY[d.currPageY]), j = j ? 500 * (c.abs(d.y - b) / j) : 0, d.currPageY = g, h = c.round(c.max(i, j)) || 200, {
					x: a,
					y: b,
					time: h
				}
			},
			_bind: function(a, b, c) {
				(b || this.scroller).addEventListener(a, this, !! c)
			},
			_unbind: function(a, b, c) {
				(b || this.scroller).removeEventListener(a, this, !! c)
			},
			destroy: function() {
				var b = this;
				b.scroller.style[g] = "", b.hScrollbar = !1, b.vScrollbar = !1, b._scrollbar("h"), b._scrollbar("v"), b._unbind(t, a), b._unbind(u), b._unbind(v, a), b._unbind(w, a), b._unbind(x, a), b.options.hasTouch || (b._unbind("DOMMouseScroll"), b._unbind("mousewheel")), b.options.useTransition && b._unbind(y), b.options.checkDOMChanges && clearInterval(b.checkDOMTime), b.options.onDestroy && b.options.onDestroy.call(b)
			},
			refresh: function() {
				var b, d, e, f, a = this,
					g = 0,
					h = 0;
				if (a.scale < a.options.zoomMin && (a.scale = a.options.zoomMin), a.wrapperW = a.wrapper.clientWidth || 1, a.wrapperH = a.wrapper.clientHeight || 1, a.minScrollY = -a.options.topOffset || 0, a.scrollerW = c.round(a.scroller.offsetWidth * a.scale), a.scrollerH = c.round((a.scroller.offsetHeight + a.minScrollY) * a.scale), a.maxScrollX = a.wrapperW - a.scrollerW, a.maxScrollY = a.wrapperH - a.scrollerH + a.minScrollY, a.dirX = 0, a.dirY = 0, a.options.onRefresh && a.options.onRefresh.call(a), a.hScroll = a.options.hScroll && a.maxScrollX < 0, a.vScroll = a.options.vScroll && (!a.options.bounceLock && !a.hScroll || a.scrollerH > a.wrapperH), a.hScrollbar = a.hScroll && a.options.hScrollbar, a.vScrollbar = a.vScroll && a.options.vScrollbar && a.scrollerH > a.wrapperH, b = a._offset(a.wrapper), a.wrapperOffsetLeft = -b.left, a.wrapperOffsetTop = -b.top, "string" == typeof a.options.snap) for (a.pagesX = [], a.pagesY = [], f = a.scroller.querySelectorAll(a.options.snap), d = 0, e = f.length; e > d; d++) g = a._offset(f[d]), g.left += a.wrapperOffsetLeft, g.top += a.wrapperOffsetTop, a.pagesX[d] = g.left < a.maxScrollX ? a.maxScrollX : g.left * a.scale, a.pagesY[d] = g.top < a.maxScrollY ? a.maxScrollY : g.top * a.scale;
				else if (a.options.snap) {
					for (a.pagesX = []; g >= a.maxScrollX;) a.pagesX[h] = g, g -= a.wrapperW, h++;
					for (a.maxScrollX % a.wrapperW && (a.pagesX[a.pagesX.length] = a.maxScrollX - a.pagesX[a.pagesX.length - 1] + a.pagesX[a.pagesX.length - 1]), g = 0, h = 0, a.pagesY = []; g >= a.maxScrollY;) a.pagesY[h] = g, g -= a.wrapperH, h++;
					a.maxScrollY % a.wrapperH && (a.pagesY[a.pagesY.length] = a.maxScrollY - a.pagesY[a.pagesY.length - 1] + a.pagesY[a.pagesY.length - 1])
				}
				a._scrollbar("h"), a._scrollbar("v"), a.zoomed || (a.scroller.style[i] = "0", a._resetPos(400))
			},
			scrollTo: function(a, b, c, d) {
				var g, h, e = this,
					f = a;
				for (e.stop(), f.length || (f = [{
					x: a,
					y: b,
					time: c,
					relative: d
				}]), g = 0, h = f.length; h > g; g++) f[g].relative && (f[g].x = e.x - f[g].x, f[g].y = e.y - f[g].y), e.steps.push({
					x: f[g].x,
					y: f[g].y,
					time: f[g].time || 0
				});
				e._startAni()
			},
			scrollToElement: function(a, b) {
				var e, d = this;
				a = a.nodeType ? a : d.scroller.querySelector(a), a && (e = d._offset(a), e.left += d.wrapperOffsetLeft, e.top += d.wrapperOffsetTop, e.left = e.left > 0 ? 0 : e.left < d.maxScrollX ? d.maxScrollX : e.left, e.top = e.top > d.minScrollY ? d.minScrollY : e.top < d.maxScrollY ? d.maxScrollY : e.top, b = void 0 === b ? c.max(2 * c.abs(e.left), 2 * c.abs(e.top)) : b, d.scrollTo(e.left, e.top, b))
			},
			scrollToPage: function(a, b, c) {
				var e, f, d = this;
				c = void 0 === c ? 400 : c, d.options.onScrollStart && d.options.onScrollStart.call(d), d.options.snap ? (a = "next" == a ? d.currPageX + 1 : "prev" == a ? d.currPageX - 1 : a, b = "next" == b ? d.currPageY + 1 : "prev" == b ? d.currPageY - 1 : b, a = 0 > a ? 0 : a > d.pagesX.length - 1 ? d.pagesX.length - 1 : a, b = 0 > b ? 0 : b > d.pagesY.length - 1 ? d.pagesY.length - 1 : b, d.currPageX = a, d.currPageY = b, e = d.pagesX[a], f = d.pagesY[b]) : (e = -d.wrapperW * a, f = -d.wrapperH * b, e < d.maxScrollX && (e = d.maxScrollX), f < d.maxScrollY && (f = d.maxScrollY)), d.scrollTo(e, f, c)
			},
			disable: function() {
				this.stop(), this._resetPos(0), this.enabled = !1, this._unbind(v, a), this._unbind(w, a), this._unbind(x, a)
			},
			enable: function() {
				this.enabled = !0
			},
			stop: function() {
				this.options.useTransition ? this._unbind(y) : A(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
			},
			zoom: function(a, b, c, d) {
				var e = this,
					f = c / e.scale;
				e.options.useTransform && (e.zoomed = !0, d = void 0 === d ? 200 : d, a = a - e.wrapperOffsetLeft - e.x, b = b - e.wrapperOffsetTop - e.y, e.x = a - a * f + e.x, e.y = b - b * f + e.y, e.scale = c, e.refresh(), e.x = e.x > 0 ? 0 : e.x < e.maxScrollX ? e.maxScrollX : e.x, e.y = e.y > e.minScrollY ? e.minScrollY : e.y < e.maxScrollY ? e.maxScrollY : e.y, e.scroller.style[i] = d + "ms", e.scroller.style[g] = "translate(" + e.x + "px," + e.y + "px) scale(" + c + ")" + B, e.zoomed = !1)
			},
			isReady: function() {
				return !this.moved && !this.zoomed && !this.animating
			}
		}, d = null, "undefined" != typeof exports ? exports.iScroll = C : a.iScroll = C
	}(window, document);