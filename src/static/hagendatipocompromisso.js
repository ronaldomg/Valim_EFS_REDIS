/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:3:33.39
*/
gx.evt.autoSkip = false;
gx.define('hagendatipocompromisso', false, function () {
   this.ServerClass =  "hagendatipocompromisso" ;
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
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e111br2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121br2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171br2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131br2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141br2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151br2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161br2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201br2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211br2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e221br2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e231br2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e251br2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e261br2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,62];
   this.GXLastCtrlId =62;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hagendatipocompromisso",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8568,49,"AGENDATIPOCOMPROMISSOID","","","AgendaTipoCompromissoId","int",0,"px",4,4,"right",null,[],8568,"AgendaTipoCompromissoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8572,50,"AGENDATIPOCOMPROMISSODESC","","","AgendaTipoCompromissoDesc","svchar",0,"px",20,20,"left",null,[],8572,"AgendaTipoCompromissoDesc",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",51,0,"px",17,"px","e201br2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e211br2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e221br2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8574,54,"AGENDATIPOCOMPROMISSOCORFUNDO","Cor do Fundo","","AgendaTipoCompromissoCorFundo","int",0,"px",2,2,"right",null,[],8574,"AgendaTipoCompromissoCorFundo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8573,55,"AGENDATIPOCOMPROMISSOCORLETRA","Cor da Letra","","AgendaTipoCompromissoCorLetra","int",0,"px",2,2,"right",null,[],8573,"AgendaTipoCompromissoCorLetra",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAGENDATIPOCOMPROMISSOID",gxz:"ZV27AgendaTipoCompromissoId",gxold:"OV27AgendaTipoCompromissoId",gxvar:"AV27AgendaTipoCompromissoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27AgendaTipoCompromissoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27AgendaTipoCompromissoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAGENDATIPOCOMPROMISSOID",gx.O.AV27AgendaTipoCompromissoId,0)},c2v:function(){gx.O.AV27AgendaTipoCompromissoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAGENDATIPOCOMPROMISSOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAGENDATIPOCOMPROMISSODESC",gxz:"ZV28AgendaTipoCompromissoDesc",gxold:"OV28AgendaTipoCompromissoDesc",gxvar:"AV28AgendaTipoCompromissoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28AgendaTipoCompromissoDesc=Value},v2z:function(Value){gx.O.ZV28AgendaTipoCompromissoDesc=Value},v2c:function(){gx.fn.setControlValue("vAGENDATIPOCOMPROMISSODESC",gx.O.AV28AgendaTipoCompromissoDesc,0)},c2v:function(){gx.O.AV28AgendaTipoCompromissoDesc=this.val()},val:function(){return gx.fn.getControlValue("vAGENDATIPOCOMPROMISSODESC")},nac:gx.falseFn};
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
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSOID",gxz:"Z8568AgendaTipoCompromissoId",gxold:"O8568AgendaTipoCompromissoId",gxvar:"A8568AgendaTipoCompromissoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8568AgendaTipoCompromissoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8568AgendaTipoCompromissoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AGENDATIPOCOMPROMISSOID",row || gx.fn.currentGridRowImpl(48),gx.O.A8568AgendaTipoCompromissoId,0)},c2v:function(){gx.O.A8568AgendaTipoCompromissoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AGENDATIPOCOMPROMISSOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSODESC",gxz:"Z8572AgendaTipoCompromissoDesc",gxold:"O8572AgendaTipoCompromissoDesc",gxvar:"A8572AgendaTipoCompromissoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8572AgendaTipoCompromissoDesc=Value},v2z:function(Value){gx.O.Z8572AgendaTipoCompromissoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("AGENDATIPOCOMPROMISSODESC",row || gx.fn.currentGridRowImpl(48),gx.O.A8572AgendaTipoCompromissoDesc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8572AgendaTipoCompromissoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("AGENDATIPOCOMPROMISSODESC",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSOCORFUNDO",gxz:"Z8574AgendaTipoCompromissoCorFundo",gxold:"O8574AgendaTipoCompromissoCorFundo",gxvar:"A8574AgendaTipoCompromissoCorFundo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8574AgendaTipoCompromissoCorFundo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8574AgendaTipoCompromissoCorFundo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AGENDATIPOCOMPROMISSOCORFUNDO",row || gx.fn.currentGridRowImpl(48),gx.O.A8574AgendaTipoCompromissoCorFundo,0)},c2v:function(){gx.O.A8574AgendaTipoCompromissoCorFundo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AGENDATIPOCOMPROMISSOCORFUNDO",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSOCORLETRA",gxz:"Z8573AgendaTipoCompromissoCorLetra",gxold:"O8573AgendaTipoCompromissoCorLetra",gxvar:"A8573AgendaTipoCompromissoCorLetra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8573AgendaTipoCompromissoCorLetra=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8573AgendaTipoCompromissoCorLetra=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AGENDATIPOCOMPROMISSOCORLETRA",row || gx.fn.currentGridRowImpl(48),gx.O.A8573AgendaTipoCompromissoCorLetra,0)},c2v:function(){gx.O.A8573AgendaTipoCompromissoCorLetra=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AGENDATIPOCOMPROMISSOCORLETRA",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27AgendaTipoCompromissoId = 0 ;
   this.ZV27AgendaTipoCompromissoId = 0 ;
   this.OV27AgendaTipoCompromissoId = 0 ;
   this.AV28AgendaTipoCompromissoDesc = "" ;
   this.ZV28AgendaTipoCompromissoDesc = "" ;
   this.OV28AgendaTipoCompromissoDesc = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8568AgendaTipoCompromissoId = 0 ;
   this.O8568AgendaTipoCompromissoId = 0 ;
   this.Z8572AgendaTipoCompromissoDesc = "" ;
   this.O8572AgendaTipoCompromissoDesc = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z8574AgendaTipoCompromissoCorFundo = 0 ;
   this.O8574AgendaTipoCompromissoCorFundo = 0 ;
   this.Z8573AgendaTipoCompromissoCorLetra = 0 ;
   this.O8573AgendaTipoCompromissoCorLetra = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27AgendaTipoCompromissoId = 0 ;
   this.AV28AgendaTipoCompromissoDesc = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A8568AgendaTipoCompromissoId = 0 ;
   this.A8572AgendaTipoCompromissoDesc = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A8574AgendaTipoCompromissoCorFundo = 0 ;
   this.A8573AgendaTipoCompromissoCorLetra = 0 ;
   this.AV31SnRecuperaFiltro = "" ;
   this.AV34Pgmname = "" ;
   this.Events = {"e111br2_client": ["'ANTERIOR'", true] ,"e121br2_client": ["'PROXIMO'", true] ,"e171br2_client": ["VPAGINA.CLICK", true] ,"e131br2_client": ["'NOVO'", true] ,"e141br2_client": ["'FECHAR'", true] ,"e151br2_client": ["'IMPRIMIR'", true] ,"e161br2_client": ["'PROCURAR'", true] ,"e201br2_client": ["'ALTERAR'", true] ,"e211br2_client": ["'EXCLUIR'", true] ,"e221br2_client": ["'CONSULTAR'", true] ,"e231br2_client": ["'ATUALIZAPAGINA'", true] ,"e251br2_client": ["ENTER", true] ,"e261br2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{ctrl:'AGENDATIPOCOMPROMISSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("AGENDATIPOCOMPROMISSOID","Title")',ctrl:'AGENDATIPOCOMPROMISSOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'AGENDATIPOCOMPROMISSODESC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("AGENDATIPOCOMPROMISSODESC","Title")',ctrl:'AGENDATIPOCOMPROMISSODESC',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV35Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'A8572AgendaTipoCompromissoDesc',fld:'AGENDATIPOCOMPROMISSODESC'},{av:'A8573AgendaTipoCompromissoCorLetra',fld:'AGENDATIPOCOMPROMISSOCORLETRA'},{av:'A8574AgendaTipoCompromissoCorFundo',fld:'AGENDATIPOCOMPROMISSOCORFUNDO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A8574AgendaTipoCompromissoCorFundo',fld:'AGENDATIPOCOMPROMISSOCORFUNDO'},{av:'A8573AgendaTipoCompromissoCorLetra',fld:'AGENDATIPOCOMPROMISSOCORLETRA'},{av:'A8572AgendaTipoCompromissoDesc',fld:'AGENDATIPOCOMPROMISSODESC'},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'A8572AgendaTipoCompromissoDesc',fld:'AGENDATIPOCOMPROMISSODESC'},{av:'A8573AgendaTipoCompromissoCorLetra',fld:'AGENDATIPOCOMPROMISSOCORLETRA'},{av:'A8574AgendaTipoCompromissoCorFundo',fld:'AGENDATIPOCOMPROMISSOCORFUNDO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A8574AgendaTipoCompromissoCorFundo',fld:'AGENDATIPOCOMPROMISSOCORFUNDO'},{av:'A8573AgendaTipoCompromissoCorLetra',fld:'AGENDATIPOCOMPROMISSOCORLETRA'},{av:'A8572AgendaTipoCompromissoDesc',fld:'AGENDATIPOCOMPROMISSODESC'},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'A8572AgendaTipoCompromissoDesc',fld:'AGENDATIPOCOMPROMISSODESC'},{av:'A8573AgendaTipoCompromissoCorLetra',fld:'AGENDATIPOCOMPROMISSOCORLETRA'},{av:'A8574AgendaTipoCompromissoCorFundo',fld:'AGENDATIPOCOMPROMISSOCORFUNDO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A8574AgendaTipoCompromissoCorFundo',fld:'AGENDATIPOCOMPROMISSOCORFUNDO'},{av:'A8573AgendaTipoCompromissoCorLetra',fld:'AGENDATIPOCOMPROMISSOCORLETRA'},{av:'A8572AgendaTipoCompromissoDesc',fld:'AGENDATIPOCOMPROMISSODESC'},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV28AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV34Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hagendatipocompromisso());
