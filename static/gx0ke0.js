/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:24.88
*/
gx.evt.autoSkip = false;
gx.define('gx0ke0', false, function () {
   this.ServerClass =  "gx0ke0" ;
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
      this.AV7pLanguageDBName=gx.fn.getControlValue("vPLANGUAGEDBNAME") ;
   };
   this.e1321b2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1421b1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,18,22,23,26];
   this.GXLastCtrlId =26;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",21,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ke0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",22,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9849,23,"LANGUAGEDBNAME","DBName","Selecionar","LanguageDBName","svchar",0,"px",40,40,"left",null,[],9849,"LanguageDBName",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKLANGUAGEDBNAME", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLANGUAGEDBNAME",gxz:"ZV6cLanguageDBName",gxold:"OV6cLanguageDBName",gxvar:"AV6cLanguageDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cLanguageDBName=Value},v2z:function(Value){gx.O.ZV6cLanguageDBName=Value},v2c:function(){gx.fn.setControlValue("vCLANGUAGEDBNAME",gx.O.AV6cLanguageDBName,0)},c2v:function(){gx.O.AV6cLanguageDBName=this.val()},val:function(){return gx.fn.getControlValue("vCLANGUAGEDBNAME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"GROUP2",grid:0};
   GXValidFnc[18]={fld:"TABLE3",grid:0};
   GXValidFnc[22]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21),gx.O.AV5LinkSelection,gx.O.AV10Linkselection_GXI)},c2v:function(){gx.O.AV10Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(21))}, gxvar_GXI:'AV10Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANGUAGEDBNAME",gxz:"Z9849LanguageDBName",gxold:"O9849LanguageDBName",gxvar:"A9849LanguageDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9849LanguageDBName=Value},v2z:function(Value){gx.O.Z9849LanguageDBName=Value},v2c:function(row){gx.fn.setGridControlValue("LANGUAGEDBNAME",row || gx.fn.currentGridRowImpl(21),gx.O.A9849LanguageDBName,0)},c2v:function(){gx.O.A9849LanguageDBName=this.val()},val:function(row){return gx.fn.getGridControlValue("LANGUAGEDBNAME",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLE4",grid:0};
   this.AV6cLanguageDBName = "" ;
   this.ZV6cLanguageDBName = "" ;
   this.OV6cLanguageDBName = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9849LanguageDBName = "" ;
   this.O9849LanguageDBName = "" ;
   this.AV6cLanguageDBName = "" ;
   this.AV7pLanguageDBName = "" ;
   this.AV5LinkSelection = "" ;
   this.A9849LanguageDBName = "" ;
   this.Events = {"e1321b2_client": ["ENTER", true] ,"e1421b1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLanguageDBName',fld:'vCLANGUAGEDBNAME'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9849LanguageDBName',fld:'LANGUAGEDBNAME'}],[{av:'AV7pLanguageDBName',fld:'vPLANGUAGEDBNAME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLanguageDBName',fld:'vCLANGUAGEDBNAME'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLanguageDBName',fld:'vCLANGUAGEDBNAME'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLanguageDBName',fld:'vCLANGUAGEDBNAME'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLanguageDBName',fld:'vCLANGUAGEDBNAME'}],[]];
   this.setVCMap("AV7pLanguageDBName", "vPLANGUAGEDBNAME", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ke0());
