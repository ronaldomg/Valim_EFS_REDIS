/**@preserve  GeneXus Java 10_3_12-110051 on July 17, 2018 13:34:6.80
*/
gx.evt.autoSkip=!1;gx.define("hsupacote",!1,function(){var n,t;this.ServerClass="hsupacote";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Valid_Pacoteid=function(){try{if(gx.fn.currentGridRowImpl(42)===0)return!0;var n=gx.util.balloon.getNew("PACOTEID",gx.fn.currentGridRowImpl(42));this.AnyError=0;this.StandaloneModal();this.StandaloneNotModal()}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e111q2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e121q2_client=function(){this.executeServerEvent("'ORDENAR'",!0,null,!1,!1)};this.e131q2_client=function(){this.executeServerEvent("'ADICIONAR'",!0,null,!1,!1)};this.e181q2_client=function(){this.executeServerEvent("'ALTERAR'",!0,arguments[0],!1,!1)};this.e191q2_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e141q2_client=function(){this.executeServerEvent("'ANTERIOR'",!0,null,!1,!1)};this.e151q2_client=function(){this.executeServerEvent("'PROXIMO'",!0,null,!1,!1)};this.e211q2_client=function(){this.executeServerEvent("'IMAGEM'",!0,arguments[0],!1,!1)};this.e221q2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,30,32,34,36,38,39,40,41,43,44,45,46,47,48,49,50,51,52];this.GXLastCtrlId=52;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",42,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsupacote",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(6,43,"PACOTEID","Pacote ID","","PacoteID","int",0,"px",14,14,"right",null,[],6,"PacoteID",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(47,44,"PACOTENOME","Pacote Nome","","PacoteNome","char",0,"px",255,80,"left",null,[],47,"PacoteNome",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Sistemas",45,"vSISTEMAS","Sistemas","","Sistemas","char",0,"px",20,20,"left",null,[],"Sistemas","Sistemas",!0,0,!1,!1,"Attribute",1,"");t.addCheckBox(89,46,"PACOTEATIVO","Ativo","","PacoteAtivo","boolean","true","false",null,!1,!1,0,"px","");t.addCheckBox(88,47,"PACOTEPERMITETESTE","Teste","","PacotePermiteTeste","boolean","true","false",null,!1,!1,0,"px","");t.addBitmap("&Img","vIMG",48,18,"px",16,"px","e211q2_client","","Img","Image","ActionColumn");t.addBitmap("&Ativo","vATIVO",49,0,"px",17,"px",null,"","Ativo","Image","ActionColumn");t.addBitmap("&Teste","vTESTE",50,0,"px",17,"px",null,"","Teste","Image","ActionColumn");t.addBitmap("&Alt","vALT",51,0,"px",17,"px","e181q2_client","","Alt","Image","ActionColumn");t.addBitmap("&Exc","vEXC",52,0,"px",17,"px","e191q2_client","","Exc","Image","ActionColumn");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TABLE1",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"TABLE3",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"TABLE2",grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"char",len:255,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPACOTENOME",gxz:"ZV9PacoteNome",gxold:"OV9PacoteNome",gxvar:"AV9PacoteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9PacoteNome=n},v2z:function(n){gx.O.ZV9PacoteNome=n},v2c:function(){gx.fn.setControlValue("vPACOTENOME",gx.O.AV9PacoteNome,0)},c2v:function(){gx.O.AV9PacoteNome=this.val()},val:function(){return gx.fn.getControlValue("vPACOTENOME")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPACOTEPERMITETESTE",gxz:"ZV5PacotePermiteTeste",gxold:"OV5PacotePermiteTeste",gxvar:"AV5PacotePermiteTeste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV5PacotePermiteTeste=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV5PacotePermiteTeste=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setComboBoxValue("vPACOTEPERMITETESTE",gx.O.AV5PacotePermiteTeste)},c2v:function(){gx.O.AV5PacotePermiteTeste=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vPACOTEPERMITETESTE")},nac:gx.falseFn};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPACOTEATIVO",gxz:"ZV8PacoteAtivo",gxold:"OV8PacoteAtivo",gxvar:"AV8PacoteAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV8PacoteAtivo=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV8PacoteAtivo=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setComboBoxValue("vPACOTEATIVO",gx.O.AV8PacoteAtivo)},c2v:function(){gx.O.AV8PacoteAtivo=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vPACOTEATIVO")},nac:gx.falseFn};n[23]={fld:"",grid:0};n[24]={fld:"IMAGE1",grid:0};n[25]={fld:"",grid:0};n[26]={fld:"",grid:0};n[27]={fld:"TABLE4",grid:0};n[30]={fld:"ADICIONAR",grid:0};n[32]={fld:"ANTERIOR",grid:0};n[34]={fld:"PROXIMO",grid:0};n[36]={fld:"ESPACO",format:0,grid:0};n[38]={fld:"IMAGE2",grid:0};n[39]={fld:"",grid:0};n[40]={fld:"",grid:0};n[41]={fld:"",grid:0};n[43]={lvl:2,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:this.Valid_Pacoteid,isvalid:null,rgrid:[],fld:"PACOTEID",gxz:"Z6PacoteID",gxold:"O6PacoteID",gxvar:"A6PacoteID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A6PacoteID=gx.num.intval(n)},v2z:function(n){gx.O.Z6PacoteID=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PACOTEID",n||gx.fn.currentGridRowImpl(42),gx.O.A6PacoteID,0)},c2v:function(){gx.O.A6PacoteID=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PACOTEID",n||gx.fn.currentGridRowImpl(42),".")},nac:gx.falseFn};n[44]={lvl:2,type:"char",len:255,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PACOTENOME",gxz:"Z47PacoteNome",gxold:"O47PacoteNome",gxvar:"A47PacoteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A47PacoteNome=n},v2z:function(n){gx.O.Z47PacoteNome=n},v2c:function(n){gx.fn.setGridControlValue("PACOTENOME",n||gx.fn.currentGridRowImpl(42),gx.O.A47PacoteNome,0)},c2v:function(){gx.O.A47PacoteNome=this.val()},val:function(n){return gx.fn.getGridControlValue("PACOTENOME",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[45]={lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMAS",gxz:"ZV11Sistemas",gxold:"OV11Sistemas",gxvar:"AV11Sistemas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV11Sistemas=n},v2z:function(n){gx.O.ZV11Sistemas=n},v2c:function(n){gx.fn.setGridControlValue("vSISTEMAS",n||gx.fn.currentGridRowImpl(42),gx.O.AV11Sistemas,0)},c2v:function(){gx.O.AV11Sistemas=this.val()},val:function(n){return gx.fn.getGridControlValue("vSISTEMAS",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[46]={lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PACOTEATIVO",gxz:"Z89PacoteAtivo",gxold:"O89PacoteAtivo",gxvar:"A89PacoteAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){gx.O.A89PacoteAtivo=gx.lang.booleanValue(n)},v2z:function(n){gx.O.Z89PacoteAtivo=gx.lang.booleanValue(n)},v2c:function(n){gx.fn.setGridCheckBoxValue("PACOTEATIVO",n||gx.fn.currentGridRowImpl(42),gx.O.A89PacoteAtivo,!0)},c2v:function(){gx.O.A89PacoteAtivo=gx.lang.booleanValue(this.val())},val:function(n){return gx.fn.getGridControlValue("PACOTEATIVO",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn,values:["true","false"]};n[47]={lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PACOTEPERMITETESTE",gxz:"Z88PacotePermiteTeste",gxold:"O88PacotePermiteTeste",gxvar:"A88PacotePermiteTeste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){gx.O.A88PacotePermiteTeste=gx.lang.booleanValue(n)},v2z:function(n){gx.O.Z88PacotePermiteTeste=gx.lang.booleanValue(n)},v2c:function(n){gx.fn.setGridCheckBoxValue("PACOTEPERMITETESTE",n||gx.fn.currentGridRowImpl(42),gx.O.A88PacotePermiteTeste,!0)},c2v:function(){gx.O.A88PacotePermiteTeste=gx.lang.booleanValue(this.val())},val:function(n){return gx.fn.getGridControlValue("PACOTEPERMITETESTE",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn,values:["true","false"]};n[48]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vIMG",gxz:"ZV19img",gxold:"OV19img",gxvar:"AV19img",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV19img=n},v2z:function(n){gx.O.ZV19img=n},v2c:function(n){gx.fn.setGridMultimediaValue("vIMG",n||gx.fn.currentGridRowImpl(42),gx.O.AV19img,gx.O.AV26Img_GXI)},c2v:function(){gx.O.AV26Img_GXI=this.val_GXI();gx.O.AV19img=this.val()},val:function(n){return gx.fn.getGridControlValue("vIMG",n||gx.fn.currentGridRowImpl(42))},val_GXI:function(n){return gx.fn.getGridControlValue("vIMG_GXI",n||gx.fn.currentGridRowImpl(42))},gxvar_GXI:"AV26Img_GXI",nac:gx.falseFn};n[49]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATIVO",gxz:"ZV17ativo",gxold:"OV17ativo",gxvar:"AV17ativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV17ativo=n},v2z:function(n){gx.O.ZV17ativo=n},v2c:function(n){gx.fn.setGridMultimediaValue("vATIVO",n||gx.fn.currentGridRowImpl(42),gx.O.AV17ativo,gx.O.AV29Ativo_GXI)},c2v:function(){gx.O.AV29Ativo_GXI=this.val_GXI();gx.O.AV17ativo=this.val()},val:function(n){return gx.fn.getGridControlValue("vATIVO",n||gx.fn.currentGridRowImpl(42))},val_GXI:function(n){return gx.fn.getGridControlValue("vATIVO_GXI",n||gx.fn.currentGridRowImpl(42))},gxvar_GXI:"AV29Ativo_GXI",nac:gx.falseFn};n[50]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTESTE",gxz:"ZV18teste",gxold:"OV18teste",gxvar:"AV18teste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV18teste=n},v2z:function(n){gx.O.ZV18teste=n},v2c:function(n){gx.fn.setGridMultimediaValue("vTESTE",n||gx.fn.currentGridRowImpl(42),gx.O.AV18teste,gx.O.AV28Teste_GXI)},c2v:function(){gx.O.AV28Teste_GXI=this.val_GXI();gx.O.AV18teste=this.val()},val:function(n){return gx.fn.getGridControlValue("vTESTE",n||gx.fn.currentGridRowImpl(42))},val_GXI:function(n){return gx.fn.getGridControlValue("vTESTE_GXI",n||gx.fn.currentGridRowImpl(42))},gxvar_GXI:"AV28Teste_GXI",nac:gx.falseFn};n[51]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vALT",gxz:"ZV6Alt",gxold:"OV6Alt",gxvar:"AV6Alt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV6Alt=n},v2z:function(n){gx.O.ZV6Alt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vALT",n||gx.fn.currentGridRowImpl(42),gx.O.AV6Alt,gx.O.AV25Alt_GXI)},c2v:function(){gx.O.AV25Alt_GXI=this.val_GXI();gx.O.AV6Alt=this.val()},val:function(n){return gx.fn.getGridControlValue("vALT",n||gx.fn.currentGridRowImpl(42))},val_GXI:function(n){return gx.fn.getGridControlValue("vALT_GXI",n||gx.fn.currentGridRowImpl(42))},gxvar_GXI:"AV25Alt_GXI",nac:gx.falseFn};n[52]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXC",gxz:"ZV7Exc",gxold:"OV7Exc",gxvar:"AV7Exc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7Exc=n},v2z:function(n){gx.O.ZV7Exc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vEXC",n||gx.fn.currentGridRowImpl(42),gx.O.AV7Exc,gx.O.AV24Exc_GXI)},c2v:function(){gx.O.AV24Exc_GXI=this.val_GXI();gx.O.AV7Exc=this.val()},val:function(n){return gx.fn.getGridControlValue("vEXC",n||gx.fn.currentGridRowImpl(42))},val_GXI:function(n){return gx.fn.getGridControlValue("vEXC_GXI",n||gx.fn.currentGridRowImpl(42))},gxvar_GXI:"AV24Exc_GXI",nac:gx.falseFn};this.AV9PacoteNome="";this.ZV9PacoteNome="";this.OV9PacoteNome="";this.AV5PacotePermiteTeste=!1;this.ZV5PacotePermiteTeste=!1;this.OV5PacotePermiteTeste=!1;this.AV8PacoteAtivo=!1;this.ZV8PacoteAtivo=!1;this.OV8PacoteAtivo=!1;this.Z6PacoteID=0;this.O6PacoteID=0;this.Z47PacoteNome="";this.O47PacoteNome="";this.ZV11Sistemas="";this.OV11Sistemas="";this.Z89PacoteAtivo=!1;this.O89PacoteAtivo=!1;this.Z88PacotePermiteTeste=!1;this.O88PacotePermiteTeste=!1;this.ZV19img="";this.OV19img="";this.ZV17ativo="";this.OV17ativo="";this.ZV18teste="";this.OV18teste="";this.ZV6Alt="";this.OV6Alt="";this.ZV7Exc="";this.OV7Exc="";this.AV9PacoteNome="";this.AV5PacotePermiteTeste=!1;this.AV8PacoteAtivo=!1;this.A194PacoteOrdem=0;this.A6PacoteID=0;this.A47PacoteNome="";this.AV11Sistemas="";this.A89PacoteAtivo=!1;this.A88PacotePermiteTeste=!1;this.AV19img="";this.AV17ativo="";this.AV18teste="";this.AV6Alt="";this.AV7Exc="";this.A40000GXC1=0;this.Events={e111q2_client:["ENTER",!0],e121q2_client:["'ORDENAR'",!0],e131q2_client:["'ADICIONAR'",!0],e181q2_client:["'ALTERAR'",!0],e191q2_client:["'EXCLUIR'",!0],e141q2_client:["'ANTERIOR'",!0],e151q2_client:["'PROXIMO'",!0],e211q2_client:["'IMAGEM'",!0],e221q2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV9PacoteNome",fld:"vPACOTENOME"},{av:"AV5PacotePermiteTeste",fld:"vPACOTEPERMITETESTE"},{av:"AV8PacoteAtivo",fld:"vPACOTEATIVO"},{av:"A88PacotePermiteTeste",fld:"PACOTEPERMITETESTE"},{av:"A89PacoteAtivo",fld:"PACOTEATIVO"},{av:"A6PacoteID",fld:"PACOTEID"}],[]];this.EvtParms.ENTER=[[{av:"AV31Pgmname",fld:"vPGMNAME"},{av:"AV9PacoteNome",fld:"vPACOTENOME"},{av:"AV5PacotePermiteTeste",fld:"vPACOTEPERMITETESTE"},{av:"AV8PacoteAtivo",fld:"vPACOTEATIVO"},{av:"AV10Pesquisar",fld:"vPESQUISAR"}],[{av:"AV10Pesquisar",fld:"vPESQUISAR"},{av:"AV15Filtros",fld:"vFILTROS"}]];this.EvtParms["'ORDENAR'"]=[[],[]];this.EvtParms["GRID.LOAD"]=[[{av:"A88PacotePermiteTeste",fld:"PACOTEPERMITETESTE"},{av:"A89PacoteAtivo",fld:"PACOTEATIVO"},{av:"A6PacoteID",fld:"PACOTEID"}],[{av:"AV7Exc",fld:"vEXC"},{av:"AV6Alt",fld:"vALT"},{av:"AV19img",fld:"vIMG"},{av:"AV20Ordem",fld:"vORDEM"},{av:"AV18teste",fld:"vTESTE"},{av:"AV17ativo",fld:"vATIVO"},{av:"AV11Sistemas",fld:"vSISTEMAS"}]];this.EvtParms["'ADICIONAR'"]=[[{av:"AV31Pgmname",fld:"vPGMNAME"},{av:"AV9PacoteNome",fld:"vPACOTENOME"},{av:"AV5PacotePermiteTeste",fld:"vPACOTEPERMITETESTE"},{av:"AV8PacoteAtivo",fld:"vPACOTEATIVO"},{av:"AV10Pesquisar",fld:"vPESQUISAR"}],[{av:"AV15Filtros",fld:"vFILTROS"}]];this.EvtParms["'ALTERAR'"]=[[{av:"A6PacoteID",fld:"PACOTEID"},{av:"AV31Pgmname",fld:"vPGMNAME"},{av:"AV9PacoteNome",fld:"vPACOTENOME"},{av:"AV5PacotePermiteTeste",fld:"vPACOTEPERMITETESTE"},{av:"AV8PacoteAtivo",fld:"vPACOTEATIVO"},{av:"AV10Pesquisar",fld:"vPESQUISAR"}],[{av:"AV15Filtros",fld:"vFILTROS"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"A6PacoteID",fld:"PACOTEID"},{av:"AV31Pgmname",fld:"vPGMNAME"},{av:"AV9PacoteNome",fld:"vPACOTENOME"},{av:"AV5PacotePermiteTeste",fld:"vPACOTEPERMITETESTE"},{av:"AV8PacoteAtivo",fld:"vPACOTEATIVO"},{av:"AV10Pesquisar",fld:"vPESQUISAR"}],[{av:"AV15Filtros",fld:"vFILTROS"}]];this.EvtParms["GRID.REFRESH"]=[[],[{av:'gx.fn.getCtrlProperty("ANTERIOR","Enabled")',ctrl:"ANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("PROXIMO","Enabled")',ctrl:"PROXIMO",prop:"Enabled"}]];this.EvtParms["'ANTERIOR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV9PacoteNome",fld:"vPACOTENOME"},{av:"AV5PacotePermiteTeste",fld:"vPACOTEPERMITETESTE"},{av:"AV8PacoteAtivo",fld:"vPACOTEATIVO"},{av:"A88PacotePermiteTeste",fld:"PACOTEPERMITETESTE"},{av:"A89PacoteAtivo",fld:"PACOTEATIVO"},{av:"A6PacoteID",fld:"PACOTEID"},{av:"AV31Pgmname",fld:"vPGMNAME"},{av:"AV10Pesquisar",fld:"vPESQUISAR"}],[{av:"AV15Filtros",fld:"vFILTROS"}]];this.EvtParms["'PROXIMO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV9PacoteNome",fld:"vPACOTENOME"},{av:"AV5PacotePermiteTeste",fld:"vPACOTEPERMITETESTE"},{av:"AV8PacoteAtivo",fld:"vPACOTEATIVO"},{av:"A88PacotePermiteTeste",fld:"PACOTEPERMITETESTE"},{av:"A89PacoteAtivo",fld:"PACOTEATIVO"},{av:"A6PacoteID",fld:"PACOTEID"},{av:"AV31Pgmname",fld:"vPGMNAME"},{av:"AV10Pesquisar",fld:"vPESQUISAR"}],[{av:"AV15Filtros",fld:"vFILTROS"}]];this.EvtParms["'IMAGEM'"]=[[{av:"A6PacoteID",fld:"PACOTEID"}],[]];this.EnterCtrl=["IMAGE1"];t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[22]);t.addRefreshingVar({rfrVar:"A88PacotePermiteTeste",rfrProp:"Value",gxAttId:"88"});t.addRefreshingVar({rfrVar:"A89PacoteAtivo",rfrProp:"Value",gxAttId:"89"});t.addRefreshingVar({rfrVar:"A6PacoteID",rfrProp:"Value",gxAttId:"6"});this.InitStandaloneVars()});gx.setParentObj(new hsupacote)