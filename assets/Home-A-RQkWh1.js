import{_ as G,r as n,o as h,e as T,w as t,d as e,b as $,c as H,f as V,F as B,a}from"./index-5uaTwCfV.js";const U="/3D-FuM/assets/Dataset-3xibIfz-.jpg",M="/3D-FuM/assets/Generation-8t9d6g2u.jpg",N="/3D-FuM/assets/Leaderboard-r2FFmYzf.jpg",O={data(){return{text:"",subText:null,imgList:["Dataset","Generation","Leaderboard"],dataList:[],navList:[{name:"/ct2",navItem:"Dataset",navIcon:"el-icon-s-data"},{name:"/ct2",navItem:"Generation",navIcon:"el-icon-s-opportunity"},{name:"/",navItem:"Leaderboard",navIcon:"el-icon-s-marketing"}]}},methods:{handleImageClick(o){o===0&&this.$router.push({name:"Dataset"}),o===1&&this.$router.push({name:"Generation"}),o===2&&this.$router.push({name:"Leaderboard"})},getImgUrl(o,s){if(s=="png")return require("../assets/"+o+".png");if(s=="jpg"){console.log(`../assets/${o}`);const l=new URL(Object.assign({"../assets/Dataset.jpg":U,"../assets/Generation.jpg":M,"../assets/Leaderboard.jpg":N})[`../assets/${o}.jpg`],import.meta.url);return console.log("b",l),l}},getSerach(){this.subText=this.text,this.subText.toLowerCase().includes("dataset")?this.$router.push({name:"Dataset"}):this.subText.toLowerCase().includes("generation")?this.$router.push({name:"Generation"}):this.subText.toLowerCase().includes("leaderboard")?this.$router.push({name:"Leaderboard"}):this.subText.toLowerCase().includes("home")?this.$router.push({name:"Home"}):window.location.href="https://www.google.com"}}},S=a("span",{slot:"title"},"Home",-1),z=a("span",{slot:"title"},"Dataset",-1),A=a("span",{slot:"title"},"Generation",-1),q=a("span",{slot:"title"},"Leaderboard",-1),E=a("h3",null,null,-1),P={class:"rno-1-logo-case",style:{height:"100%"}};function R(o,s,l,Y,c,_){const f=n("HomeFilled"),r=n("el-icon"),i=n("el-menu-item"),g=n("DataAnalysis"),b=n("Opportunity"),x=n("TrendCharts"),L=n("el-menu"),w=n("el-aside"),v=n("el-input"),d=n("el-col"),y=n("el-button"),k=n("el-row"),C=n("el-header"),D=n("el-image"),I=n("el-carousel-item"),j=n("el-carousel"),F=n("el-main"),m=n("el-container");return h(),T(m,null,{default:t(()=>[e(w,{width:"200px"},{default:t(()=>[e(L,{"default-active":this.$route.path,router:""},{default:t(()=>[e(i,{key:"Home",index:"/Home"},{default:t(()=>[e(r,null,{default:t(()=>[e(f)]),_:1}),S]),_:1}),e(i,{key:"Dataset",index:"/Dataset"},{default:t(()=>[e(r,null,{default:t(()=>[e(g)]),_:1}),z]),_:1}),e(i,{key:"Generation",index:"/Generation"},{default:t(()=>[e(r,null,{default:t(()=>[e(b)]),_:1}),A]),_:1}),e(i,{key:"Leaderboard",index:"/Leaderboard"},{default:t(()=>[e(r,null,{default:t(()=>[e(x)]),_:1}),q]),_:1})]),_:1},8,["default-active"])]),_:1}),e(m,null,{default:t(()=>[e(C,null,{default:t(()=>[e(k,{gutter:20},{default:t(()=>[e(d,{span:6,offset:15},{default:t(()=>[e(v,{type:"text",placeholder:"Please enter your search",modelValue:c.text,"onUpdate:modelValue":s[0]||(s[0]=u=>c.text=u),maxlength:"15","show-word-limit":""},null,8,["modelValue"])]),_:1}),e(d,{span:2},{default:t(()=>[e(y,{type:"primary",icon:"search",onClick:_.getSerach},{default:t(()=>[$("Search")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(j,{interval:5e3,type:"card",height:"250px"},{default:t(()=>[(h(),H(B,null,V(3,(u,p)=>e(I,{key:u},{default:t(()=>[E,a("div",P,[e(D,{style:{width:"100%",height:"100%"},src:_.getImgUrl(c.imgList[p],"jpg"),fit:o.contain,onClick:J=>_.handleImageClick(p)},null,8,["src","fit","onClick"])])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})}const Q=G(O,[["render",R]]);export{Q as default};