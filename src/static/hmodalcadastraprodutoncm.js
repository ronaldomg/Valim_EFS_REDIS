/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:45:31.0
*/
gx.evt.autoSkip = false;
gx.define('hmodalcadastraprodutoncm', false, function () {
   this.ServerClass =  "hmodalcadastraprodutoncm" ;
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
      this.AV11NCMCodigoParm=gx.fn.getIntegerValue("vNCMCODIGOPARM",'.') ;
   };
   this.Validv_Ncmcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNCMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121g42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131g42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151g42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ncmcodigo,isvalid:null,rgrid:[],fld:"vNCMCODIGO",gxz:"ZV7NCMCodigo",gxold:"OV7NCMCodigo",gxvar:"AV7NCMCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7NCMCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7NCMCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMCODIGO",gx.O.AV7NCMCodigo,0)},c2v:function(){gx.O.AV7NCMCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMDESCRICAO",gxz:"ZV8NCMDescricao",gxold:"OV8NCMDescricao",gxvar:"AV8NCMDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8NCMDescricao=Value},v2z:function(Value){gx.O.ZV8NCMDescricao=Value},v2c:function(){gx.fn.setControlValue("vNCMDESCRICAO",gx.O.AV8NCMDescricao,0)},c2v:function(){gx.O.AV8NCMDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNCMDESCRICAO")},nac:gx.falseFn};
   this.AV7NCMCodigo = 0 ;
   this.ZV7NCMCodigo = 0 ;
   this.OV7NCMCodigo = 0 ;
   this.AV8NCMDescricao = "" ;
   this.ZV8NCMDescricao = "" ;
   this.OV8NCMDescricao = "" ;
   this.AV7NCMCodigo = 0 ;
   this.AV8NCMDescricao = "" ;
   this.AV11NCMCodigoParm = 0 ;
   this.A2979NCMCodigo = 0 ;
   this.Events = {"e121g42_client": ["ENTER", true] ,"e131g42_client": ["'FECHAR'", true] ,"e151g42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV9SNErro',fld:'vSNERRO'},{av:'AV7NCMCodigo',fld:'vNCMCODIGO'},{av:'AV8NCMDescricao',fld:'vNCMDESCRICAO'},{av:'A2979NCMCodigo',fld:'NCMCODIGO'}],[{av:'AV9SNErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7NCMCodigo',fld:'vNCMCODIGO'},{av:'AV8NCMDescricao',fld:'vNCMDESCRICAO'}],[{av:'AV7NCMCodigo',fld:'vNCMCODIGO'},{av:'AV8NCMDescricao',fld:'vNCMDESCRICAO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11NCMCodigoParm", "vNCMCODIGOPARM", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalcadastraprodutoncm());
