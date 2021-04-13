/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:59:26.86
*/
gx.evt.autoSkip = false;
gx.define('hhistoricosolicitacao', false, function () {
   this.ServerClass =  "hhistoricosolicitacao" ;
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
      this.AV12SolicitacaoEmpresaId=gx.fn.getControlValue("vSOLICITACAOEMPRESAID") ;
      this.AV24SnConvenio=gx.fn.getControlValue("vSNCONVENIO") ;
   };
   this.e14od2_client=function()
   {
      this.clearMessages();
      this.AV17SolicitacaoHistoricoObservacao =  this.A4056SolicitacaoHistoricoObservacao  ;
      this.refreshOutputs([{av:'AV17SolicitacaoHistoricoObservacao',fld:'vSOLICITACAOHISTORICOOBSERVACAO'}]);
   };
   this.e11od2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15od2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,13,15,18,20,25,27,34,35,38,40,41,42,43,44,45,46,47,49,52,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",39,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hhistoricosolicitacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4061,40,"SOLICITACAOHISTORICOSEQ","Seq","","SolicitacaoHistoricoSeq","int",0,"px",4,4,"right",null,[],4061,"SolicitacaoHistoricoSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4053,41,"SOLICITACAOHISTORICODATA","Data","","SolicitacaoHistoricoData","date",97,"px",10,10,"right",null,[],4053,"SolicitacaoHistoricoData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Situacao",42,"vSITUACAO","Situação","","Situacao","svchar",90,"px",40,40,"left",null,[],"Situacao","Situacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(4054,43,"SOLICITACAOHISTORICOSITUACAO","Situação","SolicitacaoHistoricoSituacao","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit(4055,44,"SOLICITACAOHISTORICOUSUARIOID","Usuário","","SolicitacaoHistoricoUsuarioId","char",0,"px",12,12,"left",null,[],4055,"SolicitacaoHistoricoUsuarioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpobs","vBMPOBS",45,0,"px",17,"px","e14od2_client","","Obs","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(4056,46,"SOLICITACAOHISTORICOOBSERVACAO","Observação","","SolicitacaoHistoricoObservacao","vchar",0,"px",3000,80,"left",null,[],4056,"SolicitacaoHistoricoObservacao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={lvl:0,type:"svchar",len:12,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCSOLICITACAO",gxz:"ZV18DescSolicitacao",gxold:"OV18DescSolicitacao",gxvar:"AV18DescSolicitacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18DescSolicitacao=Value},v2z:function(Value){gx.O.ZV18DescSolicitacao=Value},v2c:function(){gx.fn.setControlValue("vDESCSOLICITACAO",gx.O.AV18DescSolicitacao,0)},c2v:function(){gx.O.AV18DescSolicitacao=this.val()},val:function(){return gx.fn.getControlValue("vDESCSOLICITACAO")},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITACAONUMERO",gxz:"ZV11SolicitacaoNumero",gxold:"OV11SolicitacaoNumero",gxvar:"AV11SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV11SolicitacaoNumero,0)},c2v:function(){gx.O.AV11SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITACAOSITUACAO",gxz:"ZV21SolicitacaoSituacao",gxold:"OV21SolicitacaoSituacao",gxvar:"AV21SolicitacaoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21SolicitacaoSituacao=Value},v2z:function(Value){gx.O.ZV21SolicitacaoSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vSOLICITACAOSITUACAO",gx.O.AV21SolicitacaoSituacao)},c2v:function(){gx.O.AV21SolicitacaoSituacao=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOSITUACAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPTOCOMPRASNOME",gxz:"ZV20DeptoComprasNome",gxold:"OV20DeptoComprasNome",gxvar:"AV20DeptoComprasNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DeptoComprasNome=Value},v2z:function(Value){gx.O.ZV20DeptoComprasNome=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASNOME",gx.O.AV20DeptoComprasNome,0)},c2v:function(){gx.O.AV20DeptoComprasNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASNOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITANTENOME",gxz:"ZV19SolicitanteNome",gxold:"OV19SolicitanteNome",gxvar:"AV19SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19SolicitanteNome=Value},v2z:function(Value){gx.O.ZV19SolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTENOME",gx.O.AV19SolicitanteNome,0)},c2v:function(){gx.O.AV19SolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTENOME")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLE5",grid:0};
   GXValidFnc[35]={fld:"TABLE6",grid:0};
   GXValidFnc[38]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[40]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOHISTORICOSEQ",gxz:"Z4061SolicitacaoHistoricoSeq",gxold:"O4061SolicitacaoHistoricoSeq",gxvar:"A4061SolicitacaoHistoricoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4061SolicitacaoHistoricoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4061SolicitacaoHistoricoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAOHISTORICOSEQ",row || gx.fn.currentGridRowImpl(39),gx.O.A4061SolicitacaoHistoricoSeq,0)},c2v:function(){gx.O.A4061SolicitacaoHistoricoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITACAOHISTORICOSEQ",row || gx.fn.currentGridRowImpl(39),'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOHISTORICODATA",gxz:"Z4053SolicitacaoHistoricoData",gxold:"O4053SolicitacaoHistoricoData",gxvar:"A4053SolicitacaoHistoricoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4053SolicitacaoHistoricoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4053SolicitacaoHistoricoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAOHISTORICODATA",row || gx.fn.currentGridRowImpl(39),gx.O.A4053SolicitacaoHistoricoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4053SolicitacaoHistoricoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SOLICITACAOHISTORICODATA",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAO",gxz:"ZV22Situacao",gxold:"OV22Situacao",gxvar:"AV22Situacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV22Situacao=Value},v2z:function(Value){gx.O.ZV22Situacao=Value},v2c:function(row){gx.fn.setGridControlValue("vSITUACAO",row || gx.fn.currentGridRowImpl(39),gx.O.AV22Situacao,0)},c2v:function(){gx.O.AV22Situacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vSITUACAO",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOHISTORICOSITUACAO",gxz:"Z4054SolicitacaoHistoricoSituacao",gxold:"O4054SolicitacaoHistoricoSituacao",gxvar:"A4054SolicitacaoHistoricoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4054SolicitacaoHistoricoSituacao=Value},v2z:function(Value){gx.O.Z4054SolicitacaoHistoricoSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SOLICITACAOHISTORICOSITUACAO",row || gx.fn.currentGridRowImpl(39),gx.O.A4054SolicitacaoHistoricoSituacao)},c2v:function(){gx.O.A4054SolicitacaoHistoricoSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITACAOHISTORICOSITUACAO",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOHISTORICOUSUARIOID",gxz:"Z4055SolicitacaoHistoricoUsuarioId",gxold:"O4055SolicitacaoHistoricoUsuarioId",gxvar:"A4055SolicitacaoHistoricoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4055SolicitacaoHistoricoUsuarioId=Value},v2z:function(Value){gx.O.Z4055SolicitacaoHistoricoUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAOHISTORICOUSUARIOID",row || gx.fn.currentGridRowImpl(39),gx.O.A4055SolicitacaoHistoricoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4055SolicitacaoHistoricoUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITACAOHISTORICOUSUARIOID",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOBS",gxz:"ZV16bmpObs",gxold:"OV16bmpObs",gxvar:"AV16bmpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpObs=Value},v2z:function(Value){gx.O.ZV16bmpObs=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOBS",row || gx.fn.currentGridRowImpl(39),gx.O.AV16bmpObs,gx.O.AV29Bmpobs_GXI)},c2v:function(){gx.O.AV29Bmpobs_GXI=this.val_GXI();gx.O.AV16bmpObs=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOBS",row || gx.fn.currentGridRowImpl(39))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOBS_GXI",row || gx.fn.currentGridRowImpl(39))}, gxvar_GXI:'AV29Bmpobs_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"vchar",len:3000,dec:0,sign:false,ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOHISTORICOOBSERVACAO",gxz:"Z4056SolicitacaoHistoricoObservacao",gxold:"O4056SolicitacaoHistoricoObservacao",gxvar:"A4056SolicitacaoHistoricoObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4056SolicitacaoHistoricoObservacao=Value},v2z:function(Value){gx.O.Z4056SolicitacaoHistoricoObservacao=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAOHISTORICOOBSERVACAO",row || gx.fn.currentGridRowImpl(39),gx.O.A4056SolicitacaoHistoricoObservacao,0)},c2v:function(){gx.O.A4056SolicitacaoHistoricoObservacao=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITACAOHISTORICOOBSERVACAO",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[47]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[49]={fld:"TABLE4",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOHISTORICOOBSERVACAO",gxz:"ZV17SolicitacaoHistoricoObservacao",gxold:"OV17SolicitacaoHistoricoObservacao",gxvar:"AV17SolicitacaoHistoricoObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SolicitacaoHistoricoObservacao=Value},v2z:function(Value){gx.O.ZV17SolicitacaoHistoricoObservacao=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOHISTORICOOBSERVACAO",gx.O.AV17SolicitacaoHistoricoObservacao,0)},c2v:function(){gx.O.AV17SolicitacaoHistoricoObservacao=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOHISTORICOOBSERVACAO")},nac:gx.falseFn};
   this.AV18DescSolicitacao = "" ;
   this.ZV18DescSolicitacao = "" ;
   this.OV18DescSolicitacao = "" ;
   this.AV11SolicitacaoNumero = 0 ;
   this.ZV11SolicitacaoNumero = 0 ;
   this.OV11SolicitacaoNumero = 0 ;
   this.AV21SolicitacaoSituacao = "" ;
   this.ZV21SolicitacaoSituacao = "" ;
   this.OV21SolicitacaoSituacao = "" ;
   this.AV20DeptoComprasNome = "" ;
   this.ZV20DeptoComprasNome = "" ;
   this.OV20DeptoComprasNome = "" ;
   this.AV19SolicitanteNome = "" ;
   this.ZV19SolicitanteNome = "" ;
   this.OV19SolicitanteNome = "" ;
   this.Z4061SolicitacaoHistoricoSeq = 0 ;
   this.O4061SolicitacaoHistoricoSeq = 0 ;
   this.Z4053SolicitacaoHistoricoData = gx.date.nullDate() ;
   this.O4053SolicitacaoHistoricoData = gx.date.nullDate() ;
   this.ZV22Situacao = "" ;
   this.OV22Situacao = "" ;
   this.Z4054SolicitacaoHistoricoSituacao = "" ;
   this.O4054SolicitacaoHistoricoSituacao = "" ;
   this.Z4055SolicitacaoHistoricoUsuarioId = "" ;
   this.O4055SolicitacaoHistoricoUsuarioId = "" ;
   this.ZV16bmpObs = "" ;
   this.OV16bmpObs = "" ;
   this.Z4056SolicitacaoHistoricoObservacao = "" ;
   this.O4056SolicitacaoHistoricoObservacao = "" ;
   this.AV17SolicitacaoHistoricoObservacao = "" ;
   this.ZV17SolicitacaoHistoricoObservacao = "" ;
   this.OV17SolicitacaoHistoricoObservacao = "" ;
   this.AV18DescSolicitacao = "" ;
   this.AV11SolicitacaoNumero = 0 ;
   this.AV21SolicitacaoSituacao = "" ;
   this.AV20DeptoComprasNome = "" ;
   this.AV19SolicitanteNome = "" ;
   this.AV17SolicitacaoHistoricoObservacao = "" ;
   this.AV12SolicitacaoEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4061SolicitacaoHistoricoSeq = 0 ;
   this.A4053SolicitacaoHistoricoData = gx.date.nullDate() ;
   this.AV22Situacao = "" ;
   this.A4054SolicitacaoHistoricoSituacao = "" ;
   this.A4055SolicitacaoHistoricoUsuarioId = "" ;
   this.AV16bmpObs = "" ;
   this.A4056SolicitacaoHistoricoObservacao = "" ;
   this.A140SistemaId = "" ;
   this.A138EmpresaId = "" ;
   this.AV24SnConvenio = "" ;
   this.Events = {"e11od2_client": ["ENTER", true] ,"e15od2_client": ["CANCEL", true] ,"e14od2_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV21SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV12SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID',hsh:true},{av:'AV11SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV16bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV24SnConvenio',fld:'vSNCONVENIO',hsh:true},{av:'A4054SolicitacaoHistoricoSituacao',fld:'SOLICITACAOHISTORICOSITUACAO'}],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'A4056SolicitacaoHistoricoObservacao',fld:'SOLICITACAOHISTORICOOBSERVACAO'}],[{av:'AV17SolicitacaoHistoricoObservacao',fld:'vSOLICITACAOHISTORICOOBSERVACAO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV24SnConvenio',fld:'vSNCONVENIO',hsh:true},{av:'A4054SolicitacaoHistoricoSituacao',fld:'SOLICITACAOHISTORICOSITUACAO'}],[{av:'AV22Situacao',fld:'vSITUACAO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12SolicitacaoEmpresaId", "vSOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV24SnConvenio", "vSNCONVENIO", 0, "char");
   this.setVCMap("AV12SolicitacaoEmpresaId", "vSOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV24SnConvenio", "vSNCONVENIO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[15]);
   GridContainer.addRefreshingVar({rfrVar:"AV12SolicitacaoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[11]);
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpObs", rfrProp:"Value", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpObs", rfrProp:"Tooltiptext", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar({rfrVar:"AV24SnConvenio"});
   GridContainer.addRefreshingVar({rfrVar:"A4054SolicitacaoHistoricoSituacao", rfrProp:"Value", gxAttId:"4054"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hhistoricosolicitacao());
