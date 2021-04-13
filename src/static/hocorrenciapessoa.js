/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:38:1.47
*/
gx.evt.autoSkip = false;
gx.define('hocorrenciapessoa', false, function () {
   this.ServerClass =  "hocorrenciapessoa" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV35DataSistema=gx.fn.getDateValue("vDATASISTEMA") ;
      this.AV45SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV29TitularNomePessoa=gx.fn.getControlValue("vTITULARNOMEPESSOA") ;
      this.AV36DependenteNome=gx.fn.getControlValue("vDEPENDENTENOME") ;
      this.AV39SnCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV40SnFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV41SnFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV42SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Ocorrenciaportariaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(86) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPORTARIAID", gx.fn.currentGridRowImpl(86));
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
   this.e11h22_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12h22_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16h22_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13h22_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14h22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15h22_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19h22_client=function()
   {
      this.executeServerEvent("'CADASTRAROCORRENCIAS'", true, arguments[0], false, false);
   };
   this.e20h22_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21h22_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22h22_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23h22_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25h22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26h22_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,24,27,29,31,34,36,39,41,43,48,50,56,63,66,69,71,73,75,77,80,82,83,87,88,89,90,91,92,93,94,95,96,97,104,105];
   this.GXLastCtrlId =105;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",86,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hocorrenciapessoa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2674,87,"OCORRENCIAPESSOANUMERO","Número","","OcorrenciaPessoaNumero","int",0,"px",8,8,"right",null,[],2674,"OcorrenciaPessoaNumero",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2664,88,"OCORRENCIAPESSOADATAINICIAL","","","OcorrenciaPessoaDataInicial","date",0,"px",10,10,"right",null,[],2664,"OcorrenciaPessoaDataInicial",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2665,89,"OCORRENCIAPESSOADATAFINAL","","","OcorrenciaPessoaDataFinal","date",0,"px",10,10,"right",null,[],2665,"OcorrenciaPessoaDataFinal",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2666,90,"OCORRENCIAPESSOAOBSERVACAO","Observação","","OcorrenciaPessoaObservacao","vchar",0,"px",3000,80,"left",null,[],2666,"OcorrenciaPessoaObservacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2663,91,"OCORRENCIAPORTARIAID","","","OcorrenciaPortariaId","int",0,"px",4,4,"right",null,[],2663,"OcorrenciaPortariaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2675,92,"OCORRENCIAPORTARIADESCRICAO","Descrição Ocorrencia Portaria","","OcorrenciaPortariaDescricao","svchar",0,"px",35,35,"left",null,[],2675,"OcorrenciaPortariaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2678,93,"OCORRENCIAPORTARIATIPO","Tipo","OcorrenciaPortariaTipo","char",null,0,false,false,0,"px","");
   GridContainer.addBitmap("&Bmpcad","vBMPCAD",94,0,"px",17,"px","e19h22_client","","Registrar Dep","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",95,0,"px",17,"px","e20h22_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",96,0,"px",17,"px","e21h22_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",97,0,"px",17,"px","e22h22_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE13",grid:0};
   GXValidFnc[8]={fld:"TABLE14",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTITULARPESSOAID",gxz:"ZV27TitularPessoaId",gxold:"OV27TitularPessoaId",gxvar:"AV27TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV27TitularPessoaId,0)},c2v:function(){gx.O.AV27TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMETITULAR",gxz:"ZV43NomeTitular",gxold:"OV43NomeTitular",gxvar:"AV43NomeTitular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43NomeTitular=Value},v2z:function(Value){gx.O.ZV43NomeTitular=Value},v2c:function(){gx.fn.setControlValue("vNOMETITULAR",gx.O.AV43NomeTitular,0)},c2v:function(){gx.O.AV43NomeTitular=this.val()},val:function(){return gx.fn.getControlValue("vNOMETITULAR")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPENTENDETELA",gxz:"ZV37DepentendeTela",gxold:"OV37DepentendeTela",gxvar:"AV37DepentendeTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37DepentendeTela=Value},v2z:function(Value){gx.O.ZV37DepentendeTela=Value},v2c:function(){gx.fn.setControlValue("vDEPENTENDETELA",gx.O.AV37DepentendeTela,0)},c2v:function(){gx.O.AV37DepentendeTela=this.val()},val:function(){return gx.fn.getControlValue("vDEPENTENDETELA")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABLE7",grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPENDENTEID",gxz:"ZV28DependenteId",gxold:"OV28DependenteId",gxvar:"AV28DependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28DependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDEPENDENTEID",gx.O.AV28DependenteId,0)},c2v:function(){gx.O.AV28DependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEDEPENDENTE",gxz:"ZV44NomeDependente",gxold:"OV44NomeDependente",gxvar:"AV44NomeDependente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44NomeDependente=Value},v2z:function(Value){gx.O.ZV44NomeDependente=Value},v2c:function(){gx.fn.setControlValue("vNOMEDEPENDENTE",gx.O.AV44NomeDependente,0)},c2v:function(){gx.O.AV44NomeDependente=this.val()},val:function(){return gx.fn.getControlValue("vNOMEDEPENDENTE")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[36]={fld:"TABLE12",grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIAPESSOADATAINICIALINI",gxz:"ZV31OcorrenciaPessoaDataInicialIni",gxold:"OV31OcorrenciaPessoaDataInicialIni",gxvar:"AV31OcorrenciaPessoaDataInicialIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31OcorrenciaPessoaDataInicialIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31OcorrenciaPessoaDataInicialIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPESSOADATAINICIALINI",gx.O.AV31OcorrenciaPessoaDataInicialIni,0)},c2v:function(){gx.O.AV31OcorrenciaPessoaDataInicialIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vOCORRENCIAPESSOADATAINICIALINI")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIAPESSOADATAINICIALFIM",gxz:"ZV32OcorrenciaPessoaDataInicialFim",gxold:"OV32OcorrenciaPessoaDataInicialFim",gxvar:"AV32OcorrenciaPessoaDataInicialFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32OcorrenciaPessoaDataInicialFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32OcorrenciaPessoaDataInicialFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPESSOADATAINICIALFIM",gx.O.AV32OcorrenciaPessoaDataInicialFim,0)},c2v:function(){gx.O.AV32OcorrenciaPessoaDataInicialFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vOCORRENCIAPESSOADATAINICIALFIM")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIAPORTARIATIPO",gxz:"ZV33OcorrenciaPortariaTipo",gxold:"OV33OcorrenciaPortariaTipo",gxvar:"AV33OcorrenciaPortariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33OcorrenciaPortariaTipo=Value},v2z:function(Value){gx.O.ZV33OcorrenciaPortariaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vOCORRENCIAPORTARIATIPO",gx.O.AV33OcorrenciaPortariaTipo)},c2v:function(){gx.O.AV33OcorrenciaPortariaTipo=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIAPORTARIATIPO")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPENASVIGENTES",gxz:"ZV34ApenasVigentes",gxold:"OV34ApenasVigentes",gxvar:"AV34ApenasVigentes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34ApenasVigentes=Value},v2z:function(Value){gx.O.ZV34ApenasVigentes=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPENASVIGENTES",gx.O.AV34ApenasVigentes,"S")},c2v:function(){gx.O.AV34ApenasVigentes=this.val()},val:function(){return gx.fn.getControlValue("vAPENASVIGENTES")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   GXValidFnc[66]={fld:"TABLE6",grid:0};
   GXValidFnc[69]={fld:"IMAGE2",grid:0};
   GXValidFnc[71]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[73]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[75]={fld:"BTNHELP",grid:0};
   GXValidFnc[77]={fld:"TABLE5",grid:0};
   GXValidFnc[80]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:86,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOANUMERO",gxz:"Z2674OcorrenciaPessoaNumero",gxold:"O2674OcorrenciaPessoaNumero",gxvar:"A2674OcorrenciaPessoaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2674OcorrenciaPessoaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2674OcorrenciaPessoaNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPESSOANUMERO",row || gx.fn.currentGridRowImpl(86),gx.O.A2674OcorrenciaPessoaNumero,0)},c2v:function(){gx.O.A2674OcorrenciaPessoaNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIAPESSOANUMERO",row || gx.fn.currentGridRowImpl(86),'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOADATAINICIAL",gxz:"Z2664OcorrenciaPessoaDataInicial",gxold:"O2664OcorrenciaPessoaDataInicial",gxvar:"A2664OcorrenciaPessoaDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2664OcorrenciaPessoaDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2664OcorrenciaPessoaDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPESSOADATAINICIAL",row || gx.fn.currentGridRowImpl(86),gx.O.A2664OcorrenciaPessoaDataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2664OcorrenciaPessoaDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("OCORRENCIAPESSOADATAINICIAL",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOADATAFINAL",gxz:"Z2665OcorrenciaPessoaDataFinal",gxold:"O2665OcorrenciaPessoaDataFinal",gxvar:"A2665OcorrenciaPessoaDataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2665OcorrenciaPessoaDataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2665OcorrenciaPessoaDataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPESSOADATAFINAL",row || gx.fn.currentGridRowImpl(86),gx.O.A2665OcorrenciaPessoaDataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2665OcorrenciaPessoaDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("OCORRENCIAPESSOADATAFINAL",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"vchar",len:3000,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOAOBSERVACAO",gxz:"Z2666OcorrenciaPessoaObservacao",gxold:"O2666OcorrenciaPessoaObservacao",gxvar:"A2666OcorrenciaPessoaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2666OcorrenciaPessoaObservacao=Value},v2z:function(Value){gx.O.Z2666OcorrenciaPessoaObservacao=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPESSOAOBSERVACAO",row || gx.fn.currentGridRowImpl(86),gx.O.A2666OcorrenciaPessoaObservacao,0)},c2v:function(){gx.O.A2666OcorrenciaPessoaObservacao=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPESSOAOBSERVACAO",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:86,gxgrid:this.GridContainer,fnc:this.Valid_Ocorrenciaportariaid,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAID",gxz:"Z2663OcorrenciaPortariaId",gxold:"O2663OcorrenciaPortariaId",gxvar:"A2663OcorrenciaPortariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2663OcorrenciaPortariaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPORTARIAID",row || gx.fn.currentGridRowImpl(86),gx.O.A2663OcorrenciaPortariaId,0)},c2v:function(){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIAPORTARIAID",row || gx.fn.currentGridRowImpl(86),'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIADESCRICAO",gxz:"Z2675OcorrenciaPortariaDescricao",gxold:"O2675OcorrenciaPortariaDescricao",gxvar:"A2675OcorrenciaPortariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2675OcorrenciaPortariaDescricao=Value},v2z:function(Value){gx.O.Z2675OcorrenciaPortariaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPORTARIADESCRICAO",row || gx.fn.currentGridRowImpl(86),gx.O.A2675OcorrenciaPortariaDescricao,0)},c2v:function(){gx.O.A2675OcorrenciaPortariaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIADESCRICAO",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIATIPO",gxz:"Z2678OcorrenciaPortariaTipo",gxold:"O2678OcorrenciaPortariaTipo",gxvar:"A2678OcorrenciaPortariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2678OcorrenciaPortariaTipo=Value},v2z:function(Value){gx.O.Z2678OcorrenciaPortariaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIAPORTARIATIPO",row || gx.fn.currentGridRowImpl(86),gx.O.A2678OcorrenciaPortariaTipo)},c2v:function(){gx.O.A2678OcorrenciaPortariaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIATIPO",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCAD",gxz:"ZV30bmpCad",gxold:"OV30bmpCad",gxvar:"AV30bmpCad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpCad=Value},v2z:function(Value){gx.O.ZV30bmpCad=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCAD",row || gx.fn.currentGridRowImpl(86),gx.O.AV30bmpCad,gx.O.AV53Bmpcad_GXI)},c2v:function(){gx.O.AV53Bmpcad_GXI=this.val_GXI();gx.O.AV30bmpCad=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCAD",row || gx.fn.currentGridRowImpl(86))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCAD_GXI",row || gx.fn.currentGridRowImpl(86))}, gxvar_GXI:'AV53Bmpcad_GXI',nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(86),gx.O.AV7bmpAlt,gx.O.AV50Bmpalt_GXI)},c2v:function(){gx.O.AV50Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(86))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(86))}, gxvar_GXI:'AV50Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(86),gx.O.AV8bmpExc,gx.O.AV51Bmpexc_GXI)},c2v:function(){gx.O.AV51Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(86))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(86))}, gxvar_GXI:'AV51Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(86),gx.O.AV16bmpCon,gx.O.AV52Bmpcon_GXI)},c2v:function(){gx.O.AV52Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(86))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(86))}, gxvar_GXI:'AV52Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[104]={fld:"JS", format:2,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TitularPessoaId = 0 ;
   this.ZV27TitularPessoaId = 0 ;
   this.OV27TitularPessoaId = 0 ;
   this.AV43NomeTitular = "" ;
   this.ZV43NomeTitular = "" ;
   this.OV43NomeTitular = "" ;
   this.AV37DepentendeTela = "" ;
   this.ZV37DepentendeTela = "" ;
   this.OV37DepentendeTela = "" ;
   this.AV28DependenteId = 0 ;
   this.ZV28DependenteId = 0 ;
   this.OV28DependenteId = 0 ;
   this.AV44NomeDependente = "" ;
   this.ZV44NomeDependente = "" ;
   this.OV44NomeDependente = "" ;
   this.AV31OcorrenciaPessoaDataInicialIni = gx.date.nullDate() ;
   this.ZV31OcorrenciaPessoaDataInicialIni = gx.date.nullDate() ;
   this.OV31OcorrenciaPessoaDataInicialIni = gx.date.nullDate() ;
   this.AV32OcorrenciaPessoaDataInicialFim = gx.date.nullDate() ;
   this.ZV32OcorrenciaPessoaDataInicialFim = gx.date.nullDate() ;
   this.OV32OcorrenciaPessoaDataInicialFim = gx.date.nullDate() ;
   this.AV33OcorrenciaPortariaTipo = "" ;
   this.ZV33OcorrenciaPortariaTipo = "" ;
   this.OV33OcorrenciaPortariaTipo = "" ;
   this.AV34ApenasVigentes = "" ;
   this.ZV34ApenasVigentes = "" ;
   this.OV34ApenasVigentes = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2674OcorrenciaPessoaNumero = 0 ;
   this.O2674OcorrenciaPessoaNumero = 0 ;
   this.Z2664OcorrenciaPessoaDataInicial = gx.date.nullDate() ;
   this.O2664OcorrenciaPessoaDataInicial = gx.date.nullDate() ;
   this.Z2665OcorrenciaPessoaDataFinal = gx.date.nullDate() ;
   this.O2665OcorrenciaPessoaDataFinal = gx.date.nullDate() ;
   this.Z2666OcorrenciaPessoaObservacao = "" ;
   this.O2666OcorrenciaPessoaObservacao = "" ;
   this.Z2663OcorrenciaPortariaId = 0 ;
   this.O2663OcorrenciaPortariaId = 0 ;
   this.Z2675OcorrenciaPortariaDescricao = "" ;
   this.O2675OcorrenciaPortariaDescricao = "" ;
   this.Z2678OcorrenciaPortariaTipo = "" ;
   this.O2678OcorrenciaPortariaTipo = "" ;
   this.ZV30bmpCad = "" ;
   this.OV30bmpCad = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TitularPessoaId = 0 ;
   this.AV43NomeTitular = "" ;
   this.AV37DepentendeTela = "" ;
   this.AV28DependenteId = 0 ;
   this.AV44NomeDependente = "" ;
   this.AV31OcorrenciaPessoaDataInicialIni = gx.date.nullDate() ;
   this.AV32OcorrenciaPessoaDataInicialFim = gx.date.nullDate() ;
   this.AV33OcorrenciaPortariaTipo = "" ;
   this.AV34ApenasVigentes = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV29TitularNomePessoa = "" ;
   this.AV36DependenteNome = "" ;
   this.AV39SnCliente = "" ;
   this.AV40SnFornecedor = "" ;
   this.AV41SnFabricante = "" ;
   this.AV42SnPrompt = "" ;
   this.A2670OcorrenciaPessoaDependenteId = 0 ;
   this.A2668OcorrenciaPessoaId = 0 ;
   this.A2673OcorrenciaPessoaEmpresaId = "" ;
   this.A2662OcorrenciaPortariaEmpresaId = "" ;
   this.A2674OcorrenciaPessoaNumero = 0 ;
   this.A2664OcorrenciaPessoaDataInicial = gx.date.nullDate() ;
   this.A2665OcorrenciaPessoaDataFinal = gx.date.nullDate() ;
   this.A2666OcorrenciaPessoaObservacao = "" ;
   this.A2663OcorrenciaPortariaId = 0 ;
   this.A2675OcorrenciaPortariaDescricao = "" ;
   this.A2678OcorrenciaPortariaTipo = "" ;
   this.AV30bmpCad = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV35DataSistema = gx.date.nullDate() ;
   this.AV45SnRecuperaFiltro = "" ;
   this.Events = {"e11h22_client": ["'ANTERIOR'", true] ,"e12h22_client": ["'PROXIMO'", true] ,"e16h22_client": ["VPAGINA.CLICK", true] ,"e13h22_client": ["'NOVO'", true] ,"e14h22_client": ["'FECHAR'", true] ,"e15h22_client": ["'PROCURAR'", true] ,"e19h22_client": ["'CADASTRAROCORRENCIAS'", true] ,"e20h22_client": ["'ALTERAR'", true] ,"e21h22_client": ["'EXCLUIR'", true] ,"e22h22_client": ["'CONSULTAR'", true] ,"e23h22_client": ["'ATUALIZAPAGINA'", true] ,"e25h22_client": ["ENTER", true] ,"e26h22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35DataSistema',fld:'vDATASISTEMA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Visible")',ctrl:'vBMPCAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Jsonclick")',ctrl:'vBMPCAD',prop:'Jsonclick'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35DataSistema',fld:'vDATASISTEMA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Visible")',ctrl:'vBMPCAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Jsonclick")',ctrl:'vBMPCAD',prop:'Jsonclick'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'OCORRENCIAPESSOADATAINICIAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPESSOADATAINICIAL","Title")',ctrl:'OCORRENCIAPESSOADATAINICIAL',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'OCORRENCIAPESSOADATAFINAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPESSOADATAFINAL","Title")',ctrl:'OCORRENCIAPESSOADATAFINAL',prop:'Title'},{ctrl:'OCORRENCIAPORTARIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPORTARIAID","Title")',ctrl:'OCORRENCIAPORTARIAID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35DataSistema',fld:'vDATASISTEMA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Visible")',ctrl:'vBMPCAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Jsonclick")',ctrl:'vBMPCAD',prop:'Jsonclick'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35DataSistema',fld:'vDATASISTEMA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Visible")',ctrl:'vBMPCAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Jsonclick")',ctrl:'vBMPCAD',prop:'Jsonclick'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35DataSistema',fld:'vDATASISTEMA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Visible")',ctrl:'vBMPCAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Jsonclick")',ctrl:'vBMPCAD',prop:'Jsonclick'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV29TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV36DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV39SnCliente',fld:'vSNCLIENTE'},{av:'AV40SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV41SnFabricante',fld:'vSNFABRICANTE'},{av:'AV42SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'}],[{av:'AV42SnPrompt',fld:'vSNPROMPT'},{av:'AV41SnFabricante',fld:'vSNFABRICANTE'},{av:'AV40SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV39SnCliente',fld:'vSNCLIENTE'},{av:'AV36DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV29TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42SnPrompt',fld:'vSNPROMPT'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV29TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV39SnCliente',fld:'vSNCLIENTE'},{av:'AV40SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV41SnFabricante',fld:'vSNFABRICANTE'}],[{av:'AV42SnPrompt',fld:'vSNPROMPT'},{av:'AV41SnFabricante',fld:'vSNFABRICANTE'},{av:'AV40SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV39SnCliente',fld:'vSNCLIENTE'},{av:'AV29TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35DataSistema',fld:'vDATASISTEMA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Visible")',ctrl:'vBMPCAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Jsonclick")',ctrl:'vBMPCAD',prop:'Jsonclick'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV38tpErro',fld:'vTPERRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CADASTRAROCORRENCIAS'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2663OcorrenciaPortariaId',fld:'OCORRENCIAPORTARIAID'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A2664OcorrenciaPessoaDataInicial',fld:'OCORRENCIAPESSOADATAINICIAL'},{av:'A2665OcorrenciaPessoaDataFinal',fld:'OCORRENCIAPESSOADATAFINAL'},{av:'A2666OcorrenciaPessoaObservacao',fld:'OCORRENCIAPESSOAOBSERVACAO'}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2674OcorrenciaPessoaNumero',fld:'OCORRENCIAPESSOANUMERO'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV29TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV36DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV39SnCliente',fld:'vSNCLIENTE'},{av:'AV40SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV41SnFabricante',fld:'vSNFABRICANTE'},{av:'AV42SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'}],[{av:'AV42SnPrompt',fld:'vSNPROMPT'},{av:'AV41SnFabricante',fld:'vSNFABRICANTE'},{av:'AV40SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV39SnCliente',fld:'vSNCLIENTE'},{av:'AV36DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV29TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A2674OcorrenciaPessoaNumero',fld:'OCORRENCIAPESSOANUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2674OcorrenciaPessoaNumero',fld:'OCORRENCIAPESSOANUMERO'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV29TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV36DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV39SnCliente',fld:'vSNCLIENTE'},{av:'AV40SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV41SnFabricante',fld:'vSNFABRICANTE'},{av:'AV42SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'}],[{av:'AV42SnPrompt',fld:'vSNPROMPT'},{av:'AV41SnFabricante',fld:'vSNFABRICANTE'},{av:'AV40SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV39SnCliente',fld:'vSNCLIENTE'},{av:'AV36DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV29TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A2674OcorrenciaPessoaNumero',fld:'OCORRENCIAPESSOANUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2674OcorrenciaPessoaNumero',fld:'OCORRENCIAPESSOANUMERO'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV29TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV36DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV39SnCliente',fld:'vSNCLIENTE'},{av:'AV40SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV41SnFabricante',fld:'vSNFABRICANTE'},{av:'AV42SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'}],[{av:'AV42SnPrompt',fld:'vSNPROMPT'},{av:'AV41SnFabricante',fld:'vSNFABRICANTE'},{av:'AV40SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV39SnCliente',fld:'vSNCLIENTE'},{av:'AV36DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV29TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A2674OcorrenciaPessoaNumero',fld:'OCORRENCIAPESSOANUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31OcorrenciaPessoaDataInicialIni',fld:'vOCORRENCIAPESSOADATAINICIALINI'},{av:'AV32OcorrenciaPessoaDataInicialFim',fld:'vOCORRENCIAPESSOADATAINICIALFIM'},{av:'AV33OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV34ApenasVigentes',fld:'vAPENASVIGENTES'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35DataSistema',fld:'vDATASISTEMA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpCad',fld:'vBMPCAD'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:'vBMPCAD',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Visible")',ctrl:'vBMPCAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCAD","Jsonclick")',ctrl:'vBMPCAD',prop:'Jsonclick'},{av:'AV45SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35DataSistema", "vDATASISTEMA", 0, "date");
   this.setVCMap("AV45SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV29TitularNomePessoa", "vTITULARNOMEPESSOA", 0, "svchar");
   this.setVCMap("AV36DependenteNome", "vDEPENDENTENOME", 0, "svchar");
   this.setVCMap("AV39SnCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV40SnFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV41SnFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV42SnPrompt", "vSNPROMPT", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35DataSistema", "vDATASISTEMA", 0, "date");
   this.setVCMap("AV45SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[39]);
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridContainer.addRefreshingVar(this.GXValidFnc[105]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV35DataSistema"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpCad", rfrProp:"Value", gxAttId:"Bmpcad"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpCad", rfrProp:"Tooltiptext", gxAttId:"Bmpcad"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpCad", rfrProp:"Visible", gxAttId:"Bmpcad"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpCad", rfrProp:"Jsonclick", gxAttId:"Bmpcad"});
   GridContainer.addRefreshingVar({rfrVar:"AV45SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hocorrenciapessoa());
