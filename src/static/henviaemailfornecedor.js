/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:19:40.0
*/
gx.evt.autoSkip = false;
gx.define('henviaemailfornecedor', false, function () {
   this.ServerClass =  "henviaemailfornecedor" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("3", "'CANCELAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
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
   this.e11cw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12cw2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e14cw2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e15cw2_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e19cw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,16,18,22,24,25,29,31,39,47,49,50,51,52,53,54,55,56,57,58,59,65,68,69,70,71,76,77];
   this.GXLastCtrlId =77;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"henviaemailfornecedor",[],false,1,true,true,0,true,false,false,"CollEmailConfirmaPagto.EmailConfirmaPagtoItem",0,"px","Novo registro",true,false,true,null,null,false,"AV31SdtEmail",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11D",49,"CTLEMAILNOCONTA","Nº Conta","","EmailNoConta","int",0,"px",8,8,"right",null,[],"GXV11D","GXV11D",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11E",50,"CTLEMAILPESSOAID","Código do Titular","","EmailPessoaId","int",0,"px",7,7,"right",null,[],"GXV11E","GXV11E",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11F",51,"CTLEMAILFANTASIA","Nome do Fornecedor","","EmailFantasia","svchar",0,"px",60,60,"left",null,[],"GXV11F","GXV11F",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11G",52,"CTLEMAILDOCUMENTO","Documento","","EmailDocumento","svchar",0,"px",20,20,"left",null,[],"GXV11G","GXV11G",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11H",53,"CTLEMAILSEQUENCIA","Seq Documento","","EmailSequencia","char",0,"px",3,3,"left",null,[],"GXV11H","GXV11H",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11I",54,"CTLEMAILDOCSEQ","Docmto/Seq","","EmailDocSeq","svchar",0,"px",24,24,"left",null,[],"GXV11I","GXV11I",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11J",55,"CTLEMAILCHEQUE","Cheque","","EmailCheque","int",0,"px",8,8,"right",null,[],"GXV11J","GXV11J",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11K",56,"CTLEMAILPAGAMENTO","Dt Pagmto","","EmailPagamento","date",0,"px",10,10,"right",null,[],"GXV11K","GXV11K",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11L",57,"CTLEMAILVALOR","Valor","","EmailValor","decimal",0,"px",22,22,"right",null,[],"GXV11L","GXV11L",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addCheckBox("GXV11M",58,"CTLEMAILSNMARCADO","","","EmailSnMarcado","char","S","N",null,true,false,0,"px","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE6",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV23DataIni",gxold:"OV23DataIni",gxvar:"AV23DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV23DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 10 , function() {
   });
   GXValidFnc[12]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIN",gxz:"ZV24DataFin",gxold:"OV24DataFin",gxvar:"AV24DataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIN",gx.O.AV24DataFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[16]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILRESPONSAVEL",gxz:"ZV43EmailResponsavel",gxold:"OV43EmailResponsavel",gxvar:"AV43EmailResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43EmailResponsavel=Value},v2z:function(Value){gx.O.ZV43EmailResponsavel=Value},v2c:function(){gx.fn.setControlValue("vEMAILRESPONSAVEL",gx.O.AV43EmailResponsavel,0)},c2v:function(){gx.O.AV43EmailResponsavel=this.val()},val:function(){return gx.fn.getControlValue("vEMAILRESPONSAVEL")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV25PessoaId",gxold:"OV25PessoaId",gxvar:"AV25PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV25PessoaId,0)},c2v:function(){gx.O.AV25PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV29PessoaFantasia",gxold:"OV29PessoaFantasia",gxvar:"AV29PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PessoaFantasia=Value},v2z:function(Value){gx.O.ZV29PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV29PessoaFantasia,0)},c2v:function(){gx.O.AV29PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORPOEMAIL",gxz:"ZV30CorpoEmail",gxold:"OV30CorpoEmail",gxvar:"AV30CorpoEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30CorpoEmail=Value},v2z:function(Value){gx.O.ZV30CorpoEmail=Value},v2c:function(){gx.fn.setControlValue("vCORPOEMAIL",gx.O.AV30CorpoEmail,0)},c2v:function(){gx.O.AV30CorpoEmail=this.val()},val:function(){return gx.fn.getControlValue("vCORPOEMAIL")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[49]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMAILNOCONTA",gxz:"ZV48GXV11D",gxold:"OV48GXV11D",gxvar:"GXV11D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11D=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48GXV11D=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLEMAILNOCONTA",row || gx.fn.currentGridRowImpl(48),gx.O.GXV11D,0)},c2v:function(){gx.O.GXV11D=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLEMAILNOCONTA",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMAILPESSOAID",gxz:"ZV49GXV11E",gxold:"OV49GXV11E",gxvar:"GXV11E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11E=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49GXV11E=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLEMAILPESSOAID",row || gx.fn.currentGridRowImpl(48),gx.O.GXV11E,0)},c2v:function(){gx.O.GXV11E=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLEMAILPESSOAID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMAILFANTASIA",gxz:"ZV50GXV11F",gxold:"OV50GXV11F",gxvar:"GXV11F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11F=Value},v2z:function(Value){gx.O.ZV50GXV11F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMAILFANTASIA",row || gx.fn.currentGridRowImpl(48),gx.O.GXV11F,0)},c2v:function(){gx.O.GXV11F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMAILFANTASIA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMAILDOCUMENTO",gxz:"ZV51GXV11G",gxold:"OV51GXV11G",gxvar:"GXV11G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11G=Value},v2z:function(Value){gx.O.ZV51GXV11G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMAILDOCUMENTO",row || gx.fn.currentGridRowImpl(48),gx.O.GXV11G,0)},c2v:function(){gx.O.GXV11G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMAILDOCUMENTO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMAILSEQUENCIA",gxz:"ZV52GXV11H",gxold:"OV52GXV11H",gxvar:"GXV11H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11H=Value},v2z:function(Value){gx.O.ZV52GXV11H=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMAILSEQUENCIA",row || gx.fn.currentGridRowImpl(48),gx.O.GXV11H,0)},c2v:function(){gx.O.GXV11H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMAILSEQUENCIA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:24,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMAILDOCSEQ",gxz:"ZV53GXV11I",gxold:"OV53GXV11I",gxvar:"GXV11I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11I=Value},v2z:function(Value){gx.O.ZV53GXV11I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMAILDOCSEQ",row || gx.fn.currentGridRowImpl(48),gx.O.GXV11I,0)},c2v:function(){gx.O.GXV11I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMAILDOCSEQ",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMAILCHEQUE",gxz:"ZV54GXV11J",gxold:"OV54GXV11J",gxvar:"GXV11J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11J=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54GXV11J=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLEMAILCHEQUE",row || gx.fn.currentGridRowImpl(48),gx.O.GXV11J,0)},c2v:function(){gx.O.GXV11J=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLEMAILCHEQUE",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMAILPAGAMENTO",gxz:"ZV55GXV11K",gxold:"OV55GXV11K",gxvar:"GXV11K",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11K=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV55GXV11K=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLEMAILPAGAMENTO",row || gx.fn.currentGridRowImpl(48),gx.O.GXV11K,0)},c2v:function(){gx.O.GXV11K=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLEMAILPAGAMENTO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMAILVALOR",gxz:"ZV56GXV11L",gxold:"OV56GXV11L",gxvar:"GXV11L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11L=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV56GXV11L=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLEMAILVALOR",row || gx.fn.currentGridRowImpl(48),gx.O.GXV11L,2,',')},c2v:function(){gx.O.GXV11L=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLEMAILVALOR",row || gx.fn.currentGridRowImpl(48),'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMAILSNMARCADO",gxz:"ZV57GXV11M",gxold:"OV57GXV11M",gxvar:"GXV11M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV11M=Value},v2z:function(Value){gx.O.ZV57GXV11M=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLEMAILSNMARCADO",row || gx.fn.currentGridRowImpl(48),gx.O.GXV11M,"S")},c2v:function(){gx.O.GXV11M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMAILSNMARCADO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[59]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[65]={fld:"TABLE7",grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV39AcessoSistemaSequencia",gxold:"OV39AcessoSistemaSequencia",gxvar:"AV39AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV39AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV39AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"JS", format:2,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraopessoa,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOPESSOA",gxz:"ZV28EmpresaPadraoPessoa",gxold:"OV28EmpresaPadraoPessoa",gxvar:"AV28EmpresaPadraoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EmpresaPadraoPessoa=Value},v2z:function(Value){gx.O.ZV28EmpresaPadraoPessoa=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOPESSOA",gx.O.AV28EmpresaPadraoPessoa,0)},c2v:function(){gx.O.AV28EmpresaPadraoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOPESSOA")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV37TpTela",gxold:"OV37TpTela",gxvar:"AV37TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TpTela=Value},v2z:function(Value){gx.O.ZV37TpTela=Value},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV37TpTela,0)},c2v:function(){gx.O.AV37TpTela=this.val()},val:function(){return gx.fn.getControlValue("vTPTELA")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"BTNHELP",grid:0};
   GXValidFnc[77]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV23DataIni = gx.date.nullDate() ;
   this.ZV23DataIni = gx.date.nullDate() ;
   this.OV23DataIni = gx.date.nullDate() ;
   this.AV24DataFin = gx.date.nullDate() ;
   this.ZV24DataFin = gx.date.nullDate() ;
   this.OV24DataFin = gx.date.nullDate() ;
   this.AV43EmailResponsavel = "" ;
   this.ZV43EmailResponsavel = "" ;
   this.OV43EmailResponsavel = "" ;
   this.AV25PessoaId = 0 ;
   this.ZV25PessoaId = 0 ;
   this.OV25PessoaId = 0 ;
   this.AV29PessoaFantasia = "" ;
   this.ZV29PessoaFantasia = "" ;
   this.OV29PessoaFantasia = "" ;
   this.AV30CorpoEmail = "" ;
   this.ZV30CorpoEmail = "" ;
   this.OV30CorpoEmail = "" ;
   this.ZV48GXV11D = 0 ;
   this.OV48GXV11D = 0 ;
   this.ZV49GXV11E = 0 ;
   this.OV49GXV11E = 0 ;
   this.ZV50GXV11F = "" ;
   this.OV50GXV11F = "" ;
   this.ZV51GXV11G = "" ;
   this.OV51GXV11G = "" ;
   this.ZV52GXV11H = "" ;
   this.OV52GXV11H = "" ;
   this.ZV53GXV11I = "" ;
   this.OV53GXV11I = "" ;
   this.ZV54GXV11J = 0 ;
   this.OV54GXV11J = 0 ;
   this.ZV55GXV11K = gx.date.nullDate() ;
   this.OV55GXV11K = gx.date.nullDate() ;
   this.ZV56GXV11L = 0 ;
   this.OV56GXV11L = 0 ;
   this.ZV57GXV11M = "" ;
   this.OV57GXV11M = "" ;
   this.AV39AcessoSistemaSequencia = 0 ;
   this.ZV39AcessoSistemaSequencia = 0 ;
   this.OV39AcessoSistemaSequencia = 0 ;
   this.AV28EmpresaPadraoPessoa = "" ;
   this.ZV28EmpresaPadraoPessoa = "" ;
   this.OV28EmpresaPadraoPessoa = "" ;
   this.AV37TpTela = "" ;
   this.ZV37TpTela = "" ;
   this.OV37TpTela = "" ;
   this.AV23DataIni = gx.date.nullDate() ;
   this.AV24DataFin = gx.date.nullDate() ;
   this.AV43EmailResponsavel = "" ;
   this.AV25PessoaId = 0 ;
   this.AV29PessoaFantasia = "" ;
   this.AV30CorpoEmail = "" ;
   this.AV39AcessoSistemaSequencia = 0 ;
   this.AV28EmpresaPadraoPessoa = "" ;
   this.AV37TpTela = "" ;
   this.GXV11D = 0 ;
   this.GXV11E = 0 ;
   this.GXV11F = "" ;
   this.GXV11G = "" ;
   this.GXV11H = "" ;
   this.GXV11I = "" ;
   this.GXV11J = 0 ;
   this.GXV11K = gx.date.nullDate() ;
   this.GXV11L = 0 ;
   this.GXV11M = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A2200ContaLancamDataEmail = gx.date.nullDate() ;
   this.A1805ContaLancamData = gx.date.nullDate() ;
   this.A2030ContaLancamTpLancamTipo = "" ;
   this.A2023ContaLancamDocBaixa = 0 ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1803ContaLancamSequencia = 0 ;
   this.A1807ContaLancamValor = 0 ;
   this.A434PessoaEmail = "" ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A5496ContaPagRecTpBaixaEmpId = "" ;
   this.A5497ContaPagRecTpBaixaTipo = "" ;
   this.A5498ContaPagRecTpBaixaSigla = "" ;
   this.A1364TipoBaixaTransacaoPagRecEmpres = "" ;
   this.A1365TipoBaixaTransacaoPagRecTipo = "" ;
   this.A1366TipoBaixaTransacaoPagRecId = "" ;
   this.A1141PessoaPagRecEmpresaId = "" ;
   this.A1232PessoaPagRecId = 0 ;
   this.A1782ContaLancamTpLancamEmpId = "" ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A446PessoaFornecedor = "" ;
   this.Events = {"e11cw2_client": ["'FECHAR'", true] ,"e13cw2_client": ["ENTER", true] ,"e12cw2_client": ["'CANCELAR'", true] ,"e14cw2_client": ["'DESMARCARTODOS'", true] ,"e15cw2_client": ["'MARCARTODOS'", true] ,"e19cw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48},{av:'subGrid_Rows'},{av:'AV37TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV39AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48},{av:'subGrid_Rows'},{av:'AV37TpTela',fld:'vTPTELA'},{av:'AV32SnErro',fld:'vSNERRO'},{av:'AV43EmailResponsavel',fld:'vEMAILRESPONSAVEL'},{av:'AV23DataIni',fld:'vDATAINI'},{av:'AV24DataFin',fld:'vDATAFIN'},{av:'AV25PessoaId',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV28EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'AV30CorpoEmail',fld:'vCORPOEMAIL'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1805ContaLancamData',fld:'CONTALANCAMDATA'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2200ContaLancamDataEmail',fld:'CONTALANCAMDATAEMAIL'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'A1636ContaPagRecCliForEmpId',fld:'CONTAPAGRECCLIFOREMPID'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'A2030ContaLancamTpLancamTipo',fld:'CONTALANCAMTPLANCAMTIPO'},{av:'A2023ContaLancamDocBaixa',fld:'CONTALANCAMDOCBAIXA'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'}],[{av:'AV37TpTela',fld:'vTPTELA'},{av:'AV38SdtEnvio',fld:'vSDTENVIO'},{av:'AV60GXV2',fld:'vGXV2'},{av:'AV36SdtEmailItem',fld:'vSDTEMAILITEM'},{av:'AV32SnErro',fld:'vSNERRO'},{av:'AV24DataFin',fld:'vDATAFIN'},{av:'AV23DataIni',fld:'vDATAINI'},{av:'AV61GXLvl138',fld:'vGXLVL138'},{av:'AV29PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV62GXV3',fld:'vGXV3'},{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48},{av:'AV41Arquivo',fld:'vARQUIVO'},{av:'AV42i',fld:'vI'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV23DataIni',fld:'vDATAINI'},{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37TpTela',fld:'vTPTELA'}],[{av:'AV37TpTela',fld:'vTPTELA'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37TpTela',fld:'vTPTELA'}],[{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37TpTela',fld:'vTPTELA'}],[{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37TpTela',fld:'vTPTELA'},{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37TpTela',fld:'vTPTELA'},{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37TpTela',fld:'vTPTELA'},{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37TpTela',fld:'vTPTELA'},{av:'AV31SdtEmail',fld:'vSDTEMAIL',grid:48}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'}]];
   this.setPrompt("PROMPT_PESSOAID", [24]);
   this.EnterCtrl = ["BTNAVANCAR" ,"BTNCONFIRMAR"];
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   this.addGridBCProperty("Sdtemail", ["EmailNoConta"], this.GXValidFnc[49], "AV31SdtEmail");
   this.addGridBCProperty("Sdtemail", ["EmailPessoaId"], this.GXValidFnc[50], "AV31SdtEmail");
   this.addGridBCProperty("Sdtemail", ["EmailFantasia"], this.GXValidFnc[51], "AV31SdtEmail");
   this.addGridBCProperty("Sdtemail", ["EmailDocumento"], this.GXValidFnc[52], "AV31SdtEmail");
   this.addGridBCProperty("Sdtemail", ["EmailSequencia"], this.GXValidFnc[53], "AV31SdtEmail");
   this.addGridBCProperty("Sdtemail", ["EmailDocSeq"], this.GXValidFnc[54], "AV31SdtEmail");
   this.addGridBCProperty("Sdtemail", ["EmailCheque"], this.GXValidFnc[55], "AV31SdtEmail");
   this.addGridBCProperty("Sdtemail", ["EmailPagamento"], this.GXValidFnc[56], "AV31SdtEmail");
   this.addGridBCProperty("Sdtemail", ["EmailValor"], this.GXValidFnc[57], "AV31SdtEmail");
   this.addGridBCProperty("Sdtemail", ["EmailSnMarcado"], this.GXValidFnc[58], "AV31SdtEmail");
   this.InitStandaloneVars( );
});
gx.setParentObj(new henviaemailfornecedor());
