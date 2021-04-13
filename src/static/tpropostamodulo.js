/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:12.21
*/
gx.evt.autoSkip = false;
gx.define('tpropostamodulo', false, function () {
   this.ServerClass =  "tpropostamodulo" ;
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
   this.Valid_Propostaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROPOSTAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Propostaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Propostaid",["gx.O.A8341PropostaEmpresaId", "gx.O.A8342PropostaId"],[]);
      return true;
   }
   this.Valid_Propostamoduloid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Propostamoduloid",["gx.O.A8341PropostaEmpresaId", "gx.O.A8342PropostaId", "gx.O.A8349PropostaModuloId", "gx.O.A8343PropostaModuloOrdem", "gx.num.urlDecimal(gx.O.A8344PropostaModuloValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8345PropostaModuloPCDesconto,\'.\',\',\')", "gx.O.A8346PropostaModuloBonus", "gx.num.urlDecimal(gx.O.A9180PropostaModuloPCDescontoManual,\'.\',\',\')", "gx.O.A8347PropostaModuloUsuarioAlt", 'gx.date.urlDateTime(gx.O.A8348PropostaModuloDataHoraAlt,"DMY4")', "gx.O.A8312ModuloEmpresaId", "gx.O.A8269ModuloId"],["A8312ModuloEmpresaId", "A8269ModuloId", "A8343PropostaModuloOrdem", "A8344PropostaModuloValor", "A8345PropostaModuloPCDesconto", "A8346PropostaModuloBonus", "A9180PropostaModuloPCDescontoManual", "A8347PropostaModuloUsuarioAlt", "A8348PropostaModuloDataHoraAlt", "A8272ModuloNome", "A8271ModuloSigla", "Gx_mode", "Z8341PropostaEmpresaId", "Z8342PropostaId", "Z8349PropostaModuloId", "Z8312ModuloEmpresaId", "Z8269ModuloId", "Z8343PropostaModuloOrdem", "Z8344PropostaModuloValor", "Z8345PropostaModuloPCDesconto", "Z8346PropostaModuloBonus", "Z9180PropostaModuloPCDescontoManual", "Z8347PropostaModuloUsuarioAlt", "Z8348PropostaModuloDataHoraAlt", "Z8272ModuloNome", "Z8271ModuloSigla", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Moduloempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODULOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Moduloid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Moduloid",["gx.O.A8312ModuloEmpresaId", "gx.O.A8269ModuloId", "gx.O.A8272ModuloNome", "gx.O.A8271ModuloSigla"],["A8272ModuloNome", "A8271ModuloSigla"]);
      return true;
   }
   this.e11bt619_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12bt619_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13bt619_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,81,90,92,94,95];
   this.GXLastCtrlId =95;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Propostaempresaid,isvalid:null,rgrid:[],fld:"PROPOSTAEMPRESAID",gxz:"Z8341PropostaEmpresaId",gxold:"O8341PropostaEmpresaId",gxvar:"A8341PropostaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8341PropostaEmpresaId=Value},v2z:function(Value){gx.O.Z8341PropostaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PROPOSTAEMPRESAID",gx.O.A8341PropostaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8341PropostaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PROPOSTAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Propostaid,isvalid:null,rgrid:[],fld:"PROPOSTAID",gxz:"Z8342PropostaId",gxold:"O8342PropostaId",gxvar:"A8342PropostaId",ucs:[],op:[],ip:[19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8342PropostaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8342PropostaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTAID",gx.O.A8342PropostaId,0)},c2v:function(){gx.O.A8342PropostaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROPOSTAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Propostamoduloid,isvalid:null,rgrid:[],fld:"PROPOSTAMODULOID",gxz:"Z8349PropostaModuloId",gxold:"O8349PropostaModuloId",gxvar:"A8349PropostaModuloId",ucs:[],op:[35,30,80,75,70,65,60,55,50],ip:[35,30,80,75,70,65,60,55,50,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8349PropostaModuloId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8349PropostaModuloId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTAMODULOID",gx.O.A8349PropostaModuloId,0)},c2v:function(){gx.O.A8349PropostaModuloId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROPOSTAMODULOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Moduloempresaid,isvalid:null,rgrid:[],fld:"MODULOEMPRESAID",gxz:"Z8312ModuloEmpresaId",gxold:"O8312ModuloEmpresaId",gxvar:"A8312ModuloEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8312ModuloEmpresaId=Value},v2z:function(Value){gx.O.Z8312ModuloEmpresaId=Value},v2c:function(){gx.fn.setControlValue("MODULOEMPRESAID",gx.O.A8312ModuloEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8312ModuloEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("MODULOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Moduloid,isvalid:null,rgrid:[],fld:"MODULOID",gxz:"Z8269ModuloId",gxold:"O8269ModuloId",gxvar:"A8269ModuloId",ucs:[],op:[45,40],ip:[45,40,35,30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8269ModuloId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8269ModuloId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODULOID",gx.O.A8269ModuloId,0)},c2v:function(){gx.O.A8269ModuloId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODULOID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODULONOME",gxz:"Z8272ModuloNome",gxold:"O8272ModuloNome",gxvar:"A8272ModuloNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8272ModuloNome=Value},v2z:function(Value){gx.O.Z8272ModuloNome=Value},v2c:function(){gx.fn.setControlValue("MODULONOME",gx.O.A8272ModuloNome,0)},c2v:function(){gx.O.A8272ModuloNome=this.val()},val:function(){return gx.fn.getControlValue("MODULONOME")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODULOSIGLA",gxz:"Z8271ModuloSigla",gxold:"O8271ModuloSigla",gxvar:"A8271ModuloSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8271ModuloSigla=Value},v2z:function(Value){gx.O.Z8271ModuloSigla=Value},v2c:function(){gx.fn.setControlValue("MODULOSIGLA",gx.O.A8271ModuloSigla,0)},c2v:function(){gx.O.A8271ModuloSigla=this.val()},val:function(){return gx.fn.getControlValue("MODULOSIGLA")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAMODULOORDEM",gxz:"Z8343PropostaModuloOrdem",gxold:"O8343PropostaModuloOrdem",gxvar:"A8343PropostaModuloOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8343PropostaModuloOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8343PropostaModuloOrdem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTAMODULOORDEM",gx.O.A8343PropostaModuloOrdem,0)},c2v:function(){gx.O.A8343PropostaModuloOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROPOSTAMODULOORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAMODULOVALOR",gxz:"Z8344PropostaModuloValor",gxold:"O8344PropostaModuloValor",gxvar:"A8344PropostaModuloValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8344PropostaModuloValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8344PropostaModuloValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PROPOSTAMODULOVALOR",gx.O.A8344PropostaModuloValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8344PropostaModuloValor=this.val()},val:function(){return gx.fn.getDecimalValue("PROPOSTAMODULOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAMODULOPCDESCONTO",gxz:"Z8345PropostaModuloPCDesconto",gxold:"O8345PropostaModuloPCDesconto",gxvar:"A8345PropostaModuloPCDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8345PropostaModuloPCDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8345PropostaModuloPCDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PROPOSTAMODULOPCDESCONTO",gx.O.A8345PropostaModuloPCDesconto,2,',')},c2v:function(){gx.O.A8345PropostaModuloPCDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("PROPOSTAMODULOPCDESCONTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAMODULOBONUS",gxz:"Z8346PropostaModuloBonus",gxold:"O8346PropostaModuloBonus",gxvar:"A8346PropostaModuloBonus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8346PropostaModuloBonus=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8346PropostaModuloBonus=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTAMODULOBONUS",gx.O.A8346PropostaModuloBonus,0)},c2v:function(){gx.O.A8346PropostaModuloBonus=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROPOSTAMODULOBONUS",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAMODULOPCDESCONTOMANUAL",gxz:"Z9180PropostaModuloPCDescontoManual",gxold:"O9180PropostaModuloPCDescontoManual",gxvar:"A9180PropostaModuloPCDescontoManual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9180PropostaModuloPCDescontoManual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9180PropostaModuloPCDescontoManual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PROPOSTAMODULOPCDESCONTOMANUAL",gx.O.A9180PropostaModuloPCDescontoManual,2,',')},c2v:function(){gx.O.A9180PropostaModuloPCDescontoManual=this.val()},val:function(){return gx.fn.getDecimalValue("PROPOSTAMODULOPCDESCONTOMANUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAMODULOUSUARIOALT",gxz:"Z8347PropostaModuloUsuarioAlt",gxold:"O8347PropostaModuloUsuarioAlt",gxvar:"A8347PropostaModuloUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8347PropostaModuloUsuarioAlt=Value},v2z:function(Value){gx.O.Z8347PropostaModuloUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PROPOSTAMODULOUSUARIOALT",gx.O.A8347PropostaModuloUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8347PropostaModuloUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PROPOSTAMODULOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAMODULODATAHORAALT",gxz:"Z8348PropostaModuloDataHoraAlt",gxold:"O8348PropostaModuloDataHoraAlt",gxvar:"A8348PropostaModuloDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8348PropostaModuloDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8348PropostaModuloDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTAMODULODATAHORAALT",gx.O.A8348PropostaModuloDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8348PropostaModuloDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PROPOSTAMODULODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[81]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"BTNHELP",grid:0};
   GXValidFnc[94]={fld:"PROMPT_8341_8342",grid:619};
   GXValidFnc[95]={fld:"PROMPT_8312_8269",grid:619};
   this.A8341PropostaEmpresaId = "" ;
   this.Z8341PropostaEmpresaId = "" ;
   this.O8341PropostaEmpresaId = "" ;
   this.A8342PropostaId = 0 ;
   this.Z8342PropostaId = 0 ;
   this.O8342PropostaId = 0 ;
   this.A8349PropostaModuloId = 0 ;
   this.Z8349PropostaModuloId = 0 ;
   this.O8349PropostaModuloId = 0 ;
   this.A8312ModuloEmpresaId = "" ;
   this.Z8312ModuloEmpresaId = "" ;
   this.O8312ModuloEmpresaId = "" ;
   this.A8269ModuloId = 0 ;
   this.Z8269ModuloId = 0 ;
   this.O8269ModuloId = 0 ;
   this.A8272ModuloNome = "" ;
   this.Z8272ModuloNome = "" ;
   this.O8272ModuloNome = "" ;
   this.A8271ModuloSigla = "" ;
   this.Z8271ModuloSigla = "" ;
   this.O8271ModuloSigla = "" ;
   this.A8343PropostaModuloOrdem = 0 ;
   this.Z8343PropostaModuloOrdem = 0 ;
   this.O8343PropostaModuloOrdem = 0 ;
   this.A8344PropostaModuloValor = 0 ;
   this.Z8344PropostaModuloValor = 0 ;
   this.O8344PropostaModuloValor = 0 ;
   this.A8345PropostaModuloPCDesconto = 0 ;
   this.Z8345PropostaModuloPCDesconto = 0 ;
   this.O8345PropostaModuloPCDesconto = 0 ;
   this.A8346PropostaModuloBonus = 0 ;
   this.Z8346PropostaModuloBonus = 0 ;
   this.O8346PropostaModuloBonus = 0 ;
   this.A9180PropostaModuloPCDescontoManual = 0 ;
   this.Z9180PropostaModuloPCDescontoManual = 0 ;
   this.O9180PropostaModuloPCDescontoManual = 0 ;
   this.A8347PropostaModuloUsuarioAlt = "" ;
   this.Z8347PropostaModuloUsuarioAlt = "" ;
   this.O8347PropostaModuloUsuarioAlt = "" ;
   this.A8348PropostaModuloDataHoraAlt = gx.date.nullDate() ;
   this.Z8348PropostaModuloDataHoraAlt = gx.date.nullDate() ;
   this.O8348PropostaModuloDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8341PropostaEmpresaId = "" ;
   this.A8342PropostaId = 0 ;
   this.A8349PropostaModuloId = 0 ;
   this.A8312ModuloEmpresaId = "" ;
   this.A8269ModuloId = 0 ;
   this.A8272ModuloNome = "" ;
   this.A8271ModuloSigla = "" ;
   this.A8343PropostaModuloOrdem = 0 ;
   this.A8344PropostaModuloValor = 0 ;
   this.A8345PropostaModuloPCDesconto = 0 ;
   this.A8346PropostaModuloBonus = 0 ;
   this.A9180PropostaModuloPCDescontoManual = 0 ;
   this.A8347PropostaModuloUsuarioAlt = "" ;
   this.A8348PropostaModuloDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e12bt619_client": ["ENTER", true] ,"e13bt619_client": ["CANCEL", true] ,"e11bt619_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_8341_8342", [14,19]);
   this.setPrompt("PROMPT_8312_8269", [30,35]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tpropostamodulo());
