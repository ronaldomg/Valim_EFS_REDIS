/**@preserve  GeneXus Java 10_3_12-110051 on January 20, 2020 10:20:32.11
*/
gx.evt.autoSkip=!1;gx.define("gx0n30",!1,function(){var n,t;this.ServerClass="gx0n30";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV11pCaracteristicaTipo=gx.fn.getControlValue("vPCARACTERISTICATIPO");this.AV12pCaracteristicaCodigo=gx.fn.getControlValue("vPCARACTERISTICACODIGO")};this.e132ed2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e142ed1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];this.GXLastCtrlId=50;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0n30",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");t.addSingleLineEdit(11319,43,"CARACTERISTICATIPO","Tipo","","CaracteristicaTipo","char",0,"px",1,1,"left",null,[],11319,"CaracteristicaTipo",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11320,44,"CARACTERISTICACODIGO","Codigo","","CaracteristicaCodigo","char",0,"px",3,3,"left",null,[],11320,"CaracteristicaCodigo",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11387,45,"CARACTERISTICADESCRICAO","Descricao","Selecionar","CaracteristicaDescricao","svchar",0,"px",30,30,"left",null,[],11387,"CaracteristicaDescricao",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11429,46,"CARACTERISTICAUSUARIOALT","Usuario Alt","","CaracteristicaUsuarioAlt","char",0,"px",12,12,"left",null,[],11429,"CaracteristicaUsuarioAlt",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11430,47,"CARACTERISTICADATAHORAALT","Hora Alt","","CaracteristicaDataHoraAlt","dtime",0,"px",16,16,"right",null,[],11430,"CaracteristicaDataHoraAlt",!0,5,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[8]={fld:"GROUP1",grid:0};n[9]={fld:"TABLE2",grid:0};n[12]={fld:"TEXTBLOCKCARACTERISTICATIPO",format:0,grid:0};n[14]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCARACTERISTICATIPO",gxz:"ZV6cCaracteristicaTipo",gxold:"OV6cCaracteristicaTipo",gxvar:"AV6cCaracteristicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cCaracteristicaTipo=n},v2z:function(n){gx.O.ZV6cCaracteristicaTipo=n},v2c:function(){gx.fn.setControlValue("vCCARACTERISTICATIPO",gx.O.AV6cCaracteristicaTipo,0)},c2v:function(){gx.O.AV6cCaracteristicaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCCARACTERISTICATIPO")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCKCARACTERISTICACODIGO",format:0,grid:0};n[19]={lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCARACTERISTICACODIGO",gxz:"ZV7cCaracteristicaCodigo",gxold:"OV7cCaracteristicaCodigo",gxvar:"AV7cCaracteristicaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cCaracteristicaCodigo=n},v2z:function(n){gx.O.ZV7cCaracteristicaCodigo=n},v2c:function(){gx.fn.setControlValue("vCCARACTERISTICACODIGO",gx.O.AV7cCaracteristicaCodigo,0)},c2v:function(){gx.O.AV7cCaracteristicaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCCARACTERISTICACODIGO")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCKCARACTERISTICADESCRICAO",format:0,grid:0};n[24]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCARACTERISTICADESCRICAO",gxz:"ZV8cCaracteristicaDescricao",gxold:"OV8cCaracteristicaDescricao",gxvar:"AV8cCaracteristicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cCaracteristicaDescricao=n},v2z:function(n){gx.O.ZV8cCaracteristicaDescricao=n},v2c:function(){gx.fn.setControlValue("vCCARACTERISTICADESCRICAO",gx.O.AV8cCaracteristicaDescricao,0)},c2v:function(){gx.O.AV8cCaracteristicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCARACTERISTICADESCRICAO")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCKCARACTERISTICAUSUARIOALT",format:0,grid:0};n[29]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCARACTERISTICAUSUARIOALT",gxz:"ZV9cCaracteristicaUsuarioAlt",gxold:"OV9cCaracteristicaUsuarioAlt",gxvar:"AV9cCaracteristicaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cCaracteristicaUsuarioAlt=n},v2z:function(n){gx.O.ZV9cCaracteristicaUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("vCCARACTERISTICAUSUARIOALT",gx.O.AV9cCaracteristicaUsuarioAlt,0)},c2v:function(){gx.O.AV9cCaracteristicaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCCARACTERISTICAUSUARIOALT")},nac:gx.falseFn};n[32]={fld:"TEXTBLOCKCARACTERISTICADATAHORAALT",format:0,grid:0};n[34]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCARACTERISTICADATAHORAALT",gxz:"ZV10cCaracteristicaDataHoraAlt",gxold:"OV10cCaracteristicaDataHoraAlt",gxvar:"AV10cCaracteristicaDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10cCaracteristicaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV10cCaracteristicaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vCCARACTERISTICADATAHORAALT",gx.O.AV10cCaracteristicaDataHoraAlt,0)},c2v:function(){gx.O.AV10cCaracteristicaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCCARACTERISTICADATAHORAALT")},nac:gx.falseFn};n[37]={fld:"GROUP2",grid:0};n[38]={fld:"TABLE3",grid:0};n[42]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(41))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(41))},gxvar_GXI:"AV15Linkselection_GXI",nac:gx.falseFn};n[43]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICATIPO",gxz:"Z11319CaracteristicaTipo",gxold:"O11319CaracteristicaTipo",gxvar:"A11319CaracteristicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11319CaracteristicaTipo=n},v2z:function(n){gx.O.Z11319CaracteristicaTipo=n},v2c:function(n){gx.fn.setGridControlValue("CARACTERISTICATIPO",n||gx.fn.currentGridRowImpl(41),gx.O.A11319CaracteristicaTipo,0)},c2v:function(){gx.O.A11319CaracteristicaTipo=this.val()},val:function(n){return gx.fn.getGridControlValue("CARACTERISTICATIPO",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[44]={lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICACODIGO",gxz:"Z11320CaracteristicaCodigo",gxold:"O11320CaracteristicaCodigo",gxvar:"A11320CaracteristicaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11320CaracteristicaCodigo=n},v2z:function(n){gx.O.Z11320CaracteristicaCodigo=n},v2c:function(n){gx.fn.setGridControlValue("CARACTERISTICACODIGO",n||gx.fn.currentGridRowImpl(41),gx.O.A11320CaracteristicaCodigo,0)},c2v:function(){gx.O.A11320CaracteristicaCodigo=this.val()},val:function(n){return gx.fn.getGridControlValue("CARACTERISTICACODIGO",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[45]={lvl:2,type:"svchar",len:30,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICADESCRICAO",gxz:"Z11387CaracteristicaDescricao",gxold:"O11387CaracteristicaDescricao",gxvar:"A11387CaracteristicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11387CaracteristicaDescricao=n},v2z:function(n){gx.O.Z11387CaracteristicaDescricao=n},v2c:function(n){gx.fn.setGridControlValue("CARACTERISTICADESCRICAO",n||gx.fn.currentGridRowImpl(41),gx.O.A11387CaracteristicaDescricao,0)},c2v:function(){gx.O.A11387CaracteristicaDescricao=this.val()},val:function(n){return gx.fn.getGridControlValue("CARACTERISTICADESCRICAO",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[46]={lvl:2,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICAUSUARIOALT",gxz:"Z11429CaracteristicaUsuarioAlt",gxold:"O11429CaracteristicaUsuarioAlt",gxvar:"A11429CaracteristicaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11429CaracteristicaUsuarioAlt=n},v2z:function(n){gx.O.Z11429CaracteristicaUsuarioAlt=n},v2c:function(n){gx.fn.setGridControlValue("CARACTERISTICAUSUARIOALT",n||gx.fn.currentGridRowImpl(41),gx.O.A11429CaracteristicaUsuarioAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11429CaracteristicaUsuarioAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("CARACTERISTICAUSUARIOALT",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[47]={lvl:2,type:"dtime",len:10,dec:5,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICADATAHORAALT",gxz:"Z11430CaracteristicaDataHoraAlt",gxold:"O11430CaracteristicaDataHoraAlt",gxvar:"A11430CaracteristicaDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11430CaracteristicaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z11430CaracteristicaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("CARACTERISTICADATAHORAALT",n||gx.fn.currentGridRowImpl(41),gx.O.A11430CaracteristicaDataHoraAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11430CaracteristicaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("CARACTERISTICADATAHORAALT",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[50]={fld:"TABLE4",grid:0};this.AV6cCaracteristicaTipo="";this.ZV6cCaracteristicaTipo="";this.OV6cCaracteristicaTipo="";this.AV7cCaracteristicaCodigo="";this.ZV7cCaracteristicaCodigo="";this.OV7cCaracteristicaCodigo="";this.AV8cCaracteristicaDescricao="";this.ZV8cCaracteristicaDescricao="";this.OV8cCaracteristicaDescricao="";this.AV9cCaracteristicaUsuarioAlt="";this.ZV9cCaracteristicaUsuarioAlt="";this.OV9cCaracteristicaUsuarioAlt="";this.AV10cCaracteristicaDataHoraAlt=gx.date.nullDate();this.ZV10cCaracteristicaDataHoraAlt=gx.date.nullDate();this.OV10cCaracteristicaDataHoraAlt=gx.date.nullDate();this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z11319CaracteristicaTipo="";this.O11319CaracteristicaTipo="";this.Z11320CaracteristicaCodigo="";this.O11320CaracteristicaCodigo="";this.Z11387CaracteristicaDescricao="";this.O11387CaracteristicaDescricao="";this.Z11429CaracteristicaUsuarioAlt="";this.O11429CaracteristicaUsuarioAlt="";this.Z11430CaracteristicaDataHoraAlt=gx.date.nullDate();this.O11430CaracteristicaDataHoraAlt=gx.date.nullDate();this.AV6cCaracteristicaTipo="";this.AV7cCaracteristicaCodigo="";this.AV8cCaracteristicaDescricao="";this.AV9cCaracteristicaUsuarioAlt="";this.AV10cCaracteristicaDataHoraAlt=gx.date.nullDate();this.AV11pCaracteristicaTipo="";this.AV12pCaracteristicaCodigo="";this.AV5LinkSelection="";this.A11319CaracteristicaTipo="";this.A11320CaracteristicaCodigo="";this.A11387CaracteristicaDescricao="";this.A11429CaracteristicaUsuarioAlt="";this.A11430CaracteristicaDataHoraAlt=gx.date.nullDate();this.Events={e132ed2_client:["ENTER",!0],e142ed1_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cCaracteristicaTipo",fld:"vCCARACTERISTICATIPO"},{av:"AV7cCaracteristicaCodigo",fld:"vCCARACTERISTICACODIGO"},{av:"AV8cCaracteristicaDescricao",fld:"vCCARACTERISTICADESCRICAO"},{av:"AV9cCaracteristicaUsuarioAlt",fld:"vCCARACTERISTICAUSUARIOALT"},{av:"AV10cCaracteristicaDataHoraAlt",fld:"vCCARACTERISTICADATAHORAALT"}],[]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A11319CaracteristicaTipo",fld:"CARACTERISTICATIPO"},{av:"A11320CaracteristicaCodigo",fld:"CARACTERISTICACODIGO"}],[{av:"AV11pCaracteristicaTipo",fld:"vPCARACTERISTICATIPO"},{av:"AV12pCaracteristicaCodigo",fld:"vPCARACTERISTICACODIGO"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cCaracteristicaTipo",fld:"vCCARACTERISTICATIPO"},{av:"AV7cCaracteristicaCodigo",fld:"vCCARACTERISTICACODIGO"},{av:"AV8cCaracteristicaDescricao",fld:"vCCARACTERISTICADESCRICAO"},{av:"AV9cCaracteristicaUsuarioAlt",fld:"vCCARACTERISTICAUSUARIOALT"},{av:"AV10cCaracteristicaDataHoraAlt",fld:"vCCARACTERISTICADATAHORAALT"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cCaracteristicaTipo",fld:"vCCARACTERISTICATIPO"},{av:"AV7cCaracteristicaCodigo",fld:"vCCARACTERISTICACODIGO"},{av:"AV8cCaracteristicaDescricao",fld:"vCCARACTERISTICADESCRICAO"},{av:"AV9cCaracteristicaUsuarioAlt",fld:"vCCARACTERISTICAUSUARIOALT"},{av:"AV10cCaracteristicaDataHoraAlt",fld:"vCCARACTERISTICADATAHORAALT"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cCaracteristicaTipo",fld:"vCCARACTERISTICATIPO"},{av:"AV7cCaracteristicaCodigo",fld:"vCCARACTERISTICACODIGO"},{av:"AV8cCaracteristicaDescricao",fld:"vCCARACTERISTICADESCRICAO"},{av:"AV9cCaracteristicaUsuarioAlt",fld:"vCCARACTERISTICAUSUARIOALT"},{av:"AV10cCaracteristicaDataHoraAlt",fld:"vCCARACTERISTICADATAHORAALT"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cCaracteristicaTipo",fld:"vCCARACTERISTICATIPO"},{av:"AV7cCaracteristicaCodigo",fld:"vCCARACTERISTICACODIGO"},{av:"AV8cCaracteristicaDescricao",fld:"vCCARACTERISTICADESCRICAO"},{av:"AV9cCaracteristicaUsuarioAlt",fld:"vCCARACTERISTICAUSUARIOALT"},{av:"AV10cCaracteristicaDataHoraAlt",fld:"vCCARACTERISTICADATAHORAALT"}],[]];this.setVCMap("AV11pCaracteristicaTipo","vPCARACTERISTICATIPO",0,"char");this.setVCMap("AV12pCaracteristicaCodigo","vPCARACTERISTICACODIGO",0,"char");t.addRefreshingVar(this.GXValidFnc[14]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[24]);t.addRefreshingVar(this.GXValidFnc[29]);t.addRefreshingVar(this.GXValidFnc[34]);this.InitStandaloneVars()});gx.setParentObj(new gx0n30)