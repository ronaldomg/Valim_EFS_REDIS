/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:51:26.91
*/
gx.evt.autoSkip = false;
gx.define('hconsultausuariocaixa', false, function () {
   this.ServerClass =  "hconsultausuariocaixa" ;
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
      this.AV18CodUsuarioCaixa=gx.fn.getControlValue("vCODUSUARIOCAIXA") ;
   };
   this.e17nx2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11nx2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12nx2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13nx2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14nx2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15nx2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20nx1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,19,20,21,22,28,31,33,35,37,39,40,41,42,43];
   this.GXLastCtrlId =43;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultausuariocaixa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3439,19,"USUARIOCAIXAID","","","UsuarioCaixaId","char",0,"px",12,12,"left",null,[],3439,"UsuarioCaixaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsnsupervisor","vBMPSNSUPERVISOR",20,0,"px",17,"px",null,"","Supervisor","Image","");
   GridContainer.addSingleLineEdit(4169,21,"USUARIOCAIXACAIXABANCODESCRICA","","","UsuarioCaixaCaixaBancoDescrica","svchar",0,"px",25,25,"left",null,[],4169,"UsuarioCaixaCaixaBancoDescrica",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4163,22,"USUARIOCAIXASNSUPERVISOR","Supervisor","","UsuarioCaixaSnSupervisor","char",0,"px",1,1,"left",null,[],4163,"UsuarioCaixaSnSupervisor",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOCAIXAID",gxz:"ZV16UsuarioCaixaId",gxold:"OV16UsuarioCaixaId",gxvar:"AV16UsuarioCaixaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16UsuarioCaixaId=Value},v2z:function(Value){gx.O.ZV16UsuarioCaixaId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOCAIXAID",gx.O.AV16UsuarioCaixaId,0)},c2v:function(){gx.O.AV16UsuarioCaixaId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOCAIXAID")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCAIXAID",gxz:"Z3439UsuarioCaixaId",gxold:"O3439UsuarioCaixaId",gxvar:"A3439UsuarioCaixaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3439UsuarioCaixaId=Value},v2z:function(Value){gx.O.Z3439UsuarioCaixaId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOCAIXAID",row || gx.fn.currentGridRowImpl(18),gx.O.A3439UsuarioCaixaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3439UsuarioCaixaId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOCAIXAID",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNSUPERVISOR",gxz:"ZV17bmpSnSupervisor",gxold:"OV17bmpSnSupervisor",gxvar:"AV17bmpSnSupervisor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17bmpSnSupervisor=Value},v2z:function(Value){gx.O.ZV17bmpSnSupervisor=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNSUPERVISOR",row || gx.fn.currentGridRowImpl(18),gx.O.AV17bmpSnSupervisor,gx.O.AV24Bmpsnsupervisor_GXI)},c2v:function(){gx.O.AV24Bmpsnsupervisor_GXI=this.val_GXI();gx.O.AV17bmpSnSupervisor=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNSUPERVISOR",row || gx.fn.currentGridRowImpl(18))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNSUPERVISOR_GXI",row || gx.fn.currentGridRowImpl(18))}, gxvar_GXI:'AV24Bmpsnsupervisor_GXI',nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCAIXACAIXABANCODESCRICA",gxz:"Z4169UsuarioCaixaCaixaBancoDescrica",gxold:"O4169UsuarioCaixaCaixaBancoDescrica",gxvar:"A4169UsuarioCaixaCaixaBancoDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4169UsuarioCaixaCaixaBancoDescrica=Value},v2z:function(Value){gx.O.Z4169UsuarioCaixaCaixaBancoDescrica=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOCAIXACAIXABANCODESCRICA",row || gx.fn.currentGridRowImpl(18),gx.O.A4169UsuarioCaixaCaixaBancoDescrica,0)},c2v:function(){gx.O.A4169UsuarioCaixaCaixaBancoDescrica=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOCAIXACAIXABANCODESCRICA",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCAIXASNSUPERVISOR",gxz:"Z4163UsuarioCaixaSnSupervisor",gxold:"O4163UsuarioCaixaSnSupervisor",gxvar:"A4163UsuarioCaixaSnSupervisor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4163UsuarioCaixaSnSupervisor=Value},v2z:function(Value){gx.O.Z4163UsuarioCaixaSnSupervisor=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOCAIXASNSUPERVISOR",row || gx.fn.currentGridRowImpl(18),gx.O.A4163UsuarioCaixaSnSupervisor,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4163UsuarioCaixaSnSupervisor=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOCAIXASNSUPERVISOR",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLENAV",grid:0};
   GXValidFnc[31]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[33]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[35]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[37]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[39]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"PROMPT_USUARIOCAIXAID",grid:0};
   this.AV16UsuarioCaixaId = "" ;
   this.ZV16UsuarioCaixaId = "" ;
   this.OV16UsuarioCaixaId = "" ;
   this.Z3439UsuarioCaixaId = "" ;
   this.O3439UsuarioCaixaId = "" ;
   this.ZV17bmpSnSupervisor = "" ;
   this.OV17bmpSnSupervisor = "" ;
   this.Z4169UsuarioCaixaCaixaBancoDescrica = "" ;
   this.O4169UsuarioCaixaCaixaBancoDescrica = "" ;
   this.Z4163UsuarioCaixaSnSupervisor = "" ;
   this.O4163UsuarioCaixaSnSupervisor = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16UsuarioCaixaId = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18CodUsuarioCaixa = "" ;
   this.A4167UsuarioCaixaCaixaBancoEmpId = "" ;
   this.A4168UsuarioCaixaCaixaBancoId = 0 ;
   this.A3439UsuarioCaixaId = "" ;
   this.AV17bmpSnSupervisor = "" ;
   this.A4169UsuarioCaixaCaixaBancoDescrica = "" ;
   this.A4163UsuarioCaixaSnSupervisor = "" ;
   this.Events = {"e17nx2_client": ["ENTER", true] ,"e11nx2_client": ["'GXM_FIRST'", true] ,"e12nx2_client": ["'GXM_PREVIOUS'", true] ,"e13nx2_client": ["'GXM_NEXT'", true] ,"e14nx2_client": ["'GXM_LAST'", true] ,"e15nx2_client": ["'PROCURAR'", true] ,"e20nx1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'USUARIOCAIXAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOCAIXAID","Title")',ctrl:'USUARIOCAIXAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'USUARIOCAIXACAIXABANCODESCRICA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOCAIXACAIXABANCODESCRICA","Title")',ctrl:'USUARIOCAIXACAIXABANCODESCRICA',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3439UsuarioCaixaId',fld:'USUARIOCAIXAID'}],[{av:'AV18CodUsuarioCaixa',fld:'vCODUSUARIOCAIXA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'}],[{av:'AV17bmpSnSupervisor',fld:'vBMPSNSUPERVISOR'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'}],[{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.setPrompt("PROMPT_USUARIOCAIXAID", [10]);
   this.setVCMap("AV18CodUsuarioCaixa", "vCODUSUARIOCAIXA", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar({rfrVar:"A4163UsuarioCaixaSnSupervisor", rfrProp:"Value", gxAttId:"4163"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultausuariocaixa());
