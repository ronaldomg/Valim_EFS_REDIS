/**@preserve  GeneXus Java 10_3_12-110051 on February 13, 2021 10:0:47.76
*/
gx.evt.autoSkip=!1;gx.define("hpaginacaofiscal",!1,function(){var n,t;this.ServerClass="hpaginacaofiscal";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("7","'ANTERIOR'");this.addKeyListener("8","'PROXIMO'");this.addKeyListener("3","'NOVO'");this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","'PROCURAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV32FilialUnica=gx.fn.getControlValue("vFILIALUNICA");this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO");this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO");this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME")};this.Validv_Filialfiltro=function(){try{var n=gx.util.balloon.getNew("vFILIALFILTRO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Paginacaofiscalfilialid=function(){try{if(gx.fn.currentGridRowImpl(46)===0)return!0;var n=gx.util.balloon.getNew("PAGINACAOFISCALFILIALID",gx.fn.currentGridRowImpl(46));this.AnyError=0;this.StandaloneModal();this.StandaloneNotModal()}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Filialempresaid=function(){try{var n=gx.util.balloon.getNew("vFILIALEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e111132_client=function(){this.executeServerEvent("'ANTERIOR'",!0,null,!1,!1)};this.e121132_client=function(){this.executeServerEvent("'PROXIMO'",!0,null,!1,!1)};this.e161132_client=function(){this.executeServerEvent("VPAGINA.CLICK",!0,null,!1,!0)};this.e131132_client=function(){this.executeServerEvent("'NOVO'",!0,null,!1,!1)};this.e141132_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e151132_client=function(){this.executeServerEvent("'PROCURAR'",!1,null,!1,!1)};this.e191132_client=function(){this.executeServerEvent("'ALTERAR'",!0,arguments[0],!1,!1)};this.e201132_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e211132_client=function(){this.executeServerEvent("'CONSULTAR'",!0,arguments[0],!1,!1)};this.e221132_client=function(){this.executeServerEvent("'ATUALIZAPAGINA'",!0,arguments[0],!1,!1)};this.e241132_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e251132_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,56,57,63,65,66,67,68];this.GXLastCtrlId=68;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hpaginacaofiscal",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(7430,47,"PAGINACAOFISCALFILIALID","","","PaginacaoFiscalFilialId","int",0,"px",7,7,"right",null,[],7430,"PaginacaoFiscalFilialId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(7420,48,"PAGINACAOFISCALFILIALDESC","Descrição","","PaginacaoFiscalFilialDesc","svchar",0,"px",100,80,"left",null,[],7420,"PaginacaoFiscalFilialDesc",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit(7422,49,"PAGINACAOFISCALULTPAGENTRADA","Entrada","","PaginacaoFiscalUltPagEntrada","int",0,"px",6,6,"right",null,[],7422,"PaginacaoFiscalUltPagEntrada",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(7421,50,"PAGINACAOFISCALULTPAGSAIDA","Saída","","PaginacaoFiscalUltPagSaida","int",0,"px",6,6,"right",null,[],7421,"PaginacaoFiscalUltPagSaida",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(7424,51,"PAGINACAOFISCALULTPAGAPUICMS","Apura.ICMS","","PaginacaoFiscalUltPagApuICMS","int",0,"px",6,6,"right",null,[],7424,"PaginacaoFiscalUltPagApuICMS",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(7425,52,"PAGINACAOFISCALULTPAGAPUIPI","Apura.IPI","","PaginacaoFiscalUltPagApuIPI","int",0,"px",6,6,"right",null,[],7425,"PaginacaoFiscalUltPagApuIPI",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(7423,53,"PAGINACAOFISCALULTPAGDUPLICATA","Duplicata","","PaginacaoFiscalUltPagDuplicata","int",0,"px",6,6,"right",null,[],7423,"PaginacaoFiscalUltPagDuplicata",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(7426,54,"PAGINACAOFISCALULTPAGINVENT","Inventário","","PaginacaoFiscalUltPaginvent","int",0,"px",6,6,"right",null,[],7426,"PaginacaoFiscalUltPaginvent",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpalt","vBMPALT",55,0,"px",17,"px","e191132_client","","Alterar","Image","GridColumnImage");t.addBitmap("&Bmpexc","vBMPEXC",56,0,"px",17,"px","e201132_client","","Excluir","Image","GridColumnImage");t.addBitmap("&Bmpcon","vBMPCON",57,0,"px",17,"px","e211132_client","","Consultar","Image","GridColumnImage");this.setGrid(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE8",grid:0};n[8]={fld:"TABLE9",grid:0};n[11]={fld:"TXTTITAPL1",format:0,grid:0};n[13]={fld:"TABLE10",grid:0};n[16]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialfiltro,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALFILTRO",gxz:"ZV27FilialFiltro",gxold:"OV27FilialFiltro",gxvar:"AV27FilialFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27FilialFiltro=gx.num.intval(n)},v2z:function(n){gx.O.ZV27FilialFiltro=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALFILTRO",gx.O.AV27FilialFiltro,0)},c2v:function(){gx.O.AV27FilialFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALFILTRO",".")},nac:gx.falseFn};n[18]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV29FilialNome",gxold:"OV29FilialNome",gxvar:"AV29FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29FilialNome=n},v2z:function(n){gx.O.ZV29FilialNome=n},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV29FilialNome,0)},c2v:function(){gx.O.AV29FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};n[23]={fld:"TABLE4",grid:0};n[26]={fld:"TABLE6",grid:0};n[29]={fld:"IMAGE2",grid:0};n[31]={fld:"BTNANTERIOR",grid:0};n[33]={fld:"BTNPROXIMO",grid:0};n[35]={fld:"BTNHELP",grid:0};n[37]={fld:"TABLE5",grid:0};n[40]={fld:"TEXTBLOCK1",format:0,grid:0};n[42]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV5Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV5Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[43]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV6PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[47]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:this.Valid_Paginacaofiscalfilialid,isvalid:null,rgrid:[],fld:"PAGINACAOFISCALFILIALID",gxz:"Z7430PaginacaoFiscalFilialId",gxold:"O7430PaginacaoFiscalFilialId",gxvar:"A7430PaginacaoFiscalFilialId",ucs:[],op:[48],ip:[48,47],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A7430PaginacaoFiscalFilialId=gx.num.intval(n)},v2z:function(n){gx.O.Z7430PaginacaoFiscalFilialId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PAGINACAOFISCALFILIALID",n||gx.fn.currentGridRowImpl(46),gx.O.A7430PaginacaoFiscalFilialId,0)},c2v:function(){gx.O.A7430PaginacaoFiscalFilialId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PAGINACAOFISCALFILIALID",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[48]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOFISCALFILIALDESC",gxz:"Z7420PaginacaoFiscalFilialDesc",gxold:"O7420PaginacaoFiscalFilialDesc",gxvar:"A7420PaginacaoFiscalFilialDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A7420PaginacaoFiscalFilialDesc=n},v2z:function(n){gx.O.Z7420PaginacaoFiscalFilialDesc=n},v2c:function(n){gx.fn.setGridControlValue("PAGINACAOFISCALFILIALDESC",n||gx.fn.currentGridRowImpl(46),gx.O.A7420PaginacaoFiscalFilialDesc,0)},c2v:function(){gx.O.A7420PaginacaoFiscalFilialDesc=this.val()},val:function(n){return gx.fn.getGridControlValue("PAGINACAOFISCALFILIALDESC",n||gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};n[49]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOFISCALULTPAGENTRADA",gxz:"Z7422PaginacaoFiscalUltPagEntrada",gxold:"O7422PaginacaoFiscalUltPagEntrada",gxvar:"A7422PaginacaoFiscalUltPagEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A7422PaginacaoFiscalUltPagEntrada=gx.num.intval(n)},v2z:function(n){gx.O.Z7422PaginacaoFiscalUltPagEntrada=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PAGINACAOFISCALULTPAGENTRADA",n||gx.fn.currentGridRowImpl(46),gx.O.A7422PaginacaoFiscalUltPagEntrada,0)},c2v:function(){gx.O.A7422PaginacaoFiscalUltPagEntrada=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PAGINACAOFISCALULTPAGENTRADA",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[50]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOFISCALULTPAGSAIDA",gxz:"Z7421PaginacaoFiscalUltPagSaida",gxold:"O7421PaginacaoFiscalUltPagSaida",gxvar:"A7421PaginacaoFiscalUltPagSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A7421PaginacaoFiscalUltPagSaida=gx.num.intval(n)},v2z:function(n){gx.O.Z7421PaginacaoFiscalUltPagSaida=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PAGINACAOFISCALULTPAGSAIDA",n||gx.fn.currentGridRowImpl(46),gx.O.A7421PaginacaoFiscalUltPagSaida,0)},c2v:function(){gx.O.A7421PaginacaoFiscalUltPagSaida=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PAGINACAOFISCALULTPAGSAIDA",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[51]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOFISCALULTPAGAPUICMS",gxz:"Z7424PaginacaoFiscalUltPagApuICMS",gxold:"O7424PaginacaoFiscalUltPagApuICMS",gxvar:"A7424PaginacaoFiscalUltPagApuICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A7424PaginacaoFiscalUltPagApuICMS=gx.num.intval(n)},v2z:function(n){gx.O.Z7424PaginacaoFiscalUltPagApuICMS=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PAGINACAOFISCALULTPAGAPUICMS",n||gx.fn.currentGridRowImpl(46),gx.O.A7424PaginacaoFiscalUltPagApuICMS,0)},c2v:function(){gx.O.A7424PaginacaoFiscalUltPagApuICMS=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PAGINACAOFISCALULTPAGAPUICMS",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[52]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOFISCALULTPAGAPUIPI",gxz:"Z7425PaginacaoFiscalUltPagApuIPI",gxold:"O7425PaginacaoFiscalUltPagApuIPI",gxvar:"A7425PaginacaoFiscalUltPagApuIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A7425PaginacaoFiscalUltPagApuIPI=gx.num.intval(n)},v2z:function(n){gx.O.Z7425PaginacaoFiscalUltPagApuIPI=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PAGINACAOFISCALULTPAGAPUIPI",n||gx.fn.currentGridRowImpl(46),gx.O.A7425PaginacaoFiscalUltPagApuIPI,0)},c2v:function(){gx.O.A7425PaginacaoFiscalUltPagApuIPI=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PAGINACAOFISCALULTPAGAPUIPI",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[53]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOFISCALULTPAGDUPLICATA",gxz:"Z7423PaginacaoFiscalUltPagDuplicata",gxold:"O7423PaginacaoFiscalUltPagDuplicata",gxvar:"A7423PaginacaoFiscalUltPagDuplicata",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A7423PaginacaoFiscalUltPagDuplicata=gx.num.intval(n)},v2z:function(n){gx.O.Z7423PaginacaoFiscalUltPagDuplicata=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PAGINACAOFISCALULTPAGDUPLICATA",n||gx.fn.currentGridRowImpl(46),gx.O.A7423PaginacaoFiscalUltPagDuplicata,0)},c2v:function(){gx.O.A7423PaginacaoFiscalUltPagDuplicata=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PAGINACAOFISCALULTPAGDUPLICATA",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[54]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOFISCALULTPAGINVENT",gxz:"Z7426PaginacaoFiscalUltPaginvent",gxold:"O7426PaginacaoFiscalUltPaginvent",gxvar:"A7426PaginacaoFiscalUltPaginvent",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A7426PaginacaoFiscalUltPaginvent=gx.num.intval(n)},v2z:function(n){gx.O.Z7426PaginacaoFiscalUltPaginvent=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PAGINACAOFISCALULTPAGINVENT",n||gx.fn.currentGridRowImpl(46),gx.O.A7426PaginacaoFiscalUltPaginvent,0)},c2v:function(){gx.O.A7426PaginacaoFiscalUltPaginvent=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PAGINACAOFISCALULTPAGINVENT",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[55]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7bmpAlt=n},v2z:function(n){gx.O.ZV7bmpAlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPALT",n||gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV40Bmpalt_GXI)},c2v:function(){gx.O.AV40Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPALT",n||gx.fn.currentGridRowImpl(46))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPALT_GXI",n||gx.fn.currentGridRowImpl(46))},gxvar_GXI:"AV40Bmpalt_GXI",nac:gx.falseFn};n[56]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV8bmpExc=n},v2z:function(n){gx.O.ZV8bmpExc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXC",n||gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV41Bmpexc_GXI)},c2v:function(){gx.O.AV41Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXC",n||gx.fn.currentGridRowImpl(46))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXC_GXI",n||gx.fn.currentGridRowImpl(46))},gxvar_GXI:"AV41Bmpexc_GXI",nac:gx.falseFn};n[57]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV16bmpCon=n},v2z:function(n){gx.O.ZV16bmpCon=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCON",n||gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV42Bmpcon_GXI)},c2v:function(){gx.O.AV42Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCON",n||gx.fn.currentGridRowImpl(46))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCON_GXI",n||gx.fn.currentGridRowImpl(46))},gxvar_GXI:"AV42Bmpcon_GXI",nac:gx.falseFn};n[63]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFIL",gxz:"ZV33QtdeFil",gxold:"OV33QtdeFil",gxvar:"AV33QtdeFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33QtdeFil=gx.num.intval(n)},v2z:function(n){gx.O.ZV33QtdeFil=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDEFIL",gx.O.AV33QtdeFil,0)},c2v:function(){gx.O.AV33QtdeFil=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEFIL",".")},nac:gx.falseFn};n[65]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV11OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};n[66]={fld:"JS",format:2,grid:0};n[67]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV28FilialEmpresaId",gxold:"OV28FilialEmpresaId",gxvar:"AV28FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28FilialEmpresaId=n},v2z:function(n){gx.O.ZV28FilialEmpresaId=n},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV28FilialEmpresaId,0)},c2v:function(){gx.O.AV28FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};n[68]={fld:"PROMPT_FILIALFILTRO",grid:0};this.AV27FilialFiltro=0;this.ZV27FilialFiltro=0;this.OV27FilialFiltro=0;this.AV29FilialNome="";this.ZV29FilialNome="";this.OV29FilialNome="";this.AV5Pagina=0;this.ZV5Pagina=0;this.OV5Pagina=0;this.AV6PaginaAux=0;this.ZV6PaginaAux=0;this.OV6PaginaAux=0;this.Z7430PaginacaoFiscalFilialId=0;this.O7430PaginacaoFiscalFilialId=0;this.Z7420PaginacaoFiscalFilialDesc="";this.O7420PaginacaoFiscalFilialDesc="";this.Z7422PaginacaoFiscalUltPagEntrada=0;this.O7422PaginacaoFiscalUltPagEntrada=0;this.Z7421PaginacaoFiscalUltPagSaida=0;this.O7421PaginacaoFiscalUltPagSaida=0;this.Z7424PaginacaoFiscalUltPagApuICMS=0;this.O7424PaginacaoFiscalUltPagApuICMS=0;this.Z7425PaginacaoFiscalUltPagApuIPI=0;this.O7425PaginacaoFiscalUltPagApuIPI=0;this.Z7423PaginacaoFiscalUltPagDuplicata=0;this.O7423PaginacaoFiscalUltPagDuplicata=0;this.Z7426PaginacaoFiscalUltPaginvent=0;this.O7426PaginacaoFiscalUltPaginvent=0;this.ZV7bmpAlt="";this.OV7bmpAlt="";this.ZV8bmpExc="";this.OV8bmpExc="";this.ZV16bmpCon="";this.OV16bmpCon="";this.AV33QtdeFil=0;this.ZV33QtdeFil=0;this.OV33QtdeFil=0;this.AV11OrderedBy=0;this.ZV11OrderedBy=0;this.OV11OrderedBy=0;this.AV28FilialEmpresaId="";this.ZV28FilialEmpresaId="";this.OV28FilialEmpresaId="";this.AV27FilialFiltro=0;this.AV29FilialNome="";this.AV5Pagina=0;this.AV6PaginaAux=0;this.AV33QtdeFil=0;this.AV11OrderedBy=0;this.AV28FilialEmpresaId="";this.A7429PaginacaoFiscalFilialEmpId="";this.A7430PaginacaoFiscalFilialId=0;this.A7420PaginacaoFiscalFilialDesc="";this.A7422PaginacaoFiscalUltPagEntrada=0;this.A7421PaginacaoFiscalUltPagSaida=0;this.A7424PaginacaoFiscalUltPagApuICMS=0;this.A7425PaginacaoFiscalUltPagApuIPI=0;this.A7423PaginacaoFiscalUltPagDuplicata=0;this.A7426PaginacaoFiscalUltPaginvent=0;this.AV7bmpAlt="";this.AV8bmpExc="";this.AV16bmpCon="";this.A1156FilialId=0;this.A1228FilialEmpresaId="";this.A1136FilialNome="";this.AV17EmpresaPadrao="";this.AV34SnRecuperaFiltro="";this.AV37Pgmname="";this.Events={e111132_client:["'ANTERIOR'",!0],e121132_client:["'PROXIMO'",!0],e161132_client:["VPAGINA.CLICK",!0],e131132_client:["'NOVO'",!0],e141132_client:["'FECHAR'",!0],e151132_client:["'PROCURAR'",!0],e191132_client:["'ALTERAR'",!0],e201132_client:["'EXCLUIR'",!0],e211132_client:["'CONSULTAR'",!0],e221132_client:["'ATUALIZAPAGINA'",!0],e241132_client:["ENTER",!0],e251132_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[]];this.EvtParms["GRID.REFRESH"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[{ctrl:"PAGINACAOFISCALFILIALID",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("PAGINACAOFISCALFILIALID","Title")',ctrl:"PAGINACAOFISCALFILIALID",prop:"Title"},{av:"AV12Imagem",fld:"vIMAGEM"},{av:"AV6PaginaAux",fld:"vPAGINAAUX"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV10NumPagina",fld:"vNUMPAGINA"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:"BTNANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:"BTNPROXIMO",prop:"Enabled"},{av:"AV23filtros",fld:"vFILTROS"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV29FilialNome",fld:"vFILIALNOME"}]];this.EvtParms["'ANTERIOR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV29FilialNome",fld:"vFILIALNOME"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'PROXIMO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV6PaginaAux",fld:"vPAGINAAUX"},{av:"AV29FilialNome",fld:"vFILIALNOME"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["VPAGINA.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV29FilialNome",fld:"vFILIALNOME"}],[{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'NOVO'"]=[[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV29FilialNome",fld:"vFILIALNOME"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV37Pgmname",fld:"vPGMNAME"}],[]];this.EvtParms["'PROCURAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV29FilialNome",fld:"vFILIALNOME"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'ALTERAR'"]=[[{av:"A7430PaginacaoFiscalFilialId",fld:"PAGINACAOFISCALFILIALID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV29FilialNome",fld:"vFILIALNOME"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[{av:"A7430PaginacaoFiscalFilialId",fld:"PAGINACAOFISCALFILIALID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"A7430PaginacaoFiscalFilialId",fld:"PAGINACAOFISCALFILIALID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV29FilialNome",fld:"vFILIALNOME"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[{av:"A7430PaginacaoFiscalFilialId",fld:"PAGINACAOFISCALFILIALID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'CONSULTAR'"]=[[{av:"A7430PaginacaoFiscalFilialId",fld:"PAGINACAOFISCALFILIALID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV29FilialNome",fld:"vFILIALNOME"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[{av:"A7430PaginacaoFiscalFilialId",fld:"PAGINACAOFISCALFILIALID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'ATUALIZAPAGINA'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27FilialFiltro",fld:"vFILIALFILTRO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[]];this.setPrompt("PROMPT_FILIALFILTRO",[16]);this.setVCMap("AV32FilialUnica","vFILIALUNICA",0,"char");this.setVCMap("AV17EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("AV34SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("AV37Pgmname","vPGMNAME",0,"char");this.setVCMap("AV17EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("AV34SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("AV37Pgmname","vPGMNAME",0,"char");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[65]);t.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});t.addRefreshingVar({rfrVar:"AV7bmpAlt",rfrProp:"Value",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV7bmpAlt",rfrProp:"Tooltiptext",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV8bmpExc",rfrProp:"Value",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV8bmpExc",rfrProp:"Tooltiptext",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV16bmpCon",rfrProp:"Value",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV16bmpCon",rfrProp:"Tooltiptext",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});t.addRefreshingVar({rfrVar:"AV37Pgmname"});this.InitStandaloneVars()});gx.setParentObj(new hpaginacaofiscal)