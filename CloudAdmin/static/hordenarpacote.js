/**@preserve  GeneXus Java 10_3_12-110051 on July 17, 2018 13:38:5.81
*/
gx.evt.autoSkip=!1;gx.define("hordenarpacote",!1,function(){var t,n;this.ServerClass="hordenarpacote";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e135b2_client=function(){this.executeServerEvent("'SOBE'",!0,arguments[0],!1,!1)};this.e145b2_client=function(){this.executeServerEvent("'DESCE'",!0,arguments[0],!1,!1)};this.e155b2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e165b1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,35,36,37,38];this.GXLastCtrlId=38;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",6,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hordenarpacote",[],!0,1,!0,!0,0,!1,!1,!1,"",0,"px","Novo registro",!1,!1,!1,null,null,!1,"",!0,[1,1,1,1]);n=this.GridContainer;n.startDiv("Gridtable","0px","0px");n.startDiv("","0px","0px");n.startDiv("","0px","0px");n.startDiv("Table1","0px","0px");n.startDiv("","0px","0px");n.startDiv("","0px","0px");n.addBitmap("Subir","SUBIR",13,18,"px",18,"px","e135b2_client","","","Image","");n.endDiv();n.endDiv();n.startDiv("","0px","0px");n.startDiv("","0px","0px");n.addBitmap("Descer","DESCER",16,18,"px",18,"px","e145b2_client","","","Image","");n.endDiv();n.endDiv();n.endDiv();n.endDiv();n.startDiv("","0px","0px");n.startDiv("","0px","0px");n.addLabel();n.addMultipleLineEdit(193,19,"PACOTEIMG","","PacoteImg","svchar",80,"chr",5,"row","400",400,"left",null,!0,!1,0,"");n.endDiv();n.endDiv();n.startDiv("","0px","0px");n.startDiv("","0px","0px");n.addLabel();n.addBitmap("&Pacoteimage","vPACOTEIMAGE",22,0,"px",40,"px",null,"","","Image","");n.endDiv();n.endDiv();n.startDiv("","0px","0px");n.startDiv("","0px","0px");n.addLabel();n.addMultipleLineEdit(47,25,"PACOTENOME","","PacoteNome","char",80,"chr",4,"row","255",255,"left",null,!0,!1,0,"");n.endDiv();n.endDiv();n.startDiv("","0px","0px");n.startDiv("","0px","0px");n.addLabel();n.addSingleLineEdit(194,28,"PACOTEORDEM","","","PacoteOrdem","int",14,"chr",14,14,"right",null,[],194,"PacoteOrdem",!0,0,!1,!1,"Attribute",1,"");n.endDiv();n.endDiv();n.endDiv();n.endDiv();this.setGrid(n);t[2]={fld:"",grid:0};t[3]={fld:"MAINTABLE",grid:0};t[4]={fld:"",grid:0};t[5]={fld:"",grid:0};t[7]={fld:"GRIDTABLE",grid:6};t[8]={fld:"",grid:6};t[9]={fld:"",grid:6};t[10]={fld:"TABLE1",grid:6};t[11]={fld:"",grid:6};t[12]={fld:"",grid:6};t[14]={fld:"",grid:6};t[15]={fld:"",grid:6};t[17]={fld:"",grid:6};t[18]={fld:"",grid:6};t[19]={lvl:2,type:"svchar",len:400,dec:0,sign:!1,ro:1,isacc:0,multiline:!0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PACOTEIMG",gxz:"Z193PacoteImg",gxold:"O193PacoteImg",gxvar:"A193PacoteImg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A193PacoteImg=n},v2z:function(n){gx.O.Z193PacoteImg=n},v2c:function(n){gx.fn.setGridControlValue("PACOTEIMG",n||gx.fn.currentGridRowImpl(6),gx.O.A193PacoteImg,0)},c2v:function(){gx.O.A193PacoteImg=this.val()},val:function(n){return gx.fn.getGridControlValue("PACOTEIMG",n||gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};t[20]={fld:"",grid:6};t[21]={fld:"",grid:6};t[22]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPACOTEIMAGE",gxz:"ZV6PacoteImage",gxold:"OV6PacoteImage",gxvar:"AV6PacoteImage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV6PacoteImage=n},v2z:function(n){gx.O.ZV6PacoteImage=n},v2c:function(n){gx.fn.setGridMultimediaValue("vPACOTEIMAGE",n||gx.fn.currentGridRowImpl(6),gx.O.AV6PacoteImage,gx.O.AV12Pacoteimage_GXI)},c2v:function(){gx.O.AV12Pacoteimage_GXI=this.val_GXI();gx.O.AV6PacoteImage=this.val()},val:function(n){return gx.fn.getGridControlValue("vPACOTEIMAGE",n||gx.fn.currentGridRowImpl(6))},val_GXI:function(n){return gx.fn.getGridControlValue("vPACOTEIMAGE_GXI",n||gx.fn.currentGridRowImpl(6))},gxvar_GXI:"AV12Pacoteimage_GXI",nac:gx.falseFn};t[23]={fld:"",grid:6};t[24]={fld:"",grid:6};t[25]={lvl:2,type:"char",len:255,dec:0,sign:!1,ro:1,isacc:0,multiline:!0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PACOTENOME",gxz:"Z47PacoteNome",gxold:"O47PacoteNome",gxvar:"A47PacoteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A47PacoteNome=n},v2z:function(n){gx.O.Z47PacoteNome=n},v2c:function(n){gx.fn.setGridControlValue("PACOTENOME",n||gx.fn.currentGridRowImpl(6),gx.O.A47PacoteNome,0)},c2v:function(){gx.O.A47PacoteNome=this.val()},val:function(n){return gx.fn.getGridControlValue("PACOTENOME",n||gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};t[26]={fld:"",grid:6};t[27]={fld:"",grid:6};t[28]={lvl:2,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PACOTEORDEM",gxz:"Z194PacoteOrdem",gxold:"O194PacoteOrdem",gxvar:"A194PacoteOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A194PacoteOrdem=gx.num.intval(n)},v2z:function(n){gx.O.Z194PacoteOrdem=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PACOTEORDEM",n||gx.fn.currentGridRowImpl(6),gx.O.A194PacoteOrdem,0)},c2v:function(){gx.O.A194PacoteOrdem=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PACOTEORDEM",n||gx.fn.currentGridRowImpl(6),".")},nac:gx.falseFn};t[29]={fld:"",grid:0};t[30]={fld:"",grid:0};t[32]={fld:"",grid:0};t[33]={fld:"",grid:0};t[35]={fld:"",grid:0};t[36]={fld:"",grid:0};t[37]={fld:"",grid:0};t[38]={lvl:0,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPACOTEORDEM",gxz:"ZV9PacoteOrdem",gxold:"OV9PacoteOrdem",gxvar:"AV9PacoteOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9PacoteOrdem=gx.num.intval(n)},v2z:function(n){gx.O.ZV9PacoteOrdem=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPACOTEORDEM",gx.O.AV9PacoteOrdem,0)},c2v:function(){gx.O.AV9PacoteOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPACOTEORDEM",".")},nac:gx.falseFn};this.Z193PacoteImg="";this.O193PacoteImg="";this.ZV6PacoteImage="";this.OV6PacoteImage="";this.Z47PacoteNome="";this.O47PacoteNome="";this.Z194PacoteOrdem=0;this.O194PacoteOrdem=0;this.AV9PacoteOrdem=0;this.ZV9PacoteOrdem=0;this.OV9PacoteOrdem=0;this.AV9PacoteOrdem=0;this.A89PacoteAtivo=!1;this.A193PacoteImg="";this.AV6PacoteImage="";this.A47PacoteNome="";this.A194PacoteOrdem=0;this.Events={e135b2_client:["'SOBE'",!0],e145b2_client:["'DESCE'",!0],e155b2_client:["ENTER",!0],e165b1_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"A193PacoteImg",fld:"PACOTEIMG"},{av:"A194PacoteOrdem",fld:"PACOTEORDEM"},{av:"AV9PacoteOrdem",fld:"vPACOTEORDEM"}],[]];this.EvtParms["GRID.LOAD"]=[[{av:"A193PacoteImg",fld:"PACOTEIMG"},{av:"A194PacoteOrdem",fld:"PACOTEORDEM"},{av:"AV9PacoteOrdem",fld:"vPACOTEORDEM"}],[{av:"AV7PacoteImg",fld:"vPACOTEIMG"},{av:"AV6PacoteImage",fld:"vPACOTEIMAGE"},{av:'gx.fn.getCtrlProperty("SUBIR","Enabled")',ctrl:"SUBIR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("SUBIR","Class")',ctrl:"SUBIR",prop:"Class"},{av:'gx.fn.getCtrlProperty("DESCER","Enabled")',ctrl:"DESCER",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("DESCER","Class")',ctrl:"DESCER",prop:"Class"}]];this.EvtParms["'SOBE'"]=[[{av:"A194PacoteOrdem",fld:"PACOTEORDEM"}],[{av:"A194PacoteOrdem",fld:"PACOTEORDEM"}]];this.EvtParms["'DESCE'"]=[[{av:"A194PacoteOrdem",fld:"PACOTEORDEM"}],[{av:"A194PacoteOrdem",fld:"PACOTEORDEM"}]];n.addRefreshingVar({rfrVar:"A193PacoteImg",rfrProp:"Value",gxAttId:"193"});n.addRefreshingVar({rfrVar:"A194PacoteOrdem",rfrProp:"Value",gxAttId:"194"});n.addRefreshingVar(this.GXValidFnc[38]);this.InitStandaloneVars()});gx.setParentObj(new hordenarpacote)