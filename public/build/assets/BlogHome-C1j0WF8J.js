import{_ as m}from"./PublicLayout-BYQvrvHA.js";import{_}from"./PrimaryButton-DVDDU-2l.js";import{o as s,c as g,w as c,a as t,b as h,g as o,e as l,h as u,F as x,t as a}from"./app-CSa_Yv1V.js";import"./PublicNavLink-Ct_Eb_kf.js";const p={class:"bg-white"},b={class:"mt-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},f=t("h1",{class:"mb-4 text-3xl font-bold text-gray-900 dark:text-black md:text-5xl lg:text-6xl"},[o("Here are my "),t("span",{class:"text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400"},"blog posts"),o(".")],-1),y=t("p",{class:"text-lg font-normal text-gray-500 lg:text-xl dark:text-black"},"I create discussions on a range of topics including business dynamics, cybersecurity, computing technology, and more. Join me as we delve into these subjects, exploring the latest trends and uncovering technology.",-1),w={class:"mt-10"},k={class:"relative max-w-7xl p-6 bg-gradient-to-r border-gray-400 border rounded-lg shadow-md"},v=t("a",{href:"#"},[t("h5",{class:"mb-2 text-2xl font-bold tracking-tight text-black"},"Sign up for Notifications"),t("p",{class:"text-lg font-normal text-gray-700"},[o("Get notified whenever I post something new! You're always able to opt out at any time, I don't send spam :)"),t("b")])],-1),A={class:"mt-5"},B={class:"mt-5"},N={href:""},I={class:"max-w-7xl p-6 bg-white border-gray-400 border rounded-lg shadow-md"},S={class:"mb-2 text-2xl font-bold tracking-tight text-black"},D={class:"mb-3 font-normal text-gray-700"},F={class:"mb-3 text-sm font-thin text-gray-700"},T=t("br",null,null,-1),H={__name:"BlogHome",props:{posts:{type:Array}},setup(d){function n(r){const i=new Date(r),e={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0,timeZone:"America/New_York"};return new Intl.DateTimeFormat("en-US",e).format(i)}return(r,i)=>(s(),g(m,null,{default:c(()=>[t("body",p,[t("div",b,[f,y,t("div",w,[t("div",k,[v,h(_,{class:"mt-5 top-0 right-6 absolute"},{default:c(()=>[o("Sign Up")]),_:1})])]),t("div",A,[(s(!0),l(x,null,u(d.posts,e=>(s(),l("div",B,[t("a",N,[t("div",I,[t("h5",S,a(e.name),1),t("p",D,a(e.description),1),t("p",F,[o(a("Created at "+n(e.created_at)+" · Updated at "+n(e.updated_at))+" (Authored by Anush & Advin)",1),T,o("Estimated 11 seconds to read, containing 44 words.")])])])]))),256))])])])]),_:1}))}};export{H as default};
