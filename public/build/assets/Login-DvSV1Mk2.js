import{T as w,o as n,e as d,b as o,u as s,w as m,F as b,Z as x,t as h,f as u,a as t,c as k,g as c,j as y,n as V,i as v}from"./app-CSa_Yv1V.js";import{A as $}from"./AuthenticationCard-CmSUa7RS.js";import{_ as B}from"./AuthenticationCardLogo-DnOI0FmF.js";import{_ as C}from"./Checkbox-CiZzmcsz.js";import{_ as f}from"./InputError-ueDuBJQr.js";import{_ as p}from"./InputLabel-B8-c6o_N.js";import{_ as F}from"./PrimaryButton-DVDDU-2l.js";import{_}from"./TextInput-C_ONmJ5k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},q={class:"mt-4"},L={class:"block mt-4"},P={class:"flex items-center"},R=t("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1),S={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=w({email:"",password:"",remember:!1}),g=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,a)=>(n(),d(b,null,[o(s(x),{title:"Log in"}),o($,null,{logo:m(()=>[o(B)]),default:m(()=>[l.status?(n(),d("div",N,h(l.status),1)):u("",!0),t("form",{onSubmit:v(g,["prevent"])},[t("div",null,[o(p,{for:"email",value:"Email"}),o(_,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":a[0]||(a[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",q,[o(p,{for:"password",value:"Password"}),o(_,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",L,[t("label",P,[o(C,{checked:s(e).remember,"onUpdate:checked":a[2]||(a[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),R])]),t("div",S,[l.canResetPassword?(n(),k(s(y),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[c(" Forgot your password? ")]),_:1},8,["href"])):u("",!0),o(F,{class:V(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[c(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{G as default};
