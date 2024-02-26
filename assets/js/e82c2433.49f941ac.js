"use strict";(self.webpackChunkinteractive_ptycho=self.webpackChunkinteractive_ptycho||[]).push([[9167],{5966:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>Ce,contentTitle:()=>qe,default:()=>Fe,frontMatter:()=>Me,metadata:()=>Pe,toc:()=>De});var n=i(85893),a=i(11151),r=i(67294),l=i(57940);function o(e){return e`# Ptychography Helper Functions`}function s(e){return e.html`<hr class="hideable-md">`}function u(e){return e("https://cdn.jsdelivr.net/gh/nicolaspanel/numjs@0.16/dist/numjs.min.js")}function c(e){return e("https://bundle.run/ndarray-ops@1.2.2")}function p(e){return e("https://bundle.run/ndarray-complex@1.0.3")}function d(e,t){return function(i,n){let a=e.zeros(i.shape);return t.atan2(a.selection,i.selection,n.selection),a}}function _(e,t){return function(i,n){let a=e.zeros(i.shape);return t.lts(a.selection,i.selection,n),t.bandseq(a.selection,1),a}}function f(e,t,i){return class n{constructor(t){this.shape=t;let i=t.slice();i.push(2),this.data=e.zeros(i),this._nulls=new Array(t.length).fill(null)}re(){return this.data.pick(...this._nulls,0)}im(){return this.data.pick(...this._nulls,1)}abs(){return e.sqrt(this.abs_sqr())}abs_sqr(){return e.add(this.re().multiply(this.re()),this.im().multiply(this.im()))}angle(){return t(this.im(),this.re())}clone(){let e=new n(this.shape);return e.data=this.data.clone(),e}conjugate(){let t=this.re().clone(),a=this.im().clone();i.conjeq(t.selection,a.selection);let r=new n(this.shape);return r.data=e.stack([t,a],-1),r}multiply(t){let a=this.re().clone(),r=this.im().clone(),l=t.re(),o=t.im();i.muleq(a.selection,r.selection,l.selection,o.selection);let s=new n(this.shape);return s.data=e.stack([a,r],-1),s}real_multiply(t){let a=this.re().clone(),r=this.im().clone(),l=t,o=e.zeros(t.shape);i.muleq(a.selection,r.selection,l.selection,o.selection);let s=new n(this.shape);return s.data=e.stack([a,r],-1),s}scalar_multiply(t,a){let r=this.re().clone(),l=this.im().clone();i.mulseq(r.selection,l.selection,t,a);let o=new n(this.shape);return o.data=e.stack([r,l],-1),o}add(t){let a=this.re().clone(),r=this.im().clone(),l=t.re(),o=t.im();i.addeq(a.selection,r.selection,l.selection,o.selection);let s=new n(this.shape);return s.data=e.stack([a,r],-1),s}subtract(t){let a=this.re().clone(),r=this.im().clone(),l=t.re(),o=t.im();i.subeq(a.selection,r.selection,l.selection,o.selection);let s=new n(this.shape);return s.data=e.stack([a,r],-1),s}}}function h(e){return function(t,i){let n=e.zeros(t),a=1/(t*i),r=1+((t-1)/2|0);for(var l=0;l<r;l++)n.set(l,l*a);for(l=r;l<t;l++)n.set(l,(l-t)*a);return n}}function b(e){return function(t,i){let n=[t.size,i.size],a=[];a[0]=e.zeros(n),a[1]=e.zeros(n);for(let e=0;e<n[1];e++)for(let r=0;r<n[0];r++)a[0].set(r,e,t.get(r)),a[1].set(r,e,i.get(e));return a}}function m(e){return function(t){let[i,n]=t.shape,a=i/2|0,r=n/2|0,l=e.zeros([i,n]);return l.slice([null,a],[null,r]).assign(t.slice(-a,-r),!1),l.slice([null,a],r).assign(t.slice(-a,[null,r]),!1),l.slice(-a,-r).assign(t.slice([null,a],[null,r]),!1),l.slice(-a,[null,r]).assign(t.slice([null,a],-r),!1),l}}function v(e,t,i,n){return function(a,r){let[l,o]=a.shape,[s,u]=r,c=new e([l,o]);c.data=t.fft(a.data);let p=i(l,1),d=i(o,1),[_,f]=n(p,d),h=-2*Math.PI,b=t.add(_.multiply(s),f.multiply(u)).multiply(h),m=new e([l,o]),v=t.cos(b),g=t.sin(b);m.data=t.stack([v,g],-1);let y=c.multiply(m);return y.data=t.ifft(y.data),y}}function g(e,t,i,n){return function(a,r){let[l,o]=a.shape,[s,u]=r,c=new e([l,o]);c.data=t.fft(a.data);let p=i(l,1),d=i(o,1),[_,f]=n(p,d),h=-2*Math.PI,b=t.add(_.multiply(s),f.multiply(u)).multiply(h),m=new e([l,o]),v=t.cos(b),g=t.sin(b);m.data=t.stack([v,g],-1);let y=c.multiply(m),x=new e([l,o]);return x.data=t.ifft(y.data),[y,x]}}function y(e){return function(t,[i,n]){let a=new e([i,n]),r=i/2|0,l=n/2|0;return a.data.slice([null,r],[null,l],null).assign(t.slice([null,r],[null,l],null),!1),a.data.slice(-r,[null,l],null).assign(t.slice(-r,[null,l],null),!1),a.data.slice([null,r],-l,null).assign(t.slice([null,r],-l,null),!1),a.data.slice(-r,-l,null).assign(t.slice(-r,-l,null),!1),a}}function x(e,t,i){return function(n,a){let[r,l]=n.shape;console.log(r);let o=new e([r,l]);o.data=t.fft(n.data);let[s,u]=[r/a|0,l/a|0],c=i(o.data,[s,u]);return c.data=t.ifft(c.data),c}}function w(){return function(e){let t=9.109383*1e-30,i=1602177e-24,n=299792458;return 662607e-39/Math.sqrt(2*t*i*e)/Math.sqrt(1+i*e/2/t/n/n)*1e11}}function z(e){return function(t){let i=9.109383*1e-30,n=1602177e-24,a=299792458,r=e(t);return 2*Math.PI/r/t*(i*a*a+n*t)/(2*i*a*a+n*t)}}function j(e,t,i,n,a,r,l){return class{constructor(t,i,n,a,r,l=0,o=Math.PI/2){this._gpts=t.slice(),this._sampling=i.slice(),this._energy=n,this._wavelength=e(n),this._semiangle_cutoff=a,this._defocus=r,this._stig=l,this._stig_angle=o}_get_scattering_angles(){let e=t(this._gpts[0],this._sampling[0]),r=t(this._gpts[1],this._sampling[1]),[l,o]=i(e,r);return[n.sqrt(n.add(l.multiply(l.multiply(this._wavelength*this._wavelength)),o.multiply(o.multiply(this._wavelength*this._wavelength)))),a(o,l)]}_evaluate_aberrations(e,t){let i=Math.PI/this._wavelength,a=n.cos(t.subtract(this._stig_angle).multiply(2)).multiply(this._stig).add(this._defocus),l=e.multiply(e).multiply(a).multiply(i),o=n.cos(l),s=n.sin(l),u=new r(l.shape);return u.data=n.stack([o,s],-1),u}_evaluate_aperture(e,t){let i=this._semiangle_cutoff/1e3,a=new r(e.shape),o=l(e,i);return a.data=n.stack([o,n.zeros(e.shape)],-1),a}build(){let[e,t]=this._get_scattering_angles(),i=this._evaluate_aberrations(e,t),a=this._evaluate_aperture(e,t),l=i.multiply(a),o=new r(l.shape);o.data=n.ifft(l.data);let s=Math.sqrt(o.abs_sqr().sum());return this._array=o.scalar_multiply(1/s,0),this._fourier_array=l,this._aberrations=i,this._aperture=a,this}}}function k(e){return e`https://observablehq.com/@mootari/notebook-data`}function M(e,t){const i=e.module();return i.variable(t()).define(["md"],o),i.variable(t()).define(["htl"],s),i.variable(t("nj")).define("nj",["require"],u),i.variable(t("ops")).define("ops",["require"],c),i.variable(t("cops")).define("cops",["require"],p),i.variable(t("atan2")).define("atan2",["nj","ops"],d),i.variable(t("lt_int_s")).define("lt_int_s",["nj","ops"],_),i.variable(t("ComplexNDArray")).define("ComplexNDArray",["nj","atan2","cops"],f),i.variable(t("fftfreq")).define("fftfreq",["nj"],h),i.variable(t("meshgrid2D")).define("meshgrid2D",["nj"],b),i.variable(t("fftshift2D")).define("fftshift2D",["nj"],m),i.variable(t("fourier_shift")).define("fourier_shift",["ComplexNDArray","nj","fftfreq","meshgrid2D"],v),i.variable(t("fourier_shift_extended")).define("fourier_shift_extended",["ComplexNDArray","nj","fftfreq","meshgrid2D"],g),i.variable(t("corner_crop")).define("corner_crop",["ComplexNDArray"],y),i.variable(t("fourier_downsample")).define("fourier_downsample",["ComplexNDArray","nj","corner_crop"],x),i.variable(t("electron_wavelength_angstroms")).define("electron_wavelength_angstroms",w),i.variable(t("electron_interaction_parameter")).define("electron_interaction_parameter",["electron_wavelength_angstroms"],z),i.variable(t("ComplexProbe")).define("ComplexProbe",["electron_wavelength_angstroms","fftfreq","meshgrid2D","nj","atan2","ComplexNDArray","lt_int_s"],j),i.variable(t()).define(["md"],k),i}function q(e){return e`# Extended Ptychographic Iterative Engine

Here, we will use the extended ptychographic iterative engine (ePIE) to reconstruct the electrostatic potential of an fcc-like material made of 7 [111] atomic layers.`}function P(e){return e`First, hover over the probe intensity visualization to move the probe position around and see how the diffraction pattern below changes.`}function C(e,t,i,n,a,r,l,o){let s=[];return e.visualization_checkboxes.includes("probe")&&(s=[...s,t]),e.visualization_checkboxes.includes("potential")&&(s=[...s,i]),e.visualization_checkboxes.includes("model")&&(s=[...s,n]),e.visualization_checkboxes.includes("diffraction")&&(s=[...s,a]),e.visualization_checkboxes.includes("gradient")&&(s=[...s,r]),l`<div style="display:flex; flex-wrap: wrap;">

${s.map((t=>o.legend({width:e.width,marginLeft:10,marginRight:10,label:t.label,color:{domain:t.domain,scheme:t.scheme,type:t.type,exponent:t.exponent,style:{background:"none"}}})))}`}function D(e,t,i,n,a,r,l,o,s,u,c,p){let d=10,_=[];e.visualization_checkboxes.includes("probe")&&(_=[..._,t]),e.visualization_checkboxes.includes("potential")&&(_=[..._,i]),e.visualization_checkboxes.includes("model")&&(_=[..._,n]),e.visualization_checkboxes.includes("diffraction")&&(_=[..._,a]),e.visualization_checkboxes.includes("gradient")&&(_=[..._,r]);let f=_.length,h=e.width*f,b=e.width/l[0]*l[1];return o.plot({width:h,height:b-20,padding:0,margin:0,x:{axis:null,range:[0,h]},y:{axis:null,range:[0,b]},marks:[o.cell(s.cross(s.range(f),[0]).map((([e,t])=>({a:e,b:t}))),{x:"a",y:"b",render:(e,{x:t,y:i},{x:n,y:a,channels:{x:{value:r},y:{value:l}}})=>s.create("svg:g").call((l=>l.selectAll().data(e).join("g").attr("transform",(e=>`translate(${n[e]+d},${a[e]})`)).append((e=>u(_,r[e],t.bandwidth()-20,i.bandwidth()-20))))).on("pointerenter pointermove",(e=>c.value=p(s.pointer(e),[d,0],[t.bandwidth()-20,i.bandwidth()-20]))).node()})]})}function A(e,t){return t`Iteration number: \`${e}\``}function F(e){return e`## Gradient Descent Intuition

Toggling the "gradient" and "potential" checkboxes below will plot the phase update on the reconstructed potential in the current probe position.`}function I(e){return e.form({visualization_checkboxes:e.checkbox(["probe","potential","model","diffraction","gradient"],{value:["probe","potential","model"],label:"panels"}),options:e.checkbox(["reconstruct","random order","object positivity"],{value:["random order","object positivity"],label:"ePIE"}),width:e.range([100,500],{value:157.5,step:.5,label:"width"}),reset_potential_and_probe_position:e.button("reset potential and probe position")})}function E(e){return e`## Reactive Reconstruction
Toggle the "reconstruct" checkbox above to start a reactive reconstruction!`}function N(e){return e`This converges rather slowly when we scan in a raster. Toggling the "randomize" checkbox above will instead perform stochastic gradient descent.`}function R(e){return e.html`<hr class="hideable-md">`}async function T(e,t){let i=new Float32Array(await e("FCC-slab-dps-25x25x96x96-float32-shifted.npy").arrayBuffer()),n=Array.from(i),a=t.zeros([25,25,96,96]);return a.selection.data=n,t.sqrt(a)}async function G(e,t){let i=new Float32Array(await e("FCC-slab-dps-25x25x96x96-float32.npy").arrayBuffer()),n=Array.from(i),a=t.zeros([25,25,96,96]);return a.selection.data=n,t.sqrt(a)}function S(e,t,i){if(e.visualization_checkboxes.includes("diffraction")){let e=t.pick(i[1]/4,i[0]/4,null,null).pow(2);return{label:"Diffraction Intensity",scheme:"Magma",domain:[0,.00295],type:"pow",exponent:.375,width:e.shape[1],height:e.shape[0],values:e.flatten().tolist()}}}function $(e){return e.shape.slice(2)}function L(e,t){return new e(t,[.255,.255],8e4,25,150).build()}function O(e,t,i,n){let a=e(t._array,[-i[1],-i[0]]).abs_sqr();return{label:"Probe Intensity",scheme:"Greys",domain:[0,n],width:a.shape[1],height:a.shape[0],values:a.flatten().tolist()}}function B(e){return e._array.abs_sqr().max()}function H(e,t){let i=[];for(let n=0;n<e[0];n+=4)for(let t=0;t<e[1];t+=4)i=[...i,{x:n,y:t}];return t.rect(i,t.pointer({x1:"x",x2:e=>e.x+4,y1:"y",y2:e=>e.y+4,stroke:"none",fill:"none"}))}function U(e,t){return function(i,n){let a=n.clone(),r=new e(i.shape),l=t.cos(i),o=t.sin(i);return r.data=t.stack([l,o],-1),a=a.multiply(r),[a,r]}}function X(e,t,i){return function(n,a){let r=new e(a.shape);r.data=t.fft(a.data),i.value=r;let l=r.angle(),o=new e(a.shape),s=t.cos(l),u=t.sin(l);o.data=t.stack([s,u],-1),o=o.real_multiply(n);let c=o.subtract(r),p=new e(a.shape);return p.data=t.ifft(c.data),p}}function W(e,t){return e.zeros(t)}function Y(e,t){return e.zeros(t)}function J(e,t){let i=e.options.includes("object positivity")?0:.75*t.min()-1e-4;return{label:"Potential",scheme:e.options.includes("object positivity")?"Magma":"PiYG",domain:[i,.75*t.max()+1e-4],width:t.shape[1],height:t.shape[0],values:t.flatten().tolist()}}function K(e,t){return function(i,n,a){let[r,l]=e(i,n);return[r,l,t(a,r)]}}function Q(e,t,i,n,a,r){return function(l,[o,s],u){let c=o/4,p=(e[1]-s)%e[1]/4,d=t.pick(p,c,null,null),_=i(n._array,[-s,-o]),[f,h,b]=a(l,_,d),m=b.multiply(h.conjugate()).multiply(_.conjugate()).scalar_multiply(0,-1/r);return l.add(m.re().multiply(u))}}function V(e){return e._array}function Z(e,t,i,n){if(e.visualization_checkboxes.includes("model")){let e=t(i.scalar_multiply(0,4*n).abs_sqr());return{label:"Forward Model",scheme:"Magma",domain:[0,e.max()],type:"pow",exponent:.375,width:e.shape[1],height:e.shape[0],values:e.flatten().tolist()}}}function ee(e,t,i){return e(t,i,1)}function te(e,t,i){if(e.visualization_checkboxes.includes("gradient")){let e=t.subtract(i);return{label:"Gradient Step",scheme:"PuOr",domain:[e.min(),e.max()],width:e.shape[1],height:e.shape[0],values:e.flatten().tolist()}}}function ie(e){return function(t){return e.clip(t,0)}}function ne(e,t){if(e.options.includes("random order")){let e=t.randomInt(25);return[4*e(),4*e()]}return[0,0]}function ae(){return null}function re(e){return[e[0]/2,e[1]/2]}function le(e,t,i,n){let a=!1;return null!==e&&(e[0]==t[0]&&e[1]==i[1]-t[1]||(a=!0,n.value=[e[0],i[1]-e[1]])),a}function oe(e){return e.range(625)}function se(e){return e.slice()}function ue(){return 620}function ce(e,t,i,n,a,r,l,o,s,u,c,p,d,_,f,h){if(e.options.includes("reconstruct")){if(e.options.includes("random order")){t%625==0&&(i.value=n.shuffle(a));let e=a[t%625],l=e%25*4,o=4*(e/25|0);r.value=[l,o]}else{let e=l[t%625],i=e%25*4,n=4*(e/25|0);r.value=[i,n]}e.visualization_checkboxes.includes("probe")&&(o.value=s);let f=u(c,s,1);e.options.includes("object positivity")?p.value=d(f):p.value=f,_.value+=1}else f||(h.value=c.clone())}function pe(e,t,i,n,a,r,l,o,s,u){if(e&&t.visualization_checkboxes.includes("gradient")){let e=i(n,a,1);r.value=e,t.visualization_checkboxes.includes("potential")&&(t.options.includes("object positivity")?l.value=o(s):l.value=s,u.value=n.clone())}}function de(){return 0}function _e(e,t,i,n,a,r,l,o,s,u,c){e.reset_potential_and_probe_position!=t&&(i.value=null,n.value=a.zeros(r),l.value=a.zeros(r),o.value=[r[0]/2,r[1]/2],s.value=[0,0],u.value=e.reset_potential_and_probe_position,c.value=0)}function fe(e){return(t,i,n,a)=>e.plot({width:n,height:a,margin:0,x:{axis:null},y:{axis:null},color:{label:t[i].label,domain:t[i].domain,scheme:t[i].scheme,type:t[i].type,exponent:t[i].exponent,style:{background:"none"}},style:{background:"none"},marks:[e.raster(t[i].values,{width:t[i].width,height:t[i].height}),e.frame({strokeWidth:1})]})}function he(e){return function([t,i],[n,a],[r,l]){let[o,s]=[(t-n)/r,(i-a)/l];return o>1?null:[4*Math.round(o*e[0]/4),4*Math.round(s*e[1]/4)]}}function be(e,t){const n=e.module();function a(){return this.url}const r=new Map([["FCC-slab-dps-25x25x96x96-float32.npy",{url:new URL(i(14794),i.b),mimeType:"application/octet-stream",toString:a}],["FCC-slab-dps-25x25x96x96-float32-shifted.npy",{url:new URL(i(68958),i.b),mimeType:"application/octet-stream",toString:a}]]);n.builtin("FileAttachment",e.fileAttachments((e=>r.get(e)))),n.variable(t()).define(["md"],q),n.variable(t()).define(["md"],P),n.variable(t("visualization_legends")).define("visualization_legends",["viz_inputs","probe_dictionary","potential_dictionary","exit_wave_dictionary","dp_dictionary","gradient_dictionary","html","Plot"],C),n.variable(t("main_visualization")).define("main_visualization",["viz_inputs","probe_dictionary","potential_dictionary","exit_wave_dictionary","dp_dictionary","gradient_dictionary","gpts","Plot","d3","raster_subplot","mutable mouse_pos","left_panel_pixels_to_pos"],D),n.variable(t()).define(["iteration_counter","md"],A),n.variable(t()).define(["md"],F),n.variable(t("viewof viz_inputs")).define("viewof viz_inputs",["Inputs"],I),n.variable(t("viz_inputs")).define("viz_inputs",["Generators","viewof viz_inputs"],((e,t)=>e.input(t))),n.variable(t()).define(["md"],E),n.variable(t()).define(["md"],N),n.variable(t()).define(["htl"],R);const l=e.module(M);return n.import("nj",l),n.import("ComplexNDArray",l),n.import("fftfreq",l),n.import("meshgrid2D",l),n.import("fourier_shift",l),n.import("fourier_downsample",l),n.import("ComplexProbe",l),n.import("fftshift2D",l),n.variable(t("diffraction_amplitudes_shifted")).define("diffraction_amplitudes_shifted",["FileAttachment","nj"],T),n.variable(t("diffraction_amplitudes")).define("diffraction_amplitudes",["FileAttachment","nj"],G),n.variable(t("dp_dictionary")).define("dp_dictionary",["viz_inputs","diffraction_amplitudes_shifted","probe_xy"],S),n.variable(t("gpts")).define("gpts",["diffraction_amplitudes"],$),n.variable(t("real_space_probe")).define("real_space_probe",["ComplexProbe","gpts"],L),n.variable(t("probe_dictionary")).define("probe_dictionary",["fourier_shift","real_space_probe","probe_xy","probe_normalization"],O),n.variable(t("probe_normalization")).define("probe_normalization",["real_space_probe"],B),n.variable(t("mouseover_pointer")).define("mouseover_pointer",["gpts","Plot"],H),n.variable(t("overlap_projection")).define("overlap_projection",["ComplexNDArray","nj"],U),n.variable(t("fourier_projection")).define("fourier_projection",["ComplexNDArray","nj","mutable exit_wave"],X),n.define("initial potential",["nj","gpts"],W),n.variable(t("mutable potential")).define("mutable potential",["Mutable","initial potential"],((e,t)=>new e(t))),n.variable(t("potential")).define("potential",["mutable potential"],(e=>e.generator)),n.define("initial potential_static",["nj","gpts"],Y),n.variable(t("mutable potential_static")).define("mutable potential_static",["Mutable","initial potential_static"],((e,t)=>new e(t))),n.variable(t("potential_static")).define("potential_static",["mutable potential_static"],(e=>e.generator)),n.variable(t("potential_dictionary")).define("potential_dictionary",["viz_inputs","potential"],J),n.variable(t("forward_operator")).define("forward_operator",["overlap_projection","fourier_projection"],K),n.variable(t("gradient_descent")).define("gradient_descent",["gpts","diffraction_amplitudes","fourier_shift","real_space_probe","forward_operator","probe_normalization"],Q),n.define("initial exit_wave",["real_space_probe"],V),n.variable(t("mutable exit_wave")).define("mutable exit_wave",["Mutable","initial exit_wave"],((e,t)=>new e(t))),n.variable(t("exit_wave")).define("exit_wave",["mutable exit_wave"],(e=>e.generator)),n.variable(t("exit_wave_dictionary")).define("exit_wave_dictionary",["viz_inputs","fftshift2D","exit_wave","probe_normalization"],Z),n.define("initial gradient_step",["gradient_descent","potential_static","probe_xy"],ee),n.variable(t("mutable gradient_step")).define("mutable gradient_step",["Mutable","initial gradient_step"],((e,t)=>new e(t))),n.variable(t("gradient_step")).define("gradient_step",["mutable gradient_step"],(e=>e.generator)),n.variable(t("gradient_dictionary")).define("gradient_dictionary",["viz_inputs","gradient_step","potential_static"],te),n.variable(t("positivity_constraint")).define("positivity_constraint",["nj"],ie),n.define("initial reconstruct_xy",["viz_inputs","d3"],ne),n.variable(t("mutable reconstruct_xy")).define("mutable reconstruct_xy",["Mutable","initial reconstruct_xy"],((e,t)=>new e(t))),n.variable(t("reconstruct_xy")).define("reconstruct_xy",["mutable reconstruct_xy"],(e=>e.generator)),n.define("initial mouse_pos",ae),n.variable(t("mutable mouse_pos")).define("mutable mouse_pos",["Mutable","initial mouse_pos"],((e,t)=>new e(t))),n.variable(t("mouse_pos")).define("mouse_pos",["mutable mouse_pos"],(e=>e.generator)),n.define("initial probe_xy",["gpts"],re),n.variable(t("mutable probe_xy")).define("mutable probe_xy",["Mutable","initial probe_xy"],((e,t)=>new e(t))),n.variable(t("probe_xy")).define("probe_xy",["mutable probe_xy"],(e=>e.generator)),n.variable(t("probe_moving")).define("probe_moving",["mouse_pos","probe_xy","gpts","mutable probe_xy"],le),n.variable(t("unshuffled_order")).define("unshuffled_order",["d3"],oe),n.define("initial shuffled_order",["unshuffled_order"],se),n.variable(t("mutable shuffled_order")).define("mutable shuffled_order",["Mutable","initial shuffled_order"],((e,t)=>new e(t))),n.variable(t("shuffled_order")).define("shuffled_order",["mutable shuffled_order"],(e=>e.generator)),n.define("initial iteration_counter",ue),n.variable(t("mutable iteration_counter")).define("mutable iteration_counter",["Mutable","initial iteration_counter"],((e,t)=>new e(t))),n.variable(t("iteration_counter")).define("iteration_counter",["mutable iteration_counter"],(e=>e.generator)),n.variable(t("reconstruct_mutable")).define("reconstruct_mutable",["viz_inputs","iteration_counter","mutable shuffled_order","d3","shuffled_order","mutable reconstruct_xy","unshuffled_order","mutable probe_xy","reconstruct_xy","gradient_descent","potential","mutable potential","positivity_constraint","mutable iteration_counter","probe_moving","mutable potential_static"],ce),n.variable(t("moving_mutable")).define("moving_mutable",["probe_moving","viz_inputs","gradient_descent","potential_static","probe_xy","mutable gradient_step","mutable potential_static","positivity_constraint","gradient_step","mutable potential"],pe),n.define("initial previous_potential_reset_value",de),n.variable(t("mutable previous_potential_reset_value")).define("mutable previous_potential_reset_value",["Mutable","initial previous_potential_reset_value"],((e,t)=>new e(t))),n.variable(t("previous_potential_reset_value")).define("previous_potential_reset_value",["mutable previous_potential_reset_value"],(e=>e.generator)),n.variable(t("reset_potential_mutable")).define("reset_potential_mutable",["viz_inputs","previous_potential_reset_value","mutable mouse_pos","mutable potential","nj","gpts","mutable potential_static","mutable probe_xy","mutable reconstruct_xy","mutable previous_potential_reset_value","mutable iteration_counter"],_e),n.variable(t("raster_subplot")).define("raster_subplot",["Plot"],fe),n.variable(t("left_panel_pixels_to_pos")).define("left_panel_pixels_to_pos",["gpts"],he),n}function me(e){return e}function ve(e){return e}function ge(e){return e}function ye(e){return e.html`<hr class="hideable-md">`}function xe(e){return e}function we(e){return e}function ze(e){return e}function je(e,t){const i=e.module();i.variable(t()).define(["visualization_legends"],me),i.variable(t()).define(["main_visualization"],ve),i.variable(t()).define(["viewof viz_inputs"],ge),i.variable(t()).define(["htl"],ye);const n=e.module(be);return i.import("visualization_legends",n),i.import("main_visualization",n),i.import("viewof viz_inputs",n),i.import("viz_inputs",n),i.import("reset_potential_mutable",n),i.import("reconstruct_mutable",n),i.import("moving_mutable",n),i.variable(t()).define(["reset_potential_mutable"],xe),i.variable(t()).define(["reconstruct_mutable"],we),i.variable(t()).define(["moving_mutable"],ze),i}const ke=function(){const e=(0,r.useRef)();return(0,r.useEffect)((()=>{const t=new l.Runtime;return t.module(je,l.Inspector.into(e.current)),()=>t.dispose()}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{ref:e})})},Me={id:"ptychography-epie",sidebar_position:3,title:"Electron Ptychography",hide_table_of_contents:!0,hide_title:!0},qe=void 0,Pe={id:"ptychography-epie",title:"Electron Ptychography",description:"Electron Ptychography",source:"@site/slides/ptychography-epie.mdx",sourceDirName:".",slug:"/ptychography-epie",permalink:"/interactive-electron-ptychography/slides/ptychography-epie",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"ptychography-epie",sidebar_position:3,title:"Electron Ptychography",hide_table_of_contents:!0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Proximal Gradient Methods",permalink:"/interactive-electron-ptychography/slides/proximal-gradients"},next:{title:"Open-Source Phase Retrieval",permalink:"/interactive-electron-ptychography/slides/phase-retrieval"}},Ce={},De=[{value:"Electron Ptychography",id:"electron-ptychography",level:2}];function Ae(e){const t={h2:"h2",li:"li",ul:"ul",...(0,a.useMDXComponents)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"electron-ptychography",children:"Electron Ptychography"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The 4D-STEM phase problem can be solved using proximal gradient algorithms:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:['"Fourier" projection',"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Reconstructed probe and object accurately reproduce measured intensities"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:['"Overlap" projection',"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Reconstructed probe and object are self-consistent with adjacent scanning positions"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(ke,{})]})}function Fe(e={}){const{wrapper:t}={...(0,a.useMDXComponents)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(Ae,{...e})}):Ae(e)}},68958:(e,t,i)=>{e.exports=i.p+"78a18ff1812c111c.bin"},14794:(e,t,i)=>{e.exports=i.p+"631f8cfa3d6bae2a.bin"}}]);