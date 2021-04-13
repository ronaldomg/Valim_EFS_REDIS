/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:33:34.48
*/
gx.evt.autoSkip = false;
gx.define('tagrupamentoprioridade', false, function () {
   this.ServerClass =  "tagrupamentoprioridade" ;
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
   this.Valid_Agrupamentoprioridadeempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AGRUPAMENTOPRIORIDADEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Agrupamentoprioridadeseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Agrupamentoprioridadeseq",["gx.O.A11007AgrupamentoPrioridadeEmpresaId", "gx.O.A11008AgrupamentoPrioridadeSeq", "gx.O.A11009AgrupamentoPrioridadePessoaEmp", "gx.O.A11010AgrupamentoPrioridadePessoaId"],["A11009AgrupamentoPrioridadePessoaEmp", "A11010AgrupamentoPrioridadePessoaId", "Gx_mode", "Z11007AgrupamentoPrioridadeEmpresaId", "Z11008AgrupamentoPrioridadeSeq", "Z11009AgrupamentoPrioridadePessoaEmp", "Z11010AgrupamentoPrioridadePessoaId", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Agrupamentoprioridadepessoaemp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AGRUPAMENTOPRIORIDADEPESSOAEMP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Agrupamentoprioridadepessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Agrupamentoprioridadepessoaid",["gx.O.A11009AgrupamentoPrioridadePessoaEmp", "gx.O.A11010AgrupamentoPrioridadePessoaId"],[]);
      return true;
   }
   this.e11fu809_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12fu809_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKAGRUPAMENTOPRIORIDADEEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Agrupamentoprioridadeempresaid,isvalid:null,rgrid:[],fld:"AGRUPAMENTOPRIORIDADEEMPRESAID",gxz:"Z11007AgrupamentoPrioridadeEmpresaId",gxold:"O11007AgrupamentoPrioridadeEmpresaId",gxvar:"A11007AgrupamentoPrioridadeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11007AgrupamentoPrioridadeEmpresaId=Value},v2z:function(Value){gx.O.Z11007AgrupamentoPrioridadeEmpresaId=Value},v2c:function(){gx.fn.setControlValue("AGRUPAMENTOPRIORIDADEEMPRESAID",gx.O.A11007AgrupamentoPrioridadeEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11007AgrupamentoPrioridadeEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("AGRUPAMENTOPRIORIDADEEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKAGRUPAMENTOPRIORIDADESEQ", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Agrupamentoprioridadeseq,isvalid:null,rgrid:[],fld:"AGRUPAMENTOPRIORIDADESEQ",gxz:"Z11008AgrupamentoPrioridadeSeq",gxold:"O11008AgrupamentoPrioridadeSeq",gxvar:"A11008AgrupamentoPrioridadeSeq",ucs:[],op:[54,49],ip:[54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11008AgrupamentoPrioridadeSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11008AgrupamentoPrioridadeSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AGRUPAMENTOPRIORIDADESEQ",gx.O.A11008AgrupamentoPrioridadeSeq,0)},c2v:function(){gx.O.A11008AgrupamentoPrioridadeSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AGRUPAMENTOPRIORIDADESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKAGRUPAMENTOPRIORIDADEPESSOAEMPID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Agrupamentoprioridadepessoaemp,isvalid:null,rgrid:[],fld:"AGRUPAMENTOPRIORIDADEPESSOAEMP",gxz:"Z11009AgrupamentoPrioridadePessoaEmp",gxold:"O11009AgrupamentoPrioridadePessoaEmp",gxvar:"A11009AgrupamentoPrioridadePessoaEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11009AgrupamentoPrioridadePessoaEmp=Value},v2z:function(Value){gx.O.Z11009AgrupamentoPrioridadePessoaEmp=Value},v2c:function(){gx.fn.setControlValue("AGRUPAMENTOPRIORIDADEPESSOAEMP",gx.O.A11009AgrupamentoPrioridadePessoaEmp,0)},c2v:function(){gx.O.A11009AgrupamentoPrioridadePessoaEmp=this.val()},val:function(){return gx.fn.getControlValue("AGRUPAMENTOPRIORIDADEPESSOAEMP")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKAGRUPAMENTOPRIORIDADEPESSOAID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Agrupamentoprioridadepessoaid,isvalid:null,rgrid:[],fld:"AGRUPAMENTOPRIORIDADEPESSOAID",gxz:"Z11010AgrupamentoPrioridadePessoaId",gxold:"O11010AgrupamentoPrioridadePessoaId",gxvar:"A11010AgrupamentoPrioridadePessoaId",ucs:[],op:[],ip:[54,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11010AgrupamentoPrioridadePessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11010AgrupamentoPrioridadePessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AGRUPAMENTOPRIORIDADEPESSOAID",gx.O.A11010AgrupamentoPrioridadePessoaId,0)},c2v:function(){gx.O.A11010AgrupamentoPrioridadePessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AGRUPAMENTOPRIORIDADEPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"PROMPT_11009_11010",grid:809};
   this.A11007AgrupamentoPrioridadeEmpresaId = "" ;
   this.Z11007AgrupamentoPrioridadeEmpresaId = "" ;
   this.O11007AgrupamentoPrioridadeEmpresaId = "" ;
   this.A11008AgrupamentoPrioridadeSeq = 0 ;
   this.Z11008AgrupamentoPrioridadeSeq = 0 ;
   this.O11008AgrupamentoPrioridadeSeq = 0 ;
   this.A11009AgrupamentoPrioridadePessoaEmp = "" ;
   this.Z11009AgrupamentoPrioridadePessoaEmp = "" ;
   this.O11009AgrupamentoPrioridadePessoaEmp = "" ;
   this.A11010AgrupamentoPrioridadePessoaId = 0 ;
   this.Z11010AgrupamentoPrioridadePessoaId = 0 ;
   this.O11010AgrupamentoPrioridadePessoaId = 0 ;
   this.A11007AgrupamentoPrioridadeEmpresaId = "" ;
   this.A11008AgrupamentoPrioridadeSeq = 0 ;
   this.A11009AgrupamentoPrioridadePessoaEmp = "" ;
   this.A11010AgrupamentoPrioridadePessoaId = 0 ;
   this.Events = {"e11fu809_client": ["ENTER", true] ,"e12fu809_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_11009_11010", [49,54]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tagrupamentoprioridade());
