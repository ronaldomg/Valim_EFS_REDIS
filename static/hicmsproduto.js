/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:59:33.56
*/
gx.evt.autoSkip = false;
gx.define('hicmsproduto', false, function () {
   this.ServerClass =  "hicmsproduto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV42ProdutoCodigo=gx.fn.getIntegerValue("vPRODUTOCODIGO",'.') ;
      this.AV49SituacaoTributariaTipoTributacao=gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPOTRIBUTACAO") ;
      this.AV32SituacaoTributariaSnReducao=gx.fn.getControlValue("vSITUACAOTRIBUTARIASNREDUCAO") ;
      this.AV31SituacaoTributariaSnSubstit=gx.fn.getControlValue("vSITUACAOTRIBUTARIASNSUBSTIT") ;
      this.AV58SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV63Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Ufdestino=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUFDESTINO");
         this.AnyError  = 0;
         if ( ! ( this.AV29UfDestino == "" || this.AV29UfDestino == "AC" || this.AV29UfDestino == "AL" || this.AV29UfDestino == "AP" || this.AV29UfDestino == "AM" || this.AV29UfDestino == "BA" || this.AV29UfDestino == "CE" || this.AV29UfDestino == "DF" || this.AV29UfDestino == "ES" || this.AV29UfDestino == "GO" || this.AV29UfDestino == "MA" || this.AV29UfDestino == "MT" || this.AV29UfDestino == "MS" || this.AV29UfDestino == "MG" || this.AV29UfDestino == "PA" || this.AV29UfDestino == "PB" || this.AV29UfDestino == "PR" || this.AV29UfDestino == "PE" || this.AV29UfDestino == "PI" || this.AV29UfDestino == "RJ" || this.AV29UfDestino == "RN" || this.AV29UfDestino == "RS" || this.AV29UfDestino == "RO" || this.AV29UfDestino == "RR" || this.AV29UfDestino == "SC" || this.AV29UfDestino == "SP" || this.AV29UfDestino == "SE" || this.AV29UfDestino == "TO" || this.AV29UfDestino == "EX" || (""==this.AV29UfDestino) ) )
         {
            try {
               gxballoon.setError("Campo UfDestino fora do intervalo");
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
   this.Valid_Produtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(94) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PRODUTOID", gx.fn.currentGridRowImpl(94));
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
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
         this.AnyError  = 0;

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
      if ( (0==this.AV42ProdutoCodigo) )
      {
         this.AV43TipoSitTrib =  this.AV27SituacaoTributariaTipo  ;
         this.AV44CodigoSitTrib =  this.AV28SituacaoTributariaCodigo  ;
      }
   };
   this.e11oe2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12oe2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17oe2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13oe2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14oe2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15oe2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16oe2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e24oe2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e25oe2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e26oe2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e27oe2_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e18oe2_client=function()
   {
      this.executeServerEvent("'GERAICMSPRODUTO'", true, null, false, false);
   };
   this.e19oe2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTODOS'", true, null, false, false);
   };
   this.e28oe2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e29oe2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,7,10,13,16,19,21,24,26,28,30,31,34,36,38,41,43,44,46,48,51,53,55,65,68,71,73,75,77,79,81,83,85,88,90,91,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,116,117,118,119,120,122,123,124,125,126,127,128];
   this.GXLastCtrlId =128;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",94,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hicmsproduto",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3567,95,"ICMSPRODUTOSEQUENCIA","","","ICMSProdutoSequencia","int",0,"px",4,4,"right",null,[],3567,"ICMSProdutoSequencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3552,96,"ICMSPRODUTOUFDESTINO","","ICMSProdutoUFDestino","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(3553,97,"ICMSPRODUTOCATEGORIA","","","ICMSProdutoCategoria","int",0,"px",1,1,"right",null,[],3553,"ICMSProdutoCategoria",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2965,98,"PRODUTOID","Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],2965,"ProdutoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2961,99,"PRODUTODESCRICAORESUMIDA","","","ProdutoDescricaoResumida","svchar",0,"px",40,40,"left",null,[],2961,"ProdutoDescricaoResumida",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3558,100,"ICMSPRODUTOCFOPCODIGO","","","ICMSProdutoCFOPCodigo","int",0,"px",4,4,"right",null,[],3558,"ICMSProdutoCFOPCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3554,101,"ICMSPRODUTOALIQUOTAICMS","Aliq. ICMS","","ICMSProdutoAliquotaICMS","decimal",0,"px",6,6,"right",null,[],3554,"ICMSProdutoAliquotaICMS",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3555,102,"ICMSPRODUTOPERCREDICMS","%Red. ICMS","","ICMSProdutoPercRedICMS","decimal",0,"px",6,6,"right",null,[],3555,"ICMSProdutoPercRedICMS",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3556,103,"ICMSPRODUTOALIQUOTAICMSST","Aliq. ICMS ST","","ICMSProdutoAliquotaICMSST","decimal",0,"px",6,6,"right",null,[],3556,"ICMSProdutoAliquotaICMSST",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpduplica","vBMPDUPLICA",104,0,"px",17,"px","e27oe2_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",105,0,"px",17,"px","e24oe2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",106,0,"px",17,"px","e25oe2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",107,0,"px",17,"px","e26oe2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3566,108,"SITUACAOTRIBUTARIACODIGO","Código da Situação Tributária","","SituacaoTributariaCodigo","char",0,"px",4,4,"left",null,[],3566,"SituacaoTributariaCodigo",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3564,109,"SITUACAOTRIBUTARIATIPO","Tipo de Situação Tributária","SituacaoTributariaTipo","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit(6419,110,"ICMSPRODUTOEMPRESAID","Empresa do ICMS Produto","","ICMSProdutoEmpresaId","char",0,"px",10,10,"left",null,[],6419,"ICMSProdutoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAOTRIBUTARIATIPO",gxz:"ZV27SituacaoTributariaTipo",gxold:"OV27SituacaoTributariaTipo",gxvar:"AV27SituacaoTributariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27SituacaoTributariaTipo=Value},v2z:function(Value){gx.O.ZV27SituacaoTributariaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOTRIBUTARIATIPO",gx.O.AV27SituacaoTributariaTipo)},c2v:function(){gx.O.AV27SituacaoTributariaTipo=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPO")},nac:gx.falseFn};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TABLE8",grid:0};
   GXValidFnc[16]={fld:"TABLE9",grid:0};
   GXValidFnc[19]={fld:"ORDEREDTEXT", format:0,grid:0};
   GXValidFnc[21]={fld:"TABLE11",grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOTRIBUTARIATIPOD",gxz:"ZV39SituacaoTributariaTipoD",gxold:"OV39SituacaoTributariaTipoD",gxvar:"AV39SituacaoTributariaTipoD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39SituacaoTributariaTipoD=Value},v2z:function(Value){gx.O.ZV39SituacaoTributariaTipoD=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOTRIBUTARIATIPOD",gx.O.AV39SituacaoTributariaTipoD,0)},c2v:function(){gx.O.AV39SituacaoTributariaTipoD=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPOD")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSITTRIB",gxz:"ZV43TipoSitTrib",gxold:"OV43TipoSitTrib",gxvar:"AV43TipoSitTrib",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV43TipoSitTrib=Value},v2z:function(Value){gx.O.ZV43TipoSitTrib=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOSITTRIB",gx.O.AV43TipoSitTrib)},c2v:function(){gx.O.AV43TipoSitTrib=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSITTRIB")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLE12",grid:0};
   GXValidFnc[31]={fld:"TABLE3",grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAOTRIBUTARIACODIGO",gxz:"ZV28SituacaoTributariaCodigo",gxold:"OV28SituacaoTributariaCodigo",gxvar:"AV28SituacaoTributariaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28SituacaoTributariaCodigo=Value},v2z:function(Value){gx.O.ZV28SituacaoTributariaCodigo=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOTRIBUTARIACODIGO",gx.O.AV28SituacaoTributariaCodigo,0)},c2v:function(){gx.O.AV28SituacaoTributariaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIACODIGO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:130,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOTRIBUTARIADESCRICAO",gxz:"ZV48SituacaoTributariaDescricao",gxold:"OV48SituacaoTributariaDescricao",gxvar:"AV48SituacaoTributariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48SituacaoTributariaDescricao=Value},v2z:function(Value){gx.O.ZV48SituacaoTributariaDescricao=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOTRIBUTARIADESCRICAO",gx.O.AV48SituacaoTributariaDescricao,0)},c2v:function(){gx.O.AV48SituacaoTributariaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ufdestino,isvalid:null,rgrid:[this.GridContainer],fld:"vUFDESTINO",gxz:"ZV29UfDestino",gxold:"OV29UfDestino",gxvar:"AV29UfDestino",ucs:[],op:[43],ip:[43],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29UfDestino=Value},v2z:function(Value){gx.O.ZV29UfDestino=Value},v2c:function(){gx.fn.setComboBoxValue("vUFDESTINO",gx.O.AV29UfDestino)},c2v:function(){gx.O.AV29UfDestino=this.val()},val:function(){return gx.fn.getControlValue("vUFDESTINO")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOSITTRIB",gxz:"ZV44CodigoSitTrib",gxold:"OV44CodigoSitTrib",gxvar:"AV44CodigoSitTrib",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44CodigoSitTrib=Value},v2z:function(Value){gx.O.ZV44CodigoSitTrib=Value},v2c:function(){gx.fn.setControlValue("vCODIGOSITTRIB",gx.O.AV44CodigoSitTrib,0)},c2v:function(){gx.O.AV44CodigoSitTrib=this.val()},val:function(){return gx.fn.getControlValue("vCODIGOSITTRIB")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLE10",grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPRODUTOID",gxz:"ZV30ProdutoId",gxold:"OV30ProdutoId",gxvar:"AV30ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV30ProdutoId,0)},c2v:function(){gx.O.AV30ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"PROMPTPROD",grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV36ProdutoDescricao",gxold:"OV36ProdutoDescricao",gxvar:"AV36ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV36ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV36ProdutoDescricao,0)},c2v:function(){gx.O.AV36ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TABLE4",grid:0};
   GXValidFnc[68]={fld:"TABLE6",grid:0};
   GXValidFnc[71]={fld:"IMAGE2",grid:0};
   GXValidFnc[73]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[75]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[77]={fld:"IMAGE1",grid:0};
   GXValidFnc[79]={fld:"BMPGERAICMSPADRAO",grid:0};
   GXValidFnc[81]={fld:"BTNEXCTDS",grid:0};
   GXValidFnc[83]={fld:"BTNHELP",grid:0};
   GXValidFnc[85]={fld:"TABLE5",grid:0};
   GXValidFnc[88]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[90]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOSEQUENCIA",gxz:"Z3567ICMSProdutoSequencia",gxold:"O3567ICMSProdutoSequencia",gxvar:"A3567ICMSProdutoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3567ICMSProdutoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3567ICMSProdutoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ICMSPRODUTOSEQUENCIA",row || gx.fn.currentGridRowImpl(94),gx.O.A3567ICMSProdutoSequencia,0)},c2v:function(){gx.O.A3567ICMSProdutoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ICMSPRODUTOSEQUENCIA",row || gx.fn.currentGridRowImpl(94),'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOUFDESTINO",gxz:"Z3552ICMSProdutoUFDestino",gxold:"O3552ICMSProdutoUFDestino",gxvar:"A3552ICMSProdutoUFDestino",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3552ICMSProdutoUFDestino=Value},v2z:function(Value){gx.O.Z3552ICMSProdutoUFDestino=Value},v2c:function(row){gx.fn.setGridComboBoxValue("ICMSPRODUTOUFDESTINO",row || gx.fn.currentGridRowImpl(94),gx.O.A3552ICMSProdutoUFDestino);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3552ICMSProdutoUFDestino=this.val()},val:function(row){return gx.fn.getGridControlValue("ICMSPRODUTOUFDESTINO",row || gx.fn.currentGridRowImpl(94))},nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOCATEGORIA",gxz:"Z3553ICMSProdutoCategoria",gxold:"O3553ICMSProdutoCategoria",gxvar:"A3553ICMSProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3553ICMSProdutoCategoria=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3553ICMSProdutoCategoria=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ICMSPRODUTOCATEGORIA",row || gx.fn.currentGridRowImpl(94),gx.O.A3553ICMSProdutoCategoria,0)},c2v:function(){gx.O.A3553ICMSProdutoCategoria=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ICMSPRODUTOCATEGORIA",row || gx.fn.currentGridRowImpl(94),'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:this.Valid_Produtoid,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOID",row || gx.fn.currentGridRowImpl(94),gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOID",row || gx.fn.currentGridRowImpl(94),'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTODESCRICAORESUMIDA",gxz:"Z2961ProdutoDescricaoResumida",gxold:"O2961ProdutoDescricaoResumida",gxvar:"A2961ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2961ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.Z2961ProdutoDescricaoResumida=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(94),gx.O.A2961ProdutoDescricaoResumida,0)},c2v:function(){gx.O.A2961ProdutoDescricaoResumida=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(94))},nac:gx.falseFn};
   GXValidFnc[100]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOCFOPCODIGO",gxz:"Z3558ICMSProdutoCFOPCodigo",gxold:"O3558ICMSProdutoCFOPCodigo",gxvar:"A3558ICMSProdutoCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3558ICMSProdutoCFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3558ICMSProdutoCFOPCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ICMSPRODUTOCFOPCODIGO",row || gx.fn.currentGridRowImpl(94),gx.O.A3558ICMSProdutoCFOPCodigo,0)},c2v:function(){gx.O.A3558ICMSProdutoCFOPCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ICMSPRODUTOCFOPCODIGO",row || gx.fn.currentGridRowImpl(94),'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOALIQUOTAICMS",gxz:"Z3554ICMSProdutoAliquotaICMS",gxold:"O3554ICMSProdutoAliquotaICMS",gxvar:"A3554ICMSProdutoAliquotaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3554ICMSProdutoAliquotaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3554ICMSProdutoAliquotaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ICMSPRODUTOALIQUOTAICMS",row || gx.fn.currentGridRowImpl(94),gx.O.A3554ICMSProdutoAliquotaICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3554ICMSProdutoAliquotaICMS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ICMSPRODUTOALIQUOTAICMS",row || gx.fn.currentGridRowImpl(94),'.',',')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOPERCREDICMS",gxz:"Z3555ICMSProdutoPercRedICMS",gxold:"O3555ICMSProdutoPercRedICMS",gxvar:"A3555ICMSProdutoPercRedICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3555ICMSProdutoPercRedICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3555ICMSProdutoPercRedICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ICMSPRODUTOPERCREDICMS",row || gx.fn.currentGridRowImpl(94),gx.O.A3555ICMSProdutoPercRedICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3555ICMSProdutoPercRedICMS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ICMSPRODUTOPERCREDICMS",row || gx.fn.currentGridRowImpl(94),'.',',')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOALIQUOTAICMSST",gxz:"Z3556ICMSProdutoAliquotaICMSST",gxold:"O3556ICMSProdutoAliquotaICMSST",gxvar:"A3556ICMSProdutoAliquotaICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3556ICMSProdutoAliquotaICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3556ICMSProdutoAliquotaICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ICMSPRODUTOALIQUOTAICMSST",row || gx.fn.currentGridRowImpl(94),gx.O.A3556ICMSProdutoAliquotaICMSST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3556ICMSProdutoAliquotaICMSST=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ICMSPRODUTOALIQUOTAICMSST",row || gx.fn.currentGridRowImpl(94),'.',',')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDUPLICA",gxz:"ZV38bmpDuplica",gxold:"OV38bmpDuplica",gxvar:"AV38bmpDuplica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV38bmpDuplica=Value},v2z:function(Value){gx.O.ZV38bmpDuplica=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDUPLICA",row || gx.fn.currentGridRowImpl(94),gx.O.AV38bmpDuplica,gx.O.AV68Bmpduplica_GXI)},c2v:function(){gx.O.AV68Bmpduplica_GXI=this.val_GXI();gx.O.AV38bmpDuplica=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDUPLICA",row || gx.fn.currentGridRowImpl(94))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDUPLICA_GXI",row || gx.fn.currentGridRowImpl(94))}, gxvar_GXI:'AV68Bmpduplica_GXI',nac:gx.falseFn};
   GXValidFnc[105]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(94),gx.O.AV7bmpAlt,gx.O.AV65Bmpalt_GXI)},c2v:function(){gx.O.AV65Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(94))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(94))}, gxvar_GXI:'AV65Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[106]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(94),gx.O.AV8bmpExc,gx.O.AV66Bmpexc_GXI)},c2v:function(){gx.O.AV66Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(94))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(94))}, gxvar_GXI:'AV66Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[107]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(94),gx.O.AV16bmpCon,gx.O.AV67Bmpcon_GXI)},c2v:function(){gx.O.AV67Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(94))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(94))}, gxvar_GXI:'AV67Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[108]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIACODIGO",gxz:"Z3566SituacaoTributariaCodigo",gxold:"O3566SituacaoTributariaCodigo",gxvar:"A3566SituacaoTributariaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3566SituacaoTributariaCodigo=Value},v2z:function(Value){gx.O.Z3566SituacaoTributariaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOTRIBUTARIACODIGO",row || gx.fn.currentGridRowImpl(94),gx.O.A3566SituacaoTributariaCodigo,0)},c2v:function(){gx.O.A3566SituacaoTributariaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIACODIGO",row || gx.fn.currentGridRowImpl(94))},nac:gx.falseFn};
   GXValidFnc[109]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIATIPO",gxz:"Z3564SituacaoTributariaTipo",gxold:"O3564SituacaoTributariaTipo",gxvar:"A3564SituacaoTributariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3564SituacaoTributariaTipo=Value},v2z:function(Value){gx.O.Z3564SituacaoTributariaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SITUACAOTRIBUTARIATIPO",row || gx.fn.currentGridRowImpl(94),gx.O.A3564SituacaoTributariaTipo)},c2v:function(){gx.O.A3564SituacaoTributariaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIATIPO",row || gx.fn.currentGridRowImpl(94))},nac:gx.falseFn};
   GXValidFnc[110]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:94,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOEMPRESAID",gxz:"Z6419ICMSProdutoEmpresaId",gxold:"O6419ICMSProdutoEmpresaId",gxvar:"A6419ICMSProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6419ICMSProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z6419ICMSProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ICMSPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(94),gx.O.A6419ICMSProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6419ICMSProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ICMSPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(94))},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV53ProdutoReferencia",gxold:"OV53ProdutoReferencia",gxvar:"AV53ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV53ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV53ProdutoReferencia,0)},c2v:function(){gx.O.AV53ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV52CodigoBarrasProdutoBarra",gxold:"OV52CodigoBarrasProdutoBarra",gxvar:"AV52CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV52CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV52CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV50IntAuxIn",gxold:"OV50IntAuxIn",gxvar:"AV50IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV50IntAuxIn,0)},c2v:function(){gx.O.AV50IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUXIN",gxz:"ZV51CharAuxIn",gxold:"OV51CharAuxIn",gxvar:"AV51CharAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51CharAuxIn=Value},v2z:function(Value){gx.O.ZV51CharAuxIn=Value},v2c:function(){gx.fn.setControlValue("vCHARAUXIN",gx.O.AV51CharAuxIn,0)},c2v:function(){gx.O.AV51CharAuxIn=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUXIN")},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV37ProdutoEmpresaId",gxold:"OV37ProdutoEmpresaId",gxvar:"AV37ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV37ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV37ProdutoEmpresaId,0)},c2v:function(){gx.O.AV37ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"JS", format:2,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOSUB",gxz:"ZV55GrupoSub",gxold:"OV55GrupoSub",gxvar:"AV55GrupoSub",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55GrupoSub=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55GrupoSub=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOSUB",gx.O.AV55GrupoSub,0)},c2v:function(){gx.O.AV55GrupoSub=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOSUB",'.')},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV54LoteProdutoCombinacao",gxold:"OV54LoteProdutoCombinacao",gxvar:"AV54LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV54LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV54LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV54LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV56SNVenda",gxold:"OV56SNVenda",gxvar:"AV56SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56SNVenda=Value},v2z:function(Value){gx.O.ZV56SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV56SNVenda,0)},c2v:function(){gx.O.AV56SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV57QtdeChar",gxold:"OV57QtdeChar",gxvar:"AV57QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV57QtdeChar,0)},c2v:function(){gx.O.AV57QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27SituacaoTributariaTipo = "" ;
   this.ZV27SituacaoTributariaTipo = "" ;
   this.OV27SituacaoTributariaTipo = "" ;
   this.AV39SituacaoTributariaTipoD = "" ;
   this.ZV39SituacaoTributariaTipoD = "" ;
   this.OV39SituacaoTributariaTipoD = "" ;
   this.AV43TipoSitTrib = "" ;
   this.ZV43TipoSitTrib = "" ;
   this.OV43TipoSitTrib = "" ;
   this.AV28SituacaoTributariaCodigo = "" ;
   this.ZV28SituacaoTributariaCodigo = "" ;
   this.OV28SituacaoTributariaCodigo = "" ;
   this.AV48SituacaoTributariaDescricao = "" ;
   this.ZV48SituacaoTributariaDescricao = "" ;
   this.OV48SituacaoTributariaDescricao = "" ;
   this.AV29UfDestino = "" ;
   this.ZV29UfDestino = "" ;
   this.OV29UfDestino = "" ;
   this.AV44CodigoSitTrib = "" ;
   this.ZV44CodigoSitTrib = "" ;
   this.OV44CodigoSitTrib = "" ;
   this.AV30ProdutoId = 0 ;
   this.ZV30ProdutoId = 0 ;
   this.OV30ProdutoId = 0 ;
   this.AV36ProdutoDescricao = "" ;
   this.ZV36ProdutoDescricao = "" ;
   this.OV36ProdutoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3567ICMSProdutoSequencia = 0 ;
   this.O3567ICMSProdutoSequencia = 0 ;
   this.Z3552ICMSProdutoUFDestino = "" ;
   this.O3552ICMSProdutoUFDestino = "" ;
   this.Z3553ICMSProdutoCategoria = 0 ;
   this.O3553ICMSProdutoCategoria = 0 ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.Z2961ProdutoDescricaoResumida = "" ;
   this.O2961ProdutoDescricaoResumida = "" ;
   this.Z3558ICMSProdutoCFOPCodigo = 0 ;
   this.O3558ICMSProdutoCFOPCodigo = 0 ;
   this.Z3554ICMSProdutoAliquotaICMS = 0 ;
   this.O3554ICMSProdutoAliquotaICMS = 0 ;
   this.Z3555ICMSProdutoPercRedICMS = 0 ;
   this.O3555ICMSProdutoPercRedICMS = 0 ;
   this.Z3556ICMSProdutoAliquotaICMSST = 0 ;
   this.O3556ICMSProdutoAliquotaICMSST = 0 ;
   this.ZV38bmpDuplica = "" ;
   this.OV38bmpDuplica = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z3566SituacaoTributariaCodigo = "" ;
   this.O3566SituacaoTributariaCodigo = "" ;
   this.Z3564SituacaoTributariaTipo = "" ;
   this.O3564SituacaoTributariaTipo = "" ;
   this.Z6419ICMSProdutoEmpresaId = "" ;
   this.O6419ICMSProdutoEmpresaId = "" ;
   this.AV53ProdutoReferencia = "" ;
   this.ZV53ProdutoReferencia = "" ;
   this.OV53ProdutoReferencia = "" ;
   this.AV52CodigoBarrasProdutoBarra = 0 ;
   this.ZV52CodigoBarrasProdutoBarra = 0 ;
   this.OV52CodigoBarrasProdutoBarra = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV50IntAuxIn = 0 ;
   this.ZV50IntAuxIn = 0 ;
   this.OV50IntAuxIn = 0 ;
   this.AV51CharAuxIn = "" ;
   this.ZV51CharAuxIn = "" ;
   this.OV51CharAuxIn = "" ;
   this.AV37ProdutoEmpresaId = "" ;
   this.ZV37ProdutoEmpresaId = "" ;
   this.OV37ProdutoEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV55GrupoSub = 0 ;
   this.ZV55GrupoSub = 0 ;
   this.OV55GrupoSub = 0 ;
   this.AV54LoteProdutoCombinacao = "" ;
   this.ZV54LoteProdutoCombinacao = "" ;
   this.OV54LoteProdutoCombinacao = "" ;
   this.AV56SNVenda = "" ;
   this.ZV56SNVenda = "" ;
   this.OV56SNVenda = "" ;
   this.AV57QtdeChar = 0 ;
   this.ZV57QtdeChar = 0 ;
   this.OV57QtdeChar = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV27SituacaoTributariaTipo = "" ;
   this.AV39SituacaoTributariaTipoD = "" ;
   this.AV43TipoSitTrib = "" ;
   this.AV28SituacaoTributariaCodigo = "" ;
   this.AV48SituacaoTributariaDescricao = "" ;
   this.AV29UfDestino = "" ;
   this.AV44CodigoSitTrib = "" ;
   this.AV30ProdutoId = 0 ;
   this.AV36ProdutoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV53ProdutoReferencia = "" ;
   this.AV52CodigoBarrasProdutoBarra = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV50IntAuxIn = 0 ;
   this.AV51CharAuxIn = "" ;
   this.AV37ProdutoEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV55GrupoSub = 0 ;
   this.AV54LoteProdutoCombinacao = "" ;
   this.AV56SNVenda = "" ;
   this.AV57QtdeChar = 0 ;
   this.AV49SituacaoTributariaTipoTributacao = "" ;
   this.AV32SituacaoTributariaSnReducao = "" ;
   this.AV31SituacaoTributariaSnSubstit = "" ;
   this.AV42ProdutoCodigo = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3567ICMSProdutoSequencia = 0 ;
   this.A3552ICMSProdutoUFDestino = "" ;
   this.A3553ICMSProdutoCategoria = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3558ICMSProdutoCFOPCodigo = 0 ;
   this.A3554ICMSProdutoAliquotaICMS = 0 ;
   this.A3555ICMSProdutoPercRedICMS = 0 ;
   this.A3556ICMSProdutoAliquotaICMSST = 0 ;
   this.AV38bmpDuplica = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3566SituacaoTributariaCodigo = "" ;
   this.A3564SituacaoTributariaTipo = "" ;
   this.A6419ICMSProdutoEmpresaId = "" ;
   this.AV58SnRecuperaFiltro = "" ;
   this.AV63Pgmname = "" ;
   this.Events = {"e11oe2_client": ["'ANTERIOR'", true] ,"e12oe2_client": ["'PROXIMO'", true] ,"e17oe2_client": ["VPAGINA.CLICK", true] ,"e13oe2_client": ["'NOVO'", true] ,"e14oe2_client": ["'FECHAR'", true] ,"e15oe2_client": ["'IMPRIMIR'", true] ,"e16oe2_client": ["'PROCURAR'", true] ,"e24oe2_client": ["'ALTERAR'", true] ,"e25oe2_client": ["'EXCLUIR'", true] ,"e26oe2_client": ["'CONSULTAR'", true] ,"e27oe2_client": ["'DUPLICAR'", true] ,"e18oe2_client": ["'GERAICMSPRODUTO'", true] ,"e19oe2_client": ["'EXCLUIRTODOS'", true] ,"e28oe2_client": ["ENTER", true] ,"e29oe2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplica',fld:'vBMPDUPLICA'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICA","Tooltiptext")',ctrl:'vBMPDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMS","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOPERCREDICMS","Visible")',ctrl:'ICMSPRODUTOPERCREDICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMSST","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMSST',prop:'Visible'},{av:'AV49SituacaoTributariaTipoTributacao',fld:'vSITUACAOTRIBUTARIATIPOTRIBUTACAO',hsh:true},{av:'AV32SituacaoTributariaSnReducao',fld:'vSITUACAOTRIBUTARIASNREDUCAO',hsh:true},{av:'AV31SituacaoTributariaSnSubstit',fld:'vSITUACAOTRIBUTARIASNSUBSTIT',hsh:true},{av:'AV58SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true}],[{ctrl:'vSITUACAOTRIBUTARIATIPO'},{av:'AV39SituacaoTributariaTipoD',fld:'vSITUACAOTRIBUTARIATIPOD'},{ctrl:'vTIPOSITTRIB'},{av:'gx.fn.getCtrlProperty("vCODIGOSITTRIB","Visible")',ctrl:'vCODIGOSITTRIB',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSITUACAOTRIBUTARIATIPOD","Visible")',ctrl:'vSITUACAOTRIBUTARIATIPOD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSITUACAOTRIBUTARIACODIGO","Visible")',ctrl:'vSITUACAOTRIBUTARIACODIGO',prop:'Visible'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV46SnErro',fld:'vSNERRO'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplica',fld:'vBMPDUPLICA'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICA","Tooltiptext")',ctrl:'vBMPDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMS","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOPERCREDICMS","Visible")',ctrl:'ICMSPRODUTOPERCREDICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMSST","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMSST',prop:'Visible'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV49SituacaoTributariaTipoTributacao',fld:'vSITUACAOTRIBUTARIATIPOTRIBUTACAO',hsh:true},{av:'AV32SituacaoTributariaSnReducao',fld:'vSITUACAOTRIBUTARIASNREDUCAO',hsh:true},{av:'AV31SituacaoTributariaSnSubstit',fld:'vSITUACAOTRIBUTARIASNSUBSTIT',hsh:true},{av:'AV58SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMS","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOPERCREDICMS","Visible")',ctrl:'ICMSPRODUTOPERCREDICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMSST","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMSST',prop:'Visible'},{ctrl:'ICMSPRODUTOSEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOSEQUENCIA","Title")',ctrl:'ICMSPRODUTOSEQUENCIA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ICMSPRODUTOUFDESTINO'},{ctrl:'ICMSPRODUTOCATEGORIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOCATEGORIA","Title")',ctrl:'ICMSPRODUTOCATEGORIA',prop:'Title'},{ctrl:'PRODUTODESCRICAORESUMIDA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PRODUTODESCRICAORESUMIDA","Title")',ctrl:'PRODUTODESCRICAORESUMIDA',prop:'Title'},{ctrl:'ICMSPRODUTOCFOPCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOCFOPCODIGO","Title")',ctrl:'ICMSPRODUTOCFOPCODIGO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV58SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV36ProdutoDescricao',fld:'vPRODUTODESCRICAO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplica',fld:'vBMPDUPLICA'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICA","Tooltiptext")',ctrl:'vBMPDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMS","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOPERCREDICMS","Visible")',ctrl:'ICMSPRODUTOPERCREDICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMSST","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMSST',prop:'Visible'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV49SituacaoTributariaTipoTributacao',fld:'vSITUACAOTRIBUTARIATIPOTRIBUTACAO',hsh:true},{av:'AV32SituacaoTributariaSnReducao',fld:'vSITUACAOTRIBUTARIASNREDUCAO',hsh:true},{av:'AV31SituacaoTributariaSnSubstit',fld:'vSITUACAOTRIBUTARIASNSUBSTIT',hsh:true},{av:'AV58SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36ProdutoDescricao',fld:'vPRODUTODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplica',fld:'vBMPDUPLICA'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICA","Tooltiptext")',ctrl:'vBMPDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMS","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOPERCREDICMS","Visible")',ctrl:'ICMSPRODUTOPERCREDICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMSST","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMSST',prop:'Visible'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV49SituacaoTributariaTipoTributacao',fld:'vSITUACAOTRIBUTARIATIPOTRIBUTACAO',hsh:true},{av:'AV32SituacaoTributariaSnReducao',fld:'vSITUACAOTRIBUTARIASNREDUCAO',hsh:true},{av:'AV31SituacaoTributariaSnSubstit',fld:'vSITUACAOTRIBUTARIASNSUBSTIT',hsh:true},{av:'AV58SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV36ProdutoDescricao',fld:'vPRODUTODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplica',fld:'vBMPDUPLICA'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICA","Tooltiptext")',ctrl:'vBMPDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMS","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOPERCREDICMS","Visible")',ctrl:'ICMSPRODUTOPERCREDICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMSST","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMSST',prop:'Visible'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV49SituacaoTributariaTipoTributacao',fld:'vSITUACAOTRIBUTARIATIPOTRIBUTACAO',hsh:true},{av:'AV32SituacaoTributariaSnReducao',fld:'vSITUACAOTRIBUTARIASNREDUCAO',hsh:true},{av:'AV31SituacaoTributariaSnSubstit',fld:'vSITUACAOTRIBUTARIASNSUBSTIT',hsh:true},{av:'AV58SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36ProdutoDescricao',fld:'vPRODUTODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV36ProdutoDescricao',fld:'vPRODUTODESCRICAO'},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true}],[{av:'AV46SnErro',fld:'vSNERRO'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV64Pgmdesc',fld:'vPGMDESC'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true}],[{av:'AV46SnErro',fld:'vSNERRO'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV59QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplica',fld:'vBMPDUPLICA'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICA","Tooltiptext")',ctrl:'vBMPDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMS","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOPERCREDICMS","Visible")',ctrl:'ICMSPRODUTOPERCREDICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMSST","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMSST',prop:'Visible'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV49SituacaoTributariaTipoTributacao',fld:'vSITUACAOTRIBUTARIATIPOTRIBUTACAO',hsh:true},{av:'AV32SituacaoTributariaSnReducao',fld:'vSITUACAOTRIBUTARIASNREDUCAO',hsh:true},{av:'AV31SituacaoTributariaSnSubstit',fld:'vSITUACAOTRIBUTARIASNSUBSTIT',hsh:true},{av:'AV58SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36ProdutoDescricao',fld:'vPRODUTODESCRICAO'}],[{av:'AV46SnErro',fld:'vSNERRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'A3567ICMSProdutoSequencia',fld:'ICMSPRODUTOSEQUENCIA'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV36ProdutoDescricao',fld:'vPRODUTODESCRICAO'},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true}],[{av:'AV46SnErro',fld:'vSNERRO'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'A3567ICMSProdutoSequencia',fld:'ICMSPRODUTOSEQUENCIA'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'A3567ICMSProdutoSequencia',fld:'ICMSPRODUTOSEQUENCIA'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV36ProdutoDescricao',fld:'vPRODUTODESCRICAO'},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true}],[{av:'AV46SnErro',fld:'vSNERRO'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'A3567ICMSProdutoSequencia',fld:'ICMSPRODUTOSEQUENCIA'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'A3567ICMSProdutoSequencia',fld:'ICMSPRODUTOSEQUENCIA'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV36ProdutoDescricao',fld:'vPRODUTODESCRICAO'},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true}],[{av:'AV46SnErro',fld:'vSNERRO'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'A3567ICMSProdutoSequencia',fld:'ICMSPRODUTOSEQUENCIA'},{av:'AV44CodigoSitTrib',fld:'vCODIGOSITTRIB'},{av:'AV43TipoSitTrib',fld:'vTIPOSITTRIB'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplica',fld:'vBMPDUPLICA'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICA","Tooltiptext")',ctrl:'vBMPDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMS","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOPERCREDICMS","Visible")',ctrl:'ICMSPRODUTOPERCREDICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMSST","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMSST',prop:'Visible'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV49SituacaoTributariaTipoTributacao',fld:'vSITUACAOTRIBUTARIATIPOTRIBUTACAO',hsh:true},{av:'AV32SituacaoTributariaSnReducao',fld:'vSITUACAOTRIBUTARIASNREDUCAO',hsh:true},{av:'AV31SituacaoTributariaSnSubstit',fld:'vSITUACAOTRIBUTARIASNSUBSTIT',hsh:true},{av:'AV58SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3552ICMSProdutoUFDestino',fld:'ICMSPRODUTOUFDESTINO'},{av:'A3553ICMSProdutoCategoria',fld:'ICMSPRODUTOCATEGORIA'},{av:'A3558ICMSProdutoCFOPCodigo',fld:'ICMSPRODUTOCFOPCODIGO'},{av:'A3567ICMSProdutoSequencia',fld:'ICMSPRODUTOSEQUENCIA'}],[{av:'A3567ICMSProdutoSequencia',fld:'ICMSPRODUTOSEQUENCIA'},{av:'A3558ICMSProdutoCFOPCodigo',fld:'ICMSPRODUTOCFOPCODIGO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3553ICMSProdutoCategoria',fld:'ICMSPRODUTOCATEGORIA'},{av:'A3552ICMSProdutoUFDestino',fld:'ICMSPRODUTOUFDESTINO'},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true}]];
   this.EvtParms["'GERAICMSPRODUTO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29UfDestino',fld:'vUFDESTINO'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplica',fld:'vBMPDUPLICA'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICA","Tooltiptext")',ctrl:'vBMPDUPLICA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMS","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOPERCREDICMS","Visible")',ctrl:'ICMSPRODUTOPERCREDICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ICMSPRODUTOALIQUOTAICMSST","Visible")',ctrl:'ICMSPRODUTOALIQUOTAICMSST',prop:'Visible'},{av:'AV42ProdutoCodigo',fld:'vPRODUTOCODIGO',hsh:true},{av:'AV49SituacaoTributariaTipoTributacao',fld:'vSITUACAOTRIBUTARIATIPOTRIBUTACAO',hsh:true},{av:'AV32SituacaoTributariaSnReducao',fld:'vSITUACAOTRIBUTARIASNREDUCAO',hsh:true},{av:'AV31SituacaoTributariaSnSubstit',fld:'vSITUACAOTRIBUTARIASNSUBSTIT',hsh:true},{av:'AV58SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[]];
   this.EvtParms["'EXCLUIRTODOS'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV28SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true}],[]];
   this.setPrompt("PROMPTPROD", [51,125,125,125,126,116,117]);
   this.setVCMap("AV42ProdutoCodigo", "vPRODUTOCODIGO", 0, "int");
   this.setVCMap("AV49SituacaoTributariaTipoTributacao", "vSITUACAOTRIBUTARIATIPOTRIBUTACAO", 0, "char");
   this.setVCMap("AV32SituacaoTributariaSnReducao", "vSITUACAOTRIBUTARIASNREDUCAO", 0, "char");
   this.setVCMap("AV31SituacaoTributariaSnSubstit", "vSITUACAOTRIBUTARIASNSUBSTIT", 0, "char");
   this.setVCMap("AV58SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV63Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV42ProdutoCodigo", "vPRODUTOCODIGO", 0, "int");
   this.setVCMap("AV49SituacaoTributariaTipoTributacao", "vSITUACAOTRIBUTARIATIPOTRIBUTACAO", 0, "char");
   this.setVCMap("AV32SituacaoTributariaSnReducao", "vSITUACAOTRIBUTARIASNREDUCAO", 0, "char");
   this.setVCMap("AV31SituacaoTributariaSnSubstit", "vSITUACAOTRIBUTARIASNSUBSTIT", 0, "char");
   this.setVCMap("AV58SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV63Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[6]);
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar(this.GXValidFnc[124]);
   GridContainer.addRefreshingVar(this.GXValidFnc[7]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV38bmpDuplica", rfrProp:"Value", gxAttId:"Bmpduplica"});
   GridContainer.addRefreshingVar({rfrVar:"AV38bmpDuplica", rfrProp:"Tooltiptext", gxAttId:"Bmpduplica"});
   GridContainer.addRefreshingVar({rfrVar:"A3554ICMSProdutoAliquotaICMS", rfrProp:"Visible", gxAttId:"3554"});
   GridContainer.addRefreshingVar({rfrVar:"A3555ICMSProdutoPercRedICMS", rfrProp:"Visible", gxAttId:"3555"});
   GridContainer.addRefreshingVar({rfrVar:"A3556ICMSProdutoAliquotaICMSST", rfrProp:"Visible", gxAttId:"3556"});
   GridContainer.addRefreshingVar({rfrVar:"AV42ProdutoCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"AV49SituacaoTributariaTipoTributacao"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SituacaoTributariaSnReducao"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SituacaoTributariaSnSubstit"});
   GridContainer.addRefreshingVar({rfrVar:"AV58SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV63Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[122]);
   GridContainer.addRefreshingVar({rfrVar:"A2965ProdutoId", rfrProp:"Value", gxAttId:"2965"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hicmsproduto());
