/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:55:20.79
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoprecolotes', false, function () {
   this.ServerClass =  "hrelacaoprecolotes" ;
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
   this.e11un2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13un2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16un2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.e17un1_client=function()
   {
      this.executeServerEvent("PROMPT_LOTEAMENTOID.GXPROMPT", true, null, false, true);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,19,21,22,25,27,31,35,39,48,49,50,52,54];
   this.GXLastCtrlId =54;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTEMP",gxz:"ZV53DescLotEmp",gxold:"OV53DescLotEmp",gxvar:"AV53DescLotEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53DescLotEmp=Value},v2z:function(Value){gx.O.ZV53DescLotEmp=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTEMP",gx.O.AV53DescLotEmp,0)},c2v:function(){gx.O.AV53DescLotEmp=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTEMP")},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Loteamentoid,isvalid:null,rgrid:[],fld:"vLOTEAMENTOID",gxz:"ZV20LoteamentoId",gxold:"OV20LoteamentoId",gxvar:"AV20LoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20LoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20LoteamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOID",gx.O.AV20LoteamentoId,0)},c2v:function(){gx.O.AV20LoteamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTEAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEAMENTONOME",gxz:"ZV21LoteamentoNome",gxold:"OV21LoteamentoNome",gxvar:"AV21LoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21LoteamentoNome=Value},v2z:function(Value){gx.O.ZV21LoteamentoNome=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTONOME",gx.O.AV21LoteamentoNome,0)},c2v:function(){gx.O.AV21LoteamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTVALIDADE",gxz:"ZV27DtValidade",gxold:"OV27DtValidade",gxvar:"AV27DtValidade",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DtValidade=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DtValidade=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVALIDADE",gx.O.AV27DtValidade,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DtValidade=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVALIDADE")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAVENDA",gxz:"ZV24SnAVenda",gxold:"OV24SnAVenda",gxvar:"AV24SnAVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24SnAVenda=Value},v2z:function(Value){gx.O.ZV24SnAVenda=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNAVENDA",gx.O.AV24SnAVenda,"S")},c2v:function(){gx.O.AV24SnAVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNAVENDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRESERVADO",gxz:"ZV25SnReservado",gxold:"OV25SnReservado",gxvar:"AV25SnReservado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25SnReservado=Value},v2z:function(Value){gx.O.ZV25SnReservado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNRESERVADO",gx.O.AV25SnReservado,"S")},c2v:function(){gx.O.AV25SnReservado=this.val()},val:function(){return gx.fn.getControlValue("vSNRESERVADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDIDO",gxz:"ZV26SnVendido",gxold:"OV26SnVendido",gxvar:"AV26SnVendido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26SnVendido=Value},v2z:function(Value){gx.O.ZV26SnVendido=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNVENDIDO",gx.O.AV26SnVendido,"S")},c2v:function(){gx.O.AV26SnVendido=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDIDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[48]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Loteamentoempresaid,isvalid:null,rgrid:[],fld:"vLOTEAMENTOEMPRESAID",gxz:"ZV22LoteamentoEmpresaId",gxold:"OV22LoteamentoEmpresaId",gxvar:"AV22LoteamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22LoteamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV22LoteamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOEMPRESAID",gx.O.AV22LoteamentoEmpresaId,0)},c2v:function(){gx.O.AV22LoteamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"JS", format:2,grid:0};
   GXValidFnc[50]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   GXValidFnc[54]={fld:"PROMPT_LOTEAMENTOID",grid:0};
   this.AV53DescLotEmp = "" ;
   this.ZV53DescLotEmp = "" ;
   this.OV53DescLotEmp = "" ;
   this.AV20LoteamentoId = 0 ;
   this.ZV20LoteamentoId = 0 ;
   this.OV20LoteamentoId = 0 ;
   this.AV21LoteamentoNome = "" ;
   this.ZV21LoteamentoNome = "" ;
   this.OV21LoteamentoNome = "" ;
   this.AV27DtValidade = gx.date.nullDate() ;
   this.ZV27DtValidade = gx.date.nullDate() ;
   this.OV27DtValidade = gx.date.nullDate() ;
   this.AV24SnAVenda = "" ;
   this.ZV24SnAVenda = "" ;
   this.OV24SnAVenda = "" ;
   this.AV25SnReservado = "" ;
   this.ZV25SnReservado = "" ;
   this.OV25SnReservado = "" ;
   this.AV26SnVendido = "" ;
   this.ZV26SnVendido = "" ;
   this.OV26SnVendido = "" ;
   this.AV22LoteamentoEmpresaId = "" ;
   this.ZV22LoteamentoEmpresaId = "" ;
   this.OV22LoteamentoEmpresaId = "" ;
   this.AV53DescLotEmp = "" ;
   this.AV20LoteamentoId = 0 ;
   this.AV21LoteamentoNome = "" ;
   this.AV27DtValidade = gx.date.nullDate() ;
   this.AV24SnAVenda = "" ;
   this.AV25SnReservado = "" ;
   this.AV26SnVendido = "" ;
   this.AV22LoteamentoEmpresaId = "" ;
   this.A5314LoteamentoId = 0 ;
   this.A5290LoteamentoEmpresaId = "" ;
   this.A5315LoteamentoNome = "" ;
   this.Events = {"e11un2_client": ["'FECHAR'", true] ,"e13un2_client": ["ENTER", true] ,"e16un2_client": ["CANCEL", true] ,"e17un1_client": ["PROMPT_LOTEAMENTOID.GXPROMPT", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV52TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV53DescLotEmp',fld:'vDESCLOTEMP'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV57Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV20LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV24SnAVenda',fld:'vSNAVENDA'},{av:'AV25SnReservado',fld:'vSNRESERVADO'},{av:'AV26SnVendido',fld:'vSNVENDIDO'},{av:'AV27DtValidade',fld:'vDTVALIDADE'},{av:'AV58Pgmdesc',fld:'vPGMDESC'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'AV22LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV27DtValidade',fld:'vDTVALIDADE'},{av:'AV26SnVendido',fld:'vSNVENDIDO'},{av:'AV25SnReservado',fld:'vSNRESERVADO'},{av:'AV24SnAVenda',fld:'vSNAVENDA'},{av:'AV20LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV52TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV59GXLvl77',fld:'vGXLVL77'},{av:'AV21LoteamentoNome',fld:'vLOTEAMENTONOME'}]];
   this.setPrompt("PROMPT_LOTEAMENTOID", [21]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoprecolotes());
