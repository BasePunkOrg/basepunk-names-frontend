import{b as le}from"./index.4cdf40fd.js";const ce=Symbol(),X=Object.getPrototypeOf,J=new WeakMap,de=e=>e&&(J.has(e)?J.get(e):X(e)===Object.prototype||X(e)===Array.prototype),ue=e=>de(e)&&e[ce]||null,Y=(e,t=!0)=>{J.set(e,t)},q=e=>typeof e=="object"&&e!==null,C=new WeakMap,B=new WeakSet,fe=(e=Object.is,t=(o,h)=>new Proxy(o,h),s=o=>q(o)&&!B.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),r=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,h,I=r)=>{const w=l.get(o);if((w==null?void 0:w[0])===h)return w[1];const b=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return Y(b,!0),l.set(o,[h,b]),Reflect.ownKeys(o).forEach(P=>{if(Object.getOwnPropertyDescriptor(b,P))return;const W=Reflect.get(o,P),D={value:W,enumerable:!0,configurable:!0};if(B.has(W))Y(W,!1);else if(W instanceof Promise)delete D.value,D.get=()=>I(W);else if(C.has(W)){const[y,z]=C.get(W);D.value=c(y,z(),I)}Object.defineProperty(b,P,D)}),b},g=new WeakMap,f=[1,1],O=o=>{if(!q(o))throw new Error("object required");const h=g.get(o);if(h)return h;let I=f[0];const w=new Set,b=(a,i=++f[0])=>{I!==i&&(I=i,w.forEach(n=>n(a,i)))};let P=f[1];const W=(a=++f[1])=>(P!==a&&!w.size&&(P=a,y.forEach(([i])=>{const n=i[1](a);n>I&&(I=n)})),I),D=a=>(i,n)=>{const m=[...i];m[1]=[a,...m[1]],b(m,n)},y=new Map,z=(a,i)=>{if(w.size){const n=i[3](D(a));y.set(a,[i,n])}else y.set(a,[i])},Q=a=>{var i;const n=y.get(a);n&&(y.delete(a),(i=n[1])==null||i.call(n))},ie=a=>(w.add(a),w.size===1&&y.forEach(([n,m],R)=>{const k=n[3](D(R));y.set(R,[n,k])}),()=>{w.delete(a),w.size===0&&y.forEach(([n,m],R)=>{m&&(m(),y.set(R,[n]))})}),H=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),V=t(H,{deleteProperty(a,i){const n=Reflect.get(a,i);Q(i);const m=Reflect.deleteProperty(a,i);return m&&b(["delete",[i],n]),m},set(a,i,n,m){const R=Reflect.has(a,i),k=Reflect.get(a,i,m);if(R&&(e(k,n)||g.has(n)&&e(k,g.get(n))))return!0;Q(i),q(n)&&(n=ue(n)||n);let $=n;if(n instanceof Promise)n.then(A=>{n.status="fulfilled",n.value=A,b(["resolve",[i],A])}).catch(A=>{n.status="rejected",n.reason=A,b(["reject",[i],A])});else{!C.has(n)&&s(n)&&($=O(n));const A=!B.has($)&&C.get($);A&&z(i,A)}return Reflect.set(a,i,$,m),b(["set",[i],n,k]),!0}});g.set(o,V);const ae=[H,W,c,ie];return C.set(V,ae),Reflect.ownKeys(o).forEach(a=>{const i=Object.getOwnPropertyDescriptor(o,a);"value"in i&&(V[a]=o[a],delete i.value,delete i.writable),Object.defineProperty(H,a,i)}),V})=>[O,C,B,e,t,s,r,l,c,g,f],[pe]=fe();function M(e={}){return pe(e)}function U(e,t,s){const r=C.get(e);let l;const c=[],g=r[3];let f=!1;const o=g(h=>{if(c.push(h),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,o()}}function ge(e,t){const s=C.get(e),[r,l,c]=s;return c(r,l(),t)}const d=M({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),Z={state:d,subscribe(e){return U(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.5.9")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=Z.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},me=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=M({enabled:me,userSessionId:"",events:[],connectedWalletId:void 0}),he={state:u,subscribe(e){return U(u.events,()=>e(ge(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},E=M({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),v={state:E,subscribe(e){return U(E,()=>e(E))},setChains(e){E.chains=e},setWalletConnectUri(e){E.walletConnectUri=e},setIsCustomDesktop(e){E.isCustomDesktop=e},setIsCustomMobile(e){E.isCustomMobile=e},setIsDataLoaded(e){E.isDataLoaded=e},setIsUiLoaded(e){E.isUiLoaded=e},setIsAuth(e){E.isAuth=e}},x=M({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),N={state:x,subscribe(e){return U(x,()=>e(x))},setConfig(e){var t,s;he.initialize(),v.setChains(e.chains),v.setIsAuth(Boolean(e.enableAuthMode)),v.setIsCustomMobile(Boolean((t=e.mobileWallets)==null?void 0:t.length)),v.setIsCustomDesktop(Boolean((s=e.desktopWallets)==null?void 0:s.length)),p.setModalVersionInStorage(),Object.assign(x,e)}},F="https://explorer-api.walletconnect.com";async function K(e,t){const s=new URL(e,F);return s.searchParams.append("projectId",N.state.projectId),Object.entries(t).forEach(([r,l])=>{l&&s.searchParams.append(r,String(l))}),(await fetch(s)).json()}const j={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${F}/w3m/v1/getWalletImage/${e}?projectId=${N.state.projectId}`},getAssetImageUrl(e){return`${F}/w3m/v1/getAssetImage/${e}?projectId=${N.state.projectId}`}};var we=Object.defineProperty,ee=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,te=(e,t,s)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ve=(e,t)=>{for(var s in t||(t={}))be.call(t,s)&&te(e,s,t[s]);if(ee)for(var s of ee(t))ye.call(t,s)&&te(e,s,t[s]);return e};const se=p.isMobile(),L=M({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),De={state:L,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=N.state;if(e==="NONE"||t==="ALL"&&!e)return L.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await j.getAllListings(s),l=Object.values(r);l.sort((c,g)=>{const f=e.indexOf(c.id),O=e.indexOf(g.id);return f-O}),L.recomendedWallets=l}else{const{chains:s,isAuth:r}=v.state,l=s==null?void 0:s.join(","),c=p.isArray(t),g={page:1,sdks:r?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=se?await j.getMobileListings(g):await j.getDesktopListings(g);L.recomendedWallets=Object.values(f)}return L.recomendedWallets},async getWallets(e){const t=ve({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=N.state,{recomendedWallets:l}=L;if(r==="ALL")return L.wallets;l.length?t.excludedIds=l.map(I=>I.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),v.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:g}=e,{listings:f,total:O}=se?await j.getMobileListings(t):await j.getDesktopListings(t),o=Object.values(f),h=g?"search":"wallets";return L[h]={listings:[...L[h].listings,...o],total:O,page:c!=null?c:1},{listings:o,total:O}},getWalletImageUrl(e){return j.getWalletImageUrl(e)},getAssetImageUrl(e){return j.getAssetImageUrl(e)},resetSearch(){L.search={listings:[],total:0,page:1}}},_=M({open:!1}),G={state:_,subscribe(e){return U(_,()=>e(_))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=v.state;if(v.setWalletConnectUri(e==null?void 0:e.uri),v.setChains(e==null?void 0:e.chains),Z.reset("ConnectWallet"),s&&r)_.open=!0,t();else{const l=setInterval(()=>{const c=v.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),_.open=!0,t())},200)}})},close(){_.open=!1}};var Ie=Object.defineProperty,oe=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,We=(e,t)=>{for(var s in t||(t={}))Ee.call(t,s)&&ne(e,s,t[s]);if(oe)for(var s of oe(t))Le.call(t,s)&&ne(e,s,t[s]);return e};function Oe(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const T=M({themeMode:Oe()?"dark":"light"}),re={state:T,subscribe(e){return U(T,()=>e(T))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(T.themeMode=t),s&&(T.themeVariables=We({},s))}},S=M({open:!1,message:"",variant:"success"}),Ue={state:S,subscribe(e){return U(S,()=>e(S))},openToast(e,t){S.open=!0,S.message=e,S.variant=t},closeToast(){S.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=le.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window));class Ae{constructor(t){this.openModal=G.open,this.closeModal=G.close,this.subscribeModal=G.subscribe,this.setTheme=re.setThemeConfig,re.setThemeConfig(t),N.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await import("./index.36b92c74.js");const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),v.setIsUiLoaded(!0)}}}var je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",WalletConnectModal:Ae});export{he as $,N as C,De as G,Z as N,G as Q,re as X,Ue as Y,je as a,v as c,p as i};
