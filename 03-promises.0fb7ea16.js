function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("eWCmQ");const i=document.querySelector('[name = "delay"]'),l=document.querySelector('[name = "step"]'),d=document.querySelector('[name = "amount"]');function a(e,n){const t=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{t?o(`✅ Fulfilled promise ${e} in ${n}ms`):r(`❌ Rejected promise ${e} in ${n}ms`)}),n)}))}document.querySelector(".form").addEventListener("submit",(n=>{n.preventDefault();let t=+i.value,o=+d.value,r=+l.value;if(t>0&&o>0&&r>=0)for(let n=1;n<=o;n+=1)a(n,t).then((n=>{e(u).Notify.success(n)})).catch((n=>{e(u).Notify.warning(n)})),t+=r}));
//# sourceMappingURL=03-promises.0fb7ea16.js.map
