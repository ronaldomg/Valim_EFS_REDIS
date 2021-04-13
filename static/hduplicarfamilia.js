/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:18.25
*/
gx.evt.autoSkip = false;
gx.define('hduplicarfamilia', false, function () {
   this.ServerClass =  "hduplicarfamilia" ;
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
      this.AV14FamiliaIdParm=gx.fn.getControlValue("vFAMILIAIDPARM") ;
   };
   this.Validv_Familiaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFAMILIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12wl2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13wl2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15wl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,19];
   this.GXLastCtrlId =19;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaid,isvalid:null,rgrid:[],fld:"vFAMILIAID",gxz:"ZV11FamiliaId",gxold:"OV11FamiliaId",gxvar:"AV11FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11FamiliaId=Value},v2z:function(Value){gx.O.ZV11FamiliaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAID",gx.O.AV11FamiliaId,0)},c2v:function(){gx.O.AV11FamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"JSFAM", format:2,grid:0};
   this.AV11FamiliaId = "" ;
   this.ZV11FamiliaId = "" ;
   this.OV11FamiliaId = "" ;
   this.AV11FamiliaId = "" ;
   this.AV14FamiliaIdParm = "" ;
   this.A2957FamiliaId = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.Events = {"e12wl2_client": ["ENTER", true] ,"e13wl2_client": ["'CANCELAR'", true] ,"e15wl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11FamiliaId',fld:'vFAMILIAID'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV14FamiliaIdParm',fld:'vFAMILIAIDPARM',hsh:true}],[{av:'AV13SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14FamiliaIdParm", "vFAMILIAIDPARM", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarfamilia());
