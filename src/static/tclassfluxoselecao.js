/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:44:3.39
*/
gx.evt.autoSkip = false;
gx.define('tclassfluxoselecao', false, function () {
   this.ServerClass =  "tclassfluxoselecao" ;
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
      this.AV26TipoClassFluxoEmpresaId=gx.fn.getControlValue("vTIPOCLASSFLUXOEMPRESAID") ;
      this.A10198TipoClassFluxoEmpresaId=gx.fn.getControlValue("TIPOCLASSFLUXOEMPRESAID") ;
      this.A10199TipoClassFluxoId=gx.fn.getIntegerValue("TIPOCLASSFLUXOID",'.') ;
      this.AV18ClassFluxoId=gx.fn.getControlValue("vCLASSFLUXOID") ;
      this.AV19ClassFluxoSelecaoSeq=gx.fn.getIntegerValue("vCLASSFLUXOSELECAOSEQ",'.') ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV21cont=gx.fn.getIntegerValue("vCONT",'.') ;
      this.AV11MsgErro=gx.fn.getControlValue("vMSGERRO") ;
      this.A3289ClassFluxoDescricao=gx.fn.getControlValue("CLASSFLUXODESCRICAO") ;
      this.AV31Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Classfluxoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoid",["gx.O.A10198TipoClassFluxoEmpresaId", "gx.O.A10199TipoClassFluxoId", "gx.O.A3288ClassFluxoId", "gx.O.A3289ClassFluxoDescricao"],["A3289ClassFluxoDescricao"]);
      return true;
   }
   this.Valid_Classfluxoselecaoseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELECAOSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipoclassfluxoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCLASSFLUXOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselecaodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELECAODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A3294ClassFluxoSelecaoDescricao) )
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
   this.Valid_Classfluxoselecaotipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselecaotipo",["gx.O.A3292ClassFluxoSelecaoTipo", "gx.O.A10198TipoClassFluxoEmpresaId", "gx.O.A10199TipoClassFluxoId", "gx.O.A3288ClassFluxoId", "gx.O.A3293ClassFluxoSelecaoSeq", "gx.O.AV21cont", "gx.O.AV11MsgErro"],["AV21cont", "AV11MsgErro"]);
      return true;
   }
   this.e12652_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13652_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1465768_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1565768_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,24,26,29,31,33,36,38,42,44,47,49,52,55,57,59,68,70];
   this.GXLastCtrlId =70;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE7",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoclassfluxoid,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXOID",gxz:"ZV27TipoClassFluxoId",gxold:"OV27TipoClassFluxoId",gxvar:"AV27TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV27TipoClassFluxoId,0)},c2v:function(){gx.O.AV27TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV28TipoClassFluxoDescricao",gxold:"OV28TipoClassFluxoDescricao",gxvar:"AV28TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV28TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV28TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV28TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoid,isvalid:null,rgrid:[],fld:"CLASSFLUXOID",gxz:"Z3288ClassFluxoId",gxold:"O3288ClassFluxoId",gxvar:"A3288ClassFluxoId",ucs:[],op:[],ip:[29],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3288ClassFluxoId=Value},v2z:function(Value){gx.O.Z3288ClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOID",gx.O.A3288ClassFluxoId,0)},c2v:function(){gx.O.A3288ClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXODESCRICAO",gxz:"ZV29ClassFluxoDescricao",gxold:"OV29ClassFluxoDescricao",gxvar:"AV29ClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV29ClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXODESCRICAO",gx.O.AV29ClassFluxoDescricao,0)},c2v:function(){gx.O.AV29ClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselecaoseq,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAOSEQ",gxz:"Z3293ClassFluxoSelecaoSeq",gxold:"O3293ClassFluxoSelecaoSeq",gxvar:"A3293ClassFluxoSelecaoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELECAOSEQ",gx.O.A3293ClassFluxoSelecaoSeq,0)},c2v:function(){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELECAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselecaodescricao,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAODESCRICAO",gxz:"Z3294ClassFluxoSelecaoDescricao",gxold:"O3294ClassFluxoSelecaoDescricao",gxvar:"A3294ClassFluxoSelecaoDescricao",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3294ClassFluxoSelecaoDescricao=Value},v2z:function(Value){gx.O.Z3294ClassFluxoSelecaoDescricao=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELECAODESCRICAO",gx.O.A3294ClassFluxoSelecaoDescricao,0)},c2v:function(){gx.O.A3294ClassFluxoSelecaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELECAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselecaotipo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAOTIPO",gxz:"Z3292ClassFluxoSelecaoTipo",gxold:"O3292ClassFluxoSelecaoTipo",gxvar:"A3292ClassFluxoSelecaoTipo",ucs:[],op:[49],ip:[38,29,49],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3292ClassFluxoSelecaoTipo=Value},v2z:function(Value){gx.O.Z3292ClassFluxoSelecaoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSFLUXOSELECAOTIPO",gx.O.A3292ClassFluxoSelecaoTipo)},c2v:function(){gx.O.A3292ClassFluxoSelecaoTipo=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELECAOTIPO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLE4",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAOUSUARIOALT",gxz:"Z3295ClassFluxoSelecaoUsuarioAlt",gxold:"O3295ClassFluxoSelecaoUsuarioAlt",gxvar:"A3295ClassFluxoSelecaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3295ClassFluxoSelecaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3295ClassFluxoSelecaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELECAOUSUARIOALT",gx.O.A3295ClassFluxoSelecaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3295ClassFluxoSelecaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELECAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[59]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAODATAHORAALT",gxz:"Z3296ClassFluxoSelecaoDataHoraAlt",gxold:"O3296ClassFluxoSelecaoDataHoraAlt",gxvar:"A3296ClassFluxoSelecaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3296ClassFluxoSelecaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3296ClassFluxoSelecaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELECAODATAHORAALT",gx.O.A3296ClassFluxoSelecaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3296ClassFluxoSelecaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CLASSFLUXOSELECAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[68]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"BTNHELP",grid:0};
   this.AV27TipoClassFluxoId = 0 ;
   this.ZV27TipoClassFluxoId = 0 ;
   this.OV27TipoClassFluxoId = 0 ;
   this.AV28TipoClassFluxoDescricao = "" ;
   this.ZV28TipoClassFluxoDescricao = "" ;
   this.OV28TipoClassFluxoDescricao = "" ;
   this.A3288ClassFluxoId = "" ;
   this.Z3288ClassFluxoId = "" ;
   this.O3288ClassFluxoId = "" ;
   this.AV29ClassFluxoDescricao = "" ;
   this.ZV29ClassFluxoDescricao = "" ;
   this.OV29ClassFluxoDescricao = "" ;
   this.A3293ClassFluxoSelecaoSeq = 0 ;
   this.Z3293ClassFluxoSelecaoSeq = 0 ;
   this.O3293ClassFluxoSelecaoSeq = 0 ;
   this.A3294ClassFluxoSelecaoDescricao = "" ;
   this.Z3294ClassFluxoSelecaoDescricao = "" ;
   this.O3294ClassFluxoSelecaoDescricao = "" ;
   this.A3292ClassFluxoSelecaoTipo = "" ;
   this.Z3292ClassFluxoSelecaoTipo = "" ;
   this.O3292ClassFluxoSelecaoTipo = "" ;
   this.A3295ClassFluxoSelecaoUsuarioAlt = "" ;
   this.Z3295ClassFluxoSelecaoUsuarioAlt = "" ;
   this.O3295ClassFluxoSelecaoUsuarioAlt = "" ;
   this.A3296ClassFluxoSelecaoDataHoraAlt = gx.date.nullDate() ;
   this.Z3296ClassFluxoSelecaoDataHoraAlt = gx.date.nullDate() ;
   this.O3296ClassFluxoSelecaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV30Pgmname = "" ;
   this.AV31Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV21cont = 0 ;
   this.AV29ClassFluxoDescricao = "" ;
   this.AV26TipoClassFluxoEmpresaId = "" ;
   this.AV27TipoClassFluxoId = 0 ;
   this.AV28TipoClassFluxoDescricao = "" ;
   this.AV18ClassFluxoId = "" ;
   this.AV19ClassFluxoSelecaoSeq = 0 ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A3288ClassFluxoId = "" ;
   this.A3293ClassFluxoSelecaoSeq = 0 ;
   this.AV20SnAlterou = "" ;
   this.A3289ClassFluxoDescricao = "" ;
   this.A3294ClassFluxoSelecaoDescricao = "" ;
   this.A3292ClassFluxoSelecaoTipo = "" ;
   this.A3295ClassFluxoSelecaoUsuarioAlt = "" ;
   this.A3296ClassFluxoSelecaoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12652_client": ["'FECHAR'", true] ,"e13652_client": ["AFTER TRN", true] ,"e1465768_client": ["ENTER", true] ,"e1565768_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV26TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV27TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV28TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV18ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV19ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV26TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV27TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV28TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV18ClassFluxoId',fld:'vCLASSFLUXOID'}],[{av:'AV18ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV26TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV26TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("A10198TipoClassFluxoEmpresaId", "TIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("A10199TipoClassFluxoId", "TIPOCLASSFLUXOID", 0, "int");
   this.setVCMap("AV18ClassFluxoId", "vCLASSFLUXOID", 0, "svchar");
   this.setVCMap("AV19ClassFluxoSelecaoSeq", "vCLASSFLUXOSELECAOSEQ", 0, "int");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV21cont", "vCONT", 0, "int");
   this.setVCMap("AV11MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("A3289ClassFluxoDescricao", "CLASSFLUXODESCRICAO", 0, "svchar");
   this.setVCMap("AV31Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV30Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 768 ]= ["O3292ClassFluxoSelecaoTipo","O3294ClassFluxoSelecaoDescricao"] ;
});
gx.setParentObj(new tclassfluxoselecao());
