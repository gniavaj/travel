
var _JS_DEBUG_ = location.href.indexOf('_js_debug_') > -1 ? '.js': '-min.js',
    _YUI3_CONFIG_ = {
        combine: true,
        comboBase: 'http://a.tbcdn.cn/??',
        root: 's/yui/3.5.1/build/',
        filter: {
            'searchExp': _JS_DEBUG_ == '.js' ? '-min.js&': '&',
            'replaceStr': _JS_DEBUG_ == '.js' ? '-debug.js,': ','
        },
        charset: 'gbk',
        groups: {
            util: {
                root: 'g/trip/et/common/',
                combine: true,
                modules: {
                    'trip-mustache': {
                        path: 'js/mustache' + _JS_DEBUG_
                    },
                    'trip-modernizr': {
                        path: 'js/modernizr' + _JS_DEBUG_
                    },
                    'trip-placeholder': {
                        path: 'js/placeholder' + _JS_DEBUG_,
                        requires: ['node-base', 'trip-modernizr']
                    },
                    't-placeholder': {
                        path: 'js/t-placeholder' + _JS_DEBUG_,
                        requires: ['node-base']
                    },
                    'trip-slide': {
                        path: 'js/slide' + _JS_DEBUG_,
                        requires: ['node-base', 'node-event-delegate', 'node-screen', 'anim-easing']
                    },
                    'trip-storage-lite': {
                        path: 'js/storage-lite-v1.1' + _JS_DEBUG_,
                        requires: ['event-base', 'event-custom-complex', 'json']
                    },
                    'trip-search-form': {
                        path: 'js/search-form' + _JS_DEBUG_,
                        requires: ['node-base', 'node-event-delegate', 'event-base', 'base-base', 'base-build', 'cookie', 'trip-modernizr', 'trip-storage-lite']
                    },
                    'trip-history': {
                        path: 'js/history' + _JS_DEBUG_,
                        requires: ['node-base', 'event-base', 'event-custom-complex', 'event-synthetic']
                    },
                    'trip-ejohn-template': {
                        path: 'js/ejohn-template' + _JS_DEBUG_
                    },
                    'trip-lazyload': {
                        path: 'js/lazyload' + _JS_DEBUG_,
                        requires: ['node-base']
                    },
                    'trip-tip-skin': {
                        path: 'css/trip-tip-skin.css',
                        type: 'css'
                    },
                    'trip-monitor': {
                        path: 'js/monitor' + _JS_DEBUG_
                    },
                    'juicer': {
                        path: 'js/juicer' + _JS_DEBUG_
                    }
                }
            },
            widgets: {
                root: 'g/trip/et/common/widgets/',
                combine: true,
                modules: {
                    'trip-autocomplete-skin': {
                        path: 'suggest/css/trip-autocomplete-min.css',
                        type: 'css'
                    },
                    'trip-autocomplete': {
                        path: 'suggest/js/trip-autocomplete-v1.1' + _JS_DEBUG_,
                        requires: ['autocomplete', 'trip-mustache', 'trip-slide', 'jsonp', 'trip-placeholder', 'trip-autocomplete-skin']
                    },
                    'trip-autocomplete-skin-v2': {
                        path: 'suggest/css/trip-autocomplete-v2.0-min.css',
                        type: 'css'
                    },
                    'trip-autocomplete-v2': {
                        path: 'suggest/js/trip-autocomplete-v21' + _JS_DEBUG_,
                        requires: ['autocomplete', 'trip-mustache', 'trip-slide', 'jsonp', 'trip-placeholder', 'trip-autocomplete-skin-v2']
                    },
                    'trip-calendar': {
                        path: 'calendar/js/trip-calendar.v1.1' + _JS_DEBUG_,
                        requires: ["widget-position", "event-custom-complex", "calendar", "trip-calendar-style", 'trip-placeholder']
                    },
                    'calendar': {
                        path: 'calendar/js/calendar' + _JS_DEBUG_,
                        requires: ["widget-position", "event-custom-complex"]
                    },
                    'trip-calendar-style': {
                        path: 'calendar/css/calendar.v1.1-min.css',
                        type: 'css'
                    },
                    'trip-calendar-v2': {
                        path: 'calendar/js/trip-calendar.v2.0' + _JS_DEBUG_,
                        requires: ['trip-calendar-v2-style']
                    },
                    'trip-calendar-v2-style': {
                        path: 'calendar/css/trip-calendar.v2.0.css',
                        type: 'css'
                    },
                    'trip-box': {
                        path: 'box/js/box' + _JS_DEBUG_,
                        requires: ['node-base', 'event-base', 'overlay', 'dd-plugin', 'box-css']
                    },
                    'box-css': {
                        path: 'box/css/box-min.css',
                        type: 'css'
                    },
                    't-calendar': {
                        path: 'calendar/js/t-calendar' + _JS_DEBUG_,
                        requires: ['t-calendar-style']
                    },
                    't-calendar-style': {
                        path: 'calendar/css/t-calendar-min.css',
                        type: 'css'
                    }
                }
            }
        }
    };
