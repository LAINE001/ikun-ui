import{g as B,f as p,r as d,h as y,o as b,c as g,a as l,b as u,w as h,i as D,d as i}from"./app.3bb2fb06.js";const x=u("h1",{id:"\u4E3B\u9898",tabindex:"-1"},[i("\u4E3B\u9898 "),u("a",{class:"header-anchor",href:"#\u4E3B\u9898","aria-hidden":"true"},"#")],-1),F=u("p",null,"\u652F\u6301\u4E3B\u9898\u5207\u6362\uFF0C\u5185\u90E8\u901A\u8FC7\u8BA1\u7B97\u53D6\u5F97\u5176\u8272\u9636\u503C",-1),V={style:{"margin-top":"15px"}},A=i("\u5207\u6362\u5706\u89D2"),$=u("br",null,null,-1),T=u("br",null,null,-1),N=u("br",null,null,-1),w=i(" \u96E8\u9716\u94C3"),M=u("br",null,null,-1),P=i(" \u5BD2\u8749\u51C4\u5207"),S=u("br",null,null,-1),I=i(" \u5BF9\u957F\u4EAD\u665A"),L=u("br",null,null,-1),J=i(" \u9AA4\u96E8\u521D\u6B47 "),O=[w,M,P,S,I,L,J],R=u("div",{class:"tip custom-block"},[u("p",{class:"custom-block-title"},"TIP"),u("p",null,"\u6587\u6863\u5B8C\u5584\u4E2D...")],-1),z=JSON.parse('{"title":"\u4E3B\u9898","description":"","frontmatter":{},"headers":[],"relativePath":"guide/toggle-theme.md"}'),U={name:"guide/toggle-theme.md"},G=B({...U,setup(j){const m=p(["\u9009\u9879\u4E00","\u9009\u9879\u4E8C"]),k=p(["2px","4px","6px","8px","10px"]),a=p(0),r=(t,o,e=document.documentElement)=>{e.style.setProperty(t,o)},_=(t,o=0)=>{t=String(t).replace(/[^0-9a-f]/gi,""),t.length<6&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`);let e="#",s;for(let n=0;n<3;n++)s=parseInt(t.substr(n*2,2),16),s=Math.round(Math.min(Math.max(0,s+s*o),255)).toString(16),e+=("00"+s).substr(s.length);return e},c=t=>{const o=_(t,.1),e=_(t,-.2),s=_(t,.1);console.log(o,e,s),r("--primary-color",t),r("--primary-color-lighter-1",o),r("--primary-color-darker-1",e),r("--primary-color-hover",s+"3b")},v=()=>{const t=k.value[a.value];r("--default-radius",t),a.value>=4?a.value=0:a.value++};return(t,o)=>{const e=d("ik-button"),s=d("ik-input"),n=d("ik-checkbox"),f=d("ik-checkbox-group"),C=y("loading");return b(),g("div",null,[x,F,l(e,{class:"t-b1",onClick:o[0]||(o[0]=()=>c("#1677ff"))}),l(e,{class:"t-b2",onClick:o[1]||(o[1]=()=>c("#673ab7"))}),l(e,{class:"t-b3",onClick:o[2]||(o[2]=()=>c("#eb920e"))}),l(e,{class:"t-b4",onClick:o[3]||(o[3]=()=>c("#7185f7"))}),u("div",V,[l(e,{type:"primary",onClick:v},{default:h(()=>[A]),_:1}),$,T,l(s),l(f,{modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=E=>m.value=E)},{default:h(()=>[l(n,{label:"\u9009\u9879\u4E00"}),l(n,{label:"\u9009\u9879\u4E8C"}),l(n,{label:"\u9009\u9879\u4E09"})]),_:1},8,["modelValue"]),N,D((b(),g("div",null,O)),[[C,!0]])]),R])}}});export{z as __pageData,G as default};
