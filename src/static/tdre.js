/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:25:44.14
*/
gx.evt.autoSkip = false;
gx.define('tdre', false, function () {
   this.ServerClass =  "tdre" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Dreusuario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DREUSUARIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dregrupo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Dregrupo",["gx.O.A908DREUsuario", "gx.O.A909DREGrupo", "gx.O.A919DRETipoGrupo", "gx.O.A920DREDescricao", "gx.O.A921DRETipoImpressao", "gx.num.urlDecimal(gx.O.A904DREPrimeiroValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A905DRESegundoValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A906DRETerceiroValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A907DREQuartoValor,\'.\',\',\')", "gx.O.A927DRENivel"],["A919DRETipoGrupo", "A920DREDescricao", "A921DRETipoImpressao", "A904DREPrimeiroValor", "A905DRESegundoValor", "A906DRETerceiroValor", "A907DREQuartoValor", "A927DRENivel", "Gx_mode", "Z908DREUsuario", "Z909DREGrupo", "Z919DRETipoGrupo", "Z920DREDescricao", "Z921DRETipoImpressao", "Z904DREPrimeiroValor", "Z905DRESegundoValor", "Z906DRETerceiroValor", "Z907DREQuartoValor", "Z927DRENivel", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e1125118_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e1225118_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1325118_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,61,70,72];
   this.GXLastCtrlId =72;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dreusuario,isvalid:null,rgrid:[],fld:"DREUSUARIO",gxz:"Z908DREUsuario",gxold:"O908DREUsuario",gxvar:"A908DREUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A908DREUsuario=Value},v2z:function(Value){gx.O.Z908DREUsuario=Value},v2c:function(){gx.fn.setControlValue("DREUSUARIO",gx.O.A908DREUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A908DREUsuario=this.val()},val:function(){return gx.fn.getControlValue("DREUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dregrupo,isvalid:null,rgrid:[],fld:"DREGRUPO",gxz:"Z909DREGrupo",gxold:"O909DREGrupo",gxvar:"A909DREGrupo",ucs:[],op:[60,55,50,45,40,35,30,25],ip:[60,55,50,45,40,35,30,25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A909DREGrupo=Value},v2z:function(Value){gx.O.Z909DREGrupo=Value},v2c:function(){gx.fn.setControlValue("DREGRUPO",gx.O.A909DREGrupo,0)},c2v:function(){gx.O.A909DREGrupo=this.val()},val:function(){return gx.fn.getControlValue("DREGRUPO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DRETIPOGRUPO",gxz:"Z919DRETipoGrupo",gxold:"O919DRETipoGrupo",gxvar:"A919DRETipoGrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A919DRETipoGrupo=Value},v2z:function(Value){gx.O.Z919DRETipoGrupo=Value},v2c:function(){gx.fn.setControlValue("DRETIPOGRUPO",gx.O.A919DRETipoGrupo,0)},c2v:function(){gx.O.A919DRETipoGrupo=this.val()},val:function(){return gx.fn.getControlValue("DRETIPOGRUPO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:65,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DREDESCRICAO",gxz:"Z920DREDescricao",gxold:"O920DREDescricao",gxvar:"A920DREDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A920DREDescricao=Value},v2z:function(Value){gx.O.Z920DREDescricao=Value},v2c:function(){gx.fn.setControlValue("DREDESCRICAO",gx.O.A920DREDescricao,0)},c2v:function(){gx.O.A920DREDescricao=this.val()},val:function(){return gx.fn.getControlValue("DREDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DRETIPOIMPRESSAO",gxz:"Z921DRETipoImpressao",gxold:"O921DRETipoImpressao",gxvar:"A921DRETipoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A921DRETipoImpressao=Value},v2z:function(Value){gx.O.Z921DRETipoImpressao=Value},v2c:function(){gx.fn.setControlValue("DRETIPOIMPRESSAO",gx.O.A921DRETipoImpressao,0)},c2v:function(){gx.O.A921DRETipoImpressao=this.val()},val:function(){return gx.fn.getControlValue("DRETIPOIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DREPRIMEIROVALOR",gxz:"Z904DREPrimeiroValor",gxold:"O904DREPrimeiroValor",gxvar:"A904DREPrimeiroValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A904DREPrimeiroValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z904DREPrimeiroValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DREPRIMEIROVALOR",gx.O.A904DREPrimeiroValor,2,',')},c2v:function(){gx.O.A904DREPrimeiroValor=this.val()},val:function(){return gx.fn.getDecimalValue("DREPRIMEIROVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DRESEGUNDOVALOR",gxz:"Z905DRESegundoValor",gxold:"O905DRESegundoValor",gxvar:"A905DRESegundoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A905DRESegundoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z905DRESegundoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DRESEGUNDOVALOR",gx.O.A905DRESegundoValor,2,',')},c2v:function(){gx.O.A905DRESegundoValor=this.val()},val:function(){return gx.fn.getDecimalValue("DRESEGUNDOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DRETERCEIROVALOR",gxz:"Z906DRETerceiroValor",gxold:"O906DRETerceiroValor",gxvar:"A906DRETerceiroValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A906DRETerceiroValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z906DRETerceiroValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DRETERCEIROVALOR",gx.O.A906DRETerceiroValor,2,',')},c2v:function(){gx.O.A906DRETerceiroValor=this.val()},val:function(){return gx.fn.getDecimalValue("DRETERCEIROVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DREQUARTOVALOR",gxz:"Z907DREQuartoValor",gxold:"O907DREQuartoValor",gxvar:"A907DREQuartoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A907DREQuartoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z907DREQuartoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DREQUARTOVALOR",gx.O.A907DREQuartoValor,2,',')},c2v:function(){gx.O.A907DREQuartoValor=this.val()},val:function(){return gx.fn.getDecimalValue("DREQUARTOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:13,dec:0,sign:false,pic:"ZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DRENIVEL",gxz:"Z927DRENivel",gxold:"O927DRENivel",gxvar:"A927DRENivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A927DRENivel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z927DRENivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DRENIVEL",gx.O.A927DRENivel,0)},c2v:function(){gx.O.A927DRENivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DRENIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV15AcessoSistemaSequencia",gxold:"OV15AcessoSistemaSequencia",gxvar:"AV15AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV15AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   this.A908DREUsuario = "" ;
   this.Z908DREUsuario = "" ;
   this.O908DREUsuario = "" ;
   this.A909DREGrupo = "" ;
   this.Z909DREGrupo = "" ;
   this.O909DREGrupo = "" ;
   this.A919DRETipoGrupo = "" ;
   this.Z919DRETipoGrupo = "" ;
   this.O919DRETipoGrupo = "" ;
   this.A920DREDescricao = "" ;
   this.Z920DREDescricao = "" ;
   this.O920DREDescricao = "" ;
   this.A921DRETipoImpressao = "" ;
   this.Z921DRETipoImpressao = "" ;
   this.O921DRETipoImpressao = "" ;
   this.A904DREPrimeiroValor = 0 ;
   this.Z904DREPrimeiroValor = 0 ;
   this.O904DREPrimeiroValor = 0 ;
   this.A905DRESegundoValor = 0 ;
   this.Z905DRESegundoValor = 0 ;
   this.O905DRESegundoValor = 0 ;
   this.A906DRETerceiroValor = 0 ;
   this.Z906DRETerceiroValor = 0 ;
   this.O906DRETerceiroValor = 0 ;
   this.A907DREQuartoValor = 0 ;
   this.Z907DREQuartoValor = 0 ;
   this.O907DREQuartoValor = 0 ;
   this.A927DRENivel = 0 ;
   this.Z927DRENivel = 0 ;
   this.O927DRENivel = 0 ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.ZV15AcessoSistemaSequencia = 0 ;
   this.OV15AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A908DREUsuario = "" ;
   this.A909DREGrupo = "" ;
   this.A919DRETipoGrupo = "" ;
   this.A920DREDescricao = "" ;
   this.A921DRETipoImpressao = "" ;
   this.A904DREPrimeiroValor = 0 ;
   this.A905DRESegundoValor = 0 ;
   this.A906DRETerceiroValor = 0 ;
   this.A907DREQuartoValor = 0 ;
   this.A927DRENivel = 0 ;
   this.Events = {"e1225118_client": ["ENTER", true] ,"e1325118_client": ["CANCEL", true] ,"e1125118_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdre());
