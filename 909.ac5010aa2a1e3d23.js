"use strict";(self.webpackChunkmanga_web_manager=self.webpackChunkmanga_web_manager||[]).push([[909],{6909:(f,r,a)=>{a.r(r),a.d(r,{WelcomeModule:()=>T});var l=a(4575),t=a(4650),c=a(7579),o=a(2722),m=a(8536),u=a(9383);let d=(()=>{class e{constructor(n,i){this.el=n,this.translateService=i,this.directiveDestroyed=new c.x}ngOnInit(){this.translateService.onLangChange.pipe((0,o.R)(this.directiveDestroyed)).subscribe(()=>{this.getTranslation()}),this.translateService.onTranslationChange.pipe((0,o.R)(this.directiveDestroyed)).subscribe(()=>{this.getTranslation()})}ngOnChanges(){this.getTranslation()}ngOnDestroy(){this.directiveDestroyed.next(null),this.directiveDestroyed.complete()}getTranslation(){this.translateService.get(this.wmaTranslate,this.translateValues).pipe((0,o.R)(this.directiveDestroyed)).subscribe({next:n=>{this.el.nativeElement.innerHTML=n},error:()=>`${m.j3}[${this.wmaTranslate}]`})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.SBq),t.Y36(u.sK))},e.\u0275dir=t.lG2({type:e,selectors:[["","wmaTranslate",""]],inputs:{wmaTranslate:"wmaTranslate",translateValues:"translateValues"},features:[t.TTD]}),e})();const h=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["wma-welcome"]],decls:2,vars:1,consts:[[3,"wmaTranslate"]],template:function(n,i){1&n&&(t.TgZ(0,"p",0),t._uU(1,"welcome ! "),t.qZA()),2&n&&t.Q6J("wmaTranslate","global.title")},dependencies:[d]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(h),l.Bz]}),e})();var v=a(9922),p=a(8054);let T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g,v.q,p.m]}),e})()}}]);