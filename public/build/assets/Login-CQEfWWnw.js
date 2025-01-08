import{C as d,a as u,b as e,k as i,d as n,v as l,u as r,j as p,o as m}from"./app-wF5SolYh.js";/* empty css            */const c={class:"min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"},f={class:"max-w-md w-full space-y-8"},b={class:"rounded-md shadow-sm -space-y-px"},x=["disabled"],h={__name:"Login",setup(g){const o=d({username:"",password:""}),a=()=>{o.post(route("client.login"))};return(y,s)=>(m(),u("div",c,[e("div",f,[s[5]||(s[5]=e("div",null,[e("h2",{class:"mt-6 text-center text-3xl font-extrabold text-white"}," Sign in to your account ")],-1)),e("form",{class:"mt-8 space-y-6",onSubmit:i(a,["prevent"])},[e("div",b,[e("div",null,[s[2]||(s[2]=e("label",{for:"username",class:"sr-only"},"Username",-1)),n(e("input",{id:"username","onUpdate:modelValue":s[0]||(s[0]=t=>r(o).username=t),type:"text",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Username"},null,512),[[l,r(o).username]])]),e("div",null,[s[3]||(s[3]=e("label",{for:"password",class:"sr-only"},"Password",-1)),n(e("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=t=>r(o).password=t),type:"password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Password"},null,512),[[l,r(o).password]])])]),e("div",null,[e("button",{type:"submit",disabled:r(o).processing,class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"},s[4]||(s[4]=[e("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},[e("i",{class:"fas fa-sign-in-alt"})],-1),p(" Sign in ")]),8,x)])],32)])]))}};export{h as default};
