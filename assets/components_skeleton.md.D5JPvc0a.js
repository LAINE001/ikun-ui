import{an as F,_ as C,G as y,o as A,b as x,L as r,w as p,e,g as s}from"./chunks/framework.cE8yBDJm.js";const{defineComponent:w}=F,g=w({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:t,openBlock:a,createBlock:o}=F;function n(_,c){const l=t("ik-skeleton");return a(),o(l)}return{render:n,...{}}}(),"render-demo-1":function(){const{resolveComponent:t,openBlock:a,createBlock:o}=F;function n(_,c){const l=t("ik-skeleton");return a(),o(l,{active:""})}return{render:n,...{}}}(),"render-demo-2":function(){const{resolveComponent:t,createVNode:a,createElementVNode:o,openBlock:n,createBlock:i,createCommentVNode:_,createElementBlock:c}=F,l=o("br",null,null,-1),m={key:1},B=[o("span",null,"大家好",-1),o("div",null,"我是练习时长两年半的",-1),o("span",null,"🐥🏀",-1)];function f(u,D){const v=t("ik-switch"),d=t("ik-skeleton");return n(),c("div",null,[a(v,{modelValue:u.showText,"onUpdate:modelValue":D[0]||(D[0]=E=>u.showText=E)},null,8,["modelValue"]),l,u.showText?(n(),i(d,{key:0,active:""})):(n(),c("div",m,B))])}const{ref:k}=F;return{render:f,...{setup(u,{expose:D}){D();const d={showText:k(!1),ref:k};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}}}()}}),q=JSON.parse('{"title":"skeleton","description":"","frontmatter":{},"headers":[],"relativePath":"components/skeleton.md","filePath":"components/skeleton.md"}'),b=e("h1",{id:"skeleton",tabindex:"-1"},[s("skeleton "),e("a",{class:"header-anchor",href:"#skeleton","aria-label":'Permalink to "skeleton"'},"​")],-1),V=e("h2",{id:"基础使用",tabindex:"-1"},[s("基础使用 "),e("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1),T=e("div",{class:"language-vue"},[e("pre",{class:"shiki material-theme-palenight vp-code","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#89DDFF"}},"></"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"  <"),e("span",{style:{color:"#F07178"}},"ik-skeleton"),e("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")])])])],-1),N=e("h2",{id:"显示动画",tabindex:"-1"},[s("显示动画 "),e("a",{class:"header-anchor",href:"#显示动画","aria-label":'Permalink to "显示动画"'},"​")],-1),P=e("p",null,[e("code",null,"active"),s("可配置动画效果")],-1),$=e("div",{class:"language-vue"},[e("pre",{class:"shiki material-theme-palenight vp-code","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#89DDFF"}},"></"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"  <"),e("span",{style:{color:"#F07178"}},"ik-skeleton"),e("span",{style:{color:"#C792EA"}}," active"),e("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")])])])],-1),S=e("h2",{id:"切换效果",tabindex:"-1"},[s("切换效果 "),e("a",{class:"header-anchor",href:"#切换效果","aria-label":'Permalink to "切换效果"'},"​")],-1),O=e("div",{class:"language-vue"},[e("pre",{class:"shiki material-theme-palenight vp-code","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#C792EA"}}," setup"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),e("span",{style:{color:"#89DDFF"}}," {"),e("span",{style:{color:"#BABED8"}}," ref"),e("span",{style:{color:"#89DDFF"}}," }"),e("span",{style:{color:"#89DDFF","font-style":"italic"}}," from"),e("span",{style:{color:"#89DDFF"}}," '"),e("span",{style:{color:"#C3E88D"}},"vue"),e("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#BABED8"}}," showText "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#82AAFF"}}," ref"),e("span",{style:{color:"#BABED8"}},"("),e("span",{style:{color:"#FF9CAC"}},"false"),e("span",{style:{color:"#BABED8"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"  <"),e("span",{style:{color:"#F07178"}},"div"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    <"),e("span",{style:{color:"#F07178"}},"ik-switch"),e("span",{style:{color:"#C792EA"}}," v-model"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#BABED8"}},"showText"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},"></"),e("span",{style:{color:"#F07178"}},"ik-switch"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    <"),e("span",{style:{color:"#F07178"}},"br"),e("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    <"),e("span",{style:{color:"#F07178"}},"ik-skeleton"),e("span",{style:{color:"#89DDFF","font-style":"italic"}}," v-if"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#BABED8"}},"showText"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C792EA"}}," active"),e("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    <"),e("span",{style:{color:"#F07178"}},"div"),e("span",{style:{color:"#89DDFF","font-style":"italic"}}," v-else"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"      <"),e("span",{style:{color:"#F07178"}},"span"),e("span",{style:{color:"#89DDFF"}},">"),e("span",{style:{color:"#BABED8"}},"大家好"),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"span"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"      <"),e("span",{style:{color:"#F07178"}},"div"),e("span",{style:{color:"#89DDFF"}},">"),e("span",{style:{color:"#BABED8"}},"我是练习时长两年半的"),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"div"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"      <"),e("span",{style:{color:"#F07178"}},"span"),e("span",{style:{color:"#89DDFF"}},">"),e("span",{style:{color:"#BABED8"}},"🐥🏀"),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"span"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    </"),e("span",{style:{color:"#F07178"}},"div"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"  </"),e("span",{style:{color:"#F07178"}},"div"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")])])])],-1);function j(t,a,o,n,i,_){const c=y("render-demo-0"),l=y("demo"),m=y("render-demo-1"),h=y("render-demo-2");return A(),x("div",null,[b,V,r(l,{customClass:"undefined",sourceCode:`<script><\/script>
<template>
  <ik-skeleton />
</template>
`},{highlight:p(()=>[T]),default:p(()=>[r(c)]),_:1}),N,P,r(l,{customClass:"undefined",sourceCode:`<script><\/script>
<template>
  <ik-skeleton active />
</template>
`},{highlight:p(()=>[$]),default:p(()=>[r(m)]),_:1}),S,r(l,{customClass:"undefined",sourceCode:`<script setup>
import { ref } from 'vue'
const showText = ref(false)
<\/script>
<template>
  <div>
    <ik-switch v-model="showText"></ik-switch>
    <br />
    <ik-skeleton v-if="showText" active />
    <div v-else>
      <span>大家好</span>
      <div>我是练习时长两年半的</div>
      <span>🐥🏀</span>
    </div>
  </div>
</template>
`},{highlight:p(()=>[O]),default:p(()=>[r(h)]),_:1})])}const z=C(g,[["render",j]]);export{q as __pageData,z as default};