var YTRIP = YUI(_YUI3_CONFIG_);
YTRIP.addTripModule = function(mod) {
    this.applyConfig(mod);

};
/*! Generated by Clam: et 2014-07-11 11:06:15 */
var _JS_DEBUG_ = ".js",
    _JS_VERSION = "js_v24",
    _CSS_VERSION = "css_v24";
YTRIP.addTripModule({
    groups: {
        common: {
            comboBase: "http://g.tbcdn.cn/trip/et/listing-common/??",
            root: "",
            combine: !0,
            modules: {
                juicer: {
                    path: "js/v6-ne/juicer" + _JS_DEBUG_
                },
                swfobject: {
                    path: "js/v6-ne/swfobject" + _JS_DEBUG_
                },
                "trip-storage": {
                    path: "js/v6-ne/trip-storage" + _JS_DEBUG_,
                    requires: ["trip-storage-lite"]
                },
                common: {
                    path: "js/v6-ne/common" + _JS_DEBUG_,
                    requires: ["node-base"]
                },
                flow: {
                    path: "js/v6-ne/flow" + _JS_DEBUG_,
                    requires: ["node-base", "juicer"]
                },
                loading: {
                    path: "js/v6-ne/loading" + _JS_DEBUG_,
                    requires: ["node-base", "node-style"]
                },
                flight: {
                    path: "js/v6-ne/flight" + _JS_DEBUG_,
                    requires: ["node-base", "flight-css"]
                },
                "flight-css": {
                    path: "css/v4/flight-min.css",
                    type: "css"
                },
                "trip-listingToolTip": {
                    path: "js/v6-ne/listingToolTip" + _JS_DEBUG_,
                    requires: ["node-base", "anim", "tooltip-css"]
                },
                "tooltip-css": {
                    path: "css/v4/listingToolTip-min.css?t=20130528.css",
                    type: "css"
                },
                "get-jsonp": {
                    path: "js/v6-ne/get-jsonp" + _JS_DEBUG_,
                    requires: ["node-base", "jsonp", "reptile"]
                },
                "page-title": {
                    path: "js/v6-ne/page-title" + _JS_DEBUG_,
                    requires: ["node-base"]
                },
                "mock-loading": {
                    path: "js/v6-ne/mock-loading" + _JS_DEBUG_,
                    requires: ["node-base"]
                }
            }
        },
        necommon: {
            combine: !1,
            modules: {
                flag: {
                    fullpath: "http://g.tbcdn.cn/tpi/flight-logo/0.2.4??nelarge-min.css,qjd-min.css",
                    type: "css"
                }
            }
        },
        search: {
            comboBase: "http://g.tbcdn.cn/trip/et/ne/ne-listing/??",
            root: "",
            combine: !0,
            modules: {
                "near-city": {
                    path: _JS_VERSION + "/near-city" + _JS_DEBUG_,
                    requires: ["node-base", "juicer", "get-jsonp", "near-city-css"]
                },
                "near-city-css": {
                    path: _CSS_VERSION + "/near-city-min.css",
                    type: "css"
                },
                "auto-refresh": {
                    path: _JS_VERSION + "/auto-refresh" + _JS_DEBUG_,
                    requires: ["node-base", "juicer", "auto-refresh-css"]
                },
                "auto-refresh-css": {
                    path: _CSS_VERSION + "/auto-refresh-min.css",
                    type: "css"
                },
                "record-click": {
                    path: _JS_VERSION + "/record-click" + _JS_DEBUG_,
                    requires: ["node-base", "event-delegate"]
                },
                feedback: {
                    path: _JS_VERSION + "/feedback" + _JS_DEBUG_ + "?t=20130626.js",
                    requires: ["node-base", "feedback-css"]
                },
                "feedback-css": {
                    path: _CSS_VERSION + "/feedback-min.css?t=20130528.css",
                    type: "css"
                },
                "trip-anim": {
                    path: _JS_VERSION + "/trip-anim" + _JS_DEBUG_,
                    requires: ["node-base", "anim"]
                },
                rule: {
                    path: _JS_VERSION + "/rule" + _JS_DEBUG_,
                    requires: ["node", "event-delegate", "get-jsonp", "juicer", "trip-storage"]
                },
                stop: {
                    path: _JS_VERSION + "/stop" + _JS_DEBUG_,
                    requires: ["node", "event-delegate", "get-jsonp", "juicer", "trip-storage"]
                },
                "week-trip": {
                    path: _JS_VERSION + "/week" + _JS_DEBUG_,
                    requires: ["node", "event-delegate", "get-jsonp", "common", "juicer", "trip-storage", "month-trip", "week-css"]
                },
                "week-css": {
                    path: _CSS_VERSION + "/week-min.css",
                    type: "css"
                },
                "month-trip": {
                    path: _JS_VERSION + "/month" + _JS_DEBUG_,
                    requires: ["node", "event", "get-jsonp", "common", "juicer", "trip-storage", "month-trip-css"]
                },
                "month-trip-css": {
                    path: _CSS_VERSION + "/month-min.css",
                    type: "css"
                },
                "place-info": {
                    path: _JS_VERSION + "/place-info" + _JS_DEBUG_ + "?t=20130626.js",
                    requires: ["node", "event-delegate", "juicer", "place-css"]
                },
                "place-css": {
                    path: _CSS_VERSION + "/place-info-min.css",
                    type: "css"
                },
                "check-url": {
                    path: _JS_VERSION + "/check-url" + _JS_DEBUG_,
                    requires: ["common"]
                },
                cabin: {
                    path: _JS_VERSION + "/cabin" + _JS_DEBUG_,
                    requires: ["base-cabin"]
                },
                "base-cabin": {
                    path: _JS_VERSION + "/base-cabin" + _JS_DEBUG_
                },
                comment: {
                    path: _JS_VERSION + "/comment" + _JS_DEBUG_,
                    requires: ["node", "event-delegate", "get-jsonp", "juicer", "trip-storage", "comment-css"]
                },
                "comment-css": {
                    path: _CSS_VERSION + "/comment-min.css",
                    type: "css"
                },
                score: {
                    path: _JS_VERSION + "/score" + _JS_DEBUG_,
                    requires: ["node", "event-delegate", "get-jsonp", "juicer", "trip-storage", "score-css"]
                },
                "score-css": {
                    path: _CSS_VERSION + "/score-min.css",
                    type: "css"
                },
                "scroll-title": {
                    path: _JS_VERSION + "/scroll-title" + _JS_DEBUG_,
                    requires: ["node", "event-delegate"]
                },
                monitor: {
                    path: _JS_VERSION + "/monitor" + _JS_DEBUG_,
                    requires: ["node-base", "event-base", "cookie", "record-click"]
                },
                "spm-record": {
                    path: "js_v22/spm-record" + _JS_DEBUG_,
                    requires: ["node-base", "event-delegate"]
                },
                "flight-item": {
                    path: _JS_VERSION + "/flight-item" + _JS_DEBUG_,
                    requires: ["node", "cabin", "juicer"]
                },
                "flight-list": {
                    path: _JS_VERSION + "/flight-list" + _JS_DEBUG_,
                    requires: ["node", "event-delegate", "get-jsonp", "juicer", "flight-item"]
                },
                "lowest-flight": {
                    path: _JS_VERSION + "/lowest-flight" + _JS_DEBUG_,
                    requires: ["node", "juicer", "lowest-flight-css"]
                },
                "lowest-flight-css": {
                    path: _CSS_VERSION + "/lowest-flight-min.css",
                    type: "css"
                },
                "insure-tips": {
                    path: _JS_VERSION + "/insure-tips" + _JS_DEBUG_,
                    requires: ["node", "event-delegate", "trip-listingToolTip", "juicer", "trip-storage", "insure-tips-css"]
                },
                "insure-tips-css": {
                    path: _CSS_VERSION + "/insure-tips-min.css",
                    type: "css"
                },
                "list-win": {
                    path: _JS_VERSION + "/list-win" + _JS_DEBUG_,
                    requires: ["node", "event-delegate", "juicer", "trip-anim"]
                },
                "login-win": {
                    path: _JS_VERSION + "/login-win" + _JS_DEBUG_,
                    requires: ["node", "event-delegate", "get-jsonp", "juicer", "login-css"]
                },
                "login-css": {
                    path: _CSS_VERSION + "/login-min.css",
                    type: "css"
                },
                bmp: {
                    path: _JS_VERSION + "/bmp" + _JS_DEBUG_,
                    requires: ["node", "get-jsonp", "bmp-css"]
                },
                "bmp-css": {
                    path: _CSS_VERSION + "/bmp-min.css",
                    type: "css"
                },
                reptile: {
                    path: _JS_VERSION + "/reptile" + _JS_DEBUG_,
                    requires: ["node", "event-delegate", "get-jsonp", "juicer", "reptile-css"]
                },
                "reptile-css": {
                    path: _CSS_VERSION + "/reptile-min.css",
                    type: "css"
                },
                proxy: {
                    path: _JS_VERSION + "/proxy" + _JS_DEBUG_,
                    requires: ["node-base", "common"]
                },
                shop: {
                    path: _JS_VERSION + "/shop" + _JS_DEBUG_,
                    requires: ["node-base", "common", "trip-history", "proxy"]
                },
                main: {
                    path: _JS_VERSION + "/main" + _JS_DEBUG_,
                    requires: ["node-base", "common", "trip-history", "proxy", "fluid-layout"]
                },
                etao: {
                    path: _JS_VERSION + "/etao" + _JS_DEBUG_,
                    requires: ["node-base", "common", "trip-history", "proxy", "fluid-layout"]
                },
                so360: {
                    path: _JS_VERSION + "/so360" + _JS_DEBUG_,
                    requires: ["node-base", "common", "trip-history", "proxy", "fluid-layout"]
                },
                "fluid-layout": {
                    path: _JS_VERSION + "/fluid-layout" + _JS_DEBUG_,
                    requires: ["node-base"]
                },
                "ne-listing": {
                    path: _JS_VERSION + "/ne-listing" + _JS_DEBUG_ + "?t=20140425.js",
                    requires: ["node-base", "event-delegate", "event-mouseenter", "flight-filter", "filter-title", "check-url", "trip-history", "template", "listing-css", "predefined", "page-title", "loading", "flight-list", "flow", "record-click", "get-jsonp", "spring-festival", "list-win", "monitor", "spm-record"]
                },
                "spring-festival": {
                    path: _JS_VERSION + "/spring-festival" + _JS_DEBUG_,
                    requires: ["node-base", "event-delegate", "trip-listingToolTip"]
                },
                "flight-filter": {
                    path: _JS_VERSION + "/flight-filter" + _JS_DEBUG_,
                    requires: ["node-base", "filter-css", "event-simulate", "trip-storage-lite"]
                },
                "filter-css": {
                    path: _CSS_VERSION + "/filter-min.css",
                    type: "css"
                },
                "filter-title": {
                    path: _JS_VERSION + "/filter-title" + _JS_DEBUG_,
                    requires: ["node", "template", "juicer"]
                },
                "form-submit": {
                    path: _JS_VERSION + "/form-submit" + _JS_DEBUG_,
                    requires: ["node-base", "common"]
                },
                template: {
                    path: _JS_VERSION + "/template" + _JS_DEBUG_
                },
                "listing-css": {
                    path: _CSS_VERSION + "/listing-min.css",
                    type: "css",
                    requires: ["flag"]
                },
                predefined: {
                    path: _JS_VERSION + "/predefined" + _JS_DEBUG_
                }
            }
        }
    }
});