(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"d/+D":function(n,t,e){"use strict";e.d(t,"a",function(){return r});var o=e("8Y7J"),c=e("SVse");const i=function(n){return{"background-image":n}};let r=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Gb({type:n,selectors:[["app-header-page"]],inputs:{image:"image",pageName:"pageName",subTitle:"subTitle"},decls:6,vars:5,consts:[[1,"header-page",3,"ngStyle"],[1,"content"],[1,"page-name"],[1,"sub-title"]],template:function(n,t){1&n&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"h2",2),o.Hc(3),o.Rb(),o.Sb(4,"h3",3),o.Hc(5),o.Rb(),o.Rb(),o.Rb()),2&n&&(o.jc("ngStyle",o.mc(3,i,"url("+t.image+")")),o.zb(3),o.Ic(t.pageName),o.zb(2),o.Ic(t.subTitle))},directives:[c.q],styles:['.header-page[_ngcontent-%COMP%]{background-size:cover;background-position:50%;background-repeat:no-repeat;font-family:Raleway,sans-serif}.content[_ngcontent-%COMP%]{padding:50px 0;position:relative}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{position:relative;color:#fff;z-index:100;text-align:center}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px}.content[_ngcontent-%COMP%]:before{content:"";opacity:.5;position:absolute;background:#000;left:0;top:0;width:100%;height:100%;z-index:90;pointer-events:none}']}),n})()},e880:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var o=e("SVse"),c=e("PCNd"),i=e("8Y7J");let r=(()=>{class n{}return n.\u0275mod=i.Kb({type:n}),n.\u0275inj=i.Jb({factory:function(t){return new(t||n)},imports:[[o.c,c.a]]}),n})()},kPMt:function(n,t,e){"use strict";e.r(t),e.d(t,"ContactModule",function(){return O});var o=e("JXeA"),c=e("0/nh"),i=e("FwiY"),r=e("OzZK"),a=e("B+r4"),s=e("e880"),b=e("s7LF"),p=e("wf2+"),m=e("px0D"),u=e("iInd"),l=e("SVse"),d=e("nYR2"),g=e("8Y7J"),z=e("AytR"),h=e("LRne"),f=e("JIr8"),S=e("IheW");let C=(()=>{class n{constructor(n){this.httpClient=n}createContact(n){return this.httpClient.post(z.a.productServiceUrl+"/api/complain/create",n).pipe(Object(f.a)(n=>Object(h.a)(n.error)))}}return n.\u0275fac=function(t){return new(t||n)(g.Wb(S.c))},n.\u0275prov=g.Ib({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var R=e("d/+D"),M=e("RwU8"),v=e("C2AL");const y=[{path:"",component:(()=>{class n{constructor(n,t,e,o){this.formBuilder=n,this.contactService=t,this.router=e,this.messageService=o,this.isLoading=!1}ngOnInit(){this.buildForm()}buildForm(){this.contactForm=this.formBuilder.group({name:[null,b.r.required],email:[null,[b.r.required,b.r.email]],phone:[null,[b.r.pattern(/^(^\+251|^251|^0)?9\d{8}$/)]],content:[null,b.r.required]})}submitForm(){this.checkInput(),this.contactForm.valid&&(this.isLoading=!0,this.contactService.createContact(this.contactForm.value).pipe(Object(d.a)(()=>this.isLoading=!1)).subscribe(n=>{"OK"==n.code&&(this.contactForm.reset(),this.router.navigate(["/home"]),this.messageService.success("Thanks you for your contact!"))}))}checkInput(){for(const n in this.contactForm.controls)this.contactForm.controls[n].markAsDirty(),this.contactForm.controls[n].updateValueAndValidity()}}return n.\u0275fac=function(t){return new(t||n)(g.Mb(b.e),g.Mb(C),g.Mb(u.d),g.Mb(o.b))},n.\u0275cmp=g.Gb({type:n,selectors:[["app-contact"]],decls:47,vars:11,consts:[[1,"contact-page","mt-70"],[3,"image","pageName"],[1,"container"],["nz-row","",1,"content",3,"nzGutter"],["nz-col","",1,"contact-form",3,"nzMd","nzXs"],[1,"title"],["nz-form","",3,"nzLayout","formGroup","ngSubmit"],["nzSpan","10","nzRequired","","nzFor","name"],["nzSpan","24","nzErrorTip","The input is not valid Name!"],["nz-input","","formControlName","name"],["nzSpan","10","nzRequired","","nzFor","email","email",""],["nzSpan","24","nzErrorTip","The input is not valid E-mail!"],["nz-input","","formControlName","email"],["nzSpan","10","nzFor","phone","phone",""],["nzSpan","24","nzErrorTip","The input is not valid Phone!"],["nz-input","","formControlName","phone"],["nzSpan","10","nzRequired","","nzFor","message"],["nzSpan","24","nzErrorTip","The input is not valid Message!"],["rows","8","nz-input","","formControlName","content"],["nzShape","round","nzSize","large","nz-button","",1,"submit-contact",3,"nzLoading","nzType"],["nz-col","",1,"contact-content",3,"nzMd","nzXs"],["nz-icon","","nzType","home","nzTheme","outline"],["nz-icon","","nzType","phone","nzTheme","outline"],["nz-icon","","nzType","mail","nzTheme","outline"],["nz-icon","","nzType","clock-circle","nzTheme","outline"]],template:function(n,t){1&n&&(g.Sb(0,"div",0),g.Nb(1,"app-header-page",1),g.Sb(2,"div",2),g.Sb(3,"div",3),g.Sb(4,"div",4),g.Sb(5,"h3",5),g.Hc(6,"CONTACT FORM"),g.Rb(),g.Sb(7,"form",6),g.Zb("ngSubmit",function(){return t.submitForm()}),g.Sb(8,"nz-form-item"),g.Sb(9,"nz-form-label",7),g.Hc(10,"Your Name:"),g.Rb(),g.Sb(11,"nz-form-control",8),g.Nb(12,"input",9),g.Rb(),g.Rb(),g.Sb(13,"nz-form-item"),g.Sb(14,"nz-form-label",10),g.Hc(15,"Your Email:"),g.Rb(),g.Sb(16,"nz-form-control",11),g.Nb(17,"input",12),g.Rb(),g.Rb(),g.Sb(18,"nz-form-item"),g.Sb(19,"nz-form-label",13),g.Hc(20,"Your Phone:"),g.Rb(),g.Sb(21,"nz-form-control",14),g.Nb(22,"input",15),g.Rb(),g.Rb(),g.Sb(23,"nz-form-item"),g.Sb(24,"nz-form-label",16),g.Hc(25,"Your Message:"),g.Rb(),g.Sb(26,"nz-form-control",17),g.Nb(27,"textarea",18),g.Rb(),g.Rb(),g.Sb(28,"button",19),g.Hc(29,"Send "),g.Rb(),g.Rb(),g.Rb(),g.Sb(30,"div",20),g.Sb(31,"h3",5),g.Hc(32,"CONTACT INFORMATION"),g.Rb(),g.Sb(33,"p"),g.Hc(34,"We love to hear from you on our customer service, merchandise, website or any topics you want to share with us. Your comments and suggestions will be appreciated. Please complete the form below."),g.Rb(),g.Sb(35,"p"),g.Nb(36,"i",21),g.Hc(37,"HCMC National University Dormitory Zone B"),g.Rb(),g.Sb(38,"p"),g.Nb(39,"i",22),g.Hc(40,"1800-123-222 / 1900-1570-230"),g.Rb(),g.Sb(41,"p"),g.Nb(42,"i",23),g.Hc(43,"hieuvo044@gmail.com"),g.Rb(),g.Sb(44,"p"),g.Nb(45,"i",24),g.Hc(46,"Everyday 9:00-17:00"),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb()),2&n&&(g.zb(1),g.jc("image","assets/images/contact.jpg")("pageName","Contact Us"),g.zb(2),g.jc("nzGutter",24),g.zb(1),g.jc("nzMd",12)("nzXs",24),g.zb(3),g.jc("nzLayout","vertical")("formGroup",t.contactForm),g.zb(21),g.jc("nzLoading",t.isLoading)("nzType","primary"),g.zb(2),g.jc("nzMd",12)("nzXs",24))},directives:[R.a,a.c,a.a,b.s,b.n,p.b,b.h,p.c,p.d,p.a,m.a,b.d,b.m,b.g,r.a,M.a,v.a,i.a],styles:[".content[_ngcontent-%COMP%]{font-family:Raleway,sans-serif}.contact-content[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]{margin:100px 0}.title[_ngcontent-%COMP%]{font-weight:600;color:#222;letter-spacing:0;line-height:1.428;font-size:23px;margin-bottom:25px}.contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:40px}.submit-contact[_ngcontent-%COMP%]{width:100%;background-color:#56cfe1;border-color:#56cfe1;height:40px;padding:6.4px 20px;font-size:16px;border-radius:0}.contact-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex}.contact-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:7px;font-size:20px}@media (max-width:1200px){.container[_ngcontent-%COMP%]{max-width:100%;padding:0 15px}}@media (max-width:768px){.contact-form[_ngcontent-%COMP%]{margin-bottom:0}}"]}),n})(),data:{title:"Contact"}}];let O=(()=>{class n{}return n.\u0275mod=g.Kb({type:n}),n.\u0275inj=g.Jb({factory:function(t){return new(t||n)},imports:[[l.c,b.q,s.a,m.d,a.b,p.e,r.c,o.a,i.b.forChild(c.a),u.h.forChild(y)]]}),n})()}}]);