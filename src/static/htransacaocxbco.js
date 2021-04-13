/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:7:31.50
*/
gx.evt.autoSkip = false;
gx.define('htransacaocxbco', false, function () {
   this.ServerClass =  "htransacaocxbco" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
   };
   this.e11962_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12962_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16962_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13962_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14962_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15962_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20962_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e21962_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e22962_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e23962_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,33,36,39,41,43,45,47,50,52,53,57,58,59,60,61,62,63,64,65,66,73,74,75,76];
   this.GXLastCtrlId =76;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",56,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htransacaocxbco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1114,57,"TRANSACAOCXBCOSIGLA","","","TransacaoCxBcoSigla","char",0,"px",8,8,"left",null,[],1114,"TransacaoCxBcoSigla",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1116,58,"TRANSACAOCXBCODESCRICAO","","","TransacaoCxBcoDescricao","svchar",0,"px",40,40,"left",null,[],1116,"TransacaoCxBcoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1100,59,"TRANSACAOCXBCOHISTORICODESCRIC","","","TransacaoCxBcoHistoricoDescric","svchar",0,"px",25,25,"left",null,[],1100,"TransacaoCxBcoHistoricoDescric",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1109,60,"TRANSACAOCXBCOCCUSTOID","","","TransacaoCxBcoCCustoId","svchar",0,"px",30,30,"left",null,[],1109,"TransacaoCxBcoCCustoId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1112,61,"TRANSACAOCXBCONATUREZAID","","","TransacaoCxBcoNaturezaId","svchar",0,"px",30,30,"left",null,[],1112,"TransacaoCxBcoNaturezaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpduplicar","vBMPDUPLICAR",62,0,"px",17,"px","e20962_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",63,0,"px",17,"px",null,"","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",64,0,"px",17,"px",null,"","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",65,0,"px",17,"px",null,"","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1115,66,"TRANSACAOCXBCOEMPRESAID","Empresa","","TransacaoCxBcoEmpresaId","char",0,"px",10,10,"left",null,[],1115,"TransacaoCxBcoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOCXBCOSIGLA",gxz:"ZV27TransacaoCxBcoSigla",gxold:"OV27TransacaoCxBcoSigla",gxvar:"AV27TransacaoCxBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.ZV27TransacaoCxBcoSigla=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOSIGLA",gx.O.AV27TransacaoCxBcoSigla,0)},c2v:function(){gx.O.AV27TransacaoCxBcoSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOSIGLA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOCXBCODESCRICAO",gxz:"ZV28TransacaoCxBcoDescricao",gxold:"OV28TransacaoCxBcoDescricao",gxvar:"AV28TransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.ZV28TransacaoCxBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCODESCRICAO",gx.O.AV28TransacaoCxBcoDescricao,0)},c2v:function(){gx.O.AV28TransacaoCxBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE11",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOCXBCOHISTORICOID",gxz:"ZV31TransacaoCxBcoHistoricoId",gxold:"OV31TransacaoCxBcoHistoricoId",gxvar:"AV31TransacaoCxBcoHistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TransacaoCxBcoHistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31TransacaoCxBcoHistoricoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOHISTORICOID",gx.O.AV31TransacaoCxBcoHistoricoId,0)},c2v:function(){gx.O.AV31TransacaoCxBcoHistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOCXBCOHISTORICOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCOHISTORICODESCRICAO",gxz:"ZV29TransacaoCxBcoHistoricoDescricao",gxold:"OV29TransacaoCxBcoHistoricoDescricao",gxvar:"AV29TransacaoCxBcoHistoricoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TransacaoCxBcoHistoricoDescricao=Value},v2z:function(Value){gx.O.ZV29TransacaoCxBcoHistoricoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOHISTORICODESCRICAO",gx.O.AV29TransacaoCxBcoHistoricoDescricao,0)},c2v:function(){gx.O.AV29TransacaoCxBcoHistoricoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOHISTORICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TABLE8",grid:0};
   GXValidFnc[39]={fld:"IMAGE2",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   GXValidFnc[47]={fld:"TABLE5",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOSIGLA",gxz:"Z1114TransacaoCxBcoSigla",gxold:"O1114TransacaoCxBcoSigla",gxvar:"A1114TransacaoCxBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1114TransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.Z1114TransacaoCxBcoSigla=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOSIGLA",row || gx.fn.currentGridRowImpl(56),gx.O.A1114TransacaoCxBcoSigla,0)},c2v:function(){gx.O.A1114TransacaoCxBcoSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOSIGLA",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCODESCRICAO",gxz:"Z1116TransacaoCxBcoDescricao",gxold:"O1116TransacaoCxBcoDescricao",gxvar:"A1116TransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1116TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.Z1116TransacaoCxBcoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCODESCRICAO",row || gx.fn.currentGridRowImpl(56),gx.O.A1116TransacaoCxBcoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1116TransacaoCxBcoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCODESCRICAO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOHISTORICODESCRIC",gxz:"Z1100TransacaoCxBcoHistoricoDescric",gxold:"O1100TransacaoCxBcoHistoricoDescric",gxvar:"A1100TransacaoCxBcoHistoricoDescric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1100TransacaoCxBcoHistoricoDescric=Value},v2z:function(Value){gx.O.Z1100TransacaoCxBcoHistoricoDescric=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOHISTORICODESCRIC",row || gx.fn.currentGridRowImpl(56),gx.O.A1100TransacaoCxBcoHistoricoDescric,0)},c2v:function(){gx.O.A1100TransacaoCxBcoHistoricoDescric=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOHISTORICODESCRIC",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOCCUSTOID",gxz:"Z1109TransacaoCxBcoCCustoId",gxold:"O1109TransacaoCxBcoCCustoId",gxvar:"A1109TransacaoCxBcoCCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1109TransacaoCxBcoCCustoId=Value},v2z:function(Value){gx.O.Z1109TransacaoCxBcoCCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOCCUSTOID",row || gx.fn.currentGridRowImpl(56),gx.O.A1109TransacaoCxBcoCCustoId,0)},c2v:function(){gx.O.A1109TransacaoCxBcoCCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOCCUSTOID",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCONATUREZAID",gxz:"Z1112TransacaoCxBcoNaturezaId",gxold:"O1112TransacaoCxBcoNaturezaId",gxvar:"A1112TransacaoCxBcoNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1112TransacaoCxBcoNaturezaId=Value},v2z:function(Value){gx.O.Z1112TransacaoCxBcoNaturezaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCONATUREZAID",row || gx.fn.currentGridRowImpl(56),gx.O.A1112TransacaoCxBcoNaturezaId,0)},c2v:function(){gx.O.A1112TransacaoCxBcoNaturezaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCONATUREZAID",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDUPLICAR",gxz:"ZV30bmpDuplicar",gxold:"OV30bmpDuplicar",gxvar:"AV30bmpDuplicar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpDuplicar=Value},v2z:function(Value){gx.O.ZV30bmpDuplicar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDUPLICAR",row || gx.fn.currentGridRowImpl(56),gx.O.AV30bmpDuplicar,gx.O.AV42Bmpduplicar_GXI)},c2v:function(){gx.O.AV42Bmpduplicar_GXI=this.val_GXI();gx.O.AV30bmpDuplicar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDUPLICAR",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDUPLICAR_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV42Bmpduplicar_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(56),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(56),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOEMPRESAID",gxz:"Z1115TransacaoCxBcoEmpresaId",gxold:"O1115TransacaoCxBcoEmpresaId",gxvar:"A1115TransacaoCxBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1115TransacaoCxBcoEmpresaId=Value},v2z:function(Value){gx.O.Z1115TransacaoCxBcoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOEMPRESAID",row || gx.fn.currentGridRowImpl(56),gx.O.A1115TransacaoCxBcoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1115TransacaoCxBcoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOEMPRESAID",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[73]={fld:"JS", format:2,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOHIST",gxz:"ZV34EmpresaPadraoHist",gxold:"OV34EmpresaPadraoHist",gxvar:"AV34EmpresaPadraoHist",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34EmpresaPadraoHist=Value},v2z:function(Value){gx.O.ZV34EmpresaPadraoHist=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOHIST",gx.O.AV34EmpresaPadraoHist,0)},c2v:function(){gx.O.AV34EmpresaPadraoHist=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOHIST")},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"PROMPT_TRANSACAOCXBCOHISTORICOID",grid:0};
   this.AV27TransacaoCxBcoSigla = "" ;
   this.ZV27TransacaoCxBcoSigla = "" ;
   this.OV27TransacaoCxBcoSigla = "" ;
   this.AV28TransacaoCxBcoDescricao = "" ;
   this.ZV28TransacaoCxBcoDescricao = "" ;
   this.OV28TransacaoCxBcoDescricao = "" ;
   this.AV31TransacaoCxBcoHistoricoId = 0 ;
   this.ZV31TransacaoCxBcoHistoricoId = 0 ;
   this.OV31TransacaoCxBcoHistoricoId = 0 ;
   this.AV29TransacaoCxBcoHistoricoDescricao = "" ;
   this.ZV29TransacaoCxBcoHistoricoDescricao = "" ;
   this.OV29TransacaoCxBcoHistoricoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1114TransacaoCxBcoSigla = "" ;
   this.O1114TransacaoCxBcoSigla = "" ;
   this.Z1116TransacaoCxBcoDescricao = "" ;
   this.O1116TransacaoCxBcoDescricao = "" ;
   this.Z1100TransacaoCxBcoHistoricoDescric = "" ;
   this.O1100TransacaoCxBcoHistoricoDescric = "" ;
   this.Z1109TransacaoCxBcoCCustoId = "" ;
   this.O1109TransacaoCxBcoCCustoId = "" ;
   this.Z1112TransacaoCxBcoNaturezaId = "" ;
   this.O1112TransacaoCxBcoNaturezaId = "" ;
   this.ZV30bmpDuplicar = "" ;
   this.OV30bmpDuplicar = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1115TransacaoCxBcoEmpresaId = "" ;
   this.O1115TransacaoCxBcoEmpresaId = "" ;
   this.AV34EmpresaPadraoHist = "" ;
   this.ZV34EmpresaPadraoHist = "" ;
   this.OV34EmpresaPadraoHist = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TransacaoCxBcoSigla = "" ;
   this.AV28TransacaoCxBcoDescricao = "" ;
   this.AV31TransacaoCxBcoHistoricoId = 0 ;
   this.AV29TransacaoCxBcoHistoricoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV34EmpresaPadraoHist = "" ;
   this.AV11OrderedBy = 0 ;
   this.A1099TransacaoCxBcoHistoricoId = 0 ;
   this.A1098TransacaoCxBcoHistoricoEmpresa = "" ;
   this.A1114TransacaoCxBcoSigla = "" ;
   this.A1116TransacaoCxBcoDescricao = "" ;
   this.A1100TransacaoCxBcoHistoricoDescric = "" ;
   this.A1109TransacaoCxBcoCCustoId = "" ;
   this.A1112TransacaoCxBcoNaturezaId = "" ;
   this.AV30bmpDuplicar = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1115TransacaoCxBcoEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.Events = {"e11962_client": ["'ANTERIOR'", true] ,"e12962_client": ["'PROXIMO'", true] ,"e16962_client": ["VPAGINA.CLICK", true] ,"e13962_client": ["'NOVO'", true] ,"e14962_client": ["'FECHAR'", true] ,"e15962_client": ["'PROCURAR'", true] ,"e20962_client": ["'DUPLICAR'", true] ,"e21962_client": ["'ATUALIZAPAGINA'", true] ,"e22962_client": ["ENTER", true] ,"e23962_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV28TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV31TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV28TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV31TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'}],[{ctrl:'TRANSACAOCXBCOSIGLA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCXBCOSIGLA","Title")',ctrl:'TRANSACAOCXBCOSIGLA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TRANSACAOCXBCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCXBCODESCRICAO","Title")',ctrl:'TRANSACAOCXBCODESCRICAO',prop:'Title'},{ctrl:'TRANSACAOCXBCOHISTORICODESCRIC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCXBCOHISTORICODESCRIC","Title")',ctrl:'TRANSACAOCXBCOHISTORICODESCRIC',prop:'Title'},{ctrl:'TRANSACAOCXBCOCCUSTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCXBCOCCUSTOID","Title")',ctrl:'TRANSACAOCXBCOCCUSTOID',prop:'Title'},{ctrl:'TRANSACAOCXBCONATUREZAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCXBCONATUREZAID","Title")',ctrl:'TRANSACAOCXBCONATUREZAID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV28TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV31TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV28TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV31TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:'vBMPALT',prop:'Link'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'},{av:'AV30bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV28TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV31TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV28TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV31TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV28TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV31TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'},{av:'A1115TransacaoCxBcoEmpresaId',fld:'TRANSACAOCXBCOEMPRESAID'},{av:'A1116TransacaoCxBcoDescricao',fld:'TRANSACAOCXBCODESCRICAO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV28TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV31TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'}],[]];
   this.setPrompt("PROMPT_TRANSACAOCXBCOHISTORICOID", [26]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridContainer.addRefreshingVar({rfrVar:"A1114TransacaoCxBcoSigla", rfrProp:"Value", gxAttId:"1114"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htransacaocxbco());
