import{a as E,i as w,S as v}from"./assets/vendor-acffbe1e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function u(t,o){const s="42152818-0d69fd49112a74751654c42bc",n="https://pixabay.com/api/",e={key:s,lang:"en",order:"popular",q:t,per_page:15,page:o};return(await E.get(n,{params:e})).data}function S(t){const{largeImageURL:o,webformatURL:s,tags:n,likes:e,views:r,comments:a,downloads:L}=t;return`<li class="list-item"><a href="${o}">
          <img class="item-img" src="${s}" alt="${n}" ></a><div class="container"><p><b>Likes: </b><br>${e}</p><p><b>Views: </b><br>${r}</p><p><b>Comments: </b><br>${a}</p><p><b>Downloads: </b><br>${L}</p>
          </div></li>`}function q(t){return t.map(S).join("")}const i={formEl:document.querySelector("form"),inputEl:document.querySelector("input"),listEl:document.querySelector("ul"),loaderEl:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};y();let c,l,f;i.formEl.addEventListener("submit",x);i.btnLoad.addEventListener("click",P);function m(){const t=new v(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom",captionsData:"alt"});t.on("show.simplelightbox"),t.refresh()}async function x(t){if(t.preventDefault(),c=i.inputEl.value.trim(),l=1,!c){d("Empty field");return}h();try{const o=await u(c,l);o.totalHits===0&&d("Sorry, there are no images matching your search query. Please try again!"),f=Math.ceil(o.totalHits/15),i.listEl.innerHTML="",p(o.hits),m()}catch(o){d(o)}g(),b(),t.target.reset()}async function P(){l+=1,h();const t=await u(c,l);p(t.hits),m(),g(),b();const o=i.listEl.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:o*2})}function p(t){const o=q(t);i.listEl.insertAdjacentHTML("beforeend",o)}function h(){i.loaderEl.style.display="flex"}function g(){i.loaderEl.style.display="none"}function d(t){w.error({title:"Error",message:t})}function $(){i.btnLoad.classList.remove("hidden")}function y(){i.btnLoad.classList.add("hidden")}function b(){l>=f?(y(),d("We're sorry, but you've reached the end of search results.")):$()}
//# sourceMappingURL=commonHelpers.js.map
