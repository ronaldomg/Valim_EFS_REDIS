/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:52:10.71
*/
gx.evt.autoSkip = false;
gx.define('hmovimentacao', false, function () {
   this.ServerClass =  "hmovimentacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV28EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV49SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
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
   this.Validv_Acervoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vACERVOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112y2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122y2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e192y2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e202y2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e212y2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e152y2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132y2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142y2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e222y2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e232y2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e242y2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,25,27,29,32,34,37,39,41,43,46,48,50,53,55,56,58,60,63,64,67,72,75,78,80,82,85,87,88,92,93,94,95,96,97,98,99,100,101,102,109,110,111,112,113,114];
   this.GXLastCtrlId =114;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",91,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmovimentacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(71,92,"PESSOAFANTASIA","","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(40,93,"ACERVOTITULO","","","AcervoTitulo","svchar",0,"px",50,50,"left",null,[],40,"AcervoTitulo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(108,94,"MOVIMENTACAOTIPO","","","MovimentacaoTipo","char",0,"px",1,1,"left",null,[],108,"MovimentacaoTipo",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tipomovimentacao",95,"vTIPOMOVIMENTACAO","Tipo Movimentacao","","TipoMovimentacao","svchar",0,"px",10,10,"left",null,[],"Tipomovimentacao","TipoMovimentacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(105,96,"MOVIMENTACAODATAEMPRESTIMO","","","MovimentacaoDataEmprestimo","date",0,"px",10,10,"right",null,[],105,"MovimentacaoDataEmprestimo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(106,97,"MOVIMENTACAOPREVISAODEVOLUCAO","","","MovimentacaoPrevisaoDevolucao","date",0,"px",10,10,"right",null,[],106,"MovimentacaoPrevisaoDevolucao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(107,98,"MOVIMENTACAODATADEVOLUCAO","","","MovimentacaoDataDevolucao","date",0,"px",10,10,"right",null,[],107,"MovimentacaoDataDevolucao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(104,99,"MOVIMENTACAOID","No.Controle","","MovimentacaoId","int",0,"px",7,7,"right",null,[],104,"MovimentacaoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",100,0,"px",17,"px","e192y2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",101,0,"px",17,"px","e202y2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",102,0,"px",17,"px","e212y2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE13",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAID",gxz:"ZV19PessoaId",gxold:"OV19PessoaId",gxvar:"AV19PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV19PessoaId,0)},c2v:function(){gx.O.AV19PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV36PessoaFantasia",gxold:"OV36PessoaFantasia",gxvar:"AV36PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36PessoaFantasia=Value},v2z:function(Value){gx.O.ZV36PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV36PessoaFantasia,0)},c2v:function(){gx.O.AV36PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE10",grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAINI",gxz:"ZV22DataIni",gxold:"OV22DataIni",gxvar:"AV22DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV22DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAFIN",gxz:"ZV23DataFin",gxold:"OV23DataFin",gxvar:"AV23DataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIN",gx.O.AV23DataFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23DataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"ORDEREDTEXT3", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLE14",grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Acervoid,isvalid:null,rgrid:[this.GridContainer],fld:"vACERVOID",gxz:"ZV20AcervoId",gxold:"OV20AcervoId",gxvar:"AV20AcervoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcervoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcervoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACERVOID",gx.O.AV20AcervoId,0)},c2v:function(){gx.O.AV20AcervoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACERVOID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOTITULO",gxz:"ZV41AcervoTitulo",gxold:"OV41AcervoTitulo",gxvar:"AV41AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41AcervoTitulo=Value},v2z:function(Value){gx.O.ZV41AcervoTitulo=Value},v2c:function(){gx.fn.setControlValue("vACERVOTITULO",gx.O.AV41AcervoTitulo,0)},c2v:function(){gx.O.AV41AcervoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vACERVOTITULO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[43]={fld:"TABLE11",grid:0};
   GXValidFnc[46]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEVINI",gxz:"ZV26DevIni",gxold:"OV26DevIni",gxvar:"AV26DevIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DevIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DevIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDEVINI",gx.O.AV26DevIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DevIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDEVINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEVFIN",gxz:"ZV27DevFin",gxold:"OV27DevFin",gxvar:"AV27DevFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DevFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DevFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDEVFIN",gx.O.AV27DevFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DevFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDEVFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"ORDEREDTEXT4", format:0,grid:0};
   GXValidFnc[55]={fld:"TABLE15",grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPO",gxz:"ZV47Tipo",gxold:"OV47Tipo",gxvar:"AV47Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV47Tipo=Value},v2z:function(Value){gx.O.ZV47Tipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPO",gx.O.AV47Tipo)},c2v:function(){gx.O.AV47Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[60]={fld:"TABLE12",grid:0};
   GXValidFnc[63]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPREVINI",gxz:"ZV24PrevIni",gxold:"OV24PrevIni",gxvar:"AV24PrevIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PrevIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24PrevIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPREVINI",gx.O.AV24PrevIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24PrevIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPREVINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[64]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPREVFIN",gxz:"ZV25PrevFin",gxold:"OV25PrevFin",gxvar:"AV25PrevFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PrevFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25PrevFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPREVFIN",gx.O.AV25PrevFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25PrevFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPREVFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[72]={fld:"TABLE4",grid:0};
   GXValidFnc[75]={fld:"TABLE3",grid:0};
   GXValidFnc[78]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[80]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[82]={fld:"TABLE5",grid:0};
   GXValidFnc[85]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[87]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(91),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOTITULO",gxz:"Z40AcervoTitulo",gxold:"O40AcervoTitulo",gxvar:"A40AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A40AcervoTitulo=Value},v2z:function(Value){gx.O.Z40AcervoTitulo=Value},v2c:function(row){gx.fn.setGridControlValue("ACERVOTITULO",row || gx.fn.currentGridRowImpl(91),gx.O.A40AcervoTitulo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A40AcervoTitulo=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERVOTITULO",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOTIPO",gxz:"Z108MovimentacaoTipo",gxold:"O108MovimentacaoTipo",gxvar:"A108MovimentacaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A108MovimentacaoTipo=Value},v2z:function(Value){gx.O.Z108MovimentacaoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAOTIPO",row || gx.fn.currentGridRowImpl(91),gx.O.A108MovimentacaoTipo,0)},c2v:function(){gx.O.A108MovimentacaoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("MOVIMENTACAOTIPO",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOMOVIMENTACAO",gxz:"ZV48TipoMovimentacao",gxold:"OV48TipoMovimentacao",gxvar:"AV48TipoMovimentacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV48TipoMovimentacao=Value},v2z:function(Value){gx.O.ZV48TipoMovimentacao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOMOVIMENTACAO",row || gx.fn.currentGridRowImpl(91),gx.O.AV48TipoMovimentacao,0)},c2v:function(){gx.O.AV48TipoMovimentacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOMOVIMENTACAO",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAODATAEMPRESTIMO",gxz:"Z105MovimentacaoDataEmprestimo",gxold:"O105MovimentacaoDataEmprestimo",gxvar:"A105MovimentacaoDataEmprestimo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAODATAEMPRESTIMO",row || gx.fn.currentGridRowImpl(91),gx.O.A105MovimentacaoDataEmprestimo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MOVIMENTACAODATAEMPRESTIMO",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOPREVISAODEVOLUCAO",gxz:"Z106MovimentacaoPrevisaoDevolucao",gxold:"O106MovimentacaoPrevisaoDevolucao",gxvar:"A106MovimentacaoPrevisaoDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAOPREVISAODEVOLUCAO",row || gx.fn.currentGridRowImpl(91),gx.O.A106MovimentacaoPrevisaoDevolucao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MOVIMENTACAOPREVISAODEVOLUCAO",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAODATADEVOLUCAO",gxz:"Z107MovimentacaoDataDevolucao",gxold:"O107MovimentacaoDataDevolucao",gxvar:"A107MovimentacaoDataDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A107MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z107MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAODATADEVOLUCAO",row || gx.fn.currentGridRowImpl(91),gx.O.A107MovimentacaoDataDevolucao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A107MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MOVIMENTACAODATADEVOLUCAO",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:91,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOID",gxz:"Z104MovimentacaoId",gxold:"O104MovimentacaoId",gxvar:"A104MovimentacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A104MovimentacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z104MovimentacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAOID",row || gx.fn.currentGridRowImpl(91),gx.O.A104MovimentacaoId,0)},c2v:function(){gx.O.A104MovimentacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOVIMENTACAOID",row || gx.fn.currentGridRowImpl(91),'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(91),gx.O.AV7bmpAlt,gx.O.AV54Bmpalt_GXI)},c2v:function(){gx.O.AV54Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(91))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(91))}, gxvar_GXI:'AV54Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[101]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(91),gx.O.AV8bmpExc,gx.O.AV55Bmpexc_GXI)},c2v:function(){gx.O.AV55Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(91))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(91))}, gxvar_GXI:'AV55Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[102]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(91),gx.O.AV16bmpCon,gx.O.AV56Bmpcon_GXI)},c2v:function(){gx.O.AV56Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(91))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(91))}, gxvar_GXI:'AV56Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[109]={fld:"JS", format:2,grid:0};
   GXValidFnc[110]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV44EmpresaPessoasEmpresaId",gxold:"OV44EmpresaPessoasEmpresaId",gxvar:"AV44EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV44EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV44EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV44EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Acervoempresaid,isvalid:null,rgrid:[],fld:"vACERVOEMPRESAID",gxz:"ZV45AcervoEmpresaId",gxold:"OV45AcervoEmpresaId",gxvar:"AV45AcervoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45AcervoEmpresaId=Value},v2z:function(Value){gx.O.ZV45AcervoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vACERVOEMPRESAID",gx.O.AV45AcervoEmpresaId,0)},c2v:function(){gx.O.AV45AcervoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vACERVOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[113]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[114]={fld:"PROMPT_ACERVOID",grid:0};
   this.AV19PessoaId = 0 ;
   this.ZV19PessoaId = 0 ;
   this.OV19PessoaId = 0 ;
   this.AV36PessoaFantasia = "" ;
   this.ZV36PessoaFantasia = "" ;
   this.OV36PessoaFantasia = "" ;
   this.AV22DataIni = gx.date.nullDate() ;
   this.ZV22DataIni = gx.date.nullDate() ;
   this.OV22DataIni = gx.date.nullDate() ;
   this.AV23DataFin = gx.date.nullDate() ;
   this.ZV23DataFin = gx.date.nullDate() ;
   this.OV23DataFin = gx.date.nullDate() ;
   this.AV20AcervoId = 0 ;
   this.ZV20AcervoId = 0 ;
   this.OV20AcervoId = 0 ;
   this.AV41AcervoTitulo = "" ;
   this.ZV41AcervoTitulo = "" ;
   this.OV41AcervoTitulo = "" ;
   this.AV26DevIni = gx.date.nullDate() ;
   this.ZV26DevIni = gx.date.nullDate() ;
   this.OV26DevIni = gx.date.nullDate() ;
   this.AV27DevFin = gx.date.nullDate() ;
   this.ZV27DevFin = gx.date.nullDate() ;
   this.OV27DevFin = gx.date.nullDate() ;
   this.AV47Tipo = "" ;
   this.ZV47Tipo = "" ;
   this.OV47Tipo = "" ;
   this.AV24PrevIni = gx.date.nullDate() ;
   this.ZV24PrevIni = gx.date.nullDate() ;
   this.OV24PrevIni = gx.date.nullDate() ;
   this.AV25PrevFin = gx.date.nullDate() ;
   this.ZV25PrevFin = gx.date.nullDate() ;
   this.OV25PrevFin = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.Z40AcervoTitulo = "" ;
   this.O40AcervoTitulo = "" ;
   this.Z108MovimentacaoTipo = "" ;
   this.O108MovimentacaoTipo = "" ;
   this.ZV48TipoMovimentacao = "" ;
   this.OV48TipoMovimentacao = "" ;
   this.Z105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.O105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.Z106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.O106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.Z107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.O107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.Z104MovimentacaoId = 0 ;
   this.O104MovimentacaoId = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV44EmpresaPessoasEmpresaId = "" ;
   this.ZV44EmpresaPessoasEmpresaId = "" ;
   this.OV44EmpresaPessoasEmpresaId = "" ;
   this.AV45AcervoEmpresaId = "" ;
   this.ZV45AcervoEmpresaId = "" ;
   this.OV45AcervoEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV19PessoaId = 0 ;
   this.AV36PessoaFantasia = "" ;
   this.AV22DataIni = gx.date.nullDate() ;
   this.AV23DataFin = gx.date.nullDate() ;
   this.AV20AcervoId = 0 ;
   this.AV41AcervoTitulo = "" ;
   this.AV26DevIni = gx.date.nullDate() ;
   this.AV27DevFin = gx.date.nullDate() ;
   this.AV47Tipo = "" ;
   this.AV24PrevIni = gx.date.nullDate() ;
   this.AV25PrevFin = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV44EmpresaPessoasEmpresaId = "" ;
   this.AV45AcervoEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.A39AcervoId = 0 ;
   this.A69PessoaId = 0 ;
   this.A621MovimentacaoEmpresaId = "" ;
   this.A3082AcervoEmpresaId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A40AcervoTitulo = "" ;
   this.A108MovimentacaoTipo = "" ;
   this.AV48TipoMovimentacao = "" ;
   this.A105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.A106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.A107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.A104MovimentacaoId = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV28EmpresaPadrao = "" ;
   this.AV49SnRecuperaFiltro = "" ;
   this.Events = {"e112y2_client": ["'ANTERIOR'", true] ,"e122y2_client": ["'PROXIMO'", true] ,"e192y2_client": ["'ALTERAR'", true] ,"e202y2_client": ["'EXCLUIR'", true] ,"e212y2_client": ["'CONSULTAR'", true] ,"e152y2_client": ["VPAGINA.CLICK", true] ,"e132y2_client": ["'FECHAR'", true] ,"e142y2_client": ["'PROCURAR'", true] ,"e222y2_client": ["'ATUALIZAPAGINA'", true] ,"e232y2_client": ["ENTER", true] ,"e242y2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV22DataIni',fld:'vDATAINI'},{av:'AV23DataFin',fld:'vDATAFIN'},{av:'AV20AcervoId',fld:'vACERVOID'},{av:'AV26DevIni',fld:'vDEVINI'},{av:'AV27DevFin',fld:'vDEVFIN'},{av:'AV47Tipo',fld:'vTIPO'},{av:'AV24PrevIni',fld:'vPREVINI'},{av:'AV25PrevFin',fld:'vPREVFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A108MovimentacaoTipo',fld:'MOVIMENTACAOTIPO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV22DataIni',fld:'vDATAINI'},{av:'AV23DataFin',fld:'vDATAFIN'},{av:'AV20AcervoId',fld:'vACERVOID'},{av:'AV26DevIni',fld:'vDEVINI'},{av:'AV27DevFin',fld:'vDEVFIN'},{av:'AV47Tipo',fld:'vTIPO'},{av:'AV24PrevIni',fld:'vPREVINI'},{av:'AV25PrevFin',fld:'vPREVFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A108MovimentacaoTipo',fld:'MOVIMENTACAOTIPO'}],[{ctrl:'PESSOAFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAFANTASIA","Title")',ctrl:'PESSOAFANTASIA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ACERVOTITULO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ACERVOTITULO","Title")',ctrl:'ACERVOTITULO',prop:'Title'},{ctrl:'MOVIMENTACAOTIPO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAOTIPO","Title")',ctrl:'MOVIMENTACAOTIPO',prop:'Title'},{ctrl:'MOVIMENTACAODATAEMPRESTIMO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAODATAEMPRESTIMO","Title")',ctrl:'MOVIMENTACAODATAEMPRESTIMO',prop:'Title'},{ctrl:'MOVIMENTACAOPREVISAODEVOLUCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAOPREVISAODEVOLUCAO","Title")',ctrl:'MOVIMENTACAOPREVISAODEVOLUCAO',prop:'Title'},{ctrl:'MOVIMENTACAODATADEVOLUCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAODATADEVOLUCAO","Title")',ctrl:'MOVIMENTACAODATADEVOLUCAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV39filtros',fld:'vFILTROS'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV20AcervoId',fld:'vACERVOID'},{av:'AV47Tipo',fld:'vTIPO'},{av:'AV22DataIni',fld:'vDATAINI'},{av:'AV23DataFin',fld:'vDATAFIN'},{av:'AV26DevIni',fld:'vDEVINI'},{av:'AV27DevFin',fld:'vDEVFIN'},{av:'AV24PrevIni',fld:'vPREVINI'},{av:'AV25PrevFin',fld:'vPREVFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV22DataIni',fld:'vDATAINI'},{av:'AV23DataFin',fld:'vDATAFIN'},{av:'AV20AcervoId',fld:'vACERVOID'},{av:'AV26DevIni',fld:'vDEVINI'},{av:'AV27DevFin',fld:'vDEVFIN'},{av:'AV47Tipo',fld:'vTIPO'},{av:'AV24PrevIni',fld:'vPREVINI'},{av:'AV25PrevFin',fld:'vPREVFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A108MovimentacaoTipo',fld:'MOVIMENTACAOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV39filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV22DataIni',fld:'vDATAINI'},{av:'AV23DataFin',fld:'vDATAFIN'},{av:'AV20AcervoId',fld:'vACERVOID'},{av:'AV26DevIni',fld:'vDEVINI'},{av:'AV27DevFin',fld:'vDEVFIN'},{av:'AV47Tipo',fld:'vTIPO'},{av:'AV24PrevIni',fld:'vPREVINI'},{av:'AV25PrevFin',fld:'vPREVFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A108MovimentacaoTipo',fld:'MOVIMENTACAOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV39filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A108MovimentacaoTipo',fld:'MOVIMENTACAOTIPO'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV48TipoMovimentacao',fld:'vTIPOMOVIMENTACAO'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A104MovimentacaoId',fld:'MOVIMENTACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV20AcervoId',fld:'vACERVOID'},{av:'AV47Tipo',fld:'vTIPO'},{av:'AV22DataIni',fld:'vDATAINI'},{av:'AV23DataFin',fld:'vDATAFIN'},{av:'AV26DevIni',fld:'vDEVINI'},{av:'AV27DevFin',fld:'vDEVFIN'},{av:'AV24PrevIni',fld:'vPREVINI'},{av:'AV25PrevFin',fld:'vPREVFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A104MovimentacaoId',fld:'MOVIMENTACAOID'},{av:'AV39filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A104MovimentacaoId',fld:'MOVIMENTACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV20AcervoId',fld:'vACERVOID'},{av:'AV47Tipo',fld:'vTIPO'},{av:'AV22DataIni',fld:'vDATAINI'},{av:'AV23DataFin',fld:'vDATAFIN'},{av:'AV26DevIni',fld:'vDEVINI'},{av:'AV27DevFin',fld:'vDEVFIN'},{av:'AV24PrevIni',fld:'vPREVINI'},{av:'AV25PrevFin',fld:'vPREVFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A104MovimentacaoId',fld:'MOVIMENTACAOID'},{av:'AV39filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A104MovimentacaoId',fld:'MOVIMENTACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV20AcervoId',fld:'vACERVOID'},{av:'AV47Tipo',fld:'vTIPO'},{av:'AV22DataIni',fld:'vDATAINI'},{av:'AV23DataFin',fld:'vDATAFIN'},{av:'AV26DevIni',fld:'vDEVINI'},{av:'AV27DevFin',fld:'vDEVFIN'},{av:'AV24PrevIni',fld:'vPREVINI'},{av:'AV25PrevFin',fld:'vPREVFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A104MovimentacaoId',fld:'MOVIMENTACAOID'},{av:'AV39filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV22DataIni',fld:'vDATAINI'},{av:'AV23DataFin',fld:'vDATAFIN'},{av:'AV20AcervoId',fld:'vACERVOID'},{av:'AV26DevIni',fld:'vDEVINI'},{av:'AV27DevFin',fld:'vDEVFIN'},{av:'AV47Tipo',fld:'vTIPO'},{av:'AV24PrevIni',fld:'vPREVINI'},{av:'AV25PrevFin',fld:'vPREVFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A108MovimentacaoTipo',fld:'MOVIMENTACAOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV39filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV20AcervoId',fld:'vACERVOID'},{av:'AV47Tipo',fld:'vTIPO'},{av:'AV22DataIni',fld:'vDATAINI'},{av:'AV23DataFin',fld:'vDATAFIN'},{av:'AV26DevIni',fld:'vDEVINI'},{av:'AV27DevFin',fld:'vDEVFIN'},{av:'AV24PrevIni',fld:'vPREVINI'},{av:'AV25PrevFin',fld:'vPREVFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV44EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3082AcervoEmpresaId',fld:'ACERVOEMPRESAID'},{av:'AV45AcervoEmpresaId',fld:'vACERVOEMPRESAID'},{av:'A39AcervoId',fld:'ACERVOID'}],[{av:'AV39filtros',fld:'vFILTROS'},{av:'AV46tpErro',fld:'vTPERRO'},{av:'AV57GXLvl225',fld:'vGXLVL225'},{av:'AV58GXLvl237',fld:'vGXLVL237'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV22DataIni',fld:'vDATAINI'},{av:'AV23DataFin',fld:'vDATAFIN'},{av:'AV20AcervoId',fld:'vACERVOID'},{av:'AV26DevIni',fld:'vDEVINI'},{av:'AV27DevFin',fld:'vDEVFIN'},{av:'AV47Tipo',fld:'vTIPO'},{av:'AV24PrevIni',fld:'vPREVINI'},{av:'AV25PrevFin',fld:'vPREVFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A108MovimentacaoTipo',fld:'MOVIMENTACAOTIPO'}],[]];
   this.setPrompt("PROMPT_PESSOAID", [16]);
   this.setPrompt("PROMPT_ACERVOID", [37]);
   this.setVCMap("AV28EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV49SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV28EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV49SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar(this.GXValidFnc[112]);
   GridContainer.addRefreshingVar({rfrVar:"AV28EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV49SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A108MovimentacaoTipo", rfrProp:"Value", gxAttId:"108"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovimentacao());
