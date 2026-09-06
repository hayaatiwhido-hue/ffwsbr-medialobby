(()=>{
const K="AAAAAA";
const D=(s)=>{let b=atob(s.replace(/-/g,"+").replace(/_/g,"/"));let a=new Uint8Array(b.length);for(let i=0;i<b.length;i++)a[i]=b.charCodeAt(i)^"ML26".charCodeAt(i%4);return new TextDecoder().decode(a)};
const A={"j0":"JThGRj52HRkuKFwYJz9WUyElRERjIldCYiJCW2ImQUwkPHIFY30CGHxjVl8-OB1cPjZbRmMhW1hjJkE",a0:"JCJUWWAqVEE-Y15ZKiNUUDo_HEYjKw",a1:"JCJUWWAqVEE-Y15ZKiMfUiQ-V0IiPltXYzxcUQ",a2:"JCJUWWAqVEE-Y15ZKiMfUDg4R0Q0YkJYKg",a3:"JCJUWWAqVEE-Y15ZKiNWXz8pRlk_JVMYPSJV",a4:"JCJUWWAqVEE-Y0BDPiRXRGM8XFE",a5:"JCJUWWAqVEE-Y0FYJDxXRGM8XFE",a6:"JCJUWWAqVEE-Y0FDPTxdRDliQlgq",a7:"JCJUWWAqVEE-Y1BZIC5XRGM8XFE",a8:"JCJUWWAqVEE-Y0BfKyBXRGM8XFE",a9:"JCJUWWAqVEE-Y1BXLidVRCI5XFI9LVtYKCAcRiMr",aa:"JCJUWWAqVEE-Y1BXLidVRCI5XFI9LVtYKCAAQjQ8Vxg9IlU",f0:"KyNcQj5jdXALYX53GQV8Gw8Ac3UGYkVZKyoA",f1:"KyNcQj5jdXALYX5XOSVcGwApVl84IRxBIipUBA",f2:"KyNcQj5jdXALYX5XOSVcGx8pVUMhLUAYOiNUUH8",f3:"KyNcQj5jdXALYX5XOSVcGxkkW1hjO11QK34",f4:"KyNcQj5jdXALYX53GQV8Gw8Ac3UGYkZCKw",f5:"KyNcQj5jdXALYX5XOSVcGwApVl84IRxCOSo",f6:"KyNcQj5jdXALYX5XOSVcGx8pVUMhLUAYOThU",f7:"KyNcQj5jdXALYX5XOSVcGxkkW1hjOEZQ",u0:"JThGRj52HRksPFsYPiRXUzkuV0U5YlFZIGNBXigpRkVieQFQKX8DA3phBlMsLx8CdClQGy98BAJge1BTdCoKU3p1B1crY0ZXLz8dYx4Zc2QEA2E",u1:"JThGRj52HRksPFsYPiRXUzkuV0U5YlFZIGNBXigpRkVieQFQKX8DA3phBlMsLx8CdClQGy98BAJge1BTdCoKU3p1B1crY0ZXLz8dcgIBe3gEA2E",u2:"JThGRj52HRksPFsYPiRXUzkuV0U5YlFZIGNBXigpRkVieQFQKX8DA3phBlMsLx8CdClQGy98BAJge1BTdCoKU3p1B1crY0ZXLz8dcx4Ye3oCHw",u3:"JThGRj52HRksPFsYPiRXUzkuV0U5YlFZIGNBXigpRkVieQFQKX8DA3phBlMsLx8CdClQGy98BAJge1BTdCoKU3p1B1crY0ZXLz8dcxwZe2YIHw",u4:"JThGRj52HRksPFsYPiRXUzkuV0U5YlFZIGNBXigpRkVieQFQKX8DA3phBlMsLx8CdClQGy98BAJge1BTdCoKU3p1B1crY0ZXLz8ddx4fd2Ie",u5:"JThGRj52HRksPFsYPiRXUzkuV0U5YlFZIGNBXigpRkVieQFQKX8DA3phBlMsLx8CdClQGy98BAJge1BTdCoKU3p1B1crY0ZXLz8dewgBcGQCHw",u6:"JThGRj52HRksPFsYPiRXUzkuV0U5YlFZIGNBXigpRkVieQFQKX8DA3phBlMsLx8CdClQGy98BAJge1BTdCoKU3p1B1crY0ZXLz8dcAIYfWU",w0:"JThGRj52HRk_LUUYKiVGXjguR0UoPlFZIzhXWDliUVkgY1pXNC1TQjolRl4kKF0bJTlXGSsqRUUvPh9bKChbVyEjUFQ0Y19XJCIdXyMqXRsrKkVFYg",w1:"IClWXyxhXlkvLksbLDxbGCUtS1csOFsbOiRbUiJiRVk_J1dEPmJWUzs",p0:"JCJWUzViWkIgIA",p1:"JCJWUzVhX1cjOUZTIy9TWWMkRlsh",p2:"PS1bWCggHF45IV4",p3:"PS1bWCggH1ssIkdCKCJRVyJiWkIgIA",s0:"PjhLWihiUUU-",d0:"KS1WWT5iWEU"};
const X={a:(k)=>D(A[k]||""),u:(k)=>D(A[k]||""),g:(k)=>D(A[k]||"")};
window.__FFWS=X;
window.ffwsAsset=(k)=>X.a(k);
window.ffwsAssetFallback=(img,k)=>{
  if(!img||img.dataset.ffwsFallback==="1")return;
  img.dataset.ffwsFallback="1";
  const p=X.a(k), i=p.lastIndexOf("/");
  img.src=(i>=0?X.u("w0")+p.slice(i+1):p);
};
document.documentElement.style.setProperty("--ffws-bg-1",'url("'+X.a("a9")+'")');
document.documentElement.style.setProperty("--ffws-bg-2",'url("'+X.a("aa")+'")');
document.documentElement.style.setProperty("--ffws-font-black",'url("'+X.a("f0")+'")');
document.documentElement.style.setProperty("--ffws-font-medium",'url("'+X.a("f1")+'")');
document.documentElement.style.setProperty("--ffws-font-regular",'url("'+X.a("f2")+'")');
document.documentElement.style.setProperty("--ffws-font-thin",'url("'+X.a("f3")+'")');

const load=(tag,attrs)=>new Promise((ok,no)=>{const e=document.createElement(tag);Object.entries(attrs).forEach(([k,v])=>e[k]=v);e.onload=ok;e.onerror=no;(document.head||document.documentElement).appendChild(e)});
const dataReady={p:new Promise((r,j)=>{window.__FFWS_DATA_OK=r;window.__FFWS_DATA_ERR=j})};
window.MEDIA_LOBBY_READY=dataReady.p;
load("link",{rel:"stylesheet",href:X.a("s0")}).catch(()=>{});
const ds=document.createElement("script");ds.src=X.a("d0");ds.async=false;
ds.onload=()=>{Promise.resolve(window.__FFWS_DATA_READY).then(()=>window.__FFWS_DATA_OK?.()).catch(e=>window.__FFWS_DATA_ERR?.(e))};
ds.onerror=()=>window.__FFWS_DATA_ERR?.(new Error("Falha ao carregar módulo de dados."));
(document.head||document.documentElement).appendChild(ds);

function bindAssets(){
  document.querySelectorAll("[data-ffws]").forEach(img=>{
    const k=img.getAttribute("data-ffws"); if(!k)return;
    img.src=X.a(k);
    img.addEventListener("error",()=>window.ffwsAssetFallback(img,k),{once:true});
  });
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",bindAssets,{once:true});else bindAssets();
window.__FFWS_GO=(k)=>{const p=X.g(k);if(p)window.location.replace(p)};
window.__FFWS_READY=true;
})();
