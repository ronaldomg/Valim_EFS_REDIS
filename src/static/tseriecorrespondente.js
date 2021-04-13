/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:38.42
*/
gx.evt.autoSkip = false;
gx.define('tseriecorrespondente', false, function () {
   this.ServerClass =  "tseriecorrespondente" ;
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
      this.AV18SerieCorrespondenteOrigem=gx.fn.getControlValue("vSERIECORRESPONDENTEORIGEM") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8192SerieCorrespondenteEmpresaId=gx.fn.getControlValue("SERIECORRESPONDENTEEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Seriecorrespondenteorigem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERIECORRESPONDENTEORIGEM");
         this.AnyError  = 0;
         if ( (""==this.A8193SerieCorrespondenteOrigem) )
         {
            try {
               gxballoon.setError("Informe a série origem");
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
   this.Valid_Seriecorrespondentedestino=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERIECORRESPONDENTEDESTINO");
         this.AnyError  = 0;
         if ( (""==this.A8189SerieCorrespondenteDestino) )
         {
            try {
               gxballoon.setError("Informe a série destino");
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
   this.e12bf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bf2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14bf603_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15bf603_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:4,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Seriecorrespondenteorigem,isvalid:null,rgrid:[],fld:"SERIECORRESPONDENTEORIGEM",gxz:"Z8193SerieCorrespondenteOrigem",gxold:"O8193SerieCorrespondenteOrigem",gxvar:"A8193SerieCorrespondenteOrigem",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8193SerieCorrespondenteOrigem=Value},v2z:function(Value){gx.O.Z8193SerieCorrespondenteOrigem=Value},v2c:function(){gx.fn.setControlValue("SERIECORRESPONDENTEORIGEM",gx.O.A8193SerieCorrespondenteOrigem,0)},c2v:function(){gx.O.A8193SerieCorrespondenteOrigem=this.val()},val:function(){return gx.fn.getControlValue("SERIECORRESPONDENTEORIGEM")},nac:function(){return !(""==this.AV18SerieCorrespondenteOrigem)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:4,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Seriecorrespondentedestino,isvalid:null,rgrid:[],fld:"SERIECORRESPONDENTEDESTINO",gxz:"Z8189SerieCorrespondenteDestino",gxold:"O8189SerieCorrespondenteDestino",gxvar:"A8189SerieCorrespondenteDestino",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8189SerieCorrespondenteDestino=Value},v2z:function(Value){gx.O.Z8189SerieCorrespondenteDestino=Value},v2c:function(){gx.fn.setControlValue("SERIECORRESPONDENTEDESTINO",gx.O.A8189SerieCorrespondenteDestino,0)},c2v:function(){gx.O.A8189SerieCorrespondenteDestino=this.val()},val:function(){return gx.fn.getControlValue("SERIECORRESPONDENTEDESTINO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE22",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SERIECORRESPONDENTEUSUARIOALT",gxz:"Z8190SerieCorrespondenteUsuarioAlt",gxold:"O8190SerieCorrespondenteUsuarioAlt",gxvar:"A8190SerieCorrespondenteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8190SerieCorrespondenteUsuarioAlt=Value},v2z:function(Value){gx.O.Z8190SerieCorrespondenteUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SERIECORRESPONDENTEUSUARIOALT",gx.O.A8190SerieCorrespondenteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8190SerieCorrespondenteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SERIECORRESPONDENTEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SERIECORRESPONDENTEDATAHORAALT",gxz:"Z8191SerieCorrespondenteDataHoraAlt",gxold:"O8191SerieCorrespondenteDataHoraAlt",gxvar:"A8191SerieCorrespondenteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8191SerieCorrespondenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8191SerieCorrespondenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SERIECORRESPONDENTEDATAHORAALT",gx.O.A8191SerieCorrespondenteDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8191SerieCorrespondenteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SERIECORRESPONDENTEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A8193SerieCorrespondenteOrigem = "" ;
   this.Z8193SerieCorrespondenteOrigem = "" ;
   this.O8193SerieCorrespondenteOrigem = "" ;
   this.A8189SerieCorrespondenteDestino = "" ;
   this.Z8189SerieCorrespondenteDestino = "" ;
   this.O8189SerieCorrespondenteDestino = "" ;
   this.A8190SerieCorrespondenteUsuarioAlt = "" ;
   this.Z8190SerieCorrespondenteUsuarioAlt = "" ;
   this.O8190SerieCorrespondenteUsuarioAlt = "" ;
   this.A8191SerieCorrespondenteDataHoraAlt = gx.date.nullDate() ;
   this.Z8191SerieCorrespondenteDataHoraAlt = gx.date.nullDate() ;
   this.O8191SerieCorrespondenteDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18SerieCorrespondenteOrigem = "" ;
   this.A8192SerieCorrespondenteEmpresaId = "" ;
   this.A8193SerieCorrespondenteOrigem = "" ;
   this.A8190SerieCorrespondenteUsuarioAlt = "" ;
   this.A8191SerieCorrespondenteDataHoraAlt = gx.date.nullDate() ;
   this.A8189SerieCorrespondenteDestino = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12bf2_client": ["'FECHAR'", true] ,"e13bf2_client": ["AFTER TRN", true] ,"e14bf603_client": ["ENTER", true] ,"e15bf603_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18SerieCorrespondenteOrigem',fld:'vSERIECORRESPONDENTEORIGEM'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18SerieCorrespondenteOrigem", "vSERIECORRESPONDENTEORIGEM", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8192SerieCorrespondenteEmpresaId", "SERIECORRESPONDENTEEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 603 ]= ["O8189SerieCorrespondenteDestino"] ;
});
gx.setParentObj(new tseriecorrespondente());
