/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:23:27.12
*/
gx.evt.autoSkip=!1;gx.define("gx00z1",!1,function(){var n,t;this.ServerClass="gx00z1";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV10pMensagensId=gx.fn.getIntegerValue("vPMENSAGENSID",".");this.AV11pDestinatarioId=gx.fn.getIntegerValue("vPDESTINATARIOID",".")};this.e154e1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle"));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}])};this.e114e1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCDESTINATARIOID","Visible",!0)):(gx.fn.setCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCDESTINATARIOID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class")',ctrl:"DESTINATARIOIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCDESTINATARIOID","Visible")',ctrl:"vCDESTINATARIOID",prop:"Visible"}])};this.e124e1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("MENSAGENSDESTINATARIOEXCLUIDAFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("MENSAGENSDESTINATARIOEXCLUIDAFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCMENSAGENSDESTINATARIOEXCLUIDA","Visible",!0)):(gx.fn.setCtrlProperty("MENSAGENSDESTINATARIOEXCLUIDAFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCMENSAGENSDESTINATARIOEXCLUIDA","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MENSAGENSDESTINATARIOEXCLUIDAFILTERCONTAINER","Class")',ctrl:"MENSAGENSDESTINATARIOEXCLUIDAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCMENSAGENSDESTINATARIOEXCLUIDA","Visible")',ctrl:"vCMENSAGENSDESTINATARIOEXCLUIDA",prop:"Visible"}])};this.e134e1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("MENSAGENSEXCLUIDAENVIADAFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("MENSAGENSEXCLUIDAENVIADAFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCMENSAGENSEXCLUIDAENVIADA","Visible",!0)):(gx.fn.setCtrlProperty("MENSAGENSEXCLUIDAENVIADAFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCMENSAGENSEXCLUIDAENVIADA","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MENSAGENSEXCLUIDAENVIADAFILTERCONTAINER","Class")',ctrl:"MENSAGENSEXCLUIDAENVIADAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCMENSAGENSEXCLUIDAENVIADA","Visible")',ctrl:"vCMENSAGENSEXCLUIDAENVIADA",prop:"Visible"}])};this.e144e1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("MENSAGENSDESTINATARIOLIDAFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("MENSAGENSDESTINATARIOLIDAFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCMENSAGENSDESTINATARIOLIDA","Visible",!0)):(gx.fn.setCtrlProperty("MENSAGENSDESTINATARIOLIDAFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCMENSAGENSDESTINATARIOLIDA","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MENSAGENSDESTINATARIOLIDAFILTERCONTAINER","Class")',ctrl:"MENSAGENSDESTINATARIOLIDAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCMENSAGENSDESTINATARIOLIDA","Visible")',ctrl:"vCMENSAGENSDESTINATARIOLIDA",prop:"Visible"}])};this.e184e2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e194e1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,53,55,56,57,58,59,60,61,62];this.GXLastCtrlId=62;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",54,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00z1",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",55,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(21,56,"DESTINATARIOID","Destinatario Id","","DestinatarioId","int",0,"px",14,14,"right",null,[],21,"DestinatarioId",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(157,57,"MENSAGENSDESTINATARIOEXCLUIDA","Destinatario Excluida","","MensagensDestinatarioExcluida","char",0,"px",1,1,"left",null,[],157,"MensagensDestinatarioExcluida",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(160,58,"MENSAGENSEXCLUIDAENVIADA","Excluida Enviada","","MensagensExcluidaEnviada","char",0,"px",1,1,"left",null,[],160,"MensagensExcluidaEnviada",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(158,59,"MENSAGENSDESTINATARIOLIDA","Destinatario Lida","","MensagensDestinatarioLida","char",0,"px",1,1,"left",null,[],158,"MensagensDestinatarioLida",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(131,60,"MENSAGENSID","Mensagens Id","","MensagensId","int",0,"px",4,4,"right",null,[],131,"MensagensId",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAIN",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"ADVANCEDCONTAINER",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"DESTINATARIOIDFILTERCONTAINER",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"LBLDESTINATARIOIDFILTER",format:1,grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDESTINATARIOID",gxz:"ZV6cDestinatarioId",gxold:"OV6cDestinatarioId",gxvar:"AV6cDestinatarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cDestinatarioId=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cDestinatarioId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCDESTINATARIOID",gx.O.AV6cDestinatarioId,0)},c2v:function(){gx.O.AV6cDestinatarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDESTINATARIOID",".")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"MENSAGENSDESTINATARIOEXCLUIDAFILTERCONTAINER",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"LBLMENSAGENSDESTINATARIOEXCLUIDAFILTER",format:1,grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENSAGENSDESTINATARIOEXCLUIDA",gxz:"ZV7cMensagensDestinatarioExcluida",gxold:"OV7cMensagensDestinatarioExcluida",gxvar:"AV7cMensagensDestinatarioExcluida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cMensagensDestinatarioExcluida=n},v2z:function(n){gx.O.ZV7cMensagensDestinatarioExcluida=n},v2c:function(){gx.fn.setControlValue("vCMENSAGENSDESTINATARIOEXCLUIDA",gx.O.AV7cMensagensDestinatarioExcluida,0)},c2v:function(){gx.O.AV7cMensagensDestinatarioExcluida=this.val()},val:function(){return gx.fn.getControlValue("vCMENSAGENSDESTINATARIOEXCLUIDA")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"MENSAGENSEXCLUIDAENVIADAFILTERCONTAINER",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={fld:"LBLMENSAGENSEXCLUIDAENVIADAFILTER",format:1,grid:0};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[35]={fld:"",grid:0};n[36]={lvl:0,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENSAGENSEXCLUIDAENVIADA",gxz:"ZV8cMensagensExcluidaEnviada",gxold:"OV8cMensagensExcluidaEnviada",gxvar:"AV8cMensagensExcluidaEnviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cMensagensExcluidaEnviada=n},v2z:function(n){gx.O.ZV8cMensagensExcluidaEnviada=n},v2c:function(){gx.fn.setControlValue("vCMENSAGENSEXCLUIDAENVIADA",gx.O.AV8cMensagensExcluidaEnviada,0)},c2v:function(){gx.O.AV8cMensagensExcluidaEnviada=this.val()},val:function(){return gx.fn.getControlValue("vCMENSAGENSEXCLUIDAENVIADA")},nac:gx.falseFn};n[37]={fld:"",grid:0};n[38]={fld:"",grid:0};n[39]={fld:"MENSAGENSDESTINATARIOLIDAFILTERCONTAINER",grid:0};n[40]={fld:"",grid:0};n[41]={fld:"",grid:0};n[42]={fld:"LBLMENSAGENSDESTINATARIOLIDAFILTER",format:1,grid:0};n[43]={fld:"",grid:0};n[44]={fld:"",grid:0};n[45]={fld:"",grid:0};n[46]={lvl:0,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENSAGENSDESTINATARIOLIDA",gxz:"ZV9cMensagensDestinatarioLida",gxold:"OV9cMensagensDestinatarioLida",gxvar:"AV9cMensagensDestinatarioLida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cMensagensDestinatarioLida=n},v2z:function(n){gx.O.ZV9cMensagensDestinatarioLida=n},v2c:function(){gx.fn.setControlValue("vCMENSAGENSDESTINATARIOLIDA",gx.O.AV9cMensagensDestinatarioLida,0)},c2v:function(){gx.O.AV9cMensagensDestinatarioLida=this.val()},val:function(){return gx.fn.getControlValue("vCMENSAGENSDESTINATARIOLIDA")},nac:gx.falseFn};n[47]={fld:"",grid:0};n[48]={fld:"GRIDTABLE",grid:0};n[49]={fld:"",grid:0};n[50]={fld:"",grid:0};n[52]={fld:"",grid:0};n[53]={fld:"",grid:0};n[55]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(54),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(54))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(54))},gxvar_GXI:"AV15Linkselection_GXI",nac:gx.falseFn};n[56]={lvl:2,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DESTINATARIOID",gxz:"Z21DestinatarioId",gxold:"O21DestinatarioId",gxvar:"A21DestinatarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A21DestinatarioId=gx.num.intval(n)},v2z:function(n){gx.O.Z21DestinatarioId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("DESTINATARIOID",n||gx.fn.currentGridRowImpl(54),gx.O.A21DestinatarioId,0)},c2v:function(){gx.O.A21DestinatarioId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("DESTINATARIOID",n||gx.fn.currentGridRowImpl(54),".")},nac:gx.falseFn};n[57]={lvl:2,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGENSDESTINATARIOEXCLUIDA",gxz:"Z157MensagensDestinatarioExcluida",gxold:"O157MensagensDestinatarioExcluida",gxvar:"A157MensagensDestinatarioExcluida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A157MensagensDestinatarioExcluida=n},v2z:function(n){gx.O.Z157MensagensDestinatarioExcluida=n},v2c:function(n){gx.fn.setGridControlValue("MENSAGENSDESTINATARIOEXCLUIDA",n||gx.fn.currentGridRowImpl(54),gx.O.A157MensagensDestinatarioExcluida,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A157MensagensDestinatarioExcluida=this.val()},val:function(n){return gx.fn.getGridControlValue("MENSAGENSDESTINATARIOEXCLUIDA",n||gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};n[58]={lvl:2,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGENSEXCLUIDAENVIADA",gxz:"Z160MensagensExcluidaEnviada",gxold:"O160MensagensExcluidaEnviada",gxvar:"A160MensagensExcluidaEnviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A160MensagensExcluidaEnviada=n},v2z:function(n){gx.O.Z160MensagensExcluidaEnviada=n},v2c:function(n){gx.fn.setGridControlValue("MENSAGENSEXCLUIDAENVIADA",n||gx.fn.currentGridRowImpl(54),gx.O.A160MensagensExcluidaEnviada,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A160MensagensExcluidaEnviada=this.val()},val:function(n){return gx.fn.getGridControlValue("MENSAGENSEXCLUIDAENVIADA",n||gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};n[59]={lvl:2,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGENSDESTINATARIOLIDA",gxz:"Z158MensagensDestinatarioLida",gxold:"O158MensagensDestinatarioLida",gxvar:"A158MensagensDestinatarioLida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A158MensagensDestinatarioLida=n},v2z:function(n){gx.O.Z158MensagensDestinatarioLida=n},v2c:function(n){gx.fn.setGridControlValue("MENSAGENSDESTINATARIOLIDA",n||gx.fn.currentGridRowImpl(54),gx.O.A158MensagensDestinatarioLida,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A158MensagensDestinatarioLida=this.val()},val:function(n){return gx.fn.getGridControlValue("MENSAGENSDESTINATARIOLIDA",n||gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};n[60]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGENSID",gxz:"Z131MensagensId",gxold:"O131MensagensId",gxvar:"A131MensagensId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A131MensagensId=gx.num.intval(n)},v2z:function(n){gx.O.Z131MensagensId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("MENSAGENSID",n||gx.fn.currentGridRowImpl(54),gx.O.A131MensagensId,0)},c2v:function(){gx.O.A131MensagensId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("MENSAGENSID",n||gx.fn.currentGridRowImpl(54),".")},nac:gx.falseFn};n[61]={fld:"",grid:0};n[62]={fld:"",grid:0};this.AV6cDestinatarioId=0;this.ZV6cDestinatarioId=0;this.OV6cDestinatarioId=0;this.AV7cMensagensDestinatarioExcluida="";this.ZV7cMensagensDestinatarioExcluida="";this.OV7cMensagensDestinatarioExcluida="";this.AV8cMensagensExcluidaEnviada="";this.ZV8cMensagensExcluidaEnviada="";this.OV8cMensagensExcluidaEnviada="";this.AV9cMensagensDestinatarioLida="";this.ZV9cMensagensDestinatarioLida="";this.OV9cMensagensDestinatarioLida="";this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z21DestinatarioId=0;this.O21DestinatarioId=0;this.Z157MensagensDestinatarioExcluida="";this.O157MensagensDestinatarioExcluida="";this.Z160MensagensExcluidaEnviada="";this.O160MensagensExcluidaEnviada="";this.Z158MensagensDestinatarioLida="";this.O158MensagensDestinatarioLida="";this.Z131MensagensId=0;this.O131MensagensId=0;this.AV6cDestinatarioId=0;this.AV7cMensagensDestinatarioExcluida="";this.AV8cMensagensExcluidaEnviada="";this.AV9cMensagensDestinatarioLida="";this.AV10pMensagensId=0;this.AV11pDestinatarioId=0;this.AV5LinkSelection="";this.A21DestinatarioId=0;this.A157MensagensDestinatarioExcluida="";this.A160MensagensExcluidaEnviada="";this.A158MensagensDestinatarioLida="";this.A131MensagensId=0;this.Events={e184e2_client:["ENTER",!0],e194e1_client:["CANCEL",!0],e154e1_client:["'TOGGLE'",!1],e114e1_client:["LBLDESTINATARIOIDFILTER.CLICK",!1],e124e1_client:["LBLMENSAGENSDESTINATARIOEXCLUIDAFILTER.CLICK",!1],e134e1_client:["LBLMENSAGENSEXCLUIDAENVIADAFILTER.CLICK",!1],e144e1_client:["LBLMENSAGENSDESTINATARIOLIDAFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cDestinatarioId",fld:"vCDESTINATARIOID"},{av:"AV7cMensagensDestinatarioExcluida",fld:"vCMENSAGENSDESTINATARIOEXCLUIDA"},{av:"AV8cMensagensExcluidaEnviada",fld:"vCMENSAGENSEXCLUIDAENVIADA"},{av:"AV9cMensagensDestinatarioLida",fld:"vCMENSAGENSDESTINATARIOLIDA"},{av:"AV10pMensagensId",fld:"vPMENSAGENSID",hsh:!0}],[]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLDESTINATARIOIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class")',ctrl:"DESTINATARIOIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("DESTINATARIOIDFILTERCONTAINER","Class")',ctrl:"DESTINATARIOIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCDESTINATARIOID","Visible")',ctrl:"vCDESTINATARIOID",prop:"Visible"}]];this.EvtParms["LBLMENSAGENSDESTINATARIOEXCLUIDAFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("MENSAGENSDESTINATARIOEXCLUIDAFILTERCONTAINER","Class")',ctrl:"MENSAGENSDESTINATARIOEXCLUIDAFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("MENSAGENSDESTINATARIOEXCLUIDAFILTERCONTAINER","Class")',ctrl:"MENSAGENSDESTINATARIOEXCLUIDAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCMENSAGENSDESTINATARIOEXCLUIDA","Visible")',ctrl:"vCMENSAGENSDESTINATARIOEXCLUIDA",prop:"Visible"}]];this.EvtParms["LBLMENSAGENSEXCLUIDAENVIADAFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("MENSAGENSEXCLUIDAENVIADAFILTERCONTAINER","Class")',ctrl:"MENSAGENSEXCLUIDAENVIADAFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("MENSAGENSEXCLUIDAENVIADAFILTERCONTAINER","Class")',ctrl:"MENSAGENSEXCLUIDAENVIADAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCMENSAGENSEXCLUIDAENVIADA","Visible")',ctrl:"vCMENSAGENSEXCLUIDAENVIADA",prop:"Visible"}]];this.EvtParms["LBLMENSAGENSDESTINATARIOLIDAFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("MENSAGENSDESTINATARIOLIDAFILTERCONTAINER","Class")',ctrl:"MENSAGENSDESTINATARIOLIDAFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("MENSAGENSDESTINATARIOLIDAFILTERCONTAINER","Class")',ctrl:"MENSAGENSDESTINATARIOLIDAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCMENSAGENSDESTINATARIOLIDA","Visible")',ctrl:"vCMENSAGENSDESTINATARIOLIDA",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A21DestinatarioId",fld:"DESTINATARIOID"}],[{av:"AV11pDestinatarioId",fld:"vPDESTINATARIOID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cDestinatarioId",fld:"vCDESTINATARIOID"},{av:"AV7cMensagensDestinatarioExcluida",fld:"vCMENSAGENSDESTINATARIOEXCLUIDA"},{av:"AV8cMensagensExcluidaEnviada",fld:"vCMENSAGENSEXCLUIDAENVIADA"},{av:"AV9cMensagensDestinatarioLida",fld:"vCMENSAGENSDESTINATARIOLIDA"},{av:"AV10pMensagensId",fld:"vPMENSAGENSID",hsh:!0}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cDestinatarioId",fld:"vCDESTINATARIOID"},{av:"AV7cMensagensDestinatarioExcluida",fld:"vCMENSAGENSDESTINATARIOEXCLUIDA"},{av:"AV8cMensagensExcluidaEnviada",fld:"vCMENSAGENSEXCLUIDAENVIADA"},{av:"AV9cMensagensDestinatarioLida",fld:"vCMENSAGENSDESTINATARIOLIDA"},{av:"AV10pMensagensId",fld:"vPMENSAGENSID",hsh:!0}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cDestinatarioId",fld:"vCDESTINATARIOID"},{av:"AV7cMensagensDestinatarioExcluida",fld:"vCMENSAGENSDESTINATARIOEXCLUIDA"},{av:"AV8cMensagensExcluidaEnviada",fld:"vCMENSAGENSEXCLUIDAENVIADA"},{av:"AV9cMensagensDestinatarioLida",fld:"vCMENSAGENSDESTINATARIOLIDA"},{av:"AV10pMensagensId",fld:"vPMENSAGENSID",hsh:!0}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cDestinatarioId",fld:"vCDESTINATARIOID"},{av:"AV7cMensagensDestinatarioExcluida",fld:"vCMENSAGENSDESTINATARIOEXCLUIDA"},{av:"AV8cMensagensExcluidaEnviada",fld:"vCMENSAGENSEXCLUIDAENVIADA"},{av:"AV9cMensagensDestinatarioLida",fld:"vCMENSAGENSDESTINATARIOLIDA"},{av:"AV10pMensagensId",fld:"vPMENSAGENSID",hsh:!0}],[]];this.setVCMap("AV10pMensagensId","vPMENSAGENSID",0,"int");this.setVCMap("AV11pDestinatarioId","vPDESTINATARIOID",0,"int");this.setVCMap("AV10pMensagensId","vPMENSAGENSID",0,"int");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingVar(this.GXValidFnc[46]);t.addRefreshingVar({rfrVar:"AV10pMensagensId"});this.InitStandaloneVars()});gx.setParentObj(new gx00z1)