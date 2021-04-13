/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:31:22.21
*/
gx.evt.autoSkip = false;
gx.define('hconsultarcontasatraso', false, function () {
   this.ServerClass =  "hconsultarcontasatraso" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A1712ContaPagRecVlrAcrescimo=gx.fn.getDecimalValue("CONTAPAGRECVLRACRESCIMO",'.',',') ;
      this.A1713ContaPagRecVlrConta=gx.fn.getDecimalValue("CONTAPAGRECVLRCONTA",'.',',') ;
      this.A1714ContaPagRecVlrDesconto=gx.fn.getDecimalValue("CONTAPAGRECVLRDESCONTO",'.',',') ;
      this.A1715ContaPagRecVlrPagamento=gx.fn.getDecimalValue("CONTAPAGRECVLRPAGAMENTO",'.',',') ;
      this.A2115ContaPagRecVlrAtualSemSinal=gx.fn.getDecimalValue("CONTAPAGRECVLRATUALSEMSINAL",'.',',') ;
      this.A1701ContaPagRecDtVencimento=gx.fn.getDateValue("CONTAPAGRECDTVENCIMENTO") ;
      this.A1685ContaPagRecEmpresaId=gx.fn.getControlValue("CONTAPAGRECEMPRESAID") ;
      this.A1636ContaPagRecCliForEmpId=gx.fn.getControlValue("CONTAPAGRECCLIFOREMPID") ;
      this.A1637ContaPagRecCliForId=gx.fn.getIntegerValue("CONTAPAGRECCLIFORID",'.') ;
      this.A1693ContaPagRecPagRec=gx.fn.getControlValue("CONTAPAGRECPAGREC") ;
      this.AV33ContaPagRecPagRec=gx.fn.getControlValue("vCONTAPAGRECPAGREC") ;
      this.A1692ContaPagRecSituacao=gx.fn.getControlValue("CONTAPAGRECSITUACAO") ;
      this.AV70TransacaoSaidaSNClienteAtraso=gx.fn.getControlValue("vTRANSACAOSAIDASNCLIENTEATRASO") ;
      this.A2182ContaPagRecCliForRazao=gx.fn.getControlValue("CONTAPAGRECCLIFORRAZAO") ;
      this.A2002ContaPagRecCliForCPF=gx.fn.getControlValue("CONTAPAGRECCLIFORCPF") ;
      this.A2003ContaPagRecCliForCNPJ=gx.fn.getControlValue("CONTAPAGRECCLIFORCNPJ") ;
      this.A2004ContaPagRecCliForSituacao=gx.fn.getControlValue("CONTAPAGRECCLIFORSITUACAO") ;
      this.A1686ContaPagRecNumero=gx.fn.getIntegerValue("CONTAPAGRECNUMERO",'.') ;
      this.A1695ContaPagRecDocumento=gx.fn.getControlValue("CONTAPAGRECDOCUMENTO") ;
      this.A1696ContaPagRecSeqDocume=gx.fn.getControlValue("CONTAPAGRECSEQDOCUME") ;
      this.A1716ContaPagRecNoParcela=gx.fn.getIntegerValue("CONTAPAGRECNOPARCELA",'.') ;
      this.A1699ContaPagRecDtEmissao=gx.fn.getDateValue("CONTAPAGRECDTEMISSAO") ;
   };
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
   this.e18y62_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hboxcontaobservacao",[this.AV17EmpresaPadrao, this.AV42ContaPagRecNumero, this.AV33ContaPagRecPagRec]), []);
      this.refreshOutputs([]);
   };
   this.e11y62_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12y62_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13y62_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14y62_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15y62_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e19y62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e20y62_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,7,10,12,15,17,19,21,23,26,27,28,30,33,35,37,45,46,47,48,49,50,51,52,55,58,60,63,65,71,74,76,78,80,82,83,84,85,86,87,88];
   this.GXLastCtrlId =88;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultarcontasatraso",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Contapagrecnumero",45,"vCONTAPAGRECNUMERO","Conta","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],"Contapagrecnumero","ContaPagRecNumero",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contapagrecdocseq",46,"vCONTAPAGRECDOCSEQ","Docmto / Seq","","ContaPagRecDocSeq","char",0,"px",40,40,"left",null,[],"Contapagrecdocseq","ContaPagRecDocSeq",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contapagrecnoparcela",47,"vCONTAPAGRECNOPARCELA","Parcela","","ContaPagRecNoParcela","int",0,"px",3,3,"right",null,[],"Contapagrecnoparcela","ContaPagRecNoParcela",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Contapagrecdtemissao",48,"vCONTAPAGRECDTEMISSAO","Emissão","","ContaPagRecDtEmissao","date",0,"px",10,10,"right",null,[],"Contapagrecdtemissao","ContaPagRecDtEmissao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contapagrecdtvencimento",49,"vCONTAPAGRECDTVENCIMENTO","Vencimento","","ContaPagRecDtVencimento","date",0,"px",10,10,"right",null,[],"Contapagrecdtvencimento","ContaPagRecDtVencimento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contapagrecqtdedias",50,"vCONTAPAGRECQTDEDIAS","Qtde Dias de Atraso","","ContaPagRecQtdeDias","int",0,"px",18,18,"right",null,[],"Contapagrecqtdedias","ContaPagRecQtdeDias",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contapagrecvlratualsemsinal",51,"vCONTAPAGRECVLRATUALSEMSINAL","Valor","","ContaPagRecVlrAtualSemSinal","decimal",0,"px",22,22,"right",null,[],"Contapagrecvlratualsemsinal","ContaPagRecVlrAtualSemSinal",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpobs","vBMPOBS",52,0,"px",17,"px","e18y62_client","","Obs","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[7]={fld:"TABLE8",grid:0};
   GXValidFnc[10]={fld:"TXTCLIFOR", format:0,grid:0};
   GXValidFnc[12]={fld:"TABLE6",grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV32PessoaId",gxold:"OV32PessoaId",gxvar:"AV32PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV32PessoaId,0)},c2v:function(){gx.O.AV32PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV34PessoaRazaoSocial",gxold:"OV34PessoaRazaoSocial",gxvar:"AV34PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV34PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV34PessoaRazaoSocial,0)},c2v:function(){gx.O.AV34PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTSIT", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADESCSITUACAO",gxz:"ZV38PessoaDescSituacao",gxold:"OV38PessoaDescSituacao",gxvar:"AV38PessoaDescSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38PessoaDescSituacao=Value},v2z:function(Value){gx.O.ZV38PessoaDescSituacao=Value},v2c:function(){gx.fn.setControlValue("vPESSOADESCSITUACAO",gx.O.AV38PessoaDescSituacao,0)},c2v:function(){gx.O.AV38PessoaDescSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPESSOADESCSITUACAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTCPF", format:0,grid:0};
   GXValidFnc[27]={fld:"TXTBARRA", format:0,grid:0};
   GXValidFnc[28]={fld:"TXTCNPJ", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLE7",grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACPF",gxz:"ZV35PessoaCPF",gxold:"OV35PessoaCPF",gxvar:"AV35PessoaCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PessoaCPF=Value},v2z:function(Value){gx.O.ZV35PessoaCPF=Value},v2c:function(){gx.fn.setControlValue("vPESSOACPF",gx.O.AV35PessoaCPF,0)},c2v:function(){gx.O.AV35PessoaCPF=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACPF")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TXTBARRA2", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACNPJ",gxz:"ZV36PessoaCNPJ",gxold:"OV36PessoaCNPJ",gxvar:"AV36PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36PessoaCNPJ=Value},v2z:function(Value){gx.O.ZV36PessoaCNPJ=Value},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV36PessoaCNPJ,0)},c2v:function(){gx.O.AV36PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMERO",gxz:"ZV42ContaPagRecNumero",gxold:"OV42ContaPagRecNumero",gxvar:"AV42ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV42ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(44),gx.O.AV42ContaPagRecNumero,0)},c2v:function(){gx.O.AV42ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCSEQ",gxz:"ZV48ContaPagRecDocSeq",gxold:"OV48ContaPagRecDocSeq",gxvar:"AV48ContaPagRecDocSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV48ContaPagRecDocSeq=Value},v2z:function(Value){gx.O.ZV48ContaPagRecDocSeq=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTAPAGRECDOCSEQ",row || gx.fn.currentGridRowImpl(44),gx.O.AV48ContaPagRecDocSeq,0)},c2v:function(){gx.O.AV48ContaPagRecDocSeq=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTAPAGRECDOCSEQ",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNOPARCELA",gxz:"ZV49ContaPagRecNoParcela",gxold:"OV49ContaPagRecNoParcela",gxvar:"AV49ContaPagRecNoParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV49ContaPagRecNoParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49ContaPagRecNoParcela=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTAPAGRECNOPARCELA",row || gx.fn.currentGridRowImpl(44),gx.O.AV49ContaPagRecNoParcela,0)},c2v:function(){gx.O.AV49ContaPagRecNoParcela=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTAPAGRECNOPARCELA",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAO",gxz:"ZV43ContaPagRecDtEmissao",gxold:"OV43ContaPagRecDtEmissao",gxvar:"AV43ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV43ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV43ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(44),gx.O.AV43ContaPagRecDtEmissao,0)},c2v:function(){gx.O.AV43ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vCONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTO",gxz:"ZV44ContaPagRecDtVencimento",gxold:"OV44ContaPagRecDtVencimento",gxvar:"AV44ContaPagRecDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV44ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV44ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(44),gx.O.AV44ContaPagRecDtVencimento,0)},c2v:function(){gx.O.AV44ContaPagRecDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vCONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECQTDEDIAS",gxz:"ZV46ContaPagRecQtdeDias",gxold:"OV46ContaPagRecQtdeDias",gxvar:"AV46ContaPagRecQtdeDias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV46ContaPagRecQtdeDias=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46ContaPagRecQtdeDias=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTAPAGRECQTDEDIAS",row || gx.fn.currentGridRowImpl(44),gx.O.AV46ContaPagRecQtdeDias,0)},c2v:function(){gx.O.AV46ContaPagRecQtdeDias=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTAPAGRECQTDEDIAS",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVLRATUALSEMSINAL",gxz:"ZV47ContaPagRecVlrAtualSemSinal",gxold:"OV47ContaPagRecVlrAtualSemSinal",gxvar:"AV47ContaPagRecVlrAtualSemSinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV47ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV47ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vCONTAPAGRECVLRATUALSEMSINAL",row || gx.fn.currentGridRowImpl(44),gx.O.AV47ContaPagRecVlrAtualSemSinal,2,',')},c2v:function(){gx.O.AV47ContaPagRecVlrAtualSemSinal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vCONTAPAGRECVLRATUALSEMSINAL",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOBS",gxz:"ZV41bmpObs",gxold:"OV41bmpObs",gxvar:"AV41bmpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV41bmpObs=Value},v2z:function(Value){gx.O.ZV41bmpObs=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOBS",row || gx.fn.currentGridRowImpl(44),gx.O.AV41bmpObs,gx.O.AV74Bmpobs_GXI)},c2v:function(){gx.O.AV74Bmpobs_GXI=this.val_GXI();gx.O.AV41bmpObs=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOBS",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOBS_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV74Bmpobs_GXI',nac:gx.falseFn};
   GXValidFnc[55]={fld:"TABLE4",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDETOTAL",gxz:"ZV39QtdeTotal",gxold:"OV39QtdeTotal",gxvar:"AV39QtdeTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39QtdeTotal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39QtdeTotal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDETOTAL",gx.O.AV39QtdeTotal,0)},c2v:function(){gx.O.AV39QtdeTotal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDETOTAL",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVLRCONTA",gxz:"ZV40ContaPagRecVlrConta",gxold:"OV40ContaPagRecVlrConta",gxvar:"AV40ContaPagRecVlrConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV40ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTAPAGRECVLRCONTA",gx.O.AV40ContaPagRecVlrConta,2,',')},c2v:function(){gx.O.AV40ContaPagRecVlrConta=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTAPAGRECVLRCONTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TABLE3",grid:0};
   GXValidFnc[74]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[76]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[78]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[80]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[82]={fld:"IMAGE5",grid:0};
   GXValidFnc[83]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV31EmpresaPessoasEmpresaId",gxold:"OV31EmpresaPessoasEmpresaId",gxvar:"AV31EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV31EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV31EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV31EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTLINHAS",gxz:"ZV50ContLinhas",gxold:"OV50ContLinhas",gxvar:"AV50ContLinhas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ContLinhas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50ContLinhas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTLINHAS",gx.O.AV50ContLinhas,0)},c2v:function(){gx.O.AV50ContLinhas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTLINHAS",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAATUAL",gxz:"ZV45DataAtual",gxold:"OV45DataAtual",gxvar:"AV45DataAtual",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45DataAtual=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV45DataAtual=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAATUAL",gx.O.AV45DataAtual,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV45DataAtual=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAATUAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 86 , function() {
   });
   GXValidFnc[87]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAG",gxz:"ZV65CtrlPag",gxold:"OV65CtrlPag",gxvar:"AV65CtrlPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65CtrlPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65CtrlPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAG",gx.O.AV65CtrlPag,0)},c2v:function(){gx.O.AV65CtrlPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAG",'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAG",gxz:"ZV66Pag",gxold:"OV66Pag",gxvar:"AV66Pag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66Pag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66Pag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAG",gx.O.AV66Pag,0)},c2v:function(){gx.O.AV66Pag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAG",'.')},nac:gx.falseFn};
   this.AV32PessoaId = 0 ;
   this.ZV32PessoaId = 0 ;
   this.OV32PessoaId = 0 ;
   this.AV34PessoaRazaoSocial = "" ;
   this.ZV34PessoaRazaoSocial = "" ;
   this.OV34PessoaRazaoSocial = "" ;
   this.AV38PessoaDescSituacao = "" ;
   this.ZV38PessoaDescSituacao = "" ;
   this.OV38PessoaDescSituacao = "" ;
   this.AV35PessoaCPF = "" ;
   this.ZV35PessoaCPF = "" ;
   this.OV35PessoaCPF = "" ;
   this.AV36PessoaCNPJ = "" ;
   this.ZV36PessoaCNPJ = "" ;
   this.OV36PessoaCNPJ = "" ;
   this.ZV42ContaPagRecNumero = 0 ;
   this.OV42ContaPagRecNumero = 0 ;
   this.ZV48ContaPagRecDocSeq = "" ;
   this.OV48ContaPagRecDocSeq = "" ;
   this.ZV49ContaPagRecNoParcela = 0 ;
   this.OV49ContaPagRecNoParcela = 0 ;
   this.ZV43ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.OV43ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.ZV44ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.OV44ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.ZV46ContaPagRecQtdeDias = 0 ;
   this.OV46ContaPagRecQtdeDias = 0 ;
   this.ZV47ContaPagRecVlrAtualSemSinal = 0 ;
   this.OV47ContaPagRecVlrAtualSemSinal = 0 ;
   this.ZV41bmpObs = "" ;
   this.OV41bmpObs = "" ;
   this.AV39QtdeTotal = 0 ;
   this.ZV39QtdeTotal = 0 ;
   this.OV39QtdeTotal = 0 ;
   this.AV40ContaPagRecVlrConta = 0 ;
   this.ZV40ContaPagRecVlrConta = 0 ;
   this.OV40ContaPagRecVlrConta = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV31EmpresaPessoasEmpresaId = "" ;
   this.ZV31EmpresaPessoasEmpresaId = "" ;
   this.OV31EmpresaPessoasEmpresaId = "" ;
   this.AV50ContLinhas = 0 ;
   this.ZV50ContLinhas = 0 ;
   this.OV50ContLinhas = 0 ;
   this.AV45DataAtual = gx.date.nullDate() ;
   this.ZV45DataAtual = gx.date.nullDate() ;
   this.OV45DataAtual = gx.date.nullDate() ;
   this.AV65CtrlPag = 0 ;
   this.ZV65CtrlPag = 0 ;
   this.OV65CtrlPag = 0 ;
   this.AV66Pag = 0 ;
   this.ZV66Pag = 0 ;
   this.OV66Pag = 0 ;
   this.AV32PessoaId = 0 ;
   this.AV34PessoaRazaoSocial = "" ;
   this.AV38PessoaDescSituacao = "" ;
   this.AV35PessoaCPF = "" ;
   this.AV36PessoaCNPJ = "" ;
   this.AV39QtdeTotal = 0 ;
   this.AV40ContaPagRecVlrConta = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31EmpresaPessoasEmpresaId = "" ;
   this.AV50ContLinhas = 0 ;
   this.AV45DataAtual = gx.date.nullDate() ;
   this.AV65CtrlPag = 0 ;
   this.AV66Pag = 0 ;
   this.AV33ContaPagRecPagRec = "" ;
   this.AV70TransacaoSaidaSNClienteAtraso = "" ;
   this.AV42ContaPagRecNumero = 0 ;
   this.AV48ContaPagRecDocSeq = "" ;
   this.AV49ContaPagRecNoParcela = 0 ;
   this.AV43ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.AV44ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV46ContaPagRecQtdeDias = 0 ;
   this.AV47ContaPagRecVlrAtualSemSinal = 0 ;
   this.AV41bmpObs = "" ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A2182ContaPagRecCliForRazao = "" ;
   this.A2002ContaPagRecCliForCPF = "" ;
   this.A2003ContaPagRecCliForCNPJ = "" ;
   this.A2004ContaPagRecCliForSituacao = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1716ContaPagRecNoParcela = 0 ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1714ContaPagRecVlrDesconto = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1712ContaPagRecVlrAcrescimo = 0 ;
   this.A2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.Events = {"e11y62_client": ["'GXM_FIRST'", true] ,"e12y62_client": ["'GXM_PREVIOUS'", true] ,"e13y62_client": ["'GXM_NEXT'", true] ,"e14y62_client": ["'GXM_LAST'", true] ,"e15y62_client": ["'FECHAR'", true] ,"e19y62_client": ["ENTER", true] ,"e20y62_client": ["CANCEL", true] ,"e18y62_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1636ContaPagRecCliForEmpId',fld:'CONTAPAGRECCLIFOREMPID'},{av:'AV31EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV32PessoaId',fld:'vPESSOAID',hsh:true},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV33ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV70TransacaoSaidaSNClienteAtraso',fld:'vTRANSACAOSAIDASNCLIENTEATRASO',hsh:true},{av:'AV45DataAtual',fld:'vDATAATUAL'},{av:'A2182ContaPagRecCliForRazao',fld:'CONTAPAGRECCLIFORRAZAO'},{av:'A2002ContaPagRecCliForCPF',fld:'CONTAPAGRECCLIFORCPF'},{av:'A2003ContaPagRecCliForCNPJ',fld:'CONTAPAGRECCLIFORCNPJ'},{av:'A2004ContaPagRecCliForSituacao',fld:'CONTAPAGRECCLIFORSITUACAO'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'A1716ContaPagRecNoParcela',fld:'CONTAPAGRECNOPARCELA'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'AV66Pag',fld:'vPAG'},{av:'AV65CtrlPag',fld:'vCTRLPAG'}],[]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1636ContaPagRecCliForEmpId',fld:'CONTAPAGRECCLIFOREMPID'},{av:'AV31EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV32PessoaId',fld:'vPESSOAID',hsh:true},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV33ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV70TransacaoSaidaSNClienteAtraso',fld:'vTRANSACAOSAIDASNCLIENTEATRASO',hsh:true},{av:'AV45DataAtual',fld:'vDATAATUAL'},{av:'A2182ContaPagRecCliForRazao',fld:'CONTAPAGRECCLIFORRAZAO'},{av:'A2002ContaPagRecCliForCPF',fld:'CONTAPAGRECCLIFORCPF'},{av:'A2003ContaPagRecCliForCNPJ',fld:'CONTAPAGRECCLIFORCNPJ'},{av:'A2004ContaPagRecCliForSituacao',fld:'CONTAPAGRECCLIFORSITUACAO'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'A1716ContaPagRecNoParcela',fld:'CONTAPAGRECNOPARCELA'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'AV66Pag',fld:'vPAG'},{av:'AV65CtrlPag',fld:'vCTRLPAG'}],[{av:'AV65CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1636ContaPagRecCliForEmpId',fld:'CONTAPAGRECCLIFOREMPID'},{av:'AV31EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV32PessoaId',fld:'vPESSOAID',hsh:true},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV33ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV70TransacaoSaidaSNClienteAtraso',fld:'vTRANSACAOSAIDASNCLIENTEATRASO',hsh:true},{av:'AV45DataAtual',fld:'vDATAATUAL'},{av:'A2182ContaPagRecCliForRazao',fld:'CONTAPAGRECCLIFORRAZAO'},{av:'A2002ContaPagRecCliForCPF',fld:'CONTAPAGRECCLIFORCPF'},{av:'A2003ContaPagRecCliForCNPJ',fld:'CONTAPAGRECCLIFORCNPJ'},{av:'A2004ContaPagRecCliForSituacao',fld:'CONTAPAGRECCLIFORSITUACAO'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'A1716ContaPagRecNoParcela',fld:'CONTAPAGRECNOPARCELA'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'AV66Pag',fld:'vPAG'},{av:'AV65CtrlPag',fld:'vCTRLPAG'}],[{av:'AV65CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1636ContaPagRecCliForEmpId',fld:'CONTAPAGRECCLIFOREMPID'},{av:'AV31EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV32PessoaId',fld:'vPESSOAID',hsh:true},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV33ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV70TransacaoSaidaSNClienteAtraso',fld:'vTRANSACAOSAIDASNCLIENTEATRASO',hsh:true},{av:'AV45DataAtual',fld:'vDATAATUAL'},{av:'A2182ContaPagRecCliForRazao',fld:'CONTAPAGRECCLIFORRAZAO'},{av:'A2002ContaPagRecCliForCPF',fld:'CONTAPAGRECCLIFORCPF'},{av:'A2003ContaPagRecCliForCNPJ',fld:'CONTAPAGRECCLIFORCNPJ'},{av:'A2004ContaPagRecCliForSituacao',fld:'CONTAPAGRECCLIFORSITUACAO'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'A1716ContaPagRecNoParcela',fld:'CONTAPAGRECNOPARCELA'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'AV66Pag',fld:'vPAG'},{av:'AV65CtrlPag',fld:'vCTRLPAG'}],[{av:'AV65CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1636ContaPagRecCliForEmpId',fld:'CONTAPAGRECCLIFOREMPID'},{av:'AV31EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV32PessoaId',fld:'vPESSOAID',hsh:true},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV33ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV70TransacaoSaidaSNClienteAtraso',fld:'vTRANSACAOSAIDASNCLIENTEATRASO',hsh:true},{av:'AV45DataAtual',fld:'vDATAATUAL'},{av:'A2182ContaPagRecCliForRazao',fld:'CONTAPAGRECCLIFORRAZAO'},{av:'A2002ContaPagRecCliForCPF',fld:'CONTAPAGRECCLIFORCPF'},{av:'A2003ContaPagRecCliForCNPJ',fld:'CONTAPAGRECCLIFORCNPJ'},{av:'A2004ContaPagRecCliForSituacao',fld:'CONTAPAGRECCLIFORSITUACAO'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'A1716ContaPagRecNoParcela',fld:'CONTAPAGRECNOPARCELA'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'AV66Pag',fld:'vPAG'},{av:'AV65CtrlPag',fld:'vCTRLPAG'}],[{av:'AV65CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1636ContaPagRecCliForEmpId',fld:'CONTAPAGRECCLIFOREMPID'},{av:'AV31EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV32PessoaId',fld:'vPESSOAID',hsh:true},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV33ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV70TransacaoSaidaSNClienteAtraso',fld:'vTRANSACAOSAIDASNCLIENTEATRASO',hsh:true},{av:'AV45DataAtual',fld:'vDATAATUAL'},{av:'A2182ContaPagRecCliForRazao',fld:'CONTAPAGRECCLIFORRAZAO'},{av:'A2002ContaPagRecCliForCPF',fld:'CONTAPAGRECCLIFORCPF'},{av:'A2003ContaPagRecCliForCNPJ',fld:'CONTAPAGRECCLIFORCNPJ'},{av:'A2004ContaPagRecCliForSituacao',fld:'CONTAPAGRECCLIFORSITUACAO'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'A1716ContaPagRecNoParcela',fld:'CONTAPAGRECNOPARCELA'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'AV66Pag',fld:'vPAG'},{av:'AV65CtrlPag',fld:'vCTRLPAG'}],[{av:'AV50ContLinhas',fld:'vCONTLINHAS'},{av:'AV39QtdeTotal',fld:'vQTDETOTAL'},{av:'AV40ContaPagRecVlrConta',fld:'vCONTAPAGRECVLRCONTA'},{av:'AV34PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'gx.fn.getCtrlProperty("TXTCPF","Visible")',ctrl:'TXTCPF',prop:'Visible'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'gx.fn.getCtrlProperty("TXTCNPJ","Visible")',ctrl:'TXTCNPJ',prop:'Visible'},{av:'AV36PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'gx.fn.getCtrlProperty("TXTBARRA","Visible")',ctrl:'TXTBARRA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTBARRA2","Visible")',ctrl:'TXTBARRA2',prop:'Visible'},{av:'AV38PessoaDescSituacao',fld:'vPESSOADESCSITUACAO'},{av:'AV42ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV48ContaPagRecDocSeq',fld:'vCONTAPAGRECDOCSEQ'},{av:'AV49ContaPagRecNoParcela',fld:'vCONTAPAGRECNOPARCELA'},{av:'AV43ContaPagRecDtEmissao',fld:'vCONTAPAGRECDTEMISSAO'},{av:'AV44ContaPagRecDtVencimento',fld:'vCONTAPAGRECDTVENCIMENTO'},{av:'AV46ContaPagRecQtdeDias',fld:'vCONTAPAGRECQTDEDIAS'},{av:'AV52DiaInicial',fld:'vDIAINICIAL'},{av:'AV53MesInicial',fld:'vMESINICIAL'},{av:'AV55DataAux',fld:'vDATAAUX'},{av:'AV62DiaFinalMesIni',fld:'vDIAFINALMESINI'},{av:'AV58AnoInicial',fld:'vANOINICIAL'},{av:'AV54DiaFinal',fld:'vDIAFINAL'},{av:'AV63MesFinal',fld:'vMESFINAL'},{av:'AV59AnoFinal',fld:'vANOFINAL'},{av:'AV60ContAno',fld:'vCONTANO'},{av:'AV57ContMes',fld:'vCONTMES'},{av:'AV61ContaDias',fld:'vCONTADIAS'},{av:'AV64DataAuxString',fld:'vDATAAUXSTRING'},{av:'AV47ContaPagRecVlrAtualSemSinal',fld:'vCONTAPAGRECVLRATUALSEMSINAL'},{av:'AV68Res',fld:'vRES'},{av:'AV69ResInt',fld:'vRESINT'},{av:'AV66Pag',fld:'vPAG'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV42ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV33ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true}],[]];
   this.setVCMap("A1712ContaPagRecVlrAcrescimo", "CONTAPAGRECVLRACRESCIMO", 0, "decimal");
   this.setVCMap("A1713ContaPagRecVlrConta", "CONTAPAGRECVLRCONTA", 0, "decimal");
   this.setVCMap("A1714ContaPagRecVlrDesconto", "CONTAPAGRECVLRDESCONTO", 0, "decimal");
   this.setVCMap("A1715ContaPagRecVlrPagamento", "CONTAPAGRECVLRPAGAMENTO", 0, "decimal");
   this.setVCMap("A2115ContaPagRecVlrAtualSemSinal", "CONTAPAGRECVLRATUALSEMSINAL", 0, "decimal");
   this.setVCMap("A1701ContaPagRecDtVencimento", "CONTAPAGRECDTVENCIMENTO", 0, "date");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("A1636ContaPagRecCliForEmpId", "CONTAPAGRECCLIFOREMPID", 0, "char");
   this.setVCMap("A1637ContaPagRecCliForId", "CONTAPAGRECCLIFORID", 0, "int");
   this.setVCMap("A1693ContaPagRecPagRec", "CONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("AV33ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("A1692ContaPagRecSituacao", "CONTAPAGRECSITUACAO", 0, "char");
   this.setVCMap("AV70TransacaoSaidaSNClienteAtraso", "vTRANSACAOSAIDASNCLIENTEATRASO", 0, "char");
   this.setVCMap("A2182ContaPagRecCliForRazao", "CONTAPAGRECCLIFORRAZAO", 0, "svchar");
   this.setVCMap("A2002ContaPagRecCliForCPF", "CONTAPAGRECCLIFORCPF", 0, "char");
   this.setVCMap("A2003ContaPagRecCliForCNPJ", "CONTAPAGRECCLIFORCNPJ", 0, "char");
   this.setVCMap("A2004ContaPagRecCliForSituacao", "CONTAPAGRECCLIFORSITUACAO", 0, "char");
   this.setVCMap("A1686ContaPagRecNumero", "CONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("A1695ContaPagRecDocumento", "CONTAPAGRECDOCUMENTO", 0, "svchar");
   this.setVCMap("A1696ContaPagRecSeqDocume", "CONTAPAGRECSEQDOCUME", 0, "char");
   this.setVCMap("A1716ContaPagRecNoParcela", "CONTAPAGRECNOPARCELA", 0, "int");
   this.setVCMap("A1699ContaPagRecDtEmissao", "CONTAPAGRECDTEMISSAO", 0, "date");
   this.setVCMap("A1701ContaPagRecDtVencimento", "CONTAPAGRECDTVENCIMENTO", 0, "date");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("A1636ContaPagRecCliForEmpId", "CONTAPAGRECCLIFOREMPID", 0, "char");
   this.setVCMap("A1637ContaPagRecCliForId", "CONTAPAGRECCLIFORID", 0, "int");
   this.setVCMap("A1693ContaPagRecPagRec", "CONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("AV33ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("A1692ContaPagRecSituacao", "CONTAPAGRECSITUACAO", 0, "char");
   this.setVCMap("AV70TransacaoSaidaSNClienteAtraso", "vTRANSACAOSAIDASNCLIENTEATRASO", 0, "char");
   this.setVCMap("A2182ContaPagRecCliForRazao", "CONTAPAGRECCLIFORRAZAO", 0, "svchar");
   this.setVCMap("A2002ContaPagRecCliForCPF", "CONTAPAGRECCLIFORCPF", 0, "char");
   this.setVCMap("A2003ContaPagRecCliForCNPJ", "CONTAPAGRECCLIFORCNPJ", 0, "char");
   this.setVCMap("A2004ContaPagRecCliForSituacao", "CONTAPAGRECCLIFORSITUACAO", 0, "char");
   this.setVCMap("A1686ContaPagRecNumero", "CONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("A1695ContaPagRecDocumento", "CONTAPAGRECDOCUMENTO", 0, "svchar");
   this.setVCMap("A1696ContaPagRecSeqDocume", "CONTAPAGRECSEQDOCUME", 0, "char");
   this.setVCMap("A1716ContaPagRecNoParcela", "CONTAPAGRECNOPARCELA", 0, "int");
   this.setVCMap("A1699ContaPagRecDtEmissao", "CONTAPAGRECDTEMISSAO", 0, "date");
   GridContainer.addRefreshingVar({rfrVar:"AV41bmpObs", rfrProp:"Value", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar({rfrVar:"AV41bmpObs", rfrProp:"Tooltiptext", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar({rfrVar:"A1701ContaPagRecDtVencimento"});
   GridContainer.addRefreshingVar({rfrVar:"A1685ContaPagRecEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   GridContainer.addRefreshingVar({rfrVar:"A1636ContaPagRecCliForEmpId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridContainer.addRefreshingVar({rfrVar:"A1637ContaPagRecCliForId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[15]);
   GridContainer.addRefreshingVar({rfrVar:"A1693ContaPagRecPagRec"});
   GridContainer.addRefreshingVar({rfrVar:"AV33ContaPagRecPagRec"});
   GridContainer.addRefreshingVar({rfrVar:"A1692ContaPagRecSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"AV70TransacaoSaidaSNClienteAtraso"});
   GridContainer.addRefreshingVar(this.GXValidFnc[86]);
   GridContainer.addRefreshingVar({rfrVar:"A2182ContaPagRecCliForRazao"});
   GridContainer.addRefreshingVar({rfrVar:"A2002ContaPagRecCliForCPF"});
   GridContainer.addRefreshingVar({rfrVar:"A2003ContaPagRecCliForCNPJ"});
   GridContainer.addRefreshingVar({rfrVar:"A2004ContaPagRecCliForSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"A1686ContaPagRecNumero"});
   GridContainer.addRefreshingVar({rfrVar:"A1695ContaPagRecDocumento"});
   GridContainer.addRefreshingVar({rfrVar:"A1696ContaPagRecSeqDocume"});
   GridContainer.addRefreshingVar({rfrVar:"A1716ContaPagRecNoParcela"});
   GridContainer.addRefreshingVar({rfrVar:"A1699ContaPagRecDtEmissao"});
   GridContainer.addRefreshingVar({rfrVar:"A2115ContaPagRecVlrAtualSemSinal"});
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[87]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarcontasatraso());
