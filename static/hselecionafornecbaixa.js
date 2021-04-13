/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:46:2.65
*/
gx.evt.autoSkip = false;
gx.define('hselecionafornecbaixa', false, function () {
   this.ServerClass =  "hselecionafornecbaixa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV20Sim=gx.fn.getControlValue("vSIM") ;
      this.AV29Nao=gx.fn.getControlValue("vNAO") ;
      this.AV16Sdt=gx.fn.getControlValue("vSDT") ;
      this.AV27ContaPagRecPagRec=gx.fn.getControlValue("vCONTAPAGRECPAGREC") ;
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
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11jm2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12jm2_client=function()
   {
      this.executeServerEvent("'LIMPARCAMPOS'", false, null, false, false);
   };
   this.e16jm2_client=function()
   {
      this.executeServerEvent("'EXCLUIITEM'", true, arguments[0], false, false);
   };
   this.e17jm2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,9,10,11,12,13,18,19];
   this.GXLastCtrlId =19;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",7,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hselecionafornecbaixa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Pessoaid",8,"vPESSOAID","Código","","pessoaid","int",0,"px",7,7,"right",null,[],"Pessoaid","pessoaid",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpprmcli","vBMPPRMCLI",9,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpprmfor","vBMPPRMFOR",10,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("Pessoafantasia",11,"vPESSOAFANTASIA","Nome do Cliente/Fornecedor","","pessoafantasia","svchar",0,"px",60,60,"left",null,[],"Pessoafantasia","pessoafantasia",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",12,0,"px",17,"px","e16jm2_client","","","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[8]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:7,gxgrid:this.GridContainer,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV11pessoaid",gxold:"OV11pessoaid",gxvar:"AV11pessoaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV11pessoaid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11pessoaid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPESSOAID",row || gx.fn.currentGridRowImpl(7),gx.O.AV11pessoaid,0)},c2v:function(){gx.O.AV11pessoaid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPESSOAID",row || gx.fn.currentGridRowImpl(7),'.')},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:7,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRMCLI",gxz:"ZV19BmpPrmCli",gxold:"OV19BmpPrmCli",gxvar:"AV19BmpPrmCli",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19BmpPrmCli=Value},v2z:function(Value){gx.O.ZV19BmpPrmCli=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRMCLI",row || gx.fn.currentGridRowImpl(7),gx.O.AV19BmpPrmCli,gx.O.AV35Bmpprmcli_GXI)},c2v:function(){gx.O.AV35Bmpprmcli_GXI=this.val_GXI();gx.O.AV19BmpPrmCli=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRMCLI",row || gx.fn.currentGridRowImpl(7))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRMCLI_GXI",row || gx.fn.currentGridRowImpl(7))}, gxvar_GXI:'AV35Bmpprmcli_GXI',nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:7,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRMFOR",gxz:"ZV28BmpPrmFor",gxold:"OV28BmpPrmFor",gxvar:"AV28BmpPrmFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28BmpPrmFor=Value},v2z:function(Value){gx.O.ZV28BmpPrmFor=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRMFOR",row || gx.fn.currentGridRowImpl(7),gx.O.AV28BmpPrmFor,gx.O.AV36Bmpprmfor_GXI)},c2v:function(){gx.O.AV36Bmpprmfor_GXI=this.val_GXI();gx.O.AV28BmpPrmFor=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRMFOR",row || gx.fn.currentGridRowImpl(7))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRMFOR_GXI",row || gx.fn.currentGridRowImpl(7))}, gxvar_GXI:'AV36Bmpprmfor_GXI',nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:7,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV12pessoafantasia",gxold:"OV12pessoafantasia",gxvar:"AV12pessoafantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV12pessoafantasia=Value},v2z:function(Value){gx.O.ZV12pessoafantasia=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(7),gx.O.AV12pessoafantasia,0)},c2v:function(){gx.O.AV12pessoafantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(7))},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:7,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV15bmpExc",gxold:"OV15bmpExc",gxvar:"AV15bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15bmpExc=Value},v2z:function(Value){gx.O.ZV15bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(7),gx.O.AV15bmpExc,gx.O.AV34Bmpexc_GXI)},c2v:function(){gx.O.AV34Bmpexc_GXI=this.val_GXI();gx.O.AV15bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(7))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(7))}, gxvar_GXI:'AV34Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[13]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV23EmpresaPessoasEmpresaId",gxold:"OV23EmpresaPessoasEmpresaId",gxvar:"AV23EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV23EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV23EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV23EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"JS", format:2,grid:0};
   this.ZV11pessoaid = 0 ;
   this.OV11pessoaid = 0 ;
   this.ZV19BmpPrmCli = "" ;
   this.OV19BmpPrmCli = "" ;
   this.ZV28BmpPrmFor = "" ;
   this.OV28BmpPrmFor = "" ;
   this.ZV12pessoafantasia = "" ;
   this.OV12pessoafantasia = "" ;
   this.ZV15bmpExc = "" ;
   this.OV15bmpExc = "" ;
   this.AV23EmpresaPessoasEmpresaId = "" ;
   this.ZV23EmpresaPessoasEmpresaId = "" ;
   this.OV23EmpresaPessoasEmpresaId = "" ;
   this.AV23EmpresaPessoasEmpresaId = "" ;
   this.AV27ContaPagRecPagRec = "" ;
   this.AV11pessoaid = 0 ;
   this.AV19BmpPrmCli = "" ;
   this.AV28BmpPrmFor = "" ;
   this.AV12pessoafantasia = "" ;
   this.AV15bmpExc = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.AV16Sdt = [ ] ;
   this.Events = {"e11jm2_client": ["ENTER", true] ,"e12jm2_client": ["'LIMPARCAMPOS'", true] ,"e16jm2_client": ["'EXCLUIITEM'", true] ,"e17jm2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV19BmpPrmCli',fld:'vBMPPRMCLI'},{av:'AV28BmpPrmFor',fld:'vBMPPRMFOR'},{av:'gx.fn.getCtrlProperty("vBMPPRMFOR","Visible")',ctrl:'vBMPPRMFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPPRMCLI","Visible")',ctrl:'vBMPPRMCLI',prop:'Visible'},{av:'AV16Sdt',fld:'vSDT'}],[{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV18I',fld:'vI'},{av:'AV21Entrada',fld:'vENTRADA'},{av:'AV22Saida',fld:'vSAIDA'},{av:'AV24campo',fld:'vCAMPO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV11pessoaid',fld:'vPESSOAID',grid:7},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV23EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[{av:'AV16Sdt',fld:'vSDT'},{av:'AV17SdtItem',fld:'vSDTITEM'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV16Sdt',fld:'vSDT'}],[{av:'AV39GXV1',fld:'vGXV1'},{av:'AV17SdtItem',fld:'vSDTITEM'},{av:'AV11pessoaid',fld:'vPESSOAID'},{av:'AV12pessoafantasia',fld:'vPESSOAFANTASIA'}]];
   this.EvtParms["'LIMPARCAMPOS'"] = [[],[{av:'AV16Sdt',fld:'vSDT'}]];
   this.EvtParms["'EXCLUIITEM'"] = [[{av:'AV11pessoaid',fld:'vPESSOAID',grid:7},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV23EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[{av:'AV26PessoaIdAux',fld:'vPESSOAIDAUX'},{av:'AV16Sdt',fld:'vSDT'},{av:'AV17SdtItem',fld:'vSDTITEM'},{av:'AV18I',fld:'vI'}]];
   this.setPrompt("&BMPPRMCLI", [8]);
   this.setPrompt("&BMPPRMFOR", [8]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20Sim", "vSIM", 0, "char");
   this.setVCMap("AV29Nao", "vNAO", 0, "char");
   this.setVCMap("AV16Sdt", "vSDT", 0, "CollCodigoDescricao.CodigoDescricaoItem");
   this.setVCMap("AV27ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("AV16Sdt", "vSDT", 0, "CollCodigoDescricao.CodigoDescricaoItem");
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV19BmpPrmCli", rfrProp:"Value", gxAttId:"Bmpprmcli"});
   GridContainer.addRefreshingVar({rfrVar:"AV28BmpPrmFor", rfrProp:"Value", gxAttId:"Bmpprmfor"});
   GridContainer.addRefreshingVar({rfrVar:"AV28BmpPrmFor", rfrProp:"Visible", gxAttId:"Bmpprmfor"});
   GridContainer.addRefreshingVar({rfrVar:"AV19BmpPrmCli", rfrProp:"Visible", gxAttId:"Bmpprmcli"});
   GridContainer.addRefreshingVar({rfrVar:"AV16Sdt"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hselecionafornecbaixa());
