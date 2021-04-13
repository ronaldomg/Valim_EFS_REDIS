/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:56:41.41
*/
gx.evt.autoSkip = false;
gx.define('hcopiartipoclassfluxo', false, function () {
   this.ServerClass =  "hcopiartipoclassfluxo" ;
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
      this.AV24TipoClassFluxoEmpresaId=gx.fn.getControlValue("vTIPOCLASSFLUXOEMPRESAID") ;
      this.AV27Tipo=gx.fn.getIntegerValue("vTIPO",'.') ;
   };
   this.Validv_Tipoclassfluxocopiaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCLASSFLUXOCOPIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122692_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152691_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,23,26,34];
   this.GXLastCtrlId =34;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXOID",gxz:"ZV23TipoClassFluxoId",gxold:"OV23TipoClassFluxoId",gxvar:"AV23TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV23TipoClassFluxoId,0)},c2v:function(){gx.O.AV23TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV26TipoClassFluxoDescricao",gxold:"OV26TipoClassFluxoDescricao",gxvar:"AV26TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV26TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV26TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV26TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipoclassfluxocopiaid,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXOCOPIAID",gxz:"ZV25TipoClassFluxoCopiaId",gxold:"OV25TipoClassFluxoCopiaId",gxvar:"AV25TipoClassFluxoCopiaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TipoClassFluxoCopiaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25TipoClassFluxoCopiaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOCOPIAID",gx.O.AV25TipoClassFluxoCopiaId,0)},c2v:function(){gx.O.AV25TipoClassFluxoCopiaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOCOPIAID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE2",grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGTELA",gxz:"ZV28MsgTela",gxold:"OV28MsgTela",gxvar:"AV28MsgTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28MsgTela=Value},v2z:function(Value){gx.O.ZV28MsgTela=Value},v2c:function(){gx.fn.setControlValue("vMSGTELA",gx.O.AV28MsgTela,0)},c2v:function(){gx.O.AV28MsgTela=this.val()},val:function(){return gx.fn.getControlValue("vMSGTELA")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"PROMPT_TIPOCLASSFLUXOCOPIAID",grid:0};
   this.AV23TipoClassFluxoId = 0 ;
   this.ZV23TipoClassFluxoId = 0 ;
   this.OV23TipoClassFluxoId = 0 ;
   this.AV26TipoClassFluxoDescricao = "" ;
   this.ZV26TipoClassFluxoDescricao = "" ;
   this.OV26TipoClassFluxoDescricao = "" ;
   this.AV25TipoClassFluxoCopiaId = 0 ;
   this.ZV25TipoClassFluxoCopiaId = 0 ;
   this.OV25TipoClassFluxoCopiaId = 0 ;
   this.AV28MsgTela = "" ;
   this.ZV28MsgTela = "" ;
   this.OV28MsgTela = "" ;
   this.AV23TipoClassFluxoId = 0 ;
   this.AV26TipoClassFluxoDescricao = "" ;
   this.AV25TipoClassFluxoCopiaId = 0 ;
   this.AV28MsgTela = "" ;
   this.AV24TipoClassFluxoEmpresaId = "" ;
   this.AV27Tipo = 0 ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.Events = {"e122692_client": ["ENTER", true] ,"e152691_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV27Tipo',fld:'vTIPO'},{av:'AV23TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV26TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'}],[{av:'AV28MsgTela',fld:'vMSGTELA'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TABLE2","Visible")',ctrl:'TABLE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE4","Visible")',ctrl:'TABLE4',prop:'Visible'}]];
   this.EvtParms["ENTER"] = [[{av:'AV27Tipo',fld:'vTIPO'},{av:'AV25TipoClassFluxoCopiaId',fld:'vTIPOCLASSFLUXOCOPIAID'},{av:'A10198TipoClassFluxoEmpresaId',fld:'TIPOCLASSFLUXOEMPRESAID'},{av:'AV24TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'A10199TipoClassFluxoId',fld:'TIPOCLASSFLUXOID'},{av:'AV23TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV26TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'}],[{av:'AV21SnErro',fld:'vSNERRO'},{av:'AV33GXLvl26',fld:'vGXLVL26'},{av:'AV23TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'}]];
   this.setPrompt("PROMPT_TIPOCLASSFLUXOCOPIAID", [22]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV24TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("AV27Tipo", "vTIPO", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiartipoclassfluxo());
