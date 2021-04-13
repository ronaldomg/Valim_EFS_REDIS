/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:39:37.92
*/
gx.evt.autoSkip = false;
gx.define('hrelacaonotasenviadas', false, function () {
   this.ServerClass =  "hrelacaonotasenviadas" ;
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
   this.e11hj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13hj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15hj2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16hj2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17hj2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19hj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,30,32,35,37,39,44,47,49,52,54,63,65];
   this.GXLastCtrlId =65;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV43TxtTela",gxold:"OV43TxtTela",gxvar:"AV43TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV43TxtTela=Value},v2z:function(Value){gx.O.ZV43TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV43TxtTela)},c2v:function(){gx.O.AV43TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE2",grid:0};
   GXValidFnc[18]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE5",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[32]={fld:"TABLE3",grid:0};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAENVIOINICIAL",gxz:"ZV19DataEnvioInicial",gxold:"OV19DataEnvioInicial",gxvar:"AV19DataEnvioInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DataEnvioInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19DataEnvioInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAENVIOINICIAL",gx.O.AV19DataEnvioInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19DataEnvioInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAENVIOINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAENVIOFINAL",gxz:"ZV20DataEnvioFinal",gxold:"OV20DataEnvioFinal",gxvar:"AV20DataEnvioFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataEnvioFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataEnvioFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAENVIOFINAL",gx.O.AV20DataEnvioFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20DataEnvioFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAENVIOFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMITENTEFANTASIA",gxz:"ZV21PessoaEmitenteFantasia",gxold:"OV21PessoaEmitenteFantasia",gxvar:"AV21PessoaEmitenteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PessoaEmitenteFantasia=Value},v2z:function(Value){gx.O.ZV21PessoaEmitenteFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMITENTEFANTASIA",gx.O.AV21PessoaEmitenteFantasia,0)},c2v:function(){gx.O.AV21PessoaEmitenteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMITENTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADESTINATARIOFANTASIA",gxz:"ZV26PessoaDestinatarioFantasia",gxold:"OV26PessoaDestinatarioFantasia",gxvar:"AV26PessoaDestinatarioFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PessoaDestinatarioFantasia=Value},v2z:function(Value){gx.O.ZV26PessoaDestinatarioFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOADESTINATARIOFANTASIA",gx.O.AV26PessoaDestinatarioFantasia,0)},c2v:function(){gx.O.AV26PessoaDestinatarioFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOADESTINATARIOFANTASIA")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"JS", format:2,grid:0};
   GXValidFnc[65]={fld:"BTNHELP",grid:0};
   this.AV43TxtTela = "" ;
   this.ZV43TxtTela = "" ;
   this.OV43TxtTela = "" ;
   this.AV19DataEnvioInicial = gx.date.nullDate() ;
   this.ZV19DataEnvioInicial = gx.date.nullDate() ;
   this.OV19DataEnvioInicial = gx.date.nullDate() ;
   this.AV20DataEnvioFinal = gx.date.nullDate() ;
   this.ZV20DataEnvioFinal = gx.date.nullDate() ;
   this.OV20DataEnvioFinal = gx.date.nullDate() ;
   this.AV21PessoaEmitenteFantasia = "" ;
   this.ZV21PessoaEmitenteFantasia = "" ;
   this.OV21PessoaEmitenteFantasia = "" ;
   this.AV26PessoaDestinatarioFantasia = "" ;
   this.ZV26PessoaDestinatarioFantasia = "" ;
   this.OV26PessoaDestinatarioFantasia = "" ;
   this.AV43TxtTela = "" ;
   this.AV19DataEnvioInicial = gx.date.nullDate() ;
   this.AV20DataEnvioFinal = gx.date.nullDate() ;
   this.AV21PessoaEmitenteFantasia = "" ;
   this.AV26PessoaDestinatarioFantasia = "" ;
   this.Events = {"e11hj2_client": ["'FECHAR'", true] ,"e13hj2_client": ["ENTER", true] ,"e15hj2_client": ["'SALVARTXT'", true] ,"e16hj2_client": ["VTXTTELA.CLICK", true] ,"e17hj2_client": ["'EXCLUIRTXT'", true] ,"e19hj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV62Pgmname',fld:'vPGMNAME'},{av:'AV58SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV43TxtTela',fld:'vTXTTELA'}],[{av:'AV43TxtTela',fld:'vTXTTELA'},{av:'AV65GXV2',fld:'vGXV2'},{av:'AV59SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV64GXV1',fld:'vGXV1'},{av:'AV21PessoaEmitenteFantasia',fld:'vPESSOAEMITENTEFANTASIA'},{av:'AV26PessoaDestinatarioFantasia',fld:'vPESSOADESTINATARIOFANTASIA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV62Pgmname',fld:'vPGMNAME'},{av:'AV19DataEnvioInicial',fld:'vDATAENVIOINICIAL'},{av:'AV20DataEnvioFinal',fld:'vDATAENVIOFINAL'},{av:'AV43TxtTela',fld:'vTXTTELA'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV21PessoaEmitenteFantasia',fld:'vPESSOAEMITENTEFANTASIA'},{av:'AV26PessoaDestinatarioFantasia',fld:'vPESSOADESTINATARIOFANTASIA'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV63Pgmdesc',fld:'vPGMDESC'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV25tpErro',fld:'vTPERRO'},{av:'AV54SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV30DataHoraIniStr',fld:'vDATAHORAINISTR'},{av:'AV31DataHoraFimStr',fld:'vDATAHORAFIMSTR'},{av:'AV32DataHoraIni',fld:'vDATAHORAINI'},{av:'AV33DataHoraFim',fld:'vDATAHORAFIM'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26PessoaDestinatarioFantasia',fld:'vPESSOADESTINATARIOFANTASIA'},{av:'AV21PessoaEmitenteFantasia',fld:'vPESSOAEMITENTEFANTASIA'},{av:'AV20DataEnvioFinal',fld:'vDATAENVIOFINAL'},{av:'AV19DataEnvioInicial',fld:'vDATAENVIOINICIAL'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV57OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV43TxtTela',fld:'vTXTTELA'},{av:'AV62Pgmname',fld:'vPGMNAME'},{av:'AV21PessoaEmitenteFantasia',fld:'vPESSOAEMITENTEFANTASIA'},{av:'AV26PessoaDestinatarioFantasia',fld:'vPESSOADESTINATARIOFANTASIA'}],[{av:'AV57OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV62Pgmname',fld:'vPGMNAME'},{av:'AV58SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV43TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV64GXV1',fld:'vGXV1'},{av:'AV59SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV21PessoaEmitenteFantasia',fld:'vPESSOAEMITENTEFANTASIA'},{av:'AV26PessoaDestinatarioFantasia',fld:'vPESSOADESTINATARIOFANTASIA'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV62Pgmname',fld:'vPGMNAME'},{av:'AV43TxtTela',fld:'vTXTTELA'}],[]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaonotasenviadas());
