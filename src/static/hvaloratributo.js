/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:9:44.17
*/
gx.evt.autoSkip = false;
gx.define('hvaloratributo', false, function () {
   this.ServerClass =  "hvaloratributo" ;
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
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11qr2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12qr2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16qr2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13qr2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14qr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15qr2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20qr2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21qr2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22qr2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23qr2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e17qr2_client=function()
   {
      this.executeServerEvent("'REGISTRARVALORES'", true, null, false, false);
   };
   this.e25qr2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26qr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,37,40,42,47,50,53,55,57,59,61,63,66,68,69,73,74,75,76,77,84];
   this.GXLastCtrlId =84;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",72,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hvaloratributo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2941,73,"VALORATRIBUTOCODIGO","","","ValorAtributoCodigo","int",0,"px",4,4,"right",null,[],2941,"ValorAtributoCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2938,74,"VALORATRIBUTODESCRICAO","","","ValorAtributoDescricao","char",0,"px",15,15,"left",null,[],2938,"ValorAtributoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",75,0,"px",17,"px","e20qr2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",76,0,"px",17,"px","e21qr2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",77,0,"px",17,"px","e22qr2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vESQUEMACODIGO",gxz:"ZV29EsquemaCodigo",gxold:"OV29EsquemaCodigo",gxvar:"AV29EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV29EsquemaCodigo,0)},c2v:function(){gx.O.AV29EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV31EsquemaDescricao",gxold:"OV31EsquemaDescricao",gxvar:"AV31EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV31EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV31EsquemaDescricao,0)},c2v:function(){gx.O.AV31EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE7",grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vATRIBUTOESQUEMACODIGO",gxz:"ZV30AtributoEsquemaCodigo",gxold:"OV30AtributoEsquemaCodigo",gxvar:"AV30AtributoEsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30AtributoEsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30AtributoEsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATRIBUTOESQUEMACODIGO",gx.O.AV30AtributoEsquemaCodigo,0)},c2v:function(){gx.O.AV30AtributoEsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTOESQUEMADESCRICAO",gxz:"ZV32AtributoEsquemaDescricao",gxold:"OV32AtributoEsquemaDescricao",gxvar:"AV32AtributoEsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32AtributoEsquemaDescricao=Value},v2z:function(Value){gx.O.ZV32AtributoEsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vATRIBUTOESQUEMADESCRICAO",gx.O.AV32AtributoEsquemaDescricao,0)},c2v:function(){gx.O.AV32AtributoEsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vATRIBUTOESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vVALORATRIBUTOCODIGO",gxz:"ZV27ValorAtributoCodigo",gxold:"OV27ValorAtributoCodigo",gxvar:"AV27ValorAtributoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ValorAtributoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ValorAtributoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCODIGO",gx.O.AV27ValorAtributoCodigo,0)},c2v:function(){gx.O.AV27ValorAtributoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vVALORATRIBUTODESCRICAO",gxz:"ZV28ValorAtributoDescricao",gxold:"OV28ValorAtributoDescricao",gxvar:"AV28ValorAtributoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ValorAtributoDescricao=Value},v2z:function(Value){gx.O.ZV28ValorAtributoDescricao=Value},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTODESCRICAO",gx.O.AV28ValorAtributoDescricao,0)},c2v:function(){gx.O.AV28ValorAtributoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vVALORATRIBUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={fld:"TABLE6",grid:0};
   GXValidFnc[53]={fld:"IMAGE2",grid:0};
   GXValidFnc[55]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[57]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[59]={fld:"BTNCOPIAR",grid:0};
   GXValidFnc[61]={fld:"BTNHELP",grid:0};
   GXValidFnc[63]={fld:"TABLE5",grid:0};
   GXValidFnc[66]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VALORATRIBUTOCODIGO",gxz:"Z2941ValorAtributoCodigo",gxold:"O2941ValorAtributoCodigo",gxvar:"A2941ValorAtributoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2941ValorAtributoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2941ValorAtributoCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("VALORATRIBUTOCODIGO",row || gx.fn.currentGridRowImpl(72),gx.O.A2941ValorAtributoCodigo,0)},c2v:function(){gx.O.A2941ValorAtributoCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("VALORATRIBUTOCODIGO",row || gx.fn.currentGridRowImpl(72),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VALORATRIBUTODESCRICAO",gxz:"Z2938ValorAtributoDescricao",gxold:"O2938ValorAtributoDescricao",gxvar:"A2938ValorAtributoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2938ValorAtributoDescricao=Value},v2z:function(Value){gx.O.Z2938ValorAtributoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("VALORATRIBUTODESCRICAO",row || gx.fn.currentGridRowImpl(72),gx.O.A2938ValorAtributoDescricao,0)},c2v:function(){gx.O.A2938ValorAtributoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("VALORATRIBUTODESCRICAO",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(72),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(72),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(72),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV29EsquemaCodigo = 0 ;
   this.ZV29EsquemaCodigo = 0 ;
   this.OV29EsquemaCodigo = 0 ;
   this.AV31EsquemaDescricao = "" ;
   this.ZV31EsquemaDescricao = "" ;
   this.OV31EsquemaDescricao = "" ;
   this.AV30AtributoEsquemaCodigo = 0 ;
   this.ZV30AtributoEsquemaCodigo = 0 ;
   this.OV30AtributoEsquemaCodigo = 0 ;
   this.AV32AtributoEsquemaDescricao = "" ;
   this.ZV32AtributoEsquemaDescricao = "" ;
   this.OV32AtributoEsquemaDescricao = "" ;
   this.AV27ValorAtributoCodigo = 0 ;
   this.ZV27ValorAtributoCodigo = 0 ;
   this.OV27ValorAtributoCodigo = 0 ;
   this.AV28ValorAtributoDescricao = "" ;
   this.ZV28ValorAtributoDescricao = "" ;
   this.OV28ValorAtributoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2941ValorAtributoCodigo = 0 ;
   this.O2941ValorAtributoCodigo = 0 ;
   this.Z2938ValorAtributoDescricao = "" ;
   this.O2938ValorAtributoDescricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV29EsquemaCodigo = 0 ;
   this.AV31EsquemaDescricao = "" ;
   this.AV30AtributoEsquemaCodigo = 0 ;
   this.AV32AtributoEsquemaDescricao = "" ;
   this.AV27ValorAtributoCodigo = 0 ;
   this.AV28ValorAtributoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A2912EsquemaDescricao = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.AV35Pgmname = "" ;
   this.Events = {"e11qr2_client": ["'ANTERIOR'", true] ,"e12qr2_client": ["'PROXIMO'", true] ,"e16qr2_client": ["VPAGINA.CLICK", true] ,"e13qr2_client": ["'NOVO'", true] ,"e14qr2_client": ["'FECHAR'", true] ,"e15qr2_client": ["'PROCURAR'", true] ,"e20qr2_client": ["'ALTERAR'", true] ,"e21qr2_client": ["'EXCLUIR'", true] ,"e22qr2_client": ["'CONSULTAR'", true] ,"e23qr2_client": ["'ATUALIZAPAGINA'", true] ,"e17qr2_client": ["'REGISTRARVALORES'", true] ,"e25qr2_client": ["ENTER", true] ,"e26qr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{ctrl:'VALORATRIBUTOCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VALORATRIBUTOCODIGO","Title")',ctrl:'VALORATRIBUTOCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'VALORATRIBUTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VALORATRIBUTODESCRICAO","Title")',ctrl:'VALORATRIBUTODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'}],[{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["'REGISTRARVALORES'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV28ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV30AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV29EsquemaCodigo',fld:'vESQUEMACODIGO'}]];
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV35Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvaloratributo());
