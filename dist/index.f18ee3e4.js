// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3lXQA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c8fe68bef18ee3e4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8oJt2":[function(require,module,exports) {
var global = arguments[3];
function t(t, e, n, r) {
    Object.defineProperty(t, e, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, n = {}, r = {}, i = e.parcelRequire9e6a;
null == i && ((i = function(t) {
    if (t in n) return n[t].exports;
    if (t in r) {
        var e = r[t];
        delete r[t];
        var i = {
            id: t,
            exports: {}
        };
        return n[t] = i, e.call(i.exports, i, i.exports), i.exports;
    }
    var o = new Error("Cannot find module '" + t + "'");
    throw o.code = "MODULE_NOT_FOUND", o;
}).register = function(t, e) {
    r[t] = e;
}, e.parcelRequire9e6a = i), i.register("2YFJl", function(e, n) {
    t(e.exports, "axisLeft", ()=>i("bgSbI").axisLeft), t(e.exports, "axisTop", ()=>i("bgSbI").axisTop), t(e.exports, "csv", ()=>i("5exuj").csv), i("bgSbI"), i("im8sd"), i("5exuj"), i("dfKvw"), i("3MDo2"), i("jAaAF"), i("gEnYl"), i("iOlPi"), i("4PqgM"), i("hOxpW"), i("dxJVY"), i("fOARq");
}), i.register("bgSbI", function(e, n) {
    t(e.exports, "axisTop", ()=>v), t(e.exports, "axisLeft", ()=>m);
    var r = i("7v1sx"), o = 1, u = 2, a = 3, s = 4, f = 1e-6;
    function l(t) {
        return "translate(" + t + ",0)";
    }
    function c(t) {
        return "translate(0," + t + ")";
    }
    function h(t) {
        return (e)=>+t(e);
    }
    function d(t, e) {
        return e = Math.max(0, t.bandwidth() - 2 * e) / 2, t.round() && (e = Math.round(e)), (n)=>+t(n) + e;
    }
    function p() {
        return !this.__axis;
    }
    function g(t, e) {
        var n = [], i = null, g = null, v = 6, m = 6, x = 3, y = "undefined" != typeof window && window.devicePixelRatio > 1 ? 0 : .5, w = t === o || t === s ? -1 : 1, _ = t === s || t === u ? "x" : "y", b = t === o || t === a ? l : c;
        function M(l) {
            var c = null == i ? e.ticks ? e.ticks.apply(e, n) : e.domain() : i, M = null == g ? e.tickFormat ? e.tickFormat.apply(e, n) : r.default : g, k = Math.max(v, 0) + x, A = e.range(), N = +A[0] + y, E = +A[A.length - 1] + y, S = (e.bandwidth ? d : h)(e.copy(), y), j = l.selection ? l.selection() : l, O = j.selectAll(".domain").data([
                null
            ]), P = j.selectAll(".tick").data(c, e).order(), T = P.exit(), C = P.enter().append("g").attr("class", "tick"), R = P.select("line"), D = P.select("text");
            O = O.merge(O.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), P = P.merge(C), R = R.merge(C.append("line").attr("stroke", "currentColor").attr(_ + "2", w * v)), D = D.merge(C.append("text").attr("fill", "currentColor").attr(_, w * k).attr("dy", t === o ? "0em" : t === a ? "0.71em" : "0.32em")), l !== j && (O = O.transition(l), P = P.transition(l), R = R.transition(l), D = D.transition(l), T = T.transition(l).attr("opacity", f).attr("transform", function(t) {
                return isFinite(t = S(t)) ? b(t + y) : this.getAttribute("transform");
            }), C.attr("opacity", f).attr("transform", function(t) {
                var e = this.parentNode.__axis;
                return b((e && isFinite(e = e(t)) ? e : S(t)) + y);
            })), T.remove(), O.attr("d", t === s || t === u ? m ? "M" + w * m + "," + N + "H" + y + "V" + E + "H" + w * m : "M" + y + "," + N + "V" + E : m ? "M" + N + "," + w * m + "V" + y + "H" + E + "V" + w * m : "M" + N + "," + y + "H" + E), P.attr("opacity", 1).attr("transform", function(t) {
                return b(S(t) + y);
            }), R.attr(_ + "2", w * v), D.attr(_, w * k).text(M), j.filter(p).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === u ? "start" : t === s ? "end" : "middle"), j.each(function() {
                this.__axis = S;
            });
        }
        return M.scale = function(t) {
            return arguments.length ? (e = t, M) : e;
        }, M.ticks = function() {
            return n = Array.from(arguments), M;
        }, M.tickArguments = function(t) {
            return arguments.length ? (n = null == t ? [] : Array.from(t), M) : n.slice();
        }, M.tickValues = function(t) {
            return arguments.length ? (i = null == t ? null : Array.from(t), M) : i && i.slice();
        }, M.tickFormat = function(t) {
            return arguments.length ? (g = t, M) : g;
        }, M.tickSize = function(t) {
            return arguments.length ? (v = m = +t, M) : v;
        }, M.tickSizeInner = function(t) {
            return arguments.length ? (v = +t, M) : v;
        }, M.tickSizeOuter = function(t) {
            return arguments.length ? (m = +t, M) : m;
        }, M.tickPadding = function(t) {
            return arguments.length ? (x = +t, M) : x;
        }, M.offset = function(t) {
            return arguments.length ? (y = +t, M) : y;
        }, M;
    }
    function v(t) {
        return g(o, t);
    }
    function m(t) {
        return g(s, t);
    }
}), i.register("7v1sx", function(e, n) {
    function r(t) {
        return t;
    }
    t(e.exports, "default", ()=>r);
}), i.register("im8sd", function(t, e) {
    i("7Wzrn");
}), i.register("7Wzrn", function(t, e) {
    i("aFEgl"), i("cohyw"), i("bi4KR"), i("2oxcP"), i("hOxpW");
    i("dxJVY");
    i("f8M3T"), i("6QApF"), i("j3W5K"), i("6fYbl");
    const { abs: n , max: r , min: o  } = Math;
    function u(t) {
        return [
            +t[0],
            +t[1]
        ];
    }
    function a(t) {
        return [
            u(t[0]),
            u(t[1])
        ];
    }
    [
        "w",
        "e"
    ].map(s), [
        "n",
        "s"
    ].map(s), [
        "n",
        "w",
        "e",
        "s",
        "nw",
        "ne",
        "sw",
        "se"
    ].map(s);
    function s(t) {
        return {
            type: t
        };
    }
}), i.register("aFEgl", function(e, n) {
    t(e.exports, "default", ()=>s);
    var r = {
        value: ()=>{}
    };
    function i() {
        for(var t, e = 0, n = arguments.length, r = {}; e < n; ++e){
            if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
            r[t] = [];
        }
        return new o(r);
    }
    function o(t) {
        this._ = t;
    }
    function u(t, e) {
        for(var n, r = 0, i = t.length; r < i; ++r)if ((n = t[r]).name === e) return n.value;
    }
    function a(t, e, n) {
        for(var i = 0, o = t.length; i < o; ++i)if (t[i].name === e) {
            t[i] = r, t = t.slice(0, i).concat(t.slice(i + 1));
            break;
        }
        return null != n && t.push({
            name: e,
            value: n
        }), t;
    }
    o.prototype = i.prototype = {
        constructor: o,
        on: function(t, e) {
            var n, r, i = this._, o = (r = i, (t + "").trim().split(/^|\s+/).map(function(t) {
                var e = "", n = t.indexOf(".");
                if (n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                return {
                    type: t,
                    name: e
                };
            })), s = -1, f = o.length;
            if (!(arguments.length < 2)) {
                if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
                for(; ++s < f;)if (n = (t = o[s]).type) i[n] = a(i[n], t.name, e);
                else if (null == e) for(n in i)i[n] = a(i[n], t.name, null);
                return this;
            }
            for(; ++s < f;)if ((n = (t = o[s]).type) && (n = u(i[n], t.name))) return n;
        },
        copy: function() {
            var t = {}, e = this._;
            for(var n in e)t[n] = e[n].slice();
            return new o(t);
        },
        call: function(t, e) {
            if ((n = arguments.length - 2) > 0) for(var n, r, i = new Array(n), o = 0; o < n; ++o)i[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for(o = 0, n = (r = this._[t]).length; o < n; ++o)r[o].value.apply(e, i);
        },
        apply: function(t, e, n) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for(var r = this._[t], i = 0, o = r.length; i < o; ++i)r[i].value.apply(e, n);
        }
    };
    var s = i;
}), i.register("cohyw", function(e, n) {
    t(e.exports, "default", ()=>u), t(e.exports, "yesdrag", ()=>a);
    var r = i("hOxpW"), o = i("cttdm");
    function u(t) {
        var e = t.document.documentElement, n = (0, r.default)(t).on("dragstart.drag", o.default, o.nonpassivecapture);
        "onselectstart" in e ? n.on("selectstart.drag", o.default, o.nonpassivecapture) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
    }
    function a(t, e) {
        var n = t.document.documentElement, i = (0, r.default)(t).on("dragstart.drag", null);
        e && (i.on("click.drag", o.default, o.nonpassivecapture), setTimeout(function() {
            i.on("click.drag", null);
        }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
    }
}), i.register("hOxpW", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("3us5W");
    function o(t) {
        return "string" == typeof t ? new r.Selection([
            [
                document.querySelector(t)
            ]
        ], [
            document.documentElement
        ]) : new r.Selection([
            [
                t
            ]
        ], r.root);
    }
}), i.register("3us5W", function(e, n) {
    t(e.exports, "root", ()=>I), t(e.exports, "Selection", ()=>$), t(e.exports, "default", ()=>Y);
    var r = i("4dcxD"), o = i("e48mM"), u = i("4i911"), a = i("cP92U"), s = i("kePFY"), f = i("hOWaJ"), l = i("5ndv3"), c = i("94na1"), h = i("b4sDG"), d = i("8yR9d"), p = i("awsX1"), g = i("lxGnS"), v = i("lv7c7"), m = i("gJ79D"), x = i("hryK9"), y = i("c7pKF"), w = i("5ouhg"), _ = i("6neWh"), b = i("bZhEJ"), M = i("9a8q4"), k = i("3I2BK"), A = i("8G4xj"), N = i("34eax"), E = i("iju2Z"), S = i("h3vbL"), j = i("62NTp"), O = i("03tNP"), P = i("5WMZy"), T = i("ikClj"), C = i("4odnA"), R = i("hSH4f"), D = i("iZ2is"), q = i("3pIv8"), V = i("d4eXd"), I = [
        null
    ];
    function $(t, e) {
        this._groups = t, this._parents = e;
    }
    function L() {
        return new $([
            [
                document.documentElement
            ]
        ], I);
    }
    $.prototype = L.prototype = {
        constructor: $,
        select: r.default,
        selectAll: o.default,
        selectChild: u.default,
        selectChildren: a.default,
        filter: s.default,
        data: f.default,
        enter: l.default,
        exit: c.default,
        join: h.default,
        merge: d.default,
        selection: function() {
            return this;
        },
        order: p.default,
        sort: g.default,
        call: v.default,
        nodes: m.default,
        node: x.default,
        size: y.default,
        empty: w.default,
        each: _.default,
        attr: b.default,
        style: M.default,
        property: k.default,
        classed: A.default,
        text: N.default,
        html: E.default,
        raise: S.default,
        lower: j.default,
        append: O.default,
        insert: P.default,
        remove: T.default,
        clone: C.default,
        datum: R.default,
        on: D.default,
        dispatch: q.default,
        [Symbol.iterator]: V.default
    };
    var Y = L;
}), i.register("4dcxD", function(e, n) {
    t(e.exports, "default", ()=>u);
    var r = i("3us5W"), o = i("9rOh8");
    function u(t) {
        "function" != typeof t && (t = (0, o.default)(t));
        for(var e = this._groups, n = e.length, i = new Array(n), u = 0; u < n; ++u)for(var a, s, f = e[u], l = f.length, c = i[u] = new Array(l), h = 0; h < l; ++h)(a = f[h]) && (s = t.call(a, a.__data__, h, f)) && ("__data__" in a && (s.__data__ = a.__data__), c[h] = s);
        return new r.Selection(i, this._parents);
    }
}), i.register("9rOh8", function(e, n) {
    function r() {}
    function i(t) {
        return null == t ? r : function() {
            return this.querySelector(t);
        };
    }
    t(e.exports, "default", ()=>i);
}), i.register("e48mM", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("3us5W"), o = i("hpRkj"), u = i("aMqra");
    function a(t) {
        t = "function" == typeof t ? function(t) {
            return function() {
                return (0, o.default)(t.apply(this, arguments));
            };
        }(t) : (0, u.default)(t);
        for(var e = this._groups, n = e.length, i = [], a = [], s = 0; s < n; ++s)for(var f, l = e[s], c = l.length, h = 0; h < c; ++h)(f = l[h]) && (i.push(t.call(f, f.__data__, h, l)), a.push(f));
        return new r.Selection(i, a);
    }
}), i.register("hpRkj", function(e, n) {
    function r(t) {
        return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
    }
    t(e.exports, "default", ()=>r);
}), i.register("aMqra", function(e, n) {
    function r() {
        return [];
    }
    function i(t) {
        return null == t ? r : function() {
            return this.querySelectorAll(t);
        };
    }
    t(e.exports, "default", ()=>i);
}), i.register("4i911", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("8doa3"), o = Array.prototype.find;
    function u() {
        return this.firstElementChild;
    }
    function a(t) {
        return this.select(null == t ? u : function(t) {
            return function() {
                return o.call(this.children, t);
            };
        }("function" == typeof t ? t : (0, r.childMatcher)(t)));
    }
}), i.register("8doa3", function(e, n) {
    function r(t) {
        return function() {
            return this.matches(t);
        };
    }
    function i(t) {
        return function(e) {
            return e.matches(t);
        };
    }
    t(e.exports, "default", ()=>r), t(e.exports, "childMatcher", ()=>i);
}), i.register("cP92U", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("8doa3"), o = Array.prototype.filter;
    function u() {
        return Array.from(this.children);
    }
    function a(t) {
        return this.selectAll(null == t ? u : function(t) {
            return function() {
                return o.call(this.children, t);
            };
        }("function" == typeof t ? t : (0, r.childMatcher)(t)));
    }
}), i.register("kePFY", function(e, n) {
    t(e.exports, "default", ()=>u);
    var r = i("3us5W"), o = i("8doa3");
    function u(t) {
        "function" != typeof t && (t = (0, o.default)(t));
        for(var e = this._groups, n = e.length, i = new Array(n), u = 0; u < n; ++u)for(var a, s = e[u], f = s.length, l = i[u] = [], c = 0; c < f; ++c)(a = s[c]) && t.call(a, a.__data__, c, s) && l.push(a);
        return new r.Selection(i, this._parents);
    }
}), i.register("hOWaJ", function(e, n) {
    t(e.exports, "default", ()=>l);
    var r = i("3us5W"), o = i("5ndv3"), u = i("iCdMC");
    function a(t, e, n, r, i, u) {
        for(var a, s = 0, f = e.length, l = u.length; s < l; ++s)(a = e[s]) ? (a.__data__ = u[s], r[s] = a) : n[s] = new o.EnterNode(t, u[s]);
        for(; s < f; ++s)(a = e[s]) && (i[s] = a);
    }
    function s(t, e, n, r, i, u, a) {
        var s, f, l, c = new Map, h = e.length, d = u.length, p = new Array(h);
        for(s = 0; s < h; ++s)(f = e[s]) && (p[s] = l = a.call(f, f.__data__, s, e) + "", c.has(l) ? i[s] = f : c.set(l, f));
        for(s = 0; s < d; ++s)l = a.call(t, u[s], s, u) + "", (f = c.get(l)) ? (r[s] = f, f.__data__ = u[s], c.delete(l)) : n[s] = new o.EnterNode(t, u[s]);
        for(s = 0; s < h; ++s)(f = e[s]) && c.get(p[s]) === f && (i[s] = f);
    }
    function f(t) {
        return t.__data__;
    }
    function l(t, e) {
        if (!arguments.length) return Array.from(this, f);
        var n = e ? s : a, i = this._parents, o = this._groups;
        "function" != typeof t && (t = (0, u.default)(t));
        for(var l = o.length, h = new Array(l), d = new Array(l), p = new Array(l), g = 0; g < l; ++g){
            var v = i[g], m = o[g], x = m.length, y = c(t.call(v, v && v.__data__, g, i)), w = y.length, _ = d[g] = new Array(w), b = h[g] = new Array(w);
            n(v, m, _, b, p[g] = new Array(x), y, e);
            for(var M, k, A = 0, N = 0; A < w; ++A)if (M = _[A]) {
                for(A >= N && (N = A + 1); !(k = b[N]) && ++N < w;);
                M._next = k || null;
            }
        }
        return (h = new r.Selection(h, i))._enter = d, h._exit = p, h;
    }
    function c(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
    }
}), i.register("5ndv3", function(e, n) {
    t(e.exports, "default", ()=>u), t(e.exports, "EnterNode", ()=>a);
    var r = i("jUPKb"), o = i("3us5W");
    function u() {
        return new o.Selection(this._enter || this._groups.map(r.default), this._parents);
    }
    function a(t, e) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
    }
    a.prototype = {
        constructor: a,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function(t, e) {
            return this._parent.insertBefore(t, e);
        },
        querySelector: function(t) {
            return this._parent.querySelector(t);
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t);
        }
    };
}), i.register("jUPKb", function(e, n) {
    function r(t) {
        return new Array(t.length);
    }
    t(e.exports, "default", ()=>r);
}), i.register("iCdMC", function(e, n) {
    function r(t) {
        return function() {
            return t;
        };
    }
    t(e.exports, "default", ()=>r);
}), i.register("94na1", function(e, n) {
    t(e.exports, "default", ()=>u);
    var r = i("jUPKb"), o = i("3us5W");
    function u() {
        return new o.Selection(this._exit || this._groups.map(r.default), this._parents);
    }
}), i.register("b4sDG", function(e, n) {
    function r(t, e, n) {
        var r = this.enter(), i = this, o = this.exit();
        return "function" == typeof t ? (r = t(r)) && (r = r.selection()) : r = r.append(t + ""), null != e && (i = e(i)) && (i = i.selection()), null == n ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
    }
    t(e.exports, "default", ()=>r);
}), i.register("8yR9d", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("3us5W");
    function o(t) {
        for(var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, o = n.length, u = i.length, a = Math.min(o, u), s = new Array(o), f = 0; f < a; ++f)for(var l, c = n[f], h = i[f], d = c.length, p = s[f] = new Array(d), g = 0; g < d; ++g)(l = c[g] || h[g]) && (p[g] = l);
        for(; f < o; ++f)s[f] = n[f];
        return new r.Selection(s, this._parents);
    }
}), i.register("awsX1", function(e, n) {
    function r() {
        for(var t = this._groups, e = -1, n = t.length; ++e < n;)for(var r, i = t[e], o = i.length - 1, u = i[o]; --o >= 0;)(r = i[o]) && (u && 4 ^ r.compareDocumentPosition(u) && u.parentNode.insertBefore(r, u), u = r);
        return this;
    }
    t(e.exports, "default", ()=>r);
}), i.register("lxGnS", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("3us5W");
    function o(t) {
        function e(e, n) {
            return e && n ? t(e.__data__, n.__data__) : !e - !n;
        }
        t || (t = u);
        for(var n = this._groups, i = n.length, o = new Array(i), a = 0; a < i; ++a){
            for(var s, f = n[a], l = f.length, c = o[a] = new Array(l), h = 0; h < l; ++h)(s = f[h]) && (c[h] = s);
            c.sort(e);
        }
        return new (0, r.Selection)(o, this._parents).order();
    }
    function u(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
}), i.register("lv7c7", function(e, n) {
    function r() {
        var t = arguments[0];
        return arguments[0] = this, t.apply(null, arguments), this;
    }
    t(e.exports, "default", ()=>r);
}), i.register("gJ79D", function(e, n) {
    function r() {
        return Array.from(this);
    }
    t(e.exports, "default", ()=>r);
}), i.register("hryK9", function(e, n) {
    function r() {
        for(var t = this._groups, e = 0, n = t.length; e < n; ++e)for(var r = t[e], i = 0, o = r.length; i < o; ++i){
            var u = r[i];
            if (u) return u;
        }
        return null;
    }
    t(e.exports, "default", ()=>r);
}), i.register("c7pKF", function(e, n) {
    function r() {
        let t = 0;
        for (const e of this)++t;
        return t;
    }
    t(e.exports, "default", ()=>r);
}), i.register("5ouhg", function(e, n) {
    function r() {
        return !this.node();
    }
    t(e.exports, "default", ()=>r);
}), i.register("6neWh", function(e, n) {
    function r(t) {
        for(var e = this._groups, n = 0, r = e.length; n < r; ++n)for(var i, o = e[n], u = 0, a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
        return this;
    }
    t(e.exports, "default", ()=>r);
}), i.register("bZhEJ", function(e, n) {
    t(e.exports, "default", ()=>c);
    var r = i("fEEcv");
    function o(t) {
        return function() {
            this.removeAttribute(t);
        };
    }
    function u(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local);
        };
    }
    function a(t, e) {
        return function() {
            this.setAttribute(t, e);
        };
    }
    function s(t, e) {
        return function() {
            this.setAttributeNS(t.space, t.local, e);
        };
    }
    function f(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
        };
    }
    function l(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
        };
    }
    function c(t, e) {
        var n = (0, r.default)(t);
        if (arguments.length < 2) {
            var i = this.node();
            return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
        }
        return this.each((null == e ? n.local ? u : o : "function" == typeof e ? n.local ? l : f : n.local ? s : a)(n, e));
    }
}), i.register("fEEcv", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("7cQXC");
    function o(t) {
        var e = t += "", n = e.indexOf(":");
        return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), r.default.hasOwnProperty(e) ? {
            space: r.default[e],
            local: t
        } : t;
    }
}), i.register("7cQXC", function(e, n) {
    t(e.exports, "xhtml", ()=>r), t(e.exports, "default", ()=>i);
    var r = "http://www.w3.org/1999/xhtml", i = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: r,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
}), i.register("9a8q4", function(e, n) {
    t(e.exports, "default", ()=>s), t(e.exports, "styleValue", ()=>f);
    var r = i("bQhLV");
    function o(t) {
        return function() {
            this.style.removeProperty(t);
        };
    }
    function u(t, e, n) {
        return function() {
            this.style.setProperty(t, e, n);
        };
    }
    function a(t, e, n) {
        return function() {
            var r = e.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
        };
    }
    function s(t, e, n) {
        return arguments.length > 1 ? this.each((null == e ? o : "function" == typeof e ? a : u)(t, e, null == n ? "" : n)) : f(this.node(), t);
    }
    function f(t, e) {
        return t.style.getPropertyValue(e) || (0, r.default)(t).getComputedStyle(t, null).getPropertyValue(e);
    }
}), i.register("bQhLV", function(e, n) {
    function r(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
    }
    t(e.exports, "default", ()=>r);
}), i.register("3I2BK", function(e, n) {
    function r(t) {
        return function() {
            delete this[t];
        };
    }
    function i(t, e) {
        return function() {
            this[t] = e;
        };
    }
    function o(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? delete this[t] : this[t] = n;
        };
    }
    function u(t, e) {
        return arguments.length > 1 ? this.each((null == e ? r : "function" == typeof e ? o : i)(t, e)) : this.node()[t];
    }
    t(e.exports, "default", ()=>u);
}), i.register("8G4xj", function(e, n) {
    function r(t) {
        return t.trim().split(/^|\s+/);
    }
    function i(t) {
        return t.classList || new o(t);
    }
    function o(t) {
        this._node = t, this._names = r(t.getAttribute("class") || "");
    }
    function u(t, e) {
        for(var n = i(t), r = -1, o = e.length; ++r < o;)n.add(e[r]);
    }
    function a(t, e) {
        for(var n = i(t), r = -1, o = e.length; ++r < o;)n.remove(e[r]);
    }
    function s(t) {
        return function() {
            u(this, t);
        };
    }
    function f(t) {
        return function() {
            a(this, t);
        };
    }
    function l(t, e) {
        return function() {
            (e.apply(this, arguments) ? u : a)(this, t);
        };
    }
    function c(t, e) {
        var n = r(t + "");
        if (arguments.length < 2) {
            for(var o = i(this.node()), u = -1, a = n.length; ++u < a;)if (!o.contains(n[u])) return !1;
            return !0;
        }
        return this.each(("function" == typeof e ? l : e ? s : f)(n, e));
    }
    t(e.exports, "default", ()=>c), o.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function(t) {
            var e = this._names.indexOf(t);
            e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0;
        }
    };
}), i.register("34eax", function(e, n) {
    function r() {
        this.textContent = "";
    }
    function i(t) {
        return function() {
            this.textContent = t;
        };
    }
    function o(t) {
        return function() {
            var e = t.apply(this, arguments);
            this.textContent = null == e ? "" : e;
        };
    }
    function u(t) {
        return arguments.length ? this.each(null == t ? r : ("function" == typeof t ? o : i)(t)) : this.node().textContent;
    }
    t(e.exports, "default", ()=>u);
}), i.register("iju2Z", function(e, n) {
    function r() {
        this.innerHTML = "";
    }
    function i(t) {
        return function() {
            this.innerHTML = t;
        };
    }
    function o(t) {
        return function() {
            var e = t.apply(this, arguments);
            this.innerHTML = null == e ? "" : e;
        };
    }
    function u(t) {
        return arguments.length ? this.each(null == t ? r : ("function" == typeof t ? o : i)(t)) : this.node().innerHTML;
    }
    t(e.exports, "default", ()=>u);
}), i.register("h3vbL", function(e, n) {
    function r() {
        this.nextSibling && this.parentNode.appendChild(this);
    }
    function i() {
        return this.each(r);
    }
    t(e.exports, "default", ()=>i);
}), i.register("62NTp", function(e, n) {
    function r() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function i() {
        return this.each(r);
    }
    t(e.exports, "default", ()=>i);
}), i.register("03tNP", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("bkOxa");
    function o(t) {
        var e = "function" == typeof t ? t : (0, r.default)(t);
        return this.select(function() {
            return this.appendChild(e.apply(this, arguments));
        });
    }
}), i.register("bkOxa", function(e, n) {
    t(e.exports, "default", ()=>s);
    var r = i("fEEcv"), o = i("7cQXC");
    function u(t) {
        return function() {
            var e = this.ownerDocument, n = this.namespaceURI;
            return n === o.xhtml && e.documentElement.namespaceURI === o.xhtml ? e.createElement(t) : e.createElementNS(n, t);
        };
    }
    function a(t) {
        return function() {
            return this.ownerDocument.createElementNS(t.space, t.local);
        };
    }
    function s(t) {
        var e = (0, r.default)(t);
        return (e.local ? a : u)(e);
    }
}), i.register("5WMZy", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("bkOxa"), o = i("9rOh8");
    function u() {
        return null;
    }
    function a(t, e) {
        var n = "function" == typeof t ? t : (0, r.default)(t), i = null == e ? u : "function" == typeof e ? e : (0, o.default)(e);
        return this.select(function() {
            return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
        });
    }
}), i.register("ikClj", function(e, n) {
    function r() {
        var t = this.parentNode;
        t && t.removeChild(this);
    }
    function i() {
        return this.each(r);
    }
    t(e.exports, "default", ()=>i);
}), i.register("4odnA", function(e, n) {
    function r() {
        var t = this.cloneNode(!1), e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t;
    }
    function i() {
        var t = this.cloneNode(!0), e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t;
    }
    function o(t) {
        return this.select(t ? i : r);
    }
    t(e.exports, "default", ()=>o);
}), i.register("hSH4f", function(e, n) {
    function r(t) {
        return arguments.length ? this.property("__data__", t) : this.node().__data__;
    }
    t(e.exports, "default", ()=>r);
}), i.register("iZ2is", function(e, n) {
    function r(t) {
        return function() {
            var e = this.__on;
            if (e) {
                for(var n, r = 0, i = -1, o = e.length; r < o; ++r)n = e[r], t.type && n.type !== t.type || n.name !== t.name ? e[++i] = n : this.removeEventListener(n.type, n.listener, n.options);
                ++i ? e.length = i : delete this.__on;
            }
        };
    }
    function i(t, e, n) {
        return function() {
            var r, i = this.__on, o = function(t) {
                return function(e) {
                    t.call(this, e, this.__data__);
                };
            }(e);
            if (i) {
                for(var u = 0, a = i.length; u < a; ++u)if ((r = i[u]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = n), void (r.value = e);
            }
            this.addEventListener(t.type, o, n), r = {
                type: t.type,
                name: t.name,
                value: e,
                listener: o,
                options: n
            }, i ? i.push(r) : this.__on = [
                r
            ];
        };
    }
    function o(t, e, n) {
        var o, u, a = function(t) {
            return t.trim().split(/^|\s+/).map(function(t) {
                var e = "", n = t.indexOf(".");
                return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), {
                    type: t,
                    name: e
                };
            });
        }(t + ""), s = a.length;
        if (!(arguments.length < 2)) {
            for(f = e ? i : r, o = 0; o < s; ++o)this.each(f(a[o], e, n));
            return this;
        }
        var f = this.node().__on;
        if (f) {
            for(var l, c = 0, h = f.length; c < h; ++c)for(o = 0, l = f[c]; o < s; ++o)if ((u = a[o]).type === l.type && u.name === l.name) return l.value;
        }
    }
    t(e.exports, "default", ()=>o);
}), i.register("3pIv8", function(e, n) {
    t(e.exports, "default", ()=>s);
    var r = i("bQhLV");
    function o(t, e, n) {
        var i = (0, r.default)(t), o = i.CustomEvent;
        "function" == typeof o ? o = new o(e, n) : (o = i.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
    }
    function u(t, e) {
        return function() {
            return o(this, t, e);
        };
    }
    function a(t, e) {
        return function() {
            return o(this, t, e.apply(this, arguments));
        };
    }
    function s(t, e) {
        return this.each(("function" == typeof e ? a : u)(t, e));
    }
}), i.register("d4eXd", function(e, n) {
    function* r() {
        for(var t = this._groups, e = 0, n = t.length; e < n; ++e)for(var r, i = t[e], o = 0, u = i.length; o < u; ++o)(r = i[o]) && (yield r);
    }
    t(e.exports, "default", ()=>r);
}), i.register("cttdm", function(e, n) {
    t(e.exports, "nonpassivecapture", ()=>r), t(e.exports, "default", ()=>i);
    const r = {
        capture: !0,
        passive: !1
    };
    function i(t) {
        t.preventDefault(), t.stopImmediatePropagation();
    }
}), i.register("bi4KR", function(e, n) {
    t(e.exports, "default", ()=>d);
    var r = i("bYoiY"), o = i("jUrtA"), u = i("34d8K"), a = i("xcrgO"), s = i("gnkFs"), f = i("hNADL"), l = i("aPLyh"), c = i("amdqR"), h = i("aE1fz");
    function d(t, e) {
        var n, i = typeof e;
        return null == e || "boolean" === i ? (0, c.default)(e) : ("number" === i ? s.default : "string" === i ? (n = (0, r.default)(e)) ? (e = n, o.default) : l.default : e instanceof r.default ? o.default : e instanceof Date ? a.default : (0, h.isNumberArray)(e) ? h.default : Array.isArray(e) ? u.genericArray : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? f.default : s.default)(t, e);
    }
}), i.register("bYoiY", function(e, n) {
    t(e.exports, "default", ()=>_), t(e.exports, "rgb", ()=>k);
    var r = i("bfWFq");
    function o() {}
    var u = .7, a = 1.4285714285714286, s = "\\s*([+-]?\\d+)\\s*", f = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", l = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", c = /^#([0-9a-f]{3,8})$/, h = new RegExp(`^rgb\\(${s},${s},${s}\\)$`), d = new RegExp(`^rgb\\(${l},${l},${l}\\)$`), p = new RegExp(`^rgba\\(${s},${s},${s},${f}\\)$`), g = new RegExp(`^rgba\\(${l},${l},${l},${f}\\)$`), v = new RegExp(`^hsl\\(${f},${l},${l}\\)$`), m = new RegExp(`^hsla\\(${f},${l},${l},${f}\\)$`), x = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    function y() {
        return this.rgb().formatHex();
    }
    function w() {
        return this.rgb().formatRgb();
    }
    function _(t) {
        var e, n;
        return t = (t + "").trim().toLowerCase(), (e = c.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? b(e) : 3 === n ? new A(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? M(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? M(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = h.exec(t)) ? new A(e[1], e[2], e[3], 1) : (e = d.exec(t)) ? new A(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = p.exec(t)) ? M(e[1], e[2], e[3], e[4]) : (e = g.exec(t)) ? M(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = v.exec(t)) ? P(e[1], e[2] / 100, e[3] / 100, 1) : (e = m.exec(t)) ? P(e[1], e[2] / 100, e[3] / 100, e[4]) : x.hasOwnProperty(t) ? b(x[t]) : "transparent" === t ? new A(NaN, NaN, NaN, 0) : null;
    }
    function b(t) {
        return new A(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
    }
    function M(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new A(t, e, n, r);
    }
    function k(t, e, n, r) {
        var i;
        return 1 === arguments.length ? ((i = t) instanceof o || (i = _(i)), i ? new A((i = i.rgb()).r, i.g, i.b, i.opacity) : new A) : new A(t, e, n, null == r ? 1 : r);
    }
    function A(t, e, n, r) {
        this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
    }
    function N() {
        return `#${O(this.r)}${O(this.g)}${O(this.b)}`;
    }
    function E() {
        const t = S(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${j(this.r)}, ${j(this.g)}, ${j(this.b)}${1 === t ? ")" : `, ${t})`}`;
    }
    function S(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
    }
    function j(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
    }
    function O(t) {
        return ((t = j(t)) < 16 ? "0" : "") + t.toString(16);
    }
    function P(t, e, n, r) {
        return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new C(t, e, n, r);
    }
    function T(t) {
        if (t instanceof C) return new C(t.h, t.s, t.l, t.opacity);
        if (t instanceof o || (t = _(t)), !t) return new C;
        if (t instanceof C) return t;
        var e = (t = t.rgb()).r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), u = Math.max(e, n, r), a = NaN, s = u - i, f = (u + i) / 2;
        return s ? (a = e === u ? (n - r) / s + 6 * (n < r) : n === u ? (r - e) / s + 2 : (e - n) / s + 4, s /= f < .5 ? u + i : 2 - u - i, a *= 60) : s = f > 0 && f < 1 ? 0 : a, new C(a, s, f, t.opacity);
    }
    function C(t, e, n, r) {
        this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
    }
    function R(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
    }
    function D(t) {
        return Math.max(0, Math.min(1, t || 0));
    }
    function q(t, e, n) {
        return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e);
    }
    (0, r.default)(o, _, {
        copy (t) {
            return Object.assign(new this.constructor, this, t);
        },
        displayable () {
            return this.rgb().displayable();
        },
        hex: y,
        formatHex: y,
        formatHex8: function() {
            return this.rgb().formatHex8();
        },
        formatHsl: function() {
            return T(this).formatHsl();
        },
        formatRgb: w,
        toString: w
    }), (0, r.default)(A, k, (0, r.extend)(o, {
        brighter (t) {
            return t = null == t ? a : Math.pow(a, t), new A(this.r * t, this.g * t, this.b * t, this.opacity);
        },
        darker (t) {
            return t = null == t ? u : Math.pow(u, t), new A(this.r * t, this.g * t, this.b * t, this.opacity);
        },
        rgb () {
            return this;
        },
        clamp () {
            return new A(j(this.r), j(this.g), j(this.b), S(this.opacity));
        },
        displayable () {
            return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
        },
        hex: N,
        formatHex: N,
        formatHex8: function() {
            return `#${O(this.r)}${O(this.g)}${O(this.b)}${O(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
        },
        formatRgb: E,
        toString: E
    })), (0, r.default)(C, function(t, e, n, r) {
        return 1 === arguments.length ? T(t) : new C(t, e, n, null == r ? 1 : r);
    }, (0, r.extend)(o, {
        brighter (t) {
            return t = null == t ? a : Math.pow(a, t), new C(this.h, this.s, this.l * t, this.opacity);
        },
        darker (t) {
            return t = null == t ? u : Math.pow(u, t), new C(this.h, this.s, this.l * t, this.opacity);
        },
        rgb () {
            var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * e, i = 2 * n - r;
            return new A(q(t >= 240 ? t - 240 : t + 120, i, r), q(t, i, r), q(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
        },
        clamp () {
            return new C(R(this.h), D(this.s), D(this.l), S(this.opacity));
        },
        displayable () {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
        },
        formatHsl () {
            const t = S(this.opacity);
            return `${1 === t ? "hsl(" : "hsla("}${R(this.h)}, ${100 * D(this.s)}%, ${100 * D(this.l)}%${1 === t ? ")" : `, ${t})`}`;
        }
    }));
}), i.register("bfWFq", function(e, n) {
    function r(t, e, n) {
        t.prototype = e.prototype = n, n.constructor = t;
    }
    function i(t, e) {
        var n = Object.create(t.prototype);
        for(var r in e)n[r] = e[r];
        return n;
    }
    t(e.exports, "default", ()=>r), t(e.exports, "extend", ()=>i);
}), i.register("jUrtA", function(e, n) {
    t(e.exports, "default", ()=>s);
    var r = i("bYoiY"), o = i("j0bQ2"), u = i("8XYWK"), a = i("75Lq4"), s = function t(e) {
        var n = (0, a.gamma)(e);
        function i(t, e) {
            var i = n((t = (0, r.rgb)(t)).r, (e = (0, r.rgb)(e)).r), o = n(t.g, e.g), u = n(t.b, e.b), s = (0, a.default)(t.opacity, e.opacity);
            return function(e) {
                return t.r = i(e), t.g = o(e), t.b = u(e), t.opacity = s(e), t + "";
            };
        }
        return i.gamma = t, i;
    }(1);
    function f(t) {
        return function(e) {
            var n, i, o = e.length, u = new Array(o), a = new Array(o), s = new Array(o);
            for(n = 0; n < o; ++n)i = (0, r.rgb)(e[n]), u[n] = i.r || 0, a[n] = i.g || 0, s[n] = i.b || 0;
            return u = t(u), a = t(a), s = t(s), i.opacity = 1, function(t) {
                return i.r = u(t), i.g = a(t), i.b = s(t), i + "";
            };
        };
    }
    f(o.default), f(u.default);
}), i.register("j0bQ2", function(e, n) {
    function r(t, e, n, r, i) {
        var o = t * t, u = o * t;
        return ((1 - 3 * t + 3 * o - u) * e + (4 - 6 * o + 3 * u) * n + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6;
    }
    function i(t) {
        var e = t.length - 1;
        return function(n) {
            var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), o = t[i], u = t[i + 1], a = i > 0 ? t[i - 1] : 2 * o - u, s = i < e - 1 ? t[i + 2] : 2 * u - o;
            return r((n - i / e) * e, a, o, u, s);
        };
    }
    t(e.exports, "basis", ()=>r), t(e.exports, "default", ()=>i);
}), i.register("8XYWK", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("j0bQ2");
    function o(t) {
        var e = t.length;
        return function(n) {
            var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e), o = t[(i + e - 1) % e], u = t[i % e], a = t[(i + 1) % e], s = t[(i + 2) % e];
            return (0, r.basis)((n - i / e) * e, o, u, a, s);
        };
    }
}), i.register("75Lq4", function(e, n) {
    t(e.exports, "gamma", ()=>u), t(e.exports, "default", ()=>a);
    var r = i("amdqR");
    function o(t, e) {
        return function(n) {
            return t + n * e;
        };
    }
    function u(t) {
        return 1 == (t = +t) ? a : function(e, n) {
            return n - e ? function(t, e, n) {
                return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
                    return Math.pow(t + r * e, n);
                };
            }(e, n, t) : (0, r.default)(isNaN(e) ? n : e);
        };
    }
    function a(t, e) {
        var n = e - t;
        return n ? o(t, n) : (0, r.default)(isNaN(t) ? e : t);
    }
}), i.register("amdqR", function(e, n) {
    t(e.exports, "default", ()=>r);
    var r = (t)=>()=>t;
}), i.register("34d8K", function(e, n) {
    t(e.exports, "genericArray", ()=>o);
    var r = i("bi4KR");
    i("aE1fz");
    function o(t, e) {
        var n, i = e ? e.length : 0, o = t ? Math.min(i, t.length) : 0, u = new Array(o), a = new Array(i);
        for(n = 0; n < o; ++n)u[n] = (0, r.default)(t[n], e[n]);
        for(; n < i; ++n)a[n] = e[n];
        return function(t) {
            for(n = 0; n < o; ++n)a[n] = u[n](t);
            return a;
        };
    }
}), i.register("aE1fz", function(e, n) {
    function r(t, e) {
        e || (e = []);
        var n, r = t ? Math.min(e.length, t.length) : 0, i = e.slice();
        return function(o) {
            for(n = 0; n < r; ++n)i[n] = t[n] * (1 - o) + e[n] * o;
            return i;
        };
    }
    function i(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
    }
    t(e.exports, "default", ()=>r), t(e.exports, "isNumberArray", ()=>i);
}), i.register("xcrgO", function(e, n) {
    function r(t, e) {
        var n = new Date;
        return t = +t, e = +e, function(r) {
            return n.setTime(t * (1 - r) + e * r), n;
        };
    }
    t(e.exports, "default", ()=>r);
}), i.register("gnkFs", function(e, n) {
    function r(t, e) {
        return t = +t, e = +e, function(n) {
            return t * (1 - n) + e * n;
        };
    }
    t(e.exports, "default", ()=>r);
}), i.register("hNADL", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("bi4KR");
    function o(t, e) {
        var n, i = {}, o = {};
        for(n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e)n in t ? i[n] = (0, r.default)(t[n], e[n]) : o[n] = e[n];
        return function(t) {
            for(n in i)o[n] = i[n](t);
            return o;
        };
    }
}), i.register("aPLyh", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("gnkFs"), o = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, u = new RegExp(o.source, "g");
    function a(t, e) {
        var n, i, a, s = o.lastIndex = u.lastIndex = 0, f = -1, l = [], c = [];
        for(t += "", e += ""; (n = o.exec(t)) && (i = u.exec(e));)(a = i.index) > s && (a = e.slice(s, a), l[f] ? l[f] += a : l[++f] = a), (n = n[0]) === (i = i[0]) ? l[f] ? l[f] += i : l[++f] = i : (l[++f] = null, c.push({
            i: f,
            x: (0, r.default)(n, i)
        })), s = u.lastIndex;
        return s < e.length && (a = e.slice(s), l[f] ? l[f] += a : l[++f] = a), l.length < 2 ? c[0] ? function(t) {
            return function(e) {
                return t(e) + "";
            };
        }(c[0].x) : function(t) {
            return function() {
                return t;
            };
        }(e) : (e = c.length, function(t) {
            for(var n, r = 0; r < e; ++r)l[(n = c[r]).i] = n.x(t);
            return l.join("");
        });
    }
}), i.register("2oxcP", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("gQNdD");
    function o(t, e) {
        if (t = (0, r.default)(t), void 0 === e && (e = t.currentTarget), e) {
            var n = e.ownerSVGElement || e;
            if (n.createSVGPoint) {
                var i = n.createSVGPoint();
                return i.x = t.clientX, i.y = t.clientY, [
                    (i = i.matrixTransform(e.getScreenCTM().inverse())).x,
                    i.y
                ];
            }
            if (e.getBoundingClientRect) {
                var o = e.getBoundingClientRect();
                return [
                    t.clientX - o.left - e.clientLeft,
                    t.clientY - o.top - e.clientTop
                ];
            }
        }
        return [
            t.pageX,
            t.pageY
        ];
    }
}), i.register("gQNdD", function(e, n) {
    function r(t) {
        let e;
        for(; e = t.sourceEvent;)t = e;
        return t;
    }
    t(e.exports, "default", ()=>r);
}), i.register("dxJVY", function(e, n) {
    t(e.exports, "interrupt", ()=>i("f8M3T").default), i("2k9Hs");
    i("f8M3T");
}), i.register("2k9Hs", function(t, e) {
    var n = i("3us5W"), r = i("gDVVi"), o = i("fBcKd");
    n.default.prototype.interrupt = r.default, n.default.prototype.transition = o.default;
}), i.register("gDVVi", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("f8M3T");
    function o(t) {
        return this.each(function() {
            (0, r.default)(this, t);
        });
    }
}), i.register("f8M3T", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("1O1wu");
    function o(t, e) {
        var n, i, o, u = t.__transition, a = !0;
        if (u) {
            for(o in e = null == e ? null : e + "", u)(n = u[o]).name === e ? (i = n.state > r.STARTING && n.state < r.ENDING, n.state = r.ENDED, n.timer.stop(), n.on.call(i ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete u[o]) : a = !1;
            a && delete t.__transition;
        }
    }
}), i.register("1O1wu", function(e, n) {
    t(e.exports, "STARTING", ()=>c), t(e.exports, "ENDING", ()=>p), t(e.exports, "ENDED", ()=>g), t(e.exports, "default", ()=>v), t(e.exports, "init", ()=>m), t(e.exports, "get", ()=>y), t(e.exports, "set", ()=>x);
    var r = i("aFEgl"), o = i("hYquC"), u = i("jSjsP"), a = (0, r.default)("start", "end", "cancel", "interrupt"), s = [], f = 0, l = 1, c = 2, h = 3, d = 4, p = 5, g = 6;
    function v(t, e, n, r, i, v) {
        var m = t.__transition;
        if (m) {
            if (n in m) return;
        } else t.__transition = {};
        !function(t, e, n) {
            var r, i = t.__transition;
            function a(t) {
                n.state = l, n.timer.restart(s, n.delay, n.time), n.delay <= t && s(t - n.delay);
            }
            function s(u) {
                var a, p, m, x;
                if (n.state !== l) return v();
                for(a in i)if ((x = i[a]).name === n.name) {
                    if (x.state === h) return (0, o.default)(s);
                    x.state === d ? (x.state = g, x.timer.stop(), x.on.call("interrupt", t, t.__data__, x.index, x.group), delete i[a]) : +a < e && (x.state = g, x.timer.stop(), x.on.call("cancel", t, t.__data__, x.index, x.group), delete i[a]);
                }
                if ((0, o.default)(function() {
                    n.state === h && (n.state = d, n.timer.restart(f, n.delay, n.time), f(u));
                }), n.state = c, n.on.call("start", t, t.__data__, n.index, n.group), n.state === c) {
                    for(n.state = h, r = new Array(m = n.tween.length), a = 0, p = -1; a < m; ++a)(x = n.tween[a].value.call(t, t.__data__, n.index, n.group)) && (r[++p] = x);
                    r.length = p + 1;
                }
            }
            function f(e) {
                for(var i = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(v), n.state = p, 1), o = -1, u = r.length; ++o < u;)r[o].call(t, i);
                n.state === p && (n.on.call("end", t, t.__data__, n.index, n.group), v());
            }
            function v() {
                for(var r in n.state = g, n.timer.stop(), delete i[e], i)return;
                delete t.__transition;
            }
            i[e] = n, n.timer = (0, u.timer)(a, 0, n.time);
        }(t, n, {
            name: e,
            index: r,
            group: i,
            on: a,
            tween: s,
            time: v.time,
            delay: v.delay,
            duration: v.duration,
            ease: v.ease,
            timer: null,
            state: f
        });
    }
    function m(t, e) {
        var n = y(t, e);
        if (n.state > f) throw new Error("too late; already scheduled");
        return n;
    }
    function x(t, e) {
        var n = y(t, e);
        if (n.state > h) throw new Error("too late; already running");
        return n;
    }
    function y(t, e) {
        var n = t.__transition;
        if (!n || !(n = n[e])) throw new Error("transition not found");
        return n;
    }
}), i.register("hYquC", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("jSjsP");
    function o(t, e, n) {
        var i = new r.Timer;
        return e = null == e ? 0 : +e, i.restart((n)=>{
            i.stop(), t(n + e);
        }, e, n), i;
    }
}), i.register("jSjsP", function(e, n) {
    t(e.exports, "now", ()=>p), t(e.exports, "Timer", ()=>v), t(e.exports, "timer", ()=>m);
    var r, i, o = 0, u = 0, a = 0, s = 1e3, f = 0, l = 0, c = 0, h = "object" == typeof performance && performance.now ? performance : Date, d = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17);
    };
    function p() {
        return l || (d(g), l = h.now() + c);
    }
    function g() {
        l = 0;
    }
    function v() {
        this._call = this._time = this._next = null;
    }
    function m(t, e, n) {
        var r = new v;
        return r.restart(t, e, n), r;
    }
    function x() {
        l = (f = h.now()) + c, o = u = 0;
        try {
            !function() {
                p(), ++o;
                for(var t, e = r; e;)(t = l - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
                --o;
            }();
        } finally{
            o = 0, function() {
                var t, e, n = r, o = 1 / 0;
                for(; n;)n._call ? (o > n._time && (o = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : r = e);
                i = t, w(o);
            }(), l = 0;
        }
    }
    function y() {
        var t = h.now(), e = t - f;
        e > s && (c -= e, f = t);
    }
    function w(t) {
        o || (u && (u = clearTimeout(u)), t - l > 24 ? (t < 1 / 0 && (u = setTimeout(x, t - h.now() - c)), a && (a = clearInterval(a))) : (a || (f = h.now(), a = setInterval(y, s)), o = 1, d(x)));
    }
    v.prototype = m.prototype = {
        constructor: v,
        restart: function(t, e, n) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            n = (null == n ? p() : +n) + (null == e ? 0 : +e), this._next || i === this || (i ? i._next = this : r = this, i = this), this._call = t, this._time = n, w();
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, w());
        }
    };
}), i.register("fBcKd", function(e, n) {
    t(e.exports, "default", ()=>l);
    var r = i("e9pyf"), o = i("1O1wu"), u = i("7OMS0"), a = i("jSjsP"), s = {
        time: null,
        delay: 0,
        duration: 250,
        ease: u.cubicInOut
    };
    function f(t, e) {
        for(var n; !(n = t.__transition) || !(n = n[e]);)if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
        return n;
    }
    function l(t) {
        var e, n;
        t instanceof r.Transition ? (e = t._id, t = t._name) : (e = (0, r.newId)(), (n = s).time = (0, a.now)(), t = null == t ? null : t + "");
        for(var i = this._groups, u = i.length, l = 0; l < u; ++l)for(var c, h = i[l], d = h.length, p = 0; p < d; ++p)(c = h[p]) && (0, o.default)(c, t, e, p, h, n || f(c, e));
        return new r.Transition(i, this._parents, t, e);
    }
}), i.register("e9pyf", function(e, n) {
    t(e.exports, "Transition", ()=>N), t(e.exports, "newId", ()=>E);
    var r = i("3us5W"), o = i("3DFnF"), u = i("hpADm"), a = i("QaWfs"), s = i("drGTC"), f = i("cflrC"), l = i("dudkO"), c = i("gE3NB"), h = i("jUpER"), d = i("lKQ2g"), p = i("fAKgz"), g = i("dp6Bd"), v = i("asVWM"), m = i("1H5R6"), x = i("hV9BK"), y = i("bhsa4"), w = i("jLbDc"), _ = i("8EN5J"), b = i("jZTje"), M = i("cy9mc"), k = i("73a8S"), A = 0;
    function N(t, e, n, r) {
        this._groups = t, this._parents = e, this._name = n, this._id = r;
    }
    function E() {
        return ++A;
    }
    var S = r.default.prototype;
    N.prototype = (function(t) {
        return (0, r.default)().transition(t);
    }).prototype = {
        constructor: N,
        select: g.default,
        selectAll: v.default,
        selectChild: S.selectChild,
        selectChildren: S.selectChildren,
        filter: c.default,
        merge: h.default,
        selection: m.default,
        transition: b.default,
        call: S.call,
        nodes: S.nodes,
        node: S.node,
        size: S.size,
        empty: S.empty,
        each: S.each,
        on: d.default,
        attr: o.default,
        attrTween: u.default,
        style: x.default,
        styleTween: y.default,
        text: w.default,
        textTween: _.default,
        remove: p.default,
        tween: M.default,
        delay: a.default,
        duration: s.default,
        ease: f.default,
        easeVarying: l.default,
        end: k.default,
        [Symbol.iterator]: S[Symbol.iterator]
    };
}), i.register("3DFnF", function(e, n) {
    t(e.exports, "default", ()=>p);
    var r = i("jDZQw"), o = i("fEEcv"), u = i("cy9mc"), a = i("bSVkw");
    function s(t) {
        return function() {
            this.removeAttribute(t);
        };
    }
    function f(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local);
        };
    }
    function l(t, e, n) {
        var r, i, o = n + "";
        return function() {
            var u = this.getAttribute(t);
            return u === o ? null : u === r ? i : i = e(r = u, n);
        };
    }
    function c(t, e, n) {
        var r, i, o = n + "";
        return function() {
            var u = this.getAttributeNS(t.space, t.local);
            return u === o ? null : u === r ? i : i = e(r = u, n);
        };
    }
    function h(t, e, n) {
        var r, i, o;
        return function() {
            var u, a, s = n(this);
            if (null != s) return (u = this.getAttribute(t)) === (a = s + "") ? null : u === r && a === i ? o : (i = a, o = e(r = u, s));
            this.removeAttribute(t);
        };
    }
    function d(t, e, n) {
        var r, i, o;
        return function() {
            var u, a, s = n(this);
            if (null != s) return (u = this.getAttributeNS(t.space, t.local)) === (a = s + "") ? null : u === r && a === i ? o : (i = a, o = e(r = u, s));
            this.removeAttributeNS(t.space, t.local);
        };
    }
    function p(t, e) {
        var n = (0, o.default)(t), i = "transform" === n ? r.interpolateTransformSvg : a.default;
        return this.attrTween(t, "function" == typeof e ? (n.local ? d : h)(n, i, (0, u.tweenValue)(this, "attr." + t, e)) : null == e ? (n.local ? f : s)(n) : (n.local ? c : l)(n, i, e));
    }
}), i.register("jDZQw", function(e, n) {
    t(e.exports, "interpolateTransformCss", ()=>a), t(e.exports, "interpolateTransformSvg", ()=>s);
    var r = i("gnkFs"), o = i("6lTYu");
    function u(t, e, n, i) {
        function o(t) {
            return t.length ? t.pop() + " " : "";
        }
        return function(u, a) {
            var s = [], f = [];
            return u = t(u), a = t(a), function(t, i, o, u, a, s) {
                if (t !== o || i !== u) {
                    var f = a.push("translate(", null, e, null, n);
                    s.push({
                        i: f - 4,
                        x: (0, r.default)(t, o)
                    }, {
                        i: f - 2,
                        x: (0, r.default)(i, u)
                    });
                } else (o || u) && a.push("translate(" + o + e + u + n);
            }(u.translateX, u.translateY, a.translateX, a.translateY, s, f), function(t, e, n, u) {
                t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), u.push({
                    i: n.push(o(n) + "rotate(", null, i) - 2,
                    x: (0, r.default)(t, e)
                })) : e && n.push(o(n) + "rotate(" + e + i);
            }(u.rotate, a.rotate, s, f), function(t, e, n, u) {
                t !== e ? u.push({
                    i: n.push(o(n) + "skewX(", null, i) - 2,
                    x: (0, r.default)(t, e)
                }) : e && n.push(o(n) + "skewX(" + e + i);
            }(u.skewX, a.skewX, s, f), function(t, e, n, i, u, a) {
                if (t !== n || e !== i) {
                    var s = u.push(o(u) + "scale(", null, ",", null, ")");
                    a.push({
                        i: s - 4,
                        x: (0, r.default)(t, n)
                    }, {
                        i: s - 2,
                        x: (0, r.default)(e, i)
                    });
                } else 1 === n && 1 === i || u.push(o(u) + "scale(" + n + "," + i + ")");
            }(u.scaleX, u.scaleY, a.scaleX, a.scaleY, s, f), u = a = null, function(t) {
                for(var e, n = -1, r = f.length; ++n < r;)s[(e = f[n]).i] = e.x(t);
                return s.join("");
            };
        };
    }
    var a = u(o.parseCss, "px, ", "px)", "deg)"), s = u(o.parseSvg, ", ", ")", ")");
}), i.register("6lTYu", function(e, n) {
    t(e.exports, "parseCss", ()=>u), t(e.exports, "parseSvg", ()=>a);
    var r, o = i("3xqrJ");
    function u(t) {
        const e = new ("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
        return e.isIdentity ? o.identity : (0, o.default)(e.a, e.b, e.c, e.d, e.e, e.f);
    }
    function a(t) {
        return null == t ? o.identity : (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "g")), r.setAttribute("transform", t), (t = r.transform.baseVal.consolidate()) ? (t = t.matrix, (0, o.default)(t.a, t.b, t.c, t.d, t.e, t.f)) : o.identity);
    }
}), i.register("3xqrJ", function(e, n) {
    t(e.exports, "identity", ()=>i), t(e.exports, "default", ()=>o);
    var r = 180 / Math.PI, i = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    };
    function o(t, e, n, i, o, u) {
        var a, s, f;
        return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (f = t * n + e * i) && (n -= t * f, i -= e * f), (s = Math.sqrt(n * n + i * i)) && (n /= s, i /= s, f /= s), t * i < e * n && (t = -t, e = -e, f = -f, a = -a), {
            translateX: o,
            translateY: u,
            rotate: Math.atan2(e, t) * r,
            skewX: Math.atan(f) * r,
            scaleX: a,
            scaleY: s
        };
    }
}), i.register("cy9mc", function(e, n) {
    t(e.exports, "default", ()=>a), t(e.exports, "tweenValue", ()=>s);
    var r = i("1O1wu");
    function o(t, e) {
        var n, i;
        return function() {
            var o = (0, r.set)(this, t), u = o.tween;
            if (u !== n) {
                for(var a = 0, s = (i = n = u).length; a < s; ++a)if (i[a].name === e) {
                    (i = i.slice()).splice(a, 1);
                    break;
                }
            }
            o.tween = i;
        };
    }
    function u(t, e, n) {
        var i, o;
        if ("function" != typeof n) throw new Error;
        return function() {
            var u = (0, r.set)(this, t), a = u.tween;
            if (a !== i) {
                o = (i = a).slice();
                for(var s = {
                    name: e,
                    value: n
                }, f = 0, l = o.length; f < l; ++f)if (o[f].name === e) {
                    o[f] = s;
                    break;
                }
                f === l && o.push(s);
            }
            u.tween = o;
        };
    }
    function a(t, e) {
        var n = this._id;
        if (t += "", arguments.length < 2) {
            for(var i, a = (0, r.get)(this.node(), n).tween, s = 0, f = a.length; s < f; ++s)if ((i = a[s]).name === t) return i.value;
            return null;
        }
        return this.each((null == e ? o : u)(n, t, e));
    }
    function s(t, e, n) {
        var i = t._id;
        return t.each(function() {
            var t = (0, r.set)(this, i);
            (t.value || (t.value = {}))[e] = n.apply(this, arguments);
        }), function(t) {
            return (0, r.get)(t, i).value[e];
        };
    }
}), i.register("bSVkw", function(e, n) {
    t(e.exports, "default", ()=>s);
    var r = i("bYoiY"), o = i("gnkFs"), u = i("jUrtA"), a = i("aPLyh");
    function s(t, e) {
        var n;
        return ("number" == typeof e ? o.default : e instanceof r.default ? u.default : (n = (0, r.default)(e)) ? (e = n, u.default) : a.default)(t, e);
    }
}), i.register("hpADm", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("fEEcv");
    function o(t, e) {
        var n, r;
        function i() {
            var i = e.apply(this, arguments);
            return i !== r && (n = (r = i) && function(t, e) {
                return function(n) {
                    this.setAttributeNS(t.space, t.local, e.call(this, n));
                };
            }(t, i)), n;
        }
        return i._value = e, i;
    }
    function u(t, e) {
        var n, r;
        function i() {
            var i = e.apply(this, arguments);
            return i !== r && (n = (r = i) && function(t, e) {
                return function(n) {
                    this.setAttribute(t, e.call(this, n));
                };
            }(t, i)), n;
        }
        return i._value = e, i;
    }
    function a(t, e) {
        var n = "attr." + t;
        if (arguments.length < 2) return (n = this.tween(n)) && n._value;
        if (null == e) return this.tween(n, null);
        if ("function" != typeof e) throw new Error;
        var i = (0, r.default)(t);
        return this.tween(n, (i.local ? o : u)(i, e));
    }
}), i.register("QaWfs", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("1O1wu");
    function o(t, e) {
        return function() {
            (0, r.init)(this, t).delay = +e.apply(this, arguments);
        };
    }
    function u(t, e) {
        return e = +e, function() {
            (0, r.init)(this, t).delay = e;
        };
    }
    function a(t) {
        var e = this._id;
        return arguments.length ? this.each(("function" == typeof t ? o : u)(e, t)) : (0, r.get)(this.node(), e).delay;
    }
}), i.register("drGTC", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("1O1wu");
    function o(t, e) {
        return function() {
            (0, r.set)(this, t).duration = +e.apply(this, arguments);
        };
    }
    function u(t, e) {
        return e = +e, function() {
            (0, r.set)(this, t).duration = e;
        };
    }
    function a(t) {
        var e = this._id;
        return arguments.length ? this.each(("function" == typeof t ? o : u)(e, t)) : (0, r.get)(this.node(), e).duration;
    }
}), i.register("cflrC", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("1O1wu");
    function o(t) {
        var e = this._id;
        return arguments.length ? this.each(function(t, e) {
            if ("function" != typeof e) throw new Error;
            return function() {
                (0, r.set)(this, t).ease = e;
            };
        }(e, t)) : (0, r.get)(this.node(), e).ease;
    }
}), i.register("dudkO", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("1O1wu");
    function o(t) {
        if ("function" != typeof t) throw new Error;
        return this.each(function(t, e) {
            return function() {
                var n = e.apply(this, arguments);
                if ("function" != typeof n) throw new Error;
                (0, r.set)(this, t).ease = n;
            };
        }(this._id, t));
    }
}), i.register("gE3NB", function(e, n) {
    t(e.exports, "default", ()=>u);
    var r = i("8doa3"), o = i("e9pyf");
    function u(t) {
        "function" != typeof t && (t = (0, r.default)(t));
        for(var e = this._groups, n = e.length, i = new Array(n), u = 0; u < n; ++u)for(var a, s = e[u], f = s.length, l = i[u] = [], c = 0; c < f; ++c)(a = s[c]) && t.call(a, a.__data__, c, s) && l.push(a);
        return new o.Transition(i, this._parents, this._name, this._id);
    }
}), i.register("jUpER", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("e9pyf");
    function o(t) {
        if (t._id !== this._id) throw new Error;
        for(var e = this._groups, n = t._groups, i = e.length, o = n.length, u = Math.min(i, o), a = new Array(i), s = 0; s < u; ++s)for(var f, l = e[s], c = n[s], h = l.length, d = a[s] = new Array(h), p = 0; p < h; ++p)(f = l[p] || c[p]) && (d[p] = f);
        for(; s < i; ++s)a[s] = e[s];
        return new r.Transition(a, this._parents, this._name, this._id);
    }
}), i.register("lKQ2g", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("1O1wu");
    function o(t, e) {
        var n = this._id;
        return arguments.length < 2 ? (0, r.get)(this.node(), n).on.on(t) : this.each(function(t, e, n) {
            var i, o, u = function(t) {
                return (t + "").trim().split(/^|\s+/).every(function(t) {
                    var e = t.indexOf(".");
                    return e >= 0 && (t = t.slice(0, e)), !t || "start" === t;
                });
            }(e) ? r.init : r.set;
            return function() {
                var r = u(this, t), a = r.on;
                a !== i && (o = (i = a).copy()).on(e, n), r.on = o;
            };
        }(n, t, e));
    }
}), i.register("fAKgz", function(e, n) {
    function r() {
        var t;
        return this.on("end.remove", (t = this._id, function() {
            var e = this.parentNode;
            for(var n in this.__transition)if (+n !== t) return;
            e && e.removeChild(this);
        }));
    }
    t(e.exports, "default", ()=>r);
}), i.register("dp6Bd", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("9rOh8"), o = i("e9pyf"), u = i("1O1wu");
    function a(t) {
        var e = this._name, n = this._id;
        "function" != typeof t && (t = (0, r.default)(t));
        for(var i = this._groups, a = i.length, s = new Array(a), f = 0; f < a; ++f)for(var l, c, h = i[f], d = h.length, p = s[f] = new Array(d), g = 0; g < d; ++g)(l = h[g]) && (c = t.call(l, l.__data__, g, h)) && ("__data__" in l && (c.__data__ = l.__data__), p[g] = c, (0, u.default)(p[g], e, n, g, p, (0, u.get)(l, n)));
        return new o.Transition(s, this._parents, e, n);
    }
}), i.register("asVWM", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("aMqra"), o = i("e9pyf"), u = i("1O1wu");
    function a(t) {
        var e = this._name, n = this._id;
        "function" != typeof t && (t = (0, r.default)(t));
        for(var i = this._groups, a = i.length, s = [], f = [], l = 0; l < a; ++l)for(var c, h = i[l], d = h.length, p = 0; p < d; ++p)if (c = h[p]) {
            for(var g, v = t.call(c, c.__data__, p, h), m = (0, u.get)(c, n), x = 0, y = v.length; x < y; ++x)(g = v[x]) && (0, u.default)(g, e, n, x, v, m);
            s.push(v), f.push(c);
        }
        return new o.Transition(s, f, e, n);
    }
}), i.register("1H5R6", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("3us5W").default.prototype.constructor;
    function o() {
        return new r(this._groups, this._parents);
    }
}), i.register("hV9BK", function(e, n) {
    t(e.exports, "default", ()=>l);
    var r = i("jDZQw"), o = i("9a8q4"), u = i("1O1wu"), a = i("cy9mc"), s = i("bSVkw");
    function f(t) {
        return function() {
            this.style.removeProperty(t);
        };
    }
    function l(t, e, n) {
        var i = "transform" == (t += "") ? r.interpolateTransformCss : s.default;
        return null == e ? this.styleTween(t, function(t, e) {
            var n, r, i;
            return function() {
                var u = (0, o.styleValue)(this, t), a = (this.style.removeProperty(t), (0, o.styleValue)(this, t));
                return u === a ? null : u === n && a === r ? i : i = e(n = u, r = a);
            };
        }(t, i)).on("end.style." + t, f(t)) : "function" == typeof e ? this.styleTween(t, function(t, e, n) {
            var r, i, u;
            return function() {
                var a = (0, o.styleValue)(this, t), s = n(this), f = s + "";
                return null == s && (this.style.removeProperty(t), f = s = (0, o.styleValue)(this, t)), a === f ? null : a === r && f === i ? u : (i = f, u = e(r = a, s));
            };
        }(t, i, (0, a.tweenValue)(this, "style." + t, e))).each(function(t, e) {
            var n, r, i, o, a = "style." + e, s = "end." + a;
            return function() {
                var l = (0, u.set)(this, t), c = l.on, h = null == l.value[a] ? o || (o = f(e)) : void 0;
                c === n && i === h || (r = (n = c).copy()).on(s, i = h), l.on = r;
            };
        }(this._id, t)) : this.styleTween(t, function(t, e, n) {
            var r, i, u = n + "";
            return function() {
                var a = (0, o.styleValue)(this, t);
                return a === u ? null : a === r ? i : i = e(r = a, n);
            };
        }(t, i, e), n).on("end.style." + t, null);
    }
}), i.register("bhsa4", function(e, n) {
    function r(t, e, n) {
        var r = "style." + (t += "");
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (null == e) return this.tween(r, null);
        if ("function" != typeof e) throw new Error;
        return this.tween(r, function(t, e, n) {
            var r, i;
            function o() {
                var o = e.apply(this, arguments);
                return o !== i && (r = (i = o) && function(t, e, n) {
                    return function(r) {
                        this.style.setProperty(t, e.call(this, r), n);
                    };
                }(t, o, n)), r;
            }
            return o._value = e, o;
        }(t, e, null == n ? "" : n));
    }
    t(e.exports, "default", ()=>r);
}), i.register("jLbDc", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("cy9mc");
    function o(t) {
        return this.tween("text", "function" == typeof t ? function(t) {
            return function() {
                var e = t(this);
                this.textContent = null == e ? "" : e;
            };
        }((0, r.tweenValue)(this, "text", t)) : function(t) {
            return function() {
                this.textContent = t;
            };
        }(null == t ? "" : t + ""));
    }
}), i.register("8EN5J", function(e, n) {
    function r(t) {
        var e = "text";
        if (arguments.length < 1) return (e = this.tween(e)) && e._value;
        if (null == t) return this.tween(e, null);
        if ("function" != typeof t) throw new Error;
        return this.tween(e, function(t) {
            var e, n;
            function r() {
                var r = t.apply(this, arguments);
                return r !== n && (e = (n = r) && function(t) {
                    return function(e) {
                        this.textContent = t.call(this, e);
                    };
                }(r)), e;
            }
            return r._value = t, r;
        }(t));
    }
    t(e.exports, "default", ()=>r);
}), i.register("jZTje", function(e, n) {
    t(e.exports, "default", ()=>u);
    var r = i("e9pyf"), o = i("1O1wu");
    function u() {
        for(var t = this._name, e = this._id, n = (0, r.newId)(), i = this._groups, u = i.length, a = 0; a < u; ++a)for(var s, f = i[a], l = f.length, c = 0; c < l; ++c)if (s = f[c]) {
            var h = (0, o.get)(s, e);
            (0, o.default)(s, t, n, c, f, {
                time: h.time + h.delay + h.duration,
                delay: 0,
                duration: h.duration,
                ease: h.ease
            });
        }
        return new r.Transition(i, this._parents, t, n);
    }
}), i.register("73a8S", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("1O1wu");
    function o() {
        var t, e, n = this, i = n._id, o = n.size();
        return new Promise(function(u, a) {
            var s = {
                value: a
            }, f = {
                value: function() {
                    0 == --o && u();
                }
            };
            n.each(function() {
                var n = (0, r.set)(this, i), o = n.on;
                o !== t && ((e = (t = o).copy())._.cancel.push(s), e._.interrupt.push(s), e._.end.push(f)), n.on = e;
            }), 0 === o && u();
        });
    }
}), i.register("7OMS0", function(e, n) {
    function r(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }
    t(e.exports, "cubicInOut", ()=>r);
}), i.register("6QApF", function(e, n) {
    t(e.exports, "default", ()=>r);
    var r = (t)=>()=>t;
}), i.register("j3W5K", function(e, n) {
    function r(t, { sourceEvent: e , target: n , selection: r , mode: i , dispatch: o  }) {
        Object.defineProperties(this, {
            type: {
                value: t,
                enumerable: !0,
                configurable: !0
            },
            sourceEvent: {
                value: e,
                enumerable: !0,
                configurable: !0
            },
            target: {
                value: n,
                enumerable: !0,
                configurable: !0
            },
            selection: {
                value: r,
                enumerable: !0,
                configurable: !0
            },
            mode: {
                value: i,
                enumerable: !0,
                configurable: !0
            },
            _: {
                value: o
            }
        });
    }
    t(e.exports, "default", ()=>r);
}), i.register("6fYbl", function(e, n) {
    function r(t) {
        t.stopImmediatePropagation();
    }
    function i(t) {
        t.preventDefault(), t.stopImmediatePropagation();
    }
    t(e.exports, "nopropagation", ()=>r), t(e.exports, "default", ()=>i);
}), i.register("5exuj", function(e, n) {
    t(e.exports, "csv", ()=>s);
    var r = i("k3760"), o = (i("iLItl"), i("kcqxh")), u = i("iKoDh");
    function a(t) {
        return function(e, n, r) {
            return 2 === arguments.length && "function" == typeof n && (r = n, n = void 0), (0, u.default)(e, n).then(function(e) {
                return t(e, r);
            });
        };
    }
    var s = a(r.csvParse);
    a(o.tsvParse);
}), i.register("k3760", function(e, n) {
    t(e.exports, "csvParse", ()=>o);
    var r = (0, i("iLItl").default)(","), o = r.parse;
    r.parseRows, r.format, r.formatBody, r.formatRows, r.formatRow, r.formatValue;
}), i.register("iLItl", function(e, n) {
    t(e.exports, "default", ()=>h);
    var r = {}, i = {}, o = 34, u = 10, a = 13;
    function s(t) {
        return new Function("d", "return {" + t.map(function(t, e) {
            return JSON.stringify(t) + ": d[" + e + '] || ""';
        }).join(",") + "}");
    }
    function f(t) {
        var e = Object.create(null), n = [];
        return t.forEach(function(t) {
            for(var r in t)r in e || n.push(e[r] = r);
        }), n;
    }
    function l(t, e) {
        var n = t + "", r = n.length;
        return r < e ? new Array(e - r + 1).join(0) + n : n;
    }
    function c(t) {
        var e, n = t.getUTCHours(), r = t.getUTCMinutes(), i = t.getUTCSeconds(), o = t.getUTCMilliseconds();
        return isNaN(t) ? "Invalid Date" : ((e = t.getUTCFullYear()) < 0 ? "-" + l(-e, 6) : e > 9999 ? "+" + l(e, 6) : l(e, 4)) + "-" + l(t.getUTCMonth() + 1, 2) + "-" + l(t.getUTCDate(), 2) + (o ? "T" + l(n, 2) + ":" + l(r, 2) + ":" + l(i, 2) + "." + l(o, 3) + "Z" : i ? "T" + l(n, 2) + ":" + l(r, 2) + ":" + l(i, 2) + "Z" : r || n ? "T" + l(n, 2) + ":" + l(r, 2) + "Z" : "");
    }
    function h(t) {
        var e = new RegExp('["' + t + "\n\r]"), n = t.charCodeAt(0);
        function l(t, e) {
            var s, f = [], l = t.length, c = 0, h = 0, d = l <= 0, p = !1;
            function g() {
                if (d) return i;
                if (p) return p = !1, r;
                var e, s, f = c;
                if (t.charCodeAt(f) === o) {
                    for(; c++ < l && t.charCodeAt(c) !== o || t.charCodeAt(++c) === o;);
                    return (e = c) >= l ? d = !0 : (s = t.charCodeAt(c++)) === u ? p = !0 : s === a && (p = !0, t.charCodeAt(c) === u && ++c), t.slice(f + 1, e - 1).replace(/""/g, '"');
                }
                for(; c < l;){
                    if ((s = t.charCodeAt(e = c++)) === u) p = !0;
                    else if (s === a) p = !0, t.charCodeAt(c) === u && ++c;
                    else if (s !== n) continue;
                    return t.slice(f, e);
                }
                return d = !0, t.slice(f, l);
            }
            for(t.charCodeAt(l - 1) === u && --l, t.charCodeAt(l - 1) === a && --l; (s = g()) !== i;){
                for(var v = []; s !== r && s !== i;)v.push(s), s = g();
                e && null == (v = e(v, h++)) || f.push(v);
            }
            return f;
        }
        function h(e, n) {
            return e.map(function(e) {
                return n.map(function(t) {
                    return p(e[t]);
                }).join(t);
            });
        }
        function d(e) {
            return e.map(p).join(t);
        }
        function p(t) {
            return null == t ? "" : t instanceof Date ? c(t) : e.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t;
        }
        return {
            parse: function(t, e) {
                var n, r, i = l(t, function(t, i) {
                    if (n) return n(t, i - 1);
                    r = t, n = e ? function(t, e) {
                        var n = s(t);
                        return function(r, i) {
                            return e(n(r), i, t);
                        };
                    }(t, e) : s(t);
                });
                return i.columns = r || [], i;
            },
            parseRows: l,
            format: function(e, n) {
                return null == n && (n = f(e)), [
                    n.map(p).join(t)
                ].concat(h(e, n)).join("\n");
            },
            formatBody: function(t, e) {
                return null == e && (e = f(t)), h(t, e).join("\n");
            },
            formatRows: function(t) {
                return t.map(d).join("\n");
            },
            formatRow: d,
            formatValue: p
        };
    }
}), i.register("kcqxh", function(e, n) {
    t(e.exports, "tsvParse", ()=>o);
    var r = (0, i("iLItl").default)("	"), o = r.parse;
    r.parseRows, r.format, r.formatBody, r.formatRows, r.formatRow, r.formatValue;
}), i.register("iKoDh", function(e, n) {
    function r(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.text();
    }
    function i(t, e) {
        return fetch(t, e).then(r);
    }
    t(e.exports, "default", ()=>i);
}), i.register("dfKvw", function(e, n) {
    t(e.exports, "default", ()=>m);
    var r = i("yi7xz"), o = i("5RunG"), u = i("sdXrw"), a = i("4fNoz"), s = i("fES9K"), f = i("cMyrl"), l = i("bcfo0"), c = i("fPYFK"), h = i("529IJ"), d = i("lxWi6"), p = i("iMWda"), g = i("dcsMw"), v = i("lDQsQ");
    function m(t, e) {
        t instanceof Map ? (t = [
            void 0,
            t
        ], void 0 === e && (e = y)) : void 0 === e && (e = x);
        for(var n, r, i, o, u, a = new b(t), s = [
            a
        ]; n = s.pop();)if ((i = e(n.data)) && (u = (i = Array.from(i)).length)) for(n.children = i, o = u - 1; o >= 0; --o)s.push(r = i[o] = new b(i[o])), r.parent = n, r.depth = n.depth + 1;
        return a.eachBefore(_);
    }
    function x(t) {
        return t.children;
    }
    function y(t) {
        return Array.isArray(t) ? t[1] : null;
    }
    function w(t) {
        void 0 !== t.data.value && (t.value = t.data.value), t.data = t.data.data;
    }
    function _(t) {
        var e = 0;
        do t.height = e;
        while ((t = t.parent) && t.height < ++e);
    }
    function b(t) {
        this.data = t, this.depth = this.height = 0, this.parent = null;
    }
    b.prototype = m.prototype = {
        constructor: b,
        count: r.default,
        each: o.default,
        eachAfter: a.default,
        eachBefore: u.default,
        find: s.default,
        sum: f.default,
        sort: l.default,
        path: c.default,
        ancestors: h.default,
        descendants: d.default,
        leaves: p.default,
        links: g.default,
        copy: function() {
            return m(this).eachBefore(w);
        },
        [Symbol.iterator]: v.default
    };
}), i.register("yi7xz", function(e, n) {
    function r(t) {
        var e = 0, n = t.children, r = n && n.length;
        if (r) for(; --r >= 0;)e += n[r].value;
        else e = 1;
        t.value = e;
    }
    function i() {
        return this.eachAfter(r);
    }
    t(e.exports, "default", ()=>i);
}), i.register("5RunG", function(e, n) {
    function r(t, e) {
        let n = -1;
        for (const r of this)t.call(e, r, ++n, this);
        return this;
    }
    t(e.exports, "default", ()=>r);
}), i.register("sdXrw", function(e, n) {
    function r(t, e) {
        for(var n, r, i = this, o = [
            i
        ], u = -1; i = o.pop();)if (t.call(e, i, ++u, this), n = i.children) for(r = n.length - 1; r >= 0; --r)o.push(n[r]);
        return this;
    }
    t(e.exports, "default", ()=>r);
}), i.register("4fNoz", function(e, n) {
    function r(t, e) {
        for(var n, r, i, o = this, u = [
            o
        ], a = [], s = -1; o = u.pop();)if (a.push(o), n = o.children) for(r = 0, i = n.length; r < i; ++r)u.push(n[r]);
        for(; o = a.pop();)t.call(e, o, ++s, this);
        return this;
    }
    t(e.exports, "default", ()=>r);
}), i.register("fES9K", function(e, n) {
    function r(t, e) {
        let n = -1;
        for (const r of this)if (t.call(e, r, ++n, this)) return r;
    }
    t(e.exports, "default", ()=>r);
}), i.register("cMyrl", function(e, n) {
    function r(t) {
        return this.eachAfter(function(e) {
            for(var n = +t(e.data) || 0, r = e.children, i = r && r.length; --i >= 0;)n += r[i].value;
            e.value = n;
        });
    }
    t(e.exports, "default", ()=>r);
}), i.register("bcfo0", function(e, n) {
    function r(t) {
        return this.eachBefore(function(e) {
            e.children && e.children.sort(t);
        });
    }
    t(e.exports, "default", ()=>r);
}), i.register("fPYFK", function(e, n) {
    function r(t) {
        for(var e = this, n = function(t, e) {
            if (t === e) return t;
            var n = t.ancestors(), r = e.ancestors(), i = null;
            t = n.pop(), e = r.pop();
            for(; t === e;)i = t, t = n.pop(), e = r.pop();
            return i;
        }(e, t), r = [
            e
        ]; e !== n;)e = e.parent, r.push(e);
        for(var i = r.length; t !== n;)r.splice(i, 0, t), t = t.parent;
        return r;
    }
    t(e.exports, "default", ()=>r);
}), i.register("529IJ", function(e, n) {
    function r() {
        for(var t = this, e = [
            t
        ]; t = t.parent;)e.push(t);
        return e;
    }
    t(e.exports, "default", ()=>r);
}), i.register("lxWi6", function(e, n) {
    function r() {
        return Array.from(this);
    }
    t(e.exports, "default", ()=>r);
}), i.register("iMWda", function(e, n) {
    function r() {
        var t = [];
        return this.eachBefore(function(e) {
            e.children || t.push(e);
        }), t;
    }
    t(e.exports, "default", ()=>r);
}), i.register("dcsMw", function(e, n) {
    function r() {
        var t = this, e = [];
        return t.each(function(n) {
            n !== t && e.push({
                source: n.parent,
                target: n
            });
        }), e;
    }
    t(e.exports, "default", ()=>r);
}), i.register("lDQsQ", function(e, n) {
    function* r() {
        var t, e, n, r, i = this, o = [
            i
        ];
        do {
            for(t = o.reverse(), o = []; i = t.pop();)if (yield i, e = i.children) for(n = 0, r = e.length; n < r; ++n)o.push(e[n]);
        }while (o.length);
    }
    t(e.exports, "default", ()=>r);
}), i.register("3MDo2", function(e, n) {
    t(e.exports, "default", ()=>f);
    var r = i("cmTqM"), o = i("6LqFS"), u = i("dZCMZ"), a = i("8IHS2");
    function s(t) {
        return Math.sqrt(t.value);
    }
    function f() {
        var t = null, e = 1, n = 1, i = o.constantZero;
        function a(r) {
            const a = (0, u.default)();
            return r.x = e / 2, r.y = n / 2, t ? r.eachBefore(l(t)).eachAfter(c(i, .5, a)).eachBefore(h(1)) : r.eachBefore(l(s)).eachAfter(c(o.constantZero, 1, a)).eachAfter(c(i, r.r / Math.min(e, n), a)).eachBefore(h(Math.min(e, n) / (2 * r.r))), r;
        }
        return a.radius = function(e) {
            return arguments.length ? (t = (0, r.optional)(e), a) : t;
        }, a.size = function(t) {
            return arguments.length ? (e = +t[0], n = +t[1], a) : [
                e,
                n
            ];
        }, a.padding = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : (0, o.default)(+t), a) : i;
        }, a;
    }
    function l(t) {
        return function(e) {
            e.children || (e.r = Math.max(0, +t(e) || 0));
        };
    }
    function c(t, e, n) {
        return function(r) {
            if (i = r.children) {
                var i, o, u, s = i.length, f = t(r) * e || 0;
                if (f) for(o = 0; o < s; ++o)i[o].r += f;
                if (u = (0, a.packSiblingsRandom)(i, n), f) for(o = 0; o < s; ++o)i[o].r -= f;
                r.r = u + f;
            }
        };
    }
    function h(t) {
        return function(e) {
            var n = e.parent;
            e.r *= t, n && (e.x = n.x + t * e.x, e.y = n.y + t * e.y);
        };
    }
}), i.register("cmTqM", function(e, n) {
    function r(t) {
        return null == t ? null : function(t) {
            if ("function" != typeof t) throw new Error;
            return t;
        }(t);
    }
    t(e.exports, "optional", ()=>r);
}), i.register("6LqFS", function(e, n) {
    function r() {
        return 0;
    }
    function i(t) {
        return function() {
            return t;
        };
    }
    t(e.exports, "constantZero", ()=>r), t(e.exports, "default", ()=>i);
}), i.register("dZCMZ", function(e, n) {
    t(e.exports, "default", ()=>u);
    const r = 1664525, i = 1013904223, o = 4294967296;
    function u() {
        let t = 1;
        return ()=>(t = (r * t + i) % o) / o;
    }
}), i.register("8IHS2", function(e, n) {
    t(e.exports, "packSiblingsRandom", ()=>l);
    var r = i("fVLOQ"), o = (i("dZCMZ"), i("k68Pg"));
    function u(t, e, n) {
        var r, i, o, u, a = t.x - e.x, s = t.y - e.y, f = a * a + s * s;
        f ? (i = e.r + n.r, i *= i, u = t.r + n.r, i > (u *= u) ? (r = (f + u - i) / (2 * f), o = Math.sqrt(Math.max(0, u / f - r * r)), n.x = t.x - r * a - o * s, n.y = t.y - r * s + o * a) : (r = (f + i - u) / (2 * f), o = Math.sqrt(Math.max(0, i / f - r * r)), n.x = e.x + r * a - o * s, n.y = e.y + r * s + o * a)) : (n.x = e.x + n.r, n.y = e.y);
    }
    function a(t, e) {
        var n = t.r + e.r - 1e-6, r = e.x - t.x, i = e.y - t.y;
        return n > 0 && n * n > r * r + i * i;
    }
    function s(t) {
        var e = t._, n = t.next._, r = e.r + n.r, i = (e.x * n.r + n.x * e.r) / r, o = (e.y * n.r + n.y * e.r) / r;
        return i * i + o * o;
    }
    function f(t) {
        this._ = t, this.next = null, this.previous = null;
    }
    function l(t, e) {
        if (!(c = (t = (0, r.default)(t)).length)) return 0;
        var n, i, l, c, h, d, p, g, v, m, x;
        if ((n = t[0]).x = 0, n.y = 0, !(c > 1)) return n.r;
        if (i = t[1], n.x = -i.r, i.x = n.r, i.y = 0, !(c > 2)) return n.r + i.r;
        u(i, n, l = t[2]), n = new f(n), i = new f(i), l = new f(l), n.next = l.previous = i, i.next = n.previous = l, l.next = i.previous = n;
        t: for(p = 3; p < c; ++p){
            u(n._, i._, l = t[p]), l = new f(l), g = i.next, v = n.previous, m = i._.r, x = n._.r;
            do if (m <= x) {
                if (a(g._, l._)) {
                    i = g, n.next = i, i.previous = n, --p;
                    continue t;
                }
                m += g._.r, g = g.next;
            } else {
                if (a(v._, l._)) {
                    (n = v).next = i, i.previous = n, --p;
                    continue t;
                }
                x += v._.r, v = v.previous;
            }
            while (g !== v.next);
            for(l.previous = n, l.next = i, n.next = i.previous = i = l, h = s(n); (l = l.next) !== i;)(d = s(l)) < h && (n = l, h = d);
            i = n.next;
        }
        for(n = [
            i._
        ], l = i; (l = l.next) !== i;)n.push(l._);
        for(l = (0, o.packEncloseRandom)(n, e), p = 0; p < c; ++p)(n = t[p]).x -= l.x, n.y -= l.y;
        return l.r;
    }
}), i.register("fVLOQ", function(e, n) {
    function r(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
    }
    function i(t, e) {
        let n, r, i = t.length;
        for(; i;)r = e() * i-- | 0, n = t[i], t[i] = t[r], t[r] = n;
        return t;
    }
    t(e.exports, "default", ()=>r), t(e.exports, "shuffle", ()=>i);
}), i.register("k68Pg", function(e, n) {
    t(e.exports, "packEncloseRandom", ()=>o);
    var r = i("fVLOQ");
    i("dZCMZ");
    function o(t, e) {
        for(var n, i, o = 0, a = (t = (0, r.shuffle)(Array.from(t), e)).length, f = []; o < a;)n = t[o], i && s(i, n) ? ++o : (i = l(f = u(f, n)), o = 0);
        return i;
    }
    function u(t, e) {
        var n, r;
        if (f(e, t)) return [
            e
        ];
        for(n = 0; n < t.length; ++n)if (a(e, t[n]) && f(c(t[n], e), t)) return [
            t[n],
            e
        ];
        for(n = 0; n < t.length - 1; ++n)for(r = n + 1; r < t.length; ++r)if (a(c(t[n], t[r]), e) && a(c(t[n], e), t[r]) && a(c(t[r], e), t[n]) && f(h(t[n], t[r], e), t)) return [
            t[n],
            t[r],
            e
        ];
        throw new Error;
    }
    function a(t, e) {
        var n = t.r - e.r, r = e.x - t.x, i = e.y - t.y;
        return n < 0 || n * n < r * r + i * i;
    }
    function s(t, e) {
        var n = t.r - e.r + 1e-9 * Math.max(t.r, e.r, 1), r = e.x - t.x, i = e.y - t.y;
        return n > 0 && n * n > r * r + i * i;
    }
    function f(t, e) {
        for(var n = 0; n < e.length; ++n)if (!s(t, e[n])) return !1;
        return !0;
    }
    function l(t) {
        switch(t.length){
            case 1:
                return {
                    x: (e = t[0]).x,
                    y: e.y,
                    r: e.r
                };
            case 2:
                return c(t[0], t[1]);
            case 3:
                return h(t[0], t[1], t[2]);
        }
        var e;
    }
    function c(t, e) {
        var n = t.x, r = t.y, i = t.r, o = e.x, u = e.y, a = e.r, s = o - n, f = u - r, l = a - i, c = Math.sqrt(s * s + f * f);
        return {
            x: (n + o + s / c * l) / 2,
            y: (r + u + f / c * l) / 2,
            r: (c + i + a) / 2
        };
    }
    function h(t, e, n) {
        var r = t.x, i = t.y, o = t.r, u = e.x, a = e.y, s = e.r, f = n.x, l = n.y, c = n.r, h = r - u, d = r - f, p = i - a, g = i - l, v = s - o, m = c - o, x = r * r + i * i - o * o, y = x - u * u - a * a + s * s, w = x - f * f - l * l + c * c, _ = d * p - h * g, b = (p * w - g * y) / (2 * _) - r, M = (g * v - p * m) / _, k = (d * y - h * w) / (2 * _) - i, A = (h * m - d * v) / _, N = M * M + A * A - 1, E = 2 * (o + b * M + k * A), S = b * b + k * k - o * o, j = -(Math.abs(N) > 1e-6 ? (E + Math.sqrt(E * E - 4 * N * S)) / (2 * N) : S / E);
        return {
            x: r + b + M * j,
            y: i + k + A * j,
            r: j
        };
    }
}), i.register("jAaAF", function(e, n) {
    t(e.exports, "default", ()=>i);
    function r(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
    }
    var i = function t(e, n, i) {
        function o(t, o) {
            var u, a, s = t[0], f = t[1], l = t[2], c = o[0], h = o[1], d = o[2], p = c - s, g = h - f, v = p * p + g * g;
            if (v < 1e-12) a = Math.log(d / l) / e, u = function(t) {
                return [
                    s + t * p,
                    f + t * g,
                    l * Math.exp(e * t * a)
                ];
            };
            else {
                var m = Math.sqrt(v), x = (d * d - l * l + i * v) / (2 * l * n * m), y = (d * d - l * l - i * v) / (2 * d * n * m), w = Math.log(Math.sqrt(x * x + 1) - x), _ = Math.log(Math.sqrt(y * y + 1) - y);
                a = (_ - w) / e, u = function(t) {
                    var i, o = t * a, u = r(w), c = l / (n * m) * (u * (i = e * o + w, ((i = Math.exp(2 * i)) - 1) / (i + 1)) - function(t) {
                        return ((t = Math.exp(t)) - 1 / t) / 2;
                    }(w));
                    return [
                        s + c * p,
                        f + c * g,
                        l * u / r(e * o + w)
                    ];
                };
            }
            return u.duration = 1e3 * a * e / Math.SQRT2, u;
        }
        return o.rho = function(e) {
            var n = Math.max(.001, +e), r = n * n;
            return t(n, r, r * r);
        }, o;
    }(Math.SQRT2, 2, 4);
}), i.register("gEnYl", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("8oHIF"), o = i("7QzZn"), u = i("4PqgM");
    function a() {
        var t, e, n = (0, u.default)().unknown(void 0), i = n.domain, s = n.range, f = 0, l = 1, c = !1, h = 0, d = 0, p = .5;
        function g() {
            var n = i().length, o = l < f, u = o ? l : f, a = o ? f : l;
            t = (a - u) / Math.max(1, n - h + 2 * d), c && (t = Math.floor(t)), u += (a - u - t * (n - h)) * p, e = t * (1 - h), c && (u = Math.round(u), e = Math.round(e));
            var g = (0, r.default)(n).map(function(e) {
                return u + t * e;
            });
            return s(o ? g.reverse() : g);
        }
        return delete n.unknown, n.domain = function(t) {
            return arguments.length ? (i(t), g()) : i();
        }, n.range = function(t) {
            return arguments.length ? ([f, l] = t, f = +f, l = +l, g()) : [
                f,
                l
            ];
        }, n.rangeRound = function(t) {
            return [f, l] = t, f = +f, l = +l, c = !0, g();
        }, n.bandwidth = function() {
            return e;
        }, n.step = function() {
            return t;
        }, n.round = function(t) {
            return arguments.length ? (c = !!t, g()) : c;
        }, n.padding = function(t) {
            return arguments.length ? (h = Math.min(1, d = +t), g()) : h;
        }, n.paddingInner = function(t) {
            return arguments.length ? (h = Math.min(1, t), g()) : h;
        }, n.paddingOuter = function(t) {
            return arguments.length ? (d = +t, g()) : d;
        }, n.align = function(t) {
            return arguments.length ? (p = Math.max(0, Math.min(1, t)), g()) : p;
        }, n.copy = function() {
            return a(i(), [
                f,
                l
            ]).round(c).paddingInner(h).paddingOuter(d).align(p);
        }, o.initRange.apply(g(), arguments);
    }
}), i.register("8oHIF", function(e, n) {
    function r(t, e, n) {
        t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
        for(var r = -1, i = 0 | Math.max(0, Math.ceil((e - t) / n)), o = new Array(i); ++r < i;)o[r] = t + r * n;
        return o;
    }
    t(e.exports, "default", ()=>r);
}), i.register("7QzZn", function(e, n) {
    function r(t, e) {
        switch(arguments.length){
            case 0:
                break;
            case 1:
                this.range(t);
                break;
            default:
                this.range(e).domain(t);
        }
        return this;
    }
    t(e.exports, "initRange", ()=>r);
}), i.register("4PqgM", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("4ePtk"), o = i("7QzZn");
    const u = Symbol("implicit");
    function a() {
        var t = new r.InternMap, e = [], n = [], i = u;
        function s(r) {
            let o = t.get(r);
            if (void 0 === o) {
                if (i !== u) return i;
                t.set(r, o = e.push(r) - 1);
            }
            return n[o % n.length];
        }
        return s.domain = function(n) {
            if (!arguments.length) return e.slice();
            e = [], t = new r.InternMap;
            for (const r of n)t.has(r) || t.set(r, e.push(r) - 1);
            return s;
        }, s.range = function(t) {
            return arguments.length ? (n = Array.from(t), s) : n.slice();
        }, s.unknown = function(t) {
            return arguments.length ? (i = t, s) : i;
        }, s.copy = function() {
            return a(e, n).unknown(i);
        }, o.initRange.apply(s, arguments), s;
    }
}), i.register("4ePtk", function(e, n) {
    t(e.exports, "InternMap", ()=>r);
    class r extends Map {
        constructor(t, e = s){
            if (super(), Object.defineProperties(this, {
                _intern: {
                    value: new Map
                },
                _key: {
                    value: e
                }
            }), null != t) for (const [e, n] of t)this.set(e, n);
        }
        get(t) {
            return super.get(o(this, t));
        }
        has(t) {
            return super.has(o(this, t));
        }
        set(t, e) {
            return super.set(u(this, t), e);
        }
        delete(t) {
            return super.delete(a(this, t));
        }
    }
    class i extends Set {
        constructor(t, e = s){
            if (super(), Object.defineProperties(this, {
                _intern: {
                    value: new Map
                },
                _key: {
                    value: e
                }
            }), null != t) for (const e of t)this.add(e);
        }
        has(t) {
            return super.has(o(this, t));
        }
        add(t) {
            return super.add(u(this, t));
        }
        delete(t) {
            return super.delete(a(this, t));
        }
    }
    function o({ _intern: t , _key: e  }, n) {
        const r = e(n);
        return t.has(r) ? t.get(r) : n;
    }
    function u({ _intern: t , _key: e  }, n) {
        const r = e(n);
        return t.has(r) ? t.get(r) : (t.set(r, n), n);
    }
    function a({ _intern: t , _key: e  }, n) {
        const r = e(n);
        return t.has(r) && (n = t.get(r), t.delete(r)), n;
    }
    function s(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
    }
}), i.register("iOlPi", function(e, n) {
    t(e.exports, "default", ()=>s);
    var r = i("aE6k7"), o = i("f6dVf"), u = i("7QzZn"), a = i("fabdk");
    function s() {
        var t = (0, o.default)();
        return t.copy = function() {
            return (0, o.copy)(t, s());
        }, u.initRange.apply(t, arguments), function(t) {
            var e = t.domain;
            return t.ticks = function(t) {
                var n = e();
                return (0, r.default)(n[0], n[n.length - 1], null == t ? 10 : t);
            }, t.tickFormat = function(t, n) {
                var r = e();
                return (0, a.default)(r[0], r[r.length - 1], null == t ? 10 : t, n);
            }, t.nice = function(n) {
                null == n && (n = 10);
                var i, o, u = e(), a = 0, s = u.length - 1, f = u[a], l = u[s], c = 10;
                for(l < f && (o = f, f = l, l = o, o = a, a = s, s = o); c-- > 0;){
                    if ((o = (0, r.tickIncrement)(f, l, n)) === i) return u[a] = f, u[s] = l, e(u);
                    if (o > 0) f = Math.floor(f / o) * o, l = Math.ceil(l / o) * o;
                    else {
                        if (!(o < 0)) break;
                        f = Math.ceil(f * o) / o, l = Math.floor(l * o) / o;
                    }
                    i = o;
                }
                return t;
            }, t;
        }(t);
    }
}), i.register("aE6k7", function(e, n) {
    t(e.exports, "default", ()=>a), t(e.exports, "tickIncrement", ()=>s), t(e.exports, "tickStep", ()=>f);
    const r = Math.sqrt(50), i = Math.sqrt(10), o = Math.sqrt(2);
    function u(t, e, n) {
        const a = (e - t) / Math.max(0, n), s = Math.floor(Math.log10(a)), f = a / Math.pow(10, s), l = f >= r ? 10 : f >= i ? 5 : f >= o ? 2 : 1;
        let c, h, d;
        return s < 0 ? (d = Math.pow(10, -s) / l, c = Math.round(t * d), h = Math.round(e * d), c / d < t && ++c, h / d > e && --h, d = -d) : (d = Math.pow(10, s) * l, c = Math.round(t / d), h = Math.round(e / d), c * d < t && ++c, h * d > e && --h), h < c && .5 <= n && n < 2 ? u(t, e, 2 * n) : [
            c,
            h,
            d
        ];
    }
    function a(t, e, n) {
        if (!((n = +n) > 0)) return [];
        if ((t = +t) === (e = +e)) return [
            t
        ];
        const r = e < t, [i, o, a] = r ? u(e, t, n) : u(t, e, n);
        if (!(o >= i)) return [];
        const s = o - i + 1, f = new Array(s);
        if (r) {
            if (a < 0) for(let t = 0; t < s; ++t)f[t] = (o - t) / -a;
            else for(let t = 0; t < s; ++t)f[t] = (o - t) * a;
        } else if (a < 0) for(let t = 0; t < s; ++t)f[t] = (i + t) / -a;
        else for(let t = 0; t < s; ++t)f[t] = (i + t) * a;
        return f;
    }
    function s(t, e, n) {
        return u(t = +t, e = +e, n = +n)[2];
    }
    function f(t, e, n) {
        n = +n;
        const r = (e = +e) < (t = +t), i = r ? s(e, t, n) : s(t, e, n);
        return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
    }
}), i.register("f6dVf", function(e, n) {
    t(e.exports, "copy", ()=>g), t(e.exports, "default", ()=>m);
    var r = i("ekiL6"), o = i("bi4KR"), u = i("gnkFs"), a = i("gzbhl"), s = i("ePWrs"), f = i("9krIo"), l = [
        0,
        1
    ];
    function c(t) {
        return t;
    }
    function h(t, e) {
        return (e -= t = +t) ? function(n) {
            return (n - t) / e;
        } : (0, s.default)(isNaN(e) ? NaN : .5);
    }
    function d(t, e, n) {
        var r = t[0], i = t[1], o = e[0], u = e[1];
        return i < r ? (r = h(i, r), o = n(u, o)) : (r = h(r, i), o = n(o, u)), function(t) {
            return o(r(t));
        };
    }
    function p(t, e, n) {
        var i = Math.min(t.length, e.length) - 1, o = new Array(i), u = new Array(i), a = -1;
        for(t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < i;)o[a] = h(t[a], t[a + 1]), u[a] = n(e[a], e[a + 1]);
        return function(e) {
            var n = (0, r.default)(t, e, 1, i) - 1;
            return u[n](o[n](e));
        };
    }
    function g(t, e) {
        return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
    }
    function v() {
        var t, e, n, r, i, s, h = l, g = l, v = o.default, m = c;
        function x() {
            var t, e, n, o = Math.min(h.length, g.length);
            return m !== c && (t = h[0], e = h[o - 1], t > e && (n = t, t = e, e = n), m = function(n) {
                return Math.max(t, Math.min(e, n));
            }), r = o > 2 ? p : d, i = s = null, y;
        }
        function y(e) {
            return null == e || isNaN(e = +e) ? n : (i || (i = r(h.map(t), g, v)))(t(m(e)));
        }
        return y.invert = function(n) {
            return m(e((s || (s = r(g, h.map(t), u.default)))(n)));
        }, y.domain = function(t) {
            return arguments.length ? (h = Array.from(t, f.default), x()) : h.slice();
        }, y.range = function(t) {
            return arguments.length ? (g = Array.from(t), x()) : g.slice();
        }, y.rangeRound = function(t) {
            return g = Array.from(t), v = a.default, x();
        }, y.clamp = function(t) {
            return arguments.length ? (m = !!t || c, x()) : m !== c;
        }, y.interpolate = function(t) {
            return arguments.length ? (v = t, x()) : v;
        }, y.unknown = function(t) {
            return arguments.length ? (n = t, y) : n;
        }, function(n, r) {
            return t = n, e = r, x();
        };
    }
    function m() {
        return v()(c, c);
    }
}), i.register("ekiL6", function(e, n) {
    t(e.exports, "default", ()=>f);
    var r = i("8zdji"), o = i("W4CTv"), u = i("7EiNs");
    const a = (0, o.default)(r.default), s = a.right;
    a.left, (0, o.default)(u.default).center;
    var f = s;
}), i.register("8zdji", function(e, n) {
    function r(t, e) {
        return null == t || null == e ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    t(e.exports, "default", ()=>r);
}), i.register("W4CTv", function(e, n) {
    t(e.exports, "default", ()=>u);
    var r = i("8zdji"), o = i("5303J");
    function u(t) {
        let e, n, i;
        function u(t, r, i = 0, o = t.length) {
            if (i < o) {
                if (0 !== e(r, r)) return o;
                do {
                    const e = i + o >>> 1;
                    n(t[e], r) < 0 ? i = e + 1 : o = e;
                }while (i < o);
            }
            return i;
        }
        return 2 !== t.length ? (e = r.default, n = (e, n)=>(0, r.default)(t(e), n), i = (e, n)=>t(e) - n) : (e = t === r.default || t === o.default ? t : a, n = t, i = t), {
            left: u,
            center: function(t, e, n = 0, r = t.length) {
                const o = u(t, e, n, r - 1);
                return o > n && i(t[o - 1], e) > -i(t[o], e) ? o - 1 : o;
            },
            right: function(t, r, i = 0, o = t.length) {
                if (i < o) {
                    if (0 !== e(r, r)) return o;
                    do {
                        const e = i + o >>> 1;
                        n(t[e], r) <= 0 ? i = e + 1 : o = e;
                    }while (i < o);
                }
                return i;
            }
        };
    }
    function a() {
        return 0;
    }
}), i.register("5303J", function(e, n) {
    function r(t, e) {
        return null == t || null == e ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
    }
    t(e.exports, "default", ()=>r);
}), i.register("7EiNs", function(e, n) {
    function r(t) {
        return null === t ? NaN : +t;
    }
    t(e.exports, "default", ()=>r);
}), i.register("gzbhl", function(e, n) {
    function r(t, e) {
        return t = +t, e = +e, function(n) {
            return Math.round(t * (1 - n) + e * n);
        };
    }
    t(e.exports, "default", ()=>r);
}), i.register("ePWrs", function(e, n) {
    function r(t) {
        return function() {
            return t;
        };
    }
    t(e.exports, "default", ()=>r);
}), i.register("9krIo", function(e, n) {
    function r(t) {
        return +t;
    }
    t(e.exports, "default", ()=>r);
}), i.register("fabdk", function(e, n) {
    t(e.exports, "default", ()=>l);
    var r = i("aE6k7"), o = i("7gBNf"), u = i("ikvwP"), a = i("l1vM3"), s = i("1TXup"), f = i("i4t6x");
    function l(t, e, n, i) {
        var l, c = (0, r.tickStep)(t, e, n);
        switch((i = (0, u.default)(null == i ? ",f" : i)).type){
            case "s":
                var h = Math.max(Math.abs(t), Math.abs(e));
                return null != i.precision || isNaN(l = (0, s.default)(c, h)) || (i.precision = l), (0, o.formatPrefix)(i, h);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != i.precision || isNaN(l = (0, f.default)(c, Math.max(Math.abs(t), Math.abs(e)))) || (i.precision = l - ("e" === i.type));
                break;
            case "f":
            case "%":
                null != i.precision || isNaN(l = (0, a.default)(c)) || (i.precision = l - 2 * ("%" === i.type));
        }
        return (0, o.format)(i);
    }
}), i.register("7gBNf", function(e, n) {
    t(e.exports, "format", ()=>o), t(e.exports, "formatPrefix", ()=>u);
    var r, o, u, a, s = i("jYBVj");
    a = {
        thousands: ",",
        grouping: [
            3
        ],
        currency: [
            "$",
            ""
        ]
    }, r = (0, s.default)(a), o = r.format, u = r.formatPrefix;
}), i.register("jYBVj", function(e, n) {
    t(e.exports, "default", ()=>p);
    var r = i("1QDsO"), o = i("l0OJc"), u = i("cRZ1i"), a = i("ikvwP"), s = i("j0yhO"), f = i("kGAxb"), l = i("lPyuV"), c = i("2nOSB"), h = Array.prototype.map, d = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "\xb5",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y"
    ];
    function p(t) {
        var e = void 0 === t.grouping || void 0 === t.thousands ? c.default : (0, o.default)(h.call(t.grouping, Number), t.thousands + ""), n = void 0 === t.currency ? "" : t.currency[0] + "", i = void 0 === t.currency ? "" : t.currency[1] + "", p = void 0 === t.decimal ? "." : t.decimal + "", g = void 0 === t.numerals ? c.default : (0, u.default)(h.call(t.numerals, String)), v = void 0 === t.percent ? "%" : t.percent + "", m = void 0 === t.minus ? "−" : t.minus + "", x = void 0 === t.nan ? "NaN" : t.nan + "";
        function y(t) {
            var r = (t = (0, a.default)(t)).fill, o = t.align, u = t.sign, c = t.symbol, h = t.zero, y = t.width, w = t.comma, _ = t.precision, b = t.trim, M = t.type;
            "n" === M ? (w = !0, M = "g") : f.default[M] || (void 0 === _ && (_ = 12), b = !0, M = "g"), (h || "0" === r && "=" === o) && (h = !0, r = "0", o = "=");
            var k = "$" === c ? n : "#" === c && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", A = "$" === c ? i : /[%p]/.test(M) ? v : "", N = f.default[M], E = /[defgprs%]/.test(M);
            function S(t) {
                var n, i, a, f = k, c = A;
                if ("c" === M) c = N(t) + c, t = "";
                else {
                    var v = (t = +t) < 0 || 1 / t < 0;
                    if (t = isNaN(t) ? x : N(Math.abs(t), _), b && (t = (0, s.default)(t)), v && 0 == +t && "+" !== u && (v = !1), f = (v ? "(" === u ? u : m : "-" === u || "(" === u ? "" : u) + f, c = ("s" === M ? d[8 + l.prefixExponent / 3] : "") + c + (v && "(" === u ? ")" : ""), E) {
                        for(n = -1, i = t.length; ++n < i;)if (48 > (a = t.charCodeAt(n)) || a > 57) {
                            c = (46 === a ? p + t.slice(n + 1) : t.slice(n)) + c, t = t.slice(0, n);
                            break;
                        }
                    }
                }
                w && !h && (t = e(t, 1 / 0));
                var S = f.length + t.length + c.length, j = S < y ? new Array(y - S + 1).join(r) : "";
                switch(w && h && (t = e(j + t, j.length ? y - c.length : 1 / 0), j = ""), o){
                    case "<":
                        t = f + t + c + j;
                        break;
                    case "=":
                        t = f + j + t + c;
                        break;
                    case "^":
                        t = j.slice(0, S = j.length >> 1) + f + t + c + j.slice(S);
                        break;
                    default:
                        t = j + f + t + c;
                }
                return g(t);
            }
            return _ = void 0 === _ ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _)), S.toString = function() {
                return t + "";
            }, S;
        }
        return {
            format: y,
            formatPrefix: function(t, e) {
                var n = y(((t = (0, a.default)(t)).type = "f", t)), i = 3 * Math.max(-8, Math.min(8, Math.floor((0, r.default)(e) / 3))), o = Math.pow(10, -i), u = d[8 + i / 3];
                return function(t) {
                    return n(o * t) + u;
                };
            }
        };
    }
}), i.register("1QDsO", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("1fLhe");
    function o(t) {
        return (t = (0, r.formatDecimalParts)(Math.abs(t))) ? t[1] : NaN;
    }
}), i.register("1fLhe", function(e, n) {
    function r(t) {
        return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
    }
    function i(t, e) {
        if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var n, r = t.slice(0, n);
        return [
            r.length > 1 ? r[0] + r.slice(2) : r,
            +t.slice(n + 1)
        ];
    }
    t(e.exports, "default", ()=>r), t(e.exports, "formatDecimalParts", ()=>i);
}), i.register("l0OJc", function(e, n) {
    function r(t, e) {
        return function(n, r) {
            for(var i = n.length, o = [], u = 0, a = t[0], s = 0; i > 0 && a > 0 && (s + a + 1 > r && (a = Math.max(1, r - s)), o.push(n.substring(i -= a, i + a)), !((s += a + 1) > r));)a = t[u = (u + 1) % t.length];
            return o.reverse().join(e);
        };
    }
    t(e.exports, "default", ()=>r);
}), i.register("cRZ1i", function(e, n) {
    function r(t) {
        return function(e) {
            return e.replace(/[0-9]/g, function(e) {
                return t[+e];
            });
        };
    }
    t(e.exports, "default", ()=>r);
}), i.register("ikvwP", function(e, n) {
    t(e.exports, "default", ()=>i);
    var r = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function i(t) {
        if (!(e = r.exec(t))) throw new Error("invalid format: " + t);
        var e;
        return new o({
            fill: e[1],
            align: e[2],
            sign: e[3],
            symbol: e[4],
            zero: e[5],
            width: e[6],
            comma: e[7],
            precision: e[8] && e[8].slice(1),
            trim: e[9],
            type: e[10]
        });
    }
    function o(t) {
        this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + "";
    }
    i.prototype = o.prototype, o.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
    };
}), i.register("j0yhO", function(e, n) {
    function r(t) {
        t: for(var e, n = t.length, r = 1, i = -1; r < n; ++r)switch(t[r]){
            case ".":
                i = e = r;
                break;
            case "0":
                0 === i && (i = r), e = r;
                break;
            default:
                if (!+t[r]) break t;
                i > 0 && (i = 0);
        }
        return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
    }
    t(e.exports, "default", ()=>r);
}), i.register("kGAxb", function(e, n) {
    t(e.exports, "default", ()=>a);
    var r = i("1fLhe"), o = i("lPyuV"), u = i("5YhaN"), a = {
        "%": (t, e)=>(100 * t).toFixed(e),
        b: (t)=>Math.round(t).toString(2),
        c: (t)=>t + "",
        d: r.default,
        e: (t, e)=>t.toExponential(e),
        f: (t, e)=>t.toFixed(e),
        g: (t, e)=>t.toPrecision(e),
        o: (t)=>Math.round(t).toString(8),
        p: (t, e)=>(0, u.default)(100 * t, e),
        r: u.default,
        s: o.default,
        X: (t)=>Math.round(t).toString(16).toUpperCase(),
        x: (t)=>Math.round(t).toString(16)
    };
}), i.register("lPyuV", function(e, n) {
    t(e.exports, "prefixExponent", ()=>r), t(e.exports, "default", ()=>u);
    var r, o = i("1fLhe");
    function u(t, e) {
        var n = (0, o.formatDecimalParts)(t, e);
        if (!n) return t + "";
        var i = n[0], u = n[1], a = u - (r = 3 * Math.max(-8, Math.min(8, Math.floor(u / 3)))) + 1, s = i.length;
        return a === s ? i : a > s ? i + new Array(a - s + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + (0, o.formatDecimalParts)(t, Math.max(0, e + a - 1))[0];
    }
}), i.register("5YhaN", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("1fLhe");
    function o(t, e) {
        var n = (0, r.formatDecimalParts)(t, e);
        if (!n) return t + "";
        var i = n[0], o = n[1];
        return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
    }
}), i.register("2nOSB", function(e, n) {
    function r(t) {
        return t;
    }
    t(e.exports, "default", ()=>r);
}), i.register("l1vM3", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("1QDsO");
    function o(t) {
        return Math.max(0, -(0, r.default)(Math.abs(t)));
    }
}), i.register("1TXup", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("1QDsO");
    function o(t, e) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, r.default)(e) / 3))) - (0, r.default)(Math.abs(t)));
    }
}), i.register("i4t6x", function(e, n) {
    t(e.exports, "default", ()=>o);
    var r = i("1QDsO");
    function o(t, e) {
        return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, (0, r.default)(e) - (0, r.default)(t)) + 1;
    }
}), i.register("fOARq", function(t, e) {
    i("cwuwP"), i("e3ER1");
}), i.register("cwuwP", function(t, e) {
    i("aFEgl"), i("cohyw"), i("jAaAF"), i("2oxcP"), i("hOxpW");
    i("dxJVY");
    i("f8M3T"), i("6qNlB"), i("awhiZ"), i("e3ER1"), i("fmeOl");
}), i.register("6qNlB", function(e, n) {
    t(e.exports, "default", ()=>r);
    var r = (t)=>()=>t;
}), i.register("awhiZ", function(e, n) {
    function r(t, { sourceEvent: e , target: n , transform: r , dispatch: i  }) {
        Object.defineProperties(this, {
            type: {
                value: t,
                enumerable: !0,
                configurable: !0
            },
            sourceEvent: {
                value: e,
                enumerable: !0,
                configurable: !0
            },
            target: {
                value: n,
                enumerable: !0,
                configurable: !0
            },
            transform: {
                value: r,
                enumerable: !0,
                configurable: !0
            },
            _: {
                value: i
            }
        });
    }
    t(e.exports, "default", ()=>r);
}), i.register("e3ER1", function(e, n) {
    function r(t, e, n) {
        this.k = t, this.x = e, this.y = n;
    }
    t(e.exports, "Transform", ()=>r), t(e.exports, "identity", ()=>i), r.prototype = {
        constructor: r,
        scale: function(t) {
            return 1 === t ? this : new r(this.k * t, this.x, this.y);
        },
        translate: function(t, e) {
            return 0 === t & 0 === e ? this : new r(this.k, this.x + this.k * t, this.y + this.k * e);
        },
        apply: function(t) {
            return [
                t[0] * this.k + this.x,
                t[1] * this.k + this.y
            ];
        },
        applyX: function(t) {
            return t * this.k + this.x;
        },
        applyY: function(t) {
            return t * this.k + this.y;
        },
        invert: function(t) {
            return [
                (t[0] - this.x) / this.k,
                (t[1] - this.y) / this.k
            ];
        },
        invertX: function(t) {
            return (t - this.x) / this.k;
        },
        invertY: function(t) {
            return (t - this.y) / this.k;
        },
        rescaleX: function(t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function(t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
        }
    };
    var i = new r(1, 0, 0);
    r.prototype;
}), i.register("fmeOl", function(e, n) {
    function r(t) {
        t.stopImmediatePropagation();
    }
    function i(t) {
        t.preventDefault(), t.stopImmediatePropagation();
    }
    t(e.exports, "nopropagation", ()=>r), t(e.exports, "default", ()=>i);
});

},{}]},["3lXQA","8oJt2"], "8oJt2", "parcelRequire94c2")

//# sourceMappingURL=index.f18ee3e4.js.map
