import{_ as e,c as t,o as r,a}from"./app.706858b5.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"index.md"}'),s={name:"index.md"},i=a('<h1 align="center">Structura.js</h1><p align="center"><img id="structura" alt="structura" style="width:420px;" src="https://github.com/GiuseppeRaso/structura.js/raw/master/docs/public/structural-sharing-1.jfif"></p><h2 style="display:none;" align="center">You can find complete docs at <a href="https://giusepperaso.github.io/structura.js/">https://giusepperaso.github.io/structura.js/</a></h2><p><strong>Structura.js</strong> is a very fast and lightweight Typescript library which allows to create immutable states with a mutable syntax. It is based on the idea of <a href="https://blog.klipse.tech/javascript/2021/02/26/structural-sharing-in-javascript.html#what-is-structural-sharing" target="_blank" rel="noreferrer">structural sharing</a>.</p><p>The library is very similar to <a href="https://immerjs.github.io/immer/" target="_blank" rel="noreferrer">Immer.js</a>, but it has some advantages over it:</p><ul><li>up to ~22x more performant, even faster than <a href="https://github.com/immutable-js/immutable-js" target="_blank" rel="noreferrer">Immutable</a> most of the time</li><li>freezes the object only at compile time by leveraging Typescript, while other libraries freeze the object at runtime with Object.freeze, which may be slow expecially for nested objects</li><li>circular and multiple references are supported</li><li>can return and modify the draft at the same time</li><li>flexibility in the return type of the producer</li><li>no need to toggle on/off features, everything is enabled by default</li><li>does support transpositions and moves of portions of the draft</li></ul><p>The library is actually in alpha state. It is probably already usable (many complex scenarios are already covered by tests), but expect the APIs and the types to change in the future.</p>',7),o=[i];function l(n,c,h,u,p,m){return r(),t("div",null,o)}const b=e(s,[["render",l]]);export{f as __pageData,b as default};
