/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:31:32.77
*/
gx.evt.autoSkip = false;
gx.define('hselecionacaixasbancos', false, function () {
   this.ServerClass =  "hselecionacaixasbancos" ;
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
      this.A1014CaixaBancoEmpresaId=gx.fn.getControlValue("CAIXABANCOEMPRESAID") ;
      this.A1016CaixaBancoTipo=gx.fn.getControlValue("CAIXABANCOTIPO") ;
      this.A1019CaixaBancoSnAtivo=gx.fn.getControlValue("CAIXABANCOSNATIVO") ;
      this.AV14CaixaBancoEmpresaId=gx.fn.getControlValue("vCAIXABANCOEMPRESAID") ;
      this.A1015CaixaBancoId=gx.fn.getIntegerValue("CAIXABANCOID",'.') ;
      this.A1017CaixaBancoDescricao=gx.fn.getControlValue("CAIXABANCODESCRICAO") ;
   };
   this.s122_client=function()
   {
      this.AV19QtCaixas = gx.num.trunc( 0 ,0) ;
      /* Start For Each Line in Grid */
      var rowIdx14 = 1 ;
      var currentRowIdx14 = gx.fn.currentGridRowImpl(14) ;
      var rowIdxS14 ;
      var gridObj14 = gx.O.getGridById(14,0) ;
      while ( rowIdx14 <= gridObj14.grid.rows.length )
      {
         rowIdxS14 =  gx.text.padl( gx.text.tostring( rowIdx14), 4, "0")  ;
         gridObj14.instanciateRow(gridObj14.grid.getRowById(rowIdx14 - 1));
         if ( this.AV13SnSeleciona == "S" )
         {
            this.AV18SdtCaixaBancoItem =  {CaixaBancoId:0}  ;
            this.AV18SdtCaixaBancoItem.CaixaBancoId = gx.num.trunc( this.AV15CaixaBancoId ,0) ;
            this.AV17SdtCaixaBanco.push(this.AV18SdtCaixaBancoItem) ;
            this.AV19QtCaixas = gx.num.trunc( this.AV19QtCaixas + 1 ,0) ;
         }
         rowIdx14 = gx.num.trunc( rowIdx14 + 1 ,0) ;
      }
      if ( currentRowIdx14 )
      {
         gridObj14.instanciateRow(currentRowIdx14);
      }
   };
   this.e11ya2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ya2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ya2_client=function()
   {
      this.executeServerEvent("'SELECIONARTODOS'", false, null, false, false);
   };
   this.e14ya2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e17ya2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,13,15,16,17,18];
   this.GXLastCtrlId =18;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",14,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hselecionacaixasbancos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Snseleciona",15,"vSNSELECIONA","","","SnSeleciona","char","S","N",null,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Caixabancoid",16,"vCAIXABANCOID","Caixa/Banco","","CaixaBancoId","int",0,"px",5,5,"right",null,[],"Caixabancoid","CaixaBancoId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Caixabancodescricao",17,"vCAIXABANCODESCRICAO","Descrição","","CaixaBancoDescricao","svchar",0,"px",25,25,"left",null,[],"Caixabancodescricao","CaixaBancoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[13]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[15]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNSELECIONA",gxz:"ZV13SnSeleciona",gxold:"OV13SnSeleciona",gxvar:"AV13SnSeleciona",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV13SnSeleciona=Value},v2z:function(Value){gx.O.ZV13SnSeleciona=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("vSNSELECIONA",row || gx.fn.currentGridRowImpl(14),gx.O.AV13SnSeleciona,"S")},c2v:function(){gx.O.AV13SnSeleciona=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNSELECIONA",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[16]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOID",gxz:"ZV15CaixaBancoId",gxold:"OV15CaixaBancoId",gxvar:"AV15CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15CaixaBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCAIXABANCOID",row || gx.fn.currentGridRowImpl(14),gx.O.AV15CaixaBancoId,0)},c2v:function(){gx.O.AV15CaixaBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCAIXABANCOID",row || gx.fn.currentGridRowImpl(14),'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV16CaixaBancoDescricao",gxold:"OV16CaixaBancoDescricao",gxvar:"AV16CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV16CaixaBancoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vCAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(14),gx.O.AV16CaixaBancoDescricao,0)},c2v:function(){gx.O.AV16CaixaBancoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vCAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[18]={fld:"DIV2", format:2,grid:0};
   this.ZV13SnSeleciona = "" ;
   this.OV13SnSeleciona = "" ;
   this.ZV15CaixaBancoId = 0 ;
   this.OV15CaixaBancoId = 0 ;
   this.ZV16CaixaBancoDescricao = "" ;
   this.OV16CaixaBancoDescricao = "" ;
   this.A1019CaixaBancoSnAtivo = "" ;
   this.A1016CaixaBancoTipo = "" ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.AV13SnSeleciona = "" ;
   this.AV15CaixaBancoId = 0 ;
   this.AV16CaixaBancoDescricao = "" ;
   this.AV14CaixaBancoEmpresaId = "" ;
   this.AV18SdtCaixaBancoItem = {} ;
   this.AV19QtCaixas = 0 ;
   this.Events = {"e11ya2_client": ["ENTER", true] ,"e12ya2_client": ["'FECHAR'", true] ,"e13ya2_client": ["'SELECIONARTODOS'", true] ,"e14ya2_client": ["'DESMARCARTODOS'", true] ,"e17ya2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV14CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'gx.fn.getCtrlProperty("vSNSELECIONA","Enabled")',ctrl:'vSNSELECIONA',prop:'Enabled'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1016CaixaBancoTipo',fld:'CAIXABANCOTIPO'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'AV13SnSeleciona',fld:'vSNSELECIONA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19QtCaixas',fld:'vQTCAIXAS'},{av:'AV17SdtCaixaBanco',fld:'vSDTCAIXABANCO'},{av:'AV13SnSeleciona',fld:'vSNSELECIONA',grid:14},{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID',grid:14}],[{av:'AV19QtCaixas',fld:'vQTCAIXAS'},{av:'AV18SdtCaixaBancoItem',fld:'vSDTCAIXABANCOITEM'},{av:'AV17SdtCaixaBanco',fld:'vSDTCAIXABANCO'}]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV17SdtCaixaBanco',fld:'vSDTCAIXABANCO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV14CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'A1016CaixaBancoTipo',fld:'CAIXABANCOTIPO'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'AV13SnSeleciona',fld:'vSNSELECIONA'}],[{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV16CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'}]];
   this.EvtParms["'SELECIONARTODOS'"] = [[],[{av:'AV13SnSeleciona',fld:'vSNSELECIONA'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[],[{av:'AV13SnSeleciona',fld:'vSNSELECIONA'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("A1014CaixaBancoEmpresaId", "CAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("A1016CaixaBancoTipo", "CAIXABANCOTIPO", 0, "char");
   this.setVCMap("A1019CaixaBancoSnAtivo", "CAIXABANCOSNATIVO", 0, "char");
   this.setVCMap("AV14CaixaBancoEmpresaId", "vCAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("A1015CaixaBancoId", "CAIXABANCOID", 0, "int");
   this.setVCMap("A1017CaixaBancoDescricao", "CAIXABANCODESCRICAO", 0, "svchar");
   this.setVCMap("AV14CaixaBancoEmpresaId", "vCAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("A1015CaixaBancoId", "CAIXABANCOID", 0, "int");
   this.setVCMap("A1017CaixaBancoDescricao", "CAIXABANCODESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar({rfrVar:"AV14CaixaBancoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV13SnSeleciona", rfrProp:"Enabled", gxAttId:"Snseleciona"});
   GridContainer.addRefreshingVar({rfrVar:"A1015CaixaBancoId"});
   GridContainer.addRefreshingVar({rfrVar:"A1014CaixaBancoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A1016CaixaBancoTipo"});
   GridContainer.addRefreshingVar({rfrVar:"A1019CaixaBancoSnAtivo"});
   GridContainer.addRefreshingVar({rfrVar:"A1017CaixaBancoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"AV13SnSeleciona", rfrProp:"Value", gxAttId:"Snseleciona"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hselecionacaixasbancos());
