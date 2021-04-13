/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:18:4.41
*/
gx.evt.autoSkip = false;
gx.define('tparmrecalculo', false, function () {
   this.ServerClass =  "tparmrecalculo" ;
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
   this.Valid_Parmrecalculodtinicio=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Parmrecalculodtinicio",['gx.date.urlDate(gx.O.A6515ParmRecalculoDtInicio,"DMY4")', "gx.O.A6511ParmRecalculoProdutoEmp", "gx.O.A6512ParmRecalculoProdutoId", "gx.O.A6513ParmRecalculoEmpresaSaida", "gx.O.A6514ParmRecalculoEmpresaEntrada"],["A6511ParmRecalculoProdutoEmp", "A6512ParmRecalculoProdutoId", "A6513ParmRecalculoEmpresaSaida", "A6514ParmRecalculoEmpresaEntrada", "Gx_mode", "Z6515ParmRecalculoDtInicio", "Z6511ParmRecalculoProdutoEmp", "Z6512ParmRecalculoProdutoId", "Z6513ParmRecalculoEmpresaSaida", "Z6514ParmRecalculoEmpresaEntrada", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e119i519_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e129i519_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139i519_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,36,45,47];
   this.GXLastCtrlId =47;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parmrecalculodtinicio,isvalid:null,rgrid:[],fld:"PARMRECALCULODTINICIO",gxz:"Z6515ParmRecalculoDtInicio",gxold:"O6515ParmRecalculoDtInicio",gxvar:"A6515ParmRecalculoDtInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[35,30,25,20],ip:[35,30,25,20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6515ParmRecalculoDtInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6515ParmRecalculoDtInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PARMRECALCULODTINICIO",gx.O.A6515ParmRecalculoDtInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6515ParmRecalculoDtInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PARMRECALCULODTINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMRECALCULOPRODUTOEMP",gxz:"Z6511ParmRecalculoProdutoEmp",gxold:"O6511ParmRecalculoProdutoEmp",gxvar:"A6511ParmRecalculoProdutoEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6511ParmRecalculoProdutoEmp=Value},v2z:function(Value){gx.O.Z6511ParmRecalculoProdutoEmp=Value},v2c:function(){gx.fn.setControlValue("PARMRECALCULOPRODUTOEMP",gx.O.A6511ParmRecalculoProdutoEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6511ParmRecalculoProdutoEmp=this.val()},val:function(){return gx.fn.getControlValue("PARMRECALCULOPRODUTOEMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMRECALCULOPRODUTOID",gxz:"Z6512ParmRecalculoProdutoId",gxold:"O6512ParmRecalculoProdutoId",gxvar:"A6512ParmRecalculoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6512ParmRecalculoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6512ParmRecalculoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARMRECALCULOPRODUTOID",gx.O.A6512ParmRecalculoProdutoId,0)},c2v:function(){gx.O.A6512ParmRecalculoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARMRECALCULOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMRECALCULOEMPRESASAIDA",gxz:"Z6513ParmRecalculoEmpresaSaida",gxold:"O6513ParmRecalculoEmpresaSaida",gxvar:"A6513ParmRecalculoEmpresaSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6513ParmRecalculoEmpresaSaida=Value},v2z:function(Value){gx.O.Z6513ParmRecalculoEmpresaSaida=Value},v2c:function(){gx.fn.setControlValue("PARMRECALCULOEMPRESASAIDA",gx.O.A6513ParmRecalculoEmpresaSaida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6513ParmRecalculoEmpresaSaida=this.val()},val:function(){return gx.fn.getControlValue("PARMRECALCULOEMPRESASAIDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMRECALCULOEMPRESAENTRADA",gxz:"Z6514ParmRecalculoEmpresaEntrada",gxold:"O6514ParmRecalculoEmpresaEntrada",gxvar:"A6514ParmRecalculoEmpresaEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6514ParmRecalculoEmpresaEntrada=Value},v2z:function(Value){gx.O.Z6514ParmRecalculoEmpresaEntrada=Value},v2c:function(){gx.fn.setControlValue("PARMRECALCULOEMPRESAENTRADA",gx.O.A6514ParmRecalculoEmpresaEntrada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6514ParmRecalculoEmpresaEntrada=this.val()},val:function(){return gx.fn.getControlValue("PARMRECALCULOEMPRESAENTRADA")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   this.A6515ParmRecalculoDtInicio = gx.date.nullDate() ;
   this.Z6515ParmRecalculoDtInicio = gx.date.nullDate() ;
   this.O6515ParmRecalculoDtInicio = gx.date.nullDate() ;
   this.A6511ParmRecalculoProdutoEmp = "" ;
   this.Z6511ParmRecalculoProdutoEmp = "" ;
   this.O6511ParmRecalculoProdutoEmp = "" ;
   this.A6512ParmRecalculoProdutoId = 0 ;
   this.Z6512ParmRecalculoProdutoId = 0 ;
   this.O6512ParmRecalculoProdutoId = 0 ;
   this.A6513ParmRecalculoEmpresaSaida = "" ;
   this.Z6513ParmRecalculoEmpresaSaida = "" ;
   this.O6513ParmRecalculoEmpresaSaida = "" ;
   this.A6514ParmRecalculoEmpresaEntrada = "" ;
   this.Z6514ParmRecalculoEmpresaEntrada = "" ;
   this.O6514ParmRecalculoEmpresaEntrada = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A6515ParmRecalculoDtInicio = gx.date.nullDate() ;
   this.A6511ParmRecalculoProdutoEmp = "" ;
   this.A6512ParmRecalculoProdutoId = 0 ;
   this.A6513ParmRecalculoEmpresaSaida = "" ;
   this.A6514ParmRecalculoEmpresaEntrada = "" ;
   this.Events = {"e129i519_client": ["ENTER", true] ,"e139i519_client": ["CANCEL", true] ,"e119i519_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tparmrecalculo());
