import{a5 as n,_ as f,H as d,o as g,c as b,J as k,E as m,C as o,a as s}from"./chunks/framework.fa0c9293.js";const{defineComponent:h}=n,E=h({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:p,resolveComponent:t,withCtx:F,createVNode:c,openBlock:D,createElementBlock:y}=n,a=p("打开锁屏");function r(e,C){const l=t("ik-button"),A=t("ik-lock-screen");return D(),y("div",null,[c(l,{onClick:e.toggleLockScreen},{default:F(()=>[a]),_:1},8,["onClick"]),c(A,{onOnUnlock:e.onUnlock,visible:e.visible},null,8,["onOnUnlock","visible"])])}const{defineComponent:_}=n,{ref:i}=n;return{render:r,..._({setup(e,{expose:C}){C();const l=i(!1),u={visible:l,toggleLockScreen:()=>{l.value=!0},onUnlock:v=>{console.log(v),l.value=!1},ref:i};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}})}}()}}),V=JSON.parse('{"title":"锁屏 LockScreen","description":"","frontmatter":{},"headers":[],"relativePath":"components/lockScreen.md","filePath":"components/lockScreen.md"}'),S=o("h1",{id:"锁屏-lockscreen",tabindex:"-1"},[s("锁屏 LockScreen "),o("a",{class:"header-anchor",href:"#锁屏-lockscreen","aria-label":'Permalink to "锁屏 LockScreen"'},"​")],-1),U=o("div",{class:"language-vue"},[o("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"script"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"lang"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"ts"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"setup"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#A6ACCD"}},"ref"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"}"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#C3E88D"}},"vue"),o("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#C792EA"}},"const"),o("span",{style:{color:"#A6ACCD"}}," visible "),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#82AAFF"}},"ref"),o("span",{style:{color:"#A6ACCD"}},"("),o("span",{style:{color:"#FF9CAC"}},"false"),o("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#C792EA"}},"const"),o("span",{style:{color:"#A6ACCD"}}," toggleLockScreen "),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"()"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"=>"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F07178"}},"  "),o("span",{style:{color:"#A6ACCD"}},"visible"),o("span",{style:{color:"#89DDFF"}},"."),o("span",{style:{color:"#A6ACCD"}},"value"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#FF9CAC"}},"true")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#C792EA"}},"const"),o("span",{style:{color:"#A6ACCD"}}," onUnlock "),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"("),o("span",{style:{color:"#A6ACCD","font-style":"italic"}},"pwd"),o("span",{style:{color:"#89DDFF"}},")"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"=>"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F07178"}},"  "),o("span",{style:{color:"#A6ACCD"}},"console"),o("span",{style:{color:"#89DDFF"}},"."),o("span",{style:{color:"#82AAFF"}},"log"),o("span",{style:{color:"#F07178"}},"("),o("span",{style:{color:"#A6ACCD"}},"pwd"),o("span",{style:{color:"#F07178"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F07178"}},"  "),o("span",{style:{color:"#A6ACCD"}},"visible"),o("span",{style:{color:"#89DDFF"}},"."),o("span",{style:{color:"#A6ACCD"}},"value"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#FF9CAC"}},"false")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"script"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"ik-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"@click"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"toggleLockScreen"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"打开锁屏"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"ik-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"ik-lock-screen"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"@onUnlock"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"onUnlock"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},":visible"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"visible"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")])])])],-1);function x(p,t,F,c,D,y){const a=d("render-demo-0"),r=d("demo");return g(),b("div",null,[S,k(r,{customClass:"undefined",sourceCode:`<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const toggleLockScreen = () => {
  visible.value = true
}
const onUnlock = (pwd) => {
  console.log(pwd)
  visible.value = false
}
<\/script>
<template>
  <div>
    <ik-button @click="toggleLockScreen">打开锁屏</ik-button>
    <ik-lock-screen @onUnlock="onUnlock" :visible="visible" />
  </div>
</template>
`},{highlight:m(()=>[U]),default:m(()=>[k(a)]),_:1})])}const w=f(E,[["render",x]]);export{V as __pageData,w as default};