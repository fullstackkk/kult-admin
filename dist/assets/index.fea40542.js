import{r as p,o as d,c as f,a as m,b as _,d as h,e as g}from"./vendor.38f51c26.js";const v=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};v();var y=(a,s)=>{const n=a.__vccOpts||a;for(const[r,e]of s)n[r]=e;return n};const E={};function L(a,s){const n=p("router-view");return d(),f(n)}var b=y(E,[["render",L]]);const O="modulepreload",c={},P="/",i=function(s,n){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=`${P}${r}`,r in c)return;c[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":O,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((u,l)=>{o.addEventListener("load",u),o.addEventListener("error",l)})})).then(()=>s())},k=[{path:"/auth",name:"auth",component:()=>i(()=>import("./auth-page.629ece91.js"),["assets/auth-page.629ece91.js","assets/main-button.35aed8d5.js","assets/vendor.38f51c26.js","assets/icon-constructor.ae5893dd.js","assets/icon-constructor.3a8532d8.css"])},{path:"/k/main",name:"main",component:()=>i(()=>import("./main-page.9d4a2a5e.js"),["assets/main-page.9d4a2a5e.js","assets/icon-constructor.ae5893dd.js","assets/icon-constructor.3a8532d8.css","assets/vendor.38f51c26.js","assets/page-wrapper.753ae526.js"])},{path:"/k/instructor-schedule",name:"instructor-schedule",component:()=>i(()=>import("./instructor-schedule-page.a5ba2510.js"),["assets/instructor-schedule-page.a5ba2510.js","assets/icon-constructor.ae5893dd.js","assets/icon-constructor.3a8532d8.css","assets/vendor.38f51c26.js","assets/page-wrapper.753ae526.js"])},{path:"/k/applications-for-training",name:"applications-for-training",component:()=>i(()=>import("./applications-for-training-page.ae8b2dff.js"),["assets/applications-for-training-page.ae8b2dff.js","assets/icon-constructor.ae5893dd.js","assets/icon-constructor.3a8532d8.css","assets/vendor.38f51c26.js","assets/page-wrapper.753ae526.js","assets/main-button.35aed8d5.js"])},{path:"/k/student-table",name:"student-table",component:()=>i(()=>import("./student-table-page.addda80a.js"),["assets/student-table-page.addda80a.js","assets/vendor.38f51c26.js","assets/icon-constructor.ae5893dd.js","assets/icon-constructor.3a8532d8.css","assets/page-wrapper.753ae526.js"])},{path:"/k/list-of-instructors",name:"list-of-instructors",component:()=>i(()=>import("./list-of-instructors-page.5d2dabb6.js"),["assets/list-of-instructors-page.5d2dabb6.js","assets/icon-constructor.ae5893dd.js","assets/icon-constructor.3a8532d8.css","assets/vendor.38f51c26.js","assets/page-wrapper.753ae526.js"])}],A=m({history:_(),routes:k});h(b).use(A).use(g()).mount("#app");export{y as _};