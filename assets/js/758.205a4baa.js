"use strict";(self.webpackChunkinteractive_ptycho=self.webpackChunkinteractive_ptycho||[]).push([[758],{30758:(t,r,e)=>{function o(t){return{name:"mscgen",startState:l,copyState:u,token:(r=t,function(t,e){if(t.match(s(r.brackets),!0,!0))return"bracket";if(!e.inComment){if(t.match(/\/\*[^\*\/]*/,!0,!0))return e.inComment=!0,"comment";if(t.match(s(r.singlecomment),!0,!0))return t.skipToEnd(),"comment"}if(e.inComment)return t.match(/[^\*\/]*\*\//,!0,!0)?e.inComment=!1:t.skipToEnd(),"comment";if(!e.inString&&t.match(/\"(\\\"|[^\"])*/,!0,!0))return e.inString=!0,"string";if(e.inString)return t.match(/[^\"]*\"/,!0,!0)?e.inString=!1:t.skipToEnd(),"string";if(r.keywords&&t.match(a(r.keywords),!0,!0))return"keyword";if(t.match(a(r.options),!0,!0))return"keyword";if(t.match(a(r.arcsWords),!0,!0))return"keyword";if(t.match(s(r.arcsOthers),!0,!0))return"keyword";if(r.operators&&t.match(s(r.operators),!0,!0))return"operator";if(r.constants&&t.match(s(r.constants),!0,!0))return"variable";if(!r.inAttributeList&&r.attributes&&t.match("[",!0,!0))return r.inAttributeList=!0,"bracket";if(r.inAttributeList){if(null!==r.attributes&&t.match(a(r.attributes),!0,!0))return"attribute";if(t.match("]",!0,!0))return r.inAttributeList=!1,"bracket"}return t.next(),null}),languageData:{commentTokens:{line:"#",block:{open:"/*",close:"*/"}}}};var r}e.r(r),e.d(r,{mscgen:()=>n,msgenny:()=>i,xu:()=>c});const n=o({keywords:["msc"],options:["hscale","width","arcgradient","wordwraparcs"],constants:["true","false","on","off"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip"],brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]}),i=o({keywords:null,options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:null,brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]}),c=o({keywords:["msc","xu"],options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip","title","deactivate","activate","activation"],brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]});function a(t){return new RegExp("^\\b("+t.join("|")+")\\b","i")}function s(t){return new RegExp("^(?:"+t.join("|")+")","i")}function l(){return{inComment:!1,inString:!1,inAttributeList:!1,inScript:!1}}function u(t){return{inComment:t.inComment,inString:t.inString,inAttributeList:t.inAttributeList,inScript:t.inScript}}}}]);