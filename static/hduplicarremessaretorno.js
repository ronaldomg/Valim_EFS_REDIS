/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:36.43
*/
gx.evt.autoSkip = false;
gx.define('hduplicarremessaretorno', false, function () {
   this.ServerClass =  "hduplicarremessaretorno" ;
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
   this.Validv_Remessaretornoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vREMESSARETORNOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Remessaretornoidnovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vREMESSARETORNOIDNOVO");
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
   this.e12iy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13iy2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15iy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,22,23,24,27];
   this.GXLastCtrlId =27;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Remessaretornoid,isvalid:null,rgrid:[],fld:"vREMESSARETORNOID",gxz:"ZV11RemessaRetornoId",gxold:"OV11RemessaRetornoId",gxvar:"AV11RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11RemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOID",gx.O.AV11RemessaRetornoId,0)},c2v:function(){gx.O.AV11RemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNODESCRICAO",gxz:"ZV15RemessaRetornoDescricao",gxold:"OV15RemessaRetornoDescricao",gxvar:"AV15RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV15RemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNODESCRICAO",gx.O.AV15RemessaRetornoDescricao,0)},c2v:function(){gx.O.AV15RemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Remessaretornoidnovo,isvalid:null,rgrid:[],fld:"vREMESSARETORNOIDNOVO",gxz:"ZV12RemessaRetornoIdNovo",gxold:"OV12RemessaRetornoIdNovo",gxvar:"AV12RemessaRetornoIdNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12RemessaRetornoIdNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12RemessaRetornoIdNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOIDNOVO",gx.O.AV12RemessaRetornoIdNovo,0)},c2v:function(){gx.O.AV12RemessaRetornoIdNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREMESSARETORNOIDNOVO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTERES",gxz:"ZV16QtdeCaracteres",gxold:"OV16QtdeCaracteres",gxvar:"AV16QtdeCaracteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16QtdeCaracteres=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16QtdeCaracteres=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTERES",gx.O.AV16QtdeCaracteres,0)},c2v:function(){gx.O.AV16QtdeCaracteres=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTERES",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"JS", format:2,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV13EmpresaPadrao",gxold:"OV13EmpresaPadrao",gxvar:"AV13EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV13EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV13EmpresaPadrao,0)},c2v:function(){gx.O.AV13EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"PROMPT_REMESSARETORNOID",grid:0};
   this.AV11RemessaRetornoId = 0 ;
   this.ZV11RemessaRetornoId = 0 ;
   this.OV11RemessaRetornoId = 0 ;
   this.AV15RemessaRetornoDescricao = "" ;
   this.ZV15RemessaRetornoDescricao = "" ;
   this.OV15RemessaRetornoDescricao = "" ;
   this.AV12RemessaRetornoIdNovo = 0 ;
   this.ZV12RemessaRetornoIdNovo = 0 ;
   this.OV12RemessaRetornoIdNovo = 0 ;
   this.AV16QtdeCaracteres = 0 ;
   this.ZV16QtdeCaracteres = 0 ;
   this.OV16QtdeCaracteres = 0 ;
   this.AV13EmpresaPadrao = "" ;
   this.ZV13EmpresaPadrao = "" ;
   this.OV13EmpresaPadrao = "" ;
   this.AV11RemessaRetornoId = 0 ;
   this.AV15RemessaRetornoDescricao = "" ;
   this.AV12RemessaRetornoIdNovo = 0 ;
   this.AV16QtdeCaracteres = 0 ;
   this.AV13EmpresaPadrao = "" ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.Events = {"e12iy2_client": ["ENTER", true] ,"e13iy2_client": ["'FECHAR'", true] ,"e15iy2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'A2784RemessaRetornoEmpresaId',fld:'REMESSARETORNOEMPRESAID'},{av:'AV13EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'AV12RemessaRetornoIdNovo',fld:'vREMESSARETORNOIDNOVO'}],[{av:'AV14tpErro',fld:'vTPERRO'},{av:'AV24GXLvl43',fld:'vGXLVL43'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_REMESSARETORNOID", [10]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarremessaretorno());
