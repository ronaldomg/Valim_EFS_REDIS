/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 7:32:25.78
*/
gx.evt.autoSkip = false;
gx.define('hsaidaexportacao', false, function () {
   this.ServerClass =  "hsaidaexportacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV28SaidaExportacaoEmpresaId=gx.fn.getControlValue("vSAIDAEXPORTACAOEMPRESAID") ;
      this.AV38SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Saidaexportacaopaisid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(62) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAOPAISID", gx.fn.currentGridRowImpl(62));
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
   this.s132_client=function()
   {
      this.AV33SnErro =  "N"  ;
      if ( ! (new gx.date.gxdate("").compare(this.AV31SaidaExportacaoDtDeclaracaoIni)==0) && (new gx.date.gxdate("").compare(this.AV32SaidaExportacaoDtDeclaracaoFin)==0) )
      {
         this.AV32SaidaExportacaoDtDeclaracaoFin =  this.AV31SaidaExportacaoDtDeclaracaoIni  ;
      }
      if ( (new gx.date.gxdate("").compare(this.AV31SaidaExportacaoDtDeclaracaoIni)==0) && ! (new gx.date.gxdate("").compare(this.AV32SaidaExportacaoDtDeclaracaoFin)==0) )
      {
         this.AV31SaidaExportacaoDtDeclaracaoIni =  this.AV32SaidaExportacaoDtDeclaracaoFin  ;
      }
      if ( new gx.date.gxdate( this.AV31SaidaExportacaoDtDeclaracaoIni ).compare( this.AV32SaidaExportacaoDtDeclaracaoFin ) > 0 )
      {
         this.addMessage("Data Inicial deve ser menor que a Final");
         gx.fn.usrSetFocus("vSAIDAEXPORTACAODTDECLARACAOINI") ;
         this.AV33SnErro =  "S"  ;
      }
   };
   this.e1111u2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1211u2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1611u2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1311u2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1411u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1511u2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1911u2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2011u2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2111u2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e2211u2_client=function()
   {
      this.executeServerEvent("'VINCULAR'", true, arguments[0], false, false);
   };
   this.e2411u2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2511u2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,27,29,32,34,39,42,45,47,49,51,53,56,58,59,63,64,65,66,67,68,69,70,71,72,78,80,82];
   this.GXLastCtrlId =82;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",62,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsaidaexportacao",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(6022,63,"SAIDAEXPORTACAONODECLARACAO","","","SaidaExportacaoNoDeclaracao","int",0,"px",11,11,"right",null,[],6022,"SaidaExportacaoNoDeclaracao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(6314,64,"SAIDAEXPORTACAOTIPODOCUME","","SaidaExportacaoTipoDocume","int",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(6315,65,"SAIDAEXPORTACAODTDECLARACAO","","","SaidaExportacaoDtDeclaracao","date",0,"px",10,10,"right",null,[],6315,"SaidaExportacaoDtDeclaracao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(6316,66,"SAIDAEXPORTACAONATUREZA","","SaidaExportacaoNatureza","int",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(6324,67,"SAIDAEXPORTACAOPAISNOME","","","SaidaExportacaoPaisNome","svchar",0,"px",40,40,"left",null,[],6324,"SaidaExportacaoPaisNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpnota","vBMPNOTA",68,0,"px",17,"px","e2211u2_client","","Notas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",69,0,"px",17,"px","e1911u2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",70,0,"px",17,"px","e2011u2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",71,0,"px",17,"px","e2111u2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(6323,72,"SAIDAEXPORTACAOPAISID","Código do país de destino da mercadoria","","SaidaExportacaoPaisId","int",0,"px",7,7,"right",null,[],6323,"SaidaExportacaoPaisId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE9",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE11",grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAEXPORTACAODTDECLARACAOINI",gxz:"ZV31SaidaExportacaoDtDeclaracaoIni",gxold:"OV31SaidaExportacaoDtDeclaracaoIni",gxvar:"AV31SaidaExportacaoDtDeclaracaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31SaidaExportacaoDtDeclaracaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31SaidaExportacaoDtDeclaracaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAEXPORTACAODTDECLARACAOINI",gx.O.AV31SaidaExportacaoDtDeclaracaoIni,0)},c2v:function(){gx.O.AV31SaidaExportacaoDtDeclaracaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDAEXPORTACAODTDECLARACAOINI")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAEXPORTACAODTDECLARACAOFIN",gxz:"ZV32SaidaExportacaoDtDeclaracaoFin",gxold:"OV32SaidaExportacaoDtDeclaracaoFin",gxvar:"AV32SaidaExportacaoDtDeclaracaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32SaidaExportacaoDtDeclaracaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32SaidaExportacaoDtDeclaracaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAEXPORTACAODTDECLARACAOFIN",gx.O.AV32SaidaExportacaoDtDeclaracaoFin,0)},c2v:function(){gx.O.AV32SaidaExportacaoDtDeclaracaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDAEXPORTACAODTDECLARACAOFIN")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={fld:"TABLE10",grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAEXPORTACAOPAISID",gxz:"ZV34SaidaExportacaoPaisId",gxold:"OV34SaidaExportacaoPaisId",gxvar:"AV34SaidaExportacaoPaisId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34SaidaExportacaoPaisId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34SaidaExportacaoPaisId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAEXPORTACAOPAISID",gx.O.AV34SaidaExportacaoPaisId,0)},c2v:function(){gx.O.AV34SaidaExportacaoPaisId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAEXPORTACAOPAISID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAEXPORTACAOPAISNOME",gxz:"ZV37SaidaExportacaoPaisNome",gxold:"OV37SaidaExportacaoPaisNome",gxvar:"AV37SaidaExportacaoPaisNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37SaidaExportacaoPaisNome=Value},v2z:function(Value){gx.O.ZV37SaidaExportacaoPaisNome=Value},v2c:function(){gx.fn.setControlValue("vSAIDAEXPORTACAOPAISNOME",gx.O.AV37SaidaExportacaoPaisNome,0)},c2v:function(){gx.O.AV37SaidaExportacaoPaisNome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAEXPORTACAOPAISNOME")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE4",grid:0};
   GXValidFnc[42]={fld:"TABLE6",grid:0};
   GXValidFnc[45]={fld:"IMAGE2",grid:0};
   GXValidFnc[47]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[49]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[51]={fld:"BTNHELP",grid:0};
   GXValidFnc[53]={fld:"TABLE5",grid:0};
   GXValidFnc[56]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:11,dec:0,sign:false,pic:"ZZZZZZZZZZ9",ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAONODECLARACAO",gxz:"Z6022SaidaExportacaoNoDeclaracao",gxold:"O6022SaidaExportacaoNoDeclaracao",gxvar:"A6022SaidaExportacaoNoDeclaracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6022SaidaExportacaoNoDeclaracao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6022SaidaExportacaoNoDeclaracao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAEXPORTACAONODECLARACAO",row || gx.fn.currentGridRowImpl(62),gx.O.A6022SaidaExportacaoNoDeclaracao,0)},c2v:function(){gx.O.A6022SaidaExportacaoNoDeclaracao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAEXPORTACAONODECLARACAO",row || gx.fn.currentGridRowImpl(62),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOTIPODOCUME",gxz:"Z6314SaidaExportacaoTipoDocume",gxold:"O6314SaidaExportacaoTipoDocume",gxvar:"A6314SaidaExportacaoTipoDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A6314SaidaExportacaoTipoDocume=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6314SaidaExportacaoTipoDocume=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDAEXPORTACAOTIPODOCUME",row || gx.fn.currentGridRowImpl(62),gx.O.A6314SaidaExportacaoTipoDocume)},c2v:function(){gx.O.A6314SaidaExportacaoTipoDocume=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAEXPORTACAOTIPODOCUME",row || gx.fn.currentGridRowImpl(62),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAODTDECLARACAO",gxz:"Z6315SaidaExportacaoDtDeclaracao",gxold:"O6315SaidaExportacaoDtDeclaracao",gxvar:"A6315SaidaExportacaoDtDeclaracao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6315SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6315SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAEXPORTACAODTDECLARACAO",row || gx.fn.currentGridRowImpl(62),gx.O.A6315SaidaExportacaoDtDeclaracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6315SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDAEXPORTACAODTDECLARACAO",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAONATUREZA",gxz:"Z6316SaidaExportacaoNatureza",gxold:"O6316SaidaExportacaoNatureza",gxvar:"A6316SaidaExportacaoNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A6316SaidaExportacaoNatureza=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6316SaidaExportacaoNatureza=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDAEXPORTACAONATUREZA",row || gx.fn.currentGridRowImpl(62),gx.O.A6316SaidaExportacaoNatureza)},c2v:function(){gx.O.A6316SaidaExportacaoNatureza=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAEXPORTACAONATUREZA",row || gx.fn.currentGridRowImpl(62),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOPAISNOME",gxz:"Z6324SaidaExportacaoPaisNome",gxold:"O6324SaidaExportacaoPaisNome",gxvar:"A6324SaidaExportacaoPaisNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6324SaidaExportacaoPaisNome=Value},v2z:function(Value){gx.O.Z6324SaidaExportacaoPaisNome=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEXPORTACAOPAISNOME",row || gx.fn.currentGridRowImpl(62),gx.O.A6324SaidaExportacaoPaisNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6324SaidaExportacaoPaisNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEXPORTACAOPAISNOME",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPNOTA",gxz:"ZV29bmpNota",gxold:"OV29bmpNota",gxvar:"AV29bmpNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpNota=Value},v2z:function(Value){gx.O.ZV29bmpNota=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPNOTA",row || gx.fn.currentGridRowImpl(62),gx.O.AV29bmpNota,gx.O.AV46Bmpnota_GXI)},c2v:function(){gx.O.AV46Bmpnota_GXI=this.val_GXI();gx.O.AV29bmpNota=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPNOTA",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPNOTA_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV46Bmpnota_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(62),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(62),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(62),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:this.Valid_Saidaexportacaopaisid,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOPAISID",gxz:"Z6323SaidaExportacaoPaisId",gxold:"O6323SaidaExportacaoPaisId",gxvar:"A6323SaidaExportacaoPaisId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6323SaidaExportacaoPaisId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6323SaidaExportacaoPaisId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAEXPORTACAOPAISID",row || gx.fn.currentGridRowImpl(62),gx.O.A6323SaidaExportacaoPaisId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6323SaidaExportacaoPaisId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAEXPORTACAOPAISID",row || gx.fn.currentGridRowImpl(62),'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[80]={fld:"JS", format:2,grid:0};
   GXValidFnc[82]={fld:"PROMPT_SAIDAEXPORTACAOPAISID",grid:0};
   this.AV31SaidaExportacaoDtDeclaracaoIni = gx.date.nullDate() ;
   this.ZV31SaidaExportacaoDtDeclaracaoIni = gx.date.nullDate() ;
   this.OV31SaidaExportacaoDtDeclaracaoIni = gx.date.nullDate() ;
   this.AV32SaidaExportacaoDtDeclaracaoFin = gx.date.nullDate() ;
   this.ZV32SaidaExportacaoDtDeclaracaoFin = gx.date.nullDate() ;
   this.OV32SaidaExportacaoDtDeclaracaoFin = gx.date.nullDate() ;
   this.AV34SaidaExportacaoPaisId = 0 ;
   this.ZV34SaidaExportacaoPaisId = 0 ;
   this.OV34SaidaExportacaoPaisId = 0 ;
   this.AV37SaidaExportacaoPaisNome = "" ;
   this.ZV37SaidaExportacaoPaisNome = "" ;
   this.OV37SaidaExportacaoPaisNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
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
   this.ZV29bmpNota = "" ;
   this.OV29bmpNota = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z6323SaidaExportacaoPaisId = 0 ;
   this.O6323SaidaExportacaoPaisId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV31SaidaExportacaoDtDeclaracaoIni = gx.date.nullDate() ;
   this.AV32SaidaExportacaoDtDeclaracaoFin = gx.date.nullDate() ;
   this.AV34SaidaExportacaoPaisId = 0 ;
   this.AV37SaidaExportacaoPaisNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A6021SaidaExportacaoEmpresaId = "" ;
   this.A6022SaidaExportacaoNoDeclaracao = 0 ;
   this.A6314SaidaExportacaoTipoDocume = 0 ;
   this.A6315SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.A6316SaidaExportacaoNatureza = 0 ;
   this.A6324SaidaExportacaoPaisNome = "" ;
   this.AV29bmpNota = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A6323SaidaExportacaoPaisId = 0 ;
   this.AV28SaidaExportacaoEmpresaId = "" ;
   this.AV38SnRecuperaFiltro = "" ;
   this.AV41Pgmname = "" ;
   this.AV33SnErro = "" ;
   this.Events = {"e1111u2_client": ["'ANTERIOR'", true] ,"e1211u2_client": ["'PROXIMO'", true] ,"e1611u2_client": ["VPAGINA.CLICK", true] ,"e1311u2_client": ["'NOVO'", true] ,"e1411u2_client": ["'FECHAR'", true] ,"e1511u2_client": ["'PROCURAR'", true] ,"e1911u2_client": ["'ALTERAR'", true] ,"e2011u2_client": ["'EXCLUIR'", true] ,"e2111u2_client": ["'CONSULTAR'", true] ,"e2211u2_client": ["'VINCULAR'", true] ,"e2411u2_client": ["ENTER", true] ,"e2511u2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{ctrl:'SAIDAEXPORTACAONODECLARACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SAIDAEXPORTACAONODECLARACAO","Title")',ctrl:'SAIDAEXPORTACAONODECLARACAO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SAIDAEXPORTACAOTIPODOCUME'},{ctrl:'SAIDAEXPORTACAODTDECLARACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SAIDAEXPORTACAODTDECLARACAO","Title")',ctrl:'SAIDAEXPORTACAODTDECLARACAO',prop:'Title'},{ctrl:'SAIDAEXPORTACAONATUREZA'},{ctrl:'SAIDAEXPORTACAOPAISNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SAIDAEXPORTACAOPAISNOME","Title")',ctrl:'SAIDAEXPORTACAOPAISNOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV41Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV33SnErro',fld:'vSNERRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33SnErro',fld:'vSNERRO'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'VINCULAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31SaidaExportacaoDtDeclaracaoIni',fld:'vSAIDAEXPORTACAODTDECLARACAOINI'},{av:'AV32SaidaExportacaoDtDeclaracaoFin',fld:'vSAIDAEXPORTACAODTDECLARACAOFIN'},{av:'AV34SaidaExportacaoPaisId',fld:'vSAIDAEXPORTACAOPAISID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpNota',fld:'vBMPNOTA'},{av:'gx.fn.getCtrlProperty("vBMPNOTA","Tooltiptext")',ctrl:'vBMPNOTA',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A6021SaidaExportacaoEmpresaId',fld:'SAIDAEXPORTACAOEMPRESAID'},{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'}],[]];
   this.setPrompt("PROMPT_SAIDAEXPORTACAOPAISID", [32]);
   this.setVCMap("AV28SaidaExportacaoEmpresaId", "vSAIDAEXPORTACAOEMPRESAID", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV28SaidaExportacaoEmpresaId", "vSAIDAEXPORTACAOEMPRESAID", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar({rfrVar:"AV28SaidaExportacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpNota", rfrProp:"Value", gxAttId:"Bmpnota"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpNota", rfrProp:"Tooltiptext", gxAttId:"Bmpnota"});
   GridContainer.addRefreshingVar({rfrVar:"AV38SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV41Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsaidaexportacao());
