/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:23:31.84
*/
gx.evt.autoSkip=!1;gx.define("gx0130",!1,function(){var n,t;this.ServerClass="gx0130";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV13pCidadesId=gx.fn.getIntegerValue("vPCIDADESID",".")};this.Validv_Ccidadesuf=function(){try{var n=gx.util.balloon.getNew("vCCIDADESUF");if(this.AnyError=0,!(this.AV10cCidadesUF==""||this.AV10cCidadesUF=="AC"||this.AV10cCidadesUF=="AL"||this.AV10cCidadesUF=="AP"||this.AV10cCidadesUF=="AM"||this.AV10cCidadesUF=="BA"||this.AV10cCidadesUF=="CE"||this.AV10cCidadesUF=="DF"||this.AV10cCidadesUF=="ES"||this.AV10cCidadesUF=="GO"||this.AV10cCidadesUF=="MA"||this.AV10cCidadesUF=="MT"||this.AV10cCidadesUF=="MS"||this.AV10cCidadesUF=="MG"||this.AV10cCidadesUF=="PA"||this.AV10cCidadesUF=="PB"||this.AV10cCidadesUF=="PR"||this.AV10cCidadesUF=="PE"||this.AV10cCidadesUF=="PI"||this.AV10cCidadesUF=="RJ"||this.AV10cCidadesUF=="RN"||this.AV10cCidadesUF=="RS"||this.AV10cCidadesUF=="RO"||this.AV10cCidadesUF=="RR"||this.AV10cCidadesUF=="SC"||this.AV10cCidadesUF=="SP"||this.AV10cCidadesUF=="SE"||this.AV10cCidadesUF=="TO"||this.AV10cCidadesUF=="EX"||""==this.AV10cCidadesUF))try{n.setError("Campo cCidadesUF fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e184y1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle"));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}])};this.e114y1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("CIDADESIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("CIDADESIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCCIDADESID","Visible",!0)):(gx.fn.setCtrlProperty("CIDADESIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCCIDADESID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("CIDADESIDFILTERCONTAINER","Class")',ctrl:"CIDADESIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCIDADESID","Visible")',ctrl:"vCCIDADESID",prop:"Visible"}])};this.e124y1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("CIDADESCODIGOCORREIOFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("CIDADESCODIGOCORREIOFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCCIDADESCODIGOCORREIO","Visible",!0)):(gx.fn.setCtrlProperty("CIDADESCODIGOCORREIOFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCCIDADESCODIGOCORREIO","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("CIDADESCODIGOCORREIOFILTERCONTAINER","Class")',ctrl:"CIDADESCODIGOCORREIOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCIDADESCODIGOCORREIO","Visible")',ctrl:"vCCIDADESCODIGOCORREIO",prop:"Visible"}])};this.e134y1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("CIDADESNOCEPFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("CIDADESNOCEPFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCCIDADESNOCEP","Visible",!0)):(gx.fn.setCtrlProperty("CIDADESNOCEPFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCCIDADESNOCEP","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("CIDADESNOCEPFILTERCONTAINER","Class")',ctrl:"CIDADESNOCEPFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCIDADESNOCEP","Visible")',ctrl:"vCCIDADESNOCEP",prop:"Visible"}])};this.e144y1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("CIDADESNOMEFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("CIDADESNOMEFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCCIDADESNOME","Visible",!0)):(gx.fn.setCtrlProperty("CIDADESNOMEFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCCIDADESNOME","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("CIDADESNOMEFILTERCONTAINER","Class")',ctrl:"CIDADESNOMEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCIDADESNOME","Visible")',ctrl:"vCCIDADESNOME",prop:"Visible"}])};this.e154y1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("CIDADESUFFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("CIDADESUFFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCCIDADESUF","Visible",!0)):(gx.fn.setCtrlProperty("CIDADESUFFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCCIDADESUF","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("CIDADESUFFILTERCONTAINER","Class")',ctrl:"CIDADESUFFILTERCONTAINER",prop:"Class"},{ctrl:"vCCIDADESUF"}])};this.e164y1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("CIDADESCODIBGEFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("CIDADESCODIBGEFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCCIDADESCODIBGE","Visible",!0)):(gx.fn.setCtrlProperty("CIDADESCODIBGEFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCCIDADESCODIBGE","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("CIDADESCODIBGEFILTERCONTAINER","Class")',ctrl:"CIDADESCODIBGEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCIDADESCODIBGE","Visible")',ctrl:"vCCIDADESCODIBGE",prop:"Visible"}])};this.e174y1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("PAISESIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("PAISESIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCPAISESID","Visible",!0)):(gx.fn.setCtrlProperty("PAISESIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCPAISESID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("PAISESIDFILTERCONTAINER","Class")',ctrl:"PAISESIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPAISESID","Visible")',ctrl:"vCPAISESID",prop:"Visible"}])};this.e214y2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e224y1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,82,83,85,86,87,88,89,90,91,92,93,94];this.GXLastCtrlId=94;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",84,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0130",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",85,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(168,86,"CIDADESID","Cidade","","CidadesId","int",0,"px",8,8,"right",null,[],168,"CidadesId",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(171,87,"CIDADESCODIGOCORREIO","Código do Correio","","CidadesCodigoCorreio","int",0,"px",7,7,"right",null,[],171,"CidadesCodigoCorreio",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(172,88,"CIDADESNOCEP","Cidades No Cep","","CidadesNoCep","char",0,"px",9,9,"left",null,[],172,"CidadesNoCep",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(170,89,"CIDADESNOME","Nome da Cidade","","CidadesNome","svchar",0,"px",40,40,"left",null,[],170,"CidadesNome",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addComboBox(173,90,"CIDADESUF","UF da Cidade","CidadesUF","char",null,0,!0,!1,0,"px","WWColumn OptionalColumn");t.addSingleLineEdit(174,91,"CIDADESCODIBGE","Código Ibge","","CidadesCodIbge","int",0,"px",7,7,"right",null,[],174,"CidadesCodIbge",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(175,92,"PAISESID","Código País","","PaisesId","int",0,"px",7,7,"right",null,[],175,"PaisesId",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAIN",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"ADVANCEDCONTAINER",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"CIDADESIDFILTERCONTAINER",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"LBLCIDADESIDFILTER",format:1,grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESID",gxz:"ZV6cCidadesId",gxold:"OV6cCidadesId",gxvar:"AV6cCidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cCidadesId=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cCidadesId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCCIDADESID",gx.O.AV6cCidadesId,0)},c2v:function(){gx.O.AV6cCidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCIDADESID",".")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"CIDADESCODIGOCORREIOFILTERCONTAINER",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"LBLCIDADESCODIGOCORREIOFILTER",format:1,grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESCODIGOCORREIO",gxz:"ZV7cCidadesCodigoCorreio",gxold:"OV7cCidadesCodigoCorreio",gxvar:"AV7cCidadesCodigoCorreio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cCidadesCodigoCorreio=gx.num.intval(n)},v2z:function(n){gx.O.ZV7cCidadesCodigoCorreio=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCCIDADESCODIGOCORREIO",gx.O.AV7cCidadesCodigoCorreio,0)},c2v:function(){gx.O.AV7cCidadesCodigoCorreio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCIDADESCODIGOCORREIO",".")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"CIDADESNOCEPFILTERCONTAINER",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={fld:"LBLCIDADESNOCEPFILTER",format:1,grid:0};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[35]={fld:"",grid:0};n[36]={lvl:0,type:"char",len:9,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESNOCEP",gxz:"ZV8cCidadesNoCep",gxold:"OV8cCidadesNoCep",gxvar:"AV8cCidadesNoCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cCidadesNoCep=n},v2z:function(n){gx.O.ZV8cCidadesNoCep=n},v2c:function(){gx.fn.setControlValue("vCCIDADESNOCEP",gx.O.AV8cCidadesNoCep,0)},c2v:function(){gx.O.AV8cCidadesNoCep=this.val()},val:function(){return gx.fn.getControlValue("vCCIDADESNOCEP")},nac:gx.falseFn};n[37]={fld:"",grid:0};n[38]={fld:"",grid:0};n[39]={fld:"CIDADESNOMEFILTERCONTAINER",grid:0};n[40]={fld:"",grid:0};n[41]={fld:"",grid:0};n[42]={fld:"LBLCIDADESNOMEFILTER",format:1,grid:0};n[43]={fld:"",grid:0};n[44]={fld:"",grid:0};n[45]={fld:"",grid:0};n[46]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESNOME",gxz:"ZV9cCidadesNome",gxold:"OV9cCidadesNome",gxvar:"AV9cCidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cCidadesNome=n},v2z:function(n){gx.O.ZV9cCidadesNome=n},v2c:function(){gx.fn.setControlValue("vCCIDADESNOME",gx.O.AV9cCidadesNome,0)},c2v:function(){gx.O.AV9cCidadesNome=this.val()},val:function(){return gx.fn.getControlValue("vCCIDADESNOME")},nac:gx.falseFn};n[47]={fld:"",grid:0};n[48]={fld:"",grid:0};n[49]={fld:"CIDADESUFFILTERCONTAINER",grid:0};n[50]={fld:"",grid:0};n[51]={fld:"",grid:0};n[52]={fld:"LBLCIDADESUFFILTER",format:1,grid:0};n[53]={fld:"",grid:0};n[54]={fld:"",grid:0};n[55]={fld:"",grid:0};n[56]={lvl:0,type:"char",len:2,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccidadesuf,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESUF",gxz:"ZV10cCidadesUF",gxold:"OV10cCidadesUF",gxvar:"AV10cCidadesUF",ucs:[],op:[56],ip:[56],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV10cCidadesUF=n},v2z:function(n){gx.O.ZV10cCidadesUF=n},v2c:function(){gx.fn.setComboBoxValue("vCCIDADESUF",gx.O.AV10cCidadesUF)},c2v:function(){gx.O.AV10cCidadesUF=this.val()},val:function(){return gx.fn.getControlValue("vCCIDADESUF")},nac:gx.falseFn};n[57]={fld:"",grid:0};n[58]={fld:"",grid:0};n[59]={fld:"CIDADESCODIBGEFILTERCONTAINER",grid:0};n[60]={fld:"",grid:0};n[61]={fld:"",grid:0};n[62]={fld:"LBLCIDADESCODIBGEFILTER",format:1,grid:0};n[63]={fld:"",grid:0};n[64]={fld:"",grid:0};n[65]={fld:"",grid:0};n[66]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESCODIBGE",gxz:"ZV11cCidadesCodIbge",gxold:"OV11cCidadesCodIbge",gxvar:"AV11cCidadesCodIbge",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11cCidadesCodIbge=gx.num.intval(n)},v2z:function(n){gx.O.ZV11cCidadesCodIbge=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCCIDADESCODIBGE",gx.O.AV11cCidadesCodIbge,0)},c2v:function(){gx.O.AV11cCidadesCodIbge=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCIDADESCODIBGE",".")},nac:gx.falseFn};n[67]={fld:"",grid:0};n[68]={fld:"",grid:0};n[69]={fld:"PAISESIDFILTERCONTAINER",grid:0};n[70]={fld:"",grid:0};n[71]={fld:"",grid:0};n[72]={fld:"LBLPAISESIDFILTER",format:1,grid:0};n[73]={fld:"",grid:0};n[74]={fld:"",grid:0};n[75]={fld:"",grid:0};n[76]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPAISESID",gxz:"ZV12cPaisesId",gxold:"OV12cPaisesId",gxvar:"AV12cPaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12cPaisesId=gx.num.intval(n)},v2z:function(n){gx.O.ZV12cPaisesId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPAISESID",gx.O.AV12cPaisesId,0)},c2v:function(){gx.O.AV12cPaisesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPAISESID",".")},nac:gx.falseFn};n[77]={fld:"",grid:0};n[78]={fld:"GRIDTABLE",grid:0};n[79]={fld:"",grid:0};n[80]={fld:"",grid:0};n[82]={fld:"",grid:0};n[83]={fld:"",grid:0};n[85]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(84),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(84))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(84))},gxvar_GXI:"AV17Linkselection_GXI",nac:gx.falseFn};n[86]={lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z168CidadesId",gxold:"O168CidadesId",gxvar:"A168CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A168CidadesId=gx.num.intval(n)},v2z:function(n){gx.O.Z168CidadesId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CIDADESID",n||gx.fn.currentGridRowImpl(84),gx.O.A168CidadesId,0)},c2v:function(){gx.O.A168CidadesId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CIDADESID",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[87]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESCODIGOCORREIO",gxz:"Z171CidadesCodigoCorreio",gxold:"O171CidadesCodigoCorreio",gxvar:"A171CidadesCodigoCorreio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A171CidadesCodigoCorreio=gx.num.intval(n)},v2z:function(n){gx.O.Z171CidadesCodigoCorreio=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CIDADESCODIGOCORREIO",n||gx.fn.currentGridRowImpl(84),gx.O.A171CidadesCodigoCorreio,0)},c2v:function(){gx.O.A171CidadesCodigoCorreio=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CIDADESCODIGOCORREIO",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[88]={lvl:2,type:"char",len:9,dec:0,sign:!1,ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOCEP",gxz:"Z172CidadesNoCep",gxold:"O172CidadesNoCep",gxvar:"A172CidadesNoCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A172CidadesNoCep=n},v2z:function(n){gx.O.Z172CidadesNoCep=n},v2c:function(n){gx.fn.setGridControlValue("CIDADESNOCEP",n||gx.fn.currentGridRowImpl(84),gx.O.A172CidadesNoCep,0)},c2v:function(){gx.O.A172CidadesNoCep=this.val()},val:function(n){return gx.fn.getGridControlValue("CIDADESNOCEP",n||gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};n[89]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z170CidadesNome",gxold:"O170CidadesNome",gxvar:"A170CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A170CidadesNome=n},v2z:function(n){gx.O.Z170CidadesNome=n},v2c:function(n){gx.fn.setGridControlValue("CIDADESNOME",n||gx.fn.currentGridRowImpl(84),gx.O.A170CidadesNome,0)},c2v:function(){gx.O.A170CidadesNome=this.val()},val:function(n){return gx.fn.getGridControlValue("CIDADESNOME",n||gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};n[90]={lvl:2,type:"char",len:2,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESUF",gxz:"Z173CidadesUF",gxold:"O173CidadesUF",gxvar:"A173CidadesUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){gx.O.A173CidadesUF=n},v2z:function(n){gx.O.Z173CidadesUF=n},v2c:function(n){gx.fn.setGridComboBoxValue("CIDADESUF",n||gx.fn.currentGridRowImpl(84),gx.O.A173CidadesUF);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A173CidadesUF=this.val()},val:function(n){return gx.fn.getGridControlValue("CIDADESUF",n||gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};n[91]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESCODIBGE",gxz:"Z174CidadesCodIbge",gxold:"O174CidadesCodIbge",gxvar:"A174CidadesCodIbge",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A174CidadesCodIbge=gx.num.intval(n)},v2z:function(n){gx.O.Z174CidadesCodIbge=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CIDADESCODIBGE",n||gx.fn.currentGridRowImpl(84),gx.O.A174CidadesCodIbge,0)},c2v:function(){gx.O.A174CidadesCodIbge=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CIDADESCODIBGE",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[92]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PAISESID",gxz:"Z175PaisesId",gxold:"O175PaisesId",gxvar:"A175PaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A175PaisesId=gx.num.intval(n)},v2z:function(n){gx.O.Z175PaisesId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PAISESID",n||gx.fn.currentGridRowImpl(84),gx.O.A175PaisesId,0)},c2v:function(){gx.O.A175PaisesId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PAISESID",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[93]={fld:"",grid:0};n[94]={fld:"",grid:0};this.AV6cCidadesId=0;this.ZV6cCidadesId=0;this.OV6cCidadesId=0;this.AV7cCidadesCodigoCorreio=0;this.ZV7cCidadesCodigoCorreio=0;this.OV7cCidadesCodigoCorreio=0;this.AV8cCidadesNoCep="";this.ZV8cCidadesNoCep="";this.OV8cCidadesNoCep="";this.AV9cCidadesNome="";this.ZV9cCidadesNome="";this.OV9cCidadesNome="";this.AV10cCidadesUF="";this.ZV10cCidadesUF="";this.OV10cCidadesUF="";this.AV11cCidadesCodIbge=0;this.ZV11cCidadesCodIbge=0;this.OV11cCidadesCodIbge=0;this.AV12cPaisesId=0;this.ZV12cPaisesId=0;this.OV12cPaisesId=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z168CidadesId=0;this.O168CidadesId=0;this.Z171CidadesCodigoCorreio=0;this.O171CidadesCodigoCorreio=0;this.Z172CidadesNoCep="";this.O172CidadesNoCep="";this.Z170CidadesNome="";this.O170CidadesNome="";this.Z173CidadesUF="";this.O173CidadesUF="";this.Z174CidadesCodIbge=0;this.O174CidadesCodIbge=0;this.Z175PaisesId=0;this.O175PaisesId=0;this.AV6cCidadesId=0;this.AV7cCidadesCodigoCorreio=0;this.AV8cCidadesNoCep="";this.AV9cCidadesNome="";this.AV10cCidadesUF="";this.AV11cCidadesCodIbge=0;this.AV12cPaisesId=0;this.AV13pCidadesId=0;this.AV5LinkSelection="";this.A168CidadesId=0;this.A171CidadesCodigoCorreio=0;this.A172CidadesNoCep="";this.A170CidadesNome="";this.A173CidadesUF="";this.A174CidadesCodIbge=0;this.A175PaisesId=0;this.Events={e214y2_client:["ENTER",!0],e224y1_client:["CANCEL",!0],e184y1_client:["'TOGGLE'",!1],e114y1_client:["LBLCIDADESIDFILTER.CLICK",!1],e124y1_client:["LBLCIDADESCODIGOCORREIOFILTER.CLICK",!1],e134y1_client:["LBLCIDADESNOCEPFILTER.CLICK",!1],e144y1_client:["LBLCIDADESNOMEFILTER.CLICK",!1],e154y1_client:["LBLCIDADESUFFILTER.CLICK",!1],e164y1_client:["LBLCIDADESCODIBGEFILTER.CLICK",!1],e174y1_client:["LBLPAISESIDFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cCidadesId",fld:"vCCIDADESID"},{av:"AV7cCidadesCodigoCorreio",fld:"vCCIDADESCODIGOCORREIO"},{av:"AV8cCidadesNoCep",fld:"vCCIDADESNOCEP"},{av:"AV9cCidadesNome",fld:"vCCIDADESNOME"},{av:"AV10cCidadesUF",fld:"vCCIDADESUF"},{av:"AV11cCidadesCodIbge",fld:"vCCIDADESCODIBGE"},{av:"AV12cPaisesId",fld:"vCPAISESID"}],[]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLCIDADESIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("CIDADESIDFILTERCONTAINER","Class")',ctrl:"CIDADESIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("CIDADESIDFILTERCONTAINER","Class")',ctrl:"CIDADESIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCIDADESID","Visible")',ctrl:"vCCIDADESID",prop:"Visible"}]];this.EvtParms["LBLCIDADESCODIGOCORREIOFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("CIDADESCODIGOCORREIOFILTERCONTAINER","Class")',ctrl:"CIDADESCODIGOCORREIOFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("CIDADESCODIGOCORREIOFILTERCONTAINER","Class")',ctrl:"CIDADESCODIGOCORREIOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCIDADESCODIGOCORREIO","Visible")',ctrl:"vCCIDADESCODIGOCORREIO",prop:"Visible"}]];this.EvtParms["LBLCIDADESNOCEPFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("CIDADESNOCEPFILTERCONTAINER","Class")',ctrl:"CIDADESNOCEPFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("CIDADESNOCEPFILTERCONTAINER","Class")',ctrl:"CIDADESNOCEPFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCIDADESNOCEP","Visible")',ctrl:"vCCIDADESNOCEP",prop:"Visible"}]];this.EvtParms["LBLCIDADESNOMEFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("CIDADESNOMEFILTERCONTAINER","Class")',ctrl:"CIDADESNOMEFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("CIDADESNOMEFILTERCONTAINER","Class")',ctrl:"CIDADESNOMEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCIDADESNOME","Visible")',ctrl:"vCCIDADESNOME",prop:"Visible"}]];this.EvtParms["LBLCIDADESUFFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("CIDADESUFFILTERCONTAINER","Class")',ctrl:"CIDADESUFFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("CIDADESUFFILTERCONTAINER","Class")',ctrl:"CIDADESUFFILTERCONTAINER",prop:"Class"},{ctrl:"vCCIDADESUF"}]];this.EvtParms["LBLCIDADESCODIBGEFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("CIDADESCODIBGEFILTERCONTAINER","Class")',ctrl:"CIDADESCODIBGEFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("CIDADESCODIBGEFILTERCONTAINER","Class")',ctrl:"CIDADESCODIBGEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCIDADESCODIBGE","Visible")',ctrl:"vCCIDADESCODIBGE",prop:"Visible"}]];this.EvtParms["LBLPAISESIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("PAISESIDFILTERCONTAINER","Class")',ctrl:"PAISESIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("PAISESIDFILTERCONTAINER","Class")',ctrl:"PAISESIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPAISESID","Visible")',ctrl:"vCPAISESID",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A168CidadesId",fld:"CIDADESID"}],[{av:"AV13pCidadesId",fld:"vPCIDADESID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cCidadesId",fld:"vCCIDADESID"},{av:"AV7cCidadesCodigoCorreio",fld:"vCCIDADESCODIGOCORREIO"},{av:"AV8cCidadesNoCep",fld:"vCCIDADESNOCEP"},{av:"AV9cCidadesNome",fld:"vCCIDADESNOME"},{av:"AV10cCidadesUF",fld:"vCCIDADESUF"},{av:"AV11cCidadesCodIbge",fld:"vCCIDADESCODIBGE"},{av:"AV12cPaisesId",fld:"vCPAISESID"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cCidadesId",fld:"vCCIDADESID"},{av:"AV7cCidadesCodigoCorreio",fld:"vCCIDADESCODIGOCORREIO"},{av:"AV8cCidadesNoCep",fld:"vCCIDADESNOCEP"},{av:"AV9cCidadesNome",fld:"vCCIDADESNOME"},{av:"AV10cCidadesUF",fld:"vCCIDADESUF"},{av:"AV11cCidadesCodIbge",fld:"vCCIDADESCODIBGE"},{av:"AV12cPaisesId",fld:"vCPAISESID"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cCidadesId",fld:"vCCIDADESID"},{av:"AV7cCidadesCodigoCorreio",fld:"vCCIDADESCODIGOCORREIO"},{av:"AV8cCidadesNoCep",fld:"vCCIDADESNOCEP"},{av:"AV9cCidadesNome",fld:"vCCIDADESNOME"},{av:"AV10cCidadesUF",fld:"vCCIDADESUF"},{av:"AV11cCidadesCodIbge",fld:"vCCIDADESCODIBGE"},{av:"AV12cPaisesId",fld:"vCPAISESID"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cCidadesId",fld:"vCCIDADESID"},{av:"AV7cCidadesCodigoCorreio",fld:"vCCIDADESCODIGOCORREIO"},{av:"AV8cCidadesNoCep",fld:"vCCIDADESNOCEP"},{av:"AV9cCidadesNome",fld:"vCCIDADESNOME"},{av:"AV10cCidadesUF",fld:"vCCIDADESUF"},{av:"AV11cCidadesCodIbge",fld:"vCCIDADESCODIBGE"},{av:"AV12cPaisesId",fld:"vCPAISESID"}],[]];this.setVCMap("AV13pCidadesId","vPCIDADESID",0,"int");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingVar(this.GXValidFnc[46]);t.addRefreshingVar(this.GXValidFnc[56]);t.addRefreshingVar(this.GXValidFnc[66]);t.addRefreshingVar(this.GXValidFnc[76]);this.InitStandaloneVars()});gx.setParentObj(new gx0130)