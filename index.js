import{a as f,S as m,i as a}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const d="48925713-6281e076b4b07f0ec4ad03690",y="https://pixabay.com/api/";async function g(o){try{return(await f.get(y,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(e){throw console.error("Error fetching images:",e),e}}const h=document.querySelector(".gallery");let i;function p(o){h.innerHTML=o.map(e=>`
        <a href="${e.largeImageURL}" class="gallery-item">
            <img src="${e.webformatURL}" alt="${e.tags}" title="Likes: ${e.likes}, Views: ${e.views}, Comments: ${e.comments}, Downloads: ${e.downloads}"/>
        </a>
    `).join(""),i?i.refresh():i=new m(".gallery a")}const c=document.querySelector("#search-form"),u=document.querySelector(".loader"),w=document.querySelector(".gallery");c.addEventListener("submit",async o=>{o.preventDefault();const e=o.target.elements.searchQuery.value.trim();if(!e){a.warning({title:"Warning",message:"Please enter a search term!"});return}w.innerHTML="",u.style.display="block";try{const s=await g(e);s.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):p(s)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}u.style.display="none",c.reset()});
//# sourceMappingURL=index.js.map
