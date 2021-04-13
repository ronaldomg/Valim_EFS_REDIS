/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 0:47:21.22
*/
gx.evt.autoSkip = false;
gx.define('hrecentlinks', true, function (CmpContext) {
   this.ServerClass =  "hrecentlinks" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e123h2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e133h2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,10,11];
   this.GXLastCtrlId =11;
   this.LinksContainer = new gx.grid.grid(this, 2,"WbpLvl2",7,"Links","Links","LinksContainer",this.CmpContext,this.IsMasterPage,"hrecentlinks",[],true,0,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var LinksContainer = this.LinksContainer;
   LinksContainer.startRow("","","","","","");
   LinksContainer.startCell("","","","","","","","","","");
   LinksContainer.addTextBlock('PLACE',null);
   LinksContainer.endCell();
   LinksContainer.endRow();
   this.setGrid(LinksContainer);
   GXValidFnc[2]={fld:"TABLE",grid:0};
   GXValidFnc[5]={fld:"RECENTTEXT", format:0,grid:0};
   GXValidFnc[10]={fld:"PLACE", format:0,grid:7};
   GXValidFnc[11]={fld:"BOTTOMLINE",grid:0};
   this.AV8FormCaption = "" ;
   this.AV9FormPgmName = "" ;
   this.Events = {"e123h2_client": ["ENTER", true] ,"e133h2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'LINKS_nFirstRecordOnPage'},{av:'LINKS_nEOF'},{av:'sPrefix'}],[]];
   this.EvtParms["LINKS.LOAD"] = [[],[]];
   this.InitStandaloneVars( );
});
