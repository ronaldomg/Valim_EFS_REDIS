/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:39:37.29
*/
gx.evt.autoSkip = false;
gx.define('tnotaservicopedidocpc', false, function () {
   this.ServerClass =  "tnotaservicopedidocpc" ;
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
   this.Valid_Notaservicoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Notaservicoseq",["gx.O.A9348NotaServicoSeq"],[]);
      return true;
   }
   this.Valid_Notaservicopedidocpcseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Notaservicopedidocpcseq",["gx.O.A9348NotaServicoSeq", "gx.O.A11594NotaServicoPedidoCPCSeq", "gx.num.urlDecimal(gx.O.A11610NotaServicoPedidoCPCValorAdc,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11611NotaServicoPedidoCPCValorCon,\'.\',\',\')", "gx.O.A11595NotaServicoPedidoCPCPedEmpId", "gx.O.A11596NotaServicoPedidoCPCPedAno", "gx.O.A11597NotaServicoPedidoCPCPedNumero"],["A11595NotaServicoPedidoCPCPedEmpId", "A11596NotaServicoPedidoCPCPedAno", "A11597NotaServicoPedidoCPCPedNumero", "A11610NotaServicoPedidoCPCValorAdc", "A11611NotaServicoPedidoCPCValorCon", "Gx_mode", "Z9348NotaServicoSeq", "Z11594NotaServicoPedidoCPCSeq", "Z11595NotaServicoPedidoCPCPedEmpId", "Z11596NotaServicoPedidoCPCPedAno", "Z11597NotaServicoPedidoCPCPedNumero", "Z11610NotaServicoPedidoCPCValorAdc", "Z11611NotaServicoPedidoCPCValorCon", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Notaservicopedidocpcpedempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NOTASERVICOPEDIDOCPCPEDEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Notaservicopedidocpcpedano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NOTASERVICOPEDIDOCPCPEDANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Notaservicopedidocpcpednumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Notaservicopedidocpcpednumero",["gx.O.A11595NotaServicoPedidoCPCPedEmpId", "gx.O.A11596NotaServicoPedidoCPCPedAno", "gx.O.A11597NotaServicoPedidoCPCPedNumero"],[]);
      return true;
   }
   this.e11gr854_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gr854_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,75,76];
   this.GXLastCtrlId =76;
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
   GXValidFnc[37]={fld:"TEXTBLOCKNOTASERVICOSEQ", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicoseq,isvalid:null,rgrid:[],fld:"NOTASERVICOSEQ",gxz:"Z9348NotaServicoSeq",gxold:"O9348NotaServicoSeq",gxvar:"A9348NotaServicoSeq",ucs:[],op:[],ip:[39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9348NotaServicoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9348NotaServicoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOSEQ",gx.O.A9348NotaServicoSeq,0)},c2v:function(){gx.O.A9348NotaServicoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKNOTASERVICOPEDIDOCPCSEQ", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicopedidocpcseq,isvalid:null,rgrid:[],fld:"NOTASERVICOPEDIDOCPCSEQ",gxz:"Z11594NotaServicoPedidoCPCSeq",gxold:"O11594NotaServicoPedidoCPCSeq",gxvar:"A11594NotaServicoPedidoCPCSeq",ucs:[],op:[59,54,49,69,64],ip:[59,54,49,69,64,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11594NotaServicoPedidoCPCSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11594NotaServicoPedidoCPCSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPEDIDOCPCSEQ",gx.O.A11594NotaServicoPedidoCPCSeq,0)},c2v:function(){gx.O.A11594NotaServicoPedidoCPCSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPEDIDOCPCSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKNOTASERVICOPEDIDOCPCPEDEMPID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicopedidocpcpedempid,isvalid:null,rgrid:[],fld:"NOTASERVICOPEDIDOCPCPEDEMPID",gxz:"Z11595NotaServicoPedidoCPCPedEmpId",gxold:"O11595NotaServicoPedidoCPCPedEmpId",gxvar:"A11595NotaServicoPedidoCPCPedEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11595NotaServicoPedidoCPCPedEmpId=Value},v2z:function(Value){gx.O.Z11595NotaServicoPedidoCPCPedEmpId=Value},v2c:function(){gx.fn.setControlValue("NOTASERVICOPEDIDOCPCPEDEMPID",gx.O.A11595NotaServicoPedidoCPCPedEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11595NotaServicoPedidoCPCPedEmpId=this.val()},val:function(){return gx.fn.getControlValue("NOTASERVICOPEDIDOCPCPEDEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKNOTASERVICOPEDIDOCPCPEDANO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicopedidocpcpedano,isvalid:null,rgrid:[],fld:"NOTASERVICOPEDIDOCPCPEDANO",gxz:"Z11596NotaServicoPedidoCPCPedAno",gxold:"O11596NotaServicoPedidoCPCPedAno",gxvar:"A11596NotaServicoPedidoCPCPedAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11596NotaServicoPedidoCPCPedAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11596NotaServicoPedidoCPCPedAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPEDIDOCPCPEDANO",gx.O.A11596NotaServicoPedidoCPCPedAno,0)},c2v:function(){gx.O.A11596NotaServicoPedidoCPCPedAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPEDIDOCPCPEDANO",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKNOTASERVICOPEDIDOCPCPEDNUMERO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicopedidocpcpednumero,isvalid:null,rgrid:[],fld:"NOTASERVICOPEDIDOCPCPEDNUMERO",gxz:"Z11597NotaServicoPedidoCPCPedNumero",gxold:"O11597NotaServicoPedidoCPCPedNumero",gxvar:"A11597NotaServicoPedidoCPCPedNumero",ucs:[],op:[],ip:[59,54,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11597NotaServicoPedidoCPCPedNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11597NotaServicoPedidoCPCPedNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPEDIDOCPCPEDNUMERO",gx.O.A11597NotaServicoPedidoCPCPedNumero,0)},c2v:function(){gx.O.A11597NotaServicoPedidoCPCPedNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPEDIDOCPCPEDNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKNOTASERVICOPEDIDOCPCVALORADC", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPEDIDOCPCVALORADC",gxz:"Z11610NotaServicoPedidoCPCValorAdc",gxold:"O11610NotaServicoPedidoCPCValorAdc",gxvar:"A11610NotaServicoPedidoCPCValorAdc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11610NotaServicoPedidoCPCValorAdc=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11610NotaServicoPedidoCPCValorAdc=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NOTASERVICOPEDIDOCPCVALORADC",gx.O.A11610NotaServicoPedidoCPCValorAdc,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11610NotaServicoPedidoCPCValorAdc=this.val()},val:function(){return gx.fn.getDecimalValue("NOTASERVICOPEDIDOCPCVALORADC",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKNOTASERVICOPEDIDOCPCVALORCON", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPEDIDOCPCVALORCON",gxz:"Z11611NotaServicoPedidoCPCValorCon",gxold:"O11611NotaServicoPedidoCPCValorCon",gxvar:"A11611NotaServicoPedidoCPCValorCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11611NotaServicoPedidoCPCValorCon=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11611NotaServicoPedidoCPCValorCon=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NOTASERVICOPEDIDOCPCVALORCON",gx.O.A11611NotaServicoPedidoCPCValorCon,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11611NotaServicoPedidoCPCValorCon=this.val()},val:function(){return gx.fn.getDecimalValue("NOTASERVICOPEDIDOCPCVALORCON",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[75]={fld:"PROMPT_9348",grid:854};
   GXValidFnc[76]={fld:"PROMPT_11595_11596_11597",grid:854};
   this.A9348NotaServicoSeq = 0 ;
   this.Z9348NotaServicoSeq = 0 ;
   this.O9348NotaServicoSeq = 0 ;
   this.A11594NotaServicoPedidoCPCSeq = 0 ;
   this.Z11594NotaServicoPedidoCPCSeq = 0 ;
   this.O11594NotaServicoPedidoCPCSeq = 0 ;
   this.A11595NotaServicoPedidoCPCPedEmpId = "" ;
   this.Z11595NotaServicoPedidoCPCPedEmpId = "" ;
   this.O11595NotaServicoPedidoCPCPedEmpId = "" ;
   this.A11596NotaServicoPedidoCPCPedAno = 0 ;
   this.Z11596NotaServicoPedidoCPCPedAno = 0 ;
   this.O11596NotaServicoPedidoCPCPedAno = 0 ;
   this.A11597NotaServicoPedidoCPCPedNumero = 0 ;
   this.Z11597NotaServicoPedidoCPCPedNumero = 0 ;
   this.O11597NotaServicoPedidoCPCPedNumero = 0 ;
   this.A11610NotaServicoPedidoCPCValorAdc = 0 ;
   this.Z11610NotaServicoPedidoCPCValorAdc = 0 ;
   this.O11610NotaServicoPedidoCPCValorAdc = 0 ;
   this.A11611NotaServicoPedidoCPCValorCon = 0 ;
   this.Z11611NotaServicoPedidoCPCValorCon = 0 ;
   this.O11611NotaServicoPedidoCPCValorCon = 0 ;
   this.A9348NotaServicoSeq = 0 ;
   this.A11594NotaServicoPedidoCPCSeq = 0 ;
   this.A11595NotaServicoPedidoCPCPedEmpId = "" ;
   this.A11596NotaServicoPedidoCPCPedAno = 0 ;
   this.A11597NotaServicoPedidoCPCPedNumero = 0 ;
   this.A11610NotaServicoPedidoCPCValorAdc = 0 ;
   this.A11611NotaServicoPedidoCPCValorCon = 0 ;
   this.Events = {"e11gr854_client": ["ENTER", true] ,"e12gr854_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_9348", [39]);
   this.setPrompt("PROMPT_11595_11596_11597", [49,54,59]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnotaservicopedidocpc());
