/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:7:22.65
*/
gx.evt.autoSkip = false;
gx.define('hconsultaprecofabricante', false, function () {
   this.ServerClass =  "hconsultaprecofabricante" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A10914PrecoFabricanteData=gx.fn.getDateValue("PRECOFABRICANTEDATA") ;
      this.A10911PrecoFabricanteEmpresaId=gx.fn.getControlValue("PRECOFABRICANTEEMPRESAID") ;
      this.AV22PrecoFabricanteEmpresaId=gx.fn.getControlValue("vPRECOFABRICANTEEMPRESAID") ;
      this.A10912PrecoFabricantePessoaEmpId=gx.fn.getControlValue("PRECOFABRICANTEPESSOAEMPID") ;
      this.AV17PessoaEmpresaId=gx.fn.getControlValue("vPESSOAEMPRESAID") ;
      this.A10913PrecoFabricantePessoaId=gx.fn.getIntegerValue("PRECOFABRICANTEPESSOAID",'.') ;
      this.AV20PrecoFabricanteData=gx.fn.getDateValue("vPRECOFABRICANTEDATA") ;
   };
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e162ah2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e112ah2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122ah2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132ah2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142ah2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e192ah2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e202ah1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,18,21,24,26,28,30,32,33,34,35];
   this.GXLastCtrlId =35;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaprecofabricante",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Precofabricantedatagrid",18,"vPRECOFABRICANTEDATAGRID","","","PrecoFabricanteDataGrid","date",0,"px",10,10,"right",null,[],"Precofabricantedatagrid","PrecoFabricanteDataGrid",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV19PessoaId",gxold:"OV19PessoaId",gxvar:"AV19PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV19PessoaId,0)},c2v:function(){gx.O.AV19PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV18PessoaFantasia",gxold:"OV18PessoaFantasia",gxvar:"AV18PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PessoaFantasia=Value},v2z:function(Value){gx.O.ZV18PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV18PessoaFantasia,0)},c2v:function(){gx.O.AV18PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOFABRICANTEDATAGRID",gxz:"ZV21PrecoFabricanteDataGrid",gxold:"OV21PrecoFabricanteDataGrid",gxvar:"AV21PrecoFabricanteDataGrid",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21PrecoFabricanteDataGrid=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21PrecoFabricanteDataGrid=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vPRECOFABRICANTEDATAGRID",row || gx.fn.currentGridRowImpl(17),gx.O.AV21PrecoFabricanteDataGrid,0)},c2v:function(){gx.O.AV21PrecoFabricanteDataGrid=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vPRECOFABRICANTEDATAGRID",row || gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TABLENAV",grid:0};
   GXValidFnc[24]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[32]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV15Orderedby",gxold:"OV15Orderedby",gxvar:"AV15Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV15Orderedby,0)},c2v:function(){gx.O.AV15Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAG",gxz:"ZV16Pag",gxold:"OV16Pag",gxvar:"AV16Pag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Pag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAG",gx.O.AV16Pag,0)},c2v:function(){gx.O.AV16Pag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAG",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAG",gxz:"ZV7CtrlPag",gxold:"OV7CtrlPag",gxvar:"AV7CtrlPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7CtrlPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7CtrlPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAG",gx.O.AV7CtrlPag,0)},c2v:function(){gx.O.AV7CtrlPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAG",'.')},nac:gx.falseFn};
   this.AV19PessoaId = 0 ;
   this.ZV19PessoaId = 0 ;
   this.OV19PessoaId = 0 ;
   this.AV18PessoaFantasia = "" ;
   this.ZV18PessoaFantasia = "" ;
   this.OV18PessoaFantasia = "" ;
   this.ZV21PrecoFabricanteDataGrid = gx.date.nullDate() ;
   this.OV21PrecoFabricanteDataGrid = gx.date.nullDate() ;
   this.AV15Orderedby = 0 ;
   this.ZV15Orderedby = 0 ;
   this.OV15Orderedby = 0 ;
   this.AV16Pag = 0 ;
   this.ZV16Pag = 0 ;
   this.OV16Pag = 0 ;
   this.AV7CtrlPag = 0 ;
   this.ZV7CtrlPag = 0 ;
   this.OV7CtrlPag = 0 ;
   this.AV19PessoaId = 0 ;
   this.AV18PessoaFantasia = "" ;
   this.AV15Orderedby = 0 ;
   this.AV16Pag = 0 ;
   this.AV7CtrlPag = 0 ;
   this.AV20PrecoFabricanteData = gx.date.nullDate() ;
   this.AV21PrecoFabricanteDataGrid = gx.date.nullDate() ;
   this.A10913PrecoFabricantePessoaId = 0 ;
   this.A10912PrecoFabricantePessoaEmpId = "" ;
   this.A10911PrecoFabricanteEmpresaId = "" ;
   this.A10914PrecoFabricanteData = gx.date.nullDate() ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.AV22PrecoFabricanteEmpresaId = "" ;
   this.AV17PessoaEmpresaId = "" ;
   this.Events = {"e162ah2_client": ["ENTER", true] ,"e112ah2_client": ["'GXM_FIRST'", true] ,"e122ah2_client": ["'GXM_PREVIOUS'", true] ,"e132ah2_client": ["'GXM_NEXT'", true] ,"e142ah2_client": ["'GXM_LAST'", true] ,"e192ah2_client": ["'ATUALIZAPAGINA'", true] ,"e202ah1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'A10914PrecoFabricanteData',fld:'PRECOFABRICANTEDATA'},{av:'A10911PrecoFabricanteEmpresaId',fld:'PRECOFABRICANTEEMPRESAID'},{av:'AV22PrecoFabricanteEmpresaId',fld:'vPRECOFABRICANTEEMPRESAID'},{av:'A10912PrecoFabricantePessoaEmpId',fld:'PRECOFABRICANTEPESSOAEMPID'},{av:'AV17PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A10913PrecoFabricantePessoaId',fld:'PRECOFABRICANTEPESSOAID'},{av:'AV19PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV21PrecoFabricanteDataGrid',fld:'vPRECOFABRICANTEDATAGRID'},{av:'AV16Pag',fld:'vPAG'},{av:'AV7CtrlPag',fld:'vCTRLPAG'},{av:'AV15Orderedby',fld:'vORDEREDBY'}],[{ctrl:'vPRECOFABRICANTEDATAGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vPRECOFABRICANTEDATAGRID","Title")',ctrl:'vPRECOFABRICANTEDATAGRID',prop:'Title'},{av:'AV11Imagem',fld:'vIMAGEM'}]];
   this.EvtParms["ENTER"] = [[{av:'AV21PrecoFabricanteDataGrid',fld:'vPRECOFABRICANTEDATAGRID'}],[{av:'AV20PrecoFabricanteData',fld:'vPRECOFABRICANTEDATA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15Orderedby',fld:'vORDEREDBY'},{av:'A10914PrecoFabricanteData',fld:'PRECOFABRICANTEDATA'},{av:'A10911PrecoFabricanteEmpresaId',fld:'PRECOFABRICANTEEMPRESAID'},{av:'AV22PrecoFabricanteEmpresaId',fld:'vPRECOFABRICANTEEMPRESAID'},{av:'A10912PrecoFabricantePessoaEmpId',fld:'PRECOFABRICANTEPESSOAEMPID'},{av:'AV17PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A10913PrecoFabricantePessoaId',fld:'PRECOFABRICANTEPESSOAID'},{av:'AV19PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV21PrecoFabricanteDataGrid',fld:'vPRECOFABRICANTEDATAGRID'},{av:'AV16Pag',fld:'vPAG'},{av:'AV7CtrlPag',fld:'vCTRLPAG'}],[{av:'AV7CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15Orderedby',fld:'vORDEREDBY'},{av:'A10914PrecoFabricanteData',fld:'PRECOFABRICANTEDATA'},{av:'A10911PrecoFabricanteEmpresaId',fld:'PRECOFABRICANTEEMPRESAID'},{av:'AV22PrecoFabricanteEmpresaId',fld:'vPRECOFABRICANTEEMPRESAID'},{av:'A10912PrecoFabricantePessoaEmpId',fld:'PRECOFABRICANTEPESSOAEMPID'},{av:'AV17PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A10913PrecoFabricantePessoaId',fld:'PRECOFABRICANTEPESSOAID'},{av:'AV19PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV21PrecoFabricanteDataGrid',fld:'vPRECOFABRICANTEDATAGRID'},{av:'AV16Pag',fld:'vPAG'},{av:'AV7CtrlPag',fld:'vCTRLPAG'}],[{av:'AV7CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15Orderedby',fld:'vORDEREDBY'},{av:'A10914PrecoFabricanteData',fld:'PRECOFABRICANTEDATA'},{av:'A10911PrecoFabricanteEmpresaId',fld:'PRECOFABRICANTEEMPRESAID'},{av:'AV22PrecoFabricanteEmpresaId',fld:'vPRECOFABRICANTEEMPRESAID'},{av:'A10912PrecoFabricantePessoaEmpId',fld:'PRECOFABRICANTEPESSOAEMPID'},{av:'AV17PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A10913PrecoFabricantePessoaId',fld:'PRECOFABRICANTEPESSOAID'},{av:'AV19PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV21PrecoFabricanteDataGrid',fld:'vPRECOFABRICANTEDATAGRID'},{av:'AV16Pag',fld:'vPAG'},{av:'AV7CtrlPag',fld:'vCTRLPAG'}],[{av:'AV7CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15Orderedby',fld:'vORDEREDBY'},{av:'A10914PrecoFabricanteData',fld:'PRECOFABRICANTEDATA'},{av:'A10911PrecoFabricanteEmpresaId',fld:'PRECOFABRICANTEEMPRESAID'},{av:'AV22PrecoFabricanteEmpresaId',fld:'vPRECOFABRICANTEEMPRESAID'},{av:'A10912PrecoFabricantePessoaEmpId',fld:'PRECOFABRICANTEPESSOAEMPID'},{av:'AV17PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A10913PrecoFabricantePessoaId',fld:'PRECOFABRICANTEPESSOAID'},{av:'AV19PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV21PrecoFabricanteDataGrid',fld:'vPRECOFABRICANTEDATAGRID'},{av:'AV16Pag',fld:'vPAG'},{av:'AV7CtrlPag',fld:'vCTRLPAG'}],[{av:'AV7CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A10914PrecoFabricanteData',fld:'PRECOFABRICANTEDATA'},{av:'A10911PrecoFabricanteEmpresaId',fld:'PRECOFABRICANTEEMPRESAID'},{av:'AV22PrecoFabricanteEmpresaId',fld:'vPRECOFABRICANTEEMPRESAID'},{av:'A10912PrecoFabricantePessoaEmpId',fld:'PRECOFABRICANTEPESSOAEMPID'},{av:'AV17PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A10913PrecoFabricantePessoaId',fld:'PRECOFABRICANTEPESSOAID'},{av:'AV19PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV21PrecoFabricanteDataGrid',fld:'vPRECOFABRICANTEDATAGRID'},{av:'AV16Pag',fld:'vPAG'},{av:'AV7CtrlPag',fld:'vCTRLPAG'}],[{av:'AV6Cont',fld:'vCONT'},{av:'AV21PrecoFabricanteDataGrid',fld:'vPRECOFABRICANTEDATAGRID'},{av:'AV23Res',fld:'vRES'},{av:'AV24ResInt',fld:'vRESINT'},{av:'AV16Pag',fld:'vPAG'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15Orderedby',fld:'vORDEREDBY'},{av:'A10914PrecoFabricanteData',fld:'PRECOFABRICANTEDATA'},{av:'A10911PrecoFabricanteEmpresaId',fld:'PRECOFABRICANTEEMPRESAID'},{av:'AV22PrecoFabricanteEmpresaId',fld:'vPRECOFABRICANTEEMPRESAID'},{av:'A10912PrecoFabricantePessoaEmpId',fld:'PRECOFABRICANTEPESSOAEMPID'},{av:'AV17PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A10913PrecoFabricantePessoaId',fld:'PRECOFABRICANTEPESSOAID'},{av:'AV19PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV21PrecoFabricanteDataGrid',fld:'vPRECOFABRICANTEDATAGRID'},{av:'AV16Pag',fld:'vPAG'},{av:'AV7CtrlPag',fld:'vCTRLPAG'}],[]];
   this.setVCMap("A10914PrecoFabricanteData", "PRECOFABRICANTEDATA", 0, "date");
   this.setVCMap("A10911PrecoFabricanteEmpresaId", "PRECOFABRICANTEEMPRESAID", 0, "char");
   this.setVCMap("AV22PrecoFabricanteEmpresaId", "vPRECOFABRICANTEEMPRESAID", 0, "char");
   this.setVCMap("A10912PrecoFabricantePessoaEmpId", "PRECOFABRICANTEPESSOAEMPID", 0, "char");
   this.setVCMap("AV17PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A10913PrecoFabricantePessoaId", "PRECOFABRICANTEPESSOAID", 0, "int");
   this.setVCMap("AV20PrecoFabricanteData", "vPRECOFABRICANTEDATA", 0, "date");
   this.setVCMap("A10914PrecoFabricanteData", "PRECOFABRICANTEDATA", 0, "date");
   this.setVCMap("A10911PrecoFabricanteEmpresaId", "PRECOFABRICANTEEMPRESAID", 0, "char");
   this.setVCMap("AV22PrecoFabricanteEmpresaId", "vPRECOFABRICANTEEMPRESAID", 0, "char");
   this.setVCMap("A10912PrecoFabricantePessoaEmpId", "PRECOFABRICANTEPESSOAEMPID", 0, "char");
   this.setVCMap("AV17PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A10913PrecoFabricantePessoaId", "PRECOFABRICANTEPESSOAID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar({rfrVar:"A10914PrecoFabricanteData"});
   GridContainer.addRefreshingVar({rfrVar:"A10911PrecoFabricanteEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV22PrecoFabricanteEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A10912PrecoFabricantePessoaEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"AV17PessoaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A10913PrecoFabricantePessoaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV21PrecoFabricanteDataGrid", rfrProp:"Value", gxAttId:"Precofabricantedatagrid"});
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaprecofabricante());
