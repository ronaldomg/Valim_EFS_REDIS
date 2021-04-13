/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:38:11.63
*/
gx.evt.autoSkip = false;
gx.define('tnotaservicoitem', false, function () {
   this.ServerClass =  "tnotaservicoitem" ;
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
   this.Valid_Notaservicoitemseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Notaservicoitemseq",["gx.O.A9348NotaServicoSeq", "gx.O.A11590NotaServicoItemSeq", "gx.O.A11600NotaServicoItemDescricao", "gx.num.urlDecimal(gx.O.A11601NotaServicoItemQuantidade,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11602NotaServicoItemValorUnitario,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11603NotaServicoItemValorTotal,\'.\',\',\')"],["A11600NotaServicoItemDescricao", "A11601NotaServicoItemQuantidade", "A11602NotaServicoItemValorUnitario", "A11603NotaServicoItemValorTotal", "Gx_mode", "Z9348NotaServicoSeq", "Z11590NotaServicoItemSeq", "Z11600NotaServicoItemDescricao", "Z11601NotaServicoItemQuantidade", "Z11602NotaServicoItemValorUnitario", "Z11603NotaServicoItemValorTotal", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11gp852_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gp852_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,70];
   this.GXLastCtrlId =70;
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
   GXValidFnc[42]={fld:"TEXTBLOCKNOTASERVICOITEMSEQ", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicoitemseq,isvalid:null,rgrid:[],fld:"NOTASERVICOITEMSEQ",gxz:"Z11590NotaServicoItemSeq",gxold:"O11590NotaServicoItemSeq",gxvar:"A11590NotaServicoItemSeq",ucs:[],op:[64,59,54,49],ip:[64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11590NotaServicoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11590NotaServicoItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOITEMSEQ",gx.O.A11590NotaServicoItemSeq,0)},c2v:function(){gx.O.A11590NotaServicoItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKNOTASERVICOITEMDESCRICAO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOITEMDESCRICAO",gxz:"Z11600NotaServicoItemDescricao",gxold:"O11600NotaServicoItemDescricao",gxvar:"A11600NotaServicoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11600NotaServicoItemDescricao=Value},v2z:function(Value){gx.O.Z11600NotaServicoItemDescricao=Value},v2c:function(){gx.fn.setControlValue("NOTASERVICOITEMDESCRICAO",gx.O.A11600NotaServicoItemDescricao,0)},c2v:function(){gx.O.A11600NotaServicoItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("NOTASERVICOITEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKNOTASERVICOITEMQUANTIDADE", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOITEMQUANTIDADE",gxz:"Z11601NotaServicoItemQuantidade",gxold:"O11601NotaServicoItemQuantidade",gxvar:"A11601NotaServicoItemQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11601NotaServicoItemQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11601NotaServicoItemQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NOTASERVICOITEMQUANTIDADE",gx.O.A11601NotaServicoItemQuantidade,2,',')},c2v:function(){gx.O.A11601NotaServicoItemQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("NOTASERVICOITEMQUANTIDADE",'.',',')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKNOTASERVICOITEMVALORUNITARIO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOITEMVALORUNITARIO",gxz:"Z11602NotaServicoItemValorUnitario",gxold:"O11602NotaServicoItemValorUnitario",gxvar:"A11602NotaServicoItemValorUnitario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11602NotaServicoItemValorUnitario=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11602NotaServicoItemValorUnitario=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NOTASERVICOITEMVALORUNITARIO",gx.O.A11602NotaServicoItemValorUnitario,2,',')},c2v:function(){gx.O.A11602NotaServicoItemValorUnitario=this.val()},val:function(){return gx.fn.getDecimalValue("NOTASERVICOITEMVALORUNITARIO",'.',',')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKNOTASERVICOITEMVALORTOTAL", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOITEMVALORTOTAL",gxz:"Z11603NotaServicoItemValorTotal",gxold:"O11603NotaServicoItemValorTotal",gxvar:"A11603NotaServicoItemValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11603NotaServicoItemValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11603NotaServicoItemValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NOTASERVICOITEMVALORTOTAL",gx.O.A11603NotaServicoItemValorTotal,2,',')},c2v:function(){gx.O.A11603NotaServicoItemValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("NOTASERVICOITEMVALORTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"PROMPT_9348",grid:852};
   this.A9348NotaServicoSeq = 0 ;
   this.Z9348NotaServicoSeq = 0 ;
   this.O9348NotaServicoSeq = 0 ;
   this.A11590NotaServicoItemSeq = 0 ;
   this.Z11590NotaServicoItemSeq = 0 ;
   this.O11590NotaServicoItemSeq = 0 ;
   this.A11600NotaServicoItemDescricao = "" ;
   this.Z11600NotaServicoItemDescricao = "" ;
   this.O11600NotaServicoItemDescricao = "" ;
   this.A11601NotaServicoItemQuantidade = 0 ;
   this.Z11601NotaServicoItemQuantidade = 0 ;
   this.O11601NotaServicoItemQuantidade = 0 ;
   this.A11602NotaServicoItemValorUnitario = 0 ;
   this.Z11602NotaServicoItemValorUnitario = 0 ;
   this.O11602NotaServicoItemValorUnitario = 0 ;
   this.A11603NotaServicoItemValorTotal = 0 ;
   this.Z11603NotaServicoItemValorTotal = 0 ;
   this.O11603NotaServicoItemValorTotal = 0 ;
   this.A9348NotaServicoSeq = 0 ;
   this.A11590NotaServicoItemSeq = 0 ;
   this.A11600NotaServicoItemDescricao = "" ;
   this.A11601NotaServicoItemQuantidade = 0 ;
   this.A11602NotaServicoItemValorUnitario = 0 ;
   this.A11603NotaServicoItemValorTotal = 0 ;
   this.Events = {"e11gp852_client": ["ENTER", true] ,"e12gp852_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_9348", [39]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnotaservicoitem());
