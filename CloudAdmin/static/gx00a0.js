/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:23:1.56
*/
gx.evt.autoSkip=!1;gx.define("gx00a0",!1,function(){var n,t;this.ServerClass="gx00a0";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV9pAmbienteId=gx.fn.getIntegerValue("vPAMBIENTEID",".");this.AV10pAmbienteItemNome=gx.fn.getControlValue("vPAMBIENTEITEMNOME")};this.e142v1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle"));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}])};this.e112v1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("AMBIENTEIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("AMBIENTEIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCAMBIENTEID","Visible",!0)):(gx.fn.setCtrlProperty("AMBIENTEIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCAMBIENTEID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("AMBIENTEIDFILTERCONTAINER","Class")',ctrl:"AMBIENTEIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCAMBIENTEID","Visible")',ctrl:"vCAMBIENTEID",prop:"Visible"}])};this.e122v1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("AMBIENTEITEMNOMEFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("AMBIENTEITEMNOMEFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCAMBIENTEITEMNOME","Visible",!0)):(gx.fn.setCtrlProperty("AMBIENTEITEMNOMEFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCAMBIENTEITEMNOME","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("AMBIENTEITEMNOMEFILTERCONTAINER","Class")',ctrl:"AMBIENTEITEMNOMEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCAMBIENTEITEMNOME","Visible")',ctrl:"vCAMBIENTEITEMNOME",prop:"Visible"}])};this.e132v1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("AMBIENTEITEMIDENTIFICACAOFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("AMBIENTEITEMIDENTIFICACAOFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCAMBIENTEITEMIDENTIFICACAO","Visible",!0)):(gx.fn.setCtrlProperty("AMBIENTEITEMIDENTIFICACAOFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCAMBIENTEITEMIDENTIFICACAO","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("AMBIENTEITEMIDENTIFICACAOFILTERCONTAINER","Class")',ctrl:"AMBIENTEITEMIDENTIFICACAOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCAMBIENTEITEMIDENTIFICACAO","Visible")',ctrl:"vCAMBIENTEITEMIDENTIFICACAO",prop:"Visible"}])};this.e172v2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e182v1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42,43,45,46,47,48,49,50];this.GXLastCtrlId=50;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",44,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00a0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",45,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(4,46,"AMBIENTEID","Ambiente Id","","AmbienteId","int",0,"px",18,18,"right",null,[],4,"AmbienteId",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(5,47,"AMBIENTEITEMNOME","Item Nome","","AmbienteItemNome","char",0,"px",20,20,"left",null,[],5,"AmbienteItemNome",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(45,48,"AMBIENTEITEMIDENTIFICACAO","Item Identificacao","","AmbienteItemIdentificacao","char",0,"px",20,20,"left",null,[],45,"AmbienteItemIdentificacao",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAIN",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"ADVANCEDCONTAINER",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"AMBIENTEIDFILTERCONTAINER",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"LBLAMBIENTEIDFILTER",format:1,grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAMBIENTEID",gxz:"ZV6cAmbienteId",gxold:"OV6cAmbienteId",gxvar:"AV6cAmbienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cAmbienteId=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cAmbienteId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCAMBIENTEID",gx.O.AV6cAmbienteId,0)},c2v:function(){gx.O.AV6cAmbienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAMBIENTEID",".")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"AMBIENTEITEMNOMEFILTERCONTAINER",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"LBLAMBIENTEITEMNOMEFILTER",format:1,grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAMBIENTEITEMNOME",gxz:"ZV7cAmbienteItemNome",gxold:"OV7cAmbienteItemNome",gxvar:"AV7cAmbienteItemNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cAmbienteItemNome=n},v2z:function(n){gx.O.ZV7cAmbienteItemNome=n},v2c:function(){gx.fn.setControlValue("vCAMBIENTEITEMNOME",gx.O.AV7cAmbienteItemNome,0)},c2v:function(){gx.O.AV7cAmbienteItemNome=this.val()},val:function(){return gx.fn.getControlValue("vCAMBIENTEITEMNOME")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"AMBIENTEITEMIDENTIFICACAOFILTERCONTAINER",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={fld:"LBLAMBIENTEITEMIDENTIFICACAOFILTER",format:1,grid:0};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[35]={fld:"",grid:0};n[36]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAMBIENTEITEMIDENTIFICACAO",gxz:"ZV8cAmbienteItemIdentificacao",gxold:"OV8cAmbienteItemIdentificacao",gxvar:"AV8cAmbienteItemIdentificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cAmbienteItemIdentificacao=n},v2z:function(n){gx.O.ZV8cAmbienteItemIdentificacao=n},v2c:function(){gx.fn.setControlValue("vCAMBIENTEITEMIDENTIFICACAO",gx.O.AV8cAmbienteItemIdentificacao,0)},c2v:function(){gx.O.AV8cAmbienteItemIdentificacao=this.val()},val:function(){return gx.fn.getControlValue("vCAMBIENTEITEMIDENTIFICACAO")},nac:gx.falseFn};n[37]={fld:"",grid:0};n[38]={fld:"GRIDTABLE",grid:0};n[39]={fld:"",grid:0};n[40]={fld:"",grid:0};n[42]={fld:"",grid:0};n[43]={fld:"",grid:0};n[45]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(44))},gxvar_GXI:"AV14Linkselection_GXI",nac:gx.falseFn};n[46]={lvl:2,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AMBIENTEID",gxz:"Z4AmbienteId",gxold:"O4AmbienteId",gxvar:"A4AmbienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A4AmbienteId=gx.num.intval(n)},v2z:function(n){gx.O.Z4AmbienteId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("AMBIENTEID",n||gx.fn.currentGridRowImpl(44),gx.O.A4AmbienteId,0)},c2v:function(){gx.O.A4AmbienteId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("AMBIENTEID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[47]={lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AMBIENTEITEMNOME",gxz:"Z5AmbienteItemNome",gxold:"O5AmbienteItemNome",gxvar:"A5AmbienteItemNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A5AmbienteItemNome=n},v2z:function(n){gx.O.Z5AmbienteItemNome=n},v2c:function(n){gx.fn.setGridControlValue("AMBIENTEITEMNOME",n||gx.fn.currentGridRowImpl(44),gx.O.A5AmbienteItemNome,0)},c2v:function(){gx.O.A5AmbienteItemNome=this.val()},val:function(n){return gx.fn.getGridControlValue("AMBIENTEITEMNOME",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[48]={lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AMBIENTEITEMIDENTIFICACAO",gxz:"Z45AmbienteItemIdentificacao",gxold:"O45AmbienteItemIdentificacao",gxvar:"A45AmbienteItemIdentificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A45AmbienteItemIdentificacao=n},v2z:function(n){gx.O.Z45AmbienteItemIdentificacao=n},v2c:function(n){gx.fn.setGridControlValue("AMBIENTEITEMIDENTIFICACAO",n||gx.fn.currentGridRowImpl(44),gx.O.A45AmbienteItemIdentificacao,0)},c2v:function(){gx.O.A45AmbienteItemIdentificacao=this.val()},val:function(n){return gx.fn.getGridControlValue("AMBIENTEITEMIDENTIFICACAO",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[49]={fld:"",grid:0};n[50]={fld:"",grid:0};this.AV6cAmbienteId=0;this.ZV6cAmbienteId=0;this.OV6cAmbienteId=0;this.AV7cAmbienteItemNome="";this.ZV7cAmbienteItemNome="";this.OV7cAmbienteItemNome="";this.AV8cAmbienteItemIdentificacao="";this.ZV8cAmbienteItemIdentificacao="";this.OV8cAmbienteItemIdentificacao="";this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z4AmbienteId=0;this.O4AmbienteId=0;this.Z5AmbienteItemNome="";this.O5AmbienteItemNome="";this.Z45AmbienteItemIdentificacao="";this.O45AmbienteItemIdentificacao="";this.AV6cAmbienteId=0;this.AV7cAmbienteItemNome="";this.AV8cAmbienteItemIdentificacao="";this.AV9pAmbienteId=0;this.AV10pAmbienteItemNome="";this.AV5LinkSelection="";this.A4AmbienteId=0;this.A5AmbienteItemNome="";this.A45AmbienteItemIdentificacao="";this.Events={e172v2_client:["ENTER",!0],e182v1_client:["CANCEL",!0],e142v1_client:["'TOGGLE'",!1],e112v1_client:["LBLAMBIENTEIDFILTER.CLICK",!1],e122v1_client:["LBLAMBIENTEITEMNOMEFILTER.CLICK",!1],e132v1_client:["LBLAMBIENTEITEMIDENTIFICACAOFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cAmbienteId",fld:"vCAMBIENTEID"},{av:"AV7cAmbienteItemNome",fld:"vCAMBIENTEITEMNOME"},{av:"AV8cAmbienteItemIdentificacao",fld:"vCAMBIENTEITEMIDENTIFICACAO"}],[]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLAMBIENTEIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("AMBIENTEIDFILTERCONTAINER","Class")',ctrl:"AMBIENTEIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("AMBIENTEIDFILTERCONTAINER","Class")',ctrl:"AMBIENTEIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCAMBIENTEID","Visible")',ctrl:"vCAMBIENTEID",prop:"Visible"}]];this.EvtParms["LBLAMBIENTEITEMNOMEFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("AMBIENTEITEMNOMEFILTERCONTAINER","Class")',ctrl:"AMBIENTEITEMNOMEFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("AMBIENTEITEMNOMEFILTERCONTAINER","Class")',ctrl:"AMBIENTEITEMNOMEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCAMBIENTEITEMNOME","Visible")',ctrl:"vCAMBIENTEITEMNOME",prop:"Visible"}]];this.EvtParms["LBLAMBIENTEITEMIDENTIFICACAOFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("AMBIENTEITEMIDENTIFICACAOFILTERCONTAINER","Class")',ctrl:"AMBIENTEITEMIDENTIFICACAOFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("AMBIENTEITEMIDENTIFICACAOFILTERCONTAINER","Class")',ctrl:"AMBIENTEITEMIDENTIFICACAOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCAMBIENTEITEMIDENTIFICACAO","Visible")',ctrl:"vCAMBIENTEITEMIDENTIFICACAO",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A4AmbienteId",fld:"AMBIENTEID"},{av:"A5AmbienteItemNome",fld:"AMBIENTEITEMNOME"}],[{av:"AV9pAmbienteId",fld:"vPAMBIENTEID"},{av:"AV10pAmbienteItemNome",fld:"vPAMBIENTEITEMNOME"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cAmbienteId",fld:"vCAMBIENTEID"},{av:"AV7cAmbienteItemNome",fld:"vCAMBIENTEITEMNOME"},{av:"AV8cAmbienteItemIdentificacao",fld:"vCAMBIENTEITEMIDENTIFICACAO"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cAmbienteId",fld:"vCAMBIENTEID"},{av:"AV7cAmbienteItemNome",fld:"vCAMBIENTEITEMNOME"},{av:"AV8cAmbienteItemIdentificacao",fld:"vCAMBIENTEITEMIDENTIFICACAO"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cAmbienteId",fld:"vCAMBIENTEID"},{av:"AV7cAmbienteItemNome",fld:"vCAMBIENTEITEMNOME"},{av:"AV8cAmbienteItemIdentificacao",fld:"vCAMBIENTEITEMIDENTIFICACAO"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cAmbienteId",fld:"vCAMBIENTEID"},{av:"AV7cAmbienteItemNome",fld:"vCAMBIENTEITEMNOME"},{av:"AV8cAmbienteItemIdentificacao",fld:"vCAMBIENTEITEMIDENTIFICACAO"}],[]];this.setVCMap("AV9pAmbienteId","vPAMBIENTEID",0,"int");this.setVCMap("AV10pAmbienteItemNome","vPAMBIENTEITEMNOME",0,"char");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);this.InitStandaloneVars()});gx.setParentObj(new gx00a0)