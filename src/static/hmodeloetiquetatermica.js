/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:49.36
*/
gx.evt.autoSkip = false;
gx.define('hmodeloetiquetatermica', false, function () {
   this.ServerClass =  "hmodeloetiquetatermica" ;
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
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11wx2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12wx2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16wx2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13wx2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14wx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15wx2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20wx2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21wx2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22wx2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23wx2_client=function()
   {
      this.executeServerEvent("'LAYOUT'", true, arguments[0], false, false);
   };
   this.e24wx2_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e25wx2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26wx2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27wx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,33,36,39,41,43,45,47,50,52,53,57,58,59,60,61,62,63,64,65,66,67,68,75];
   this.GXLastCtrlId =75;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",56,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodeloetiquetatermica",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5903,57,"ETIQUETATERMICAMODELO","","","EtiquetaTermicaModelo","int",0,"px",3,3,"right",null,[],5903,"EtiquetaTermicaModelo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5904,58,"ETIQUETATERMICADESCRICAO","","","EtiquetaTermicaDescricao","svchar",0,"px",40,40,"left",null,[],5904,"EtiquetaTermicaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5919,59,"ETIQUETATERMICADENSIDADE","","","EtiquetaTermicaDensidade","int",0,"px",3,3,"right",null,[],5919,"EtiquetaTermicaDensidade",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Linguagem",60,"vLINGUAGEM","","","Linguagem","svchar",0,"px",10,10,"left",null,[],"Linguagem","Linguagem",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmplayout","vBMPLAYOUT",61,0,"px",17,"px","e23wx2_client","","Linhas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcopiar","vBMPCOPIAR",62,0,"px",17,"px","e24wx2_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",63,0,"px",17,"px","e20wx2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",64,0,"px",17,"px","e21wx2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",65,0,"px",17,"px","e22wx2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5902,66,"ETIQUETATERMICAEMPRESAID","Etiqueta Termica Empresa Id","","EtiquetaTermicaEmpresaId","char",0,"px",10,10,"left",null,[],5902,"EtiquetaTermicaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5906,67,"ETIQUETATERMICALINGUAGEM","Linguagem","","EtiquetaTermicaLinguagem","char",0,"px",1,1,"left",null,[],5906,"EtiquetaTermicaLinguagem",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6366,68,"ETIQUETATERMICANOCOLUNAS","Etiqueta Termica No Colunas","","EtiquetaTermicaNoColunas","int",0,"px",4,4,"right",null,[],6366,"EtiquetaTermicaNoColunas",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vETIQUETATERMICAMODELO",gxz:"ZV27EtiquetaTermicaModelo",gxold:"OV27EtiquetaTermicaModelo",gxvar:"AV27EtiquetaTermicaModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27EtiquetaTermicaModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27EtiquetaTermicaModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICAMODELO",gx.O.AV27EtiquetaTermicaModelo,0)},c2v:function(){gx.O.AV27EtiquetaTermicaModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETATERMICAMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vETIQUETATERMICADESCRICAO",gxz:"ZV28EtiquetaTermicaDescricao",gxold:"OV28EtiquetaTermicaDescricao",gxvar:"AV28EtiquetaTermicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EtiquetaTermicaDescricao=Value},v2z:function(Value){gx.O.ZV28EtiquetaTermicaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICADESCRICAO",gx.O.AV28EtiquetaTermicaDescricao,0)},c2v:function(){gx.O.AV28EtiquetaTermicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATERMICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vETIQUETATERMICALINGUAGEM",gxz:"ZV29EtiquetaTermicaLinguagem",gxold:"OV29EtiquetaTermicaLinguagem",gxvar:"AV29EtiquetaTermicaLinguagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29EtiquetaTermicaLinguagem=Value},v2z:function(Value){gx.O.ZV29EtiquetaTermicaLinguagem=Value},v2c:function(){gx.fn.setComboBoxValue("vETIQUETATERMICALINGUAGEM",gx.O.AV29EtiquetaTermicaLinguagem)},c2v:function(){gx.O.AV29EtiquetaTermicaLinguagem=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATERMICALINGUAGEM")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vETIQUETATERMICASITUACAO",gxz:"ZV34EtiquetaTermicaSituacao",gxold:"OV34EtiquetaTermicaSituacao",gxvar:"AV34EtiquetaTermicaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV34EtiquetaTermicaSituacao=Value},v2z:function(Value){gx.O.ZV34EtiquetaTermicaSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vETIQUETATERMICASITUACAO",gx.O.AV34EtiquetaTermicaSituacao)},c2v:function(){gx.O.AV34EtiquetaTermicaSituacao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATERMICASITUACAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TABLE6",grid:0};
   GXValidFnc[39]={fld:"IMAGE2",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   GXValidFnc[47]={fld:"TABLE5",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAMODELO",gxz:"Z5903EtiquetaTermicaModelo",gxold:"O5903EtiquetaTermicaModelo",gxvar:"A5903EtiquetaTermicaModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5903EtiquetaTermicaModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5903EtiquetaTermicaModelo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICAMODELO",row || gx.fn.currentGridRowImpl(56),gx.O.A5903EtiquetaTermicaModelo,0)},c2v:function(){gx.O.A5903EtiquetaTermicaModelo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETATERMICAMODELO",row || gx.fn.currentGridRowImpl(56),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADESCRICAO",gxz:"Z5904EtiquetaTermicaDescricao",gxold:"O5904EtiquetaTermicaDescricao",gxvar:"A5904EtiquetaTermicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5904EtiquetaTermicaDescricao=Value},v2z:function(Value){gx.O.Z5904EtiquetaTermicaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICADESCRICAO",row || gx.fn.currentGridRowImpl(56),gx.O.A5904EtiquetaTermicaDescricao,0)},c2v:function(){gx.O.A5904EtiquetaTermicaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ETIQUETATERMICADESCRICAO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADENSIDADE",gxz:"Z5919EtiquetaTermicaDensidade",gxold:"O5919EtiquetaTermicaDensidade",gxvar:"A5919EtiquetaTermicaDensidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5919EtiquetaTermicaDensidade=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5919EtiquetaTermicaDensidade=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICADENSIDADE",row || gx.fn.currentGridRowImpl(56),gx.O.A5919EtiquetaTermicaDensidade,0)},c2v:function(){gx.O.A5919EtiquetaTermicaDensidade=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETATERMICADENSIDADE",row || gx.fn.currentGridRowImpl(56),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:0,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLINGUAGEM",gxz:"ZV30Linguagem",gxold:"OV30Linguagem",gxvar:"AV30Linguagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30Linguagem=Value},v2z:function(Value){gx.O.ZV30Linguagem=Value},v2c:function(row){gx.fn.setGridControlValue("vLINGUAGEM",row || gx.fn.currentGridRowImpl(56),gx.O.AV30Linguagem,0)},c2v:function(){gx.O.AV30Linguagem=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINGUAGEM",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLAYOUT",gxz:"ZV31bmpLayout",gxold:"OV31bmpLayout",gxvar:"AV31bmpLayout",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpLayout=Value},v2z:function(Value){gx.O.ZV31bmpLayout=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLAYOUT",row || gx.fn.currentGridRowImpl(56),gx.O.AV31bmpLayout,gx.O.AV42Bmplayout_GXI)},c2v:function(){gx.O.AV42Bmplayout_GXI=this.val_GXI();gx.O.AV31bmpLayout=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLAYOUT",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLAYOUT_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV42Bmplayout_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCOPIAR",gxz:"ZV32BmpCopiar",gxold:"OV32BmpCopiar",gxvar:"AV32BmpCopiar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32BmpCopiar=Value},v2z:function(Value){gx.O.ZV32BmpCopiar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCOPIAR",row || gx.fn.currentGridRowImpl(56),gx.O.AV32BmpCopiar,gx.O.AV43Bmpcopiar_GXI)},c2v:function(){gx.O.AV43Bmpcopiar_GXI=this.val_GXI();gx.O.AV32BmpCopiar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCOPIAR",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCOPIAR_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV43Bmpcopiar_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(56),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(56),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAEMPRESAID",gxz:"Z5902EtiquetaTermicaEmpresaId",gxold:"O5902EtiquetaTermicaEmpresaId",gxvar:"A5902EtiquetaTermicaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5902EtiquetaTermicaEmpresaId=Value},v2z:function(Value){gx.O.Z5902EtiquetaTermicaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICAEMPRESAID",row || gx.fn.currentGridRowImpl(56),gx.O.A5902EtiquetaTermicaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5902EtiquetaTermicaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ETIQUETATERMICAEMPRESAID",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALINGUAGEM",gxz:"Z5906EtiquetaTermicaLinguagem",gxold:"O5906EtiquetaTermicaLinguagem",gxvar:"A5906EtiquetaTermicaLinguagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5906EtiquetaTermicaLinguagem=Value},v2z:function(Value){gx.O.Z5906EtiquetaTermicaLinguagem=Value},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICALINGUAGEM",row || gx.fn.currentGridRowImpl(56),gx.O.A5906EtiquetaTermicaLinguagem,0)},c2v:function(){gx.O.A5906EtiquetaTermicaLinguagem=this.val()},val:function(row){return gx.fn.getGridControlValue("ETIQUETATERMICALINGUAGEM",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICANOCOLUNAS",gxz:"Z6366EtiquetaTermicaNoColunas",gxold:"O6366EtiquetaTermicaNoColunas",gxvar:"A6366EtiquetaTermicaNoColunas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6366EtiquetaTermicaNoColunas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6366EtiquetaTermicaNoColunas=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICANOCOLUNAS",row || gx.fn.currentGridRowImpl(56),gx.O.A6366EtiquetaTermicaNoColunas,0)},c2v:function(){gx.O.A6366EtiquetaTermicaNoColunas=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETATERMICANOCOLUNAS",row || gx.fn.currentGridRowImpl(56),'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27EtiquetaTermicaModelo = 0 ;
   this.ZV27EtiquetaTermicaModelo = 0 ;
   this.OV27EtiquetaTermicaModelo = 0 ;
   this.AV28EtiquetaTermicaDescricao = "" ;
   this.ZV28EtiquetaTermicaDescricao = "" ;
   this.OV28EtiquetaTermicaDescricao = "" ;
   this.AV29EtiquetaTermicaLinguagem = "" ;
   this.ZV29EtiquetaTermicaLinguagem = "" ;
   this.OV29EtiquetaTermicaLinguagem = "" ;
   this.AV34EtiquetaTermicaSituacao = "" ;
   this.ZV34EtiquetaTermicaSituacao = "" ;
   this.OV34EtiquetaTermicaSituacao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5903EtiquetaTermicaModelo = 0 ;
   this.O5903EtiquetaTermicaModelo = 0 ;
   this.Z5904EtiquetaTermicaDescricao = "" ;
   this.O5904EtiquetaTermicaDescricao = "" ;
   this.Z5919EtiquetaTermicaDensidade = 0 ;
   this.O5919EtiquetaTermicaDensidade = 0 ;
   this.ZV30Linguagem = "" ;
   this.OV30Linguagem = "" ;
   this.ZV31bmpLayout = "" ;
   this.OV31bmpLayout = "" ;
   this.ZV32BmpCopiar = "" ;
   this.OV32BmpCopiar = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5902EtiquetaTermicaEmpresaId = "" ;
   this.O5902EtiquetaTermicaEmpresaId = "" ;
   this.Z5906EtiquetaTermicaLinguagem = "" ;
   this.O5906EtiquetaTermicaLinguagem = "" ;
   this.Z6366EtiquetaTermicaNoColunas = 0 ;
   this.O6366EtiquetaTermicaNoColunas = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27EtiquetaTermicaModelo = 0 ;
   this.AV28EtiquetaTermicaDescricao = "" ;
   this.AV29EtiquetaTermicaLinguagem = "" ;
   this.AV34EtiquetaTermicaSituacao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A9866EtiquetaTermicaSituacao = "" ;
   this.A5903EtiquetaTermicaModelo = 0 ;
   this.A5904EtiquetaTermicaDescricao = "" ;
   this.A5919EtiquetaTermicaDensidade = 0 ;
   this.AV30Linguagem = "" ;
   this.AV31bmpLayout = "" ;
   this.AV32BmpCopiar = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5902EtiquetaTermicaEmpresaId = "" ;
   this.A5906EtiquetaTermicaLinguagem = "" ;
   this.A6366EtiquetaTermicaNoColunas = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.AV37Pgmname = "" ;
   this.Events = {"e11wx2_client": ["'ANTERIOR'", true] ,"e12wx2_client": ["'PROXIMO'", true] ,"e16wx2_client": ["VPAGINA.CLICK", true] ,"e13wx2_client": ["'NOVO'", true] ,"e14wx2_client": ["'FECHAR'", true] ,"e15wx2_client": ["'PROCURAR'", true] ,"e20wx2_client": ["'ALTERAR'", true] ,"e21wx2_client": ["'EXCLUIR'", true] ,"e22wx2_client": ["'CONSULTAR'", true] ,"e23wx2_client": ["'LAYOUT'", true] ,"e24wx2_client": ["'DUPLICAR'", true] ,"e25wx2_client": ["'ATUALIZAPAGINA'", true] ,"e26wx2_client": ["ENTER", true] ,"e27wx2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV34EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A5906EtiquetaTermicaLinguagem',fld:'ETIQUETATERMICALINGUAGEM'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV34EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A5906EtiquetaTermicaLinguagem',fld:'ETIQUETATERMICALINGUAGEM'}],[{ctrl:'ETIQUETATERMICAMODELO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETATERMICAMODELO","Title")',ctrl:'ETIQUETATERMICAMODELO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ETIQUETATERMICADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETATERMICADESCRICAO","Title")',ctrl:'ETIQUETATERMICADESCRICAO',prop:'Title'},{ctrl:'ETIQUETATERMICADENSIDADE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETATERMICADENSIDADE","Title")',ctrl:'ETIQUETATERMICADENSIDADE',prop:'Title'},{ctrl:'vLINGUAGEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vLINGUAGEM","Title")',ctrl:'vLINGUAGEM',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5906EtiquetaTermicaLinguagem',fld:'ETIQUETATERMICALINGUAGEM'}],[{av:'AV30Linguagem',fld:'vLINGUAGEM'},{av:'AV32BmpCopiar',fld:'vBMPCOPIAR'},{av:'gx.fn.getCtrlProperty("vBMPCOPIAR","Tooltiptext")',ctrl:'vBMPCOPIAR',prop:'Tooltiptext'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV34EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A5906EtiquetaTermicaLinguagem',fld:'ETIQUETATERMICALINGUAGEM'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV34EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A5906EtiquetaTermicaLinguagem',fld:'ETIQUETATERMICALINGUAGEM'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV34EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A5906EtiquetaTermicaLinguagem',fld:'ETIQUETATERMICALINGUAGEM'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV37Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV34EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A5906EtiquetaTermicaLinguagem',fld:'ETIQUETATERMICALINGUAGEM'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'LAYOUT'"] = [[{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A5906EtiquetaTermicaLinguagem',fld:'ETIQUETATERMICALINGUAGEM'},{av:'A6366EtiquetaTermicaNoColunas',fld:'ETIQUETATERMICANOCOLUNAS'}],[]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV34EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A5906EtiquetaTermicaLinguagem',fld:'ETIQUETATERMICALINGUAGEM'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A5904EtiquetaTermicaDescricao',fld:'ETIQUETATERMICADESCRICAO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV34EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A5906EtiquetaTermicaLinguagem',fld:'ETIQUETATERMICALINGUAGEM'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpLayout", rfrProp:"Value", gxAttId:"Bmplayout"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpLayout", rfrProp:"Tooltiptext", gxAttId:"Bmplayout"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV37Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A5906EtiquetaTermicaLinguagem", rfrProp:"Value", gxAttId:"5906"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodeloetiquetatermica());
