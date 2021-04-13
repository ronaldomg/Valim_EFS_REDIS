/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:17:32.69
*/
gx.evt.autoSkip = false;
gx.define('tgrupopreco', false, function () {
   this.ServerClass =  "tgrupopreco" ;
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
      this.AV18GrupoPrecoId=gx.fn.getIntegerValue("vGRUPOPRECOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Grupoprecoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPOPRECOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grupoprecoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPOPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grupoprecodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPOPRECODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5937GrupoPrecoDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição do grupo");
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
   this.e12972_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13972_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1497492_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1597492_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,25,27,29,38,39,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Grupoprecoid,isvalid:null,rgrid:[],fld:"GRUPOPRECOID",gxz:"Z5941GrupoPrecoId",gxold:"O5941GrupoPrecoId",gxvar:"A5941GrupoPrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5941GrupoPrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5941GrupoPrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRUPOPRECOID",gx.O.A5941GrupoPrecoId,0)},c2v:function(){gx.O.A5941GrupoPrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRUPOPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupoprecodescricao,isvalid:null,rgrid:[],fld:"GRUPOPRECODESCRICAO",gxz:"Z5937GrupoPrecoDescricao",gxold:"O5937GrupoPrecoDescricao",gxvar:"A5937GrupoPrecoDescricao",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5937GrupoPrecoDescricao=Value},v2z:function(Value){gx.O.Z5937GrupoPrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("GRUPOPRECODESCRICAO",gx.O.A5937GrupoPrecoDescricao,0)},c2v:function(){gx.O.A5937GrupoPrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("GRUPOPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABLE22",grid:0};
   GXValidFnc[25]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRECOUSUARIOALT",gxz:"Z5938GrupoPrecoUsuarioAlt",gxold:"O5938GrupoPrecoUsuarioAlt",gxvar:"A5938GrupoPrecoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5938GrupoPrecoUsuarioAlt=Value},v2z:function(Value){gx.O.Z5938GrupoPrecoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("GRUPOPRECOUSUARIOALT",gx.O.A5938GrupoPrecoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5938GrupoPrecoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("GRUPOPRECOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRECODATAHORAALT",gxz:"Z5939GrupoPrecoDataHoraAlt",gxold:"O5939GrupoPrecoDataHoraAlt",gxvar:"A5939GrupoPrecoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5939GrupoPrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5939GrupoPrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("GRUPOPRECODATAHORAALT",gx.O.A5939GrupoPrecoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5939GrupoPrecoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("GRUPOPRECODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[38]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupoprecoempresaid,isvalid:null,rgrid:[],fld:"GRUPOPRECOEMPRESAID",gxz:"Z5940GrupoPrecoEmpresaId",gxold:"O5940GrupoPrecoEmpresaId",gxvar:"A5940GrupoPrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5940GrupoPrecoEmpresaId=Value},v2z:function(Value){gx.O.Z5940GrupoPrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("GRUPOPRECOEMPRESAID",gx.O.A5940GrupoPrecoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5940GrupoPrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("GRUPOPRECOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.A5941GrupoPrecoId = 0 ;
   this.Z5941GrupoPrecoId = 0 ;
   this.O5941GrupoPrecoId = 0 ;
   this.A5937GrupoPrecoDescricao = "" ;
   this.Z5937GrupoPrecoDescricao = "" ;
   this.O5937GrupoPrecoDescricao = "" ;
   this.A5938GrupoPrecoUsuarioAlt = "" ;
   this.Z5938GrupoPrecoUsuarioAlt = "" ;
   this.O5938GrupoPrecoUsuarioAlt = "" ;
   this.A5939GrupoPrecoDataHoraAlt = gx.date.nullDate() ;
   this.Z5939GrupoPrecoDataHoraAlt = gx.date.nullDate() ;
   this.O5939GrupoPrecoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A5940GrupoPrecoEmpresaId = "" ;
   this.Z5940GrupoPrecoEmpresaId = "" ;
   this.O5940GrupoPrecoEmpresaId = "" ;
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
   this.AV18GrupoPrecoId = 0 ;
   this.A5940GrupoPrecoEmpresaId = "" ;
   this.A5941GrupoPrecoId = 0 ;
   this.A5938GrupoPrecoUsuarioAlt = "" ;
   this.A5939GrupoPrecoDataHoraAlt = gx.date.nullDate() ;
   this.A5937GrupoPrecoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12972_client": ["'FECHAR'", true] ,"e13972_client": ["AFTER TRN", true] ,"e1497492_client": ["ENTER", true] ,"e1597492_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18GrupoPrecoId", "vGRUPOPRECOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 492 ]= ["O5937GrupoPrecoDescricao"] ;
});
gx.setParentObj(new tgrupopreco());
