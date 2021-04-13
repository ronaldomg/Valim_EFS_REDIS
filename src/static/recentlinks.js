/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 0:47:25.43
*/
gx.evt.autoSkip = false;
gx.define('recentlinks', true, function (CmpContext) {
   this.ServerClass =  "recentlinks" ;
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
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV6FormCaption=gx.fn.getControlValue("vFORMCAPTION") ;
   };
   this.e13022_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e14022_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,10,12,14];
   this.GXLastCtrlId =14;
   this.LinksContainer = new gx.grid.grid(this, 2,"WbpLvl2",7,"Links","Links","LinksContainer",this.CmpContext,this.IsMasterPage,"recentlinks",[],true,0,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var LinksContainer = this.LinksContainer;
   LinksContainer.startRow("","","","","","");
   LinksContainer.startCell("","","","","","","37px","","","");
   LinksContainer.addTextBlock('PLACE',null);
   LinksContainer.endCell();
   LinksContainer.startCell("","","","","","","4px","","","td100");
   LinksContainer.addTextBlock('PIPE',null);
   LinksContainer.endCell();
   LinksContainer.endRow();
   this.setGrid(LinksContainer);
   GXValidFnc[2]={fld:"TABLE",grid:0};
   GXValidFnc[5]={fld:"RECENTTEXT", format:0,grid:0};
   GXValidFnc[10]={fld:"PLACE", format:0,grid:7};
   GXValidFnc[12]={fld:"PIPE", format:0,grid:7};
   GXValidFnc[14]={fld:"BOTTOMLINE",grid:0};
   this.AV6FormCaption = "" ;
   this.AV7FormPgmName = "" ;
   this.Events = {"e13022_client": ["ENTER", true] ,"e14022_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'LINKS_nFirstRecordOnPage'},{av:'LINKS_nEOF'},{av:'AV6FormCaption',fld:'vFORMCAPTION',hsh:true},{av:'sPrefix'}],[]];
   this.EvtParms["LINKS.LOAD"] = [[{av:'AV6FormCaption',fld:'vFORMCAPTION',hsh:true}],[{av:'AV11RecentLinksItems',fld:'vRECENTLINKSITEMS'},{av:'AV9i',fld:'vI'},{av:'AV12RecentLinksItem',fld:'vRECENTLINKSITEM'},{av:'AV13PlaceCaption',fld:'vPLACECAPTION'},{av:'gx.fn.getCtrlProperty("PLACE","Caption")',ctrl:'PLACE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PLACE","Link")',ctrl:'PLACE',prop:'Link'}]];
   this.setVCMap("AV6FormCaption", "vFORMCAPTION", 0, "char");
   this.setVCMap("AV6FormCaption", "vFORMCAPTION", 0, "char");
   LinksContainer.addRefreshingVar({rfrVar:"AV6FormCaption"});
   this.InitStandaloneVars( );
});
