/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:12.27
*/
gx.evt.autoSkip = false;
gx.define('hhistoricocxabco', false, function () {
   this.ServerClass =  "hhistoricocxabco" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e117x2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e127x2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e217x2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e227x2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e237x2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e177x2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e137x2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e147x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e157x2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e167x2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e247x2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e257x2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e267x2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,19,21,23,25,30,33,36,38,40,42,44,46,49,51,52,56,57,58,59,60,61,62,63];
   this.GXLastCtrlId =63;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",55,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hhistoricocxabco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1004,56,"HISTORICOCXABCOID","","","HistoricoCxaBcoId","int",0,"px",4,4,"right",null,[],1004,"HistoricoCxaBcoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1005,57,"HISTORICOCXABCODESCRICAO","","","HistoricoCxaBcoDescricao","svchar",0,"px",25,25,"left",null,[],1005,"HistoricoCxaBcoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1002,58,"HISTORICOCXABCOTIPO","","HistoricoCxaBcoTipo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpcbl","vBMPCBL",59,41,"px",17,"px",null,"","CBL","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",60,0,"px",17,"px","e217x2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",61,0,"px",17,"px","e227x2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",62,0,"px",17,"px","e237x2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1892,63,"HISTORICOCXABCOINTEGCBLID","Código Integração","","HistoricoCxaBcoIntegCblId","int",0,"px",4,4,"right",null,[],1892,"HistoricoCxaBcoIntegCblId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOCXABCOID",gxz:"ZV27HistoricoCxaBcoId",gxold:"OV27HistoricoCxaBcoId",gxvar:"AV27HistoricoCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27HistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27HistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCOID",gx.O.AV27HistoricoCxaBcoId,0)},c2v:function(){gx.O.AV27HistoricoCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOCXABCOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOCXABCODESCRICAO",gxz:"ZV28HistoricoCxaBcoDescricao",gxold:"OV28HistoricoCxaBcoDescricao",gxvar:"AV28HistoricoCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28HistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.ZV28HistoricoCxaBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCODESCRICAO",gx.O.AV28HistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.AV28HistoricoCxaBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOCXABCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOCXABCOTIPO",gxz:"ZV29HistoricoCxaBcoTipo",gxold:"OV29HistoricoCxaBcoTipo",gxvar:"AV29HistoricoCxaBcoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29HistoricoCxaBcoTipo=Value},v2z:function(Value){gx.O.ZV29HistoricoCxaBcoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vHISTORICOCXABCOTIPO",gx.O.AV29HistoricoCxaBcoTipo)},c2v:function(){gx.O.AV29HistoricoCxaBcoTipo=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOCXABCOTIPO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLE4",grid:0};
   GXValidFnc[33]={fld:"TABLE8",grid:0};
   GXValidFnc[36]={fld:"IMAGE2",grid:0};
   GXValidFnc[38]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[40]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[42]={fld:"IMAGE1",grid:0};
   GXValidFnc[44]={fld:"BTNHELP",grid:0};
   GXValidFnc[46]={fld:"TABLE5",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOID",gxz:"Z1004HistoricoCxaBcoId",gxold:"O1004HistoricoCxaBcoId",gxvar:"A1004HistoricoCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1004HistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOCXABCOID",row || gx.fn.currentGridRowImpl(55),gx.O.A1004HistoricoCxaBcoId,0)},c2v:function(){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOCXABCOID",row || gx.fn.currentGridRowImpl(55),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCODESCRICAO",gxz:"Z1005HistoricoCxaBcoDescricao",gxold:"O1005HistoricoCxaBcoDescricao",gxvar:"A1005HistoricoCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1005HistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.Z1005HistoricoCxaBcoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOCXABCODESCRICAO",row || gx.fn.currentGridRowImpl(55),gx.O.A1005HistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.A1005HistoricoCxaBcoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCXABCODESCRICAO",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOTIPO",gxz:"Z1002HistoricoCxaBcoTipo",gxold:"O1002HistoricoCxaBcoTipo",gxvar:"A1002HistoricoCxaBcoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1002HistoricoCxaBcoTipo=Value},v2z:function(Value){gx.O.Z1002HistoricoCxaBcoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("HISTORICOCXABCOTIPO",row || gx.fn.currentGridRowImpl(55),gx.O.A1002HistoricoCxaBcoTipo)},c2v:function(){gx.O.A1002HistoricoCxaBcoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCXABCOTIPO",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCBL",gxz:"ZV30BmpCbl",gxold:"OV30BmpCbl",gxvar:"AV30BmpCbl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30BmpCbl=Value},v2z:function(Value){gx.O.ZV30BmpCbl=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCBL",row || gx.fn.currentGridRowImpl(55),gx.O.AV30BmpCbl,gx.O.AV40Bmpcbl_GXI)},c2v:function(){gx.O.AV40Bmpcbl_GXI=this.val_GXI();gx.O.AV30BmpCbl=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCBL",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCBL_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV40Bmpcbl_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(55),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(55),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(55),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOINTEGCBLID",gxz:"Z1892HistoricoCxaBcoIntegCblId",gxold:"O1892HistoricoCxaBcoIntegCblId",gxvar:"A1892HistoricoCxaBcoIntegCblId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1892HistoricoCxaBcoIntegCblId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1892HistoricoCxaBcoIntegCblId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOCXABCOINTEGCBLID",row || gx.fn.currentGridRowImpl(55),gx.O.A1892HistoricoCxaBcoIntegCblId,0)},c2v:function(){gx.O.A1892HistoricoCxaBcoIntegCblId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOCXABCOINTEGCBLID",row || gx.fn.currentGridRowImpl(55),'.')},nac:gx.falseFn};
   this.AV27HistoricoCxaBcoId = 0 ;
   this.ZV27HistoricoCxaBcoId = 0 ;
   this.OV27HistoricoCxaBcoId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28HistoricoCxaBcoDescricao = "" ;
   this.ZV28HistoricoCxaBcoDescricao = "" ;
   this.OV28HistoricoCxaBcoDescricao = "" ;
   this.AV29HistoricoCxaBcoTipo = "" ;
   this.ZV29HistoricoCxaBcoTipo = "" ;
   this.OV29HistoricoCxaBcoTipo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1004HistoricoCxaBcoId = 0 ;
   this.O1004HistoricoCxaBcoId = 0 ;
   this.Z1005HistoricoCxaBcoDescricao = "" ;
   this.O1005HistoricoCxaBcoDescricao = "" ;
   this.Z1002HistoricoCxaBcoTipo = "" ;
   this.O1002HistoricoCxaBcoTipo = "" ;
   this.ZV30BmpCbl = "" ;
   this.OV30BmpCbl = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1892HistoricoCxaBcoIntegCblId = 0 ;
   this.O1892HistoricoCxaBcoIntegCblId = 0 ;
   this.AV27HistoricoCxaBcoId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV28HistoricoCxaBcoDescricao = "" ;
   this.AV29HistoricoCxaBcoTipo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.A1003HistoricoCxaBcoEmpresaId = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.A1005HistoricoCxaBcoDescricao = "" ;
   this.A1002HistoricoCxaBcoTipo = "" ;
   this.AV30BmpCbl = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1892HistoricoCxaBcoIntegCblId = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.Events = {"e117x2_client": ["'ANTERIOR'", true] ,"e127x2_client": ["'PROXIMO'", true] ,"e217x2_client": ["'ALTERAR'", true] ,"e227x2_client": ["'EXCLUIR'", true] ,"e237x2_client": ["'CONSULTAR'", true] ,"e177x2_client": ["VPAGINA.CLICK", true] ,"e137x2_client": ["'NOVO'", true] ,"e147x2_client": ["'FECHAR'", true] ,"e157x2_client": ["'IMPRIMIR'", true] ,"e167x2_client": ["'PROCURAR'", true] ,"e247x2_client": ["'ATUALIZAPAGINA'", true] ,"e257x2_client": ["ENTER", true] ,"e267x2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV29HistoricoCxaBcoTipo',fld:'vHISTORICOCXABCOTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1892HistoricoCxaBcoIntegCblId',fld:'HISTORICOCXABCOINTEGCBLID'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV29HistoricoCxaBcoTipo',fld:'vHISTORICOCXABCOTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1892HistoricoCxaBcoIntegCblId',fld:'HISTORICOCXABCOINTEGCBLID'}],[{ctrl:'HISTORICOCXABCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOCXABCOID","Title")',ctrl:'HISTORICOCXABCOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'HISTORICOCXABCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOCXABCODESCRICAO","Title")',ctrl:'HISTORICOCXABCODESCRICAO',prop:'Title'},{ctrl:'HISTORICOCXABCOTIPO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV29HistoricoCxaBcoTipo',fld:'vHISTORICOCXABCOTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1892HistoricoCxaBcoIntegCblId',fld:'HISTORICOCXABCOINTEGCBLID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV29HistoricoCxaBcoTipo',fld:'vHISTORICOCXABCOTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1892HistoricoCxaBcoIntegCblId',fld:'HISTORICOCXABCOINTEGCBLID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1892HistoricoCxaBcoIntegCblId',fld:'HISTORICOCXABCOINTEGCBLID'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30BmpCbl',fld:'vBMPCBL'},{av:'gx.fn.getCtrlProperty("vBMPCBL","Tooltiptext")',ctrl:'vBMPCBL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCBL","Link")',ctrl:'vBMPCBL',prop:'Link'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV29HistoricoCxaBcoTipo',fld:'vHISTORICOCXABCOTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1892HistoricoCxaBcoIntegCblId',fld:'HISTORICOCXABCOINTEGCBLID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV36Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV32QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV29HistoricoCxaBcoTipo',fld:'vHISTORICOCXABCOTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1892HistoricoCxaBcoIntegCblId',fld:'HISTORICOCXABCOINTEGCBLID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV29HistoricoCxaBcoTipo',fld:'vHISTORICOCXABCOTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1892HistoricoCxaBcoIntegCblId',fld:'HISTORICOCXABCOINTEGCBLID'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[15]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1892HistoricoCxaBcoIntegCblId", rfrProp:"Value", gxAttId:"1892"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hhistoricocxabco());
