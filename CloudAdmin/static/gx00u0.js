/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:23:18.54
*/
gx.evt.autoSkip=!1;gx.define("gx00u0",!1,function(){var n,t;this.ServerClass="gx00u0";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV13pUsuarioId=gx.fn.getIntegerValue("vPUSUARIOID",".")};this.e183t1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle"));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}])};this.e113t1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("USUARIOIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("USUARIOIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUSUARIOID","Visible",!0)):(gx.fn.setCtrlProperty("USUARIOIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUSUARIOID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("USUARIOIDFILTERCONTAINER","Class")',ctrl:"USUARIOIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOID","Visible")',ctrl:"vCUSUARIOID",prop:"Visible"}])};this.e123t1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("USUARIONOMEFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("USUARIONOMEFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUSUARIONOME","Visible",!0)):(gx.fn.setCtrlProperty("USUARIONOMEFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUSUARIONOME","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("USUARIONOMEFILTERCONTAINER","Class")',ctrl:"USUARIONOMEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIONOME","Visible")',ctrl:"vCUSUARIONOME",prop:"Visible"}])};this.e133t1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("USUARIOEMAILFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("USUARIOEMAILFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUSUARIOEMAIL","Visible",!0)):(gx.fn.setCtrlProperty("USUARIOEMAILFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUSUARIOEMAIL","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("USUARIOEMAILFILTERCONTAINER","Class")',ctrl:"USUARIOEMAILFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOEMAIL","Visible")',ctrl:"vCUSUARIOEMAIL",prop:"Visible"}])};this.e143t1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("USUARIOSENHAFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("USUARIOSENHAFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUSUARIOSENHA","Visible",!0)):(gx.fn.setCtrlProperty("USUARIOSENHAFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUSUARIOSENHA","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("USUARIOSENHAFILTERCONTAINER","Class")',ctrl:"USUARIOSENHAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOSENHA","Visible")',ctrl:"vCUSUARIOSENHA",prop:"Visible"}])};this.e153t1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("USUARIOCHAVEFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("USUARIOCHAVEFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUSUARIOCHAVE","Visible",!0)):(gx.fn.setCtrlProperty("USUARIOCHAVEFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUSUARIOCHAVE","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("USUARIOCHAVEFILTERCONTAINER","Class")',ctrl:"USUARIOCHAVEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOCHAVE","Visible")',ctrl:"vCUSUARIOCHAVE",prop:"Visible"}])};this.e163t1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("USUARIOCONFIRMADOFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("USUARIOCONFIRMADOFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUSUARIOCONFIRMADO","Visible",!0)):(gx.fn.setCtrlProperty("USUARIOCONFIRMADOFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUSUARIOCONFIRMADO","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("USUARIOCONFIRMADOFILTERCONTAINER","Class")',ctrl:"USUARIOCONFIRMADOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOCONFIRMADO","Visible")',ctrl:"vCUSUARIOCONFIRMADO",prop:"Visible"}])};this.e173t1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("USUARIODATAATUALIZACAOFILTERCONTAINER","Class")=="AdvancedContainerItem"?gx.fn.setCtrlProperty("USUARIODATAATUALIZACAOFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"):gx.fn.setCtrlProperty("USUARIODATAATUALIZACAOFILTERCONTAINER","Class","AdvancedContainerItem");this.refreshOutputs([{av:'gx.fn.getCtrlProperty("USUARIODATAATUALIZACAOFILTERCONTAINER","Class")',ctrl:"USUARIODATAATUALIZACAOFILTERCONTAINER",prop:"Class"}])};this.e213t2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e223t1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,82,83,85,86,87,88,89,90,91];this.GXLastCtrlId=91;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",84,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00u0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",85,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(12,86,"USUARIOID","Usuario","","UsuarioId","int",0,"px",14,14,"right",null,[],12,"UsuarioId",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(13,87,"USUARIONOME","Nome","","UsuarioNome","char",0,"px",35,35,"left",null,[],13,"UsuarioNome",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addSingleLineEdit(23,88,"USUARIOSENHA","Senha","","UsuarioSenha","char",0,"px",60,60,"left",null,[],23,"UsuarioSenha",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addCheckBox(25,89,"USUARIOCONFIRMADO","Confirmado","","UsuarioConfirmado","boolean","true","false",null,!0,!1,0,"px","WWColumn OptionalColumn");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAIN",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"ADVANCEDCONTAINER",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"USUARIOIDFILTERCONTAINER",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"LBLUSUARIOIDFILTER",format:1,grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOID",gxz:"ZV6cUsuarioId",gxold:"OV6cUsuarioId",gxvar:"AV6cUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cUsuarioId=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cUsuarioId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCUSUARIOID",gx.O.AV6cUsuarioId,0)},c2v:function(){gx.O.AV6cUsuarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCUSUARIOID",".")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"USUARIONOMEFILTERCONTAINER",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"LBLUSUARIONOMEFILTER",format:1,grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"char",len:35,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIONOME",gxz:"ZV7cUsuarioNome",gxold:"OV7cUsuarioNome",gxvar:"AV7cUsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cUsuarioNome=n},v2z:function(n){gx.O.ZV7cUsuarioNome=n},v2c:function(){gx.fn.setControlValue("vCUSUARIONOME",gx.O.AV7cUsuarioNome,0)},c2v:function(){gx.O.AV7cUsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIONOME")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"USUARIOEMAILFILTERCONTAINER",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={fld:"LBLUSUARIOEMAILFILTER",format:1,grid:0};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[35]={fld:"",grid:0};n[36]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOEMAIL",gxz:"ZV8cUsuarioEmail",gxold:"OV8cUsuarioEmail",gxvar:"AV8cUsuarioEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cUsuarioEmail=n},v2z:function(n){gx.O.ZV8cUsuarioEmail=n},v2c:function(){gx.fn.setControlValue("vCUSUARIOEMAIL",gx.O.AV8cUsuarioEmail,0)},c2v:function(){gx.O.AV8cUsuarioEmail=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOEMAIL")},nac:gx.falseFn};n[37]={fld:"",grid:0};n[38]={fld:"",grid:0};n[39]={fld:"USUARIOSENHAFILTERCONTAINER",grid:0};n[40]={fld:"",grid:0};n[41]={fld:"",grid:0};n[42]={fld:"LBLUSUARIOSENHAFILTER",format:1,grid:0};n[43]={fld:"",grid:0};n[44]={fld:"",grid:0};n[45]={fld:"",grid:0};n[46]={lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOSENHA",gxz:"ZV9cUsuarioSenha",gxold:"OV9cUsuarioSenha",gxvar:"AV9cUsuarioSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cUsuarioSenha=n},v2z:function(n){gx.O.ZV9cUsuarioSenha=n},v2c:function(){gx.fn.setControlValue("vCUSUARIOSENHA",gx.O.AV9cUsuarioSenha,0)},c2v:function(){gx.O.AV9cUsuarioSenha=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOSENHA")},nac:gx.falseFn};n[47]={fld:"",grid:0};n[48]={fld:"",grid:0};n[49]={fld:"USUARIOCHAVEFILTERCONTAINER",grid:0};n[50]={fld:"",grid:0};n[51]={fld:"",grid:0};n[52]={fld:"LBLUSUARIOCHAVEFILTER",format:1,grid:0};n[53]={fld:"",grid:0};n[54]={fld:"",grid:0};n[55]={fld:"",grid:0};n[56]={lvl:0,type:"char",len:32,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOCHAVE",gxz:"ZV10cUsuarioChave",gxold:"OV10cUsuarioChave",gxvar:"AV10cUsuarioChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10cUsuarioChave=n},v2z:function(n){gx.O.ZV10cUsuarioChave=n},v2c:function(){gx.fn.setControlValue("vCUSUARIOCHAVE",gx.O.AV10cUsuarioChave,0)},c2v:function(){gx.O.AV10cUsuarioChave=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOCHAVE")},nac:gx.falseFn};n[57]={fld:"",grid:0};n[58]={fld:"",grid:0};n[59]={fld:"USUARIOCONFIRMADOFILTERCONTAINER",grid:0};n[60]={fld:"",grid:0};n[61]={fld:"",grid:0};n[62]={fld:"LBLUSUARIOCONFIRMADOFILTER",format:1,grid:0};n[63]={fld:"",grid:0};n[64]={fld:"",grid:0};n[65]={fld:"",grid:0};n[66]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOCONFIRMADO",gxz:"ZV11cUsuarioConfirmado",gxold:"OV11cUsuarioConfirmado",gxvar:"AV11cUsuarioConfirmado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV11cUsuarioConfirmado=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV11cUsuarioConfirmado=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vCUSUARIOCONFIRMADO",gx.O.AV11cUsuarioConfirmado,!0)},c2v:function(){gx.O.AV11cUsuarioConfirmado=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCUSUARIOCONFIRMADO")},nac:gx.falseFn,values:["true","false"]};n[67]={fld:"",grid:0};n[68]={fld:"",grid:0};n[69]={fld:"USUARIODATAATUALIZACAOFILTERCONTAINER",grid:0};n[70]={fld:"",grid:0};n[71]={fld:"",grid:0};n[72]={fld:"LBLUSUARIODATAATUALIZACAOFILTER",format:1,grid:0};n[73]={fld:"",grid:0};n[74]={fld:"",grid:0};n[75]={fld:"",grid:0};n[76]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIODATAATUALIZACAO",gxz:"ZV12cUsuarioDataAtualizacao",gxold:"OV12cUsuarioDataAtualizacao",gxvar:"AV12cUsuarioDataAtualizacao",dp:{f:-1,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12cUsuarioDataAtualizacao=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV12cUsuarioDataAtualizacao=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vCUSUARIODATAATUALIZACAO",gx.O.AV12cUsuarioDataAtualizacao,0)},c2v:function(){gx.O.AV12cUsuarioDataAtualizacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCUSUARIODATAATUALIZACAO")},nac:gx.falseFn};n[77]={fld:"",grid:0};n[78]={fld:"GRIDTABLE",grid:0};n[79]={fld:"",grid:0};n[80]={fld:"",grid:0};n[82]={fld:"",grid:0};n[83]={fld:"",grid:0};n[85]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(84),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(84))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(84))},gxvar_GXI:"AV17Linkselection_GXI",nac:gx.falseFn};n[86]={lvl:2,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z12UsuarioId",gxold:"O12UsuarioId",gxvar:"A12UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A12UsuarioId=gx.num.intval(n)},v2z:function(n){gx.O.Z12UsuarioId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("USUARIOID",n||gx.fn.currentGridRowImpl(84),gx.O.A12UsuarioId,0)},c2v:function(){gx.O.A12UsuarioId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("USUARIOID",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[87]={lvl:2,type:"char",len:35,dec:0,sign:!1,ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIONOME",gxz:"Z13UsuarioNome",gxold:"O13UsuarioNome",gxvar:"A13UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A13UsuarioNome=n},v2z:function(n){gx.O.Z13UsuarioNome=n},v2c:function(n){gx.fn.setGridControlValue("USUARIONOME",n||gx.fn.currentGridRowImpl(84),gx.O.A13UsuarioNome,0)},c2v:function(){gx.O.A13UsuarioNome=this.val()},val:function(n){return gx.fn.getGridControlValue("USUARIONOME",n||gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};n[88]={lvl:2,type:"char",len:60,dec:0,sign:!1,ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOSENHA",gxz:"Z23UsuarioSenha",gxold:"O23UsuarioSenha",gxvar:"A23UsuarioSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A23UsuarioSenha=n},v2z:function(n){gx.O.Z23UsuarioSenha=n},v2c:function(n){gx.fn.setGridControlValue("USUARIOSENHA",n||gx.fn.currentGridRowImpl(84),gx.O.A23UsuarioSenha,0)},c2v:function(){gx.O.A23UsuarioSenha=this.val()},val:function(n){return gx.fn.getGridControlValue("USUARIOSENHA",n||gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};n[89]={lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCONFIRMADO",gxz:"Z25UsuarioConfirmado",gxold:"O25UsuarioConfirmado",gxvar:"A25UsuarioConfirmado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){gx.O.A25UsuarioConfirmado=gx.lang.booleanValue(n)},v2z:function(n){gx.O.Z25UsuarioConfirmado=gx.lang.booleanValue(n)},v2c:function(n){gx.fn.setGridCheckBoxValue("USUARIOCONFIRMADO",n||gx.fn.currentGridRowImpl(84),gx.O.A25UsuarioConfirmado,!0)},c2v:function(){gx.O.A25UsuarioConfirmado=gx.lang.booleanValue(this.val())},val:function(n){return gx.fn.getGridControlValue("USUARIOCONFIRMADO",n||gx.fn.currentGridRowImpl(84))},nac:gx.falseFn,values:["true","false"]};n[90]={fld:"",grid:0};n[91]={fld:"",grid:0};this.AV6cUsuarioId=0;this.ZV6cUsuarioId=0;this.OV6cUsuarioId=0;this.AV7cUsuarioNome="";this.ZV7cUsuarioNome="";this.OV7cUsuarioNome="";this.AV8cUsuarioEmail="";this.ZV8cUsuarioEmail="";this.OV8cUsuarioEmail="";this.AV9cUsuarioSenha="";this.ZV9cUsuarioSenha="";this.OV9cUsuarioSenha="";this.AV10cUsuarioChave="";this.ZV10cUsuarioChave="";this.OV10cUsuarioChave="";this.AV11cUsuarioConfirmado=!1;this.ZV11cUsuarioConfirmado=!1;this.OV11cUsuarioConfirmado=!1;this.AV12cUsuarioDataAtualizacao=gx.date.nullDate();this.ZV12cUsuarioDataAtualizacao=gx.date.nullDate();this.OV12cUsuarioDataAtualizacao=gx.date.nullDate();this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z12UsuarioId=0;this.O12UsuarioId=0;this.Z13UsuarioNome="";this.O13UsuarioNome="";this.Z23UsuarioSenha="";this.O23UsuarioSenha="";this.Z25UsuarioConfirmado=!1;this.O25UsuarioConfirmado=!1;this.AV6cUsuarioId=0;this.AV7cUsuarioNome="";this.AV8cUsuarioEmail="";this.AV9cUsuarioSenha="";this.AV10cUsuarioChave="";this.AV11cUsuarioConfirmado=!1;this.AV12cUsuarioDataAtualizacao=gx.date.nullDate();this.AV13pUsuarioId=0;this.A92UsuarioDataAtualizacao=gx.date.nullDate();this.A24UsuarioChave="";this.A28UsuarioEmail="";this.AV5LinkSelection="";this.A12UsuarioId=0;this.A13UsuarioNome="";this.A23UsuarioSenha="";this.A25UsuarioConfirmado=!1;this.Events={e213t2_client:["ENTER",!0],e223t1_client:["CANCEL",!0],e183t1_client:["'TOGGLE'",!1],e113t1_client:["LBLUSUARIOIDFILTER.CLICK",!1],e123t1_client:["LBLUSUARIONOMEFILTER.CLICK",!1],e133t1_client:["LBLUSUARIOEMAILFILTER.CLICK",!1],e143t1_client:["LBLUSUARIOSENHAFILTER.CLICK",!1],e153t1_client:["LBLUSUARIOCHAVEFILTER.CLICK",!1],e163t1_client:["LBLUSUARIOCONFIRMADOFILTER.CLICK",!1],e173t1_client:["LBLUSUARIODATAATUALIZACAOFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cUsuarioId",fld:"vCUSUARIOID"},{av:"AV7cUsuarioNome",fld:"vCUSUARIONOME"},{av:"AV8cUsuarioEmail",fld:"vCUSUARIOEMAIL"},{av:"AV9cUsuarioSenha",fld:"vCUSUARIOSENHA"},{av:"AV10cUsuarioChave",fld:"vCUSUARIOCHAVE"},{av:"AV11cUsuarioConfirmado",fld:"vCUSUARIOCONFIRMADO"},{av:"AV12cUsuarioDataAtualizacao",fld:"vCUSUARIODATAATUALIZACAO"}],[]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLUSUARIOIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("USUARIOIDFILTERCONTAINER","Class")',ctrl:"USUARIOIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("USUARIOIDFILTERCONTAINER","Class")',ctrl:"USUARIOIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOID","Visible")',ctrl:"vCUSUARIOID",prop:"Visible"}]];this.EvtParms["LBLUSUARIONOMEFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("USUARIONOMEFILTERCONTAINER","Class")',ctrl:"USUARIONOMEFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("USUARIONOMEFILTERCONTAINER","Class")',ctrl:"USUARIONOMEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIONOME","Visible")',ctrl:"vCUSUARIONOME",prop:"Visible"}]];this.EvtParms["LBLUSUARIOEMAILFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("USUARIOEMAILFILTERCONTAINER","Class")',ctrl:"USUARIOEMAILFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("USUARIOEMAILFILTERCONTAINER","Class")',ctrl:"USUARIOEMAILFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOEMAIL","Visible")',ctrl:"vCUSUARIOEMAIL",prop:"Visible"}]];this.EvtParms["LBLUSUARIOSENHAFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("USUARIOSENHAFILTERCONTAINER","Class")',ctrl:"USUARIOSENHAFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("USUARIOSENHAFILTERCONTAINER","Class")',ctrl:"USUARIOSENHAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOSENHA","Visible")',ctrl:"vCUSUARIOSENHA",prop:"Visible"}]];this.EvtParms["LBLUSUARIOCHAVEFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("USUARIOCHAVEFILTERCONTAINER","Class")',ctrl:"USUARIOCHAVEFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("USUARIOCHAVEFILTERCONTAINER","Class")',ctrl:"USUARIOCHAVEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOCHAVE","Visible")',ctrl:"vCUSUARIOCHAVE",prop:"Visible"}]];this.EvtParms["LBLUSUARIOCONFIRMADOFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("USUARIOCONFIRMADOFILTERCONTAINER","Class")',ctrl:"USUARIOCONFIRMADOFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("USUARIOCONFIRMADOFILTERCONTAINER","Class")',ctrl:"USUARIOCONFIRMADOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOCONFIRMADO","Visible")',ctrl:"vCUSUARIOCONFIRMADO",prop:"Visible"}]];this.EvtParms["LBLUSUARIODATAATUALIZACAOFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("USUARIODATAATUALIZACAOFILTERCONTAINER","Class")',ctrl:"USUARIODATAATUALIZACAOFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("USUARIODATAATUALIZACAOFILTERCONTAINER","Class")',ctrl:"USUARIODATAATUALIZACAOFILTERCONTAINER",prop:"Class"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A12UsuarioId",fld:"USUARIOID"}],[{av:"AV13pUsuarioId",fld:"vPUSUARIOID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cUsuarioId",fld:"vCUSUARIOID"},{av:"AV7cUsuarioNome",fld:"vCUSUARIONOME"},{av:"AV8cUsuarioEmail",fld:"vCUSUARIOEMAIL"},{av:"AV9cUsuarioSenha",fld:"vCUSUARIOSENHA"},{av:"AV10cUsuarioChave",fld:"vCUSUARIOCHAVE"},{av:"AV11cUsuarioConfirmado",fld:"vCUSUARIOCONFIRMADO"},{av:"AV12cUsuarioDataAtualizacao",fld:"vCUSUARIODATAATUALIZACAO"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cUsuarioId",fld:"vCUSUARIOID"},{av:"AV7cUsuarioNome",fld:"vCUSUARIONOME"},{av:"AV8cUsuarioEmail",fld:"vCUSUARIOEMAIL"},{av:"AV9cUsuarioSenha",fld:"vCUSUARIOSENHA"},{av:"AV10cUsuarioChave",fld:"vCUSUARIOCHAVE"},{av:"AV11cUsuarioConfirmado",fld:"vCUSUARIOCONFIRMADO"},{av:"AV12cUsuarioDataAtualizacao",fld:"vCUSUARIODATAATUALIZACAO"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cUsuarioId",fld:"vCUSUARIOID"},{av:"AV7cUsuarioNome",fld:"vCUSUARIONOME"},{av:"AV8cUsuarioEmail",fld:"vCUSUARIOEMAIL"},{av:"AV9cUsuarioSenha",fld:"vCUSUARIOSENHA"},{av:"AV10cUsuarioChave",fld:"vCUSUARIOCHAVE"},{av:"AV11cUsuarioConfirmado",fld:"vCUSUARIOCONFIRMADO"},{av:"AV12cUsuarioDataAtualizacao",fld:"vCUSUARIODATAATUALIZACAO"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cUsuarioId",fld:"vCUSUARIOID"},{av:"AV7cUsuarioNome",fld:"vCUSUARIONOME"},{av:"AV8cUsuarioEmail",fld:"vCUSUARIOEMAIL"},{av:"AV9cUsuarioSenha",fld:"vCUSUARIOSENHA"},{av:"AV10cUsuarioChave",fld:"vCUSUARIOCHAVE"},{av:"AV11cUsuarioConfirmado",fld:"vCUSUARIOCONFIRMADO"},{av:"AV12cUsuarioDataAtualizacao",fld:"vCUSUARIODATAATUALIZACAO"}],[]];this.setVCMap("AV13pUsuarioId","vPUSUARIOID",0,"int");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingVar(this.GXValidFnc[46]);t.addRefreshingVar(this.GXValidFnc[56]);t.addRefreshingVar(this.GXValidFnc[66]);t.addRefreshingVar(this.GXValidFnc[76]);this.InitStandaloneVars()});gx.setParentObj(new gx00u0)