/**@preserve  GeneXus Java 10_3_12-110051 on February 1, 2021 12:59:25.97
*/
gx.evt.autoSkip=!1;gx.define("htipolancamento",!1,function(){var n,t;this.ServerClass="htipolancamento";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("7","'ANTERIOR'");this.addKeyListener("8","'PROXIMO'");this.addKeyListener("3","'NOVO'");this.addKeyListener("12","'FECHAR'");this.addKeyListener("10","'IMPRIMIR'");this.addKeyListener("5","'PROCURAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO");this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO")};this.e117u2_client=function(){this.executeServerEvent("'ANTERIOR'",!0,null,!1,!1)};this.e127u2_client=function(){this.executeServerEvent("'PROXIMO'",!0,null,!1,!1)};this.e217u2_client=function(){this.executeServerEvent("'ALTERAR'",!0,arguments[0],!1,!1)};this.e227u2_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e237u2_client=function(){this.executeServerEvent("'CONSULTAR'",!0,arguments[0],!1,!1)};this.e177u2_client=function(){this.executeServerEvent("VPAGINA.CLICK",!0,null,!1,!0)};this.e137u2_client=function(){this.executeServerEvent("'NOVO'",!0,null,!1,!1)};this.e147u2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e157u2_client=function(){this.executeServerEvent("'IMPRIMIR'",!0,null,!1,!1)};this.e167u2_client=function(){this.executeServerEvent("'PROCURAR'",!1,null,!1,!1)};this.e247u2_client=function(){this.executeServerEvent("'ATUALIZAPAGINA'",!0,arguments[0],!1,!1)};this.e257u2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e267u2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,44,47,49,50,54,55,56,57,58,59,60,61,62,63,64,65,72];this.GXLastCtrlId=72;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htipolancamento",[],!1,1,!0,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(962,54,"TIPOLANCAMENTOID","","","TipoLancamentoId","int",0,"px",4,4,"right",null,[],962,"TipoLancamentoId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(963,55,"TIPOLANCAMENTODESCRICAO","","","TipoLancamentoDescricao","svchar",0,"px",25,25,"left",null,[],963,"TipoLancamentoDescricao",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addComboBox(964,56,"TIPOLANCAMENTOPAGREC","Pagar/Receber","TipoLancamentoPagRec","char",null,0,!1,!1,0,"px","");t.addComboBox(965,57,"TIPOLANCAMENTOTIPO","Tipo do Tipo Lançamento","TipoLancamentoTipo","char",null,0,!1,!1,0,"px","");t.addSingleLineEdit("Desctipolancamentopagrec",58,"vDESCTIPOLANCAMENTOPAGREC","Pagar/Receber","","DescTipoLancamentoPagRec","svchar",0,"px",7,7,"left",null,[],"Desctipolancamentopagrec","DescTipoLancamentoPagRec",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Desctipolancamentotipo",59,"vDESCTIPOLANCAMENTOTIPO","Tipo Lançamento","","DescTipoLancamentoTipo","svchar",0,"px",10,10,"left",null,[],"Desctipolancamentotipo","DescTipoLancamentoTipo",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpcbl","vBMPCBL",60,41,"px",17,"px",null,"","CBL","Image","GridColumnImage");t.addBitmap("&Bmpalt","vBMPALT",61,0,"px",17,"px","e217u2_client","","Alterar","Image","GridColumnImage");t.addBitmap("&Bmpexc","vBMPEXC",62,0,"px",17,"px","e227u2_client","","Excluir","Image","GridColumnImage");t.addBitmap("&Bmpcon","vBMPCON",63,0,"px",17,"px","e237u2_client","","Consultar","Image","GridColumnImage");t.addSingleLineEdit(1046,64,"TIPOLANCAMENTOEMPRESAID","Empresa da Tarifa","","TipoLancamentoEmpresaid","char",0,"px",10,10,"left",null,[],1046,"TipoLancamentoEmpresaid",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(1889,65,"TIPOLANCAMENTOINTEGCBLID","Código Integração","","TipoLancamentoIntegCblId","int",0,"px",4,4,"right",null,[],1889,"TipoLancamentoIntegCblId",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE9",grid:0};n[8]={fld:"TABLE10",grid:0};n[11]={fld:"TXTTITAPL1",format:0,grid:0};n[13]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOLANCAMENTODESCRICAO",gxz:"ZV27TipoLancamentoDescricao",gxold:"OV27TipoLancamentoDescricao",gxvar:"AV27TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27TipoLancamentoDescricao=n},v2z:function(n){gx.O.ZV27TipoLancamentoDescricao=n},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTODESCRICAO",gx.O.AV27TipoLancamentoDescricao,0)},c2v:function(){gx.O.AV27TipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};n[16]={fld:"TXTTITAPL2",format:0,grid:0};n[18]={lvl:0,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOLANCAMENTOPAGREC",gxz:"ZV28TipoLancamentoPagRec",gxold:"OV28TipoLancamentoPagRec",gxvar:"AV28TipoLancamentoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV28TipoLancamentoPagRec=n},v2z:function(n){gx.O.ZV28TipoLancamentoPagRec=n},v2c:function(){gx.fn.setComboBoxValue("vTIPOLANCAMENTOPAGREC",gx.O.AV28TipoLancamentoPagRec)},c2v:function(){gx.O.AV28TipoLancamentoPagRec=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOPAGREC")},nac:gx.falseFn};n[21]={fld:"TXTTITAPL3",format:0,grid:0};n[23]={lvl:0,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOLANCAMENTOTIPO",gxz:"ZV29TipoLancamentoTipo",gxold:"OV29TipoLancamentoTipo",gxvar:"AV29TipoLancamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV29TipoLancamentoTipo=n},v2z:function(n){gx.O.ZV29TipoLancamentoTipo=n},v2c:function(){gx.fn.setComboBoxValue("vTIPOLANCAMENTOTIPO",gx.O.AV29TipoLancamentoTipo)},c2v:function(){gx.O.AV29TipoLancamentoTipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOTIPO")},nac:gx.falseFn};n[28]={fld:"TABLE4",grid:0};n[31]={fld:"TABLE8",grid:0};n[34]={fld:"IMAGE2",grid:0};n[36]={fld:"BTNANTERIOR",grid:0};n[38]={fld:"BTNPROXIMO",grid:0};n[40]={fld:"IMAGE1",grid:0};n[42]={fld:"BTNHELP",grid:0};n[44]={fld:"TABLE5",grid:0};n[47]={fld:"TEXTBLOCK1",format:0,grid:0};n[49]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV5Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV5Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[50]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV6PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[54]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOID",gxz:"Z962TipoLancamentoId",gxold:"O962TipoLancamentoId",gxvar:"A962TipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A962TipoLancamentoId=gx.num.intval(n)},v2z:function(n){gx.O.Z962TipoLancamentoId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("TIPOLANCAMENTOID",n||gx.fn.currentGridRowImpl(53),gx.O.A962TipoLancamentoId,0)},c2v:function(){gx.O.A962TipoLancamentoId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("TIPOLANCAMENTOID",n||gx.fn.currentGridRowImpl(53),".")},nac:gx.falseFn};n[55]={lvl:2,type:"svchar",len:25,dec:0,sign:!1,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTODESCRICAO",gxz:"Z963TipoLancamentoDescricao",gxold:"O963TipoLancamentoDescricao",gxvar:"A963TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A963TipoLancamentoDescricao=n},v2z:function(n){gx.O.Z963TipoLancamentoDescricao=n},v2c:function(n){gx.fn.setGridControlValue("TIPOLANCAMENTODESCRICAO",n||gx.fn.currentGridRowImpl(53),gx.O.A963TipoLancamentoDescricao,0)},c2v:function(){gx.O.A963TipoLancamentoDescricao=this.val()},val:function(n){return gx.fn.getGridControlValue("TIPOLANCAMENTODESCRICAO",n||gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};n[56]={lvl:2,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOPAGREC",gxz:"Z964TipoLancamentoPagRec",gxold:"O964TipoLancamentoPagRec",gxvar:"A964TipoLancamentoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){gx.O.A964TipoLancamentoPagRec=n},v2z:function(n){gx.O.Z964TipoLancamentoPagRec=n},v2c:function(n){gx.fn.setGridComboBoxValue("TIPOLANCAMENTOPAGREC",n||gx.fn.currentGridRowImpl(53),gx.O.A964TipoLancamentoPagRec)},c2v:function(){gx.O.A964TipoLancamentoPagRec=this.val()},val:function(n){return gx.fn.getGridControlValue("TIPOLANCAMENTOPAGREC",n||gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};n[57]={lvl:2,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOTIPO",gxz:"Z965TipoLancamentoTipo",gxold:"O965TipoLancamentoTipo",gxvar:"A965TipoLancamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){gx.O.A965TipoLancamentoTipo=n},v2z:function(n){gx.O.Z965TipoLancamentoTipo=n},v2c:function(n){gx.fn.setGridComboBoxValue("TIPOLANCAMENTOTIPO",n||gx.fn.currentGridRowImpl(53),gx.O.A965TipoLancamentoTipo)},c2v:function(){gx.O.A965TipoLancamentoTipo=this.val()},val:function(n){return gx.fn.getGridControlValue("TIPOLANCAMENTOTIPO",n||gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};n[58]={lvl:2,type:"svchar",len:7,dec:0,sign:!1,ro:0,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTIPOLANCAMENTOPAGREC",gxz:"ZV30DescTipoLancamentoPagRec",gxold:"OV30DescTipoLancamentoPagRec",gxvar:"AV30DescTipoLancamentoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV30DescTipoLancamentoPagRec=n},v2z:function(n){gx.O.ZV30DescTipoLancamentoPagRec=n},v2c:function(n){gx.fn.setGridControlValue("vDESCTIPOLANCAMENTOPAGREC",n||gx.fn.currentGridRowImpl(53),gx.O.AV30DescTipoLancamentoPagRec,0)},c2v:function(){gx.O.AV30DescTipoLancamentoPagRec=this.val()},val:function(n){return gx.fn.getGridControlValue("vDESCTIPOLANCAMENTOPAGREC",n||gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};n[59]={lvl:2,type:"svchar",len:10,dec:0,sign:!1,ro:0,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTIPOLANCAMENTOTIPO",gxz:"ZV31DescTipoLancamentoTipo",gxold:"OV31DescTipoLancamentoTipo",gxvar:"AV31DescTipoLancamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV31DescTipoLancamentoTipo=n},v2z:function(n){gx.O.ZV31DescTipoLancamentoTipo=n},v2c:function(n){gx.fn.setGridControlValue("vDESCTIPOLANCAMENTOTIPO",n||gx.fn.currentGridRowImpl(53),gx.O.AV31DescTipoLancamentoTipo,0)},c2v:function(){gx.O.AV31DescTipoLancamentoTipo=this.val()},val:function(n){return gx.fn.getGridControlValue("vDESCTIPOLANCAMENTOTIPO",n||gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};n[60]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCBL",gxz:"ZV32BmpCbl",gxold:"OV32BmpCbl",gxvar:"AV32BmpCbl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV32BmpCbl=n},v2z:function(n){gx.O.ZV32BmpCbl=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCBL",n||gx.fn.currentGridRowImpl(53),gx.O.AV32BmpCbl,gx.O.AV41Bmpcbl_GXI)},c2v:function(){gx.O.AV41Bmpcbl_GXI=this.val_GXI();gx.O.AV32BmpCbl=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCBL",n||gx.fn.currentGridRowImpl(53))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCBL_GXI",n||gx.fn.currentGridRowImpl(53))},gxvar_GXI:"AV41Bmpcbl_GXI",nac:gx.falseFn};n[61]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7bmpAlt=n},v2z:function(n){gx.O.ZV7bmpAlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPALT",n||gx.fn.currentGridRowImpl(53),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPALT",n||gx.fn.currentGridRowImpl(53))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPALT_GXI",n||gx.fn.currentGridRowImpl(53))},gxvar_GXI:"AV38Bmpalt_GXI",nac:gx.falseFn};n[62]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV8bmpExc=n},v2z:function(n){gx.O.ZV8bmpExc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXC",n||gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXC",n||gx.fn.currentGridRowImpl(53))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXC_GXI",n||gx.fn.currentGridRowImpl(53))},gxvar_GXI:"AV39Bmpexc_GXI",nac:gx.falseFn};n[63]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV16bmpCon=n},v2z:function(n){gx.O.ZV16bmpCon=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCON",n||gx.fn.currentGridRowImpl(53),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCON",n||gx.fn.currentGridRowImpl(53))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCON_GXI",n||gx.fn.currentGridRowImpl(53))},gxvar_GXI:"AV40Bmpcon_GXI",nac:gx.falseFn};n[64]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOEMPRESAID",gxz:"Z1046TipoLancamentoEmpresaid",gxold:"O1046TipoLancamentoEmpresaid",gxvar:"A1046TipoLancamentoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A1046TipoLancamentoEmpresaid=n},v2z:function(n){gx.O.Z1046TipoLancamentoEmpresaid=n},v2c:function(n){gx.fn.setGridControlValue("TIPOLANCAMENTOEMPRESAID",n||gx.fn.currentGridRowImpl(53),gx.O.A1046TipoLancamentoEmpresaid,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A1046TipoLancamentoEmpresaid=this.val()},val:function(n){return gx.fn.getGridControlValue("TIPOLANCAMENTOEMPRESAID",n||gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};n[65]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOINTEGCBLID",gxz:"Z1889TipoLancamentoIntegCblId",gxold:"O1889TipoLancamentoIntegCblId",gxvar:"A1889TipoLancamentoIntegCblId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A1889TipoLancamentoIntegCblId=gx.num.intval(n)},v2z:function(n){gx.O.Z1889TipoLancamentoIntegCblId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("TIPOLANCAMENTOINTEGCBLID",n||gx.fn.currentGridRowImpl(53),gx.O.A1889TipoLancamentoIntegCblId,0)},c2v:function(){gx.O.A1889TipoLancamentoIntegCblId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("TIPOLANCAMENTOINTEGCBLID",n||gx.fn.currentGridRowImpl(53),".")},nac:gx.falseFn};n[72]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV11OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV27TipoLancamentoDescricao="";this.ZV27TipoLancamentoDescricao="";this.OV27TipoLancamentoDescricao="";this.AV28TipoLancamentoPagRec="";this.ZV28TipoLancamentoPagRec="";this.OV28TipoLancamentoPagRec="";this.AV29TipoLancamentoTipo="";this.ZV29TipoLancamentoTipo="";this.OV29TipoLancamentoTipo="";this.AV5Pagina=0;this.ZV5Pagina=0;this.OV5Pagina=0;this.AV6PaginaAux=0;this.ZV6PaginaAux=0;this.OV6PaginaAux=0;this.Z962TipoLancamentoId=0;this.O962TipoLancamentoId=0;this.Z963TipoLancamentoDescricao="";this.O963TipoLancamentoDescricao="";this.Z964TipoLancamentoPagRec="";this.O964TipoLancamentoPagRec="";this.Z965TipoLancamentoTipo="";this.O965TipoLancamentoTipo="";this.ZV30DescTipoLancamentoPagRec="";this.OV30DescTipoLancamentoPagRec="";this.ZV31DescTipoLancamentoTipo="";this.OV31DescTipoLancamentoTipo="";this.ZV32BmpCbl="";this.OV32BmpCbl="";this.ZV7bmpAlt="";this.OV7bmpAlt="";this.ZV8bmpExc="";this.OV8bmpExc="";this.ZV16bmpCon="";this.OV16bmpCon="";this.Z1046TipoLancamentoEmpresaid="";this.O1046TipoLancamentoEmpresaid="";this.Z1889TipoLancamentoIntegCblId=0;this.O1889TipoLancamentoIntegCblId=0;this.AV11OrderedBy=0;this.ZV11OrderedBy=0;this.OV11OrderedBy=0;this.AV27TipoLancamentoDescricao="";this.AV28TipoLancamentoPagRec="";this.AV29TipoLancamentoTipo="";this.AV5Pagina=0;this.AV6PaginaAux=0;this.AV11OrderedBy=0;this.A962TipoLancamentoId=0;this.A963TipoLancamentoDescricao="";this.A964TipoLancamentoPagRec="";this.A965TipoLancamentoTipo="";this.AV30DescTipoLancamentoPagRec="";this.AV31DescTipoLancamentoTipo="";this.AV32BmpCbl="";this.AV7bmpAlt="";this.AV8bmpExc="";this.AV16bmpCon="";this.A1046TipoLancamentoEmpresaid="";this.A1889TipoLancamentoIntegCblId=0;this.AV17EmpresaPadrao="";this.AV33SnRecuperaFiltro="";this.Events={e117u2_client:["'ANTERIOR'",!0],e127u2_client:["'PROXIMO'",!0],e217u2_client:["'ALTERAR'",!0],e227u2_client:["'EXCLUIR'",!0],e237u2_client:["'CONSULTAR'",!0],e177u2_client:["VPAGINA.CLICK",!0],e137u2_client:["'NOVO'",!0],e147u2_client:["'FECHAR'",!0],e157u2_client:["'IMPRIMIR'",!0],e167u2_client:["'PROCURAR'",!0],e247u2_client:["'ATUALIZAPAGINA'",!0],e257u2_client:["ENTER",!0],e267u2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27TipoLancamentoDescricao",fld:"vTIPOLANCAMENTODESCRICAO"},{av:"AV28TipoLancamentoPagRec",fld:"vTIPOLANCAMENTOPAGREC"},{av:"AV29TipoLancamentoTipo",fld:"vTIPOLANCAMENTOTIPO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"A1889TipoLancamentoIntegCblId",fld:"TIPOLANCAMENTOINTEGCBLID"},{av:"A964TipoLancamentoPagRec",fld:"TIPOLANCAMENTOPAGREC"},{av:"A965TipoLancamentoTipo",fld:"TIPOLANCAMENTOTIPO"}],[]];this.EvtParms["GRID.REFRESH"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27TipoLancamentoDescricao",fld:"vTIPOLANCAMENTODESCRICAO"},{av:"AV28TipoLancamentoPagRec",fld:"vTIPOLANCAMENTOPAGREC"},{av:"AV29TipoLancamentoTipo",fld:"vTIPOLANCAMENTOTIPO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"A1889TipoLancamentoIntegCblId",fld:"TIPOLANCAMENTOINTEGCBLID"},{av:"A964TipoLancamentoPagRec",fld:"TIPOLANCAMENTOPAGREC"},{av:"A965TipoLancamentoTipo",fld:"TIPOLANCAMENTOTIPO"}],[{ctrl:"TIPOLANCAMENTOID",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("TIPOLANCAMENTOID","Title")',ctrl:"TIPOLANCAMENTOID",prop:"Title"},{av:"AV12Imagem",fld:"vIMAGEM"},{ctrl:"TIPOLANCAMENTODESCRICAO",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("TIPOLANCAMENTODESCRICAO","Title")',ctrl:"TIPOLANCAMENTODESCRICAO",prop:"Title"},{av:"AV6PaginaAux",fld:"vPAGINAAUX"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV10NumPagina",fld:"vNUMPAGINA"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:"BTNANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:"BTNPROXIMO",prop:"Enabled"},{av:"AV23filtros",fld:"vFILTROS"},{av:"AV27TipoLancamentoDescricao",fld:"vTIPOLANCAMENTODESCRICAO"},{av:"AV28TipoLancamentoPagRec",fld:"vTIPOLANCAMENTOPAGREC"},{av:"AV29TipoLancamentoTipo",fld:"vTIPOLANCAMENTOTIPO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"}]];this.EvtParms["'ANTERIOR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27TipoLancamentoDescricao",fld:"vTIPOLANCAMENTODESCRICAO"},{av:"AV28TipoLancamentoPagRec",fld:"vTIPOLANCAMENTOPAGREC"},{av:"AV29TipoLancamentoTipo",fld:"vTIPOLANCAMENTOTIPO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"A1889TipoLancamentoIntegCblId",fld:"TIPOLANCAMENTOINTEGCBLID"},{av:"A964TipoLancamentoPagRec",fld:"TIPOLANCAMENTOPAGREC"},{av:"A965TipoLancamentoTipo",fld:"TIPOLANCAMENTOTIPO"},{av:"AV5Pagina",fld:"vPAGINA"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'PROXIMO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27TipoLancamentoDescricao",fld:"vTIPOLANCAMENTODESCRICAO"},{av:"AV28TipoLancamentoPagRec",fld:"vTIPOLANCAMENTOPAGREC"},{av:"AV29TipoLancamentoTipo",fld:"vTIPOLANCAMENTOTIPO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"A1889TipoLancamentoIntegCblId",fld:"TIPOLANCAMENTOINTEGCBLID"},{av:"A964TipoLancamentoPagRec",fld:"TIPOLANCAMENTOPAGREC"},{av:"A965TipoLancamentoTipo",fld:"TIPOLANCAMENTOTIPO"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV6PaginaAux",fld:"vPAGINAAUX"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"A1889TipoLancamentoIntegCblId",fld:"TIPOLANCAMENTOINTEGCBLID"},{av:"A964TipoLancamentoPagRec",fld:"TIPOLANCAMENTOPAGREC"},{av:"A965TipoLancamentoTipo",fld:"TIPOLANCAMENTOTIPO"}],[{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:"vBMPALT",prop:"Link"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:"vBMPEXC",prop:"Link"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:"vBMPCON",prop:"Link"},{av:"AV32BmpCbl",fld:"vBMPCBL"},{av:'gx.fn.getCtrlProperty("vBMPCBL","Tooltiptext")',ctrl:"vBMPCBL",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPCBL","Link")',ctrl:"vBMPCBL",prop:"Link"},{av:"AV30DescTipoLancamentoPagRec",fld:"vDESCTIPOLANCAMENTOPAGREC"},{av:"AV31DescTipoLancamentoTipo",fld:"vDESCTIPOLANCAMENTOTIPO"}]];this.EvtParms["'ALTERAR'"]=[[{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV27TipoLancamentoDescricao",fld:"vTIPOLANCAMENTODESCRICAO"},{av:"AV28TipoLancamentoPagRec",fld:"vTIPOLANCAMENTOPAGREC"},{av:"AV29TipoLancamentoTipo",fld:"vTIPOLANCAMENTOTIPO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"}],[{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV27TipoLancamentoDescricao",fld:"vTIPOLANCAMENTODESCRICAO"},{av:"AV28TipoLancamentoPagRec",fld:"vTIPOLANCAMENTOPAGREC"},{av:"AV29TipoLancamentoTipo",fld:"vTIPOLANCAMENTOTIPO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"}],[{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'CONSULTAR'"]=[[{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV27TipoLancamentoDescricao",fld:"vTIPOLANCAMENTODESCRICAO"},{av:"AV28TipoLancamentoPagRec",fld:"vTIPOLANCAMENTOPAGREC"},{av:"AV29TipoLancamentoTipo",fld:"vTIPOLANCAMENTOTIPO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"}],[{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["VPAGINA.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27TipoLancamentoDescricao",fld:"vTIPOLANCAMENTODESCRICAO"},{av:"AV28TipoLancamentoPagRec",fld:"vTIPOLANCAMENTOPAGREC"},{av:"AV29TipoLancamentoTipo",fld:"vTIPOLANCAMENTOTIPO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"A1889TipoLancamentoIntegCblId",fld:"TIPOLANCAMENTOINTEGCBLID"},{av:"A964TipoLancamentoPagRec",fld:"TIPOLANCAMENTOPAGREC"},{av:"A965TipoLancamentoTipo",fld:"TIPOLANCAMENTOTIPO"},{av:"AV5Pagina",fld:"vPAGINA"}],[{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'NOVO'"]=[[],[]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms["'IMPRIMIR'"]=[[{av:"AV36Pgmname",fld:"vPGMNAME"},{av:"AV37Pgmdesc",fld:"vPGMDESC"}],[{av:"AV19NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV18NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV42Qtdpaggeradas",fld:"vQTDPAGGERADAS"}]];this.EvtParms["'PROCURAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27TipoLancamentoDescricao",fld:"vTIPOLANCAMENTODESCRICAO"},{av:"AV28TipoLancamentoPagRec",fld:"vTIPOLANCAMENTOPAGREC"},{av:"AV29TipoLancamentoTipo",fld:"vTIPOLANCAMENTOTIPO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"A1889TipoLancamentoIntegCblId",fld:"TIPOLANCAMENTOINTEGCBLID"},{av:"A964TipoLancamentoPagRec",fld:"TIPOLANCAMENTOPAGREC"},{av:"A965TipoLancamentoTipo",fld:"TIPOLANCAMENTOTIPO"},{av:"AV5Pagina",fld:"vPAGINA"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'ATUALIZAPAGINA'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27TipoLancamentoDescricao",fld:"vTIPOLANCAMENTODESCRICAO"},{av:"AV28TipoLancamentoPagRec",fld:"vTIPOLANCAMENTOPAGREC"},{av:"AV29TipoLancamentoTipo",fld:"vTIPOLANCAMENTOTIPO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A962TipoLancamentoId",fld:"TIPOLANCAMENTOID"},{av:"A1889TipoLancamentoIntegCblId",fld:"TIPOLANCAMENTOINTEGCBLID"},{av:"A964TipoLancamentoPagRec",fld:"TIPOLANCAMENTOPAGREC"},{av:"A965TipoLancamentoTipo",fld:"TIPOLANCAMENTOTIPO"}],[]];this.setVCMap("AV17EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("AV33SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("AV17EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("AV33SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");t.addRefreshingVar(this.GXValidFnc[13]);t.addRefreshingVar(this.GXValidFnc[18]);t.addRefreshingVar(this.GXValidFnc[23]);t.addRefreshingVar(this.GXValidFnc[72]);t.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});t.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});t.addRefreshingVar({rfrVar:"A962TipoLancamentoId",rfrProp:"Value",gxAttId:"962"});t.addRefreshingVar({rfrVar:"A1889TipoLancamentoIntegCblId",rfrProp:"Value",gxAttId:"1889"});t.addRefreshingVar({rfrVar:"A964TipoLancamentoPagRec",rfrProp:"Value",gxAttId:"964"});t.addRefreshingVar({rfrVar:"A965TipoLancamentoTipo",rfrProp:"Value",gxAttId:"965"});this.InitStandaloneVars()});gx.setParentObj(new htipolancamento)