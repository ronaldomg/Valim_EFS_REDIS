/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:56:31.66
*/
gx.evt.autoSkip = false;
gx.define('hbloqueiobaixa', false, function () {
   this.ServerClass =  "hbloqueiobaixa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV5ContaPagRecPagRec=gx.fn.getControlValue("vCONTAPAGRECPAGREC") ;
   };
   this.e112612_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142612_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152612_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13];
   this.GXLastCtrlId =13;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={fld:"TXTMSG", format:0,grid:0};
   this.AV5ContaPagRecPagRec = "" ;
   this.Events = {"e112612_client": ["'FECHAR'", true] ,"e142612_client": ["ENTER", true] ,"e152612_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV5ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true}],[]];
   this.setVCMap("AV5ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbloqueiobaixa());
