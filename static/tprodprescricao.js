/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:55.80
*/
gx.evt.autoSkip = false;
gx.define('tprodprescricao', false, function () {
   this.ServerClass =  "tprodprescricao" ;
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
   this.Valid_Sequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sequencia",["gx.O.A10508Sequencia", "gx.O.A10510Codigo", "gx.num.urlDecimal(gx.O.A10511Quantidade,\'.\',\',\')", "gx.O.A10509Observacao"],["A10510Codigo", "A10511Quantidade", "A10509Observacao", "Gx_mode", "Z10508Sequencia", "Z10510Codigo", "Z10511Quantidade", "Z10509Observacao", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11f7779_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12f7779_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKSEQUENCIA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sequencia,isvalid:null,rgrid:[],fld:"SEQUENCIA",gxz:"Z10508Sequencia",gxold:"O10508Sequencia",gxvar:"A10508Sequencia",ucs:[],op:[54,49,44],ip:[54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10508Sequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10508Sequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SEQUENCIA",gx.O.A10508Sequencia,0)},c2v:function(){gx.O.A10508Sequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCODIGO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CODIGO",gxz:"Z10510Codigo",gxold:"O10510Codigo",gxvar:"A10510Codigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10510Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10510Codigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CODIGO",gx.O.A10510Codigo,0)},c2v:function(){gx.O.A10510Codigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKQUANTIDADE", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"QUANTIDADE",gxz:"Z10511Quantidade",gxold:"O10511Quantidade",gxvar:"A10511Quantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10511Quantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10511Quantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("QUANTIDADE",gx.O.A10511Quantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10511Quantidade=this.val()},val:function(){return gx.fn.getDecimalValue("QUANTIDADE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKOBSERVACAO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:500,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAO",gxz:"Z10509Observacao",gxold:"O10509Observacao",gxvar:"A10509Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10509Observacao=Value},v2z:function(Value){gx.O.Z10509Observacao=Value},v2c:function(){gx.fn.setControlValue("OBSERVACAO",gx.O.A10509Observacao,0)},c2v:function(){gx.O.A10509Observacao=this.val()},val:function(){return gx.fn.getControlValue("OBSERVACAO")},nac:gx.falseFn};
   this.A10508Sequencia = 0 ;
   this.Z10508Sequencia = 0 ;
   this.O10508Sequencia = 0 ;
   this.A10510Codigo = 0 ;
   this.Z10510Codigo = 0 ;
   this.O10510Codigo = 0 ;
   this.A10511Quantidade = 0 ;
   this.Z10511Quantidade = 0 ;
   this.O10511Quantidade = 0 ;
   this.A10509Observacao = "" ;
   this.Z10509Observacao = "" ;
   this.O10509Observacao = "" ;
   this.A10508Sequencia = 0 ;
   this.A10510Codigo = 0 ;
   this.A10511Quantidade = 0 ;
   this.A10509Observacao = "" ;
   this.Events = {"e11f7779_client": ["ENTER", true] ,"e12f7779_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tprodprescricao());
