/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:54:24.65
*/
gx.evt.autoSkip = false;
gx.define('hcontrato', false, function () {
   this.ServerClass =  "hcontrato" ;
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
      this.AV77ContratoEmpresaId=gx.fn.getControlValue("vCONTRATOEMPRESAID") ;
      this.AV87TPDESCRICAO=gx.fn.getControlValue("vTPDESCRICAO") ;
      this.AV89SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.A5290LoteamentoEmpresaId=gx.fn.getControlValue("LOTEAMENTOEMPRESAID") ;
      this.A5314LoteamentoId=gx.fn.getIntegerValue("LOTEAMENTOID",'.') ;
      this.A5315LoteamentoNome=gx.fn.getControlValue("LOTEAMENTONOME") ;
      this.A5272ContratoLoteamentoEmpId=gx.fn.getControlValue("CONTRATOLOTEAMENTOEMPID") ;
      this.A5321LoteamentoModContratoId=gx.fn.getIntegerValue("LOTEAMENTOMODCONTRATOID",'.') ;
   };
   this.Validv_Loteamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTEAMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Clienteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLIENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contratoloteamentoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTRATOLOTEAMENTOID", gx.fn.currentGridRowImpl(60));
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
   this.Valid_Contratoclienteid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTRATOCLIENTEID", gx.fn.currentGridRowImpl(60));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contratoclienteempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTRATOCLIENTEEMPID", gx.fn.currentGridRowImpl(60));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Loteamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTEAMENTOEMPRESAID");
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
   this.e11ud2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12ud2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16ud2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13ud2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14ud2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ud2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20ud2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21ud2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22ud2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23ud2_client=function()
   {
      this.executeServerEvent("'PARCELAS'", true, arguments[0], false, false);
   };
   this.e24ud2_client=function()
   {
      this.executeServerEvent("'REIMPRIMIRCONTRATRO'", true, arguments[0], false, false);
   };
   this.e25ud2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26ud2_client=function()
   {
      this.executeServerEvent("'CANCELARCONTRATO'", true, arguments[0], false, false);
   };
   this.e27ud2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28ud2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.e29ud1_client=function()
   {
      this.executeServerEvent("PROMPT_LOTEAMENTOID.GXPROMPT", true, null, false, true);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,26,29,31,32,37,40,43,45,47,49,51,54,56,57,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,87,88,90,91,92,93,94,95];
   this.GXLastCtrlId =95;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",60,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcontrato",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5289,61,"CONTRATONUMERO","","","ContratoNumero","int",0,"px",8,8,"right",null,[],5289,"ContratoNumero",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contratoloteamentonome",62,"vCONTRATOLOTEAMENTONOME","Loteamento","","ContratoLoteamentoNome","svchar",0,"px",60,60,"left",null,[],"Contratoloteamentonome","ContratoLoteamentoNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5274,63,"CONTRATOLOTEAMENTONOME","","","ContratoLoteamentoNome","svchar",0,"px",60,60,"left",null,[],5274,"ContratoLoteamentoNome",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Numlotequadra",64,"vNUMLOTEQUADRA","","","NumLoteQuadra","svchar",0,"px",11,11,"left",null,[],"Numlotequadra","NumLoteQuadra",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5269,65,"CONTRATOCLIENTEFANTASIA","","","ContratoClienteFantasia","svchar",0,"px",60,60,"left",null,[],5269,"ContratoClienteFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5278,66,"CONTRATODTVENDA","","","ContratoDtVenda","date",0,"px",10,10,"right",null,[],5278,"ContratoDtVenda",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpparcelas","vBMPPARCELAS",67,0,"px",17,"px","e23ud2_client","","Par","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpimp","vBMPIMP",68,0,"px",17,"px","e24ud2_client","","Imp","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcan","vBMPCAN",69,0,"px",17,"px","e26ud2_client","","Can","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",70,0,"px",17,"px","e20ud2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",71,0,"px",17,"px","e21ud2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",72,0,"px",17,"px","e22ud2_client","","Con","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5273,73,"CONTRATOLOTEAMENTOID","Código Loteamento","","ContratoLoteamentoId","int",0,"px",3,3,"right",null,[],5273,"ContratoLoteamentoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5268,74,"CONTRATOCLIENTEID","Código Cliente","","ContratoClienteId","int",0,"px",7,7,"right",null,[],5268,"ContratoClienteId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5275,75,"CONTRATOLOTEAMENTOIDENTLOTES","Identificação Lotes","","ContratoLoteamentoIdentLotes","char",0,"px",1,1,"left",null,[],5275,"ContratoLoteamentoIdentLotes",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5276,76,"CONTRATOLOTEAMENTONUMLOTE","Contrato Loteamento Num Lote","","ContratoLoteamentoNumLote","char",0,"px",5,5,"left",null,[],5276,"ContratoLoteamentoNumLote",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5277,77,"CONTRATOLOTEAMENTONUMQUADRA","Contrato Loteamento Num Quadra","","ContratoLoteamentoNumQuadra","char",0,"px",5,5,"left",null,[],5277,"ContratoLoteamentoNumQuadra",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5288,78,"CONTRATOEMPRESAID","Empresa Contrato","","ContratoEmpresaId","char",0,"px",10,10,"left",null,[],5288,"ContratoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5267,79,"CONTRATOCLIENTEEMPID","Empresa Cliente","","ContratoClienteEmpId","char",0,"px",10,10,"left",null,[],5267,"ContratoClienteEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Modelocontrato",80,"vMODELOCONTRATO","Modelo Contrato","","ModeloContrato","int",0,"px",3,3,"right",null,[],"Modelocontrato","ModeloContrato",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10760,81,"CONTRATOSNCANCELADO","Contrato Sn Cancelado","","ContratoSnCancelado","char",0,"px",1,1,"left",null,[],10760,"ContratoSnCancelado",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TXTLOTEMP", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Loteamentoid,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTEAMENTOID",gxz:"ZV41LoteamentoId",gxold:"OV41LoteamentoId",gxvar:"AV41LoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41LoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41LoteamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOID",gx.O.AV41LoteamentoId,0)},c2v:function(){gx.O.AV41LoteamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTEAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEAMENTONOME",gxz:"ZV42LoteamentoNome",gxold:"OV42LoteamentoNome",gxvar:"AV42LoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42LoteamentoNome=Value},v2z:function(Value){gx.O.ZV42LoteamentoNome=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTONOME",gx.O.AV42LoteamentoNome,0)},c2v:function(){gx.O.AV42LoteamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXTLOTE", format:0,grid:0};
   GXValidFnc[19]={fld:"TABLE8",grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNUMLOTE",gxz:"ZV75NumLote",gxold:"OV75NumLote",gxvar:"AV75NumLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75NumLote=Value},v2z:function(Value){gx.O.ZV75NumLote=Value},v2c:function(){gx.fn.setControlValue("vNUMLOTE",gx.O.AV75NumLote,0)},c2v:function(){gx.O.AV75NumLote=this.val()},val:function(){return gx.fn.getControlValue("vNUMLOTE")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTLOTE2", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNUMQUADRA",gxz:"ZV76NumQuadra",gxold:"OV76NumQuadra",gxvar:"AV76NumQuadra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76NumQuadra=Value},v2z:function(Value){gx.O.ZV76NumQuadra=Value},v2c:function(){gx.fn.setControlValue("vNUMQUADRA",gx.O.AV76NumQuadra,0)},c2v:function(){gx.O.AV76NumQuadra=this.val()},val:function(){return gx.fn.getControlValue("vNUMQUADRA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Clienteid,isvalid:null,rgrid:[this.GridContainer],fld:"vCLIENTEID",gxz:"ZV73ClienteId",gxold:"OV73ClienteId",gxvar:"AV73ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73ClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73ClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEID",gx.O.AV73ClienteId,0)},c2v:function(){gx.O.AV73ClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV49PessoaFantasia",gxold:"OV49PessoaFantasia",gxvar:"AV49PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49PessoaFantasia=Value},v2z:function(Value){gx.O.ZV49PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV49PessoaFantasia,0)},c2v:function(){gx.O.AV49PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   GXValidFnc[40]={fld:"TABLE3",grid:0};
   GXValidFnc[43]={fld:"IMAGE2",grid:0};
   GXValidFnc[45]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[47]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[51]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATONUMERO",gxz:"Z5289ContratoNumero",gxold:"O5289ContratoNumero",gxvar:"A5289ContratoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5289ContratoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5289ContratoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTRATONUMERO",row || gx.fn.currentGridRowImpl(60),gx.O.A5289ContratoNumero,0)},c2v:function(){gx.O.A5289ContratoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTRATONUMERO",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTRATOLOTEAMENTONOME",gxz:"ZV92ContratoLoteamentoNome",gxold:"OV92ContratoLoteamentoNome",gxvar:"AV92ContratoLoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV92ContratoLoteamentoNome=Value},v2z:function(Value){gx.O.ZV92ContratoLoteamentoNome=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTRATOLOTEAMENTONOME",row || gx.fn.currentGridRowImpl(60),gx.O.AV92ContratoLoteamentoNome,0)},c2v:function(){gx.O.AV92ContratoLoteamentoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTRATOLOTEAMENTONOME",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTONOME",gxz:"Z5274ContratoLoteamentoNome",gxold:"O5274ContratoLoteamentoNome",gxvar:"A5274ContratoLoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5274ContratoLoteamentoNome=Value},v2z:function(Value){gx.O.Z5274ContratoLoteamentoNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOLOTEAMENTONOME",row || gx.fn.currentGridRowImpl(60),gx.O.A5274ContratoLoteamentoNome,0)},c2v:function(){gx.O.A5274ContratoLoteamentoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOLOTEAMENTONOME",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:11,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNUMLOTEQUADRA",gxz:"ZV74NumLoteQuadra",gxold:"OV74NumLoteQuadra",gxvar:"AV74NumLoteQuadra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV74NumLoteQuadra=Value},v2z:function(Value){gx.O.ZV74NumLoteQuadra=Value},v2c:function(row){gx.fn.setGridControlValue("vNUMLOTEQUADRA",row || gx.fn.currentGridRowImpl(60),gx.O.AV74NumLoteQuadra,0)},c2v:function(){gx.O.AV74NumLoteQuadra=this.val()},val:function(row){return gx.fn.getGridControlValue("vNUMLOTEQUADRA",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCLIENTEFANTASIA",gxz:"Z5269ContratoClienteFantasia",gxold:"O5269ContratoClienteFantasia",gxvar:"A5269ContratoClienteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5269ContratoClienteFantasia=Value},v2z:function(Value){gx.O.Z5269ContratoClienteFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOCLIENTEFANTASIA",row || gx.fn.currentGridRowImpl(60),gx.O.A5269ContratoClienteFantasia,0)},c2v:function(){gx.O.A5269ContratoClienteFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOCLIENTEFANTASIA",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATODTVENDA",gxz:"Z5278ContratoDtVenda",gxold:"O5278ContratoDtVenda",gxvar:"A5278ContratoDtVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5278ContratoDtVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5278ContratoDtVenda=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTRATODTVENDA",row || gx.fn.currentGridRowImpl(60),gx.O.A5278ContratoDtVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5278ContratoDtVenda=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTRATODTVENDA",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPARCELAS",gxz:"ZV78BmpParcelas",gxold:"OV78BmpParcelas",gxvar:"AV78BmpParcelas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV78BmpParcelas=Value},v2z:function(Value){gx.O.ZV78BmpParcelas=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPARCELAS",row || gx.fn.currentGridRowImpl(60),gx.O.AV78BmpParcelas,gx.O.AV100Bmpparcelas_GXI)},c2v:function(){gx.O.AV100Bmpparcelas_GXI=this.val_GXI();gx.O.AV78BmpParcelas=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPARCELAS",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPARCELAS_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV100Bmpparcelas_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMP",gxz:"ZV79BmpImp",gxold:"OV79BmpImp",gxvar:"AV79BmpImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV79BmpImp=Value},v2z:function(Value){gx.O.ZV79BmpImp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMP",row || gx.fn.currentGridRowImpl(60),gx.O.AV79BmpImp,gx.O.AV101Bmpimp_GXI)},c2v:function(){gx.O.AV101Bmpimp_GXI=this.val_GXI();gx.O.AV79BmpImp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMP",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMP_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV101Bmpimp_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCAN",gxz:"ZV91bmpCan",gxold:"OV91bmpCan",gxvar:"AV91bmpCan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV91bmpCan=Value},v2z:function(Value){gx.O.ZV91bmpCan=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCAN",row || gx.fn.currentGridRowImpl(60),gx.O.AV91bmpCan,gx.O.AV102Bmpcan_GXI)},c2v:function(){gx.O.AV102Bmpcan_GXI=this.val_GXI();gx.O.AV91bmpCan=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCAN",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCAN_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV102Bmpcan_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(60),gx.O.AV7bmpAlt,gx.O.AV97Bmpalt_GXI)},c2v:function(){gx.O.AV97Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV97Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60),gx.O.AV8bmpExc,gx.O.AV98Bmpexc_GXI)},c2v:function(){gx.O.AV98Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV98Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(60),gx.O.AV16bmpCon,gx.O.AV99Bmpcon_GXI)},c2v:function(){gx.O.AV99Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV99Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Contratoloteamentoid,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTOID",gxz:"Z5273ContratoLoteamentoId",gxold:"O5273ContratoLoteamentoId",gxvar:"A5273ContratoLoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5273ContratoLoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5273ContratoLoteamentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTRATOLOTEAMENTOID",row || gx.fn.currentGridRowImpl(60),gx.O.A5273ContratoLoteamentoId,0)},c2v:function(){gx.O.A5273ContratoLoteamentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTRATOLOTEAMENTOID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Contratoclienteid,isvalid:null,rgrid:[],fld:"CONTRATOCLIENTEID",gxz:"Z5268ContratoClienteId",gxold:"O5268ContratoClienteId",gxvar:"A5268ContratoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5268ContratoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5268ContratoClienteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTRATOCLIENTEID",row || gx.fn.currentGridRowImpl(60),gx.O.A5268ContratoClienteId,0)},c2v:function(){gx.O.A5268ContratoClienteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTRATOCLIENTEID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTOIDENTLOTES",gxz:"Z5275ContratoLoteamentoIdentLotes",gxold:"O5275ContratoLoteamentoIdentLotes",gxvar:"A5275ContratoLoteamentoIdentLotes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5275ContratoLoteamentoIdentLotes=Value},v2z:function(Value){gx.O.Z5275ContratoLoteamentoIdentLotes=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOLOTEAMENTOIDENTLOTES",row || gx.fn.currentGridRowImpl(60),gx.O.A5275ContratoLoteamentoIdentLotes,0)},c2v:function(){gx.O.A5275ContratoLoteamentoIdentLotes=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOLOTEAMENTOIDENTLOTES",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTONUMLOTE",gxz:"Z5276ContratoLoteamentoNumLote",gxold:"O5276ContratoLoteamentoNumLote",gxvar:"A5276ContratoLoteamentoNumLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5276ContratoLoteamentoNumLote=Value},v2z:function(Value){gx.O.Z5276ContratoLoteamentoNumLote=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOLOTEAMENTONUMLOTE",row || gx.fn.currentGridRowImpl(60),gx.O.A5276ContratoLoteamentoNumLote,0)},c2v:function(){gx.O.A5276ContratoLoteamentoNumLote=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOLOTEAMENTONUMLOTE",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTONUMQUADRA",gxz:"Z5277ContratoLoteamentoNumQuadra",gxold:"O5277ContratoLoteamentoNumQuadra",gxvar:"A5277ContratoLoteamentoNumQuadra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5277ContratoLoteamentoNumQuadra=Value},v2z:function(Value){gx.O.Z5277ContratoLoteamentoNumQuadra=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOLOTEAMENTONUMQUADRA",row || gx.fn.currentGridRowImpl(60),gx.O.A5277ContratoLoteamentoNumQuadra,0)},c2v:function(){gx.O.A5277ContratoLoteamentoNumQuadra=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOLOTEAMENTONUMQUADRA",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOEMPRESAID",gxz:"Z5288ContratoEmpresaId",gxold:"O5288ContratoEmpresaId",gxvar:"A5288ContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5288ContratoEmpresaId=Value},v2z:function(Value){gx.O.Z5288ContratoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(60),gx.O.A5288ContratoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5288ContratoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Contratoclienteempid,isvalid:null,rgrid:[],fld:"CONTRATOCLIENTEEMPID",gxz:"Z5267ContratoClienteEmpId",gxold:"O5267ContratoClienteEmpId",gxvar:"A5267ContratoClienteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5267ContratoClienteEmpId=Value},v2z:function(Value){gx.O.Z5267ContratoClienteEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOCLIENTEEMPID",row || gx.fn.currentGridRowImpl(60),gx.O.A5267ContratoClienteEmpId,0)},c2v:function(){gx.O.A5267ContratoClienteEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOCLIENTEEMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOCONTRATO",gxz:"ZV80ModeloContrato",gxold:"OV80ModeloContrato",gxvar:"AV80ModeloContrato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV80ModeloContrato=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80ModeloContrato=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vMODELOCONTRATO",row || gx.fn.currentGridRowImpl(60),gx.O.AV80ModeloContrato,0)},c2v:function(){gx.O.AV80ModeloContrato=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vMODELOCONTRATO",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOSNCANCELADO",gxz:"Z10760ContratoSnCancelado",gxold:"O10760ContratoSnCancelado",gxvar:"A10760ContratoSnCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10760ContratoSnCancelado=Value},v2z:function(Value){gx.O.Z10760ContratoSnCancelado=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOSNCANCELADO",row || gx.fn.currentGridRowImpl(60),gx.O.A10760ContratoSnCancelado,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10760ContratoSnCancelado=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOSNCANCELADO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Loteamentoempresaid,isvalid:null,rgrid:[],fld:"vLOTEAMENTOEMPRESAID",gxz:"ZV47LoteamentoEmpresaId",gxold:"OV47LoteamentoEmpresaId",gxvar:"AV47LoteamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47LoteamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV47LoteamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOEMPRESAID",gx.O.AV47LoteamentoEmpresaId,0)},c2v:function(){gx.O.AV47LoteamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV29EmpresaPessoasEmpresaId",gxold:"OV29EmpresaPessoasEmpresaId",gxvar:"AV29EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV29EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV29EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV29EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[90]={fld:"JS", format:2,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV90Qtde",gxold:"OV90Qtde",gxvar:"AV90Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV90Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV90Qtde,0)},c2v:function(){gx.O.AV90Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[93]={fld:"PROMPT_LOTEAMENTOID",grid:0};
   GXValidFnc[94]={fld:"PROMPT_NUMLOTE_NUMQUADRA",grid:0};
   GXValidFnc[95]={fld:"PROMPT_CLIENTEID",grid:0};
   this.AV41LoteamentoId = 0 ;
   this.ZV41LoteamentoId = 0 ;
   this.OV41LoteamentoId = 0 ;
   this.AV42LoteamentoNome = "" ;
   this.ZV42LoteamentoNome = "" ;
   this.OV42LoteamentoNome = "" ;
   this.AV75NumLote = "" ;
   this.ZV75NumLote = "" ;
   this.OV75NumLote = "" ;
   this.AV76NumQuadra = "" ;
   this.ZV76NumQuadra = "" ;
   this.OV76NumQuadra = "" ;
   this.AV73ClienteId = 0 ;
   this.ZV73ClienteId = 0 ;
   this.OV73ClienteId = 0 ;
   this.AV49PessoaFantasia = "" ;
   this.ZV49PessoaFantasia = "" ;
   this.OV49PessoaFantasia = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5289ContratoNumero = 0 ;
   this.O5289ContratoNumero = 0 ;
   this.ZV92ContratoLoteamentoNome = "" ;
   this.OV92ContratoLoteamentoNome = "" ;
   this.Z5274ContratoLoteamentoNome = "" ;
   this.O5274ContratoLoteamentoNome = "" ;
   this.ZV74NumLoteQuadra = "" ;
   this.OV74NumLoteQuadra = "" ;
   this.Z5269ContratoClienteFantasia = "" ;
   this.O5269ContratoClienteFantasia = "" ;
   this.Z5278ContratoDtVenda = gx.date.nullDate() ;
   this.O5278ContratoDtVenda = gx.date.nullDate() ;
   this.ZV78BmpParcelas = "" ;
   this.OV78BmpParcelas = "" ;
   this.ZV79BmpImp = "" ;
   this.OV79BmpImp = "" ;
   this.ZV91bmpCan = "" ;
   this.OV91bmpCan = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5273ContratoLoteamentoId = 0 ;
   this.O5273ContratoLoteamentoId = 0 ;
   this.Z5268ContratoClienteId = 0 ;
   this.O5268ContratoClienteId = 0 ;
   this.Z5275ContratoLoteamentoIdentLotes = "" ;
   this.O5275ContratoLoteamentoIdentLotes = "" ;
   this.Z5276ContratoLoteamentoNumLote = "" ;
   this.O5276ContratoLoteamentoNumLote = "" ;
   this.Z5277ContratoLoteamentoNumQuadra = "" ;
   this.O5277ContratoLoteamentoNumQuadra = "" ;
   this.Z5288ContratoEmpresaId = "" ;
   this.O5288ContratoEmpresaId = "" ;
   this.Z5267ContratoClienteEmpId = "" ;
   this.O5267ContratoClienteEmpId = "" ;
   this.ZV80ModeloContrato = 0 ;
   this.OV80ModeloContrato = 0 ;
   this.Z10760ContratoSnCancelado = "" ;
   this.O10760ContratoSnCancelado = "" ;
   this.AV47LoteamentoEmpresaId = "" ;
   this.ZV47LoteamentoEmpresaId = "" ;
   this.OV47LoteamentoEmpresaId = "" ;
   this.AV29EmpresaPessoasEmpresaId = "" ;
   this.ZV29EmpresaPessoasEmpresaId = "" ;
   this.OV29EmpresaPessoasEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV90Qtde = 0 ;
   this.ZV90Qtde = 0 ;
   this.OV90Qtde = 0 ;
   this.AV41LoteamentoId = 0 ;
   this.AV42LoteamentoNome = "" ;
   this.AV75NumLote = "" ;
   this.AV76NumQuadra = "" ;
   this.AV73ClienteId = 0 ;
   this.AV49PessoaFantasia = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV47LoteamentoEmpresaId = "" ;
   this.AV29EmpresaPessoasEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV90Qtde = 0 ;
   this.A5272ContratoLoteamentoEmpId = "" ;
   this.A5321LoteamentoModContratoId = 0 ;
   this.A5289ContratoNumero = 0 ;
   this.AV92ContratoLoteamentoNome = "" ;
   this.A5274ContratoLoteamentoNome = "" ;
   this.AV74NumLoteQuadra = "" ;
   this.A5269ContratoClienteFantasia = "" ;
   this.A5278ContratoDtVenda = gx.date.nullDate() ;
   this.AV78BmpParcelas = "" ;
   this.AV79BmpImp = "" ;
   this.AV91bmpCan = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5273ContratoLoteamentoId = 0 ;
   this.A5268ContratoClienteId = 0 ;
   this.A5275ContratoLoteamentoIdentLotes = "" ;
   this.A5276ContratoLoteamentoNumLote = "" ;
   this.A5277ContratoLoteamentoNumQuadra = "" ;
   this.A5288ContratoEmpresaId = "" ;
   this.A5267ContratoClienteEmpId = "" ;
   this.AV80ModeloContrato = 0 ;
   this.A10760ContratoSnCancelado = "" ;
   this.A5560ParcelasContratoUsuarioAlt = "" ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1697ContaPagRecObservacao = "" ;
   this.A5559ParcelasContratoSnImpObs = "" ;
   this.A5558ParcelasContratoSnImpVenc = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A5314LoteamentoId = 0 ;
   this.A5290LoteamentoEmpresaId = "" ;
   this.A5315LoteamentoNome = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.AV77ContratoEmpresaId = "" ;
   this.AV87TPDESCRICAO = "" ;
   this.AV89SnRecuperaFiltro = "" ;
   this.Events = {"e11ud2_client": ["'ANTERIOR'", true] ,"e12ud2_client": ["'PROXIMO'", true] ,"e16ud2_client": ["VPAGINA.CLICK", true] ,"e13ud2_client": ["'NOVO'", true] ,"e14ud2_client": ["'FECHAR'", true] ,"e15ud2_client": ["'PROCURAR'", true] ,"e20ud2_client": ["'ALTERAR'", true] ,"e21ud2_client": ["'EXCLUIR'", true] ,"e22ud2_client": ["'CONSULTAR'", true] ,"e23ud2_client": ["'PARCELAS'", true] ,"e24ud2_client": ["'REIMPRIMIRCONTRATRO'", true] ,"e25ud2_client": ["'ATUALIZAPAGINA'", true] ,"e26ud2_client": ["'CANCELARCONTRATO'", true] ,"e27ud2_client": ["ENTER", true] ,"e28ud2_client": ["CANCEL", true] ,"e29ud1_client": ["PROMPT_LOTEAMENTOID.GXPROMPT", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV78BmpParcelas',fld:'vBMPPARCELAS'},{av:'gx.fn.getCtrlProperty("vBMPPARCELAS","Tooltiptext")',ctrl:'vBMPPARCELAS',prop:'Tooltiptext'},{av:'AV79BmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV87TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV89SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'AV47LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'A10760ContratoSnCancelado',fld:'CONTRATOSNCANCELADO'},{av:'A5274ContratoLoteamentoNome',fld:'CONTRATOLOTEAMENTONOME'},{av:'A5275ContratoLoteamentoIdentLotes',fld:'CONTRATOLOTEAMENTOIDENTLOTES'},{av:'A5276ContratoLoteamentoNumLote',fld:'CONTRATOLOTEAMENTONUMLOTE'},{av:'A5277ContratoLoteamentoNumQuadra',fld:'CONTRATOLOTEAMENTONUMQUADRA'},{av:'A5272ContratoLoteamentoEmpId',fld:'CONTRATOLOTEAMENTOEMPID'},{av:'A5273ContratoLoteamentoId',fld:'CONTRATOLOTEAMENTOID'},{av:'A5321LoteamentoModContratoId',fld:'LOTEAMENTOMODCONTRATOID'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV78BmpParcelas',fld:'vBMPPARCELAS'},{av:'gx.fn.getCtrlProperty("vBMPPARCELAS","Tooltiptext")',ctrl:'vBMPPARCELAS',prop:'Tooltiptext'},{av:'AV79BmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV87TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV89SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'AV47LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'A10760ContratoSnCancelado',fld:'CONTRATOSNCANCELADO'},{av:'A5274ContratoLoteamentoNome',fld:'CONTRATOLOTEAMENTONOME'},{av:'A5275ContratoLoteamentoIdentLotes',fld:'CONTRATOLOTEAMENTOIDENTLOTES'},{av:'A5276ContratoLoteamentoNumLote',fld:'CONTRATOLOTEAMENTONUMLOTE'},{av:'A5277ContratoLoteamentoNumQuadra',fld:'CONTRATOLOTEAMENTONUMQUADRA'},{av:'A5272ContratoLoteamentoEmpId',fld:'CONTRATOLOTEAMENTOEMPID'},{av:'A5273ContratoLoteamentoId',fld:'CONTRATOLOTEAMENTOID'},{av:'A5321LoteamentoModContratoId',fld:'LOTEAMENTOMODCONTRATOID'}],[{ctrl:'CONTRATONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTRATONUMERO","Title")',ctrl:'CONTRATONUMERO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONTRATOLOTEAMENTONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTRATOLOTEAMENTONOME","Title")',ctrl:'CONTRATOLOTEAMENTONOME',prop:'Title'},{ctrl:'vNUMLOTEQUADRA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vNUMLOTEQUADRA","Title")',ctrl:'vNUMLOTEQUADRA',prop:'Title'},{ctrl:'CONTRATOCLIENTEFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTRATOCLIENTEFANTASIA","Title")',ctrl:'CONTRATOCLIENTEFANTASIA',prop:'Title'},{ctrl:'CONTRATODTVENDA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTRATODTVENDA","Title")',ctrl:'CONTRATODTVENDA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV89SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'},{av:'AV49PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV42LoteamentoNome',fld:'vLOTEAMENTONOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV78BmpParcelas',fld:'vBMPPARCELAS'},{av:'gx.fn.getCtrlProperty("vBMPPARCELAS","Tooltiptext")',ctrl:'vBMPPARCELAS',prop:'Tooltiptext'},{av:'AV79BmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV87TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV89SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'AV47LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'A10760ContratoSnCancelado',fld:'CONTRATOSNCANCELADO'},{av:'A5274ContratoLoteamentoNome',fld:'CONTRATOLOTEAMENTONOME'},{av:'A5275ContratoLoteamentoIdentLotes',fld:'CONTRATOLOTEAMENTOIDENTLOTES'},{av:'A5276ContratoLoteamentoNumLote',fld:'CONTRATOLOTEAMENTONUMLOTE'},{av:'A5277ContratoLoteamentoNumQuadra',fld:'CONTRATOLOTEAMENTONUMQUADRA'},{av:'A5272ContratoLoteamentoEmpId',fld:'CONTRATOLOTEAMENTOEMPID'},{av:'A5273ContratoLoteamentoId',fld:'CONTRATOLOTEAMENTOID'},{av:'A5321LoteamentoModContratoId',fld:'LOTEAMENTOMODCONTRATOID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV78BmpParcelas',fld:'vBMPPARCELAS'},{av:'gx.fn.getCtrlProperty("vBMPPARCELAS","Tooltiptext")',ctrl:'vBMPPARCELAS',prop:'Tooltiptext'},{av:'AV79BmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV87TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV89SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'AV47LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'A10760ContratoSnCancelado',fld:'CONTRATOSNCANCELADO'},{av:'A5274ContratoLoteamentoNome',fld:'CONTRATOLOTEAMENTONOME'},{av:'A5275ContratoLoteamentoIdentLotes',fld:'CONTRATOLOTEAMENTOIDENTLOTES'},{av:'A5276ContratoLoteamentoNumLote',fld:'CONTRATOLOTEAMENTONUMLOTE'},{av:'A5277ContratoLoteamentoNumQuadra',fld:'CONTRATOLOTEAMENTONUMQUADRA'},{av:'A5272ContratoLoteamentoEmpId',fld:'CONTRATOLOTEAMENTOEMPID'},{av:'A5273ContratoLoteamentoId',fld:'CONTRATOLOTEAMENTOID'},{av:'A5321LoteamentoModContratoId',fld:'LOTEAMENTOMODCONTRATOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV78BmpParcelas',fld:'vBMPPARCELAS'},{av:'gx.fn.getCtrlProperty("vBMPPARCELAS","Tooltiptext")',ctrl:'vBMPPARCELAS',prop:'Tooltiptext'},{av:'AV79BmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV87TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV89SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'AV47LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'A10760ContratoSnCancelado',fld:'CONTRATOSNCANCELADO'},{av:'A5274ContratoLoteamentoNome',fld:'CONTRATOLOTEAMENTONOME'},{av:'A5275ContratoLoteamentoIdentLotes',fld:'CONTRATOLOTEAMENTOIDENTLOTES'},{av:'A5276ContratoLoteamentoNumLote',fld:'CONTRATOLOTEAMENTONUMLOTE'},{av:'A5277ContratoLoteamentoNumQuadra',fld:'CONTRATOLOTEAMENTONUMQUADRA'},{av:'A5272ContratoLoteamentoEmpId',fld:'CONTRATOLOTEAMENTOEMPID'},{av:'A5273ContratoLoteamentoId',fld:'CONTRATOLOTEAMENTOID'},{av:'A5321LoteamentoModContratoId',fld:'LOTEAMENTOMODCONTRATOID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'}],[{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A10760ContratoSnCancelado',fld:'CONTRATOSNCANCELADO'},{av:'A5274ContratoLoteamentoNome',fld:'CONTRATOLOTEAMENTONOME'},{av:'A5275ContratoLoteamentoIdentLotes',fld:'CONTRATOLOTEAMENTOIDENTLOTES'},{av:'A5276ContratoLoteamentoNumLote',fld:'CONTRATOLOTEAMENTONUMLOTE'},{av:'A5277ContratoLoteamentoNumQuadra',fld:'CONTRATOLOTEAMENTONUMQUADRA'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'A5272ContratoLoteamentoEmpId',fld:'CONTRATOLOTEAMENTOEMPID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5273ContratoLoteamentoId',fld:'CONTRATOLOTEAMENTOID'},{av:'A5321LoteamentoModContratoId',fld:'LOTEAMENTOMODCONTRATOID'}],[{av:'gx.fn.getCtrlProperty("vBMPCAN","Enabled")',ctrl:'vBMPCAN',prop:'Enabled'},{av:'AV91bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'AV92ContratoLoteamentoNome',fld:'vCONTRATOLOTEAMENTONOME'},{av:'AV74NumLoteQuadra',fld:'vNUMLOTEQUADRA'},{av:'AV80ModeloContrato',fld:'vMODELOCONTRATO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV78BmpParcelas',fld:'vBMPPARCELAS'},{av:'gx.fn.getCtrlProperty("vBMPPARCELAS","Tooltiptext")',ctrl:'vBMPPARCELAS',prop:'Tooltiptext'},{av:'AV79BmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV87TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV89SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'AV47LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'A10760ContratoSnCancelado',fld:'CONTRATOSNCANCELADO'},{av:'A5274ContratoLoteamentoNome',fld:'CONTRATOLOTEAMENTONOME'},{av:'A5275ContratoLoteamentoIdentLotes',fld:'CONTRATOLOTEAMENTOIDENTLOTES'},{av:'A5276ContratoLoteamentoNumLote',fld:'CONTRATOLOTEAMENTONUMLOTE'},{av:'A5277ContratoLoteamentoNumQuadra',fld:'CONTRATOLOTEAMENTONUMQUADRA'},{av:'A5272ContratoLoteamentoEmpId',fld:'CONTRATOLOTEAMENTOEMPID'},{av:'A5273ContratoLoteamentoId',fld:'CONTRATOLOTEAMENTOID'},{av:'A5321LoteamentoModContratoId',fld:'LOTEAMENTOMODCONTRATOID'},{av:'AV58TpErro',fld:'vTPERRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV49PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV58TpErro',fld:'vTPERRO'},{av:'AV104GXLvl268',fld:'vGXLVL268'},{av:'AV42LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV105GXLvl287',fld:'vGXLVL287'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'}],[{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'}],[{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'}],[{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PARCELAS'"] = [[{av:'A5288ContratoEmpresaId',fld:'CONTRATOEMPRESAID'},{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'A5268ContratoClienteId',fld:'CONTRATOCLIENTEID'},{av:'A5269ContratoClienteFantasia',fld:'CONTRATOCLIENTEFANTASIA'}],[{av:'A5269ContratoClienteFantasia',fld:'CONTRATOCLIENTEFANTASIA'},{av:'A5268ContratoClienteId',fld:'CONTRATOCLIENTEID'},{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'A5288ContratoEmpresaId',fld:'CONTRATOEMPRESAID'}]];
   this.EvtParms["'REIMPRIMIRCONTRATRO'"] = [[{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'AV95Pgmname',fld:'vPGMNAME'},{av:'AV84Ordenacao',fld:'vORDENACAO'},{av:'AV85QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV80ModeloContrato',fld:'vMODELOCONTRATO'},{av:'AV81ParcContrato',fld:'vPARCCONTRATO'},{av:'A5288ContratoEmpresaId',fld:'CONTRATOEMPRESAID'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV83ContratoNumero',fld:'vCONTRATONUMERO'},{av:'A5560ParcelasContratoUsuarioAlt',fld:'PARCELASCONTRATOUSUARIOALT'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'A1697ContaPagRecObservacao',fld:'CONTAPAGRECOBSERVACAO'},{av:'A5559ParcelasContratoSnImpObs',fld:'PARCELASCONTRATOSNIMPOBS'},{av:'A5558ParcelasContratoSnImpVenc',fld:'PARCELASCONTRATOSNIMPVENC'}],[{av:'AV83ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV81ParcContrato',fld:'vPARCCONTRATO'},{av:'AV80ModeloContrato',fld:'vMODELOCONTRATO'},{av:'AV85QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV82ParcContratoItem',fld:'vPARCCONTRATOITEM'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV78BmpParcelas',fld:'vBMPPARCELAS'},{av:'gx.fn.getCtrlProperty("vBMPPARCELAS","Tooltiptext")',ctrl:'vBMPPARCELAS',prop:'Tooltiptext'},{av:'AV79BmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV87TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV89SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'AV47LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'A10760ContratoSnCancelado',fld:'CONTRATOSNCANCELADO'},{av:'A5274ContratoLoteamentoNome',fld:'CONTRATOLOTEAMENTONOME'},{av:'A5275ContratoLoteamentoIdentLotes',fld:'CONTRATOLOTEAMENTOIDENTLOTES'},{av:'A5276ContratoLoteamentoNumLote',fld:'CONTRATOLOTEAMENTONUMLOTE'},{av:'A5277ContratoLoteamentoNumQuadra',fld:'CONTRATOLOTEAMENTONUMQUADRA'},{av:'A5272ContratoLoteamentoEmpId',fld:'CONTRATOLOTEAMENTOEMPID'},{av:'A5273ContratoLoteamentoId',fld:'CONTRATOLOTEAMENTOID'},{av:'A5321LoteamentoModContratoId',fld:'LOTEAMENTOMODCONTRATOID'}],[]];
   this.EvtParms["'CANCELARCONTRATO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV75NumLote',fld:'vNUMLOTE'},{av:'AV76NumQuadra',fld:'vNUMQUADRA'},{av:'AV73ClienteId',fld:'vCLIENTEID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV77ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV78BmpParcelas',fld:'vBMPPARCELAS'},{av:'gx.fn.getCtrlProperty("vBMPPARCELAS","Tooltiptext")',ctrl:'vBMPPARCELAS',prop:'Tooltiptext'},{av:'AV79BmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV87TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV89SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A5290LoteamentoEmpresaId',fld:'LOTEAMENTOEMPRESAID'},{av:'AV47LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'A10760ContratoSnCancelado',fld:'CONTRATOSNCANCELADO'},{av:'A5274ContratoLoteamentoNome',fld:'CONTRATOLOTEAMENTONOME'},{av:'A5275ContratoLoteamentoIdentLotes',fld:'CONTRATOLOTEAMENTOIDENTLOTES'},{av:'A5276ContratoLoteamentoNumLote',fld:'CONTRATOLOTEAMENTONUMLOTE'},{av:'A5277ContratoLoteamentoNumQuadra',fld:'CONTRATOLOTEAMENTONUMQUADRA'},{av:'A5272ContratoLoteamentoEmpId',fld:'CONTRATOLOTEAMENTOEMPID'},{av:'A5273ContratoLoteamentoId',fld:'CONTRATOLOTEAMENTOID'},{av:'A5321LoteamentoModContratoId',fld:'LOTEAMENTOMODCONTRATOID'},{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'}],[{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'}]];
   this.setPrompt("PROMPT_LOTEAMENTOID", [13]);
   this.setPrompt("PROMPT_NUMLOTE_NUMQUADRA", [22,26]);
   this.setPrompt("PROMPT_CLIENTEID", [31]);
   this.setVCMap("AV77ContratoEmpresaId", "vCONTRATOEMPRESAID", 0, "char");
   this.setVCMap("AV87TPDESCRICAO", "vTPDESCRICAO", 0, "char");
   this.setVCMap("AV89SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A5290LoteamentoEmpresaId", "LOTEAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A5314LoteamentoId", "LOTEAMENTOID", 0, "int");
   this.setVCMap("A5315LoteamentoNome", "LOTEAMENTONOME", 0, "svchar");
   this.setVCMap("A5272ContratoLoteamentoEmpId", "CONTRATOLOTEAMENTOEMPID", 0, "char");
   this.setVCMap("A5321LoteamentoModContratoId", "LOTEAMENTOMODCONTRATOID", 0, "int");
   this.setVCMap("AV77ContratoEmpresaId", "vCONTRATOEMPRESAID", 0, "char");
   this.setVCMap("AV87TPDESCRICAO", "vTPDESCRICAO", 0, "char");
   this.setVCMap("AV89SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A5290LoteamentoEmpresaId", "LOTEAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A5314LoteamentoId", "LOTEAMENTOID", 0, "int");
   this.setVCMap("A5315LoteamentoNome", "LOTEAMENTONOME", 0, "svchar");
   this.setVCMap("A5272ContratoLoteamentoEmpId", "CONTRATOLOTEAMENTOEMPID", 0, "char");
   this.setVCMap("A5321LoteamentoModContratoId", "LOTEAMENTOMODCONTRATOID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[91]);
   GridContainer.addRefreshingVar({rfrVar:"AV77ContratoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV78BmpParcelas", rfrProp:"Value", gxAttId:"Bmpparcelas"});
   GridContainer.addRefreshingVar({rfrVar:"AV78BmpParcelas", rfrProp:"Tooltiptext", gxAttId:"Bmpparcelas"});
   GridContainer.addRefreshingVar({rfrVar:"AV79BmpImp", rfrProp:"Value", gxAttId:"Bmpimp"});
   GridContainer.addRefreshingVar({rfrVar:"AV79BmpImp", rfrProp:"Tooltiptext", gxAttId:"Bmpimp"});
   GridContainer.addRefreshingVar({rfrVar:"AV87TPDESCRICAO"});
   GridContainer.addRefreshingVar({rfrVar:"AV89SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A5290LoteamentoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridContainer.addRefreshingVar({rfrVar:"A5314LoteamentoId"});
   GridContainer.addRefreshingVar({rfrVar:"A5315LoteamentoNome"});
   GridContainer.addRefreshingVar({rfrVar:"A10760ContratoSnCancelado", rfrProp:"Value", gxAttId:"10760"});
   GridContainer.addRefreshingVar({rfrVar:"A5274ContratoLoteamentoNome", rfrProp:"Value", gxAttId:"5274"});
   GridContainer.addRefreshingVar({rfrVar:"A5275ContratoLoteamentoIdentLotes", rfrProp:"Value", gxAttId:"5275"});
   GridContainer.addRefreshingVar({rfrVar:"A5276ContratoLoteamentoNumLote", rfrProp:"Value", gxAttId:"5276"});
   GridContainer.addRefreshingVar({rfrVar:"A5277ContratoLoteamentoNumQuadra", rfrProp:"Value", gxAttId:"5277"});
   GridContainer.addRefreshingVar({rfrVar:"A5272ContratoLoteamentoEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A5273ContratoLoteamentoId", rfrProp:"Value", gxAttId:"5273"});
   GridContainer.addRefreshingVar({rfrVar:"A5321LoteamentoModContratoId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcontrato());
