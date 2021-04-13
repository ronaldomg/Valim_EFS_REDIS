/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:35.81
*/
gx.evt.autoSkip = false;
gx.define('hduplicarocorrenciaretorno', false, function () {
   this.ServerClass =  "hduplicarocorrenciaretorno" ;
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
      this.AV19RemessaRetornoIdIn=gx.fn.getIntegerValue("vREMESSARETORNOIDIN",'.') ;
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
   this.Validv_Remessaretornoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vREMESSARETORNOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12ix2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ix2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ix2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,19,20,21,22];
   this.GXLastCtrlId =22;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Remessaretornoid,isvalid:null,rgrid:[],fld:"vREMESSARETORNOID",gxz:"ZV15RemessaRetornoId",gxold:"OV15RemessaRetornoId",gxvar:"AV15RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15RemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOID",gx.O.AV15RemessaRetornoId,0)},c2v:function(){gx.O.AV15RemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNODESCRICAO",gxz:"ZV16RemessaRetornoDescricao",gxold:"OV16RemessaRetornoDescricao",gxvar:"AV16RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV16RemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNODESCRICAO",gx.O.AV16RemessaRetornoDescricao,0)},c2v:function(){gx.O.AV16RemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Remessaretornoempresaid,isvalid:null,rgrid:[],fld:"vREMESSARETORNOEMPRESAID",gxz:"ZV17RemessaRetornoEmpresaId",gxold:"OV17RemessaRetornoEmpresaId",gxvar:"AV17RemessaRetornoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17RemessaRetornoEmpresaId=Value},v2z:function(Value){gx.O.ZV17RemessaRetornoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOEMPRESAID",gx.O.AV17RemessaRetornoEmpresaId,0)},c2v:function(){gx.O.AV17RemessaRetornoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTERES",gxz:"ZV18QtdeCaracteres",gxold:"OV18QtdeCaracteres",gxvar:"AV18QtdeCaracteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18QtdeCaracteres=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18QtdeCaracteres=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTERES",gx.O.AV18QtdeCaracteres,0)},c2v:function(){gx.O.AV18QtdeCaracteres=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTERES",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"JS", format:2,grid:0};
   GXValidFnc[22]={fld:"PROMPT_REMESSARETORNOID",grid:0};
   this.AV15RemessaRetornoId = 0 ;
   this.ZV15RemessaRetornoId = 0 ;
   this.OV15RemessaRetornoId = 0 ;
   this.AV16RemessaRetornoDescricao = "" ;
   this.ZV16RemessaRetornoDescricao = "" ;
   this.OV16RemessaRetornoDescricao = "" ;
   this.AV17RemessaRetornoEmpresaId = "" ;
   this.ZV17RemessaRetornoEmpresaId = "" ;
   this.OV17RemessaRetornoEmpresaId = "" ;
   this.AV18QtdeCaracteres = 0 ;
   this.ZV18QtdeCaracteres = 0 ;
   this.OV18QtdeCaracteres = 0 ;
   this.AV15RemessaRetornoId = 0 ;
   this.AV16RemessaRetornoDescricao = "" ;
   this.AV17RemessaRetornoEmpresaId = "" ;
   this.AV18QtdeCaracteres = 0 ;
   this.AV19RemessaRetornoIdIn = 0 ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.Events = {"e12ix2_client": ["ENTER", true] ,"e13ix2_client": ["'FECHAR'", true] ,"e15ix2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'A2784RemessaRetornoEmpresaId',fld:'REMESSARETORNOEMPRESAID'},{av:'AV17RemessaRetornoEmpresaId',fld:'vREMESSARETORNOEMPRESAID'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19RemessaRetornoIdIn',fld:'vREMESSARETORNOIDIN',hsh:true}],[{av:'AV12tpErro',fld:'vTPERRO'},{av:'AV25GXLvl45',fld:'vGXLVL45'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_REMESSARETORNOID", [10]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV19RemessaRetornoIdIn", "vREMESSARETORNOIDIN", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarocorrenciaretorno());
