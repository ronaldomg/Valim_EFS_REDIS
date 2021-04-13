/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:32:3.95
*/
gx.evt.autoSkip = false;
gx.define('tacessosclube', false, function () {
   this.ServerClass =  "tacessosclube" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Acessosclubeidsessao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOSCLUBEIDSESSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acessosclubeusuariioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOSCLUBEUSUARIIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acessosclubeacessoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Acessosclubeacessoid",["gx.O.A9867AcessosClubeIdSessao", "gx.O.A9868AcessosClubeUsuariioId", "gx.O.A9869AcessosClubeAcessoId", 'gx.date.urlDateTime(gx.O.A9873AcessosClubeDataHoraEntrada,"DMY4")', 'gx.date.urlDateTime(gx.O.A9874AcessosClubeDataHoraSaida,"DMY4")', "gx.O.A9875AcessosClubeTitularId", "gx.O.A9876AcessosClubeDependenteId", "gx.O.A9877AcessosClubeNomePessoa", "gx.O.A9878AcessosClubeTipoPessoa", "gx.O.A9879AcessosClubeConviteNumero", "gx.O.A9880AcessosClubeDescricaoBloqueio"],["A9873AcessosClubeDataHoraEntrada", "A9874AcessosClubeDataHoraSaida", "A9875AcessosClubeTitularId", "A9876AcessosClubeDependenteId", "A9877AcessosClubeNomePessoa", "A9878AcessosClubeTipoPessoa", "A9879AcessosClubeConviteNumero", "A9880AcessosClubeDescricaoBloqueio", "Gx_mode", "Z9867AcessosClubeIdSessao", "Z9868AcessosClubeUsuariioId", "Z9869AcessosClubeAcessoId", "Z9873AcessosClubeDataHoraEntrada", "Z9874AcessosClubeDataHoraSaida", "Z9875AcessosClubeTitularId", "Z9876AcessosClubeDependenteId", "Z9877AcessosClubeNomePessoa", "Z9878AcessosClubeTipoPessoa", "Z9879AcessosClubeConviteNumero", "Z9880AcessosClubeDescricaoBloqueio", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11eb736_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12eb736_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89];
   this.GXLastCtrlId =89;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKACESSOSCLUBEIDSESSAO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessosclubeidsessao,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEIDSESSAO",gxz:"Z9867AcessosClubeIdSessao",gxold:"O9867AcessosClubeIdSessao",gxvar:"A9867AcessosClubeIdSessao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9867AcessosClubeIdSessao=Value},v2z:function(Value){gx.O.Z9867AcessosClubeIdSessao=Value},v2c:function(){gx.fn.setControlValue("ACESSOSCLUBEIDSESSAO",gx.O.A9867AcessosClubeIdSessao,0)},c2v:function(){gx.O.A9867AcessosClubeIdSessao=this.val()},val:function(){return gx.fn.getControlValue("ACESSOSCLUBEIDSESSAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKACESSOSCLUBEUSUARIIOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessosclubeusuariioid,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEUSUARIIOID",gxz:"Z9868AcessosClubeUsuariioId",gxold:"O9868AcessosClubeUsuariioId",gxvar:"A9868AcessosClubeUsuariioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9868AcessosClubeUsuariioId=Value},v2z:function(Value){gx.O.Z9868AcessosClubeUsuariioId=Value},v2c:function(){gx.fn.setControlValue("ACESSOSCLUBEUSUARIIOID",gx.O.A9868AcessosClubeUsuariioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9868AcessosClubeUsuariioId=this.val()},val:function(){return gx.fn.getControlValue("ACESSOSCLUBEUSUARIIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKACESSOSCLUBEACESSOID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessosclubeacessoid,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEACESSOID",gxz:"Z9869AcessosClubeAcessoId",gxold:"O9869AcessosClubeAcessoId",gxvar:"A9869AcessosClubeAcessoId",ucs:[],op:[89,84,79,74,69,64,59,54],ip:[89,84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9869AcessosClubeAcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9869AcessosClubeAcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACESSOSCLUBEACESSOID",gx.O.A9869AcessosClubeAcessoId,0)},c2v:function(){gx.O.A9869AcessosClubeAcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACESSOSCLUBEACESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKACESSOSCLUBEDATAHORAENTRADA", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEDATAHORAENTRADA",gxz:"Z9873AcessosClubeDataHoraEntrada",gxold:"O9873AcessosClubeDataHoraEntrada",gxvar:"A9873AcessosClubeDataHoraEntrada",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9873AcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9873AcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACESSOSCLUBEDATAHORAENTRADA",gx.O.A9873AcessosClubeDataHoraEntrada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9873AcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ACESSOSCLUBEDATAHORAENTRADA")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCKACESSOSCLUBEDATAHORASAIDA", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEDATAHORASAIDA",gxz:"Z9874AcessosClubeDataHoraSaida",gxold:"O9874AcessosClubeDataHoraSaida",gxvar:"A9874AcessosClubeDataHoraSaida",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9874AcessosClubeDataHoraSaida=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9874AcessosClubeDataHoraSaida=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACESSOSCLUBEDATAHORASAIDA",gx.O.A9874AcessosClubeDataHoraSaida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9874AcessosClubeDataHoraSaida=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ACESSOSCLUBEDATAHORASAIDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCKACESSOSCLUBETITULARID", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBETITULARID",gxz:"Z9875AcessosClubeTitularId",gxold:"O9875AcessosClubeTitularId",gxvar:"A9875AcessosClubeTitularId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9875AcessosClubeTitularId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9875AcessosClubeTitularId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACESSOSCLUBETITULARID",gx.O.A9875AcessosClubeTitularId,0)},c2v:function(){gx.O.A9875AcessosClubeTitularId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACESSOSCLUBETITULARID",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKACESSOSCLUBEDEPENDENTEID", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEDEPENDENTEID",gxz:"Z9876AcessosClubeDependenteId",gxold:"O9876AcessosClubeDependenteId",gxvar:"A9876AcessosClubeDependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9876AcessosClubeDependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9876AcessosClubeDependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACESSOSCLUBEDEPENDENTEID",gx.O.A9876AcessosClubeDependenteId,0)},c2v:function(){gx.O.A9876AcessosClubeDependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACESSOSCLUBEDEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKACESSOSCLUBENOMEPESSOA", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBENOMEPESSOA",gxz:"Z9877AcessosClubeNomePessoa",gxold:"O9877AcessosClubeNomePessoa",gxvar:"A9877AcessosClubeNomePessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9877AcessosClubeNomePessoa=Value},v2z:function(Value){gx.O.Z9877AcessosClubeNomePessoa=Value},v2c:function(){gx.fn.setControlValue("ACESSOSCLUBENOMEPESSOA",gx.O.A9877AcessosClubeNomePessoa,0)},c2v:function(){gx.O.A9877AcessosClubeNomePessoa=this.val()},val:function(){return gx.fn.getControlValue("ACESSOSCLUBENOMEPESSOA")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKACESSOSCLUBETIPOPESSOA", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBETIPOPESSOA",gxz:"Z9878AcessosClubeTipoPessoa",gxold:"O9878AcessosClubeTipoPessoa",gxvar:"A9878AcessosClubeTipoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9878AcessosClubeTipoPessoa=Value},v2z:function(Value){gx.O.Z9878AcessosClubeTipoPessoa=Value},v2c:function(){gx.fn.setControlValue("ACESSOSCLUBETIPOPESSOA",gx.O.A9878AcessosClubeTipoPessoa,0)},c2v:function(){gx.O.A9878AcessosClubeTipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("ACESSOSCLUBETIPOPESSOA")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKACESSOSCLUBECONVITENUMERO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBECONVITENUMERO",gxz:"Z9879AcessosClubeConviteNumero",gxold:"O9879AcessosClubeConviteNumero",gxvar:"A9879AcessosClubeConviteNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9879AcessosClubeConviteNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9879AcessosClubeConviteNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACESSOSCLUBECONVITENUMERO",gx.O.A9879AcessosClubeConviteNumero,0)},c2v:function(){gx.O.A9879AcessosClubeConviteNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACESSOSCLUBECONVITENUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKACESSOSCLUBEDESCRICAOBLOQUEIO", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEDESCRICAOBLOQUEIO",gxz:"Z9880AcessosClubeDescricaoBloqueio",gxold:"O9880AcessosClubeDescricaoBloqueio",gxvar:"A9880AcessosClubeDescricaoBloqueio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9880AcessosClubeDescricaoBloqueio=Value},v2z:function(Value){gx.O.Z9880AcessosClubeDescricaoBloqueio=Value},v2c:function(){gx.fn.setControlValue("ACESSOSCLUBEDESCRICAOBLOQUEIO",gx.O.A9880AcessosClubeDescricaoBloqueio,0)},c2v:function(){gx.O.A9880AcessosClubeDescricaoBloqueio=this.val()},val:function(){return gx.fn.getControlValue("ACESSOSCLUBEDESCRICAOBLOQUEIO")},nac:gx.falseFn};
   this.A9867AcessosClubeIdSessao = "" ;
   this.Z9867AcessosClubeIdSessao = "" ;
   this.O9867AcessosClubeIdSessao = "" ;
   this.A9868AcessosClubeUsuariioId = "" ;
   this.Z9868AcessosClubeUsuariioId = "" ;
   this.O9868AcessosClubeUsuariioId = "" ;
   this.A9869AcessosClubeAcessoId = 0 ;
   this.Z9869AcessosClubeAcessoId = 0 ;
   this.O9869AcessosClubeAcessoId = 0 ;
   this.A9873AcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.Z9873AcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.O9873AcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.A9874AcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.Z9874AcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.O9874AcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.A9875AcessosClubeTitularId = 0 ;
   this.Z9875AcessosClubeTitularId = 0 ;
   this.O9875AcessosClubeTitularId = 0 ;
   this.A9876AcessosClubeDependenteId = 0 ;
   this.Z9876AcessosClubeDependenteId = 0 ;
   this.O9876AcessosClubeDependenteId = 0 ;
   this.A9877AcessosClubeNomePessoa = "" ;
   this.Z9877AcessosClubeNomePessoa = "" ;
   this.O9877AcessosClubeNomePessoa = "" ;
   this.A9878AcessosClubeTipoPessoa = "" ;
   this.Z9878AcessosClubeTipoPessoa = "" ;
   this.O9878AcessosClubeTipoPessoa = "" ;
   this.A9879AcessosClubeConviteNumero = 0 ;
   this.Z9879AcessosClubeConviteNumero = 0 ;
   this.O9879AcessosClubeConviteNumero = 0 ;
   this.A9880AcessosClubeDescricaoBloqueio = "" ;
   this.Z9880AcessosClubeDescricaoBloqueio = "" ;
   this.O9880AcessosClubeDescricaoBloqueio = "" ;
   this.A9867AcessosClubeIdSessao = "" ;
   this.A9868AcessosClubeUsuariioId = "" ;
   this.A9869AcessosClubeAcessoId = 0 ;
   this.A9873AcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.A9874AcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.A9875AcessosClubeTitularId = 0 ;
   this.A9876AcessosClubeDependenteId = 0 ;
   this.A9877AcessosClubeNomePessoa = "" ;
   this.A9878AcessosClubeTipoPessoa = "" ;
   this.A9879AcessosClubeConviteNumero = 0 ;
   this.A9880AcessosClubeDescricaoBloqueio = "" ;
   this.Events = {"e11eb736_client": ["ENTER", true] ,"e12eb736_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tacessosclube());
