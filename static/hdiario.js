/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:55:57.34
*/
gx.evt.autoSkip = false;
gx.define('hdiario', false, function () {
   this.ServerClass =  "hdiario" ;
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
   this.e11682_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13682_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15682_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16682_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17682_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19682_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,29,32,37,40,42,45,47,49,54,57,59,62,64,68,77,79];
   this.GXLastCtrlId =79;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV40TxtTela",gxold:"OV40TxtTela",gxvar:"AV40TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV40TxtTela=Value},v2z:function(Value){gx.O.ZV40TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV40TxtTela)},c2v:function(){gx.O.AV40TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE3",grid:0};
   GXValidFnc[17]={fld:"IMAGE4",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABLE8",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLAYOUTLANCPARTIDA",gxz:"ZV12LayoutLancPartida",gxold:"OV12LayoutLancPartida",gxvar:"AV12LayoutLancPartida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV12LayoutLancPartida=Value},v2z:function(Value){gx.O.ZV12LayoutLancPartida=Value},v2c:function(){gx.fn.setCheckBoxValue("vLAYOUTLANCPARTIDA",gx.O.AV12LayoutLancPartida,"S")},c2v:function(){gx.O.AV12LayoutLancPartida=this.val()},val:function(){return gx.fn.getControlValue("vLAYOUTLANCPARTIDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALIZARDIA",gxz:"ZV13TotalizarDia",gxold:"OV13TotalizarDia",gxvar:"AV13TotalizarDia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV13TotalizarDia=Value},v2z:function(Value){gx.O.ZV13TotalizarDia=Value},v2c:function(){gx.fn.setCheckBoxValue("vTOTALIZARDIA",gx.O.AV13TotalizarDia,"S")},c2v:function(){gx.O.AV13TotalizarDia=this.val()},val:function(){return gx.fn.getControlValue("vTOTALIZARDIA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLE9",grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV14DataInicial",gxold:"OV14DataInicial",gxvar:"AV14DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV14DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[47]={fld:"A", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV15DataFinal",gxold:"OV15DataFinal",gxvar:"AV15DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV15DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[54]={fld:"TITULOPAGINACAO", format:0,grid:0};
   GXValidFnc[57]={fld:"PAGINAATUAL", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAONUMERODIARIO",gxz:"ZV24PaginacaoNumeroDiario",gxold:"OV24PaginacaoNumeroDiario",gxvar:"AV24PaginacaoNumeroDiario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginacaoNumeroDiario=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginacaoNumeroDiario=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINACAONUMERODIARIO",gx.O.AV24PaginacaoNumeroDiario,0)},c2v:function(){gx.O.AV24PaginacaoNumeroDiario=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAONUMERODIARIO",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"QTDEPAGINAS", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAOQUANTIDADEDIARIO",gxz:"ZV25PaginacaoQuantidadeDiario",gxold:"OV25PaginacaoQuantidadeDiario",gxvar:"AV25PaginacaoQuantidadeDiario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginacaoQuantidadeDiario=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginacaoQuantidadeDiario=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINACAOQUANTIDADEDIARIO",gx.O.AV25PaginacaoQuantidadeDiario,0)},c2v:function(){gx.O.AV25PaginacaoQuantidadeDiario=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAOQUANTIDADEDIARIO",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATUALIZARPAGINA",gxz:"ZV16AtualizarPagina",gxold:"OV16AtualizarPagina",gxvar:"AV16AtualizarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16AtualizarPagina=Value},v2z:function(Value){gx.O.ZV16AtualizarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vATUALIZARPAGINA",gx.O.AV16AtualizarPagina,"S")},c2v:function(){gx.O.AV16AtualizarPagina=this.val()},val:function(){return gx.fn.getControlValue("vATUALIZARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[77]={fld:"JS", format:2,grid:0};
   GXValidFnc[79]={fld:"BTNHELP",grid:0};
   this.AV40TxtTela = "" ;
   this.ZV40TxtTela = "" ;
   this.OV40TxtTela = "" ;
   this.AV12LayoutLancPartida = "" ;
   this.ZV12LayoutLancPartida = "" ;
   this.OV12LayoutLancPartida = "" ;
   this.AV13TotalizarDia = "" ;
   this.ZV13TotalizarDia = "" ;
   this.OV13TotalizarDia = "" ;
   this.AV14DataInicial = gx.date.nullDate() ;
   this.ZV14DataInicial = gx.date.nullDate() ;
   this.OV14DataInicial = gx.date.nullDate() ;
   this.AV15DataFinal = gx.date.nullDate() ;
   this.ZV15DataFinal = gx.date.nullDate() ;
   this.OV15DataFinal = gx.date.nullDate() ;
   this.AV24PaginacaoNumeroDiario = 0 ;
   this.ZV24PaginacaoNumeroDiario = 0 ;
   this.OV24PaginacaoNumeroDiario = 0 ;
   this.AV25PaginacaoQuantidadeDiario = 0 ;
   this.ZV25PaginacaoQuantidadeDiario = 0 ;
   this.OV25PaginacaoQuantidadeDiario = 0 ;
   this.AV16AtualizarPagina = "" ;
   this.ZV16AtualizarPagina = "" ;
   this.OV16AtualizarPagina = "" ;
   this.AV40TxtTela = "" ;
   this.AV12LayoutLancPartida = "" ;
   this.AV13TotalizarDia = "" ;
   this.AV14DataInicial = gx.date.nullDate() ;
   this.AV15DataFinal = gx.date.nullDate() ;
   this.AV24PaginacaoNumeroDiario = 0 ;
   this.AV25PaginacaoQuantidadeDiario = 0 ;
   this.AV16AtualizarPagina = "" ;
   this.A82EmpresaPaginacaoEmpresaId = "" ;
   this.A85PaginacaoNumeroDiario = 0 ;
   this.A84PaginacaoQuantidadeDiario = 0 ;
   this.Events = {"e11682_client": ["'FECHAR'", true] ,"e13682_client": ["ENTER", true] ,"e15682_client": ["'SALVARTXT'", true] ,"e16682_client": ["VTXTTELA.CLICK", true] ,"e17682_client": ["'EXCLUIRTXT'", true] ,"e19682_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV59Pgmname',fld:'vPGMNAME'},{av:'AV55SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV23EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A85PaginacaoNumeroDiario',fld:'PAGINACAONUMERODIARIO'},{av:'A84PaginacaoQuantidadeDiario',fld:'PAGINACAOQUANTIDADEDIARIO'},{av:'AV40TxtTela',fld:'vTXTTELA'}],[{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV64GXV2',fld:'vGXV2'},{av:'AV56SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV24PaginacaoNumeroDiario',fld:'vPAGINACAONUMERODIARIO'},{av:'AV25PaginacaoQuantidadeDiario',fld:'vPAGINACAOQUANTIDADEDIARIO'},{av:'AV63GXV1',fld:'vGXV1'},{av:'AV12LayoutLancPartida',fld:'vLAYOUTLANCPARTIDA'},{av:'AV13TotalizarDia',fld:'vTOTALIZARDIA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14DataInicial',fld:'vDATAINICIAL'},{av:'AV15DataFinal',fld:'vDATAFINAL'},{av:'AV60Pgmdesc',fld:'vPGMDESC'},{av:'AV13TotalizarDia',fld:'vTOTALIZARDIA'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19Ordenacao',fld:'vORDENACAO'},{av:'AV59Pgmname',fld:'vPGMNAME'},{av:'AV12LayoutLancPartida',fld:'vLAYOUTLANCPARTIDA'},{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV25PaginacaoQuantidadeDiario',fld:'vPAGINACAOQUANTIDADEDIARIO'},{av:'AV24PaginacaoNumeroDiario',fld:'vPAGINACAONUMERODIARIO'},{av:'AV16AtualizarPagina',fld:'vATUALIZARPAGINA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV21ErroDataIni',fld:'vERRODATAINI'},{av:'AV22ErroDataFim',fld:'vERRODATAFIM'},{av:'AV51SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV18NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV17NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV28QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV25PaginacaoQuantidadeDiario',fld:'vPAGINACAOQUANTIDADEDIARIO'},{av:'AV24PaginacaoNumeroDiario',fld:'vPAGINACAONUMERODIARIO'},{av:'AV16AtualizarPagina',fld:'vATUALIZARPAGINA'},{av:'AV13TotalizarDia',fld:'vTOTALIZARDIA'},{av:'AV12LayoutLancPartida',fld:'vLAYOUTLANCPARTIDA'},{av:'AV15DataFinal',fld:'vDATAFINAL'},{av:'AV14DataInicial',fld:'vDATAINICIAL'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV61Orientacao',fld:'vORIENTACAO'},{av:'AV54OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV59Pgmname',fld:'vPGMNAME'},{av:'AV13TotalizarDia',fld:'vTOTALIZARDIA'},{av:'AV12LayoutLancPartida',fld:'vLAYOUTLANCPARTIDA'}],[{av:'AV54OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV59Pgmname',fld:'vPGMNAME'},{av:'AV55SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV63GXV1',fld:'vGXV1'},{av:'AV56SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV12LayoutLancPartida',fld:'vLAYOUTLANCPARTIDA'},{av:'AV13TotalizarDia',fld:'vTOTALIZARDIA'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV59Pgmname',fld:'vPGMNAME'},{av:'AV40TxtTela',fld:'vTXTTELA'}],[]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdiario());
