import{T as c,o as f,e as w,b as e,u as o,w as l,F as _,Z as g,a as t,n as V,g as b,i as k}from"./app-CSa_Yv1V.js";import{A as v}from"./AuthenticationCard-CmSUa7RS.js";import{_ as x}from"./AuthenticationCardLogo-DnOI0FmF.js";import{_ as m}from"./InputError-ueDuBJQr.js";import{_ as i}from"./InputLabel-B8-c6o_N.js";import{_ as y}from"./PrimaryButton-DVDDU-2l.js";import{_ as n}from"./TextInput-C_ONmJ5k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const P={class:"mt-4"},$={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},E={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(q,a)=>(f(),w(_,null,[e(o(g),{title:"Reset Password"}),e(v,null,{logo:l(()=>[e(x)]),default:l(()=>[t("form",{onSubmit:k(u,["prevent"])},[t("div",null,[e(i,{for:"email",value:"Email"}),e(n,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>o(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),t("div",P,[e(i,{for:"password",value:"Password"}),e(n,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>o(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),t("div",$,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(n,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>o(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),t("div",C,[e(y,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:l(()=>[b(" Reset Password ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{E as default};
