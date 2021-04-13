/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:24:18.67
*/
gx.evt.autoSkip = false;
gx.define('tassociadoexcluido', false, function () {
   this.ServerClass =  "tassociadoexcluido" ;
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
   this.Valid_Associadoexcluidoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOEXCLUIDOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoexcluidoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Associadoexcluidoid",["gx.O.A9995AssociadoExcluidoEmpresaId", "gx.O.A9996AssociadoExcluidoId", 'gx.date.urlDate(gx.O.A10045AssociadoExcluidoDataFiliacao,"DMY4")', 'gx.date.urlDate(gx.O.A10046AssociadoExcluidoDataFundacao,"DMY4")', "gx.O.A10052AssociadoExcluidoSenha", "gx.O.A10050AssociadoExcluidoPorte", "gx.O.A10051AssociadoExcluidoQtdeFunc", "gx.O.A10054AssociadoExcluidoSnFaturamento", "gx.O.A10055AssociadoExcluidoSnFiliado", "gx.O.A10056AssociadoExcluidoSnGerarBoleto", "gx.O.A10059AssociadoExcluidoUsuarioSCPC", "gx.O.A10053AssociadoExcluidoSenhaSCPC", "gx.O.A10520AssociadoExcluidoTipoAssociado", "gx.O.A10057AssociadoExcluidoTipoExclusao", "gx.O.A10049AssociadoExcluidoMotExclusao", 'gx.date.urlDate(gx.O.A10044AssociadoExcluidoDataAprovacao,"DMY4")', "gx.O.A10060AssociadoExcluidoUsuExclusao", 'gx.date.urlDateTime(gx.O.A10048AssociadoExcluidoDataHoraExc,"DMY4")', "gx.O.A10058AssociadoExcluidoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A10047AssociadoExcluidoDataHoraAlt,"DMY4")', "gx.O.A9997AssociadoExcProdPrincipalEmpId", "gx.O.A9998AssociadoExcProdPrincipalId"],["A10045AssociadoExcluidoDataFiliacao", "A10046AssociadoExcluidoDataFundacao", "A10052AssociadoExcluidoSenha", "A10050AssociadoExcluidoPorte", "A10051AssociadoExcluidoQtdeFunc", "A10054AssociadoExcluidoSnFaturamento", "A10055AssociadoExcluidoSnFiliado", "A10056AssociadoExcluidoSnGerarBoleto", "A10059AssociadoExcluidoUsuarioSCPC", "A10053AssociadoExcluidoSenhaSCPC", "A10520AssociadoExcluidoTipoAssociado", "A10057AssociadoExcluidoTipoExclusao", "A10049AssociadoExcluidoMotExclusao", "A10044AssociadoExcluidoDataAprovacao", "A10060AssociadoExcluidoUsuExclusao", "A10048AssociadoExcluidoDataHoraExc", "A10058AssociadoExcluidoUsuarioAlt", "A10047AssociadoExcluidoDataHoraAlt", "A9997AssociadoExcProdPrincipalEmpId", "A9998AssociadoExcProdPrincipalId", "A10061AssociadoExcProdPrincipalDesc", "Gx_mode", "Z9995AssociadoExcluidoEmpresaId", "Z9996AssociadoExcluidoId", "Z10045AssociadoExcluidoDataFiliacao", "Z10046AssociadoExcluidoDataFundacao", "Z10052AssociadoExcluidoSenha", "Z10050AssociadoExcluidoPorte", "Z10051AssociadoExcluidoQtdeFunc", "Z10054AssociadoExcluidoSnFaturamento", "Z10055AssociadoExcluidoSnFiliado", "Z10056AssociadoExcluidoSnGerarBoleto", "Z10059AssociadoExcluidoUsuarioSCPC", "Z10053AssociadoExcluidoSenhaSCPC", "Z10520AssociadoExcluidoTipoAssociado", "Z10057AssociadoExcluidoTipoExclusao", "Z10049AssociadoExcluidoMotExclusao", "Z10044AssociadoExcluidoDataAprovacao", "Z10060AssociadoExcluidoUsuExclusao", "Z10048AssociadoExcluidoDataHoraExc", "Z10058AssociadoExcluidoUsuarioAlt", "Z10047AssociadoExcluidoDataHoraAlt", "Z9997AssociadoExcProdPrincipalEmpId", "Z9998AssociadoExcProdPrincipalId", "Z10061AssociadoExcProdPrincipalDesc", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Associadoexcprodprincipalempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOEXCPRODPRINCIPALEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoexcprodprincipalid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Associadoexcprodprincipalid",["gx.O.A9997AssociadoExcProdPrincipalEmpId", "gx.O.A9998AssociadoExcProdPrincipalId", "gx.O.A10061AssociadoExcProdPrincipalDesc"],["A10061AssociadoExcProdPrincipalDesc"]);
      return true;
   }
   this.e11en750_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12en750_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,122,124,127,129,132,134,137,139,142,144,147,149,155];
   this.GXLastCtrlId =155;
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
   GXValidFnc[37]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoexcluidoempresaid,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOEMPRESAID",gxz:"Z9995AssociadoExcluidoEmpresaId",gxold:"O9995AssociadoExcluidoEmpresaId",gxvar:"A9995AssociadoExcluidoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9995AssociadoExcluidoEmpresaId=Value},v2z:function(Value){gx.O.Z9995AssociadoExcluidoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOEMPRESAID",gx.O.A9995AssociadoExcluidoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9995AssociadoExcluidoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoexcluidoid,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOID",gxz:"Z9996AssociadoExcluidoId",gxold:"O9996AssociadoExcluidoId",gxvar:"A9996AssociadoExcluidoId",ucs:[],op:[144,139,134,129,124,119,114,109,104,99,94,89,84,79,74,69,64,59,54,49],ip:[144,139,134,129,124,119,114,109,104,99,94,89,84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9996AssociadoExcluidoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9996AssociadoExcluidoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOID",gx.O.A9996AssociadoExcluidoId,0)},c2v:function(){gx.O.A9996AssociadoExcluidoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOEXCLUIDOID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKASSOCIADOEXCLUIDODATAFILIACAO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDODATAFILIACAO",gxz:"Z10045AssociadoExcluidoDataFiliacao",gxold:"O10045AssociadoExcluidoDataFiliacao",gxvar:"A10045AssociadoExcluidoDataFiliacao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10045AssociadoExcluidoDataFiliacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10045AssociadoExcluidoDataFiliacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDODATAFILIACAO",gx.O.A10045AssociadoExcluidoDataFiliacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10045AssociadoExcluidoDataFiliacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDODATAFILIACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKASSOCIADOEXCLUIDODATAFUNDACAO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDODATAFUNDACAO",gxz:"Z10046AssociadoExcluidoDataFundacao",gxold:"O10046AssociadoExcluidoDataFundacao",gxvar:"A10046AssociadoExcluidoDataFundacao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10046AssociadoExcluidoDataFundacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10046AssociadoExcluidoDataFundacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDODATAFUNDACAO",gx.O.A10046AssociadoExcluidoDataFundacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10046AssociadoExcluidoDataFundacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDODATAFUNDACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOSENHA", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOSENHA",gxz:"Z10052AssociadoExcluidoSenha",gxold:"O10052AssociadoExcluidoSenha",gxvar:"A10052AssociadoExcluidoSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10052AssociadoExcluidoSenha=Value},v2z:function(Value){gx.O.Z10052AssociadoExcluidoSenha=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOSENHA",gx.O.A10052AssociadoExcluidoSenha,0)},c2v:function(){gx.O.A10052AssociadoExcluidoSenha=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOSENHA")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOPORTE", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOPORTE",gxz:"Z10050AssociadoExcluidoPorte",gxold:"O10050AssociadoExcluidoPorte",gxvar:"A10050AssociadoExcluidoPorte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10050AssociadoExcluidoPorte=Value},v2z:function(Value){gx.O.Z10050AssociadoExcluidoPorte=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOPORTE",gx.O.A10050AssociadoExcluidoPorte,0)},c2v:function(){gx.O.A10050AssociadoExcluidoPorte=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOPORTE")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOQTDEFUNC", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOQTDEFUNC",gxz:"Z10051AssociadoExcluidoQtdeFunc",gxold:"O10051AssociadoExcluidoQtdeFunc",gxvar:"A10051AssociadoExcluidoQtdeFunc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10051AssociadoExcluidoQtdeFunc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10051AssociadoExcluidoQtdeFunc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOQTDEFUNC",gx.O.A10051AssociadoExcluidoQtdeFunc,0)},c2v:function(){gx.O.A10051AssociadoExcluidoQtdeFunc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOEXCLUIDOQTDEFUNC",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOSNFATURAMENTO", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOSNFATURAMENTO",gxz:"Z10054AssociadoExcluidoSnFaturamento",gxold:"O10054AssociadoExcluidoSnFaturamento",gxvar:"A10054AssociadoExcluidoSnFaturamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10054AssociadoExcluidoSnFaturamento=Value},v2z:function(Value){gx.O.Z10054AssociadoExcluidoSnFaturamento=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOSNFATURAMENTO",gx.O.A10054AssociadoExcluidoSnFaturamento,0)},c2v:function(){gx.O.A10054AssociadoExcluidoSnFaturamento=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOSNFATURAMENTO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOSNFILIADO", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOSNFILIADO",gxz:"Z10055AssociadoExcluidoSnFiliado",gxold:"O10055AssociadoExcluidoSnFiliado",gxvar:"A10055AssociadoExcluidoSnFiliado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10055AssociadoExcluidoSnFiliado=Value},v2z:function(Value){gx.O.Z10055AssociadoExcluidoSnFiliado=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOSNFILIADO",gx.O.A10055AssociadoExcluidoSnFiliado,0)},c2v:function(){gx.O.A10055AssociadoExcluidoSnFiliado=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOSNFILIADO")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOSNGERARBOLETO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOSNGERARBOLETO",gxz:"Z10056AssociadoExcluidoSnGerarBoleto",gxold:"O10056AssociadoExcluidoSnGerarBoleto",gxvar:"A10056AssociadoExcluidoSnGerarBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10056AssociadoExcluidoSnGerarBoleto=Value},v2z:function(Value){gx.O.Z10056AssociadoExcluidoSnGerarBoleto=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOSNGERARBOLETO",gx.O.A10056AssociadoExcluidoSnGerarBoleto,0)},c2v:function(){gx.O.A10056AssociadoExcluidoSnGerarBoleto=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOSNGERARBOLETO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOUSUARIOSCPC", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOUSUARIOSCPC",gxz:"Z10059AssociadoExcluidoUsuarioSCPC",gxold:"O10059AssociadoExcluidoUsuarioSCPC",gxvar:"A10059AssociadoExcluidoUsuarioSCPC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10059AssociadoExcluidoUsuarioSCPC=Value},v2z:function(Value){gx.O.Z10059AssociadoExcluidoUsuarioSCPC=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOUSUARIOSCPC",gx.O.A10059AssociadoExcluidoUsuarioSCPC,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10059AssociadoExcluidoUsuarioSCPC=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOUSUARIOSCPC")},nac:gx.falseFn};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[92]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOSENHASCPC", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOSENHASCPC",gxz:"Z10053AssociadoExcluidoSenhaSCPC",gxold:"O10053AssociadoExcluidoSenhaSCPC",gxvar:"A10053AssociadoExcluidoSenhaSCPC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10053AssociadoExcluidoSenhaSCPC=Value},v2z:function(Value){gx.O.Z10053AssociadoExcluidoSenhaSCPC=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOSENHASCPC",gx.O.A10053AssociadoExcluidoSenhaSCPC,0)},c2v:function(){gx.O.A10053AssociadoExcluidoSenhaSCPC=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOSENHASCPC")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOTIPOASSOCIADO", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOTIPOASSOCIADO",gxz:"Z10520AssociadoExcluidoTipoAssociado",gxold:"O10520AssociadoExcluidoTipoAssociado",gxvar:"A10520AssociadoExcluidoTipoAssociado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10520AssociadoExcluidoTipoAssociado=Value},v2z:function(Value){gx.O.Z10520AssociadoExcluidoTipoAssociado=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOTIPOASSOCIADO",gx.O.A10520AssociadoExcluidoTipoAssociado,0)},c2v:function(){gx.O.A10520AssociadoExcluidoTipoAssociado=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOTIPOASSOCIADO")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOTIPOEXCLUSAO", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOTIPOEXCLUSAO",gxz:"Z10057AssociadoExcluidoTipoExclusao",gxold:"O10057AssociadoExcluidoTipoExclusao",gxvar:"A10057AssociadoExcluidoTipoExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10057AssociadoExcluidoTipoExclusao=Value},v2z:function(Value){gx.O.Z10057AssociadoExcluidoTipoExclusao=Value},v2c:function(){gx.fn.setComboBoxValue("ASSOCIADOEXCLUIDOTIPOEXCLUSAO",gx.O.A10057AssociadoExcluidoTipoExclusao)},c2v:function(){gx.O.A10057AssociadoExcluidoTipoExclusao=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOTIPOEXCLUSAO")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOMOTEXCLUSAO", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"svchar",len:240,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOMOTEXCLUSAO",gxz:"Z10049AssociadoExcluidoMotExclusao",gxold:"O10049AssociadoExcluidoMotExclusao",gxvar:"A10049AssociadoExcluidoMotExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10049AssociadoExcluidoMotExclusao=Value},v2z:function(Value){gx.O.Z10049AssociadoExcluidoMotExclusao=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOMOTEXCLUSAO",gx.O.A10049AssociadoExcluidoMotExclusao,0)},c2v:function(){gx.O.A10049AssociadoExcluidoMotExclusao=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOMOTEXCLUSAO")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCKASSOCIADOEXCLUIDODATAAPROVACAO", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDODATAAPROVACAO",gxz:"Z10044AssociadoExcluidoDataAprovacao",gxold:"O10044AssociadoExcluidoDataAprovacao",gxvar:"A10044AssociadoExcluidoDataAprovacao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10044AssociadoExcluidoDataAprovacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10044AssociadoExcluidoDataAprovacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDODATAAPROVACAO",gx.O.A10044AssociadoExcluidoDataAprovacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10044AssociadoExcluidoDataAprovacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDODATAAPROVACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[117]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOUSUEXCLUSAO", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOUSUEXCLUSAO",gxz:"Z10060AssociadoExcluidoUsuExclusao",gxold:"O10060AssociadoExcluidoUsuExclusao",gxvar:"A10060AssociadoExcluidoUsuExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10060AssociadoExcluidoUsuExclusao=Value},v2z:function(Value){gx.O.Z10060AssociadoExcluidoUsuExclusao=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOUSUEXCLUSAO",gx.O.A10060AssociadoExcluidoUsuExclusao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10060AssociadoExcluidoUsuExclusao=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOUSUEXCLUSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 119 , function() {
   });
   GXValidFnc[122]={fld:"TEXTBLOCKASSOCIADOEXCLUIDODATAHORAEXC", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDODATAHORAEXC",gxz:"Z10048AssociadoExcluidoDataHoraExc",gxold:"O10048AssociadoExcluidoDataHoraExc",gxvar:"A10048AssociadoExcluidoDataHoraExc",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10048AssociadoExcluidoDataHoraExc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10048AssociadoExcluidoDataHoraExc=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDODATAHORAEXC",gx.O.A10048AssociadoExcluidoDataHoraExc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10048AssociadoExcluidoDataHoraExc=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ASSOCIADOEXCLUIDODATAHORAEXC")},nac:gx.falseFn};
   this.declareDomainHdlr( 124 , function() {
   });
   GXValidFnc[127]={fld:"TEXTBLOCKASSOCIADOEXCLUIDOUSUARIOALT", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDOUSUARIOALT",gxz:"Z10058AssociadoExcluidoUsuarioAlt",gxold:"O10058AssociadoExcluidoUsuarioAlt",gxvar:"A10058AssociadoExcluidoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10058AssociadoExcluidoUsuarioAlt=Value},v2z:function(Value){gx.O.Z10058AssociadoExcluidoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDOUSUARIOALT",gx.O.A10058AssociadoExcluidoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10058AssociadoExcluidoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 129 , function() {
   });
   GXValidFnc[132]={fld:"TEXTBLOCKASSOCIADOEXCLUIDODATAHORAALT", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDODATAHORAALT",gxz:"Z10047AssociadoExcluidoDataHoraAlt",gxold:"O10047AssociadoExcluidoDataHoraAlt",gxvar:"A10047AssociadoExcluidoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10047AssociadoExcluidoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10047AssociadoExcluidoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDODATAHORAALT",gx.O.A10047AssociadoExcluidoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10047AssociadoExcluidoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ASSOCIADOEXCLUIDODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 134 , function() {
   });
   GXValidFnc[137]={fld:"TEXTBLOCKASSOCIADOEXCPRODPRINCIPALEMPID", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoexcprodprincipalempid,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCPRODPRINCIPALEMPID",gxz:"Z9997AssociadoExcProdPrincipalEmpId",gxold:"O9997AssociadoExcProdPrincipalEmpId",gxvar:"A9997AssociadoExcProdPrincipalEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9997AssociadoExcProdPrincipalEmpId=Value},v2z:function(Value){gx.O.Z9997AssociadoExcProdPrincipalEmpId=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCPRODPRINCIPALEMPID",gx.O.A9997AssociadoExcProdPrincipalEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9997AssociadoExcProdPrincipalEmpId=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCPRODPRINCIPALEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 139 , function() {
   });
   GXValidFnc[142]={fld:"TEXTBLOCKASSOCIADOEXCPRODPRINCIPALID", format:0,grid:0};
   GXValidFnc[144]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoexcprodprincipalid,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCPRODPRINCIPALID",gxz:"Z9998AssociadoExcProdPrincipalId",gxold:"O9998AssociadoExcProdPrincipalId",gxvar:"A9998AssociadoExcProdPrincipalId",ucs:[],op:[149],ip:[149,144,139],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9998AssociadoExcProdPrincipalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9998AssociadoExcProdPrincipalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCPRODPRINCIPALID",gx.O.A9998AssociadoExcProdPrincipalId,0)},c2v:function(){gx.O.A9998AssociadoExcProdPrincipalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOEXCPRODPRINCIPALID",'.')},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TEXTBLOCKASSOCIADOEXCPRODPRINCIPALDESC", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCPRODPRINCIPALDESC",gxz:"Z10061AssociadoExcProdPrincipalDesc",gxold:"O10061AssociadoExcProdPrincipalDesc",gxvar:"A10061AssociadoExcProdPrincipalDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10061AssociadoExcProdPrincipalDesc=Value},v2z:function(Value){gx.O.Z10061AssociadoExcProdPrincipalDesc=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCPRODPRINCIPALDESC",gx.O.A10061AssociadoExcProdPrincipalDesc,0)},c2v:function(){gx.O.A10061AssociadoExcProdPrincipalDesc=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCPRODPRINCIPALDESC")},nac:gx.falseFn};
   GXValidFnc[155]={fld:"PROMPT_9997_9998",grid:750};
   this.A9995AssociadoExcluidoEmpresaId = "" ;
   this.Z9995AssociadoExcluidoEmpresaId = "" ;
   this.O9995AssociadoExcluidoEmpresaId = "" ;
   this.A9996AssociadoExcluidoId = 0 ;
   this.Z9996AssociadoExcluidoId = 0 ;
   this.O9996AssociadoExcluidoId = 0 ;
   this.A10045AssociadoExcluidoDataFiliacao = gx.date.nullDate() ;
   this.Z10045AssociadoExcluidoDataFiliacao = gx.date.nullDate() ;
   this.O10045AssociadoExcluidoDataFiliacao = gx.date.nullDate() ;
   this.A10046AssociadoExcluidoDataFundacao = gx.date.nullDate() ;
   this.Z10046AssociadoExcluidoDataFundacao = gx.date.nullDate() ;
   this.O10046AssociadoExcluidoDataFundacao = gx.date.nullDate() ;
   this.A10052AssociadoExcluidoSenha = "" ;
   this.Z10052AssociadoExcluidoSenha = "" ;
   this.O10052AssociadoExcluidoSenha = "" ;
   this.A10050AssociadoExcluidoPorte = "" ;
   this.Z10050AssociadoExcluidoPorte = "" ;
   this.O10050AssociadoExcluidoPorte = "" ;
   this.A10051AssociadoExcluidoQtdeFunc = 0 ;
   this.Z10051AssociadoExcluidoQtdeFunc = 0 ;
   this.O10051AssociadoExcluidoQtdeFunc = 0 ;
   this.A10054AssociadoExcluidoSnFaturamento = "" ;
   this.Z10054AssociadoExcluidoSnFaturamento = "" ;
   this.O10054AssociadoExcluidoSnFaturamento = "" ;
   this.A10055AssociadoExcluidoSnFiliado = "" ;
   this.Z10055AssociadoExcluidoSnFiliado = "" ;
   this.O10055AssociadoExcluidoSnFiliado = "" ;
   this.A10056AssociadoExcluidoSnGerarBoleto = "" ;
   this.Z10056AssociadoExcluidoSnGerarBoleto = "" ;
   this.O10056AssociadoExcluidoSnGerarBoleto = "" ;
   this.A10059AssociadoExcluidoUsuarioSCPC = "" ;
   this.Z10059AssociadoExcluidoUsuarioSCPC = "" ;
   this.O10059AssociadoExcluidoUsuarioSCPC = "" ;
   this.A10053AssociadoExcluidoSenhaSCPC = "" ;
   this.Z10053AssociadoExcluidoSenhaSCPC = "" ;
   this.O10053AssociadoExcluidoSenhaSCPC = "" ;
   this.A10520AssociadoExcluidoTipoAssociado = "" ;
   this.Z10520AssociadoExcluidoTipoAssociado = "" ;
   this.O10520AssociadoExcluidoTipoAssociado = "" ;
   this.A10057AssociadoExcluidoTipoExclusao = "" ;
   this.Z10057AssociadoExcluidoTipoExclusao = "" ;
   this.O10057AssociadoExcluidoTipoExclusao = "" ;
   this.A10049AssociadoExcluidoMotExclusao = "" ;
   this.Z10049AssociadoExcluidoMotExclusao = "" ;
   this.O10049AssociadoExcluidoMotExclusao = "" ;
   this.A10044AssociadoExcluidoDataAprovacao = gx.date.nullDate() ;
   this.Z10044AssociadoExcluidoDataAprovacao = gx.date.nullDate() ;
   this.O10044AssociadoExcluidoDataAprovacao = gx.date.nullDate() ;
   this.A10060AssociadoExcluidoUsuExclusao = "" ;
   this.Z10060AssociadoExcluidoUsuExclusao = "" ;
   this.O10060AssociadoExcluidoUsuExclusao = "" ;
   this.A10048AssociadoExcluidoDataHoraExc = gx.date.nullDate() ;
   this.Z10048AssociadoExcluidoDataHoraExc = gx.date.nullDate() ;
   this.O10048AssociadoExcluidoDataHoraExc = gx.date.nullDate() ;
   this.A10058AssociadoExcluidoUsuarioAlt = "" ;
   this.Z10058AssociadoExcluidoUsuarioAlt = "" ;
   this.O10058AssociadoExcluidoUsuarioAlt = "" ;
   this.A10047AssociadoExcluidoDataHoraAlt = gx.date.nullDate() ;
   this.Z10047AssociadoExcluidoDataHoraAlt = gx.date.nullDate() ;
   this.O10047AssociadoExcluidoDataHoraAlt = gx.date.nullDate() ;
   this.A9997AssociadoExcProdPrincipalEmpId = "" ;
   this.Z9997AssociadoExcProdPrincipalEmpId = "" ;
   this.O9997AssociadoExcProdPrincipalEmpId = "" ;
   this.A9998AssociadoExcProdPrincipalId = 0 ;
   this.Z9998AssociadoExcProdPrincipalId = 0 ;
   this.O9998AssociadoExcProdPrincipalId = 0 ;
   this.A10061AssociadoExcProdPrincipalDesc = "" ;
   this.Z10061AssociadoExcProdPrincipalDesc = "" ;
   this.O10061AssociadoExcProdPrincipalDesc = "" ;
   this.A9995AssociadoExcluidoEmpresaId = "" ;
   this.A9996AssociadoExcluidoId = 0 ;
   this.A10045AssociadoExcluidoDataFiliacao = gx.date.nullDate() ;
   this.A10046AssociadoExcluidoDataFundacao = gx.date.nullDate() ;
   this.A10052AssociadoExcluidoSenha = "" ;
   this.A10050AssociadoExcluidoPorte = "" ;
   this.A10051AssociadoExcluidoQtdeFunc = 0 ;
   this.A10054AssociadoExcluidoSnFaturamento = "" ;
   this.A10055AssociadoExcluidoSnFiliado = "" ;
   this.A10056AssociadoExcluidoSnGerarBoleto = "" ;
   this.A10059AssociadoExcluidoUsuarioSCPC = "" ;
   this.A10053AssociadoExcluidoSenhaSCPC = "" ;
   this.A10520AssociadoExcluidoTipoAssociado = "" ;
   this.A10057AssociadoExcluidoTipoExclusao = "" ;
   this.A10049AssociadoExcluidoMotExclusao = "" ;
   this.A10044AssociadoExcluidoDataAprovacao = gx.date.nullDate() ;
   this.A10060AssociadoExcluidoUsuExclusao = "" ;
   this.A10048AssociadoExcluidoDataHoraExc = gx.date.nullDate() ;
   this.A10058AssociadoExcluidoUsuarioAlt = "" ;
   this.A10047AssociadoExcluidoDataHoraAlt = gx.date.nullDate() ;
   this.A9997AssociadoExcProdPrincipalEmpId = "" ;
   this.A9998AssociadoExcProdPrincipalId = 0 ;
   this.A10061AssociadoExcProdPrincipalDesc = "" ;
   this.Events = {"e11en750_client": ["ENTER", true] ,"e12en750_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_9997_9998", [139,144]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tassociadoexcluido());
