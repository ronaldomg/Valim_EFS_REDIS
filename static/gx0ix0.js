/**@preserve  GeneXus Java 10_3_12-110051 on May 19, 2017 5:2:36.70
*/
gx.evt.autoSkip=!1;gx.define("gx0ix0",!1,function(){var n,t;this.ServerClass="gx0ix0";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV12pObjetosExternosId=gx.fn.getIntegerValue("vPOBJETOSEXTERNOSID",".")};this.e131y72_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e141y71_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];this.GXLastCtrlId=56;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ix0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");t.addSingleLineEdit(9203,48,"OBJETOSEXTERNOSID","Código","","ObjetosExternosId","int",0,"px",4,4,"right",null,[],9203,"ObjetosExternosId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9196,49,"OBJETOSEXTERNOSDESCRICAO","Descrição","Selecionar","ObjetosExternosDescricao","svchar",0,"px",50,50,"left",null,[],9196,"ObjetosExternosDescricao",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9197,50,"OBJETOSEXTERNOSORDEMCREATE","Ordem de Criação","","ObjetosExternosOrdemCreate","int",0,"px",4,4,"right",null,[],9197,"ObjetosExternosOrdemCreate",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9198,51,"OBJETOSEXTERNOSORDEMDROP","Ordem de Exclusão","","ObjetosExternosOrdemDrop","int",0,"px",4,4,"right",null,[],9198,"ObjetosExternosOrdemDrop",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9199,52,"OBJETOSEXTERNOSTIPO","Tipo","","ObjetosExternosTipo","char",0,"px",1,1,"left",null,[],9199,"ObjetosExternosTipo",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9200,53,"OBJETOSEXTERNOSSOMA","Soma","","ObjetosExternosSoma","int",0,"px",7,7,"right",null,[],9200,"ObjetosExternosSoma",!0,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[8]={fld:"GROUP1",grid:0};n[9]={fld:"TABLE2",grid:0};n[12]={fld:"TEXTBLOCKOBJETOSEXTERNOSID",format:0,grid:0};n[14]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBJETOSEXTERNOSID",gxz:"ZV6cObjetosExternosId",gxold:"OV6cObjetosExternosId",gxvar:"AV6cObjetosExternosId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cObjetosExternosId=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cObjetosExternosId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCOBJETOSEXTERNOSID",gx.O.AV6cObjetosExternosId,0)},c2v:function(){gx.O.AV6cObjetosExternosId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOBJETOSEXTERNOSID",".")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCKOBJETOSEXTERNOSDESCRICAO",format:0,grid:0};n[19]={lvl:0,type:"svchar",len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBJETOSEXTERNOSDESCRICAO",gxz:"ZV7cObjetosExternosDescricao",gxold:"OV7cObjetosExternosDescricao",gxvar:"AV7cObjetosExternosDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cObjetosExternosDescricao=n},v2z:function(n){gx.O.ZV7cObjetosExternosDescricao=n},v2c:function(){gx.fn.setControlValue("vCOBJETOSEXTERNOSDESCRICAO",gx.O.AV7cObjetosExternosDescricao,0)},c2v:function(){gx.O.AV7cObjetosExternosDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCOBJETOSEXTERNOSDESCRICAO")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCKOBJETOSEXTERNOSORDEMCREATE",format:0,grid:0};n[24]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBJETOSEXTERNOSORDEMCREATE",gxz:"ZV8cObjetosExternosOrdemCreate",gxold:"OV8cObjetosExternosOrdemCreate",gxvar:"AV8cObjetosExternosOrdemCreate",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cObjetosExternosOrdemCreate=gx.num.intval(n)},v2z:function(n){gx.O.ZV8cObjetosExternosOrdemCreate=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCOBJETOSEXTERNOSORDEMCREATE",gx.O.AV8cObjetosExternosOrdemCreate,0)},c2v:function(){gx.O.AV8cObjetosExternosOrdemCreate=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOBJETOSEXTERNOSORDEMCREATE",".")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCKOBJETOSEXTERNOSORDEMDROP",format:0,grid:0};n[29]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBJETOSEXTERNOSORDEMDROP",gxz:"ZV9cObjetosExternosOrdemDrop",gxold:"OV9cObjetosExternosOrdemDrop",gxvar:"AV9cObjetosExternosOrdemDrop",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cObjetosExternosOrdemDrop=gx.num.intval(n)},v2z:function(n){gx.O.ZV9cObjetosExternosOrdemDrop=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCOBJETOSEXTERNOSORDEMDROP",gx.O.AV9cObjetosExternosOrdemDrop,0)},c2v:function(){gx.O.AV9cObjetosExternosOrdemDrop=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOBJETOSEXTERNOSORDEMDROP",".")},nac:gx.falseFn};n[32]={fld:"TEXTBLOCKOBJETOSEXTERNOSTIPO",format:0,grid:0};n[34]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBJETOSEXTERNOSTIPO",gxz:"ZV10cObjetosExternosTipo",gxold:"OV10cObjetosExternosTipo",gxvar:"AV10cObjetosExternosTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10cObjetosExternosTipo=n},v2z:function(n){gx.O.ZV10cObjetosExternosTipo=n},v2c:function(){gx.fn.setControlValue("vCOBJETOSEXTERNOSTIPO",gx.O.AV10cObjetosExternosTipo,0)},c2v:function(){gx.O.AV10cObjetosExternosTipo=this.val()},val:function(){return gx.fn.getControlValue("vCOBJETOSEXTERNOSTIPO")},nac:gx.falseFn};n[37]={fld:"TEXTBLOCKOBJETOSEXTERNOSSOMA",format:0,grid:0};n[39]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBJETOSEXTERNOSSOMA",gxz:"ZV11cObjetosExternosSoma",gxold:"OV11cObjetosExternosSoma",gxvar:"AV11cObjetosExternosSoma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11cObjetosExternosSoma=gx.num.intval(n)},v2z:function(n){gx.O.ZV11cObjetosExternosSoma=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCOBJETOSEXTERNOSSOMA",gx.O.AV11cObjetosExternosSoma,0)},c2v:function(){gx.O.AV11cObjetosExternosSoma=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOBJETOSEXTERNOSSOMA",".")},nac:gx.falseFn};n[42]={fld:"GROUP2",grid:0};n[43]={fld:"TABLE3",grid:0};n[47]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(46))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(46))},gxvar_GXI:"AV15Linkselection_GXI",nac:gx.falseFn};n[48]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBJETOSEXTERNOSID",gxz:"Z9203ObjetosExternosId",gxold:"O9203ObjetosExternosId",gxvar:"A9203ObjetosExternosId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A9203ObjetosExternosId=gx.num.intval(n)},v2z:function(n){gx.O.Z9203ObjetosExternosId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("OBJETOSEXTERNOSID",n||gx.fn.currentGridRowImpl(46),gx.O.A9203ObjetosExternosId,0)},c2v:function(){gx.O.A9203ObjetosExternosId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("OBJETOSEXTERNOSID",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[49]={lvl:2,type:"svchar",len:50,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBJETOSEXTERNOSDESCRICAO",gxz:"Z9196ObjetosExternosDescricao",gxold:"O9196ObjetosExternosDescricao",gxvar:"A9196ObjetosExternosDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A9196ObjetosExternosDescricao=n},v2z:function(n){gx.O.Z9196ObjetosExternosDescricao=n},v2c:function(n){gx.fn.setGridControlValue("OBJETOSEXTERNOSDESCRICAO",n||gx.fn.currentGridRowImpl(46),gx.O.A9196ObjetosExternosDescricao,0)},c2v:function(){gx.O.A9196ObjetosExternosDescricao=this.val()},val:function(n){return gx.fn.getGridControlValue("OBJETOSEXTERNOSDESCRICAO",n||gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};n[50]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBJETOSEXTERNOSORDEMCREATE",gxz:"Z9197ObjetosExternosOrdemCreate",gxold:"O9197ObjetosExternosOrdemCreate",gxvar:"A9197ObjetosExternosOrdemCreate",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A9197ObjetosExternosOrdemCreate=gx.num.intval(n)},v2z:function(n){gx.O.Z9197ObjetosExternosOrdemCreate=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("OBJETOSEXTERNOSORDEMCREATE",n||gx.fn.currentGridRowImpl(46),gx.O.A9197ObjetosExternosOrdemCreate,0)},c2v:function(){gx.O.A9197ObjetosExternosOrdemCreate=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("OBJETOSEXTERNOSORDEMCREATE",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[51]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBJETOSEXTERNOSORDEMDROP",gxz:"Z9198ObjetosExternosOrdemDrop",gxold:"O9198ObjetosExternosOrdemDrop",gxvar:"A9198ObjetosExternosOrdemDrop",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A9198ObjetosExternosOrdemDrop=gx.num.intval(n)},v2z:function(n){gx.O.Z9198ObjetosExternosOrdemDrop=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("OBJETOSEXTERNOSORDEMDROP",n||gx.fn.currentGridRowImpl(46),gx.O.A9198ObjetosExternosOrdemDrop,0)},c2v:function(){gx.O.A9198ObjetosExternosOrdemDrop=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("OBJETOSEXTERNOSORDEMDROP",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[52]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBJETOSEXTERNOSTIPO",gxz:"Z9199ObjetosExternosTipo",gxold:"O9199ObjetosExternosTipo",gxvar:"A9199ObjetosExternosTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A9199ObjetosExternosTipo=n},v2z:function(n){gx.O.Z9199ObjetosExternosTipo=n},v2c:function(n){gx.fn.setGridControlValue("OBJETOSEXTERNOSTIPO",n||gx.fn.currentGridRowImpl(46),gx.O.A9199ObjetosExternosTipo,0)},c2v:function(){gx.O.A9199ObjetosExternosTipo=this.val()},val:function(n){return gx.fn.getGridControlValue("OBJETOSEXTERNOSTIPO",n||gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};n[53]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBJETOSEXTERNOSSOMA",gxz:"Z9200ObjetosExternosSoma",gxold:"O9200ObjetosExternosSoma",gxvar:"A9200ObjetosExternosSoma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A9200ObjetosExternosSoma=gx.num.intval(n)},v2z:function(n){gx.O.Z9200ObjetosExternosSoma=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("OBJETOSEXTERNOSSOMA",n||gx.fn.currentGridRowImpl(46),gx.O.A9200ObjetosExternosSoma,0)},c2v:function(){gx.O.A9200ObjetosExternosSoma=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("OBJETOSEXTERNOSSOMA",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[56]={fld:"TABLE4",grid:0};this.AV6cObjetosExternosId=0;this.ZV6cObjetosExternosId=0;this.OV6cObjetosExternosId=0;this.AV7cObjetosExternosDescricao="";this.ZV7cObjetosExternosDescricao="";this.OV7cObjetosExternosDescricao="";this.AV8cObjetosExternosOrdemCreate=0;this.ZV8cObjetosExternosOrdemCreate=0;this.OV8cObjetosExternosOrdemCreate=0;this.AV9cObjetosExternosOrdemDrop=0;this.ZV9cObjetosExternosOrdemDrop=0;this.OV9cObjetosExternosOrdemDrop=0;this.AV10cObjetosExternosTipo="";this.ZV10cObjetosExternosTipo="";this.OV10cObjetosExternosTipo="";this.AV11cObjetosExternosSoma=0;this.ZV11cObjetosExternosSoma=0;this.OV11cObjetosExternosSoma=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z9203ObjetosExternosId=0;this.O9203ObjetosExternosId=0;this.Z9196ObjetosExternosDescricao="";this.O9196ObjetosExternosDescricao="";this.Z9197ObjetosExternosOrdemCreate=0;this.O9197ObjetosExternosOrdemCreate=0;this.Z9198ObjetosExternosOrdemDrop=0;this.O9198ObjetosExternosOrdemDrop=0;this.Z9199ObjetosExternosTipo="";this.O9199ObjetosExternosTipo="";this.Z9200ObjetosExternosSoma=0;this.O9200ObjetosExternosSoma=0;this.AV6cObjetosExternosId=0;this.AV7cObjetosExternosDescricao="";this.AV8cObjetosExternosOrdemCreate=0;this.AV9cObjetosExternosOrdemDrop=0;this.AV10cObjetosExternosTipo="";this.AV11cObjetosExternosSoma=0;this.AV12pObjetosExternosId=0;this.AV5LinkSelection="";this.A9203ObjetosExternosId=0;this.A9196ObjetosExternosDescricao="";this.A9197ObjetosExternosOrdemCreate=0;this.A9198ObjetosExternosOrdemDrop=0;this.A9199ObjetosExternosTipo="";this.A9200ObjetosExternosSoma=0;this.Events={e131y72_client:["ENTER",!0],e141y71_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cObjetosExternosId",fld:"vCOBJETOSEXTERNOSID"},{av:"AV7cObjetosExternosDescricao",fld:"vCOBJETOSEXTERNOSDESCRICAO"},{av:"AV8cObjetosExternosOrdemCreate",fld:"vCOBJETOSEXTERNOSORDEMCREATE"},{av:"AV9cObjetosExternosOrdemDrop",fld:"vCOBJETOSEXTERNOSORDEMDROP"},{av:"AV10cObjetosExternosTipo",fld:"vCOBJETOSEXTERNOSTIPO"},{av:"AV11cObjetosExternosSoma",fld:"vCOBJETOSEXTERNOSSOMA"}],[]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A9203ObjetosExternosId",fld:"OBJETOSEXTERNOSID"}],[{av:"AV12pObjetosExternosId",fld:"vPOBJETOSEXTERNOSID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cObjetosExternosId",fld:"vCOBJETOSEXTERNOSID"},{av:"AV7cObjetosExternosDescricao",fld:"vCOBJETOSEXTERNOSDESCRICAO"},{av:"AV8cObjetosExternosOrdemCreate",fld:"vCOBJETOSEXTERNOSORDEMCREATE"},{av:"AV9cObjetosExternosOrdemDrop",fld:"vCOBJETOSEXTERNOSORDEMDROP"},{av:"AV10cObjetosExternosTipo",fld:"vCOBJETOSEXTERNOSTIPO"},{av:"AV11cObjetosExternosSoma",fld:"vCOBJETOSEXTERNOSSOMA"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cObjetosExternosId",fld:"vCOBJETOSEXTERNOSID"},{av:"AV7cObjetosExternosDescricao",fld:"vCOBJETOSEXTERNOSDESCRICAO"},{av:"AV8cObjetosExternosOrdemCreate",fld:"vCOBJETOSEXTERNOSORDEMCREATE"},{av:"AV9cObjetosExternosOrdemDrop",fld:"vCOBJETOSEXTERNOSORDEMDROP"},{av:"AV10cObjetosExternosTipo",fld:"vCOBJETOSEXTERNOSTIPO"},{av:"AV11cObjetosExternosSoma",fld:"vCOBJETOSEXTERNOSSOMA"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cObjetosExternosId",fld:"vCOBJETOSEXTERNOSID"},{av:"AV7cObjetosExternosDescricao",fld:"vCOBJETOSEXTERNOSDESCRICAO"},{av:"AV8cObjetosExternosOrdemCreate",fld:"vCOBJETOSEXTERNOSORDEMCREATE"},{av:"AV9cObjetosExternosOrdemDrop",fld:"vCOBJETOSEXTERNOSORDEMDROP"},{av:"AV10cObjetosExternosTipo",fld:"vCOBJETOSEXTERNOSTIPO"},{av:"AV11cObjetosExternosSoma",fld:"vCOBJETOSEXTERNOSSOMA"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cObjetosExternosId",fld:"vCOBJETOSEXTERNOSID"},{av:"AV7cObjetosExternosDescricao",fld:"vCOBJETOSEXTERNOSDESCRICAO"},{av:"AV8cObjetosExternosOrdemCreate",fld:"vCOBJETOSEXTERNOSORDEMCREATE"},{av:"AV9cObjetosExternosOrdemDrop",fld:"vCOBJETOSEXTERNOSORDEMDROP"},{av:"AV10cObjetosExternosTipo",fld:"vCOBJETOSEXTERNOSTIPO"},{av:"AV11cObjetosExternosSoma",fld:"vCOBJETOSEXTERNOSSOMA"}],[]];this.setVCMap("AV12pObjetosExternosId","vPOBJETOSEXTERNOSID",0,"int");t.addRefreshingVar(this.GXValidFnc[14]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[24]);t.addRefreshingVar(this.GXValidFnc[29]);t.addRefreshingVar(this.GXValidFnc[34]);t.addRefreshingVar(this.GXValidFnc[39]);this.InitStandaloneVars()});gx.setParentObj(new gx0ix0)