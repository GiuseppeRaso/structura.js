import{_ as e,c as t,o as a,a as s}from"./app.bb184d7f.js";const y=JSON.parse('{"title":"When to use","description":"","frontmatter":{},"headers":[{"level":2,"title":"Use Sructura over Immer in those cases:","slug":"use-sructura-over-immer-in-those-cases","link":"#use-sructura-over-immer-in-those-cases","children":[]},{"level":2,"title":"Disadvantages compared to Immer:","slug":"disadvantages-compared-to-immer","link":"#disadvantages-compared-to-immer","children":[]}],"relativePath":"when-to-use.md"}'),r={name:"when-to-use.md"},i=s('<h1 id="when-to-use" tabindex="-1">When to use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h1><h2 id="use-sructura-over-immer-in-those-cases" tabindex="-1">Use Sructura over Immer in those cases: <a class="header-anchor" href="#use-sructura-over-immer-in-those-cases" aria-hidden="true">#</a></h2><ul><li>performance is important to you and immutable states are becoming a bottleneck in your application</li><li>the state you have to deal with is possibly very huge and complex</li><li>in serverless functions or in the cloud, because you&#39;d want to cut used resources as much as possible</li><li>circular and multiple references may be present in your state</li><li>you prefer not being limited in the return type of the producer</li><li>modifying the draft and return a portion of it in the same producer is needed</li><li>you don&#39;t want to think about enabling/disabling features you may or may not need</li><li>forking the library to adapt it to your use case, because the code is small and easy enough to reason about</li></ul><h2 id="disadvantages-compared-to-immer" tabindex="-1">Disadvantages compared to Immer: <a class="header-anchor" href="#disadvantages-compared-to-immer" aria-hidden="true">#</a></h2><ul><li>less mature, less stable (Structura is still in alpha)</li><li>test coverage is still not 100%</li><li>docs could be better</li><li>does not support IE and pre ES6 browsers and will never do</li><li>does not yet support <s>some proxy traps and</s> some data structures that Immer supports, but this is very likely to change in the future</li><li>generated patches are not compliant to any RFC, but <s>in the future this may change or there could be a converter</s> there is already a converter included in the library; besides applyPatches also accept standard JSON Patches</li></ul>',5),o=[i];function n(l,d,u,c,h,m){return a(),t("div",null,o)}const _=e(r,[["render",n]]);export{y as __pageData,_ as default};