import{g as B,f as p,r as d,h as y,o as b,c as h,a as s,w as m,b as n,i as D,d as i}from"./app.9f20925d.js";const x=n("h1",{id:"\u4E3B\u9898",tabindex:"-1"},[i("\u4E3B\u9898 "),n("a",{class:"header-anchor",href:"#\u4E3B\u9898","aria-hidden":"true"},"#")],-1),A=n("p",null,"\u652F\u6301\u4E3B\u9898\u5207\u6362\uFF0C\u5185\u90E8\u901A\u8FC7\u8BA1\u7B97\u53D6\u5F97\u5176\u8272\u9636\u503C",-1),F=i("\u5207\u6362\u5706\u89D2"),V={style:{"margin-top":"15px"}},$=i("\u4E3B\u9898\u6309\u94AE"),N=n("br",null,null,-1),T=n("br",null,null,-1),w=n("br",null,null,-1),M=i(" \u96E8\u9716\u94C3"),S=n("br",null,null,-1),L=i(" \u5BD2\u8749\u51C4\u5207"),P=n("br",null,null,-1),I=i(" \u5BF9\u957F\u4EAD\u665A"),J=n("br",null,null,-1),O=i(" \u9AA4\u96E8\u521D\u6B47 "),R=[M,S,L,P,I,J,O],z=JSON.parse('{"title":"\u4E3B\u9898","description":"","frontmatter":{},"headers":[],"relativePath":"guide/toggle-theme.md"}'),U={name:"guide/toggle-theme.md"},G=B({...U,setup(j){const g=p(["\u9009\u9879\u4E00","\u9009\u9879\u4E8C"]),k=p(["2px","4px","6px","8px","10px"]),a=p(0),r=(t,o,e=document.documentElement)=>{e.style.setProperty(t,o)},_=(t,o=0)=>{t=String(t).replace(/[^0-9a-f]/gi,""),t.length<6&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`);let e="#",u;for(let l=0;l<3;l++)u=parseInt(t.substr(l*2,2),16),u=Math.round(Math.min(Math.max(0,u+u*o),255)).toString(16),e+=("00"+u).substr(u.length);return e},c=t=>{const o=_(t,.1),e=_(t,-.2),u=_(t,.1);console.log(o,e,u),r("--primary-color",t),r("--primary-color-lighter-1",o),r("--primary-color-darker-1",e),r("--primary-color-hover",u+"3b")},f=()=>{const t=k.value[a.value];r("--default-radius",t),a.value>=4?a.value=0:a.value++};return(t,o)=>{const e=d("ik-button"),u=d("ik-input"),l=d("ik-checkbox"),v=d("ik-checkbox-group"),E=y("loading");return b(),h("div",null,[x,A,s(e,{class:"t-b1",onClick:o[0]||(o[0]=()=>c("#1677ff"))}),s(e,{class:"t-b2",onClick:o[1]||(o[1]=()=>c("#673ab7"))}),s(e,{class:"t-b3",onClick:o[2]||(o[2]=()=>c("#eb920e"))}),s(e,{class:"t-b4",onClick:o[3]||(o[3]=()=>c("#7185f7"))}),s(e,{class:"t-b4",onClick:o[4]||(o[4]=()=>f())},{default:m(()=>[F]),_:1}),n("div",V,[s(e,{type:"primary"},{default:m(()=>[$]),_:1}),N,T,s(u),s(v,{modelValue:g.value,"onUpdate:modelValue":o[5]||(o[5]=C=>g.value=C)},{default:m(()=>[s(l,{label:"\u9009\u9879\u4E00"}),s(l,{label:"\u9009\u9879\u4E8C"}),s(l,{label:"\u9009\u9879\u4E09"})]),_:1},8,["modelValue"]),w,D((b(),h("div",null,R)),[[E,!0]])])])}}});export{z as __pageData,G as default};
