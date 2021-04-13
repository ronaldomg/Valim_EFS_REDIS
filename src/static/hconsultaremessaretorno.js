/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:37:59.73
*/
gx.evt.autoSkip = false;
gx.define('hconsultaremessaretorno', false, function () {
   this.ServerClass =  "hconsultaremessaretorno" ;
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
      this.AV16RemessaRetornoId=gx.fn.getIntegerValue("vREMESSARETORNOID",'.') ;
   };
   this.e17is2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11is2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12is2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13is2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14is2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15is2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20is2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21is1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,29,35,38,40,42,44,46,47,48,49,50];
   this.GXLastCtrlId =50;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaremessaretorno",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2785,24,"REMESSARETORNOID","","","RemessaRetornoId","int",0,"px",4,4,"right",null,[],2785,"RemessaRetornoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2786,25,"REMESSARETORNODESCRICAO","","","RemessaRetornoDescricao","svchar",0,"px",40,40,"left",null,[],2786,"RemessaRetornoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Desctipo",26,"vDESCTIPO","Tipo","","DescTipo","svchar",0,"px",15,15,"left",null,[],"Desctipo","DescTipo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2787,27,"REMESSARETORNOTAMANHO","Tamanho","","RemessaRetornoTamanho","int",0,"px",4,4,"right",null,[],2787,"RemessaRetornoTamanho",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2792,28,"REMESSARETORNOTIPO","Tipo","","RemessaRetornoTipo","char",0,"px",1,1,"left",null,[],2792,"RemessaRetornoTipo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2782,29,"REMESSARETORNOBANCODESC","Nome do Banco","","RemessaRetornoBancoDesc","svchar",0,"px",25,25,"left",null,[],2782,"RemessaRetornoBancoDesc",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCREMESSARETORNOID",gxz:"ZV18cRemessaRetornoId",gxold:"OV18cRemessaRetornoId",gxvar:"AV18cRemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18cRemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18cRemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOID",gx.O.AV18cRemessaRetornoId,0)},c2v:function(){gx.O.AV18cRemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCREMESSARETORNODESCRICAO",gxz:"ZV17cRemessaRetornoDescricao",gxold:"OV17cRemessaRetornoDescricao",gxvar:"AV17cRemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cRemessaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV17cRemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNODESCRICAO",gx.O.AV17cRemessaRetornoDescricao,0)},c2v:function(){gx.O.AV17cRemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOID",gxz:"Z2785RemessaRetornoId",gxold:"O2785RemessaRetornoId",gxvar:"A2785RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2785RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2785RemessaRetornoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOID",row || gx.fn.currentGridRowImpl(23),gx.O.A2785RemessaRetornoId,0)},c2v:function(){gx.O.A2785RemessaRetornoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNODESCRICAO",gxz:"Z2786RemessaRetornoDescricao",gxold:"O2786RemessaRetornoDescricao",gxvar:"A2786RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2786RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.Z2786RemessaRetornoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A2786RemessaRetornoDescricao,0)},c2v:function(){gx.O.A2786RemessaRetornoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTIPO",gxz:"ZV20DescTipo",gxold:"OV20DescTipo",gxvar:"AV20DescTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20DescTipo=Value},v2z:function(Value){gx.O.ZV20DescTipo=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCTIPO",row || gx.fn.currentGridRowImpl(23),gx.O.AV20DescTipo,0)},c2v:function(){gx.O.AV20DescTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCTIPO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOTAMANHO",gxz:"Z2787RemessaRetornoTamanho",gxold:"O2787RemessaRetornoTamanho",gxvar:"A2787RemessaRetornoTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2787RemessaRetornoTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2787RemessaRetornoTamanho=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOTAMANHO",row || gx.fn.currentGridRowImpl(23),gx.O.A2787RemessaRetornoTamanho,0)},c2v:function(){gx.O.A2787RemessaRetornoTamanho=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOTAMANHO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOTIPO",gxz:"Z2792RemessaRetornoTipo",gxold:"O2792RemessaRetornoTipo",gxvar:"A2792RemessaRetornoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2792RemessaRetornoTipo=Value},v2z:function(Value){gx.O.Z2792RemessaRetornoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOTIPO",row || gx.fn.currentGridRowImpl(23),gx.O.A2792RemessaRetornoTipo,0)},c2v:function(){gx.O.A2792RemessaRetornoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOTIPO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOBANCODESC",gxz:"Z2782RemessaRetornoBancoDesc",gxold:"O2782RemessaRetornoBancoDesc",gxvar:"A2782RemessaRetornoBancoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2782RemessaRetornoBancoDesc=Value},v2z:function(Value){gx.O.Z2782RemessaRetornoBancoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOBANCODESC",row || gx.fn.currentGridRowImpl(23),gx.O.A2782RemessaRetornoBancoDesc,0)},c2v:function(){gx.O.A2782RemessaRetornoBancoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOBANCODESC",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLENAV",grid:0};
   GXValidFnc[38]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[40]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[42]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[44]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[46]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOLAYOUT",gxz:"ZV19TipoLayout",gxold:"OV19TipoLayout",gxvar:"AV19TipoLayout",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19TipoLayout=Value},v2z:function(Value){gx.O.ZV19TipoLayout=Value},v2c:function(){gx.fn.setControlValue("vTIPOLAYOUT",gx.O.AV19TipoLayout,0)},c2v:function(){gx.O.AV19TipoLayout=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLAYOUT")},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV22Pagina",gxold:"OV22Pagina",gxvar:"AV22Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV22Pagina)},c2v:function(){gx.O.AV22Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV23PaginaAux",gxold:"OV23PaginaAux",gxvar:"AV23PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV23PaginaAux,0)},c2v:function(){gx.O.AV23PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV18cRemessaRetornoId = 0 ;
   this.ZV18cRemessaRetornoId = 0 ;
   this.OV18cRemessaRetornoId = 0 ;
   this.AV17cRemessaRetornoDescricao = "" ;
   this.ZV17cRemessaRetornoDescricao = "" ;
   this.OV17cRemessaRetornoDescricao = "" ;
   this.Z2785RemessaRetornoId = 0 ;
   this.O2785RemessaRetornoId = 0 ;
   this.Z2786RemessaRetornoDescricao = "" ;
   this.O2786RemessaRetornoDescricao = "" ;
   this.ZV20DescTipo = "" ;
   this.OV20DescTipo = "" ;
   this.Z2787RemessaRetornoTamanho = 0 ;
   this.O2787RemessaRetornoTamanho = 0 ;
   this.Z2792RemessaRetornoTipo = "" ;
   this.O2792RemessaRetornoTipo = "" ;
   this.Z2782RemessaRetornoBancoDesc = "" ;
   this.O2782RemessaRetornoBancoDesc = "" ;
   this.AV19TipoLayout = "" ;
   this.ZV19TipoLayout = "" ;
   this.OV19TipoLayout = "" ;
   this.AV22Pagina = 0 ;
   this.ZV22Pagina = 0 ;
   this.OV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.ZV23PaginaAux = 0 ;
   this.OV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18cRemessaRetornoId = 0 ;
   this.AV17cRemessaRetornoDescricao = "" ;
   this.AV19TipoLayout = "" ;
   this.AV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16RemessaRetornoId = 0 ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.A2783RemessaRetornoBancoEmpId = "" ;
   this.A2781RemessaRetornoBancoId = 0 ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2786RemessaRetornoDescricao = "" ;
   this.AV20DescTipo = "" ;
   this.A2787RemessaRetornoTamanho = 0 ;
   this.A2792RemessaRetornoTipo = "" ;
   this.A2782RemessaRetornoBancoDesc = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17is2_client": ["ENTER", true] ,"e11is2_client": ["'GXM_FIRST'", true] ,"e12is2_client": ["'GXM_PREVIOUS'", true] ,"e13is2_client": ["'GXM_NEXT'", true] ,"e14is2_client": ["'GXM_LAST'", true] ,"e15is2_client": ["'PROCURAR'", true] ,"e20is2_client": ["'ATUALIZAPAGINA'", true] ,"e21is1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV17cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19TipoLayout',fld:'vTIPOLAYOUT',hsh:true},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'REMESSARETORNOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNOID","Title")',ctrl:'REMESSARETORNOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'REMESSARETORNODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNODESCRICAO","Title")',ctrl:'REMESSARETORNODESCRICAO',prop:'Title'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'}],[{av:'AV16RemessaRetornoId',fld:'vREMESSARETORNOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV17cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19TipoLayout',fld:'vTIPOLAYOUT',hsh:true},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV17cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19TipoLayout',fld:'vTIPOLAYOUT',hsh:true},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV17cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19TipoLayout',fld:'vTIPOLAYOUT',hsh:true},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV17cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19TipoLayout',fld:'vTIPOLAYOUT',hsh:true},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'}],[{av:'AV20DescTipo',fld:'vDESCTIPO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV17cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19TipoLayout',fld:'vTIPOLAYOUT',hsh:true},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV17cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19TipoLayout',fld:'vTIPOLAYOUT',hsh:true},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16RemessaRetornoId", "vREMESSARETORNOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar({rfrVar:"A2792RemessaRetornoTipo", rfrProp:"Value", gxAttId:"2792"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaremessaretorno());
