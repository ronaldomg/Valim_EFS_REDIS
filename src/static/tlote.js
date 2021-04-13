/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:42:27.76
*/
gx.evt.autoSkip = false;
gx.define('tlote', false, function () {
   this.ServerClass =  "tlote" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A5309LoteVlrMetroValor=gx.fn.getDecimalValue("LOTEVLRMETROVALOR",'.',',') ;
      this.A5311LoteValorTotal=gx.fn.getDecimalValue("LOTEVALORTOTAL",'.',',') ;
      this.AV21LoteNumLote=gx.fn.getControlValue("vLOTENUMLOTE") ;
      this.AV22LoteNumQuadra=gx.fn.getControlValue("vLOTENUMQUADRA") ;
      this.AV20LoteamentoEmpresaId=gx.fn.getControlValue("vLOTEAMENTOEMPRESAID") ;
      this.A5290LoteamentoEmpresaId=gx.fn.getControlValue("LOTEAMENTOEMPRESAID") ;
      this.AV42TipoLoteEmpresaId=gx.fn.getControlValue("vTIPOLOTEEMPRESAID") ;
      this.A8506LoteTipoEmpId=gx.fn.getControlValue("LOTETIPOEMPID") ;
      this.AV19LoteamentoId=gx.fn.getIntegerValue("vLOTEAMENTOID",'.') ;
      this.AV25LoteamentoNome=gx.fn.getControlValue("vLOTEAMENTONOME") ;
      this.AV23SituacaoEmpresaId=gx.fn.getControlValue("vSITUACAOEMPRESAID") ;
      this.A5297LoteSituacaoEmpId=gx.fn.getControlValue("LOTESITUACAOEMPID") ;
      this.A5306LoteVlrMetroEmpId=gx.fn.getControlValue("LOTEVLRMETROEMPID") ;
      this.AV24EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.A5303LoteClienteReservaEmpId=gx.fn.getControlValue("LOTECLIENTERESERVAEMPID") ;
      this.AV34SnReservado=gx.fn.getControlValue("vSNRESERVADO") ;
      this.A9613LoteClienteReservaCliente=gx.fn.getControlValue("LOTECLIENTERESERVACLIENTE") ;
      this.AV43LoteamentoTipoValor=gx.fn.getControlValue("vLOTEAMENTOTIPOVALOR") ;
      this.AV28ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV33SnAVenda=gx.fn.getControlValue("vSNAVENDA") ;
      this.AV35SnVendido=gx.fn.getControlValue("vSNVENDIDO") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV39LoteSituacaoId=gx.fn.getIntegerValue("vLOTESITUACAOID",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV46MsgLote=gx.fn.getControlValue("vMSGLOTE") ;
      this.AV47MsgQuadra=gx.fn.getControlValue("vMSGQUADRA") ;
      this.AV48MsgArea=gx.fn.getControlValue("vMSGAREA") ;
      this.A5300LoteSituacaoSnReservado=gx.fn.getControlValue("LOTESITUACAOSNRESERVADO") ;
      this.A5301LoteSituacaoSnVenda=gx.fn.getControlValue("LOTESITUACAOSNVENDA") ;
      this.A5302LoteSituacaoSnVendido=gx.fn.getControlValue("LOTESITUACAOSNVENDIDO") ;
      this.AV58Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV57Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV29Sim=gx.fn.getControlValue("vSIM") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Loteamentoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Loteamentoid",["gx.O.A5290LoteamentoEmpresaId", "gx.O.A5314LoteamentoId", "gx.O.AV25LoteamentoNome", "gx.O.A5315LoteamentoNome"],["A5315LoteamentoNome"]);
      return true;
   }
   this.Valid_Lotenumlote=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTENUMLOTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lotenumquadra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTENUMQUADRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Loteamentonome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAMENTONOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lotelocalizacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTELOCALIZACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lotesituacaoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lotesituacaoid",["gx.O.AV23SituacaoEmpresaId", "gx.O.A5298LoteSituacaoId", "gx.O.AV33SnAVenda", "gx.O.AV35SnVendido", "gx.O.AV34SnReservado"],["AV34SnReservado"]);
      return true;
   }
   this.Valid_Lotetipoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lotetipoid",["gx.O.AV42TipoLoteEmpresaId", "gx.O.A8507LoteTipoId", "gx.O.A8506LoteTipoEmpId", "gx.O.A8508LoteTipoDescricao"],["A8506LoteTipoEmpId", "A8508LoteTipoDescricao"]);
      return true;
   }
   this.Valid_Loteclientereservaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Loteclientereservaid",["gx.O.AV24EmpresaPessoasEmpresaId", "gx.O.A5304LoteClienteReservaId", "gx.O.A5303LoteClienteReservaEmpId", "gx.O.A5305LoteClienteReservaFantasia", "gx.O.A9613LoteClienteReservaCliente"],["A5303LoteClienteReservaEmpId", "A5305LoteClienteReservaFantasia", "A9613LoteClienteReservaCliente"]);
      return true;
   }
   this.Valid_Loteareafrente=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAREAFRENTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Loteareafundo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAREAFUNDO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Loteareatotal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAREATOTAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Loteareacomum=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAREACOMUM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lotevlrmetroid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lotevlrmetroid",["gx.O.AV32LoteVlrMetroEmpId", "gx.O.A5307LoteVlrMetroId", "gx.O.A5306LoteVlrMetroEmpId", "gx.O.A5314LoteamentoId", "gx.O.A5316LoteNumLote", "gx.O.A5317LoteNumQuadra", "gx.num.urlDecimal(gx.O.A5295LoteAreaTotal,\'.\',\',\')", "gx.O.A5298LoteSituacaoId", "gx.num.urlDecimal(gx.O.A5309LoteVlrMetroValor,\'.\',\',\')", "gx.O.A5308LoteVlrMetroDes", "gx.num.urlDecimal(gx.O.A5311LoteValorTotal,\'.\',\',\')"],["A5306LoteVlrMetroEmpId", "A5308LoteVlrMetroDes", "A5309LoteVlrMetroValor", "A5311LoteValorTotal"]);
      return true;
   }
   this.Valid_Lotevalorimovel=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lotevalorimovel",["gx.O.A5316LoteNumLote", "gx.O.A5317LoteNumQuadra", "gx.O.AV31LoteamentoIdentificacaoLotes", "gx.O.A5298LoteSituacaoId", "gx.O.AV34SnReservado", "gx.O.A5304LoteClienteReservaId", "gx.O.A9613LoteClienteReservaCliente", "gx.num.urlDecimal(gx.O.A5295LoteAreaTotal,\'.\',\',\')", "gx.O.A5307LoteVlrMetroId", "gx.O.AV43LoteamentoTipoValor", "gx.num.urlDecimal(gx.O.A8509LoteValorImovel,\'.\',\',\')", "gx.O.AV28ret"],["AV28ret"]);
      return true;
   }
   this.Valid_Lotememorialdescritivo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEMEMORIALDESCRITIVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lotevlrmetroempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTEVLRMETROEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Loteamentoidentificacaolotes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTEAMENTOIDENTIFICACAOLOTES");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e128h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138h2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148h461_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158h461_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,16,20,22,23,24,27,29,35,37,38,41,43,44,47,49,50,54,57,60,64,67,69,72,74,75,79,82,84,90,92,94,97,103,105,106,109,111,112,115,121,123,124,127,130,133,135,137,144,147,148,149,151,154,155,156,157];
   this.GXLastCtrlId =157;
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV54Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV54Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV54Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tlote_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTEMP",gxz:"ZV45DescLotEmp",gxold:"OV45DescLotEmp",gxvar:"AV45DescLotEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45DescLotEmp=Value},v2z:function(Value){gx.O.ZV45DescLotEmp=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTEMP",gx.O.AV45DescLotEmp,0)},c2v:function(){gx.O.AV45DescLotEmp=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTEMP")},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Loteamentoid,isvalid:null,rgrid:[],fld:"LOTEAMENTOID",gxz:"Z5314LoteamentoId",gxold:"O5314LoteamentoId",gxvar:"A5314LoteamentoId",ucs:[],op:[16],ip:[16,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5314LoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5314LoteamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTEAMENTOID",gx.O.A5314LoteamentoId,0)},c2v:function(){gx.O.A5314LoteamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTEAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Loteamentonome,isvalid:null,rgrid:[],fld:"LOTEAMENTONOME",gxz:"Z5315LoteamentoNome",gxold:"O5315LoteamentoNome",gxvar:"A5315LoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5315LoteamentoNome=Value},v2z:function(Value){gx.O.Z5315LoteamentoNome=Value},v2c:function(){gx.fn.setControlValue("LOTEAMENTONOME",gx.O.A5315LoteamentoNome,0)},c2v:function(){gx.O.A5315LoteamentoNome=this.val()},val:function(){return gx.fn.getControlValue("LOTEAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lotenumlote,isvalid:null,rgrid:[],fld:"LOTENUMLOTE",gxz:"Z5316LoteNumLote",gxold:"O5316LoteNumLote",gxvar:"A5316LoteNumLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5316LoteNumLote=Value},v2z:function(Value){gx.O.Z5316LoteNumLote=Value},v2c:function(){gx.fn.setControlValue("LOTENUMLOTE",gx.O.A5316LoteNumLote,0)},c2v:function(){gx.O.A5316LoteNumLote=this.val()},val:function(){return gx.fn.getControlValue("LOTENUMLOTE")},nac:function(){return !(""==this.AV21LoteNumLote)}};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lotenumquadra,isvalid:null,rgrid:[],fld:"LOTENUMQUADRA",gxz:"Z5317LoteNumQuadra",gxold:"O5317LoteNumQuadra",gxvar:"A5317LoteNumQuadra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5317LoteNumQuadra=Value},v2z:function(Value){gx.O.Z5317LoteNumQuadra=Value},v2c:function(){gx.fn.setControlValue("LOTENUMQUADRA",gx.O.A5317LoteNumQuadra,0)},c2v:function(){gx.O.A5317LoteNumQuadra=this.val()},val:function(){return gx.fn.getControlValue("LOTENUMQUADRA")},nac:function(){return !(""==this.AV22LoteNumQuadra)}};
   GXValidFnc[27]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lotelocalizacao,isvalid:null,rgrid:[],fld:"LOTELOCALIZACAO",gxz:"Z5292LoteLocalizacao",gxold:"O5292LoteLocalizacao",gxvar:"A5292LoteLocalizacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5292LoteLocalizacao=Value},v2z:function(Value){gx.O.Z5292LoteLocalizacao=Value},v2c:function(){gx.fn.setControlValue("LOTELOCALIZACAO",gx.O.A5292LoteLocalizacao,0)},c2v:function(){gx.O.A5292LoteLocalizacao=this.val()},val:function(){return gx.fn.getControlValue("LOTELOCALIZACAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lotesituacaoid,isvalid:null,rgrid:[],fld:"LOTESITUACAOID",gxz:"Z5298LoteSituacaoId",gxold:"O5298LoteSituacaoId",gxvar:"A5298LoteSituacaoId",ucs:[],op:[],ip:[37],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5298LoteSituacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5298LoteSituacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTESITUACAOID",gx.O.A5298LoteSituacaoId,0)},c2v:function(){gx.O.A5298LoteSituacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTESITUACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTESITUACAODESCRICAO",gxz:"Z5299LoteSituacaoDescricao",gxold:"O5299LoteSituacaoDescricao",gxvar:"A5299LoteSituacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5299LoteSituacaoDescricao=Value},v2z:function(Value){gx.O.Z5299LoteSituacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("LOTESITUACAODESCRICAO",gx.O.A5299LoteSituacaoDescricao,0)},c2v:function(){gx.O.A5299LoteSituacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("LOTESITUACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lotetipoid,isvalid:null,rgrid:[],fld:"LOTETIPOID",gxz:"Z8507LoteTipoId",gxold:"O8507LoteTipoId",gxvar:"A8507LoteTipoId",ucs:[],op:[44],ip:[44,43],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8507LoteTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8507LoteTipoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTETIPOID",gx.O.A8507LoteTipoId,0)},c2v:function(){gx.O.A8507LoteTipoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTETIPOID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTETIPODESCRICAO",gxz:"Z8508LoteTipoDescricao",gxold:"O8508LoteTipoDescricao",gxvar:"A8508LoteTipoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8508LoteTipoDescricao=Value},v2z:function(Value){gx.O.Z8508LoteTipoDescricao=Value},v2c:function(){gx.fn.setControlValue("LOTETIPODESCRICAO",gx.O.A8508LoteTipoDescricao,0)},c2v:function(){gx.O.A8508LoteTipoDescricao=this.val()},val:function(){return gx.fn.getControlValue("LOTETIPODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteclientereservaid,isvalid:null,rgrid:[],fld:"LOTECLIENTERESERVAID",gxz:"Z5304LoteClienteReservaId",gxold:"O5304LoteClienteReservaId",gxvar:"A5304LoteClienteReservaId",ucs:[],op:[50],ip:[50,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5304LoteClienteReservaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5304LoteClienteReservaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTECLIENTERESERVAID",gx.O.A5304LoteClienteReservaId,0)},c2v:function(){gx.O.A5304LoteClienteReservaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTECLIENTERESERVAID",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTECLIENTERESERVAFANTASIA",gxz:"Z5305LoteClienteReservaFantasia",gxold:"O5305LoteClienteReservaFantasia",gxvar:"A5305LoteClienteReservaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5305LoteClienteReservaFantasia=Value},v2z:function(Value){gx.O.Z5305LoteClienteReservaFantasia=Value},v2c:function(){gx.fn.setControlValue("LOTECLIENTERESERVAFANTASIA",gx.O.A5305LoteClienteReservaFantasia,0)},c2v:function(){gx.O.A5305LoteClienteReservaFantasia=this.val()},val:function(){return gx.fn.getControlValue("LOTECLIENTERESERVAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE3",grid:0};
   GXValidFnc[57]={fld:"TABDIMENSAO",grid:0};
   GXValidFnc[60]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[64]={fld:"TBFRENTEFUNDO",grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:10,dec:3,sign:false,pic:"ZZZ,ZZ9.999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteareafrente,isvalid:null,rgrid:[],fld:"LOTEAREAFRENTE",gxz:"Z5293LoteAreaFrente",gxold:"O5293LoteAreaFrente",gxvar:"A5293LoteAreaFrente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5293LoteAreaFrente=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5293LoteAreaFrente=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEAREAFRENTE",gx.O.A5293LoteAreaFrente,3,',')},c2v:function(){gx.O.A5293LoteAreaFrente=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEAREAFRENTE",'.',',')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"decimal",len:10,dec:3,sign:false,pic:"ZZZ,ZZ9.999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteareafundo,isvalid:null,rgrid:[],fld:"LOTEAREAFUNDO",gxz:"Z5294LoteAreaFundo",gxold:"O5294LoteAreaFundo",gxvar:"A5294LoteAreaFundo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5294LoteAreaFundo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5294LoteAreaFundo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEAREAFUNDO",gx.O.A5294LoteAreaFundo,3,',')},c2v:function(){gx.O.A5294LoteAreaFundo=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEAREAFUNDO",'.',',')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TBTRACO",grid:0};
   GXValidFnc[79]={fld:"TABDIMENSAO1",grid:0};
   GXValidFnc[82]={fld:"TXTTOTALPRIVATIVA", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"decimal",len:10,dec:3,sign:false,pic:"ZZZ,ZZ9.999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteareatotal,isvalid:null,rgrid:[],fld:"LOTEAREATOTAL",gxz:"Z5295LoteAreaTotal",gxold:"O5295LoteAreaTotal",gxvar:"A5295LoteAreaTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5295LoteAreaTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5295LoteAreaTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEAREATOTAL",gx.O.A5295LoteAreaTotal,3,',')},c2v:function(){gx.O.A5295LoteAreaTotal=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEAREATOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"decimal",len:10,dec:3,sign:false,pic:"ZZZ,ZZ9.999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteareacomum,isvalid:null,rgrid:[],fld:"LOTEAREACOMUM",gxz:"Z5296LoteAreaComum",gxold:"O5296LoteAreaComum",gxvar:"A5296LoteAreaComum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5296LoteAreaComum=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5296LoteAreaComum=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEAREACOMUM",gx.O.A5296LoteAreaComum,3,',')},c2v:function(){gx.O.A5296LoteAreaComum=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEAREACOMUM",'.',',')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TBMETRO",grid:0};
   GXValidFnc[97]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[103]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lotevlrmetroid,isvalid:null,rgrid:[],fld:"LOTEVLRMETROID",gxz:"Z5307LoteVlrMetroId",gxold:"O5307LoteVlrMetroId",gxvar:"A5307LoteVlrMetroId",ucs:[],op:[106],ip:[106,37,84,24,22,15,105,144],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5307LoteVlrMetroId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5307LoteVlrMetroId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTEVLRMETROID",gx.O.A5307LoteVlrMetroId,0)},c2v:function(){gx.O.A5307LoteVlrMetroId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTEVLRMETROID",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEVLRMETRODES",gxz:"Z5308LoteVlrMetroDes",gxold:"O5308LoteVlrMetroDes",gxvar:"A5308LoteVlrMetroDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5308LoteVlrMetroDes=Value},v2z:function(Value){gx.O.Z5308LoteVlrMetroDes=Value},v2c:function(){gx.fn.setControlValue("LOTEVLRMETRODES",gx.O.A5308LoteVlrMetroDes,0)},c2v:function(){gx.O.A5308LoteVlrMetroDes=this.val()},val:function(){return gx.fn.getControlValue("LOTEVLRMETRODES")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTALLOTE",gxz:"ZV38ValorTotalLote",gxold:"OV38ValorTotalLote",gxvar:"AV38ValorTotalLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ValorTotalLote=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV38ValorTotalLote=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTALLOTE",gx.O.AV38ValorTotalLote,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV38ValorTotalLote=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTALLOTE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 111 , function() {
   });
   GXValidFnc[112]={fld:"TBVALOR",grid:0};
   GXValidFnc[115]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[121]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lotevalorimovel,isvalid:null,rgrid:[],fld:"LOTEVALORIMOVEL",gxz:"Z8509LoteValorImovel",gxold:"O8509LoteValorImovel",gxvar:"A8509LoteValorImovel",ucs:[],op:[],ip:[123,105,84,49,37,148,24,22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8509LoteValorImovel=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8509LoteValorImovel=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEVALORIMOVEL",gx.O.A8509LoteValorImovel,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8509LoteValorImovel=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEVALORIMOVEL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 123 , function() {
   });
   GXValidFnc[124]={fld:"TAB2",grid:0};
   GXValidFnc[127]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Lotememorialdescritivo,isvalid:null,rgrid:[],fld:"LOTEMEMORIALDESCRITIVO",gxz:"Z5310LoteMemorialDescritivo",gxold:"O5310LoteMemorialDescritivo",gxvar:"A5310LoteMemorialDescritivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5310LoteMemorialDescritivo=Value},v2z:function(Value){gx.O.Z5310LoteMemorialDescritivo=Value},v2c:function(){gx.fn.setControlValue("LOTEMEMORIALDESCRITIVO",gx.O.A5310LoteMemorialDescritivo,0)},c2v:function(){gx.O.A5310LoteMemorialDescritivo=this.val()},val:function(){return gx.fn.getControlValue("LOTEMEMORIALDESCRITIVO")},nac:gx.falseFn};
   GXValidFnc[130]={fld:"TABLE21",grid:0};
   GXValidFnc[133]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEUSUARIOALT",gxz:"Z5312LoteUsuarioAlt",gxold:"O5312LoteUsuarioAlt",gxvar:"A5312LoteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5312LoteUsuarioAlt=Value},v2z:function(Value){gx.O.Z5312LoteUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LOTEUSUARIOALT",gx.O.A5312LoteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5312LoteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LOTEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 135 , function() {
   });
   GXValidFnc[137]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEDATAHORAALT",gxz:"Z5313LoteDataHoraAlt",gxold:"O5313LoteDataHoraAlt",gxvar:"A5313LoteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5313LoteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5313LoteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOTEDATAHORAALT",gx.O.A5313LoteDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5313LoteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LOTEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 137 , function() {
   });
   GXValidFnc[144]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Lotevlrmetroempid,isvalid:null,rgrid:[],fld:"vLOTEVLRMETROEMPID",gxz:"ZV32LoteVlrMetroEmpId",gxold:"OV32LoteVlrMetroEmpId",gxvar:"AV32LoteVlrMetroEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32LoteVlrMetroEmpId=Value},v2z:function(Value){gx.O.ZV32LoteVlrMetroEmpId=Value},v2c:function(){gx.fn.setControlValue("vLOTEVLRMETROEMPID",gx.O.AV32LoteVlrMetroEmpId,0)},c2v:function(){gx.O.AV32LoteVlrMetroEmpId=this.val()},val:function(){return gx.fn.getControlValue("vLOTEVLRMETROEMPID")},nac:gx.falseFn};
   GXValidFnc[147]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[148]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Loteamentoidentificacaolotes,isvalid:null,rgrid:[],fld:"vLOTEAMENTOIDENTIFICACAOLOTES",gxz:"ZV31LoteamentoIdentificacaoLotes",gxold:"OV31LoteamentoIdentificacaoLotes",gxvar:"AV31LoteamentoIdentificacaoLotes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31LoteamentoIdentificacaoLotes=Value},v2z:function(Value){gx.O.ZV31LoteamentoIdentificacaoLotes=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOIDENTIFICACAOLOTES",gx.O.AV31LoteamentoIdentificacaoLotes,0)},c2v:function(){gx.O.AV31LoteamentoIdentificacaoLotes=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTOIDENTIFICACAOLOTES")},nac:gx.falseFn};
   GXValidFnc[149]={fld:"JS", format:2,grid:0};
   GXValidFnc[151]={fld:"BTNHELP",grid:0};
   GXValidFnc[154]={fld:"PROMPT_5298",grid:461};
   GXValidFnc[155]={fld:"PROMPT_8507",grid:461};
   GXValidFnc[156]={fld:"PROMPT_5304",grid:461};
   GXValidFnc[157]={fld:"PROMPT_5307",grid:461};
   this.AV45DescLotEmp = "" ;
   this.ZV45DescLotEmp = "" ;
   this.OV45DescLotEmp = "" ;
   this.A5314LoteamentoId = 0 ;
   this.Z5314LoteamentoId = 0 ;
   this.O5314LoteamentoId = 0 ;
   this.A5315LoteamentoNome = "" ;
   this.Z5315LoteamentoNome = "" ;
   this.O5315LoteamentoNome = "" ;
   this.A5316LoteNumLote = "" ;
   this.Z5316LoteNumLote = "" ;
   this.O5316LoteNumLote = "" ;
   this.A5317LoteNumQuadra = "" ;
   this.Z5317LoteNumQuadra = "" ;
   this.O5317LoteNumQuadra = "" ;
   this.A5292LoteLocalizacao = "" ;
   this.Z5292LoteLocalizacao = "" ;
   this.O5292LoteLocalizacao = "" ;
   this.A5298LoteSituacaoId = 0 ;
   this.Z5298LoteSituacaoId = 0 ;
   this.O5298LoteSituacaoId = 0 ;
   this.A5299LoteSituacaoDescricao = "" ;
   this.Z5299LoteSituacaoDescricao = "" ;
   this.O5299LoteSituacaoDescricao = "" ;
   this.A8507LoteTipoId = 0 ;
   this.Z8507LoteTipoId = 0 ;
   this.O8507LoteTipoId = 0 ;
   this.A8508LoteTipoDescricao = "" ;
   this.Z8508LoteTipoDescricao = "" ;
   this.O8508LoteTipoDescricao = "" ;
   this.A5304LoteClienteReservaId = 0 ;
   this.Z5304LoteClienteReservaId = 0 ;
   this.O5304LoteClienteReservaId = 0 ;
   this.A5305LoteClienteReservaFantasia = "" ;
   this.Z5305LoteClienteReservaFantasia = "" ;
   this.O5305LoteClienteReservaFantasia = "" ;
   this.A5293LoteAreaFrente = 0 ;
   this.Z5293LoteAreaFrente = 0 ;
   this.O5293LoteAreaFrente = 0 ;
   this.A5294LoteAreaFundo = 0 ;
   this.Z5294LoteAreaFundo = 0 ;
   this.O5294LoteAreaFundo = 0 ;
   this.A5295LoteAreaTotal = 0 ;
   this.Z5295LoteAreaTotal = 0 ;
   this.O5295LoteAreaTotal = 0 ;
   this.A5296LoteAreaComum = 0 ;
   this.Z5296LoteAreaComum = 0 ;
   this.O5296LoteAreaComum = 0 ;
   this.A5307LoteVlrMetroId = 0 ;
   this.Z5307LoteVlrMetroId = 0 ;
   this.O5307LoteVlrMetroId = 0 ;
   this.A5308LoteVlrMetroDes = "" ;
   this.Z5308LoteVlrMetroDes = "" ;
   this.O5308LoteVlrMetroDes = "" ;
   this.AV38ValorTotalLote = 0 ;
   this.ZV38ValorTotalLote = 0 ;
   this.OV38ValorTotalLote = 0 ;
   this.A8509LoteValorImovel = 0 ;
   this.Z8509LoteValorImovel = 0 ;
   this.O8509LoteValorImovel = 0 ;
   this.A5310LoteMemorialDescritivo = "" ;
   this.Z5310LoteMemorialDescritivo = "" ;
   this.O5310LoteMemorialDescritivo = "" ;
   this.A5312LoteUsuarioAlt = "" ;
   this.Z5312LoteUsuarioAlt = "" ;
   this.O5312LoteUsuarioAlt = "" ;
   this.A5313LoteDataHoraAlt = gx.date.nullDate() ;
   this.Z5313LoteDataHoraAlt = gx.date.nullDate() ;
   this.O5313LoteDataHoraAlt = gx.date.nullDate() ;
   this.AV32LoteVlrMetroEmpId = "" ;
   this.ZV32LoteVlrMetroEmpId = "" ;
   this.OV32LoteVlrMetroEmpId = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV31LoteamentoIdentificacaoLotes = "" ;
   this.ZV31LoteamentoIdentificacaoLotes = "" ;
   this.OV31LoteamentoIdentificacaoLotes = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV57Pgmname = "" ;
   this.AV58Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV23SituacaoEmpresaId = "" ;
   this.AV42TipoLoteEmpresaId = "" ;
   this.AV39LoteSituacaoId = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV24EmpresaPessoasEmpresaId = "" ;
   this.AV32LoteVlrMetroEmpId = "" ;
   this.AV44TPDESCRICAO = "" ;
   this.AV45DescLotEmp = "" ;
   this.AV48MsgArea = "" ;
   this.AV46MsgLote = "" ;
   this.AV47MsgQuadra = "" ;
   this.AV29Sim = "" ;
   this.AV30Nao = "" ;
   this.AV33SnAVenda = "" ;
   this.AV34SnReservado = "" ;
   this.AV35SnVendido = "" ;
   this.AV28ret = 0 ;
   this.AV20LoteamentoEmpresaId = "" ;
   this.AV19LoteamentoId = 0 ;
   this.AV25LoteamentoNome = "" ;
   this.AV31LoteamentoIdentificacaoLotes = "" ;
   this.AV43LoteamentoTipoValor = "" ;
   this.AV21LoteNumLote = "" ;
   this.AV22LoteNumQuadra = "" ;
   this.A5290LoteamentoEmpresaId = "" ;
   this.A5314LoteamentoId = 0 ;
   this.A5316LoteNumLote = "" ;
   this.A5317LoteNumQuadra = "" ;
   this.A8506LoteTipoEmpId = "" ;
   this.A5315LoteamentoNome = "" ;
   this.A5297LoteSituacaoEmpId = "" ;
   this.A5306LoteVlrMetroEmpId = "" ;
   this.A5303LoteClienteReservaEmpId = "" ;
   this.AV18SnAlterou = "" ;
   this.Gx_BScreen = 0 ;
   this.A5311LoteValorTotal = 0 ;
   this.A5292LoteLocalizacao = "" ;
   this.A5298LoteSituacaoId = 0 ;
   this.A5299LoteSituacaoDescricao = "" ;
   this.A5300LoteSituacaoSnReservado = "" ;
   this.A5301LoteSituacaoSnVenda = "" ;
   this.A5302LoteSituacaoSnVendido = "" ;
   this.A8507LoteTipoId = 0 ;
   this.A8508LoteTipoDescricao = "" ;
   this.A5304LoteClienteReservaId = 0 ;
   this.A5305LoteClienteReservaFantasia = "" ;
   this.A9613LoteClienteReservaCliente = "" ;
   this.A5293LoteAreaFrente = 0 ;
   this.A5294LoteAreaFundo = 0 ;
   this.A5295LoteAreaTotal = 0 ;
   this.A5296LoteAreaComum = 0 ;
   this.A5307LoteVlrMetroId = 0 ;
   this.A5308LoteVlrMetroDes = "" ;
   this.A5309LoteVlrMetroValor = 0 ;
   this.A5310LoteMemorialDescritivo = "" ;
   this.A8509LoteValorImovel = 0 ;
   this.A5312LoteUsuarioAlt = "" ;
   this.A5313LoteDataHoraAlt = gx.date.nullDate() ;
   this.AV54Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e128h2_client": ["'FECHAR'", true] ,"e138h2_client": ["AFTER TRN", true] ,"e148h461_client": ["ENTER", true] ,"e158h461_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV19LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV25LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV31LoteamentoIdentificacaoLotes',fld:'vLOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV43LoteamentoTipoValor',fld:'vLOTEAMENTOTIPOVALOR'},{av:'AV21LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV22LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV19LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV25LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV31LoteamentoIdentificacaoLotes',fld:'vLOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV43LoteamentoTipoValor',fld:'vLOTEAMENTOTIPOVALOR'}],[{av:'AV43LoteamentoTipoValor',fld:'vLOTEAMENTOTIPOVALOR'},{av:'AV31LoteamentoIdentificacaoLotes',fld:'vLOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV25LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV19LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV20LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV38ValorTotalLote',fld:'vVALORTOTALLOTE'}]];
   this.setPrompt("PROMPT_5298", [37]);
   this.setPrompt("PROMPT_8507", [43]);
   this.setPrompt("PROMPT_5304", [49]);
   this.setPrompt("PROMPT_5307", [105]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A5309LoteVlrMetroValor", "LOTEVLRMETROVALOR", 0, "decimal");
   this.setVCMap("A5311LoteValorTotal", "LOTEVALORTOTAL", 0, "decimal");
   this.setVCMap("AV21LoteNumLote", "vLOTENUMLOTE", 0, "char");
   this.setVCMap("AV22LoteNumQuadra", "vLOTENUMQUADRA", 0, "char");
   this.setVCMap("AV20LoteamentoEmpresaId", "vLOTEAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A5290LoteamentoEmpresaId", "LOTEAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV42TipoLoteEmpresaId", "vTIPOLOTEEMPRESAID", 0, "char");
   this.setVCMap("A8506LoteTipoEmpId", "LOTETIPOEMPID", 0, "char");
   this.setVCMap("AV19LoteamentoId", "vLOTEAMENTOID", 0, "int");
   this.setVCMap("AV25LoteamentoNome", "vLOTEAMENTONOME", 0, "svchar");
   this.setVCMap("AV23SituacaoEmpresaId", "vSITUACAOEMPRESAID", 0, "char");
   this.setVCMap("A5297LoteSituacaoEmpId", "LOTESITUACAOEMPID", 0, "char");
   this.setVCMap("A5306LoteVlrMetroEmpId", "LOTEVLRMETROEMPID", 0, "char");
   this.setVCMap("AV24EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A5303LoteClienteReservaEmpId", "LOTECLIENTERESERVAEMPID", 0, "char");
   this.setVCMap("AV34SnReservado", "vSNRESERVADO", 0, "char");
   this.setVCMap("A9613LoteClienteReservaCliente", "LOTECLIENTERESERVACLIENTE", 0, "char");
   this.setVCMap("AV43LoteamentoTipoValor", "vLOTEAMENTOTIPOVALOR", 0, "char");
   this.setVCMap("AV28ret", "vRET", 0, "int");
   this.setVCMap("AV33SnAVenda", "vSNAVENDA", 0, "char");
   this.setVCMap("AV35SnVendido", "vSNVENDIDO", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV39LoteSituacaoId", "vLOTESITUACAOID", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV46MsgLote", "vMSGLOTE", 0, "svchar");
   this.setVCMap("AV47MsgQuadra", "vMSGQUADRA", 0, "svchar");
   this.setVCMap("AV48MsgArea", "vMSGAREA", 0, "svchar");
   this.setVCMap("A5300LoteSituacaoSnReservado", "LOTESITUACAOSNRESERVADO", 0, "char");
   this.setVCMap("A5301LoteSituacaoSnVenda", "LOTESITUACAOSNVENDA", 0, "char");
   this.setVCMap("A5302LoteSituacaoSnVendido", "LOTESITUACAOSNVENDIDO", 0, "char");
   this.setVCMap("AV58Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV57Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV29Sim", "vSIM", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 461 ]= ["O5310LoteMemorialDescritivo","O8507LoteTipoId","O5304LoteClienteReservaId","O5298LoteSituacaoId","O5296LoteAreaComum","O5295LoteAreaTotal","O5294LoteAreaFundo","O5293LoteAreaFrente","O5292LoteLocalizacao"] ;
});
gx.setParentObj(new tlote());
