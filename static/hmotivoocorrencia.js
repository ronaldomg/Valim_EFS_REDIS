/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:14.30
*/
gx.evt.autoSkip = false;
gx.define('hmotivoocorrencia', false, function () {
   this.ServerClass =  "hmotivoocorrencia" ;
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
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11jp2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12jp2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17jp2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13jp2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14jp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15jp2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16jp2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e20jp2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21jp2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22jp2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23jp2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25jp2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26jp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,38,41,43,45,47,49,51,54,56,57,61,62,63,64,65,72];
   this.GXLastCtrlId =72;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",60,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmotivoocorrencia",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2984,61,"MOTIVOOCORRENCIAID","","","MotivoOcorrenciaId","int",0,"px",4,4,"right",null,[],2984,"MotivoOcorrenciaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2985,62,"MOTIVOOCORRENCIADESCRICAO","","","MotivoOcorrenciaDescricao","svchar",0,"px",60,60,"left",null,[],2985,"MotivoOcorrenciaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",63,0,"px",17,"px","e20jp2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",64,0,"px",17,"px","e21jp2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",65,0,"px",17,"px","e22jp2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vREMESSARETORNOID",gxz:"ZV28RemessaRetornoId",gxold:"OV28RemessaRetornoId",gxvar:"AV28RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28RemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOID",gx.O.AV28RemessaRetornoId,0)},c2v:function(){gx.O.AV28RemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNODESCRICAO",gxz:"ZV29RemessaRetornoDescricao",gxold:"OV29RemessaRetornoDescricao",gxvar:"AV29RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV29RemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNODESCRICAO",gx.O.AV29RemessaRetornoDescricao,0)},c2v:function(){gx.O.AV29RemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE11",grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIARETORNOID",gxz:"ZV30OcorrenciaRetornoId",gxold:"OV30OcorrenciaRetornoId",gxvar:"AV30OcorrenciaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30OcorrenciaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30OcorrenciaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIARETORNOID",gx.O.AV30OcorrenciaRetornoId,0)},c2v:function(){gx.O.AV30OcorrenciaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOCORRENCIARETORNODESCRICAO",gxz:"ZV31OcorrenciaRetornoDescricao",gxold:"OV31OcorrenciaRetornoDescricao",gxvar:"AV31OcorrenciaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31OcorrenciaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV31OcorrenciaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIARETORNODESCRICAO",gx.O.AV31OcorrenciaRetornoDescricao,0)},c2v:function(){gx.O.AV31OcorrenciaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE6",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"IMAGE1",grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[51]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOTIVOOCORRENCIAID",gxz:"Z2984MotivoOcorrenciaId",gxold:"O2984MotivoOcorrenciaId",gxvar:"A2984MotivoOcorrenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2984MotivoOcorrenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2984MotivoOcorrenciaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOTIVOOCORRENCIAID",row || gx.fn.currentGridRowImpl(60),gx.O.A2984MotivoOcorrenciaId,0)},c2v:function(){gx.O.A2984MotivoOcorrenciaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOTIVOOCORRENCIAID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOTIVOOCORRENCIADESCRICAO",gxz:"Z2985MotivoOcorrenciaDescricao",gxold:"O2985MotivoOcorrenciaDescricao",gxvar:"A2985MotivoOcorrenciaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2985MotivoOcorrenciaDescricao=Value},v2z:function(Value){gx.O.Z2985MotivoOcorrenciaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MOTIVOOCORRENCIADESCRICAO",row || gx.fn.currentGridRowImpl(60),gx.O.A2985MotivoOcorrenciaDescricao,0)},c2v:function(){gx.O.A2985MotivoOcorrenciaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MOTIVOOCORRENCIADESCRICAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(60),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(60),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28RemessaRetornoId = 0 ;
   this.ZV28RemessaRetornoId = 0 ;
   this.OV28RemessaRetornoId = 0 ;
   this.AV29RemessaRetornoDescricao = "" ;
   this.ZV29RemessaRetornoDescricao = "" ;
   this.OV29RemessaRetornoDescricao = "" ;
   this.AV30OcorrenciaRetornoId = 0 ;
   this.ZV30OcorrenciaRetornoId = 0 ;
   this.OV30OcorrenciaRetornoId = 0 ;
   this.AV31OcorrenciaRetornoDescricao = "" ;
   this.ZV31OcorrenciaRetornoDescricao = "" ;
   this.OV31OcorrenciaRetornoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2984MotivoOcorrenciaId = 0 ;
   this.O2984MotivoOcorrenciaId = 0 ;
   this.Z2985MotivoOcorrenciaDescricao = "" ;
   this.O2985MotivoOcorrenciaDescricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28RemessaRetornoId = 0 ;
   this.AV29RemessaRetornoDescricao = "" ;
   this.AV30OcorrenciaRetornoId = 0 ;
   this.AV31OcorrenciaRetornoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2804OcorrenciaRetornoId = 0 ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.A2984MotivoOcorrenciaId = 0 ;
   this.A2985MotivoOcorrenciaDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV32SnRecuperaFiltro = "" ;
   this.AV35Pgmname = "" ;
   this.Events = {"e11jp2_client": ["'ANTERIOR'", true] ,"e12jp2_client": ["'PROXIMO'", true] ,"e17jp2_client": ["VPAGINA.CLICK", true] ,"e13jp2_client": ["'NOVO'", true] ,"e14jp2_client": ["'FECHAR'", true] ,"e15jp2_client": ["'IMPRIMIR'", true] ,"e16jp2_client": ["'PROCURAR'", true] ,"e20jp2_client": ["'ALTERAR'", true] ,"e21jp2_client": ["'EXCLUIR'", true] ,"e22jp2_client": ["'CONSULTAR'", true] ,"e23jp2_client": ["'ATUALIZAPAGINA'", true] ,"e25jp2_client": ["ENTER", true] ,"e26jp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{ctrl:'MOTIVOOCORRENCIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOTIVOOCORRENCIAID","Title")',ctrl:'MOTIVOOCORRENCIAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MOTIVOOCORRENCIADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOTIVOOCORRENCIADESCRICAO","Title")',ctrl:'MOTIVOOCORRENCIADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV31OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV31OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'}],[{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV31OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV40Qtdpaggeradas',fld:'vQTDPAGGERADAS'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV31OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV31OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'A2984MotivoOcorrenciaId',fld:'MOTIVOOCORRENCIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2984MotivoOcorrenciaId',fld:'MOTIVOOCORRENCIAID'},{av:'AV31OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV31OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'A2984MotivoOcorrenciaId',fld:'MOTIVOOCORRENCIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2984MotivoOcorrenciaId',fld:'MOTIVOOCORRENCIAID'},{av:'AV31OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV31OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'A2984MotivoOcorrenciaId',fld:'MOTIVOOCORRENCIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2984MotivoOcorrenciaId',fld:'MOTIVOOCORRENCIAID'},{av:'AV31OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV30OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV35Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmotivoocorrencia());
