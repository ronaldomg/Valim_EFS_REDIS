/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:23:6.20
*/
gx.evt.autoSkip=!1;gx.define("gx00c0",!1,function(){var n,t;this.ServerClass="gx00c0";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV8pPacoteID=gx.fn.getIntegerValue("vPPACOTEID",".");this.AV9pSistemaId=gx.fn.getControlValue("vPSISTEMAID")};this.e13301_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle"));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}])};this.e11301_client=function(){this.clearMessages();gx.fn.getCtrlProperty("PACOTEIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("PACOTEIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCPACOTEID","Visible",!0)):(gx.fn.setCtrlProperty("PACOTEIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCPACOTEID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("PACOTEIDFILTERCONTAINER","Class")',ctrl:"PACOTEIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPACOTEID","Visible")',ctrl:"vCPACOTEID",prop:"Visible"}])};this.e12301_client=function(){this.clearMessages();gx.fn.getCtrlProperty("SISTEMAIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("SISTEMAIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCSISTEMAID","Visible",!0)):(gx.fn.setCtrlProperty("SISTEMAIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCSISTEMAID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("SISTEMAIDFILTERCONTAINER","Class")',ctrl:"SISTEMAIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCSISTEMAID","Visible")',ctrl:"vCSISTEMAID",prop:"Visible"}])};this.e16302_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17301_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,35,36,37,38,39];this.GXLastCtrlId=39;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",34,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00c0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",35,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(6,36,"PACOTEID","Pacote ID","","PacoteID","int",0,"px",14,14,"right",null,[],6,"PacoteID",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(7,37,"SISTEMAID","Sistema Id","","SistemaId","char",0,"px",3,3,"left",null,[],7,"SistemaId",!0,0,!1,!1,"Attribute",1,"WWColumn");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAIN",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"ADVANCEDCONTAINER",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"PACOTEIDFILTERCONTAINER",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"LBLPACOTEIDFILTER",format:1,grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPACOTEID",gxz:"ZV6cPacoteID",gxold:"OV6cPacoteID",gxvar:"AV6cPacoteID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cPacoteID=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cPacoteID=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPACOTEID",gx.O.AV6cPacoteID,0)},c2v:function(){gx.O.AV6cPacoteID=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPACOTEID",".")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"SISTEMAIDFILTERCONTAINER",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"LBLSISTEMAIDFILTER",format:1,grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSISTEMAID",gxz:"ZV7cSistemaId",gxold:"OV7cSistemaId",gxvar:"AV7cSistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cSistemaId=n},v2z:function(n){gx.O.ZV7cSistemaId=n},v2c:function(){gx.fn.setControlValue("vCSISTEMAID",gx.O.AV7cSistemaId,0)},c2v:function(){gx.O.AV7cSistemaId=this.val()},val:function(){return gx.fn.getControlValue("vCSISTEMAID")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"GRIDTABLE",grid:0};n[29]={fld:"",grid:0};n[30]={fld:"",grid:0};n[32]={fld:"",grid:0};n[33]={fld:"",grid:0};n[35]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(34),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV13Linkselection_GXI",nac:gx.falseFn};n[36]={lvl:2,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PACOTEID",gxz:"Z6PacoteID",gxold:"O6PacoteID",gxvar:"A6PacoteID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A6PacoteID=gx.num.intval(n)},v2z:function(n){gx.O.Z6PacoteID=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PACOTEID",n||gx.fn.currentGridRowImpl(34),gx.O.A6PacoteID,0)},c2v:function(){gx.O.A6PacoteID=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PACOTEID",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[37]={lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z7SistemaId",gxold:"O7SistemaId",gxvar:"A7SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A7SistemaId=n},v2z:function(n){gx.O.Z7SistemaId=n},v2c:function(n){gx.fn.setGridControlValue("SISTEMAID",n||gx.fn.currentGridRowImpl(34),gx.O.A7SistemaId,0)},c2v:function(){gx.O.A7SistemaId=this.val()},val:function(n){return gx.fn.getGridControlValue("SISTEMAID",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[38]={fld:"",grid:0};n[39]={fld:"",grid:0};this.AV6cPacoteID=0;this.ZV6cPacoteID=0;this.OV6cPacoteID=0;this.AV7cSistemaId="";this.ZV7cSistemaId="";this.OV7cSistemaId="";this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z6PacoteID=0;this.O6PacoteID=0;this.Z7SistemaId="";this.O7SistemaId="";this.AV6cPacoteID=0;this.AV7cSistemaId="";this.AV8pPacoteID=0;this.AV9pSistemaId="";this.AV5LinkSelection="";this.A6PacoteID=0;this.A7SistemaId="";this.Events={e16302_client:["ENTER",!0],e17301_client:["CANCEL",!0],e13301_client:["'TOGGLE'",!1],e11301_client:["LBLPACOTEIDFILTER.CLICK",!1],e12301_client:["LBLSISTEMAIDFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPacoteID",fld:"vCPACOTEID"},{av:"AV7cSistemaId",fld:"vCSISTEMAID"}],[]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLPACOTEIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("PACOTEIDFILTERCONTAINER","Class")',ctrl:"PACOTEIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("PACOTEIDFILTERCONTAINER","Class")',ctrl:"PACOTEIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPACOTEID","Visible")',ctrl:"vCPACOTEID",prop:"Visible"}]];this.EvtParms["LBLSISTEMAIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("SISTEMAIDFILTERCONTAINER","Class")',ctrl:"SISTEMAIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("SISTEMAIDFILTERCONTAINER","Class")',ctrl:"SISTEMAIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCSISTEMAID","Visible")',ctrl:"vCSISTEMAID",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A6PacoteID",fld:"PACOTEID"},{av:"A7SistemaId",fld:"SISTEMAID"}],[{av:"AV8pPacoteID",fld:"vPPACOTEID"},{av:"AV9pSistemaId",fld:"vPSISTEMAID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPacoteID",fld:"vCPACOTEID"},{av:"AV7cSistemaId",fld:"vCSISTEMAID"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPacoteID",fld:"vCPACOTEID"},{av:"AV7cSistemaId",fld:"vCSISTEMAID"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPacoteID",fld:"vCPACOTEID"},{av:"AV7cSistemaId",fld:"vCSISTEMAID"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPacoteID",fld:"vCPACOTEID"},{av:"AV7cSistemaId",fld:"vCSISTEMAID"}],[]];this.setVCMap("AV8pPacoteID","vPPACOTEID",0,"int");this.setVCMap("AV9pSistemaId","vPSISTEMAID",0,"char");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);this.InitStandaloneVars()});gx.setParentObj(new gx00c0)