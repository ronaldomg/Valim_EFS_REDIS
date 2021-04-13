/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:35:30.28
*/
gx.evt.autoSkip = false;
gx.define('hbaixarcontasfavorecido', false, function () {
   this.ServerClass =  "hbaixarcontasfavorecido" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV15ValorTotalTxt=gx.fn.getDecimalValue("vVALORTOTALTXT",'.',',') ;
   };
   this.e13ze2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11ze2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ze2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16];
   this.GXLastCtrlId =16;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEFANTASIA",gxz:"ZV13NomeFantasia",gxold:"OV13NomeFantasia",gxvar:"AV13NomeFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13NomeFantasia=Value},v2z:function(Value){gx.O.ZV13NomeFantasia=Value},v2c:function(){gx.fn.setControlValue("vNOMEFANTASIA",gx.O.AV13NomeFantasia,0)},c2v:function(){gx.O.AV13NomeFantasia=this.val()},val:function(){return gx.fn.getControlValue("vNOMEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV14ValorTotal",gxold:"OV14ValorTotal",gxvar:"AV14ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV14ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTAL",gx.O.AV14ValorTotal,2,',')},c2v:function(){gx.O.AV14ValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.AV13NomeFantasia = "" ;
   this.ZV13NomeFantasia = "" ;
   this.OV13NomeFantasia = "" ;
   this.AV14ValorTotal = 0 ;
   this.ZV14ValorTotal = 0 ;
   this.OV14ValorTotal = 0 ;
   this.AV13NomeFantasia = "" ;
   this.AV14ValorTotal = 0 ;
   this.AV15ValorTotalTxt = 0 ;
   this.Events = {"e13ze2_client": ["ENTER", true] ,"e11ze2_client": ["'FECHAR'", true] ,"e15ze2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16SnOk',fld:'vSNOK'},{av:'AV13NomeFantasia',fld:'vNOMEFANTASIA'},{av:'AV15ValorTotalTxt',fld:'vVALORTOTALTXT'}],[{av:'AV16SnOk',fld:'vSNOK'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16SnOk',fld:'vSNOK'},{av:'AV13NomeFantasia',fld:'vNOMEFANTASIA'},{av:'AV15ValorTotalTxt',fld:'vVALORTOTALTXT'}],[{av:'AV16SnOk',fld:'vSNOK'},{av:'AV13NomeFantasia',fld:'vNOMEFANTASIA'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV15ValorTotalTxt", "vVALORTOTALTXT", 0, "decimal");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbaixarcontasfavorecido());
