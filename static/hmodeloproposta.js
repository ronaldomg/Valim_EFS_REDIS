/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:49:48.9
*/
gx.evt.autoSkip = false;
gx.define('hmodeloproposta', false, function () {
   this.ServerClass =  "hmodeloproposta" ;
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
      this.AV27ModeloPropostaEmpresaId=gx.fn.getControlValue("vMODELOPROPOSTAEMPRESAID") ;
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.s132_client=function()
   {
      if ( this.AV11OrderedBy == 1 || this.AV11OrderedBy == 2 )
      {
         this.AV32DescricaoOrdenacao =  "CÓDIGO"  ;
      }
      else
      {
         this.AV32DescricaoOrdenacao =  "DESCRIÇÃO"  ;
      }
   };
   this.e111462_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121462_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171462_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131462_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141462_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151462_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161462_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201462_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e211462_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e221462_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e231462_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e241462_client=function()
   {
      this.executeServerEvent("'CADASTRARITEM'", true, arguments[0], false, false);
   };
   this.e251462_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e271462_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e281462_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,58];
   this.GXLastCtrlId =58;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodeloproposta",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8297,49,"MODELOPROPOSTAID","","","ModeloPropostaId","int",0,"px",6,6,"right",null,[],8297,"ModeloPropostaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8291,50,"MODELOPROPOSTADESCRICAO","","","ModeloPropostaDescricao","svchar",0,"px",30,30,"left",null,[],8291,"ModeloPropostaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Itens","vITENS",51,0,"px",17,"px","e241462_client","","Item(s)","Image","GridColumnImage");
   GridContainer.addBitmap("&Duplica","vDUPLICA",52,0,"px",17,"px","e201462_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",53,0,"px",17,"px","e211462_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",54,0,"px",17,"px","e221462_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",55,0,"px",17,"px","e231462_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCODIGOMODELOPROPOSTA",gxz:"ZV28CodigoModeloProposta",gxold:"OV28CodigoModeloProposta",gxvar:"AV28CodigoModeloProposta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28CodigoModeloProposta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28CodigoModeloProposta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOMODELOPROPOSTA",gx.O.AV28CodigoModeloProposta,0)},c2v:function(){gx.O.AV28CodigoModeloProposta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOMODELOPROPOSTA",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPROPOSTADESCRICAO",gxz:"ZV29ModeloPropostaDescricao",gxold:"OV29ModeloPropostaDescricao",gxvar:"AV29ModeloPropostaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ModeloPropostaDescricao=Value},v2z:function(Value){gx.O.ZV29ModeloPropostaDescricao=Value},v2c:function(){gx.fn.setControlValue("vMODELOPROPOSTADESCRICAO",gx.O.AV29ModeloPropostaDescricao,0)},c2v:function(){gx.O.AV29ModeloPropostaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPROPOSTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAID",gxz:"Z8297ModeloPropostaId",gxold:"O8297ModeloPropostaId",gxvar:"A8297ModeloPropostaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8297ModeloPropostaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8297ModeloPropostaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOPROPOSTAID",row || gx.fn.currentGridRowImpl(48),gx.O.A8297ModeloPropostaId,0)},c2v:function(){gx.O.A8297ModeloPropostaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOPROPOSTAID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTADESCRICAO",gxz:"Z8291ModeloPropostaDescricao",gxold:"O8291ModeloPropostaDescricao",gxvar:"A8291ModeloPropostaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8291ModeloPropostaDescricao=Value},v2z:function(Value){gx.O.Z8291ModeloPropostaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOPROPOSTADESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A8291ModeloPropostaDescricao,0)},c2v:function(){gx.O.A8291ModeloPropostaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOPROPOSTADESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vITENS",gxz:"ZV30Itens",gxold:"OV30Itens",gxvar:"AV30Itens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30Itens=Value},v2z:function(Value){gx.O.ZV30Itens=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vITENS",row || gx.fn.currentGridRowImpl(48),gx.O.AV30Itens,gx.O.AV43Itens_GXI)},c2v:function(){gx.O.AV43Itens_GXI=this.val_GXI();gx.O.AV30Itens=this.val()},val:function(row){return gx.fn.getGridControlValue("vITENS",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vITENS_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV43Itens_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDUPLICA",gxz:"ZV33Duplica",gxold:"OV33Duplica",gxvar:"AV33Duplica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33Duplica=Value},v2z:function(Value){gx.O.ZV33Duplica=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDUPLICA",row || gx.fn.currentGridRowImpl(48),gx.O.AV33Duplica,gx.O.AV44Duplica_GXI)},c2v:function(){gx.O.AV44Duplica_GXI=this.val_GXI();gx.O.AV33Duplica=this.val()},val:function(row){return gx.fn.getGridControlValue("vDUPLICA",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vDUPLICA_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV44Duplica_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV40Bmpalt_GXI)},c2v:function(){gx.O.AV40Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV40Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV41Bmpexc_GXI)},c2v:function(){gx.O.AV41Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV41Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV42Bmpcon_GXI)},c2v:function(){gx.O.AV42Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV42Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28CodigoModeloProposta = 0 ;
   this.ZV28CodigoModeloProposta = 0 ;
   this.OV28CodigoModeloProposta = 0 ;
   this.AV29ModeloPropostaDescricao = "" ;
   this.ZV29ModeloPropostaDescricao = "" ;
   this.OV29ModeloPropostaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8297ModeloPropostaId = 0 ;
   this.O8297ModeloPropostaId = 0 ;
   this.Z8291ModeloPropostaDescricao = "" ;
   this.O8291ModeloPropostaDescricao = "" ;
   this.ZV30Itens = "" ;
   this.OV30Itens = "" ;
   this.ZV33Duplica = "" ;
   this.OV33Duplica = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28CodigoModeloProposta = 0 ;
   this.AV29ModeloPropostaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A8298ModeloPropostaEmpresaId = "" ;
   this.A8297ModeloPropostaId = 0 ;
   this.A8291ModeloPropostaDescricao = "" ;
   this.AV30Itens = "" ;
   this.AV33Duplica = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV27ModeloPropostaEmpresaId = "" ;
   this.AV34SnRecuperaFiltro = "" ;
   this.AV32DescricaoOrdenacao = "" ;
   this.Events = {"e111462_client": ["'ANTERIOR'", true] ,"e121462_client": ["'PROXIMO'", true] ,"e171462_client": ["VPAGINA.CLICK", true] ,"e131462_client": ["'NOVO'", true] ,"e141462_client": ["'FECHAR'", true] ,"e151462_client": ["'IMPRIMIR'", true] ,"e161462_client": ["'PROCURAR'", true] ,"e201462_client": ["'DUPLICAR'", true] ,"e211462_client": ["'ALTERAR'", true] ,"e221462_client": ["'EXCLUIR'", true] ,"e231462_client": ["'CONSULTAR'", true] ,"e241462_client": ["'CADASTRARITEM'", true] ,"e251462_client": ["'ATUALIZAPAGINA'", true] ,"e271462_client": ["ENTER", true] ,"e281462_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30Itens',fld:'vITENS'},{av:'gx.fn.getCtrlProperty("vITENS","Tooltiptext")',ctrl:'vITENS',prop:'Tooltiptext'},{av:'AV33Duplica',fld:'vDUPLICA'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Tooltiptext")',ctrl:'vDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Jsonclick")',ctrl:'vDUPLICA',prop:'Jsonclick'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30Itens',fld:'vITENS'},{av:'gx.fn.getCtrlProperty("vITENS","Tooltiptext")',ctrl:'vITENS',prop:'Tooltiptext'},{av:'AV33Duplica',fld:'vDUPLICA'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Tooltiptext")',ctrl:'vDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Jsonclick")',ctrl:'vDUPLICA',prop:'Jsonclick'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'MODELOPROPOSTAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOPROPOSTAID","Title")',ctrl:'MODELOPROPOSTAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MODELOPROPOSTADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOPROPOSTADESCRICAO","Title")',ctrl:'MODELOPROPOSTADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30Itens',fld:'vITENS'},{av:'gx.fn.getCtrlProperty("vITENS","Tooltiptext")',ctrl:'vITENS',prop:'Tooltiptext'},{av:'AV33Duplica',fld:'vDUPLICA'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Tooltiptext")',ctrl:'vDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Jsonclick")',ctrl:'vDUPLICA',prop:'Jsonclick'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30Itens',fld:'vITENS'},{av:'gx.fn.getCtrlProperty("vITENS","Tooltiptext")',ctrl:'vITENS',prop:'Tooltiptext'},{av:'AV33Duplica',fld:'vDUPLICA'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Tooltiptext")',ctrl:'vDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Jsonclick")',ctrl:'vDUPLICA',prop:'Jsonclick'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30Itens',fld:'vITENS'},{av:'gx.fn.getCtrlProperty("vITENS","Tooltiptext")',ctrl:'vITENS',prop:'Tooltiptext'},{av:'AV33Duplica',fld:'vDUPLICA'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Tooltiptext")',ctrl:'vDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Jsonclick")',ctrl:'vDUPLICA',prop:'Jsonclick'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV27ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV32DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV35QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV32DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV27ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30Itens',fld:'vITENS'},{av:'gx.fn.getCtrlProperty("vITENS","Tooltiptext")',ctrl:'vITENS',prop:'Tooltiptext'},{av:'AV33Duplica',fld:'vDUPLICA'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Tooltiptext")',ctrl:'vDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Jsonclick")',ctrl:'vDUPLICA',prop:'Jsonclick'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'AV27ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'A8297ModeloPropostaId',fld:'MODELOPROPOSTAID'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8297ModeloPropostaId',fld:'MODELOPROPOSTAID'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A8297ModeloPropostaId',fld:'MODELOPROPOSTAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30Itens',fld:'vITENS'},{av:'gx.fn.getCtrlProperty("vITENS","Tooltiptext")',ctrl:'vITENS',prop:'Tooltiptext'},{av:'AV33Duplica',fld:'vDUPLICA'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Tooltiptext")',ctrl:'vDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Jsonclick")',ctrl:'vDUPLICA',prop:'Jsonclick'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8297ModeloPropostaId',fld:'MODELOPROPOSTAID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8297ModeloPropostaId',fld:'MODELOPROPOSTAID'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A8297ModeloPropostaId',fld:'MODELOPROPOSTAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CADASTRARITEM'"] = [[{av:'A8297ModeloPropostaId',fld:'MODELOPROPOSTAID'},{av:'A8291ModeloPropostaDescricao',fld:'MODELOPROPOSTADESCRICAO'},{av:'A8298ModeloPropostaEmpresaId',fld:'MODELOPROPOSTAEMPRESAID'}],[{av:'A8298ModeloPropostaEmpresaId',fld:'MODELOPROPOSTAEMPRESAID'},{av:'A8291ModeloPropostaDescricao',fld:'MODELOPROPOSTADESCRICAO'},{av:'A8297ModeloPropostaId',fld:'MODELOPROPOSTAID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28CodigoModeloProposta',fld:'vCODIGOMODELOPROPOSTA'},{av:'AV29ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30Itens',fld:'vITENS'},{av:'gx.fn.getCtrlProperty("vITENS","Tooltiptext")',ctrl:'vITENS',prop:'Tooltiptext'},{av:'AV33Duplica',fld:'vDUPLICA'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Tooltiptext")',ctrl:'vDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vDUPLICA","Jsonclick")',ctrl:'vDUPLICA',prop:'Jsonclick'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV27ModeloPropostaEmpresaId", "vMODELOPROPOSTAEMPRESAID", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV27ModeloPropostaEmpresaId", "vMODELOPROPOSTAEMPRESAID", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar({rfrVar:"AV27ModeloPropostaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV30Itens", rfrProp:"Value", gxAttId:"Itens"});
   GridContainer.addRefreshingVar({rfrVar:"AV30Itens", rfrProp:"Tooltiptext", gxAttId:"Itens"});
   GridContainer.addRefreshingVar({rfrVar:"AV33Duplica", rfrProp:"Value", gxAttId:"Duplica"});
   GridContainer.addRefreshingVar({rfrVar:"AV33Duplica", rfrProp:"Tooltiptext", gxAttId:"Duplica"});
   GridContainer.addRefreshingVar({rfrVar:"AV33Duplica", rfrProp:"Jsonclick", gxAttId:"Duplica"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodeloproposta());
