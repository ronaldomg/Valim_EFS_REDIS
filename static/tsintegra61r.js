/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:41.90
*/
gx.evt.autoSkip = false;
gx.define('tsintegra61r', false, function () {
   this.ServerClass =  "tsintegra61r" ;
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
   this.Valid_Sintegra61rproduto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRA61RPRODUTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegra61raliquota=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sintegra61raliquota",["gx.O.A8205Sintegra61RProduto", "gx.num.urlDecimal(gx.O.A8206Sintegra61RAliquota,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8202Sintegra61RQuantidade,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8203Sintegra61RValorTotal,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8204Sintegra61RBaseICMS,\'.\',\',\')"],["A8202Sintegra61RQuantidade", "A8203Sintegra61RValorTotal", "A8204Sintegra61RBaseICMS", "Gx_mode", "Z8205Sintegra61RProduto", "Z8206Sintegra61RAliquota", "Z8202Sintegra61RQuantidade", "Z8203Sintegra61RValorTotal", "Z8204Sintegra61RBaseICMS", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11bh605_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12bh605_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13bh605_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,36,45,47];
   this.GXLastCtrlId =47;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra61rproduto,isvalid:null,rgrid:[],fld:"SINTEGRA61RPRODUTO",gxz:"Z8205Sintegra61RProduto",gxold:"O8205Sintegra61RProduto",gxvar:"A8205Sintegra61RProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8205Sintegra61RProduto=Value},v2z:function(Value){gx.O.Z8205Sintegra61RProduto=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA61RPRODUTO",gx.O.A8205Sintegra61RProduto,0)},c2v:function(){gx.O.A8205Sintegra61RProduto=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA61RPRODUTO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"99.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra61raliquota,isvalid:null,rgrid:[],fld:"SINTEGRA61RALIQUOTA",gxz:"Z8206Sintegra61RAliquota",gxold:"O8206Sintegra61RAliquota",gxvar:"A8206Sintegra61RAliquota",ucs:[],op:[35,30,25],ip:[35,30,25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8206Sintegra61RAliquota=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8206Sintegra61RAliquota=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA61RALIQUOTA",gx.O.A8206Sintegra61RAliquota,2,',')},c2v:function(){gx.O.A8206Sintegra61RAliquota=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA61RALIQUOTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:14,dec:3,sign:true,pic:"9999999999.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA61RQUANTIDADE",gxz:"Z8202Sintegra61RQuantidade",gxold:"O8202Sintegra61RQuantidade",gxvar:"A8202Sintegra61RQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8202Sintegra61RQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8202Sintegra61RQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA61RQUANTIDADE",gx.O.A8202Sintegra61RQuantidade,3,',')},c2v:function(){gx.O.A8202Sintegra61RQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA61RQUANTIDADE",'.',',')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"decimal",len:17,dec:2,sign:false,pic:"99999999999999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA61RVALORTOTAL",gxz:"Z8203Sintegra61RValorTotal",gxold:"O8203Sintegra61RValorTotal",gxvar:"A8203Sintegra61RValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8203Sintegra61RValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8203Sintegra61RValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA61RVALORTOTAL",gx.O.A8203Sintegra61RValorTotal,2,',')},c2v:function(){gx.O.A8203Sintegra61RValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA61RVALORTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"decimal",len:17,dec:2,sign:false,pic:"99999999999999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA61RBASEICMS",gxz:"Z8204Sintegra61RBaseICMS",gxold:"O8204Sintegra61RBaseICMS",gxvar:"A8204Sintegra61RBaseICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8204Sintegra61RBaseICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8204Sintegra61RBaseICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA61RBASEICMS",gx.O.A8204Sintegra61RBaseICMS,2,',')},c2v:function(){gx.O.A8204Sintegra61RBaseICMS=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA61RBASEICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   this.A8205Sintegra61RProduto = "" ;
   this.Z8205Sintegra61RProduto = "" ;
   this.O8205Sintegra61RProduto = "" ;
   this.A8206Sintegra61RAliquota = 0 ;
   this.Z8206Sintegra61RAliquota = 0 ;
   this.O8206Sintegra61RAliquota = 0 ;
   this.A8202Sintegra61RQuantidade = 0 ;
   this.Z8202Sintegra61RQuantidade = 0 ;
   this.O8202Sintegra61RQuantidade = 0 ;
   this.A8203Sintegra61RValorTotal = 0 ;
   this.Z8203Sintegra61RValorTotal = 0 ;
   this.O8203Sintegra61RValorTotal = 0 ;
   this.A8204Sintegra61RBaseICMS = 0 ;
   this.Z8204Sintegra61RBaseICMS = 0 ;
   this.O8204Sintegra61RBaseICMS = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8205Sintegra61RProduto = "" ;
   this.A8206Sintegra61RAliquota = 0 ;
   this.A8202Sintegra61RQuantidade = 0 ;
   this.A8203Sintegra61RValorTotal = 0 ;
   this.A8204Sintegra61RBaseICMS = 0 ;
   this.Events = {"e12bh605_client": ["ENTER", true] ,"e13bh605_client": ["CANCEL", true] ,"e11bh605_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsintegra61r());
