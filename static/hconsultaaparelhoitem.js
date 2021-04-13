/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:3:48.26
*/
gx.evt.autoSkip = false;
gx.define('hconsultaaparelhoitem', false, function () {
   this.ServerClass =  "hconsultaaparelhoitem" ;
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
      this.AV19AparelhoItemId=gx.fn.getIntegerValue("vAPARELHOITEMID",'.') ;
   };
   this.e181bw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111bw2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121bw2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131bw2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141bw2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151bw2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e161bw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e201bw2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e221bw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,24,30,31,32,38,41,43,45,47,49,50,51,52,53,54];
   this.GXLastCtrlId =54;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaaparelhoitem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8880,30,"APARELHOITEMID","","","AparelhoItemId","int",0,"px",4,4,"right",null,[],8880,"AparelhoItemId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8876,31,"APARELHOITEMDESCRICAO","","","AparelhoItemDescricao","svchar",0,"px",30,30,"left",null,[],8876,"AparelhoItemDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8825,32,"APARELHOID","Cod. Aparelho","","AparelhoId","int",0,"px",4,4,"right",null,[],8825,"AparelhoId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOITEMIDENTRADA",gxz:"ZV20AparelhoItemIdEntrada",gxold:"OV20AparelhoItemIdEntrada",gxvar:"AV20AparelhoItemIdEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AparelhoItemIdEntrada=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AparelhoItemIdEntrada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAPARELHOITEMIDENTRADA",gx.O.AV20AparelhoItemIdEntrada,0)},c2v:function(){gx.O.AV20AparelhoItemIdEntrada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOITEMIDENTRADA",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOITEMDESCRICAO",gxz:"ZV21AparelhoItemDescricao",gxold:"OV21AparelhoItemDescricao",gxvar:"AV21AparelhoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AparelhoItemDescricao=Value},v2z:function(Value){gx.O.ZV21AparelhoItemDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOITEMDESCRICAO",gx.O.AV21AparelhoItemDescricao,0)},c2v:function(){gx.O.AV21AparelhoItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOITEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"APARELHO", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOID",gxz:"ZV22AparelhoId",gxold:"OV22AparelhoId",gxvar:"AV22AparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22AparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22AparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAPARELHOID",gx.O.AV22AparelhoId,0)},c2v:function(){gx.O.AV22AparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHODESCRICAO",gxz:"ZV23AparelhoDescricao",gxold:"OV23AparelhoDescricao",gxvar:"AV23AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AparelhoDescricao=Value},v2z:function(Value){gx.O.ZV23AparelhoDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHODESCRICAO",gx.O.AV23AparelhoDescricao,0)},c2v:function(){gx.O.AV23AparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMID",gxz:"Z8880AparelhoItemId",gxold:"O8880AparelhoItemId",gxvar:"A8880AparelhoItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8880AparelhoItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8880AparelhoItemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOITEMID",row || gx.fn.currentGridRowImpl(29),gx.O.A8880AparelhoItemId,0)},c2v:function(){gx.O.A8880AparelhoItemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOITEMID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMDESCRICAO",gxz:"Z8876AparelhoItemDescricao",gxold:"O8876AparelhoItemDescricao",gxvar:"A8876AparelhoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8876AparelhoItemDescricao=Value},v2z:function(Value){gx.O.Z8876AparelhoItemDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(29),gx.O.A8876AparelhoItemDescricao,0)},c2v:function(){gx.O.A8876AparelhoItemDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOID",gxz:"Z8825AparelhoId",gxold:"O8825AparelhoId",gxvar:"A8825AparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8825AparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8825AparelhoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOID",row || gx.fn.currentGridRowImpl(29),gx.O.A8825AparelhoId,0)},c2v:function(){gx.O.A8825AparelhoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLENAV",grid:0};
   GXValidFnc[41]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[49]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[50]={fld:"JS", format:2,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   this.AV20AparelhoItemIdEntrada = 0 ;
   this.ZV20AparelhoItemIdEntrada = 0 ;
   this.OV20AparelhoItemIdEntrada = 0 ;
   this.AV21AparelhoItemDescricao = "" ;
   this.ZV21AparelhoItemDescricao = "" ;
   this.OV21AparelhoItemDescricao = "" ;
   this.AV22AparelhoId = 0 ;
   this.ZV22AparelhoId = 0 ;
   this.OV22AparelhoId = 0 ;
   this.AV23AparelhoDescricao = "" ;
   this.ZV23AparelhoDescricao = "" ;
   this.OV23AparelhoDescricao = "" ;
   this.Z8880AparelhoItemId = 0 ;
   this.O8880AparelhoItemId = 0 ;
   this.Z8876AparelhoItemDescricao = "" ;
   this.O8876AparelhoItemDescricao = "" ;
   this.Z8825AparelhoId = 0 ;
   this.O8825AparelhoId = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV20AparelhoItemIdEntrada = 0 ;
   this.AV21AparelhoItemDescricao = "" ;
   this.AV22AparelhoId = 0 ;
   this.AV23AparelhoDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16Pagina = 0 ;
   this.AV19AparelhoItemId = 0 ;
   this.A9245AparelhoItemSituacao = "" ;
   this.A8879AparelhoItemEmpresaId = "" ;
   this.A8880AparelhoItemId = 0 ;
   this.A8876AparelhoItemDescricao = "" ;
   this.A8825AparelhoId = 0 ;
   this.Events = {"e181bw2_client": ["ENTER", true] ,"e111bw2_client": ["'GXM_FIRST'", true] ,"e121bw2_client": ["'GXM_PREVIOUS'", true] ,"e131bw2_client": ["'GXM_NEXT'", true] ,"e141bw2_client": ["'GXM_LAST'", true] ,"e151bw2_client": ["'PROCURAR'", true] ,"e161bw2_client": ["'FECHAR'", true] ,"e201bw2_client": ["'ATUALIZAPAGINA'", true] ,"e221bw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV20AparelhoItemIdEntrada',fld:'vAPARELHOITEMIDENTRADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19AparelhoItemId',fld:'vAPARELHOITEMID'}],[{av:'AV20AparelhoItemIdEntrada',fld:'vAPARELHOITEMIDENTRADA'},{ctrl:'APARELHOITEMID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APARELHOITEMID","Title")',ctrl:'APARELHOITEMID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'APARELHOITEMDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APARELHOITEMDESCRICAO","Title")',ctrl:'APARELHOITEMDESCRICAO',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'}],[{av:'AV19AparelhoItemId',fld:'vAPARELHOITEMID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20AparelhoItemIdEntrada',fld:'vAPARELHOITEMIDENTRADA'},{av:'AV21AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV19AparelhoItemId',fld:'vAPARELHOITEMID'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20AparelhoItemIdEntrada',fld:'vAPARELHOITEMIDENTRADA'},{av:'AV21AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV19AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20AparelhoItemIdEntrada',fld:'vAPARELHOITEMIDENTRADA'},{av:'AV21AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV19AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20AparelhoItemIdEntrada',fld:'vAPARELHOITEMIDENTRADA'},{av:'AV21AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV19AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20AparelhoItemIdEntrada',fld:'vAPARELHOITEMIDENTRADA'},{av:'AV21AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV19AparelhoItemId',fld:'vAPARELHOITEMID'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19AparelhoItemId',fld:'vAPARELHOITEMID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20AparelhoItemIdEntrada',fld:'vAPARELHOITEMIDENTRADA'},{av:'AV21AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV19AparelhoItemId',fld:'vAPARELHOITEMID'}],[]];
   this.setVCMap("AV19AparelhoItemId", "vAPARELHOITEMID", 0, "int");
   this.setVCMap("AV19AparelhoItemId", "vAPARELHOITEMID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar({rfrVar:"AV19AparelhoItemId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaaparelhoitem());
