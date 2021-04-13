/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 7:32:22.34
*/
gx.evt.autoSkip = false;
gx.define('hconsultasaidaexportacao', false, function () {
   this.ServerClass =  "hconsultasaidaexportacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV81SaidaExportacaoEmpresaId=gx.fn.getControlValue("vSAIDAEXPORTACAOEMPRESAID") ;
      this.AV79PSaidaExportacaoNoDeclaracao=gx.fn.getIntegerValue("vPSAIDAEXPORTACAONODECLARACAO",'.') ;
   };
   this.Valid_Saidaexportacaopaisid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(46) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAOPAISID", gx.fn.currentGridRowImpl(46));
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
   this.e1911t2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1111t2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1211t2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1311t2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1411t2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1511t2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1611t2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1711t2_client=function()
   {
      this.executeServerEvent("VSAIDAEXPORTACAOPAISID.ISVALID", true, null, false, true);
   };
   this.e2111t2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2311t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,24,26,28,31,33,36,38,39,47,48,49,50,51,52,53,59,63,66,68,70,72,74,75,76,77,78,80,81];
   this.GXLastCtrlId =81;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasaidaexportacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(6022,47,"SAIDAEXPORTACAONODECLARACAO","","","SaidaExportacaoNoDeclaracao","int",0,"px",11,11,"right",null,[],6022,"SaidaExportacaoNoDeclaracao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(6314,48,"SAIDAEXPORTACAOTIPODOCUME","","SaidaExportacaoTipoDocume","int",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(6315,49,"SAIDAEXPORTACAODTDECLARACAO","","","SaidaExportacaoDtDeclaracao","date",0,"px",10,10,"right",null,[],6315,"SaidaExportacaoDtDeclaracao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(6316,50,"SAIDAEXPORTACAONATUREZA","","SaidaExportacaoNatureza","int",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(6324,51,"SAIDAEXPORTACAOPAISNOME","","","SaidaExportacaoPaisNome","svchar",0,"px",40,40,"left",null,[],6324,"SaidaExportacaoPaisNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6021,52,"SAIDAEXPORTACAOEMPRESAID","Empresa Exportação","","SaidaExportacaoEmpresaId","char",0,"px",10,10,"left",null,[],6021,"SaidaExportacaoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6323,53,"SAIDAEXPORTACAOPAISID","Código do país de destino da mercadoria","","SaidaExportacaoPaisId","int",0,"px",7,7,"right",null,[],6323,"SaidaExportacaoPaisId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TABLE12",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:11,dec:0,sign:false,pic:"ZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAEXPORTACAONODECLARACAO",gxz:"ZV67SaidaExportacaoNoDeclaracao",gxold:"OV67SaidaExportacaoNoDeclaracao",gxvar:"AV67SaidaExportacaoNoDeclaracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67SaidaExportacaoNoDeclaracao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67SaidaExportacaoNoDeclaracao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAEXPORTACAONODECLARACAO",gx.O.AV67SaidaExportacaoNoDeclaracao,0)},c2v:function(){gx.O.AV67SaidaExportacaoNoDeclaracao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAEXPORTACAONODECLARACAO",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAEXPORTACAONATUREZA",gxz:"ZV70SaidaExportacaoNatureza",gxold:"OV70SaidaExportacaoNatureza",gxvar:"AV70SaidaExportacaoNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV70SaidaExportacaoNatureza=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70SaidaExportacaoNatureza=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSAIDAEXPORTACAONATUREZA",gx.O.AV70SaidaExportacaoNatureza)},c2v:function(){gx.O.AV70SaidaExportacaoNatureza=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAEXPORTACAONATUREZA",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAEXPORTACAODTDECLARACAO",gxz:"ZV69SaidaExportacaoDtDeclaracao",gxold:"OV69SaidaExportacaoDtDeclaracao",gxvar:"AV69SaidaExportacaoDtDeclaracao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV69SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAEXPORTACAODTDECLARACAO",gx.O.AV69SaidaExportacaoDtDeclaracao,0)},c2v:function(){gx.O.AV69SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDAEXPORTACAODTDECLARACAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE13",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAEXPORTACAOTIPODOCUME",gxz:"ZV68SaidaExportacaoTipoDocume",gxold:"OV68SaidaExportacaoTipoDocume",gxvar:"AV68SaidaExportacaoTipoDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV68SaidaExportacaoTipoDocume=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68SaidaExportacaoTipoDocume=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSAIDAEXPORTACAOTIPODOCUME",gx.O.AV68SaidaExportacaoTipoDocume)},c2v:function(){gx.O.AV68SaidaExportacaoTipoDocume=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAEXPORTACAOTIPODOCUME",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e1711t2_client',rgrid:[this.GridContainer],fld:"vSAIDAEXPORTACAOPAISID",gxz:"ZV77SaidaExportacaoPaisId",gxold:"OV77SaidaExportacaoPaisId",gxvar:"AV77SaidaExportacaoPaisId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77SaidaExportacaoPaisId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77SaidaExportacaoPaisId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAEXPORTACAOPAISID",gx.O.AV77SaidaExportacaoPaisId,0)},c2v:function(){gx.O.AV77SaidaExportacaoPaisId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAEXPORTACAOPAISID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAEXPORTACAOPAISNOME",gxz:"ZV78SaidaExportacaoPaisNome",gxold:"OV78SaidaExportacaoPaisNome",gxvar:"AV78SaidaExportacaoPaisNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78SaidaExportacaoPaisNome=Value},v2z:function(Value){gx.O.ZV78SaidaExportacaoPaisNome=Value},v2c:function(){gx.fn.setControlValue("vSAIDAEXPORTACAOPAISNOME",gx.O.AV78SaidaExportacaoPaisNome,0)},c2v:function(){gx.O.AV78SaidaExportacaoPaisNome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAEXPORTACAOPAISNOME")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:11,dec:0,sign:false,pic:"ZZZZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAONODECLARACAO",gxz:"Z6022SaidaExportacaoNoDeclaracao",gxold:"O6022SaidaExportacaoNoDeclaracao",gxvar:"A6022SaidaExportacaoNoDeclaracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6022SaidaExportacaoNoDeclaracao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6022SaidaExportacaoNoDeclaracao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAEXPORTACAONODECLARACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A6022SaidaExportacaoNoDeclaracao,0)},c2v:function(){gx.O.A6022SaidaExportacaoNoDeclaracao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAEXPORTACAONODECLARACAO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOTIPODOCUME",gxz:"Z6314SaidaExportacaoTipoDocume",gxold:"O6314SaidaExportacaoTipoDocume",gxvar:"A6314SaidaExportacaoTipoDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A6314SaidaExportacaoTipoDocume=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6314SaidaExportacaoTipoDocume=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDAEXPORTACAOTIPODOCUME",row || gx.fn.currentGridRowImpl(46),gx.O.A6314SaidaExportacaoTipoDocume)},c2v:function(){gx.O.A6314SaidaExportacaoTipoDocume=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAEXPORTACAOTIPODOCUME",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAODTDECLARACAO",gxz:"Z6315SaidaExportacaoDtDeclaracao",gxold:"O6315SaidaExportacaoDtDeclaracao",gxvar:"A6315SaidaExportacaoDtDeclaracao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6315SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6315SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAEXPORTACAODTDECLARACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A6315SaidaExportacaoDtDeclaracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6315SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDAEXPORTACAODTDECLARACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAONATUREZA",gxz:"Z6316SaidaExportacaoNatureza",gxold:"O6316SaidaExportacaoNatureza",gxvar:"A6316SaidaExportacaoNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A6316SaidaExportacaoNatureza=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6316SaidaExportacaoNatureza=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDAEXPORTACAONATUREZA",row || gx.fn.currentGridRowImpl(46),gx.O.A6316SaidaExportacaoNatureza)},c2v:function(){gx.O.A6316SaidaExportacaoNatureza=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAEXPORTACAONATUREZA",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOPAISNOME",gxz:"Z6324SaidaExportacaoPaisNome",gxold:"O6324SaidaExportacaoPaisNome",gxvar:"A6324SaidaExportacaoPaisNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6324SaidaExportacaoPaisNome=Value},v2z:function(Value){gx.O.Z6324SaidaExportacaoPaisNome=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEXPORTACAOPAISNOME",row || gx.fn.currentGridRowImpl(46),gx.O.A6324SaidaExportacaoPaisNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6324SaidaExportacaoPaisNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEXPORTACAOPAISNOME",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOEMPRESAID",gxz:"Z6021SaidaExportacaoEmpresaId",gxold:"O6021SaidaExportacaoEmpresaId",gxvar:"A6021SaidaExportacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6021SaidaExportacaoEmpresaId=Value},v2z:function(Value){gx.O.Z6021SaidaExportacaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEXPORTACAOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A6021SaidaExportacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6021SaidaExportacaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEXPORTACAOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:this.Valid_Saidaexportacaopaisid,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOPAISID",gxz:"Z6323SaidaExportacaoPaisId",gxold:"O6323SaidaExportacaoPaisId",gxvar:"A6323SaidaExportacaoPaisId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6323SaidaExportacaoPaisId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6323SaidaExportacaoPaisId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAEXPORTACAOPAISID",row || gx.fn.currentGridRowImpl(46),gx.O.A6323SaidaExportacaoPaisId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6323SaidaExportacaoPaisId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAEXPORTACAOPAISID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE8",grid:0};
   GXValidFnc[63]={fld:"TABLE9",grid:0};
   GXValidFnc[66]={fld:"IMAGE2",grid:0};
   GXValidFnc[68]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[70]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[72]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[74]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[75]={fld:"JS", format:2,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[80]={fld:"BTNHELP",grid:0};
   GXValidFnc[81]={fld:"PROMPT_SAIDAEXPORTACAOPAISID",grid:0};
   this.AV67SaidaExportacaoNoDeclaracao = 0 ;
   this.ZV67SaidaExportacaoNoDeclaracao = 0 ;
   this.OV67SaidaExportacaoNoDeclaracao = 0 ;
   this.AV70SaidaExportacaoNatureza = 0 ;
   this.ZV70SaidaExportacaoNatureza = 0 ;
   this.OV70SaidaExportacaoNatureza = 0 ;
   this.AV69SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.ZV69SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.OV69SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.AV68SaidaExportacaoTipoDocume = 0 ;
   this.ZV68SaidaExportacaoTipoDocume = 0 ;
   this.OV68SaidaExportacaoTipoDocume = 0 ;
   this.AV77SaidaExportacaoPaisId = 0 ;
   this.ZV77SaidaExportacaoPaisId = 0 ;
   this.OV77SaidaExportacaoPaisId = 0 ;
   this.AV78SaidaExportacaoPaisNome = "" ;
   this.ZV78SaidaExportacaoPaisNome = "" ;
   this.OV78SaidaExportacaoPaisNome = "" ;
   this.Z6022SaidaExportacaoNoDeclaracao = 0 ;
   this.O6022SaidaExportacaoNoDeclaracao = 0 ;
   this.Z6314SaidaExportacaoTipoDocume = 0 ;
   this.O6314SaidaExportacaoTipoDocume = 0 ;
   this.Z6315SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.O6315SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.Z6316SaidaExportacaoNatureza = 0 ;
   this.O6316SaidaExportacaoNatureza = 0 ;
   this.Z6324SaidaExportacaoPaisNome = "" ;
   this.O6324SaidaExportacaoPaisNome = "" ;
   this.Z6021SaidaExportacaoEmpresaId = "" ;
   this.O6021SaidaExportacaoEmpresaId = "" ;
   this.Z6323SaidaExportacaoPaisId = 0 ;
   this.O6323SaidaExportacaoPaisId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV67SaidaExportacaoNoDeclaracao = 0 ;
   this.AV70SaidaExportacaoNatureza = 0 ;
   this.AV69SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.AV68SaidaExportacaoTipoDocume = 0 ;
   this.AV77SaidaExportacaoPaisId = 0 ;
   this.AV78SaidaExportacaoPaisNome = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.AV79PSaidaExportacaoNoDeclaracao = 0 ;
   this.A6022SaidaExportacaoNoDeclaracao = 0 ;
   this.A6314SaidaExportacaoTipoDocume = 0 ;
   this.A6315SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.A6316SaidaExportacaoNatureza = 0 ;
   this.A6324SaidaExportacaoPaisNome = "" ;
   this.A6021SaidaExportacaoEmpresaId = "" ;
   this.A6323SaidaExportacaoPaisId = 0 ;
   this.AV81SaidaExportacaoEmpresaId = "" ;
   this.Events = {"e1911t2_client": ["ENTER", true] ,"e1111t2_client": ["'GXM_FIRST'", true] ,"e1211t2_client": ["'GXM_PREVIOUS'", true] ,"e1311t2_client": ["'GXM_NEXT'", true] ,"e1411t2_client": ["'GXM_LAST'", true] ,"e1511t2_client": ["'PROCURAR'", true] ,"e1611t2_client": ["'NOVO'", true] ,"e1711t2_client": ["VSAIDAEXPORTACAOPAISID.ISVALID", true] ,"e2111t2_client": ["'ATUALIZAPAGINA'", true] ,"e2311t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO'},{av:'AV70SaidaExportacaoNatureza',fld:'vSAIDAEXPORTACAONATUREZA'},{av:'AV69SaidaExportacaoDtDeclaracao',fld:'vSAIDAEXPORTACAODTDECLARACAO'},{av:'AV68SaidaExportacaoTipoDocume',fld:'vSAIDAEXPORTACAOTIPODOCUME'},{av:'AV77SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV81SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{ctrl:'SAIDAEXPORTACAONODECLARACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SAIDAEXPORTACAONODECLARACAO","Title")',ctrl:'SAIDAEXPORTACAONODECLARACAO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SAIDAEXPORTACAOTIPODOCUME'},{ctrl:'SAIDAEXPORTACAODTDECLARACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SAIDAEXPORTACAODTDECLARACAO","Title")',ctrl:'SAIDAEXPORTACAODTDECLARACAO',prop:'Title'},{ctrl:'SAIDAEXPORTACAONATUREZA'},{ctrl:'SAIDAEXPORTACAOPAISNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SAIDAEXPORTACAOPAISNOME","Title")',ctrl:'SAIDAEXPORTACAOPAISNOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'}],[{av:'AV79PSaidaExportacaoNoDeclaracao',fld:'vPSAIDAEXPORTACAONODECLARACAO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO'},{av:'AV70SaidaExportacaoNatureza',fld:'vSAIDAEXPORTACAONATUREZA'},{av:'AV69SaidaExportacaoDtDeclaracao',fld:'vSAIDAEXPORTACAODTDECLARACAO'},{av:'AV68SaidaExportacaoTipoDocume',fld:'vSAIDAEXPORTACAOTIPODOCUME'},{av:'AV77SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV81SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO'},{av:'AV70SaidaExportacaoNatureza',fld:'vSAIDAEXPORTACAONATUREZA'},{av:'AV69SaidaExportacaoDtDeclaracao',fld:'vSAIDAEXPORTACAODTDECLARACAO'},{av:'AV68SaidaExportacaoTipoDocume',fld:'vSAIDAEXPORTACAOTIPODOCUME'},{av:'AV77SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV81SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO'},{av:'AV70SaidaExportacaoNatureza',fld:'vSAIDAEXPORTACAONATUREZA'},{av:'AV69SaidaExportacaoDtDeclaracao',fld:'vSAIDAEXPORTACAODTDECLARACAO'},{av:'AV68SaidaExportacaoTipoDocume',fld:'vSAIDAEXPORTACAOTIPODOCUME'},{av:'AV77SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV81SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO'},{av:'AV70SaidaExportacaoNatureza',fld:'vSAIDAEXPORTACAONATUREZA'},{av:'AV69SaidaExportacaoDtDeclaracao',fld:'vSAIDAEXPORTACAODTDECLARACAO'},{av:'AV68SaidaExportacaoTipoDocume',fld:'vSAIDAEXPORTACAOTIPODOCUME'},{av:'AV77SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV81SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO'},{av:'AV70SaidaExportacaoNatureza',fld:'vSAIDAEXPORTACAONATUREZA'},{av:'AV69SaidaExportacaoDtDeclaracao',fld:'vSAIDAEXPORTACAODTDECLARACAO'},{av:'AV68SaidaExportacaoTipoDocume',fld:'vSAIDAEXPORTACAOTIPODOCUME'},{av:'AV77SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV81SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'},{av:'A6314SaidaExportacaoTipoDocume',fld:'SAIDAEXPORTACAOTIPODOCUME'},{av:'A6315SaidaExportacaoDtDeclaracao',fld:'SAIDAEXPORTACAODTDECLARACAO'},{av:'A6316SaidaExportacaoNatureza',fld:'SAIDAEXPORTACAONATUREZA'},{av:'A6324SaidaExportacaoPaisNome',fld:'SAIDAEXPORTACAOPAISNOME'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV67SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO'},{av:'AV68SaidaExportacaoTipoDocume',fld:'vSAIDAEXPORTACAOTIPODOCUME'},{av:'AV69SaidaExportacaoDtDeclaracao',fld:'vSAIDAEXPORTACAODTDECLARACAO'},{av:'AV70SaidaExportacaoNatureza',fld:'vSAIDAEXPORTACAONATUREZA'},{av:'AV78SaidaExportacaoPaisNome',fld:'vSAIDAEXPORTACAOPAISNOME'},{av:'AV88Pgmname',fld:'vPGMNAME'}],[{av:'AV85filtros',fld:'vFILTROS'}]];
   this.EvtParms["VSAIDAEXPORTACAOPAISID.ISVALID"] = [[{av:'AV77SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'}],[{av:'AV78SaidaExportacaoPaisNome',fld:'vSAIDAEXPORTACAOPAISNOME'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO'},{av:'AV70SaidaExportacaoNatureza',fld:'vSAIDAEXPORTACAONATUREZA'},{av:'AV69SaidaExportacaoDtDeclaracao',fld:'vSAIDAEXPORTACAODTDECLARACAO'},{av:'AV68SaidaExportacaoTipoDocume',fld:'vSAIDAEXPORTACAOTIPODOCUME'},{av:'AV77SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV81SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'}],[]];
   this.setPrompt("PROMPT_SAIDAEXPORTACAOPAISID", [38]);
   this.setVCMap("AV81SaidaExportacaoEmpresaId", "vSAIDAEXPORTACAOEMPRESAID", 0, "char");
   this.setVCMap("AV79PSaidaExportacaoNoDeclaracao", "vPSAIDAEXPORTACAONODECLARACAO", 0, "int");
   this.setVCMap("AV81SaidaExportacaoEmpresaId", "vSAIDAEXPORTACAOEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar(this.GXValidFnc[38]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar({rfrVar:"AV81SaidaExportacaoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasaidaexportacao());
