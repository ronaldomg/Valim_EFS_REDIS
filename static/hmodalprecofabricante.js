/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:7:23.82
*/
gx.evt.autoSkip = false;
gx.define('hmodalprecofabricante', false, function () {
   this.ServerClass =  "hmodalprecofabricante" ;
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
      this.AV13TpAtualizacao=gx.fn.getIntegerValue("vTPATUALIZACAO",'.') ;
      this.AV12MsgTela=gx.fn.getControlValue("vMSGTELA") ;
   };
   this.e122aj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132aj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152aj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,9];
   this.GXLastCtrlId =9;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE6",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   this.AV13TpAtualizacao = 0 ;
   this.AV12MsgTela = "" ;
   this.Events = {"e122aj2_client": ["ENTER", true] ,"e132aj2_client": ["'FECHAR'", true] ,"e152aj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13TpAtualizacao',fld:'vTPATUALIZACAO',hsh:true},{av:'AV12MsgTela',fld:'vMSGTELA'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV12MsgTela',fld:'vMSGTELA'}],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV13TpAtualizacao", "vTPATUALIZACAO", 0, "int");
   this.setVCMap("AV12MsgTela", "vMSGTELA", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalprecofabricante());
