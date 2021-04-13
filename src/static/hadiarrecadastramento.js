/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:6:7.79
*/
gx.evt.autoSkip = false;
gx.define('hadiarrecadastramento', false, function () {
   this.ServerClass =  "hadiarrecadastramento" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e122ac2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142ac1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,23,25];
   this.GXLastCtrlId =25;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV11PessoaId",gxold:"OV11PessoaId",gxvar:"AV11PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV11PessoaId,0)},c2v:function(){gx.O.AV11PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV10PessoaFantasia",gxold:"OV10PessoaFantasia",gxvar:"AV10PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10PessoaFantasia=Value},v2z:function(Value){gx.O.ZV10PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV10PessoaFantasia,0)},c2v:function(){gx.O.AV10PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADATARECADASTRAMENTO",gxz:"ZV8PessoaDataRecadastramento",gxold:"OV8PessoaDataRecadastramento",gxvar:"AV8PessoaDataRecadastramento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8PessoaDataRecadastramento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8PessoaDataRecadastramento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPESSOADATARECADASTRAMENTO",gx.O.AV8PessoaDataRecadastramento,0)},c2v:function(){gx.O.AV8PessoaDataRecadastramento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPESSOADATARECADASTRAMENTO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIAS",gxz:"ZV13QtdeDias",gxold:"OV13QtdeDias",gxvar:"AV13QtdeDias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13QtdeDias=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13QtdeDias=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIAS",gx.O.AV13QtdeDias,0)},c2v:function(){gx.O.AV13QtdeDias=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIAS",'.')},nac:gx.falseFn};
   this.AV11PessoaId = 0 ;
   this.ZV11PessoaId = 0 ;
   this.OV11PessoaId = 0 ;
   this.AV10PessoaFantasia = "" ;
   this.ZV10PessoaFantasia = "" ;
   this.OV10PessoaFantasia = "" ;
   this.AV8PessoaDataRecadastramento = gx.date.nullDate() ;
   this.ZV8PessoaDataRecadastramento = gx.date.nullDate() ;
   this.OV8PessoaDataRecadastramento = gx.date.nullDate() ;
   this.AV13QtdeDias = 0 ;
   this.ZV13QtdeDias = 0 ;
   this.OV13QtdeDias = 0 ;
   this.AV11PessoaId = 0 ;
   this.AV10PessoaFantasia = "" ;
   this.AV8PessoaDataRecadastramento = gx.date.nullDate() ;
   this.AV13QtdeDias = 0 ;
   this.Events = {"e122ac2_client": ["ENTER", true] ,"e142ac1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13QtdeDias',fld:'vQTDEDIAS'},{av:'AV8PessoaDataRecadastramento',fld:'vPESSOADATARECADASTRAMENTO',hsh:true},{av:'AV9PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV11PessoaId',fld:'vPESSOAID',hsh:true}],[{av:'AV5Data',fld:'vDATA'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hadiarrecadastramento());
