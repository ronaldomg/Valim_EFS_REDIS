/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:48.37
*/
gx.evt.autoSkip = false;
gx.define('tsintegraerro', false, function () {
   this.ServerClass =  "tsintegraerro" ;
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
   this.Valid_Sintegraerroprodutoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRAERROPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegraerroprodutoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sintegraerroprodutoid",["gx.O.A8231SintegraErroProdutoEmpresaId", "gx.O.A8232SintegraErroProdutoId", "gx.O.A8230SintegraErroDescErro"],["A8230SintegraErroDescErro", "Gx_mode", "Z8231SintegraErroProdutoEmpresaId", "Z8232SintegraErroProdutoId", "Z8230SintegraErroDescErro", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11bk608_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12bk608_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13bk608_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,26,35,37];
   this.GXLastCtrlId =37;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegraerroprodutoempresaid,isvalid:null,rgrid:[],fld:"SINTEGRAERROPRODUTOEMPRESAID",gxz:"Z8231SintegraErroProdutoEmpresaId",gxold:"O8231SintegraErroProdutoEmpresaId",gxvar:"A8231SintegraErroProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8231SintegraErroProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z8231SintegraErroProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SINTEGRAERROPRODUTOEMPRESAID",gx.O.A8231SintegraErroProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8231SintegraErroProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRAERROPRODUTOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegraerroprodutoid,isvalid:null,rgrid:[],fld:"SINTEGRAERROPRODUTOID",gxz:"Z8232SintegraErroProdutoId",gxold:"O8232SintegraErroProdutoId",gxvar:"A8232SintegraErroProdutoId",ucs:[],op:[25],ip:[25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8232SintegraErroProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8232SintegraErroProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRAERROPRODUTOID",gx.O.A8232SintegraErroProdutoId,0)},c2v:function(){gx.O.A8232SintegraErroProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRAERROPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAERRODESCERRO",gxz:"Z8230SintegraErroDescErro",gxold:"O8230SintegraErroDescErro",gxvar:"A8230SintegraErroDescErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8230SintegraErroDescErro=Value},v2z:function(Value){gx.O.Z8230SintegraErroDescErro=Value},v2c:function(){gx.fn.setControlValue("SINTEGRAERRODESCERRO",gx.O.A8230SintegraErroDescErro,0)},c2v:function(){gx.O.A8230SintegraErroDescErro=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRAERRODESCERRO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   this.A8231SintegraErroProdutoEmpresaId = "" ;
   this.Z8231SintegraErroProdutoEmpresaId = "" ;
   this.O8231SintegraErroProdutoEmpresaId = "" ;
   this.A8232SintegraErroProdutoId = 0 ;
   this.Z8232SintegraErroProdutoId = 0 ;
   this.O8232SintegraErroProdutoId = 0 ;
   this.A8230SintegraErroDescErro = "" ;
   this.Z8230SintegraErroDescErro = "" ;
   this.O8230SintegraErroDescErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8231SintegraErroProdutoEmpresaId = "" ;
   this.A8232SintegraErroProdutoId = 0 ;
   this.A8230SintegraErroDescErro = "" ;
   this.Events = {"e12bk608_client": ["ENTER", true] ,"e13bk608_client": ["CANCEL", true] ,"e11bk608_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsintegraerro());
