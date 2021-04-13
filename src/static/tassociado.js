/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:24:10.9
*/
gx.evt.autoSkip = false;
gx.define('tassociado', false, function () {
   this.ServerClass =  "tassociado" ;
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
      this.A10118AssociadoPessoaEndereco=gx.fn.getControlValue("ASSOCIADOPESSOAENDERECO") ;
      this.A10119AssociadoPessoaNumeroEnd=gx.fn.getIntegerValue("ASSOCIADOPESSOANUMEROEND",'.') ;
      this.A10120AssociadoPessoaTelefone=gx.fn.getControlValue("ASSOCIADOPESSOATELEFONE") ;
      this.A10122AssociadoPessoaCNPJ=gx.fn.getControlValue("ASSOCIADOPESSOACNPJ") ;
      this.A10121AssociadoPessoaCPF=gx.fn.getControlValue("ASSOCIADOPESSOACPF") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Associadopessoaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOPESSOAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadopessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Associadopessoaid",["gx.O.A10114AssociadoPessoaEmpId", "gx.O.A10115AssociadoPessoaId", 'gx.date.urlDate(gx.O.A10041AssociadoDataFiliacao,"DMY4")', 'gx.date.urlDate(gx.O.A10042AssociadoDataFundacao,"DMY4")', "gx.O.A10069AssociadoSenha", "gx.O.A10062AssociadoPorte", "gx.O.A10064AssociadoQtdeFuncionarios", "gx.O.A10071AssociadoSnFaturamento", "gx.O.A10072AssociadoSnFiliado", "gx.O.A10073AssociadoSnGerarBoleto", "gx.O.A10075AssociadoUsuarioSCPC", "gx.O.A10070AssociadoSenhaSCPC", "gx.O.A10074AssociadoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A10043AssociadoDataHoraAlt,"DMY4")', "gx.O.A9988AssociadoProdutoPrincipalEmpId", "gx.O.A9989AssociadoProdutoPrincipalId", "gx.O.A10116AssociadoPessoaFantasia", "gx.O.A10117AssociadoPessoaRazaoSocial", "gx.O.A10118AssociadoPessoaEndereco", "gx.O.A10119AssociadoPessoaNumeroEnd", "gx.O.A10120AssociadoPessoaTelefone", "gx.O.A10122AssociadoPessoaCNPJ", "gx.O.A10121AssociadoPessoaCPF"],["A10041AssociadoDataFiliacao", "A10042AssociadoDataFundacao", "A10069AssociadoSenha", "A10062AssociadoPorte", "A10064AssociadoQtdeFuncionarios", "A10071AssociadoSnFaturamento", "A10072AssociadoSnFiliado", "A10073AssociadoSnGerarBoleto", "A10075AssociadoUsuarioSCPC", "A10070AssociadoSenhaSCPC", "A10074AssociadoUsuarioAlt", "A10043AssociadoDataHoraAlt", "A9988AssociadoProdutoPrincipalEmpId", "A9989AssociadoProdutoPrincipalId", "A10116AssociadoPessoaFantasia", "A10117AssociadoPessoaRazaoSocial", "A10118AssociadoPessoaEndereco", "A10119AssociadoPessoaNumeroEnd", "A10120AssociadoPessoaTelefone", "A10122AssociadoPessoaCNPJ", "A10121AssociadoPessoaCPF", "A10063AssociadoProdutoPrincipalDesc", "Gx_mode", "Z10114AssociadoPessoaEmpId", "Z10115AssociadoPessoaId", "Z10041AssociadoDataFiliacao", "Z10042AssociadoDataFundacao", "Z10069AssociadoSenha", "Z10062AssociadoPorte", "Z10064AssociadoQtdeFuncionarios", "Z10071AssociadoSnFaturamento", "Z10072AssociadoSnFiliado", "Z10073AssociadoSnGerarBoleto", "Z10075AssociadoUsuarioSCPC", "Z10070AssociadoSenhaSCPC", "Z10074AssociadoUsuarioAlt", "Z10043AssociadoDataHoraAlt", "Z9988AssociadoProdutoPrincipalEmpId", "Z9989AssociadoProdutoPrincipalId", "Z10116AssociadoPessoaFantasia", "Z10117AssociadoPessoaRazaoSocial", "Z10118AssociadoPessoaEndereco", "Z10119AssociadoPessoaNumeroEnd", "Z10120AssociadoPessoaTelefone", "Z10122AssociadoPessoaCNPJ", "Z10121AssociadoPessoaCPF", "Z10063AssociadoProdutoPrincipalDesc", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Associadoprodutoprincipalempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOPRODUTOPRINCIPALEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoprodutoprincipalid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Associadoprodutoprincipalid",["gx.O.A9988AssociadoProdutoPrincipalEmpId", "gx.O.A9989AssociadoProdutoPrincipalId", "gx.O.A10063AssociadoProdutoPrincipalDesc"],["A10063AssociadoProdutoPrincipalDesc"]);
      return true;
   }
   this.e11el759_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12el759_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,29,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,103,105,108,110,113,115,118,120,123,125,128,130,136,137];
   this.GXLastCtrlId =137;
   GXValidFnc[3]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[6]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[9]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[11]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[13]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[15]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST",grid:0};
   GXValidFnc[17]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[19]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[21]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[23]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[25]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[28]={fld:"GROUPDATA",grid:0};
   GXValidFnc[29]={fld:"TABLE1",grid:0};
   GXValidFnc[35]={fld:"TABLE2",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCKASSOCIADOPESSOAEMPID", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadopessoaempid,isvalid:null,rgrid:[],fld:"ASSOCIADOPESSOAEMPID",gxz:"Z10114AssociadoPessoaEmpId",gxold:"O10114AssociadoPessoaEmpId",gxvar:"A10114AssociadoPessoaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10114AssociadoPessoaEmpId=Value},v2z:function(Value){gx.O.Z10114AssociadoPessoaEmpId=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOPESSOAEMPID",gx.O.A10114AssociadoPessoaEmpId,0)},c2v:function(){gx.O.A10114AssociadoPessoaEmpId=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOPESSOAEMPID")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCKASSOCIADOPESSOAID", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadopessoaid,isvalid:null,rgrid:[],fld:"ASSOCIADOPESSOAID",gxz:"Z10115AssociadoPessoaId",gxold:"O10115AssociadoPessoaId",gxvar:"A10115AssociadoPessoaId",ucs:[],op:[55,50,125,120,115,110,105,100,95,90,85,80,75,70,65,60],ip:[55,50,125,120,115,110,105,100,95,90,85,80,75,70,65,60,45,40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10115AssociadoPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10115AssociadoPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOPESSOAID",gx.O.A10115AssociadoPessoaId,0)},c2v:function(){gx.O.A10115AssociadoPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCKASSOCIADOPESSOAFANTASIA", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOPESSOAFANTASIA",gxz:"Z10116AssociadoPessoaFantasia",gxold:"O10116AssociadoPessoaFantasia",gxvar:"A10116AssociadoPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10116AssociadoPessoaFantasia=Value},v2z:function(Value){gx.O.Z10116AssociadoPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOPESSOAFANTASIA",gx.O.A10116AssociadoPessoaFantasia,0)},c2v:function(){gx.O.A10116AssociadoPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCKASSOCIADOPESSOARAZAOSOCIAL", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOPESSOARAZAOSOCIAL",gxz:"Z10117AssociadoPessoaRazaoSocial",gxold:"O10117AssociadoPessoaRazaoSocial",gxvar:"A10117AssociadoPessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10117AssociadoPessoaRazaoSocial=Value},v2z:function(Value){gx.O.Z10117AssociadoPessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOPESSOARAZAOSOCIAL",gx.O.A10117AssociadoPessoaRazaoSocial,0)},c2v:function(){gx.O.A10117AssociadoPessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCKASSOCIADODATAFILIACAO", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADODATAFILIACAO",gxz:"Z10041AssociadoDataFiliacao",gxold:"O10041AssociadoDataFiliacao",gxvar:"A10041AssociadoDataFiliacao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10041AssociadoDataFiliacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10041AssociadoDataFiliacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADODATAFILIACAO",gx.O.A10041AssociadoDataFiliacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10041AssociadoDataFiliacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ASSOCIADODATAFILIACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCKASSOCIADODATAFUNDACAO", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADODATAFUNDACAO",gxz:"Z10042AssociadoDataFundacao",gxold:"O10042AssociadoDataFundacao",gxvar:"A10042AssociadoDataFundacao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10042AssociadoDataFundacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10042AssociadoDataFundacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADODATAFUNDACAO",gx.O.A10042AssociadoDataFundacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10042AssociadoDataFundacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ASSOCIADODATAFUNDACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCKASSOCIADOSENHA", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOSENHA",gxz:"Z10069AssociadoSenha",gxold:"O10069AssociadoSenha",gxvar:"A10069AssociadoSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10069AssociadoSenha=Value},v2z:function(Value){gx.O.Z10069AssociadoSenha=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOSENHA",gx.O.A10069AssociadoSenha,0)},c2v:function(){gx.O.A10069AssociadoSenha=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOSENHA")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCKASSOCIADOPORTE", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOPORTE",gxz:"Z10062AssociadoPorte",gxold:"O10062AssociadoPorte",gxvar:"A10062AssociadoPorte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10062AssociadoPorte=Value},v2z:function(Value){gx.O.Z10062AssociadoPorte=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOPORTE",gx.O.A10062AssociadoPorte,0)},c2v:function(){gx.O.A10062AssociadoPorte=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOPORTE")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCKASSOCIADOQTDEFUNCIONARIOS", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOQTDEFUNCIONARIOS",gxz:"Z10064AssociadoQtdeFuncionarios",gxold:"O10064AssociadoQtdeFuncionarios",gxvar:"A10064AssociadoQtdeFuncionarios",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10064AssociadoQtdeFuncionarios=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10064AssociadoQtdeFuncionarios=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOQTDEFUNCIONARIOS",gx.O.A10064AssociadoQtdeFuncionarios,0)},c2v:function(){gx.O.A10064AssociadoQtdeFuncionarios=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOQTDEFUNCIONARIOS",'.')},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCKASSOCIADOSNFATURAMENTO", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOSNFATURAMENTO",gxz:"Z10071AssociadoSnFaturamento",gxold:"O10071AssociadoSnFaturamento",gxvar:"A10071AssociadoSnFaturamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10071AssociadoSnFaturamento=Value},v2z:function(Value){gx.O.Z10071AssociadoSnFaturamento=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOSNFATURAMENTO",gx.O.A10071AssociadoSnFaturamento,0)},c2v:function(){gx.O.A10071AssociadoSnFaturamento=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOSNFATURAMENTO")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCKASSOCIADOSNFILIADO", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOSNFILIADO",gxz:"Z10072AssociadoSnFiliado",gxold:"O10072AssociadoSnFiliado",gxvar:"A10072AssociadoSnFiliado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10072AssociadoSnFiliado=Value},v2z:function(Value){gx.O.Z10072AssociadoSnFiliado=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOSNFILIADO",gx.O.A10072AssociadoSnFiliado,0)},c2v:function(){gx.O.A10072AssociadoSnFiliado=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOSNFILIADO")},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TEXTBLOCKASSOCIADOSNGERARBOLETO", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOSNGERARBOLETO",gxz:"Z10073AssociadoSnGerarBoleto",gxold:"O10073AssociadoSnGerarBoleto",gxvar:"A10073AssociadoSnGerarBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10073AssociadoSnGerarBoleto=Value},v2z:function(Value){gx.O.Z10073AssociadoSnGerarBoleto=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOSNGERARBOLETO",gx.O.A10073AssociadoSnGerarBoleto,0)},c2v:function(){gx.O.A10073AssociadoSnGerarBoleto=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOSNGERARBOLETO")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCKASSOCIADOUSUARIOSCPC", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOUSUARIOSCPC",gxz:"Z10075AssociadoUsuarioSCPC",gxold:"O10075AssociadoUsuarioSCPC",gxvar:"A10075AssociadoUsuarioSCPC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10075AssociadoUsuarioSCPC=Value},v2z:function(Value){gx.O.Z10075AssociadoUsuarioSCPC=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOUSUARIOSCPC",gx.O.A10075AssociadoUsuarioSCPC,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10075AssociadoUsuarioSCPC=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOUSUARIOSCPC")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[103]={fld:"TEXTBLOCKASSOCIADOSENHASCPC", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOSENHASCPC",gxz:"Z10070AssociadoSenhaSCPC",gxold:"O10070AssociadoSenhaSCPC",gxvar:"A10070AssociadoSenhaSCPC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10070AssociadoSenhaSCPC=Value},v2z:function(Value){gx.O.Z10070AssociadoSenhaSCPC=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOSENHASCPC",gx.O.A10070AssociadoSenhaSCPC,0)},c2v:function(){gx.O.A10070AssociadoSenhaSCPC=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOSENHASCPC")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCKASSOCIADOUSUARIOALT", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOUSUARIOALT",gxz:"Z10074AssociadoUsuarioAlt",gxold:"O10074AssociadoUsuarioAlt",gxvar:"A10074AssociadoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10074AssociadoUsuarioAlt=Value},v2z:function(Value){gx.O.Z10074AssociadoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOUSUARIOALT",gx.O.A10074AssociadoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10074AssociadoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={fld:"TEXTBLOCKASSOCIADODATAHORAALT", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADODATAHORAALT",gxz:"Z10043AssociadoDataHoraAlt",gxold:"O10043AssociadoDataHoraAlt",gxvar:"A10043AssociadoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10043AssociadoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10043AssociadoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADODATAHORAALT",gx.O.A10043AssociadoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10043AssociadoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ASSOCIADODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[118]={fld:"TEXTBLOCKASSOCIADOPRODUTOPRINCIPALEMPID", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoprodutoprincipalempid,isvalid:null,rgrid:[],fld:"ASSOCIADOPRODUTOPRINCIPALEMPID",gxz:"Z9988AssociadoProdutoPrincipalEmpId",gxold:"O9988AssociadoProdutoPrincipalEmpId",gxvar:"A9988AssociadoProdutoPrincipalEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9988AssociadoProdutoPrincipalEmpId=Value},v2z:function(Value){gx.O.Z9988AssociadoProdutoPrincipalEmpId=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOPRODUTOPRINCIPALEMPID",gx.O.A9988AssociadoProdutoPrincipalEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9988AssociadoProdutoPrincipalEmpId=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOPRODUTOPRINCIPALEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[123]={fld:"TEXTBLOCKASSOCIADOPRODUTOPRINCIPALID", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoprodutoprincipalid,isvalid:null,rgrid:[],fld:"ASSOCIADOPRODUTOPRINCIPALID",gxz:"Z9989AssociadoProdutoPrincipalId",gxold:"O9989AssociadoProdutoPrincipalId",gxvar:"A9989AssociadoProdutoPrincipalId",ucs:[],op:[130],ip:[130,125,120],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9989AssociadoProdutoPrincipalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9989AssociadoProdutoPrincipalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOPRODUTOPRINCIPALID",gx.O.A9989AssociadoProdutoPrincipalId,0)},c2v:function(){gx.O.A9989AssociadoProdutoPrincipalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOPRODUTOPRINCIPALID",'.')},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCKASSOCIADOPRODUTOPRINCIPALDESC", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOPRODUTOPRINCIPALDESC",gxz:"Z10063AssociadoProdutoPrincipalDesc",gxold:"O10063AssociadoProdutoPrincipalDesc",gxvar:"A10063AssociadoProdutoPrincipalDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10063AssociadoProdutoPrincipalDesc=Value},v2z:function(Value){gx.O.Z10063AssociadoProdutoPrincipalDesc=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOPRODUTOPRINCIPALDESC",gx.O.A10063AssociadoProdutoPrincipalDesc,0)},c2v:function(){gx.O.A10063AssociadoProdutoPrincipalDesc=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOPRODUTOPRINCIPALDESC")},nac:gx.falseFn};
   GXValidFnc[136]={fld:"PROMPT_10114_10115",grid:759};
   GXValidFnc[137]={fld:"PROMPT_9988_9989",grid:759};
   this.A10114AssociadoPessoaEmpId = "" ;
   this.Z10114AssociadoPessoaEmpId = "" ;
   this.O10114AssociadoPessoaEmpId = "" ;
   this.A10115AssociadoPessoaId = 0 ;
   this.Z10115AssociadoPessoaId = 0 ;
   this.O10115AssociadoPessoaId = 0 ;
   this.A10116AssociadoPessoaFantasia = "" ;
   this.Z10116AssociadoPessoaFantasia = "" ;
   this.O10116AssociadoPessoaFantasia = "" ;
   this.A10117AssociadoPessoaRazaoSocial = "" ;
   this.Z10117AssociadoPessoaRazaoSocial = "" ;
   this.O10117AssociadoPessoaRazaoSocial = "" ;
   this.A10041AssociadoDataFiliacao = gx.date.nullDate() ;
   this.Z10041AssociadoDataFiliacao = gx.date.nullDate() ;
   this.O10041AssociadoDataFiliacao = gx.date.nullDate() ;
   this.A10042AssociadoDataFundacao = gx.date.nullDate() ;
   this.Z10042AssociadoDataFundacao = gx.date.nullDate() ;
   this.O10042AssociadoDataFundacao = gx.date.nullDate() ;
   this.A10069AssociadoSenha = "" ;
   this.Z10069AssociadoSenha = "" ;
   this.O10069AssociadoSenha = "" ;
   this.A10062AssociadoPorte = "" ;
   this.Z10062AssociadoPorte = "" ;
   this.O10062AssociadoPorte = "" ;
   this.A10064AssociadoQtdeFuncionarios = 0 ;
   this.Z10064AssociadoQtdeFuncionarios = 0 ;
   this.O10064AssociadoQtdeFuncionarios = 0 ;
   this.A10071AssociadoSnFaturamento = "" ;
   this.Z10071AssociadoSnFaturamento = "" ;
   this.O10071AssociadoSnFaturamento = "" ;
   this.A10072AssociadoSnFiliado = "" ;
   this.Z10072AssociadoSnFiliado = "" ;
   this.O10072AssociadoSnFiliado = "" ;
   this.A10073AssociadoSnGerarBoleto = "" ;
   this.Z10073AssociadoSnGerarBoleto = "" ;
   this.O10073AssociadoSnGerarBoleto = "" ;
   this.A10075AssociadoUsuarioSCPC = "" ;
   this.Z10075AssociadoUsuarioSCPC = "" ;
   this.O10075AssociadoUsuarioSCPC = "" ;
   this.A10070AssociadoSenhaSCPC = "" ;
   this.Z10070AssociadoSenhaSCPC = "" ;
   this.O10070AssociadoSenhaSCPC = "" ;
   this.A10074AssociadoUsuarioAlt = "" ;
   this.Z10074AssociadoUsuarioAlt = "" ;
   this.O10074AssociadoUsuarioAlt = "" ;
   this.A10043AssociadoDataHoraAlt = gx.date.nullDate() ;
   this.Z10043AssociadoDataHoraAlt = gx.date.nullDate() ;
   this.O10043AssociadoDataHoraAlt = gx.date.nullDate() ;
   this.A9988AssociadoProdutoPrincipalEmpId = "" ;
   this.Z9988AssociadoProdutoPrincipalEmpId = "" ;
   this.O9988AssociadoProdutoPrincipalEmpId = "" ;
   this.A9989AssociadoProdutoPrincipalId = 0 ;
   this.Z9989AssociadoProdutoPrincipalId = 0 ;
   this.O9989AssociadoProdutoPrincipalId = 0 ;
   this.A10063AssociadoProdutoPrincipalDesc = "" ;
   this.Z10063AssociadoProdutoPrincipalDesc = "" ;
   this.O10063AssociadoProdutoPrincipalDesc = "" ;
   this.A10114AssociadoPessoaEmpId = "" ;
   this.A10115AssociadoPessoaId = 0 ;
   this.A10116AssociadoPessoaFantasia = "" ;
   this.A10117AssociadoPessoaRazaoSocial = "" ;
   this.A10118AssociadoPessoaEndereco = "" ;
   this.A10119AssociadoPessoaNumeroEnd = 0 ;
   this.A10120AssociadoPessoaTelefone = "" ;
   this.A10122AssociadoPessoaCNPJ = "" ;
   this.A10121AssociadoPessoaCPF = "" ;
   this.A10041AssociadoDataFiliacao = gx.date.nullDate() ;
   this.A10042AssociadoDataFundacao = gx.date.nullDate() ;
   this.A10069AssociadoSenha = "" ;
   this.A10062AssociadoPorte = "" ;
   this.A10064AssociadoQtdeFuncionarios = 0 ;
   this.A10071AssociadoSnFaturamento = "" ;
   this.A10072AssociadoSnFiliado = "" ;
   this.A10073AssociadoSnGerarBoleto = "" ;
   this.A10075AssociadoUsuarioSCPC = "" ;
   this.A10070AssociadoSenhaSCPC = "" ;
   this.A10074AssociadoUsuarioAlt = "" ;
   this.A10043AssociadoDataHoraAlt = gx.date.nullDate() ;
   this.A9988AssociadoProdutoPrincipalEmpId = "" ;
   this.A9989AssociadoProdutoPrincipalId = 0 ;
   this.A10063AssociadoProdutoPrincipalDesc = "" ;
   this.Events = {"e11el759_client": ["ENTER", true] ,"e12el759_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_10114_10115", [40,45]);
   this.setPrompt("PROMPT_9988_9989", [120,125]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("A10118AssociadoPessoaEndereco", "ASSOCIADOPESSOAENDERECO", 0, "svchar");
   this.setVCMap("A10119AssociadoPessoaNumeroEnd", "ASSOCIADOPESSOANUMEROEND", 0, "int");
   this.setVCMap("A10120AssociadoPessoaTelefone", "ASSOCIADOPESSOATELEFONE", 0, "svchar");
   this.setVCMap("A10122AssociadoPessoaCNPJ", "ASSOCIADOPESSOACNPJ", 0, "char");
   this.setVCMap("A10121AssociadoPessoaCPF", "ASSOCIADOPESSOACPF", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tassociado());
