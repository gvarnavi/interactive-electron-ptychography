"use strict";(self.webpackChunkinteractive_ptycho=self.webpackChunkinteractive_ptycho||[]).push([[4195],{79941:(e,t,n)=>{n.r(t),n.d(t,{default:()=>re});var i=n(67294),a=n(90512),r=n(52263),l=n(16386),s=n(33692);const o={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",heroInteractive:"heroInteractive_Bmjd"};var u=n(57940);function c(e){return e`# Ptychography Helper Functions`}function d(e){return e.html`<hr class="hideable-md">`}function p(e){return e("https://cdn.jsdelivr.net/gh/nicolaspanel/numjs@0.16/dist/numjs.min.js")}function f(e){return e("https://bundle.run/ndarray-ops@1.2.2")}function h(e){return e("https://bundle.run/ndarray-complex@1.0.3")}function _(e,t){return function(n,i){let a=e.zeros(n.shape);return t.atan2(a.selection,n.selection,i.selection),a}}function b(e,t){return function(n,i){let a=e.zeros(n.shape);return t.lts(a.selection,n.selection,i),t.bandseq(a.selection,1),a}}function m(e,t,n){return class i{constructor(t){this.shape=t;let n=t.slice();n.push(2),this.data=e.zeros(n),this._nulls=new Array(t.length).fill(null)}re(){return this.data.pick(...this._nulls,0)}im(){return this.data.pick(...this._nulls,1)}abs(){return e.sqrt(this.abs_sqr())}abs_sqr(){return e.add(this.re().multiply(this.re()),this.im().multiply(this.im()))}angle(){return t(this.im(),this.re())}clone(){let e=new i(this.shape);return e.data=this.data.clone(),e}conjugate(){let t=this.re().clone(),a=this.im().clone();n.conjeq(t.selection,a.selection);let r=new i(this.shape);return r.data=e.stack([t,a],-1),r}multiply(t){let a=this.re().clone(),r=this.im().clone(),l=t.re(),s=t.im();n.muleq(a.selection,r.selection,l.selection,s.selection);let o=new i(this.shape);return o.data=e.stack([a,r],-1),o}real_multiply(t){let a=this.re().clone(),r=this.im().clone(),l=t,s=e.zeros(t.shape);n.muleq(a.selection,r.selection,l.selection,s.selection);let o=new i(this.shape);return o.data=e.stack([a,r],-1),o}scalar_multiply(t,a){let r=this.re().clone(),l=this.im().clone();n.mulseq(r.selection,l.selection,t,a);let s=new i(this.shape);return s.data=e.stack([r,l],-1),s}add(t){let a=this.re().clone(),r=this.im().clone(),l=t.re(),s=t.im();n.addeq(a.selection,r.selection,l.selection,s.selection);let o=new i(this.shape);return o.data=e.stack([a,r],-1),o}subtract(t){let a=this.re().clone(),r=this.im().clone(),l=t.re(),s=t.im();n.subeq(a.selection,r.selection,l.selection,s.selection);let o=new i(this.shape);return o.data=e.stack([a,r],-1),o}}}function g(e){return function(t,n){let i=e.zeros(t),a=1/(t*n),r=1+((t-1)/2|0);for(var l=0;l<r;l++)i.set(l,l*a);for(l=r;l<t;l++)i.set(l,(l-t)*a);return i}}function v(e){return function(t,n){let i=[t.size,n.size],a=[];a[0]=e.zeros(i),a[1]=e.zeros(i);for(let e=0;e<i[1];e++)for(let r=0;r<i[0];r++)a[0].set(r,e,t.get(r)),a[1].set(r,e,n.get(e));return a}}function y(e){return function(t){let[n,i]=t.shape,a=n/2|0,r=i/2|0,l=e.zeros([n,i]);return l.slice([null,a],[null,r]).assign(t.slice(-a,-r),!1),l.slice([null,a],r).assign(t.slice(-a,[null,r]),!1),l.slice(-a,-r).assign(t.slice([null,a],[null,r]),!1),l.slice(-a,[null,r]).assign(t.slice([null,a],-r),!1),l}}function x(e,t,n,i){return function(a,r){let[l,s]=a.shape,[o,u]=r,c=new e([l,s]);c.data=t.fft(a.data);let d=n(l,1),p=n(s,1),[f,h]=i(d,p),_=-2*Math.PI,b=t.add(f.multiply(o),h.multiply(u)).multiply(_),m=new e([l,s]),g=t.cos(b),v=t.sin(b);m.data=t.stack([g,v],-1);let y=c.multiply(m);return y.data=t.ifft(y.data),y}}function w(e,t,n,i){return function(a,r){let[l,s]=a.shape,[o,u]=r,c=new e([l,s]);c.data=t.fft(a.data);let d=n(l,1),p=n(s,1),[f,h]=i(d,p),_=-2*Math.PI,b=t.add(f.multiply(o),h.multiply(u)).multiply(_),m=new e([l,s]),g=t.cos(b),v=t.sin(b);m.data=t.stack([g,v],-1);let y=c.multiply(m),x=new e([l,s]);return x.data=t.ifft(y.data),[y,x]}}function z(e){return function(t,[n,i]){let a=new e([n,i]),r=n/2|0,l=i/2|0;return a.data.slice([null,r],[null,l],null).assign(t.slice([null,r],[null,l],null),!1),a.data.slice(-r,[null,l],null).assign(t.slice(-r,[null,l],null),!1),a.data.slice([null,r],-l,null).assign(t.slice([null,r],-l,null),!1),a.data.slice(-r,-l,null).assign(t.slice(-r,-l,null),!1),a}}function j(e,t,n){return function(i,a){let[r,l]=i.shape;console.log(r);let s=new e([r,l]);s.data=t.fft(i.data);let[o,u]=[r/a|0,l/a|0],c=n(s.data,[o,u]);return c.data=t.ifft(c.data),c}}function k(){return function(e){let t=9.109383*1e-30,n=1602177e-24,i=299792458;return 662607e-39/Math.sqrt(2*t*n*e)/Math.sqrt(1+n*e/2/t/i/i)*1e11}}function q(e){return function(t){let n=9.109383*1e-30,i=1602177e-24,a=299792458,r=e(t);return 2*Math.PI/r/t*(n*a*a+i*t)/(2*n*a*a+i*t)}}function P(e,t,n,i,a,r,l){return class{constructor(t,n,i,a,r,l=0,s=Math.PI/2){this._gpts=t.slice(),this._sampling=n.slice(),this._energy=i,this._wavelength=e(i),this._semiangle_cutoff=a,this._defocus=r,this._stig=l,this._stig_angle=s}_get_scattering_angles(){let e=t(this._gpts[0],this._sampling[0]),r=t(this._gpts[1],this._sampling[1]),[l,s]=n(e,r);return[i.sqrt(i.add(l.multiply(l.multiply(this._wavelength*this._wavelength)),s.multiply(s.multiply(this._wavelength*this._wavelength)))),a(s,l)]}_evaluate_aberrations(e,t){let n=Math.PI/this._wavelength,a=i.cos(t.subtract(this._stig_angle).multiply(2)).multiply(this._stig).add(this._defocus),l=e.multiply(e).multiply(a).multiply(n),s=i.cos(l),o=i.sin(l),u=new r(l.shape);return u.data=i.stack([s,o],-1),u}_evaluate_aperture(e,t){let n=this._semiangle_cutoff/1e3,a=new r(e.shape),s=l(e,n);return a.data=i.stack([s,i.zeros(e.shape)],-1),a}build(){let[e,t]=this._get_scattering_angles(),n=this._evaluate_aberrations(e,t),a=this._evaluate_aperture(e,t),l=n.multiply(a),s=new r(l.shape);s.data=i.ifft(l.data);let o=Math.sqrt(s.abs_sqr().sum());return this._array=s.scalar_multiply(1/o,0),this._fourier_array=l,this._aberrations=n,this._aperture=a,this}}}function D(e){return e`https://observablehq.com/@mootari/notebook-data`}function C(e,t){const n=e.module();return n.variable(t()).define(["md"],c),n.variable(t()).define(["htl"],d),n.variable(t("nj")).define("nj",["require"],p),n.variable(t("ops")).define("ops",["require"],f),n.variable(t("cops")).define("cops",["require"],h),n.variable(t("atan2")).define("atan2",["nj","ops"],_),n.variable(t("lt_int_s")).define("lt_int_s",["nj","ops"],b),n.variable(t("ComplexNDArray")).define("ComplexNDArray",["nj","atan2","cops"],m),n.variable(t("fftfreq")).define("fftfreq",["nj"],g),n.variable(t("meshgrid2D")).define("meshgrid2D",["nj"],v),n.variable(t("fftshift2D")).define("fftshift2D",["nj"],y),n.variable(t("fourier_shift")).define("fourier_shift",["ComplexNDArray","nj","fftfreq","meshgrid2D"],x),n.variable(t("fourier_shift_extended")).define("fourier_shift_extended",["ComplexNDArray","nj","fftfreq","meshgrid2D"],w),n.variable(t("corner_crop")).define("corner_crop",["ComplexNDArray"],z),n.variable(t("fourier_downsample")).define("fourier_downsample",["ComplexNDArray","nj","corner_crop"],j),n.variable(t("electron_wavelength_angstroms")).define("electron_wavelength_angstroms",k),n.variable(t("electron_interaction_parameter")).define("electron_interaction_parameter",["electron_wavelength_angstroms"],q),n.variable(t("ComplexProbe")).define("ComplexProbe",["electron_wavelength_angstroms","fftfreq","meshgrid2D","nj","atan2","ComplexNDArray","lt_int_s"],P),n.variable(t()).define(["md"],D),n}function I(e){return e`# Complex Electron Probe`}function N(e){return e.form({visualization_checkboxes:e.checkbox(["probe","Fourier probe"],{value:["probe","Fourier probe"],label:"panels"}),width:e.range([100,500],{value:250,step:1,label:"width"})})}function A(e,t,n,i,a,r,l,s){let o=12.5,u=[];e.visualization_checkboxes.includes("probe")&&(u=[...u,t]),e.visualization_checkboxes.includes("Fourier probe")&&(u=[...u,n]);let c=u.length,d=e.width*c,p=e.width;return i.plot({width:d,height:p-25,padding:0,margin:0,x:{axis:null,range:[0,d]},y:{axis:null,range:[0,p]},marks:[i.cell(a.cross(a.range(c),[0]).map((([e,t])=>({a:e,b:t}))),{x:"a",y:"b",render:(e,{x:t,y:n},{x:i,y:c,channels:{x:{value:d},y:{value:p}}})=>a.create("svg:g").call((a=>a.selectAll().data(e).join("g").attr("transform",(e=>`translate(${i[e]+o},${c[e]})`)).append((e=>r(u,d[e],t.bandwidth()-25,n.bandwidth()-25))))).on("pointerenter pointermove",(e=>{let i=l(a.pointer(e),[o,0],[t.bandwidth()-25,n.bandwidth()-25]);null!==i&&(s.value=[i[0],i[1]])})).node()})]})}function F(e,t,n,i,a,r){let l=[];e.visualization_checkboxes.includes("probe")&&(l=[...l,t]),e.visualization_checkboxes.includes("Fourier probe")&&(l=[...l,n]);let s=l.length,o=e.width*s;return i.plot({width:o,height:50,padding:0,margin:0,x:{axis:null,range:[0,o]},y:{axis:null,range:[0,50]},marks:[i.cell(a.cross(a.range(s),[0]).map((([e,t])=>({a:e,b:t}))),{x:"a",y:"b",render:(e,{x:t,y:n},{x:i,y:s,channels:{x:{value:o},y:{value:u}}})=>a.create("svg:g").call((a=>a.selectAll().data(e).join("g").attr("transform",(e=>`translate(${i[e]+12.5},${s[e]})`)).append((e=>r(l,o[e],t.bandwidth()-25,n.bandwidth()))))).node()})]})}function M(e){return e.form({defocus:e.range([-250,250],{value:100,step:1,label:"defocus [A]"}),stig:e.range([0,250],{value:25,step:1,label:"stig [A]"}),stig_angle:e.range([0,Math.PI],{value:.35,step:.05,label:"stig angle [rad]"})})}function $(e){return e.form({semiangle:e.range([5,40],{value:30,step:.5,label:"semiangle [mrad]"}),energy:e.range([60,300],{value:200,step:10,label:"voltage [keV]"}),sampling:e.range([.05,.25],{value:.25,step:.0125,label:"sampling [A]"})})}function B(e){return e.html`<hr class="hideable-md">`}function G(){return 128}function R(e,t,n,i){return new e([t,t],[n.sampling,n.sampling],1e3*n.energy,n.semiangle,i.defocus,i.stig,i.stig_angle).build()}function E(e,t,n){return e(t._array,[n[1],-n[0]])}function H(){return[0,0]}function S(e){return e._array.abs_sqr().max()}function V(e,t,n,i){if(e.visualization_checkboxes.includes("probe")){let e=t(n[1].abs_sqr());return{label:"                               Probe intensity",scheme:"Greys",domain:[0,i],width:e.shape[1],height:e.shape[0],values:e.flatten().tolist()}}}function W(){return["#000000","#001f4d","#003786","#0e58a8","#217eb8","#30a4ca","#54c8df","#9be4ef","#e1e9d1","#f3d573","#e7b000","#da8200","#c65400","#ac2301","#820000","#4c0000","#040100"]}function J(e,t){return e.interpolateRgbBasis(t)}function K(e,t,n,i,a){if(e.visualization_checkboxes.includes("Fourier probe")){let e=t(n[0].angle().multiply(i._aperture.abs()));return{label:"Fourier probe angle [rad]",interpolate:a,type:"linear",width:e.shape[1],height:e.shape[0],values:e.flatten().tolist()}}}function L(e,t){return{label:"                                                  Fourier probe angle [rad]",domain:[-Math.PI,Math.PI],interpolate:e,type:"linear",width:t[0].shape[1],height:t[0].shape[0]}}function O(e){return(t,n,i,a)=>e.plot({width:i,height:a,margin:0,x:{axis:null},y:{axis:null},color:{label:t[n].label,domain:t[n].domain,range:t[n].range,interpolate:t[n].interpolate,scheme:t[n].scheme,type:t[n].type,exponent:t[n].exponent,style:{background:"none"}},style:{background:"none"},marks:[e.raster(t[n].values,{width:t[n].width,height:t[n].height}),e.frame({strokeWidth:1})]})}function Q(e){return(t,n,i,a)=>e.legend({width:i,height:a,margin:0,label:t[n].label,color:{domain:t[n].domain,scheme:t[n].scheme,type:t[n].type,range:t[n].range,exponent:t[n].exponent,interpolate:t[n].interpolate,style:{background:"none"}}})}function T(e){return function([t,n],[i,a],[r,l]){let[s,o]=[(t-i)/r,(n-a)/l];return s>1?null:[s*e-e/2,o*e-e/2]}}function U(e,t){const n=e.module();n.variable(t()).define(["md"],I),n.variable(t("viewof viz_inputs")).define("viewof viz_inputs",["Inputs"],N),n.variable(t("viz_inputs")).define("viz_inputs",["Generators","viewof viz_inputs"],((e,t)=>e.input(t))),n.variable(t("main_visualization")).define("main_visualization",["viz_inputs","probe_dictionary","probe_fft_dictionary","Plot","d3","raster_subplot","left_panel_pixels_to_pos","mutable probe_xy"],A),n.variable(t("visualization_legends")).define("visualization_legends",["viz_inputs","probe_dictionary","probe_fft_dictionary_dummy","Plot","d3","legend_subplot"],F),n.variable(t("viewof sim_inputs_a")).define("viewof sim_inputs_a",["Inputs"],M),n.variable(t("sim_inputs_a")).define("sim_inputs_a",["Generators","viewof sim_inputs_a"],((e,t)=>e.input(t))),n.variable(t("viewof sim_inputs_b")).define("viewof sim_inputs_b",["Inputs"],$),n.variable(t("sim_inputs_b")).define("sim_inputs_b",["Generators","viewof sim_inputs_b"],((e,t)=>e.input(t))),n.variable(t()).define(["htl"],B);const i=e.module(C);return n.import("nj",i),n.import("ComplexProbe",i),n.import("fftshift2D",i),n.import("fourier_shift",i),n.import("fourier_shift_extended",i),n.variable(t("gpts")).define("gpts",G),n.variable(t("probe")).define("probe",["ComplexProbe","gpts","sim_inputs_b","sim_inputs_a"],R),n.variable(t("shifted_probes")).define("shifted_probes",["fourier_shift_extended","probe","probe_xy"],E),n.define("initial probe_xy",H),n.variable(t("mutable probe_xy")).define("mutable probe_xy",["Mutable","initial probe_xy"],((e,t)=>new e(t))),n.variable(t("probe_xy")).define("probe_xy",["mutable probe_xy"],(e=>e.generator)),n.variable(t("probe_max_intensity")).define("probe_max_intensity",["probe"],S),n.variable(t("probe_dictionary")).define("probe_dictionary",["viz_inputs","fftshift2D","shifted_probes","probe_max_intensity"],V),n.variable(t("cyclic_colors")).define("cyclic_colors",W),n.variable(t("cmap")).define("cmap",["d3","cyclic_colors"],J),n.variable(t("probe_fft_dictionary")).define("probe_fft_dictionary",["viz_inputs","fftshift2D","shifted_probes","probe","cmap"],K),n.variable(t("probe_fft_dictionary_dummy")).define("probe_fft_dictionary_dummy",["cmap","shifted_probes"],L),n.variable(t("raster_subplot")).define("raster_subplot",["Plot"],O),n.variable(t("legend_subplot")).define("legend_subplot",["Plot"],Q),n.variable(t("left_panel_pixels_to_pos")).define("left_panel_pixels_to_pos",["gpts"],T),n}function X(e){return e}function Y(e){return e}function Z(e){return e}function ee(e){return e.html`<hr class="hideable-md" >`}function te(e,t){const n=e.module();n.variable(t()).define(["main_visualization"],X),n.variable(t()).define(["visualization_legends"],Y),n.variable(t()).define(["viewof sim_inputs_a"],Z),n.variable(t()).define(["htl"],ee);const i=e.module(U);return n.import("main_visualization",i),n.import("visualization_legends",i),n.import("viewof sim_inputs_a",i),n.import("sim_inputs_a",i),n}var ne=n(85893);const ie=function(){const e=(0,i.useRef)();return(0,i.useEffect)((()=>{const t=new u.Runtime;return t.module(te,u.Inspector.into(e.current)),()=>t.dispose()}),[]),(0,ne.jsx)(ne.Fragment,{children:(0,ne.jsx)("div",{ref:e})})};function ae(){const{siteConfig:e}=(0,r.default)();return(0,ne.jsx)("header",{className:(0,a.default)("hero hero--primary",o.heroBanner),children:(0,ne.jsxs)("div",{className:"container",children:[(0,ne.jsx)("h2",{className:"hero__subtitle",children:e.title}),(0,ne.jsxs)("h3",{className:"hero__subsubtitle",children:[e.customFields.author," | ",e.customFields.affiliation]}),(0,ne.jsx)("div",{className:(0,a.default)(o.heroInteractive),children:(0,ne.jsx)(ie,{})}),(0,ne.jsx)("div",{className:o.buttons,children:(0,ne.jsx)(s.default,{className:"button button--secondary button--lg",to:"/slides/4dstem-intro",children:"Get Started!"})})]})})}function re(){const{siteConfig:e}=(0,r.default)();return(0,ne.jsx)(l.default,{title:`${e.title}`,description:`${e.tagline}`,children:(0,ne.jsx)(ae,{})})}}}]);