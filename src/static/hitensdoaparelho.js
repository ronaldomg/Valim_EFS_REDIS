/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:15:25.44
*/
gx.evt.autoSkip = false;
gx.define('hitensdoaparelho', false, function () {
   this.ServerClass =  "hitensdoaparelho" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV42OrdemServicoApareSNEntregue=gx.fn.getControlValue("vORDEMSERVICOAPARESNENTREGUE") ;
      this.AV34OrdemServicoAparelhoDescricao=gx.fn.getControlValue("vORDEMSERVICOAPARELHODESCRICAO") ;
      this.AV38OrdemServicoApareSeq=gx.fn.getIntegerValue("vORDEMSERVICOAPARESEQ",'.') ;
      this.AV41OrdemServicoSituacaoAnt=gx.fn.getControlValue("vORDEMSERVICOSITUACAOANT") ;
      this.AV12evento=gx.fn.getControlValue("vEVENTO") ;
      this.AV21FechaTdsModais=gx.fn.getControlValue("vFECHATDSMODAIS") ;
      this.AV23Assunto=gx.fn.getControlValue("vASSUNTO") ;
   };
   this.Validv_Ordemservicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ordemservicoaparelhoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOAPARELHOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111cu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e121cu2_client=function()
   {
      this.executeServerEvent("'CONFIRMA'", false, null, false, false);
   };
   this.e131cu2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e141cu2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e181cu2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e191cu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,19,21,24,28,29,30,33,36,38];
   this.GXLastCtrlId =38;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",27,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hitensdoaparelho",[],false,1,true,true,0,false,false,false,"CollItemAparelho.ItemAparelhoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV35SdtAparelho",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV10S",28,"CTLAPARELHOITEMID","Código","","AparelhoItemId","int",0,"px",4,4,"right",null,[],"GXV10S","GXV10S",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10T",29,"CTLAPARELHOITEMDESCRICAO","Descrição","","AparelhoItemDescricao","svchar",0,"px",30,30,"left",null,[],"GXV10T","GXV10T",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addCheckBox("GXV10U",30,"CTLAPARELHOITEMSEL","","","AparelhoItemSel","char","S","N",null,true,false,0,"px","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicoid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOID",gxz:"ZV32OrdemServicoId",gxold:"OV32OrdemServicoId",gxvar:"AV32OrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32OrdemServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32OrdemServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOID",gx.O.AV32OrdemServicoId,0)},c2v:function(){gx.O.AV32OrdemServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[12]={fld:"APARELHO", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE4",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicoaparelhoid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARELHOID",gxz:"ZV33OrdemServicoAparelhoId",gxold:"OV33OrdemServicoAparelhoId",gxvar:"AV33OrdemServicoAparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33OrdemServicoAparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33OrdemServicoAparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARELHOID",gx.O.AV33OrdemServicoAparelhoId,0)},c2v:function(){gx.O.AV33OrdemServicoAparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARELHODESC20",gxz:"ZV37OrdemServicoAparelhoDesc20",gxold:"OV37OrdemServicoAparelhoDesc20",gxvar:"AV37OrdemServicoAparelhoDesc20",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37OrdemServicoAparelhoDesc20=Value},v2z:function(Value){gx.O.ZV37OrdemServicoAparelhoDesc20=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARELHODESC20",gx.O.AV37OrdemServicoAparelhoDesc20,0)},c2v:function(){gx.O.AV37OrdemServicoAparelhoDesc20=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARELHODESC20")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABLE2",grid:0};
   GXValidFnc[28]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOITEMID",gxz:"ZV47GXV10S",gxold:"OV47GXV10S",gxvar:"GXV10S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10S=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47GXV10S=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOITEMID",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10S,0)},c2v:function(){gx.O.GXV10S=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOITEMID",row || gx.fn.currentGridRowImpl(27),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOITEMDESCRICAO",gxz:"ZV48GXV10T",gxold:"OV48GXV10T",gxvar:"GXV10T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10T=Value},v2z:function(Value){gx.O.ZV48GXV10T=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10T,0)},c2v:function(){gx.O.GXV10T=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOITEMSEL",gxz:"ZV49GXV10U",gxold:"OV49GXV10U",gxvar:"GXV10U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10U=Value},v2z:function(Value){gx.O.ZV49GXV10U=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLAPARELHOITEMSEL",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10U,"S")},c2v:function(){gx.O.GXV10U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOITEMSEL",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={fld:"TABLENAV",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   this.AV32OrdemServicoId = 0 ;
   this.ZV32OrdemServicoId = 0 ;
   this.OV32OrdemServicoId = 0 ;
   this.AV33OrdemServicoAparelhoId = 0 ;
   this.ZV33OrdemServicoAparelhoId = 0 ;
   this.OV33OrdemServicoAparelhoId = 0 ;
   this.AV37OrdemServicoAparelhoDesc20 = "" ;
   this.ZV37OrdemServicoAparelhoDesc20 = "" ;
   this.OV37OrdemServicoAparelhoDesc20 = "" ;
   this.ZV47GXV10S = 0 ;
   this.OV47GXV10S = 0 ;
   this.ZV48GXV10T = "" ;
   this.OV48GXV10T = "" ;
   this.ZV49GXV10U = "" ;
   this.OV49GXV10U = "" ;
   this.AV32OrdemServicoId = 0 ;
   this.AV33OrdemServicoAparelhoId = 0 ;
   this.AV37OrdemServicoAparelhoDesc20 = "" ;
   this.AV34OrdemServicoAparelhoDescricao = "" ;
   this.AV38OrdemServicoApareSeq = 0 ;
   this.AV41OrdemServicoSituacaoAnt = "" ;
   this.AV42OrdemServicoApareSNEntregue = "" ;
   this.AV12evento = "" ;
   this.AV21FechaTdsModais = "" ;
   this.AV23Assunto = "" ;
   this.GXV10S = 0 ;
   this.GXV10T = "" ;
   this.GXV10U = "" ;
   this.A8879AparelhoItemEmpresaId = "" ;
   this.A8825AparelhoId = 0 ;
   this.A9245AparelhoItemSituacao = "" ;
   this.A8880AparelhoItemId = 0 ;
   this.A8876AparelhoItemDescricao = "" ;
   this.A8917OSAparelhoApareItemApaSeq = 0 ;
   this.A8916OSAparelhoApareItemOSId = 0 ;
   this.A8915OSAparelhoApareItemOSEmpId = "" ;
   this.A8914OSAparelhoApareItemApaId = 0 ;
   this.A8913OSAparelhoApareItemApaEmpId = "" ;
   this.Events = {"e111cu2_client": ["'FECHAR'", true] ,"e121cu2_client": ["'CONFIRMA'", true] ,"e131cu2_client": ["'ANTERIOR'", true] ,"e141cu2_client": ["'PROXIMO'", true] ,"e181cu2_client": ["ENTER", true] ,"e191cu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV35SdtAparelho',fld:'vSDTAPARELHO',grid:27},{av:'subGrid_Rows'},{av:'AV42OrdemServicoApareSNEntregue',fld:'vORDEMSERVICOAPARESNENTREGUE'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23Assunto',fld:'vASSUNTO'},{av:'AV21FechaTdsModais',fld:'vFECHATDSMODAIS'},{av:'AV12evento',fld:'vEVENTO'},{av:'AV42OrdemServicoApareSNEntregue',fld:'vORDEMSERVICOAPARESNENTREGUE'},{av:'AV41OrdemServicoSituacaoAnt',fld:'vORDEMSERVICOSITUACAOANT'},{av:'AV38OrdemServicoApareSeq',fld:'vORDEMSERVICOAPARESEQ'},{av:'AV34OrdemServicoAparelhoDescricao',fld:'vORDEMSERVICOAPARELHODESCRICAO'},{av:'AV33OrdemServicoAparelhoId',fld:'vORDEMSERVICOAPARELHOID'},{av:'AV32OrdemServicoId',fld:'vORDEMSERVICOID'}],[]];
   this.EvtParms["'CONFIRMA'"] = [[{av:'AV35SdtAparelho',fld:'vSDTAPARELHO',grid:27},{av:'AV40AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV33OrdemServicoAparelhoId',fld:'vORDEMSERVICOAPARELHOID'},{av:'AV39OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'},{av:'AV32OrdemServicoId',fld:'vORDEMSERVICOID'},{av:'AV38OrdemServicoApareSeq',fld:'vORDEMSERVICOAPARESEQ'},{av:'AV31AparelhoItemEmpresaId',fld:'vAPARELHOITEMEMPRESAID'},{av:'AV23Assunto',fld:'vASSUNTO'},{av:'AV21FechaTdsModais',fld:'vFECHATDSMODAIS'},{av:'AV12evento',fld:'vEVENTO'},{av:'AV42OrdemServicoApareSNEntregue',fld:'vORDEMSERVICOAPARESNENTREGUE'},{av:'AV41OrdemServicoSituacaoAnt',fld:'vORDEMSERVICOSITUACAOANT'},{av:'AV34OrdemServicoAparelhoDescricao',fld:'vORDEMSERVICOAPARELHODESCRICAO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV42OrdemServicoApareSNEntregue',fld:'vORDEMSERVICOAPARESNENTREGUE'}],[{ctrl:'CTLAPARELHOITEMSEL',prop:'Enabled'}]];
   this.EvtParms["GRID.REFRESH"] = [[],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV35SdtAparelho',fld:'vSDTAPARELHO',grid:27},{av:'subGrid_Rows'},{av:'AV42OrdemServicoApareSNEntregue',fld:'vORDEMSERVICOAPARESNENTREGUE'}],[]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV35SdtAparelho',fld:'vSDTAPARELHO',grid:27},{av:'subGrid_Rows'},{av:'AV42OrdemServicoApareSNEntregue',fld:'vORDEMSERVICOAPARESNENTREGUE'}],[]];
   this.setVCMap("AV42OrdemServicoApareSNEntregue", "vORDEMSERVICOAPARESNENTREGUE", 0, "char");
   this.setVCMap("AV34OrdemServicoAparelhoDescricao", "vORDEMSERVICOAPARELHODESCRICAO", 0, "svchar");
   this.setVCMap("AV38OrdemServicoApareSeq", "vORDEMSERVICOAPARESEQ", 0, "int");
   this.setVCMap("AV41OrdemServicoSituacaoAnt", "vORDEMSERVICOSITUACAOANT", 0, "char");
   this.setVCMap("AV12evento", "vEVENTO", 0, "char");
   this.setVCMap("AV21FechaTdsModais", "vFECHATDSMODAIS", 0, "char");
   this.setVCMap("AV23Assunto", "vASSUNTO", 0, "svchar");
   this.setVCMap("AV42OrdemServicoApareSNEntregue", "vORDEMSERVICOAPARESNENTREGUE", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV42OrdemServicoApareSNEntregue"});
   this.addGridBCProperty("Sdtaparelho", ["AparelhoItemId"], this.GXValidFnc[28], "AV35SdtAparelho");
   this.addGridBCProperty("Sdtaparelho", ["AparelhoItemDescricao"], this.GXValidFnc[29], "AV35SdtAparelho");
   this.addGridBCProperty("Sdtaparelho", ["AparelhoItemSel"], this.GXValidFnc[30], "AV35SdtAparelho");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hitensdoaparelho());
