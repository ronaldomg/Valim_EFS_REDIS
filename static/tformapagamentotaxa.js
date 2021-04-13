/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:38:35.22
*/
gx.evt.autoSkip = false;
gx.define('tformapagamentotaxa', false, function () {
   this.ServerClass =  "tformapagamentotaxa" ;
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
   this.Valid_Formapgtotaxaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Formapgtotaxaid",["gx.O.A11278FormaPgtoTaxaId", "gx.num.urlDecimal(gx.O.A11280FormaPagamentoValorTaxa,\'.\',\',\')", "gx.O.A11279FormaPgtoTaxaEmpresaId"],["A11279FormaPgtoTaxaEmpresaId", "A11280FormaPagamentoValorTaxa", "A11281FormaPgtoTaxaDescricao", "Gx_mode", "Z11278FormaPgtoTaxaId", "Z11279FormaPgtoTaxaEmpresaId", "Z11280FormaPagamentoValorTaxa", "Z11281FormaPgtoTaxaDescricao", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Formapgtotaxaempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Formapgtotaxaempresaid",["gx.O.A11279FormaPgtoTaxaEmpresaId", "gx.O.A11278FormaPgtoTaxaId", "gx.O.A11281FormaPgtoTaxaDescricao"],["A11281FormaPgtoTaxaDescricao"]);
      return true;
   }
   this.e11g9826_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12g9826_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54];
   this.GXLastCtrlId =54;
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
   GXValidFnc[37]={fld:"TEXTBLOCKFORMAPGTOTAXAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtotaxaid,isvalid:null,rgrid:[],fld:"FORMAPGTOTAXAID",gxz:"Z11278FormaPgtoTaxaId",gxold:"O11278FormaPgtoTaxaId",gxvar:"A11278FormaPgtoTaxaId",ucs:[],op:[44,54],ip:[44,54,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11278FormaPgtoTaxaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11278FormaPgtoTaxaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FORMAPGTOTAXAID",gx.O.A11278FormaPgtoTaxaId,0)},c2v:function(){gx.O.A11278FormaPgtoTaxaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FORMAPGTOTAXAID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKFORMAPGTOTAXAEMPRESAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtotaxaempresaid,isvalid:null,rgrid:[],fld:"FORMAPGTOTAXAEMPRESAID",gxz:"Z11279FormaPgtoTaxaEmpresaId",gxold:"O11279FormaPgtoTaxaEmpresaId",gxvar:"A11279FormaPgtoTaxaEmpresaId",ucs:[],op:[49],ip:[49,39,44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11279FormaPgtoTaxaEmpresaId=Value},v2z:function(Value){gx.O.Z11279FormaPgtoTaxaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("FORMAPGTOTAXAEMPRESAID",gx.O.A11279FormaPgtoTaxaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11279FormaPgtoTaxaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOTAXAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKFORMAPGTOTAXADESCRICAO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOTAXADESCRICAO",gxz:"Z11281FormaPgtoTaxaDescricao",gxold:"O11281FormaPgtoTaxaDescricao",gxvar:"A11281FormaPgtoTaxaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11281FormaPgtoTaxaDescricao=Value},v2z:function(Value){gx.O.Z11281FormaPgtoTaxaDescricao=Value},v2c:function(){gx.fn.setControlValue("FORMAPGTOTAXADESCRICAO",gx.O.A11281FormaPgtoTaxaDescricao,0)},c2v:function(){gx.O.A11281FormaPgtoTaxaDescricao=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOTAXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKFORMAPAGAMENTOVALORTAXA", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPAGAMENTOVALORTAXA",gxz:"Z11280FormaPagamentoValorTaxa",gxold:"O11280FormaPagamentoValorTaxa",gxvar:"A11280FormaPagamentoValorTaxa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11280FormaPagamentoValorTaxa=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11280FormaPagamentoValorTaxa=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FORMAPAGAMENTOVALORTAXA",gx.O.A11280FormaPagamentoValorTaxa,2,',')},c2v:function(){gx.O.A11280FormaPagamentoValorTaxa=this.val()},val:function(){return gx.fn.getDecimalValue("FORMAPAGAMENTOVALORTAXA",'.',',')},nac:gx.falseFn};
   this.A11278FormaPgtoTaxaId = 0 ;
   this.Z11278FormaPgtoTaxaId = 0 ;
   this.O11278FormaPgtoTaxaId = 0 ;
   this.A11279FormaPgtoTaxaEmpresaId = "" ;
   this.Z11279FormaPgtoTaxaEmpresaId = "" ;
   this.O11279FormaPgtoTaxaEmpresaId = "" ;
   this.A11281FormaPgtoTaxaDescricao = "" ;
   this.Z11281FormaPgtoTaxaDescricao = "" ;
   this.O11281FormaPgtoTaxaDescricao = "" ;
   this.A11280FormaPagamentoValorTaxa = 0 ;
   this.Z11280FormaPagamentoValorTaxa = 0 ;
   this.O11280FormaPagamentoValorTaxa = 0 ;
   this.A11278FormaPgtoTaxaId = 0 ;
   this.A11279FormaPgtoTaxaEmpresaId = "" ;
   this.A11281FormaPgtoTaxaDescricao = "" ;
   this.A11280FormaPagamentoValorTaxa = 0 ;
   this.Events = {"e11g9826_client": ["ENTER", true] ,"e12g9826_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tformapagamentotaxa());
