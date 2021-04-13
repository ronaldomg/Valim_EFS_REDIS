/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:49:15.33
*/
gx.evt.autoSkip = false;
gx.define('hconsultadesconto', false, function () {
   this.ServerClass =  "hconsultadesconto" ;
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
      this.AV20DescontoEmpresaId=gx.fn.getControlValue("vDESCONTOEMPRESAID") ;
      this.AV19DescontoId=gx.fn.getIntegerValue("vDESCONTOID",'.') ;
   };
   this.e1713x2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1113x2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1213x2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1313x2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1413x2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1513x2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1913x2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2113x1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,34,35,36,37,43,46,48,50,52,54,55,56,57];
   this.GXLastCtrlId =57;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",33,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultadesconto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8280,34,"DESCONTOID","","","DescontoId","int",0,"px",4,4,"right",null,[],8280,"DescontoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8275,35,"DESCONTOQUANTIDADEMODULO","","","DescontoQuantidadeModulo","int",0,"px",4,4,"right",null,[],8275,"DescontoQuantidadeModulo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8276,36,"DESCONTOQUANTIDADEEMPRESA","","","DescontoQuantidadeEmpresa","int",0,"px",4,4,"right",null,[],8276,"DescontoQuantidadeEmpresa",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8277,37,"DESCONTODESCONTO","","","DescontoDesconto","decimal",0,"px",22,22,"right",null,[],8277,"DescontoDesconto",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCODIGODESCONTO",gxz:"ZV23CodigoDesconto",gxold:"OV23CodigoDesconto",gxvar:"AV23CodigoDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CodigoDesconto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23CodigoDesconto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGODESCONTO",gx.O.AV23CodigoDesconto,0)},c2v:function(){gx.O.AV23CodigoDesconto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGODESCONTO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDESCONTOQUANTIDADEMODULO",gxz:"ZV21DescontoQuantidadeModulo",gxold:"OV21DescontoQuantidadeModulo",gxvar:"AV21DescontoQuantidadeModulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DescontoQuantidadeModulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21DescontoQuantidadeModulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDESCONTOQUANTIDADEMODULO",gx.O.AV21DescontoQuantidadeModulo,0)},c2v:function(){gx.O.AV21DescontoQuantidadeModulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDESCONTOQUANTIDADEMODULO",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDESCONTOQUANTIDADEEMPRESA",gxz:"ZV22DescontoQuantidadeEmpresa",gxold:"OV22DescontoQuantidadeEmpresa",gxvar:"AV22DescontoQuantidadeEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DescontoQuantidadeEmpresa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22DescontoQuantidadeEmpresa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDESCONTOQUANTIDADEEMPRESA",gx.O.AV22DescontoQuantidadeEmpresa,0)},c2v:function(){gx.O.AV22DescontoQuantidadeEmpresa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDESCONTOQUANTIDADEEMPRESA",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDESCONTODESCONTO",gxz:"ZV24DescontoDesconto",gxold:"OV24DescontoDesconto",gxvar:"AV24DescontoDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DescontoDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV24DescontoDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDESCONTODESCONTO",gx.O.AV24DescontoDesconto,2,',')},c2v:function(){gx.O.AV24DescontoDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("vDESCONTODESCONTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DESCONTOID",gxz:"Z8280DescontoId",gxold:"O8280DescontoId",gxvar:"A8280DescontoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8280DescontoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8280DescontoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DESCONTOID",row || gx.fn.currentGridRowImpl(33),gx.O.A8280DescontoId,0)},c2v:function(){gx.O.A8280DescontoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DESCONTOID",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DESCONTOQUANTIDADEMODULO",gxz:"Z8275DescontoQuantidadeModulo",gxold:"O8275DescontoQuantidadeModulo",gxvar:"A8275DescontoQuantidadeModulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8275DescontoQuantidadeModulo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8275DescontoQuantidadeModulo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DESCONTOQUANTIDADEMODULO",row || gx.fn.currentGridRowImpl(33),gx.O.A8275DescontoQuantidadeModulo,0)},c2v:function(){gx.O.A8275DescontoQuantidadeModulo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DESCONTOQUANTIDADEMODULO",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DESCONTOQUANTIDADEEMPRESA",gxz:"Z8276DescontoQuantidadeEmpresa",gxold:"O8276DescontoQuantidadeEmpresa",gxvar:"A8276DescontoQuantidadeEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8276DescontoQuantidadeEmpresa=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8276DescontoQuantidadeEmpresa=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DESCONTOQUANTIDADEEMPRESA",row || gx.fn.currentGridRowImpl(33),gx.O.A8276DescontoQuantidadeEmpresa,0)},c2v:function(){gx.O.A8276DescontoQuantidadeEmpresa=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DESCONTOQUANTIDADEEMPRESA",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DESCONTODESCONTO",gxz:"Z8277DescontoDesconto",gxold:"O8277DescontoDesconto",gxvar:"A8277DescontoDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8277DescontoDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8277DescontoDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("DESCONTODESCONTO",row || gx.fn.currentGridRowImpl(33),gx.O.A8277DescontoDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8277DescontoDesconto=this.val()},val:function(row){return gx.fn.getGridDecimalValue("DESCONTODESCONTO",row || gx.fn.currentGridRowImpl(33),'.',',')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLENAV",grid:0};
   GXValidFnc[46]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[48]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[50]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[52]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[54]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV23CodigoDesconto = 0 ;
   this.ZV23CodigoDesconto = 0 ;
   this.OV23CodigoDesconto = 0 ;
   this.AV21DescontoQuantidadeModulo = 0 ;
   this.ZV21DescontoQuantidadeModulo = 0 ;
   this.OV21DescontoQuantidadeModulo = 0 ;
   this.AV22DescontoQuantidadeEmpresa = 0 ;
   this.ZV22DescontoQuantidadeEmpresa = 0 ;
   this.OV22DescontoQuantidadeEmpresa = 0 ;
   this.AV24DescontoDesconto = 0 ;
   this.ZV24DescontoDesconto = 0 ;
   this.OV24DescontoDesconto = 0 ;
   this.Z8280DescontoId = 0 ;
   this.O8280DescontoId = 0 ;
   this.Z8275DescontoQuantidadeModulo = 0 ;
   this.O8275DescontoQuantidadeModulo = 0 ;
   this.Z8276DescontoQuantidadeEmpresa = 0 ;
   this.O8276DescontoQuantidadeEmpresa = 0 ;
   this.Z8277DescontoDesconto = 0 ;
   this.O8277DescontoDesconto = 0 ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV23CodigoDesconto = 0 ;
   this.AV21DescontoQuantidadeModulo = 0 ;
   this.AV22DescontoQuantidadeEmpresa = 0 ;
   this.AV24DescontoDesconto = 0 ;
   this.AV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19DescontoId = 0 ;
   this.A8281DescontoEmpresaId = "" ;
   this.A8280DescontoId = 0 ;
   this.A8275DescontoQuantidadeModulo = 0 ;
   this.A8276DescontoQuantidadeEmpresa = 0 ;
   this.A8277DescontoDesconto = 0 ;
   this.AV20DescontoEmpresaId = "" ;
   this.Events = {"e1713x2_client": ["ENTER", true] ,"e1113x2_client": ["'GXM_FIRST'", true] ,"e1213x2_client": ["'GXM_PREVIOUS'", true] ,"e1313x2_client": ["'GXM_NEXT'", true] ,"e1413x2_client": ["'GXM_LAST'", true] ,"e1513x2_client": ["'PROCURAR'", true] ,"e1913x2_client": ["'ATUALIZAPAGINA'", true] ,"e2113x1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CodigoDesconto',fld:'vCODIGODESCONTO'},{av:'AV21DescontoQuantidadeModulo',fld:'vDESCONTOQUANTIDADEMODULO'},{av:'AV22DescontoQuantidadeEmpresa',fld:'vDESCONTOQUANTIDADEEMPRESA'},{av:'AV24DescontoDesconto',fld:'vDESCONTODESCONTO'},{av:'AV20DescontoEmpresaId',fld:'vDESCONTOEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'DESCONTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DESCONTOID","Title")',ctrl:'DESCONTOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'DESCONTOQUANTIDADEMODULO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DESCONTOQUANTIDADEMODULO","Title")',ctrl:'DESCONTOQUANTIDADEMODULO',prop:'Title'},{ctrl:'DESCONTOQUANTIDADEEMPRESA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DESCONTOQUANTIDADEEMPRESA","Title")',ctrl:'DESCONTOQUANTIDADEEMPRESA',prop:'Title'},{ctrl:'DESCONTODESCONTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DESCONTODESCONTO","Title")',ctrl:'DESCONTODESCONTO',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8280DescontoId',fld:'DESCONTOID'}],[{av:'AV19DescontoId',fld:'vDESCONTOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CodigoDesconto',fld:'vCODIGODESCONTO'},{av:'AV21DescontoQuantidadeModulo',fld:'vDESCONTOQUANTIDADEMODULO'},{av:'AV22DescontoQuantidadeEmpresa',fld:'vDESCONTOQUANTIDADEEMPRESA'},{av:'AV24DescontoDesconto',fld:'vDESCONTODESCONTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20DescontoEmpresaId',fld:'vDESCONTOEMPRESAID'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CodigoDesconto',fld:'vCODIGODESCONTO'},{av:'AV21DescontoQuantidadeModulo',fld:'vDESCONTOQUANTIDADEMODULO'},{av:'AV22DescontoQuantidadeEmpresa',fld:'vDESCONTOQUANTIDADEEMPRESA'},{av:'AV24DescontoDesconto',fld:'vDESCONTODESCONTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20DescontoEmpresaId',fld:'vDESCONTOEMPRESAID'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CodigoDesconto',fld:'vCODIGODESCONTO'},{av:'AV21DescontoQuantidadeModulo',fld:'vDESCONTOQUANTIDADEMODULO'},{av:'AV22DescontoQuantidadeEmpresa',fld:'vDESCONTOQUANTIDADEEMPRESA'},{av:'AV24DescontoDesconto',fld:'vDESCONTODESCONTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20DescontoEmpresaId',fld:'vDESCONTOEMPRESAID'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CodigoDesconto',fld:'vCODIGODESCONTO'},{av:'AV21DescontoQuantidadeModulo',fld:'vDESCONTOQUANTIDADEMODULO'},{av:'AV22DescontoQuantidadeEmpresa',fld:'vDESCONTOQUANTIDADEEMPRESA'},{av:'AV24DescontoDesconto',fld:'vDESCONTODESCONTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20DescontoEmpresaId',fld:'vDESCONTOEMPRESAID'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CodigoDesconto',fld:'vCODIGODESCONTO'},{av:'AV21DescontoQuantidadeModulo',fld:'vDESCONTOQUANTIDADEMODULO'},{av:'AV22DescontoQuantidadeEmpresa',fld:'vDESCONTOQUANTIDADEEMPRESA'},{av:'AV24DescontoDesconto',fld:'vDESCONTODESCONTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20DescontoEmpresaId',fld:'vDESCONTOEMPRESAID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CodigoDesconto',fld:'vCODIGODESCONTO'},{av:'AV21DescontoQuantidadeModulo',fld:'vDESCONTOQUANTIDADEMODULO'},{av:'AV22DescontoQuantidadeEmpresa',fld:'vDESCONTOQUANTIDADEEMPRESA'},{av:'AV24DescontoDesconto',fld:'vDESCONTODESCONTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20DescontoEmpresaId',fld:'vDESCONTOEMPRESAID'}],[]];
   this.setVCMap("AV20DescontoEmpresaId", "vDESCONTOEMPRESAID", 0, "char");
   this.setVCMap("AV19DescontoId", "vDESCONTOID", 0, "int");
   this.setVCMap("AV20DescontoEmpresaId", "vDESCONTOEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV20DescontoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultadesconto());
