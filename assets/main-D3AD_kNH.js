(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();var H={};(function(d){function n(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(o){return typeof o}:n=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n(i)}(function(i,r){n(d)==="object"&&typeof d.nodeName!="string"?r(d):r(i.commonJsStrict={})})(typeof self<"u"?self:void 0,function(i){i.addBackToTop=r;function r(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=o.backgroundColor,c=t===void 0?"#000":t,h=o.cornerOffset,v=h===void 0?20:h,b=o.diameter,W=b===void 0?56:b,g=o.ease,q=g===void 0?Z:g,T=o.id,u=T===void 0?"back-to-top":T,x=o.innerHTML,F=x===void 0?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':x,w=o.onClickScrollTo,y=w===void 0?0:w,S=o.scrollContainer,p=S===void 0?document.body:S,k=o.scrollDuration,C=k===void 0?100:k,_=o.showWhenScrollTopIs,J=_===void 0?1:_,E=o.size,l=E===void 0?W:E,z=o.textColor,K=z===void 0?"#fff":z,L=o.zIndex,U=L===void 0?1:L,$=p===document.body,M=$&&document.documentElement;X();var O=V(),f=!0,G=$?window:p;G.addEventListener("scroll",B),B();function B(){I()>=J?Q():R()}function Q(){f&&(O.className="",f=!1)}function R(){f||(O.className="hidden",f=!0)}function V(){var e=document.createElement("div");return e.id=u,e.className="hidden",e.innerHTML=F,e.addEventListener("click",function(a){a.preventDefault(),Y()}),document.body.appendChild(e),e}function X(){var e=Math.round(.43*l),a=Math.round(.29*l),m="#"+u+"{background:"+c+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+v+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+K+";cursor:pointer;display:block;height:"+l+"px;opacity:1;outline:0;position:fixed;right:"+v+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+l+"px;z-index:"+U+"}#"+u+" svg{display:block;fill:currentColor;height:"+e+"px;margin:"+a+"px auto 0;width:"+e+"px}#"+u+".hidden{bottom:-"+l+"px;opacity:0}",s=document.createElement("style");s.appendChild(document.createTextNode(m)),document.head.insertAdjacentElement("afterbegin",s)}function Y(){var e=typeof y=="function"?y():y,a=window,m=a.performance,s=a.requestAnimationFrame;if(C<=0||typeof m>"u"||typeof s>"u")return N(e);var j=m.now(),D=I(),oo=D-e;s(P);function P(eo){var A=Math.min((eo-j)/C,1);N(D-Math.round(q(A)*oo)),A<1&&s(P)}}function I(){return p.scrollTop||M&&document.documentElement.scrollTop||0}function N(e){p.scrollTop=e,M&&(document.documentElement.scrollTop=e)}function Z(e){return .5*(1-Math.cos(Math.PI*e))}}})})(H);const to=()=>window.innerWidth>768?50:40;H.addBackToTop({diameter:to(),backgroundColor:"#333333",textColor:"#ffffff",scrollDuration:400});
