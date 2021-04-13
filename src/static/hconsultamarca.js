/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:13:55.16
*/
gx.evt.autoSkip = false;
gx.define('hconsultamarca', false, function () {
   this.ServerClass =  "hconsultamarca" ;
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
      this.AV21ClassProdMarca=gx.fn.getControlValue("vCLASSPRODMARCA") ;
      this.AV25SnPedidoCompra=gx.fn.getControlValue("vSNPEDIDOCOMPRA") ;
      this.AV19OpcaoClassificacaoEstCodigo=gx.fn.getControlValue("vOPCAOCLASSIFICACAOESTCODIGO") ;
   };
   this.Valid_Classificacaoestid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(29) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CLASSIFICACAOESTID", gx.fn.currentGridRowImpl(29));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e17ru2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11ru2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ru2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ru2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ru2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15ru2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19ru2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21ru1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,30,31,32,33,39,42,44,46,48,50,51,52,53];
   this.GXLastCtrlId =53;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamarca",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2931,30,"OPCAOCLASSIFICACAOESTID","","","OpcaoClassificacaoEstId","char",0,"px",15,15,"left",null,[],2931,"OpcaoClassificacaoEstId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2926,31,"OPCAOCLASSIFICACAOESTDESCRICAO","","","OpcaoClassificacaoEstDescricao","svchar",0,"px",30,30,"left",null,[],2926,"OpcaoClassificacaoEstDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2930,32,"CLASSIFICACAOESTID","","","ClassificacaoEstId","char",0,"px",15,15,"left",null,[],2930,"ClassificacaoEstId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2922,33,"CLASSIFICACAOESTDESCRICAO","","","ClassificacaoEstDescricao","svchar",0,"px",40,40,"left",null,[],2922,"ClassificacaoEstDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSIFICACAOESTID",gxz:"ZV16ClassificacaoEstId",gxold:"OV16ClassificacaoEstId",gxvar:"AV16ClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV16ClassificacaoEstId=Value},v2z:function(Value){gx.O.ZV16ClassificacaoEstId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOESTID",gx.O.AV16ClassificacaoEstId)},c2v:function(){gx.O.AV16ClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOPCAOCLASSIFICACAOESTID",gxz:"ZV17OpcaoClassificacaoEstId",gxold:"OV17OpcaoClassificacaoEstId",gxvar:"AV17OpcaoClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17OpcaoClassificacaoEstId=Value},v2z:function(Value){gx.O.ZV17OpcaoClassificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAOESTID",gx.O.AV17OpcaoClassificacaoEstId,0)},c2v:function(){gx.O.AV17OpcaoClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOPCAOCLASSIFICACAOESTDESCRICAO",gxz:"ZV18OpcaoClassificacaoEstDescricao",gxold:"OV18OpcaoClassificacaoEstDescricao",gxvar:"AV18OpcaoClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18OpcaoClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.ZV18OpcaoClassificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAOESTDESCRICAO",gx.O.AV18OpcaoClassificacaoEstDescricao,0)},c2v:function(){gx.O.AV18OpcaoClassificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAOESTID",gxz:"Z2931OpcaoClassificacaoEstId",gxold:"O2931OpcaoClassificacaoEstId",gxvar:"A2931OpcaoClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2931OpcaoClassificacaoEstId=Value},v2z:function(Value){gx.O.Z2931OpcaoClassificacaoEstId=Value},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(29),gx.O.A2931OpcaoClassificacaoEstId,0)},c2v:function(){gx.O.A2931OpcaoClassificacaoEstId=this.val()},val:function(row){return gx.fn.getGridControlValue("OPCAOCLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAOESTDESCRICAO",gxz:"Z2926OpcaoClassificacaoEstDescricao",gxold:"O2926OpcaoClassificacaoEstDescricao",gxvar:"A2926OpcaoClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2926OpcaoClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.Z2926OpcaoClassificacaoEstDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(29),gx.O.A2926OpcaoClassificacaoEstDescricao,0)},c2v:function(){gx.O.A2926OpcaoClassificacaoEstDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OPCAOCLASSIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Classificacaoestid,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTID",gxz:"Z2930ClassificacaoEstId",gxold:"O2930ClassificacaoEstId",gxvar:"A2930ClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2930ClassificacaoEstId=Value},v2z:function(Value){gx.O.Z2930ClassificacaoEstId=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(29),gx.O.A2930ClassificacaoEstId,0)},c2v:function(){gx.O.A2930ClassificacaoEstId=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTDESCRICAO",gxz:"Z2922ClassificacaoEstDescricao",gxold:"O2922ClassificacaoEstDescricao",gxvar:"A2922ClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2922ClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.Z2922ClassificacaoEstDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(29),gx.O.A2922ClassificacaoEstDescricao,0)},c2v:function(){gx.O.A2922ClassificacaoEstDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLENAV",grid:0};
   GXValidFnc[42]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[50]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16ClassificacaoEstId = "" ;
   this.ZV16ClassificacaoEstId = "" ;
   this.OV16ClassificacaoEstId = "" ;
   this.AV17OpcaoClassificacaoEstId = "" ;
   this.ZV17OpcaoClassificacaoEstId = "" ;
   this.OV17OpcaoClassificacaoEstId = "" ;
   this.AV18OpcaoClassificacaoEstDescricao = "" ;
   this.ZV18OpcaoClassificacaoEstDescricao = "" ;
   this.OV18OpcaoClassificacaoEstDescricao = "" ;
   this.Z2931OpcaoClassificacaoEstId = "" ;
   this.O2931OpcaoClassificacaoEstId = "" ;
   this.Z2926OpcaoClassificacaoEstDescricao = "" ;
   this.O2926OpcaoClassificacaoEstDescricao = "" ;
   this.Z2930ClassificacaoEstId = "" ;
   this.O2930ClassificacaoEstId = "" ;
   this.Z2922ClassificacaoEstDescricao = "" ;
   this.O2922ClassificacaoEstDescricao = "" ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16ClassificacaoEstId = "" ;
   this.AV17OpcaoClassificacaoEstId = "" ;
   this.AV18OpcaoClassificacaoEstDescricao = "" ;
   this.AV24PaginaAux = 0 ;
   this.AV23Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV21ClassProdMarca = "" ;
   this.AV25SnPedidoCompra = "" ;
   this.AV19OpcaoClassificacaoEstCodigo = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2931OpcaoClassificacaoEstId = "" ;
   this.A2926OpcaoClassificacaoEstDescricao = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2922ClassificacaoEstDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17ru2_client": ["ENTER", true] ,"e11ru2_client": ["'GXM_FIRST'", true] ,"e12ru2_client": ["'GXM_PREVIOUS'", true] ,"e13ru2_client": ["'GXM_NEXT'", true] ,"e14ru2_client": ["'GXM_LAST'", true] ,"e15ru2_client": ["'PROCURAR'", true] ,"e19ru2_client": ["'ATUALIZAPAGINA'", true] ,"e21ru1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV17OpcaoClassificacaoEstId',fld:'vOPCAOCLASSIFICACAOESTID'},{av:'AV18OpcaoClassificacaoEstDescricao',fld:'vOPCAOCLASSIFICACAOESTDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'OPCAOCLASSIFICACAOESTID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OPCAOCLASSIFICACAOESTID","Title")',ctrl:'OPCAOCLASSIFICACAOESTID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'OPCAOCLASSIFICACAOESTDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OPCAOCLASSIFICACAOESTDESCRICAO","Title")',ctrl:'OPCAOCLASSIFICACAOESTDESCRICAO',prop:'Title'},{ctrl:'CLASSIFICACAOESTID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSIFICACAOESTID","Title")',ctrl:'CLASSIFICACAOESTID',prop:'Title'},{ctrl:'CLASSIFICACAOESTDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSIFICACAOESTDESCRICAO","Title")',ctrl:'CLASSIFICACAOESTDESCRICAO',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'}],[{av:'AV19OpcaoClassificacaoEstCodigo',fld:'vOPCAOCLASSIFICACAOESTCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV17OpcaoClassificacaoEstId',fld:'vOPCAOCLASSIFICACAOESTID'},{av:'AV18OpcaoClassificacaoEstDescricao',fld:'vOPCAOCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV17OpcaoClassificacaoEstId',fld:'vOPCAOCLASSIFICACAOESTID'},{av:'AV18OpcaoClassificacaoEstDescricao',fld:'vOPCAOCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV17OpcaoClassificacaoEstId',fld:'vOPCAOCLASSIFICACAOESTID'},{av:'AV18OpcaoClassificacaoEstDescricao',fld:'vOPCAOCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV17OpcaoClassificacaoEstId',fld:'vOPCAOCLASSIFICACAOESTID'},{av:'AV18OpcaoClassificacaoEstDescricao',fld:'vOPCAOCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV17OpcaoClassificacaoEstId',fld:'vOPCAOCLASSIFICACAOESTID'},{av:'AV18OpcaoClassificacaoEstDescricao',fld:'vOPCAOCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV17OpcaoClassificacaoEstId',fld:'vOPCAOCLASSIFICACAOESTID'},{av:'AV18OpcaoClassificacaoEstDescricao',fld:'vOPCAOCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV21ClassProdMarca", "vCLASSPRODMARCA", 0, "char");
   this.setVCMap("AV25SnPedidoCompra", "vSNPEDIDOCOMPRA", 0, "char");
   this.setVCMap("AV19OpcaoClassificacaoEstCodigo", "vOPCAOCLASSIFICACAOESTCODIGO", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamarca());
