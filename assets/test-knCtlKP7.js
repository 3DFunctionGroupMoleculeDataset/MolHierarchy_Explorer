import{_,r as a,o as f,c as v,d as l,w as u,a as h,b as T}from"./index-5uaTwCfV.js";const x={data(){return{selectedValue:"",activeTab:"tab1",c1:0,c2:0,c3:0,result:0}},watch:{activeTab(){this.updateResult()},c1(){this.updateResult()},c2(){this.updateResult()},c3(){this.updateResult()}},methods:{copyToClipboard(){const n=document.createElement("textarea");n.value=this.selectedValue,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),console.log("已复制到剪贴板")},updateResult(){this.activeTab==="tab1"?this.result=this.c1+this.c2:this.activeTab==="tab2"&&(this.result=this.c3)}}};function C(n,t,y,U,e,i){const r=a("el-alert"),s=a("el-input-number"),c=a("el-tab-pane"),m=a("el-tabs"),d=a("el-option"),b=a("el-select"),p=a("el-input"),V=a("el-button");return f(),v("div",null,[l(m,{modelValue:e.activeTab,"onUpdate:modelValue":t[3]||(t[3]=o=>e.activeTab=o)},{default:u(()=>[l(c,{label:"Tab 1",name:"tab1"},{default:u(()=>[l(r,{title:"希腊字母 alpha:",type:"info",description:"这是希腊字母 alpha: α","show-icon":""}),l(s,{modelValue:e.c1,"onUpdate:modelValue":t[0]||(t[0]=o=>e.c1=o),controls:!1,placeholder:"输入c1"},null,8,["modelValue"]),l(s,{modelValue:e.c2,"onUpdate:modelValue":t[1]||(t[1]=o=>e.c2=o),controls:!1,placeholder:"输入c2"},null,8,["modelValue"])]),_:1}),l(c,{label:"Tab 2",name:"tab2"},{default:u(()=>[l(s,{modelValue:e.c3,"onUpdate:modelValue":t[2]||(t[2]=o=>e.c3=o),controls:!1,placeholder:"输入c3"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),h("div",null,[l(b,{modelValue:e.selectedValue,"onUpdate:modelValue":t[4]||(t[4]=o=>e.selectedValue=o),placeholder:"请选择"},{default:u(()=>[l(d,{label:"选项1",value:"option1"}),l(d,{label:"选项2",value:"option2"})]),_:1},8,["modelValue"]),l(p,{modelValue:e.selectedValue,"onUpdate:modelValue":t[5]||(t[5]=o=>e.selectedValue=o),value:e.selectedValue,readonly:"",type:"textarea",rows:4},null,8,["modelValue","value"]),l(V,{onClick:i.copyToClipboard},{default:u(()=>[T("复制")]),_:1},8,["onClick"])]),l(p,{value:e.result,placeholder:"展示结果",disabled:""},null,8,["value"])])}const R=_(x,[["render",C]]);export{R as default};