import{w as i}from"./writeEffect-2411ec05.js";import"./sleep-b92576d7.js";import"./index-701e56ad.js";import"./index-92e603ea.js";const o=(t,e)=>{new MutationObserver(r=>{r.forEach(s=>{const c=s.type==="attributes",a=s.target.classList.contains("typing");c&&a&&e()})}).observe(t,{attributes:!0,childList:!0,subtree:!0})},d=t=>t.forEach(e=>e.currentNode.textContent=""),g=async(t,e)=>{if(e.cascade)d(t);else{const{getLongestTextElement:n}=await import("./getLongestTextElement-6c459af3.js"),r=n(t);o(r,()=>e.dispatch("done"))}for(const n of t)e.cascade?(await i(n,e),n.currentNode.classList.replace("typing","finished-typing")):i(n,e).then(()=>{n.currentNode.classList.replace("typing","finished-typing")});e.cascade&&e.dispatch("done")};export{g as mode};