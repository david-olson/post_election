/*! conditionizr v4.4.0 | (c) 2014 @toddmotto, @markgdyr | https://github.com/conditionizr */ ! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t : e.conditionizr = t()
}(this, function() {
    "use strict";

    function e(e, n, s) {
        function c(n) {
            var c, o = s ? e : t + e + ("style" === n ? ".css" : ".js");
            switch (n) {
                case "script":
                    c = document.createElement("script"), c.src = o;
                    break;
                case "style":
                    c = document.createElement("link"), c.href = o, c.rel = "stylesheet";
                    break;
                case "class":
                    document.documentElement.className += " " + e
            }!!c && (document.head || document.getElementsByTagName("head")[0]).appendChild(c)
        }
        for (var o = n.length; o--;) c(n[o])
    }
    var t, n = {};
    return n.config = function(s) {
        t = s.assets || "";
        for (var c in s.tests) n[c] && e(c, s.tests[c])
    }, n.add = function(e, t) {
        n[e] = t()
    }, n.on = function(e, t) {
        (n[e] || /\!/.test(e) && !n[e.slice(1)]) && t()
    }, n.load = n.polyfill = function(t, s) {
        for (var c = s.length; c--;) n[s[c]] && e(t, [/\.js$/.test(t) ? "script" : "style"], !0)
    }, n
});
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-svg-domprefixes-prefixes-setclasses !*/
! function(e, n, s) {
    function o(e, n) {
        return typeof e === n
    }

    function a() {
        var e, n, s, a, t, r, l;
        for (var c in f)
            if (f.hasOwnProperty(c)) {
                if (e = [], n = f[c], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (s = 0; s < n.options.aliases.length; s++) e.push(n.options.aliases[s].toLowerCase());
                for (a = o(n.fn, "function") ? n.fn() : n.fn, t = 0; t < e.length; t++) r = e[t], l = r.split("."), 1 === l.length ? Modernizr[l[0]] = a : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = a), i.push((a ? "" : "no-") + l.join("-"))
            }
    }

    function t(e) {
        var n = c.className,
            s = Modernizr._config.classPrefix || "";
        if (u && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
            n = n.replace(o, "$1" + s + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + s + e.join(" " + s), u ? c.className.baseVal = n : c.className = n)
    }
    var i = [],
        f = [],
        r = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var s = this;
                setTimeout(function() {
                    n(s[e])
                }, 0)
            },
            addTest: function(e, n, s) {
                f.push({
                    name: e,
                    fn: n,
                    options: s
                })
            },
            addAsyncTest: function(e) {
                f.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = r, Modernizr = new Modernizr;
    var l = r._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    r._prefixes = l;
    var c = n.documentElement,
        u = "svg" === c.nodeName.toLowerCase(),
        p = "Moz O ms Webkit",
        d = r._config.usePrefixes ? p.toLowerCase().split(" ") : [];
    r._domPrefixes = d, Modernizr.addTest("svg", !!n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), a(), t(i), delete r.addTest, delete r.addAsyncTest;
    for (var m = 0; m < Modernizr._q.length; m++) Modernizr._q[m]();
    e.Modernizr = Modernizr
}(window, document);
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('name')){
          var videoName = 'fitvid' + $.fn.fitVids._count;
          $this.attr('name', videoName);
          $.fn.fitVids._count++;
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
  
  // Internal counter for unique video names.
  $.fn.fitVids._count = 0;
  
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
