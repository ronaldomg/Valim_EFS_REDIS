/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:40.85
*/
gx.evt.autoSkip = false;
gx.define('gx04p1', false, function () {
   this.ServerClass =  "gx04p1" ;
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
      this.AV8pLogTabelaCampoBlob=gx.fn.getControlValue("vPLOGTABELACAMPOBLOB") ;
   };
   this.e131xp2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141xp1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,18,22,23,24,25,26,29];
   this.GXLastCtrlId =29;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",21,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx04p1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",22,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1616,23,"LOGTABELACAMPOBLOB","Nome do Campo Blob","Selecionar","LogTabelaCampoBlob","svchar",0,"px",31,31,"left",null,[],1616,"LogTabelaCampoBlob",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBlob(1610,24,"LOGTABELAVALORANTIGOBLOB","Valor Antigo Blob","LogTabelaValorAntigoBlob","bitstr",0,60,0,"px","px",true,false,"");
   Grid1Container.addBlob(1611,25,"LOGTABELAVALORNOVOBLOB","Valor Novo Blob","LogTabelaValorNovoBlob","bitstr",0,60,0,"px","px",true,false,"");
   Grid1Container.addSingleLineEdit(1614,26,"LOGTABELAID","Tabela Id","","LogTabelaId","int",0,"px",16,16,"right",null,[],1614,"LogTabelaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKLOGTABELACAMPOBLOB", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGTABELACAMPOBLOB",gxz:"ZV6cLogTabelaCampoBlob",gxold:"OV6cLogTabelaCampoBlob",gxvar:"AV6cLogTabelaCampoBlob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cLogTabelaCampoBlob=Value},v2z:function(Value){gx.O.ZV6cLogTabelaCampoBlob=Value},v2c:function(){gx.fn.setControlValue("vCLOGTABELACAMPOBLOB",gx.O.AV6cLogTabelaCampoBlob,0)},c2v:function(){gx.O.AV6cLogTabelaCampoBlob=this.val()},val:function(){return gx.fn.getControlValue("vCLOGTABELACAMPOBLOB")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"GROUP2",grid:0};
   GXValidFnc[18]={fld:"TABLE3",grid:0};
   GXValidFnc[22]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(21))}, gxvar_GXI:'AV11Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELACAMPOBLOB",gxz:"Z1616LogTabelaCampoBlob",gxold:"O1616LogTabelaCampoBlob",gxvar:"A1616LogTabelaCampoBlob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1616LogTabelaCampoBlob=Value},v2z:function(Value){gx.O.Z1616LogTabelaCampoBlob=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELACAMPOBLOB",row || gx.fn.currentGridRowImpl(21),gx.O.A1616LogTabelaCampoBlob,0)},c2v:function(){gx.O.A1616LogTabelaCampoBlob=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELACAMPOBLOB",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"bitstr",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAVALORANTIGOBLOB",gxz:"Z1610LogTabelaValorAntigoBlob",gxold:"O1610LogTabelaValorAntigoBlob",gxvar:"A1610LogTabelaValorAntigoBlob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1610LogTabelaValorAntigoBlob=Value},v2z:function(Value){gx.O.Z1610LogTabelaValorAntigoBlob=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAVALORANTIGOBLOB",row || gx.fn.currentGridRowImpl(21),gx.O.A1610LogTabelaValorAntigoBlob,0)},c2v:function(){gx.O.A1610LogTabelaValorAntigoBlob=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELAVALORANTIGOBLOB",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"bitstr",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAVALORNOVOBLOB",gxz:"Z1611LogTabelaValorNovoBlob",gxold:"O1611LogTabelaValorNovoBlob",gxvar:"A1611LogTabelaValorNovoBlob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1611LogTabelaValorNovoBlob=Value},v2z:function(Value){gx.O.Z1611LogTabelaValorNovoBlob=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAVALORNOVOBLOB",row || gx.fn.currentGridRowImpl(21),gx.O.A1611LogTabelaValorNovoBlob,0)},c2v:function(){gx.O.A1611LogTabelaValorNovoBlob=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELAVALORNOVOBLOB",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"int",len:16,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAID",gxz:"Z1614LogTabelaId",gxold:"O1614LogTabelaId",gxvar:"A1614LogTabelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1614LogTabelaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1614LogTabelaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAID",row || gx.fn.currentGridRowImpl(21),gx.O.A1614LogTabelaId,0)},c2v:function(){gx.O.A1614LogTabelaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOGTABELAID",row || gx.fn.currentGridRowImpl(21),'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE4",grid:0};
   this.AV6cLogTabelaCampoBlob = "" ;
   this.ZV6cLogTabelaCampoBlob = "" ;
   this.OV6cLogTabelaCampoBlob = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1616LogTabelaCampoBlob = "" ;
   this.O1616LogTabelaCampoBlob = "" ;
   this.Z1610LogTabelaValorAntigoBlob = "" ;
   this.O1610LogTabelaValorAntigoBlob = "" ;
   this.Z1611LogTabelaValorNovoBlob = "" ;
   this.O1611LogTabelaValorNovoBlob = "" ;
   this.Z1614LogTabelaId = 0 ;
   this.O1614LogTabelaId = 0 ;
   this.AV6cLogTabelaCampoBlob = "" ;
   this.AV7pLogTabelaId = 0 ;
   this.AV8pLogTabelaCampoBlob = "" ;
   this.AV5LinkSelection = "" ;
   this.A1616LogTabelaCampoBlob = "" ;
   this.A1610LogTabelaValorAntigoBlob = "" ;
   this.A1611LogTabelaValorNovoBlob = "" ;
   this.A1614LogTabelaId = 0 ;
   this.Events = {"e131xp2_client": ["ENTER", true] ,"e141xp1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaCampoBlob',fld:'vCLOGTABELACAMPOBLOB'},{av:'AV7pLogTabelaId',fld:'vPLOGTABELAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1616LogTabelaCampoBlob',fld:'LOGTABELACAMPOBLOB'}],[{av:'AV8pLogTabelaCampoBlob',fld:'vPLOGTABELACAMPOBLOB'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaCampoBlob',fld:'vCLOGTABELACAMPOBLOB'},{av:'AV7pLogTabelaId',fld:'vPLOGTABELAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaCampoBlob',fld:'vCLOGTABELACAMPOBLOB'},{av:'AV7pLogTabelaId',fld:'vPLOGTABELAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaCampoBlob',fld:'vCLOGTABELACAMPOBLOB'},{av:'AV7pLogTabelaId',fld:'vPLOGTABELAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogTabelaCampoBlob',fld:'vCLOGTABELACAMPOBLOB'},{av:'AV7pLogTabelaId',fld:'vPLOGTABELAID',hsh:true}],[]];
   this.setVCMap("AV7pLogTabelaId", "vPLOGTABELAID", 0, "int");
   this.setVCMap("AV8pLogTabelaCampoBlob", "vPLOGTABELACAMPOBLOB", 0, "svchar");
   this.setVCMap("AV7pLogTabelaId", "vPLOGTABELAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar({rfrVar:"AV7pLogTabelaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx04p1());
