/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:49.49
*/
gx.evt.autoSkip = false;
gx.define('hconsultatransportador', false, function () {
   this.ServerClass =  "hconsultatransportador" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV24TransportadorCodigoIN=gx.fn.getIntegerValue("vTRANSPORTADORCODIGOIN",'.') ;
      this.AV25SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.A4141TransportadorTpPessoa=gx.fn.getControlValue("TRANSPORTADORTPPESSOA") ;
      this.A4142TransportadorCPF=gx.fn.getControlValue("TRANSPORTADORCPF") ;
      this.A4143TransportadorCNPJ=gx.fn.getControlValue("TRANSPORTADORCNPJ") ;
      this.AV21PTransportadorCodigo=gx.fn.getIntegerValue("vPTRANSPORTADORCODIGO",'.') ;
   };
   this.e18nv2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11nv2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12nv2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13nv2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14nv2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15nv2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16nv2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e21nv2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22nv2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23nv1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,34,35,36,37,38,39,40,41,47,50,53,55,57,59,61,62,63,64,65];
   this.GXLastCtrlId =65;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",33,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatransportador",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3379,34,"TRANSPORTADORCODIGO","","","TransportadorCodigo","int",0,"px",6,6,"right",null,[],3379,"TransportadorCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Nometransportador",35,"vNOMETRANSPORTADOR","","","NomeTransportador","svchar",0,"px",60,60,"left",null,[],"Nometransportador","NomeTransportador",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3798,36,"TRANSPORTADORNOME","Nome Transportador","","TransportadorNome","svchar",0,"px",60,60,"left",null,[],3798,"TransportadorNome",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Cpfcnpj",37,"vCPFCNPJ","CPF/CNPJ","","CPFCNPJ","svchar",0,"px",18,18,"left",null,[],"Cpfcnpj","CPFCNPJ",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4153,38,"TRANSPORTADORPLACA","","","TransportadorPlaca","svchar",0,"px",10,10,"left",null,[],4153,"TransportadorPlaca",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4151,39,"TRANSPORTADORTELEFONE","","","TransportadorTelefone","svchar",0,"px",15,15,"left",null,[],4151,"TransportadorTelefone",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4152,40,"TRANSPORTADORCONTATO","","","TransportadorContato","svchar",0,"px",40,40,"left",null,[],4152,"TransportadorContato",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",41,0,"px",17,"px","e21nv2_client","","Alt","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSPORTADORCODIGO",gxz:"ZV17TransportadorCodigo",gxold:"OV17TransportadorCodigo",gxvar:"AV17TransportadorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TransportadorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17TransportadorCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORCODIGO",gx.O.AV17TransportadorCodigo,0)},c2v:function(){gx.O.AV17TransportadorCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSPORTADORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSPORTADORNOME",gxz:"ZV18TransportadorNome",gxold:"OV18TransportadorNome",gxvar:"AV18TransportadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TransportadorNome=Value},v2z:function(Value){gx.O.ZV18TransportadorNome=Value},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORNOME",gx.O.AV18TransportadorNome,0)},c2v:function(){gx.O.AV18TransportadorNome=this.val()},val:function(){return gx.fn.getControlValue("vTRANSPORTADORNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSPORTADORCPF",gxz:"ZV19TransportadorCPF",gxold:"OV19TransportadorCPF",gxvar:"AV19TransportadorCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19TransportadorCPF=Value},v2z:function(Value){gx.O.ZV19TransportadorCPF=Value},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORCPF",gx.O.AV19TransportadorCPF,0)},c2v:function(){gx.O.AV19TransportadorCPF=this.val()},val:function(){return gx.fn.getControlValue("vTRANSPORTADORCPF")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSPORTADORCNPJ",gxz:"ZV20TransportadorCNPJ",gxold:"OV20TransportadorCNPJ",gxvar:"AV20TransportadorCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20TransportadorCNPJ=Value},v2z:function(Value){gx.O.ZV20TransportadorCNPJ=Value},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORCNPJ",gx.O.AV20TransportadorCNPJ,0)},c2v:function(){gx.O.AV20TransportadorCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vTRANSPORTADORCNPJ")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORCODIGO",gxz:"Z3379TransportadorCodigo",gxold:"O3379TransportadorCodigo",gxvar:"A3379TransportadorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3379TransportadorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3379TransportadorCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORCODIGO",row || gx.fn.currentGridRowImpl(33),gx.O.A3379TransportadorCodigo,0)},c2v:function(){gx.O.A3379TransportadorCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSPORTADORCODIGO",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNOMETRANSPORTADOR",gxz:"ZV22NomeTransportador",gxold:"OV22NomeTransportador",gxvar:"AV22NomeTransportador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV22NomeTransportador=Value},v2z:function(Value){gx.O.ZV22NomeTransportador=Value},v2c:function(row){gx.fn.setGridControlValue("vNOMETRANSPORTADOR",row || gx.fn.currentGridRowImpl(33),gx.O.AV22NomeTransportador,0)},c2v:function(){gx.O.AV22NomeTransportador=this.val()},val:function(row){return gx.fn.getGridControlValue("vNOMETRANSPORTADOR",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORNOME",gxz:"Z3798TransportadorNome",gxold:"O3798TransportadorNome",gxvar:"A3798TransportadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3798TransportadorNome=Value},v2z:function(Value){gx.O.Z3798TransportadorNome=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORNOME",row || gx.fn.currentGridRowImpl(33),gx.O.A3798TransportadorNome,0)},c2v:function(){gx.O.A3798TransportadorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORNOME",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"svchar",len:18,dec:0,sign:false,ro:0,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCPFCNPJ",gxz:"ZV16CPFCNPJ",gxold:"OV16CPFCNPJ",gxvar:"AV16CPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16CPFCNPJ=Value},v2z:function(Value){gx.O.ZV16CPFCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("vCPFCNPJ",row || gx.fn.currentGridRowImpl(33),gx.O.AV16CPFCNPJ,0)},c2v:function(){gx.O.AV16CPFCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("vCPFCNPJ",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORPLACA",gxz:"Z4153TransportadorPlaca",gxold:"O4153TransportadorPlaca",gxvar:"A4153TransportadorPlaca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4153TransportadorPlaca=Value},v2z:function(Value){gx.O.Z4153TransportadorPlaca=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORPLACA",row || gx.fn.currentGridRowImpl(33),gx.O.A4153TransportadorPlaca,0)},c2v:function(){gx.O.A4153TransportadorPlaca=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORPLACA",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORTELEFONE",gxz:"Z4151TransportadorTelefone",gxold:"O4151TransportadorTelefone",gxvar:"A4151TransportadorTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4151TransportadorTelefone=Value},v2z:function(Value){gx.O.Z4151TransportadorTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORTELEFONE",row || gx.fn.currentGridRowImpl(33),gx.O.A4151TransportadorTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4151TransportadorTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORTELEFONE",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORCONTATO",gxz:"Z4152TransportadorContato",gxold:"O4152TransportadorContato",gxvar:"A4152TransportadorContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4152TransportadorContato=Value},v2z:function(Value){gx.O.Z4152TransportadorContato=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORCONTATO",row || gx.fn.currentGridRowImpl(33),gx.O.A4152TransportadorContato,0)},c2v:function(){gx.O.A4152TransportadorContato=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORCONTATO",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV23bmpAlt",gxold:"OV23bmpAlt",gxvar:"AV23bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpAlt=Value},v2z:function(Value){gx.O.ZV23bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(33),gx.O.AV23bmpAlt,gx.O.AV31Bmpalt_GXI)},c2v:function(){gx.O.AV31Bmpalt_GXI=this.val_GXI();gx.O.AV23bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(33))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(33))}, gxvar_GXI:'AV31Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLENAV",grid:0};
   GXValidFnc[50]={fld:"INCLUICLIENTE1",grid:0};
   GXValidFnc[53]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[55]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[57]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[59]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[61]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[62]={fld:"JS", format:2,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV27Pagina",gxold:"OV27Pagina",gxvar:"AV27Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV27Pagina)},c2v:function(){gx.O.AV27Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV28PaginaAux",gxold:"OV28PaginaAux",gxvar:"AV28PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV28PaginaAux,0)},c2v:function(){gx.O.AV28PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV17TransportadorCodigo = 0 ;
   this.ZV17TransportadorCodigo = 0 ;
   this.OV17TransportadorCodigo = 0 ;
   this.AV18TransportadorNome = "" ;
   this.ZV18TransportadorNome = "" ;
   this.OV18TransportadorNome = "" ;
   this.AV19TransportadorCPF = "" ;
   this.ZV19TransportadorCPF = "" ;
   this.OV19TransportadorCPF = "" ;
   this.AV20TransportadorCNPJ = "" ;
   this.ZV20TransportadorCNPJ = "" ;
   this.OV20TransportadorCNPJ = "" ;
   this.Z3379TransportadorCodigo = 0 ;
   this.O3379TransportadorCodigo = 0 ;
   this.ZV22NomeTransportador = "" ;
   this.OV22NomeTransportador = "" ;
   this.Z3798TransportadorNome = "" ;
   this.O3798TransportadorNome = "" ;
   this.ZV16CPFCNPJ = "" ;
   this.OV16CPFCNPJ = "" ;
   this.Z4153TransportadorPlaca = "" ;
   this.O4153TransportadorPlaca = "" ;
   this.Z4151TransportadorTelefone = "" ;
   this.O4151TransportadorTelefone = "" ;
   this.Z4152TransportadorContato = "" ;
   this.O4152TransportadorContato = "" ;
   this.ZV23bmpAlt = "" ;
   this.OV23bmpAlt = "" ;
   this.AV27Pagina = 0 ;
   this.ZV27Pagina = 0 ;
   this.OV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.ZV28PaginaAux = 0 ;
   this.OV28PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV17TransportadorCodigo = 0 ;
   this.AV18TransportadorNome = "" ;
   this.AV19TransportadorCPF = "" ;
   this.AV20TransportadorCNPJ = "" ;
   this.AV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV21PTransportadorCodigo = 0 ;
   this.AV24TransportadorCodigoIN = 0 ;
   this.A4141TransportadorTpPessoa = "" ;
   this.A4143TransportadorCNPJ = "" ;
   this.A4142TransportadorCPF = "" ;
   this.A3378TransportadorEmpresaId = "" ;
   this.A3379TransportadorCodigo = 0 ;
   this.AV22NomeTransportador = "" ;
   this.A3798TransportadorNome = "" ;
   this.AV16CPFCNPJ = "" ;
   this.A4153TransportadorPlaca = "" ;
   this.A4151TransportadorTelefone = "" ;
   this.A4152TransportadorContato = "" ;
   this.AV23bmpAlt = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV25SnParametro = "" ;
   this.Events = {"e18nv2_client": ["ENTER", true] ,"e11nv2_client": ["'GXM_FIRST'", true] ,"e12nv2_client": ["'GXM_PREVIOUS'", true] ,"e13nv2_client": ["'GXM_NEXT'", true] ,"e14nv2_client": ["'GXM_LAST'", true] ,"e15nv2_client": ["'PROCURAR'", true] ,"e16nv2_client": ["'NOVO'", true] ,"e21nv2_client": ["'ALTERAR'", true] ,"e22nv2_client": ["'ATUALIZAPAGINA'", true] ,"e23nv1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV18TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV19TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV20TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24TransportadorCodigoIN',fld:'vTRANSPORTADORCODIGOIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV17TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV18TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV19TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV20TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{ctrl:'TRANSPORTADORCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSPORTADORCODIGO","Title")',ctrl:'TRANSPORTADORCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'vNOMETRANSPORTADOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vNOMETRANSPORTADOR","Title")',ctrl:'vNOMETRANSPORTADOR',prop:'Title'},{ctrl:'TRANSPORTADORPLACA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSPORTADORPLACA","Title")',ctrl:'TRANSPORTADORPLACA',prop:'Title'},{ctrl:'TRANSPORTADORTELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSPORTADORTELEFONE","Title")',ctrl:'TRANSPORTADORTELEFONE',prop:'Title'},{ctrl:'TRANSPORTADORCONTATO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSPORTADORCONTATO","Title")',ctrl:'TRANSPORTADORCONTATO',prop:'Title'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV26NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'}],[{av:'AV21PTransportadorCodigo',fld:'vPTRANSPORTADORCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV18TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV19TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV20TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24TransportadorCodigoIN',fld:'vTRANSPORTADORCODIGOIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV18TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV19TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV20TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24TransportadorCodigoIN',fld:'vTRANSPORTADORCODIGOIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'},{av:'AV27Pagina',fld:'vPAGINA'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV18TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV19TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV20TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24TransportadorCodigoIN',fld:'vTRANSPORTADORCODIGOIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV18TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV19TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV20TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24TransportadorCodigoIN',fld:'vTRANSPORTADORCODIGOIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV18TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV19TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV20TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24TransportadorCodigoIN',fld:'vTRANSPORTADORCODIGOIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["LOAD"] = [[{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'}],[{av:'AV22NomeTransportador',fld:'vNOMETRANSPORTADOR'},{av:'gx.fn.getCtrlProperty("vNOMETRANSPORTADOR","Tooltiptext")',ctrl:'vNOMETRANSPORTADOR',prop:'Tooltiptext'},{av:'AV16CPFCNPJ',fld:'vCPFCNPJ'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'}],[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV18TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV19TransportadorCPF',fld:'vTRANSPORTADORCPF'},{av:'AV20TransportadorCNPJ',fld:'vTRANSPORTADORCNPJ'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24TransportadorCodigoIN',fld:'vTRANSPORTADORCODIGOIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'A4141TransportadorTpPessoa',fld:'TRANSPORTADORTPPESSOA'},{av:'A4142TransportadorCPF',fld:'TRANSPORTADORCPF'},{av:'A4143TransportadorCNPJ',fld:'TRANSPORTADORCNPJ'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24TransportadorCodigoIN", "vTRANSPORTADORCODIGOIN", 0, "int");
   this.setVCMap("AV25SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("A4141TransportadorTpPessoa", "TRANSPORTADORTPPESSOA", 0, "char");
   this.setVCMap("A4142TransportadorCPF", "TRANSPORTADORCPF", 0, "char");
   this.setVCMap("A4143TransportadorCNPJ", "TRANSPORTADORCNPJ", 0, "char");
   this.setVCMap("AV21PTransportadorCodigo", "vPTRANSPORTADORCODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24TransportadorCodigoIN", "vTRANSPORTADORCODIGOIN", 0, "int");
   this.setVCMap("AV25SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("A4141TransportadorTpPessoa", "TRANSPORTADORTPPESSOA", 0, "char");
   this.setVCMap("A4142TransportadorCPF", "TRANSPORTADORCPF", 0, "char");
   this.setVCMap("A4143TransportadorCNPJ", "TRANSPORTADORCNPJ", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV23bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV23bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV24TransportadorCodigoIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV25SnParametro"});
   GridContainer.addRefreshingVar({rfrVar:"A3798TransportadorNome", rfrProp:"Value", gxAttId:"3798"});
   GridContainer.addRefreshingVar({rfrVar:"A4141TransportadorTpPessoa"});
   GridContainer.addRefreshingVar({rfrVar:"A4142TransportadorCPF"});
   GridContainer.addRefreshingVar({rfrVar:"A4143TransportadorCNPJ"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatransportador());
