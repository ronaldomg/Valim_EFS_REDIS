/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:40.19
*/
gx.evt.autoSkip = false;
gx.define('hlistarsistemas', false, function () {
   this.ServerClass =  "hlistarsistemas" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV29Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.A140SistemaId=gx.fn.getControlValue("SISTEMAID") ;
      this.A138EmpresaId=gx.fn.getControlValue("EMPRESAID") ;
      this.AV34EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.A214SistemaEmpresaVencimento=gx.fn.getDateValue("SISTEMAEMPRESAVENCIMENTO") ;
      this.AV15Caminho=gx.fn.getControlValue("vCAMINHO") ;
   };
   this.e152k1_client=function()
   {
      this.clearMessages();
      /* Start For Each Line in Grid */
      var rowIdx14 = 1 ;
      var currentRowIdx14 = gx.fn.currentGridRowImpl(14) ;
      var rowIdxS14 ;
      var gridObj14 = gx.O.getGridById(14,0) ;
      while ( rowIdx14 <= gridObj14.grid.rows.length )
      {
         rowIdxS14 =  gx.text.padl( gx.text.tostring( rowIdx14), 4, "0")  ;
         gridObj14.instanciateRow(gridObj14.grid.getRowById(rowIdx14 - 1));
         this.AV14SistemaSelecionado =  "S"  ;
         rowIdx14 = gx.num.trunc( rowIdx14 + 1 ,0) ;
         this.refreshRowOutputs([{av:'AV14SistemaSelecionado',fld:'vSISTEMASELECIONADO'}]);
      }
      if ( currentRowIdx14 )
      {
         gridObj14.instanciateRow(currentRowIdx14);
      }
      this.refreshOutputs([{av:'AV14SistemaSelecionado',fld:'vSISTEMASELECIONADO'}]);
   };
   this.e162k1_client=function()
   {
      this.clearMessages();
      /* Start For Each Line in Grid */
      var rowIdx14 = 1 ;
      var currentRowIdx14 = gx.fn.currentGridRowImpl(14) ;
      var rowIdxS14 ;
      var gridObj14 = gx.O.getGridById(14,0) ;
      while ( rowIdx14 <= gridObj14.grid.rows.length )
      {
         rowIdxS14 =  gx.text.padl( gx.text.tostring( rowIdx14), 4, "0")  ;
         gridObj14.instanciateRow(gridObj14.grid.getRowById(rowIdx14 - 1));
         this.AV14SistemaSelecionado =  "N"  ;
         rowIdx14 = gx.num.trunc( rowIdx14 + 1 ,0) ;
         this.refreshRowOutputs([{av:'AV14SistemaSelecionado',fld:'vSISTEMASELECIONADO'}]);
      }
      if ( currentRowIdx14 )
      {
         gridObj14.instanciateRow(currentRowIdx14);
      }
      this.refreshOutputs([{av:'AV14SistemaSelecionado',fld:'vSISTEMASELECIONADO'}]);
   };
   this.e122k2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e112k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e172k2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,13,15,16,17,18];
   this.GXLastCtrlId =18;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",14,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlistarsistemas",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Sistemaselecionado",15,"vSISTEMASELECIONADO","","","SistemaSelecionado","char","S","N",null,true,false,0,"px","");
   GridContainer.addSingleLineEdit(732,16,"SISTEMAINSTALACAOSISTEMAID","Sistema","","SistemaInstalacaoSistemaId","char",0,"px",8,8,"left",null,[],732,"SistemaInstalacaoSistemaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(733,17,"SISTEMAINSTALACAOSISTEMANOME","Descrição","","SistemaInstalacaoSistemaNome","svchar",0,"px",40,40,"left",null,[],733,"SistemaInstalacaoSistemaNome",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[13]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[15]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMASELECIONADO",gxz:"ZV14SistemaSelecionado",gxold:"OV14SistemaSelecionado",gxvar:"AV14SistemaSelecionado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV14SistemaSelecionado=Value},v2z:function(Value){gx.O.ZV14SistemaSelecionado=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("vSISTEMASELECIONADO",row || gx.fn.currentGridRowImpl(14),gx.O.AV14SistemaSelecionado,"S")},c2v:function(){gx.O.AV14SistemaSelecionado=this.val()},val:function(row){return gx.fn.getGridControlValue("vSISTEMASELECIONADO",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[16]={lvl:2,type:"char",len:8,dec:0,sign:false,ro:1,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAINSTALACAOSISTEMAID",gxz:"Z732SistemaInstalacaoSistemaId",gxold:"O732SistemaInstalacaoSistemaId",gxvar:"A732SistemaInstalacaoSistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A732SistemaInstalacaoSistemaId=Value},v2z:function(Value){gx.O.Z732SistemaInstalacaoSistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAINSTALACAOSISTEMAID",row || gx.fn.currentGridRowImpl(14),gx.O.A732SistemaInstalacaoSistemaId,0)},c2v:function(){gx.O.A732SistemaInstalacaoSistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAINSTALACAOSISTEMAID",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAINSTALACAOSISTEMANOME",gxz:"Z733SistemaInstalacaoSistemaNome",gxold:"O733SistemaInstalacaoSistemaNome",gxvar:"A733SistemaInstalacaoSistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A733SistemaInstalacaoSistemaNome=Value},v2z:function(Value){gx.O.Z733SistemaInstalacaoSistemaNome=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAINSTALACAOSISTEMANOME",row || gx.fn.currentGridRowImpl(14),gx.O.A733SistemaInstalacaoSistemaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A733SistemaInstalacaoSistemaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAINSTALACAOSISTEMANOME",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[18]={fld:"DIV2", format:2,grid:0};
   this.ZV14SistemaSelecionado = "" ;
   this.OV14SistemaSelecionado = "" ;
   this.Z732SistemaInstalacaoSistemaId = "" ;
   this.O732SistemaInstalacaoSistemaId = "" ;
   this.Z733SistemaInstalacaoSistemaNome = "" ;
   this.O733SistemaInstalacaoSistemaNome = "" ;
   this.AV15Caminho = "" ;
   this.AV14SistemaSelecionado = "" ;
   this.A732SistemaInstalacaoSistemaId = "" ;
   this.A733SistemaInstalacaoSistemaNome = "" ;
   this.A140SistemaId = "" ;
   this.A138EmpresaId = "" ;
   this.A214SistemaEmpresaVencimento = gx.date.nullDate() ;
   this.AV29Erro = 0 ;
   this.AV34EmpresaLogadaId = "" ;
   this.Events = {"e122k2_client": ["ENTER", true] ,"e112k2_client": ["'FECHAR'", true] ,"e172k2_client": ["CANCEL", true] ,"e152k1_client": ["'SELECIONARTODOS'", false] ,"e162k1_client": ["'DESMARCARTODOS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV29Erro',fld:'vERRO'},{av:'A732SistemaInstalacaoSistemaId',fld:'SISTEMAINSTALACAOSISTEMAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV34EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A214SistemaEmpresaVencimento',fld:'SISTEMAEMPRESAVENCIMENTO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV29Erro',fld:'vERRO'},{av:'A732SistemaInstalacaoSistemaId',fld:'SISTEMAINSTALACAOSISTEMAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV34EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A214SistemaEmpresaVencimento',fld:'SISTEMAEMPRESAVENCIMENTO'}],[{av:'AV33SistemaInstalacaoSistemaId',fld:'vSISTEMAINSTALACAOSISTEMAID'},{av:'AV38GXLvl32',fld:'vGXLVL32'},{av:'AV23SistemaId',fld:'vSISTEMAID'},{av:'AV14SistemaSelecionado',fld:'vSISTEMASELECIONADO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV29Erro',fld:'vERRO'},{av:'AV14SistemaSelecionado',fld:'vSISTEMASELECIONADO',grid:14},{av:'A732SistemaInstalacaoSistemaId',fld:'SISTEMAINSTALACAOSISTEMAID',grid:14}],[{av:'AV24TxtAux',fld:'vTXTAUX'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'SELECIONARTODOS'"] = [[],[{av:'AV14SistemaSelecionado',fld:'vSISTEMASELECIONADO'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[],[{av:'AV14SistemaSelecionado',fld:'vSISTEMASELECIONADO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV29Erro", "vERRO", 0, "int");
   this.setVCMap("A140SistemaId", "SISTEMAID", 0, "char");
   this.setVCMap("A138EmpresaId", "EMPRESAID", 0, "char");
   this.setVCMap("AV34EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A214SistemaEmpresaVencimento", "SISTEMAEMPRESAVENCIMENTO", 0, "date");
   this.setVCMap("AV15Caminho", "vCAMINHO", 0, "svchar");
   this.setVCMap("AV29Erro", "vERRO", 0, "int");
   this.setVCMap("A140SistemaId", "SISTEMAID", 0, "char");
   this.setVCMap("A138EmpresaId", "EMPRESAID", 0, "char");
   this.setVCMap("AV34EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A214SistemaEmpresaVencimento", "SISTEMAEMPRESAVENCIMENTO", 0, "date");
   GridContainer.addRefreshingVar({rfrVar:"AV29Erro"});
   GridContainer.addRefreshingVar({rfrVar:"A732SistemaInstalacaoSistemaId", rfrProp:"Value", gxAttId:"732"});
   GridContainer.addRefreshingVar({rfrVar:"A140SistemaId"});
   GridContainer.addRefreshingVar({rfrVar:"A138EmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV34EmpresaLogadaId"});
   GridContainer.addRefreshingVar({rfrVar:"A214SistemaEmpresaVencimento"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlistarsistemas());
