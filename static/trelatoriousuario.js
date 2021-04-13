/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:34:43.37
*/
gx.evt.autoSkip = false;
gx.define('trelatoriousuario', false, function () {
   this.ServerClass =  "trelatoriousuario" ;
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
   this.Valid_Relatoriousuarionome=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Relatoriousuarionome",["gx.O.A10755RelatorioUsuarioNome", "gx.O.A10756RelatorioUsuarioEmail", "gx.O.A10757RelatorioUsuarioAssunto", "gx.O.A10758RelatorioUsuarioCorpo"],["A10756RelatorioUsuarioEmail", "A10757RelatorioUsuarioAssunto", "A10758RelatorioUsuarioCorpo", "Gx_mode", "Z10755RelatorioUsuarioNome", "Z10756RelatorioUsuarioEmail", "Z10757RelatorioUsuarioAssunto", "Z10758RelatorioUsuarioCorpo", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11fj792_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12fj792_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKRELATORIOUSUARIONOME", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Relatoriousuarionome,isvalid:null,rgrid:[],fld:"RELATORIOUSUARIONOME",gxz:"Z10755RelatorioUsuarioNome",gxold:"O10755RelatorioUsuarioNome",gxvar:"A10755RelatorioUsuarioNome",ucs:[],op:[54,49,44],ip:[54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10755RelatorioUsuarioNome=Value},v2z:function(Value){gx.O.Z10755RelatorioUsuarioNome=Value},v2c:function(){gx.fn.setControlValue("RELATORIOUSUARIONOME",gx.O.A10755RelatorioUsuarioNome,0)},c2v:function(){gx.O.A10755RelatorioUsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("RELATORIOUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKRELATORIOUSUARIOEMAIL", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RELATORIOUSUARIOEMAIL",gxz:"Z10756RelatorioUsuarioEmail",gxold:"O10756RelatorioUsuarioEmail",gxvar:"A10756RelatorioUsuarioEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10756RelatorioUsuarioEmail=Value},v2z:function(Value){gx.O.Z10756RelatorioUsuarioEmail=Value},v2c:function(){gx.fn.setControlValue("RELATORIOUSUARIOEMAIL",gx.O.A10756RelatorioUsuarioEmail,0)},c2v:function(){gx.O.A10756RelatorioUsuarioEmail=this.val()},val:function(){return gx.fn.getControlValue("RELATORIOUSUARIOEMAIL")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKRELATORIOUSUARIOASSUNTO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RELATORIOUSUARIOASSUNTO",gxz:"Z10757RelatorioUsuarioAssunto",gxold:"O10757RelatorioUsuarioAssunto",gxvar:"A10757RelatorioUsuarioAssunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10757RelatorioUsuarioAssunto=Value},v2z:function(Value){gx.O.Z10757RelatorioUsuarioAssunto=Value},v2c:function(){gx.fn.setControlValue("RELATORIOUSUARIOASSUNTO",gx.O.A10757RelatorioUsuarioAssunto,0)},c2v:function(){gx.O.A10757RelatorioUsuarioAssunto=this.val()},val:function(){return gx.fn.getControlValue("RELATORIOUSUARIOASSUNTO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKRELATORIOUSUARIOCORPO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RELATORIOUSUARIOCORPO",gxz:"Z10758RelatorioUsuarioCorpo",gxold:"O10758RelatorioUsuarioCorpo",gxvar:"A10758RelatorioUsuarioCorpo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10758RelatorioUsuarioCorpo=Value},v2z:function(Value){gx.O.Z10758RelatorioUsuarioCorpo=Value},v2c:function(){gx.fn.setControlValue("RELATORIOUSUARIOCORPO",gx.O.A10758RelatorioUsuarioCorpo,0)},c2v:function(){gx.O.A10758RelatorioUsuarioCorpo=this.val()},val:function(){return gx.fn.getControlValue("RELATORIOUSUARIOCORPO")},nac:gx.falseFn};
   this.A10755RelatorioUsuarioNome = "" ;
   this.Z10755RelatorioUsuarioNome = "" ;
   this.O10755RelatorioUsuarioNome = "" ;
   this.A10756RelatorioUsuarioEmail = "" ;
   this.Z10756RelatorioUsuarioEmail = "" ;
   this.O10756RelatorioUsuarioEmail = "" ;
   this.A10757RelatorioUsuarioAssunto = "" ;
   this.Z10757RelatorioUsuarioAssunto = "" ;
   this.O10757RelatorioUsuarioAssunto = "" ;
   this.A10758RelatorioUsuarioCorpo = "" ;
   this.Z10758RelatorioUsuarioCorpo = "" ;
   this.O10758RelatorioUsuarioCorpo = "" ;
   this.A10755RelatorioUsuarioNome = "" ;
   this.A10756RelatorioUsuarioEmail = "" ;
   this.A10757RelatorioUsuarioAssunto = "" ;
   this.A10758RelatorioUsuarioCorpo = "" ;
   this.Events = {"e11fj792_client": ["ENTER", true] ,"e12fj792_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new trelatoriousuario());
