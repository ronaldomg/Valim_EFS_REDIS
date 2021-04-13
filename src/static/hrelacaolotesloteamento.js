/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:55:19.51
*/
gx.evt.autoSkip = false;
gx.define('hrelacaolotesloteamento', false, function () {
   this.ServerClass =  "hrelacaolotesloteamento" ;
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
   this.e11um2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13um2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16um2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.e17um1_client=function()
   {
      this.executeServerEvent("PROMPT_LOTEAMENTOID.GXPROMPT", true, null, false, true);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,21,23,24,28,32,36,40,44,53,54,56,58];
   this.GXLastCtrlId =58;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTEMP",gxz:"ZV53DescLotEmp",gxold:"OV53DescLotEmp",gxvar:"AV53DescLotEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53DescLotEmp=Value},v2z:function(Value){gx.O.ZV53DescLotEmp=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTEMP",gx.O.AV53DescLotEmp,0)},c2v:function(){gx.O.AV53DescLotEmp=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTEMP")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Loteamentoid,isvalid:null,rgrid:[],fld:"vLOTEAMENTOID",gxz:"ZV20LoteamentoId",gxold:"OV20LoteamentoId",gxvar:"AV20LoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20LoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20LoteamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOID",gx.O.AV20LoteamentoId,0)},c2v:function(){gx.O.AV20LoteamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTEAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEAMENTONOME",gxz:"ZV21LoteamentoNome",gxold:"OV21LoteamentoNome",gxvar:"AV21LoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21LoteamentoNome=Value},v2z:function(Value){gx.O.ZV21LoteamentoNome=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTONOME",gx.O.AV21LoteamentoNome,0)},c2v:function(){gx.O.AV21LoteamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAVENDA",gxz:"ZV24SnAVenda",gxold:"OV24SnAVenda",gxvar:"AV24SnAVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24SnAVenda=Value},v2z:function(Value){gx.O.ZV24SnAVenda=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNAVENDA",gx.O.AV24SnAVenda,"S")},c2v:function(){gx.O.AV24SnAVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNAVENDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRESERVADO",gxz:"ZV25SnReservado",gxold:"OV25SnReservado",gxvar:"AV25SnReservado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25SnReservado=Value},v2z:function(Value){gx.O.ZV25SnReservado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNRESERVADO",gx.O.AV25SnReservado,"S")},c2v:function(){gx.O.AV25SnReservado=this.val()},val:function(){return gx.fn.getControlValue("vSNRESERVADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDIDO",gxz:"ZV26SnVendido",gxold:"OV26SnVendido",gxvar:"AV26SnVendido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26SnVendido=Value},v2z:function(Value){gx.O.ZV26SnVendido=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNVENDIDO",gx.O.AV26SnVendido,"S")},c2v:function(){gx.O.AV26SnVendido=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDIDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNDADOSCOMPRADOR",gxz:"ZV27SnDadosComprador",gxold:"OV27SnDadosComprador",gxvar:"AV27SnDadosComprador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV27SnDadosComprador=Value},v2z:function(Value){gx.O.ZV27SnDadosComprador=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNDADOSCOMPRADOR",gx.O.AV27SnDadosComprador,"S")},c2v:function(){gx.O.AV27SnDadosComprador=this.val()},val:function(){return gx.fn.getControlValue("vSNDADOSCOMPRADOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNMEMORIALDESCRITIVO",gxz:"ZV28SnMemorialDescritivo",gxold:"OV28SnMemorialDescritivo",gxvar:"AV28SnMemorialDescritivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28SnMemorialDescritivo=Value},v2z:function(Value){gx.O.ZV28SnMemorialDescritivo=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNMEMORIALDESCRITIVO",gx.O.AV28SnMemorialDescritivo,"S")},c2v:function(){gx.O.AV28SnMemorialDescritivo=this.val()},val:function(){return gx.fn.getControlValue("vSNMEMORIALDESCRITIVO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[53]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Loteamentoempresaid,isvalid:null,rgrid:[],fld:"vLOTEAMENTOEMPRESAID",gxz:"ZV22LoteamentoEmpresaId",gxold:"OV22LoteamentoEmpresaId",gxvar:"AV22LoteamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22LoteamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV22LoteamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOEMPRESAID",gx.O.AV22LoteamentoEmpresaId,0)},c2v:function(){gx.O.AV22LoteamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"JS", format:2,grid:0};
   GXValidFnc[56]={fld:"BTNHELP",grid:0};
   GXValidFnc[58]={fld:"PROMPT_LOTEAMENTOID",grid:0};
   this.AV53DescLotEmp = "" ;
   this.ZV53DescLotEmp = "" ;
   this.OV53DescLotEmp = "" ;
   this.AV20LoteamentoId = 0 ;
   this.ZV20LoteamentoId = 0 ;
   this.OV20LoteamentoId = 0 ;
   this.AV21LoteamentoNome = "" ;
   this.ZV21LoteamentoNome = "" ;
   this.OV21LoteamentoNome = "" ;
   this.AV24SnAVenda = "" ;
   this.ZV24SnAVenda = "" ;
   this.OV24SnAVenda = "" ;
   this.AV25SnReservado = "" ;
   this.ZV25SnReservado = "" ;
   this.OV25SnReservado = "" ;
   this.AV26SnVendido = "" ;
   this.ZV26SnVendido = "" ;
   this.OV26SnVendido = "" ;
   this.AV27SnDadosComprador = "" ;
   this.ZV27SnDadosComprador = "" ;
   this.OV27SnDadosComprador = "" ;
   this.AV28SnMemorialDescritivo = "" ;
   this.ZV28SnMemorialDescritivo = "" ;
   this.OV28SnMemorialDescritivo = "" ;
   this.AV22LoteamentoEmpresaId = "" ;
   this.ZV22LoteamentoEmpresaId = "" ;
   this.OV22LoteamentoEmpresaId = "" ;
   this.AV53DescLotEmp = "" ;
   this.AV20LoteamentoId = 0 ;
   this.AV21LoteamentoNome = "" ;
   this.AV24SnAVenda = "" ;
   this.AV25SnReservado = "" ;
   this.AV26SnVendido = "" ;
   this.AV27SnDadosComprador = "" ;
   this.AV28SnMemorialDescritivo = "" ;
   this.AV22LoteamentoEmpresaId = "" ;
   this.A5314LoteamentoId = 0 ;
   this.A5290LoteamentoEmpresaId = "" ;
   this.A5315LoteamentoNome = "" ;
   this.Events = {"e11um2_client": ["'FECHAR'", true] ,"e13um2_client": ["ENTER", true] ,"e16um2_client": ["CANCEL", true] ,"e17um1_client": ["PROMPT_LOTEAMENTOID.GXPROMPT", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV54TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV53DescLotEmp',fld:'vDESCLOTEMP'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV20LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV24SnAVenda',fld:'vSNAVENDA'},{av:'AV25SnReservado',fld:'vSNRESERVADO'},{av:'AV26SnVendido',fld:'vSNVENDIDO'},{av:'AV27SnDadosComprador',fld:'vSNDADOSCOMPRADOR'},{av:'AV28SnMemorialDescritivo',fld:'vSNMEMORIALDESCRITIVO'},{av:'AV59Pgmdesc',fld:'vPGMDESC'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'AV22LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'AV54TPDESCRICAO',fld:'vTPDESCRICAO'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV28SnMemorialDescritivo',fld:'vSNMEMORIALDESCRITIVO'},{av:'AV27SnDadosComprador',fld:'vSNDADOSCOMPRADOR'},{av:'AV26SnVendido',fld:'vSNVENDIDO'},{av:'AV25SnReservado',fld:'vSNRESERVADO'},{av:'AV24SnAVenda',fld:'vSNAVENDA'},{av:'AV20LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV60GXLvl68',fld:'vGXLVL68'},{av:'AV21LoteamentoNome',fld:'vLOTEAMENTONOME'}]];
   this.setPrompt("PROMPT_LOTEAMENTOID", [23]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaolotesloteamento());
