"use strict";(self.webpackChunkFront_End=self.webpackChunkFront_End||[]).push([[221],{9221:(Oe,y,d)=>{d.r(y),d.d(y,{TaskModule:()=>we});var u=d(4859),i=d(4006),P=d(3865),h=d(6895),k=d(858),T=d(262),f=d(9646),D=d(1696),e=d(4650),_=d(590),A=d(8505),N=d(529),F=d(9086);let g=(()=>{class t{constructor(c,o){this.httpClient=c,this.authservice=o,this.API="18.230.156.247:3000/api/Task"}list(){return this.httpClient.get(this.API).pipe((0,_.P)(),(0,A.b)(c=>{console.log(c)}))}listByProject(){return this.httpClient.get(this.API+"/project/"+window.localStorage.getItem("projeto")).pipe((0,_.P)(),(0,A.b)(c=>{console.log(c)}))}save(c){return console.log(c),c.id?(console.log("update"),this.update(c)):(console.log("create"),this.create(c))}create(c){return this.httpClient.post(this.API,c).pipe((0,_.P)())}update(c){return this.httpClient.put(`${this.API}/${c.id}`,c).pipe((0,_.P)())}loadById(c){return this.httpClient.get(`${this.API}/${c}`)}delete(c){return this.httpClient.delete(this.API+"/"+c.id)}}return t.\u0275fac=function(c){return new(c||t)(e.LFG(N.eN),e.LFG(F.e))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var q=d(5412),m=d(5717),x=d(3546),Z=d(3683),R=d(1572),M=d(7392);function B(t,n){1&t&&(e.TgZ(0,"th",24),e._uU(1," Nome "),e.qZA())}function Y(t,n){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.qZA()),2&t){const c=n.$implicit;e.xp6(1),e.hij(" ",c.name," ")}}function j(t,n){1&t&&(e.TgZ(0,"th",24),e._uU(1," Descric\xe3o "),e.qZA())}function S(t,n){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.qZA()),2&t){const c=n.$implicit;e.xp6(1),e.hij(" ",c.description," ")}}function J(t,n){1&t&&(e.TgZ(0,"th",24),e._uU(1," Observa\xe7\xe3o "),e.qZA())}function Q(t,n){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.qZA()),2&t){const c=n.$implicit;e.xp6(1),e.hij(" ",c.notes," ")}}function L(t,n){1&t&&(e.TgZ(0,"th",24),e._uU(1," Completo "),e.qZA())}function H(t,n){1&t&&(e.TgZ(0,"span",27),e._uU(1,"Sim"),e.qZA())}function $(t,n){1&t&&(e.TgZ(0,"span",27),e._uU(1,"N\xe3o"),e.qZA())}function G(t,n){if(1&t&&(e.TgZ(0,"td",25),e.YNc(1,H,2,0,"span",26),e.YNc(2,$,2,0,"span",26),e.qZA()),2&t){const c=n.$implicit;e.xp6(1),e.Q6J("ngIf",c.completed),e.xp6(1),e.Q6J("ngIf",!c.completed)}}function V(t,n){1&t&&(e.TgZ(0,"th",24),e._uU(1," Prazo"),e.qZA())}function X(t,n){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const c=n.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.deadline,"dd/MM/yyyy HH:mm:ss")," ")}}function K(t,n){1&t&&(e.TgZ(0,"th",24),e._uU(1," Vencido"),e.qZA())}function W(t,n){1&t&&(e.TgZ(0,"span",27),e._uU(1,"Sim"),e.qZA())}function ee(t,n){1&t&&(e.TgZ(0,"span",27),e._uU(1,"N\xe3o"),e.qZA())}function ce(t,n){if(1&t&&(e.TgZ(0,"td",25),e.YNc(1,W,2,0,"span",26),e.YNc(2,ee,2,0,"span",26),e.qZA()),2&t){const c=n.$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",o.isPrazoEsgotado(c.dealine)),e.xp6(1),e.Q6J("ngIf",!o.isPrazoEsgotado(c.dealine))}}function te(t,n){1&t&&(e.TgZ(0,"th",24),e._uU(1," Cria\xe7\xe3o"),e.qZA())}function oe(t,n){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const c=n.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.createdAt,"dd/MM/yyyy HH:mm:ss")," ")}}function ne(t,n){1&t&&(e.TgZ(0,"th",24),e._uU(1," Atualiza\xe7\xe3o "),e.qZA())}function ae(t,n){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const c=n.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.updatedAt,"dd/MM/yyyy HH:mm:ss")," ")}}function de(t,n){if(1&t){const c=e.EpF();e.TgZ(0,"mat-header-cell")(1,"button",28),e.NdJ("click",function(){e.CHM(c);const a=e.oxw(2);return e.KtG(a.Add())}),e.TgZ(2,"mat-icon"),e._uU(3,"add"),e.qZA()()()}}function re(t,n){if(1&t){const c=e.EpF();e.TgZ(0,"mat-cell")(1,"button",29),e.NdJ("click",function(){const r=e.CHM(c).$implicit,s=e.oxw(2);return e.KtG(s.onEdit(r))}),e.TgZ(2,"mat-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",30),e.NdJ("click",function(){const r=e.CHM(c).$implicit,s=e.oxw(2);return e.KtG(s.onDelete(r))}),e.TgZ(5,"mat-icon"),e._uU(6,"delete"),e.qZA()()()}}function ie(t,n){1&t&&e._UZ(0,"tr",31)}function me(t,n){1&t&&e._UZ(0,"tr",32)}function se(t,n){if(1&t&&(e.TgZ(0,"div",7)(1,"table",8),e.ynx(2,9),e.YNc(3,B,2,0,"th",10),e.YNc(4,Y,2,1,"td",11),e.BQk(),e.ynx(5,12),e.YNc(6,j,2,0,"th",10),e.YNc(7,S,2,1,"td",11),e.BQk(),e.ynx(8,13),e.YNc(9,J,2,0,"th",10),e.YNc(10,Q,2,1,"td",11),e.BQk(),e.ynx(11,14),e.YNc(12,L,2,0,"th",10),e.YNc(13,G,3,2,"td",11),e.BQk(),e.ynx(14,15),e.YNc(15,V,2,0,"th",10),e.YNc(16,X,3,4,"td",11),e.BQk(),e.ynx(17,16),e.YNc(18,K,2,0,"th",10),e.YNc(19,ce,3,2,"td",11),e.BQk(),e.ynx(20,17),e.YNc(21,te,2,0,"th",10),e.YNc(22,oe,3,4,"td",11),e.BQk(),e.ynx(23,18),e.YNc(24,ne,2,0,"th",10),e.YNc(25,ae,3,4,"td",11),e.BQk(),e.ynx(26,19),e.YNc(27,de,4,0,"mat-header-cell",20),e.YNc(28,re,7,0,"mat-cell",21),e.BQk(),e.YNc(29,ie,1,0,"tr",22),e.YNc(30,me,1,0,"tr",23),e.qZA()()),2&t){const c=n.ngIf,o=e.oxw();e.xp6(1),e.Q6J("dataSource",c),e.xp6(28),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns)}}function le(t,n){1&t&&(e.TgZ(0,"div",33),e._UZ(1,"mat-spinner"),e.qZA())}let he=(()=>{class t{constructor(c,o,a,r){this.taskService=c,this.router=o,this.route=a,this.dialog=r,this.displayedColumns=["name","description","notes","completed","deadline","vencido","updatedAt","createdAt","actions"],this.tasks=[],this.task$=this.taskService.listByProject().pipe((0,T.K)(s=>(this.onErro("Erro ao carregar. "),(0,f.of)([]))))}ngOnInit(){}onErro(c){this.dialog.open(D.I,{data:c})}onEdit(c){this.router.navigate(["editar",c.id],{relativeTo:this.route}),console.log(c.name)}Add(){this.router.navigate(["novo"],{relativeTo:this.route})}refresh(){this.task$=this.taskService.listByProject().pipe((0,T.K)(c=>(this.onErro("Erro ao carregar Tarefas."),(0,f.of)([]))))}onDelete(c){this.taskService.delete(c).subscribe(o=>{this.tasks=this.tasks.filter(a=>a!==c),alert("task Deletado"),this.refresh()})}isPrazoEsgotado(c){return new Date>=c}onback(){this.router.navigate(["projeto"],{relativeTo:this.route})}}return t.\u0275fac=function(c){return new(c||t)(e.Y36(g),e.Y36(k.F0),e.Y36(k.gz),e.Y36(q.uw))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-task"]],decls:12,vars:4,consts:[[1,"container"],["color","primary"],[1,"toolbar"],["class","tabela_container",4,"ngIf","ngIfElse"],["loading",""],[1,"button_voltar"],["routerLink","/projeto","color","primary"],[1,"tabela_container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","notes"],["matColumnDef","completed"],["matColumnDef","deadline"],["matColumnDef","vencido"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","actions"],[4,"matHeaderCellDef"],[4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["class","completo",4,"ngIf"],[1,"completo"],["mat-mini-fab","","color","accent","aria-label","adicionar servi\xe7o",3,"click"],["mat-icon-button","","color","primary","aria-label","Editar  servi\xe7o",3,"click"],["mat-icon-button","","color","warn","aria-label","Remover  servi\xe7o",3,"click"],["mat-header-row",""],["mat-row",""],[1,"loading-spinner"]],template:function(c,o){if(1&c&&(e.TgZ(0,"div",0)(1,"mat-card")(2,"mat-toolbar",1)(3,"span",2),e._uU(4,"Tarefas Cadastradas"),e.qZA()(),e.YNc(5,se,31,3,"div",3),e.ALo(6,"async"),e.YNc(7,le,2,0,"ng-template",null,4,e.W1O),e.qZA(),e.TgZ(9,"div",5)(10,"button",6),e._uU(11," Voltar "),e.qZA()()()),2&c){const a=e.MAs(8);e.xp6(5),e.Q6J("ngIf",e.lcZ(6,2,o.task$))("ngIfElse",a)}},dependencies:[h.O5,k.rH,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,x.a8,Z.Ye,R.Ou,u.RK,u.nh,M.Hw,h.Ov,h.uU],styles:[".container[_ngcontent-%COMP%]{width:80%;max-width:1200px;margin:0 auto;font-family:Roboto Condensed,sans-serif}mat-card[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin-top:15px;border:solid 1px #d9d9d9;border-radius:8px}mat-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;border-radius:8px 8px 0 0}span[_ngcontent-%COMP%]{font-size:30px}div.tabela_container[_ngcontent-%COMP%]{width:99%}table[_ngcontent-%COMP%]{width:100%;margin:5px;box-shadow:none;color:#404040}td[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%]{padding:10px;font-size:14px;color:#404040;height:100px}th[_ngcontent-%COMP%]{font-size:18px;color:#404040}span.completo[_ngcontent-%COMP%]{font-size:14px;color:#404040;height:100px}div.button_voltar[_ngcontent-%COMP%]{margin-top:25px;width:100%;justify-content:center;align-items:center;display:flex}.button_voltar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;background-color:#20b200;padding:20px;width:20%;font-size:20px;font-weight:700;border:solid 1px #d9d9d9;border-radius:8px}.loading-spinner[_ngcontent-%COMP%]{padding:25px;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.15)}"]}),t})();var ke=d(7009),v=d(9549),E=d(4144);let I=(()=>{class t{constructor(c,o,a,r,s,b){this.formBuilder=c,this.service=o,this.snackBar=a,this.location=r,this.route=s,this.authService=b,this.isChecked=!1;const C=new Date,U=new h.uU("en-US").transform(C,"dd/MM/yyyy HH:mm:ss"),ze=window.localStorage.getItem("projeto");this.form=this.formBuilder.group({id:[null],name:[null],description:[null],createdAt:U,updatedAt:U,notes:[null],completed:[null],deadline:[null],id_project:ze})}ngOnInit(){this.task=this.route.snapshot.data.tarefa;const c=window.localStorage.getItem("projeto");this.task&&(this.form.setValue({id:this.task.id,name:this.task.name,description:this.task.description,createdAt:this.task.createdAt,updatedAt:this.task.updatedAt,notes:this.task.notes,completed:this.task.completed,deadline:this.task.deadline,id_project:c}),console.log("ID do tarefa:",this.task.id),this.task.completed&&(this.isChecked=this.task.completed))}onCheckboxChange(){console.log(this.isChecked)}onSubmit(){this.service.save(this.form.value).subscribe(c=>this.onSucess(),c=>this.onError())}onCancel(){this.location.back()}onSucess(){this.snackBar.open("Tarefa salvo com sucesso!","",{duration:5e3}),this.onCancel()}onError(){this.snackBar.open("Erro ao salvar Tarefa","",{duration:5e3})}}return t.\u0275fac=function(c){return new(c||t)(e.Y36(i.qu),e.Y36(g),e.Y36(ke.ux),e.Y36(h.Ye),e.Y36(k.gz),e.Y36(F.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-task-form"]],decls:40,vars:2,consts:[[1,"container"],[1,"min-width",3,"formGroup"],[1,"full-width"],["matInput","","placeholder","Nome","formControlName","name"],["matInput","","placeholder","Atualiza\xe7\xe3o","formControlName","updatedAt"],["matInput","","placeholder","Cria\xe7\xe3o","formControlName","createdAt"],["type","date","matInput","","placeholder","Prazo","formControlName","deadline"],["name","","id","","cols","20","rows","6","matInput","","placeholder","Observa\xe7\xe3o","formControlName","notes"],["name","","id","","cols","20","rows","6","matInput","","placeholder","Descri\xe7\xe3o","formControlName","description"],[1,"checkbox-container"],["type","checkbox","id","myCheckbox","formControlName","completed",1,"checkbox-input",3,"ngModel","ngModelChange","change"],["for","myCheckbox",1,"checkbox-custom"],[1,"checkbox-label"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(c,o){1&c&&(e.TgZ(0,"div",0)(1,"mat-card")(2,"mat-toolbar"),e._uU(3,"Detalhes da Tarefa"),e.qZA(),e.TgZ(4,"mat-card-content")(5,"form",1)(6,"mat-form-field",2)(7,"mat-label"),e._uU(8,"NOME"),e.qZA(),e._UZ(9,"input",3),e.qZA(),e.TgZ(10,"mat-form-field",2)(11,"mat-label"),e._uU(12,"Atualiza\xe7\xe3o"),e.qZA(),e._UZ(13,"input",4),e.qZA(),e.TgZ(14,"mat-form-field",2)(15,"mat-label"),e._uU(16,"Cria\xe7\xe3o"),e.qZA(),e._UZ(17,"input",5),e.qZA(),e.TgZ(18,"mat-form-field",2)(19,"mat-label"),e._uU(20,"Prazo"),e.qZA(),e._UZ(21,"input",6),e.qZA(),e.TgZ(22,"mat-form-field",2)(23,"mat-label"),e._uU(24,"Observa\xe7\xe3o"),e.qZA(),e._UZ(25,"textarea",7),e.qZA(),e.TgZ(26,"mat-form-field",2)(27,"mat-label"),e._uU(28,"Descri\xe7\xe3o"),e.qZA(),e._UZ(29,"textarea",8),e.qZA(),e.TgZ(30,"div",9)(31,"input",10),e.NdJ("ngModelChange",function(r){return o.isChecked=r})("change",function(){return o.onCheckboxChange()}),e.qZA(),e._UZ(32,"label",11),e.TgZ(33,"span",12),e._uU(34,"Finalizado?"),e.qZA()()()(),e.TgZ(35,"mat-card-actions")(36,"button",13),e.NdJ("click",function(){return o.onSubmit()}),e._uU(37,"Salvar"),e.qZA(),e.TgZ(38,"button",14),e.NdJ("click",function(){return o.onCancel()}),e._uU(39,"Cancelar"),e.qZA()()()()),2&c&&(e.xp6(5),e.Q6J("formGroup",o.form),e.xp6(26),e.Q6J("ngModel",o.isChecked))},dependencies:[x.a8,x.hq,x.dn,Z.Ye,u.lW,v.KE,v.hX,E.Nt,i._Y,i.Fj,i.Wl,i.JJ,i.JL,i.sg,i.u],styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{width:80%;margin:0 auto;font-family:Roboto Condensed,sans-serif}mat-card[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin-top:15px;box-shadow:none;border:#d9d9d9 1px solid}mat-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}form[_ngcontent-%COMP%]{display:block;width:80%;margin:5px}.full-width[_ngcontent-%COMP%]{display:block;width:100%;margin:0 auto;font-size:18px}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.checkbox-container[_ngcontent-%COMP%]{display:flex;align-items:center}.checkbox-label[_ngcontent-%COMP%]{margin-left:8px}.checkbox-input[_ngcontent-%COMP%]{appearance:none;-webkit-appearance:none;-moz-appearance:none;width:16px;height:16px;border:2px solid #ccc;border-radius:4px;outline:none;cursor:pointer;transition:background-color .3s,border-color .3s}.checkbox-input[_ngcontent-%COMP%]:checked{background-color:#2196f3;border-color:#2196f3}.checkbox-input[_ngcontent-%COMP%]:checked:before{content:"\\2713";display:block;color:#fff;font-size:12px;text-align:center;line-height:16px}.checkbox-input[_ngcontent-%COMP%]:focus{border-color:#2196f3}.checkbox-input[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.6}']}),t})();const be=[{path:"",component:he},{path:"novo",component:I},{path:"editar/:id",component:I,resolve:{tarefa:(()=>{class t{constructor(c){this.service=c}resolve(c,o){return c.params&&c.params.id?this.service.loadById(c.params.id):(0,f.of)({id:0,name:"",description:"",id_project:0,createdAt:new Date,updatedAt:new Date,notes:"",completed:!1,deadline:new Date})}}return t.\u0275fac=function(c){return new(c||t)(e.LFG(g))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let ue=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[k.Bz.forChild(be),k.Bz]}),t})();var _e=d(4466),xe=d(1561),l=d(3238);d(1281);let O=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})(),Ie=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.BQ,l.si,O,l.BQ,O]}),t})(),we=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.ez,ue,P.M,_e.m,i.u5,i.UX,v.lN,E.c,u.ot,M.Ps,xe.Tx,Ie]}),t})()}}]);