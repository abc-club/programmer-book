function pgvGetCookieByName(e) {
    var t = Tcss.d.cookie.match(new RegExp("(^|\\s)" + e + "([^;]*)(;|$)"));
    return t == null ? pvNone : unescape(t[2])
}
function pgvRealSetCookie(e) {
    Tcss.d.cookie = e + ";path=/;domain=" + Tcss.domainToSet + ";expires=Sun, 18 Jan 2038 00:00:00 GMT;"
}
function pgvGetDomainInfo() {
    typeof pvCurDomain != "undefined" && pvCurDomain != "" && (Tcss.dm = pvCurDomain), typeof pvCurUrl != "undefined" && pvCurUrl != "" && (Tcss.url = escape(pvCurUrl)), Tcss.arg == pvNone && (Tcss.arg = "")
}
function pgvIsPgvDomain() {
    var e = Tcss.dm.split("."), t = Tcss.dm;
    return e.length >= 3 && e[e.length - 2] == "qq" && (t = e[e.length - 3]), !/(^qzone$)|(^cache$)|(^ossweb-img$)|(^ring$)|(^im$)|(^fo$)|(^shuqian$)|(^photo$)|(^pet$)|(^r2$)|(^bar$)|(^client$)|(^music$)|(^pay$)|(^sg$)|(^vip$)|(^show$)|(^qqtang$)|(^safe$)|(^service$)|(^love$)|(^mail$)|(^qqgamecdnimg$)|(^netbar$)|(^dnf$)|(^qqgame$)|(^mgp$)|(^magic$)|(^city$)|(^1314$)|(^wb$)|(^qun$)|(^aq$)|(^17roco$)|(^minigame$)|(^cf$)|(^zg$)|(^pc$)|(^shurufa$)|(^live$)|(\.3366\.com$)/.test(t)
}
function pgvGetRefInfo() {
    typeof pvRefDomain != "undefined" && pvRefDomain != "" && (Tcss.rdm = pvRefDomain), Tcss.rdm = Tcss.rdm == pvNone ? "" : Tcss.rdm, typeof pvRefUrl != "undefined" && pvRefUrl != "" && (Tcss.rurl = pvRefUrl), Tcss.rurl == pvNone && (Tcss.rurl = ""), Tcss.rarg == pvNone && (Tcss.rarg = "");
    if (pgvIsPgvDomain()) {
        if (Tcss.rdm == "") {
            var e = Tcss.l.href.match(new RegExp("[?&#](((pgv_ref)|(ref)|(ptlang))=[^&#]+)(#|&|$)"));
            e && (Tcss.rdm = e[1] == null ? "" : escape(e[1]))
        }
        var t = Tcss.l.href.match(new RegExp("[?&#](pref=[^&#]+)(&|#|$)"));
        t && (Tcss.rdm = t[1] == null ? "" : escape(t[1]))
    }
}
function pgvGetColumn() {
    Tcss.column = "", typeof vsPgvCol != "undefined" && vsPgvCol != "" && (Tcss.column += vsPgvCol)
}
function pgvGetTopic() {
    Tcss.subject = "", typeof pvCSTM != "undefined" && pvCSTM != "" && (Tcss.subject = pvCSTM)
}
function trimUin(e) {
    var t = pvNone;
    return e != pvNone && (e = e.replace(new RegExp("[^0-9]", "gm"), ""), t = e.replace(new RegExp("^0+", "gm"), ""), t == "" && (t = pvNone)), t
}
function pgvGetNewRand() {
    var e = trimUin(pgvGetCookieByName("uin_cookie=")), t = trimUin(pgvGetCookieByName("adid=")), n = trimUin(pgvGetCookieByName("uin=")), r = trimUin(pgvGetCookieByName("luin=")), i = trimUin(pgvGetCookieByName("clientuin=")), s = trimUin(pgvGetCookieByName("pt2gguin=")), o = trimUin(pgvGetCookieByName("zzpaneluin=")), u = trimUin(pgvGetCookieByName("o_cookie=")), a = pgvGetCookieByName("pgv_pvid=");
    return u.length > 13 && pgvRealSetCookie("o_cookie="), n != pvNone ? (pgvRealSetCookie("o_cookie=" + n), "&nrnd=" + n) : r != pvNone ? (pgvRealSetCookie("o_cookie=" + r), "&nrnd=" + r) : s != pvNone ? (pgvRealSetCookie("o_cookie=" + s), "&nrnd=" + s) : e != pvNone ? (pgvRealSetCookie("o_cookie=" + e), "&nrnd=" + e) : u != pvNone ? "&nrnd=" + u : t != pvNone ? (pgvRealSetCookie("o_cookie=" + t), "&nrnd=" + t) : i != pvNone ? (pgvRealSetCookie("o_cookie=" + i), "&nrnd=" + i) : o != pvNone ? (pgvRealSetCookie("o_cookie=" + o), "&nrnd=" + o) : a != pvNone ? "&nrnd=F" + a : "&nrnd=-"
}
function hotClick() {
    document.addEventListener ? document.addEventListener("click", clickEvent, !1) : document.attachEvent && document.attachEvent("onclick", clickEvent), window.addEventListener ? window.addEventListener("onbeforeunload", staybounce, !1) : window.attachEvent && window.attachEvent("onbeforeunload", staybounce)
}
function getScrollXY() {
    return document.body.scrollTop ? {
        x: document.body.scrollLeft,
        y: document.body.scrollTop
    } : {x: document.documentElement.scrollLeft, y: document.documentElement.scrollTop}
}
function clickEvent(e) {
    e = e || window.event;
    var t = e.clientX + getScrollXY().x - document.getElementsByTagName("body")[0].offsetLeft, n = e.clientY + getScrollXY().y - document.getElementsByTagName("body")[0].offsetTop;
    if (t < 0 || n < 0)return;
    try {
        var r = 1;
        typeof e.srcElement != "undefined" && e.srcElement == "[object]" && typeof e.srcElement.parentElement != "undefined" && e.srcElement.parentElement == "[object]" && (r = 0), pvClickCount += r;
        var i = new Image(1, 1);
        i.src = "//trace.qq.com/collect?pj=8888&url=" + escape(location.href) + "&w=" + screen.width + "&x=" + t + "&y=" + n + "&v=" + r + "&u=" + trimUin(pgvGetCookieByName("o_cookie")), delete i
    } catch (s) {
    }
}
function tracert() {
    if (pgvIsPgvDomain()) {
        sendUrl = new Image(1, 1);
        var e = escape(window.location.href), t = "pj=1990&dm=" + Tcss.dm + "&url=" + Tcss.url + "&arg=" + Tcss.arg + "&rdm=" + Tcss.rdm + "&rurl=" + Tcss.rurl + "&rarg=" + Tcss.rarg + "&icache=" + Tcss.pgUserType + "&uv=" + "&nu=" + "&ol=" + "&loc=" + e + "&column=" + Tcss.column + "&subject=" + Tcss.subject + pgvGetNewRand() + "&rnd=" + Math.round(Math.random() * 1e5);
        sendUrl.src = "//trace.qq.com/collect?" + t;
        var n = trimUin(pgvGetCookieByName("o_cookie="));
        if (pvSetupHot == 1 && n != pvNone && n % 10 == 3 && !/\/a\//.test(location.href)) {
            hotClick();
            var r = new Date;
            pvStartTime = r.getTime()
        }
    }
}
function staybounce() {
    dt = new Date;
    var e = dt.getTime(), t = new Image(1, 1);
    t.src = "//trace.qq.com/collect?pj=8887&url=" + escape(location.href) + "&t=" + parseInt((e - pvStartTime) / 1e3) + "&v=" + pvClickCount + "&u=" + trimUin(pgvGetCookieByName("o_cookie")), delete t
}
var pvNone = "-", pvStartTime = 0, sendUrl, pvClickCount = 0, pvSetupHot = 1, pvCurDomain = "", pvCurUrl = "", pvRefDomain = "", pvRefUrl = "";
if (typeof pvRepeatCount == "undefined")var pvRepeatCount = 1;
(function () {
    function tcss(e) {
        this.url = [], this.init(e)
    }

    function loadScript(e) {
        var t = document.createElement("script"), n = document.getElementsByTagName("script")[0];
        t.src = e, t.type = "text/javascript", t.async = !0, n.parentNode.insertBefore(t, n)
    }

    var _d, _l, _b, _n = "-", _params, _curDomain, _curUrl, _domainToSet, _refDomain, _refUrl, _image, _ext, _hurlcn, _tt, _ch = 0, _crossDomain = 0;
    _ver = "tcss.3.1.5", _speedTestUrl = "//jsqmt.qq.com/cdn_djl.js", window.Tcss = {};
    var _pgvVersion = typeof tracert == "function" && typeof pgvGetColumn == "function" && typeof pgvGetTopic == "function" && typeof pgvGetDomainInfo == "function" && typeof pgvGetRefInfo == "function";
    if (typeof _rep == "undefined")var _rep = 1;
    tcss.prototype = {
        init: function (e) {
            e ? _params = e : _params = {}, _d = document;
            if (!_params.statIframe && window != top)try {
                _d = top.document
            } catch (t) {
            }
            typeof _d == "undefined" && (_d = document), _l = _d.location, _b = _d.body, _pgvVersion && (Tcss.d = _d, Tcss.l = _l), _ext = [], _hurlcn = [], _tt = []
        }, run: function () {
            var e, t, n;
            e = (new Date).getTime(), _cookie.init(), this.url.push(this.getDomainInfo()), this.coverCookie(), _cookie.setCookie("ssid"), _cookie.save(), this.url.unshift("//pingfore." + this.getCookieSetDomain(_curDomain) + "/pingd?"), this.url.push(this.getRefInfo(_params));
            try {
                navigator.cookieEnabled ? this.url.push("&pvid=" + _cookie.setCookie("pgv_pvid", !0)) : this.url.push("&pvid=NoCookie")
            } catch (r) {
                this.url.push("&pvid=NoCookie")
            }
            this.url.push(this.getMainEnvInfo()), this.url.push(this.getExtendEnvInfo()), Tcss.pgUserType = "";
            if (_params.pgUserType || _params.reserved2) {
                var i = _params.pgUserType || _params.reserved2;
                i = escape(i.substring(0, 256)), Tcss.pgUserType = i, _tt.push("pu=" + Tcss.pgUserType)
            }
            _pgvVersion && (pgvGetColumn(), pgvGetTopic(), this.url.push("&column=" + Tcss.column + "&subject=" + Tcss.subject), tracert()), this.url.push("&vs=" + _ver), _cookie.setCookie("ts_uid", !0), t = (new Date).getTime(), _ext.push("tm=" + (t - e)), _ch && _ext.push("ch=" + _ch), _params.extParam ? n = _params.extParam + "|" : n = "", this.url.push("&ext=" + escape(n + _ext.join(";"))), this.url.push("&hurlcn=" + escape(_hurlcn.join(";"))), this.url.push("&rand=" + Math.round(Math.random() * 1e5)), typeof _speedMark == "undefined" ? this.url.push("&reserved1=-1") : this.url.push("&reserved1=" + (new Date - _speedMark));
            var s = this.getSud();
            s && _tt.push("su=" + escape(s.substring(0, 256))), this.url.push("&tt=" + escape(_tt.join(";"))), this.sendInfo(this.url.join(""));
            if (_crossDomain == 1) {
                var o = this.getParameter("tcss_rp_dm", _d.URL);
                if (o != Tcss.dm) {
                    var u = this.url.join("").replace(/\?dm=(.*?)\&/, "?dm=" + o + "&");
                    this.sendInfo(u)
                }
            }
            _params.hot && (document.attachEvent ? document.attachEvent("onclick", function (e) {
                pgvWatchClick(e)
            }) : document.addEventListener("click", function (e) {
                pgvWatchClick(e)
            }, !1)), _params.repeatApplay && _params.repeatApplay == "true" && typeof _rep != "undefined" && (_rep = 1)
        }, getSud: function () {
            if (_params.sessionUserType)return _params.sessionUserType;
            var e = _params.sudParamName || "sessionUserType", t = this.getParameter(e, _d.URL);
            return t
        }, coverCookie: function () {
            if (_params.crossDomain && _params.crossDomain == "on") {
                var e = this.getParameter("tcss_uid", _d.URL), t = this.getParameter("tcss_sid", _d.URL), n = this.getParameter("tcss_refer", _d.URL), r = this.getParameter("tcss_last", _d.URL);
                t && e && (_crossDomain = 1, _cookie.setCookie("ssid", !1, t), _cookie.save(), _cookie.setCookie("ts_refer", !0, n), _cookie.setCookie("ts_last", !0, r), _cookie.setCookie("pgv_pvid", !0, e))
            }
        }, getDomainInfo: function (e) {
            var t, n;
            return t = _l.hostname.toLowerCase(), _params.virtualDomain && (_hurlcn.push("ad=" + t), t = _params.virtualDomain), n = this.getCurrentUrl(), Tcss.dm = t, _pgvVersion && pgvGetDomainInfo(), _curDomain = Tcss.dm, _domainToSet || (_domainToSet = this.getCookieSetDomain(_l.hostname.toLowerCase()), _pgvVersion && (Tcss.domainToSet = _domainToSet)), e && (Tcss.dm += ".hot"), "dm=" + Tcss.dm + "&url=" + Tcss.url
        }, getCurrentUrl: function () {
            var e = "", t = _n;
            e = _curUrl = escape(_l.pathname), _l.search != "" && (t = escape(_l.search.substr(1)));
            if (_params.senseParam) {
                var n = this.getParameter(_params.senseParam, _d.URL);
                n && (e += "_" + n)
            }
            _params.virtualURL && (_hurlcn.push("au=" + e), e = _params.virtualURL), Tcss.url = e, Tcss.arg = t
        }, getRefInfo: function (e) {
            var t = _n, n = _n, r = _n, i = _d.referrer, s, o, u;
            s = e.tagParamName || "ADTAG", o = this.getParameter(s, _d.URL), u = i.indexOf("://");
            if (u > -1) {
                var a = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i, f = i.match(a);
                f && (t = f[2], n = f[4] + (f[5] ? f[5] : ""))
            }
            if (i.indexOf("?") != -1) {
                var u = i.indexOf("?") + 1;
                r = i.substr(u)
            }
            var l = t;
            _params.virtualRefDomain && (t != _n && _hurlcn.push("ard=" + t), t = _params.virtualRefDomain), _params.virtualRefURL && (n != _n && _hurlcn.push("aru=" + escape(n)), n = _params.virtualRefURL);
            var c;
            o && (c = t + n, t = "ADTAG", n = o), _refDomain = t, _refUrl = escape(n);
            if (_refDomain == _n || _refDomain == "ADTAG" && l == _n) {
                var h = _cookie.get("ts_last=", !0);
                h != _n && _ext.push("ls=" + h)
            }
            _cookie.setCookie("ts_last", !0, escape((_l.hostname + _l.pathname).substring(0, 128)));
            var p = _cookie.get("ts_refer=", !0);
            p != _n && _ext.push("rf=" + p);
            var d = _l.hostname;
            _params.inner && (d = "," + d + "," + _params.inner + ",");
            if (!(_refDomain == _n || ("," + d + ",").indexOf(_refDomain) > -1 || _crossDomain == 1)) {
                var v = escape((_refDomain + n).substring(0, 128));
                v != p && (_ch = 2), _cookie.setCookie("ts_refer", !0, v)
            }
            return Tcss.rdm = _refDomain, Tcss.rurl = _refUrl, Tcss.rarg = escape(r), _pgvVersion && pgvGetRefInfo(), c ? "&rdm=" + Tcss.rdm + "&rurl=" + Tcss.rurl + "&rarg=" + Tcss.rarg + "&or=" + c : "&rdm=" + Tcss.rdm + "&rurl=" + Tcss.rurl + "&rarg=" + Tcss.rarg
        }, getMainEnvInfo: function () {
            var e = "";
            try {
                var t = _n, n = _n, r = _n, i = _n, s = _n, o = 0, u = navigator;
                self.screen && (t = screen.width + "x" + screen.height, n = screen.colorDepth + "-bit"), u.language ? r = u.language.toLowerCase() : u.browserLanguage && (r = u.browserLanguage.toLowerCase()), o = u.javaEnabled() ? 1 : 0, i = u.platform, s = (new Date).getTimezoneOffset() / 60, e = "&scr=" + t + "&scl=" + n + "&lang=" + r + "&java=" + o + "&pf=" + i + "&tz=" + s
            } catch (a) {
            } finally {
                return e
            }
        }, getExtendEnvInfo: function () {
            var e = "";
            try {
                var t, n = _l.href, r = _n;
                e += "&flash=" + this.getFlashInfo(), _b.addBehavior && (_b.addBehavior("#default#homePage"), _b.isHomePage(n) && (e += "&hp=Y")), _b.addBehavior && (_b.addBehavior("#default#clientCaps"), r = _b.connectionType), e += "&ct=" + r
            } catch (i) {
            } finally {
                return e
            }
        }, getFlashInfo: function () {
            var f = _n, n = navigator;
            try {
                if (n.plugins && n.plugins.length) {
                    for (var i = 0; i < n.plugins.length; i++)if (n.plugins[i].name.indexOf("Shockwave Flash") > -1) {
                        f = n.plugins[i].description.split("Shockwave Flash ")[1];
                        break
                    }
                } else if (window.ActiveXObject)for (var i = 12; i >= 5; i--)try {
                    var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + i + "');");
                    if (fl) {
                        f = i + ".0";
                        break
                    }
                } catch (e) {
                }
            } catch (e) {
            }
            return f
        }, getParameter: function (e, t) {
            if (e && t) {
                var n = new RegExp("(\\?|#|&)" + e + "=([^&^#]*)(#|&|$)"), r = t.match(n);
                return r ? r[2] : ""
            }
            return ""
        }, getCookieSetDomain: function (e) {
            var t, n, r, i = [], s = 0;
            for (var o = 0; o < e.length; o++)e.charAt(o) == "." && (i[s] = o, s++);
            return t = i.length, n = e.indexOf(".cn"), n > -1 && t--, r = "qq.com", t == 1 ? r = e : t > 1 && (r = e.substring(i[t - 2] + 1)), r
        }, watchClick: function (e) {
            try {
                var t = !0, n = "", r;
                r = window.event ? window.event.srcElement : e.target;
                switch (r.tagName) {
                    case"A":
                        n = "<A href=" + r.href + ">" + r.innerHTML + "</a>";
                        break;
                    case"IMG":
                        n = "<IMG src=" + r.src + ">";
                        break;
                    case"INPUT":
                        n = "<INPUT type=" + r.type + " value=" + r.value + ">";
                        break;
                    case"BUTTON":
                        n = "<BUTTON>" + r.innerText + "</BUTTON>";
                        break;
                    case"SELECT":
                        n = "SELECT";
                        break;
                    default:
                        t = !1
                }
                if (t) {
                    var i = new tcss(_params), s = i.getElementPos(r);
                    if (_params.coordinateId) {
                        var o = i.getElementPos(document.getElementById(_params.coordinateId));
                        s.x -= o.x
                    }
                    i.url.push(i.getDomainInfo(!0)), i.url.push("&hottag=" + escape(n)), i.url.push("&hotx=" + s.x), i.url.push("&hoty=" + s.y), i.url.push("&rand=" + Math.round(Math.random() * 1e5)), i.url.unshift("//pinghot." + this.getCookieSetDomain(_curDomain) + "/pingd?"), i.sendInfo(i.url.join(""))
                }
            } catch (u) {
            }
        }, getElementPos: function (e) {
            if (e.parentNode === null || e.style.display == "none")return !1;
            var t = navigator.userAgent.toLowerCase(), n = null, r = [], i;
            if (e.getBoundingClientRect) {
                var s, o, u, a;
                return i = e.getBoundingClientRect(), s = Math.max(document.documentElement.scrollTop, document.body.scrollTop), o = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), u = document.body.clientTop, a = document.body.clientLeft, {
                    x: i.left + o - a,
                    y: i.top + s - u
                }
            }
            if (document.getBoxObjectFor) {
                i = document.getBoxObjectFor(e);
                var f = e.style.borderLeftWidth ? Math.floor(e.style.borderLeftWidth) : 0, l = e.style.borderTopWidth ? Math.floor(e.style.borderTopWidth) : 0;
                r = [i.x - f, i.y - l]
            } else {
                r = [e.offsetLeft, e.offsetTop], n = e.offsetParent;
                if (n != e)while (n)r[0] += n.offsetLeft, r[1] += n.offsetTop, n = n.offsetParent;
                if (t.indexOf("opera") > -1 || t.indexOf("safari") > -1 && e.style.position == "absolute")r[0] -= document.body.offsetLeft, r[1] -= document.body.offsetTop
            }
            e.parentNode ? n = e.parentNode : n = null;
            while (n && n.tagName != "BODY" && n.tagName != "HTML")r[0] -= n.scrollLeft, r[1] -= n.scrollTop, n.parentNode ? n = n.parentNode : n = null;
            return {x: r[0], y: r[1]}
        }, sendClick: function () {
            _params.hottag && (this.url.push(this.getDomainInfo(!0)), this.url.push("&hottag=" + escape(_params.hottag)), this.url.push("&hotx=9999&hoty=9999"), this.url.push("&rand=" + Math.round(Math.random() * 1e5)), this.url.unshift("//pinghot." + this.getCookieSetDomain(_curDomain) + "/pingd?"), this.sendInfo(this.url.join("")))
        }, pgvGetArgs: function () {
            this.getDomainInfo();
            var e = [];
            return e.push("tcss_rp_dm=" + Tcss.dm), e.push("tcss_uid=" + _cookie.get("pgv_pvid=", !0)), e.push("tcss_sid=" + _cookie.get("ssid=", !0)), e.push("tcss_refer=" + _cookie.get("ts_refer=", !0)), e.push("tcss_last=" + _cookie.get("ts_last=", !0)), e.join("&")
        }, sendInfo: function (e) {
            _image = new Image(1, 1), Tcss.img = _image, _image.onload = _image.onerror = _image.onabort = function () {
                _image.onload = _image.onerror = _image.onabort = null, Tcss.img = null
            }, _image.src = e
        }
    };
    var _cookie = {
        sck: [], sco: {}, init: function () {
            var e = this.get("pgv_info=", !0);
            if (e != _n) {
                var t = e.split("&");
                for (var n = 0; n < t.length; n++) {
                    var r = t[n].split("=");
                    this.set(r[0], unescape(r[1]))
                }
            }
        }, get: function (e, t) {
            var n = t ? _d.cookie : this.get("pgv_info=", !0), r = _n, i, s;
            i = n.indexOf(e);
            if (i > -1) {
                i += e.length, s = n.indexOf(";", i), s == -1 && (s = n.length);
                if (!t) {
                    var o = n.indexOf("&", i);
                    o > -1 && (s = Math.min(s, o))
                }
                r = n.substring(i, s)
            }
            return r
        }, set: function (e, t) {
            this.sco[e] = t;
            var n = !1, r = this.sck.length;
            for (var i = 0; i < r; i++)if (e == this.sck[i]) {
                n = !0;
                break
            }
            n || this.sck.push(e)
        }, setCookie: function (e, t, n) {
            var r = _l.hostname, i = _cookie.get(e + "=", t);
            if (i == _n && !n) {
                switch (e) {
                    case"ts_uid":
                        _ext.push("nw=1");
                        break;
                    case"ssid":
                        _ch = 1
                }
                t ? i = "" : i = "s";
                var s = (new Date).getUTCMilliseconds();
                i += Math.round(Math.abs(Math.random() - 1) * 2147483647) * s % 1e10
            } else i = n ? n : i;
            if (t)switch (e) {
                case"ts_uid":
                    this.saveCookie(e + "=" + i, r, this.getExpires(1051200));
                    break;
                case"ts_refer":
                    this.saveCookie(e + "=" + i, r, this.getExpires(259200));
                    break;
                case"ts_last":
                    this.saveCookie(e + "=" + i, r, this.getExpires(30));
                    break;
                default:
                    this.saveCookie(e + "=" + i, _domainToSet, "expires=Sun, 18 Jan 2038 00:00:00 GMT;")
            } else this.set(e, i);
            return i
        }, getExpires: function (e) {
            var t = new Date;
            return t.setTime(t.getTime() + e * 60 * 1e3), "expires=" + t.toGMTString()
        }, save: function () {
            if (_params.sessionSpan) {
                var e = new Date;
                e.setTime(e.getTime() + _params.sessionSpan * 60 * 1e3)
            }
            var t = "", n = this.sck.length;
            for (var r = 0; r < n; r++)t += this.sck[r] + "=" + this.sco[this.sck[r]] + "&";
            t = "pgv_info=" + t.substr(0, t.length - 1);
            var i = "";
            e && (i = "expires=" + e.toGMTString()), this.saveCookie(t, _domainToSet, i)
        }, saveCookie: function (e, t, n) {
            _d.cookie = e + ";path=/;domain=" + t + ";" + n
        }
    };
    window.pgvMain = function (e, t) {
        var n = "";
        t ? (n = t, _ver = "tcsso.3.1.5") : (n = e, _ver = "tcss.3.1.5");
        try {
            _pgvVersion && (typeof pvRepeatCount != "undefined" && pvRepeatCount == 1 ? (_rep = 1, pvRepeatCount = 2) : _rep = 2);
            if (_rep != 1)return;
            _rep = 2, (new tcss(n)).run()
        } catch (r) {
        }
    }, window.pgvSendClick = function (e) {
        (new tcss(e)).sendClick()
    }, window.pgvWatchClick = function (e) {
        (new tcss(e)).watchClick(e)
    }, window.pgvGetArgs = function (e) {
        return (new tcss(e)).pgvGetArgs()
    }
    //, loadScript(_speedTestUrl)
})()/*  |xGv00|3f70bc161cc3af8e338e485e95c99ed3 */