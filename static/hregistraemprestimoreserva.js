/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:53:2.50
*/
gx.evt.autoSkip = false;
gx.define('hregistraemprestimoreserva', false, function () {
   this.ServerClass =  "hregistraemprestimoreserva" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV29SnCal=gx.fn.getControlValue("vSNCAL") ;
   };
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Acervoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vACERVOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e123k2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e133k2_client=function()
   {
      this.executeServerEvent("'CADASTRAR'", false, null, false, false);
   };
   this.e113k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e163k2_client=function()
   {
      this.executeServerEvent("'CANCELARREG'", true, arguments[0], false, false);
   };
   this.e173k2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,12,13,15,18,20,23,25,28,30,33,35,36,39,41,44,46,49,51,56,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,80,81,82,83,84,85,86];
   this.GXLastCtrlId =86;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",57,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistraemprestimoreserva",[],false,1,true,true,0,false,false,false,"CollSdtRegistraMovimentacao.SdtRegistraMovimentacaoItem",0,"px","Novo registro",false,false,false,null,null,false,"AV56SdtRegistraMovimentacao",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV11M",58,"CTLACERVOTITULO","Título do Acervo","","AcervoTitulo","svchar",0,"px",50,50,"left",null,[],"GXV11M","GXV11M",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11N",59,"CTLMOVIMENTACAODATAEMPRESTIMO","Data Empréstimo","","MovimentacaoDataEmprestimo","date",0,"px",10,10,"right",null,[],"GXV11N","GXV11N",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11O",60,"CTLMOVIMENTACAOPREVISAODEVOLUC","Previsão Devolução","","MovimentacaoPrevisaoDevolucao","date",0,"px",10,10,"right",null,[],"GXV11O","GXV11O",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpcancel","vBMPCANCEL",61,0,"px",17,"px","e163k2_client","","","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("GXV11Q",62,"CTLCONTADOR","Contador","","Contador","int",0,"px",4,4,"right",null,[],"GXV11Q","GXV11Q",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11R",63,"CTLMOVIMENTACAOEMPRESAID","Empresa Movimentação","","MovimentacaoEmpresaId","char",0,"px",10,10,"left",null,[],"GXV11R","GXV11R",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11S",64,"CTLMOVIMENTACAOID","No.Controle","","MovimentacaoId","int",0,"px",7,7,"right",null,[],"GXV11S","GXV11S",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11T",65,"CTLMOVIMENTACAODATADEVOLUCAO","Data Devolução","","MovimentacaoDataDevolucao","date",0,"px",10,10,"right",null,[],"GXV11T","GXV11T",false,0,false,false,"Attribute",1,"");
   Grid1Container.addRadioButton("GXV11U",66,"CTLMOVIMENTACAOTIPO","Empréstimo/Reserva","MovimentacaoTipo","char",null,false,false,false,"");
   Grid1Container.addSingleLineEdit("GXV11V",67,"CTLACERVOEMPRESAID","Empresa Acervo","","AcervoEmpresaId","char",0,"px",10,10,"left",null,[],"GXV11V","GXV11V",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11W",68,"CTLACERVOID","Código Acervo","","AcervoId","int",0,"px",7,7,"right",null,[],"GXV11W","GXV11W",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11X",69,"CTLEMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],"GXV11X","GXV11X",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11Y",70,"CTLPESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],"GXV11Y","GXV11Y",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11Z",71,"CTLMOVIMENTACAONUMORDEM","Numero de Ordem","","MovimentacaoNumOrdem","int",0,"px",4,4,"right",null,[],"GXV11Z","GXV11Z",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV16PessoaId",gxold:"OV16PessoaId",gxvar:"AV16PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV16PessoaId,0)},c2v:function(){gx.O.AV16PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV17PessoaFantasia",gxold:"OV17PessoaFantasia",gxvar:"AV17PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PessoaFantasia=Value},v2z:function(Value){gx.O.ZV17PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV17PessoaFantasia,0)},c2v:function(){gx.O.AV17PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TABLE5",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATADISPONIVELTELA",gxz:"ZV53DataDisponivelTela",gxold:"OV53DataDisponivelTela",gxvar:"AV53DataDisponivelTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53DataDisponivelTela=Value},v2z:function(Value){gx.O.ZV53DataDisponivelTela=Value},v2c:function(){gx.fn.setControlValue("vDATADISPONIVELTELA",gx.O.AV53DataDisponivelTela,0)},c2v:function(){gx.O.AV53DataDisponivelTela=this.val()},val:function(){return gx.fn.getControlValue("vDATADISPONIVELTELA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDERESERVATELA",gxz:"ZV54QtdeReservaTela",gxold:"OV54QtdeReservaTela",gxvar:"AV54QtdeReservaTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54QtdeReservaTela=Value},v2z:function(Value){gx.O.ZV54QtdeReservaTela=Value},v2c:function(){gx.fn.setControlValue("vQTDERESERVATELA",gx.O.AV54QtdeReservaTela,0)},c2v:function(){gx.O.AV54QtdeReservaTela=this.val()},val:function(){return gx.fn.getControlValue("vQTDERESERVATELA")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOTELA",gxz:"ZV55SaldoTela",gxold:"OV55SaldoTela",gxvar:"AV55SaldoTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55SaldoTela=Value},v2z:function(Value){gx.O.ZV55SaldoTela=Value},v2c:function(){gx.fn.setControlValue("vSALDOTELA",gx.O.AV55SaldoTela,0)},c2v:function(){gx.O.AV55SaldoTela=this.val()},val:function(){return gx.fn.getControlValue("vSALDOTELA")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Acervoid,isvalid:null,rgrid:[],fld:"vACERVOID",gxz:"ZV18Acervoid",gxold:"OV18Acervoid",gxvar:"AV18Acervoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Acervoid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Acervoid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACERVOID",gx.O.AV18Acervoid,0)},c2v:function(){gx.O.AV18Acervoid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACERVOID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOTITULO",gxz:"ZV19AcervoTitulo",gxold:"OV19AcervoTitulo",gxvar:"AV19AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AcervoTitulo=Value},v2z:function(Value){gx.O.ZV19AcervoTitulo=Value},v2c:function(){gx.fn.setControlValue("vACERVOTITULO",gx.O.AV19AcervoTitulo,0)},c2v:function(){gx.O.AV19AcervoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vACERVOTITULO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAODATAEMPRESTIMO",gxz:"ZV20MovimentacaoDataEmprestimo",gxold:"OV20MovimentacaoDataEmprestimo",gxvar:"AV20MovimentacaoDataEmprestimo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAODATAEMPRESTIMO",gx.O.AV20MovimentacaoDataEmprestimo,0)},c2v:function(){gx.O.AV20MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMOVIMENTACAODATAEMPRESTIMO")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAOPREVISAODEVOLUCAO",gxz:"ZV21MovimentacaoPrevisaoDevolucao",gxold:"OV21MovimentacaoPrevisaoDevolucao",gxvar:"AV21MovimentacaoPrevisaoDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAOPREVISAODEVOLUCAO",gx.O.AV21MovimentacaoPrevisaoDevolucao,0)},c2v:function(){gx.O.AV21MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMOVIMENTACAOPREVISAODEVOLUCAO")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAOTIPO",gxz:"ZV22MovimentacaoTipo",gxold:"OV22MovimentacaoTipo",gxvar:"AV22MovimentacaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV22MovimentacaoTipo=Value},v2z:function(Value){gx.O.ZV22MovimentacaoTipo=Value},v2c:function(){gx.fn.setRadioValue("vMOVIMENTACAOTIPO",gx.O.AV22MovimentacaoTipo)},c2v:function(){gx.O.AV22MovimentacaoTipo=this.val()},val:function(){return gx.fn.getControlValue("vMOVIMENTACAOTIPO")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[58]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLACERVOTITULO",gxz:"ZV70GXV11M",gxold:"OV70GXV11M",gxvar:"GXV11M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11M=Value},v2z:function(Value){gx.O.ZV70GXV11M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLACERVOTITULO",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11M,0)},c2v:function(){gx.O.GXV11M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLACERVOTITULO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLMOVIMENTACAODATAEMPRESTIMO",gxz:"ZV71GXV11N",gxold:"OV71GXV11N",gxvar:"GXV11N",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11N=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV71GXV11N=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLMOVIMENTACAODATAEMPRESTIMO",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11N,0)},c2v:function(){gx.O.GXV11N=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLMOVIMENTACAODATAEMPRESTIMO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLMOVIMENTACAOPREVISAODEVOLUC",gxz:"ZV72GXV11O",gxold:"OV72GXV11O",gxvar:"GXV11O",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11O=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV72GXV11O=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLMOVIMENTACAOPREVISAODEVOLUC",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11O,0)},c2v:function(){gx.O.GXV11O=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLMOVIMENTACAOPREVISAODEVOLUC",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCANCEL",gxz:"ZV25bmpCancel",gxold:"OV25bmpCancel",gxvar:"AV25bmpCancel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25bmpCancel=Value},v2z:function(Value){gx.O.ZV25bmpCancel=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCANCEL",row || gx.fn.currentGridRowImpl(57),gx.O.AV25bmpCancel,gx.O.AV84Bmpcancel_GXI)},c2v:function(){gx.O.AV84Bmpcancel_GXI=this.val_GXI();gx.O.AV25bmpCancel=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCANCEL",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCANCEL_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV84Bmpcancel_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTADOR",gxz:"ZV73GXV11Q",gxold:"OV73GXV11Q",gxvar:"GXV11Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11Q=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73GXV11Q=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTADOR",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11Q,0)},c2v:function(){gx.O.GXV11Q=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCONTADOR",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLMOVIMENTACAOEMPRESAID",gxz:"ZV74GXV11R",gxold:"OV74GXV11R",gxvar:"GXV11R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11R=Value},v2z:function(Value){gx.O.ZV74GXV11R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLMOVIMENTACAOEMPRESAID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11R,0)},c2v:function(){gx.O.GXV11R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLMOVIMENTACAOEMPRESAID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLMOVIMENTACAOID",gxz:"ZV75GXV11S",gxold:"OV75GXV11S",gxvar:"GXV11S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11S=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV75GXV11S=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLMOVIMENTACAOID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11S,0)},c2v:function(){gx.O.GXV11S=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLMOVIMENTACAOID",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLMOVIMENTACAODATADEVOLUCAO",gxz:"ZV76GXV11T",gxold:"OV76GXV11T",gxvar:"GXV11T",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11T=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV76GXV11T=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLMOVIMENTACAODATADEVOLUCAO",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11T,0)},c2v:function(){gx.O.GXV11T=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLMOVIMENTACAODATADEVOLUCAO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLMOVIMENTACAOTIPO",gxz:"ZV77GXV11U",gxold:"OV77GXV11U",gxvar:"GXV11U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",inputType:'text',v2v:function(Value){gx.O.GXV11U=Value},v2z:function(Value){gx.O.ZV77GXV11U=Value},v2c:function(row){gx.fn.setGridControlValue("CTLMOVIMENTACAOTIPO",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11U,0)},c2v:function(){gx.O.GXV11U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLMOVIMENTACAOTIPO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLACERVOEMPRESAID",gxz:"ZV78GXV11V",gxold:"OV78GXV11V",gxvar:"GXV11V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11V=Value},v2z:function(Value){gx.O.ZV78GXV11V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLACERVOEMPRESAID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11V,0)},c2v:function(){gx.O.GXV11V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLACERVOEMPRESAID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLACERVOID",gxz:"ZV79GXV11W",gxold:"OV79GXV11W",gxvar:"GXV11W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11W=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV79GXV11W=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLACERVOID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11W,0)},c2v:function(){gx.O.GXV11W=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLACERVOID",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESAPESSOASEMPRESAID",gxz:"ZV80GXV11X",gxold:"OV80GXV11X",gxvar:"GXV11X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11X=Value},v2z:function(Value){gx.O.ZV80GXV11X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11X,0)},c2v:function(){gx.O.GXV11X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV81GXV11Y",gxold:"OV81GXV11Y",gxvar:"GXV11Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11Y=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81GXV11Y=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11Y,0)},c2v:function(){gx.O.GXV11Y=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:57,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLMOVIMENTACAONUMORDEM",gxz:"ZV82GXV11Z",gxold:"OV82GXV11Z",gxvar:"GXV11Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11Z=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV82GXV11Z=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLMOVIMENTACAONUMORDEM",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11Z,0)},c2v:function(){gx.O.GXV11Z=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLMOVIMENTACAONUMORDEM",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAONUMORDEM",gxz:"ZV28MovimentacaoNumOrdem",gxold:"OV28MovimentacaoNumOrdem",gxvar:"AV28MovimentacaoNumOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28MovimentacaoNumOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28MovimentacaoNumOrdem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAONUMORDEM",gx.O.AV28MovimentacaoNumOrdem,0)},c2v:function(){gx.O.AV28MovimentacaoNumOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVIMENTACAONUMORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOQTDEEXEMPLARES",gxz:"ZV32AcervoQtdeExemplares",gxold:"OV32AcervoQtdeExemplares",gxvar:"AV32AcervoQtdeExemplares",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32AcervoQtdeExemplares=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32AcervoQtdeExemplares=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACERVOQTDEEXEMPLARES",gx.O.AV32AcervoQtdeExemplares,0)},c2v:function(){gx.O.AV32AcervoQtdeExemplares=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACERVOQTDEEXEMPLARES",'.')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTADOR",gxz:"ZV58Contador",gxold:"OV58Contador",gxvar:"AV58Contador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58Contador=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58Contador=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTADOR",gx.O.AV58Contador,0)},c2v:function(){gx.O.AV58Contador=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTADOR",'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDDIAS",gxz:"ZV60qtdDias",gxold:"OV60qtdDias",gxvar:"AV60qtdDias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60qtdDias=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60qtdDias=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDDIAS",gx.O.AV60qtdDias,0)},c2v:function(){gx.O.AV60qtdDias=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDDIAS",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV27EmpresaPadrao",gxold:"OV27EmpresaPadrao",gxvar:"AV27EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV27EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV27EmpresaPadrao,0)},c2v:function(){gx.O.AV27EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[85]={fld:"JS", format:2,grid:0};
   GXValidFnc[86]={fld:"PROMPT_ACERVOID",grid:0};
   this.AV16PessoaId = 0 ;
   this.ZV16PessoaId = 0 ;
   this.OV16PessoaId = 0 ;
   this.AV17PessoaFantasia = "" ;
   this.ZV17PessoaFantasia = "" ;
   this.OV17PessoaFantasia = "" ;
   this.AV53DataDisponivelTela = "" ;
   this.ZV53DataDisponivelTela = "" ;
   this.OV53DataDisponivelTela = "" ;
   this.AV54QtdeReservaTela = "" ;
   this.ZV54QtdeReservaTela = "" ;
   this.OV54QtdeReservaTela = "" ;
   this.AV55SaldoTela = "" ;
   this.ZV55SaldoTela = "" ;
   this.OV55SaldoTela = "" ;
   this.AV18Acervoid = 0 ;
   this.ZV18Acervoid = 0 ;
   this.OV18Acervoid = 0 ;
   this.AV19AcervoTitulo = "" ;
   this.ZV19AcervoTitulo = "" ;
   this.OV19AcervoTitulo = "" ;
   this.AV20MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.ZV20MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.OV20MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.AV21MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.ZV21MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.OV21MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.AV22MovimentacaoTipo = "" ;
   this.ZV22MovimentacaoTipo = "" ;
   this.OV22MovimentacaoTipo = "" ;
   this.ZV70GXV11M = "" ;
   this.OV70GXV11M = "" ;
   this.ZV71GXV11N = gx.date.nullDate() ;
   this.OV71GXV11N = gx.date.nullDate() ;
   this.ZV72GXV11O = gx.date.nullDate() ;
   this.OV72GXV11O = gx.date.nullDate() ;
   this.ZV25bmpCancel = "" ;
   this.OV25bmpCancel = "" ;
   this.ZV73GXV11Q = 0 ;
   this.OV73GXV11Q = 0 ;
   this.ZV74GXV11R = "" ;
   this.OV74GXV11R = "" ;
   this.ZV75GXV11S = 0 ;
   this.OV75GXV11S = 0 ;
   this.ZV76GXV11T = gx.date.nullDate() ;
   this.OV76GXV11T = gx.date.nullDate() ;
   this.ZV77GXV11U = "" ;
   this.OV77GXV11U = "" ;
   this.ZV78GXV11V = "" ;
   this.OV78GXV11V = "" ;
   this.ZV79GXV11W = 0 ;
   this.OV79GXV11W = 0 ;
   this.ZV80GXV11X = "" ;
   this.OV80GXV11X = "" ;
   this.ZV81GXV11Y = 0 ;
   this.OV81GXV11Y = 0 ;
   this.ZV82GXV11Z = 0 ;
   this.OV82GXV11Z = 0 ;
   this.AV28MovimentacaoNumOrdem = 0 ;
   this.ZV28MovimentacaoNumOrdem = 0 ;
   this.OV28MovimentacaoNumOrdem = 0 ;
   this.AV32AcervoQtdeExemplares = 0 ;
   this.ZV32AcervoQtdeExemplares = 0 ;
   this.OV32AcervoQtdeExemplares = 0 ;
   this.AV58Contador = 0 ;
   this.ZV58Contador = 0 ;
   this.OV58Contador = 0 ;
   this.AV60qtdDias = 0 ;
   this.ZV60qtdDias = 0 ;
   this.OV60qtdDias = 0 ;
   this.AV27EmpresaPadrao = "" ;
   this.ZV27EmpresaPadrao = "" ;
   this.OV27EmpresaPadrao = "" ;
   this.AV16PessoaId = 0 ;
   this.AV17PessoaFantasia = "" ;
   this.AV53DataDisponivelTela = "" ;
   this.AV54QtdeReservaTela = "" ;
   this.AV55SaldoTela = "" ;
   this.AV18Acervoid = 0 ;
   this.AV19AcervoTitulo = "" ;
   this.AV20MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.AV21MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.AV22MovimentacaoTipo = "" ;
   this.AV28MovimentacaoNumOrdem = 0 ;
   this.AV32AcervoQtdeExemplares = 0 ;
   this.AV58Contador = 0 ;
   this.AV60qtdDias = 0 ;
   this.AV27EmpresaPadrao = "" ;
   this.AV29SnCal = "" ;
   this.GXV11M = "" ;
   this.GXV11N = gx.date.nullDate() ;
   this.GXV11O = gx.date.nullDate() ;
   this.AV25bmpCancel = "" ;
   this.GXV11Q = 0 ;
   this.GXV11R = "" ;
   this.GXV11S = 0 ;
   this.GXV11T = gx.date.nullDate() ;
   this.GXV11U = "" ;
   this.GXV11V = "" ;
   this.GXV11W = 0 ;
   this.GXV11X = "" ;
   this.GXV11Y = 0 ;
   this.GXV11Z = 0 ;
   this.A120TipoItemId = 0 ;
   this.A3080TipoItemEmpresaId = "" ;
   this.A554TipoItemQtdeDiasDevolucao = 0 ;
   this.A39AcervoId = 0 ;
   this.A3082AcervoEmpresaId = "" ;
   this.A621MovimentacaoEmpresaId = "" ;
   this.A106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.A107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.A40AcervoTitulo = "" ;
   this.A122AcervoQtdeExemplares = 0 ;
   this.A108MovimentacaoTipo = "" ;
   this.A105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A104MovimentacaoId = 0 ;
   this.A113AcervoDataBaixa = gx.date.nullDate() ;
   this.Events = {"e123k2_client": ["ENTER", true] ,"e133k2_client": ["'CADASTRAR'", true] ,"e113k2_client": ["'FECHAR'", true] ,"e163k2_client": ["'CANCELARREG'", true] ,"e173k2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV56SdtRegistraMovimentacao',fld:'vSDTREGISTRAMOVIMENTACAO',grid:57}],[]];
   this.EvtParms["GRID1.LOAD"] = [[],[{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Title")',ctrl:'vBMPCANCEL',prop:'Title'},{av:'AV25bmpCancel',fld:'vBMPCANCEL'}]];
   this.EvtParms["ENTER"] = [[{av:'AV18Acervoid',fld:'vACERVOID'},{av:'AV29SnCal',fld:'vSNCAL'},{av:'AV28MovimentacaoNumOrdem',fld:'vMOVIMENTACAONUMORDEM'},{av:'A3082AcervoEmpresaId',fld:'ACERVOEMPRESAID'},{av:'AV27EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A39AcervoId',fld:'ACERVOID'},{av:'A40AcervoTitulo',fld:'ACERVOTITULO'},{av:'A122AcervoQtdeExemplares',fld:'ACERVOQTDEEXEMPLARES'},{av:'A120TipoItemId',fld:'TIPOITEMID'},{av:'A621MovimentacaoEmpresaId',fld:'MOVIMENTACAOEMPRESAID'},{av:'A107MovimentacaoDataDevolucao',fld:'MOVIMENTACAODATADEVOLUCAO'},{av:'A108MovimentacaoTipo',fld:'MOVIMENTACAOTIPO'},{av:'A105MovimentacaoDataEmprestimo',fld:'MOVIMENTACAODATAEMPRESTIMO'},{av:'AV62QtdReserva',fld:'vQTDRESERVA'},{av:'A106MovimentacaoPrevisaoDevolucao',fld:'MOVIMENTACAOPREVISAODEVOLUCAO'},{av:'A3080TipoItemEmpresaId',fld:'TIPOITEMEMPRESAID'},{av:'AV63TipoItemEmpresaId',fld:'vTIPOITEMEMPRESAID'},{av:'A554TipoItemQtdeDiasDevolucao',fld:'TIPOITEMQTDEDIASDEVOLUCAO'},{av:'AV20MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'AV21MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV55SaldoTela',fld:'vSALDOTELA'},{av:'AV32AcervoQtdeExemplares',fld:'vACERVOQTDEEXEMPLARES'},{av:'AV22MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'},{av:'AV53DataDisponivelTela',fld:'vDATADISPONIVELTELA'},{av:'A113AcervoDataBaixa',fld:'ACERVODATABAIXA'},{av:'AV36SnEmprestado',fld:'vSNEMPRESTADO'},{av:'AV58Contador',fld:'vCONTADOR'},{av:'AV19AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV46EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV26MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'},{av:'AV30MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV60qtdDias',fld:'vQTDDIAS'},{av:'AV16PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV56SdtRegistraMovimentacao',fld:'vSDTREGISTRAMOVIMENTACAO',grid:57},{av:'A104MovimentacaoId',fld:'MOVIMENTACAOID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV54QtdeReservaTela',fld:'vQTDERESERVATELA'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'}],[{av:'AV28MovimentacaoNumOrdem',fld:'vMOVIMENTACAONUMORDEM'},{av:'AV29SnCal',fld:'vSNCAL'},{av:'AV19AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV24Saldo',fld:'vSALDO'},{av:'AV64TipoItemId',fld:'vTIPOITEMID'},{av:'AV62QtdReserva',fld:'vQTDRESERVA'},{av:'AV66MovimentacaoPrevisaoDevolucaoAux',fld:'vMOVIMENTACAOPREVISAODEVOLUCAOAUX'},{av:'AV33DataDisponivel',fld:'vDATADISPONIVEL'},{av:'AV65TipoItemQtdeDiasDevolucao',fld:'vTIPOITEMQTDEDIASDEVOLUCAO'},{av:'AV53DataDisponivelTela',fld:'vDATADISPONIVELTELA'},{av:'AV54QtdeReservaTela',fld:'vQTDERESERVATELA'},{av:'AV55SaldoTela',fld:'vSALDOTELA'},{av:'AV21MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV48tpErro',fld:'vTPERRO'},{av:'AV85GXLvl50',fld:'vGXLVL50'},{av:'AV32AcervoQtdeExemplares',fld:'vACERVOQTDEEXEMPLARES'},{av:'AV60qtdDias',fld:'vQTDDIAS'},{av:'AV56SdtRegistraMovimentacao',fld:'vSDTREGISTRAMOVIMENTACAO',grid:57},{av:'AV87GXV2',fld:'vGXV2'},{av:'AV57SdtRegistraMovimentacaoItem',fld:'vSDTREGISTRAMOVIMENTACAOITEM'},{av:'AV58Contador',fld:'vCONTADOR'},{av:'AV90GXLvl241',fld:'vGXLVL241'},{av:'AV36SnEmprestado',fld:'vSNEMPRESTADO'},{av:'AV18Acervoid',fld:'vACERVOID'},{av:'AV20MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'AV22MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'}]];
   this.EvtParms["'CADASTRAR'"] = [[{av:'AV29SnCal',fld:'vSNCAL'},{av:'AV56SdtRegistraMovimentacao',fld:'vSDTREGISTRAMOVIMENTACAO',grid:57},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'}],[{av:'AV56SdtRegistraMovimentacao',fld:'vSDTREGISTRAMOVIMENTACAO',grid:57},{av:'AV88GXV3',fld:'vGXV3'},{av:'AV57SdtRegistraMovimentacaoItem',fld:'vSDTREGISTRAMOVIMENTACAOITEM'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV29SnCal',fld:'vSNCAL'}],[]];
   this.EvtParms["'CANCELARREG'"] = [[{av:'AV58Contador',fld:'vCONTADOR'},{av:'AV56SdtRegistraMovimentacao',fld:'vSDTREGISTRAMOVIMENTACAO',grid:57},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'}],[{av:'AV59ContadorAux',fld:'vCONTADORAUX'},{av:'AV56SdtRegistraMovimentacao',fld:'vSDTREGISTRAMOVIMENTACAO',grid:57},{av:'AV89GXV4',fld:'vGXV4'},{av:'AV57SdtRegistraMovimentacaoItem',fld:'vSDTREGISTRAMOVIMENTACAOITEM'}]];
   this.setPrompt("PROMPT_ACERVOID", [35]);
   this.EnterCtrl = ["BUTAVANCAR"];
   this.setVCMap("AV29SnCal", "vSNCAL", 0, "char");
   this.addGridBCProperty("Sdtregistramovimentacao", ["AcervoTitulo"], this.GXValidFnc[58], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["MovimentacaoDataEmprestimo"], this.GXValidFnc[59], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["MovimentacaoPrevisaoDevolucao"], this.GXValidFnc[60], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["Contador"], this.GXValidFnc[62], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["MovimentacaoEmpresaId"], this.GXValidFnc[63], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["MovimentacaoId"], this.GXValidFnc[64], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["MovimentacaoDataDevolucao"], this.GXValidFnc[65], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["MovimentacaoTipo"], this.GXValidFnc[66], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["AcervoEmpresaId"], this.GXValidFnc[67], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["AcervoId"], this.GXValidFnc[68], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["EmpresaPessoasEmpresaId"], this.GXValidFnc[69], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["PessoaId"], this.GXValidFnc[70], "AV56SdtRegistraMovimentacao");
   this.addGridBCProperty("Sdtregistramovimentacao", ["MovimentacaoNumOrdem"], this.GXValidFnc[71], "AV56SdtRegistraMovimentacao");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistraemprestimoreserva());
