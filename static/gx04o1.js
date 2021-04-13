/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:39.57
*/
gx.evt.autoSkip = false;
gx.define('gx04o1', false, function () {
   this.ServerClass =  "gx04o1" ;
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
      this.AV7pLogTabelaId=gx.fn.getIntegerValue("vPLOGTABELAID",'.') ;
      this.AV8pLogTabelaCampo=gx.fn.getControlValue("vPLOGTABELACAMPO") ;
   };
   this.e131xo2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141xo1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,18,22,23,24,27];
   this.GXLastCtrlId =27;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",21,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx04o1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",22,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1615,23,"LOGTABELACAMPO","Nome do Campo","","LogTabelaCampo","svchar",0,"px",31,31,"left",null,[],1615,"LogTabelaCampo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1614,24,"LOGTABELAID","Tabela Id","","LogTabelaId","int",0,"px",16,16,"right",null,[],1614,"LogTabelaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKLOGTABELACAMPO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGTABELACAMPO",gxz:"ZV6cLogTabelaCampo",gxold:"OV6cLogTabelaCampo",gxvar:"AV6cLogTabelaCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cLogTabelaCampo=Value},v2z:function(Value){gx.O.ZV6cLogTabelaCampo=Value},v2c:function(){gx.fn.setControlValue("vCLOGTABELACAMPO",gx.O.AV6cLogTabelaCampo,0)},c2v:function(){gx.O.AV6cLogTabelaCampo=this.val()},val:function(){return gx.fn.getControlValue("vCLOGTABELACAMPO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"GROUP2",grid:0};
   GXValidFnc[18]={fld:"TABLE3",grid:0};
   GXValidFnc[22]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(21))}, gxvar_GXI:'AV11Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELACAMPO",gxz:"Z1615LogTabelaCampo",gxold:"O1615LogTabelaCampo",gxvar:"A1615LogTabelaCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1615LogTabelaCampo=Value},v2z:function(Value){gx.O.Z1615LogTabelaCampo=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELACAMPO",row || gx.fn.currentGridRowImpl(21),gx.O.A1615LogTabelaCampo,0)},c2v:function(){gx.O.A1615LogTabelaCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELACAMPO",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:16,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAID",gxz:"Z1614LogTabelaId",gxold:"O1614LogTabelaId",gxvar:"A1614LogTabelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1614LogTabelaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1614LogTabelaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAID",row || gx.fn.currentGridRowImpl(21),gx.O.A1614LogTabelaId,0)},c2v:function(){gx.O.A1614LogTabelaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOGTABELAID",row || gx.fn.currentGridRowImpl(21),'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   this.AV6cLogTabelaCampo = "" ;
   this.ZV6cLogTabelaCampo = "" ;
   this.OV6cLogTabelaCampo = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1615LogTabelaCampo = "" ;
   this.O1615LogTabelaCampo = "" ;
   this.Z1614LogTabelaId = 0 ;
   this.O1614LogTabelaId = 0 ;
   this.AV6cLogTabelaCampo = "" ;
   this.AV7pLogTabelaId = 0 ;
   this.AV8pLogTabelaCampo = "" ;
   this.AV5LinkSelection = "" ;
   this.A1615LogTabelaCampo = "" ;
   this.A1614LogTabelaId = 0 ;
   this.Events = {"e131xo2_client": ["ENTER", true] ,"e141xo1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaCampo',fld:'vCLOGTABELACAMPO'},{av:'AV7pLogTabelaId',fld:'vPLOGTABELAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1615LogTabelaCampo',fld:'LOGTABELACAMPO'}],[{av:'AV8pLogTabelaCampo',fld:'vPLOGTABELACAMPO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaCampo',fld:'vCLOGTABELACAMPO'},{av:'AV7pLogTabelaId',fld:'vPLOGTABELAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaCampo',fld:'vCLOGTABELACAMPO'},{av:'AV7pLogTabelaId',fld:'vPLOGTABELAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaCampo',fld:'vCLOGTABELACAMPO'},{av:'AV7pLogTabelaId',fld:'vPLOGTABELAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaCampo',fld:'vCLOGTABELACAMPO'},{av:'AV7pLogTabelaId',fld:'vPLOGTABELAID',hsh:true}],[]];
   this.setVCMap("AV7pLogTabelaId", "vPLOGTABELAID", 0, "int");
   this.setVCMap("AV8pLogTabelaCampo", "vPLOGTABELACAMPO", 0, "svchar");
   this.setVCMap("AV7pLogTabelaId", "vPLOGTABELAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar({rfrVar:"AV7pLogTabelaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx04o1());
