/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:34:1.20
*/
gx.evt.autoSkip = false;
gx.define('tprocessoa3', false, function () {
   this.ServerClass =  "tprocessoa3" ;
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
   this.Valid_Processoa3id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Processoa3id",["gx.O.A10453ProcessoA3Id", "gx.O.A10523ProcessoA3Operacao", "gx.O.A10524ProcessoA3Status", "gx.O.A10525ProcessoA3Valor", "gx.O.A10526ProcessoA3HasSubProcess", "gx.O.A138EmpresaId"],["A138EmpresaId", "A10523ProcessoA3Operacao", "A10524ProcessoA3Status", "A10525ProcessoA3Valor", "A10526ProcessoA3HasSubProcess", "Gx_mode", "Z10453ProcessoA3Id", "Z138EmpresaId", "Z10523ProcessoA3Operacao", "Z10524ProcessoA3Status", "Z10525ProcessoA3Valor", "Z10526ProcessoA3HasSubProcess", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Empresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresaid",["gx.O.A138EmpresaId"],[]);
      return true;
   }
   this.e11f9781_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12f9781_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKPROCESSOA3ID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoa3id,isvalid:null,rgrid:[],fld:"PROCESSOA3ID",gxz:"Z10453ProcessoA3Id",gxold:"O10453ProcessoA3Id",gxvar:"A10453ProcessoA3Id",ucs:[],op:[44,64,59,54,49],ip:[44,64,59,54,49,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10453ProcessoA3Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10453ProcessoA3Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOA3ID",gx.O.A10453ProcessoA3Id,0)},c2v:function(){gx.O.A10453ProcessoA3Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROCESSOA3ID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKEMPRESAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaid,isvalid:null,rgrid:[],fld:"EMPRESAID",gxz:"Z138EmpresaId",gxold:"O138EmpresaId",gxvar:"A138EmpresaId",ucs:[],op:[],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A138EmpresaId=Value},v2z:function(Value){gx.O.Z138EmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAID",gx.O.A138EmpresaId,0)},c2v:function(){gx.O.A138EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKPROCESSOA3OPERACAO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOA3OPERACAO",gxz:"Z10523ProcessoA3Operacao",gxold:"O10523ProcessoA3Operacao",gxvar:"A10523ProcessoA3Operacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10523ProcessoA3Operacao=Value},v2z:function(Value){gx.O.Z10523ProcessoA3Operacao=Value},v2c:function(){gx.fn.setComboBoxValue("PROCESSOA3OPERACAO",gx.O.A10523ProcessoA3Operacao)},c2v:function(){gx.O.A10523ProcessoA3Operacao=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOA3OPERACAO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKPROCESSOA3STATUS", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOA3STATUS",gxz:"Z10524ProcessoA3Status",gxold:"O10524ProcessoA3Status",gxvar:"A10524ProcessoA3Status",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10524ProcessoA3Status=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10524ProcessoA3Status=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOA3STATUS",gx.O.A10524ProcessoA3Status,0)},c2v:function(){gx.O.A10524ProcessoA3Status=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROCESSOA3STATUS",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKPROCESSOA3VALOR", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOA3VALOR",gxz:"Z10525ProcessoA3Valor",gxold:"O10525ProcessoA3Valor",gxvar:"A10525ProcessoA3Valor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10525ProcessoA3Valor=Value},v2z:function(Value){gx.O.Z10525ProcessoA3Valor=Value},v2c:function(){gx.fn.setControlValue("PROCESSOA3VALOR",gx.O.A10525ProcessoA3Valor,0)},c2v:function(){gx.O.A10525ProcessoA3Valor=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOA3VALOR")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKPROCESSOA3HASSUBPROCESS", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOA3HASSUBPROCESS",gxz:"Z10526ProcessoA3HasSubProcess",gxold:"O10526ProcessoA3HasSubProcess",gxvar:"A10526ProcessoA3HasSubProcess",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10526ProcessoA3HasSubProcess=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.Z10526ProcessoA3HasSubProcess=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("PROCESSOA3HASSUBPROCESS",gx.O.A10526ProcessoA3HasSubProcess,true)},c2v:function(){gx.O.A10526ProcessoA3HasSubProcess=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("PROCESSOA3HASSUBPROCESS")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[70]={fld:"PROMPT_138",grid:781};
   this.A10453ProcessoA3Id = 0 ;
   this.Z10453ProcessoA3Id = 0 ;
   this.O10453ProcessoA3Id = 0 ;
   this.A138EmpresaId = "" ;
   this.Z138EmpresaId = "" ;
   this.O138EmpresaId = "" ;
   this.A10523ProcessoA3Operacao = "" ;
   this.Z10523ProcessoA3Operacao = "" ;
   this.O10523ProcessoA3Operacao = "" ;
   this.A10524ProcessoA3Status = 0 ;
   this.Z10524ProcessoA3Status = 0 ;
   this.O10524ProcessoA3Status = 0 ;
   this.A10525ProcessoA3Valor = "" ;
   this.Z10525ProcessoA3Valor = "" ;
   this.O10525ProcessoA3Valor = "" ;
   this.A10526ProcessoA3HasSubProcess = false ;
   this.Z10526ProcessoA3HasSubProcess = false ;
   this.O10526ProcessoA3HasSubProcess = false ;
   this.A10453ProcessoA3Id = 0 ;
   this.A138EmpresaId = "" ;
   this.A10523ProcessoA3Operacao = "" ;
   this.A10524ProcessoA3Status = 0 ;
   this.A10525ProcessoA3Valor = "" ;
   this.A10526ProcessoA3HasSubProcess = false ;
   this.Events = {"e11f9781_client": ["ENTER", true] ,"e12f9781_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_138", [44]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tprocessoa3());
