/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:38:27.78
*/
gx.evt.autoSkip = false;
gx.define('hsaidaexportacaonotas', false, function () {
   this.ServerClass =  "hsaidaexportacaonotas" ;
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
      this.A6063SaidaValorServico=gx.fn.getDecimalValue("SAIDAVALORSERVICO",'.',',') ;
      this.A6064SaidaValorProduto=gx.fn.getDecimalValue("SAIDAVALORPRODUTO",'.',',') ;
      this.A6065SaidaValorDesconto=gx.fn.getDecimalValue("SAIDAVALORDESCONTO",'.',',') ;
      this.A6076SaidaValorICMSST=gx.fn.getDecimalValue("SAIDAVALORICMSST",'.',',') ;
      this.A6068SaidaValorSeguro=gx.fn.getDecimalValue("SAIDAVALORSEGURO",'.',',') ;
      this.A6069SaidaValorOutrasDespesas=gx.fn.getDecimalValue("SAIDAVALOROUTRASDESPESAS",'.',',') ;
      this.A6077SaidaValorIPI=gx.fn.getDecimalValue("SAIDAVALORIPI",'.',',') ;
      this.A6067SaidaValorFrete=gx.fn.getDecimalValue("SAIDAVALORFRETE",'.',',') ;
      this.A6092SaidaFreteEntraTotal=gx.fn.getControlValue("SAIDAFRETEENTRATOTAL") ;
      this.A10677SaidaValorFCPST=gx.fn.getDecimalValue("SAIDAVALORFCPST",'.',',') ;
      this.A10671SaidaValorICMSDesonerado=gx.fn.getDecimalValue("SAIDAVALORICMSDESONERADO",'.',',') ;
      this.A6022SaidaExportacaoNoDeclaracao=gx.fn.getIntegerValue("SAIDAEXPORTACAONODECLARACAO",'.') ;
      this.A5966SaidaClienteId=gx.fn.getIntegerValue("SAIDACLIENTEID",'.') ;
      this.AV13SaidaExportacaoEmpresaId=gx.fn.getControlValue("vSAIDAEXPORTACAOEMPRESAID") ;
   };
   this.Validv_Saidaexportacaonodeclaracao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDAEXPORTACAONODECLARACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(43) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDAEMPRESAID", gx.fn.currentGridRowImpl(43));
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
   this.Valid_Saidaclienteempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(43) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDACLIENTEEMPRESAID", gx.fn.currentGridRowImpl(43));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidafilialid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(43) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDAFILIALID", gx.fn.currentGridRowImpl(43));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaserie=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(43) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDASERIE", gx.fn.currentGridRowImpl(43));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidanodocumento=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(43) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDANODOCUMENTO", gx.fn.currentGridRowImpl(43));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(43) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDAEMPRESAID", gx.fn.currentGridRowImpl(43));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1111v2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1211v2_client=function()
   {
      this.executeServerEvent("'VINCULAR'", false, null, false, false);
   };
   this.e1511v2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e1611v2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1711v2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,13,15,19,21,23,25,30,32,34,36,37,42,44,45,46,47,48,49,50,51,52,53,54,55,56,57,66,67,68,69,70,71];
   this.GXLastCtrlId =71;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",43,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsaidaexportacaonotas",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4306,44,"SAIDAEMPRESAID","Empresa Saída","","SaidaEmpresaId","char",0,"px",10,10,"left",null,[],4306,"SaidaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5965,45,"SAIDACLIENTEEMPRESAID","Empresa Cliente","","SaidaClienteEmpresaId","char",0,"px",10,10,"left",null,[],5965,"SaidaClienteEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5970,46,"SAIDAFILIALEMPID","Empresa Filial","","SaidaFilialEmpId","char",0,"px",10,10,"left",null,[],5970,"SaidaFilialEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4307,47,"SAIDAID","Número da Saída","","SaidaId","int",0,"px",10,10,"right",null,[],4307,"SaidaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5971,48,"SAIDAFILIALID","Filial","","SaidaFilialId","int",0,"px",7,7,"right",null,[],5971,"SaidaFilialId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5967,49,"SAIDACLIENTEFANTASIA","Cliente","","SaidaClienteFantasia","svchar",0,"px",60,60,"left",null,[],5967,"SaidaClienteFantasia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5962,50,"SAIDASERIE","Série","","SaidaSerie","char",0,"px",4,4,"left",null,[],5962,"SaidaSerie",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5960,51,"SAIDANODOCUMENTO","Nº Documento","","SaidaNoDocumento","int",0,"px",10,10,"right",null,[],5960,"SaidaNoDocumento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5964,52,"SAIDADATAEMISSAO","Data de Emissão","","SaidaDataEmissao","date",0,"px",10,10,"right",null,[],5964,"SaidaDataEmissao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6005,53,"SAIDADATA","Data Nota","","SaidaData","date",0,"px",10,10,"right",null,[],6005,"SaidaData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6086,54,"SAIDAVALORTOTAL","Valor Total","","SaidaValorTotal","decimal",0,"px",22,22,"right",null,[],6086,"SaidaValorTotal",true,2,false,false,"Attribute",1,"");
   GridContainer.addComboBox(5959,55,"SAIDASITUACAO","Situação ","SaidaSituacao","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",56,0,"px",17,"px","e1511v2_client","","Excluir","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TXTDOCARREC", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"int",len:11,dec:0,sign:false,pic:"ZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Saidaexportacaonodeclaracao,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAEXPORTACAONODECLARACAO",gxz:"ZV36SaidaExportacaoNoDeclaracao",gxold:"OV36SaidaExportacaoNoDeclaracao",gxvar:"AV36SaidaExportacaoNoDeclaracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36SaidaExportacaoNoDeclaracao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36SaidaExportacaoNoDeclaracao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAEXPORTACAONODECLARACAO",gx.O.AV36SaidaExportacaoNoDeclaracao,0)},c2v:function(){gx.O.AV36SaidaExportacaoNoDeclaracao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAEXPORTACAONODECLARACAO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TXTVLR", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAEXPORTACAONATUREZA",gxz:"ZV39SaidaExportacaoNatureza",gxold:"OV39SaidaExportacaoNatureza",gxvar:"AV39SaidaExportacaoNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV39SaidaExportacaoNatureza=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39SaidaExportacaoNatureza=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSAIDAEXPORTACAONATUREZA",gx.O.AV39SaidaExportacaoNatureza)},c2v:function(){gx.O.AV39SaidaExportacaoNatureza=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAEXPORTACAONATUREZA",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTPGTO", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAEXPORTACAOTIPODOCUME",gxz:"ZV37SaidaExportacaoTipoDocume",gxold:"OV37SaidaExportacaoTipoDocume",gxvar:"AV37SaidaExportacaoTipoDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV37SaidaExportacaoTipoDocume=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37SaidaExportacaoTipoDocume=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSAIDAEXPORTACAOTIPODOCUME",gx.O.AV37SaidaExportacaoTipoDocume)},c2v:function(){gx.O.AV37SaidaExportacaoTipoDocume=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAEXPORTACAOTIPODOCUME",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTNONOTA", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAEXPORTACAOPAISNOME",gxz:"ZV41SaidaExportacaoPaisNome",gxold:"OV41SaidaExportacaoPaisNome",gxvar:"AV41SaidaExportacaoPaisNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41SaidaExportacaoPaisNome=Value},v2z:function(Value){gx.O.ZV41SaidaExportacaoPaisNome=Value},v2c:function(){gx.fn.setControlValue("vSAIDAEXPORTACAOPAISNOME",gx.O.AV41SaidaExportacaoPaisNome,0)},c2v:function(){gx.O.AV41SaidaExportacaoPaisNome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAEXPORTACAOPAISNOME")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTVENC", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAEXPORTACAODTDECLARACAO",gxz:"ZV38SaidaExportacaoDtDeclaracao",gxold:"OV38SaidaExportacaoDtDeclaracao",gxvar:"AV38SaidaExportacaoDtDeclaracao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV38SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAEXPORTACAODTDECLARACAO",gx.O.AV38SaidaExportacaoDtDeclaracao,0)},c2v:function(){gx.O.AV38SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDAEXPORTACAODTDECLARACAO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TXTNONOTA1", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidaid,isvalid:null,rgrid:[],fld:"vSAIDAID",gxz:"ZV42SaidaId",gxold:"OV42SaidaId",gxvar:"AV42SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV42SaidaId,0)},c2v:function(){gx.O.AV42SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"BTNPROMPTSAIDA",grid:0};
   GXValidFnc[42]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[44]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:this.Valid_Saidaempresaid,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[54,49],ip:[54,49,45],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(43),gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:this.Valid_Saidaclienteempresaid,isvalid:null,rgrid:[],fld:"SAIDACLIENTEEMPRESAID",gxz:"Z5965SaidaClienteEmpresaId",gxold:"O5965SaidaClienteEmpresaId",gxvar:"A5965SaidaClienteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5965SaidaClienteEmpresaId=Value},v2z:function(Value){gx.O.Z5965SaidaClienteEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDACLIENTEEMPRESAID",row || gx.fn.currentGridRowImpl(43),gx.O.A5965SaidaClienteEmpresaId,0)},c2v:function(){gx.O.A5965SaidaClienteEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDACLIENTEEMPRESAID",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFILIALEMPID",gxz:"Z5970SaidaFilialEmpId",gxold:"O5970SaidaFilialEmpId",gxvar:"A5970SaidaFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5970SaidaFilialEmpId=Value},v2z:function(Value){gx.O.Z5970SaidaFilialEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAFILIALEMPID",row || gx.fn.currentGridRowImpl(43),gx.O.A5970SaidaFilialEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5970SaidaFilialEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAFILIALEMPID",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAID",row || gx.fn.currentGridRowImpl(43),gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAID",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:this.Valid_Saidafilialid,isvalid:null,rgrid:[],fld:"SAIDAFILIALID",gxz:"Z5971SaidaFilialId",gxold:"O5971SaidaFilialId",gxvar:"A5971SaidaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5971SaidaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5971SaidaFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAFILIALID",row || gx.fn.currentGridRowImpl(43),gx.O.A5971SaidaFilialId,0)},c2v:function(){gx.O.A5971SaidaFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAFILIALID",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDACLIENTEFANTASIA",gxz:"Z5967SaidaClienteFantasia",gxold:"O5967SaidaClienteFantasia",gxvar:"A5967SaidaClienteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5967SaidaClienteFantasia=Value},v2z:function(Value){gx.O.Z5967SaidaClienteFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDACLIENTEFANTASIA",row || gx.fn.currentGridRowImpl(43),gx.O.A5967SaidaClienteFantasia,0)},c2v:function(){gx.O.A5967SaidaClienteFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDACLIENTEFANTASIA",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:this.Valid_Saidaserie,isvalid:null,rgrid:[],fld:"SAIDASERIE",gxz:"Z5962SaidaSerie",gxold:"O5962SaidaSerie",gxvar:"A5962SaidaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5962SaidaSerie=Value},v2z:function(Value){gx.O.Z5962SaidaSerie=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDASERIE",row || gx.fn.currentGridRowImpl(43),gx.O.A5962SaidaSerie,0)},c2v:function(){gx.O.A5962SaidaSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDASERIE",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:this.Valid_Saidanodocumento,isvalid:null,rgrid:[],fld:"SAIDANODOCUMENTO",gxz:"Z5960SaidaNoDocumento",gxold:"O5960SaidaNoDocumento",gxvar:"A5960SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5960SaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5960SaidaNoDocumento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDANODOCUMENTO",row || gx.fn.currentGridRowImpl(43),gx.O.A5960SaidaNoDocumento,0)},c2v:function(){gx.O.A5960SaidaNoDocumento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDANODOCUMENTO",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADATAEMISSAO",gxz:"Z5964SaidaDataEmissao",gxold:"O5964SaidaDataEmissao",gxvar:"A5964SaidaDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5964SaidaDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5964SaidaDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDADATAEMISSAO",row || gx.fn.currentGridRowImpl(43),gx.O.A5964SaidaDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5964SaidaDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDADATAEMISSAO",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADATA",gxz:"Z6005SaidaData",gxold:"O6005SaidaData",gxvar:"A6005SaidaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6005SaidaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6005SaidaData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDADATA",row || gx.fn.currentGridRowImpl(43),gx.O.A6005SaidaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6005SaidaData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDADATA",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAVALORTOTAL",gxz:"Z6086SaidaValorTotal",gxold:"O6086SaidaValorTotal",gxvar:"A6086SaidaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6086SaidaValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6086SaidaValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SAIDAVALORTOTAL",row || gx.fn.currentGridRowImpl(43),gx.O.A6086SaidaValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6086SaidaValorTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SAIDAVALORTOTAL",row || gx.fn.currentGridRowImpl(43),'.',',')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDASITUACAO",gxz:"Z5959SaidaSituacao",gxold:"O5959SaidaSituacao",gxvar:"A5959SaidaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5959SaidaSituacao=Value},v2z:function(Value){gx.O.Z5959SaidaSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDASITUACAO",row || gx.fn.currentGridRowImpl(43),gx.O.A5959SaidaSituacao)},c2v:function(){gx.O.A5959SaidaSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDASITUACAO",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV32bmpExc",gxold:"OV32bmpExc",gxvar:"AV32bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpExc=Value},v2z:function(Value){gx.O.ZV32bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43),gx.O.AV32bmpExc,gx.O.AV65Bmpexc_GXI)},c2v:function(){gx.O.AV65Bmpexc_GXI=this.val_GXI();gx.O.AV32bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV65Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[57]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidaempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAEMPRESAID",gxz:"ZV14SaidaEmpresaId",gxold:"OV14SaidaEmpresaId",gxvar:"AV14SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SaidaEmpresaId=Value},v2z:function(Value){gx.O.ZV14SaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSAIDAEMPRESAID",gx.O.AV14SaidaEmpresaId,0)},c2v:function(){gx.O.AV14SaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSAIDA",gxz:"ZV44TipoSaida",gxold:"OV44TipoSaida",gxvar:"AV44TipoSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44TipoSaida=Value},v2z:function(Value){gx.O.ZV44TipoSaida=Value},v2c:function(){gx.fn.setControlValue("vTIPOSAIDA",gx.O.AV44TipoSaida,0)},c2v:function(){gx.O.AV44TipoSaida=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSAIDA")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOOOUT",gxz:"ZV57CooOut",gxold:"OV57CooOut",gxvar:"AV57CooOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57CooOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57CooOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOOOUT",gx.O.AV57CooOut,0)},c2v:function(){gx.O.AV57CooOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTOOUT",gxz:"ZV58DocumentoOut",gxold:"OV58DocumentoOut",gxvar:"AV58DocumentoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58DocumentoOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58DocumentoOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTOOUT",gx.O.AV58DocumentoOut,0)},c2v:function(){gx.O.AV58DocumentoOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERIEOUT",gxz:"ZV59SerieOut",gxold:"OV59SerieOut",gxvar:"AV59SerieOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59SerieOut=Value},v2z:function(Value){gx.O.ZV59SerieOut=Value},v2c:function(){gx.fn.setControlValue("vSERIEOUT",gx.O.AV59SerieOut,0)},c2v:function(){gx.O.AV59SerieOut=this.val()},val:function(){return gx.fn.getControlValue("vSERIEOUT")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vECFOUT",gxz:"ZV60ECFOut",gxold:"OV60ECFOut",gxvar:"AV60ECFOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60ECFOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60ECFOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vECFOUT",gx.O.AV60ECFOut,0)},c2v:function(){gx.O.AV60ECFOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vECFOUT",'.')},nac:gx.falseFn};
   this.AV36SaidaExportacaoNoDeclaracao = 0 ;
   this.ZV36SaidaExportacaoNoDeclaracao = 0 ;
   this.OV36SaidaExportacaoNoDeclaracao = 0 ;
   this.AV39SaidaExportacaoNatureza = 0 ;
   this.ZV39SaidaExportacaoNatureza = 0 ;
   this.OV39SaidaExportacaoNatureza = 0 ;
   this.AV37SaidaExportacaoTipoDocume = 0 ;
   this.ZV37SaidaExportacaoTipoDocume = 0 ;
   this.OV37SaidaExportacaoTipoDocume = 0 ;
   this.AV41SaidaExportacaoPaisNome = "" ;
   this.ZV41SaidaExportacaoPaisNome = "" ;
   this.OV41SaidaExportacaoPaisNome = "" ;
   this.AV38SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.ZV38SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.OV38SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.AV42SaidaId = 0 ;
   this.ZV42SaidaId = 0 ;
   this.OV42SaidaId = 0 ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.Z5965SaidaClienteEmpresaId = "" ;
   this.O5965SaidaClienteEmpresaId = "" ;
   this.Z5970SaidaFilialEmpId = "" ;
   this.O5970SaidaFilialEmpId = "" ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.Z5971SaidaFilialId = 0 ;
   this.O5971SaidaFilialId = 0 ;
   this.Z5967SaidaClienteFantasia = "" ;
   this.O5967SaidaClienteFantasia = "" ;
   this.Z5962SaidaSerie = "" ;
   this.O5962SaidaSerie = "" ;
   this.Z5960SaidaNoDocumento = 0 ;
   this.O5960SaidaNoDocumento = 0 ;
   this.Z5964SaidaDataEmissao = gx.date.nullDate() ;
   this.O5964SaidaDataEmissao = gx.date.nullDate() ;
   this.Z6005SaidaData = gx.date.nullDate() ;
   this.O6005SaidaData = gx.date.nullDate() ;
   this.Z6086SaidaValorTotal = 0 ;
   this.O6086SaidaValorTotal = 0 ;
   this.Z5959SaidaSituacao = "" ;
   this.O5959SaidaSituacao = "" ;
   this.ZV32bmpExc = "" ;
   this.OV32bmpExc = "" ;
   this.AV14SaidaEmpresaId = "" ;
   this.ZV14SaidaEmpresaId = "" ;
   this.OV14SaidaEmpresaId = "" ;
   this.AV44TipoSaida = "" ;
   this.ZV44TipoSaida = "" ;
   this.OV44TipoSaida = "" ;
   this.AV57CooOut = 0 ;
   this.ZV57CooOut = 0 ;
   this.OV57CooOut = 0 ;
   this.AV58DocumentoOut = 0 ;
   this.ZV58DocumentoOut = 0 ;
   this.OV58DocumentoOut = 0 ;
   this.AV59SerieOut = "" ;
   this.ZV59SerieOut = "" ;
   this.OV59SerieOut = "" ;
   this.AV60ECFOut = 0 ;
   this.ZV60ECFOut = 0 ;
   this.OV60ECFOut = 0 ;
   this.AV36SaidaExportacaoNoDeclaracao = 0 ;
   this.AV39SaidaExportacaoNatureza = 0 ;
   this.AV37SaidaExportacaoTipoDocume = 0 ;
   this.AV41SaidaExportacaoPaisNome = "" ;
   this.AV38SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.AV42SaidaId = 0 ;
   this.AV14SaidaEmpresaId = "" ;
   this.AV44TipoSaida = "" ;
   this.AV57CooOut = 0 ;
   this.AV58DocumentoOut = 0 ;
   this.AV59SerieOut = "" ;
   this.AV60ECFOut = 0 ;
   this.AV13SaidaExportacaoEmpresaId = "" ;
   this.A6022SaidaExportacaoNoDeclaracao = 0 ;
   this.A5966SaidaClienteId = 0 ;
   this.A10671SaidaValorICMSDesonerado = 0 ;
   this.A10677SaidaValorFCPST = 0 ;
   this.A6092SaidaFreteEntraTotal = "" ;
   this.A6067SaidaValorFrete = 0 ;
   this.A6077SaidaValorIPI = 0 ;
   this.A6069SaidaValorOutrasDespesas = 0 ;
   this.A6068SaidaValorSeguro = 0 ;
   this.A6076SaidaValorICMSST = 0 ;
   this.A6065SaidaValorDesconto = 0 ;
   this.A6064SaidaValorProduto = 0 ;
   this.A6063SaidaValorServico = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A5965SaidaClienteEmpresaId = "" ;
   this.A5970SaidaFilialEmpId = "" ;
   this.A4307SaidaId = 0 ;
   this.A5971SaidaFilialId = 0 ;
   this.A5967SaidaClienteFantasia = "" ;
   this.A5962SaidaSerie = "" ;
   this.A5960SaidaNoDocumento = 0 ;
   this.A5964SaidaDataEmissao = gx.date.nullDate() ;
   this.A6005SaidaData = gx.date.nullDate() ;
   this.A6086SaidaValorTotal = 0 ;
   this.A5959SaidaSituacao = "" ;
   this.AV32bmpExc = "" ;
   this.A5958SaidaSituacaoGravacao = "" ;
   this.A6021SaidaExportacaoEmpresaId = "" ;
   this.A6315SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.A6314SaidaExportacaoTipoDocume = 0 ;
   this.A6316SaidaExportacaoNatureza = 0 ;
   this.A6324SaidaExportacaoPaisNome = "" ;
   this.A6323SaidaExportacaoPaisId = 0 ;
   this.Events = {"e1111v2_client": ["'FECHAR'", true] ,"e1211v2_client": ["'VINCULAR'", true] ,"e1511v2_client": ["'EXCLUIR'", true] ,"e1611v2_client": ["ENTER", true] ,"e1711v2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV14SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV36SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV32bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'A5971SaidaFilialId',fld:'SAIDAFILIALID'},{av:'A5966SaidaClienteId',fld:'SAIDACLIENTEID'},{av:'A5962SaidaSerie',fld:'SAIDASERIE'},{av:'A5960SaidaNoDocumento',fld:'SAIDANODOCUMENTO'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV13SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID',hsh:true},{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'},{av:'A5970SaidaFilialEmpId',fld:'SAIDAFILIALEMPID'},{av:'A5965SaidaClienteEmpresaId',fld:'SAIDACLIENTEEMPRESAID'},{av:'A5967SaidaClienteFantasia',fld:'SAIDACLIENTEFANTASIA'},{av:'A5964SaidaDataEmissao',fld:'SAIDADATAEMISSAO'},{av:'A6005SaidaData',fld:'SAIDADATA'},{av:'A6086SaidaValorTotal',fld:'SAIDAVALORTOTAL'},{av:'A5959SaidaSituacao',fld:'SAIDASITUACAO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5971SaidaFilialId',fld:'SAIDAFILIALID'},{av:'A5966SaidaClienteId',fld:'SAIDACLIENTEID'},{av:'A5962SaidaSerie',fld:'SAIDASERIE'},{av:'A5960SaidaNoDocumento',fld:'SAIDANODOCUMENTO'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV13SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID',hsh:true},{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'},{av:'AV36SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO',hsh:true},{av:'A5970SaidaFilialEmpId',fld:'SAIDAFILIALEMPID'},{av:'A5965SaidaClienteEmpresaId',fld:'SAIDACLIENTEEMPRESAID'},{av:'A5967SaidaClienteFantasia',fld:'SAIDACLIENTEFANTASIA'},{av:'A5964SaidaDataEmissao',fld:'SAIDADATAEMISSAO'},{av:'A6005SaidaData',fld:'SAIDADATA'},{av:'A6086SaidaValorTotal',fld:'SAIDAVALORTOTAL'},{av:'A5959SaidaSituacao',fld:'SAIDASITUACAO'}],[{av:'AV45SaidaFilialEmpId',fld:'vSAIDAFILIALEMPID'},{av:'AV46SaidaFilialId',fld:'vSAIDAFILIALID'},{av:'AV47SaidaSerie',fld:'vSAIDASERIE'},{av:'AV48SaidaClienteEmpresaId',fld:'vSAIDACLIENTEEMPRESAID'},{av:'AV49SaidaClienteFantasia',fld:'vSAIDACLIENTEFANTASIA'},{av:'AV50SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV51SaidaDataEmissao',fld:'vSAIDADATAEMISSAO'},{av:'AV52SaidaData',fld:'vSAIDADATA'},{av:'AV53SaidaValorTotal',fld:'vSAIDAVALORTOTAL'},{av:'AV54SaidaSituacao',fld:'vSAIDASITUACAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'VINCULAR'"] = [[{av:'AV55SnErro',fld:'vSNERRO'},{av:'AV14SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV36SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO',hsh:true},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'A5959SaidaSituacao',fld:'SAIDASITUACAO'},{av:'A5958SaidaSituacaoGravacao',fld:'SAIDASITUACAOGRAVACAO'},{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'}],[{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV55SnErro',fld:'vSNERRO'},{av:'AV68GXLvl96',fld:'vGXLVL96'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV14SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'AV36SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO',hsh:true}],[]];
   this.setPrompt("BTNPROMPTSAIDA", [67,36,71,68,70,69]);
   this.setVCMap("A6063SaidaValorServico", "SAIDAVALORSERVICO", 0, "decimal");
   this.setVCMap("A6064SaidaValorProduto", "SAIDAVALORPRODUTO", 0, "decimal");
   this.setVCMap("A6065SaidaValorDesconto", "SAIDAVALORDESCONTO", 0, "decimal");
   this.setVCMap("A6076SaidaValorICMSST", "SAIDAVALORICMSST", 0, "decimal");
   this.setVCMap("A6068SaidaValorSeguro", "SAIDAVALORSEGURO", 0, "decimal");
   this.setVCMap("A6069SaidaValorOutrasDespesas", "SAIDAVALOROUTRASDESPESAS", 0, "decimal");
   this.setVCMap("A6077SaidaValorIPI", "SAIDAVALORIPI", 0, "decimal");
   this.setVCMap("A6067SaidaValorFrete", "SAIDAVALORFRETE", 0, "decimal");
   this.setVCMap("A6092SaidaFreteEntraTotal", "SAIDAFRETEENTRATOTAL", 0, "char");
   this.setVCMap("A10677SaidaValorFCPST", "SAIDAVALORFCPST", 0, "decimal");
   this.setVCMap("A10671SaidaValorICMSDesonerado", "SAIDAVALORICMSDESONERADO", 0, "decimal");
   this.setVCMap("A6022SaidaExportacaoNoDeclaracao", "SAIDAEXPORTACAONODECLARACAO", 0, "int");
   this.setVCMap("A5966SaidaClienteId", "SAIDACLIENTEID", 0, "int");
   this.setVCMap("AV13SaidaExportacaoEmpresaId", "vSAIDAEXPORTACAOEMPRESAID", 0, "char");
   this.setVCMap("A5966SaidaClienteId", "SAIDACLIENTEID", 0, "int");
   this.setVCMap("AV13SaidaExportacaoEmpresaId", "vSAIDAEXPORTACAOEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[11]);
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"A5971SaidaFilialId", rfrProp:"Value", gxAttId:"5971"});
   GridContainer.addRefreshingVar({rfrVar:"A5966SaidaClienteId"});
   GridContainer.addRefreshingVar({rfrVar:"A5962SaidaSerie", rfrProp:"Value", gxAttId:"5962"});
   GridContainer.addRefreshingVar({rfrVar:"A5960SaidaNoDocumento", rfrProp:"Value", gxAttId:"5960"});
   GridContainer.addRefreshingVar({rfrVar:"A4306SaidaEmpresaId", rfrProp:"Value", gxAttId:"4306"});
   GridContainer.addRefreshingVar({rfrVar:"AV13SaidaExportacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A6022SaidaExportacaoNoDeclaracao"});
   GridContainer.addRefreshingVar({rfrVar:"A5970SaidaFilialEmpId", rfrProp:"Value", gxAttId:"5970"});
   GridContainer.addRefreshingVar({rfrVar:"A5965SaidaClienteEmpresaId", rfrProp:"Value", gxAttId:"5965"});
   GridContainer.addRefreshingVar({rfrVar:"A5967SaidaClienteFantasia", rfrProp:"Value", gxAttId:"5967"});
   GridContainer.addRefreshingVar({rfrVar:"A5964SaidaDataEmissao", rfrProp:"Value", gxAttId:"5964"});
   GridContainer.addRefreshingVar({rfrVar:"A6005SaidaData", rfrProp:"Value", gxAttId:"6005"});
   GridContainer.addRefreshingVar({rfrVar:"A6086SaidaValorTotal", rfrProp:"Value", gxAttId:"6086"});
   GridContainer.addRefreshingVar({rfrVar:"A5959SaidaSituacao", rfrProp:"Value", gxAttId:"5959"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsaidaexportacaonotas());
