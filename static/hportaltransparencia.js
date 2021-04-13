/**@preserve  GeneXus Java 10_3_12-110051 on February 1, 2021 12:40:19.77
*/
gx.evt.autoSkip=!1;gx.define("hportaltransparencia",!1,function(){var n,t;this.ServerClass="hportaltransparencia";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.e1426j2_client=function(){this.executeServerEvent("'PAGAMENTOS'",!0,arguments[0],!1,!1)};this.e1126j2_client=function(){this.executeServerEvent("'VOLTAR'",!1,null,!1,!1)};this.e1226j2_client=function(){this.executeServerEvent("'PROCURAR'",!1,null,!1,!1)};this.e1626j2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e1726j2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,7,10,13,15,18,20,28,29,30,31,32,33,34,38];this.GXLastCtrlId=38;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",27,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hportaltransparencia",[],!1,1,!0,!0,0,!1,!1,!1,"",0,"px","Novo registro",!1,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(1681,28,"CONVENIOID","Código do Convênio","","ConvenioId","int",0,"px",7,7,"right",null,[],1681,"ConvenioId",!1,0,!1,!1,"Attribute",1,"");t.addBitmap("&Bmppag","vBMPPAG",29,0,"px",17,"px","e1426j2_client","","Pagamentos","Image","GridColumnImage");t.addSingleLineEdit(2082,30,"CONVENIODESCRICAO","Descrição do Convênio","","ConvenioDescricao","svchar",0,"px",40,40,"left",null,[],2082,"ConvenioDescricao",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit(2083,31,"CONVENIONUMERO","Número do Convênio","","ConvenioNumero","svchar",0,"px",50,50,"left",null,[],2083,"ConvenioNumero",!1,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit(2084,32,"CONVENIOEXERCICIO","Exercício","","ConvenioExercicio","svchar",0,"px",15,15,"left",null,[],2084,"ConvenioExercicio",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit(2087,33,"CONVENIOVENCIMENTO","Vencimento","","ConvenioVencimento","date",0,"px",10,10,"right",null,[],2087,"ConvenioVencimento",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addComboBox(2080,34,"CONVENIOTIPOCONVENIO","Tipo","ConvenioTipoConvenio","char",null,0,!0,!1,0,"px","");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[7]={fld:"TABLE8",grid:0};n[10]={fld:"TABLE9",grid:0};n[13]={fld:"TXTTITAPL2",format:0,grid:0};n[15]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIODESCRICAO",gxz:"ZV7ConvenioDescricao",gxold:"OV7ConvenioDescricao",gxvar:"AV7ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7ConvenioDescricao=n},v2z:function(n){gx.O.ZV7ConvenioDescricao=n},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV7ConvenioDescricao,0)},c2v:function(){gx.O.AV7ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};n[18]={fld:"TXTTITAPL3",format:0,grid:0};n[20]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOTIPOCONVENIO",gxz:"ZV8ConvenioTipoConvenio",gxold:"OV8ConvenioTipoConvenio",gxvar:"AV8ConvenioTipoConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV8ConvenioTipoConvenio=n},v2z:function(n){gx.O.ZV8ConvenioTipoConvenio=n},v2c:function(){gx.fn.setComboBoxValue("vCONVENIOTIPOCONVENIO",gx.O.AV8ConvenioTipoConvenio)},c2v:function(){gx.O.AV8ConvenioTipoConvenio=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOTIPOCONVENIO")},nac:gx.falseFn};n[28]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A1681ConvenioId=gx.num.intval(n)},v2z:function(n){gx.O.Z1681ConvenioId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CONVENIOID",n||gx.fn.currentGridRowImpl(27),gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CONVENIOID",n||gx.fn.currentGridRowImpl(27),".")},nac:gx.falseFn};n[29]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPAG",gxz:"ZV5bmpPag",gxold:"OV5bmpPag",gxvar:"AV5bmpPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5bmpPag=n},v2z:function(n){gx.O.ZV5bmpPag=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPPAG",n||gx.fn.currentGridRowImpl(27),gx.O.AV5bmpPag,gx.O.AV15Bmppag_GXI)},c2v:function(){gx.O.AV15Bmppag_GXI=this.val_GXI();gx.O.AV5bmpPag=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPPAG",n||gx.fn.currentGridRowImpl(27))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPPAG_GXI",n||gx.fn.currentGridRowImpl(27))},gxvar_GXI:"AV15Bmppag_GXI",nac:gx.falseFn};n[30]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIODESCRICAO",gxz:"Z2082ConvenioDescricao",gxold:"O2082ConvenioDescricao",gxvar:"A2082ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A2082ConvenioDescricao=n},v2z:function(n){gx.O.Z2082ConvenioDescricao=n},v2c:function(n){gx.fn.setGridControlValue("CONVENIODESCRICAO",n||gx.fn.currentGridRowImpl(27),gx.O.A2082ConvenioDescricao,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A2082ConvenioDescricao=this.val()},val:function(n){return gx.fn.getGridControlValue("CONVENIODESCRICAO",n||gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};n[31]={lvl:2,type:"svchar",len:50,dec:0,sign:!1,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIONUMERO",gxz:"Z2083ConvenioNumero",gxold:"O2083ConvenioNumero",gxvar:"A2083ConvenioNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A2083ConvenioNumero=n},v2z:function(n){gx.O.Z2083ConvenioNumero=n},v2c:function(n){gx.fn.setGridControlValue("CONVENIONUMERO",n||gx.fn.currentGridRowImpl(27),gx.O.A2083ConvenioNumero,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A2083ConvenioNumero=this.val()},val:function(n){return gx.fn.getGridControlValue("CONVENIONUMERO",n||gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};n[32]={lvl:2,type:"svchar",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOEXERCICIO",gxz:"Z2084ConvenioExercicio",gxold:"O2084ConvenioExercicio",gxvar:"A2084ConvenioExercicio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A2084ConvenioExercicio=n},v2z:function(n){gx.O.Z2084ConvenioExercicio=n},v2c:function(n){gx.fn.setGridControlValue("CONVENIOEXERCICIO",n||gx.fn.currentGridRowImpl(27),gx.O.A2084ConvenioExercicio,0)},c2v:function(){gx.O.A2084ConvenioExercicio=this.val()},val:function(n){return gx.fn.getGridControlValue("CONVENIOEXERCICIO",n||gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};n[33]={lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOVENCIMENTO",gxz:"Z2087ConvenioVencimento",gxold:"O2087ConvenioVencimento",gxvar:"A2087ConvenioVencimento",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A2087ConvenioVencimento=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z2087ConvenioVencimento=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("CONVENIOVENCIMENTO",n||gx.fn.currentGridRowImpl(27),gx.O.A2087ConvenioVencimento,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A2087ConvenioVencimento=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("CONVENIOVENCIMENTO",n||gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};n[34]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOTIPOCONVENIO",gxz:"Z2080ConvenioTipoConvenio",gxold:"O2080ConvenioTipoConvenio",gxvar:"A2080ConvenioTipoConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){gx.O.A2080ConvenioTipoConvenio=n},v2z:function(n){gx.O.Z2080ConvenioTipoConvenio=n},v2c:function(n){gx.fn.setGridComboBoxValue("CONVENIOTIPOCONVENIO",n||gx.fn.currentGridRowImpl(27),gx.O.A2080ConvenioTipoConvenio)},c2v:function(){gx.O.A2080ConvenioTipoConvenio=this.val()},val:function(n){return gx.fn.getGridControlValue("CONVENIOTIPOCONVENIO",n||gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};n[38]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNMONTA",gxz:"ZV11SnMonta",gxold:"OV11SnMonta",gxvar:"AV11SnMonta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11SnMonta=n},v2z:function(n){gx.O.ZV11SnMonta=n},v2c:function(){gx.fn.setControlValue("vSNMONTA",gx.O.AV11SnMonta,0)},c2v:function(){gx.O.AV11SnMonta=this.val()},val:function(){return gx.fn.getControlValue("vSNMONTA")},nac:gx.falseFn};this.AV7ConvenioDescricao="";this.ZV7ConvenioDescricao="";this.OV7ConvenioDescricao="";this.AV8ConvenioTipoConvenio="";this.ZV8ConvenioTipoConvenio="";this.OV8ConvenioTipoConvenio="";this.Z1681ConvenioId=0;this.O1681ConvenioId=0;this.ZV5bmpPag="";this.OV5bmpPag="";this.Z2082ConvenioDescricao="";this.O2082ConvenioDescricao="";this.Z2083ConvenioNumero="";this.O2083ConvenioNumero="";this.Z2084ConvenioExercicio="";this.O2084ConvenioExercicio="";this.Z2087ConvenioVencimento=gx.date.nullDate();this.O2087ConvenioVencimento=gx.date.nullDate();this.Z2080ConvenioTipoConvenio="";this.O2080ConvenioTipoConvenio="";this.AV11SnMonta="";this.ZV11SnMonta="";this.OV11SnMonta="";this.AV7ConvenioDescricao="";this.AV8ConvenioTipoConvenio="";this.AV11SnMonta="";this.A1680ConvenioEmpresaId="";this.A1681ConvenioId=0;this.AV5bmpPag="";this.A2082ConvenioDescricao="";this.A2083ConvenioNumero="";this.A2084ConvenioExercicio="";this.A2087ConvenioVencimento=gx.date.nullDate();this.A2080ConvenioTipoConvenio="";this.Events={e1426j2_client:["'PAGAMENTOS'",!0],e1126j2_client:["'VOLTAR'",!0],e1226j2_client:["'PROCURAR'",!0],e1626j2_client:["ENTER",!0],e1726j2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7ConvenioDescricao",fld:"vCONVENIODESCRICAO"},{av:"AV8ConvenioTipoConvenio",fld:"vCONVENIOTIPOCONVENIO"},{av:"AV11SnMonta",fld:"vSNMONTA"},{av:"AV5bmpPag",fld:"vBMPPAG"}],[]];this.EvtParms["'PROCURAR'"]=[[],[{av:"AV11SnMonta",fld:"vSNMONTA"}]];this.EvtParms["'PAGAMENTOS'"]=[[{av:"A1681ConvenioId",fld:"CONVENIOID"}],[]];this.EvtParms["'VOLTAR'"]=[[],[]];t.addRefreshingVar(this.GXValidFnc[15]);t.addRefreshingVar(this.GXValidFnc[20]);t.addRefreshingVar(this.GXValidFnc[38]);t.addRefreshingVar({rfrVar:"AV5bmpPag",rfrProp:"Value",gxAttId:"Bmppag"});this.InitStandaloneVars()});gx.setParentObj(new hportaltransparencia)