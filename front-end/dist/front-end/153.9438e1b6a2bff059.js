"use strict";(self.webpackChunkFront_End=self.webpackChunkFront_End||[]).push([[153],{1696:(Y,v,a)=>{a.d(v,{I:()=>Z});var l=a(5412),r=a(4650),x=a(4859);let Z=(()=>{class f{constructor(m){this.data=m}ngOnInit(){}}return f.\u0275fac=function(m){return new(m||f)(r.Y36(l.WI))},f.\u0275cmp=r.Xpm({type:f,selectors:[["app-error-dialog"]],decls:7,vars:1,consts:[["mat-dialog-title","",2,"color","red"],["mat-dialog-content",""],["mat-dialog-actions","","align","center"],["mat-stroked-button","","mat-dialog-close",""]],template:function(m,C){1&m&&(r.TgZ(0,"h1",0),r._uU(1,"Erro!"),r.qZA(),r.TgZ(2,"div",1),r._uU(3),r.qZA(),r.TgZ(4,"div",2)(5,"button",3),r._uU(6,"Close"),r.qZA()()),2&m&&(r.xp6(3),r.hij(" ",C.data," "))},dependencies:[l.ZT,l.uh,l.xY,l.H8,x.lW]}),f})()},8153:(Y,v,a)=>{a.r(v),a.d(v,{UsuarioModule:()=>X});var l=a(6895),r=a(4006),x=a(9549),Z=a(3865),f=a(4466),s=a(858),m=a(262),C=a(9646),_=a(1696),t=a(4650),T=a(590),I=a(8505),D=a(529),M=a(9086);let U=(()=>{class n{constructor(o,i){this.httpClient=o,this.authservice=i,this.API="https://18.230.156.247:3001/api/user"}list(){return this.httpClient.get(this.API+"/"+this.authservice.Usuario).pipe((0,T.P)(),(0,I.b)(o=>{}))}save(o){return console.log(o),o.id?(console.log("update"),this.update(o)):(console.log("create"),this.create(o))}create(o){return this.httpClient.post(this.API,o).pipe((0,T.P)())}update(o){return this.httpClient.put(`${this.API}/${o.id}`,o).pipe((0,T.P)())}loadById(o){return this.httpClient.get(`${this.API}/${o}`)}delete(o){return this.httpClient.delete(this.API+"/"+o.id)}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(D.eN),t.LFG(M.e))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var P=a(5412),E=a(5041),c=a(5717),d=a(3546),A=a(3683),F=a(1572),y=a(4859),b=a(7392);function w(n,e){1&n&&(t.TgZ(0,"th",15),t._uU(1," NOME "),t.qZA())}function N(n,e){if(1&n&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&n){const o=e.$implicit;t.xp6(1),t.hij(" ",o.name," ")}}function B(n,e){1&n&&(t.TgZ(0,"th",15),t._uU(1," EMAIL "),t.qZA())}function j(n,e){if(1&n&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&n){const o=e.$implicit;t.xp6(1),t.hij(" ",o.email," ")}}function R(n,e){1&n&&(t.TgZ(0,"mat-header-cell")(1,"p"),t._uU(2,"A\xc7\xd5ES "),t.qZA()())}function S(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"mat-cell")(1,"button",17),t.NdJ("click",function(){const h=t.CHM(o).$implicit,g=t.oxw(2);return t.KtG(g.onEdit(h))}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",18)(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()()}}function z(n,e){1&n&&t._UZ(0,"tr",19)}function J(n,e){1&n&&t._UZ(0,"tr",20)}function L(n,e){if(1&n&&(t.TgZ(0,"div",4)(1,"table",5),t.ynx(2,6),t.YNc(3,w,2,0,"th",7),t.YNc(4,N,2,1,"td",8),t.BQk(),t.ynx(5,9),t.YNc(6,B,2,0,"th",7),t.YNc(7,j,2,1,"td",8),t.BQk(),t.ynx(8,10),t.YNc(9,R,3,0,"mat-header-cell",11),t.YNc(10,S,7,0,"mat-cell",12),t.BQk(),t.YNc(11,z,1,0,"tr",13),t.YNc(12,J,1,0,"tr",14),t.qZA()()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("dataSource",o.usuarios),t.xp6(10),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns)}}function H(n,e){1&n&&(t.TgZ(0,"div",21),t._UZ(1,"mat-spinner"),t.qZA())}let Q=(()=>{class n{constructor(o,i,u,h,g){this.usuario=o,this.router=i,this.route=u,this.dialog=h,this.app=g,this.displayedColumns=["name","email","actions"],this.usuario.list().pipe((0,m.K)(p=>(this.onErro("Erro ao carregar. "),(0,C.of)([])))).subscribe(p=>{this.usuarios=Array.isArray(p)?p:[p]})}ngOnInit(){this.app.isConta=!0}onErro(o){this.dialog.open(_.I,{data:o})}onEdit(o){this.router.navigate(["editar",o.id],{relativeTo:this.route})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(U),t.Y36(s.F0),t.Y36(s.gz),t.Y36(P.uw),t.Y36(E.y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-conta"]],decls:7,vars:2,consts:[[1,"container"],["color","primary"],["class","table",4,"ngIf","ngIfElse"],["loading",""],[1,"table"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["matColumnDef","actions"],[4,"matHeaderCellDef"],[4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary","aria-label","Editar  usuario",3,"click"],["mat-icon-button","","color","warn","aria-label","Remover  Usuario"],["mat-header-row",""],["mat-row",""],[1,"loading-spinner"]],template:function(o,i){if(1&o&&(t.TgZ(0,"mat-card",0)(1,"mat-toolbar",1)(2,"span"),t._uU(3,"Perfil"),t.qZA()(),t.YNc(4,L,13,3,"div",2),t.YNc(5,H,2,0,"ng-template",null,3,t.W1O),t.qZA()),2&o){const u=t.MAs(6);t.xp6(4),t.Q6J("ngIf",i.usuarios)("ngIfElse",u)}},dependencies:[l.O5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,d.a8,A.Ye,F.Ou,y.RK,b.Hw],styles:[".container[_ngcontent-%COMP%]{width:80%;margin:5px auto}.table[_ngcontent-%COMP%]{width:100%}th[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%]{height:60px}td[_ngcontent-%COMP%]{padding:10px}.loading-spinner[_ngcontent-%COMP%]{padding:25px;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.15)}"]}),n})(),K=(()=>{class n{constructor(o,i,u,h,g){this.usuario=o,this.router=i,this.route=u,this.dialog=h,this.app=g,this.Usuario$=this.usuario.list().pipe((0,m.K)(q=>(this.onErro("Erro ao carregar. "),(0,C.of)([])))),this.dataHoraLocal=(new Date).toLocaleString()}onErro(o){this.dialog.open(_.I,{data:o})}ngOnInit(){this.usuario.list().subscribe(o=>{this.Usuario=o,console.log(this.Usuario)}),this.app.isConta=!1}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(U),t.Y36(s.F0),t.Y36(s.gz),t.Y36(P.uw),t.Y36(E.y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-usuario"]],decls:13,vars:3,consts:[[1,"toolbar"],[1,"span_toobar"],[1,"container"],["routerLink","/projeto","mat-button","",1,"btn"]],template:function(o,i){1&o&&(t.TgZ(0,"p")(1,"mat-toolbar",0)(2,"span",1),t._uU(3),t.ALo(4,"titlecase"),t.qZA()()(),t.TgZ(5,"div",2)(6,"mat-card")(7,"mat-card-header")(8,"mat-card-title"),t._uU(9,"Projetos"),t.qZA()(),t.TgZ(10,"mat-card-actions")(11,"button",3),t._uU(12,"Acessar"),t.qZA()()()()),2&o&&(t.xp6(3),t.hij("Ol\xe1, ",t.lcZ(4,1,i.Usuario.name)," "))},dependencies:[s.rH,d.a8,d.hq,d.dk,d.n5,A.Ye,y.lW,l.rS],styles:[".toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;background-color:#4fff44}span.span_toobar[_ngcontent-%COMP%]{color:#fff}.container[_ngcontent-%COMP%]{margin-top:60px;width:100%;display:flex;flex-wrap:wrap}mat-card[_ngcontent-%COMP%]{flex:1 1 auto;margin:10px;display:flex;text-align:center;justify-content:center;align-items:center;box-shadow:none;border:#d9d9d9 solid 1px;border-radius:8px}mat-card-header[_ngcontent-%COMP%]{width:100%;background-color:#d9d9d9;padding:0;text-align:center;justify-content:center;align-items:center;border-radius:8px 8px 0 0}mat-card-title[_ngcontent-%COMP%]{margin:10px;padding:10px;display:flex;font-size:24px;color:#332f2e}.btn[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff;font-size:20px;padding:20px}"]}),n})(),W=(()=>{class n{constructor(o){this.service=o}resolve(o,i){return o.params&&o.params.id?this.service.loadById(o.params.id):(0,C.of)({id:0,name:"",email:"",password:""})}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(U))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var $=a(7009),O=a(4144);const G=[{path:"",component:K},{path:"conta",component:Q},{path:"conta/editar/:id",component:(()=>{class n{constructor(o,i,u,h,g,p){this.formBuilder=o,this.service=i,this.snackBar=u,this.location=h,this.route=g,this.authService=p,this.form=this.formBuilder.group({id:[null],name:[null],email:[null]})}ngOnInit(){const o=this.route.snapshot.data.usuario;this.form.setValue({id:o.id,name:o.name,email:o.email}),console.log(o)}onSubmit(){this.service.save(this.form.value).subscribe(o=>this.onSucess(),o=>this.onError())}onCancel(){this.location.back()}onSucess(){this.snackBar.open("Servi\xe7o salvo com sucesso!","",{duration:5e3}),this.onCancel()}onError(){this.snackBar.open("Erro ao salvar servi\xe7o","",{duration:5e3})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.qu),t.Y36(U),t.Y36($.ux),t.Y36(l.Ye),t.Y36(s.gz),t.Y36(M.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-usuario-form"]],decls:14,vars:1,consts:[["color","primary"],[1,"min-width",3,"formGroup"],[1,"full-width"],["matInput","","placeholder","Nome","formControlName","name"],["matInput","","placeholder","Email","formControlName","email"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"mat-card")(1,"mat-toolbar",0),t._uU(2,"Detalhes do Usuario"),t.qZA(),t.TgZ(3,"mat-card-content")(4,"form",1)(5,"mat-form-field",2),t._UZ(6,"input",3),t.qZA(),t.TgZ(7,"mat-form-field",2),t._UZ(8,"input",4),t.qZA()()(),t.TgZ(9,"mat-card-actions")(10,"button",5),t.NdJ("click",function(){return i.onSubmit()}),t._uU(11,"Salvar"),t.qZA(),t.TgZ(12,"button",6),t.NdJ("click",function(){return i.onCancel()}),t._uU(13,"Cancelar"),t.qZA()()()),2&o&&(t.xp6(4),t.Q6J("formGroup",i.form))},dependencies:[d.a8,d.hq,d.dn,A.Ye,y.lW,x.KE,O.Nt,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".container[_ngcontent-%COMP%]{width:80%;margin:0 auto;font-family:Roboto Condensed,sans-serif}mat-card[_ngcontent-%COMP%]{width:100%;max-width:1200px;box-shadow:none;border:#d9d9d9 1px solid;margin:15px auto}mat-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}form[_ngcontent-%COMP%]{display:block;width:80%;margin:5px}.full-width[_ngcontent-%COMP%]{display:block;width:100%;margin:0 auto;font-size:18px}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}"]}),n})(),resolve:{usuario:W}}];let k=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(G),s.Bz]}),n})(),X=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,k,Z.M,f.m,r.u5,r.UX,x.lN,O.c,y.ot,b.Ps]}),n})()}}]);