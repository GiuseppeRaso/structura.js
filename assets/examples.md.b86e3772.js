import{_ as s,c as a,o as n,a as l}from"./app.bb184d7f.js";const i=JSON.parse('{"title":"Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"Simple case with an object","slug":"simple-case-with-an-object","link":"#simple-case-with-an-object","children":[]},{"level":2,"title":"Simple case with an array","slug":"simple-case-with-an-array","link":"#simple-case-with-an-array","children":[]},{"level":2,"title":"Simple case with a class instance","slug":"simple-case-with-a-class-instance","link":"#simple-case-with-a-class-instance","children":[]},{"level":2,"title":"Simple case with a Date object","slug":"simple-case-with-a-date-object","link":"#simple-case-with-a-date-object","children":[]}],"relativePath":"examples.md"}'),p={name:"examples.md"},o=l(`<h1 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h1><h2 id="simple-case-with-an-object" tabindex="-1">Simple case with an object <a class="header-anchor" href="#simple-case-with-an-object" aria-hidden="true">#</a></h2><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">produce</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">structurajs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myObj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">produce</span><span style="color:#A6ACCD;">(myObj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">draft</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">draft</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">myObj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="simple-case-with-an-array" tabindex="-1">Simple case with an array <a class="header-anchor" href="#simple-case-with-an-array" aria-hidden="true">#</a></h2><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">produce</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">structurajs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myArr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">produce</span><span style="color:#A6ACCD;">(myArr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">draft</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">draft</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">myArr[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">result[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><h2 id="simple-case-with-a-class-instance" tabindex="-1">Simple case with a class instance <a class="header-anchor" href="#simple-case-with-a-class-instance" aria-hidden="true">#</a></h2><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">produce</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">structurajs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyClass</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">count</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> myClass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">produce</span><span style="color:#A6ACCD;">(myInstance</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">draft</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">myInstance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">increment</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">myInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><h2 id="simple-case-with-a-date-object" tabindex="-1">Simple case with a Date object <a class="header-anchor" href="#simple-case-with-a-date-object" aria-hidden="true">#</a></h2><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">produce</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">structurajs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> Date</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">produce</span><span style="color:#A6ACCD;">(myDate</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">draft</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">draft</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setDate</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">draft</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getDate</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// add a day</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">myDate</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(c,r,y,D,C,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
