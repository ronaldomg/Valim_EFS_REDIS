/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:49.45
*/
gx.evt.autoSkip = false;
gx.define('hconsultacaixatrabalho', false, function () {
   this.ServerClass =  "hconsultacaixatrabalho" ;
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
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A3442CaixaTrabalhoEmpresaId=gx.fn.getControlValue("CAIXATRABALHOEMPRESAID") ;
      this.AV24cCaixaTrabalhoId=gx.fn.getIntegerValue("vCCAIXATRABALHOID",'.') ;
   };
   this.Valid_Caixatrabalhonumeroloja=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHONUMEROLOJA", gx.fn.currentGridRowImpl(64));
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
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHOSEQUENCIAECF", gx.fn.currentGridRowImpl(64));
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
         if(  gx.fn.currentGridRowImpl(64) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHOID", gx.fn.currentGridRowImpl(64));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e17mv2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11mv2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12mv2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13mv2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14mv2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15mv2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19mv2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21mv1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,31,33,36,38,40,42,45,47,49,52,54,55,56,57,59,65,66,67,68,69,70,71,72,78,81,83,85,87,89,90,91,92,93,94,95,96,97,98];
   this.GXLastCtrlId =98;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",64,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacaixatrabalho",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5776,65,"CAIXATRABALHONUMEROLOJA","","","CaixaTrabalhoNumeroLoja","int",0,"px",4,4,"right",null,[],5776,"CaixaTrabalhoNumeroLoja",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5777,66,"CAIXATRABALHOSEQUENCIAECF","","","CaixaTrabalhoSequenciaECF","int",0,"px",3,3,"right",null,[],5777,"CaixaTrabalhoSequenciaECF",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3443,67,"CAIXATRABALHOID","","","CaixaTrabalhoId","int",0,"px",10,10,"right",null,[],3443,"CaixaTrabalhoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3437,68,"CAIXATRABALHODTABERTURA","","","CaixaTrabalhoDtAbertura","date",0,"px",10,10,"right",null,[],3437,"CaixaTrabalhoDtAbertura",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3438,69,"CAIXATRABALHODTFECHAMENTO","","","CaixaTrabalhoDtFechamento","date",0,"px",10,10,"right",null,[],3438,"CaixaTrabalhoDtFechamento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6613,70,"CAIXATRABALHOUSUARIOID","","","CaixaTrabalhoUsuarioId","char",0,"px",12,12,"left",null,[],6613,"CaixaTrabalhoUsuarioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3434,71,"PDVCODIGO","","","PDVCodigo","int",0,"px",10,10,"right",null,[],3434,"PDVCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6616,72,"CAIXATRABALHOSAIDALANC","Saídas do Lançamento","","CaixaTrabalhoSaidaLanc","svchar",0,"px",300,80,"left",null,[],6616,"CaixaTrabalhoSaidaLanc",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXATRABALHONUMEROLOJA",gxz:"ZV25CaixaTrabalhoNumeroLoja",gxold:"OV25CaixaTrabalhoNumeroLoja",gxvar:"AV25CaixaTrabalhoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHONUMEROLOJA",gx.O.AV25CaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.AV25CaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHONUMEROLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOCAIXAID",gxz:"ZV20UsuarioCaixaId",gxold:"OV20UsuarioCaixaId",gxvar:"AV20UsuarioCaixaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20UsuarioCaixaId=Value},v2z:function(Value){gx.O.ZV20UsuarioCaixaId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOCAIXAID",gx.O.AV20UsuarioCaixaId,0)},c2v:function(){gx.O.AV20UsuarioCaixaId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOCAIXAID")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXATRABALHOSEQUENCIAECF",gxz:"ZV26CaixaTrabalhoSequenciaECF",gxold:"OV26CaixaTrabalhoSequenciaECF",gxvar:"AV26CaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHOSEQUENCIAECF",gx.O.AV26CaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.AV26CaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHOSEQUENCIAECF",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLERANGEABERTURA",grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXATRABALHODTABERTURAIN",gxz:"ZV17CaixaTrabalhoDtAberturaIn",gxold:"OV17CaixaTrabalhoDtAberturaIn",gxvar:"AV17CaixaTrabalhoDtAberturaIn",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17CaixaTrabalhoDtAberturaIn=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV17CaixaTrabalhoDtAberturaIn=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHODTABERTURAIN",gx.O.AV17CaixaTrabalhoDtAberturaIn,0)},c2v:function(){gx.O.AV17CaixaTrabalhoDtAberturaIn=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCAIXATRABALHODTABERTURAIN")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXATRABALHODTABERTURAFIN",gxz:"ZV18CaixaTrabalhoDtAberturaFin",gxold:"OV18CaixaTrabalhoDtAberturaFin",gxvar:"AV18CaixaTrabalhoDtAberturaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18CaixaTrabalhoDtAberturaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV18CaixaTrabalhoDtAberturaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHODTABERTURAFIN",gx.O.AV18CaixaTrabalhoDtAberturaFin,0)},c2v:function(){gx.O.AV18CaixaTrabalhoDtAberturaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCAIXATRABALHODTABERTURAFIN")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXATRABALHOID",gxz:"ZV16CaixaTrabalhoId",gxold:"OV16CaixaTrabalhoId",gxvar:"AV16CaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHOID",gx.O.AV16CaixaTrabalhoId,0)},c2v:function(){gx.O.AV16CaixaTrabalhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHOID",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLERANGEFECHAMENTO",grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXATRABALHODTFECHAMENTOIN",gxz:"ZV21CaixaTrabalhoDtFechamentoIn",gxold:"OV21CaixaTrabalhoDtFechamentoIn",gxvar:"AV21CaixaTrabalhoDtFechamentoIn",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CaixaTrabalhoDtFechamentoIn=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21CaixaTrabalhoDtFechamentoIn=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHODTFECHAMENTOIN",gx.O.AV21CaixaTrabalhoDtFechamentoIn,0)},c2v:function(){gx.O.AV21CaixaTrabalhoDtFechamentoIn=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCAIXATRABALHODTFECHAMENTOIN")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXATRABALHODTFECHAMENTOFIN",gxz:"ZV22CaixaTrabalhoDtFechamentoFin",gxold:"OV22CaixaTrabalhoDtFechamentoFin",gxvar:"AV22CaixaTrabalhoDtFechamentoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CaixaTrabalhoDtFechamentoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22CaixaTrabalhoDtFechamentoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHODTFECHAMENTOFIN",gx.O.AV22CaixaTrabalhoDtFechamentoFin,0)},c2v:function(){gx.O.AV22CaixaTrabalhoDtFechamentoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCAIXATRABALHODTFECHAMENTOFIN")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAID",gxz:"ZV30SaidaId",gxold:"OV30SaidaId",gxvar:"AV30SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV30SaidaId,0)},c2v:function(){gx.O.AV30SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAIDAUX",gxz:"ZV32SaidaIdAux",gxold:"OV32SaidaIdAux",gxvar:"AV32SaidaIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32SaidaIdAux=Value},v2z:function(Value){gx.O.ZV32SaidaIdAux=Value},v2c:function(){gx.fn.setControlValue("vSAIDAIDAUX",gx.O.AV32SaidaIdAux,0)},c2v:function(){gx.O.AV32SaidaIdAux=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAIDAUX")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"BTNPROMPTSAIDA",grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV33Tipo",gxold:"OV33Tipo",gxvar:"AV33Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Tipo=Value},v2z:function(Value){gx.O.ZV33Tipo=Value},v2c:function(){gx.fn.setControlValue("vTIPO",gx.O.AV33Tipo,0)},c2v:function(){gx.O.AV33Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPENASABERTO",gxz:"ZV19ApenasAberto",gxold:"OV19ApenasAberto",gxvar:"AV19ApenasAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV19ApenasAberto=Value},v2z:function(Value){gx.O.ZV19ApenasAberto=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPENASABERTO",gx.O.AV19ApenasAberto,"S")},c2v:function(){gx.O.AV19ApenasAberto=this.val()},val:function(){return gx.fn.getControlValue("vAPENASABERTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[65]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:this.Valid_Caixatrabalhonumeroloja,isvalid:null,rgrid:[],fld:"CAIXATRABALHONUMEROLOJA",gxz:"Z5776CaixaTrabalhoNumeroLoja",gxold:"O5776CaixaTrabalhoNumeroLoja",gxvar:"A5776CaixaTrabalhoNumeroLoja",ucs:[],op:[72,68,69,70,71],ip:[72,68,69,70,71,67,66,65],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHONUMEROLOJA",row || gx.fn.currentGridRowImpl(64),gx.O.A5776CaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHONUMEROLOJA",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:this.Valid_Caixatrabalhosequenciaecf,isvalid:null,rgrid:[],fld:"CAIXATRABALHOSEQUENCIAECF",gxz:"Z5777CaixaTrabalhoSequenciaECF",gxold:"O5777CaixaTrabalhoSequenciaECF",gxvar:"A5777CaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(64),gx.O.A5777CaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:this.Valid_Caixatrabalhoid,isvalid:null,rgrid:[],fld:"CAIXATRABALHOID",gxz:"Z3443CaixaTrabalhoId",gxold:"O3443CaixaTrabalhoId",gxvar:"A3443CaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3443CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3443CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOID",row || gx.fn.currentGridRowImpl(64),gx.O.A3443CaixaTrabalhoId,0)},c2v:function(){gx.O.A3443CaixaTrabalhoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHOID",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHODTABERTURA",gxz:"Z3437CaixaTrabalhoDtAbertura",gxold:"O3437CaixaTrabalhoDtAbertura",gxvar:"A3437CaixaTrabalhoDtAbertura",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHODTABERTURA",row || gx.fn.currentGridRowImpl(64),gx.O.A3437CaixaTrabalhoDtAbertura,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CAIXATRABALHODTABERTURA",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHODTFECHAMENTO",gxz:"Z3438CaixaTrabalhoDtFechamento",gxold:"O3438CaixaTrabalhoDtFechamento",gxvar:"A3438CaixaTrabalhoDtFechamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHODTFECHAMENTO",row || gx.fn.currentGridRowImpl(64),gx.O.A3438CaixaTrabalhoDtFechamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CAIXATRABALHODTFECHAMENTO",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHOUSUARIOID",gxz:"Z6613CaixaTrabalhoUsuarioId",gxold:"O6613CaixaTrabalhoUsuarioId",gxvar:"A6613CaixaTrabalhoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6613CaixaTrabalhoUsuarioId=Value},v2z:function(Value){gx.O.Z6613CaixaTrabalhoUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOUSUARIOID",row || gx.fn.currentGridRowImpl(64),gx.O.A6613CaixaTrabalhoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6613CaixaTrabalhoUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXATRABALHOUSUARIOID",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PDVCODIGO",gxz:"Z3434PDVCodigo",gxold:"O3434PDVCodigo",gxvar:"A3434PDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3434PDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3434PDVCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PDVCODIGO",row || gx.fn.currentGridRowImpl(64),gx.O.A3434PDVCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3434PDVCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PDVCODIGO",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"svchar",len:300,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHOSAIDALANC",gxz:"Z6616CaixaTrabalhoSaidaLanc",gxold:"O6616CaixaTrabalhoSaidaLanc",gxvar:"A6616CaixaTrabalhoSaidaLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6616CaixaTrabalhoSaidaLanc=Value},v2z:function(Value){gx.O.Z6616CaixaTrabalhoSaidaLanc=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOSAIDALANC",row || gx.fn.currentGridRowImpl(64),gx.O.A6616CaixaTrabalhoSaidaLanc,0)},c2v:function(){gx.O.A6616CaixaTrabalhoSaidaLanc=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXATRABALHOSAIDALANC",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TABLENAV",grid:0};
   GXValidFnc[81]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[83]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[85]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[87]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[89]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[90]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vECFOUT",gxz:"ZV37ECFOut",gxold:"OV37ECFOut",gxvar:"AV37ECFOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ECFOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37ECFOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vECFOUT",gx.O.AV37ECFOut,0)},c2v:function(){gx.O.AV37ECFOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vECFOUT",'.')},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERIEOUT",gxz:"ZV36SerieOut",gxold:"OV36SerieOut",gxvar:"AV36SerieOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36SerieOut=Value},v2z:function(Value){gx.O.ZV36SerieOut=Value},v2c:function(){gx.fn.setControlValue("vSERIEOUT",gx.O.AV36SerieOut,0)},c2v:function(){gx.O.AV36SerieOut=this.val()},val:function(){return gx.fn.getControlValue("vSERIEOUT")},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTOOUT",gxz:"ZV35DocumentoOut",gxold:"OV35DocumentoOut",gxvar:"AV35DocumentoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35DocumentoOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35DocumentoOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTOOUT",gx.O.AV35DocumentoOut,0)},c2v:function(){gx.O.AV35DocumentoOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[93]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV28Pagina",gxold:"OV28Pagina",gxvar:"AV28Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV28Pagina)},c2v:function(){gx.O.AV28Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV29PaginaAux",gxold:"OV29PaginaAux",gxvar:"AV29PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV29PaginaAux,0)},c2v:function(){gx.O.AV29PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOOOUT",gxz:"ZV34CooOut",gxold:"OV34CooOut",gxvar:"AV34CooOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34CooOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34CooOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOOOUT",gx.O.AV34CooOut,0)},c2v:function(){gx.O.AV34CooOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"PROMPT_USUARIOCAIXAID",grid:0};
   this.AV25CaixaTrabalhoNumeroLoja = 0 ;
   this.ZV25CaixaTrabalhoNumeroLoja = 0 ;
   this.OV25CaixaTrabalhoNumeroLoja = 0 ;
   this.AV20UsuarioCaixaId = "" ;
   this.ZV20UsuarioCaixaId = "" ;
   this.OV20UsuarioCaixaId = "" ;
   this.AV26CaixaTrabalhoSequenciaECF = 0 ;
   this.ZV26CaixaTrabalhoSequenciaECF = 0 ;
   this.OV26CaixaTrabalhoSequenciaECF = 0 ;
   this.AV17CaixaTrabalhoDtAberturaIn = gx.date.nullDate() ;
   this.ZV17CaixaTrabalhoDtAberturaIn = gx.date.nullDate() ;
   this.OV17CaixaTrabalhoDtAberturaIn = gx.date.nullDate() ;
   this.AV18CaixaTrabalhoDtAberturaFin = gx.date.nullDate() ;
   this.ZV18CaixaTrabalhoDtAberturaFin = gx.date.nullDate() ;
   this.OV18CaixaTrabalhoDtAberturaFin = gx.date.nullDate() ;
   this.AV16CaixaTrabalhoId = 0 ;
   this.ZV16CaixaTrabalhoId = 0 ;
   this.OV16CaixaTrabalhoId = 0 ;
   this.AV21CaixaTrabalhoDtFechamentoIn = gx.date.nullDate() ;
   this.ZV21CaixaTrabalhoDtFechamentoIn = gx.date.nullDate() ;
   this.OV21CaixaTrabalhoDtFechamentoIn = gx.date.nullDate() ;
   this.AV22CaixaTrabalhoDtFechamentoFin = gx.date.nullDate() ;
   this.ZV22CaixaTrabalhoDtFechamentoFin = gx.date.nullDate() ;
   this.OV22CaixaTrabalhoDtFechamentoFin = gx.date.nullDate() ;
   this.AV30SaidaId = 0 ;
   this.ZV30SaidaId = 0 ;
   this.OV30SaidaId = 0 ;
   this.AV32SaidaIdAux = "" ;
   this.ZV32SaidaIdAux = "" ;
   this.OV32SaidaIdAux = "" ;
   this.AV33Tipo = "" ;
   this.ZV33Tipo = "" ;
   this.OV33Tipo = "" ;
   this.AV19ApenasAberto = "" ;
   this.ZV19ApenasAberto = "" ;
   this.OV19ApenasAberto = "" ;
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
   this.Z6613CaixaTrabalhoUsuarioId = "" ;
   this.O6613CaixaTrabalhoUsuarioId = "" ;
   this.Z3434PDVCodigo = 0 ;
   this.O3434PDVCodigo = 0 ;
   this.Z6616CaixaTrabalhoSaidaLanc = "" ;
   this.O6616CaixaTrabalhoSaidaLanc = "" ;
   this.AV37ECFOut = 0 ;
   this.ZV37ECFOut = 0 ;
   this.OV37ECFOut = 0 ;
   this.AV36SerieOut = "" ;
   this.ZV36SerieOut = "" ;
   this.OV36SerieOut = "" ;
   this.AV35DocumentoOut = 0 ;
   this.ZV35DocumentoOut = 0 ;
   this.OV35DocumentoOut = 0 ;
   this.AV28Pagina = 0 ;
   this.ZV28Pagina = 0 ;
   this.OV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.ZV29PaginaAux = 0 ;
   this.OV29PaginaAux = 0 ;
   this.AV34CooOut = 0 ;
   this.ZV34CooOut = 0 ;
   this.OV34CooOut = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV25CaixaTrabalhoNumeroLoja = 0 ;
   this.AV20UsuarioCaixaId = "" ;
   this.AV26CaixaTrabalhoSequenciaECF = 0 ;
   this.AV17CaixaTrabalhoDtAberturaIn = gx.date.nullDate() ;
   this.AV18CaixaTrabalhoDtAberturaFin = gx.date.nullDate() ;
   this.AV16CaixaTrabalhoId = 0 ;
   this.AV21CaixaTrabalhoDtFechamentoIn = gx.date.nullDate() ;
   this.AV22CaixaTrabalhoDtFechamentoFin = gx.date.nullDate() ;
   this.AV30SaidaId = 0 ;
   this.AV32SaidaIdAux = "" ;
   this.AV33Tipo = "" ;
   this.AV19ApenasAberto = "" ;
   this.AV37ECFOut = 0 ;
   this.AV36SerieOut = "" ;
   this.AV35DocumentoOut = 0 ;
   this.AV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.AV34CooOut = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV24cCaixaTrabalhoId = 0 ;
   this.A3442CaixaTrabalhoEmpresaId = "" ;
   this.A5776CaixaTrabalhoNumeroLoja = 0 ;
   this.A5777CaixaTrabalhoSequenciaECF = 0 ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.A3437CaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.A3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.A6613CaixaTrabalhoUsuarioId = "" ;
   this.A3434PDVCodigo = 0 ;
   this.A6616CaixaTrabalhoSaidaLanc = "" ;
   this.Events = {"e17mv2_client": ["ENTER", true] ,"e11mv2_client": ["'GXM_FIRST'", true] ,"e12mv2_client": ["'GXM_PREVIOUS'", true] ,"e13mv2_client": ["'GXM_NEXT'", true] ,"e14mv2_client": ["'GXM_LAST'", true] ,"e15mv2_client": ["'PROCURAR'", true] ,"e19mv2_client": ["'ATUALIZAPAGINA'", true] ,"e21mv1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Title")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Title")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Title'},{ctrl:'CAIXATRABALHOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOID","Title")',ctrl:'CAIXATRABALHOID',prop:'Title'},{ctrl:'CAIXATRABALHODTABERTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHODTABERTURA","Title")',ctrl:'CAIXATRABALHODTABERTURA',prop:'Title'},{ctrl:'CAIXATRABALHODTFECHAMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHODTFECHAMENTO","Title")',ctrl:'CAIXATRABALHODTFECHAMENTO',prop:'Title'},{ctrl:'CAIXATRABALHOUSUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOUSUARIOID","Title")',ctrl:'CAIXATRABALHOUSUARIOID',prop:'Title'},{ctrl:'PDVCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PDVCODIGO","Title")',ctrl:'PDVCODIGO',prop:'Title'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV27NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'}],[{av:'AV24cCaixaTrabalhoId',fld:'vCCAIXATRABALHOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV28Pagina',fld:'vPAGINA'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'},{av:'AV30SaidaId',fld:'vSAIDAID'},{av:'AV18CaixaTrabalhoDtAberturaFin',fld:'vCAIXATRABALHODTABERTURAFIN'},{av:'AV17CaixaTrabalhoDtAberturaIn',fld:'vCAIXATRABALHODTABERTURAIN'},{av:'AV22CaixaTrabalhoDtFechamentoFin',fld:'vCAIXATRABALHODTFECHAMENTOFIN'},{av:'AV21CaixaTrabalhoDtFechamentoIn',fld:'vCAIXATRABALHODTFECHAMENTOIN'}],[{av:'AV32SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHONUMEROLOJA","Visible")',ctrl:'CAIXATRABALHONUMEROLOJA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CAIXATRABALHOSEQUENCIAECF","Visible")',ctrl:'CAIXATRABALHOSEQUENCIAECF',prop:'Visible'}],[]];
   this.setPrompt("BTNPROMPTSAIDA", [57,54,90,96,91,92]);
   this.setPrompt("PROMPT_USUARIOCAIXAID", [17]);
   this.setVCMap("A3442CaixaTrabalhoEmpresaId", "CAIXATRABALHOEMPRESAID", 0, "char");
   this.setVCMap("AV24cCaixaTrabalhoId", "vCCAIXATRABALHOID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[97]);
   GridContainer.addRefreshingVar({rfrVar:"A5776CaixaTrabalhoNumeroLoja", rfrProp:"Visible", gxAttId:"5776"});
   GridContainer.addRefreshingVar({rfrVar:"A5777CaixaTrabalhoSequenciaECF", rfrProp:"Visible", gxAttId:"5777"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacaixatrabalho());
