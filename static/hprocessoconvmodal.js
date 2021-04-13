/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:55:30.40
*/
gx.evt.autoSkip = false;
gx.define('hprocessoconvmodal', false, function () {
   this.ServerClass =  "hprocessoconvmodal" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV16EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
   };
   this.e15v12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e13v12_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e11v12_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12v12_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e18v12_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,21,22,23,24,27,30,32,34,35,36];
   this.GXLastCtrlId =36;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",20,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hprocessoconvmodal",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(3373,21,"PROCESSOCONVANO","Ano","","ProcessoConvAno","int",0,"px",4,4,"right",null,[],3373,"ProcessoConvAno",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3374,22,"PROCESSOCONVNUMERO","Número","","ProcessoConvNumero","int",0,"px",8,8,"right",null,[],3374,"ProcessoConvNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3819,23,"PROCESSOCONVFINALIDADE","Finalidade","","ProcessoConvFinalidade","svchar",405,"px",100,80,"left",null,[],3819,"ProcessoConvFinalidade",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1681,24,"CONVENIOID","Código do Convênio","","ConvenioId","int",0,"px",7,7,"right",null,[],1681,"ConvenioId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE6",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCONVENIOID",gxz:"ZV11ConvenioId",gxold:"OV11ConvenioId",gxvar:"AV11ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV11ConvenioId,0)},c2v:function(){gx.O.AV11ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV12ConvenioDescricao",gxold:"OV12ConvenioDescricao",gxvar:"AV12ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV12ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV12ConvenioDescricao,0)},c2v:function(){gx.O.AV12ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVANO",gxz:"Z3373ProcessoConvAno",gxold:"O3373ProcessoConvAno",gxvar:"A3373ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3373ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3373ProcessoConvAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVANO",row || gx.fn.currentGridRowImpl(20),gx.O.A3373ProcessoConvAno,0)},c2v:function(){gx.O.A3373ProcessoConvAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOCONVANO",row || gx.fn.currentGridRowImpl(20),'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVNUMERO",gxz:"Z3374ProcessoConvNumero",gxold:"O3374ProcessoConvNumero",gxvar:"A3374ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3374ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3374ProcessoConvNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(20),gx.O.A3374ProcessoConvNumero,0)},c2v:function(){gx.O.A3374ProcessoConvNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(20),'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:20,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVFINALIDADE",gxz:"Z3819ProcessoConvFinalidade",gxold:"O3819ProcessoConvFinalidade",gxvar:"A3819ProcessoConvFinalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3819ProcessoConvFinalidade=Value},v2z:function(Value){gx.O.Z3819ProcessoConvFinalidade=Value},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVFINALIDADE",row || gx.fn.currentGridRowImpl(20),gx.O.A3819ProcessoConvFinalidade,0)},c2v:function(){gx.O.A3819ProcessoConvFinalidade=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOCONVFINALIDADE",row || gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOID",row || gx.fn.currentGridRowImpl(20),gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVENIOID",row || gx.fn.currentGridRowImpl(20),'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[32]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[34]={fld:"IMAGE5",grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV14Pagina",gxold:"OV14Pagina",gxvar:"AV14Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV14Pagina)},c2v:function(){gx.O.AV14Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV15PaginaAux",gxold:"OV15PaginaAux",gxvar:"AV15PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV15PaginaAux,0)},c2v:function(){gx.O.AV15PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.AV11ConvenioId = 0 ;
   this.ZV11ConvenioId = 0 ;
   this.OV11ConvenioId = 0 ;
   this.AV12ConvenioDescricao = "" ;
   this.ZV12ConvenioDescricao = "" ;
   this.OV12ConvenioDescricao = "" ;
   this.Z3373ProcessoConvAno = 0 ;
   this.O3373ProcessoConvAno = 0 ;
   this.Z3374ProcessoConvNumero = 0 ;
   this.O3374ProcessoConvNumero = 0 ;
   this.Z3819ProcessoConvFinalidade = "" ;
   this.O3819ProcessoConvFinalidade = "" ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.AV14Pagina = 0 ;
   this.ZV14Pagina = 0 ;
   this.OV14Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.ZV15PaginaAux = 0 ;
   this.OV15PaginaAux = 0 ;
   this.AV11ConvenioId = 0 ;
   this.AV12ConvenioDescricao = "" ;
   this.AV14Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3819ProcessoConvFinalidade = "" ;
   this.A1681ConvenioId = 0 ;
   this.AV16EmpresaPadrao = "" ;
   this.Events = {"e15v12_client": ["ENTER", true] ,"e13v12_client": ["'FECHAR'", true] ,"e11v12_client": ["'ANTERIOR'", true] ,"e12v12_client": ["'PROXIMO'", true] ,"e18v12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11ConvenioId',fld:'vCONVENIOID',hsh:true}],[{av:'AV15PaginaAux',fld:'vPAGINAAUX'},{av:'AV14Pagina',fld:'vPAGINA'},{av:'AV17NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV14Pagina',fld:'vPAGINA'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV14Pagina',fld:'vPAGINA'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV16EmpresaPadrao"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[13]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hprocessoconvmodal());
