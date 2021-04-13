/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:27:23.35
*/
gx.evt.autoSkip = false;
gx.define('tfcpuf', false, function () {
   this.ServerClass =  "tfcpuf" ;
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
      this.AV21FCPUFSequencia=gx.fn.getIntegerValue("vFCPUFSEQUENCIA",'.') ;
      this.AV28EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV30Erro=gx.fn.getControlValue("vERRO") ;
      this.AV29SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV22UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV32Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Fcpufsequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FCPUFSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Fcpufempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FCPUFEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Fcpufcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FCPUFCODIGO");
         this.AnyError  = 0;
         if ( ! ( this.A10686FCPUFCodigo == "" || this.A10686FCPUFCodigo == "AC" || this.A10686FCPUFCodigo == "AL" || this.A10686FCPUFCodigo == "AP" || this.A10686FCPUFCodigo == "AM" || this.A10686FCPUFCodigo == "BA" || this.A10686FCPUFCodigo == "CE" || this.A10686FCPUFCodigo == "DF" || this.A10686FCPUFCodigo == "ES" || this.A10686FCPUFCodigo == "GO" || this.A10686FCPUFCodigo == "MA" || this.A10686FCPUFCodigo == "MT" || this.A10686FCPUFCodigo == "MS" || this.A10686FCPUFCodigo == "MG" || this.A10686FCPUFCodigo == "PA" || this.A10686FCPUFCodigo == "PB" || this.A10686FCPUFCodigo == "PR" || this.A10686FCPUFCodigo == "PE" || this.A10686FCPUFCodigo == "PI" || this.A10686FCPUFCodigo == "RJ" || this.A10686FCPUFCodigo == "RN" || this.A10686FCPUFCodigo == "RS" || this.A10686FCPUFCodigo == "RO" || this.A10686FCPUFCodigo == "RR" || this.A10686FCPUFCodigo == "SC" || this.A10686FCPUFCodigo == "SP" || this.A10686FCPUFCodigo == "SE" || this.A10686FCPUFCodigo == "TO" || this.A10686FCPUFCodigo == "EX" ) )
         {
            try {
               gxballoon.setError("Campo FCPUFCodigo fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (""==this.A10686FCPUFCodigo) )
         {
            try {
               gxballoon.setError("Informe a UF");
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
   this.Valid_Fcpufncmcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Fcpufncmcodigo",["gx.O.Gx_mode", "gx.O.A10669FCPUFNCMCodigo", "gx.O.A10668FCPUFSequencia", "gx.O.A10686FCPUFCodigo", "gx.O.AV30Erro", "gx.O.A10685FCPUFNCMDescricao"],["A10685FCPUFNCMDescricao", "AV30Erro"]);
      return true;
   }
   this.Valid_Fcpufpercentual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FCPUFPERCENTUAL");
         this.AnyError  = 0;
         if ( (0.0==this.A10688FCPUFPercentual) )
         {
            try {
               gxballoon.setError("Informe o percentual");
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
   this.e11fg789_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hconsultancm",["", this.AV19NCMCodigoIN]), ["A10669FCPUFNCMCodigo"]);
      this.refreshOutputs([{av:'A10669FCPUFNCMCodigo',fld:'FCPUFNCMCODIGO'}]);
   };
   this.e13fg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14fg2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e15fg789_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16fg789_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,31,34,36,39,42,44,46,52,58,59,60,61,63];
   this.GXLastCtrlId =63;
   GXValidFnc[3]={fld:"TABLE4",grid:0};
   GXValidFnc[6]={fld:"TABLE5",grid:0};
   GXValidFnc[9]={fld:"TABLE6",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Fcpufsequencia,isvalid:null,rgrid:[],fld:"FCPUFSEQUENCIA",gxz:"Z10668FCPUFSequencia",gxold:"O10668FCPUFSequencia",gxvar:"A10668FCPUFSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10668FCPUFSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10668FCPUFSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FCPUFSEQUENCIA",gx.O.A10668FCPUFSequencia,0)},c2v:function(){gx.O.A10668FCPUFSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FCPUFSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fcpufcodigo,isvalid:null,rgrid:[],fld:"FCPUFCODIGO",gxz:"Z10686FCPUFCodigo",gxold:"O10686FCPUFCodigo",gxvar:"A10686FCPUFCodigo",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10686FCPUFCodigo=Value},v2z:function(Value){gx.O.Z10686FCPUFCodigo=Value},v2c:function(){gx.fn.setComboBoxValue("FCPUFCODIGO",gx.O.A10686FCPUFCodigo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10686FCPUFCodigo=this.val()},val:function(){return gx.fn.getControlValue("FCPUFCODIGO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE1",grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fcpufncmcodigo,isvalid:null,rgrid:[],fld:"FCPUFNCMCODIGO",gxz:"Z10669FCPUFNCMCodigo",gxold:"O10669FCPUFNCMCodigo",gxvar:"A10669FCPUFNCMCodigo",ucs:[],op:[31],ip:[31,20,14,28],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10669FCPUFNCMCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10669FCPUFNCMCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FCPUFNCMCODIGO",gx.O.A10669FCPUFNCMCodigo,0)},c2v:function(){gx.O.A10669FCPUFNCMCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FCPUFNCMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"PROMPTNCM",grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FCPUFNCMDESCRICAO",gxz:"Z10685FCPUFNCMDescricao",gxold:"O10685FCPUFNCMDescricao",gxvar:"A10685FCPUFNCMDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10685FCPUFNCMDescricao=Value},v2z:function(Value){gx.O.Z10685FCPUFNCMDescricao=Value},v2c:function(){gx.fn.setControlValue("FCPUFNCMDESCRICAO",gx.O.A10685FCPUFNCMDescricao,0)},c2v:function(){gx.O.A10685FCPUFNCMDescricao=this.val()},val:function(){return gx.fn.getControlValue("FCPUFNCMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fcpufpercentual,isvalid:null,rgrid:[],fld:"FCPUFPERCENTUAL",gxz:"Z10688FCPUFPercentual",gxold:"O10688FCPUFPercentual",gxvar:"A10688FCPUFPercentual",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10688FCPUFPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10688FCPUFPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FCPUFPERCENTUAL",gx.O.A10688FCPUFPercentual,4,',')},c2v:function(){gx.O.A10688FCPUFPercentual=this.val()},val:function(){return gx.fn.getDecimalValue("FCPUFPERCENTUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE8",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FCPUFUSUARIOALT",gxz:"Z10689FCPUFUsuarioAlt",gxold:"O10689FCPUFUsuarioAlt",gxvar:"A10689FCPUFUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10689FCPUFUsuarioAlt=Value},v2z:function(Value){gx.O.Z10689FCPUFUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("FCPUFUSUARIOALT",gx.O.A10689FCPUFUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10689FCPUFUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("FCPUFUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FCPUFDATAHORAALT",gxz:"Z10687FCPUFDataHoraAlt",gxold:"O10687FCPUFDataHoraAlt",gxvar:"A10687FCPUFDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10687FCPUFDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10687FCPUFDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("FCPUFDATAHORAALT",gx.O.A10687FCPUFDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10687FCPUFDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("FCPUFDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[52]={fld:"TABLE7",grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"JS", format:2,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMCODIGOIN",gxz:"ZV19NCMCodigoIN",gxold:"OV19NCMCodigoIN",gxvar:"AV19NCMCodigoIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19NCMCodigoIN=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19NCMCodigoIN=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMCODIGOIN",gx.O.AV19NCMCodigoIN,0)},c2v:function(){gx.O.AV19NCMCodigoIN=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCODIGOIN",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fcpufempresaid,isvalid:null,rgrid:[],fld:"FCPUFEMPRESAID",gxz:"Z10667FCPUFEmpresaId",gxold:"O10667FCPUFEmpresaId",gxvar:"A10667FCPUFEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10667FCPUFEmpresaId=Value},v2z:function(Value){gx.O.Z10667FCPUFEmpresaId=Value},v2c:function(){gx.fn.setControlValue("FCPUFEMPRESAID",gx.O.A10667FCPUFEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10667FCPUFEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("FCPUFEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[63]={fld:"BTNHELP",grid:0};
   this.A10668FCPUFSequencia = 0 ;
   this.Z10668FCPUFSequencia = 0 ;
   this.O10668FCPUFSequencia = 0 ;
   this.A10686FCPUFCodigo = "" ;
   this.Z10686FCPUFCodigo = "" ;
   this.O10686FCPUFCodigo = "" ;
   this.A10669FCPUFNCMCodigo = 0 ;
   this.Z10669FCPUFNCMCodigo = 0 ;
   this.O10669FCPUFNCMCodigo = 0 ;
   this.A10685FCPUFNCMDescricao = "" ;
   this.Z10685FCPUFNCMDescricao = "" ;
   this.O10685FCPUFNCMDescricao = "" ;
   this.A10688FCPUFPercentual = 0 ;
   this.Z10688FCPUFPercentual = 0 ;
   this.O10688FCPUFPercentual = 0 ;
   this.A10689FCPUFUsuarioAlt = "" ;
   this.Z10689FCPUFUsuarioAlt = "" ;
   this.O10689FCPUFUsuarioAlt = "" ;
   this.A10687FCPUFDataHoraAlt = gx.date.nullDate() ;
   this.Z10687FCPUFDataHoraAlt = gx.date.nullDate() ;
   this.O10687FCPUFDataHoraAlt = gx.date.nullDate() ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.AV19NCMCodigoIN = 0 ;
   this.ZV19NCMCodigoIN = 0 ;
   this.OV19NCMCodigoIN = 0 ;
   this.A10667FCPUFEmpresaId = "" ;
   this.Z10667FCPUFEmpresaId = "" ;
   this.O10667FCPUFEmpresaId = "" ;
   this.AV22UsrCod = "" ;
   this.AV23EmpresaLogadaId = "" ;
   this.AV24Sistema = "" ;
   this.AV31Pgmname = "" ;
   this.AV32Pgmdesc = "" ;
   this.AV25MsgErro = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.AV26Modulo = "" ;
   this.AV27Logon = {} ;
   this.AV28EmpresaPadrao = "" ;
   this.AV29SnAlterou = "" ;
   this.AV21FCPUFSequencia = 0 ;
   this.A10667FCPUFEmpresaId = "" ;
   this.A10668FCPUFSequencia = 0 ;
   this.AV30Erro = "" ;
   this.A10689FCPUFUsuarioAlt = "" ;
   this.A10687FCPUFDataHoraAlt = gx.date.nullDate() ;
   this.A10686FCPUFCodigo = "" ;
   this.A10688FCPUFPercentual = 0 ;
   this.A10669FCPUFNCMCodigo = 0 ;
   this.A10685FCPUFNCMDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e13fg2_client": ["'FECHAR'", true] ,"e14fg2_client": ["AFTER TRN", true] ,"e15fg789_client": ["ENTER", true] ,"e16fg789_client": ["CANCEL", true] ,"e11fg789_client": ["'CONSULTANCM'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV21FCPUFSequencia',fld:'vFCPUFSEQUENCIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'CONSULTANCM'"] = [[{av:'AV19NCMCodigoIN',fld:'vNCMCODIGOIN'}],[{av:'A10669FCPUFNCMCodigo',fld:'FCPUFNCMCODIGO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV21FCPUFSequencia", "vFCPUFSEQUENCIA", 0, "int");
   this.setVCMap("AV28EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30Erro", "vERRO", 0, "svchar");
   this.setVCMap("AV29SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV22UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV32Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV31Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 789 ]= ["O10688FCPUFPercentual","O10669FCPUFNCMCodigo","O10686FCPUFCodigo"] ;
});
gx.setParentObj(new tfcpuf());
