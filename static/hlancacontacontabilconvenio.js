/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:17:27.91
*/
gx.evt.autoSkip = false;
gx.define('hlancacontacontabilconvenio', false, function () {
   this.ServerClass =  "hlancacontacontabilconvenio" ;
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
      this.AV19ConvenioId=gx.fn.getIntegerValue("vCONVENIOID",'.') ;
      this.AV20ValoresConvenioTpLancamento=gx.fn.getControlValue("vVALORESCONVENIOTPLANCAMENTO") ;
   };
   this.Validv_Conveniotelaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOTELAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12co2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13co2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15co2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,19,21,29,30,31,32];
   this.GXLastCtrlId =32;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Conveniotelaid,isvalid:null,rgrid:[],fld:"vCONVENIOTELAID",gxz:"ZV24ConvenioTelaId",gxold:"OV24ConvenioTelaId",gxvar:"AV24ConvenioTelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ConvenioTelaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ConvenioTelaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOTELAID",gx.O.AV24ConvenioTelaId,0)},c2v:function(){gx.O.AV24ConvenioTelaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOTELAID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV23ConvenioDescricao",gxold:"OV23ConvenioDescricao",gxvar:"AV23ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV23ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV23ConvenioDescricao,0)},c2v:function(){gx.O.AV23ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORESCONVENIOTIPO",gxz:"ZV25ValoresConvenioTipo",gxold:"OV25ValoresConvenioTipo",gxvar:"AV25ValoresConvenioTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25ValoresConvenioTipo=Value},v2z:function(Value){gx.O.ZV25ValoresConvenioTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vVALORESCONVENIOTIPO",gx.O.AV25ValoresConvenioTipo)},c2v:function(){gx.O.AV25ValoresConvenioTipo=this.val()},val:function(){return gx.fn.getControlValue("vVALORESCONVENIOTIPO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORESCONVENIODATA",gxz:"ZV26ValoresConvenioData",gxold:"OV26ValoresConvenioData",gxvar:"AV26ValoresConvenioData",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ValoresConvenioData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26ValoresConvenioData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vVALORESCONVENIODATA",gx.O.AV26ValoresConvenioData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26ValoresConvenioData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vVALORESCONVENIODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV11EmpresaPadrao",gxold:"OV11EmpresaPadrao",gxvar:"AV11EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV11EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV11EmpresaPadrao,0)},c2v:function(){gx.O.AV11EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"JS", format:2,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV29QTde",gxold:"OV29QTde",gxvar:"AV29QTde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29QTde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29QTde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV29QTde,0)},c2v:function(){gx.O.AV29QTde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"PROMPT_CONVENIOTELAID",grid:0};
   this.AV24ConvenioTelaId = 0 ;
   this.ZV24ConvenioTelaId = 0 ;
   this.OV24ConvenioTelaId = 0 ;
   this.AV23ConvenioDescricao = "" ;
   this.ZV23ConvenioDescricao = "" ;
   this.OV23ConvenioDescricao = "" ;
   this.AV25ValoresConvenioTipo = "" ;
   this.ZV25ValoresConvenioTipo = "" ;
   this.OV25ValoresConvenioTipo = "" ;
   this.AV26ValoresConvenioData = gx.date.nullDate() ;
   this.ZV26ValoresConvenioData = gx.date.nullDate() ;
   this.OV26ValoresConvenioData = gx.date.nullDate() ;
   this.AV11EmpresaPadrao = "" ;
   this.ZV11EmpresaPadrao = "" ;
   this.OV11EmpresaPadrao = "" ;
   this.AV29QTde = 0 ;
   this.ZV29QTde = 0 ;
   this.OV29QTde = 0 ;
   this.AV24ConvenioTelaId = 0 ;
   this.AV23ConvenioDescricao = "" ;
   this.AV25ValoresConvenioTipo = "" ;
   this.AV26ValoresConvenioData = gx.date.nullDate() ;
   this.AV11EmpresaPadrao = "" ;
   this.AV29QTde = 0 ;
   this.AV19ConvenioId = 0 ;
   this.AV20ValoresConvenioTpLancamento = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.Events = {"e12co2_client": ["ENTER", true] ,"e13co2_client": ["'FECHAR'", true] ,"e15co2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV24ConvenioTelaId',fld:'vCONVENIOTELAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV25ValoresConvenioTipo',fld:'vVALORESCONVENIOTIPO'},{av:'AV26ValoresConvenioData',fld:'vVALORESCONVENIODATA'}],[{av:'AV27tpErro',fld:'vTPERRO'},{av:'AV35GXLvl60',fld:'vGXLVL60'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_CONVENIOTELAID", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19ConvenioId", "vCONVENIOID", 0, "int");
   this.setVCMap("AV20ValoresConvenioTpLancamento", "vVALORESCONVENIOTPLANCAMENTO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlancacontacontabilconvenio());
