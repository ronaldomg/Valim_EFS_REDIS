/**@preserve  GeneXus Java 10_3_12-110051 on July 17, 2018 13:34:3.62
*/
gx.evt.autoSkip=!1;gx.define("hsuambiente",!1,function(){var n,t;this.ServerClass="hsuambiente";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){};this.e111o2_client=function(){this.executeServerEvent("'ANTERIOR'",!0,null,!1,!1)};this.e121o2_client=function(){this.executeServerEvent("'PROXIMO'",!0,null,!1,!1)};this.e131o2_client=function(){this.executeServerEvent("'ADICIONAR'",!0,null,!1,!1)};this.e171o2_client=function(){this.executeServerEvent("'BUSCAR'",!0,arguments[0],!1,!1)};this.e181o2_client=function(){this.executeServerEvent("'ALTERAR'",!0,arguments[0],!1,!1)};this.e191o2_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e201o2_client=function(){this.executeServerEvent("'CONSULTAR'",!0,arguments[0],!1,!1)};this.e141o2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e221o2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,29,31,32,33,35,36,37,38,39,40,41,42,43,44];this.GXLastCtrlId=44;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",34,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsuambiente",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(124,35,"AMBIENTEHOST","Host","","AmbienteHost","char",0,"px",100,80,"left",null,[],124,"AmbienteHost",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(4,36,"AMBIENTEID","Ambiente Id","","AmbienteId","int",0,"px",18,18,"right",null,[],4,"AmbienteId",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(41,37,"AMBIENTENOME","Nome","","AmbienteNome","char",0,"px",255,80,"left",null,[],41,"AmbienteNome",!0,0,!1,!1,"Attribute",1,"");t.addComboBox(87,38,"AMBIENTESTATUS","Status","AmbienteStatus","char",null,0,!0,!1,0,"px","");t.addBitmap("&Alt","vALT",39,0,"px",17,"px","e181o2_client","","Alt","Image","ActionColumn");t.addBitmap("&Ver","vVER",40,0,"px",17,"px","e201o2_client","","Ver","Image","ActionColumn");t.addBitmap("&Exc","vEXC",41,0,"px",17,"px","e191o2_client","","Exc","Image","ActionColumn");t.addBitmap("&Man","vMAN",42,0,"px",17,"px",null,"","Man","Image","ActionColumn");t.addBitmap("&Block","vBLOCK",43,0,"px",17,"px",null,"","Bloq","Image","ActionColumn");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TABLE1",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"TABLE2",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"",grid:0};n[13]={lvl:0,type:"char",len:255,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAMBIENTENOME",gxz:"ZV6AmbienteNome",gxold:"OV6AmbienteNome",gxvar:"AV6AmbienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6AmbienteNome=n},v2z:function(n){gx.O.ZV6AmbienteNome=n},v2c:function(){gx.fn.setControlValue("vAMBIENTENOME",gx.O.AV6AmbienteNome,0)},c2v:function(){gx.O.AV6AmbienteNome=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTENOME")},nac:gx.falseFn};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOAMBIENTEID",gxz:"ZV12TipoAmbienteId",gxold:"OV12TipoAmbienteId",gxvar:"AV12TipoAmbienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){gx.O.AV12TipoAmbienteId=gx.num.intval(n)},v2z:function(n){gx.O.ZV12TipoAmbienteId=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vTIPOAMBIENTEID",gx.O.AV12TipoAmbienteId)},c2v:function(){gx.O.AV12TipoAmbienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOAMBIENTEID",".")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAMBIENTESTATUS",gxz:"ZV7AmbienteStatus",gxold:"OV7AmbienteStatus",gxvar:"AV7AmbienteStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV7AmbienteStatus=n},v2z:function(n){gx.O.ZV7AmbienteStatus=n},v2c:function(){gx.fn.setComboBoxValue("vAMBIENTESTATUS",gx.O.AV7AmbienteStatus)},c2v:function(){gx.O.AV7AmbienteStatus=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTESTATUS")},nac:gx.falseFn};n[20]={fld:"",grid:0};n[21]={fld:"IMAGE1",grid:0};n[22]={fld:"",grid:0};n[23]={fld:"",grid:0};n[24]={fld:"TABLE3",grid:0};n[27]={fld:"ADICIONAR",grid:0};n[29]={fld:"ANTERIOR",grid:0};n[31]={fld:"PROXIMO",grid:0};n[32]={fld:"",grid:0};n[33]={fld:"",grid:0};n[35]={lvl:2,type:"char",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AMBIENTEHOST",gxz:"Z124AmbienteHost",gxold:"O124AmbienteHost",gxvar:"A124AmbienteHost",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A124AmbienteHost=n},v2z:function(n){gx.O.Z124AmbienteHost=n},v2c:function(n){gx.fn.setGridControlValue("AMBIENTEHOST",n||gx.fn.currentGridRowImpl(34),gx.O.A124AmbienteHost,0)},c2v:function(){gx.O.A124AmbienteHost=this.val()},val:function(n){return gx.fn.getGridControlValue("AMBIENTEHOST",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[36]={lvl:2,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AMBIENTEID",gxz:"Z4AmbienteId",gxold:"O4AmbienteId",gxvar:"A4AmbienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A4AmbienteId=gx.num.intval(n)},v2z:function(n){gx.O.Z4AmbienteId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("AMBIENTEID",n||gx.fn.currentGridRowImpl(34),gx.O.A4AmbienteId,0)},c2v:function(){gx.O.A4AmbienteId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("AMBIENTEID",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[37]={lvl:2,type:"char",len:255,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AMBIENTENOME",gxz:"Z41AmbienteNome",gxold:"O41AmbienteNome",gxvar:"A41AmbienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A41AmbienteNome=n},v2z:function(n){gx.O.Z41AmbienteNome=n},v2c:function(n){gx.fn.setGridControlValue("AMBIENTENOME",n||gx.fn.currentGridRowImpl(34),gx.O.A41AmbienteNome,0)},c2v:function(){gx.O.A41AmbienteNome=this.val()},val:function(n){return gx.fn.getGridControlValue("AMBIENTENOME",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[38]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AMBIENTESTATUS",gxz:"Z87AmbienteStatus",gxold:"O87AmbienteStatus",gxvar:"A87AmbienteStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){gx.O.A87AmbienteStatus=n},v2z:function(n){gx.O.Z87AmbienteStatus=n},v2c:function(n){gx.fn.setGridComboBoxValue("AMBIENTESTATUS",n||gx.fn.currentGridRowImpl(34),gx.O.A87AmbienteStatus)},c2v:function(){gx.O.A87AmbienteStatus=this.val()},val:function(n){return gx.fn.getGridControlValue("AMBIENTESTATUS",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[39]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vALT",gxz:"ZV5Alt",gxold:"OV5Alt",gxvar:"AV5Alt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5Alt=n},v2z:function(n){gx.O.ZV5Alt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vALT",n||gx.fn.currentGridRowImpl(34),gx.O.AV5Alt,gx.O.AV21Alt_GXI)},c2v:function(){gx.O.AV21Alt_GXI=this.val_GXI();gx.O.AV5Alt=this.val()},val:function(n){return gx.fn.getGridControlValue("vALT",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vALT_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV21Alt_GXI",nac:gx.falseFn};n[40]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVER",gxz:"ZV13ver",gxold:"OV13ver",gxvar:"AV13ver",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV13ver=n},v2z:function(n){gx.O.ZV13ver=n},v2c:function(n){gx.fn.setGridMultimediaValue("vVER",n||gx.fn.currentGridRowImpl(34),gx.O.AV13ver,gx.O.AV23Ver_GXI)},c2v:function(){gx.O.AV23Ver_GXI=this.val_GXI();gx.O.AV13ver=this.val()},val:function(n){return gx.fn.getGridControlValue("vVER",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vVER_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV23Ver_GXI",nac:gx.falseFn};n[41]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXC",gxz:"ZV8Exc",gxold:"OV8Exc",gxvar:"AV8Exc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV8Exc=n},v2z:function(n){gx.O.ZV8Exc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vEXC",n||gx.fn.currentGridRowImpl(34),gx.O.AV8Exc,gx.O.AV22Exc_GXI)},c2v:function(){gx.O.AV22Exc_GXI=this.val_GXI();gx.O.AV8Exc=this.val()},val:function(n){return gx.fn.getGridControlValue("vEXC",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vEXC_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV22Exc_GXI",nac:gx.falseFn};n[42]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vMAN",gxz:"ZV16Man",gxold:"OV16Man",gxvar:"AV16Man",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV16Man=n},v2z:function(n){gx.O.ZV16Man=n},v2c:function(n){gx.fn.setGridMultimediaValue("vMAN",n||gx.fn.currentGridRowImpl(34),gx.O.AV16Man,gx.O.AV24Man_GXI)},c2v:function(){gx.O.AV24Man_GXI=this.val_GXI();gx.O.AV16Man=this.val()},val:function(n){return gx.fn.getGridControlValue("vMAN",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vMAN_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV24Man_GXI",nac:gx.falseFn};n[43]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBLOCK",gxz:"ZV17Block",gxold:"OV17Block",gxvar:"AV17Block",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV17Block=n},v2z:function(n){gx.O.ZV17Block=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBLOCK",n||gx.fn.currentGridRowImpl(34),gx.O.AV17Block,gx.O.AV25Block_GXI)},c2v:function(){gx.O.AV25Block_GXI=this.val_GXI();gx.O.AV17Block=this.val()},val:function(n){return gx.fn.getGridControlValue("vBLOCK",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vBLOCK_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV25Block_GXI",nac:gx.falseFn};n[44]={fld:"",grid:0};this.AV6AmbienteNome="";this.ZV6AmbienteNome="";this.OV6AmbienteNome="";this.AV12TipoAmbienteId=0;this.ZV12TipoAmbienteId=0;this.OV12TipoAmbienteId=0;this.AV7AmbienteStatus="";this.ZV7AmbienteStatus="";this.OV7AmbienteStatus="";this.Z124AmbienteHost="";this.O124AmbienteHost="";this.Z4AmbienteId=0;this.O4AmbienteId=0;this.Z41AmbienteNome="";this.O41AmbienteNome="";this.Z87AmbienteStatus="";this.O87AmbienteStatus="";this.ZV5Alt="";this.OV5Alt="";this.ZV13ver="";this.OV13ver="";this.ZV8Exc="";this.OV8Exc="";this.ZV16Man="";this.OV16Man="";this.ZV17Block="";this.OV17Block="";this.AV6AmbienteNome="";this.AV12TipoAmbienteId=0;this.AV7AmbienteStatus="";this.A3TipoAmbienteId=0;this.A124AmbienteHost="";this.A4AmbienteId=0;this.A41AmbienteNome="";this.A87AmbienteStatus="";this.AV5Alt="";this.AV13ver="";this.AV8Exc="";this.AV16Man="";this.AV17Block="";this.Events={e111o2_client:["'ANTERIOR'",!0],e121o2_client:["'PROXIMO'",!0],e131o2_client:["'ADICIONAR'",!0],e171o2_client:["'BUSCAR'",!0],e181o2_client:["'ALTERAR'",!0],e191o2_client:["'EXCLUIR'",!0],e201o2_client:["'CONSULTAR'",!0],e141o2_client:["ENTER",!0],e221o2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV6AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV12TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"AV7AmbienteStatus",fld:"vAMBIENTESTATUS"},{av:"AV5Alt",fld:"vALT"},{av:"AV8Exc",fld:"vEXC"},{av:"AV13ver",fld:"vVER"},{av:"AV16Man",fld:"vMAN"},{av:"AV17Block",fld:"vBLOCK"},{av:'gx.fn.getCtrlProperty("vALT","Tooltiptext")',ctrl:"vALT",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vEXC","Tooltiptext")',ctrl:"vEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vVER","Tooltiptext")',ctrl:"vVER",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vMAN","Tooltiptext")',ctrl:"vMAN",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBLOCK","Tooltiptext")',ctrl:"vBLOCK",prop:"Tooltiptext"},{av:"A87AmbienteStatus",fld:"AMBIENTESTATUS"}],[]];this.EvtParms["GRID.REFRESH"]=[[],[{av:'gx.fn.getCtrlProperty("ANTERIOR","Enabled")',ctrl:"ANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("PROXIMO","Enabled")',ctrl:"PROXIMO",prop:"Enabled"}]];this.EvtParms["'ANTERIOR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV6AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV12TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"AV7AmbienteStatus",fld:"vAMBIENTESTATUS"},{av:"AV5Alt",fld:"vALT"},{av:"AV8Exc",fld:"vEXC"},{av:"AV13ver",fld:"vVER"},{av:"AV16Man",fld:"vMAN"},{av:"AV17Block",fld:"vBLOCK"},{av:'gx.fn.getCtrlProperty("vALT","Tooltiptext")',ctrl:"vALT",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vEXC","Tooltiptext")',ctrl:"vEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vVER","Tooltiptext")',ctrl:"vVER",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vMAN","Tooltiptext")',ctrl:"vMAN",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBLOCK","Tooltiptext")',ctrl:"vBLOCK",prop:"Tooltiptext"},{av:"A87AmbienteStatus",fld:"AMBIENTESTATUS"},{av:"AV26Pgmname",fld:"vPGMNAME"}],[{av:"AV14Filtros",fld:"vFILTROS"}]];this.EvtParms["'PROXIMO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV6AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV12TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"AV7AmbienteStatus",fld:"vAMBIENTESTATUS"},{av:"AV5Alt",fld:"vALT"},{av:"AV8Exc",fld:"vEXC"},{av:"AV13ver",fld:"vVER"},{av:"AV16Man",fld:"vMAN"},{av:"AV17Block",fld:"vBLOCK"},{av:'gx.fn.getCtrlProperty("vALT","Tooltiptext")',ctrl:"vALT",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vEXC","Tooltiptext")',ctrl:"vEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vVER","Tooltiptext")',ctrl:"vVER",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vMAN","Tooltiptext")',ctrl:"vMAN",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBLOCK","Tooltiptext")',ctrl:"vBLOCK",prop:"Tooltiptext"},{av:"A87AmbienteStatus",fld:"AMBIENTESTATUS"},{av:"AV26Pgmname",fld:"vPGMNAME"}],[{av:"AV14Filtros",fld:"vFILTROS"}]];this.EvtParms["'ADICIONAR'"]=[[{av:"AV26Pgmname",fld:"vPGMNAME"},{av:"AV6AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV12TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"AV7AmbienteStatus",fld:"vAMBIENTESTATUS"}],[{av:"AV14Filtros",fld:"vFILTROS"}]];this.EvtParms["'BUSCAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV6AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV12TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"AV7AmbienteStatus",fld:"vAMBIENTESTATUS"},{av:"AV5Alt",fld:"vALT"},{av:"AV8Exc",fld:"vEXC"},{av:"AV13ver",fld:"vVER"},{av:"AV16Man",fld:"vMAN"},{av:"AV17Block",fld:"vBLOCK"},{av:'gx.fn.getCtrlProperty("vALT","Tooltiptext")',ctrl:"vALT",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vEXC","Tooltiptext")',ctrl:"vEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vVER","Tooltiptext")',ctrl:"vVER",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vMAN","Tooltiptext")',ctrl:"vMAN",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBLOCK","Tooltiptext")',ctrl:"vBLOCK",prop:"Tooltiptext"},{av:"A87AmbienteStatus",fld:"AMBIENTESTATUS"},{av:"AV26Pgmname",fld:"vPGMNAME"}],[{av:"AV14Filtros",fld:"vFILTROS"}]];this.EvtParms["'ALTERAR'"]=[[{av:"A4AmbienteId",fld:"AMBIENTEID"},{av:"AV26Pgmname",fld:"vPGMNAME"},{av:"AV6AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV12TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"AV7AmbienteStatus",fld:"vAMBIENTESTATUS"}],[{av:"A4AmbienteId",fld:"AMBIENTEID"},{av:"AV14Filtros",fld:"vFILTROS"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"A4AmbienteId",fld:"AMBIENTEID"},{av:"AV26Pgmname",fld:"vPGMNAME"},{av:"AV6AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV12TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"AV7AmbienteStatus",fld:"vAMBIENTESTATUS"}],[{av:"A4AmbienteId",fld:"AMBIENTEID"},{av:"AV14Filtros",fld:"vFILTROS"}]];this.EvtParms["'CONSULTAR'"]=[[{av:"A4AmbienteId",fld:"AMBIENTEID"},{av:"AV26Pgmname",fld:"vPGMNAME"},{av:"AV6AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV12TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"AV7AmbienteStatus",fld:"vAMBIENTESTATUS"}],[{av:"A4AmbienteId",fld:"AMBIENTEID"},{av:"AV14Filtros",fld:"vFILTROS"}]];this.EvtParms.ENTER=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV6AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV12TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"AV7AmbienteStatus",fld:"vAMBIENTESTATUS"},{av:"AV5Alt",fld:"vALT"},{av:"AV8Exc",fld:"vEXC"},{av:"AV13ver",fld:"vVER"},{av:"AV16Man",fld:"vMAN"},{av:"AV17Block",fld:"vBLOCK"},{av:'gx.fn.getCtrlProperty("vALT","Tooltiptext")',ctrl:"vALT",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vEXC","Tooltiptext")',ctrl:"vEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vVER","Tooltiptext")',ctrl:"vVER",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vMAN","Tooltiptext")',ctrl:"vMAN",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBLOCK","Tooltiptext")',ctrl:"vBLOCK",prop:"Tooltiptext"},{av:"A87AmbienteStatus",fld:"AMBIENTESTATUS"},{av:"AV26Pgmname",fld:"vPGMNAME"}],[{av:"AV14Filtros",fld:"vFILTROS"},{av:"AV6AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV12TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"AV7AmbienteStatus",fld:"vAMBIENTESTATUS"},{av:"Gx_page",fld:"vPAGE"},{av:"AV10Pesquisar",fld:"vPESQUISAR"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A87AmbienteStatus",fld:"AMBIENTESTATUS"}],[{av:"AV8Exc",fld:"vEXC"},{av:"AV5Alt",fld:"vALT"},{av:"AV9Itens",fld:"vITENS"},{av:"AV11Status",fld:"vSTATUS"}]];this.EnterCtrl=["IMAGE1"];t.addRefreshingVar(this.GXValidFnc[13]);t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar({rfrVar:"AV5Alt",rfrProp:"Value",gxAttId:"Alt"});t.addRefreshingVar({rfrVar:"AV8Exc",rfrProp:"Value",gxAttId:"Exc"});t.addRefreshingVar({rfrVar:"AV13ver",rfrProp:"Value",gxAttId:"Ver"});t.addRefreshingVar({rfrVar:"AV16Man",rfrProp:"Value",gxAttId:"Man"});t.addRefreshingVar({rfrVar:"AV17Block",rfrProp:"Value",gxAttId:"Block"});t.addRefreshingVar({rfrVar:"AV5Alt",rfrProp:"Tooltiptext",gxAttId:"Alt"});t.addRefreshingVar({rfrVar:"AV8Exc",rfrProp:"Tooltiptext",gxAttId:"Exc"});t.addRefreshingVar({rfrVar:"AV13ver",rfrProp:"Tooltiptext",gxAttId:"Ver"});t.addRefreshingVar({rfrVar:"AV16Man",rfrProp:"Tooltiptext",gxAttId:"Man"});t.addRefreshingVar({rfrVar:"AV17Block",rfrProp:"Tooltiptext",gxAttId:"Block"});t.addRefreshingVar({rfrVar:"A87AmbienteStatus",rfrProp:"Value",gxAttId:"87"});this.InitStandaloneVars()});gx.setParentObj(new hsuambiente)