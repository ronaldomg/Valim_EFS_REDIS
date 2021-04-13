/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:11:57.18
*/
gx.evt.autoSkip = false;
gx.define('tconveniocentrocusto', false, function () {
   this.ServerClass =  "tconveniocentrocusto" ;
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
      this.AV17ConvenioCentroCustoId=gx.fn.getControlValue("vCONVENIOCENTROCUSTOID") ;
      this.AV18ConvenioCCusNatDesId=gx.fn.getIntegerValue("vCONVENIOCCUSNATDESID",'.') ;
      this.AV19ConvenioId=gx.fn.getIntegerValue("vCONVENIOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1680ConvenioEmpresaId=gx.fn.getControlValue("CONVENIOEMPRESAID") ;
      this.AV20ConvenioCentroCustoEmpId=gx.fn.getControlValue("vCONVENIOCENTROCUSTOEMPID") ;
      this.A2105ConvenioCentroCustoEmpId=gx.fn.getControlValue("CONVENIOCENTROCUSTOEMPID") ;
      this.AV21ConvenioCCusNatDesEmpId=gx.fn.getControlValue("vCONVENIOCCUSNATDESEMPID") ;
      this.A2096ConvenioCCusNatDesEmpId=gx.fn.getControlValue("CONVENIOCCUSNATDESEMPID") ;
      this.A2287ConvenioCCusNatDesTpImpressao=gx.fn.getControlValue("CONVENIOCCUSNATDESTPIMPRESSAO") ;
      this.AV23SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV28MsgRetorno=gx.fn.getControlValue("vMSGRETORNO") ;
      this.A2082ConvenioDescricao=gx.fn.getControlValue("CONVENIODESCRICAO") ;
      this.A2723ConvenioCCusNatDesTipo=gx.fn.getControlValue("CONVENIOCCUSNATDESTIPO") ;
      this.AV38Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Convenioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioid",["gx.O.A1680ConvenioEmpresaId", "gx.O.A1681ConvenioId", "gx.O.A2082ConvenioDescricao"],["A2082ConvenioDescricao"]);
      return true;
   }
   this.Valid_Conveniocentrocustoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Conveniocentrocustoid",["gx.O.A2105ConvenioCentroCustoEmpId", "gx.O.A2106ConvenioCentroCustoId", "gx.O.A2107ConvenioCentroCustoDescricao"],["A2107ConvenioCentroCustoDescricao"]);
      return true;
   }
   this.Valid_Convenioccusnatdesid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioccusnatdesid",["gx.O.A2096ConvenioCCusNatDesEmpId", "gx.O.A2097ConvenioCCusNatDesId", "gx.O.A2098ConvenioCCusNatDesDescricao", "gx.O.A2287ConvenioCCusNatDesTpImpressao", "gx.O.A2723ConvenioCCusNatDesTipo"],["O2287ConvenioCCusNatDesTpImpressao", "A2098ConvenioCCusNatDesDescricao", "A2287ConvenioCCusNatDesTpImpressao", "A2723ConvenioCCusNatDesTipo"]);
      return true;
   }
   this.Valid_Convenioccussnpatrimonio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVENIOCCUSSNPATRIMONIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e124m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134m2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144m260_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154m260_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,20,22,23,26,28,29,33,36,39,41,43,52,53,55,57,58];
   this.GXLastCtrlId =58;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Convenioid,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOID",gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV22ConvenioDescricao",gxold:"OV22ConvenioDescricao",gxvar:"AV22ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV22ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV22ConvenioDescricao,0)},c2v:function(){gx.O.AV22ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conveniocentrocustoid,isvalid:null,rgrid:[],fld:"CONVENIOCENTROCUSTOID",gxz:"Z2106ConvenioCentroCustoId",gxold:"O2106ConvenioCentroCustoId",gxvar:"A2106ConvenioCentroCustoId",ucs:[],op:[22,23],ip:[23,22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2106ConvenioCentroCustoId=Value},v2z:function(Value){gx.O.Z2106ConvenioCentroCustoId=Value},v2c:function(){gx.fn.setControlValue("CONVENIOCENTROCUSTOID",gx.O.A2106ConvenioCentroCustoId,0)},c2v:function(){gx.O.A2106ConvenioCentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOCENTROCUSTOID")},nac:function(){return !(""==this.AV17ConvenioCentroCustoId)}};
   GXValidFnc[23]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCENTROCUSTODESCRICAO",gxz:"Z2107ConvenioCentroCustoDescricao",gxold:"O2107ConvenioCentroCustoDescricao",gxvar:"A2107ConvenioCentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2107ConvenioCentroCustoDescricao=Value},v2z:function(Value){gx.O.Z2107ConvenioCentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("CONVENIOCENTROCUSTODESCRICAO",gx.O.A2107ConvenioCentroCustoDescricao,0)},c2v:function(){gx.O.A2107ConvenioCentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convenioccusnatdesid,isvalid:null,rgrid:[],fld:"CONVENIOCCUSNATDESID",gxz:"Z2097ConvenioCCusNatDesId",gxold:"O2097ConvenioCCusNatDesId",gxvar:"A2097ConvenioCCusNatDesId",ucs:[],op:[29],ip:[29,28],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2097ConvenioCCusNatDesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2097ConvenioCCusNatDesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOCCUSNATDESID",gx.O.A2097ConvenioCCusNatDesId,0)},c2v:function(){gx.O.A2097ConvenioCCusNatDesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOCCUSNATDESID",'.')},nac:function(){return !(0==this.AV18ConvenioCCusNatDesId)}};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCCUSNATDESDESCRICAO",gxz:"Z2098ConvenioCCusNatDesDescricao",gxold:"O2098ConvenioCCusNatDesDescricao",gxvar:"A2098ConvenioCCusNatDesDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2098ConvenioCCusNatDesDescricao=Value},v2z:function(Value){gx.O.Z2098ConvenioCCusNatDesDescricao=Value},v2c:function(){gx.fn.setControlValue("CONVENIOCCUSNATDESDESCRICAO",gx.O.A2098ConvenioCCusNatDesDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2098ConvenioCCusNatDesDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOCCUSNATDESDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convenioccussnpatrimonio,isvalid:null,rgrid:[],fld:"CONVENIOCCUSSNPATRIMONIO",gxz:"Z3089ConvenioCCusSnPatrimonio",gxold:"O3089ConvenioCCusSnPatrimonio",gxvar:"A3089ConvenioCCusSnPatrimonio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3089ConvenioCCusSnPatrimonio=Value},v2z:function(Value){gx.O.Z3089ConvenioCCusSnPatrimonio=Value},v2c:function(){gx.fn.setCheckBoxValue("CONVENIOCCUSSNPATRIMONIO",gx.O.A3089ConvenioCCusSnPatrimonio,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3089ConvenioCCusSnPatrimonio=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOCCUSSNPATRIMONIO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[36]={fld:"TABLE22",grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCCUSNATDESUSUARIOALT",gxz:"Z2108ConvenioCCusNatDesUsuarioAlt",gxold:"O2108ConvenioCCusNatDesUsuarioAlt",gxvar:"A2108ConvenioCCusNatDesUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2108ConvenioCCusNatDesUsuarioAlt=Value},v2z:function(Value){gx.O.Z2108ConvenioCCusNatDesUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONVENIOCCUSNATDESUSUARIOALT",gx.O.A2108ConvenioCCusNatDesUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2108ConvenioCCusNatDesUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOCCUSNATDESUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCCUSNATDESDATAHORAALT",gxz:"Z2109ConvenioCCusNatDesDataHoraAlt",gxold:"O2109ConvenioCCusNatDesDataHoraAlt",gxvar:"A2109ConvenioCCusNatDesDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2109ConvenioCCusNatDesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2109ConvenioCCusNatDesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOCCUSNATDESDATAHORAALT",gx.O.A2109ConvenioCCusNatDesDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2109ConvenioCCusNatDesDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONVENIOCCUSNATDESDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[52]={fld:"JS", format:2,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV25AcessoSistemaSequencia",gxold:"OV25AcessoSistemaSequencia",gxvar:"AV25AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV25AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"BTNHELP",grid:0};
   GXValidFnc[57]={fld:"PROMPT_2106",grid:260};
   GXValidFnc[58]={fld:"PROMPT_2097",grid:260};
   this.A1681ConvenioId = 0 ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.AV22ConvenioDescricao = "" ;
   this.ZV22ConvenioDescricao = "" ;
   this.OV22ConvenioDescricao = "" ;
   this.A2106ConvenioCentroCustoId = "" ;
   this.Z2106ConvenioCentroCustoId = "" ;
   this.O2106ConvenioCentroCustoId = "" ;
   this.A2107ConvenioCentroCustoDescricao = "" ;
   this.Z2107ConvenioCentroCustoDescricao = "" ;
   this.O2107ConvenioCentroCustoDescricao = "" ;
   this.A2097ConvenioCCusNatDesId = 0 ;
   this.Z2097ConvenioCCusNatDesId = 0 ;
   this.O2097ConvenioCCusNatDesId = 0 ;
   this.A2098ConvenioCCusNatDesDescricao = "" ;
   this.Z2098ConvenioCCusNatDesDescricao = "" ;
   this.O2098ConvenioCCusNatDesDescricao = "" ;
   this.A3089ConvenioCCusSnPatrimonio = "" ;
   this.Z3089ConvenioCCusSnPatrimonio = "" ;
   this.O3089ConvenioCCusSnPatrimonio = "" ;
   this.A2108ConvenioCCusNatDesUsuarioAlt = "" ;
   this.Z2108ConvenioCCusNatDesUsuarioAlt = "" ;
   this.O2108ConvenioCCusNatDesUsuarioAlt = "" ;
   this.A2109ConvenioCCusNatDesDataHoraAlt = gx.date.nullDate() ;
   this.Z2109ConvenioCCusNatDesDataHoraAlt = gx.date.nullDate() ;
   this.O2109ConvenioCCusNatDesDataHoraAlt = gx.date.nullDate() ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.ZV25AcessoSistemaSequencia = 0 ;
   this.OV25AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV37Pgmname = "" ;
   this.AV38Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20ConvenioCentroCustoEmpId = "" ;
   this.AV21ConvenioCCusNatDesEmpId = "" ;
   this.AV24TemMascara = "" ;
   this.AV28MsgRetorno = "" ;
   this.AV19ConvenioId = 0 ;
   this.AV17ConvenioCentroCustoId = "" ;
   this.AV18ConvenioCCusNatDesId = 0 ;
   this.AV22ConvenioDescricao = "" ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2105ConvenioCentroCustoEmpId = "" ;
   this.A2106ConvenioCentroCustoId = "" ;
   this.A2096ConvenioCCusNatDesEmpId = "" ;
   this.A2097ConvenioCCusNatDesId = 0 ;
   this.AV23SnAlterou = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.A2107ConvenioCentroCustoDescricao = "" ;
   this.A2098ConvenioCCusNatDesDescricao = "" ;
   this.A2287ConvenioCCusNatDesTpImpressao = "" ;
   this.A2723ConvenioCCusNatDesTipo = "" ;
   this.A3089ConvenioCCusSnPatrimonio = "" ;
   this.A2108ConvenioCCusNatDesUsuarioAlt = "" ;
   this.A2109ConvenioCCusNatDesDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e124m2_client": ["'FECHAR'", true] ,"e134m2_client": ["AFTER TRN", true] ,"e144m260_client": ["ENTER", true] ,"e154m260_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19ConvenioId',fld:'vCONVENIOID'},{av:'AV17ConvenioCentroCustoId',fld:'vCONVENIOCENTROCUSTOID'},{av:'AV18ConvenioCCusNatDesId',fld:'vCONVENIOCCUSNATDESID'},{av:'AV22ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19ConvenioId',fld:'vCONVENIOID'},{av:'AV22ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'A2096ConvenioCCusNatDesEmpId',fld:'CONVENIOCCUSNATDESEMPID'},{av:'A2097ConvenioCCusNatDesId',fld:'CONVENIOCCUSNATDESID'},{av:'A3089ConvenioCCusSnPatrimonio',fld:'CONVENIOCCUSSNPATRIMONIO'},{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV27SnProcessoConta',fld:'vSNPROCESSOCONTA'}]];
   this.setPrompt("PROMPT_2106", [22]);
   this.setPrompt("PROMPT_2097", [28]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17ConvenioCentroCustoId", "vCONVENIOCENTROCUSTOID", 0, "svchar");
   this.setVCMap("AV18ConvenioCCusNatDesId", "vCONVENIOCCUSNATDESID", 0, "int");
   this.setVCMap("AV19ConvenioId", "vCONVENIOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1680ConvenioEmpresaId", "CONVENIOEMPRESAID", 0, "char");
   this.setVCMap("AV20ConvenioCentroCustoEmpId", "vCONVENIOCENTROCUSTOEMPID", 0, "char");
   this.setVCMap("A2105ConvenioCentroCustoEmpId", "CONVENIOCENTROCUSTOEMPID", 0, "char");
   this.setVCMap("AV21ConvenioCCusNatDesEmpId", "vCONVENIOCCUSNATDESEMPID", 0, "char");
   this.setVCMap("A2096ConvenioCCusNatDesEmpId", "CONVENIOCCUSNATDESEMPID", 0, "char");
   this.setVCMap("A2287ConvenioCCusNatDesTpImpressao", "CONVENIOCCUSNATDESTPIMPRESSAO", 0, "char");
   this.setVCMap("AV23SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV28MsgRetorno", "vMSGRETORNO", 0, "svchar");
   this.setVCMap("A2082ConvenioDescricao", "CONVENIODESCRICAO", 0, "svchar");
   this.setVCMap("A2723ConvenioCCusNatDesTipo", "CONVENIOCCUSNATDESTIPO", 0, "char");
   this.setVCMap("AV38Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 260 ]= ["O3089ConvenioCCusSnPatrimonio","O2287ConvenioCCusNatDesTpImpressao","O2097ConvenioCCusNatDesId","O2106ConvenioCentroCustoId"] ;
});
gx.setParentObj(new tconveniocentrocusto());
