/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:14:24.58
*/
gx.evt.autoSkip = false;
gx.define('hassinatura', false, function () {
   this.ServerClass =  "hassinatura" ;
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
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV30SnConvenio=gx.fn.getControlValue("vSNCONVENIO") ;
   };
   this.e11s12_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12s12_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16s12_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13s12_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14s12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15s12_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19s12_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20s12_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21s12_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23s12_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24s12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25s12_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,61,62];
   this.GXLastCtrlId =62;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hassinatura",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Assinaturatipogrid",47,"vASSINATURATIPOGRID","","","AssinaturaTipoGrid","svchar",0,"px",40,40,"left",null,[],"Assinaturatipogrid","AssinaturaTipoGrid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4223,48,"ASSINATURATIPO","Tipo","","AssinaturaTipo","char",0,"px",20,20,"left",null,[],4223,"AssinaturaTipo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4225,49,"ASSINATURADATAINICIAL","","","AssinaturaDataInicial","date",0,"px",10,10,"right",null,[],4225,"AssinaturaDataInicial",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4226,50,"ASSINATURAPRIMEIRONOME","","","AssinaturaPrimeiroNome","svchar",0,"px",50,50,"left",null,[],4226,"AssinaturaPrimeiroNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4227,51,"ASSINATURAPRIMEIROCARGO","","","AssinaturaPrimeiroCargo","svchar",0,"px",40,40,"left",null,[],4227,"AssinaturaPrimeiroCargo",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px","e19s12_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e20s12_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",54,0,"px",17,"px","e21s12_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vASSINATURATIPO",gxz:"ZV27AssinaturaTipo",gxold:"OV27AssinaturaTipo",gxvar:"AV27AssinaturaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27AssinaturaTipo=Value},v2z:function(Value){gx.O.ZV27AssinaturaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vASSINATURATIPO",gx.O.AV27AssinaturaTipo)},c2v:function(){gx.O.AV27AssinaturaTipo=this.val()},val:function(){return gx.fn.getControlValue("vASSINATURATIPO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vASSINATURADATAINICIAL",gxz:"ZV28AssinaturaDataInicial",gxold:"OV28AssinaturaDataInicial",gxvar:"AV28AssinaturaDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28AssinaturaDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28AssinaturaDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vASSINATURADATAINICIAL",gx.O.AV28AssinaturaDataInicial,0)},c2v:function(){gx.O.AV28AssinaturaDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vASSINATURADATAINICIAL")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vASSINATURATIPOGRID",gxz:"ZV31AssinaturaTipoGrid",gxold:"OV31AssinaturaTipoGrid",gxvar:"AV31AssinaturaTipoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31AssinaturaTipoGrid=Value},v2z:function(Value){gx.O.ZV31AssinaturaTipoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vASSINATURATIPOGRID",row || gx.fn.currentGridRowImpl(46),gx.O.AV31AssinaturaTipoGrid,0)},c2v:function(){gx.O.AV31AssinaturaTipoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vASSINATURATIPOGRID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ASSINATURATIPO",gxz:"Z4223AssinaturaTipo",gxold:"O4223AssinaturaTipo",gxvar:"A4223AssinaturaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4223AssinaturaTipo=Value},v2z:function(Value){gx.O.Z4223AssinaturaTipo=Value},v2c:function(row){gx.fn.setGridControlValue("ASSINATURATIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A4223AssinaturaTipo,0)},c2v:function(){gx.O.A4223AssinaturaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("ASSINATURATIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ASSINATURADATAINICIAL",gxz:"Z4225AssinaturaDataInicial",gxold:"O4225AssinaturaDataInicial",gxvar:"A4225AssinaturaDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4225AssinaturaDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4225AssinaturaDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ASSINATURADATAINICIAL",row || gx.fn.currentGridRowImpl(46),gx.O.A4225AssinaturaDataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4225AssinaturaDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ASSINATURADATAINICIAL",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ASSINATURAPRIMEIRONOME",gxz:"Z4226AssinaturaPrimeiroNome",gxold:"O4226AssinaturaPrimeiroNome",gxvar:"A4226AssinaturaPrimeiroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4226AssinaturaPrimeiroNome=Value},v2z:function(Value){gx.O.Z4226AssinaturaPrimeiroNome=Value},v2c:function(row){gx.fn.setGridControlValue("ASSINATURAPRIMEIRONOME",row || gx.fn.currentGridRowImpl(46),gx.O.A4226AssinaturaPrimeiroNome,0)},c2v:function(){gx.O.A4226AssinaturaPrimeiroNome=this.val()},val:function(row){return gx.fn.getGridControlValue("ASSINATURAPRIMEIRONOME",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ASSINATURAPRIMEIROCARGO",gxz:"Z4227AssinaturaPrimeiroCargo",gxold:"O4227AssinaturaPrimeiroCargo",gxvar:"A4227AssinaturaPrimeiroCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4227AssinaturaPrimeiroCargo=Value},v2z:function(Value){gx.O.Z4227AssinaturaPrimeiroCargo=Value},v2c:function(row){gx.fn.setGridControlValue("ASSINATURAPRIMEIROCARGO",row || gx.fn.currentGridRowImpl(46),gx.O.A4227AssinaturaPrimeiroCargo,0)},c2v:function(){gx.O.A4227AssinaturaPrimeiroCargo=this.val()},val:function(row){return gx.fn.getGridControlValue("ASSINATURAPRIMEIROCARGO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"JS", format:2,grid:0};
   this.AV27AssinaturaTipo = "" ;
   this.ZV27AssinaturaTipo = "" ;
   this.OV27AssinaturaTipo = "" ;
   this.AV28AssinaturaDataInicial = gx.date.nullDate() ;
   this.ZV28AssinaturaDataInicial = gx.date.nullDate() ;
   this.OV28AssinaturaDataInicial = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV31AssinaturaTipoGrid = "" ;
   this.OV31AssinaturaTipoGrid = "" ;
   this.Z4223AssinaturaTipo = "" ;
   this.O4223AssinaturaTipo = "" ;
   this.Z4225AssinaturaDataInicial = gx.date.nullDate() ;
   this.O4225AssinaturaDataInicial = gx.date.nullDate() ;
   this.Z4226AssinaturaPrimeiroNome = "" ;
   this.O4226AssinaturaPrimeiroNome = "" ;
   this.Z4227AssinaturaPrimeiroCargo = "" ;
   this.O4227AssinaturaPrimeiroCargo = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27AssinaturaTipo = "" ;
   this.AV28AssinaturaDataInicial = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A4224AssinaturaEmpresaId = "" ;
   this.AV31AssinaturaTipoGrid = "" ;
   this.A4223AssinaturaTipo = "" ;
   this.A4225AssinaturaDataInicial = gx.date.nullDate() ;
   this.A4226AssinaturaPrimeiroNome = "" ;
   this.A4227AssinaturaPrimeiroCargo = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV32SnRecuperaFiltro = "" ;
   this.AV35Pgmname = "" ;
   this.AV30SnConvenio = "" ;
   this.Events = {"e11s12_client": ["'ANTERIOR'", true] ,"e12s12_client": ["'PROXIMO'", true] ,"e16s12_client": ["VPAGINA.CLICK", true] ,"e13s12_client": ["'NOVO'", true] ,"e14s12_client": ["'FECHAR'", true] ,"e15s12_client": ["'PROCURAR'", true] ,"e19s12_client": ["'ALTERAR'", true] ,"e20s12_client": ["'EXCLUIR'", true] ,"e21s12_client": ["'CONSULTAR'", true] ,"e23s12_client": ["'ATUALIZAPAGINA'", true] ,"e24s12_client": ["ENTER", true] ,"e25s12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'AV30SnConvenio',fld:'vSNCONVENIO',hsh:true}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'AV30SnConvenio',fld:'vSNCONVENIO',hsh:true}],[{ctrl:'vASSINATURATIPOGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vASSINATURATIPOGRID","Title")',ctrl:'vASSINATURATIPOGRID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ASSINATURADATAINICIAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ASSINATURADATAINICIAL","Title")',ctrl:'ASSINATURADATAINICIAL',prop:'Title'},{ctrl:'ASSINATURAPRIMEIRONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ASSINATURAPRIMEIRONOME","Title")',ctrl:'ASSINATURAPRIMEIRONOME',prop:'Title'},{ctrl:'ASSINATURAPRIMEIROCARGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ASSINATURAPRIMEIROCARGO","Title")',ctrl:'ASSINATURAPRIMEIROCARGO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'AV30SnConvenio',fld:'vSNCONVENIO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'AV30SnConvenio',fld:'vSNCONVENIO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'AV30SnConvenio',fld:'vSNCONVENIO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'Gx_date',fld:'vTODAY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV29Data',fld:'vDATA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'AV30SnConvenio',fld:'vSNCONVENIO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'A4225AssinaturaDataInicial',fld:'ASSINATURADATAINICIAL'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A4225AssinaturaDataInicial',fld:'ASSINATURADATAINICIAL'},{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'A4225AssinaturaDataInicial',fld:'ASSINATURADATAINICIAL'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A4225AssinaturaDataInicial',fld:'ASSINATURADATAINICIAL'},{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'A4225AssinaturaDataInicial',fld:'ASSINATURADATAINICIAL'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A4225AssinaturaDataInicial',fld:'ASSINATURADATAINICIAL'},{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'AV30SnConvenio',fld:'vSNCONVENIO',hsh:true}],[{av:'AV31AssinaturaTipoGrid',fld:'vASSINATURATIPOGRID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV28AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A4223AssinaturaTipo',fld:'ASSINATURATIPO'},{av:'AV30SnConvenio',fld:'vSNCONVENIO',hsh:true}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV30SnConvenio", "vSNCONVENIO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV30SnConvenio", "vSNCONVENIO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV35Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A4223AssinaturaTipo", rfrProp:"Value", gxAttId:"4223"});
   GridContainer.addRefreshingVar({rfrVar:"AV30SnConvenio"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hassinatura());
