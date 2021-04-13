/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:45.57
*/
gx.evt.autoSkip = false;
gx.define('hverificaforemailenviado', false, function () {
   this.ServerClass =  "hverificaforemailenviado" ;
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
   this.e1227q2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1427q1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENVIARFORNECEDORES",gxz:"ZV5EnviarFornecedores",gxold:"OV5EnviarFornecedores",gxvar:"AV5EnviarFornecedores",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5EnviarFornecedores=Value},v2z:function(Value){gx.O.ZV5EnviarFornecedores=Value},v2c:function(){gx.fn.setComboBoxValue("vENVIARFORNECEDORES",gx.O.AV5EnviarFornecedores)},c2v:function(){gx.O.AV5EnviarFornecedores=this.val()},val:function(){return gx.fn.getControlValue("vENVIARFORNECEDORES")},nac:gx.falseFn};
   this.AV5EnviarFornecedores = "" ;
   this.ZV5EnviarFornecedores = "" ;
   this.OV5EnviarFornecedores = "" ;
   this.AV5EnviarFornecedores = "" ;
   this.Events = {"e1227q2_client": ["ENTER", true] ,"e1427q1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV5EnviarFornecedores',fld:'vENVIARFORNECEDORES'}],[]];
   this.EnterCtrl = ["BUTTON2"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hverificaforemailenviado());
