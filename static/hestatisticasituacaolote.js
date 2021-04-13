/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:54:26.83
*/
gx.evt.autoSkip = false;
gx.define('hestatisticasituacaolote', false, function () {
   this.ServerClass =  "hestatisticasituacaolote" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Loteamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTEAMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Loteamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTEAMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11uf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13uf2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15uf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.e16uf1_client=function()
   {
      this.executeServerEvent("PROMPT_LOTEAMENTOID.GXPROMPT", true, null, false, true);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,20,22,23,32,33,35,37];
   this.GXLastCtrlId =37;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTEMP",gxz:"ZV50DescLotEmp",gxold:"OV50DescLotEmp",gxvar:"AV50DescLotEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50DescLotEmp=Value},v2z:function(Value){gx.O.ZV50DescLotEmp=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTEMP",gx.O.AV50DescLotEmp,0)},c2v:function(){gx.O.AV50DescLotEmp=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTEMP")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Loteamentoid,isvalid:null,rgrid:[],fld:"vLOTEAMENTOID",gxz:"ZV20LoteamentoId",gxold:"OV20LoteamentoId",gxvar:"AV20LoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20LoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20LoteamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOID",gx.O.AV20LoteamentoId,0)},c2v:function(){gx.O.AV20LoteamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTEAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEAMENTONOME",gxz:"ZV21LoteamentoNome",gxold:"OV21LoteamentoNome",gxvar:"AV21LoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21LoteamentoNome=Value},v2z:function(Value){gx.O.ZV21LoteamentoNome=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTONOME",gx.O.AV21LoteamentoNome,0)},c2v:function(){gx.O.AV21LoteamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"JS", format:2,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Loteamentoempresaid,isvalid:null,rgrid:[],fld:"vLOTEAMENTOEMPRESAID",gxz:"ZV22LoteamentoEmpresaId",gxold:"OV22LoteamentoEmpresaId",gxvar:"AV22LoteamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22LoteamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV22LoteamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOEMPRESAID",gx.O.AV22LoteamentoEmpresaId,0)},c2v:function(){gx.O.AV22LoteamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"PROMPT_LOTEAMENTOID",grid:0};
   this.AV50DescLotEmp = "" ;
   this.ZV50DescLotEmp = "" ;
   this.OV50DescLotEmp = "" ;
   this.AV20LoteamentoId = 0 ;
   this.ZV20LoteamentoId = 0 ;
   this.OV20LoteamentoId = 0 ;
   this.AV21LoteamentoNome = "" ;
   this.ZV21LoteamentoNome = "" ;
   this.OV21LoteamentoNome = "" ;
   this.AV22LoteamentoEmpresaId = "" ;
   this.ZV22LoteamentoEmpresaId = "" ;
   this.OV22LoteamentoEmpresaId = "" ;
   this.AV50DescLotEmp = "" ;
   this.AV20LoteamentoId = 0 ;
   this.AV21LoteamentoNome = "" ;
   this.AV22LoteamentoEmpresaId = "" ;
   this.A5314LoteamentoId = 0 ;
   this.A5290LoteamentoEmpresaId = "" ;
   this.A5315LoteamentoNome = "" ;
   this.Events = {"e11uf2_client": ["'FECHAR'", true] ,"e13uf2_client": ["ENTER", true] ,"e15uf2_client": ["CANCEL", true] ,"e16uf1_client": ["PROMPT_LOTEAMENTOID.GXPROMPT", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'AV20LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV55Pgmdesc',fld:'vPGMDESC'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'AV22LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV20LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV49TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV56GXLvl78',fld:'vGXLVL78'},{av:'AV21LoteamentoNome',fld:'vLOTEAMENTONOME'}]];
   this.setPrompt("PROMPT_LOTEAMENTOID", [22]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hestatisticasituacaolote());
