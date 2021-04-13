/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:7:33.1
*/
gx.evt.autoSkip = false;
gx.define('hvisualizarelatoriotexto', false, function () {
   this.ServerClass =  "hvisualizarelatoriotexto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV6html=gx.fn.getControlValue("vHTML") ;
   };
   this.e132am2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142am1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,7];
   this.GXLastCtrlId =7;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"ABREDIV", format:2,grid:0};
   GXValidFnc[6]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[7]={fld:"FECHADIV", format:2,grid:0};
   this.AV6html = "" ;
   this.Events = {"e132am2_client": ["ENTER", true] ,"e142am1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV6html',fld:'vHTML'},{av:'AV5Texto',fld:'vTEXTO'}],[{av:'gx.fn.getCtrlProperty("ABREDIV","Caption")',ctrl:'ABREDIV',prop:'Caption'},{av:'gx.fn.getCtrlProperty("FECHADIV","Caption")',ctrl:'FECHADIV',prop:'Caption'},{av:'AV7varcharCollection',fld:'vVARCHARCOLLECTION'},{av:'AV11GXV1',fld:'vGXV1'},{av:'AV8varchar',fld:'vVARCHAR'},{av:'AV5Texto',fld:'vTEXTO'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Caption")',ctrl:'TEXTBLOCK1',prop:'Caption'}]];
   this.setVCMap("AV6html", "vHTML", 0, "vchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvisualizarelatoriotexto());
