/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:4.82
*/
gx.evt.autoSkip = false;
gx.define('hcaixatrabalho', false, function () {
   this.ServerClass =  "hcaixatrabalho" ;
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
      this.A3442CaixaTrabalhoEmpresaId=gx.fn.getControlValue("CAIXATRABALHOEMPRESAID") ;
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV49SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV53Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Caixatrabalhonumeroloja=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(88) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHONUMEROLOJA", gx.fn.currentGridRowImpl(88));
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
   this.Valid_Caixatrabalhosequenciaecf=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(88) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHOSEQUENCIAECF", gx.fn.currentGridRowImpl(88));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixatrabalhoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(88) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHOID", gx.fn.currentGridRowImpl(88));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixatrabalhosaidalanc=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(88) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHOSAIDALANC", gx.fn.currentGridRowImpl(88));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11mi2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12mi2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17mi2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13mi2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14mi2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15mi2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16mi2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20mi2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21mi2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22mi2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23mi2_client=function()
   {
      this.executeServerEvent("'ABRELANCAMENTOS'", true, arguments[0], false, false);
   };
   this.e24mi2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26mi2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27mi2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,27,29,31,33,36,38,40,43,45,47,49,50,53,55,58,63,66,69,71,73,75,77,79,82,84,85,89,90,91,92,93,94,95,96,97,98,99,100,106,108,109,110,111,112,113,114,115,116];
   this.GXLastCtrlId =116;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",88,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcaixatrabalho",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5776,89,"CAIXATRABALHONUMEROLOJA","","","CaixaTrabalhoNumeroLoja","int",0,"px",4,4,"right",null,[],5776,"CaixaTrabalhoNumeroLoja",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5777,90,"CAIXATRABALHOSEQUENCIAECF","","","CaixaTrabalhoSequenciaECF","int",0,"px",3,3,"right",null,[],5777,"CaixaTrabalhoSequenciaECF",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3443,91,"CAIXATRABALHOID","","","CaixaTrabalhoId","int",0,"px",10,10,"right",null,[],3443,"CaixaTrabalhoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3437,92,"CAIXATRABALHODTABERTURA","","","CaixaTrabalhoDtAbertura","date",0,"px",10,10,"right",null,[],3437,"CaixaTrabalhoDtAbertura",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3438,93,"CAIXATRABALHODTFECHAMENTO","","","CaixaTrabalhoDtFechamento","date",0,"px",10,10,"right",null,[],3438,"CaixaTrabalhoDtFechamento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3434,94,"PDVCODIGO","","","PDVCodigo","int",0,"px",10,10,"right",null,[],3434,"PDVCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6613,95,"CAIXATRABALHOUSUARIOID","","","CaixaTrabalhoUsuarioId","char",0,"px",12,12,"left",null,[],6613,"CaixaTrabalhoUsuarioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmplancamento","vBMPLANCAMENTO",96,0,"px",17,"px","e23mi2_client","","Lançamentos","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",97,0,"px",17,"px","e20mi2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",98,0,"px",17,"px","e21mi2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",99,0,"px",17,"px","e22mi2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(6616,100,"CAIXATRABALHOSAIDALANC","Saídas do Lançamento","","CaixaTrabalhoSaidaLanc","svchar",0,"px",300,80,"left",null,[],6616,"CaixaTrabalhoSaidaLanc",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHONUMEROLOJA",gxz:"ZV38CaixaTrabalhoNumeroLoja",gxold:"OV38CaixaTrabalhoNumeroLoja",gxvar:"AV38CaixaTrabalhoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHONUMEROLOJA",gx.O.AV38CaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.AV38CaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHONUMEROLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE10",grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHODTABERTURAIN",gxz:"ZV31CaixaTrabalhoDtAberturaIn",gxold:"OV31CaixaTrabalhoDtAberturaIn",gxvar:"AV31CaixaTrabalhoDtAberturaIn",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31CaixaTrabalhoDtAberturaIn=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31CaixaTrabalhoDtAberturaIn=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHODTABERTURAIN",gx.O.AV31CaixaTrabalhoDtAberturaIn,0)},c2v:function(){gx.O.AV31CaixaTrabalhoDtAberturaIn=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCAIXATRABALHODTABERTURAIN")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHODTABERTURAFIN",gxz:"ZV33CaixaTrabalhoDtAberturaFin",gxold:"OV33CaixaTrabalhoDtAberturaFin",gxvar:"AV33CaixaTrabalhoDtAberturaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33CaixaTrabalhoDtAberturaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33CaixaTrabalhoDtAberturaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHODTABERTURAFIN",gx.O.AV33CaixaTrabalhoDtAberturaFin,0)},c2v:function(){gx.O.AV33CaixaTrabalhoDtAberturaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCAIXATRABALHODTABERTURAFIN")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHOSEQUENCIAECF",gxz:"ZV39CaixaTrabalhoSequenciaECF",gxold:"OV39CaixaTrabalhoSequenciaECF",gxvar:"AV39CaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHOSEQUENCIAECF",gx.O.AV39CaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.AV39CaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHOSEQUENCIAECF",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE12",grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHODTFECHAMENTOIN",gxz:"ZV32CaixaTrabalhoDtFechamentoIn",gxold:"OV32CaixaTrabalhoDtFechamentoIn",gxvar:"AV32CaixaTrabalhoDtFechamentoIn",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32CaixaTrabalhoDtFechamentoIn=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32CaixaTrabalhoDtFechamentoIn=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHODTFECHAMENTOIN",gx.O.AV32CaixaTrabalhoDtFechamentoIn,0)},c2v:function(){gx.O.AV32CaixaTrabalhoDtFechamentoIn=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCAIXATRABALHODTFECHAMENTOIN")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHODTFECHAMENTOFIN",gxz:"ZV34CaixaTrabalhoDtFechamentoFin",gxold:"OV34CaixaTrabalhoDtFechamentoFin",gxvar:"AV34CaixaTrabalhoDtFechamentoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34CaixaTrabalhoDtFechamentoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34CaixaTrabalhoDtFechamentoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHODTFECHAMENTOFIN",gx.O.AV34CaixaTrabalhoDtFechamentoFin,0)},c2v:function(){gx.O.AV34CaixaTrabalhoDtFechamentoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCAIXATRABALHODTFECHAMENTOFIN")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHOID",gxz:"ZV30CaixaTrabalhoId",gxold:"OV30CaixaTrabalhoId",gxvar:"AV30CaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHOID",gx.O.AV30CaixaTrabalhoId,0)},c2v:function(){gx.O.AV30CaixaTrabalhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHOID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAID",gxz:"ZV42SaidaId",gxold:"OV42SaidaId",gxvar:"AV42SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV42SaidaId,0)},c2v:function(){gx.O.AV42SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"BTNPROMPTSAIDA",grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOCAIXAID",gxz:"ZV29UsuarioCaixaId",gxold:"OV29UsuarioCaixaId",gxvar:"AV29UsuarioCaixaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29UsuarioCaixaId=Value},v2z:function(Value){gx.O.ZV29UsuarioCaixaId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOCAIXAID",gx.O.AV29UsuarioCaixaId,0)},c2v:function(){gx.O.AV29UsuarioCaixaId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOCAIXAID")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPENASABERTO",gxz:"ZV28ApenasAberto",gxold:"OV28ApenasAberto",gxvar:"AV28ApenasAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28ApenasAberto=Value},v2z:function(Value){gx.O.ZV28ApenasAberto=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPENASABERTO",gx.O.AV28ApenasAberto,"S")},c2v:function(){gx.O.AV28ApenasAberto=this.val()},val:function(){return gx.fn.getControlValue("vAPENASABERTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   GXValidFnc[66]={fld:"TABLE6",grid:0};
   GXValidFnc[69]={fld:"IMAGE2",grid:0};
   GXValidFnc[71]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[73]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[75]={fld:"IMAGE1",grid:0};
   GXValidFnc[77]={fld:"BTNHELP",grid:0};
   GXValidFnc[79]={fld:"TABLE5",grid:0};
   GXValidFnc[82]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:this.Valid_Caixatrabalhonumeroloja,isvalid:null,rgrid:[],fld:"CAIXATRABALHONUMEROLOJA",gxz:"Z5776CaixaTrabalhoNumeroLoja",gxold:"O5776CaixaTrabalhoNumeroLoja",gxvar:"A5776CaixaTrabalhoNumeroLoja",ucs:[],op:[100],ip:[100,91,90,89],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHONUMEROLOJA",row || gx.fn.currentGridRowImpl(88),gx.O.A5776CaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHONUMEROLOJA",row || gx.fn.currentGridRowImpl(88),'.')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:this.Valid_Caixatrabalhosequenciaecf,isvalid:null,rgrid:[],fld:"CAIXATRABALHOSEQUENCIAECF",gxz:"Z5777CaixaTrabalhoSequenciaECF",gxold:"O5777CaixaTrabalhoSequenciaECF",gxvar:"A5777CaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(88),gx.O.A5777CaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(88),'.')},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:this.Valid_Caixatrabalhoid,isvalid:null,rgrid:[],fld:"CAIXATRABALHOID",gxz:"Z3443CaixaTrabalhoId",gxold:"O3443CaixaTrabalhoId",gxvar:"A3443CaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3443CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3443CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOID",row || gx.fn.currentGridRowImpl(88),gx.O.A3443CaixaTrabalhoId,0)},c2v:function(){gx.O.A3443CaixaTrabalhoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHOID",row || gx.fn.currentGridRowImpl(88),'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHODTABERTURA",gxz:"Z3437CaixaTrabalhoDtAbertura",gxold:"O3437CaixaTrabalhoDtAbertura",gxvar:"A3437CaixaTrabalhoDtAbertura",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHODTABERTURA",row || gx.fn.currentGridRowImpl(88),gx.O.A3437CaixaTrabalhoDtAbertura,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CAIXATRABALHODTABERTURA",row || gx.fn.currentGridRowImpl(88))},nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHODTFECHAMENTO",gxz:"Z3438CaixaTrabalhoDtFechamento",gxold:"O3438CaixaTrabalhoDtFechamento",gxvar:"A3438CaixaTrabalhoDtFechamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHODTFECHAMENTO",row || gx.fn.currentGridRowImpl(88),gx.O.A3438CaixaTrabalhoDtFechamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CAIXATRABALHODTFECHAMENTO",row || gx.fn.currentGridRowImpl(88))},nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PDVCODIGO",gxz:"Z3434PDVCodigo",gxold:"O3434PDVCodigo",gxvar:"A3434PDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3434PDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3434PDVCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PDVCODIGO",row || gx.fn.currentGridRowImpl(88),gx.O.A3434PDVCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3434PDVCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PDVCODIGO",row || gx.fn.currentGridRowImpl(88),'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHOUSUARIOID",gxz:"Z6613CaixaTrabalhoUsuarioId",gxold:"O6613CaixaTrabalhoUsuarioId",gxvar:"A6613CaixaTrabalhoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6613CaixaTrabalhoUsuarioId=Value},v2z:function(Value){gx.O.Z6613CaixaTrabalhoUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOUSUARIOID",row || gx.fn.currentGridRowImpl(88),gx.O.A6613CaixaTrabalhoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6613CaixaTrabalhoUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXATRABALHOUSUARIOID",row || gx.fn.currentGridRowImpl(88))},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLANCAMENTO",gxz:"ZV27bmpLancamento",gxold:"OV27bmpLancamento",gxvar:"AV27bmpLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpLancamento=Value},v2z:function(Value){gx.O.ZV27bmpLancamento=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLANCAMENTO",row || gx.fn.currentGridRowImpl(88),gx.O.AV27bmpLancamento,gx.O.AV58Bmplancamento_GXI)},c2v:function(){gx.O.AV58Bmplancamento_GXI=this.val_GXI();gx.O.AV27bmpLancamento=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLANCAMENTO",row || gx.fn.currentGridRowImpl(88))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLANCAMENTO_GXI",row || gx.fn.currentGridRowImpl(88))}, gxvar_GXI:'AV58Bmplancamento_GXI',nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(88),gx.O.AV7bmpAlt,gx.O.AV55Bmpalt_GXI)},c2v:function(){gx.O.AV55Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(88))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(88))}, gxvar_GXI:'AV55Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(88),gx.O.AV8bmpExc,gx.O.AV56Bmpexc_GXI)},c2v:function(){gx.O.AV56Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(88))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(88))}, gxvar_GXI:'AV56Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(88),gx.O.AV16bmpCon,gx.O.AV57Bmpcon_GXI)},c2v:function(){gx.O.AV57Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(88))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(88))}, gxvar_GXI:'AV57Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[100]={lvl:2,type:"svchar",len:300,dec:0,sign:false,ro:1,isacc:0,grid:88,gxgrid:this.GridContainer,fnc:this.Valid_Caixatrabalhosaidalanc,isvalid:null,rgrid:[],fld:"CAIXATRABALHOSAIDALANC",gxz:"Z6616CaixaTrabalhoSaidaLanc",gxold:"O6616CaixaTrabalhoSaidaLanc",gxvar:"A6616CaixaTrabalhoSaidaLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6616CaixaTrabalhoSaidaLanc=Value},v2z:function(Value){gx.O.Z6616CaixaTrabalhoSaidaLanc=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOSAIDALANC",row || gx.fn.currentGridRowImpl(88),gx.O.A6616CaixaTrabalhoSaidaLanc,0)},c2v:function(){gx.O.A6616CaixaTrabalhoSaidaLanc=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXATRABALHOSAIDALANC",row || gx.fn.currentGridRowImpl(88))},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPESQUISAR",gxz:"ZV40SnPesquisar",gxold:"OV40SnPesquisar",gxvar:"AV40SnPesquisar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40SnPesquisar=Value},v2z:function(Value){gx.O.ZV40SnPesquisar=Value},v2c:function(){gx.fn.setControlValue("vSNPESQUISAR",gx.O.AV40SnPesquisar,0)},c2v:function(){gx.O.AV40SnPesquisar=this.val()},val:function(){return gx.fn.getControlValue("vSNPESQUISAR")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[109]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOOOUT",gxz:"ZV45CooOut",gxold:"OV45CooOut",gxvar:"AV45CooOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45CooOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45CooOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOOOUT",gx.O.AV45CooOut,0)},c2v:function(){gx.O.AV45CooOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTOOUT",gxz:"ZV46DocumentoOut",gxold:"OV46DocumentoOut",gxvar:"AV46DocumentoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46DocumentoOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46DocumentoOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTOOUT",gx.O.AV46DocumentoOut,0)},c2v:function(){gx.O.AV46DocumentoOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERIEOUT",gxz:"ZV47SerieOut",gxold:"OV47SerieOut",gxvar:"AV47SerieOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47SerieOut=Value},v2z:function(Value){gx.O.ZV47SerieOut=Value},v2c:function(){gx.fn.setControlValue("vSERIEOUT",gx.O.AV47SerieOut,0)},c2v:function(){gx.O.AV47SerieOut=this.val()},val:function(){return gx.fn.getControlValue("vSERIEOUT")},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vECFOUT",gxz:"ZV48ECFOut",gxold:"OV48ECFOut",gxvar:"AV48ECFOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48ECFOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48ECFOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vECFOUT",gx.O.AV48ECFOut,0)},c2v:function(){gx.O.AV48ECFOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vECFOUT",'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAIDAUX",gxz:"ZV43SaidaIdAux",gxold:"OV43SaidaIdAux",gxvar:"AV43SaidaIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43SaidaIdAux=Value},v2z:function(Value){gx.O.ZV43SaidaIdAux=Value},v2c:function(){gx.fn.setControlValue("vSAIDAIDAUX",gx.O.AV43SaidaIdAux,0)},c2v:function(){gx.O.AV43SaidaIdAux=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAIDAUX")},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV44Tipo",gxold:"OV44Tipo",gxvar:"AV44Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44Tipo=Value},v2z:function(Value){gx.O.ZV44Tipo=Value},v2c:function(){gx.fn.setControlValue("vTIPO",gx.O.AV44Tipo,0)},c2v:function(){gx.O.AV44Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   GXValidFnc[116]={fld:"PROMPT_USUARIOCAIXAID",grid:0};
   this.AV38CaixaTrabalhoNumeroLoja = 0 ;
   this.ZV38CaixaTrabalhoNumeroLoja = 0 ;
   this.OV38CaixaTrabalhoNumeroLoja = 0 ;
   this.AV31CaixaTrabalhoDtAberturaIn = gx.date.nullDate() ;
   this.ZV31CaixaTrabalhoDtAberturaIn = gx.date.nullDate() ;
   this.OV31CaixaTrabalhoDtAberturaIn = gx.date.nullDate() ;
   this.AV33CaixaTrabalhoDtAberturaFin = gx.date.nullDate() ;
   this.ZV33CaixaTrabalhoDtAberturaFin = gx.date.nullDate() ;
   this.OV33CaixaTrabalhoDtAberturaFin = gx.date.nullDate() ;
   this.AV39CaixaTrabalhoSequenciaECF = 0 ;
   this.ZV39CaixaTrabalhoSequenciaECF = 0 ;
   this.OV39CaixaTrabalhoSequenciaECF = 0 ;
   this.AV32CaixaTrabalhoDtFechamentoIn = gx.date.nullDate() ;
   this.ZV32CaixaTrabalhoDtFechamentoIn = gx.date.nullDate() ;
   this.OV32CaixaTrabalhoDtFechamentoIn = gx.date.nullDate() ;
   this.AV34CaixaTrabalhoDtFechamentoFin = gx.date.nullDate() ;
   this.ZV34CaixaTrabalhoDtFechamentoFin = gx.date.nullDate() ;
   this.OV34CaixaTrabalhoDtFechamentoFin = gx.date.nullDate() ;
   this.AV30CaixaTrabalhoId = 0 ;
   this.ZV30CaixaTrabalhoId = 0 ;
   this.OV30CaixaTrabalhoId = 0 ;
   this.AV42SaidaId = 0 ;
   this.ZV42SaidaId = 0 ;
   this.OV42SaidaId = 0 ;
   this.AV29UsuarioCaixaId = "" ;
   this.ZV29UsuarioCaixaId = "" ;
   this.OV29UsuarioCaixaId = "" ;
   this.AV28ApenasAberto = "" ;
   this.ZV28ApenasAberto = "" ;
   this.OV28ApenasAberto = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5776CaixaTrabalhoNumeroLoja = 0 ;
   this.O5776CaixaTrabalhoNumeroLoja = 0 ;
   this.Z5777CaixaTrabalhoSequenciaECF = 0 ;
   this.O5777CaixaTrabalhoSequenciaECF = 0 ;
   this.Z3443CaixaTrabalhoId = 0 ;
   this.O3443CaixaTrabalhoId = 0 ;
   this.Z3437CaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.O3437CaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.Z3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.O3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.Z3434PDVCodigo = 0 ;
   this.O3434PDVCodigo = 0 ;
   this.Z6613CaixaTrabalhoUsuarioId = "" ;
   this.O6613CaixaTrabalhoUsuarioId = "" ;
   this.ZV27bmpLancamento = "" ;
   this.OV27bmpLancamento = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z6616CaixaTrabalhoSaidaLanc = "" ;
   this.O6616CaixaTrabalhoSaidaLanc = "" ;
   this.AV40SnPesquisar = "" ;
   this.ZV40SnPesquisar = "" ;
   this.OV40SnPesquisar = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV45CooOut = 0 ;
   this.ZV45CooOut = 0 ;
   this.OV45CooOut = 0 ;
   this.AV46DocumentoOut = 0 ;
   this.ZV46DocumentoOut = 0 ;
   this.OV46DocumentoOut = 0 ;
   this.AV47SerieOut = "" ;
   this.ZV47SerieOut = "" ;
   this.OV47SerieOut = "" ;
   this.AV48ECFOut = 0 ;
   this.ZV48ECFOut = 0 ;
   this.OV48ECFOut = 0 ;
   this.AV43SaidaIdAux = "" ;
   this.ZV43SaidaIdAux = "" ;
   this.OV43SaidaIdAux = "" ;
   this.AV44Tipo = "" ;
   this.ZV44Tipo = "" ;
   this.OV44Tipo = "" ;
   this.AV38CaixaTrabalhoNumeroLoja = 0 ;
   this.AV31CaixaTrabalhoDtAberturaIn = gx.date.nullDate() ;
   this.AV33CaixaTrabalhoDtAberturaFin = gx.date.nullDate() ;
   this.AV39CaixaTrabalhoSequenciaECF = 0 ;
   this.AV32CaixaTrabalhoDtFechamentoIn = gx.date.nullDate() ;
   this.AV34CaixaTrabalhoDtFechamentoFin = gx.date.nullDate() ;
   this.AV30CaixaTrabalhoId = 0 ;
   this.AV42SaidaId = 0 ;
   this.AV29UsuarioCaixaId = "" ;
   this.AV28ApenasAberto = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV40SnPesquisar = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV45CooOut = 0 ;
   this.AV46DocumentoOut = 0 ;
   this.AV47SerieOut = "" ;
   this.AV48ECFOut = 0 ;
   this.AV43SaidaIdAux = "" ;
   this.AV44Tipo = "" ;
   this.A3442CaixaTrabalhoEmpresaId = "" ;
   this.A5776CaixaTrabalhoNumeroLoja = 0 ;
   this.A5777CaixaTrabalhoSequenciaECF = 0 ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.A3437CaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.A3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.A3434PDVCodigo = 0 ;
   this.A6613CaixaTrabalhoUsuarioId = "" ;
   this.AV27bmpLancamento = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A6616CaixaTrabalhoSaidaLanc = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV49SnRecuperaFiltro = "" ;
   this.AV53Pgmname = "" ;
   this.Events = {"e11mi2_client": ["'ANTERIOR'", true] ,"e12mi2_client": ["'PROXIMO'", true] ,"e17mi2_client": ["VPAGINA.CLICK", true] ,"e13mi2_client": ["'NOVO'", true] ,"e14mi2_client": ["'FECHAR'", true] ,"e15mi2_client": ["'IMPRIMIR'", true] ,"e16mi2_client": ["'PROCURAR'", true] ,"e20mi2_client": ["'ALTERAR'", true] ,"e21mi2_client": ["'EXCLUIR'", true] ,"e22mi2_client": ["'CONSULTAR'", true] ,"e23mi2_client": ["'ABRELANCAMENTOS'", true] ,"e24mi2_client": ["'ATUALIZAPAGINA'", true] ,"e26mi2_client": ["ENTER", true] ,"e27mi2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpLancamento',fld:'vBMPLANCAMENTO'},{av:'gx.fn.getCtrlProperty("vBMPLANCAMENTO","Tooltiptext")',ctrl:'vBMPLANCAMENTO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV53Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpLancamento',fld:'vBMPLANCAMENTO'},{av:'gx.fn.getCtrlProperty("vBMPLANCAMENTO","Tooltiptext")',ctrl:'vBMPLANCAMENTO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV53Pgmname',fld:'vPGMNAME'}],[{ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Title")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Title")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Title'},{ctrl:'CAIXATRABALHOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOID","Title")',ctrl:'CAIXATRABALHOID',prop:'Title'},{ctrl:'CAIXATRABALHODTABERTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHODTABERTURA","Title")',ctrl:'CAIXATRABALHODTABERTURA',prop:'Title'},{ctrl:'CAIXATRABALHODTFECHAMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHODTFECHAMENTO","Title")',ctrl:'CAIXATRABALHODTFECHAMENTO',prop:'Title'},{ctrl:'CAIXATRABALHOUSUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOUSUARIOID","Title")',ctrl:'CAIXATRABALHOUSUARIOID',prop:'Title'},{ctrl:'PDVCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PDVCODIGO","Title")',ctrl:'PDVCODIGO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV40SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpLancamento',fld:'vBMPLANCAMENTO'},{av:'gx.fn.getCtrlProperty("vBMPLANCAMENTO","Tooltiptext")',ctrl:'vBMPLANCAMENTO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV53Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV40SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpLancamento',fld:'vBMPLANCAMENTO'},{av:'gx.fn.getCtrlProperty("vBMPLANCAMENTO","Tooltiptext")',ctrl:'vBMPLANCAMENTO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV53Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV40SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpLancamento',fld:'vBMPLANCAMENTO'},{av:'gx.fn.getCtrlProperty("vBMPLANCAMENTO","Tooltiptext")',ctrl:'vBMPLANCAMENTO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV53Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV40SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV40SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV53Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV53Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV53Pgmname',fld:'vPGMNAME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV54Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV50QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpLancamento',fld:'vBMPLANCAMENTO'},{av:'gx.fn.getCtrlProperty("vBMPLANCAMENTO","Tooltiptext")',ctrl:'vBMPLANCAMENTO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV53Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV40SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV40SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5776CaixaTrabalhoNumeroLoja',fld:'CAIXATRABALHONUMEROLOJA'},{av:'A5777CaixaTrabalhoSequenciaECF',fld:'CAIXATRABALHOSEQUENCIAECF'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV40SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV53Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A5776CaixaTrabalhoNumeroLoja',fld:'CAIXATRABALHONUMEROLOJA'},{av:'A5777CaixaTrabalhoSequenciaECF',fld:'CAIXATRABALHOSEQUENCIAECF'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV40SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV53Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5776CaixaTrabalhoNumeroLoja',fld:'CAIXATRABALHONUMEROLOJA'},{av:'A5777CaixaTrabalhoSequenciaECF',fld:'CAIXATRABALHOSEQUENCIAECF'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV40SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV53Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ABRELANCAMENTOS'"] = [[{av:'A5776CaixaTrabalhoNumeroLoja',fld:'CAIXATRABALHONUMEROLOJA'},{av:'A5777CaixaTrabalhoSequenciaECF',fld:'CAIXATRABALHOSEQUENCIAECF'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV31CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV33CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV39CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV32CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'},{av:'AV34CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV30CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV42SaidaId',fld:'vSAIDAID'},{av:'AV29UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV28ApenasAberto',fld:'vAPENASABERTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV43SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpLancamento',fld:'vBMPLANCAMENTO'},{av:'gx.fn.getCtrlProperty("vBMPLANCAMENTO","Tooltiptext")',ctrl:'vBMPLANCAMENTO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV53Pgmname',fld:'vPGMNAME'}],[]];
   this.setPrompt("BTNPROMPTSAIDA", [115,49,113,110,112,111]);
   this.setPrompt("PROMPT_USUARIOCAIXAID", [55]);
   this.setVCMap("A3442CaixaTrabalhoEmpresaId", "CAIXATRABALHOEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV49SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV53Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV49SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV53Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar(this.GXValidFnc[109]);
   GridContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV27bmpLancamento", rfrProp:"Value", gxAttId:"Bmplancamento"});
   GridContainer.addRefreshingVar({rfrVar:"AV27bmpLancamento", rfrProp:"Tooltiptext", gxAttId:"Bmplancamento"});
   GridContainer.addRefreshingVar({rfrVar:"A5776CaixaTrabalhoNumeroLoja", rfrProp:"Visible", gxAttId:"5776"});
   GridContainer.addRefreshingVar({rfrVar:"A5777CaixaTrabalhoSequenciaECF", rfrProp:"Visible", gxAttId:"5777"});
   GridContainer.addRefreshingVar({rfrVar:"AV49SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV53Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcaixatrabalho());
