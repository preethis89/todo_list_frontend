(this.webpackJsonptodo_list_frontend=this.webpackJsonptodo_list_frontend||[]).push([[0],{19:function(e,t,a){e.exports=a(48)},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(15),o=a.n(l),s=(a(24),a(18)),r=a(4),i=(a(25),a(5)),d=a.n(i);a(43);var u=function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-light",id:"nav1"},c.a.createElement("h1",{id:"mainTitle"},"My List")))};a(44);var m=function(){return c.a.createElement("div",{id:"footerpage"},c.a.createElement("footer",{className:"fixed-bottom"}))};a(45);var p=function(e){return c.a.createElement("div",{className:"container",id:"taskcount"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{id:"taskCount1"},c.a.createElement("h4",null,"Outstanding task to be completed - ",e.count)))))},E=a(3);var v=function(){return c.a.createElement("button",{type:"button",className:"btn btn-secondary px-3"},c.a.createElement(E.b,null))},f=a(16),b=a.n(f),h=a(17);var k=function(e){return c.a.createElement("div",{className:"row shadow",id:"todoItems"},c.a.createElement("div",{className:"col-6 col-md-4 tasktext"},c.a.createElement("div",{style:1===e.status?{fontStyle:"italic",textDecoration:"line-through",color:"#27a1d1"}:null},c.a.createElement(E.a,null),"  ",e.text)),c.a.createElement("div",{className:"col-6 col-md-2 tasktext"},1===e.priority?c.a.createElement("div",{class:"badge badge-pill badge-danger",style:{color:"white"}},"Urgent"):c.a.createElement("div",{class:"badge badge-pill badge-info",style:{color:"white"}},"Can Wait")),c.a.createElement("div",{className:"col col-md-3 tasktext"},c.a.createElement("div",{id:"duedate"},b()(e.dueDate).format("MMM Do YY"))),c.a.createElement("div",{className:"col col-md-3"},c.a.createElement("span",{className:"statusbtn"},c.a.createElement("div",null,1===e.status?c.a.createElement(v,null):c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){e.completedTaskFn(e.id)}},c.a.createElement(E.c,null)),c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.deleteTaskFn(e.id)}},c.a.createElement(h.a,null))))))};a(47);var g=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)("2020-04-20"),i=Object(r.a)(s,2),d=i[0],u=i[1],m=Object(n.useState)(!1),p=Object(r.a)(m,2),v=p[0],f=p[1];return c.a.createElement("div",{class:"container"},c.a.createElement("a",{class:"btn btn-secondary",id:"addbutton","data-toggle":"collapse",href:"#multiCollapseExample1",role:"button","aria-expanded":"false","aria-controls":"multiCollapseExample1"},c.a.createElement(E.d,null)),c.a.createElement("div",{class:"row",id:"addcollapse"},c.a.createElement("div",{class:"collapse multi-collapse",id:"multiCollapseExample1"},c.a.createElement("div",{class:"d-flex justify-content-around text-white"},c.a.createElement("div",{class:"p-2",id:"add-date"},c.a.createElement("div",{class:"input-group-prepend"},c.a.createElement("input",{type:"date",class:"form-control",value:d,onChange:function(e){u(e.target.value)}}))),c.a.createElement("div",{class:"p-2",id:"add-text"},c.a.createElement("input",{type:"text",class:"form-control",value:l,onChange:function(e){o(e.target.value)},placeholder:"Add task item here..."})),c.a.createElement("div",{class:"p-2",id:"chkbox"},c.a.createElement("input",{type:"checkbox",class:"form-check-input",id:"urgentCheckbox",value:v,onChange:function(e){f(e.target.checked)}}),c.a.createElement("label",{class:"form-check-label",htmlFor:"urgentCheckbox"},"Urgent")),c.a.createElement("div",{class:"p-2 addtask"},c.a.createElement("button",{class:"btn btn-primary",type:"button",id:"addtaskbtn",onClick:function(){e.addNewTaskFunc(l,d,v)}},"Add Task"))))))};var x=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){d.a.get("https://m9bspcv03c.execute-api.eu-west-1.amazonaws.com/dev/tasks").then((function(e){console.log(e.data),l(e.data)})).catch((function(e){console.log("failed",e)}))}),[]);var o=function(e){d.a.delete("https://m9bspcv03c.execute-api.eu-west-1.amazonaws.com/dev/tasks/".concat(e)).then((function(t){console.log("deleted",t);var n=a.filter((function(t){return t.taskId!==e}));l(n)})).catch((function(e){console.log("API error",e)}))},i=function(e){d.a.put("https://m9bspcv03c.execute-api.eu-west-1.amazonaws.com/dev/tasks/".concat(e),{status:!0}).then((function(t){var n=a.filter((function(t){return t.taskId===e&&(t.status=1),a}));l(n)})).catch((function(e){console.log("Error in task updation",e)}))};return c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement(p,{count:a.length}),c.a.createElement("div",{className:"add-task"},c.a.createElement(g,{addNewTaskFunc:function(e,t,n){d.a.post("https://m9bspcv03c.execute-api.eu-west-1.amazonaws.com/dev/tasks",{text:e,date:t,priority:n}).then((function(e){var t=e.data,n=[].concat(Object(s.a)(a),[t]);l(n)})).catch((function(e){console.log("Error adding the task",e)}))}})),c.a.createElement("div",{className:"my-4"},c.a.createElement("div",{className:"card card-body "},a.map((function(e){return c.a.createElement(k,{key:e.taskId,deleteTaskFn:o,completedTaskFn:i,text:e.text,status:e.status,priority:e.priority,dueDate:e.date,id:e.taskId})})))),c.a.createElement("div",null,c.a.createElement(m,null)))};o.a.render(c.a.createElement(x,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8f749ad0.chunk.js.map