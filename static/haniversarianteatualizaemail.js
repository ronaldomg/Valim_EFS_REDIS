/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:21.57
*/
gx.evt.autoSkip = false;
gx.define('haniversarianteatualizaemail', false, function () {
   this.ServerClass =  "haniversarianteatualizaemail" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e1127a2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1227a2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1427a2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,23,25];
   this.GXLastCtrlId =25;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV6PessoaId",gxold:"OV6PessoaId",gxvar:"AV6PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV6PessoaId,0)},c2v:function(){gx.O.AV6PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV7PessoaRazaoSocial",gxold:"OV7PessoaRazaoSocial",gxvar:"AV7PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV7PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV7PessoaRazaoSocial,0)},c2v:function(){gx.O.AV7PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMAIL",gxz:"ZV5PessoaEmail",gxold:"OV5PessoaEmail",gxvar:"AV5PessoaEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5PessoaEmail=Value},v2z:function(Value){gx.O.ZV5PessoaEmail=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMAIL",gx.O.AV5PessoaEmail,0)},c2v:function(){gx.O.AV5PessoaEmail=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMAIL")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMAILNOVO",gxz:"ZV8PessoaEmailNovo",gxold:"OV8PessoaEmailNovo",gxvar:"AV8PessoaEmailNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8PessoaEmailNovo=Value},v2z:function(Value){gx.O.ZV8PessoaEmailNovo=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMAILNOVO",gx.O.AV8PessoaEmailNovo,0)},c2v:function(){gx.O.AV8PessoaEmailNovo=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMAILNOVO")},nac:gx.falseFn};
   this.AV6PessoaId = 0 ;
   this.ZV6PessoaId = 0 ;
   this.OV6PessoaId = 0 ;
   this.AV7PessoaRazaoSocial = "" ;
   this.ZV7PessoaRazaoSocial = "" ;
   this.OV7PessoaRazaoSocial = "" ;
   this.AV5PessoaEmail = "" ;
   this.ZV5PessoaEmail = "" ;
   this.OV5PessoaEmail = "" ;
   this.AV8PessoaEmailNovo = "" ;
   this.ZV8PessoaEmailNovo = "" ;
   this.OV8PessoaEmailNovo = "" ;
   this.AV6PessoaId = 0 ;
   this.AV7PessoaRazaoSocial = "" ;
   this.AV5PessoaEmail = "" ;
   this.AV8PessoaEmailNovo = "" ;
   this.Events = {"e1127a2_client": ["ENTER", true] ,"e1227a2_client": ["'FECHAR'", true] ,"e1427a2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV6PessoaId',fld:'vPESSOAID'},{av:'AV8PessoaEmailNovo',fld:'vPESSOAEMAILNOVO'},{av:'AV5PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV7PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'}],[{av:'AV8PessoaEmailNovo',fld:'vPESSOAEMAILNOVO'},{av:'AV6PessoaId',fld:'vPESSOAID'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV5PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV7PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV6PessoaId',fld:'vPESSOAID'}],[]];
   this.EnterCtrl = ["BUTTON2"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new haniversarianteatualizaemail());
