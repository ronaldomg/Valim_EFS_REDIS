/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:55:5.75
*/
gx.evt.autoSkip = false;
gx.define('tempresasped', false, function () {
   this.ServerClass =  "tempresasped" ;
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
      this.AV15EmpresaSpedEmpresaId=gx.fn.getControlValue("vEMPRESASPEDEMPRESAID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV20Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV19Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Empresaempresaspedempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresaempresaspedempresaid",["gx.O.A901EmpresaEmpresaSpedEmpresaId"],[]);
      return true;
   }
   this.Valid_Empresaspednire=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESASPEDNIRE");
         this.AnyError  = 0;
         if ( (0==this.A881EmpresaSpedNire) )
         {
            try {
               gxballoon.setError("Informe o número do NIRE");
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
   this.Valid_Empresaspedinscricaomunicipal=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresaspedinscricaomunicipal",["gx.O.O882EmpresaSpedInscricaoMunicipal", "gx.O.O881EmpresaSpedNire", "gx.O.O901EmpresaEmpresaSpedEmpresaId", "gx.O.AV7UsrCod", "gx.O.A901EmpresaEmpresaSpedEmpresaId", "gx.O.A881EmpresaSpedNire", "gx.O.A882EmpresaSpedInscricaoMunicipal", "gx.O.A883EmpresaSpedUsuarioId", 'gx.date.urlDateTime(gx.O.A884EmpresaSpedDataHoraAlt,"DMY4")'],["A883EmpresaSpedUsuarioId", "A884EmpresaSpedDataHoraAlt"]);
      return true;
   }
   this.e12222_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13222_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1422117_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1522117_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,31,33,35,44,46,48];
   this.GXLastCtrlId =48;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaempresaspedempresaid,isvalid:null,rgrid:[],fld:"EMPRESAEMPRESASPEDEMPRESAID",gxz:"Z901EmpresaEmpresaSpedEmpresaId",gxold:"O901EmpresaEmpresaSpedEmpresaId",gxvar:"A901EmpresaEmpresaSpedEmpresaId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A901EmpresaEmpresaSpedEmpresaId=Value},v2z:function(Value){gx.O.Z901EmpresaEmpresaSpedEmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAEMPRESASPEDEMPRESAID",gx.O.A901EmpresaEmpresaSpedEmpresaId,0)},c2v:function(){gx.O.A901EmpresaEmpresaSpedEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAEMPRESASPEDEMPRESAID")},nac:function(){return !(""==this.AV15EmpresaSpedEmpresaId)}};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:11,dec:0,sign:false,pic:"ZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaspednire,isvalid:null,rgrid:[],fld:"EMPRESASPEDNIRE",gxz:"Z881EmpresaSpedNire",gxold:"O881EmpresaSpedNire",gxvar:"A881EmpresaSpedNire",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A881EmpresaSpedNire=gx.num.intval(Value)},v2z:function(Value){gx.O.Z881EmpresaSpedNire=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EMPRESASPEDNIRE",gx.O.A881EmpresaSpedNire,0)},c2v:function(){gx.O.A881EmpresaSpedNire=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EMPRESASPEDNIRE",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaspedinscricaomunicipal,isvalid:null,rgrid:[],fld:"EMPRESASPEDINSCRICAOMUNICIPAL",gxz:"Z882EmpresaSpedInscricaoMunicipal",gxold:"O882EmpresaSpedInscricaoMunicipal",gxvar:"A882EmpresaSpedInscricaoMunicipal",ucs:[],op:[25,35,33],ip:[35,33,25,20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A882EmpresaSpedInscricaoMunicipal=Value},v2z:function(Value){gx.O.Z882EmpresaSpedInscricaoMunicipal=Value},v2c:function(){gx.fn.setControlValue("EMPRESASPEDINSCRICAOMUNICIPAL",gx.O.A882EmpresaSpedInscricaoMunicipal,0)},c2v:function(){gx.O.A882EmpresaSpedInscricaoMunicipal=this.val()},val:function(){return gx.fn.getControlValue("EMPRESASPEDINSCRICAOMUNICIPAL")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESASPEDUSUARIOID",gxz:"Z883EmpresaSpedUsuarioId",gxold:"O883EmpresaSpedUsuarioId",gxvar:"A883EmpresaSpedUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A883EmpresaSpedUsuarioId=Value},v2z:function(Value){gx.O.Z883EmpresaSpedUsuarioId=Value},v2c:function(){gx.fn.setControlValue("EMPRESASPEDUSUARIOID",gx.O.A883EmpresaSpedUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A883EmpresaSpedUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESASPEDUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESASPEDDATAHORAALT",gxz:"Z884EmpresaSpedDataHoraAlt",gxold:"O884EmpresaSpedDataHoraAlt",gxvar:"A884EmpresaSpedDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A884EmpresaSpedDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z884EmpresaSpedDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("EMPRESASPEDDATAHORAALT",gx.O.A884EmpresaSpedDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A884EmpresaSpedDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("EMPRESASPEDDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV16AcessoSistemaSequencia",gxold:"OV16AcessoSistemaSequencia",gxvar:"AV16AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV16AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   GXValidFnc[48]={fld:"PROMPT_901",grid:117};
   this.A901EmpresaEmpresaSpedEmpresaId = "" ;
   this.Z901EmpresaEmpresaSpedEmpresaId = "" ;
   this.O901EmpresaEmpresaSpedEmpresaId = "" ;
   this.A881EmpresaSpedNire = 0 ;
   this.Z881EmpresaSpedNire = 0 ;
   this.O881EmpresaSpedNire = 0 ;
   this.A882EmpresaSpedInscricaoMunicipal = "" ;
   this.Z882EmpresaSpedInscricaoMunicipal = "" ;
   this.O882EmpresaSpedInscricaoMunicipal = "" ;
   this.A883EmpresaSpedUsuarioId = "" ;
   this.Z883EmpresaSpedUsuarioId = "" ;
   this.O883EmpresaSpedUsuarioId = "" ;
   this.A884EmpresaSpedDataHoraAlt = gx.date.nullDate() ;
   this.Z884EmpresaSpedDataHoraAlt = gx.date.nullDate() ;
   this.O884EmpresaSpedDataHoraAlt = gx.date.nullDate() ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.ZV16AcessoSistemaSequencia = 0 ;
   this.OV16AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV19Pgmname = "" ;
   this.AV20Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15EmpresaSpedEmpresaId = "" ;
   this.A901EmpresaEmpresaSpedEmpresaId = "" ;
   this.A883EmpresaSpedUsuarioId = "" ;
   this.A884EmpresaSpedDataHoraAlt = gx.date.nullDate() ;
   this.A881EmpresaSpedNire = 0 ;
   this.A882EmpresaSpedInscricaoMunicipal = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12222_client": ["'FECHAR'", true] ,"e13222_client": ["AFTER TRN", true] ,"e1422117_client": ["ENTER", true] ,"e1522117_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV15EmpresaSpedEmpresaId',fld:'vEMPRESASPEDEMPRESAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_901", [14]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15EmpresaSpedEmpresaId", "vEMPRESASPEDEMPRESAID", 0, "svchar");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV20Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV19Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 117 ]= ["O882EmpresaSpedInscricaoMunicipal","O881EmpresaSpedNire","O901EmpresaEmpresaSpedEmpresaId"] ;
});
gx.setParentObj(new tempresasped());
