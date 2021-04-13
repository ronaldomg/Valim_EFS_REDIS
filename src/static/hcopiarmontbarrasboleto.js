/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:44:2.50
*/
gx.evt.autoSkip = false;
gx.define('hcopiarmontbarrasboleto', false, function () {
   this.ServerClass =  "hcopiarmontbarrasboleto" ;
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
   this.Validv_Montbarrasboletoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMONTBARRASBOLETOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Montbarrasboletoidnovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMONTBARRASBOLETOIDNOVO");
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
   this.e12j52_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13j52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15j52_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,24,25,26];
   this.GXLastCtrlId =26;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Montbarrasboletoid,isvalid:null,rgrid:[],fld:"vMONTBARRASBOLETOID",gxz:"ZV11MontBarrasBoletoId",gxold:"OV11MontBarrasBoletoId",gxvar:"AV11MontBarrasBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11MontBarrasBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11MontBarrasBoletoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMONTBARRASBOLETOID",gx.O.AV11MontBarrasBoletoId,0)},c2v:function(){gx.O.AV11MontBarrasBoletoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMONTBARRASBOLETOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMONTBARRASBOLETOTIPO",gxz:"ZV17MontBarrasBoletoTipo",gxold:"OV17MontBarrasBoletoTipo",gxvar:"AV17MontBarrasBoletoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17MontBarrasBoletoTipo=Value},v2z:function(Value){gx.O.ZV17MontBarrasBoletoTipo=Value},v2c:function(){gx.fn.setControlValue("vMONTBARRASBOLETOTIPO",gx.O.AV17MontBarrasBoletoTipo,0)},c2v:function(){gx.O.AV17MontBarrasBoletoTipo=this.val()},val:function(){return gx.fn.getControlValue("vMONTBARRASBOLETOTIPO")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Montbarrasboletoidnovo,isvalid:null,rgrid:[],fld:"vMONTBARRASBOLETOIDNOVO",gxz:"ZV15MontBarrasBoletoIdNovo",gxold:"OV15MontBarrasBoletoIdNovo",gxvar:"AV15MontBarrasBoletoIdNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15MontBarrasBoletoIdNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15MontBarrasBoletoIdNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMONTBARRASBOLETOIDNOVO",gx.O.AV15MontBarrasBoletoIdNovo,0)},c2v:function(){gx.O.AV15MontBarrasBoletoIdNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMONTBARRASBOLETOIDNOVO",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"JS", format:2,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"PROMPT_MONTBARRASBOLETOID",grid:0};
   this.AV11MontBarrasBoletoId = 0 ;
   this.ZV11MontBarrasBoletoId = 0 ;
   this.OV11MontBarrasBoletoId = 0 ;
   this.AV17MontBarrasBoletoTipo = "" ;
   this.ZV17MontBarrasBoletoTipo = "" ;
   this.OV17MontBarrasBoletoTipo = "" ;
   this.AV15MontBarrasBoletoIdNovo = 0 ;
   this.ZV15MontBarrasBoletoIdNovo = 0 ;
   this.OV15MontBarrasBoletoIdNovo = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV11MontBarrasBoletoId = 0 ;
   this.AV17MontBarrasBoletoTipo = "" ;
   this.AV15MontBarrasBoletoIdNovo = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.A2820MontBarrasBoletoId = 0 ;
   this.A2819MontBarrasBoletoEmpresaId = "" ;
   this.Events = {"e12j52_client": ["ENTER", true] ,"e13j52_client": ["'FECHAR'", true] ,"e15j52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'A2819MontBarrasBoletoEmpresaId',fld:'MONTBARRASBOLETOEMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'AV15MontBarrasBoletoIdNovo',fld:'vMONTBARRASBOLETOIDNOVO'}],[{av:'AV16tpErro',fld:'vTPERRO'},{av:'AV22GXLvl40',fld:'vGXLVL40'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_MONTBARRASBOLETOID", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiarmontbarrasboleto());
