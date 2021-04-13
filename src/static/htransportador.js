/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:9:29.95
*/
gx.evt.autoSkip = false;
gx.define('htransportador', false, function () {
   this.ServerClass =  "htransportador" ;
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
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11qm2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12qm2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17qm2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13qm2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14qm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15qm2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16qm2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20qm2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21qm2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22qm2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24qm2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25qm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26qm2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,33,36,39,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66,67,68,69,70,71,78,79];
   this.GXLastCtrlId =79;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htransportador",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3379,59,"TRANSPORTADORCODIGO","","","TransportadorCodigo","int",0,"px",6,6,"right",null,[],3379,"TransportadorCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Nometransportador",60,"vNOMETRANSPORTADOR","","","NomeTransportador","svchar",0,"px",38,38,"left",null,[],"Nometransportador","NomeTransportador",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3798,61,"TRANSPORTADORNOME","Nome Transportador","","TransportadorNome","svchar",0,"px",60,60,"left",null,[],3798,"TransportadorNome",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Cpfcnpj",62,"vCPFCNPJ","CPF/CNPJ","","CPFCNPJ","char",0,"px",18,18,"left",null,[],"Cpfcnpj","CPFCNPJ",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4153,63,"TRANSPORTADORPLACA","","","TransportadorPlaca","svchar",0,"px",10,10,"left",null,[],4153,"TransportadorPlaca",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4151,64,"TRANSPORTADORTELEFONE","","","TransportadorTelefone","svchar",0,"px",15,15,"left",null,[],4151,"TransportadorTelefone",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4152,65,"TRANSPORTADORCONTATO","","","TransportadorContato","svchar",0,"px",40,40,"left",null,[],4152,"TransportadorContato",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",66,0,"px",17,"px","e20qm2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",67,0,"px",17,"px","e21qm2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",68,0,"px",17,"px","e22qm2_client","","Cons","Image","GridColumnImage");
   GridContainer.addComboBox(4141,69,"TRANSPORTADORTPPESSOA","Tipo Pessoa","TransportadorTpPessoa","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit(4143,70,"TRANSPORTADORCNPJ","CNPJ","","TransportadorCNPJ","char",0,"px",18,18,"left",null,[],4143,"TransportadorCNPJ",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4142,71,"TRANSPORTADORCPF","CPF","","TransportadorCPF","char",0,"px",14,14,"left",null,[],4142,"TransportadorCPF",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSPORTADORCODIGO",gxz:"ZV28TransportadorCodigo",gxold:"OV28TransportadorCodigo",gxvar:"AV28TransportadorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TransportadorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28TransportadorCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORCODIGO",gx.O.AV28TransportadorCodigo,0)},c2v:function(){gx.O.AV28TransportadorCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSPORTADORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSPORTADORNOME",gxz:"ZV29TransportadorNome",gxold:"OV29TransportadorNome",gxvar:"AV29TransportadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TransportadorNome=Value},v2z:function(Value){gx.O.ZV29TransportadorNome=Value},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORNOME",gx.O.AV29TransportadorNome,0)},c2v:function(){gx.O.AV29TransportadorNome=this.val()},val:function(){return gx.fn.getControlValue("vTRANSPORTADORNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSPORTADORCPF",gxz:"ZV31TransportadorCPF",gxold:"OV31TransportadorCPF",gxvar:"AV31TransportadorCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TransportadorCPF=Value},v2z:function(Value){gx.O.ZV31TransportadorCPF=Value},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORCPF",gx.O.AV31TransportadorCPF,0)},c2v:function(){gx.O.AV31TransportadorCPF=this.val()},val:function(){return gx.fn.getControlValue("vTRANSPORTADORCPF")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSPORTADORCNPJ",gxz:"ZV27TransportadorCNPJ",gxold:"OV27TransportadorCNPJ",gxvar:"AV27TransportadorCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TransportadorCNPJ=Value},v2z:function(Value){gx.O.ZV27TransportadorCNPJ=Value},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORCNPJ",gx.O.AV27TransportadorCNPJ,0)},c2v:function(){gx.O.AV27TransportadorCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vTRANSPORTADORCNPJ")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TABLE8",grid:0};
   GXValidFnc[39]={fld:"IMAGE2",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"IMAGE1",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORCODIGO",gxz:"Z3379TransportadorCodigo",gxold:"O3379TransportadorCodigo",gxvar:"A3379TransportadorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3379TransportadorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3379TransportadorCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORCODIGO",row || gx.fn.currentGridRowImpl(58),gx.O.A3379TransportadorCodigo,0)},c2v:function(){gx.O.A3379TransportadorCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSPORTADORCODIGO",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:38,dec:0,sign:false,ro:0,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNOMETRANSPORTADOR",gxz:"ZV32NomeTransportador",gxold:"OV32NomeTransportador",gxvar:"AV32NomeTransportador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32NomeTransportador=Value},v2z:function(Value){gx.O.ZV32NomeTransportador=Value},v2c:function(row){gx.fn.setGridControlValue("vNOMETRANSPORTADOR",row || gx.fn.currentGridRowImpl(58),gx.O.AV32NomeTransportador,0)},c2v:function(){gx.O.AV32NomeTransportador=this.val()},val:function(row){return gx.fn.getGridControlValue("vNOMETRANSPORTADOR",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORNOME",gxz:"Z3798TransportadorNome",gxold:"O3798TransportadorNome",gxvar:"A3798TransportadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3798TransportadorNome=Value},v2z:function(Value){gx.O.Z3798TransportadorNome=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORNOME",row || gx.fn.currentGridRowImpl(58),gx.O.A3798TransportadorNome,0)},c2v:function(){gx.O.A3798TransportadorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORNOME",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:0,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCPFCNPJ",gxz:"ZV30CPFCNPJ",gxold:"OV30CPFCNPJ",gxvar:"AV30CPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30CPFCNPJ=Value},v2z:function(Value){gx.O.ZV30CPFCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("vCPFCNPJ",row || gx.fn.currentGridRowImpl(58),gx.O.AV30CPFCNPJ,0)},c2v:function(){gx.O.AV30CPFCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("vCPFCNPJ",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORPLACA",gxz:"Z4153TransportadorPlaca",gxold:"O4153TransportadorPlaca",gxvar:"A4153TransportadorPlaca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4153TransportadorPlaca=Value},v2z:function(Value){gx.O.Z4153TransportadorPlaca=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORPLACA",row || gx.fn.currentGridRowImpl(58),gx.O.A4153TransportadorPlaca,0)},c2v:function(){gx.O.A4153TransportadorPlaca=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORPLACA",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORTELEFONE",gxz:"Z4151TransportadorTelefone",gxold:"O4151TransportadorTelefone",gxvar:"A4151TransportadorTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4151TransportadorTelefone=Value},v2z:function(Value){gx.O.Z4151TransportadorTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORTELEFONE",row || gx.fn.currentGridRowImpl(58),gx.O.A4151TransportadorTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4151TransportadorTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORTELEFONE",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORCONTATO",gxz:"Z4152TransportadorContato",gxold:"O4152TransportadorContato",gxvar:"A4152TransportadorContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4152TransportadorContato=Value},v2z:function(Value){gx.O.Z4152TransportadorContato=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORCONTATO",row || gx.fn.currentGridRowImpl(58),gx.O.A4152TransportadorContato,0)},c2v:function(){gx.O.A4152TransportadorContato=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORCONTATO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORTPPESSOA",gxz:"Z4141TransportadorTpPessoa",gxold:"O4141TransportadorTpPessoa",gxvar:"A4141TransportadorTpPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4141TransportadorTpPessoa=Value},v2z:function(Value){gx.O.Z4141TransportadorTpPessoa=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSPORTADORTPPESSOA",row || gx.fn.currentGridRowImpl(58),gx.O.A4141TransportadorTpPessoa);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4141TransportadorTpPessoa=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORTPPESSOA",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORCNPJ",gxz:"Z4143TransportadorCNPJ",gxold:"O4143TransportadorCNPJ",gxvar:"A4143TransportadorCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4143TransportadorCNPJ=Value},v2z:function(Value){gx.O.Z4143TransportadorCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORCNPJ",row || gx.fn.currentGridRowImpl(58),gx.O.A4143TransportadorCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4143TransportadorCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORCNPJ",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORCPF",gxz:"Z4142TransportadorCPF",gxold:"O4142TransportadorCPF",gxvar:"A4142TransportadorCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4142TransportadorCPF=Value},v2z:function(Value){gx.O.Z4142TransportadorCPF=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORCPF",row || gx.fn.currentGridRowImpl(58),gx.O.A4142TransportadorCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4142TransportadorCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORCPF",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"JS", format:2,grid:0};
   this.AV28TransportadorCodigo = 0 ;
   this.ZV28TransportadorCodigo = 0 ;
   this.OV28TransportadorCodigo = 0 ;
   this.AV29TransportadorNome = "" ;
   this.ZV29TransportadorNome = "" ;
   this.OV29TransportadorNome = "" ;
   this.AV31TransportadorCPF = "" ;
   this.ZV31TransportadorCPF = "" ;
   this.OV31TransportadorCPF = "" ;
   this.AV27TransportadorCNPJ = "" ;
   this.ZV27TransportadorCNPJ = "" ;
   this.OV27TransportadorCNPJ = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3379TransportadorCodigo = 0 ;
   this.O3379TransportadorCodigo = 0 ;
   this.ZV32NomeTransportador = "" ;
   this.OV32NomeTransportador = "" ;
   this.Z3798TransportadorNome = "" ;
   this.O3798TransportadorNome = "" ;
   this.ZV30CPFCNPJ = "" ;
   this.OV30CPFCNPJ = "" ;
   this.Z4153TransportadorPlaca = "" ;
   this.O4153TransportadorPlaca = "" ;
   this.Z4151TransportadorTelefone = "" ;
   this.O4151TransportadorTelefone = "" ;
   this.Z4152TransportadorContato = "" ;
   this.O4152TransportadorContato = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z4141TransportadorTpPessoa = "" ;
   this.O4141TransportadorTpPessoa = "" ;
   this.Z4143TransportadorCNPJ = "" ;
   this.O4143TransportadorCNPJ = "" ;
   this.Z4142TransportadorCPF = "" ;
   this.O4142TransportadorCPF = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28TransportadorCodigo = 0 ;
   this.AV29TransportadorNome = "" ;
   this.AV31TransportadorCPF = "" ;
   this.AV27TransportadorCNPJ = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A3378TransportadorEmpresaId = "" ;
   this.A3379TransportadorCodigo = 0 ;
   this.AV32NomeTransportador = "" ;
   this.A3798TransportadorNome = "" ;
   this.AV30CPFCNPJ = "" ;
   this.A4153TransportadorPlaca = "" ;
   this.A4151TransportadorTelefone = "" ;
   this.A4152TransportadorContato = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A4141TransportadorTpPessoa = "" ;
   this.A4143TransportadorCNPJ = "" ;
   this.A4142TransportadorCPF = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV35Pgmname = "" ;
   this.Events = {"e11qm2_client": ["'ANTERIOR'", true] ,"e12qm2_client": ["'PROXIMO'", true] ,"e17qm2_client": ["VPAGINA.CLICK", true] ,"e13qm2_client": ["'NOVO'", true] ,"e14qm2_client": ["'FECHAR'", true] ,"e15qm2_client": ["'IMPRIMIR'", true] ,"e16qm2_client": ["'PROCURAR'", true] ,"e20qm2_client": ["'ALTERAR'", true] ,"e21qm2_client": ["'EXCLUIR'", true] ,"e22qm2_client": ["'CONSULTAR'", true] ,"e24qm2_client": ["'ATUALIZAPAGINA'", true] ,"e25qm2_client": ["ENTER", true] ,"e26qm2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'}],[{ctrl:'TRANSPORTADORCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSPORTADORCODIGO","Title")',ctrl:'TRANSPORTADORCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vNOMETRANSPORTADOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vNOMETRANSPORTADOR","Title")',ctrl:'vNOMETRANSPORTADOR',prop:'Title'},{ctrl:'TRANSPORTADORPLACA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSPORTADORPLACA","Title")',ctrl:'TRANSPORTADORPLACA',prop:'Title'},{ctrl:'TRANSPORTADORTELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSPORTADORTELEFONE","Title")',ctrl:'TRANSPORTADORTELEFONE',prop:'Title'},{ctrl:'TRANSPORTADORCONTATO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSPORTADORCONTATO","Title")',ctrl:'TRANSPORTADORCONTATO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40Qtdpaggeradas',fld:'vQTDPAGGERADAS'},{av:'AV36Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV40Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["LOAD"] = [[{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'}],[{av:'AV32NomeTransportador',fld:'vNOMETRANSPORTADOR'},{av:'gx.fn.getCtrlProperty("vNOMETRANSPORTADOR","Tooltiptext")',ctrl:'vNOMETRANSPORTADOR',prop:'Tooltiptext'},{av:'AV30CPFCNPJ',fld:'vCPFCNPJ'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV29TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV31TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV27TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV35Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar({rfrVar:"A3798TransportadorNome", rfrProp:"Value", gxAttId:"3798"});
   GridContainer.addRefreshingVar({rfrVar:"A4141TransportadorTpPessoa", rfrProp:"Value", gxAttId:"4141"});
   GridContainer.addRefreshingVar({rfrVar:"A4142TransportadorCPF", rfrProp:"Value", gxAttId:"4142"});
   GridContainer.addRefreshingVar({rfrVar:"A4143TransportadorCNPJ", rfrProp:"Value", gxAttId:"4143"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htransportador());
