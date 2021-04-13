/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:38:9.37
*/
gx.evt.autoSkip = false;
gx.define('tnotaservicoadicionais', false, function () {
   this.ServerClass =  "tnotaservicoadicionais" ;
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
   this.Valid_Notaservicoadicionaisseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Notaservicoadicionaisseq",["gx.O.A9348NotaServicoSeq", "gx.O.A11589NotaServicoAdicionaisSeq", "gx.O.A11598NotaServicoAdicionaisDescricao", "gx.num.urlDecimal(gx.O.A11599NotaServicoAdicionaisValor,\'.\',\',\')"],["A11598NotaServicoAdicionaisDescricao", "A11599NotaServicoAdicionaisValor", "Gx_mode", "Z9348NotaServicoSeq", "Z11589NotaServicoAdicionaisSeq", "Z11598NotaServicoAdicionaisDescricao", "Z11599NotaServicoAdicionaisValor", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11go851_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12go851_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,60];
   this.GXLastCtrlId =60;
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
   GXValidFnc[42]={fld:"TEXTBLOCKNOTASERVICOADICIONAISSEQ", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicoadicionaisseq,isvalid:null,rgrid:[],fld:"NOTASERVICOADICIONAISSEQ",gxz:"Z11589NotaServicoAdicionaisSeq",gxold:"O11589NotaServicoAdicionaisSeq",gxvar:"A11589NotaServicoAdicionaisSeq",ucs:[],op:[54,49],ip:[54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11589NotaServicoAdicionaisSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11589NotaServicoAdicionaisSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOADICIONAISSEQ",gx.O.A11589NotaServicoAdicionaisSeq,0)},c2v:function(){gx.O.A11589NotaServicoAdicionaisSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOADICIONAISSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKNOTASERVICOADICIONAISDESCRICAO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOADICIONAISDESCRICAO",gxz:"Z11598NotaServicoAdicionaisDescricao",gxold:"O11598NotaServicoAdicionaisDescricao",gxvar:"A11598NotaServicoAdicionaisDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11598NotaServicoAdicionaisDescricao=Value},v2z:function(Value){gx.O.Z11598NotaServicoAdicionaisDescricao=Value},v2c:function(){gx.fn.setControlValue("NOTASERVICOADICIONAISDESCRICAO",gx.O.A11598NotaServicoAdicionaisDescricao,0)},c2v:function(){gx.O.A11598NotaServicoAdicionaisDescricao=this.val()},val:function(){return gx.fn.getControlValue("NOTASERVICOADICIONAISDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKNOTASERVICOADICIONAISVALOR", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOADICIONAISVALOR",gxz:"Z11599NotaServicoAdicionaisValor",gxold:"O11599NotaServicoAdicionaisValor",gxvar:"A11599NotaServicoAdicionaisValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11599NotaServicoAdicionaisValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11599NotaServicoAdicionaisValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NOTASERVICOADICIONAISVALOR",gx.O.A11599NotaServicoAdicionaisValor,2,',')},c2v:function(){gx.O.A11599NotaServicoAdicionaisValor=this.val()},val:function(){return gx.fn.getDecimalValue("NOTASERVICOADICIONAISVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"PROMPT_9348",grid:851};
   this.A9348NotaServicoSeq = 0 ;
   this.Z9348NotaServicoSeq = 0 ;
   this.O9348NotaServicoSeq = 0 ;
   this.A11589NotaServicoAdicionaisSeq = 0 ;
   this.Z11589NotaServicoAdicionaisSeq = 0 ;
   this.O11589NotaServicoAdicionaisSeq = 0 ;
   this.A11598NotaServicoAdicionaisDescricao = "" ;
   this.Z11598NotaServicoAdicionaisDescricao = "" ;
   this.O11598NotaServicoAdicionaisDescricao = "" ;
   this.A11599NotaServicoAdicionaisValor = 0 ;
   this.Z11599NotaServicoAdicionaisValor = 0 ;
   this.O11599NotaServicoAdicionaisValor = 0 ;
   this.A9348NotaServicoSeq = 0 ;
   this.A11589NotaServicoAdicionaisSeq = 0 ;
   this.A11598NotaServicoAdicionaisDescricao = "" ;
   this.A11599NotaServicoAdicionaisValor = 0 ;
   this.Events = {"e11go851_client": ["ENTER", true] ,"e12go851_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_9348", [39]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnotaservicoadicionais());
