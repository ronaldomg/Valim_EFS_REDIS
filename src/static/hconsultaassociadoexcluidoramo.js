/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:25.89
*/
gx.evt.autoSkip = false;
gx.define('hconsultaassociadoexcluidoramo', false, function () {
   this.ServerClass =  "hconsultaassociadoexcluidoramo" ;
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
      this.AV7EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10019RamoAtividadeEmpresaId=gx.fn.getControlValue("RAMOATIVIDADEEMPRESAID") ;
      this.AV17RamoAtividadeEmpresaId=gx.fn.getControlValue("vRAMOATIVIDADEEMPRESAID") ;
      this.A10020RamoAtividadeCodigo=gx.fn.getIntegerValue("RAMOATIVIDADECODIGO",'.') ;
      this.A10105RamoAtividadeDescricao=gx.fn.getControlValue("RAMOATIVIDADEDESCRICAO") ;
   };
   this.Validv_Associadoexcluidoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vASSOCIADOEXCLUIDOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoexcluidoramoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(17) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOEXCLUIDORAMOID", gx.fn.currentGridRowImpl(17));
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
   this.e1127d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1427d2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1527d2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,16,18,19,20];
   this.GXLastCtrlId =20;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaassociadoexcluidoramo",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10519,18,"ASSOCIADOEXCLUIDORAMOID","Código","","AssociadoExcluidoRamoId","int",0,"px",12,12,"right",null,[],10519,"AssociadoExcluidoRamoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Ramodescricao",19,"vRAMODESCRICAO","Descrição","","RamoDescricao","svchar",0,"px",100,80,"left",null,[],"Ramodescricao","RamoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Associadoexcluidoid,isvalid:null,rgrid:[this.GridContainer],fld:"vASSOCIADOEXCLUIDOID",gxz:"ZV5AssociadoExcluidoId",gxold:"OV5AssociadoExcluidoId",gxvar:"AV5AssociadoExcluidoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AssociadoExcluidoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AssociadoExcluidoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vASSOCIADOEXCLUIDOID",gx.O.AV5AssociadoExcluidoId,0)},c2v:function(){gx.O.AV5AssociadoExcluidoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vASSOCIADOEXCLUIDOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSOCIADOEXCLUIDONOME",gxz:"ZV6AssociadoExcluidoNome",gxold:"OV6AssociadoExcluidoNome",gxvar:"AV6AssociadoExcluidoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6AssociadoExcluidoNome=Value},v2z:function(Value){gx.O.ZV6AssociadoExcluidoNome=Value},v2c:function(){gx.fn.setControlValue("vASSOCIADOEXCLUIDONOME",gx.O.AV6AssociadoExcluidoNome,0)},c2v:function(){gx.O.AV6AssociadoExcluidoNome=this.val()},val:function(){return gx.fn.getControlValue("vASSOCIADOEXCLUIDONOME")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[18]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Valid_Associadoexcluidoramoid,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDORAMOID",gxz:"Z10519AssociadoExcluidoRamoId",gxold:"O10519AssociadoExcluidoRamoId",gxvar:"A10519AssociadoExcluidoRamoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10519AssociadoExcluidoRamoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10519AssociadoExcluidoRamoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ASSOCIADOEXCLUIDORAMOID",row || gx.fn.currentGridRowImpl(17),gx.O.A10519AssociadoExcluidoRamoId,0)},c2v:function(){gx.O.A10519AssociadoExcluidoRamoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ASSOCIADOEXCLUIDORAMOID",row || gx.fn.currentGridRowImpl(17),'.')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vRAMODESCRICAO",gxz:"ZV13RamoDescricao",gxold:"OV13RamoDescricao",gxvar:"AV13RamoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV13RamoDescricao=Value},v2z:function(Value){gx.O.ZV13RamoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vRAMODESCRICAO",row || gx.fn.currentGridRowImpl(17),gx.O.AV13RamoDescricao,0)},c2v:function(){gx.O.AV13RamoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vRAMODESCRICAO",row || gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};
   GXValidFnc[20]={fld:"DIV2", format:2,grid:0};
   this.AV5AssociadoExcluidoId = 0 ;
   this.ZV5AssociadoExcluidoId = 0 ;
   this.OV5AssociadoExcluidoId = 0 ;
   this.AV6AssociadoExcluidoNome = "" ;
   this.ZV6AssociadoExcluidoNome = "" ;
   this.OV6AssociadoExcluidoNome = "" ;
   this.Z10519AssociadoExcluidoRamoId = 0 ;
   this.O10519AssociadoExcluidoRamoId = 0 ;
   this.ZV13RamoDescricao = "" ;
   this.OV13RamoDescricao = "" ;
   this.AV5AssociadoExcluidoId = 0 ;
   this.AV6AssociadoExcluidoNome = "" ;
   this.A10517AssociadoExcluidoRamoAssId = 0 ;
   this.A10516AssociadoExcluidoRamoAssEmpId = "" ;
   this.A10519AssociadoExcluidoRamoId = 0 ;
   this.AV13RamoDescricao = "" ;
   this.A10020RamoAtividadeCodigo = 0 ;
   this.A10019RamoAtividadeEmpresaId = "" ;
   this.A10105RamoAtividadeDescricao = "" ;
   this.AV7EmpresaPadrao = "" ;
   this.AV17RamoAtividadeEmpresaId = "" ;
   this.Events = {"e1127d2_client": ["'FECHAR'", true] ,"e1427d2_client": ["ENTER", true] ,"e1527d2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5AssociadoExcluidoId',fld:'vASSOCIADOEXCLUIDOID'},{av:'A10019RamoAtividadeEmpresaId',fld:'RAMOATIVIDADEEMPRESAID'},{av:'AV17RamoAtividadeEmpresaId',fld:'vRAMOATIVIDADEEMPRESAID'},{av:'A10020RamoAtividadeCodigo',fld:'RAMOATIVIDADECODIGO'},{av:'A10519AssociadoExcluidoRamoId',fld:'ASSOCIADOEXCLUIDORAMOID'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV6AssociadoExcluidoNome',fld:'vASSOCIADOEXCLUIDONOME'},{av:'AV5AssociadoExcluidoId',fld:'vASSOCIADOEXCLUIDOID'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A10019RamoAtividadeEmpresaId',fld:'RAMOATIVIDADEEMPRESAID'},{av:'AV17RamoAtividadeEmpresaId',fld:'vRAMOATIVIDADEEMPRESAID'},{av:'A10020RamoAtividadeCodigo',fld:'RAMOATIVIDADECODIGO'},{av:'A10519AssociadoExcluidoRamoId',fld:'ASSOCIADOEXCLUIDORAMOID'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'}],[{av:'AV13RamoDescricao',fld:'vRAMODESCRICAO'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5AssociadoExcluidoId',fld:'vASSOCIADOEXCLUIDOID'},{av:'A10019RamoAtividadeEmpresaId',fld:'RAMOATIVIDADEEMPRESAID'},{av:'AV17RamoAtividadeEmpresaId',fld:'vRAMOATIVIDADEEMPRESAID'},{av:'A10020RamoAtividadeCodigo',fld:'RAMOATIVIDADECODIGO'},{av:'A10519AssociadoExcluidoRamoId',fld:'ASSOCIADOEXCLUIDORAMOID'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5AssociadoExcluidoId',fld:'vASSOCIADOEXCLUIDOID'},{av:'A10019RamoAtividadeEmpresaId',fld:'RAMOATIVIDADEEMPRESAID'},{av:'AV17RamoAtividadeEmpresaId',fld:'vRAMOATIVIDADEEMPRESAID'},{av:'A10020RamoAtividadeCodigo',fld:'RAMOATIVIDADECODIGO'},{av:'A10519AssociadoExcluidoRamoId',fld:'ASSOCIADOEXCLUIDORAMOID'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5AssociadoExcluidoId',fld:'vASSOCIADOEXCLUIDOID'},{av:'A10019RamoAtividadeEmpresaId',fld:'RAMOATIVIDADEEMPRESAID'},{av:'AV17RamoAtividadeEmpresaId',fld:'vRAMOATIVIDADEEMPRESAID'},{av:'A10020RamoAtividadeCodigo',fld:'RAMOATIVIDADECODIGO'},{av:'A10519AssociadoExcluidoRamoId',fld:'ASSOCIADOEXCLUIDORAMOID'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5AssociadoExcluidoId',fld:'vASSOCIADOEXCLUIDOID'},{av:'A10019RamoAtividadeEmpresaId',fld:'RAMOATIVIDADEEMPRESAID'},{av:'AV17RamoAtividadeEmpresaId',fld:'vRAMOATIVIDADEEMPRESAID'},{av:'A10020RamoAtividadeCodigo',fld:'RAMOATIVIDADECODIGO'},{av:'A10519AssociadoExcluidoRamoId',fld:'ASSOCIADOEXCLUIDORAMOID'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'}],[]];
   this.setVCMap("AV7EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10019RamoAtividadeEmpresaId", "RAMOATIVIDADEEMPRESAID", 0, "char");
   this.setVCMap("AV17RamoAtividadeEmpresaId", "vRAMOATIVIDADEEMPRESAID", 0, "char");
   this.setVCMap("A10020RamoAtividadeCodigo", "RAMOATIVIDADECODIGO", 0, "int");
   this.setVCMap("A10105RamoAtividadeDescricao", "RAMOATIVIDADEDESCRICAO", 0, "svchar");
   this.setVCMap("AV7EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10019RamoAtividadeEmpresaId", "RAMOATIVIDADEEMPRESAID", 0, "char");
   this.setVCMap("AV17RamoAtividadeEmpresaId", "vRAMOATIVIDADEEMPRESAID", 0, "char");
   this.setVCMap("A10020RamoAtividadeCodigo", "RAMOATIVIDADECODIGO", 0, "int");
   this.setVCMap("A10105RamoAtividadeDescricao", "RAMOATIVIDADEDESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar({rfrVar:"AV7EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar({rfrVar:"A10019RamoAtividadeEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV17RamoAtividadeEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A10020RamoAtividadeCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A10519AssociadoExcluidoRamoId", rfrProp:"Value", gxAttId:"10519"});
   GridContainer.addRefreshingVar({rfrVar:"A10105RamoAtividadeDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaassociadoexcluidoramo());
