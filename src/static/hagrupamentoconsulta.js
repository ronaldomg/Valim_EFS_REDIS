/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:11:0.35
*/
gx.evt.autoSkip = false;
gx.define('hagrupamentoconsulta', false, function () {
   this.ServerClass =  "hagrupamentoconsulta" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("10", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV16SdtVendaAgr=gx.fn.getControlValue("vSDTVENDAAGR") ;
   };
   this.Validv_Agrupamentonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAGRUPAMENTONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112ch2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142ch2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e152ch2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,15,17,18];
   this.GXLastCtrlId =18;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",16,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hagrupamentoconsulta",[],false,1,false,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Saidanodocumento",17,"vSAIDANODOCUMENTO","Número do Documento","","SaidaNoDocumento","int",0,"px",10,10,"right",null,[],"Saidanodocumento","SaidaNoDocumento",true,0,false,false,"AttributeCorPreto",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Agrupamentonumero,isvalid:null,rgrid:[],fld:"vAGRUPAMENTONUMERO",gxz:"ZV15AgrupamentoNumero",gxold:"OV15AgrupamentoNumero",gxvar:"AV15AgrupamentoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AgrupamentoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15AgrupamentoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAGRUPAMENTONUMERO",gx.O.AV15AgrupamentoNumero,0)},c2v:function(){gx.O.AV15AgrupamentoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAGRUPAMENTONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[17]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV21SaidaNoDocumento",gxold:"OV21SaidaNoDocumento",gxvar:"AV21SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21SaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21SaidaNoDocumento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vSAIDANODOCUMENTO",row || gx.fn.currentGridRowImpl(16),gx.O.AV21SaidaNoDocumento,0)},c2v:function(){gx.O.AV21SaidaNoDocumento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vSAIDANODOCUMENTO",row || gx.fn.currentGridRowImpl(16),'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"DIV2", format:2,grid:0};
   this.AV15AgrupamentoNumero = 0 ;
   this.ZV15AgrupamentoNumero = 0 ;
   this.OV15AgrupamentoNumero = 0 ;
   this.ZV21SaidaNoDocumento = 0 ;
   this.OV21SaidaNoDocumento = 0 ;
   this.AV15AgrupamentoNumero = 0 ;
   this.AV21SaidaNoDocumento = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A5960SaidaNoDocumento = 0 ;
   this.A10991AgrupamentoNumero = 0 ;
   this.A10990AgrupamentoEmpresaId = "" ;
   this.A11016AgrupamentoSaidaOrdem = 0 ;
   this.A10994AgrupamentoSaidaEmpId = "" ;
   this.A10995AgrupamentoSaidaId = 0 ;
   this.AV16SdtVendaAgr = [ ] ;
   this.Events = {"e112ch2_client": ["'FECHAR'", true] ,"e142ch2_client": ["ENTER", true] ,"e152ch2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV16SdtVendaAgr',fld:'vSDTVENDAAGR'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV16SdtVendaAgr',fld:'vSDTVENDAAGR'}],[{av:'AV26GXV1',fld:'vGXV1'},{av:'AV17SdtVendaAgrItem',fld:'vSDTVENDAAGRITEM'},{av:'AV21SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV16SdtVendaAgr',fld:'vSDTVENDAAGR'}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV16SdtVendaAgr',fld:'vSDTVENDAAGR'}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV16SdtVendaAgr',fld:'vSDTVENDAAGR'}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV16SdtVendaAgr',fld:'vSDTVENDAAGR'}],[]];
   this.setVCMap("AV16SdtVendaAgr", "vSDTVENDAAGR", 0, "CollSdtVendaAgr.SdtVendaAgrItem");
   this.setVCMap("AV16SdtVendaAgr", "vSDTVENDAAGR", 0, "CollSdtVendaAgr.SdtVendaAgrItem");
   GridContainer.addRefreshingVar({rfrVar:"AV21SaidaNoDocumento", rfrProp:"Value", gxAttId:"Saidanodocumento"});
   GridContainer.addRefreshingVar({rfrVar:"AV16SdtVendaAgr"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hagrupamentoconsulta());
