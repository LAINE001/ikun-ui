import{a5 as a,_ as g,H as k,o as w,c as T,J as _,E as f,C as o,a as s}from"./chunks/framework.272aa557.js";const{defineComponent:S}=a,V=S({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:n,createVNode:t,createElementVNode:y,createTextVNode:i,withCtx:C,openBlock:A,createElementBlock:r}=a,p=y("br",null,null,-1),h=i("打开锁屏");function v(l,c){const e=n("ik-switch"),D=n("ik-button"),u=n("ik-lock-screen");return A(),r("div",null,[t(e,{"true-text":"显示时间",modelValue:l.showTime,"onUpdate:modelValue":c[0]||(c[0]=m=>l.showTime=m)},null,8,["modelValue"]),p,t(D,{onClick:l.toggleLockScreen},{default:C(()=>[h]),_:1},8,["onClick"]),t(u,{showTime:l.showTime,onOnUnlock:l.onUnlock,visible:l.visible},null,8,["showTime","onOnUnlock","visible"])])}const{defineComponent:E}=a,{ref:F}=a;return{render:v,...E({setup(l,{expose:c}){c();const e=F(!1),D=F(!1),d={visible:e,showTime:D,toggleLockScreen:()=>{e.value=!0},onUnlock:b=>{console.log(b),e.value=!1},ref:F};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}})}}()}}),O=JSON.parse('{"title":"锁屏 LockScreen","description":"","frontmatter":{},"headers":[],"relativePath":"components/lockScreen.md","filePath":"components/lockScreen.md"}'),U=o("h1",{id:"锁屏-lockscreen",tabindex:"-1"},[s("锁屏 LockScreen "),o("a",{class:"header-anchor",href:"#锁屏-lockscreen","aria-label":'Permalink to "锁屏 LockScreen"'},"​")],-1),x=o("div",{class:"language-vue"},[o("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"script"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"lang"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"ts"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"setup"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#A6ACCD"}},"ref"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"}"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#C3E88D"}},"vue"),o("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#C792EA"}},"const"),o("span",{style:{color:"#A6ACCD"}}," visible "),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#82AAFF"}},"ref"),o("span",{style:{color:"#A6ACCD"}},"("),o("span",{style:{color:"#FF9CAC"}},"false"),o("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#C792EA"}},"const"),o("span",{style:{color:"#A6ACCD"}}," showTime "),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#82AAFF"}},"ref"),o("span",{style:{color:"#A6ACCD"}},"("),o("span",{style:{color:"#FF9CAC"}},"false"),o("span",{style:{color:"#A6ACCD"}},")")]),s(`
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
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"ik-switch"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"true-text"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"显示时间"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"v-model"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"showTime"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"ik-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"@click"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"toggleLockScreen"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"打开锁屏"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"ik-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"ik-lock-screen"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},":showTime"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"showTime"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"@onUnlock"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"onUnlock"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},":visible"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"visible"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")])])])],-1);function L(n,t,y,i,C,A){const r=k("render-demo-0"),p=k("demo");return w(),T("div",null,[U,_(p,{customClass:"undefined",sourceCode:`<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const showTime = ref(false)
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
    <ik-switch true-text="显示时间" v-model="showTime" />
    <br />
    <ik-button @click="toggleLockScreen">打开锁屏</ik-button>
    <ik-lock-screen :showTime="showTime" @onUnlock="onUnlock" :visible="visible" />
  </div>
</template>
`},{highlight:f(()=>[x]),default:f(()=>[_(r)]),_:1})])}const P=g(V,[["render",L]]);export{O as __pageData,P as default};