/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:11:5.37
*/
gx.evt.autoSkip = false;
gx.define('hconsultacnae', false, function () {
   this.ServerClass =  "hconsultacnae" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.A1156FilialId=gx.fn.getIntegerValue("FILIALID",'.') ;
      this.AV9filialid=gx.fn.getIntegerValue("vFILIALID",'.') ;
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.AV10filialempresaid=gx.fn.getControlValue("vFILIALEMPRESAID") ;
      this.AV8pCNAE=gx.fn.getControlValue("vPCNAE") ;
   };
   this.e172cl2_client=function()
   {
      this.executeServerEvent("'SELECT'", true, arguments[0], false, false);
   };
   this.e112cl2_client=function()
   {
      this.executeServerEvent("'PRIMEIRA'", true, null, false, false);
   };
   this.e122cl2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e132cl2_client=function()
   {
      this.executeServerEvent("'PROXIMA'", true, null, false, false);
   };
   this.e142cl2_client=function()
   {
      this.executeServerEvent("'ULTIMA'", true, null, false, false);
   };
   this.e152cl2_client=function()
   {
      this.executeServerEvent("'ADICIONAR'", true, null, false, false);
   };
   this.e202cl2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e212cl1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,19,20,21,24,27,30,32,34,36,38];
   this.GXLastCtrlId =38;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacnae",[],false,1,false,true,10,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11183,19,"CNAE","CNAE","","CNAE","char",0,"px",10,10,"left",null,[],11183,"CNAE",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11184,20,"CNAEDESCRICAO","Descrição","Selecionar","CNAEDescricao","svchar",0,"px",100,80,"left",null,[],11184,"CNAEDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Linkselection","vLINKSELECTION",21,0,"px",17,"px","e172cl2_client","","","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCKCNAE", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCCNAE",gxz:"ZV6cCNAE",gxold:"OV6cCNAE",gxvar:"AV6cCNAE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCNAE=Value},v2z:function(Value){gx.O.ZV6cCNAE=Value},v2c:function(){gx.fn.setControlValue("vCCNAE",gx.O.AV6cCNAE,0)},c2v:function(){gx.O.AV6cCNAE=this.val()},val:function(){return gx.fn.getControlValue("vCCNAE")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCKCNAEDESCRICAO", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCCNAEDESCRICAO",gxz:"ZV7cCNAEDescricao",gxold:"OV7cCNAEDescricao",gxvar:"AV7cCNAEDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCNAEDescricao=Value},v2z:function(Value){gx.O.ZV7cCNAEDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCNAEDESCRICAO",gx.O.AV7cCNAEDescricao,0)},c2v:function(){gx.O.AV7cCNAEDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCNAEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CNAE",gxz:"Z11183CNAE",gxold:"O11183CNAE",gxvar:"A11183CNAE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11183CNAE=Value},v2z:function(Value){gx.O.Z11183CNAE=Value},v2c:function(row){gx.fn.setGridControlValue("CNAE",row || gx.fn.currentGridRowImpl(18),gx.O.A11183CNAE,0)},c2v:function(){gx.O.A11183CNAE=this.val()},val:function(row){return gx.fn.getGridControlValue("CNAE",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CNAEDESCRICAO",gxz:"Z11184CNAEDescricao",gxold:"O11184CNAEDescricao",gxvar:"A11184CNAEDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11184CNAEDescricao=Value},v2z:function(Value){gx.O.Z11184CNAEDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CNAEDESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A11184CNAEDescricao,0)},c2v:function(){gx.O.A11184CNAEDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CNAEDESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(18),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(18))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(18))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABLE9",grid:0};
   GXValidFnc[27]={fld:"PRIMEIRA2",grid:0};
   GXValidFnc[30]={fld:"PRIMEIRA",grid:0};
   GXValidFnc[32]={fld:"ANTERIOR",grid:0};
   GXValidFnc[34]={fld:"PROXIMA",grid:0};
   GXValidFnc[36]={fld:"ULTIMA",grid:0};
   GXValidFnc[38]={fld:"IMAGE11",grid:0};
   this.AV6cCNAE = "" ;
   this.ZV6cCNAE = "" ;
   this.OV6cCNAE = "" ;
   this.AV7cCNAEDescricao = "" ;
   this.ZV7cCNAEDescricao = "" ;
   this.OV7cCNAEDescricao = "" ;
   this.Z11183CNAE = "" ;
   this.O11183CNAE = "" ;
   this.Z11184CNAEDescricao = "" ;
   this.O11184CNAEDescricao = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.AV6cCNAE = "" ;
   this.AV7cCNAEDescricao = "" ;
   this.AV9filialid = 0 ;
   this.AV10filialempresaid = "" ;
   this.AV8pCNAE = "" ;
   this.A11183CNAE = "" ;
   this.A11184CNAEDescricao = "" ;
   this.AV5LinkSelection = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.Events = {"e172cl2_client": ["'SELECT'", true] ,"e112cl2_client": ["'PRIMEIRA'", true] ,"e122cl2_client": ["'ANTERIOR'", true] ,"e132cl2_client": ["'PROXIMA'", true] ,"e142cl2_client": ["'ULTIMA'", true] ,"e152cl2_client": ["'ADICIONAR'", true] ,"e202cl2_client": ["ENTER", true] ,"e212cl1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'},{av:'A11183CNAE',fld:'CNAE'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV9filialid',fld:'vFILIALID',hsh:true},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV10filialempresaid',fld:'vFILIALEMPRESAID',hsh:true}],[]];
   this.EvtParms["'SELECT'"] = [[{av:'AV9filialid',fld:'vFILIALID',hsh:true},{av:'A11183CNAE',fld:'CNAE'},{av:'AV10filialempresaid',fld:'vFILIALEMPRESAID',hsh:true}],[{av:'AV8pCNAE',fld:'vPCNAE'},{av:'A11183CNAE',fld:'CNAE'},{av:'AV10filialempresaid',fld:'vFILIALEMPRESAID',hsh:true},{av:'AV9filialid',fld:'vFILIALID',hsh:true}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'A11183CNAE',fld:'CNAE'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV9filialid',fld:'vFILIALID',hsh:true},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV10filialempresaid',fld:'vFILIALEMPRESAID',hsh:true}],[{av:'AV12GridCNAE',fld:'vGRIDCNAE'},{av:'AV15GXLvl17',fld:'vGXLVL17'},{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["'PRIMEIRA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'},{av:'A11183CNAE',fld:'CNAE'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV9filialid',fld:'vFILIALID',hsh:true},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV10filialempresaid',fld:'vFILIALEMPRESAID',hsh:true}],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'},{av:'A11183CNAE',fld:'CNAE'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV9filialid',fld:'vFILIALID',hsh:true},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV10filialempresaid',fld:'vFILIALEMPRESAID',hsh:true}],[]];
   this.EvtParms["'PROXIMA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'},{av:'A11183CNAE',fld:'CNAE'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV9filialid',fld:'vFILIALID',hsh:true},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV10filialempresaid',fld:'vFILIALEMPRESAID',hsh:true}],[]];
   this.EvtParms["'ULTIMA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'},{av:'A11183CNAE',fld:'CNAE'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV9filialid',fld:'vFILIALID',hsh:true},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV10filialempresaid',fld:'vFILIALEMPRESAID',hsh:true}],[]];
   this.EvtParms["'ADICIONAR'"] = [[],[]];
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("AV9filialid", "vFILIALID", 0, "int");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("AV10filialempresaid", "vFILIALEMPRESAID", 0, "char");
   this.setVCMap("AV8pCNAE", "vPCNAE", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("AV9filialid", "vFILIALID", 0, "int");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("AV10filialempresaid", "vFILIALEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[15]);
   GridContainer.addRefreshingVar({rfrVar:"A11183CNAE", rfrProp:"Value", gxAttId:"11183"});
   GridContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridContainer.addRefreshingVar({rfrVar:"AV9filialid"});
   GridContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV10filialempresaid"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacnae());
