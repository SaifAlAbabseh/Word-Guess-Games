(()=>{var e={};e.id=269,e.ids=[269],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6810:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>g,tree:()=>d}),s(9146),s(1506),s(5866);var n=s(3191),a=s(8716),r=s(7922),o=s.n(r),l=s(5231),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);s.d(t,i);let d=["",{children:["guess_word_game",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9146)),"C:\\Users\\sabab\\Desktop\\Private\\GitHub Projects\\Word-Guess-Games\\app\\guess_word_game\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,1506)),"C:\\Users\\sabab\\Desktop\\Private\\GitHub Projects\\Word-Guess-Games\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Users\\sabab\\Desktop\\Private\\GitHub Projects\\Word-Guess-Games\\app\\guess_word_game\\page.tsx"],c="/guess_word_game/page",m={require:s,loadChunk:()=>Promise.resolve()},g=new n.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/guess_word_game/page",pathname:"/guess_word_game",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1921:(e,t,s)=>{Promise.resolve().then(s.bind(s,3550))},367:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},8843:()=>{},5184:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var n=s(326),a=s(641),r=s.n(a),o=s(434);let l=function(){return(0,n.jsxs)("div",{className:r().footer,children:["Developed By Saif AlAbabseh",n.jsx(o.default,{href:"/about",className:r().aboutLink,children:"About Me"})]})}},1648:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var n=s(326),a=s(641),r=s.n(a);let o=function({children:e}){return n.jsx("main",{className:r().mainContainer,id:r().mainContainer,children:e})}},763:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var n=s(326),a=s(641),r=s.n(a);let o=function({children:e}){return n.jsx("div",{className:r().mainPanel,children:e})}},2178:(e,t,s)=>{"use strict";s.d(t,{Z:()=>m});var n=s(326),a=s(641),r=s.n(a),o=s(434),l=s(9029),i=s.n(l),d=s(3464);let u=function(){return n.jsx(o.default,{href:"/",children:n.jsx(i(),{src:d.default,alt:"back arrow icon",className:r().backArrowSvg,priority:!0})})};function c(){window.location.reload()}let m=function(){return(0,n.jsxs)("div",{className:r().restartButtonBox,children:[n.jsx(u,{}),n.jsx("button",{onClick:c,className:r().button,children:"Restart"})]})}},3550:(e,t,s)=>{"use strict";let n,a,r,o,l,i,d,u,c,m;s.r(t),s.d(t,{default:()=>j});var g=s(326);s(6600);var x=s(6266),p=s.n(x),_=s(5184),b=s(1648),h=s(763);s(7577);var f=s(2178);function B(e,t){if(e<a){for(let s=e+1;s<=a;s++)if(!document.getElementById(t+"_"+s).classList.contains(`${p().inputFieldDisabled}`)){let e=t+"_"+s;document.getElementById(e).focus();break}}}function v(e){d.style.pointerEvents="none",d.style.backgroundColor="gray",u.style.pointerEvents="none",u.style.backgroundColor="gray",m.innerHTML=e+n}function y(e,t){let s=document.getElementById(l-e+"_"+t);s.classList.remove(`${p().inputFieldEnabled}`),s.classList.add(`${p().inputFieldDisabled}`),""===s.value?s.style.backgroundColor="black":n.includes(s.value)&&""+n.charAt(t-1)===s.value?s.style.backgroundColor="green":n.includes(s.value)&&""+n.charAt(t-1)!==s.value?s.style.backgroundColor="orange":s.style.backgroundColor="black"}let k={LoadPage:function(){n="",a=6,r=5,o=3,l=1,i=!1,d=document.getElementById(`${p().submitButton}`),u=document.getElementById(`${p().hintButton}`),c=document.getElementById(`${p().numberOfHints}`),m=document.getElementById(`${p().wordBox}`),fetch("https://random-word-api.herokuapp.com/word?length="+a+"&lang=en").then(e=>{e.text().then(e=>{n=JSON.parse(e)[0].toUpperCase()})}),function(){let e=document.getElementById(`${p().gameBox}`);for(let t=1;t<=r;t++){let s=document.createElement("div");s.classList.add(`${p().flexBox}`),s.classList.add(`${p().inputFieldsRow}`);let n=document.createElement("h2");n.id="try_"+t,n.innerHTML="TRY #"+t,n.classList.add(`${p().tryNumberLabel}`),s.appendChild(n);for(let e=1;e<=a;e++){let a=document.createElement("input");a.type="text",a.id=t+"_"+e,a.classList.add(`${p().inputField}`),a.autocomplete="off",a.addEventListener("keyup",function(e){let t=(""+this.id).split("_"),s=Number(t[0]),n=Number(t[1]);if("Tab"==e.key||"ArrowLeft"==e.key||"ArrowRight"==e.key||"Backspace"==e.key)"Tab"==e.key&&this.classList.contains(`${p().inputFieldDisabled}`)&&this.blur(),"ArrowLeft"==e.key||"Backspace"==e.key?function(e,t){if(e>1){for(let s=e-1;s>=1;s--)if(!document.getElementById(t+"_"+s).classList.contains(`${p().inputFieldDisabled}`)){let e=t+"_"+s;document.getElementById(e).focus();break}}}(n,s):"ArrowRight"==e.key&&B(n,s);else if((""+this.value).charCodeAt(0)>=65&&90>=(""+this.value).charCodeAt(0)||(""+this.value).charCodeAt(0)>=97&&122>=(""+this.value).charCodeAt(0)){this.value.length>1&&(this.value=(""+this.value).substring(0,this.value.length-1));let e=(""+this.value).toUpperCase();this.value=e,B(n,s)}else this.value=""}),t>1?(a.classList.add(`${p().inputFieldDisabled}`),n.style.color="gray"):(a.classList.add(`${p().inputFieldEnabled}`),n.style.color="white"),s.appendChild(a)}e.appendChild(s)}}(),c.innerHTML=o},SubmitGuess:function(){if(l<=r){let e="";for(let t=1;t<=a;t++)e+=document.getElementById(l+"_"+t).value,y(0,t);if(document.getElementById("try_"+l).style.color="gray",l++,n===e)i=!0,v("You Won :) the word is: ");else if(l!=r+1){document.getElementById("try_"+l).style.color="white";for(let e=1;e<=a;e++){let t=document.getElementById(l-1+"_"+e),s=document.getElementById(l+"_"+e);s.classList.remove(`${p().inputFieldDisabled}`),s.classList.add(`${p().inputFieldEnabled}`),"green"===t.style.backgroundColor&&(s.classList.remove(`${p().inputFieldEnabled}`),s.classList.add(`${p().inputFieldDisabled}`),s.style.backgroundColor="green",s.value=t.value)}}}if(6==l&&!i){for(let e=1;e<=a;e++)y(1,e);v("You Lost :( the correct word was: ")}},PutHint:function(){o--,c.innerHTML=o,0==o&&(u.style.pointerEvents="none",u.style.backgroundColor="gray");let e="";for(let t=1;t<=a;t++)"green"!==document.getElementById(l+"_"+t).style.backgroundColor&&(e+=t);let t=parseInt(Math.random()*e.length),s=parseInt(e.charAt(t)),r=document.getElementById(l+"_"+s);r.classList.remove(`${p().inputFieldEnabled}`),r.classList.add(`${p().inputFieldDisabled}`),r.style.backgroundColor="green",r.value=n.charAt(s-1);let d=!0;for(let e=1;e<=a;e++)document.getElementById(l+"_"+e).classList.contains(`${p().inputFieldDisabled}`)||(d=!1);d&&(i=!0,v("You Won :) the word is: "))}},j=function(){return(0,g.jsxs)(b.Z,{children:[(0,g.jsxs)(h.Z,{children:[g.jsx(f.Z,{}),(0,g.jsxs)("div",{className:`${p().parentBox} ${p().flexBox}`,children:[g.jsx("div",{className:`${p().gameTitleBox} ${p().flexBoxCenter}`,children:g.jsx("h1",{className:p().gameTitle,children:"Word Guess Game"})}),(0,g.jsxs)("div",{className:`${p().gameParentBox} ${p().flexBox}`,children:[(0,g.jsxs)("div",{className:`${p().gameLeftBox} ${p().flexBox}`,children:[g.jsx("div",{className:p().flexBox,id:p().gameBox}),(0,g.jsxs)("div",{className:`${p().buttonsBox} ${p().flexBox}`,children:[g.jsx("button",{className:`${p().button} ${p().submitButton}`,id:p().submitButton,onClick:k.SubmitGuess,children:"SUBMIT"}),(0,g.jsxs)("button",{className:`${p().button} ${p().hintButton}`,id:p().hintButton,onClick:k.PutHint,children:["HINTS: ",g.jsx("label",{id:p().numberOfHints})]})]})]}),(0,g.jsxs)("div",{className:`${p().gameRulesBox} ${p().flexBox}`,children:[g.jsx("h2",{className:p().subTitle,children:"Letter Colors:"}),(0,g.jsxs)("h2",{className:`${p().ruleParentBox} ${p().flexBox}`,style:{color:"green"},children:[g.jsx("div",{className:p().ruleBox,style:{backgroundColor:"green"}}),"Correct Letter And In The Correct Place"]}),(0,g.jsxs)("h2",{className:`${p().ruleParentBox} ${p().flexBox}`,children:[g.jsx("div",{className:p().ruleBox,style:{backgroundColor:"black"}}),"Wrong Letter And Doesn't Exist"]}),(0,g.jsxs)("h2",{className:`${p().ruleParentBox} ${p().flexBox}`,style:{color:"orange"},children:[g.jsx("div",{className:p().ruleBox,style:{backgroundColor:"orange"}}),"Correct Letter But In The Wrong Place"]}),g.jsx("div",{id:p().wordBox})]})]})]})]}),g.jsx(_.Z,{})]})}},434:(e,t,s)=>{"use strict";s.d(t,{default:()=>a.a});var n=s(9404),a=s.n(n)},9029:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return i},getImageProps:function(){return l}});let n=s(1174),a=s(3078),r=s(2481),o=n._(s(6820));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let i=r.Image},641:e=>{e.exports={footer:"common_footer__Tgbrv",mainContainer:"common_mainContainer__X5vbv",mainPanel:"common_mainPanel__KYREu",button:"common_button___CBK9",restartButtonBox:"common_restartButtonBox__pRUQa",backArrowSvg:"common_backArrowSvg__fyIRx",aboutLink:"common_aboutLink__V_yFY"}},6266:e=>{e.exports={flexBox:"page_flexBox__crEb0",flexBoxCenter:"page_flexBoxCenter__KorhZ",gameTitle:"page_gameTitle__gwizC",gameTitleBox:"page_gameTitleBox__kEOYN",parentBox:"page_parentBox__0vFf5",gameParentBox:"page_gameParentBox__rxKi9",inputField:"page_inputField__hX2nK",inputFieldsRow:"page_inputFieldsRow__vj7tJ",gameLeftBox:"page_gameLeftBox__Lmvsx",button:"page_button__zoN0B",submitButton:"page_submitButton___ugLO",hintButton:"page_hintButton__ieBch",buttonsBox:"page_buttonsBox__I8OZ_",inputFieldDisabled:"page_inputFieldDisabled__vq1CK",inputFieldEnabled:"page_inputFieldEnabled__Z65wu",tryNumberLabel:"page_tryNumberLabel__31sx1",subTitle:"page_subTitle__rugJG",ruleBox:"page_ruleBox__wuf9L",gameRulesBox:"page_gameRulesBox__3kzb3",ruleParentBox:"page_ruleParentBox__YCW_w",wordBox:"page_wordBox__5O4nl",gameBox:"page_gameBox__yLknD",numberOfHints:"page_numberOfHints__gEYer"}},9146:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>r,default:()=>l});var n=s(8570);let a=(0,n.createProxy)(String.raw`C:\Users\sabab\Desktop\Private\GitHub Projects\Word-Guess-Games\app\guess_word_game\page.tsx`),{__esModule:r,$$typeof:o}=a;a.default;let l=(0,n.createProxy)(String.raw`C:\Users\sabab\Desktop\Private\GitHub Projects\Word-Guess-Games\app\guess_word_game\page.tsx#default`)},1506:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l,metadata:()=>o});var n=s(9510),a=s(7366),r=s.n(a);let o={title:"Saif Games",description:"Generated by create next app"};function l({children:e}){return(0,n.jsxs)("html",{lang:"en",children:[(0,n.jsxs)("head",{children:[n.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),n.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),n.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),n.jsx("link",{rel:"manifest",href:"/site.webmanifest"})]}),n.jsx("body",{className:r().className,children:e})]})}},3464:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});let n={src:"/_next/static/media/backArrowIcon.beeb3f43.svg",height:108,width:123,blurWidth:0,blurHeight:0}},6600:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[480,162],()=>s(6810));module.exports=n})();