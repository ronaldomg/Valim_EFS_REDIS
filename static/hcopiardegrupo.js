/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:38.43
*/
gx.evt.autoSkip = false;
gx.define('hcopiardegrupo', false, function () {
   this.ServerClass =  "hcopiardegrupo" ;
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
      this.AV17TipoProcesso=gx.fn.getControlValue("vTIPOPROCESSO") ;
   };
   this.Validv_Grupocopiaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOCOPIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121o2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131o2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e151o2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,30];
   this.GXLastCtrlId =30;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE5",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOID",gxz:"ZV18GrupoId",gxold:"OV18GrupoId",gxvar:"AV18GrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18GrupoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18GrupoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOID",gx.O.AV18GrupoId,0)},c2v:function(){gx.O.AV18GrupoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPONOME",gxz:"ZV19GrupoNome",gxold:"OV19GrupoNome",gxvar:"AV19GrupoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19GrupoNome=Value},v2z:function(Value){gx.O.ZV19GrupoNome=Value},v2c:function(){gx.fn.setControlValue("vGRUPONOME",gx.O.AV19GrupoNome,0)},c2v:function(){gx.O.AV19GrupoNome=this.val()},val:function(){return gx.fn.getControlValue("vGRUPONOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupocopiaid,isvalid:null,rgrid:[],fld:"vGRUPOCOPIAID",gxz:"ZV20GrupoCopiaId",gxold:"OV20GrupoCopiaId",gxvar:"AV20GrupoCopiaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20GrupoCopiaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20GrupoCopiaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOCOPIAID",gx.O.AV20GrupoCopiaId,0)},c2v:function(){gx.O.AV20GrupoCopiaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOCOPIAID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"PROMPT_GRUPOCOPIAID",grid:0};
   this.AV18GrupoId = 0 ;
   this.ZV18GrupoId = 0 ;
   this.OV18GrupoId = 0 ;
   this.AV19GrupoNome = "" ;
   this.ZV19GrupoNome = "" ;
   this.OV19GrupoNome = "" ;
   this.AV20GrupoCopiaId = 0 ;
   this.ZV20GrupoCopiaId = 0 ;
   this.OV20GrupoCopiaId = 0 ;
   this.AV18GrupoId = 0 ;
   this.AV19GrupoNome = "" ;
   this.AV20GrupoCopiaId = 0 ;
   this.AV17TipoProcesso = "" ;
   this.A244GrupoId = 0 ;
   this.Events = {"e121o2_client": ["ENTER", true] ,"e131o2_client": ["'CANCELAR'", true] ,"e151o2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20GrupoCopiaId',fld:'vGRUPOCOPIAID'},{av:'A244GrupoId',fld:'GRUPOID'},{av:'AV17TipoProcesso',fld:'vTIPOPROCESSO'},{av:'AV18GrupoId',fld:'vGRUPOID'},{av:'AV19GrupoNome',fld:'vGRUPONOME'}],[{av:'AV22SnErro',fld:'vSNERRO'},{av:'AV28GXLvl27',fld:'vGXLVL27'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV17TipoProcesso',fld:'vTIPOPROCESSO'},{av:'AV19GrupoNome',fld:'vGRUPONOME'},{av:'AV18GrupoId',fld:'vGRUPOID'}],[]];
   this.setPrompt("PROMPT_GRUPOCOPIAID", [22]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17TipoProcesso", "vTIPOPROCESSO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiardegrupo());
