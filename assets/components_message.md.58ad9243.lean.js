import{q as D,H as F,o as i,c as C,C as a,J as e,E as o,a as n,V as t}from"./chunks/framework.98d8df24.js";const A=a("h1",{id:"消息提示-message",tabindex:"-1"},[n("消息提示 Message "),a("a",{class:"header-anchor",href:"#消息提示-message","aria-label":'Permalink to "消息提示 Message"'},"​")],-1),d=a("h2",{id:"基本使用",tabindex:"-1"},[n("基本使用 "),a("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),g=a("p",null,"直接传入文本可快速调用",-1),_=n("显示消息"),m=t("",3),h={class:"demo-box"},u=n("成功提示"),b=n("警告提示"),x=t("",2),f=n("提 示"),E=t("",3),S=JSON.parse('{"title":"消息提示 Message","description":"","frontmatter":{},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md"}'),k={name:"components/message.md"},V=Object.assign(k,{setup(P){const s=D(),p=()=>{s==null||s.appContext.config.globalProperties.$message("这是消息提示")},c=()=>{s==null||s.appContext.config.globalProperties.$message.success("这是成功提示")},r=()=>{s==null||s.appContext.config.globalProperties.$message.warning("这是警告提示")},y=()=>{s==null||s.appContext.config.globalProperties.$message({type:"info",message:"这是一个提示",duration:5e3})};return(T,v)=>{const l=F("ik-button");return i(),C("div",null,[A,d,g,a("div",null,[e(l,{onClick:p},{default:o(()=>[_]),_:1})]),m,a("div",h,[e(l,{type:"success",onClick:c},{default:o(()=>[u]),_:1}),e(l,{type:"warning",onClick:r},{default:o(()=>[b]),_:1})]),x,a("div",null,[e(l,{type:"primary",onClick:y},{default:o(()=>[f]),_:1})]),E])}}});export{S as __pageData,V as default};