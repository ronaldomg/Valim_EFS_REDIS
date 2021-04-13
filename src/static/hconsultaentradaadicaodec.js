/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:31:53.88
*/
gx.evt.autoSkip = false;
gx.define('hconsultaentradaadicaodec', false, function () {
   this.ServerClass =  "hconsultaentradaadicaodec" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("3", "'INSERE'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A4637EntradaEmpresaId=gx.fn.getControlValue("ENTRADAEMPRESAID") ;
      this.AV12EntradaEmpresaId=gx.fn.getControlValue("vENTRADAEMPRESAID") ;
      this.A4638EntradaId=gx.fn.getIntegerValue("ENTRADAID",'.') ;
      this.AV13EntradaId=gx.fn.getIntegerValue("vENTRADAID",'.') ;
      this.A4822EntradaItemSequencia=gx.fn.getIntegerValue("ENTRADAITEMSEQUENCIA",'.') ;
      this.AV14EntradaItemSequencia=gx.fn.getIntegerValue("vENTRADAITEMSEQUENCIA",'.') ;
      this.A5175DecImportacaoSequencia=gx.fn.getIntegerValue("DECIMPORTACAOSEQUENCIA",'.') ;
      this.AV15DecImportacaoSequencia=gx.fn.getIntegerValue("vDECIMPORTACAOSEQUENCIA",'.') ;
      this.A5167DecImportacaoNoDI=gx.fn.getControlValue("DECIMPORTACAONODI") ;
      this.A5169DecImportacaoExportador=gx.fn.getControlValue("DECIMPORTACAOEXPORTADOR") ;
      this.A5171DecImportacaoLocalDesembaraco=gx.fn.getControlValue("DECIMPORTACAOLOCALDESEMBARACO") ;
      this.A5172DecImportacaoDataDesembaraco=gx.fn.getDateValue("DECIMPORTACAODATADESEMBARACO") ;
      this.A5168DecImportacaoDataRegistro=gx.fn.getDateValue("DECIMPORTACAODATAREGISTRO") ;
      this.A5170DecImportacaoUFDesembaraco=gx.fn.getControlValue("DECIMPORTACAOUFDESEMBARACO") ;
      this.A5181DecImportacaoAdicaoSeq=gx.fn.getIntegerValue("DECIMPORTACAOADICAOSEQ",'.') ;
      this.A5178DecImportacaoAdicaoDesconto=gx.fn.getDecimalValue("DECIMPORTACAOADICAODESCONTO",'.',',') ;
      this.A5177DecImportacaoAdicaoFabricante=gx.fn.getControlValue("DECIMPORTACAOADICAOFABRICANTE") ;
      this.A5176DecImportacaoAdicaoNo=gx.fn.getIntegerValue("DECIMPORTACAOADICAONO",'.') ;
   };
   this.Validv_Decimportacaoufdesembaraco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDECIMPORTACAOUFDESEMBARACO");
         this.AnyError  = 0;
         if ( ! ( this.AV11DecImportacaoUFDesembaraco == "" || this.AV11DecImportacaoUFDesembaraco == "AC" || this.AV11DecImportacaoUFDesembaraco == "AL" || this.AV11DecImportacaoUFDesembaraco == "AP" || this.AV11DecImportacaoUFDesembaraco == "AM" || this.AV11DecImportacaoUFDesembaraco == "BA" || this.AV11DecImportacaoUFDesembaraco == "CE" || this.AV11DecImportacaoUFDesembaraco == "DF" || this.AV11DecImportacaoUFDesembaraco == "ES" || this.AV11DecImportacaoUFDesembaraco == "GO" || this.AV11DecImportacaoUFDesembaraco == "MA" || this.AV11DecImportacaoUFDesembaraco == "MT" || this.AV11DecImportacaoUFDesembaraco == "MS" || this.AV11DecImportacaoUFDesembaraco == "MG" || this.AV11DecImportacaoUFDesembaraco == "PA" || this.AV11DecImportacaoUFDesembaraco == "PB" || this.AV11DecImportacaoUFDesembaraco == "PR" || this.AV11DecImportacaoUFDesembaraco == "PE" || this.AV11DecImportacaoUFDesembaraco == "PI" || this.AV11DecImportacaoUFDesembaraco == "RJ" || this.AV11DecImportacaoUFDesembaraco == "RN" || this.AV11DecImportacaoUFDesembaraco == "RS" || this.AV11DecImportacaoUFDesembaraco == "RO" || this.AV11DecImportacaoUFDesembaraco == "RR" || this.AV11DecImportacaoUFDesembaraco == "SC" || this.AV11DecImportacaoUFDesembaraco == "SP" || this.AV11DecImportacaoUFDesembaraco == "SE" || this.AV11DecImportacaoUFDesembaraco == "TO" || this.AV11DecImportacaoUFDesembaraco == "EX" ) )
         {
            try {
               gxballoon.setError("Campo DecImportacaoUFDesembaraco fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11yc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12yc2_client=function()
   {
      this.executeServerEvent("'INSERE'", false, null, false, false);
   };
   this.e14yc2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e16yc2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e18yc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e19yc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,13,15,18,20,23,25,27,29,32,34,42,44,45,46,47,48,49,50,51,52,53,54];
   this.GXLastCtrlId =54;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",43,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaentradaadicaodec",[],false,1,false,true,0,true,false,false,"CollSdtDecImportacaoAdicao.SdtDecImportacaoAdicaoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV17SdtAdicao",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV118",44,"CTLENTRADAEMPRESAID","Empresa da Entrada","","EntradaEmpresaId","char",0,"px",10,10,"left",null,[],"GXV118","GXV118",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV119",45,"CTLENTRADAID","Código da Entrada","","EntradaId","int",0,"px",10,10,"right",null,[],"GXV119","GXV119",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11A",46,"CTLENTRADAITEMSEQUENCIA","Sequência do Item","","EntradaItemSequencia","int",0,"px",6,6,"right",null,[],"GXV11A","GXV11A",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11B",47,"CTLDECIMPORTACAOSEQUENCIA","Sequência da Declaração","","DecImportacaoSequencia","int",0,"px",2,2,"right",null,[],"GXV11B","GXV11B",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11C",48,"CTLDECIMPORTACAOADICAOSEQ","Sequência da Adição da Declaração","","DecImportacaoAdicaoSeq","int",0,"px",2,2,"right",null,[],"GXV11C","GXV11C",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11D",49,"CTLDECIMPORTACAOADICAONO","Número","","DecImportacaoAdicaoNo","int",0,"px",3,3,"right",null,[],"GXV11D","GXV11D",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11E",50,"CTLDECIMPORTACAOADICAOFABRICAN","Fabricante","","DecImportacaoAdicaoFabricante","svchar",0,"px",60,60,"left",null,[],"GXV11E","GXV11E",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11F",51,"CTLDECIMPORTACAOADICAODESCONTO","Valor de Desconto","","DecImportacaoAdicaoDesconto","decimal",0,"px",22,22,"right",null,[],"GXV11F","GXV11F",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px","e16yc2_client","","","Image","");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e14yc2_client","","","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK204", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:12,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAONODI",gxz:"ZV6DecImportacaoNoDI",gxold:"OV6DecImportacaoNoDI",gxvar:"AV6DecImportacaoNoDI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DecImportacaoNoDI=Value},v2z:function(Value){gx.O.ZV6DecImportacaoNoDI=Value},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAONODI",gx.O.AV6DecImportacaoNoDI,0)},c2v:function(){gx.O.AV6DecImportacaoNoDI=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAONODI")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK205", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAODATAREGISTRO",gxz:"ZV10DecImportacaoDataRegistro",gxold:"OV10DecImportacaoDataRegistro",gxvar:"AV10DecImportacaoDataRegistro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10DecImportacaoDataRegistro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10DecImportacaoDataRegistro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAODATAREGISTRO",gx.O.AV10DecImportacaoDataRegistro,0)},c2v:function(){gx.O.AV10DecImportacaoDataRegistro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDECIMPORTACAODATAREGISTRO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK206", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOEXPORTADOR",gxz:"ZV7DecImportacaoExportador",gxold:"OV7DecImportacaoExportador",gxvar:"AV7DecImportacaoExportador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DecImportacaoExportador=Value},v2z:function(Value){gx.O.ZV7DecImportacaoExportador=Value},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAOEXPORTADOR",gx.O.AV7DecImportacaoExportador,0)},c2v:function(){gx.O.AV7DecImportacaoExportador=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAOEXPORTADOR")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK207", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOLOCALDESEMBARACO",gxz:"ZV8DecImportacaoLocalDesembaraco",gxold:"OV8DecImportacaoLocalDesembaraco",gxvar:"AV8DecImportacaoLocalDesembaraco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DecImportacaoLocalDesembaraco=Value},v2z:function(Value){gx.O.ZV8DecImportacaoLocalDesembaraco=Value},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAOLOCALDESEMBARACO",gx.O.AV8DecImportacaoLocalDesembaraco,0)},c2v:function(){gx.O.AV8DecImportacaoLocalDesembaraco=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAOLOCALDESEMBARACO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK208", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Decimportacaoufdesembaraco,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOUFDESEMBARACO",gxz:"ZV11DecImportacaoUFDesembaraco",gxold:"OV11DecImportacaoUFDesembaraco",gxvar:"AV11DecImportacaoUFDesembaraco",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11DecImportacaoUFDesembaraco=Value},v2z:function(Value){gx.O.ZV11DecImportacaoUFDesembaraco=Value},v2c:function(){gx.fn.setComboBoxValue("vDECIMPORTACAOUFDESEMBARACO",gx.O.AV11DecImportacaoUFDesembaraco)},c2v:function(){gx.O.AV11DecImportacaoUFDesembaraco=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAOUFDESEMBARACO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK209", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAODATADESEMBARACO",gxz:"ZV9DecImportacaoDataDesembaraco",gxold:"OV9DecImportacaoDataDesembaraco",gxvar:"AV9DecImportacaoDataDesembaraco",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9DecImportacaoDataDesembaraco=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9DecImportacaoDataDesembaraco=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAODATADESEMBARACO",gx.O.AV9DecImportacaoDataDesembaraco,0)},c2v:function(){gx.O.AV9DecImportacaoDataDesembaraco=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDECIMPORTACAODATADESEMBARACO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[44]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLENTRADAEMPRESAID",gxz:"ZV25GXV118",gxold:"OV25GXV118",gxvar:"GXV118",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV118=Value},v2z:function(Value){gx.O.ZV25GXV118=Value},v2c:function(row){gx.fn.setGridControlValue("CTLENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(43),gx.O.GXV118,0)},c2v:function(){gx.O.GXV118=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLENTRADAID",gxz:"ZV26GXV119",gxold:"OV26GXV119",gxvar:"GXV119",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV119=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26GXV119=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLENTRADAID",row || gx.fn.currentGridRowImpl(43),gx.O.GXV119,0)},c2v:function(){gx.O.GXV119=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLENTRADAID",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLENTRADAITEMSEQUENCIA",gxz:"ZV27GXV11A",gxold:"OV27GXV11A",gxvar:"GXV11A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11A=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27GXV11A=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLENTRADAITEMSEQUENCIA",row || gx.fn.currentGridRowImpl(43),gx.O.GXV11A,0)},c2v:function(){gx.O.GXV11A=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLENTRADAITEMSEQUENCIA",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDECIMPORTACAOSEQUENCIA",gxz:"ZV28GXV11B",gxold:"OV28GXV11B",gxvar:"GXV11B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11B=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28GXV11B=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDECIMPORTACAOSEQUENCIA",row || gx.fn.currentGridRowImpl(43),gx.O.GXV11B,0)},c2v:function(){gx.O.GXV11B=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLDECIMPORTACAOSEQUENCIA",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDECIMPORTACAOADICAOSEQ",gxz:"ZV29GXV11C",gxold:"OV29GXV11C",gxvar:"GXV11C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11C=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29GXV11C=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDECIMPORTACAOADICAOSEQ",row || gx.fn.currentGridRowImpl(43),gx.O.GXV11C,0)},c2v:function(){gx.O.GXV11C=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLDECIMPORTACAOADICAOSEQ",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDECIMPORTACAOADICAONO",gxz:"ZV30GXV11D",gxold:"OV30GXV11D",gxvar:"GXV11D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11D=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30GXV11D=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDECIMPORTACAOADICAONO",row || gx.fn.currentGridRowImpl(43),gx.O.GXV11D,0)},c2v:function(){gx.O.GXV11D=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLDECIMPORTACAOADICAONO",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDECIMPORTACAOADICAOFABRICAN",gxz:"ZV31GXV11E",gxold:"OV31GXV11E",gxvar:"GXV11E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11E=Value},v2z:function(Value){gx.O.ZV31GXV11E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDECIMPORTACAOADICAOFABRICAN",row || gx.fn.currentGridRowImpl(43),gx.O.GXV11E,0)},c2v:function(){gx.O.GXV11E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDECIMPORTACAOADICAOFABRICAN",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDECIMPORTACAOADICAODESCONTO",gxz:"ZV32GXV11F",gxold:"OV32GXV11F",gxvar:"GXV11F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11F=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV32GXV11F=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLDECIMPORTACAOADICAODESCONTO",row || gx.fn.currentGridRowImpl(43),gx.O.GXV11F,2,',')},c2v:function(){gx.O.GXV11F=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLDECIMPORTACAOADICAODESCONTO",row || gx.fn.currentGridRowImpl(43),'.',',')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV21bmpalt",gxold:"OV21bmpalt",gxvar:"AV21bmpalt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpalt=Value},v2z:function(Value){gx.O.ZV21bmpalt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(43),gx.O.AV21bmpalt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV21bmpalt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV5bmpExc",gxold:"OV5bmpExc",gxvar:"AV5bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpExc=Value},v2z:function(Value){gx.O.ZV5bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43),gx.O.AV5bmpExc,gx.O.AV33Bmpexc_GXI)},c2v:function(){gx.O.AV33Bmpexc_GXI=this.val_GXI();gx.O.AV5bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV33Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[54]={fld:"DIV2", format:2,grid:0};
   this.AV6DecImportacaoNoDI = "" ;
   this.ZV6DecImportacaoNoDI = "" ;
   this.OV6DecImportacaoNoDI = "" ;
   this.AV10DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.ZV10DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.OV10DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.AV7DecImportacaoExportador = "" ;
   this.ZV7DecImportacaoExportador = "" ;
   this.OV7DecImportacaoExportador = "" ;
   this.AV8DecImportacaoLocalDesembaraco = "" ;
   this.ZV8DecImportacaoLocalDesembaraco = "" ;
   this.OV8DecImportacaoLocalDesembaraco = "" ;
   this.AV11DecImportacaoUFDesembaraco = "" ;
   this.ZV11DecImportacaoUFDesembaraco = "" ;
   this.OV11DecImportacaoUFDesembaraco = "" ;
   this.AV9DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.ZV9DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.OV9DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.ZV25GXV118 = "" ;
   this.OV25GXV118 = "" ;
   this.ZV26GXV119 = 0 ;
   this.OV26GXV119 = 0 ;
   this.ZV27GXV11A = 0 ;
   this.OV27GXV11A = 0 ;
   this.ZV28GXV11B = 0 ;
   this.OV28GXV11B = 0 ;
   this.ZV29GXV11C = 0 ;
   this.OV29GXV11C = 0 ;
   this.ZV30GXV11D = 0 ;
   this.OV30GXV11D = 0 ;
   this.ZV31GXV11E = "" ;
   this.OV31GXV11E = "" ;
   this.ZV32GXV11F = 0 ;
   this.OV32GXV11F = 0 ;
   this.ZV21bmpalt = "" ;
   this.OV21bmpalt = "" ;
   this.ZV5bmpExc = "" ;
   this.OV5bmpExc = "" ;
   this.AV6DecImportacaoNoDI = "" ;
   this.AV10DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.AV7DecImportacaoExportador = "" ;
   this.AV8DecImportacaoLocalDesembaraco = "" ;
   this.AV11DecImportacaoUFDesembaraco = "" ;
   this.AV9DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.AV12EntradaEmpresaId = "" ;
   this.AV13EntradaId = 0 ;
   this.AV14EntradaItemSequencia = 0 ;
   this.AV15DecImportacaoSequencia = 0 ;
   this.GXV118 = "" ;
   this.GXV119 = 0 ;
   this.GXV11A = 0 ;
   this.GXV11B = 0 ;
   this.GXV11C = 0 ;
   this.GXV11D = 0 ;
   this.GXV11E = "" ;
   this.GXV11F = 0 ;
   this.AV21bmpalt = "" ;
   this.AV5bmpExc = "" ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.A4822EntradaItemSequencia = 0 ;
   this.A5175DecImportacaoSequencia = 0 ;
   this.A5167DecImportacaoNoDI = "" ;
   this.A5169DecImportacaoExportador = "" ;
   this.A5171DecImportacaoLocalDesembaraco = "" ;
   this.A5172DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.A5168DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.A5170DecImportacaoUFDesembaraco = "" ;
   this.A5181DecImportacaoAdicaoSeq = 0 ;
   this.A5178DecImportacaoAdicaoDesconto = 0 ;
   this.A5177DecImportacaoAdicaoFabricante = "" ;
   this.A5176DecImportacaoAdicaoNo = 0 ;
   this.Events = {"e11yc2_client": ["'FECHAR'", true] ,"e12yc2_client": ["'INSERE'", true] ,"e14yc2_client": ["'EXCLUIR'", true] ,"e16yc2_client": ["'ALTERAR'", true] ,"e18yc2_client": ["ENTER", true] ,"e19yc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43},{av:'subGrid_Rows'},{av:'AV5bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV21bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV12EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'AV13EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4822EntradaItemSequencia',fld:'ENTRADAITEMSEQUENCIA'},{av:'AV14EntradaItemSequencia',fld:'vENTRADAITEMSEQUENCIA',hsh:true},{av:'A5175DecImportacaoSequencia',fld:'DECIMPORTACAOSEQUENCIA'},{av:'AV15DecImportacaoSequencia',fld:'vDECIMPORTACAOSEQUENCIA',hsh:true},{av:'A5167DecImportacaoNoDI',fld:'DECIMPORTACAONODI'},{av:'A5169DecImportacaoExportador',fld:'DECIMPORTACAOEXPORTADOR'},{av:'A5171DecImportacaoLocalDesembaraco',fld:'DECIMPORTACAOLOCALDESEMBARACO'},{av:'A5172DecImportacaoDataDesembaraco',fld:'DECIMPORTACAODATADESEMBARACO'},{av:'A5168DecImportacaoDataRegistro',fld:'DECIMPORTACAODATAREGISTRO'},{av:'A5170DecImportacaoUFDesembaraco',fld:'DECIMPORTACAOUFDESEMBARACO'},{av:'A5181DecImportacaoAdicaoSeq',fld:'DECIMPORTACAOADICAOSEQ'},{av:'A5178DecImportacaoAdicaoDesconto',fld:'DECIMPORTACAOADICAODESCONTO'},{av:'A5177DecImportacaoAdicaoFabricante',fld:'DECIMPORTACAOADICAOFABRICANTE'},{av:'A5176DecImportacaoAdicaoNo',fld:'DECIMPORTACAOADICAONO'}],[{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43},{av:'AV6DecImportacaoNoDI',fld:'vDECIMPORTACAONODI'},{av:'AV7DecImportacaoExportador',fld:'vDECIMPORTACAOEXPORTADOR'},{av:'AV8DecImportacaoLocalDesembaraco',fld:'vDECIMPORTACAOLOCALDESEMBARACO'},{av:'AV9DecImportacaoDataDesembaraco',fld:'vDECIMPORTACAODATADESEMBARACO'},{av:'AV10DecImportacaoDataRegistro',fld:'vDECIMPORTACAODATAREGISTRO'},{av:'AV11DecImportacaoUFDesembaraco',fld:'vDECIMPORTACAOUFDESEMBARACO'},{av:'AV18SdtAdicaoItem',fld:'vSDTADICAOITEM'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'INSERE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43},{av:'subGrid_Rows'},{av:'AV5bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV21bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV12EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'AV13EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4822EntradaItemSequencia',fld:'ENTRADAITEMSEQUENCIA'},{av:'AV14EntradaItemSequencia',fld:'vENTRADAITEMSEQUENCIA',hsh:true},{av:'A5175DecImportacaoSequencia',fld:'DECIMPORTACAOSEQUENCIA'},{av:'AV15DecImportacaoSequencia',fld:'vDECIMPORTACAOSEQUENCIA',hsh:true},{av:'A5167DecImportacaoNoDI',fld:'DECIMPORTACAONODI'},{av:'A5169DecImportacaoExportador',fld:'DECIMPORTACAOEXPORTADOR'},{av:'A5171DecImportacaoLocalDesembaraco',fld:'DECIMPORTACAOLOCALDESEMBARACO'},{av:'A5172DecImportacaoDataDesembaraco',fld:'DECIMPORTACAODATADESEMBARACO'},{av:'A5168DecImportacaoDataRegistro',fld:'DECIMPORTACAODATAREGISTRO'},{av:'A5170DecImportacaoUFDesembaraco',fld:'DECIMPORTACAOUFDESEMBARACO'},{av:'A5181DecImportacaoAdicaoSeq',fld:'DECIMPORTACAOADICAOSEQ'},{av:'A5178DecImportacaoAdicaoDesconto',fld:'DECIMPORTACAOADICAODESCONTO'},{av:'A5177DecImportacaoAdicaoFabricante',fld:'DECIMPORTACAOADICAOFABRICANTE'},{av:'A5176DecImportacaoAdicaoNo',fld:'DECIMPORTACAOADICAONO'}],[]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43},{av:'subGrid_Rows'},{av:'AV5bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV21bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV12EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'AV13EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4822EntradaItemSequencia',fld:'ENTRADAITEMSEQUENCIA'},{av:'AV14EntradaItemSequencia',fld:'vENTRADAITEMSEQUENCIA',hsh:true},{av:'A5175DecImportacaoSequencia',fld:'DECIMPORTACAOSEQUENCIA'},{av:'AV15DecImportacaoSequencia',fld:'vDECIMPORTACAOSEQUENCIA',hsh:true},{av:'A5167DecImportacaoNoDI',fld:'DECIMPORTACAONODI'},{av:'A5169DecImportacaoExportador',fld:'DECIMPORTACAOEXPORTADOR'},{av:'A5171DecImportacaoLocalDesembaraco',fld:'DECIMPORTACAOLOCALDESEMBARACO'},{av:'A5172DecImportacaoDataDesembaraco',fld:'DECIMPORTACAODATADESEMBARACO'},{av:'A5168DecImportacaoDataRegistro',fld:'DECIMPORTACAODATAREGISTRO'},{av:'A5170DecImportacaoUFDesembaraco',fld:'DECIMPORTACAOUFDESEMBARACO'},{av:'A5181DecImportacaoAdicaoSeq',fld:'DECIMPORTACAOADICAOSEQ'},{av:'A5178DecImportacaoAdicaoDesconto',fld:'DECIMPORTACAOADICAODESCONTO'},{av:'A5177DecImportacaoAdicaoFabricante',fld:'DECIMPORTACAOADICAOFABRICANTE'},{av:'A5176DecImportacaoAdicaoNo',fld:'DECIMPORTACAOADICAONO'}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43},{av:'subGrid_Rows'},{av:'AV5bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV21bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV12EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'AV13EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4822EntradaItemSequencia',fld:'ENTRADAITEMSEQUENCIA'},{av:'AV14EntradaItemSequencia',fld:'vENTRADAITEMSEQUENCIA',hsh:true},{av:'A5175DecImportacaoSequencia',fld:'DECIMPORTACAOSEQUENCIA'},{av:'AV15DecImportacaoSequencia',fld:'vDECIMPORTACAOSEQUENCIA',hsh:true},{av:'A5167DecImportacaoNoDI',fld:'DECIMPORTACAONODI'},{av:'A5169DecImportacaoExportador',fld:'DECIMPORTACAOEXPORTADOR'},{av:'A5171DecImportacaoLocalDesembaraco',fld:'DECIMPORTACAOLOCALDESEMBARACO'},{av:'A5172DecImportacaoDataDesembaraco',fld:'DECIMPORTACAODATADESEMBARACO'},{av:'A5168DecImportacaoDataRegistro',fld:'DECIMPORTACAODATAREGISTRO'},{av:'A5170DecImportacaoUFDesembaraco',fld:'DECIMPORTACAOUFDESEMBARACO'},{av:'A5181DecImportacaoAdicaoSeq',fld:'DECIMPORTACAOADICAOSEQ'},{av:'A5178DecImportacaoAdicaoDesconto',fld:'DECIMPORTACAOADICAODESCONTO'},{av:'A5177DecImportacaoAdicaoFabricante',fld:'DECIMPORTACAOADICAOFABRICANTE'},{av:'A5176DecImportacaoAdicaoNo',fld:'DECIMPORTACAOADICAONO'}],[]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV21bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV12EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'AV13EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4822EntradaItemSequencia',fld:'ENTRADAITEMSEQUENCIA'},{av:'AV14EntradaItemSequencia',fld:'vENTRADAITEMSEQUENCIA',hsh:true},{av:'A5175DecImportacaoSequencia',fld:'DECIMPORTACAOSEQUENCIA'},{av:'AV15DecImportacaoSequencia',fld:'vDECIMPORTACAOSEQUENCIA',hsh:true},{av:'A5167DecImportacaoNoDI',fld:'DECIMPORTACAONODI'},{av:'A5169DecImportacaoExportador',fld:'DECIMPORTACAOEXPORTADOR'},{av:'A5171DecImportacaoLocalDesembaraco',fld:'DECIMPORTACAOLOCALDESEMBARACO'},{av:'A5172DecImportacaoDataDesembaraco',fld:'DECIMPORTACAODATADESEMBARACO'},{av:'A5168DecImportacaoDataRegistro',fld:'DECIMPORTACAODATAREGISTRO'},{av:'A5170DecImportacaoUFDesembaraco',fld:'DECIMPORTACAOUFDESEMBARACO'},{av:'A5181DecImportacaoAdicaoSeq',fld:'DECIMPORTACAOADICAOSEQ'},{av:'A5178DecImportacaoAdicaoDesconto',fld:'DECIMPORTACAOADICAODESCONTO'},{av:'A5177DecImportacaoAdicaoFabricante',fld:'DECIMPORTACAOADICAOFABRICANTE'},{av:'A5176DecImportacaoAdicaoNo',fld:'DECIMPORTACAOADICAONO'},{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43}],[{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43},{av:'AV6DecImportacaoNoDI',fld:'vDECIMPORTACAONODI'},{av:'AV7DecImportacaoExportador',fld:'vDECIMPORTACAOEXPORTADOR'},{av:'AV8DecImportacaoLocalDesembaraco',fld:'vDECIMPORTACAOLOCALDESEMBARACO'},{av:'AV9DecImportacaoDataDesembaraco',fld:'vDECIMPORTACAODATADESEMBARACO'},{av:'AV10DecImportacaoDataRegistro',fld:'vDECIMPORTACAODATAREGISTRO'},{av:'AV11DecImportacaoUFDesembaraco',fld:'vDECIMPORTACAOUFDESEMBARACO'},{av:'AV18SdtAdicaoItem',fld:'vSDTADICAOITEM'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV21bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV12EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'AV13EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4822EntradaItemSequencia',fld:'ENTRADAITEMSEQUENCIA'},{av:'AV14EntradaItemSequencia',fld:'vENTRADAITEMSEQUENCIA',hsh:true},{av:'A5175DecImportacaoSequencia',fld:'DECIMPORTACAOSEQUENCIA'},{av:'AV15DecImportacaoSequencia',fld:'vDECIMPORTACAOSEQUENCIA',hsh:true},{av:'A5167DecImportacaoNoDI',fld:'DECIMPORTACAONODI'},{av:'A5169DecImportacaoExportador',fld:'DECIMPORTACAOEXPORTADOR'},{av:'A5171DecImportacaoLocalDesembaraco',fld:'DECIMPORTACAOLOCALDESEMBARACO'},{av:'A5172DecImportacaoDataDesembaraco',fld:'DECIMPORTACAODATADESEMBARACO'},{av:'A5168DecImportacaoDataRegistro',fld:'DECIMPORTACAODATAREGISTRO'},{av:'A5170DecImportacaoUFDesembaraco',fld:'DECIMPORTACAOUFDESEMBARACO'},{av:'A5181DecImportacaoAdicaoSeq',fld:'DECIMPORTACAOADICAOSEQ'},{av:'A5178DecImportacaoAdicaoDesconto',fld:'DECIMPORTACAOADICAODESCONTO'},{av:'A5177DecImportacaoAdicaoFabricante',fld:'DECIMPORTACAOADICAOFABRICANTE'},{av:'A5176DecImportacaoAdicaoNo',fld:'DECIMPORTACAOADICAONO'},{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43}],[{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43},{av:'AV6DecImportacaoNoDI',fld:'vDECIMPORTACAONODI'},{av:'AV7DecImportacaoExportador',fld:'vDECIMPORTACAOEXPORTADOR'},{av:'AV8DecImportacaoLocalDesembaraco',fld:'vDECIMPORTACAOLOCALDESEMBARACO'},{av:'AV9DecImportacaoDataDesembaraco',fld:'vDECIMPORTACAODATADESEMBARACO'},{av:'AV10DecImportacaoDataRegistro',fld:'vDECIMPORTACAODATAREGISTRO'},{av:'AV11DecImportacaoUFDesembaraco',fld:'vDECIMPORTACAOUFDESEMBARACO'},{av:'AV18SdtAdicaoItem',fld:'vSDTADICAOITEM'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV21bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV12EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'AV13EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4822EntradaItemSequencia',fld:'ENTRADAITEMSEQUENCIA'},{av:'AV14EntradaItemSequencia',fld:'vENTRADAITEMSEQUENCIA',hsh:true},{av:'A5175DecImportacaoSequencia',fld:'DECIMPORTACAOSEQUENCIA'},{av:'AV15DecImportacaoSequencia',fld:'vDECIMPORTACAOSEQUENCIA',hsh:true},{av:'A5167DecImportacaoNoDI',fld:'DECIMPORTACAONODI'},{av:'A5169DecImportacaoExportador',fld:'DECIMPORTACAOEXPORTADOR'},{av:'A5171DecImportacaoLocalDesembaraco',fld:'DECIMPORTACAOLOCALDESEMBARACO'},{av:'A5172DecImportacaoDataDesembaraco',fld:'DECIMPORTACAODATADESEMBARACO'},{av:'A5168DecImportacaoDataRegistro',fld:'DECIMPORTACAODATAREGISTRO'},{av:'A5170DecImportacaoUFDesembaraco',fld:'DECIMPORTACAOUFDESEMBARACO'},{av:'A5181DecImportacaoAdicaoSeq',fld:'DECIMPORTACAOADICAOSEQ'},{av:'A5178DecImportacaoAdicaoDesconto',fld:'DECIMPORTACAOADICAODESCONTO'},{av:'A5177DecImportacaoAdicaoFabricante',fld:'DECIMPORTACAOADICAOFABRICANTE'},{av:'A5176DecImportacaoAdicaoNo',fld:'DECIMPORTACAOADICAONO'},{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43}],[{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43},{av:'AV6DecImportacaoNoDI',fld:'vDECIMPORTACAONODI'},{av:'AV7DecImportacaoExportador',fld:'vDECIMPORTACAOEXPORTADOR'},{av:'AV8DecImportacaoLocalDesembaraco',fld:'vDECIMPORTACAOLOCALDESEMBARACO'},{av:'AV9DecImportacaoDataDesembaraco',fld:'vDECIMPORTACAODATADESEMBARACO'},{av:'AV10DecImportacaoDataRegistro',fld:'vDECIMPORTACAODATAREGISTRO'},{av:'AV11DecImportacaoUFDesembaraco',fld:'vDECIMPORTACAOUFDESEMBARACO'},{av:'AV18SdtAdicaoItem',fld:'vSDTADICAOITEM'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV21bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV12EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'AV13EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4822EntradaItemSequencia',fld:'ENTRADAITEMSEQUENCIA'},{av:'AV14EntradaItemSequencia',fld:'vENTRADAITEMSEQUENCIA',hsh:true},{av:'A5175DecImportacaoSequencia',fld:'DECIMPORTACAOSEQUENCIA'},{av:'AV15DecImportacaoSequencia',fld:'vDECIMPORTACAOSEQUENCIA',hsh:true},{av:'A5167DecImportacaoNoDI',fld:'DECIMPORTACAONODI'},{av:'A5169DecImportacaoExportador',fld:'DECIMPORTACAOEXPORTADOR'},{av:'A5171DecImportacaoLocalDesembaraco',fld:'DECIMPORTACAOLOCALDESEMBARACO'},{av:'A5172DecImportacaoDataDesembaraco',fld:'DECIMPORTACAODATADESEMBARACO'},{av:'A5168DecImportacaoDataRegistro',fld:'DECIMPORTACAODATAREGISTRO'},{av:'A5170DecImportacaoUFDesembaraco',fld:'DECIMPORTACAOUFDESEMBARACO'},{av:'A5181DecImportacaoAdicaoSeq',fld:'DECIMPORTACAOADICAOSEQ'},{av:'A5178DecImportacaoAdicaoDesconto',fld:'DECIMPORTACAOADICAODESCONTO'},{av:'A5177DecImportacaoAdicaoFabricante',fld:'DECIMPORTACAOADICAOFABRICANTE'},{av:'A5176DecImportacaoAdicaoNo',fld:'DECIMPORTACAOADICAONO'},{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43}],[{av:'AV17SdtAdicao',fld:'vSDTADICAO',grid:43},{av:'AV6DecImportacaoNoDI',fld:'vDECIMPORTACAONODI'},{av:'AV7DecImportacaoExportador',fld:'vDECIMPORTACAOEXPORTADOR'},{av:'AV8DecImportacaoLocalDesembaraco',fld:'vDECIMPORTACAOLOCALDESEMBARACO'},{av:'AV9DecImportacaoDataDesembaraco',fld:'vDECIMPORTACAODATADESEMBARACO'},{av:'AV10DecImportacaoDataRegistro',fld:'vDECIMPORTACAODATAREGISTRO'},{av:'AV11DecImportacaoUFDesembaraco',fld:'vDECIMPORTACAOUFDESEMBARACO'},{av:'AV18SdtAdicaoItem',fld:'vSDTADICAOITEM'}]];
   this.setVCMap("A4637EntradaEmpresaId", "ENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV12EntradaEmpresaId", "vENTRADAEMPRESAID", 0, "char");
   this.setVCMap("A4638EntradaId", "ENTRADAID", 0, "int");
   this.setVCMap("AV13EntradaId", "vENTRADAID", 0, "int");
   this.setVCMap("A4822EntradaItemSequencia", "ENTRADAITEMSEQUENCIA", 0, "int");
   this.setVCMap("AV14EntradaItemSequencia", "vENTRADAITEMSEQUENCIA", 0, "int");
   this.setVCMap("A5175DecImportacaoSequencia", "DECIMPORTACAOSEQUENCIA", 0, "int");
   this.setVCMap("AV15DecImportacaoSequencia", "vDECIMPORTACAOSEQUENCIA", 0, "int");
   this.setVCMap("A5167DecImportacaoNoDI", "DECIMPORTACAONODI", 0, "char");
   this.setVCMap("A5169DecImportacaoExportador", "DECIMPORTACAOEXPORTADOR", 0, "svchar");
   this.setVCMap("A5171DecImportacaoLocalDesembaraco", "DECIMPORTACAOLOCALDESEMBARACO", 0, "svchar");
   this.setVCMap("A5172DecImportacaoDataDesembaraco", "DECIMPORTACAODATADESEMBARACO", 0, "date");
   this.setVCMap("A5168DecImportacaoDataRegistro", "DECIMPORTACAODATAREGISTRO", 0, "date");
   this.setVCMap("A5170DecImportacaoUFDesembaraco", "DECIMPORTACAOUFDESEMBARACO", 0, "char");
   this.setVCMap("A5181DecImportacaoAdicaoSeq", "DECIMPORTACAOADICAOSEQ", 0, "int");
   this.setVCMap("A5178DecImportacaoAdicaoDesconto", "DECIMPORTACAOADICAODESCONTO", 0, "decimal");
   this.setVCMap("A5177DecImportacaoAdicaoFabricante", "DECIMPORTACAOADICAOFABRICANTE", 0, "svchar");
   this.setVCMap("A5176DecImportacaoAdicaoNo", "DECIMPORTACAOADICAONO", 0, "int");
   this.setVCMap("A4637EntradaEmpresaId", "ENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV12EntradaEmpresaId", "vENTRADAEMPRESAID", 0, "char");
   this.setVCMap("A4638EntradaId", "ENTRADAID", 0, "int");
   this.setVCMap("AV13EntradaId", "vENTRADAID", 0, "int");
   this.setVCMap("A4822EntradaItemSequencia", "ENTRADAITEMSEQUENCIA", 0, "int");
   this.setVCMap("AV14EntradaItemSequencia", "vENTRADAITEMSEQUENCIA", 0, "int");
   this.setVCMap("A5175DecImportacaoSequencia", "DECIMPORTACAOSEQUENCIA", 0, "int");
   this.setVCMap("AV15DecImportacaoSequencia", "vDECIMPORTACAOSEQUENCIA", 0, "int");
   this.setVCMap("A5167DecImportacaoNoDI", "DECIMPORTACAONODI", 0, "char");
   this.setVCMap("A5169DecImportacaoExportador", "DECIMPORTACAOEXPORTADOR", 0, "svchar");
   this.setVCMap("A5171DecImportacaoLocalDesembaraco", "DECIMPORTACAOLOCALDESEMBARACO", 0, "svchar");
   this.setVCMap("A5172DecImportacaoDataDesembaraco", "DECIMPORTACAODATADESEMBARACO", 0, "date");
   this.setVCMap("A5168DecImportacaoDataRegistro", "DECIMPORTACAODATAREGISTRO", 0, "date");
   this.setVCMap("A5170DecImportacaoUFDesembaraco", "DECIMPORTACAOUFDESEMBARACO", 0, "char");
   this.setVCMap("A5181DecImportacaoAdicaoSeq", "DECIMPORTACAOADICAOSEQ", 0, "int");
   this.setVCMap("A5178DecImportacaoAdicaoDesconto", "DECIMPORTACAOADICAODESCONTO", 0, "decimal");
   this.setVCMap("A5177DecImportacaoAdicaoFabricante", "DECIMPORTACAOADICAOFABRICANTE", 0, "svchar");
   this.setVCMap("A5176DecImportacaoAdicaoNo", "DECIMPORTACAOADICAONO", 0, "int");
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpalt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpalt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"A4637EntradaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV12EntradaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A4638EntradaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV13EntradaId"});
   GridContainer.addRefreshingVar({rfrVar:"A4822EntradaItemSequencia"});
   GridContainer.addRefreshingVar({rfrVar:"AV14EntradaItemSequencia"});
   GridContainer.addRefreshingVar({rfrVar:"A5175DecImportacaoSequencia"});
   GridContainer.addRefreshingVar({rfrVar:"AV15DecImportacaoSequencia"});
   GridContainer.addRefreshingVar({rfrVar:"A5167DecImportacaoNoDI"});
   GridContainer.addRefreshingVar({rfrVar:"A5169DecImportacaoExportador"});
   GridContainer.addRefreshingVar({rfrVar:"A5171DecImportacaoLocalDesembaraco"});
   GridContainer.addRefreshingVar({rfrVar:"A5172DecImportacaoDataDesembaraco"});
   GridContainer.addRefreshingVar({rfrVar:"A5168DecImportacaoDataRegistro"});
   GridContainer.addRefreshingVar({rfrVar:"A5170DecImportacaoUFDesembaraco"});
   GridContainer.addRefreshingVar({rfrVar:"A5181DecImportacaoAdicaoSeq"});
   GridContainer.addRefreshingVar({rfrVar:"A5178DecImportacaoAdicaoDesconto"});
   GridContainer.addRefreshingVar({rfrVar:"A5177DecImportacaoAdicaoFabricante"});
   GridContainer.addRefreshingVar({rfrVar:"A5176DecImportacaoAdicaoNo"});
   this.addGridBCProperty("Sdtadicao", ["EntradaEmpresaId"], this.GXValidFnc[44], "AV17SdtAdicao");
   this.addGridBCProperty("Sdtadicao", ["EntradaId"], this.GXValidFnc[45], "AV17SdtAdicao");
   this.addGridBCProperty("Sdtadicao", ["EntradaItemSequencia"], this.GXValidFnc[46], "AV17SdtAdicao");
   this.addGridBCProperty("Sdtadicao", ["DecImportacaoSequencia"], this.GXValidFnc[47], "AV17SdtAdicao");
   this.addGridBCProperty("Sdtadicao", ["DecImportacaoAdicaoSeq"], this.GXValidFnc[48], "AV17SdtAdicao");
   this.addGridBCProperty("Sdtadicao", ["DecImportacaoAdicaoNo"], this.GXValidFnc[49], "AV17SdtAdicao");
   this.addGridBCProperty("Sdtadicao", ["DecImportacaoAdicaoFabricante"], this.GXValidFnc[50], "AV17SdtAdicao");
   this.addGridBCProperty("Sdtadicao", ["DecImportacaoAdicaoDesconto"], this.GXValidFnc[51], "AV17SdtAdicao");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaentradaadicaodec());
