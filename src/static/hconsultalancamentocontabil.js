/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:59:45.37
*/
gx.evt.autoSkip = false;
gx.define('hconsultalancamentocontabil', false, function () {
   this.ServerClass =  "hconsultalancamentocontabil" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV15PLancamentoContabilId=gx.fn.getIntegerValue("vPLANCAMENTOCONTABILID",'.') ;
   };
   this.Valid_Lancamentocontabilid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(30) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCONTABILID", gx.fn.currentGridRowImpl(30));
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
   this.e17162_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11162_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12162_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13162_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14162_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15162_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19162_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21161_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,25,31,32,33,34,40,43,45,47,49,51,52,53,54,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultalancamentocontabil",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(61,31,"LANCAMENTOCONTABILID","","","LancamentoContabilId","int",0,"px",8,8,"right",null,[],61,"LancamentoContabilId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(60,32,"LANCAMENTOCONTABILDATA","","","LancamentoContabilData","date",0,"px",10,10,"right",null,[],60,"LancamentoContabilData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(348,33,"LANCAMENTOCONTABILTOTALDEBITO","Total Débito","","LancamentoContabilTotalDebito","decimal",0,"px",18,18,"right",null,[],348,"LancamentoContabilTotalDebito",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(349,34,"LANCAMENTOCONTABILTOTALCREDITO","Total Crédito","","LancamentoContabilTotalCredito","decimal",0,"px",18,18,"right",null,[],349,"LancamentoContabilTotalCredito",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCONTABILID",gxz:"ZV13LancamentoContabilId",gxold:"OV13LancamentoContabilId",gxvar:"AV13LancamentoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13LancamentoContabilId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILID",gx.O.AV13LancamentoContabilId,0)},c2v:function(){gx.O.AV13LancamentoContabilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLERANGEDATA",grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAINICIAL",gxz:"ZV14DataInicial",gxold:"OV14DataInicial",gxvar:"AV14DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV14DataInicial,0)},c2v:function(){gx.O.AV14DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAFINAL",gxz:"ZV21DataFinal",gxold:"OV21DataFinal",gxvar:"AV21DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV21DataFinal,0)},c2v:function(){gx.O.AV21DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:this.Valid_Lancamentocontabilid,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILID",gxz:"Z61LancamentoContabilId",gxold:"O61LancamentoContabilId",gxvar:"A61LancamentoContabilId",ucs:[],op:[33,34],ip:[33,34,31],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A61LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z61LancamentoContabilId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILID",row || gx.fn.currentGridRowImpl(30),gx.O.A61LancamentoContabilId,0)},c2v:function(){gx.O.A61LancamentoContabilId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCONTABILID",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILDATA",gxz:"Z60LancamentoContabilData",gxold:"O60LancamentoContabilData",gxvar:"A60LancamentoContabilData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILDATA",row || gx.fn.currentGridRowImpl(30),gx.O.A60LancamentoContabilData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOCONTABILDATA",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILTOTALDEBITO",gxz:"Z348LancamentoContabilTotalDebito",gxold:"O348LancamentoContabilTotalDebito",gxvar:"A348LancamentoContabilTotalDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A348LancamentoContabilTotalDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z348LancamentoContabilTotalDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOCONTABILTOTALDEBITO",row || gx.fn.currentGridRowImpl(30),gx.O.A348LancamentoContabilTotalDebito,2,',')},c2v:function(){gx.O.A348LancamentoContabilTotalDebito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOCONTABILTOTALDEBITO",row || gx.fn.currentGridRowImpl(30),'.',',')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILTOTALCREDITO",gxz:"Z349LancamentoContabilTotalCredito",gxold:"O349LancamentoContabilTotalCredito",gxvar:"A349LancamentoContabilTotalCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A349LancamentoContabilTotalCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z349LancamentoContabilTotalCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOCONTABILTOTALCREDITO",row || gx.fn.currentGridRowImpl(30),gx.O.A349LancamentoContabilTotalCredito,2,',')},c2v:function(){gx.O.A349LancamentoContabilTotalCredito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOCONTABILTOTALCREDITO",row || gx.fn.currentGridRowImpl(30),'.',',')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLENAV",grid:0};
   GXValidFnc[43]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[45]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[47]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[49]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[51]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[52]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV13LancamentoContabilId = 0 ;
   this.ZV13LancamentoContabilId = 0 ;
   this.OV13LancamentoContabilId = 0 ;
   this.AV14DataInicial = gx.date.nullDate() ;
   this.ZV14DataInicial = gx.date.nullDate() ;
   this.OV14DataInicial = gx.date.nullDate() ;
   this.AV21DataFinal = gx.date.nullDate() ;
   this.ZV21DataFinal = gx.date.nullDate() ;
   this.OV21DataFinal = gx.date.nullDate() ;
   this.Z61LancamentoContabilId = 0 ;
   this.O61LancamentoContabilId = 0 ;
   this.Z60LancamentoContabilData = gx.date.nullDate() ;
   this.O60LancamentoContabilData = gx.date.nullDate() ;
   this.Z348LancamentoContabilTotalDebito = 0 ;
   this.O348LancamentoContabilTotalDebito = 0 ;
   this.Z349LancamentoContabilTotalCredito = 0 ;
   this.O349LancamentoContabilTotalCredito = 0 ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV13LancamentoContabilId = 0 ;
   this.AV14DataInicial = gx.date.nullDate() ;
   this.AV21DataFinal = gx.date.nullDate() ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15PLancamentoContabilId = 0 ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A61LancamentoContabilId = 0 ;
   this.A60LancamentoContabilData = gx.date.nullDate() ;
   this.A348LancamentoContabilTotalDebito = 0 ;
   this.A349LancamentoContabilTotalCredito = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17162_client": ["ENTER", true] ,"e11162_client": ["'GXM_FIRST'", true] ,"e12162_client": ["'GXM_PREVIOUS'", true] ,"e13162_client": ["'GXM_NEXT'", true] ,"e14162_client": ["'GXM_LAST'", true] ,"e15162_client": ["'PROCURAR'", true] ,"e19162_client": ["'ATUALIZAPAGINA'", true] ,"e21161_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV14DataInicial',fld:'vDATAINICIAL'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'LANCAMENTOCONTABILID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCONTABILID","Title")',ctrl:'LANCAMENTOCONTABILID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'LANCAMENTOCONTABILDATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCONTABILDATA","Title")',ctrl:'LANCAMENTOCONTABILDATA',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV25NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'}],[{av:'AV15PLancamentoContabilId',fld:'vPLANCAMENTOCONTABILID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV14DataInicial',fld:'vDATAINICIAL'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV14DataInicial',fld:'vDATAINICIAL'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV14DataInicial',fld:'vDATAINICIAL'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV14DataInicial',fld:'vDATAINICIAL'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV14DataInicial',fld:'vDATAINICIAL'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22SnSeleci',fld:'vSNSELECI'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV14DataInicial',fld:'vDATAINICIAL'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV14DataInicial',fld:'vDATAINICIAL'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV15PLancamentoContabilId", "vPLANCAMENTOCONTABILID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultalancamentocontabil());
