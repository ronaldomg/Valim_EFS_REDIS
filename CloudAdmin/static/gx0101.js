/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:23:28.19
*/
gx.evt.autoSkip=!1;gx.define("gx0101",!1,function(){var n,t;this.ServerClass="gx0101";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV8pMensagensId=gx.fn.getIntegerValue("vPMENSAGENSID",".");this.AV9pRespostaID=gx.fn.getIntegerValue("vPRESPOSTAID",".")};this.e134f1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle"));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}])};this.e114f1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("RESPOSTAIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("RESPOSTAIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCRESPOSTAID","Visible",!0)):(gx.fn.setCtrlProperty("RESPOSTAIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCRESPOSTAID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RESPOSTAIDFILTERCONTAINER","Class")',ctrl:"RESPOSTAIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRESPOSTAID","Visible")',ctrl:"vCRESPOSTAID",prop:"Visible"}])};this.e124f1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("RESPOSTACARIMBODETEMPOFILTERCONTAINER","Class")=="AdvancedContainerItem"?gx.fn.setCtrlProperty("RESPOSTACARIMBODETEMPOFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"):gx.fn.setCtrlProperty("RESPOSTACARIMBODETEMPOFILTERCONTAINER","Class","AdvancedContainerItem");this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RESPOSTACARIMBODETEMPOFILTERCONTAINER","Class")',ctrl:"RESPOSTACARIMBODETEMPOFILTERCONTAINER",prop:"Class"}])};this.e164f2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e174f1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,35,36,37,38,39,40];this.GXLastCtrlId=40;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",34,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0101",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",35,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(22,36,"RESPOSTAID","Resposta ID","","RespostaID","int",0,"px",14,14,"right",null,[],22,"RespostaID",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(162,37,"RESPOSTACARIMBODETEMPO","De Tempo","","RespostaCarimboDeTempo","dtime",0,"px",16,16,"right",null,[],162,"RespostaCarimboDeTempo",!0,5,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addSingleLineEdit(131,38,"MENSAGENSID","Mensagens Id","","MensagensId","int",0,"px",4,4,"right",null,[],131,"MensagensId",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAIN",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"ADVANCEDCONTAINER",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"RESPOSTAIDFILTERCONTAINER",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"LBLRESPOSTAIDFILTER",format:1,grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRESPOSTAID",gxz:"ZV6cRespostaID",gxold:"OV6cRespostaID",gxvar:"AV6cRespostaID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cRespostaID=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cRespostaID=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCRESPOSTAID",gx.O.AV6cRespostaID,0)},c2v:function(){gx.O.AV6cRespostaID=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCRESPOSTAID",".")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"RESPOSTACARIMBODETEMPOFILTERCONTAINER",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"LBLRESPOSTACARIMBODETEMPOFILTER",format:1,grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRESPOSTACARIMBODETEMPO",gxz:"ZV7cRespostaCarimboDeTempo",gxold:"OV7cRespostaCarimboDeTempo",gxvar:"AV7cRespostaCarimboDeTempo",dp:{f:-1,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cRespostaCarimboDeTempo=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV7cRespostaCarimboDeTempo=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vCRESPOSTACARIMBODETEMPO",gx.O.AV7cRespostaCarimboDeTempo,0)},c2v:function(){gx.O.AV7cRespostaCarimboDeTempo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCRESPOSTACARIMBODETEMPO")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"GRIDTABLE",grid:0};n[29]={fld:"",grid:0};n[30]={fld:"",grid:0};n[32]={fld:"",grid:0};n[33]={fld:"",grid:0};n[35]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(34),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV13Linkselection_GXI",nac:gx.falseFn};n[36]={lvl:2,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RESPOSTAID",gxz:"Z22RespostaID",gxold:"O22RespostaID",gxvar:"A22RespostaID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A22RespostaID=gx.num.intval(n)},v2z:function(n){gx.O.Z22RespostaID=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("RESPOSTAID",n||gx.fn.currentGridRowImpl(34),gx.O.A22RespostaID,0)},c2v:function(){gx.O.A22RespostaID=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("RESPOSTAID",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[37]={lvl:2,type:"dtime",len:10,dec:5,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RESPOSTACARIMBODETEMPO",gxz:"Z162RespostaCarimboDeTempo",gxold:"O162RespostaCarimboDeTempo",gxvar:"A162RespostaCarimboDeTempo",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A162RespostaCarimboDeTempo=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z162RespostaCarimboDeTempo=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("RESPOSTACARIMBODETEMPO",n||gx.fn.currentGridRowImpl(34),gx.O.A162RespostaCarimboDeTempo,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A162RespostaCarimboDeTempo=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("RESPOSTACARIMBODETEMPO",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[38]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGENSID",gxz:"Z131MensagensId",gxold:"O131MensagensId",gxvar:"A131MensagensId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A131MensagensId=gx.num.intval(n)},v2z:function(n){gx.O.Z131MensagensId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("MENSAGENSID",n||gx.fn.currentGridRowImpl(34),gx.O.A131MensagensId,0)},c2v:function(){gx.O.A131MensagensId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("MENSAGENSID",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[39]={fld:"",grid:0};n[40]={fld:"",grid:0};this.AV6cRespostaID=0;this.ZV6cRespostaID=0;this.OV6cRespostaID=0;this.AV7cRespostaCarimboDeTempo=gx.date.nullDate();this.ZV7cRespostaCarimboDeTempo=gx.date.nullDate();this.OV7cRespostaCarimboDeTempo=gx.date.nullDate();this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z22RespostaID=0;this.O22RespostaID=0;this.Z162RespostaCarimboDeTempo=gx.date.nullDate();this.O162RespostaCarimboDeTempo=gx.date.nullDate();this.Z131MensagensId=0;this.O131MensagensId=0;this.AV6cRespostaID=0;this.AV7cRespostaCarimboDeTempo=gx.date.nullDate();this.AV8pMensagensId=0;this.AV9pRespostaID=0;this.AV5LinkSelection="";this.A22RespostaID=0;this.A162RespostaCarimboDeTempo=gx.date.nullDate();this.A131MensagensId=0;this.Events={e164f2_client:["ENTER",!0],e174f1_client:["CANCEL",!0],e134f1_client:["'TOGGLE'",!1],e114f1_client:["LBLRESPOSTAIDFILTER.CLICK",!1],e124f1_client:["LBLRESPOSTACARIMBODETEMPOFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cRespostaID",fld:"vCRESPOSTAID"},{av:"AV7cRespostaCarimboDeTempo",fld:"vCRESPOSTACARIMBODETEMPO"},{av:"AV8pMensagensId",fld:"vPMENSAGENSID",hsh:!0}],[]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLRESPOSTAIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RESPOSTAIDFILTERCONTAINER","Class")',ctrl:"RESPOSTAIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RESPOSTAIDFILTERCONTAINER","Class")',ctrl:"RESPOSTAIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRESPOSTAID","Visible")',ctrl:"vCRESPOSTAID",prop:"Visible"}]];this.EvtParms["LBLRESPOSTACARIMBODETEMPOFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RESPOSTACARIMBODETEMPOFILTERCONTAINER","Class")',ctrl:"RESPOSTACARIMBODETEMPOFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RESPOSTACARIMBODETEMPOFILTERCONTAINER","Class")',ctrl:"RESPOSTACARIMBODETEMPOFILTERCONTAINER",prop:"Class"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A22RespostaID",fld:"RESPOSTAID"}],[{av:"AV9pRespostaID",fld:"vPRESPOSTAID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cRespostaID",fld:"vCRESPOSTAID"},{av:"AV7cRespostaCarimboDeTempo",fld:"vCRESPOSTACARIMBODETEMPO"},{av:"AV8pMensagensId",fld:"vPMENSAGENSID",hsh:!0}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cRespostaID",fld:"vCRESPOSTAID"},{av:"AV7cRespostaCarimboDeTempo",fld:"vCRESPOSTACARIMBODETEMPO"},{av:"AV8pMensagensId",fld:"vPMENSAGENSID",hsh:!0}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cRespostaID",fld:"vCRESPOSTAID"},{av:"AV7cRespostaCarimboDeTempo",fld:"vCRESPOSTACARIMBODETEMPO"},{av:"AV8pMensagensId",fld:"vPMENSAGENSID",hsh:!0}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cRespostaID",fld:"vCRESPOSTAID"},{av:"AV7cRespostaCarimboDeTempo",fld:"vCRESPOSTACARIMBODETEMPO"},{av:"AV8pMensagensId",fld:"vPMENSAGENSID",hsh:!0}],[]];this.setVCMap("AV8pMensagensId","vPMENSAGENSID",0,"int");this.setVCMap("AV9pRespostaID","vPRESPOSTAID",0,"int");this.setVCMap("AV8pMensagensId","vPMENSAGENSID",0,"int");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar({rfrVar:"AV8pMensagensId"});this.InitStandaloneVars()});gx.setParentObj(new gx0101)