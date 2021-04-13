/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:13.89
*/
gx.evt.autoSkip = false;
gx.define('tcest', false, function () {
   this.ServerClass =  "tcest" ;
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
      this.A9590CESTCodigoMascara=gx.fn.getControlValue("CESTCODIGOMASCARA") ;
      this.AV18CESTCodigo=gx.fn.getIntegerValue("vCESTCODIGO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV21Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Cestcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cestcodigo",["gx.O.A9557CESTCodigo", "gx.O.A9590CESTCodigoMascara"],["A9590CESTCodigoMascara"]);
      return true;
   }
   this.Valid_Cestempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CESTEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cestdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CESTDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A9589CESTDescricao) )
         {
            try {
               gxballoon.setError("Informe descrição");
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
   this.e12dp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dp2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14dp713_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15dp713_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,17,19,22,25,27,29,35,41,42,44];
   this.GXLastCtrlId =44;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cestcodigo,isvalid:null,rgrid:[],fld:"CESTCODIGO",gxz:"Z9557CESTCodigo",gxold:"O9557CESTCodigo",gxvar:"A9557CESTCodigo",ucs:[],op:[13],ip:[13],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9557CESTCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9557CESTCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CESTCODIGO",gx.O.A9557CESTCodigo,0)},c2v:function(){gx.O.A9557CESTCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CESTCODIGO",'.')},nac:function(){return !(0==this.AV18CESTCodigo)}};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:500,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Cestdescricao,isvalid:null,rgrid:[],fld:"CESTDESCRICAO",gxz:"Z9589CESTDescricao",gxold:"O9589CESTDescricao",gxvar:"A9589CESTDescricao",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9589CESTDescricao=Value},v2z:function(Value){gx.O.Z9589CESTDescricao=Value},v2c:function(){gx.fn.setControlValue("CESTDESCRICAO",gx.O.A9589CESTDescricao,0)},c2v:function(){gx.O.A9589CESTDescricao=this.val()},val:function(){return gx.fn.getControlValue("CESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABLE6",grid:0};
   GXValidFnc[25]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CESTUSUARIOALT",gxz:"Z9591CESTUsuarioAlt",gxold:"O9591CESTUsuarioAlt",gxvar:"A9591CESTUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9591CESTUsuarioAlt=Value},v2z:function(Value){gx.O.Z9591CESTUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CESTUSUARIOALT",gx.O.A9591CESTUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9591CESTUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CESTUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CESTDATAHORAALT",gxz:"Z9592CESTDataHoraAlt",gxold:"O9592CESTDataHoraAlt",gxvar:"A9592CESTDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9592CESTDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9592CESTDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CESTDATAHORAALT",gx.O.A9592CESTDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9592CESTDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CESTDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[35]={fld:"TABLE5",grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cestempresaid,isvalid:null,rgrid:[],fld:"CESTEMPRESAID",gxz:"Z9556CESTEmpresaId",gxold:"O9556CESTEmpresaId",gxvar:"A9556CESTEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9556CESTEmpresaId=Value},v2z:function(Value){gx.O.Z9556CESTEmpresaId=Value},v2c:function(){gx.fn.setControlValue("CESTEMPRESAID",gx.O.A9556CESTEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9556CESTEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("CESTEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"BTNHELP",grid:0};
   this.A9557CESTCodigo = 0 ;
   this.Z9557CESTCodigo = 0 ;
   this.O9557CESTCodigo = 0 ;
   this.A9589CESTDescricao = "" ;
   this.Z9589CESTDescricao = "" ;
   this.O9589CESTDescricao = "" ;
   this.A9591CESTUsuarioAlt = "" ;
   this.Z9591CESTUsuarioAlt = "" ;
   this.O9591CESTUsuarioAlt = "" ;
   this.A9592CESTDataHoraAlt = gx.date.nullDate() ;
   this.Z9592CESTDataHoraAlt = gx.date.nullDate() ;
   this.O9592CESTDataHoraAlt = gx.date.nullDate() ;
   this.A9556CESTEmpresaId = "" ;
   this.Z9556CESTEmpresaId = "" ;
   this.O9556CESTEmpresaId = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV20Pgmname = "" ;
   this.AV21Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18CESTCodigo = 0 ;
   this.A9556CESTEmpresaId = "" ;
   this.A9557CESTCodigo = 0 ;
   this.A9591CESTUsuarioAlt = "" ;
   this.A9592CESTDataHoraAlt = gx.date.nullDate() ;
   this.A9590CESTCodigoMascara = "" ;
   this.A9589CESTDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12dp2_client": ["'FECHAR'", true] ,"e13dp2_client": ["AFTER TRN", true] ,"e14dp713_client": ["ENTER", true] ,"e15dp713_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18CESTCodigo',fld:'vCESTCODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A9590CESTCodigoMascara", "CESTCODIGOMASCARA", 0, "svchar");
   this.setVCMap("AV18CESTCodigo", "vCESTCODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV21Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 713 ]= ["O9589CESTDescricao"] ;
});
gx.setParentObj(new tcest());
