/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:23:3.7
*/
gx.evt.autoSkip=!1;gx.define("gx00b0",!1,function(){var n,t;this.ServerClass="gx00b0";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV9pPacoteID=gx.fn.getIntegerValue("vPPACOTEID",".")};this.e152w1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle"));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}])};this.e112w1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("PACOTEIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("PACOTEIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCPACOTEID","Visible",!0)):(gx.fn.setCtrlProperty("PACOTEIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCPACOTEID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("PACOTEIDFILTERCONTAINER","Class")',ctrl:"PACOTEIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPACOTEID","Visible")',ctrl:"vCPACOTEID",prop:"Visible"}])};this.e122w1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("PACOTEPERMITETESTEFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("PACOTEPERMITETESTEFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCPACOTEPERMITETESTE","Visible",!0)):(gx.fn.setCtrlProperty("PACOTEPERMITETESTEFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCPACOTEPERMITETESTE","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("PACOTEPERMITETESTEFILTERCONTAINER","Class")',ctrl:"PACOTEPERMITETESTEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPACOTEPERMITETESTE","Visible")',ctrl:"vCPACOTEPERMITETESTE",prop:"Visible"}])};this.e132w1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("PACOTEATIVOFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("PACOTEATIVOFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCPACOTEATIVO","Visible",!0)):(gx.fn.setCtrlProperty("PACOTEATIVOFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCPACOTEATIVO","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("PACOTEATIVOFILTERCONTAINER","Class")',ctrl:"PACOTEATIVOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPACOTEATIVO","Visible")',ctrl:"vCPACOTEATIVO",prop:"Visible"}])};this.e142w1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("PACOTEORDEMFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("PACOTEORDEMFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCPACOTEORDEM","Visible",!0)):(gx.fn.setCtrlProperty("PACOTEORDEMFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCPACOTEORDEM","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("PACOTEORDEMFILTERCONTAINER","Class")',ctrl:"PACOTEORDEMFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPACOTEORDEM","Visible")',ctrl:"vCPACOTEORDEM",prop:"Visible"}])};this.e182w2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e192w1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,53,55,56,57,58,59,60,61];this.GXLastCtrlId=61;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",54,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00b0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",55,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(6,56,"PACOTEID","ID","","PacoteID","int",0,"px",14,14,"right",null,[],6,"PacoteID",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addCheckBox(88,57,"PACOTEPERMITETESTE","Permite Teste","","PacotePermiteTeste","boolean","true","false",null,!0,!1,0,"px","WWColumn OptionalColumn");t.addCheckBox(89,58,"PACOTEATIVO","Ativo","","PacoteAtivo","boolean","true","false",null,!0,!1,0,"px","WWColumn OptionalColumn");t.addSingleLineEdit(194,59,"PACOTEORDEM","Ordem","","PacoteOrdem","int",0,"px",14,14,"right",null,[],194,"PacoteOrdem",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAIN",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"ADVANCEDCONTAINER",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"PACOTEIDFILTERCONTAINER",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"LBLPACOTEIDFILTER",format:1,grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPACOTEID",gxz:"ZV6cPacoteID",gxold:"OV6cPacoteID",gxvar:"AV6cPacoteID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cPacoteID=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cPacoteID=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPACOTEID",gx.O.AV6cPacoteID,0)},c2v:function(){gx.O.AV6cPacoteID=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPACOTEID",".")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"PACOTEPERMITETESTEFILTERCONTAINER",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"LBLPACOTEPERMITETESTEFILTER",format:1,grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPACOTEPERMITETESTE",gxz:"ZV7cPacotePermiteTeste",gxold:"OV7cPacotePermiteTeste",gxvar:"AV7cPacotePermiteTeste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV7cPacotePermiteTeste=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV7cPacotePermiteTeste=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vCPACOTEPERMITETESTE",gx.O.AV7cPacotePermiteTeste,!0)},c2v:function(){gx.O.AV7cPacotePermiteTeste=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCPACOTEPERMITETESTE")},nac:gx.falseFn,values:["true","false"]};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"PACOTEATIVOFILTERCONTAINER",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={fld:"LBLPACOTEATIVOFILTER",format:1,grid:0};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[35]={fld:"",grid:0};n[36]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPACOTEATIVO",gxz:"ZV8cPacoteAtivo",gxold:"OV8cPacoteAtivo",gxvar:"AV8cPacoteAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV8cPacoteAtivo=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV8cPacoteAtivo=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vCPACOTEATIVO",gx.O.AV8cPacoteAtivo,!0)},c2v:function(){gx.O.AV8cPacoteAtivo=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCPACOTEATIVO")},nac:gx.falseFn,values:["true","false"]};n[37]={fld:"",grid:0};n[38]={fld:"",grid:0};n[39]={fld:"PACOTEORDEMFILTERCONTAINER",grid:0};n[40]={fld:"",grid:0};n[41]={fld:"",grid:0};n[42]={fld:"LBLPACOTEORDEMFILTER",format:1,grid:0};n[43]={fld:"",grid:0};n[44]={fld:"",grid:0};n[45]={fld:"",grid:0};n[46]={lvl:0,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPACOTEORDEM",gxz:"ZV11cPacoteOrdem",gxold:"OV11cPacoteOrdem",gxvar:"AV11cPacoteOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11cPacoteOrdem=gx.num.intval(n)},v2z:function(n){gx.O.ZV11cPacoteOrdem=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPACOTEORDEM",gx.O.AV11cPacoteOrdem,0)},c2v:function(){gx.O.AV11cPacoteOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPACOTEORDEM",".")},nac:gx.falseFn};n[47]={fld:"",grid:0};n[48]={fld:"GRIDTABLE",grid:0};n[49]={fld:"",grid:0};n[50]={fld:"",grid:0};n[52]={fld:"",grid:0};n[53]={fld:"",grid:0};n[55]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(54),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(54))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(54))},gxvar_GXI:"AV14Linkselection_GXI",nac:gx.falseFn};n[56]={lvl:2,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PACOTEID",gxz:"Z6PacoteID",gxold:"O6PacoteID",gxvar:"A6PacoteID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A6PacoteID=gx.num.intval(n)},v2z:function(n){gx.O.Z6PacoteID=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PACOTEID",n||gx.fn.currentGridRowImpl(54),gx.O.A6PacoteID,0)},c2v:function(){gx.O.A6PacoteID=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PACOTEID",n||gx.fn.currentGridRowImpl(54),".")},nac:gx.falseFn};n[57]={lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PACOTEPERMITETESTE",gxz:"Z88PacotePermiteTeste",gxold:"O88PacotePermiteTeste",gxvar:"A88PacotePermiteTeste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){gx.O.A88PacotePermiteTeste=gx.lang.booleanValue(n)},v2z:function(n){gx.O.Z88PacotePermiteTeste=gx.lang.booleanValue(n)},v2c:function(n){gx.fn.setGridCheckBoxValue("PACOTEPERMITETESTE",n||gx.fn.currentGridRowImpl(54),gx.O.A88PacotePermiteTeste,!0)},c2v:function(){gx.O.A88PacotePermiteTeste=gx.lang.booleanValue(this.val())},val:function(n){return gx.fn.getGridControlValue("PACOTEPERMITETESTE",n||gx.fn.currentGridRowImpl(54))},nac:gx.falseFn,values:["true","false"]};n[58]={lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PACOTEATIVO",gxz:"Z89PacoteAtivo",gxold:"O89PacoteAtivo",gxvar:"A89PacoteAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){gx.O.A89PacoteAtivo=gx.lang.booleanValue(n)},v2z:function(n){gx.O.Z89PacoteAtivo=gx.lang.booleanValue(n)},v2c:function(n){gx.fn.setGridCheckBoxValue("PACOTEATIVO",n||gx.fn.currentGridRowImpl(54),gx.O.A89PacoteAtivo,!0)},c2v:function(){gx.O.A89PacoteAtivo=gx.lang.booleanValue(this.val())},val:function(n){return gx.fn.getGridControlValue("PACOTEATIVO",n||gx.fn.currentGridRowImpl(54))},nac:gx.falseFn,values:["true","false"]};n[59]={lvl:2,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PACOTEORDEM",gxz:"Z194PacoteOrdem",gxold:"O194PacoteOrdem",gxvar:"A194PacoteOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A194PacoteOrdem=gx.num.intval(n)},v2z:function(n){gx.O.Z194PacoteOrdem=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PACOTEORDEM",n||gx.fn.currentGridRowImpl(54),gx.O.A194PacoteOrdem,0)},c2v:function(){gx.O.A194PacoteOrdem=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PACOTEORDEM",n||gx.fn.currentGridRowImpl(54),".")},nac:gx.falseFn};n[60]={fld:"",grid:0};n[61]={fld:"",grid:0};this.AV6cPacoteID=0;this.ZV6cPacoteID=0;this.OV6cPacoteID=0;this.AV7cPacotePermiteTeste=!1;this.ZV7cPacotePermiteTeste=!1;this.OV7cPacotePermiteTeste=!1;this.AV8cPacoteAtivo=!1;this.ZV8cPacoteAtivo=!1;this.OV8cPacoteAtivo=!1;this.AV11cPacoteOrdem=0;this.ZV11cPacoteOrdem=0;this.OV11cPacoteOrdem=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z6PacoteID=0;this.O6PacoteID=0;this.Z88PacotePermiteTeste=!1;this.O88PacotePermiteTeste=!1;this.Z89PacoteAtivo=!1;this.O89PacoteAtivo=!1;this.Z194PacoteOrdem=0;this.O194PacoteOrdem=0;this.AV6cPacoteID=0;this.AV7cPacotePermiteTeste=!1;this.AV8cPacoteAtivo=!1;this.AV11cPacoteOrdem=0;this.AV9pPacoteID=0;this.AV5LinkSelection="";this.A6PacoteID=0;this.A88PacotePermiteTeste=!1;this.A89PacoteAtivo=!1;this.A194PacoteOrdem=0;this.Events={e182w2_client:["ENTER",!0],e192w1_client:["CANCEL",!0],e152w1_client:["'TOGGLE'",!1],e112w1_client:["LBLPACOTEIDFILTER.CLICK",!1],e122w1_client:["LBLPACOTEPERMITETESTEFILTER.CLICK",!1],e132w1_client:["LBLPACOTEATIVOFILTER.CLICK",!1],e142w1_client:["LBLPACOTEORDEMFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPacoteID",fld:"vCPACOTEID"},{av:"AV7cPacotePermiteTeste",fld:"vCPACOTEPERMITETESTE"},{av:"AV8cPacoteAtivo",fld:"vCPACOTEATIVO"},{av:"AV11cPacoteOrdem",fld:"vCPACOTEORDEM"}],[]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLPACOTEIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("PACOTEIDFILTERCONTAINER","Class")',ctrl:"PACOTEIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("PACOTEIDFILTERCONTAINER","Class")',ctrl:"PACOTEIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPACOTEID","Visible")',ctrl:"vCPACOTEID",prop:"Visible"}]];this.EvtParms["LBLPACOTEPERMITETESTEFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("PACOTEPERMITETESTEFILTERCONTAINER","Class")',ctrl:"PACOTEPERMITETESTEFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("PACOTEPERMITETESTEFILTERCONTAINER","Class")',ctrl:"PACOTEPERMITETESTEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPACOTEPERMITETESTE","Visible")',ctrl:"vCPACOTEPERMITETESTE",prop:"Visible"}]];this.EvtParms["LBLPACOTEATIVOFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("PACOTEATIVOFILTERCONTAINER","Class")',ctrl:"PACOTEATIVOFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("PACOTEATIVOFILTERCONTAINER","Class")',ctrl:"PACOTEATIVOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPACOTEATIVO","Visible")',ctrl:"vCPACOTEATIVO",prop:"Visible"}]];this.EvtParms["LBLPACOTEORDEMFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("PACOTEORDEMFILTERCONTAINER","Class")',ctrl:"PACOTEORDEMFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("PACOTEORDEMFILTERCONTAINER","Class")',ctrl:"PACOTEORDEMFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPACOTEORDEM","Visible")',ctrl:"vCPACOTEORDEM",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A6PacoteID",fld:"PACOTEID"}],[{av:"AV9pPacoteID",fld:"vPPACOTEID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPacoteID",fld:"vCPACOTEID"},{av:"AV7cPacotePermiteTeste",fld:"vCPACOTEPERMITETESTE"},{av:"AV8cPacoteAtivo",fld:"vCPACOTEATIVO"},{av:"AV11cPacoteOrdem",fld:"vCPACOTEORDEM"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPacoteID",fld:"vCPACOTEID"},{av:"AV7cPacotePermiteTeste",fld:"vCPACOTEPERMITETESTE"},{av:"AV8cPacoteAtivo",fld:"vCPACOTEATIVO"},{av:"AV11cPacoteOrdem",fld:"vCPACOTEORDEM"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPacoteID",fld:"vCPACOTEID"},{av:"AV7cPacotePermiteTeste",fld:"vCPACOTEPERMITETESTE"},{av:"AV8cPacoteAtivo",fld:"vCPACOTEATIVO"},{av:"AV11cPacoteOrdem",fld:"vCPACOTEORDEM"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPacoteID",fld:"vCPACOTEID"},{av:"AV7cPacotePermiteTeste",fld:"vCPACOTEPERMITETESTE"},{av:"AV8cPacoteAtivo",fld:"vCPACOTEATIVO"},{av:"AV11cPacoteOrdem",fld:"vCPACOTEORDEM"}],[]];this.setVCMap("AV9pPacoteID","vPPACOTEID",0,"int");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingVar(this.GXValidFnc[46]);this.InitStandaloneVars()});gx.setParentObj(new gx00b0)