import{m as g,_ as i,b,l as $,c as v,n as B,a as k,u as F}from"./icon-constructor.ae5893dd.js";import{f as d,s as _,o as a,h as p,i as u,u as e,k as s,l,t as o,r as A,q as m,F as C,v as y,c as j,m as w,j as c}from"./vendor.38f51c26.js";var N="/assets/logo.0f49f684.svg",h="/assets/avatar.d0847b89.png";const V={class:"flex h-[140px] w-full items-center justify-between"},I=["src"],S={class:"flex gap-[20px]"},q={class:"flex items-center justify-between gap-[20px]"},L=["src"],P={class:"flex flex-col items-start justify-center gap-[4px]"},T=d({setup(f){const t=_(()=>"\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u043E\u043F\u043E\u043B\u044C\u0441\u043A\u0438\u0439"),n=_(()=>"\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440");return(x,E)=>(a(),p("div",V,[u("img",{src:e(N),alt:"\u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"},null,8,I),u("div",S,[u("button",null,[s(i,{width:"48",height:"48"},{default:l(()=>[s(g)]),_:1})]),u("button",q,[u("img",{class:"h-[56px] w-[56px]",src:e(h),alt:"\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"},null,8,L),u("p",P,[u("span",null,o(e(t)),1),u("span",null,o(e(n)),1)])]),u("button",null,[s(i,null,{default:l(()=>[s(b)]),_:1})])])]))}}),z={class:"flex h-full w-[290px] flex-col items-center rounded-[50px] border-[8px] border-solid border-[#E2DEFF] px-5 pt-[40px]"},G=["src"],H={class:"mt-[20px] text-center"},J=u("br",null,null,-1),K={class:"mt-[20px]"},M={class:"mt-[60px] flex flex-col gap-[20px]"},O={class:"mt-[60px] flex items-center justify-center gap-[10px]"},Q=u("p",null,"\u0412\u044B\u0439\u0442\u0438",-1),R=d({setup(f){const t=_(()=>"konstantinopolsky@mail.ru"),n={name:"\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D",surname:"\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u043E\u043F\u043E\u043B\u044C\u0441\u043A\u0438\u0439"},x=[{icon:v,path:"/k/instructor-schedule",name:"\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B"},{icon:B,path:"/k/applications-for-training",name:"\u0417\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435"},{icon:k,path:"/k/student-table",name:"\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0443\u0447\u0435\u043D\u0438\u043A\u043E\u0432"},{icon:F,path:"/k/list-of-instructors",name:"\u0421\u043F\u0438\u0441\u043E\u043A \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u043E\u0432"}];return(E,Z)=>{const D=A("router-link");return a(),p("div",z,[u("img",{class:"h-[100px] w-[100px]",src:e(h),alt:"\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"},null,8,G),u("p",H,[m(o(n.name)+" ",1),J,m(" "+o(n.surname),1)]),u("p",K,o(e(t)),1),u("div",M,[(a(),p(C,null,y(x,r=>s(D,{key:r.path,class:"flex h-[48px] items-center justify-start gap-[10px]",to:r.path},{default:l(()=>[s(i,null,{default:l(()=>[(a(),j(w(r.icon)))]),_:2},1024),u("p",null,o(r.name),1)]),_:2},1032,["to"])),64))]),u("div",O,[Q,s(i,null,{default:l(()=>[s($)]),_:1})])])}}}),U={class:"flex h-screen flex-col"},W={class:"flex gap-[20px]"},X={class:"flex h-full flex-1 flex-col justify-start gap-[40px] rounded-[50px] border-[8px] border-solid border-[#E2DEFF] p-[40px]"},Y={class:"text-[32px] font-semibold text-[#303030]"},t4=d({setup(f){return(t,n)=>(a(),p("div",U,[s(e(T)),u("div",W,[s(e(R)),u("div",X,[u("p",Y,[c(t.$slots,"header-title")]),c(t.$slots,"filters-place"),c(t.$slots,"main-content"),c(t.$slots,"pagination-palce"),c(t.$slots,"default")])])]))}});export{t4 as _};