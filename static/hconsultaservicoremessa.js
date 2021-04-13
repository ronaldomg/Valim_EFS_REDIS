/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:0:22.65
*/
gx.evt.autoSkip = false;
gx.define('hconsultaservicoremessa', false, function () {
   this.ServerClass =  "hconsultaservicoremessa" ;
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
      this.AV16ServicoRemessaIdOut=gx.fn.getIntegerValue("vSERVICOREMESSAIDOUT",'.') ;
   };
   this.e17vu2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11vu2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12vu2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13vu2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14vu2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15vu2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19vu2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21vu1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaservicoremessa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5478,24,"SERVICOREMESSAID","","","ServicoRemessaId","int",0,"px",2,2,"right",null,[],5478,"ServicoRemessaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5473,25,"SERVICOREMESSADESCRICAO","","","ServicoRemessaDescricao","svchar",0,"px",60,60,"left",null,[],5473,"ServicoRemessaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSERVICOREMESSATIPO",gxz:"ZV17ServicoRemessaTipo",gxold:"OV17ServicoRemessaTipo",gxvar:"AV17ServicoRemessaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17ServicoRemessaTipo=Value},v2z:function(Value){gx.O.ZV17ServicoRemessaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vSERVICOREMESSATIPO",gx.O.AV17ServicoRemessaTipo)},c2v:function(){gx.O.AV17ServicoRemessaTipo=this.val()},val:function(){return gx.fn.getControlValue("vSERVICOREMESSATIPO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSERVICOREMESSADESCRICAO",gxz:"ZV18ServicoRemessaDescricao",gxold:"OV18ServicoRemessaDescricao",gxvar:"AV18ServicoRemessaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ServicoRemessaDescricao=Value},v2z:function(Value){gx.O.ZV18ServicoRemessaDescricao=Value},v2c:function(){gx.fn.setControlValue("vSERVICOREMESSADESCRICAO",gx.O.AV18ServicoRemessaDescricao,0)},c2v:function(){gx.O.AV18ServicoRemessaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSERVICOREMESSADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOREMESSAID",gxz:"Z5478ServicoRemessaId",gxold:"O5478ServicoRemessaId",gxvar:"A5478ServicoRemessaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5478ServicoRemessaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5478ServicoRemessaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SERVICOREMESSAID",row || gx.fn.currentGridRowImpl(23),gx.O.A5478ServicoRemessaId,0)},c2v:function(){gx.O.A5478ServicoRemessaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SERVICOREMESSAID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOREMESSADESCRICAO",gxz:"Z5473ServicoRemessaDescricao",gxold:"O5473ServicoRemessaDescricao",gxvar:"A5473ServicoRemessaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5473ServicoRemessaDescricao=Value},v2z:function(Value){gx.O.Z5473ServicoRemessaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SERVICOREMESSADESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A5473ServicoRemessaDescricao,0)},c2v:function(){gx.O.A5473ServicoRemessaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SERVICOREMESSADESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV17ServicoRemessaTipo = "" ;
   this.ZV17ServicoRemessaTipo = "" ;
   this.OV17ServicoRemessaTipo = "" ;
   this.AV18ServicoRemessaDescricao = "" ;
   this.ZV18ServicoRemessaDescricao = "" ;
   this.OV18ServicoRemessaDescricao = "" ;
   this.Z5478ServicoRemessaId = 0 ;
   this.O5478ServicoRemessaId = 0 ;
   this.Z5473ServicoRemessaDescricao = "" ;
   this.O5473ServicoRemessaDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV17ServicoRemessaTipo = "" ;
   this.AV18ServicoRemessaDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16ServicoRemessaIdOut = 0 ;
   this.A5477ServicoRemessaTipo = "" ;
   this.A5476ServicoRemessaEmpresaId = "" ;
   this.A5478ServicoRemessaId = 0 ;
   this.A5473ServicoRemessaDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17vu2_client": ["ENTER", true] ,"e11vu2_client": ["'GXM_FIRST'", true] ,"e12vu2_client": ["'GXM_PREVIOUS'", true] ,"e13vu2_client": ["'GXM_NEXT'", true] ,"e14vu2_client": ["'GXM_LAST'", true] ,"e15vu2_client": ["'PROCURAR'", true] ,"e19vu2_client": ["'ATUALIZAPAGINA'", true] ,"e21vu1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ServicoRemessaDescricao',fld:'vSERVICOREMESSADESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ServicoRemessaTipo',fld:'vSERVICOREMESSATIPO',hsh:true},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'SERVICOREMESSAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SERVICOREMESSAID","Title")',ctrl:'SERVICOREMESSAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'SERVICOREMESSADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SERVICOREMESSADESCRICAO","Title")',ctrl:'SERVICOREMESSADESCRICAO',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5478ServicoRemessaId',fld:'SERVICOREMESSAID'}],[{av:'AV16ServicoRemessaIdOut',fld:'vSERVICOREMESSAIDOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ServicoRemessaDescricao',fld:'vSERVICOREMESSADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ServicoRemessaTipo',fld:'vSERVICOREMESSATIPO',hsh:true}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ServicoRemessaDescricao',fld:'vSERVICOREMESSADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ServicoRemessaTipo',fld:'vSERVICOREMESSATIPO',hsh:true},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ServicoRemessaDescricao',fld:'vSERVICOREMESSADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ServicoRemessaTipo',fld:'vSERVICOREMESSATIPO',hsh:true},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ServicoRemessaDescricao',fld:'vSERVICOREMESSADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ServicoRemessaTipo',fld:'vSERVICOREMESSATIPO',hsh:true},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ServicoRemessaDescricao',fld:'vSERVICOREMESSADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ServicoRemessaTipo',fld:'vSERVICOREMESSATIPO',hsh:true}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18ServicoRemessaDescricao',fld:'vSERVICOREMESSADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ServicoRemessaTipo',fld:'vSERVICOREMESSATIPO',hsh:true}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16ServicoRemessaIdOut", "vSERVICOREMESSAIDOUT", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaservicoremessa());
