/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:20:18.62
*/
gx.evt.autoSkip = false;
gx.define('hlote', false, function () {
   this.ServerClass =  "hlote" ;
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
      this.AV74TPDESCRICAO=gx.fn.getControlValue("vTPDESCRICAO") ;
      this.AV75SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A5318SituacaoEmpresaId=gx.fn.getControlValue("SITUACAOEMPRESAID") ;
      this.A5350SituacaoId=gx.fn.getIntegerValue("SITUACAOID",'.') ;
      this.A5344SituacaoDescricao=gx.fn.getControlValue("SITUACAODESCRICAO") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.AV56LoteamentoIdentificacaoLotes=gx.fn.getControlValue("vLOTEAMENTOIDENTIFICACAOLOTES") ;
      this.AV73LoteamentoTipoValor=gx.fn.getControlValue("vLOTEAMENTOTIPOVALOR") ;
   };
   this.Validv_Situacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSITUACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Clientereservaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLIENTERESERVAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Situacaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSITUACAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ug2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12ug2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16ug2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13ug2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14ug2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ug2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19ug2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20ug2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21ug2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22ug2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24ug2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25ug2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,21,24,26,29,31,33,36,38,41,43,46,48,51,53,58,61,64,66,68,70,72,75,77,78,82,83,84,85,86,87,88,89,95,96,97,99,100,101,102];
   this.GXLastCtrlId =102;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",81,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlote",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5316,82,"LOTENUMLOTE","","","LoteNumLote","char",0,"px",5,5,"left",null,[],5316,"LoteNumLote",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5317,83,"LOTENUMQUADRA","","","LoteNumQuadra","char",0,"px",5,5,"left",null,[],5317,"LoteNumQuadra",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5295,84,"LOTEAREATOTAL","","","LoteAreaTotal","decimal",0,"px",11,11,"right",null,[],5295,"LoteAreaTotal",true,3,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5299,85,"LOTESITUACAODESCRICAO","","","LoteSituacaoDescricao","char",0,"px",30,30,"left",null,[],5299,"LoteSituacaoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",86,0,"px",17,"px","e19ug2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",87,0,"px",17,"px","e20ug2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",88,0,"px",17,"px","e21ug2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5309,89,"LOTEVLRMETROVALOR","Valor Lote","","LoteVlrMetroValor","decimal",0,"px",22,22,"right",null,[],5309,"LoteVlrMetroValor",false,2,false,false,"ApenasLeitura",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TXTLOTEMP", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE8",grid:0};
   GXValidFnc[14]={fld:"TABLE10",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTEAMENTOID",gxz:"ZV72LoteamentoId",gxold:"OV72LoteamentoId",gxvar:"AV72LoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72LoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72LoteamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOID",gx.O.AV72LoteamentoId,0)},c2v:function(){gx.O.AV72LoteamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTEAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEAMENTONOME",gxz:"ZV41LoteamentoNome",gxold:"OV41LoteamentoNome",gxvar:"AV41LoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41LoteamentoNome=Value},v2z:function(Value){gx.O.ZV41LoteamentoNome=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTONOME",gx.O.AV41LoteamentoNome,0)},c2v:function(){gx.O.AV41LoteamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE9",grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTENUMLOTE",gxz:"ZV43LoteNumLote",gxold:"OV43LoteNumLote",gxvar:"AV43LoteNumLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43LoteNumLote=Value},v2z:function(Value){gx.O.ZV43LoteNumLote=Value},v2c:function(){gx.fn.setControlValue("vLOTENUMLOTE",gx.O.AV43LoteNumLote,0)},c2v:function(){gx.O.AV43LoteNumLote=this.val()},val:function(){return gx.fn.getControlValue("vLOTENUMLOTE")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTENUMQUADRA",gxz:"ZV44LoteNumQuadra",gxold:"OV44LoteNumQuadra",gxvar:"AV44LoteNumQuadra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44LoteNumQuadra=Value},v2z:function(Value){gx.O.ZV44LoteNumQuadra=Value},v2c:function(){gx.fn.setControlValue("vLOTENUMQUADRA",gx.O.AV44LoteNumQuadra,0)},c2v:function(){gx.O.AV44LoteNumQuadra=this.val()},val:function(){return gx.fn.getControlValue("vLOTENUMQUADRA")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[38]={fld:"TABLE12",grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Situacaoid,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAOID",gxz:"ZV42SituacaoId",gxold:"OV42SituacaoId",gxvar:"AV42SituacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SituacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42SituacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSITUACAOID",gx.O.AV42SituacaoId,0)},c2v:function(){gx.O.AV42SituacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSITUACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAODESCRICAO",gxz:"ZV47SituacaoDescricao",gxold:"OV47SituacaoDescricao",gxvar:"AV47SituacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47SituacaoDescricao=Value},v2z:function(Value){gx.O.ZV47SituacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vSITUACAODESCRICAO",gx.O.AV47SituacaoDescricao,0)},c2v:function(){gx.O.AV47SituacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLE13",grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Clientereservaid,isvalid:null,rgrid:[this.GridContainer],fld:"vCLIENTERESERVAID",gxz:"ZV28ClienteReservaId",gxold:"OV28ClienteReservaId",gxvar:"AV28ClienteReservaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ClienteReservaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ClienteReservaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTERESERVAID",gx.O.AV28ClienteReservaId,0)},c2v:function(){gx.O.AV28ClienteReservaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTERESERVAID",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV48PessoaFantasia",gxold:"OV48PessoaFantasia",gxvar:"AV48PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48PessoaFantasia=Value},v2z:function(Value){gx.O.ZV48PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV48PessoaFantasia,0)},c2v:function(){gx.O.AV48PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLE4",grid:0};
   GXValidFnc[61]={fld:"TABLE3",grid:0};
   GXValidFnc[64]={fld:"IMAGE2",grid:0};
   GXValidFnc[66]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[68]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[70]={fld:"BTNHELP",grid:0};
   GXValidFnc[72]={fld:"TABLE5",grid:0};
   GXValidFnc[75]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTENUMLOTE",gxz:"Z5316LoteNumLote",gxold:"O5316LoteNumLote",gxvar:"A5316LoteNumLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5316LoteNumLote=Value},v2z:function(Value){gx.O.Z5316LoteNumLote=Value},v2c:function(row){gx.fn.setGridControlValue("LOTENUMLOTE",row || gx.fn.currentGridRowImpl(81),gx.O.A5316LoteNumLote,0)},c2v:function(){gx.O.A5316LoteNumLote=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTENUMLOTE",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTENUMQUADRA",gxz:"Z5317LoteNumQuadra",gxold:"O5317LoteNumQuadra",gxvar:"A5317LoteNumQuadra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5317LoteNumQuadra=Value},v2z:function(Value){gx.O.Z5317LoteNumQuadra=Value},v2c:function(row){gx.fn.setGridControlValue("LOTENUMQUADRA",row || gx.fn.currentGridRowImpl(81),gx.O.A5317LoteNumQuadra,0)},c2v:function(){gx.O.A5317LoteNumQuadra=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTENUMQUADRA",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"decimal",len:10,dec:3,sign:false,pic:"ZZZ,ZZ9.999",ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAREATOTAL",gxz:"Z5295LoteAreaTotal",gxold:"O5295LoteAreaTotal",gxvar:"A5295LoteAreaTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5295LoteAreaTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5295LoteAreaTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LOTEAREATOTAL",row || gx.fn.currentGridRowImpl(81),gx.O.A5295LoteAreaTotal,3,',')},c2v:function(){gx.O.A5295LoteAreaTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LOTEAREATOTAL",row || gx.fn.currentGridRowImpl(81),'.',',')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"char",len:30,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTESITUACAODESCRICAO",gxz:"Z5299LoteSituacaoDescricao",gxold:"O5299LoteSituacaoDescricao",gxvar:"A5299LoteSituacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5299LoteSituacaoDescricao=Value},v2z:function(Value){gx.O.Z5299LoteSituacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("LOTESITUACAODESCRICAO",row || gx.fn.currentGridRowImpl(81),gx.O.A5299LoteSituacaoDescricao,0)},c2v:function(){gx.O.A5299LoteSituacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTESITUACAODESCRICAO",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(81),gx.O.AV7bmpAlt,gx.O.AV80Bmpalt_GXI)},c2v:function(){gx.O.AV80Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(81))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(81))}, gxvar_GXI:'AV80Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(81),gx.O.AV8bmpExc,gx.O.AV81Bmpexc_GXI)},c2v:function(){gx.O.AV81Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(81))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(81))}, gxvar_GXI:'AV81Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(81),gx.O.AV16bmpCon,gx.O.AV82Bmpcon_GXI)},c2v:function(){gx.O.AV82Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(81))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(81))}, gxvar_GXI:'AV82Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEVLRMETROVALOR",gxz:"Z5309LoteVlrMetroValor",gxold:"O5309LoteVlrMetroValor",gxvar:"A5309LoteVlrMetroValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5309LoteVlrMetroValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5309LoteVlrMetroValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LOTEVLRMETROVALOR",row || gx.fn.currentGridRowImpl(81),gx.O.A5309LoteVlrMetroValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5309LoteVlrMetroValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LOTEVLRMETROVALOR",row || gx.fn.currentGridRowImpl(81),'.',',')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTEAMENTOEMPRESAID",gxz:"ZV46LoteamentoEmpresaId",gxold:"OV46LoteamentoEmpresaId",gxvar:"AV46LoteamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46LoteamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV46LoteamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOEMPRESAID",gx.O.AV46LoteamentoEmpresaId,0)},c2v:function(){gx.O.AV46LoteamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Situacaoempresaid,isvalid:null,rgrid:[],fld:"vSITUACAOEMPRESAID",gxz:"ZV49SituacaoEmpresaId",gxold:"OV49SituacaoEmpresaId",gxvar:"AV49SituacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49SituacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV49SituacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOEMPRESAID",gx.O.AV49SituacaoEmpresaId,0)},c2v:function(){gx.O.AV49SituacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV29EmpresaPessoasEmpresaId",gxold:"OV29EmpresaPessoasEmpresaId",gxvar:"AV29EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV29EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV29EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV29EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"JS", format:2,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"PROMPT_SITUACAOID",grid:0};
   GXValidFnc[102]={fld:"PROMPT_CLIENTERESERVAID",grid:0};
   this.AV72LoteamentoId = 0 ;
   this.ZV72LoteamentoId = 0 ;
   this.OV72LoteamentoId = 0 ;
   this.AV41LoteamentoNome = "" ;
   this.ZV41LoteamentoNome = "" ;
   this.OV41LoteamentoNome = "" ;
   this.AV43LoteNumLote = "" ;
   this.ZV43LoteNumLote = "" ;
   this.OV43LoteNumLote = "" ;
   this.AV44LoteNumQuadra = "" ;
   this.ZV44LoteNumQuadra = "" ;
   this.OV44LoteNumQuadra = "" ;
   this.AV42SituacaoId = 0 ;
   this.ZV42SituacaoId = 0 ;
   this.OV42SituacaoId = 0 ;
   this.AV47SituacaoDescricao = "" ;
   this.ZV47SituacaoDescricao = "" ;
   this.OV47SituacaoDescricao = "" ;
   this.AV28ClienteReservaId = 0 ;
   this.ZV28ClienteReservaId = 0 ;
   this.OV28ClienteReservaId = 0 ;
   this.AV48PessoaFantasia = "" ;
   this.ZV48PessoaFantasia = "" ;
   this.OV48PessoaFantasia = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5316LoteNumLote = "" ;
   this.O5316LoteNumLote = "" ;
   this.Z5317LoteNumQuadra = "" ;
   this.O5317LoteNumQuadra = "" ;
   this.Z5295LoteAreaTotal = 0 ;
   this.O5295LoteAreaTotal = 0 ;
   this.Z5299LoteSituacaoDescricao = "" ;
   this.O5299LoteSituacaoDescricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5309LoteVlrMetroValor = 0 ;
   this.O5309LoteVlrMetroValor = 0 ;
   this.AV46LoteamentoEmpresaId = "" ;
   this.ZV46LoteamentoEmpresaId = "" ;
   this.OV46LoteamentoEmpresaId = "" ;
   this.AV49SituacaoEmpresaId = "" ;
   this.ZV49SituacaoEmpresaId = "" ;
   this.OV49SituacaoEmpresaId = "" ;
   this.AV29EmpresaPessoasEmpresaId = "" ;
   this.ZV29EmpresaPessoasEmpresaId = "" ;
   this.OV29EmpresaPessoasEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV72LoteamentoId = 0 ;
   this.AV41LoteamentoNome = "" ;
   this.AV43LoteNumLote = "" ;
   this.AV44LoteNumQuadra = "" ;
   this.AV42SituacaoId = 0 ;
   this.AV47SituacaoDescricao = "" ;
   this.AV28ClienteReservaId = 0 ;
   this.AV48PessoaFantasia = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV46LoteamentoEmpresaId = "" ;
   this.AV49SituacaoEmpresaId = "" ;
   this.AV29EmpresaPessoasEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV56LoteamentoIdentificacaoLotes = "" ;
   this.AV73LoteamentoTipoValor = "" ;
   this.A5304LoteClienteReservaId = 0 ;
   this.A5298LoteSituacaoId = 0 ;
   this.A5314LoteamentoId = 0 ;
   this.A5290LoteamentoEmpresaId = "" ;
   this.A5297LoteSituacaoEmpId = "" ;
   this.A5306LoteVlrMetroEmpId = "" ;
   this.A5307LoteVlrMetroId = 0 ;
   this.A5316LoteNumLote = "" ;
   this.A5317LoteNumQuadra = "" ;
   this.A5295LoteAreaTotal = 0 ;
   this.A5299LoteSituacaoDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5309LoteVlrMetroValor = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A5350SituacaoId = 0 ;
   this.A5318SituacaoEmpresaId = "" ;
   this.A5344SituacaoDescricao = "" ;
   this.AV74TPDESCRICAO = "" ;
   this.AV75SnRecuperaFiltro = "" ;
   this.Events = {"e11ug2_client": ["'ANTERIOR'", true] ,"e12ug2_client": ["'PROXIMO'", true] ,"e16ug2_client": ["VPAGINA.CLICK", true] ,"e13ug2_client": ["'NOVO'", true] ,"e14ug2_client": ["'FECHAR'", true] ,"e15ug2_client": ["'PROCURAR'", true] ,"e19ug2_client": ["'ALTERAR'", true] ,"e20ug2_client": ["'EXCLUIR'", true] ,"e21ug2_client": ["'CONSULTAR'", true] ,"e22ug2_client": ["'ATUALIZAPAGINA'", true] ,"e24ug2_client": ["ENTER", true] ,"e25ug2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTENUMLOTE","Title")',ctrl:'LOTENUMLOTE',prop:'Title'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Title")',ctrl:'LOTENUMQUADRA',prop:'Title'},{av:'AV74TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5318SituacaoEmpresaId',fld:'SITUACAOEMPRESAID'},{av:'AV49SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'A5344SituacaoDescricao',fld:'SITUACAODESCRICAO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTENUMLOTE","Title")',ctrl:'LOTENUMLOTE',prop:'Title'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Title")',ctrl:'LOTENUMQUADRA',prop:'Title'},{av:'AV74TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5318SituacaoEmpresaId',fld:'SITUACAOEMPRESAID'},{av:'AV49SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'A5344SituacaoDescricao',fld:'SITUACAODESCRICAO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[{ctrl:'LOTENUMLOTE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTENUMLOTE","Title")',ctrl:'LOTENUMLOTE',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'LOTEAREATOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTEAREATOTAL","Title")',ctrl:'LOTEAREATOTAL',prop:'Title'},{ctrl:'LOTESITUACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTESITUACAODESCRICAO","Title")',ctrl:'LOTESITUACAODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'},{av:'AV47SituacaoDescricao',fld:'vSITUACAODESCRICAO'},{av:'AV48PessoaFantasia',fld:'vPESSOAFANTASIA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTENUMLOTE","Title")',ctrl:'LOTENUMLOTE',prop:'Title'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Title")',ctrl:'LOTENUMQUADRA',prop:'Title'},{av:'AV74TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5318SituacaoEmpresaId',fld:'SITUACAOEMPRESAID'},{av:'AV49SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'A5344SituacaoDescricao',fld:'SITUACAODESCRICAO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTENUMLOTE","Title")',ctrl:'LOTENUMLOTE',prop:'Title'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Title")',ctrl:'LOTENUMQUADRA',prop:'Title'},{av:'AV74TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5318SituacaoEmpresaId',fld:'SITUACAOEMPRESAID'},{av:'AV49SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'A5344SituacaoDescricao',fld:'SITUACAODESCRICAO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTENUMLOTE","Title")',ctrl:'LOTENUMLOTE',prop:'Title'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Title")',ctrl:'LOTENUMQUADRA',prop:'Title'},{av:'AV74TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5318SituacaoEmpresaId',fld:'SITUACAOEMPRESAID'},{av:'AV49SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'A5344SituacaoDescricao',fld:'SITUACAODESCRICAO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV41LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV56LoteamentoIdentificacaoLotes',fld:'vLOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV73LoteamentoTipoValor',fld:'vLOTEAMENTOTIPOVALOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'}],[{av:'AV73LoteamentoTipoValor',fld:'vLOTEAMENTOTIPOVALOR'},{av:'AV56LoteamentoIdentificacaoLotes',fld:'vLOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV41LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTENUMLOTE","Title")',ctrl:'LOTENUMLOTE',prop:'Title'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Title")',ctrl:'LOTENUMQUADRA',prop:'Title'},{av:'AV74TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5318SituacaoEmpresaId',fld:'SITUACAOEMPRESAID'},{av:'AV49SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'A5344SituacaoDescricao',fld:'SITUACAODESCRICAO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV57TpErro',fld:'vTPERRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV57TpErro',fld:'vTPERRO'},{av:'AV83GXLvl237',fld:'vGXLVL237'},{av:'AV47SituacaoDescricao',fld:'vSITUACAODESCRICAO'},{av:'AV84GXLvl250',fld:'vGXLVL250'},{av:'AV48PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV41LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV56LoteamentoIdentificacaoLotes',fld:'vLOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV73LoteamentoTipoValor',fld:'vLOTEAMENTOTIPOVALOR'},{av:'A5316LoteNumLote',fld:'LOTENUMLOTE'},{av:'A5317LoteNumQuadra',fld:'LOTENUMQUADRA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'}],[{av:'A5317LoteNumQuadra',fld:'LOTENUMQUADRA'},{av:'A5316LoteNumLote',fld:'LOTENUMLOTE'},{av:'AV73LoteamentoTipoValor',fld:'vLOTEAMENTOTIPOVALOR'},{av:'AV56LoteamentoIdentificacaoLotes',fld:'vLOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV41LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV41LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV56LoteamentoIdentificacaoLotes',fld:'vLOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV73LoteamentoTipoValor',fld:'vLOTEAMENTOTIPOVALOR'},{av:'A5316LoteNumLote',fld:'LOTENUMLOTE'},{av:'A5317LoteNumQuadra',fld:'LOTENUMQUADRA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'}],[{av:'A5317LoteNumQuadra',fld:'LOTENUMQUADRA'},{av:'A5316LoteNumLote',fld:'LOTENUMLOTE'},{av:'AV73LoteamentoTipoValor',fld:'vLOTEAMENTOTIPOVALOR'},{av:'AV56LoteamentoIdentificacaoLotes',fld:'vLOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV41LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV41LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV56LoteamentoIdentificacaoLotes',fld:'vLOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV73LoteamentoTipoValor',fld:'vLOTEAMENTOTIPOVALOR'},{av:'A5316LoteNumLote',fld:'LOTENUMLOTE'},{av:'A5317LoteNumQuadra',fld:'LOTENUMQUADRA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'}],[{av:'A5317LoteNumQuadra',fld:'LOTENUMQUADRA'},{av:'A5316LoteNumLote',fld:'LOTENUMLOTE'},{av:'AV73LoteamentoTipoValor',fld:'vLOTEAMENTOTIPOVALOR'},{av:'AV56LoteamentoIdentificacaoLotes',fld:'vLOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV41LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV44LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV42SituacaoId',fld:'vSITUACAOID'},{av:'AV28ClienteReservaId',fld:'vCLIENTERESERVAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV46LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV72LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTENUMLOTE","Title")',ctrl:'LOTENUMLOTE',prop:'Title'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Title")',ctrl:'LOTENUMQUADRA',prop:'Title'},{av:'AV74TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5318SituacaoEmpresaId',fld:'SITUACAOEMPRESAID'},{av:'AV49SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'A5344SituacaoDescricao',fld:'SITUACAODESCRICAO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[]];
   this.setPrompt("PROMPT_SITUACAOID", [41]);
   this.setPrompt("PROMPT_CLIENTERESERVAID", [51]);
   this.setVCMap("AV74TPDESCRICAO", "vTPDESCRICAO", 0, "char");
   this.setVCMap("AV75SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A5318SituacaoEmpresaId", "SITUACAOEMPRESAID", 0, "char");
   this.setVCMap("A5350SituacaoId", "SITUACAOID", 0, "int");
   this.setVCMap("A5344SituacaoDescricao", "SITUACAODESCRICAO", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("AV56LoteamentoIdentificacaoLotes", "vLOTEAMENTOIDENTIFICACAOLOTES", 0, "char");
   this.setVCMap("AV73LoteamentoTipoValor", "vLOTEAMENTOTIPOVALOR", 0, "char");
   this.setVCMap("AV74TPDESCRICAO", "vTPDESCRICAO", 0, "char");
   this.setVCMap("AV75SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A5318SituacaoEmpresaId", "SITUACAOEMPRESAID", 0, "char");
   this.setVCMap("A5350SituacaoId", "SITUACAOID", 0, "int");
   this.setVCMap("A5344SituacaoDescricao", "SITUACAODESCRICAO", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar(this.GXValidFnc[41]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar(this.GXValidFnc[100]);
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"A5317LoteNumQuadra", rfrProp:"Visible", gxAttId:"5317"});
   GridContainer.addRefreshingVar({rfrVar:"A5316LoteNumLote", rfrProp:"Title", gxAttId:"5316"});
   GridContainer.addRefreshingVar({rfrVar:"A5317LoteNumQuadra", rfrProp:"Title", gxAttId:"5317"});
   GridContainer.addRefreshingVar({rfrVar:"AV74TPDESCRICAO"});
   GridContainer.addRefreshingVar({rfrVar:"AV75SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A5318SituacaoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridContainer.addRefreshingVar({rfrVar:"A5350SituacaoId"});
   GridContainer.addRefreshingVar({rfrVar:"A5344SituacaoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[97]);
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlote());
