/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:41:29.36
*/
gx.evt.autoSkip = false;
gx.define('hlistaprofissionais', false, function () {
   this.ServerClass =  "hlistaprofissionais" ;
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
      this.AV39OrdemServicoEmpresaId=gx.fn.getControlValue("vORDEMSERVICOEMPRESAID") ;
      this.AV40AparelhoEmpresaId=gx.fn.getControlValue("vAPARELHOEMPRESAID") ;
      this.AV34OrdemServicoAparelhoDescricao=gx.fn.getControlValue("vORDEMSERVICOAPARELHODESCRICAO") ;
      this.AV38OrdemServicoApareSeq=gx.fn.getIntegerValue("vORDEMSERVICOAPARESEQ",'.') ;
      this.AV44Modo=gx.fn.getControlValue("vMODO") ;
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
   this.e111f32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e121f32_client=function()
   {
      this.executeServerEvent("'CONFIRMA'", false, null, false, false);
   };
   this.e151f32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e161f32_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,23,25,28,30,31,32,33];
   this.GXLastCtrlId =33;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hlistaprofissionais",[],false,1,true,true,0,false,false,false,"CollAparelhoProfissional.AparelhoProfissionalItem",0,"px","Novo registro",false,false,false,null,null,false,"AV45SdtAparelhoProfissional",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV10U",30,"CTLPROFISSIONALID","Profissional","","Profissionalid","int",0,"px",4,4,"right",null,[],"GXV10U","GXV10U",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV10V",31,"CTLPROFISSIONALNOME","Nome","","Profissionalnome","svchar",210,"px",40,40,"left",null,[],"GXV10V","GXV10V",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addCheckBox("GXV10W",32,"CTLPROFISSIONALSEL","Sel.","","ProfissionalSel","char","S","N",null,true,false,0,"px","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicoid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOID",gxz:"ZV32OrdemServicoId",gxold:"OV32OrdemServicoId",gxvar:"AV32OrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32OrdemServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32OrdemServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOID",gx.O.AV32OrdemServicoId,0)},c2v:function(){gx.O.AV32OrdemServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicoaparelhoid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARELHOID",gxz:"ZV33OrdemServicoAparelhoId",gxold:"OV33OrdemServicoAparelhoId",gxvar:"AV33OrdemServicoAparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33OrdemServicoAparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33OrdemServicoAparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARELHOID",gx.O.AV33OrdemServicoAparelhoId,0)},c2v:function(){gx.O.AV33OrdemServicoAparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARELHODESC20",gxz:"ZV37OrdemServicoAparelhoDesc20",gxold:"OV37OrdemServicoAparelhoDesc20",gxvar:"AV37OrdemServicoAparelhoDesc20",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37OrdemServicoAparelhoDesc20=Value},v2z:function(Value){gx.O.ZV37OrdemServicoAparelhoDesc20=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARELHODESC20",gx.O.AV37OrdemServicoAparelhoDesc20,0)},c2v:function(){gx.O.AV37OrdemServicoAparelhoDesc20=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARELHODESC20")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[30]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALID",gxz:"ZV53GXV10U",gxold:"OV53GXV10U",gxvar:"GXV10U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10U=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53GXV10U=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPROFISSIONALID",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10U,0)},c2v:function(){gx.O.GXV10U=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPROFISSIONALID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALNOME",gxz:"ZV54GXV10V",gxold:"OV54GXV10V",gxvar:"GXV10V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10V=Value},v2z:function(Value){gx.O.ZV54GXV10V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPROFISSIONALNOME",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10V,0)},c2v:function(){gx.O.GXV10V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPROFISSIONALNOME",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALSEL",gxz:"ZV55GXV10W",gxold:"OV55GXV10W",gxvar:"GXV10W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10W=Value},v2z:function(Value){gx.O.ZV55GXV10W=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLPROFISSIONALSEL",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10W,"S")},c2v:function(){gx.O.GXV10W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPROFISSIONALSEL",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={fld:"DIV2", format:2,grid:0};
   this.AV32OrdemServicoId = 0 ;
   this.ZV32OrdemServicoId = 0 ;
   this.OV32OrdemServicoId = 0 ;
   this.AV33OrdemServicoAparelhoId = 0 ;
   this.ZV33OrdemServicoAparelhoId = 0 ;
   this.OV33OrdemServicoAparelhoId = 0 ;
   this.AV37OrdemServicoAparelhoDesc20 = "" ;
   this.ZV37OrdemServicoAparelhoDesc20 = "" ;
   this.OV37OrdemServicoAparelhoDesc20 = "" ;
   this.ZV53GXV10U = 0 ;
   this.OV53GXV10U = 0 ;
   this.ZV54GXV10V = "" ;
   this.OV54GXV10V = "" ;
   this.ZV55GXV10W = "" ;
   this.OV55GXV10W = "" ;
   this.AV32OrdemServicoId = 0 ;
   this.AV33OrdemServicoAparelhoId = 0 ;
   this.AV37OrdemServicoAparelhoDesc20 = "" ;
   this.AV39OrdemServicoEmpresaId = "" ;
   this.AV40AparelhoEmpresaId = "" ;
   this.AV34OrdemServicoAparelhoDescricao = "" ;
   this.AV38OrdemServicoApareSeq = 0 ;
   this.AV44Modo = "" ;
   this.GXV10U = 0 ;
   this.GXV10V = "" ;
   this.GXV10W = "" ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8922SituacaoProfissional = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8608ProfissionalNome = "" ;
   this.A8909OrdemServicoApareSeq = 0 ;
   this.A8825AparelhoId = 0 ;
   this.A8824AparelhoEmpresaId = "" ;
   this.A8792OrdemServicoId = 0 ;
   this.A8791OrdemServicoEmpresaId = "" ;
   this.Events = {"e111f32_client": ["'FECHAR'", true] ,"e121f32_client": ["'CONFIRMA'", true] ,"e151f32_client": ["ENTER", true] ,"e161f32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV45SdtAparelhoProfissional',fld:'vSDTAPARELHOPROFISSIONAL',grid:29}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV44Modo',fld:'vMODO'},{av:'AV38OrdemServicoApareSeq',fld:'vORDEMSERVICOAPARESEQ'},{av:'AV34OrdemServicoAparelhoDescricao',fld:'vORDEMSERVICOAPARELHODESCRICAO'},{av:'AV33OrdemServicoAparelhoId',fld:'vORDEMSERVICOAPARELHOID'},{av:'AV40AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV32OrdemServicoId',fld:'vORDEMSERVICOID'},{av:'AV39OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'}],[]];
   this.EvtParms["'CONFIRMA'"] = [[{av:'AV44Modo',fld:'vMODO'},{av:'AV39OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'},{av:'AV32OrdemServicoId',fld:'vORDEMSERVICOID'},{av:'AV40AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV33OrdemServicoAparelhoId',fld:'vORDEMSERVICOAPARELHOID'},{av:'AV38OrdemServicoApareSeq',fld:'vORDEMSERVICOAPARESEQ'},{av:'AV45SdtAparelhoProfissional',fld:'vSDTAPARELHOPROFISSIONAL',grid:29},{av:'AV34OrdemServicoAparelhoDescricao',fld:'vORDEMSERVICOAPARELHODESCRICAO'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'}],[{av:'AV45SdtAparelhoProfissional',fld:'vSDTAPARELHOPROFISSIONAL',grid:29},{av:'AV38OrdemServicoApareSeq',fld:'vORDEMSERVICOAPARESEQ'},{av:'AV33OrdemServicoAparelhoId',fld:'vORDEMSERVICOAPARELHOID'},{av:'AV40AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV32OrdemServicoId',fld:'vORDEMSERVICOID'},{av:'AV39OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'}]];
   this.setVCMap("AV39OrdemServicoEmpresaId", "vORDEMSERVICOEMPRESAID", 0, "char");
   this.setVCMap("AV40AparelhoEmpresaId", "vAPARELHOEMPRESAID", 0, "char");
   this.setVCMap("AV34OrdemServicoAparelhoDescricao", "vORDEMSERVICOAPARELHODESCRICAO", 0, "svchar");
   this.setVCMap("AV38OrdemServicoApareSeq", "vORDEMSERVICOAPARESEQ", 0, "int");
   this.setVCMap("AV44Modo", "vMODO", 0, "char");
   this.addGridBCProperty("Sdtaparelhoprofissional", ["Profissionalid"], this.GXValidFnc[30], "AV45SdtAparelhoProfissional");
   this.addGridBCProperty("Sdtaparelhoprofissional", ["Profissionalnome"], this.GXValidFnc[31], "AV45SdtAparelhoProfissional");
   this.addGridBCProperty("Sdtaparelhoprofissional", ["ProfissionalSel"], this.GXValidFnc[32], "AV45SdtAparelhoProfissional");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlistaprofissionais());
