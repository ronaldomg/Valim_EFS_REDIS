/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:26:0.6
*/
gx.evt.autoSkip = false;
gx.define('tferiado', false, function () {
   this.ServerClass =  "tferiado" ;
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
      this.AV17FeriadoData=gx.fn.getDateValue("vFERIADODATA") ;
      this.AV18Mes=gx.fn.getIntegerValue("vMES",'.') ;
      this.AV19Ano=gx.fn.getIntegerValue("vANO",'.') ;
      this.AV22Dia=gx.fn.getIntegerValue("vDIA",'.') ;
      this.AV21Dia2=gx.fn.getIntegerValue("vDIA2",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV20ErroData=gx.fn.getControlValue("vERRODATA") ;
      this.AV27Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV26Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Feriadodata=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Feriadodata",["gx.O.Gx_mode", 'gx.date.urlDate(gx.O.A957FeriadoData,"DMY4")', "gx.O.AV18Mes", "gx.O.AV19Ano", "gx.O.AV22Dia", "gx.O.AV21Dia2", "gx.O.AV20ErroData"],["AV18Mes", "AV19Ano", "AV22Dia", "AV21Dia2", "AV20ErroData"]);
      return true;
   }
   this.Valid_Feriadodescricao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Feriadodescricao",["gx.O.O958FeriadoDescricao", 'gx.date.urlDate(gx.O.O957FeriadoData,"DMY4")', "gx.O.AV7UsrCod", 'gx.date.urlDate(gx.O.A957FeriadoData,"DMY4")', "gx.O.A958FeriadoDescricao", "gx.O.A959FeriadoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A960FeriadoDataHoraAlt,"DMY4")'],["A959FeriadoUsuarioAlt", "A960FeriadoDataHoraAlt"]);
      return true;
   }
   this.e122a2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132a2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142a129_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152a129_client=function()
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
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Feriadodata,isvalid:null,rgrid:[],fld:"FERIADODATA",gxz:"Z957FeriadoData",gxold:"O957FeriadoData",gxvar:"A957FeriadoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A957FeriadoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z957FeriadoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("FERIADODATA",gx.O.A957FeriadoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A957FeriadoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("FERIADODATA")},nac:function(){return !(new gx.date.gxdate("").compare(this.AV17FeriadoData)==0)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Feriadodescricao,isvalid:null,rgrid:[],fld:"FERIADODESCRICAO",gxz:"Z958FeriadoDescricao",gxold:"O958FeriadoDescricao",gxvar:"A958FeriadoDescricao",ucs:[],op:[30,28],ip:[30,28,20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A958FeriadoDescricao=Value},v2z:function(Value){gx.O.Z958FeriadoDescricao=Value},v2c:function(){gx.fn.setControlValue("FERIADODESCRICAO",gx.O.A958FeriadoDescricao,0)},c2v:function(){gx.O.A958FeriadoDescricao=this.val()},val:function(){return gx.fn.getControlValue("FERIADODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FERIADOUSUARIOALT",gxz:"Z959FeriadoUsuarioAlt",gxold:"O959FeriadoUsuarioAlt",gxvar:"A959FeriadoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A959FeriadoUsuarioAlt=Value},v2z:function(Value){gx.O.Z959FeriadoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("FERIADOUSUARIOALT",gx.O.A959FeriadoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A959FeriadoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("FERIADOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FERIADODATAHORAALT",gxz:"Z960FeriadoDataHoraAlt",gxold:"O960FeriadoDataHoraAlt",gxvar:"A960FeriadoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A960FeriadoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z960FeriadoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("FERIADODATAHORAALT",gx.O.A960FeriadoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A960FeriadoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("FERIADODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV23AcessoSistemaSequencia",gxold:"OV23AcessoSistemaSequencia",gxvar:"AV23AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV23AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.A957FeriadoData = gx.date.nullDate() ;
   this.Z957FeriadoData = gx.date.nullDate() ;
   this.O957FeriadoData = gx.date.nullDate() ;
   this.A958FeriadoDescricao = "" ;
   this.Z958FeriadoDescricao = "" ;
   this.O958FeriadoDescricao = "" ;
   this.A959FeriadoUsuarioAlt = "" ;
   this.Z959FeriadoUsuarioAlt = "" ;
   this.O959FeriadoUsuarioAlt = "" ;
   this.A960FeriadoDataHoraAlt = gx.date.nullDate() ;
   this.Z960FeriadoDataHoraAlt = gx.date.nullDate() ;
   this.O960FeriadoDataHoraAlt = gx.date.nullDate() ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.ZV23AcessoSistemaSequencia = 0 ;
   this.OV23AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV26Pgmname = "" ;
   this.AV27Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV20ErroData = "" ;
   this.AV17FeriadoData = gx.date.nullDate() ;
   this.A957FeriadoData = gx.date.nullDate() ;
   this.AV18Mes = 0 ;
   this.AV19Ano = 0 ;
   this.AV22Dia = 0 ;
   this.AV21Dia2 = 0 ;
   this.A959FeriadoUsuarioAlt = "" ;
   this.A960FeriadoDataHoraAlt = gx.date.nullDate() ;
   this.A958FeriadoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e122a2_client": ["'FECHAR'", true] ,"e132a2_client": ["AFTER TRN", true] ,"e142a129_client": ["ENTER", true] ,"e152a129_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17FeriadoData',fld:'vFERIADODATA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17FeriadoData", "vFERIADODATA", 0, "date");
   this.setVCMap("AV18Mes", "vMES", 0, "int");
   this.setVCMap("AV19Ano", "vANO", 0, "int");
   this.setVCMap("AV22Dia", "vDIA", 0, "int");
   this.setVCMap("AV21Dia2", "vDIA2", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV20ErroData", "vERRODATA", 0, "svchar");
   this.setVCMap("AV27Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV26Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 129 ]= ["O958FeriadoDescricao","O957FeriadoData"] ;
});
gx.setParentObj(new tferiado());
