// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../.nvm/versions/node/v12.18.3/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../.nvm/versions/node/v12.18.3/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../.nvm/versions/node/v12.18.3/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/home/kennethletran/coding/personal-portfolio/src/fonts/Michroma.woff2":[["Michroma.ad970fe9.woff2","fonts/Michroma.woff2"],"fonts/Michroma.woff2"],"/home/kennethletran/coding/personal-portfolio/src/fonts/Kanit-Regular.woff2":[["Kanit-Regular.bd443b65.woff2","fonts/Kanit-Regular.woff2"],"fonts/Kanit-Regular.woff2"],"/home/kennethletran/coding/personal-portfolio/src/fonts/Kanit-Medium.woff2":[["Kanit-Medium.a1e94fce.woff2","fonts/Kanit-Medium.woff2"],"fonts/Kanit-Medium.woff2"],"/home/kennethletran/coding/personal-portfolio/src/fonts/Kanit-SemiBold.woff2":[["Kanit-SemiBold.efe2e742.woff2","fonts/Kanit-SemiBold.woff2"],"fonts/Kanit-SemiBold.woff2"],"/home/kennethletran/coding/personal-portfolio/src/fonts/Kanit-ExtraBold.woff2":[["Kanit-ExtraBold.735b573b.woff2","fonts/Kanit-ExtraBold.woff2"],"fonts/Kanit-ExtraBold.woff2"],"/home/kennethletran/coding/personal-portfolio/src/fonts/Kanit-Black.woff2":[["Kanit-Black.3005afa1.woff2","fonts/Kanit-Black.woff2"],"fonts/Kanit-Black.woff2"],"/home/kennethletran/coding/personal-portfolio/src/assets/background.gif":[["background.57b7224e.gif","assets/background.gif"],"assets/background.gif"],"_css_loader":"../../../.nvm/versions/node/v12.18.3/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"main.js":[function(require,module,exports) {
"use strict";

require("./scss/main.scss");

// TODO: refactor into modules if code gets cluttered
// DOM elements
var menu = document.querySelector('.menu__button');
var menuModalInner = document.querySelector('.menu__modal--inner');
var menuModalOuter = document.querySelector('.menu__modal--outer');
var heroBtn = document.querySelector('.hero__button');
var body = document.body; // GSAP Animations

var headline = CSSRulePlugin.getRule(".headline-reveal::after");
var landingAnim = gsap.timeline();
landingAnim.to('.preloader', {
  opacity: 0,
  ease: 'power4.in'
}, 4).from('.hero__picture', {
  duration: 1,
  scaleX: .95,
  scaleY: .95,
  opacity: 0,
  ease: "slow"
}).to(headline, {
  duration: 1.2,
  cssRule: {
    scaleY: 0
  }
}, "-=1").from('.menu__button', {
  duration: .75,
  opacity: 0,
  y: 5,
  ease: "slow"
}, "-=0.5").from('.hero__introduction', {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: .2
}, "-=.75"); // Modal

function modalFadeIn() {
  gsap.to('.menu__modal--outer, .menu__modal--inner', {
    duration: .15,
    opacity: 1,
    ease: 'power4.in'
  });
}

function modalFadeOut() {
  gsap.to('.menu__modal--outer, .menu__modal--inner', {
    duration: .8,
    opacity: 0,
    ease: 'power4.out'
  });
} // Store scroll position when menu is clicked


function keepScrollPosition() {
  body.classList.add('prevent-scroll');
  var scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  body.style.position = 'fixed';
  body.style.top = "-".concat(scrollY);
} // Return to scroll position when modal is closed


function returnToScrollPosition() {
  body.classList.remove('prevent-scroll');
  var scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

function handleMenuClick() {
  if (menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
    menuModalOuter.classList.remove('modal--open');
    menuModalInner.classList.remove('modal--open');
    modalFadeOut();
    returnToScrollPosition();
  } else {
    menu.classList.add('menu--open');
    menuModalOuter.classList.add('modal--open');
    menuModalInner.classList.add('modal--open');
    modalFadeIn();
    keepScrollPosition();
  }
} // Open/close modal when menu is clicked


menu.addEventListener('click', handleMenuClick);
heroBtn.addEventListener('click', handleMenuClick); // Allow users to close modal by clicking outside of modal or by pressing ESC key

menuModalOuter.addEventListener('click', function (e) {
  var clickOutside = !e.target.closest('.menu__modal--inner');

  if (clickOutside) {
    menu.classList.remove('menu--open');
    menuModalOuter.classList.remove('modal--open');
    menuModalInner.classList.remove('modal--open');
    gsap.to('.menu__modal--outer', {
      duration: .8,
      opacity: 0,
      ease: 'power4.out'
    });
    gsap.to('.menu__modal--inner', {
      duration: .8,
      opacity: 0,
      ease: 'power4.out'
    });
    returnToScrollPosition();
  }
});
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    menu.classList.remove('menu--open');
    menuModalOuter.classList.remove('modal--open');
    menuModalInner.classList.remove('modal--open');
    gsap.to('.menu__modal--outer', {
      duration: .8,
      opacity: 0,
      ease: 'power4.out'
    });
    gsap.to('.menu__modal--inner', {
      duration: .8,
      opacity: 0,
      ease: 'power4.out'
    });
    returnToScrollPosition();
  }
}); // Keep track of window scroll position

window.addEventListener('scroll', function () {
  document.documentElement.style.setProperty('--scroll-y', "".concat(window.scrollY, "px"));
});
},{"./scss/main.scss":"scss/main.scss"}],"../../../.nvm/versions/node/v12.18.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36689" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.nvm/versions/node/v12.18.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map