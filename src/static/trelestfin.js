/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:9.35
*/
gx.evt.autoSkip = false;
gx.define('trelestfin', false, function () {
   this.ServerClass =  "trelestfin" ;
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
      this.AV18RelEstFinId=gx.fn.getIntegerValue("vRELESTFINID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV21Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Relestfinid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RELESTFINID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Relestfinempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RELESTFINEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Relestfindescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RELESTFINDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A9549RelEstFinDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição do modelo de relatório");
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
   this.e12dn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dn2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14dn711_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15dn711_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Relestfinid,isvalid:null,rgrid:[],fld:"RELESTFINID",gxz:"Z9548RelEstFinId",gxold:"O9548RelEstFinId",gxvar:"A9548RelEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9548RelEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9548RelEstFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RELESTFINID",gx.O.A9548RelEstFinId,0)},c2v:function(){gx.O.A9548RelEstFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RELESTFINID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Relestfindescricao,isvalid:null,rgrid:[],fld:"RELESTFINDESCRICAO",gxz:"Z9549RelEstFinDescricao",gxold:"O9549RelEstFinDescricao",gxvar:"A9549RelEstFinDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9549RelEstFinDescricao=Value},v2z:function(Value){gx.O.Z9549RelEstFinDescricao=Value},v2c:function(){gx.fn.setControlValue("RELESTFINDESCRICAO",gx.O.A9549RelEstFinDescricao,0)},c2v:function(){gx.O.A9549RelEstFinDescricao=this.val()},val:function(){return gx.fn.getControlValue("RELESTFINDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RELESTFINUSUARIOALT",gxz:"Z9550RelEstFinUsuarioAlt",gxold:"O9550RelEstFinUsuarioAlt",gxvar:"A9550RelEstFinUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9550RelEstFinUsuarioAlt=Value},v2z:function(Value){gx.O.Z9550RelEstFinUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("RELESTFINUSUARIOALT",gx.O.A9550RelEstFinUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9550RelEstFinUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("RELESTFINUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RELESTFINDATAHORAALT",gxz:"Z9551RelEstFinDataHoraAlt",gxold:"O9551RelEstFinDataHoraAlt",gxvar:"A9551RelEstFinDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9551RelEstFinDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9551RelEstFinDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("RELESTFINDATAHORAALT",gx.O.A9551RelEstFinDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9551RelEstFinDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("RELESTFINDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Relestfinempresaid,isvalid:null,rgrid:[],fld:"RELESTFINEMPRESAID",gxz:"Z9547RelEstFinEmpresaId",gxold:"O9547RelEstFinEmpresaId",gxvar:"A9547RelEstFinEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9547RelEstFinEmpresaId=Value},v2z:function(Value){gx.O.Z9547RelEstFinEmpresaId=Value},v2c:function(){gx.fn.setControlValue("RELESTFINEMPRESAID",gx.O.A9547RelEstFinEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9547RelEstFinEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("RELESTFINEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.A9548RelEstFinId = 0 ;
   this.Z9548RelEstFinId = 0 ;
   this.O9548RelEstFinId = 0 ;
   this.A9549RelEstFinDescricao = "" ;
   this.Z9549RelEstFinDescricao = "" ;
   this.O9549RelEstFinDescricao = "" ;
   this.A9550RelEstFinUsuarioAlt = "" ;
   this.Z9550RelEstFinUsuarioAlt = "" ;
   this.O9550RelEstFinUsuarioAlt = "" ;
   this.A9551RelEstFinDataHoraAlt = gx.date.nullDate() ;
   this.Z9551RelEstFinDataHoraAlt = gx.date.nullDate() ;
   this.O9551RelEstFinDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A9547RelEstFinEmpresaId = "" ;
   this.Z9547RelEstFinEmpresaId = "" ;
   this.O9547RelEstFinEmpresaId = "" ;
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
   this.AV18RelEstFinId = 0 ;
   this.A9547RelEstFinEmpresaId = "" ;
   this.A9548RelEstFinId = 0 ;
   this.A9550RelEstFinUsuarioAlt = "" ;
   this.A9551RelEstFinDataHoraAlt = gx.date.nullDate() ;
   this.A9549RelEstFinDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12dn2_client": ["'FECHAR'", true] ,"e13dn2_client": ["AFTER TRN", true] ,"e14dn711_client": ["ENTER", true] ,"e15dn711_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18RelEstFinId',fld:'vRELESTFINID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18RelEstFinId", "vRELESTFINID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV21Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 711 ]= ["O9549RelEstFinDescricao"] ;
});
gx.setParentObj(new trelestfin());
