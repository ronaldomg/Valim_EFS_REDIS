/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:42.84
*/
gx.evt.autoSkip = false;
gx.define('hconsultasolicitante', false, function () {
   this.ServerClass =  "hconsultasolicitante" ;
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
      this.AV22SolicitanteCodigoIN=gx.fn.getIntegerValue("vSOLICITANTECODIGOIN",'.') ;
      this.AV23SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV18PSolicitanteCodigo=gx.fn.getIntegerValue("vPSOLICITANTECODIGO",'.') ;
   };
   this.e19nr2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e20nr2_client=function()
   {
      this.executeServerEvent("SOLICITANTECODIGO.CLICK", true, arguments[0], false, false);
   };
   this.e11nr2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12nr2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13nr2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14nr2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15nr2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16nr2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e23nr2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e24nr2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e17nr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e25nr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,29,30,31,32,38,41,44,46,48,50,52,53,54,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasolicitante",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4028,24,"SOLICITANTECODIGO","","","SolicitanteCodigo","int",0,"px",4,4,"right","e20nr2_client",[],4028,"SolicitanteCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4060,25,"SOLICITANTENOME","","","SolicitanteNome","svchar",0,"px",50,50,"left",null,[],4060,"SolicitanteNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contato",26,"vCONTATO","","","contato","svchar",0,"px",40,40,"left",null,[],"Contato","contato",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4062,27,"SOLICITANTECONTATO","Contato","","SolicitanteContato","svchar",0,"px",40,40,"left",null,[],4062,"SolicitanteContato",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4063,28,"SOLICITANTETELEFONE","","","SolicitanteTelefone","svchar",0,"px",15,15,"left",null,[],4063,"SolicitanteTelefone",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4064,29,"SOLICITANTERAMAL","","","SolicitanteRamal","svchar",0,"px",4,4,"left",null,[],4064,"SolicitanteRamal",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4065,30,"SOLICITANTEEMAIL","Email","","SolicitanteEmail","svchar",0,"px",70,70,"left",null,[],4065,"SolicitanteEmail",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addSingleLineEdit("Email",31,"vEMAIL","","","email","svchar",85,"px",15,15,"left",null,[],"Email","email",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",32,0,"px",17,"px","e23nr2_client","","Alt","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITANTECODIGO",gxz:"ZV16SolicitanteCodigo",gxold:"OV16SolicitanteCodigo",gxvar:"AV16SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16SolicitanteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITANTECODIGO",gx.O.AV16SolicitanteCodigo,0)},c2v:function(){gx.O.AV16SolicitanteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITANTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITANTENOME",gxz:"ZV17SolicitanteNome",gxold:"OV17SolicitanteNome",gxvar:"AV17SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SolicitanteNome=Value},v2z:function(Value){gx.O.ZV17SolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTENOME",gx.O.AV17SolicitanteNome,0)},c2v:function(){gx.O.AV17SolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTENOME")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTECODIGO",gxz:"Z4028SolicitanteCodigo",gxold:"O4028SolicitanteCodigo",gxvar:"A4028SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4028SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4028SolicitanteCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTECODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A4028SolicitanteCodigo,0)},c2v:function(){gx.O.A4028SolicitanteCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITANTECODIGO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTENOME",gxz:"Z4060SolicitanteNome",gxold:"O4060SolicitanteNome",gxvar:"A4060SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4060SolicitanteNome=Value},v2z:function(Value){gx.O.Z4060SolicitanteNome=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTENOME",row || gx.fn.currentGridRowImpl(23),gx.O.A4060SolicitanteNome,0)},c2v:function(){gx.O.A4060SolicitanteNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTENOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTATO",gxz:"ZV19contato",gxold:"OV19contato",gxvar:"AV19contato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV19contato=Value},v2z:function(Value){gx.O.ZV19contato=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTATO",row || gx.fn.currentGridRowImpl(23),gx.O.AV19contato,0)},c2v:function(){gx.O.AV19contato=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTATO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTECONTATO",gxz:"Z4062SolicitanteContato",gxold:"O4062SolicitanteContato",gxvar:"A4062SolicitanteContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4062SolicitanteContato=Value},v2z:function(Value){gx.O.Z4062SolicitanteContato=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTECONTATO",row || gx.fn.currentGridRowImpl(23),gx.O.A4062SolicitanteContato,0)},c2v:function(){gx.O.A4062SolicitanteContato=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTECONTATO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTETELEFONE",gxz:"Z4063SolicitanteTelefone",gxold:"O4063SolicitanteTelefone",gxvar:"A4063SolicitanteTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4063SolicitanteTelefone=Value},v2z:function(Value){gx.O.Z4063SolicitanteTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTETELEFONE",row || gx.fn.currentGridRowImpl(23),gx.O.A4063SolicitanteTelefone,0)},c2v:function(){gx.O.A4063SolicitanteTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTETELEFONE",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:4,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTERAMAL",gxz:"Z4064SolicitanteRamal",gxold:"O4064SolicitanteRamal",gxvar:"A4064SolicitanteRamal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4064SolicitanteRamal=Value},v2z:function(Value){gx.O.Z4064SolicitanteRamal=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTERAMAL",row || gx.fn.currentGridRowImpl(23),gx.O.A4064SolicitanteRamal,0)},c2v:function(){gx.O.A4064SolicitanteRamal=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTERAMAL",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTEEMAIL",gxz:"Z4065SolicitanteEmail",gxold:"O4065SolicitanteEmail",gxvar:"A4065SolicitanteEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4065SolicitanteEmail=Value},v2z:function(Value){gx.O.Z4065SolicitanteEmail=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTEEMAIL",row || gx.fn.currentGridRowImpl(23),gx.O.A4065SolicitanteEmail,0)},c2v:function(){gx.O.A4065SolicitanteEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTEEMAIL",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEMAIL",gxz:"ZV20email",gxold:"OV20email",gxvar:"AV20email",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20email=Value},v2z:function(Value){gx.O.ZV20email=Value},v2c:function(row){gx.fn.setGridControlValue("vEMAIL",row || gx.fn.currentGridRowImpl(23),gx.O.AV20email,0)},c2v:function(){gx.O.AV20email=this.val()},val:function(row){return gx.fn.getGridControlValue("vEMAIL",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV21bmpAlt",gxold:"OV21bmpAlt",gxvar:"AV21bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpAlt=Value},v2z:function(Value){gx.O.ZV21bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV21bmpAlt,gx.O.AV30Bmpalt_GXI)},c2v:function(){gx.O.AV30Bmpalt_GXI=this.val_GXI();gx.O.AV21bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV30Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLENAV",grid:0};
   GXValidFnc[41]={fld:"INCLUICLIENTE1",grid:0};
   GXValidFnc[44]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[46]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[48]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[50]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[52]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV25Pagina",gxold:"OV25Pagina",gxvar:"AV25Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV25Pagina)},c2v:function(){gx.O.AV25Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV26PaginaAux",gxold:"OV26PaginaAux",gxvar:"AV26PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV26PaginaAux,0)},c2v:function(){gx.O.AV26PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16SolicitanteCodigo = 0 ;
   this.ZV16SolicitanteCodigo = 0 ;
   this.OV16SolicitanteCodigo = 0 ;
   this.AV17SolicitanteNome = "" ;
   this.ZV17SolicitanteNome = "" ;
   this.OV17SolicitanteNome = "" ;
   this.Z4028SolicitanteCodigo = 0 ;
   this.O4028SolicitanteCodigo = 0 ;
   this.Z4060SolicitanteNome = "" ;
   this.O4060SolicitanteNome = "" ;
   this.ZV19contato = "" ;
   this.OV19contato = "" ;
   this.Z4062SolicitanteContato = "" ;
   this.O4062SolicitanteContato = "" ;
   this.Z4063SolicitanteTelefone = "" ;
   this.O4063SolicitanteTelefone = "" ;
   this.Z4064SolicitanteRamal = "" ;
   this.O4064SolicitanteRamal = "" ;
   this.Z4065SolicitanteEmail = "" ;
   this.O4065SolicitanteEmail = "" ;
   this.ZV20email = "" ;
   this.OV20email = "" ;
   this.ZV21bmpAlt = "" ;
   this.OV21bmpAlt = "" ;
   this.AV25Pagina = 0 ;
   this.ZV25Pagina = 0 ;
   this.OV25Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.ZV26PaginaAux = 0 ;
   this.OV26PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16SolicitanteCodigo = 0 ;
   this.AV17SolicitanteNome = "" ;
   this.AV25Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18PSolicitanteCodigo = 0 ;
   this.AV22SolicitanteCodigoIN = 0 ;
   this.A4027SolicitanteEmpresaId = "" ;
   this.A4028SolicitanteCodigo = 0 ;
   this.A4060SolicitanteNome = "" ;
   this.AV19contato = "" ;
   this.A4062SolicitanteContato = "" ;
   this.A4063SolicitanteTelefone = "" ;
   this.A4064SolicitanteRamal = "" ;
   this.A4065SolicitanteEmail = "" ;
   this.AV20email = "" ;
   this.AV21bmpAlt = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV23SnParametro = "" ;
   this.Events = {"e19nr2_client": ["ENTER", true] ,"e20nr2_client": ["SOLICITANTECODIGO.CLICK", true] ,"e11nr2_client": ["'GXM_FIRST'", true] ,"e12nr2_client": ["'GXM_PREVIOUS'", true] ,"e13nr2_client": ["'GXM_NEXT'", true] ,"e14nr2_client": ["'GXM_LAST'", true] ,"e15nr2_client": ["'PROCURAR'", true] ,"e16nr2_client": ["'NOVO'", true] ,"e23nr2_client": ["'ALTERAR'", true] ,"e24nr2_client": ["'ATUALIZAPAGINA'", true] ,"e17nr2_client": ["'FECHAR'", true] ,"e25nr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV17SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22SolicitanteCodigoIN',fld:'vSOLICITANTECODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV16SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{ctrl:'SOLICITANTECODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SOLICITANTECODIGO","Title")',ctrl:'SOLICITANTECODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'SOLICITANTENOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SOLICITANTENOME","Title")',ctrl:'SOLICITANTENOME',prop:'Title'},{ctrl:'vCONTATO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vCONTATO","Title")',ctrl:'vCONTATO',prop:'Title'},{ctrl:'SOLICITANTETELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SOLICITANTETELEFONE","Title")',ctrl:'SOLICITANTETELEFONE',prop:'Title'},{ctrl:'SOLICITANTERAMAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SOLICITANTERAMAL","Title")',ctrl:'SOLICITANTERAMAL',prop:'Title'},{ctrl:'vEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vEMAIL","Title")',ctrl:'vEMAIL',prop:'Title'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV24NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'}],[{av:'AV18PSolicitanteCodigo',fld:'vPSOLICITANTECODIGO'}]];
   this.EvtParms["SOLICITANTECODIGO.CLICK"] = [[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'AV18PSolicitanteCodigo',fld:'vPSOLICITANTECODIGO'}],[{av:'AV18PSolicitanteCodigo',fld:'vPSOLICITANTECODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV17SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22SolicitanteCodigoIN',fld:'vSOLICITANTECODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV17SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22SolicitanteCodigoIN',fld:'vSOLICITANTECODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'},{av:'AV25Pagina',fld:'vPAGINA'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV17SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22SolicitanteCodigoIN',fld:'vSOLICITANTECODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV17SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22SolicitanteCodigoIN',fld:'vSOLICITANTECODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV17SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22SolicitanteCodigoIN',fld:'vSOLICITANTECODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["LOAD"] = [[{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'}],[{av:'AV19contato',fld:'vCONTATO'},{av:'gx.fn.getCtrlProperty("vCONTATO","Tooltiptext")',ctrl:'vCONTATO',prop:'Tooltiptext'},{av:'AV20email',fld:'vEMAIL'},{av:'gx.fn.getCtrlProperty("vEMAIL","Tooltiptext")',ctrl:'vEMAIL',prop:'Tooltiptext'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'}],[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV17SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22SolicitanteCodigoIN',fld:'vSOLICITANTECODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18PSolicitanteCodigo',fld:'vPSOLICITANTECODIGO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV22SolicitanteCodigoIN", "vSOLICITANTECODIGOIN", 0, "int");
   this.setVCMap("AV23SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV18PSolicitanteCodigo", "vPSOLICITANTECODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV22SolicitanteCodigoIN", "vSOLICITANTECODIGOIN", 0, "int");
   this.setVCMap("AV23SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV22SolicitanteCodigoIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV23SnParametro"});
   GridContainer.addRefreshingVar({rfrVar:"A4062SolicitanteContato", rfrProp:"Value", gxAttId:"4062"});
   GridContainer.addRefreshingVar({rfrVar:"A4065SolicitanteEmail", rfrProp:"Value", gxAttId:"4065"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasolicitante());
