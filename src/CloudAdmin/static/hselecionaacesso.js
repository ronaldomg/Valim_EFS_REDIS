/**@preserve  GeneXus Java 10_3_12-110051 on December 22, 2020 16:26:0.6
*/
gx.evt.autoSkip=!1;gx.define("hselecionaacesso",!1,function(){var n,t;this.ServerClass="hselecionaacesso";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.A90UsuarioGUID=gx.fn.getControlValue("USUARIOGUID");this.AV15SDTEmpresaLoginCollection=gx.fn.getControlValue("vSDTEMPRESALOGINCOLLECTION")};this.e113k2_client=function(){this.executeServerEvent("'LOGINSU'",!1,null,!1,!1)};this.e123k2_client=function(){this.executeServerEvent("'LOGINADMIN'",!1,null,!1,!1)};this.e163k2_client=function(){this.executeServerEvent("'LOGINEMPRESA'",!0,arguments[0],!1,!1)};this.e133k2_client=function(){this.executeServerEvent("'VOLTAR'",!1,null,!1,!1)};this.e173k2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e183k2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,16,17,18,19,20,21,22,23,24,25,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,55,56,57,59,60,61];this.GXLastCtrlId=61;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hselecionaacesso",[],!0,1,!0,!0,0,!1,!1,!1,"CollSDTEmpresaLogin",0,"px","Novo registro",!1,!1,!1,null,null,!1,"AV15SDTEmpresaLoginCollection",!0,[1,1,1,1]);t=this.Grid1Container;t.startDiv("Grid1table","0px","0px");t.startDiv("","0px","0px");t.startDiv("","0px","0px");t.addBitmap("Image1","IMAGE1",30,0,"px",0,"px","e163k2_client","","","ImageSelecionaAcesso","");t.endDiv();t.endDiv();t.startDiv("","0px","0px");t.startDiv("","0px","0px");t.startDiv("","0px","0px");t.addBitmap("&Seleciona","vSELECIONA",34,0,"",0,"","e163k2_client","","","Image","");t.endDiv();t.endDiv();t.startDiv("","0px","0px");t.startDiv("","0px","0px");t.addLabel();t.addSingleLineEdit("GXV2",37,"CTLEMPRESAFANTASIA","","","EmpresaFantasia","svchar",60,"chr",60,60,"left",null,[],"GXV2","GXV2",!0,0,!1,!1,"Attribute",1,"");t.endDiv();t.endDiv();t.startDiv("","0px","0px");t.startDiv("","0px","0px");t.addLabel();t.addSingleLineEdit("GXV3",40,"CTLEMPRESANOME1","","","EmpresaNome","char",40,"chr",40,40,"left",null,[],"GXV3","GXV3",!0,0,!1,!1,"Attribute",1,"");t.endDiv();t.endDiv();t.startDiv("","0px","0px");t.startDiv("","0px","0px");t.addLabel();t.addSingleLineEdit("GXV4",43,"CTLEMPRESACODIGO","","","GXV4","char",10,"chr",10,10,"left",null,[],"GXV4","GXV4",!0,0,!1,!1,"Attribute",1,"");t.endDiv();t.endDiv();t.endDiv();t.endDiv();this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TABLE1",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"TABLE3",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[16]={fld:"",grid:0};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"",grid:0};n[20]={fld:"TEXTBLOCK1",format:0,grid:0};n[21]={fld:"",grid:0};n[22]={fld:"",grid:0};n[23]={fld:"TABLE2",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[27]={fld:"GRID1TABLE",grid:26};n[28]={fld:"",grid:26};n[29]={fld:"",grid:26};n[31]={fld:"",grid:26};n[32]={fld:"",grid:26};n[33]={fld:"",grid:26};n[34]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vSELECIONA",gxz:"ZV19Seleciona",gxold:"OV19Seleciona",gxvar:"AV19Seleciona",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV19Seleciona=n},v2z:function(n){gx.O.ZV19Seleciona=n},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECIONA",n||gx.fn.currentGridRowImpl(26),gx.O.AV19Seleciona,gx.O.AV77Seleciona_GXI)},c2v:function(){gx.O.AV77Seleciona_GXI=this.val_GXI();gx.O.AV19Seleciona=this.val()},val:function(n){return gx.fn.getGridControlValue("vSELECIONA",n||gx.fn.currentGridRowImpl(26))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECIONA_GXI",n||gx.fn.currentGridRowImpl(26))},gxvar_GXI:"AV77Seleciona_GXI",nac:gx.falseFn};n[35]={fld:"",grid:26};n[36]={fld:"",grid:26};n[37]={lvl:2,type:"svchar",len:60,dec:0,sign:!1,ro:0,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESAFANTASIA",gxz:"ZV74GXV2",gxold:"OV74GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV2=n},v2z:function(n){gx.O.ZV74GXV2=n},v2c:function(n){gx.fn.setGridControlValue("CTLEMPRESAFANTASIA",n||gx.fn.currentGridRowImpl(26),gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLEMPRESAFANTASIA",n||gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};n[38]={fld:"",grid:26};n[39]={fld:"",grid:26};n[40]={lvl:2,type:"char",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESANOME1",gxz:"ZV75GXV3",gxold:"OV75GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV3=n},v2z:function(n){gx.O.ZV75GXV3=n},v2c:function(n){gx.fn.setGridControlValue("CTLEMPRESANOME1",n||gx.fn.currentGridRowImpl(26),gx.O.GXV3,0)},c2v:function(){gx.O.GXV3=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLEMPRESANOME1",n||gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};n[41]={fld:"",grid:26};n[42]={fld:"",grid:26};n[43]={lvl:2,type:"char",len:10,dec:0,sign:!1,ro:0,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESACODIGO",gxz:"ZV76GXV4",gxold:"OV76GXV4",gxvar:"GXV4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV4=n},v2z:function(n){gx.O.ZV76GXV4=n},v2c:function(n){gx.fn.setGridControlValue("CTLEMPRESACODIGO",n||gx.fn.currentGridRowImpl(26),gx.O.GXV4,0)},c2v:function(){gx.O.GXV4=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLEMPRESACODIGO",n||gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};n[44]={fld:"",grid:0};n[45]={fld:"",grid:0};n[46]={fld:"",grid:0};n[47]={fld:"",grid:0};n[49]={fld:"",grid:0};n[50]={fld:"",grid:0};n[51]={fld:"",grid:0};n[52]={lvl:0,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOSUPORTE",gxz:"ZV43UsuarioSuporte",gxold:"OV43UsuarioSuporte",gxvar:"AV43UsuarioSuporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV43UsuarioSuporte=n},v2z:function(n){gx.O.ZV43UsuarioSuporte=n},v2c:function(){gx.fn.setControlValue("vUSUARIOSUPORTE",gx.O.AV43UsuarioSuporte,0)},c2v:function(){gx.O.AV43UsuarioSuporte=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOSUPORTE")},nac:gx.falseFn};n[53]={fld:"",grid:0};n[54]={fld:"",grid:0};n[55]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISSU",gxz:"ZV45isSU",gxold:"OV45isSU",gxvar:"AV45isSU",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV45isSU=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV45isSU=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vISSU",gx.O.AV45isSU,!0)},c2v:function(){gx.O.AV45isSU=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISSU")},nac:gx.falseFn,values:["true","false"]};n[56]={fld:"",grid:0};n[57]={fld:"",grid:0};n[59]={fld:"",grid:0};n[60]={fld:"",grid:0};n[61]={fld:"SUPORTE",format:2,grid:0};this.ZV19Seleciona="";this.OV19Seleciona="";this.ZV74GXV2="";this.OV74GXV2="";this.ZV75GXV3="";this.OV75GXV3="";this.ZV76GXV4="";this.OV76GXV4="";this.AV43UsuarioSuporte="";this.ZV43UsuarioSuporte="";this.OV43UsuarioSuporte="";this.AV45isSU=!1;this.ZV45isSU=!1;this.OV45isSU=!1;this.AV43UsuarioSuporte="";this.AV45isSU=!1;this.AV19Seleciona="";this.GXV2="";this.GXV3="";this.GXV4="";this.A36EmpresaSituacao="";this.A1EmpresaId="";this.A165EmpresaCodigo="";this.A35EmpresaValidade=gx.date.nullDate();this.A196EmpresaFantasia="";this.A28UsuarioEmail="";this.A23UsuarioSenha="";this.A92UsuarioDataAtualizacao=gx.date.nullDate();this.A18AcessoEmpresaId="";this.A90UsuarioGUID="00000000-0000-0000-0000-000000000000";this.A17UsuarioCodigo="";this.A12UsuarioId=0;this.A129AmbienteURL="";this.A130EmpresaKey="";this.A87AmbienteStatus="";this.A4AmbienteId=0;this.A16AdminEmpresaId="";this.A100AcessoEmpresaValidade=gx.date.nullDate();this.A166UsuarioSuporte="";this.A13UsuarioNome="";this.AV15SDTEmpresaLoginCollection=[];this.Events={e113k2_client:["'LOGINSU'",!0],e123k2_client:["'LOGINADMIN'",!0],e163k2_client:["'LOGINEMPRESA'",!0],e133k2_client:["'VOLTAR'",!0],e173k2_client:["ENTER",!0],e183k2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV19Seleciona",fld:"vSELECIONA"},{av:"AV45isSU",fld:"vISSU"},{av:"AV15SDTEmpresaLoginCollection",fld:"vSDTEMPRESALOGINCOLLECTION",grid:26}],[]];this.EvtParms["GRID1.LOAD"]=[[{av:"AV45isSU",fld:"vISSU"},{av:"AV15SDTEmpresaLoginCollection",fld:"vSDTEMPRESALOGINCOLLECTION",grid:26}],[{av:'gx.fn.getCtrlProperty("vSELECIONA","Tooltiptext")',ctrl:"vSELECIONA",prop:"Tooltiptext"},{av:"AV19Seleciona",fld:"vSELECIONA"},{av:'gx.fn.getCtrlProperty("vSELECIONA","Enabled")',ctrl:"vSELECIONA",prop:"Enabled"}]];this.EvtParms["'LOGINSU'"]=[[],[]];this.EvtParms["'LOGINADMIN'"]=[[{av:"AV43UsuarioSuporte",fld:"vUSUARIOSUPORTE"},{av:"A90UsuarioGUID",fld:"USUARIOGUID"},{av:"AV28UsuarioGuid",fld:"vUSUARIOGUID"},{av:"A16AdminEmpresaId",fld:"ADMINEMPRESAID"},{av:"AV30AdminEmpresaId",fld:"vADMINEMPRESAID"}],[{av:"AV30AdminEmpresaId",fld:"vADMINEMPRESAID"}]];this.EvtParms["'LOGINEMPRESA'"]=[[{av:"A1EmpresaId",fld:"EMPRESAID"},{av:"AV15SDTEmpresaLoginCollection",fld:"vSDTEMPRESALOGINCOLLECTION",grid:26},{av:"A129AmbienteURL",fld:"AMBIENTEURL"},{av:"A130EmpresaKey",fld:"EMPRESAKEY"},{av:"A87AmbienteStatus",fld:"AMBIENTESTATUS"},{av:"AV45isSU",fld:"vISSU"},{av:"AV28UsuarioGuid",fld:"vUSUARIOGUID"},{av:"AV27CloudLoginSdt",fld:"vCLOUDLOGINSDT"},{av:"AV43UsuarioSuporte",fld:"vUSUARIOSUPORTE"},{av:"A90UsuarioGUID",fld:"USUARIOGUID"},{av:"A18AcessoEmpresaId",fld:"ACESSOEMPRESAID"},{av:"A17UsuarioCodigo",fld:"USUARIOCODIGO"},{av:"A23UsuarioSenha",fld:"USUARIOSENHA"},{av:"A92UsuarioDataAtualizacao",fld:"USUARIODATAATUALIZACAO"},{av:"A28UsuarioEmail",fld:"USUARIOEMAIL"},{av:"Gx_date",fld:"vTODAY"},{av:"AV96Udparg5",fld:"vUDPARG5"},{av:"AV98Udparg6",fld:"vUDPARG6"},{av:"AV34isExpirado",fld:"vISEXPIRADO"},{av:"AV25AmbienteKey",fld:"vAMBIENTEKEY"},{av:"AV26AmbienteUrl",fld:"vAMBIENTEURL"}],[{av:"AV26AmbienteUrl",fld:"vAMBIENTEURL"},{av:"AV25AmbienteKey",fld:"vAMBIENTEKEY"},{av:"AV51AmbienteStatus",fld:"vAMBIENTESTATUS"},{av:"AV27CloudLoginSdt",fld:"vCLOUDLOGINSDT"},{av:"AV34isExpirado",fld:"vISEXPIRADO"},{av:"AV29ChaveSeguranca",fld:"vCHAVESEGURANCA"}]];this.EvtParms["'VOLTAR'"]=[[],[]];this.setVCMap("A90UsuarioGUID","USUARIOGUID",0,"guid");this.setVCMap("AV15SDTEmpresaLoginCollection","vSDTEMPRESALOGINCOLLECTION",0,"CollSDTEmpresaLogin");this.setVCMap("AV15SDTEmpresaLoginCollection","vSDTEMPRESALOGINCOLLECTION",0,"CollSDTEmpresaLogin");t.addRefreshingVar({rfrVar:"AV19Seleciona",rfrProp:"Value",gxAttId:"Seleciona"});t.addRefreshingVar(this.GXValidFnc[55]);t.addRefreshingVar({rfrVar:"AV15SDTEmpresaLoginCollection"});this.addGridBCProperty("Sdtempresalogincollection",["EmpresaFantasia"],this.GXValidFnc[37],"AV15SDTEmpresaLoginCollection");this.addGridBCProperty("Sdtempresalogincollection",["EmpresaNome"],this.GXValidFnc[40],"AV15SDTEmpresaLoginCollection");this.addGridBCProperty("Sdtempresalogin",["EmpresaCodigo"],this.GXValidFnc[43],"AV14SDTEmpresaLogin");this.InitStandaloneVars()});gx.setParentObj(new hselecionaacesso)