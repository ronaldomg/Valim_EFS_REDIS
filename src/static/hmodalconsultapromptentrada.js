/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:32:58.27
*/
gx.evt.autoSkip = false;
gx.define('hmodalconsultapromptentrada', false, function () {
   this.ServerClass =  "hmodalconsultapromptentrada" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV24Modo=gx.fn.getControlValue("vMODO") ;
      this.AV49EntradaEmpresaId=gx.fn.getControlValue("vENTRADAEMPRESAID") ;
      this.A950BancoEmpresaId=gx.fn.getControlValue("BANCOEMPRESAID") ;
      this.AV65BancoEmpresaId=gx.fn.getControlValue("vBANCOEMPRESAID") ;
      this.A947BancoId=gx.fn.getIntegerValue("BANCOID",'.') ;
      this.AV64EntradaPagtoParcelaBancoId=gx.fn.getIntegerValue("vENTRADAPAGTOPARCELABANCOID",'.') ;
      this.A948BancoNome=gx.fn.getControlValue("BANCONOME") ;
      this.AV67Tipo=gx.fn.getControlValue("vTIPO") ;
      this.AV82EntradaSnNotaEntAux=gx.fn.getControlValue("vENTRADASNNOTAENTAUX") ;
      this.AV74EntradaSnAjusteAux=gx.fn.getControlValue("vENTRADASNAJUSTEAUX") ;
      this.AV75EntradaSnNotaCompAux=gx.fn.getControlValue("vENTRADASNNOTACOMPAUX") ;
      this.AV76EntradaSnDevolucaoAux=gx.fn.getControlValue("vENTRADASNDEVOLUCAOAUX") ;
      this.AV77EntradaSnAjusteEntAux=gx.fn.getControlValue("vENTRADASNAJUSTEENTAUX") ;
      this.AV78EntradaSnTrocaAux=gx.fn.getControlValue("vENTRADASNTROCAAUX") ;
      this.AV79EntradaSnTransfAux=gx.fn.getControlValue("vENTRADASNTRANSFAUX") ;
   };
   this.Validv_Entradaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradafilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradafornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entradapagtoparcelacontaprnume=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(104) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ENTRADAPAGTOPARCELACONTAPRNUME", gx.fn.currentGridRowImpl(104));
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
   this.Valid_Entradapagtoparcelalancxabconu=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(104) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ENTRADAPAGTOPARCELALANCXABCONU", gx.fn.currentGridRowImpl(104));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e15yo1_client=function()
   {
      this.clearMessages();
      if ( this.AV67Tipo == "N" )
      {
         this.AV83EntradaSnNotaEnt =  "S"  ;
         this.AV68EntradaSnAjuste =  "S"  ;
         this.AV69EntradaSnNotaComp =  "S"  ;
      }
      else if ( this.AV67Tipo == "O" )
      {
         this.AV70EntradaSnDevolucao =  "S"  ;
         this.AV71EntradaSnAjusteEnt =  "S"  ;
         this.AV72EntradaSnTroca =  "S"  ;
         this.AV73EntradaSnTransf =  "S"  ;
      }
      else if ( this.AV67Tipo == "T" )
      {
         this.AV83EntradaSnNotaEnt =  "S"  ;
         this.AV68EntradaSnAjuste =  "S"  ;
         this.AV69EntradaSnNotaComp =  "S"  ;
         this.AV70EntradaSnDevolucao =  "S"  ;
         this.AV71EntradaSnAjusteEnt =  "S"  ;
         this.AV72EntradaSnTroca =  "S"  ;
         this.AV73EntradaSnTransf =  "S"  ;
      }
      this.refreshOutputs([{av:'AV83EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV68EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV69EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV70EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV71EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV72EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV73EntradaSnTransf',fld:'vENTRADASNTRANSF'}]);
   };
   this.e16yo1_client=function()
   {
      this.clearMessages();
      this.AV83EntradaSnNotaEnt =  "N"  ;
      this.AV68EntradaSnAjuste =  "N"  ;
      this.AV69EntradaSnNotaComp =  "N"  ;
      this.AV70EntradaSnDevolucao =  "N"  ;
      this.AV71EntradaSnAjusteEnt =  "N"  ;
      this.AV72EntradaSnTroca =  "N"  ;
      this.AV73EntradaSnTransf =  "N"  ;
      this.refreshOutputs([{av:'AV83EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV68EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV69EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV70EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV71EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV72EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV73EntradaSnTransf',fld:'vENTRADASNTRANSF'}]);
   };
   this.s132_client=function()
   {
      this.AV81SNErro =  "S"  ;
      if ( this.AV67Tipo == "N" )
      {
         if ( this.AV70EntradaSnDevolucao == "S" )
         {
            this.addMessage("Não é permitido informar \"Entrada por Devolução\"");
            gx.fn.usrSetFocus("vENTRADASNDEVOLUCAO") ;
         }
         else if ( this.AV71EntradaSnAjusteEnt == "S" )
         {
            this.addMessage("Não é permitido informar \"Ajuste de Entrada\"");
            gx.fn.usrSetFocus("vENTRADASNAJUSTEENT") ;
         }
         else if ( this.AV72EntradaSnTroca == "S" )
         {
            this.addMessage("Não é permitido informar \"Troca\"");
            gx.fn.usrSetFocus("vENTRADASNTROCA") ;
         }
         else if ( this.AV73EntradaSnTransf == "S" )
         {
            this.addMessage("Não é permitido informar \"Transferência\"");
            gx.fn.usrSetFocus("vENTRADASNTRANSF") ;
         }
         else
         {
            this.AV81SNErro =  "N"  ;
         }
      }
      if ( this.AV67Tipo == "O" )
      {
         if ( this.AV83EntradaSnNotaEnt == "S" )
         {
            this.addMessage("Não é permitido informar \"Nota de Entrada Normal\"");
            gx.fn.usrSetFocus("vENTRADASNNOTAENT") ;
         }
         else if ( this.AV69EntradaSnNotaComp == "S" )
         {
            this.addMessage("Não é permitido informar \"Nota de Entrada Complementar\"");
            gx.fn.usrSetFocus("vENTRADASNNOTACOMP") ;
         }
         else if ( this.AV68EntradaSnAjuste == "S" )
         {
            this.addMessage("Não é permitido informar \"Nota de Entrada de Ajuste\"");
            gx.fn.usrSetFocus("vENTRADASNAJUSTE") ;
         }
         else
         {
            this.AV81SNErro =  "N"  ;
         }
      }
   };
   this.e11yo2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12yo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e17yo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,13,16,19,22,25,28,31,35,38,41,43,45,47,50,52,54,56,58,61,63,65,68,70,73,75,77,79,81,83,85,88,90,92,94,96,98,103,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120];
   this.GXLastCtrlId =120;
   this.GridparcelasContainer = new gx.grid.grid(this, 2,"WbpLvl2",104,"Gridparcelas","Gridparcelas","GridparcelasContainer",this.CmpContext,this.IsMasterPage,"hmodalconsultapromptentrada",[],false,1,true,true,5,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridparcelasContainer = this.GridparcelasContainer;
   GridparcelasContainer.addSingleLineEdit(4823,105,"ENTRADAPAGTOPARCELAITEM","Seq","","EntradaPagtoParcelaItem","char",0,"px",3,3,"left",null,[],4823,"EntradaPagtoParcelaItem",true,0,false,false,"SemQuebraGrid",1,"");
   GridparcelasContainer.addSingleLineEdit(4839,106,"ENTRADAPAGTOPARCELACONTAPRNUME","No. Conta","","EntradaPagtoParcelaContaPRNume","int",0,"px",8,8,"right",null,[],4839,"EntradaPagtoParcelaContaPRNume",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(4828,107,"ENTRADAPAGTOPARCELACONTABANC","Conta Bancária","","EntradaPagtoParcelaContaBanc","char",0,"px",10,10,"left",null,[],4828,"EntradaPagtoParcelaContaBanc",true,0,false,false,"SemQuebraGrid",1,"");
   GridparcelasContainer.addSingleLineEdit(4835,108,"ENTRADAPAGTOPARCELABANCOID","Banco","","EntradaPagtoParcelaBancoId","int",0,"px",3,3,"right",null,[],4835,"EntradaPagtoParcelaBancoId",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit("Entradapagtoparcelabanconome",109,"vENTRADAPAGTOPARCELABANCONOME","Nome Banco","","EntradaPagtoParcelaBancoNome","svchar",0,"px",25,25,"left",null,[],"Entradapagtoparcelabanconome","EntradaPagtoParcelaBancoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridparcelasContainer.addSingleLineEdit(4836,110,"ENTRADAPAGTOPARCELABANCOAGENCI","Agência","","EntradaPagtoParcelaBancoAgenci","int",0,"px",4,4,"right",null,[],4836,"EntradaPagtoParcelaBancoAgenci",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit("Situacao",111,"vSITUACAO","Situação","","Situacao","char",0,"px",12,12,"left",null,[],"Situacao","Situacao",true,0,false,false,"SemQuebraGrid",1,"");
   GridparcelasContainer.addSingleLineEdit(6359,112,"ENTRADAPAGTOPARCELACONTAPRDTPA","Dt Pagto","","EntradaPagtoParcelaContaPRDtPa","date",0,"px",10,10,"right",null,[],6359,"EntradaPagtoParcelaContaPRDtPa",true,0,false,false,"SemQuebraGrid",1,"");
   GridparcelasContainer.addSingleLineEdit(6355,113,"ENTRADAPAGTOPARCELACONTAPRSITU","Stuação da Conta a Pagar/Receber","","EntradaPagtoParcelaContaPRSitu","char",0,"px",1,1,"left",null,[],6355,"EntradaPagtoParcelaContaPRSitu",false,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(4841,114,"ENTRADAPAGTOPARCELALANCXABCONU","No. Lancmto","","EntradaPagtoParcelaLanCxaBcoNu","int",0,"px",8,8,"right",null,[],4841,"EntradaPagtoParcelaLanCxaBcoNu",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(6357,115,"ENTRADAPAGTOPARCELALANCXABCODA","Dt Lancmto","","EntradaPagtoParcelaLanCxaBcoDa","date",0,"px",10,10,"right",null,[],6357,"EntradaPagtoParcelaLanCxaBcoDa",true,0,false,false,"SemQuebraGrid",1,"");
   GridparcelasContainer.addSingleLineEdit(4830,116,"ENTRADAPAGTOPARCELANOCHEQUE","No. Cheque","","EntradaPagtoParcelaNoCheque","int",0,"px",6,6,"right",null,[],4830,"EntradaPagtoParcelaNoCheque",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(4829,117,"ENTRADAPAGTOPARCELANOSERCHE","Série","","EntradaPagtoParcelaNoSerChe","char",0,"px",3,3,"left",null,[],4829,"EntradaPagtoParcelaNoSerChe",true,0,false,false,"SemQuebraGrid",1,"");
   GridparcelasContainer.addSingleLineEdit(4825,118,"ENTRADAPAGTOPARCELAVALOR","Valor Parcela","","EntradaPagtoParcelaValor","decimal",0,"px",22,22,"right",null,[],4825,"EntradaPagtoParcelaValor",true,2,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(4824,119,"ENTRADAPAGTOPARCELAVENCIMENTO","Vencimento","","EntradaPagtoParcelaVencimento","date",0,"px",10,10,"right",null,[],4824,"EntradaPagtoParcelaVencimento",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridparcelasContainer);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABTIPO",grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNNOTAENT",gxz:"ZV83EntradaSnNotaEnt",gxold:"OV83EntradaSnNotaEnt",gxvar:"AV83EntradaSnNotaEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV83EntradaSnNotaEnt=Value},v2z:function(Value){gx.O.ZV83EntradaSnNotaEnt=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNNOTAENT",gx.O.AV83EntradaSnNotaEnt,"S")},c2v:function(){gx.O.AV83EntradaSnNotaEnt=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNNOTAENT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNNOTACOMP",gxz:"ZV69EntradaSnNotaComp",gxold:"OV69EntradaSnNotaComp",gxvar:"AV69EntradaSnNotaComp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV69EntradaSnNotaComp=Value},v2z:function(Value){gx.O.ZV69EntradaSnNotaComp=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNNOTACOMP",gx.O.AV69EntradaSnNotaComp,"S")},c2v:function(){gx.O.AV69EntradaSnNotaComp=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNNOTACOMP")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNAJUSTE",gxz:"ZV68EntradaSnAjuste",gxold:"OV68EntradaSnAjuste",gxvar:"AV68EntradaSnAjuste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV68EntradaSnAjuste=Value},v2z:function(Value){gx.O.ZV68EntradaSnAjuste=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNAJUSTE",gx.O.AV68EntradaSnAjuste,"S")},c2v:function(){gx.O.AV68EntradaSnAjuste=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNAJUSTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNDEVOLUCAO",gxz:"ZV70EntradaSnDevolucao",gxold:"OV70EntradaSnDevolucao",gxvar:"AV70EntradaSnDevolucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV70EntradaSnDevolucao=Value},v2z:function(Value){gx.O.ZV70EntradaSnDevolucao=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNDEVOLUCAO",gx.O.AV70EntradaSnDevolucao,"S")},c2v:function(){gx.O.AV70EntradaSnDevolucao=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNDEVOLUCAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNAJUSTEENT",gxz:"ZV71EntradaSnAjusteEnt",gxold:"OV71EntradaSnAjusteEnt",gxvar:"AV71EntradaSnAjusteEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV71EntradaSnAjusteEnt=Value},v2z:function(Value){gx.O.ZV71EntradaSnAjusteEnt=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNAJUSTEENT",gx.O.AV71EntradaSnAjusteEnt,"S")},c2v:function(){gx.O.AV71EntradaSnAjusteEnt=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNAJUSTEENT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNTROCA",gxz:"ZV72EntradaSnTroca",gxold:"OV72EntradaSnTroca",gxvar:"AV72EntradaSnTroca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV72EntradaSnTroca=Value},v2z:function(Value){gx.O.ZV72EntradaSnTroca=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNTROCA",gx.O.AV72EntradaSnTroca,"S")},c2v:function(){gx.O.AV72EntradaSnTroca=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNTROCA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNTRANSF",gxz:"ZV73EntradaSnTransf",gxold:"OV73EntradaSnTransf",gxvar:"AV73EntradaSnTransf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV73EntradaSnTransf=Value},v2z:function(Value){gx.O.ZV73EntradaSnTransf=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNTRANSF",gx.O.AV73EntradaSnTransf,"S")},c2v:function(){gx.O.AV73EntradaSnTransf=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNTRANSF")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[35]={fld:"TABGERAL",grid:0};
   GXValidFnc[38]={fld:"TABLE1",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Entradaid,isvalid:null,rgrid:[this.GridparcelasContainer],fld:"vENTRADAID",gxz:"ZV48EntradaId",gxold:"OV48EntradaId",gxvar:"AV48EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48EntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAID",gx.O.AV48EntradaId,0)},c2v:function(){gx.O.AV48EntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradafilialid,isvalid:null,rgrid:[],fld:"vENTRADAFILIALID",gxz:"ZV53EntradaFilialId",gxold:"OV53EntradaFilialId",gxvar:"AV53EntradaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53EntradaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53EntradaFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAFILIALID",gx.O.AV53EntradaFilialId,0)},c2v:function(){gx.O.AV53EntradaFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFILIALNOME",gxz:"ZV54EntradaFilialNome",gxold:"OV54EntradaFilialNome",gxvar:"AV54EntradaFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54EntradaFilialNome=Value},v2z:function(Value){gx.O.ZV54EntradaFilialNome=Value},v2c:function(){gx.fn.setControlValue("vENTRADAFILIALNOME",gx.O.AV54EntradaFilialNome,0)},c2v:function(){gx.O.AV54EntradaFilialNome=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[58]={fld:"TABLE5",grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacodigo,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACODIGO",gxz:"ZV57TransacaoEntradaCodigo",gxold:"OV57TransacaoEntradaCodigo",gxvar:"AV57TransacaoEntradaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57TransacaoEntradaCodigo=Value},v2z:function(Value){gx.O.ZV57TransacaoEntradaCodigo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACODIGO",gx.O.AV57TransacaoEntradaCodigo,0)},c2v:function(){gx.O.AV57TransacaoEntradaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADADESCRICAO",gxz:"ZV59TransacaoEntradaDescricao",gxold:"OV59TransacaoEntradaDescricao",gxvar:"AV59TransacaoEntradaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59TransacaoEntradaDescricao=Value},v2z:function(Value){gx.O.ZV59TransacaoEntradaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADADESCRICAO",gx.O.AV59TransacaoEntradaDescricao,0)},c2v:function(){gx.O.AV59TransacaoEntradaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[70]={fld:"TABLE3",grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradafornecedorid,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDORID",gxz:"ZV50EntradaFornecedorId",gxold:"OV50EntradaFornecedorId",gxvar:"AV50EntradaFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50EntradaFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50EntradaFornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAFORNECEDORID",gx.O.AV50EntradaFornecedorId,0)},c2v:function(){gx.O.AV50EntradaFornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDORFANTASIA",gxz:"ZV51EntradaFornecedorFantasia",gxold:"OV51EntradaFornecedorFantasia",gxvar:"AV51EntradaFornecedorFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51EntradaFornecedorFantasia=Value},v2z:function(Value){gx.O.ZV51EntradaFornecedorFantasia=Value},v2c:function(){gx.fn.setControlValue("vENTRADAFORNECEDORFANTASIA",gx.O.AV51EntradaFornecedorFantasia,0)},c2v:function(){gx.O.AV51EntradaFornecedorFantasia=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFORNECEDORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAEMISSAO",gxz:"ZV55EntradaDataEmissao",gxold:"OV55EntradaDataEmissao",gxvar:"AV55EntradaDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55EntradaDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV55EntradaDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADADATAEMISSAO",gx.O.AV55EntradaDataEmissao,0)},c2v:function(){gx.O.AV55EntradaDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADADATAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TXTSERIE", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASERIE",gxz:"ZV61EntradaSerie",gxold:"OV61EntradaSerie",gxvar:"AV61EntradaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61EntradaSerie=Value},v2z:function(Value){gx.O.ZV61EntradaSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADASERIE",gx.O.AV61EntradaSerie,0)},c2v:function(){gx.O.AV61EntradaSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASERIE")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADANUMERODOCUMENTO",gxz:"ZV52EntradaNumeroDocumento",gxold:"OV52EntradaNumeroDocumento",gxvar:"AV52EntradaNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52EntradaNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52EntradaNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADANUMERODOCUMENTO",gx.O.AV52EntradaNumeroDocumento,0)},c2v:function(){gx.O.AV52EntradaNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADANUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAENTRADA",gxz:"ZV56EntradaDataEntrada",gxold:"OV56EntradaDataEntrada",gxvar:"AV56EntradaDataEntrada",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56EntradaDataEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV56EntradaDataEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADADATAENTRADA",gx.O.AV56EntradaDataEntrada,0)},c2v:function(){gx.O.AV56EntradaDataEntrada=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADADATAENTRADA")},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TXTCFOP", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADACFOPCODIGO",gxz:"ZV60EntradaCFOPCodigo",gxold:"OV60EntradaCFOPCodigo",gxvar:"AV60EntradaCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60EntradaCFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60EntradaCFOPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADACFOPCODIGO",gx.O.AV60EntradaCFOPCodigo,0)},c2v:function(){gx.O.AV60EntradaCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADACFOPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"ROL3", format:2,grid:0};
   GXValidFnc[105]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELAITEM",gxz:"Z4823EntradaPagtoParcelaItem",gxold:"O4823EntradaPagtoParcelaItem",gxvar:"A4823EntradaPagtoParcelaItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4823EntradaPagtoParcelaItem=Value},v2z:function(Value){gx.O.Z4823EntradaPagtoParcelaItem=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELAITEM",row || gx.fn.currentGridRowImpl(104),gx.O.A4823EntradaPagtoParcelaItem,0)},c2v:function(){gx.O.A4823EntradaPagtoParcelaItem=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPAGTOPARCELAITEM",row || gx.fn.currentGridRowImpl(104))},nac:gx.falseFn};
   GXValidFnc[106]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:this.Valid_Entradapagtoparcelacontaprnume,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELACONTAPRNUME",gxz:"Z4839EntradaPagtoParcelaContaPRNume",gxold:"O4839EntradaPagtoParcelaContaPRNume",gxvar:"A4839EntradaPagtoParcelaContaPRNume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4839EntradaPagtoParcelaContaPRNume=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4839EntradaPagtoParcelaContaPRNume=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELACONTAPRNUME",row || gx.fn.currentGridRowImpl(104),gx.O.A4839EntradaPagtoParcelaContaPRNume,0)},c2v:function(){gx.O.A4839EntradaPagtoParcelaContaPRNume=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPAGTOPARCELACONTAPRNUME",row || gx.fn.currentGridRowImpl(104),'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELACONTABANC",gxz:"Z4828EntradaPagtoParcelaContaBanc",gxold:"O4828EntradaPagtoParcelaContaBanc",gxvar:"A4828EntradaPagtoParcelaContaBanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4828EntradaPagtoParcelaContaBanc=Value},v2z:function(Value){gx.O.Z4828EntradaPagtoParcelaContaBanc=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELACONTABANC",row || gx.fn.currentGridRowImpl(104),gx.O.A4828EntradaPagtoParcelaContaBanc,0)},c2v:function(){gx.O.A4828EntradaPagtoParcelaContaBanc=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPAGTOPARCELACONTABANC",row || gx.fn.currentGridRowImpl(104))},nac:gx.falseFn};
   GXValidFnc[108]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELABANCOID",gxz:"Z4835EntradaPagtoParcelaBancoId",gxold:"O4835EntradaPagtoParcelaBancoId",gxvar:"A4835EntradaPagtoParcelaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4835EntradaPagtoParcelaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4835EntradaPagtoParcelaBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELABANCOID",row || gx.fn.currentGridRowImpl(104),gx.O.A4835EntradaPagtoParcelaBancoId,0)},c2v:function(){gx.O.A4835EntradaPagtoParcelaBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPAGTOPARCELABANCOID",row || gx.fn.currentGridRowImpl(104),'.')},nac:gx.falseFn};
   GXValidFnc[109]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPAGTOPARCELABANCONOME",gxz:"ZV63EntradaPagtoParcelaBancoNome",gxold:"OV63EntradaPagtoParcelaBancoNome",gxvar:"AV63EntradaPagtoParcelaBancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV63EntradaPagtoParcelaBancoNome=Value},v2z:function(Value){gx.O.ZV63EntradaPagtoParcelaBancoNome=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPAGTOPARCELABANCONOME",row || gx.fn.currentGridRowImpl(104),gx.O.AV63EntradaPagtoParcelaBancoNome,0)},c2v:function(){gx.O.AV63EntradaPagtoParcelaBancoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPAGTOPARCELABANCONOME",row || gx.fn.currentGridRowImpl(104))},nac:gx.falseFn};
   GXValidFnc[110]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELABANCOAGENCI",gxz:"Z4836EntradaPagtoParcelaBancoAgenci",gxold:"O4836EntradaPagtoParcelaBancoAgenci",gxvar:"A4836EntradaPagtoParcelaBancoAgenci",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4836EntradaPagtoParcelaBancoAgenci=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4836EntradaPagtoParcelaBancoAgenci=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELABANCOAGENCI",row || gx.fn.currentGridRowImpl(104),gx.O.A4836EntradaPagtoParcelaBancoAgenci,0)},c2v:function(){gx.O.A4836EntradaPagtoParcelaBancoAgenci=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPAGTOPARCELABANCOAGENCI",row || gx.fn.currentGridRowImpl(104),'.')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:2,type:"char",len:12,dec:0,sign:false,ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAO",gxz:"ZV66Situacao",gxold:"OV66Situacao",gxvar:"AV66Situacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV66Situacao=Value},v2z:function(Value){gx.O.ZV66Situacao=Value},v2c:function(row){gx.fn.setGridControlValue("vSITUACAO",row || gx.fn.currentGridRowImpl(104),gx.O.AV66Situacao,0)},c2v:function(){gx.O.AV66Situacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vSITUACAO",row || gx.fn.currentGridRowImpl(104))},nac:gx.falseFn};
   GXValidFnc[112]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELACONTAPRDTPA",gxz:"Z6359EntradaPagtoParcelaContaPRDtPa",gxold:"O6359EntradaPagtoParcelaContaPRDtPa",gxvar:"A6359EntradaPagtoParcelaContaPRDtPa",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6359EntradaPagtoParcelaContaPRDtPa=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6359EntradaPagtoParcelaContaPRDtPa=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELACONTAPRDTPA",row || gx.fn.currentGridRowImpl(104),gx.O.A6359EntradaPagtoParcelaContaPRDtPa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6359EntradaPagtoParcelaContaPRDtPa=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ENTRADAPAGTOPARCELACONTAPRDTPA",row || gx.fn.currentGridRowImpl(104))},nac:gx.falseFn};
   GXValidFnc[113]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELACONTAPRSITU",gxz:"Z6355EntradaPagtoParcelaContaPRSitu",gxold:"O6355EntradaPagtoParcelaContaPRSitu",gxvar:"A6355EntradaPagtoParcelaContaPRSitu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6355EntradaPagtoParcelaContaPRSitu=Value},v2z:function(Value){gx.O.Z6355EntradaPagtoParcelaContaPRSitu=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELACONTAPRSITU",row || gx.fn.currentGridRowImpl(104),gx.O.A6355EntradaPagtoParcelaContaPRSitu,0)},c2v:function(){gx.O.A6355EntradaPagtoParcelaContaPRSitu=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPAGTOPARCELACONTAPRSITU",row || gx.fn.currentGridRowImpl(104))},nac:gx.falseFn};
   GXValidFnc[114]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:this.Valid_Entradapagtoparcelalancxabconu,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELALANCXABCONU",gxz:"Z4841EntradaPagtoParcelaLanCxaBcoNu",gxold:"O4841EntradaPagtoParcelaLanCxaBcoNu",gxvar:"A4841EntradaPagtoParcelaLanCxaBcoNu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4841EntradaPagtoParcelaLanCxaBcoNu=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4841EntradaPagtoParcelaLanCxaBcoNu=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELALANCXABCONU",row || gx.fn.currentGridRowImpl(104),gx.O.A4841EntradaPagtoParcelaLanCxaBcoNu,0)},c2v:function(){gx.O.A4841EntradaPagtoParcelaLanCxaBcoNu=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPAGTOPARCELALANCXABCONU",row || gx.fn.currentGridRowImpl(104),'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELALANCXABCODA",gxz:"Z6357EntradaPagtoParcelaLanCxaBcoDa",gxold:"O6357EntradaPagtoParcelaLanCxaBcoDa",gxvar:"A6357EntradaPagtoParcelaLanCxaBcoDa",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6357EntradaPagtoParcelaLanCxaBcoDa=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6357EntradaPagtoParcelaLanCxaBcoDa=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELALANCXABCODA",row || gx.fn.currentGridRowImpl(104),gx.O.A6357EntradaPagtoParcelaLanCxaBcoDa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6357EntradaPagtoParcelaLanCxaBcoDa=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ENTRADAPAGTOPARCELALANCXABCODA",row || gx.fn.currentGridRowImpl(104))},nac:gx.falseFn};
   GXValidFnc[116]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELANOCHEQUE",gxz:"Z4830EntradaPagtoParcelaNoCheque",gxold:"O4830EntradaPagtoParcelaNoCheque",gxvar:"A4830EntradaPagtoParcelaNoCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4830EntradaPagtoParcelaNoCheque=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4830EntradaPagtoParcelaNoCheque=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELANOCHEQUE",row || gx.fn.currentGridRowImpl(104),gx.O.A4830EntradaPagtoParcelaNoCheque,0)},c2v:function(){gx.O.A4830EntradaPagtoParcelaNoCheque=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPAGTOPARCELANOCHEQUE",row || gx.fn.currentGridRowImpl(104),'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELANOSERCHE",gxz:"Z4829EntradaPagtoParcelaNoSerChe",gxold:"O4829EntradaPagtoParcelaNoSerChe",gxvar:"A4829EntradaPagtoParcelaNoSerChe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4829EntradaPagtoParcelaNoSerChe=Value},v2z:function(Value){gx.O.Z4829EntradaPagtoParcelaNoSerChe=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELANOSERCHE",row || gx.fn.currentGridRowImpl(104),gx.O.A4829EntradaPagtoParcelaNoSerChe,0)},c2v:function(){gx.O.A4829EntradaPagtoParcelaNoSerChe=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPAGTOPARCELANOSERCHE",row || gx.fn.currentGridRowImpl(104))},nac:gx.falseFn};
   GXValidFnc[118]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELAVALOR",gxz:"Z4825EntradaPagtoParcelaValor",gxold:"O4825EntradaPagtoParcelaValor",gxvar:"A4825EntradaPagtoParcelaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4825EntradaPagtoParcelaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4825EntradaPagtoParcelaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPAGTOPARCELAVALOR",row || gx.fn.currentGridRowImpl(104),gx.O.A4825EntradaPagtoParcelaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4825EntradaPagtoParcelaValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPAGTOPARCELAVALOR",row || gx.fn.currentGridRowImpl(104),'.',',')},nac:gx.falseFn};
   GXValidFnc[119]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:104,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPAGTOPARCELAVENCIMENTO",gxz:"Z4824EntradaPagtoParcelaVencimento",gxold:"O4824EntradaPagtoParcelaVencimento",gxvar:"A4824EntradaPagtoParcelaVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4824EntradaPagtoParcelaVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4824EntradaPagtoParcelaVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPAGTOPARCELAVENCIMENTO",row || gx.fn.currentGridRowImpl(104),gx.O.A4824EntradaPagtoParcelaVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4824EntradaPagtoParcelaVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ENTRADAPAGTOPARCELAVENCIMENTO",row || gx.fn.currentGridRowImpl(104))},nac:gx.falseFn};
   GXValidFnc[120]={fld:"ROL4", format:2,grid:0};
   this.AV83EntradaSnNotaEnt = "" ;
   this.ZV83EntradaSnNotaEnt = "" ;
   this.OV83EntradaSnNotaEnt = "" ;
   this.AV69EntradaSnNotaComp = "" ;
   this.ZV69EntradaSnNotaComp = "" ;
   this.OV69EntradaSnNotaComp = "" ;
   this.AV68EntradaSnAjuste = "" ;
   this.ZV68EntradaSnAjuste = "" ;
   this.OV68EntradaSnAjuste = "" ;
   this.AV70EntradaSnDevolucao = "" ;
   this.ZV70EntradaSnDevolucao = "" ;
   this.OV70EntradaSnDevolucao = "" ;
   this.AV71EntradaSnAjusteEnt = "" ;
   this.ZV71EntradaSnAjusteEnt = "" ;
   this.OV71EntradaSnAjusteEnt = "" ;
   this.AV72EntradaSnTroca = "" ;
   this.ZV72EntradaSnTroca = "" ;
   this.OV72EntradaSnTroca = "" ;
   this.AV73EntradaSnTransf = "" ;
   this.ZV73EntradaSnTransf = "" ;
   this.OV73EntradaSnTransf = "" ;
   this.AV48EntradaId = 0 ;
   this.ZV48EntradaId = 0 ;
   this.OV48EntradaId = 0 ;
   this.AV53EntradaFilialId = 0 ;
   this.ZV53EntradaFilialId = 0 ;
   this.OV53EntradaFilialId = 0 ;
   this.AV54EntradaFilialNome = "" ;
   this.ZV54EntradaFilialNome = "" ;
   this.OV54EntradaFilialNome = "" ;
   this.AV57TransacaoEntradaCodigo = "" ;
   this.ZV57TransacaoEntradaCodigo = "" ;
   this.OV57TransacaoEntradaCodigo = "" ;
   this.AV59TransacaoEntradaDescricao = "" ;
   this.ZV59TransacaoEntradaDescricao = "" ;
   this.OV59TransacaoEntradaDescricao = "" ;
   this.AV50EntradaFornecedorId = 0 ;
   this.ZV50EntradaFornecedorId = 0 ;
   this.OV50EntradaFornecedorId = 0 ;
   this.AV51EntradaFornecedorFantasia = "" ;
   this.ZV51EntradaFornecedorFantasia = "" ;
   this.OV51EntradaFornecedorFantasia = "" ;
   this.AV55EntradaDataEmissao = gx.date.nullDate() ;
   this.ZV55EntradaDataEmissao = gx.date.nullDate() ;
   this.OV55EntradaDataEmissao = gx.date.nullDate() ;
   this.AV61EntradaSerie = "" ;
   this.ZV61EntradaSerie = "" ;
   this.OV61EntradaSerie = "" ;
   this.AV52EntradaNumeroDocumento = 0 ;
   this.ZV52EntradaNumeroDocumento = 0 ;
   this.OV52EntradaNumeroDocumento = 0 ;
   this.AV56EntradaDataEntrada = gx.date.nullDate() ;
   this.ZV56EntradaDataEntrada = gx.date.nullDate() ;
   this.OV56EntradaDataEntrada = gx.date.nullDate() ;
   this.AV60EntradaCFOPCodigo = 0 ;
   this.ZV60EntradaCFOPCodigo = 0 ;
   this.OV60EntradaCFOPCodigo = 0 ;
   this.Z4823EntradaPagtoParcelaItem = "" ;
   this.O4823EntradaPagtoParcelaItem = "" ;
   this.Z4839EntradaPagtoParcelaContaPRNume = 0 ;
   this.O4839EntradaPagtoParcelaContaPRNume = 0 ;
   this.Z4828EntradaPagtoParcelaContaBanc = "" ;
   this.O4828EntradaPagtoParcelaContaBanc = "" ;
   this.Z4835EntradaPagtoParcelaBancoId = 0 ;
   this.O4835EntradaPagtoParcelaBancoId = 0 ;
   this.ZV63EntradaPagtoParcelaBancoNome = "" ;
   this.OV63EntradaPagtoParcelaBancoNome = "" ;
   this.Z4836EntradaPagtoParcelaBancoAgenci = 0 ;
   this.O4836EntradaPagtoParcelaBancoAgenci = 0 ;
   this.ZV66Situacao = "" ;
   this.OV66Situacao = "" ;
   this.Z6359EntradaPagtoParcelaContaPRDtPa = gx.date.nullDate() ;
   this.O6359EntradaPagtoParcelaContaPRDtPa = gx.date.nullDate() ;
   this.Z6355EntradaPagtoParcelaContaPRSitu = "" ;
   this.O6355EntradaPagtoParcelaContaPRSitu = "" ;
   this.Z4841EntradaPagtoParcelaLanCxaBcoNu = 0 ;
   this.O4841EntradaPagtoParcelaLanCxaBcoNu = 0 ;
   this.Z6357EntradaPagtoParcelaLanCxaBcoDa = gx.date.nullDate() ;
   this.O6357EntradaPagtoParcelaLanCxaBcoDa = gx.date.nullDate() ;
   this.Z4830EntradaPagtoParcelaNoCheque = 0 ;
   this.O4830EntradaPagtoParcelaNoCheque = 0 ;
   this.Z4829EntradaPagtoParcelaNoSerChe = "" ;
   this.O4829EntradaPagtoParcelaNoSerChe = "" ;
   this.Z4825EntradaPagtoParcelaValor = 0 ;
   this.O4825EntradaPagtoParcelaValor = 0 ;
   this.Z4824EntradaPagtoParcelaVencimento = gx.date.nullDate() ;
   this.O4824EntradaPagtoParcelaVencimento = gx.date.nullDate() ;
   this.AV83EntradaSnNotaEnt = "" ;
   this.AV69EntradaSnNotaComp = "" ;
   this.AV68EntradaSnAjuste = "" ;
   this.AV70EntradaSnDevolucao = "" ;
   this.AV71EntradaSnAjusteEnt = "" ;
   this.AV72EntradaSnTroca = "" ;
   this.AV73EntradaSnTransf = "" ;
   this.AV48EntradaId = 0 ;
   this.AV53EntradaFilialId = 0 ;
   this.AV54EntradaFilialNome = "" ;
   this.AV57TransacaoEntradaCodigo = "" ;
   this.AV59TransacaoEntradaDescricao = "" ;
   this.AV50EntradaFornecedorId = 0 ;
   this.AV51EntradaFornecedorFantasia = "" ;
   this.AV55EntradaDataEmissao = gx.date.nullDate() ;
   this.AV61EntradaSerie = "" ;
   this.AV52EntradaNumeroDocumento = 0 ;
   this.AV56EntradaDataEntrada = gx.date.nullDate() ;
   this.AV60EntradaCFOPCodigo = 0 ;
   this.AV24Modo = "" ;
   this.AV49EntradaEmpresaId = "" ;
   this.AV67Tipo = "" ;
   this.AV82EntradaSnNotaEntAux = "" ;
   this.AV74EntradaSnAjusteAux = "" ;
   this.AV75EntradaSnNotaCompAux = "" ;
   this.AV76EntradaSnDevolucaoAux = "" ;
   this.AV77EntradaSnAjusteEntAux = "" ;
   this.AV78EntradaSnTrocaAux = "" ;
   this.AV79EntradaSnTransfAux = "" ;
   this.A4638EntradaId = 0 ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4838EntradaPagtoParcelaContaPREmpI = "" ;
   this.A4840EntradaPagtoParcelaLanCxaBcoEm = "" ;
   this.A4823EntradaPagtoParcelaItem = "" ;
   this.A4839EntradaPagtoParcelaContaPRNume = 0 ;
   this.A4828EntradaPagtoParcelaContaBanc = "" ;
   this.A4835EntradaPagtoParcelaBancoId = 0 ;
   this.AV63EntradaPagtoParcelaBancoNome = "" ;
   this.A4836EntradaPagtoParcelaBancoAgenci = 0 ;
   this.AV66Situacao = "" ;
   this.A6359EntradaPagtoParcelaContaPRDtPa = gx.date.nullDate() ;
   this.A6355EntradaPagtoParcelaContaPRSitu = "" ;
   this.A4841EntradaPagtoParcelaLanCxaBcoNu = 0 ;
   this.A6357EntradaPagtoParcelaLanCxaBcoDa = gx.date.nullDate() ;
   this.A4830EntradaPagtoParcelaNoCheque = 0 ;
   this.A4829EntradaPagtoParcelaNoSerChe = "" ;
   this.A4825EntradaPagtoParcelaValor = 0 ;
   this.A4824EntradaPagtoParcelaVencimento = gx.date.nullDate() ;
   this.A947BancoId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A948BancoNome = "" ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A4482TransacaoEntradaDescricao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A4643EntradaFornecedorId = 0 ;
   this.A4646EntradaNumeroDocumento = 0 ;
   this.A4660EntradaFilialId = 0 ;
   this.A4655EntradaDataEmissao = gx.date.nullDate() ;
   this.A4656EntradaDataEntrada = gx.date.nullDate() ;
   this.A4650EntradaCFOPCodigo = 0 ;
   this.A4647EntradaSerie = "" ;
   this.AV65BancoEmpresaId = "" ;
   this.AV64EntradaPagtoParcelaBancoId = 0 ;
   this.AV81SNErro = "" ;
   this.Events = {"e11yo2_client": ["ENTER", true] ,"e12yo2_client": ["'FECHAR'", true] ,"e17yo2_client": ["CANCEL", true] ,"e15yo1_client": ["'MARCARTODOS'", false] ,"e16yo1_client": ["'DESMARCARTODOS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDPARCELAS_nFirstRecordOnPage'},{av:'GRIDPARCELAS_nEOF'},{av:'subGridparcelas_Rows'},{av:'AV24Modo',fld:'vMODO',hsh:true},{av:'AV49EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'AV48EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4835EntradaPagtoParcelaBancoId',fld:'ENTRADAPAGTOPARCELABANCOID'},{av:'A6355EntradaPagtoParcelaContaPRSitu',fld:'ENTRADAPAGTOPARCELACONTAPRSITU'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV65BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV64EntradaPagtoParcelaBancoId',fld:'vENTRADAPAGTOPARCELABANCOID'},{av:'A948BancoNome',fld:'BANCONOME'}],[]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV67Tipo',fld:'vTIPO',hsh:true}],[{av:'AV83EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV68EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV69EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV70EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV71EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV72EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV73EntradaSnTransf',fld:'vENTRADASNTRANSF'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[],[{av:'AV83EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV68EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV69EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV70EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV71EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV72EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV73EntradaSnTransf',fld:'vENTRADASNTRANSF'}]];
   this.EvtParms["GRIDPARCELAS.LOAD"] = [[{av:'A4835EntradaPagtoParcelaBancoId',fld:'ENTRADAPAGTOPARCELABANCOID'},{av:'A6355EntradaPagtoParcelaContaPRSitu',fld:'ENTRADAPAGTOPARCELACONTAPRSITU'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV65BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV64EntradaPagtoParcelaBancoId',fld:'vENTRADAPAGTOPARCELABANCOID'},{av:'A948BancoNome',fld:'BANCONOME'}],[{av:'AV64EntradaPagtoParcelaBancoId',fld:'vENTRADAPAGTOPARCELABANCOID'},{av:'AV66Situacao',fld:'vSITUACAO'},{av:'AV90GXLvl187',fld:'vGXLVL187'},{av:'AV63EntradaPagtoParcelaBancoNome',fld:'vENTRADAPAGTOPARCELABANCONOME'}]];
   this.EvtParms["ENTER"] = [[{av:'AV67Tipo',fld:'vTIPO',hsh:true},{av:'AV81SNErro',fld:'vSNERRO'},{av:'AV70EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV71EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV72EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV73EntradaSnTransf',fld:'vENTRADASNTRANSF'},{av:'AV83EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV69EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV68EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV80SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV24Modo',fld:'vMODO',hsh:true}],[{av:'AV81SNErro',fld:'vSNERRO'},{av:'AV80SNConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV80SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV24Modo',fld:'vMODO',hsh:true},{av:'AV83EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV68EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV69EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV70EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV71EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV72EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV73EntradaSnTransf',fld:'vENTRADASNTRANSF'}],[{av:'AV80SNConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EvtParms["GRIDPARCELAS_FIRSTPAGE"] = [[{av:'GRIDPARCELAS_nFirstRecordOnPage'},{av:'GRIDPARCELAS_nEOF'},{av:'subGridparcelas_Rows'},{av:'AV24Modo',fld:'vMODO',hsh:true},{av:'AV49EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'AV48EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4835EntradaPagtoParcelaBancoId',fld:'ENTRADAPAGTOPARCELABANCOID'},{av:'A6355EntradaPagtoParcelaContaPRSitu',fld:'ENTRADAPAGTOPARCELACONTAPRSITU'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV65BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV64EntradaPagtoParcelaBancoId',fld:'vENTRADAPAGTOPARCELABANCOID'},{av:'A948BancoNome',fld:'BANCONOME'}],[]];
   this.EvtParms["GRIDPARCELAS_PREVPAGE"] = [[{av:'GRIDPARCELAS_nFirstRecordOnPage'},{av:'GRIDPARCELAS_nEOF'},{av:'subGridparcelas_Rows'},{av:'AV24Modo',fld:'vMODO',hsh:true},{av:'AV49EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'AV48EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4835EntradaPagtoParcelaBancoId',fld:'ENTRADAPAGTOPARCELABANCOID'},{av:'A6355EntradaPagtoParcelaContaPRSitu',fld:'ENTRADAPAGTOPARCELACONTAPRSITU'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV65BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV64EntradaPagtoParcelaBancoId',fld:'vENTRADAPAGTOPARCELABANCOID'},{av:'A948BancoNome',fld:'BANCONOME'}],[]];
   this.EvtParms["GRIDPARCELAS_NEXTPAGE"] = [[{av:'GRIDPARCELAS_nFirstRecordOnPage'},{av:'GRIDPARCELAS_nEOF'},{av:'subGridparcelas_Rows'},{av:'AV24Modo',fld:'vMODO',hsh:true},{av:'AV49EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'AV48EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4835EntradaPagtoParcelaBancoId',fld:'ENTRADAPAGTOPARCELABANCOID'},{av:'A6355EntradaPagtoParcelaContaPRSitu',fld:'ENTRADAPAGTOPARCELACONTAPRSITU'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV65BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV64EntradaPagtoParcelaBancoId',fld:'vENTRADAPAGTOPARCELABANCOID'},{av:'A948BancoNome',fld:'BANCONOME'}],[]];
   this.EvtParms["GRIDPARCELAS_LASTPAGE"] = [[{av:'GRIDPARCELAS_nFirstRecordOnPage'},{av:'GRIDPARCELAS_nEOF'},{av:'subGridparcelas_Rows'},{av:'AV24Modo',fld:'vMODO',hsh:true},{av:'AV49EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'AV48EntradaId',fld:'vENTRADAID',hsh:true},{av:'A4835EntradaPagtoParcelaBancoId',fld:'ENTRADAPAGTOPARCELABANCOID'},{av:'A6355EntradaPagtoParcelaContaPRSitu',fld:'ENTRADAPAGTOPARCELACONTAPRSITU'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV65BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV64EntradaPagtoParcelaBancoId',fld:'vENTRADAPAGTOPARCELABANCOID'},{av:'A948BancoNome',fld:'BANCONOME'}],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV24Modo", "vMODO", 0, "char");
   this.setVCMap("AV49EntradaEmpresaId", "vENTRADAEMPRESAID", 0, "char");
   this.setVCMap("A950BancoEmpresaId", "BANCOEMPRESAID", 0, "char");
   this.setVCMap("AV65BancoEmpresaId", "vBANCOEMPRESAID", 0, "char");
   this.setVCMap("A947BancoId", "BANCOID", 0, "int");
   this.setVCMap("AV64EntradaPagtoParcelaBancoId", "vENTRADAPAGTOPARCELABANCOID", 0, "int");
   this.setVCMap("A948BancoNome", "BANCONOME", 0, "svchar");
   this.setVCMap("AV67Tipo", "vTIPO", 0, "char");
   this.setVCMap("AV82EntradaSnNotaEntAux", "vENTRADASNNOTAENTAUX", 0, "char");
   this.setVCMap("AV74EntradaSnAjusteAux", "vENTRADASNAJUSTEAUX", 0, "char");
   this.setVCMap("AV75EntradaSnNotaCompAux", "vENTRADASNNOTACOMPAUX", 0, "char");
   this.setVCMap("AV76EntradaSnDevolucaoAux", "vENTRADASNDEVOLUCAOAUX", 0, "char");
   this.setVCMap("AV77EntradaSnAjusteEntAux", "vENTRADASNAJUSTEENTAUX", 0, "char");
   this.setVCMap("AV78EntradaSnTrocaAux", "vENTRADASNTROCAAUX", 0, "char");
   this.setVCMap("AV79EntradaSnTransfAux", "vENTRADASNTRANSFAUX", 0, "char");
   this.setVCMap("AV24Modo", "vMODO", 0, "char");
   this.setVCMap("AV49EntradaEmpresaId", "vENTRADAEMPRESAID", 0, "char");
   this.setVCMap("A950BancoEmpresaId", "BANCOEMPRESAID", 0, "char");
   this.setVCMap("AV65BancoEmpresaId", "vBANCOEMPRESAID", 0, "char");
   this.setVCMap("A947BancoId", "BANCOID", 0, "int");
   this.setVCMap("AV64EntradaPagtoParcelaBancoId", "vENTRADAPAGTOPARCELABANCOID", 0, "int");
   this.setVCMap("A948BancoNome", "BANCONOME", 0, "svchar");
   GridparcelasContainer.addRefreshingVar({rfrVar:"AV24Modo"});
   GridparcelasContainer.addRefreshingVar({rfrVar:"AV49EntradaEmpresaId"});
   GridparcelasContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridparcelasContainer.addRefreshingVar({rfrVar:"A4835EntradaPagtoParcelaBancoId", rfrProp:"Value", gxAttId:"4835"});
   GridparcelasContainer.addRefreshingVar({rfrVar:"A6355EntradaPagtoParcelaContaPRSitu", rfrProp:"Value", gxAttId:"6355"});
   GridparcelasContainer.addRefreshingVar({rfrVar:"A950BancoEmpresaId"});
   GridparcelasContainer.addRefreshingVar({rfrVar:"AV65BancoEmpresaId"});
   GridparcelasContainer.addRefreshingVar({rfrVar:"A947BancoId"});
   GridparcelasContainer.addRefreshingVar({rfrVar:"AV64EntradaPagtoParcelaBancoId"});
   GridparcelasContainer.addRefreshingVar({rfrVar:"A948BancoNome"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalconsultapromptentrada());
