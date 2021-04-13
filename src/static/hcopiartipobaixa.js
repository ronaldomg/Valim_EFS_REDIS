/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:41:36.94
*/
gx.evt.autoSkip = false;
gx.define('hcopiartipobaixa', false, function () {
   this.ServerClass =  "hcopiartipobaixa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV14TipoBaixaEmpresaId=gx.fn.getControlValue("vTIPOBAIXAEMPRESAID") ;
      this.AV15TipoBaixaPagRec=gx.fn.getControlValue("vTIPOBAIXAPAGREC") ;
   };
   this.Validv_Novotipobaixasigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNOVOTIPOBAIXASIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12hz2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14hz1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20];
   this.GXLastCtrlId =20;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:7,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPPAGREC",gxz:"ZV18TpPagRec",gxold:"OV18TpPagRec",gxvar:"AV18TpPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TpPagRec=Value},v2z:function(Value){gx.O.ZV18TpPagRec=Value},v2c:function(){gx.fn.setControlValue("vTPPAGREC",gx.O.AV18TpPagRec,0)},c2v:function(){gx.O.AV18TpPagRec=this.val()},val:function(){return gx.fn.getControlValue("vTPPAGREC")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBAIXASIGLA",gxz:"ZV16TipoBaixaSigla",gxold:"OV16TipoBaixaSigla",gxvar:"AV16TipoBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TipoBaixaSigla=Value},v2z:function(Value){gx.O.ZV16TipoBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("vTIPOBAIXASIGLA",gx.O.AV16TipoBaixaSigla,0)},c2v:function(){gx.O.AV16TipoBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBAIXASIGLA")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Novotipobaixasigla,isvalid:null,rgrid:[],fld:"vNOVOTIPOBAIXASIGLA",gxz:"ZV17NovoTipoBaixaSigla",gxold:"OV17NovoTipoBaixaSigla",gxvar:"AV17NovoTipoBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17NovoTipoBaixaSigla=Value},v2z:function(Value){gx.O.ZV17NovoTipoBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("vNOVOTIPOBAIXASIGLA",gx.O.AV17NovoTipoBaixaSigla,0)},c2v:function(){gx.O.AV17NovoTipoBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("vNOVOTIPOBAIXASIGLA")},nac:gx.falseFn};
   this.AV18TpPagRec = "" ;
   this.ZV18TpPagRec = "" ;
   this.OV18TpPagRec = "" ;
   this.AV16TipoBaixaSigla = "" ;
   this.ZV16TipoBaixaSigla = "" ;
   this.OV16TipoBaixaSigla = "" ;
   this.AV17NovoTipoBaixaSigla = "" ;
   this.ZV17NovoTipoBaixaSigla = "" ;
   this.OV17NovoTipoBaixaSigla = "" ;
   this.AV18TpPagRec = "" ;
   this.AV16TipoBaixaSigla = "" ;
   this.AV17NovoTipoBaixaSigla = "" ;
   this.AV14TipoBaixaEmpresaId = "" ;
   this.AV15TipoBaixaPagRec = "" ;
   this.A1053TipoBaixaSigla = "" ;
   this.A1049TipoBaixaPagRec = "" ;
   this.A1052TipoBaixaEmpresaId = "" ;
   this.Events = {"e12hz2_client": ["ENTER", true] ,"e14hz1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'AV14TipoBaixaEmpresaId',fld:'vTIPOBAIXAEMPRESAID',hsh:true},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'AV15TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC',hsh:true},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'AV17NovoTipoBaixaSigla',fld:'vNOVOTIPOBAIXASIGLA'},{av:'AV16TipoBaixaSigla',fld:'vTIPOBAIXASIGLA',hsh:true}],[{av:'AV11snExiste',fld:'vSNEXISTE'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14TipoBaixaEmpresaId", "vTIPOBAIXAEMPRESAID", 0, "char");
   this.setVCMap("AV15TipoBaixaPagRec", "vTIPOBAIXAPAGREC", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiartipobaixa());
