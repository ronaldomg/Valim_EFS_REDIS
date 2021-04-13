/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 0:47:25.4
*/
gx.evt.autoSkip = false;
gx.define('rwdrecentlinks', true, function (CmpContext) {
   this.ServerClass =  "rwdrecentlinks" ;
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
   this.e11051_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("MAINTABLE","Class") == "RecentLinksMainTable" )
      {
         gx.fn.setCtrlProperty("MAINTABLE","Class", "RecentLinksMainTable RecentLinksMainTableExpanded" );
      }
      else
      {
         gx.fn.setCtrlProperty("MAINTABLE","Class", "RecentLinksMainTable" );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MAINTABLE","Class")',ctrl:'MAINTABLE',prop:'Class'}]);
   };
   this.e13052_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e14052_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,9,10,11,12];
   this.GXLastCtrlId =12;
   this.LinksContainer = new gx.grid.grid(this, 2,"WbpLvl2",8,"Links","Links","LinksContainer",this.CmpContext,this.IsMasterPage,"rwdrecentlinks",[],true,9999,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",true,[1,0,0,0]);
   var LinksContainer = this.LinksContainer;
   LinksContainer.startDiv("Linkstable","0px","0px");
   LinksContainer.startDiv("","0px","0px");
   LinksContainer.startDiv("","0px","0px");
   LinksContainer.addTextBlock('PLACE',null);
   LinksContainer.endDiv();
   LinksContainer.endDiv();
   LinksContainer.endDiv();
   this.setGrid(LinksContainer);
   GXValidFnc[2]={fld:"",grid:0};
   GXValidFnc[3]={fld:"MAINTABLE",grid:0};
   GXValidFnc[4]={fld:"",grid:0};
   GXValidFnc[5]={fld:"",grid:0};
   GXValidFnc[6]={fld:"RECENTTEXT", format:0,grid:0};
   GXValidFnc[7]={fld:"",grid:0};
   GXValidFnc[9]={fld:"LINKSTABLE",grid:8};
   GXValidFnc[10]={fld:"",grid:8};
   GXValidFnc[11]={fld:"",grid:8};
   GXValidFnc[12]={fld:"PLACE", format:0,grid:8};
   this.AV6FormCaption = "" ;
   this.AV7FormPgmName = "" ;
   this.Events = {"e13052_client": ["ENTER", true] ,"e14052_client": ["CANCEL", true] ,"e11051_client": ["RECENTTEXT.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'LINKS_nFirstRecordOnPage'},{av:'LINKS_nEOF'},{av:'AV6FormCaption',fld:'vFORMCAPTION',hsh:true},{av:'sPrefix'}],[]];
   this.EvtParms["RECENTTEXT.CLICK"] = [[{av:'gx.fn.getCtrlProperty("MAINTABLE","Class")',ctrl:'MAINTABLE',prop:'Class'}],[{av:'gx.fn.getCtrlProperty("MAINTABLE","Class")',ctrl:'MAINTABLE',prop:'Class'}]];
   this.EvtParms["LINKS.LOAD"] = [[{av:'AV6FormCaption',fld:'vFORMCAPTION',hsh:true}],[{av:'AV11RecentLinksItems',fld:'vRECENTLINKSITEMS'},{av:'AV9i',fld:'vI'},{av:'AV12RecentLinksItem',fld:'vRECENTLINKSITEM'},{av:'AV13PlaceCaption',fld:'vPLACECAPTION'},{av:'gx.fn.getCtrlProperty("PLACE","Caption")',ctrl:'PLACE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PLACE","Link")',ctrl:'PLACE',prop:'Link'}]];
   this.setVCMap("AV6FormCaption", "vFORMCAPTION", 0, "char");
   this.setVCMap("AV6FormCaption", "vFORMCAPTION", 0, "char");
   LinksContainer.addRefreshingVar({rfrVar:"AV6FormCaption"});
   this.InitStandaloneVars( );
});
