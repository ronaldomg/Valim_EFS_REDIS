/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:23:13.84
*/
gx.evt.autoSkip=!1;gx.define("gx00l1",!1,function(){var n,t;this.ServerClass="gx00l1";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV9pMensagemID=gx.fn.getIntegerValue("vPMENSAGEMID",".");this.AV10pDestinatarioId=gx.fn.getIntegerValue("vPDESTINATARIOID",".")};this.e14371_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle"));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}])};this.e11371_client=function(){this.clearMessages();gx.fn.getCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCDESTINATARIOID","Visible",!0)):(gx.fn.setCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCDESTINATARIOID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class")',ctrl:"DESTINATARIOIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCDESTINATARIOID","Visible")',ctrl:"vCDESTINATARIOID",prop:"Visible"}])};this.e12371_client=function(){this.clearMessages();gx.fn.getCtrlProperty("LIDAFILTERCONTAINER","Class")=="AdvancedContainerItem"?gx.fn.setCtrlProperty("LIDAFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"):gx.fn.setCtrlProperty("LIDAFILTERCONTAINER","Class","AdvancedContainerItem");this.refreshOutputs([{av:'gx.fn.getCtrlProperty("LIDAFILTERCONTAINER","Class")',ctrl:"LIDAFILTERCONTAINER",prop:"Class"}])};this.e13371_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ULTIMAAPRESENTACAOFILTERCONTAINER","Class")=="AdvancedContainerItem"?gx.fn.setCtrlProperty("ULTIMAAPRESENTACAOFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"):gx.fn.setCtrlProperty("ULTIMAAPRESENTACAOFILTERCONTAINER","Class","AdvancedContainerItem");this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ULTIMAAPRESENTACAOFILTERCONTAINER","Class")',ctrl:"ULTIMAAPRESENTACAOFILTERCONTAINER",prop:"Class"}])};this.e17372_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e18371_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42,43,45,46,47,48,49,50,51];this.GXLastCtrlId=51;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",44,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00l1",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",45,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(21,46,"DESTINATARIOID","Destinatario Id","","DestinatarioId","int",0,"px",14,14,"right",null,[],21,"DestinatarioId",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(68,47,"LIDA","Lida","","Lida","dtime",0,"px",14,14,"right",null,[],68,"Lida",!0,5,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addSingleLineEdit(69,48,"ULTIMAAPRESENTACAO","Apresentacao","","UltimaApresentacao","dtime",0,"px",14,14,"right",null,[],69,"UltimaApresentacao",!0,5,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(19,49,"MENSAGEMID","Cod.","","MensagemID","int",0,"px",14,14,"right",null,[],19,"MensagemID",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAIN",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"ADVANCEDCONTAINER",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"DESTINATARIOIDFILTERCONTAINER",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"LBLDESTINATARIOIDFILTER",format:1,grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDESTINATARIOID",gxz:"ZV6cDestinatarioId",gxold:"OV6cDestinatarioId",gxvar:"AV6cDestinatarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cDestinatarioId=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cDestinatarioId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCDESTINATARIOID",gx.O.AV6cDestinatarioId,0)},c2v:function(){gx.O.AV6cDestinatarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDESTINATARIOID",".")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"LIDAFILTERCONTAINER",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"LBLLIDAFILTER",format:1,grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLIDA",gxz:"ZV7cLida",gxold:"OV7cLida",gxvar:"AV7cLida",dp:{f:-1,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cLida=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV7cLida=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vCLIDA",gx.O.AV7cLida,0)},c2v:function(){gx.O.AV7cLida=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCLIDA")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"ULTIMAAPRESENTACAOFILTERCONTAINER",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={fld:"LBLULTIMAAPRESENTACAOFILTER",format:1,grid:0};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[35]={fld:"",grid:0};n[36]={lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCULTIMAAPRESENTACAO",gxz:"ZV8cUltimaApresentacao",gxold:"OV8cUltimaApresentacao",gxvar:"AV8cUltimaApresentacao",dp:{f:-1,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cUltimaApresentacao=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV8cUltimaApresentacao=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vCULTIMAAPRESENTACAO",gx.O.AV8cUltimaApresentacao,0)},c2v:function(){gx.O.AV8cUltimaApresentacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCULTIMAAPRESENTACAO")},nac:gx.falseFn};n[37]={fld:"",grid:0};n[38]={fld:"GRIDTABLE",grid:0};n[39]={fld:"",grid:0};n[40]={fld:"",grid:0};n[42]={fld:"",grid:0};n[43]={fld:"",grid:0};n[45]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(44))},gxvar_GXI:"AV14Linkselection_GXI",nac:gx.falseFn};n[46]={lvl:2,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DESTINATARIOID",gxz:"Z21DestinatarioId",gxold:"O21DestinatarioId",gxvar:"A21DestinatarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A21DestinatarioId=gx.num.intval(n)},v2z:function(n){gx.O.Z21DestinatarioId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("DESTINATARIOID",n||gx.fn.currentGridRowImpl(44),gx.O.A21DestinatarioId,0)},c2v:function(){gx.O.A21DestinatarioId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("DESTINATARIOID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[47]={lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LIDA",gxz:"Z68Lida",gxold:"O68Lida",gxvar:"A68Lida",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A68Lida=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z68Lida=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("LIDA",n||gx.fn.currentGridRowImpl(44),gx.O.A68Lida,0)},c2v:function(){gx.O.A68Lida=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("LIDA",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[48]={lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ULTIMAAPRESENTACAO",gxz:"Z69UltimaApresentacao",gxold:"O69UltimaApresentacao",gxvar:"A69UltimaApresentacao",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A69UltimaApresentacao=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z69UltimaApresentacao=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("ULTIMAAPRESENTACAO",n||gx.fn.currentGridRowImpl(44),gx.O.A69UltimaApresentacao,0)},c2v:function(){gx.O.A69UltimaApresentacao=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("ULTIMAAPRESENTACAO",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[49]={lvl:2,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMID",gxz:"Z19MensagemID",gxold:"O19MensagemID",gxvar:"A19MensagemID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A19MensagemID=gx.num.intval(n)},v2z:function(n){gx.O.Z19MensagemID=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("MENSAGEMID",n||gx.fn.currentGridRowImpl(44),gx.O.A19MensagemID,0)},c2v:function(){gx.O.A19MensagemID=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("MENSAGEMID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[50]={fld:"",grid:0};n[51]={fld:"",grid:0};this.AV6cDestinatarioId=0;this.ZV6cDestinatarioId=0;this.OV6cDestinatarioId=0;this.AV7cLida=gx.date.nullDate();this.ZV7cLida=gx.date.nullDate();this.OV7cLida=gx.date.nullDate();this.AV8cUltimaApresentacao=gx.date.nullDate();this.ZV8cUltimaApresentacao=gx.date.nullDate();this.OV8cUltimaApresentacao=gx.date.nullDate();this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z21DestinatarioId=0;this.O21DestinatarioId=0;this.Z68Lida=gx.date.nullDate();this.O68Lida=gx.date.nullDate();this.Z69UltimaApresentacao=gx.date.nullDate();this.O69UltimaApresentacao=gx.date.nullDate();this.Z19MensagemID=0;this.O19MensagemID=0;this.AV6cDestinatarioId=0;this.AV7cLida=gx.date.nullDate();this.AV8cUltimaApresentacao=gx.date.nullDate();this.AV9pMensagemID=0;this.AV10pDestinatarioId=0;this.AV5LinkSelection="";this.A21DestinatarioId=0;this.A68Lida=gx.date.nullDate();this.A69UltimaApresentacao=gx.date.nullDate();this.A19MensagemID=0;this.Events={e17372_client:["ENTER",!0],e18371_client:["CANCEL",!0],e14371_client:["'TOGGLE'",!1],e11371_client:["LBLDESTINATARIOIDFILTER.CLICK",!1],e12371_client:["LBLLIDAFILTER.CLICK",!1],e13371_client:["LBLULTIMAAPRESENTACAOFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cDestinatarioId",fld:"vCDESTINATARIOID"},{av:"AV7cLida",fld:"vCLIDA"},{av:"AV8cUltimaApresentacao",fld:"vCULTIMAAPRESENTACAO"},{av:"AV9pMensagemID",fld:"vPMENSAGEMID",hsh:!0}],[]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLDESTINATARIOIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class")',ctrl:"DESTINATARIOIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class")',ctrl:"DESTINATARIOIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCDESTINATARIOID","Visible")',ctrl:"vCDESTINATARIOID",prop:"Visible"}]];this.EvtParms["LBLLIDAFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("LIDAFILTERCONTAINER","Class")',ctrl:"LIDAFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("LIDAFILTERCONTAINER","Class")',ctrl:"LIDAFILTERCONTAINER",prop:"Class"}]];this.EvtParms["LBLULTIMAAPRESENTACAOFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("ULTIMAAPRESENTACAOFILTERCONTAINER","Class")',ctrl:"ULTIMAAPRESENTACAOFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ULTIMAAPRESENTACAOFILTERCONTAINER","Class")',ctrl:"ULTIMAAPRESENTACAOFILTERCONTAINER",prop:"Class"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A21DestinatarioId",fld:"DESTINATARIOID"}],[{av:"AV10pDestinatarioId",fld:"vPDESTINATARIOID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cDestinatarioId",fld:"vCDESTINATARIOID"},{av:"AV7cLida",fld:"vCLIDA"},{av:"AV8cUltimaApresentacao",fld:"vCULTIMAAPRESENTACAO"},{av:"AV9pMensagemID",fld:"vPMENSAGEMID",hsh:!0}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cDestinatarioId",fld:"vCDESTINATARIOID"},{av:"AV7cLida",fld:"vCLIDA"},{av:"AV8cUltimaApresentacao",fld:"vCULTIMAAPRESENTACAO"},{av:"AV9pMensagemID",fld:"vPMENSAGEMID",hsh:!0}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cDestinatarioId",fld:"vCDESTINATARIOID"},{av:"AV7cLida",fld:"vCLIDA"},{av:"AV8cUltimaApresentacao",fld:"vCULTIMAAPRESENTACAO"},{av:"AV9pMensagemID",fld:"vPMENSAGEMID",hsh:!0}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cDestinatarioId",fld:"vCDESTINATARIOID"},{av:"AV7cLida",fld:"vCLIDA"},{av:"AV8cUltimaApresentacao",fld:"vCULTIMAAPRESENTACAO"},{av:"AV9pMensagemID",fld:"vPMENSAGEMID",hsh:!0}],[]];this.setVCMap("AV9pMensagemID","vPMENSAGEMID",0,"int");this.setVCMap("AV10pDestinatarioId","vPDESTINATARIOID",0,"int");this.setVCMap("AV9pMensagemID","vPMENSAGEMID",0,"int");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingVar({rfrVar:"AV9pMensagemID"});this.InitStandaloneVars()});gx.setParentObj(new gx00l1)