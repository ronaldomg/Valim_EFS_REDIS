/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:38:3.84
*/
gx.evt.autoSkip = false;
gx.define('toutrasdespesasreceitas', false, function () {
   this.ServerClass =  "toutrasdespesasreceitas" ;
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
      this.AV18OutrasDespesasReceitasTpLancam=gx.fn.getControlValue("vOUTRASDESPESASRECEITASTPLANCAM") ;
      this.AV20OutrasDespesasReceitasData=gx.fn.getDateValue("vOUTRASDESPESASRECEITASDATA") ;
      this.AV17ConvenioId=gx.fn.getIntegerValue("vCONVENIOID",'.') ;
      this.AV21OutrasDespesasReceitasSequencia=gx.fn.getIntegerValue("vOUTRASDESPESASRECEITASSEQUENCIA",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1680ConvenioEmpresaId=gx.fn.getControlValue("CONVENIOEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A2082ConvenioDescricao=gx.fn.getControlValue("CONVENIODESCRICAO") ;
      this.AV31Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Convenioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioid",["gx.O.A1680ConvenioEmpresaId", "gx.O.A1681ConvenioId", "gx.O.A2082ConvenioDescricao"],["A2082ConvenioDescricao"]);
      return true;
   }
   this.Valid_Outrasdespesasreceitasdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTRASDESPESASRECEITASDATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2146OutrasDespesasReceitasData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data de Referência");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Outrasdespesasreceitassequenci=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTRASDESPESASRECEITASSEQUENCI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Outrasdespesasreceitasdescrica=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTRASDESPESASRECEITASDESCRICA");
         this.AnyError  = 0;
         if ( (""==this.A2148OutrasDespesasReceitasDescrica) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Outrasdespesasreceitasvalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTRASDESPESASRECEITASVALOR");
         this.AnyError  = 0;
         if ( (0.0==this.A2149OutrasDespesasReceitasValor) )
         {
            try {
               gxballoon.setError("Informe o Valor");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12402_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13402_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1440222_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1540222_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,19,21,24,26,28,30,34,36,39,41,44,47,49,51,60,61,63];
   this.GXLastCtrlId =63;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Convenioid,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOID",gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV29ConvenioDescricao",gxold:"OV29ConvenioDescricao",gxvar:"AV29ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV29ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV29ConvenioDescricao,0)},c2v:function(){gx.O.AV29ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OUTRASDESPESASRECEITASTPLANCAM",gxz:"Z2145OutrasDespesasReceitasTpLancam",gxold:"O2145OutrasDespesasReceitasTpLancam",gxvar:"A2145OutrasDespesasReceitasTpLancam",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2145OutrasDespesasReceitasTpLancam=Value},v2z:function(Value){gx.O.Z2145OutrasDespesasReceitasTpLancam=Value},v2c:function(){gx.fn.setComboBoxValue("OUTRASDESPESASRECEITASTPLANCAM",gx.O.A2145OutrasDespesasReceitasTpLancam)},c2v:function(){gx.O.A2145OutrasDespesasReceitasTpLancam=this.val()},val:function(){return gx.fn.getControlValue("OUTRASDESPESASRECEITASTPLANCAM")},nac:function(){return !(""==this.AV18OutrasDespesasReceitasTpLancam)}};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrasdespesasreceitasdata,isvalid:null,rgrid:[],fld:"OUTRASDESPESASRECEITASDATA",gxz:"Z2146OutrasDespesasReceitasData",gxold:"O2146OutrasDespesasReceitasData",gxvar:"A2146OutrasDespesasReceitasData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2146OutrasDespesasReceitasData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2146OutrasDespesasReceitasData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OUTRASDESPESASRECEITASDATA",gx.O.A2146OutrasDespesasReceitasData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2146OutrasDespesasReceitasData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("OUTRASDESPESASRECEITASDATA")},nac:function(){return !(new gx.date.gxdate("").compare(this.AV20OutrasDespesasReceitasData)==0)}};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Outrasdespesasreceitassequenci,isvalid:null,rgrid:[],fld:"OUTRASDESPESASRECEITASSEQUENCI",gxz:"Z2147OutrasDespesasReceitasSequenci",gxold:"O2147OutrasDespesasReceitasSequenci",gxvar:"A2147OutrasDespesasReceitasSequenci",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2147OutrasDespesasReceitasSequenci=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2147OutrasDespesasReceitasSequenci=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OUTRASDESPESASRECEITASSEQUENCI",gx.O.A2147OutrasDespesasReceitasSequenci,0)},c2v:function(){gx.O.A2147OutrasDespesasReceitasSequenci=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OUTRASDESPESASRECEITASSEQUENCI",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrasdespesasreceitasdescrica,isvalid:null,rgrid:[],fld:"OUTRASDESPESASRECEITASDESCRICA",gxz:"Z2148OutrasDespesasReceitasDescrica",gxold:"O2148OutrasDespesasReceitasDescrica",gxvar:"A2148OutrasDespesasReceitasDescrica",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2148OutrasDespesasReceitasDescrica=Value},v2z:function(Value){gx.O.Z2148OutrasDespesasReceitasDescrica=Value},v2c:function(){gx.fn.setControlValue("OUTRASDESPESASRECEITASDESCRICA",gx.O.A2148OutrasDespesasReceitasDescrica,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2148OutrasDespesasReceitasDescrica=this.val()},val:function(){return gx.fn.getControlValue("OUTRASDESPESASRECEITASDESCRICA")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrasdespesasreceitasvalor,isvalid:null,rgrid:[],fld:"OUTRASDESPESASRECEITASVALOR",gxz:"Z2149OutrasDespesasReceitasValor",gxold:"O2149OutrasDespesasReceitasValor",gxvar:"A2149OutrasDespesasReceitasValor",ucs:[],op:[41],ip:[41],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2149OutrasDespesasReceitasValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2149OutrasDespesasReceitasValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OUTRASDESPESASRECEITASVALOR",gx.O.A2149OutrasDespesasReceitasValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2149OutrasDespesasReceitasValor=this.val()},val:function(){return gx.fn.getDecimalValue("OUTRASDESPESASRECEITASVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TABLE4",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OUTRASDESPESASRECEITASUSUALT",gxz:"Z2150OutrasDespesasReceitasUsuAlt",gxold:"O2150OutrasDespesasReceitasUsuAlt",gxvar:"A2150OutrasDespesasReceitasUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2150OutrasDespesasReceitasUsuAlt=Value},v2z:function(Value){gx.O.Z2150OutrasDespesasReceitasUsuAlt=Value},v2c:function(){gx.fn.setControlValue("OUTRASDESPESASRECEITASUSUALT",gx.O.A2150OutrasDespesasReceitasUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2150OutrasDespesasReceitasUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("OUTRASDESPESASRECEITASUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OUTRASDESPESASRECEITASDTHRALT",gxz:"Z2151OutrasDespesasReceitasDtHrAlt",gxold:"O2151OutrasDespesasReceitasDtHrAlt",gxvar:"A2151OutrasDespesasReceitasDtHrAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2151OutrasDespesasReceitasDtHrAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2151OutrasDespesasReceitasDtHrAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OUTRASDESPESASRECEITASDTHRALT",gx.O.A2151OutrasDespesasReceitasDtHrAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2151OutrasDespesasReceitasDtHrAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OUTRASDESPESASRECEITASDTHRALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[60]={fld:"JS", format:2,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV23AcessoSistemaSequencia",gxold:"OV23AcessoSistemaSequencia",gxvar:"AV23AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV23AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"BTNHELP",grid:0};
   this.A1681ConvenioId = 0 ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.AV29ConvenioDescricao = "" ;
   this.ZV29ConvenioDescricao = "" ;
   this.OV29ConvenioDescricao = "" ;
   this.A2145OutrasDespesasReceitasTpLancam = "" ;
   this.Z2145OutrasDespesasReceitasTpLancam = "" ;
   this.O2145OutrasDespesasReceitasTpLancam = "" ;
   this.A2146OutrasDespesasReceitasData = gx.date.nullDate() ;
   this.Z2146OutrasDespesasReceitasData = gx.date.nullDate() ;
   this.O2146OutrasDespesasReceitasData = gx.date.nullDate() ;
   this.A2147OutrasDespesasReceitasSequenci = 0 ;
   this.Z2147OutrasDespesasReceitasSequenci = 0 ;
   this.O2147OutrasDespesasReceitasSequenci = 0 ;
   this.A2148OutrasDespesasReceitasDescrica = "" ;
   this.Z2148OutrasDespesasReceitasDescrica = "" ;
   this.O2148OutrasDespesasReceitasDescrica = "" ;
   this.A2149OutrasDespesasReceitasValor = 0 ;
   this.Z2149OutrasDespesasReceitasValor = 0 ;
   this.O2149OutrasDespesasReceitasValor = 0 ;
   this.A2150OutrasDespesasReceitasUsuAlt = "" ;
   this.Z2150OutrasDespesasReceitasUsuAlt = "" ;
   this.O2150OutrasDespesasReceitasUsuAlt = "" ;
   this.A2151OutrasDespesasReceitasDtHrAlt = gx.date.nullDate() ;
   this.Z2151OutrasDespesasReceitasDtHrAlt = gx.date.nullDate() ;
   this.O2151OutrasDespesasReceitasDtHrAlt = gx.date.nullDate() ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.ZV23AcessoSistemaSequencia = 0 ;
   this.OV23AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV30Pgmname = "" ;
   this.AV31Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV17ConvenioId = 0 ;
   this.AV29ConvenioDescricao = "" ;
   this.AV18OutrasDespesasReceitasTpLancam = "" ;
   this.AV20OutrasDespesasReceitasData = gx.date.nullDate() ;
   this.AV21OutrasDespesasReceitasSequencia = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2146OutrasDespesasReceitasData = gx.date.nullDate() ;
   this.A2147OutrasDespesasReceitasSequenci = 0 ;
   this.A2145OutrasDespesasReceitasTpLancam = "" ;
   this.A2150OutrasDespesasReceitasUsuAlt = "" ;
   this.A2151OutrasDespesasReceitasDtHrAlt = gx.date.nullDate() ;
   this.A2082ConvenioDescricao = "" ;
   this.A2148OutrasDespesasReceitasDescrica = "" ;
   this.A2149OutrasDespesasReceitasValor = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12402_client": ["'FECHAR'", true] ,"e13402_client": ["AFTER TRN", true] ,"e1440222_client": ["ENTER", true] ,"e1540222_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ConvenioId',fld:'vCONVENIOID'},{av:'AV29ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV18OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV20OutrasDespesasReceitasData',fld:'vOUTRASDESPESASRECEITASDATA'},{av:'AV21OutrasDespesasReceitasSequencia',fld:'vOUTRASDESPESASRECEITASSEQUENCIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18OutrasDespesasReceitasTpLancam", "vOUTRASDESPESASRECEITASTPLANCAM", 0, "char");
   this.setVCMap("AV20OutrasDespesasReceitasData", "vOUTRASDESPESASRECEITASDATA", 0, "date");
   this.setVCMap("AV17ConvenioId", "vCONVENIOID", 0, "int");
   this.setVCMap("AV21OutrasDespesasReceitasSequencia", "vOUTRASDESPESASRECEITASSEQUENCIA", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1680ConvenioEmpresaId", "CONVENIOEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A2082ConvenioDescricao", "CONVENIODESCRICAO", 0, "svchar");
   this.setVCMap("AV31Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV30Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 222 ]= ["O2149OutrasDespesasReceitasValor","O2148OutrasDespesasReceitasDescrica"] ;
});
gx.setParentObj(new toutrasdespesasreceitas());
