import{r as j,m as d,i as r,o,b as e,j as a,t as l,l as u,h as g,u as x,q as z,a as y,f as k,F as C,P as c,n as B}from"./app-wF5SolYh.js";import{_ as D}from"./AppLayout-DCUwBhsa.js";import{_ as P}from"./Button-COWAl97y.js";import{_ as f}from"./Badge-D0Q5MHX0.js";/* empty css            */import"./useToast-BYzZ-uBf.js";import"./XMarkIcon-BhqYf4eJ.js";const V={class:"flex items-center justify-between"},q={class:"flex items-center space-x-4"},A={class:"py-12"},E={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},L={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},M={class:"p-6 bg-white border-b border-gray-200"},O={class:"overflow-x-auto"},F={class:"min-w-full divide-y divide-gray-200"},I={class:"bg-gray-50"},T={scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},U=["checked","indeterminate"],G={class:"bg-white divide-y divide-gray-200"},H={class:"px-6 py-4 whitespace-nowrap"},J=["checked","onChange"],K={class:"px-6 py-4 whitespace-nowrap"},Q={class:"text-sm font-medium text-gray-900"},R={class:"text-sm text-gray-500"},W={class:"px-6 py-4 whitespace-nowrap"},X={class:"text-sm text-gray-900"},Y={class:"text-sm text-gray-500"},Z={class:"px-6 py-4 whitespace-nowrap"},ee={class:"flex flex-wrap gap-2"},te={class:"px-6 py-4 whitespace-nowrap"},se={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},re={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2"},ae=["onClick"],ie={class:"mt-4"},le={class:"flex items-center justify-between"},ne={class:"flex-1 flex justify-between sm:hidden"},oe={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},de={class:"text-sm text-gray-700"},ue={class:"font-medium"},xe={class:"font-medium"},ce={class:"font-medium"},me={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},be={__name:"Index",props:{playlists:Object,filters:Object},setup(i){const n=j([]),$=m=>{const t=n.value.indexOf(m);t===-1?n.value.push(m):n.value.splice(t,1)},N=()=>{confirm(`Are you sure you want to delete ${n.value.length} playlists?`)&&router.delete(route("playlists.destroy",{ids:n.value}),{onSuccess:()=>{n.value=[]}})},S=m=>m?new Date(m).toLocaleDateString():"Never";return(m,t)=>(o(),d(D,null,{header:r(()=>[e("div",V,[t[2]||(t[2]=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Playlists ",-1)),e("div",q,[n.value.length>0?(o(),d(P,{key:0,variant:"danger",size:"sm",onClick:N},{default:r(()=>[a(" Delete Selected ("+l(n.value.length)+") ",1)]),_:1})):u("",!0),g(P,{href:"/playlists/create",size:"sm"},{default:r(()=>t[1]||(t[1]=[a(" Add Playlist ")])),_:1})])])]),default:r(()=>[g(x(z),{title:"Playlists"}),e("div",A,[e("div",E,[e("div",L,[e("div",M,[e("div",O,[e("table",F,[e("thead",I,[e("tr",null,[e("th",T,[e("input",{type:"checkbox",checked:n.value.length===i.playlists.data.length,indeterminate:n.value.length>0&&n.value.length<i.playlists.data.length,onChange:t[0]||(t[0]=s=>s.target.checked?n.value=i.playlists.data.map(p=>p.id):n.value=[]),class:"focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"},null,40,U)]),t[3]||(t[3]=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Name ",-1)),t[4]||(t[4]=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," User ",-1)),t[5]||(t[5]=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Content ",-1)),t[6]||(t[6]=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Status ",-1)),t[7]||(t[7]=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Expires ",-1)),t[8]||(t[8]=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Actions ",-1))])]),e("tbody",G,[(o(!0),y(C,null,k(i.playlists.data,s=>{var p,h,v,w,_,b;return o(),y("tr",{key:s.id},[e("td",H,[e("input",{type:"checkbox",checked:n.value.includes(s.id),onChange:pe=>$(s.id),class:"focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"},null,40,J)]),e("td",K,[e("div",Q,l(s.name),1),e("div",R,l(s.description),1)]),e("td",W,[e("div",X,l((p=s.user)==null?void 0:p.name),1),e("div",Y,l((h=s.user)==null?void 0:h.email),1)]),e("td",Z,[e("div",ee,[(v=s.channels)!=null&&v.length?(o(),d(f,{key:0},{default:r(()=>[a(l(s.channels.length)+" Channels ",1)]),_:2},1024)):u("",!0),(w=s.movies)!=null&&w.length?(o(),d(f,{key:1,variant:"info"},{default:r(()=>[a(l(s.movies.length)+" Movies ",1)]),_:2},1024)):u("",!0),(_=s.series)!=null&&_.length?(o(),d(f,{key:2,variant:"success"},{default:r(()=>[a(l(s.series.length)+" Series ",1)]),_:2},1024)):u("",!0),(b=s.bouquets)!=null&&b.length?(o(),d(f,{key:3,variant:"warning"},{default:r(()=>[a(l(s.bouquets.length)+" Bouquets ",1)]),_:2},1024)):u("",!0)])]),e("td",te,[g(f,{variant:s.is_active?"success":"danger"},{default:r(()=>[a(l(s.is_active?"Active":"Inactive"),1)]),_:2},1032,["variant"])]),e("td",se,l(S(s.expires_at)),1),e("td",re,[g(x(c),{href:`/playlists/${s.id}`,class:"text-primary-600 hover:text-primary-900"},{default:r(()=>t[9]||(t[9]=[a(" View ")])),_:2},1032,["href"]),g(x(c),{href:`/playlists/${s.id}/edit`,class:"text-primary-600 hover:text-primary-900"},{default:r(()=>t[10]||(t[10]=[a(" Edit ")])),_:2},1032,["href"]),g(x(c),{href:`/playlists/${s.id}/export`,class:"text-primary-600 hover:text-primary-900"},{default:r(()=>t[11]||(t[11]=[a(" Export ")])),_:2},1032,["href"]),e("button",{onClick:()=>m.router.delete(`/playlists/${s.id}`),class:"text-red-600 hover:text-red-900"}," Delete ",8,ae)])])}),128))])])]),e("div",ie,[e("div",le,[e("div",ne,[i.playlists.prev_page_url?(o(),d(x(c),{key:0,href:i.playlists.prev_page_url,class:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"},{default:r(()=>t[12]||(t[12]=[a(" Previous ")])),_:1},8,["href"])):u("",!0),i.playlists.next_page_url?(o(),d(x(c),{key:1,href:i.playlists.next_page_url,class:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"},{default:r(()=>t[13]||(t[13]=[a(" Next ")])),_:1},8,["href"])):u("",!0)]),e("div",oe,[e("div",null,[e("p",de,[t[14]||(t[14]=a(" Showing ")),e("span",ue,l(i.playlists.from),1),t[15]||(t[15]=a(" to ")),e("span",xe,l(i.playlists.to),1),t[16]||(t[16]=a(" of ")),e("span",ce,l(i.playlists.total),1),t[17]||(t[17]=a(" results "))])]),e("div",null,[e("nav",me,[i.playlists.prev_page_url?(o(),d(x(c),{key:0,href:i.playlists.prev_page_url,class:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},{default:r(()=>t[18]||(t[18]=[e("span",{class:"sr-only"},"Previous",-1),e("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)])),_:1},8,["href"])):u("",!0),(o(!0),y(C,null,k(i.playlists.links.slice(1,-1),(s,p)=>(o(),d(x(c),{key:p,href:s.url,class:B([s.active?"z-10 bg-primary-50 border-primary-500 text-primary-600":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50","relative inline-flex items-center px-4 py-2 border text-sm font-medium"])},{default:r(()=>[a(l(s.label),1)]),_:2},1032,["href","class"]))),128)),i.playlists.next_page_url?(o(),d(x(c),{key:1,href:i.playlists.next_page_url,class:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},{default:r(()=>t[19]||(t[19]=[e("span",{class:"sr-only"},"Next",-1),e("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1)])),_:1},8,["href"])):u("",!0)])])])])])])])])])]),_:1}))}};export{be as default};
