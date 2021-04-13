/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:21:9.41
*/
gx.evt.autoSkip = false;
gx.define('hliberacaopagamento', false, function () {
   this.ServerClass =  "hliberacaopagamento" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV105LiberacaoPagto=gx.fn.getControlValue("vLIBERACAOPAGTO") ;
   };
   this.Validv_Liberacaopagtopessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLIBERACAOPAGTOPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraopessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOPESSOA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11cr2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e12cr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cr2_client=function()
   {
      this.executeServerEvent("'LIBERAPAGAMENTO'", false, null, false, false);
   };
   this.e14cr2_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e15cr2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e18cr2_client=function()
   {
      this.executeServerEvent("'DETALHAR'", true, arguments[0], false, false);
   };
   this.e20cr2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e21cr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,26,32,34,35,36,41,49,51,52,53,54,55,56,57,58,59,60,61,64,67,69,78,79,81,83];
   this.GXLastCtrlId =83;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",50,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hliberacaopagamento",[],false,1,true,true,0,true,false,false,"CollLiberacaoPagto.LiberacaoPagtoItem",0,"px","Novo registro",true,false,true,null,null,false,"AV105LiberacaoPagto",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11F",51,"CTLLIBERACAOPAGTONOCONTA","Nº Conta","","LiberacaoPagtoNoConta","int",0,"px",8,8,"right",null,[],"GXV11F","GXV11F",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11G",52,"CTLLIBERACAOPAGTOPESSOAID","Código","","LiberacaoPagtoPessoaId","int",0,"px",7,7,"right",null,[],"GXV11G","GXV11G",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11H",53,"CTLLIBERACAOPAGTOFANTASIA","Nome do Fornecedor","","LiberacaoPagtoFantasia","svchar",0,"px",60,60,"left",null,[],"GXV11H","GXV11H",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11I",54,"CTLLIBERACAOPAGTODOCSEQ","Docmto/Seq","","LiberacaoPagtoDocSeq","char",0,"px",24,24,"left",null,[],"GXV11I","GXV11I",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11J",55,"CTLLIBERACAOPAGTOCHEQUE","Nº Cheque","","LiberacaoPagtoCheque","int",0,"px",8,8,"right",null,[],"GXV11J","GXV11J",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11K",56,"CTLLIBERACAOPAGTOPAGAMENTO","Dt.Pagmto","","LiberacaoPagtoPagamento","date",0,"px",10,10,"right",null,[],"GXV11K","GXV11K",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11L",57,"CTLLIBERACAOPAGTOVALOR","Valor","","LiberacaoPagtoValor","decimal",0,"px",22,22,"right",null,[],"GXV11L","GXV11L",true,2,false,false,"Attribute",1,"");
   GridContainer.addCheckBox("GXV11M",58,"CTLLIBERACAOPAGTOSNMARCADO","Liberar Pagmto","","LiberacaoPagtoSnMarcado","char","S","N",null,true,false,0,"px","GridColumnImage");
   GridContainer.addSingleLineEdit("GXV11N",59,"CTLLIBERACAOPAGTOSEQLANCAM","Sequência","","LiberacaoPagtoSeqLancam","int",0,"px",3,3,"right",null,[],"GXV11N","GXV11N",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpdetalhe","vBMPDETALHE",60,0,"px",17,"px","e18cr2_client","","Detalhe","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TABFILTRO",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLIBERACAOPAGAMENTODATA",gxz:"ZV67LiberacaoPagamentoData",gxold:"OV67LiberacaoPagamentoData",gxvar:"AV67LiberacaoPagamentoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67LiberacaoPagamentoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV67LiberacaoPagamentoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLIBERACAOPAGAMENTODATA",gx.O.AV67LiberacaoPagamentoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV67LiberacaoPagamentoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLIBERACAOPAGAMENTODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[20]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLIBERACAOPAGTODATAINICIAL",gxz:"ZV95LiberacaoPagtoDataInicial",gxold:"OV95LiberacaoPagtoDataInicial",gxvar:"AV95LiberacaoPagtoDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95LiberacaoPagtoDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV95LiberacaoPagtoDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLIBERACAOPAGTODATAINICIAL",gx.O.AV95LiberacaoPagtoDataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV95LiberacaoPagtoDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLIBERACAOPAGTODATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLIBERACAOPAGTODATAFINAL",gxz:"ZV96LiberacaoPagtoDataFinal",gxold:"OV96LiberacaoPagtoDataFinal",gxvar:"AV96LiberacaoPagtoDataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96LiberacaoPagtoDataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV96LiberacaoPagtoDataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLIBERACAOPAGTODATAFINAL",gx.O.AV96LiberacaoPagtoDataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV96LiberacaoPagtoDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLIBERACAOPAGTODATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Liberacaopagtopessoaid,isvalid:null,rgrid:[],fld:"vLIBERACAOPAGTOPESSOAID",gxz:"ZV97LiberacaoPagtoPessoaId",gxold:"OV97LiberacaoPagtoPessoaId",gxvar:"AV97LiberacaoPagtoPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97LiberacaoPagtoPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV97LiberacaoPagtoPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLIBERACAOPAGTOPESSOAID",gx.O.AV97LiberacaoPagtoPessoaId,0)},c2v:function(){gx.O.AV97LiberacaoPagtoPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLIBERACAOPAGTOPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLIBERACAOPAGTOPESSOANOME",gxz:"ZV100LiberacaoPagtoPessoaNome",gxold:"OV100LiberacaoPagtoPessoaNome",gxvar:"AV100LiberacaoPagtoPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100LiberacaoPagtoPessoaNome=Value},v2z:function(Value){gx.O.ZV100LiberacaoPagtoPessoaNome=Value},v2c:function(){gx.fn.setControlValue("vLIBERACAOPAGTOPESSOANOME",gx.O.AV100LiberacaoPagtoPessoaNome,0)},c2v:function(){gx.O.AV100LiberacaoPagtoPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("vLIBERACAOPAGTOPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraopessoa,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOPESSOA",gxz:"ZV98EmpresaPadraoPessoa",gxold:"OV98EmpresaPadraoPessoa",gxvar:"AV98EmpresaPadraoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98EmpresaPadraoPessoa=Value},v2z:function(Value){gx.O.ZV98EmpresaPadraoPessoa=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOPESSOA",gx.O.AV98EmpresaPadraoPessoa,0)},c2v:function(){gx.O.AV98EmpresaPadraoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOPESSOA")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLE3",grid:0};
   GXValidFnc[49]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[51]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLIBERACAOPAGTONOCONTA",gxz:"ZV116GXV11F",gxold:"OV116GXV11F",gxvar:"GXV11F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11F=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV116GXV11F=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLLIBERACAOPAGTONOCONTA",row || gx.fn.currentGridRowImpl(50),gx.O.GXV11F,0)},c2v:function(){gx.O.GXV11F=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLLIBERACAOPAGTONOCONTA",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLIBERACAOPAGTOPESSOAID",gxz:"ZV117GXV11G",gxold:"OV117GXV11G",gxvar:"GXV11G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11G=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV117GXV11G=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLLIBERACAOPAGTOPESSOAID",row || gx.fn.currentGridRowImpl(50),gx.O.GXV11G,0)},c2v:function(){gx.O.GXV11G=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLLIBERACAOPAGTOPESSOAID",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLIBERACAOPAGTOFANTASIA",gxz:"ZV118GXV11H",gxold:"OV118GXV11H",gxvar:"GXV11H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11H=Value},v2z:function(Value){gx.O.ZV118GXV11H=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLIBERACAOPAGTOFANTASIA",row || gx.fn.currentGridRowImpl(50),gx.O.GXV11H,0)},c2v:function(){gx.O.GXV11H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLIBERACAOPAGTOFANTASIA",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:24,dec:0,sign:false,ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLIBERACAOPAGTODOCSEQ",gxz:"ZV119GXV11I",gxold:"OV119GXV11I",gxvar:"GXV11I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11I=Value},v2z:function(Value){gx.O.ZV119GXV11I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLIBERACAOPAGTODOCSEQ",row || gx.fn.currentGridRowImpl(50),gx.O.GXV11I,0)},c2v:function(){gx.O.GXV11I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLIBERACAOPAGTODOCSEQ",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLIBERACAOPAGTOCHEQUE",gxz:"ZV120GXV11J",gxold:"OV120GXV11J",gxvar:"GXV11J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11J=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV120GXV11J=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLLIBERACAOPAGTOCHEQUE",row || gx.fn.currentGridRowImpl(50),gx.O.GXV11J,0)},c2v:function(){gx.O.GXV11J=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLLIBERACAOPAGTOCHEQUE",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLIBERACAOPAGTOPAGAMENTO",gxz:"ZV121GXV11K",gxold:"OV121GXV11K",gxvar:"GXV11K",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11K=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV121GXV11K=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLLIBERACAOPAGTOPAGAMENTO",row || gx.fn.currentGridRowImpl(50),gx.O.GXV11K,0)},c2v:function(){gx.O.GXV11K=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLLIBERACAOPAGTOPAGAMENTO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLIBERACAOPAGTOVALOR",gxz:"ZV122GXV11L",gxold:"OV122GXV11L",gxvar:"GXV11L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11L=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV122GXV11L=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLLIBERACAOPAGTOVALOR",row || gx.fn.currentGridRowImpl(50),gx.O.GXV11L,2,',')},c2v:function(){gx.O.GXV11L=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLLIBERACAOPAGTOVALOR",row || gx.fn.currentGridRowImpl(50),'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLIBERACAOPAGTOSNMARCADO",gxz:"ZV123GXV11M",gxold:"OV123GXV11M",gxvar:"GXV11M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV11M=Value},v2z:function(Value){gx.O.ZV123GXV11M=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLLIBERACAOPAGTOSNMARCADO",row || gx.fn.currentGridRowImpl(50),gx.O.GXV11M,"S")},c2v:function(){gx.O.GXV11M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLIBERACAOPAGTOSNMARCADO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[59]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLIBERACAOPAGTOSEQLANCAM",gxz:"ZV124GXV11N",gxold:"OV124GXV11N",gxvar:"GXV11N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11N=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV124GXV11N=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLLIBERACAOPAGTOSEQLANCAM",row || gx.fn.currentGridRowImpl(50),gx.O.GXV11N,0)},c2v:function(){gx.O.GXV11N=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLLIBERACAOPAGTOSEQLANCAM",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDETALHE",gxz:"ZV110bmpDetalhe",gxold:"OV110bmpDetalhe",gxvar:"AV110bmpDetalhe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV110bmpDetalhe=Value},v2z:function(Value){gx.O.ZV110bmpDetalhe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDETALHE",row || gx.fn.currentGridRowImpl(50),gx.O.AV110bmpDetalhe,gx.O.AV127Bmpdetalhe_GXI)},c2v:function(){gx.O.AV127Bmpdetalhe_GXI=this.val_GXI();gx.O.AV110bmpDetalhe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDETALHE",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDETALHE_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV127Bmpdetalhe_GXI',nac:gx.falseFn};
   GXValidFnc[61]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[64]={fld:"TABLE4",grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTAL",gxz:"ZV112Total",gxold:"OV112Total",gxvar:"AV112Total",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112Total=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV112Total=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTAL",gx.O.AV112Total,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV112Total=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[78]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV111AcessoSistemaSequencia",gxold:"OV111AcessoSistemaSequencia",gxvar:"AV111AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV111AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV111AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV111AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"JS", format:2,grid:0};
   GXValidFnc[81]={fld:"BTNHELP",grid:0};
   GXValidFnc[83]={fld:"PROMPT_LIBERACAOPAGTOPESSOAID",grid:0};
   this.AV67LiberacaoPagamentoData = gx.date.nullDate() ;
   this.ZV67LiberacaoPagamentoData = gx.date.nullDate() ;
   this.OV67LiberacaoPagamentoData = gx.date.nullDate() ;
   this.AV95LiberacaoPagtoDataInicial = gx.date.nullDate() ;
   this.ZV95LiberacaoPagtoDataInicial = gx.date.nullDate() ;
   this.OV95LiberacaoPagtoDataInicial = gx.date.nullDate() ;
   this.AV96LiberacaoPagtoDataFinal = gx.date.nullDate() ;
   this.ZV96LiberacaoPagtoDataFinal = gx.date.nullDate() ;
   this.OV96LiberacaoPagtoDataFinal = gx.date.nullDate() ;
   this.AV97LiberacaoPagtoPessoaId = 0 ;
   this.ZV97LiberacaoPagtoPessoaId = 0 ;
   this.OV97LiberacaoPagtoPessoaId = 0 ;
   this.AV100LiberacaoPagtoPessoaNome = "" ;
   this.ZV100LiberacaoPagtoPessoaNome = "" ;
   this.OV100LiberacaoPagtoPessoaNome = "" ;
   this.AV98EmpresaPadraoPessoa = "" ;
   this.ZV98EmpresaPadraoPessoa = "" ;
   this.OV98EmpresaPadraoPessoa = "" ;
   this.ZV116GXV11F = 0 ;
   this.OV116GXV11F = 0 ;
   this.ZV117GXV11G = 0 ;
   this.OV117GXV11G = 0 ;
   this.ZV118GXV11H = "" ;
   this.OV118GXV11H = "" ;
   this.ZV119GXV11I = "" ;
   this.OV119GXV11I = "" ;
   this.ZV120GXV11J = 0 ;
   this.OV120GXV11J = 0 ;
   this.ZV121GXV11K = gx.date.nullDate() ;
   this.OV121GXV11K = gx.date.nullDate() ;
   this.ZV122GXV11L = 0 ;
   this.OV122GXV11L = 0 ;
   this.ZV123GXV11M = "" ;
   this.OV123GXV11M = "" ;
   this.ZV124GXV11N = 0 ;
   this.OV124GXV11N = 0 ;
   this.ZV110bmpDetalhe = "" ;
   this.OV110bmpDetalhe = "" ;
   this.AV112Total = 0 ;
   this.ZV112Total = 0 ;
   this.OV112Total = 0 ;
   this.AV111AcessoSistemaSequencia = 0 ;
   this.ZV111AcessoSistemaSequencia = 0 ;
   this.OV111AcessoSistemaSequencia = 0 ;
   this.AV67LiberacaoPagamentoData = gx.date.nullDate() ;
   this.AV95LiberacaoPagtoDataInicial = gx.date.nullDate() ;
   this.AV96LiberacaoPagtoDataFinal = gx.date.nullDate() ;
   this.AV97LiberacaoPagtoPessoaId = 0 ;
   this.AV100LiberacaoPagtoPessoaNome = "" ;
   this.AV98EmpresaPadraoPessoa = "" ;
   this.AV112Total = 0 ;
   this.AV111AcessoSistemaSequencia = 0 ;
   this.GXV11F = 0 ;
   this.GXV11G = 0 ;
   this.GXV11H = "" ;
   this.GXV11I = "" ;
   this.GXV11J = 0 ;
   this.GXV11K = gx.date.nullDate() ;
   this.GXV11L = 0 ;
   this.GXV11M = "" ;
   this.GXV11N = 0 ;
   this.AV110bmpDetalhe = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A2026ContaLancamDataReuniao = gx.date.nullDate() ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1805ContaLancamData = gx.date.nullDate() ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A2023ContaLancamDocBaixa = 0 ;
   this.A1807ContaLancamValor = 0 ;
   this.A1803ContaLancamSequencia = 0 ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A446PessoaFornecedor = "" ;
   this.AV105LiberacaoPagto = [ ] ;
   this.Events = {"e11cr2_client": ["'PROCURAR'", true] ,"e12cr2_client": ["'FECHAR'", true] ,"e13cr2_client": ["'LIBERAPAGAMENTO'", true] ,"e14cr2_client": ["'MARCARTODOS'", true] ,"e15cr2_client": ["'DESMARCARTODOS'", true] ,"e18cr2_client": ["'DETALHAR'", true] ,"e20cr2_client": ["ENTER", true] ,"e21cr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'AV32tpErro',fld:'vTPERRO'},{av:'AV67LiberacaoPagamentoData',fld:'vLIBERACAOPAGAMENTODATA'},{av:'AV95LiberacaoPagtoDataInicial',fld:'vLIBERACAOPAGTODATAINICIAL'},{av:'AV96LiberacaoPagtoDataFinal',fld:'vLIBERACAOPAGTODATAFINAL'},{av:'AV97LiberacaoPagtoPessoaId',fld:'vLIBERACAOPAGTOPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV98EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'AV112Total',fld:'vTOTAL'},{av:'A1805ContaLancamData',fld:'CONTALANCAMDATA'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'A1636ContaPagRecCliForEmpId',fld:'CONTAPAGRECCLIFOREMPID'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'A2026ContaLancamDataReuniao',fld:'CONTALANCAMDATAREUNIAO'},{av:'A1783ContaLancamTpLancamId',fld:'CONTALANCAMTPLANCAMID'},{av:'AV108TipoLancamentoTipo',fld:'vTIPOLANCAMENTOTIPO'},{av:'AV106LiberacaoPagtoItem',fld:'vLIBERACAOPAGTOITEM'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'A2023ContaLancamDocBaixa',fld:'CONTALANCAMDOCBAIXA'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV99EmpresaPadraoTpLancamento',fld:'vEMPRESAPADRAOTPLANCAMENTO'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'AV107ContaLancamTpLancamId',fld:'vCONTALANCAMTPLANCAMID'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50},{av:'AV32tpErro',fld:'vTPERRO'},{av:'AV128GXLvl110',fld:'vGXLVL110'},{av:'AV112Total',fld:'vTOTAL'},{av:'AV107ContaLancamTpLancamId',fld:'vCONTALANCAMTPLANCAMID'},{av:'AV106LiberacaoPagtoItem',fld:'vLIBERACAOPAGTOITEM'},{av:'AV132GXLvl201',fld:'vGXLVL201'},{av:'AV108TipoLancamentoTipo',fld:'vTIPOLANCAMENTOTIPO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50}],[{av:'AV109ContaPagRecNumeroAux',fld:'vCONTAPAGRECNUMEROAUX'},{av:'AV110bmpDetalhe',fld:'vBMPDETALHE'},{av:'gx.fn.getCtrlProperty("vBMPDETALHE","Tooltiptext")',ctrl:'vBMPDETALHE',prop:'Tooltiptext'},{ctrl:'vBMPDETALHE',prop:'Alternatetext'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV111AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'LIBERAPAGAMENTO'"] = [[{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV67LiberacaoPagamentoData',fld:'vLIBERACAOPAGAMENTODATA'},{av:'AV112Total',fld:'vTOTAL'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV130GXV2',fld:'vGXV2'},{av:'AV106LiberacaoPagtoItem',fld:'vLIBERACAOPAGTOITEM'},{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50},{av:'AV97LiberacaoPagtoPessoaId',fld:'vLIBERACAOPAGTOPESSOAID'},{av:'AV100LiberacaoPagtoPessoaNome',fld:'vLIBERACAOPAGTOPESSOANOME'},{av:'AV112Total',fld:'vTOTAL'}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50}]];
   this.EvtParms["'DETALHAR'"] = [[{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50}],[]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV105LiberacaoPagto',fld:'vLIBERACAOPAGTO',grid:50}],[]];
   this.setPrompt("PROMPT_LIBERACAOPAGTOPESSOAID", [34]);
   this.setVCMap("AV105LiberacaoPagto", "vLIBERACAOPAGTO", 0, "CollLiberacaoPagto.LiberacaoPagtoItem");
   this.setVCMap("AV105LiberacaoPagto", "vLIBERACAOPAGTO", 0, "CollLiberacaoPagto.LiberacaoPagtoItem");
   GridContainer.addRefreshingVar({rfrVar:"AV105LiberacaoPagto"});
   this.addGridBCProperty("Liberacaopagto", ["LiberacaoPagtoNoConta"], this.GXValidFnc[51], "AV105LiberacaoPagto");
   this.addGridBCProperty("Liberacaopagto", ["LiberacaoPagtoPessoaId"], this.GXValidFnc[52], "AV105LiberacaoPagto");
   this.addGridBCProperty("Liberacaopagto", ["LiberacaoPagtoFantasia"], this.GXValidFnc[53], "AV105LiberacaoPagto");
   this.addGridBCProperty("Liberacaopagto", ["LiberacaoPagtoDocSeq"], this.GXValidFnc[54], "AV105LiberacaoPagto");
   this.addGridBCProperty("Liberacaopagto", ["LiberacaoPagtoCheque"], this.GXValidFnc[55], "AV105LiberacaoPagto");
   this.addGridBCProperty("Liberacaopagto", ["LiberacaoPagtoPagamento"], this.GXValidFnc[56], "AV105LiberacaoPagto");
   this.addGridBCProperty("Liberacaopagto", ["LiberacaoPagtoValor"], this.GXValidFnc[57], "AV105LiberacaoPagto");
   this.addGridBCProperty("Liberacaopagto", ["LiberacaoPagtoSnMarcado"], this.GXValidFnc[58], "AV105LiberacaoPagto");
   this.addGridBCProperty("Liberacaopagto", ["LiberacaoPagtoSeqLancam"], this.GXValidFnc[59], "AV105LiberacaoPagto");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hliberacaopagamento());
