/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:45:54.15
*/
gx.evt.autoSkip = false;
gx.define('hmodalcopiarretencoes', false, function () {
   this.ServerClass =  "hmodalcopiarretencoes" ;
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
   this.Validv_Retencaotipoorigem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vRETENCAOTIPOORIGEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12jf2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13jf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15jf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Retencaotipoorigem,isvalid:null,rgrid:[],fld:"vRETENCAOTIPOORIGEM",gxz:"ZV11RetencaoTipoOrigem",gxold:"OV11RetencaoTipoOrigem",gxvar:"AV11RetencaoTipoOrigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11RetencaoTipoOrigem=Value},v2z:function(Value){gx.O.ZV11RetencaoTipoOrigem=Value},v2c:function(){gx.fn.setComboBoxValue("vRETENCAOTIPOORIGEM",gx.O.AV11RetencaoTipoOrigem)},c2v:function(){gx.O.AV11RetencaoTipoOrigem=this.val()},val:function(){return gx.fn.getControlValue("vRETENCAOTIPOORIGEM")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRETENCAOTIPODESTINO",gxz:"ZV12RetencaoTipoDestino",gxold:"OV12RetencaoTipoDestino",gxvar:"AV12RetencaoTipoDestino",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12RetencaoTipoDestino=Value},v2z:function(Value){gx.O.ZV12RetencaoTipoDestino=Value},v2c:function(){gx.fn.setComboBoxValue("vRETENCAOTIPODESTINO",gx.O.AV12RetencaoTipoDestino)},c2v:function(){gx.O.AV12RetencaoTipoDestino=this.val()},val:function(){return gx.fn.getControlValue("vRETENCAOTIPODESTINO")},nac:gx.falseFn};
   this.AV11RetencaoTipoOrigem = "" ;
   this.ZV11RetencaoTipoOrigem = "" ;
   this.OV11RetencaoTipoOrigem = "" ;
   this.AV12RetencaoTipoDestino = "" ;
   this.ZV12RetencaoTipoDestino = "" ;
   this.OV12RetencaoTipoDestino = "" ;
   this.AV11RetencaoTipoOrigem = "" ;
   this.AV12RetencaoTipoDestino = "" ;
   this.A2883RetencaoTipo = "" ;
   this.A2884RetencaoEmpresaId = "" ;
   this.Events = {"e12jf2_client": ["ENTER", true] ,"e13jf2_client": ["'FECHAR'", true] ,"e15jf2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11RetencaoTipoOrigem',fld:'vRETENCAOTIPOORIGEM'},{av:'A2884RetencaoEmpresaId',fld:'RETENCAOEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2883RetencaoTipo',fld:'RETENCAOTIPO'},{av:'AV12RetencaoTipoDestino',fld:'vRETENCAOTIPODESTINO'}],[{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV19GXLvl31',fld:'vGXLVL31'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalcopiarretencoes());
