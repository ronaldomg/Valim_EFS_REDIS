/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:38.69
*/
gx.evt.autoSkip = false;
gx.define('hocorrenciaretorno', false, function () {
   this.ServerClass =  "hocorrenciaretorno" ;
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
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11iz2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12iz2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17iz2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13iz2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14iz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15iz2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16iz2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e21iz2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22iz2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23iz2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e18iz2_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, null, false, false);
   };
   this.e24iz2_client=function()
   {
      this.executeServerEvent("'MOTIVOOCORRENCIA'", true, arguments[0], false, false);
   };
   this.e25iz2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e27iz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28iz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,39,41,44,46,47,51,52,53,54,55,56,57,63];
   this.GXLastCtrlId =63;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",50,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hocorrenciaretorno",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2804,51,"OCORRENCIARETORNOID","","","OcorrenciaRetornoId","int",0,"px",4,4,"right",null,[],2804,"OcorrenciaRetornoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2805,52,"OCORRENCIARETORNODESCRICAO","","","OcorrenciaRetornoDescricao","svchar",0,"px",40,40,"left",null,[],2805,"OcorrenciaRetornoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2911,53,"OCORRENCIARETORNOTIPO","Tipo de Ocorrência","OcorrenciaRetornoTipo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpmotoc","vBMPMOTOC",54,0,"px",17,"px","e24iz2_client","","Motivo Ocorrência","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",55,0,"px",17,"px","e21iz2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",56,0,"px",17,"px","e22iz2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",57,0,"px",17,"px","e23iz2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vREMESSARETORNOID",gxz:"ZV30RemessaRetornoId",gxold:"OV30RemessaRetornoId",gxvar:"AV30RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30RemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOID",gx.O.AV30RemessaRetornoId,0)},c2v:function(){gx.O.AV30RemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNODESCRICAO",gxz:"ZV31RemessaRetornoDescricao",gxold:"OV31RemessaRetornoDescricao",gxvar:"AV31RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV31RemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNODESCRICAO",gx.O.AV31RemessaRetornoDescricao,0)},c2v:function(){gx.O.AV31RemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE3",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"IMAGE3",grid:0};
   GXValidFnc[41]={fld:"TABLE5",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIARETORNOID",gxz:"Z2804OcorrenciaRetornoId",gxold:"O2804OcorrenciaRetornoId",gxvar:"A2804OcorrenciaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2804OcorrenciaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2804OcorrenciaRetornoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIARETORNOID",row || gx.fn.currentGridRowImpl(50),gx.O.A2804OcorrenciaRetornoId,0)},c2v:function(){gx.O.A2804OcorrenciaRetornoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIARETORNOID",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIARETORNODESCRICAO",gxz:"Z2805OcorrenciaRetornoDescricao",gxold:"O2805OcorrenciaRetornoDescricao",gxvar:"A2805OcorrenciaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2805OcorrenciaRetornoDescricao=Value},v2z:function(Value){gx.O.Z2805OcorrenciaRetornoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIARETORNODESCRICAO",row || gx.fn.currentGridRowImpl(50),gx.O.A2805OcorrenciaRetornoDescricao,0)},c2v:function(){gx.O.A2805OcorrenciaRetornoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIARETORNODESCRICAO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIARETORNOTIPO",gxz:"Z2911OcorrenciaRetornoTipo",gxold:"O2911OcorrenciaRetornoTipo",gxvar:"A2911OcorrenciaRetornoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2911OcorrenciaRetornoTipo=Value},v2z:function(Value){gx.O.Z2911OcorrenciaRetornoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIARETORNOTIPO",row || gx.fn.currentGridRowImpl(50),gx.O.A2911OcorrenciaRetornoTipo)},c2v:function(){gx.O.A2911OcorrenciaRetornoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIARETORNOTIPO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPMOTOC",gxz:"ZV32bmpMotOc",gxold:"OV32bmpMotOc",gxvar:"AV32bmpMotOc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpMotOc=Value},v2z:function(Value){gx.O.ZV32bmpMotOc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPMOTOC",row || gx.fn.currentGridRowImpl(50),gx.O.AV32bmpMotOc,gx.O.AV39Bmpmotoc_GXI)},c2v:function(){gx.O.AV39Bmpmotoc_GXI=this.val_GXI();gx.O.AV32bmpMotOc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPMOTOC",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPMOTOC_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV39Bmpmotoc_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(50),gx.O.AV7bmpAlt,gx.O.AV40Bmpalt_GXI)},c2v:function(){gx.O.AV40Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV40Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50),gx.O.AV8bmpExc,gx.O.AV41Bmpexc_GXI)},c2v:function(){gx.O.AV41Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV41Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(50),gx.O.AV16bmpCon,gx.O.AV42Bmpcon_GXI)},c2v:function(){gx.O.AV42Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV42Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV30RemessaRetornoId = 0 ;
   this.ZV30RemessaRetornoId = 0 ;
   this.OV30RemessaRetornoId = 0 ;
   this.AV31RemessaRetornoDescricao = "" ;
   this.ZV31RemessaRetornoDescricao = "" ;
   this.OV31RemessaRetornoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2804OcorrenciaRetornoId = 0 ;
   this.O2804OcorrenciaRetornoId = 0 ;
   this.Z2805OcorrenciaRetornoDescricao = "" ;
   this.O2805OcorrenciaRetornoDescricao = "" ;
   this.Z2911OcorrenciaRetornoTipo = "" ;
   this.O2911OcorrenciaRetornoTipo = "" ;
   this.ZV32bmpMotOc = "" ;
   this.OV32bmpMotOc = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV30RemessaRetornoId = 0 ;
   this.AV31RemessaRetornoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.A2804OcorrenciaRetornoId = 0 ;
   this.A2805OcorrenciaRetornoDescricao = "" ;
   this.A2911OcorrenciaRetornoTipo = "" ;
   this.AV32bmpMotOc = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.Events = {"e11iz2_client": ["'ANTERIOR'", true] ,"e12iz2_client": ["'PROXIMO'", true] ,"e17iz2_client": ["VPAGINA.CLICK", true] ,"e13iz2_client": ["'NOVO'", true] ,"e14iz2_client": ["'FECHAR'", true] ,"e15iz2_client": ["'IMPRIMIR'", true] ,"e16iz2_client": ["'PROCURAR'", true] ,"e21iz2_client": ["'ALTERAR'", true] ,"e22iz2_client": ["'EXCLUIR'", true] ,"e23iz2_client": ["'CONSULTAR'", true] ,"e18iz2_client": ["'COPIAR'", true] ,"e24iz2_client": ["'MOTIVOOCORRENCIA'", true] ,"e25iz2_client": ["'ATUALIZAPAGINA'", true] ,"e27iz2_client": ["ENTER", true] ,"e28iz2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV32bmpMotOc',fld:'vBMPMOTOC'},{av:'gx.fn.getCtrlProperty("vBMPMOTOC","Tooltiptext")',ctrl:'vBMPMOTOC',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV32bmpMotOc',fld:'vBMPMOTOC'},{av:'gx.fn.getCtrlProperty("vBMPMOTOC","Tooltiptext")',ctrl:'vBMPMOTOC',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'OCORRENCIARETORNOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIARETORNOID","Title")',ctrl:'OCORRENCIARETORNOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'OCORRENCIARETORNODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIARETORNODESCRICAO","Title")',ctrl:'OCORRENCIARETORNODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV28OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV29OcorrenciaRetornoSnErro',fld:'vOCORRENCIARETORNOSNERRO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV32bmpMotOc',fld:'vBMPMOTOC'},{av:'gx.fn.getCtrlProperty("vBMPMOTOC","Tooltiptext")',ctrl:'vBMPMOTOC',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV28OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV29OcorrenciaRetornoSnErro',fld:'vOCORRENCIARETORNOSNERRO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV32bmpMotOc',fld:'vBMPMOTOC'},{av:'gx.fn.getCtrlProperty("vBMPMOTOC","Tooltiptext")',ctrl:'vBMPMOTOC',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV27OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV28OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV29OcorrenciaRetornoSnErro',fld:'vOCORRENCIARETORNOSNERRO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV32bmpMotOc',fld:'vBMPMOTOC'},{av:'gx.fn.getCtrlProperty("vBMPMOTOC","Tooltiptext")',ctrl:'vBMPMOTOC',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV28OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV29OcorrenciaRetornoSnErro',fld:'vOCORRENCIARETORNOSNERRO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV28OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV29OcorrenciaRetornoSnErro',fld:'vOCORRENCIARETORNOSNERRO'}],[{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV38Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV32bmpMotOc',fld:'vBMPMOTOC'},{av:'gx.fn.getCtrlProperty("vBMPMOTOC","Tooltiptext")',ctrl:'vBMPMOTOC',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV28OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV29OcorrenciaRetornoSnErro',fld:'vOCORRENCIARETORNOSNERRO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'A2804OcorrenciaRetornoId',fld:'OCORRENCIARETORNOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV28OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV29OcorrenciaRetornoSnErro',fld:'vOCORRENCIARETORNOSNERRO'}],[{av:'A2804OcorrenciaRetornoId',fld:'OCORRENCIARETORNOID'},{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'A2804OcorrenciaRetornoId',fld:'OCORRENCIARETORNOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV28OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV29OcorrenciaRetornoSnErro',fld:'vOCORRENCIARETORNOSNERRO'}],[{av:'A2804OcorrenciaRetornoId',fld:'OCORRENCIARETORNOID'},{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'A2804OcorrenciaRetornoId',fld:'OCORRENCIARETORNOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV28OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV29OcorrenciaRetornoSnErro',fld:'vOCORRENCIARETORNOSNERRO'}],[{av:'A2804OcorrenciaRetornoId',fld:'OCORRENCIARETORNOID'},{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV32bmpMotOc',fld:'vBMPMOTOC'},{av:'gx.fn.getCtrlProperty("vBMPMOTOC","Tooltiptext")',ctrl:'vBMPMOTOC',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["'MOTIVOOCORRENCIA'"] = [[{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'A2804OcorrenciaRetornoId',fld:'OCORRENCIARETORNOID'},{av:'A2805OcorrenciaRetornoDescricao',fld:'OCORRENCIARETORNODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV28OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV29OcorrenciaRetornoSnErro',fld:'vOCORRENCIARETORNOSNERRO'}],[{av:'A2805OcorrenciaRetornoDescricao',fld:'OCORRENCIARETORNODESCRICAO'},{av:'A2804OcorrenciaRetornoId',fld:'OCORRENCIARETORNOID'},{av:'AV31RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV32bmpMotOc',fld:'vBMPMOTOC'},{av:'gx.fn.getCtrlProperty("vBMPMOTOC","Tooltiptext")',ctrl:'vBMPMOTOC',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpMotOc", rfrProp:"Value", gxAttId:"Bmpmotoc"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpMotOc", rfrProp:"Tooltiptext", gxAttId:"Bmpmotoc"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hocorrenciaretorno());
