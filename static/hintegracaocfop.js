/**@preserve  GeneXus Java 10_3_12-110051 on March 15, 2021 18:3:12.77
*/
gx.evt.autoSkip=!1;gx.define("hintegracaocfop",!1,function(){var n,t;this.ServerClass="hintegracaocfop";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("7","'ANTERIOR'");this.addKeyListener("8","'PROXIMO'");this.addKeyListener("3","'NOVO'");this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","'PROCURAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV36SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO");this.AV43Pgmname=gx.fn.getControlValue("vPGMNAME")};this.Validv_Filialidfiltro=function(){try{var n=gx.util.balloon.getNew("vFILIALIDFILTRO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Integracaocfopcfopcodigo=function(){try{if(gx.fn.currentGridRowImpl(47)===0)return!0;var n=gx.util.balloon.getNew("INTEGRACAOCFOPCFOPCODIGO",gx.fn.currentGridRowImpl(47));this.AnyError=0;this.StandaloneModal();this.StandaloneNotModal()}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Integracaocfopfilialid=function(){try{if(gx.fn.currentGridRowImpl(47)===0)return!0;var n=gx.util.balloon.getNew("INTEGRACAOCFOPFILIALID",gx.fn.currentGridRowImpl(47));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Integracaocfopfilialempid=function(){try{if(gx.fn.currentGridRowImpl(47)===0)return!0;var n=gx.util.balloon.getNew("INTEGRACAOCFOPFILIALEMPID",gx.fn.currentGridRowImpl(47));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Filialempresaid=function(){try{var n=gx.util.balloon.getNew("vFILIALEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e112ie2_client=function(){this.executeServerEvent("'ANTERIOR'",!0,null,!1,!1)};this.e122ie2_client=function(){this.executeServerEvent("'PROXIMO'",!0,null,!1,!1)};this.e162ie2_client=function(){this.executeServerEvent("VPAGINA.CLICK",!0,null,!1,!0)};this.e132ie2_client=function(){this.executeServerEvent("'NOVO'",!0,null,!1,!1)};this.e142ie2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e152ie2_client=function(){this.executeServerEvent("'PROCURAR'",!1,null,!1,!1)};this.e192ie2_client=function(){this.executeServerEvent("'ALTERAR'",!0,arguments[0],!1,!1)};this.e202ie2_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e212ie2_client=function(){this.executeServerEvent("'CONSULTAR'",!0,arguments[0],!1,!1)};this.e222ie2_client=function(){this.executeServerEvent("'DUPLICAR'",!0,arguments[0],!1,!1)};this.e242ie2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e252ie2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,14,17,19,24,27,30,32,34,36,38,41,43,44,48,49,50,51,52,53,54,55,56,57,64,65,66,67,68,69,70,71];this.GXLastCtrlId=71;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",47,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hintegracaocfop",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(11903,48,"INTEGRACAOCFOPCFOPCODIGO","","","IntegracaoCFOPCFOPCodigo","int",0,"px",4,4,"right",null,[],11903,"IntegracaoCFOPCFOPCodigo",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11914,49,"INTEGRACAOCFOPCFOPDESCRICAO","","","IntegracaoCFOPCFOPDescricao","svchar",0,"px",340,80,"left",null,[],11914,"IntegracaoCFOPCFOPDescricao",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addComboBox(11946,50,"INTEGRACAOCFOPTPVALOR","Tipo de Valor","IntegracaoCFOPTpValor","char",null,0,!0,!1,0,"px","");t.addBitmap("&Bmpdupint","vBMPDUPINT",51,0,"px",17,"px","e222ie2_client","","Dup","Image","GridColumnImage");t.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px","e192ie2_client","","Alt","Image","GridColumnImage");t.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e202ie2_client","","Exc","Image","GridColumnImage");t.addBitmap("&Bmpcon","vBMPCON",54,0,"px",17,"px","e212ie2_client","","Con","Image","GridColumnImage");t.addSingleLineEdit(11902,55,"INTEGRACAOCFOPFILIALID","Integracao CFOPFilial Id","","IntegracaoCFOPFilialId","int",0,"px",7,7,"right",null,[],11902,"IntegracaoCFOPFilialId",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11912,56,"INTEGRACAOCFOPFILIALNOME","Integracao CFOPFilial Nome","","IntegracaoCFOPFilialNome","svchar",0,"px",100,80,"left",null,[],11912,"IntegracaoCFOPFilialNome",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11901,57,"INTEGRACAOCFOPFILIALEMPID","Integracao CFOPFilial Emp Id","","IntegracaoCFOPFilialEmpId","char",0,"px",10,10,"left",null,[],11901,"IntegracaoCFOPFilialEmpId",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[5]={fld:"TABLE2",grid:0};n[8]={fld:"TABLE11",grid:0};n[11]={fld:"TXTTITAPL1",format:0,grid:0};n[13]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialidfiltro,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALIDFILTRO",gxz:"ZV12FilialIdFiltro",gxold:"OV12FilialIdFiltro",gxvar:"AV12FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12FilialIdFiltro=gx.num.intval(n)},v2z:function(n){gx.O.ZV12FilialIdFiltro=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV12FilialIdFiltro,0)},c2v:function(){gx.O.AV12FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",".")},nac:gx.falseFn};n[14]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV13FilialNome",gxold:"OV13FilialNome",gxvar:"AV13FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13FilialNome=n},v2z:function(n){gx.O.ZV13FilialNome=n},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV13FilialNome,0)},c2v:function(){gx.O.AV13FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};n[17]={fld:"CFOP",format:0,grid:0};n[19]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCFOPCODIGO",gxz:"ZV37cfopcodigo",gxold:"OV37cfopcodigo",gxvar:"AV37cfopcodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV37cfopcodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV37cfopcodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCFOPCODIGO",gx.O.AV37cfopcodigo,0)},c2v:function(){gx.O.AV37cfopcodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPCODIGO",".")},nac:gx.falseFn};n[24]={fld:"TABLE4",grid:0};n[27]={fld:"TABLE10",grid:0};n[30]={fld:"IMAGE2",grid:0};n[32]={fld:"BTNANTERIOR",grid:0};n[34]={fld:"BTNPROXIMO",grid:0};n[36]={fld:"BTNHELP",grid:0};n[38]={fld:"TABLE5",grid:0};n[41]={fld:"TEXTBLOCK1",format:0,grid:0};n[43]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV27Pagina",gxold:"OV27Pagina",gxvar:"AV27Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV27Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV27Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV27Pagina)},c2v:function(){gx.O.AV27Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[44]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV28PaginaAux",gxold:"OV28PaginaAux",gxvar:"AV28PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV28PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV28PaginaAux,0)},c2v:function(){gx.O.AV28PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[48]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:this.Valid_Integracaocfopcfopcodigo,isvalid:null,rgrid:[],fld:"INTEGRACAOCFOPCFOPCODIGO",gxz:"Z11903IntegracaoCFOPCFOPCodigo",gxold:"O11903IntegracaoCFOPCFOPCodigo",gxvar:"A11903IntegracaoCFOPCFOPCodigo",ucs:[],op:[49,56],ip:[49,56,48,55,57],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11903IntegracaoCFOPCFOPCodigo=gx.num.intval(n)},v2z:function(n){gx.O.Z11903IntegracaoCFOPCFOPCodigo=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("INTEGRACAOCFOPCFOPCODIGO",n||gx.fn.currentGridRowImpl(47),gx.O.A11903IntegracaoCFOPCFOPCodigo,0)},c2v:function(){gx.O.A11903IntegracaoCFOPCFOPCodigo=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("INTEGRACAOCFOPCFOPCODIGO",n||gx.fn.currentGridRowImpl(47),".")},nac:gx.falseFn};n[49]={lvl:2,type:"svchar",len:340,dec:0,sign:!1,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCFOPCFOPDESCRICAO",gxz:"Z11914IntegracaoCFOPCFOPDescricao",gxold:"O11914IntegracaoCFOPCFOPDescricao",gxvar:"A11914IntegracaoCFOPCFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11914IntegracaoCFOPCFOPDescricao=n},v2z:function(n){gx.O.Z11914IntegracaoCFOPCFOPDescricao=n},v2c:function(n){gx.fn.setGridControlValue("INTEGRACAOCFOPCFOPDESCRICAO",n||gx.fn.currentGridRowImpl(47),gx.O.A11914IntegracaoCFOPCFOPDescricao,0)},c2v:function(){gx.O.A11914IntegracaoCFOPCFOPDescricao=this.val()},val:function(n){return gx.fn.getGridControlValue("INTEGRACAOCFOPCFOPDESCRICAO",n||gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};n[50]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCFOPTPVALOR",gxz:"Z11946IntegracaoCFOPTpValor",gxold:"O11946IntegracaoCFOPTpValor",gxvar:"A11946IntegracaoCFOPTpValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){gx.O.A11946IntegracaoCFOPTpValor=n},v2z:function(n){gx.O.Z11946IntegracaoCFOPTpValor=n},v2c:function(n){gx.fn.setGridComboBoxValue("INTEGRACAOCFOPTPVALOR",n||gx.fn.currentGridRowImpl(47),gx.O.A11946IntegracaoCFOPTpValor)},c2v:function(){gx.O.A11946IntegracaoCFOPTpValor=this.val()},val:function(n){return gx.fn.getGridControlValue("INTEGRACAOCFOPTPVALOR",n||gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};n[51]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDUPINT",gxz:"ZV40bmpDupInt",gxold:"OV40bmpDupInt",gxvar:"AV40bmpDupInt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV40bmpDupInt=n},v2z:function(n){gx.O.ZV40bmpDupInt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPDUPINT",n||gx.fn.currentGridRowImpl(47),gx.O.AV40bmpDupInt,gx.O.AV48Bmpdupint_GXI)},c2v:function(){gx.O.AV48Bmpdupint_GXI=this.val_GXI();gx.O.AV40bmpDupInt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPDUPINT",n||gx.fn.currentGridRowImpl(47))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPDUPINT_GXI",n||gx.fn.currentGridRowImpl(47))},gxvar_GXI:"AV48Bmpdupint_GXI",nac:gx.falseFn};n[52]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5bmpAlt=n},v2z:function(n){gx.O.ZV5bmpAlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPALT",n||gx.fn.currentGridRowImpl(47),gx.O.AV5bmpAlt,gx.O.AV45Bmpalt_GXI)},c2v:function(){gx.O.AV45Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPALT",n||gx.fn.currentGridRowImpl(47))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPALT_GXI",n||gx.fn.currentGridRowImpl(47))},gxvar_GXI:"AV45Bmpalt_GXI",nac:gx.falseFn};n[53]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7bmpExc=n},v2z:function(n){gx.O.ZV7bmpExc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXC",n||gx.fn.currentGridRowImpl(47),gx.O.AV7bmpExc,gx.O.AV46Bmpexc_GXI)},c2v:function(){gx.O.AV46Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXC",n||gx.fn.currentGridRowImpl(47))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXC_GXI",n||gx.fn.currentGridRowImpl(47))},gxvar_GXI:"AV46Bmpexc_GXI",nac:gx.falseFn};n[54]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV6bmpCon=n},v2z:function(n){gx.O.ZV6bmpCon=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCON",n||gx.fn.currentGridRowImpl(47),gx.O.AV6bmpCon,gx.O.AV47Bmpcon_GXI)},c2v:function(){gx.O.AV47Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCON",n||gx.fn.currentGridRowImpl(47))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCON_GXI",n||gx.fn.currentGridRowImpl(47))},gxvar_GXI:"AV47Bmpcon_GXI",nac:gx.falseFn};n[55]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:this.Valid_Integracaocfopfilialid,isvalid:null,rgrid:[],fld:"INTEGRACAOCFOPFILIALID",gxz:"Z11902IntegracaoCFOPFilialId",gxold:"O11902IntegracaoCFOPFilialId",gxvar:"A11902IntegracaoCFOPFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11902IntegracaoCFOPFilialId=gx.num.intval(n)},v2z:function(n){gx.O.Z11902IntegracaoCFOPFilialId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("INTEGRACAOCFOPFILIALID",n||gx.fn.currentGridRowImpl(47),gx.O.A11902IntegracaoCFOPFilialId,0)},c2v:function(){gx.O.A11902IntegracaoCFOPFilialId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("INTEGRACAOCFOPFILIALID",n||gx.fn.currentGridRowImpl(47),".")},nac:gx.falseFn};n[56]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCFOPFILIALNOME",gxz:"Z11912IntegracaoCFOPFilialNome",gxold:"O11912IntegracaoCFOPFilialNome",gxvar:"A11912IntegracaoCFOPFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11912IntegracaoCFOPFilialNome=n},v2z:function(n){gx.O.Z11912IntegracaoCFOPFilialNome=n},v2c:function(n){gx.fn.setGridControlValue("INTEGRACAOCFOPFILIALNOME",n||gx.fn.currentGridRowImpl(47),gx.O.A11912IntegracaoCFOPFilialNome,0)},c2v:function(){gx.O.A11912IntegracaoCFOPFilialNome=this.val()},val:function(n){return gx.fn.getGridControlValue("INTEGRACAOCFOPFILIALNOME",n||gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};n[57]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:this.Valid_Integracaocfopfilialempid,isvalid:null,rgrid:[],fld:"INTEGRACAOCFOPFILIALEMPID",gxz:"Z11901IntegracaoCFOPFilialEmpId",gxold:"O11901IntegracaoCFOPFilialEmpId",gxvar:"A11901IntegracaoCFOPFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11901IntegracaoCFOPFilialEmpId=n},v2z:function(n){gx.O.Z11901IntegracaoCFOPFilialEmpId=n},v2c:function(n){gx.fn.setGridControlValue("INTEGRACAOCFOPFILIALEMPID",n||gx.fn.currentGridRowImpl(47),gx.O.A11901IntegracaoCFOPFilialEmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11901IntegracaoCFOPFilialEmpId=this.val()},val:function(n){return gx.fn.getGridControlValue("INTEGRACAOCFOPFILIALEMPID",n||gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};n[64]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALEMPRESAID",gxz:"ZV11FilialEmpresaId",gxold:"OV11FilialEmpresaId",gxvar:"AV11FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11FilialEmpresaId=n},v2z:function(n){gx.O.ZV11FilialEmpresaId=n},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV11FilialEmpresaId,0)},c2v:function(){gx.O.AV11FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};n[65]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV29QtdeChar",gxold:"OV29QtdeChar",gxvar:"AV29QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29QtdeChar=gx.num.intval(n)},v2z:function(n){gx.O.ZV29QtdeChar=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV29QtdeChar,0)},c2v:function(){gx.O.AV29QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",".")},nac:gx.falseFn};n[66]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV26OrderedBy",gxold:"OV26OrderedBy",gxvar:"AV26OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV26OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV26OrderedBy,0)},c2v:function(){gx.O.AV26OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};n[67]={fld:"JS",format:2,grid:0};n[68]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPCODIGOIN",gxz:"ZV39CFOPCodigoIN",gxold:"OV39CFOPCodigoIN",gxvar:"AV39CFOPCodigoIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV39CFOPCodigoIN=gx.num.intval(n)},v2z:function(n){gx.O.ZV39CFOPCodigoIN=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCFOPCODIGOIN",gx.O.AV39CFOPCodigoIN,0)},c2v:function(){gx.O.AV39CFOPCodigoIN=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPCODIGOIN",".")},nac:gx.falseFn};n[69]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPTIPOENTSAI",gxz:"ZV38CFOPTipoEntSai",gxold:"OV38CFOPTipoEntSai",gxvar:"AV38CFOPTipoEntSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV38CFOPTipoEntSai=n},v2z:function(n){gx.O.ZV38CFOPTipoEntSai=n},v2c:function(){gx.fn.setControlValue("vCFOPTIPOENTSAI",gx.O.AV38CFOPTipoEntSai,0)},c2v:function(){gx.O.AV38CFOPTipoEntSai=this.val()},val:function(){return gx.fn.getControlValue("vCFOPTIPOENTSAI")},nac:gx.falseFn};n[70]={fld:"PROMPT_FILIALIDFILTRO",grid:0};n[71]={fld:"PROMPT_CFOPCODIGO",grid:0};this.AV12FilialIdFiltro=0;this.ZV12FilialIdFiltro=0;this.OV12FilialIdFiltro=0;this.AV13FilialNome="";this.ZV13FilialNome="";this.OV13FilialNome="";this.AV37cfopcodigo=0;this.ZV37cfopcodigo=0;this.OV37cfopcodigo=0;this.AV27Pagina=0;this.ZV27Pagina=0;this.OV27Pagina=0;this.AV28PaginaAux=0;this.ZV28PaginaAux=0;this.OV28PaginaAux=0;this.Z11903IntegracaoCFOPCFOPCodigo=0;this.O11903IntegracaoCFOPCFOPCodigo=0;this.Z11914IntegracaoCFOPCFOPDescricao="";this.O11914IntegracaoCFOPCFOPDescricao="";this.Z11946IntegracaoCFOPTpValor="";this.O11946IntegracaoCFOPTpValor="";this.ZV40bmpDupInt="";this.OV40bmpDupInt="";this.ZV5bmpAlt="";this.OV5bmpAlt="";this.ZV7bmpExc="";this.OV7bmpExc="";this.ZV6bmpCon="";this.OV6bmpCon="";this.Z11902IntegracaoCFOPFilialId=0;this.O11902IntegracaoCFOPFilialId=0;this.Z11912IntegracaoCFOPFilialNome="";this.O11912IntegracaoCFOPFilialNome="";this.Z11901IntegracaoCFOPFilialEmpId="";this.O11901IntegracaoCFOPFilialEmpId="";this.AV11FilialEmpresaId="";this.ZV11FilialEmpresaId="";this.OV11FilialEmpresaId="";this.AV29QtdeChar=0;this.ZV29QtdeChar=0;this.OV29QtdeChar=0;this.AV26OrderedBy=0;this.ZV26OrderedBy=0;this.OV26OrderedBy=0;this.AV39CFOPCodigoIN=0;this.ZV39CFOPCodigoIN=0;this.OV39CFOPCodigoIN=0;this.AV38CFOPTipoEntSai="";this.ZV38CFOPTipoEntSai="";this.OV38CFOPTipoEntSai="";this.AV12FilialIdFiltro=0;this.AV13FilialNome="";this.AV37cfopcodigo=0;this.AV27Pagina=0;this.AV28PaginaAux=0;this.AV11FilialEmpresaId="";this.AV29QtdeChar=0;this.AV26OrderedBy=0;this.AV39CFOPCodigoIN=0;this.AV38CFOPTipoEntSai="";this.A11903IntegracaoCFOPCFOPCodigo=0;this.A11914IntegracaoCFOPCFOPDescricao="";this.A11946IntegracaoCFOPTpValor="";this.AV40bmpDupInt="";this.AV5bmpAlt="";this.AV7bmpExc="";this.AV6bmpCon="";this.A11902IntegracaoCFOPFilialId=0;this.A11912IntegracaoCFOPFilialNome="";this.A11901IntegracaoCFOPFilialEmpId="";this.A1156FilialId=0;this.A1228FilialEmpresaId="";this.A1136FilialNome="";this.AV36SnRecuperaFiltro="";this.AV43Pgmname="";this.Events={e112ie2_client:["'ANTERIOR'",!0],e122ie2_client:["'PROXIMO'",!0],e162ie2_client:["VPAGINA.CLICK",!0],e132ie2_client:["'NOVO'",!0],e142ie2_client:["'FECHAR'",!0],e152ie2_client:["'PROCURAR'",!0],e192ie2_client:["'ALTERAR'",!0],e202ie2_client:["'EXCLUIR'",!0],e212ie2_client:["'CONSULTAR'",!0],e222ie2_client:["'DUPLICAR'",!0],e242ie2_client:["ENTER",!0],e252ie2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV11FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV40bmpDupInt",fld:"vBMPDUPINT"},{av:'gx.fn.getCtrlProperty("vBMPDUPINT","Tooltiptext")',ctrl:"vBMPDUPINT",prop:"Tooltiptext"},{av:"AV36SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV43Pgmname",fld:"vPGMNAME"},{av:"AV27Pagina",fld:"vPAGINA"}],[]];this.EvtParms["GRID.REFRESH"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV11FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV40bmpDupInt",fld:"vBMPDUPINT"},{av:'gx.fn.getCtrlProperty("vBMPDUPINT","Tooltiptext")',ctrl:"vBMPDUPINT",prop:"Tooltiptext"},{av:"AV36SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV43Pgmname",fld:"vPGMNAME"},{av:"AV27Pagina",fld:"vPAGINA"}],[{ctrl:"INTEGRACAOCFOPCFOPCODIGO",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("INTEGRACAOCFOPCFOPCODIGO","Title")',ctrl:"INTEGRACAOCFOPCFOPCODIGO",prop:"Title"},{av:"AV17Imagem",fld:"vIMAGEM"},{ctrl:"INTEGRACAOCFOPCFOPDESCRICAO",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("INTEGRACAOCFOPCFOPDESCRICAO","Title")',ctrl:"INTEGRACAOCFOPCFOPDESCRICAO",prop:"Title"},{av:"AV28PaginaAux",fld:"vPAGINAAUX"},{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV24NumPagina",fld:"vNUMPAGINA"},{av:"AV36SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:"BTNANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:"BTNPROXIMO",prop:"Enabled"},{av:"AV15filtros",fld:"vFILTROS"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV13FilialNome",fld:"vFILIALNOME"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"}]];this.EvtParms["'ANTERIOR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV11FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV40bmpDupInt",fld:"vBMPDUPINT"},{av:'gx.fn.getCtrlProperty("vBMPDUPINT","Tooltiptext")',ctrl:"vBMPDUPINT",prop:"Tooltiptext"},{av:"AV36SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV43Pgmname",fld:"vPGMNAME"},{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV13FilialNome",fld:"vFILIALNOME"}],[{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'PROXIMO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV11FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV40bmpDupInt",fld:"vBMPDUPINT"},{av:'gx.fn.getCtrlProperty("vBMPDUPINT","Tooltiptext")',ctrl:"vBMPDUPINT",prop:"Tooltiptext"},{av:"AV36SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV43Pgmname",fld:"vPGMNAME"},{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV28PaginaAux",fld:"vPAGINAAUX"},{av:"AV13FilialNome",fld:"vFILIALNOME"}],[{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["VPAGINA.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV11FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV40bmpDupInt",fld:"vBMPDUPINT"},{av:'gx.fn.getCtrlProperty("vBMPDUPINT","Tooltiptext")',ctrl:"vBMPDUPINT",prop:"Tooltiptext"},{av:"AV36SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV43Pgmname",fld:"vPGMNAME"},{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV13FilialNome",fld:"vFILIALNOME"}],[{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'NOVO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV11FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV40bmpDupInt",fld:"vBMPDUPINT"},{av:'gx.fn.getCtrlProperty("vBMPDUPINT","Tooltiptext")',ctrl:"vBMPDUPINT",prop:"Tooltiptext"},{av:"AV36SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV43Pgmname",fld:"vPGMNAME"},{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV33SnErro",fld:"vSNERRO"},{av:"AV13FilialNome",fld:"vFILIALNOME"},{av:"A1228FilialEmpresaId",fld:"FILIALEMPRESAID"},{av:"A1156FilialId",fld:"FILIALID"}],[{av:"AV33SnErro",fld:"vSNERRO"},{av:"AV50GXLvl254",fld:"vGXLVL254"},{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV43Pgmname",fld:"vPGMNAME"}],[]];this.EvtParms["'PROCURAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV11FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV40bmpDupInt",fld:"vBMPDUPINT"},{av:'gx.fn.getCtrlProperty("vBMPDUPINT","Tooltiptext")',ctrl:"vBMPDUPINT",prop:"Tooltiptext"},{av:"AV36SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV43Pgmname",fld:"vPGMNAME"},{av:"AV27Pagina",fld:"vPAGINA"},{av:"A1228FilialEmpresaId",fld:"FILIALEMPRESAID"},{av:"A1156FilialId",fld:"FILIALID"},{av:"AV13FilialNome",fld:"vFILIALNOME"}],[{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV33SnErro",fld:"vSNERRO"},{av:"AV50GXLvl254",fld:"vGXLVL254"},{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'ALTERAR'"]=[[{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV13FilialNome",fld:"vFILIALNOME"},{av:"A11903IntegracaoCFOPCFOPCodigo",fld:"INTEGRACAOCFOPCFOPCODIGO"},{av:"A11946IntegracaoCFOPTpValor",fld:"INTEGRACAOCFOPTPVALOR"},{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV43Pgmname",fld:"vPGMNAME"}],[{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV13FilialNome",fld:"vFILIALNOME"},{av:"A11903IntegracaoCFOPCFOPCodigo",fld:"INTEGRACAOCFOPCFOPCODIGO"},{av:"A11946IntegracaoCFOPTpValor",fld:"INTEGRACAOCFOPTPVALOR"},{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV43Pgmname",fld:"vPGMNAME"}],[{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'CONSULTAR'"]=[[{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV13FilialNome",fld:"vFILIALNOME"},{av:"A11903IntegracaoCFOPCFOPCodigo",fld:"INTEGRACAOCFOPCFOPCODIGO"},{av:"A11946IntegracaoCFOPTpValor",fld:"INTEGRACAOCFOPTPVALOR"},{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV43Pgmname",fld:"vPGMNAME"}],[{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'DUPLICAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"AV37cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV11FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV26OrderedBy",fld:"vORDEREDBY"},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV40bmpDupInt",fld:"vBMPDUPINT"},{av:'gx.fn.getCtrlProperty("vBMPDUPINT","Tooltiptext")',ctrl:"vBMPDUPINT",prop:"Tooltiptext"},{av:"AV36SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV43Pgmname",fld:"vPGMNAME"},{av:"AV27Pagina",fld:"vPAGINA"},{av:"A11901IntegracaoCFOPFilialEmpId",fld:"INTEGRACAOCFOPFILIALEMPID"},{av:"A11902IntegracaoCFOPFilialId",fld:"INTEGRACAOCFOPFILIALID"},{av:"A11912IntegracaoCFOPFilialNome",fld:"INTEGRACAOCFOPFILIALNOME"},{av:"A11903IntegracaoCFOPCFOPCodigo",fld:"INTEGRACAOCFOPCFOPCODIGO"},{av:"A11946IntegracaoCFOPTpValor",fld:"INTEGRACAOCFOPTPVALOR"}],[]];this.setPrompt("PROMPT_FILIALIDFILTRO",[13]);this.setPrompt("PROMPT_CFOPCODIGO",[19]);this.setVCMap("AV36SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("AV43Pgmname","vPGMNAME",0,"char");this.setVCMap("AV36SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("AV43Pgmname","vPGMNAME",0,"char");t.addRefreshingVar(this.GXValidFnc[13]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[64]);t.addRefreshingVar(this.GXValidFnc[66]);t.addRefreshingVar({rfrVar:"AV5bmpAlt",rfrProp:"Value",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV5bmpAlt",rfrProp:"Tooltiptext",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV7bmpExc",rfrProp:"Value",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV7bmpExc",rfrProp:"Tooltiptext",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV6bmpCon",rfrProp:"Value",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV6bmpCon",rfrProp:"Tooltiptext",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV40bmpDupInt",rfrProp:"Value",gxAttId:"Bmpdupint"});t.addRefreshingVar({rfrVar:"AV40bmpDupInt",rfrProp:"Tooltiptext",gxAttId:"Bmpdupint"});t.addRefreshingVar({rfrVar:"AV36SnRecuperaFiltro"});t.addRefreshingVar({rfrVar:"AV43Pgmname"});t.addRefreshingVar(this.GXValidFnc[43]);this.InitStandaloneVars()});gx.setParentObj(new hintegracaocfop)