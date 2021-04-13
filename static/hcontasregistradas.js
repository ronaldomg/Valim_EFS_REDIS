/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:59:2.50
*/
gx.evt.autoSkip = false;
gx.define('hcontasregistradas', false, function () {
   this.ServerClass =  "hcontasregistradas" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV30SnAcrDesc=gx.fn.getControlValue("vSNACRDESC") ;
      this.AV34SnRemessaCPagar=gx.fn.getControlValue("vSNREMESSACPAGAR") ;
      this.AV19SdtConReg=gx.fn.getControlValue("vSDTCONREG") ;
      this.AV29TpPagRec=gx.fn.getControlValue("vTPPAGREC") ;
   };
   this.Validv_Contapagrecnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      if ( this.AV33SnDadosRemessa == "S" )
      {
         gx.fn.setCtrlProperty("vBMPDADOSREM","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("vBMPDADOSREM","Visible", 0 );
      }
      if ( this.AV30SnAcrDesc == "S" )
      {
         gx.fn.setCtrlProperty("vBMPACRDES","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("vBMPACRDES","Visible", 0 );
      }
   };
   this.e11vo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15vo2_client=function()
   {
      this.executeServerEvent("'ACRESCIMODESCONTO'", true, arguments[0], false, false);
   };
   this.e16vo2_client=function()
   {
      this.executeServerEvent("'OBSCONTA'", true, arguments[0], false, false);
   };
   this.e17vo2_client=function()
   {
      this.executeServerEvent("'DADOSREMESSA'", true, arguments[0], false, false);
   };
   this.e18vo2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e19vo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,19,21,24,26,28,30,33,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,53,54];
   this.GXLastCtrlId =54;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",34,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hcontasregistradas",[],false,1,true,true,0,true,false,false,"CollSdtConReg.SdtConRegItem",0,"px","Novo registro",true,false,false,null,null,false,"AV19SdtConReg",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV10Z",35,"CTLNUMEROCONTA","Conta","","NumeroConta","int",0,"px",8,8,"right",null,[],"GXV10Z","GXV10Z",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV110",36,"CTLDOCUMENTOSEQ","Docmto/Seq","","DocumentoSeq","svchar",0,"px",24,24,"left",null,[],"GXV110","GXV110",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV111",37,"CTLNOPARCELA","No.Parcela","","NoParcela","int",0,"px",3,3,"right",null,[],"GXV111","GXV111",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV112",38,"CTLNUMANOPROCESSO","Num/Ano Processo","","NumAnoProcesso","svchar",0,"px",13,13,"left",null,[],"GXV112","GXV112",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV113",39,"CTLFATURA","Fatura","","Fatura","char",0,"px",15,15,"left",null,[],"GXV113","GXV113",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV114",40,"CTLBANCO","Banco","","Banco","int",0,"px",3,3,"right",null,[],"GXV114","GXV114",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV115",41,"CTLAGENCIA","Agência","","Agencia","int",0,"px",4,4,"right",null,[],"GXV115","GXV115",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV116",42,"CTLDTVENCIMENTO","Vencimento","","DtVencimento","date",0,"px",10,10,"right",null,[],"GXV116","GXV116",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV117",43,"CTLVALOR","Valor","","Valor","decimal",0,"px",22,22,"right",null,[],"GXV117","GXV117",true,2,false,false,"AttributeSemMargem",1,"");
   Grid1Container.addSingleLineEdit("GXV118",44,"CTLTRANSACAOID","Transação","","TransacaoId","char",0,"px",8,8,"left",null,[],"GXV118","GXV118",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV119",45,"CTLTIPOPAGMTO","Tipo de Pagamento","","TipoPagmto","char",0,"px",1,1,"left",null,[],"GXV119","GXV119",false,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpobs","vBMPOBS",46,0,"px",17,"px","e16vo2_client","","Obs","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpacrdes","vBMPACRDES",47,0,"px",17,"px","e15vo2_client","","Acr/Des","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpdadosrem","vBMPDADOSREM",48,0,"px",17,"px","e17vo2_client","","Rem","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TXTCLIFOR", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE6",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORID",gxz:"ZV21ContaPagRecCliForId",gxold:"OV21ContaPagRecCliForId",gxvar:"AV21ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORID",gx.O.AV21ContaPagRecCliForId,0)},c2v:function(){gx.O.AV21ContaPagRecCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORFANTASIA",gxz:"ZV22ContaPagRecCliForFantasia",gxold:"OV22ContaPagRecCliForFantasia",gxvar:"AV22ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.ZV22ContaPagRecCliForFantasia=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORFANTASIA",gx.O.AV22ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.AV22ContaPagRecCliForFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTCPFCNPJ", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCPFCNPJ",gxz:"ZV45CPFCNPJ",gxold:"OV45CPFCNPJ",gxvar:"AV45CPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45CPFCNPJ=Value},v2z:function(Value){gx.O.ZV45CPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("vCPFCNPJ",gx.O.AV45CPFCNPJ,0)},c2v:function(){gx.O.AV45CPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vCPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTEMISSAO", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAO",gxz:"ZV46ContaPagRecDtEmissao",gxold:"OV46ContaPagRecDtEmissao",gxvar:"AV46ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV46ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAO",gx.O.AV46ContaPagRecDtEmissao,0)},c2v:function(){gx.O.AV46ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTVALOR", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALOR",gxz:"ZV48Valor",gxold:"OV48Valor",gxvar:"AV48Valor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48Valor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV48Valor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALOR",gx.O.AV48Valor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV48Valor=this.val()},val:function(){return gx.fn.getDecimalValue("vVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[35]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMEROCONTA",gxz:"ZV53GXV10Z",gxold:"OV53GXV10Z",gxvar:"GXV10Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10Z=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53GXV10Z=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMEROCONTA",row || gx.fn.currentGridRowImpl(34),gx.O.GXV10Z,0)},c2v:function(){gx.O.GXV10Z=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMEROCONTA",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:24,dec:0,sign:false,ro:0,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLDOCUMENTOSEQ",gxz:"ZV54GXV110",gxold:"OV54GXV110",gxvar:"GXV110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV110=Value},v2z:function(Value){gx.O.ZV54GXV110=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDOCUMENTOSEQ",row || gx.fn.currentGridRowImpl(34),gx.O.GXV110,0)},c2v:function(){gx.O.GXV110=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDOCUMENTOSEQ",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOPARCELA",gxz:"ZV55GXV111",gxold:"OV55GXV111",gxvar:"GXV111",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV111=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55GXV111=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNOPARCELA",row || gx.fn.currentGridRowImpl(34),gx.O.GXV111,0)},c2v:function(){gx.O.GXV111=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNOPARCELA",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"svchar",len:13,dec:0,sign:false,ro:0,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMANOPROCESSO",gxz:"ZV56GXV112",gxold:"OV56GXV112",gxvar:"GXV112",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV112=Value},v2z:function(Value){gx.O.ZV56GXV112=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNUMANOPROCESSO",row || gx.fn.currentGridRowImpl(34),gx.O.GXV112,0)},c2v:function(){gx.O.GXV112=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNUMANOPROCESSO",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFATURA",gxz:"ZV57GXV113",gxold:"OV57GXV113",gxvar:"GXV113",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV113=Value},v2z:function(Value){gx.O.ZV57GXV113=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFATURA",row || gx.fn.currentGridRowImpl(34),gx.O.GXV113,0)},c2v:function(){gx.O.GXV113=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFATURA",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLBANCO",gxz:"ZV58GXV114",gxold:"OV58GXV114",gxvar:"GXV114",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV114=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58GXV114=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLBANCO",row || gx.fn.currentGridRowImpl(34),gx.O.GXV114,0)},c2v:function(){gx.O.GXV114=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLBANCO",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLAGENCIA",gxz:"ZV59GXV115",gxold:"OV59GXV115",gxvar:"GXV115",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV115=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59GXV115=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAGENCIA",row || gx.fn.currentGridRowImpl(34),gx.O.GXV115,0)},c2v:function(){gx.O.GXV115=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAGENCIA",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLDTVENCIMENTO",gxz:"ZV60GXV116",gxold:"OV60GXV116",gxvar:"GXV116",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV116=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV60GXV116=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDTVENCIMENTO",row || gx.fn.currentGridRowImpl(34),gx.O.GXV116,0)},c2v:function(){gx.O.GXV116=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDTVENCIMENTO",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV61GXV117",gxold:"OV61GXV117",gxvar:"GXV117",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV117=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV61GXV117=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(34),gx.O.GXV117,2,',')},c2v:function(){gx.O.GXV117=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(34),'.',',')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTRANSACAOID",gxz:"ZV62GXV118",gxold:"OV62GXV118",gxvar:"GXV118",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV118=Value},v2z:function(Value){gx.O.ZV62GXV118=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTRANSACAOID",row || gx.fn.currentGridRowImpl(34),gx.O.GXV118,0)},c2v:function(){gx.O.GXV118=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTRANSACAOID",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOPAGMTO",gxz:"ZV63GXV119",gxold:"OV63GXV119",gxvar:"GXV119",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV119=Value},v2z:function(Value){gx.O.ZV63GXV119=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOPAGMTO",row || gx.fn.currentGridRowImpl(34),gx.O.GXV119,0)},c2v:function(){gx.O.GXV119=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOPAGMTO",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOBS",gxz:"ZV24BmpObs",gxold:"OV24BmpObs",gxvar:"AV24BmpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24BmpObs=Value},v2z:function(Value){gx.O.ZV24BmpObs=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOBS",row || gx.fn.currentGridRowImpl(34),gx.O.AV24BmpObs,gx.O.AV64Bmpobs_GXI)},c2v:function(){gx.O.AV64Bmpobs_GXI=this.val_GXI();gx.O.AV24BmpObs=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOBS",row || gx.fn.currentGridRowImpl(34))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOBS_GXI",row || gx.fn.currentGridRowImpl(34))}, gxvar_GXI:'AV64Bmpobs_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPACRDES",gxz:"ZV25BmpAcrDes",gxold:"OV25BmpAcrDes",gxvar:"AV25BmpAcrDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25BmpAcrDes=Value},v2z:function(Value){gx.O.ZV25BmpAcrDes=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPACRDES",row || gx.fn.currentGridRowImpl(34),gx.O.AV25BmpAcrDes,gx.O.AV65Bmpacrdes_GXI)},c2v:function(){gx.O.AV65Bmpacrdes_GXI=this.val_GXI();gx.O.AV25BmpAcrDes=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPACRDES",row || gx.fn.currentGridRowImpl(34))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPACRDES_GXI",row || gx.fn.currentGridRowImpl(34))}, gxvar_GXI:'AV65Bmpacrdes_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDADOSREM",gxz:"ZV32BmpDadosRem",gxold:"OV32BmpDadosRem",gxvar:"AV32BmpDadosRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32BmpDadosRem=Value},v2z:function(Value){gx.O.ZV32BmpDadosRem=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDADOSREM",row || gx.fn.currentGridRowImpl(34),gx.O.AV32BmpDadosRem,gx.O.AV66Bmpdadosrem_GXI)},c2v:function(){gx.O.AV66Bmpdadosrem_GXI=this.val_GXI();gx.O.AV32BmpDadosRem=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDADOSREM",row || gx.fn.currentGridRowImpl(34))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDADOSREM_GXI",row || gx.fn.currentGridRowImpl(34))}, gxvar_GXI:'AV66Bmpdadosrem_GXI',nac:gx.falseFn};
   GXValidFnc[49]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNDADOSREMESSA",gxz:"ZV33SnDadosRemessa",gxold:"OV33SnDadosRemessa",gxvar:"AV33SnDadosRemessa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33SnDadosRemessa=Value},v2z:function(Value){gx.O.ZV33SnDadosRemessa=Value},v2c:function(){gx.fn.setControlValue("vSNDADOSREMESSA",gx.O.AV33SnDadosRemessa,0)},c2v:function(){gx.O.AV33SnDadosRemessa=this.val()},val:function(){return gx.fn.getControlValue("vSNDADOSREMESSA")},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecnumero,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMERO",gxz:"ZV49ContaPagRecNumero",gxold:"OV49ContaPagRecNumero",gxvar:"AV49ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMERO",gx.O.AV49ContaPagRecNumero,0)},c2v:function(){gx.O.AV49ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   this.AV21ContaPagRecCliForId = 0 ;
   this.ZV21ContaPagRecCliForId = 0 ;
   this.OV21ContaPagRecCliForId = 0 ;
   this.AV22ContaPagRecCliForFantasia = "" ;
   this.ZV22ContaPagRecCliForFantasia = "" ;
   this.OV22ContaPagRecCliForFantasia = "" ;
   this.AV45CPFCNPJ = "" ;
   this.ZV45CPFCNPJ = "" ;
   this.OV45CPFCNPJ = "" ;
   this.AV46ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.ZV46ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.OV46ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.AV48Valor = 0 ;
   this.ZV48Valor = 0 ;
   this.OV48Valor = 0 ;
   this.ZV53GXV10Z = 0 ;
   this.OV53GXV10Z = 0 ;
   this.ZV54GXV110 = "" ;
   this.OV54GXV110 = "" ;
   this.ZV55GXV111 = 0 ;
   this.OV55GXV111 = 0 ;
   this.ZV56GXV112 = "" ;
   this.OV56GXV112 = "" ;
   this.ZV57GXV113 = "" ;
   this.OV57GXV113 = "" ;
   this.ZV58GXV114 = 0 ;
   this.OV58GXV114 = 0 ;
   this.ZV59GXV115 = 0 ;
   this.OV59GXV115 = 0 ;
   this.ZV60GXV116 = gx.date.nullDate() ;
   this.OV60GXV116 = gx.date.nullDate() ;
   this.ZV61GXV117 = 0 ;
   this.OV61GXV117 = 0 ;
   this.ZV62GXV118 = "" ;
   this.OV62GXV118 = "" ;
   this.ZV63GXV119 = "" ;
   this.OV63GXV119 = "" ;
   this.ZV24BmpObs = "" ;
   this.OV24BmpObs = "" ;
   this.ZV25BmpAcrDes = "" ;
   this.OV25BmpAcrDes = "" ;
   this.ZV32BmpDadosRem = "" ;
   this.OV32BmpDadosRem = "" ;
   this.AV33SnDadosRemessa = "" ;
   this.ZV33SnDadosRemessa = "" ;
   this.OV33SnDadosRemessa = "" ;
   this.AV49ContaPagRecNumero = 0 ;
   this.ZV49ContaPagRecNumero = 0 ;
   this.OV49ContaPagRecNumero = 0 ;
   this.AV21ContaPagRecCliForId = 0 ;
   this.AV22ContaPagRecCliForFantasia = "" ;
   this.AV45CPFCNPJ = "" ;
   this.AV46ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.AV48Valor = 0 ;
   this.AV33SnDadosRemessa = "" ;
   this.AV49ContaPagRecNumero = 0 ;
   this.AV29TpPagRec = "" ;
   this.GXV10Z = 0 ;
   this.GXV110 = "" ;
   this.GXV111 = 0 ;
   this.GXV112 = "" ;
   this.GXV113 = "" ;
   this.GXV114 = 0 ;
   this.GXV115 = 0 ;
   this.GXV116 = gx.date.nullDate() ;
   this.GXV117 = 0 ;
   this.GXV118 = "" ;
   this.GXV119 = "" ;
   this.AV24BmpObs = "" ;
   this.AV25BmpAcrDes = "" ;
   this.AV32BmpDadosRem = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A1694ContaPagRecFatura = "" ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A2005ContaPagRecAnoProcesso = 0 ;
   this.A1966ContaPagRecNoProcesso = 0 ;
   this.A1705ContaPagRecBancoId = 0 ;
   this.A1706ContaPagRecAgenciaId = 0 ;
   this.A1716ContaPagRecNoParcela = 0 ;
   this.A1664ContaPagRecTransacaoId = "" ;
   this.A5424ContaPagRecEspecieTipoPagmto = "" ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1714ContaPagRecVlrDesconto = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1712ContaPagRecVlrAcrescimo = 0 ;
   this.A2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.A1639ContaPagRecEspecieEmpId = "" ;
   this.A1640ContaPagRecEspecieId = 0 ;
   this.A1189TransacaoAcresDescId = "" ;
   this.A1534TransacaoAcresDescTipoPagRec = "" ;
   this.A1159TransacaoAcresDescEmpresaId = "" ;
   this.A5440ContaPagRecTipoPagmto = "" ;
   this.A5950ContaPagRecLinhaDigitavel = "" ;
   this.A5426ContaPagRecCodigoReceita = "" ;
   this.A5429ContaPagRecCodigoPagto = 0 ;
   this.A5494ContaPagRecCamaraComp = 0 ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A2996ContaPagRecCliForTipo = "" ;
   this.A2002ContaPagRecCliForCPF = "" ;
   this.A2003ContaPagRecCliForCNPJ = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.AV30SnAcrDesc = "" ;
   this.AV34SnRemessaCPagar = "" ;
   this.AV19SdtConReg = [ ] ;
   this.Events = {"e11vo2_client": ["'FECHAR'", true] ,"e15vo2_client": ["'ACRESCIMODESCONTO'", true] ,"e16vo2_client": ["'OBSCONTA'", true] ,"e17vo2_client": ["'DADOSREMESSA'", true] ,"e18vo2_client": ["ENTER", true] ,"e19vo2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV24BmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV25BmpAcrDes',fld:'vBMPACRDES'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Tooltiptext")',ctrl:'vBMPACRDES',prop:'Tooltiptext'},{av:'AV32BmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'},{av:'AV34SnRemessaCPagar',fld:'vSNREMESSACPAGAR'},{av:'AV19SdtConReg',fld:'vSDTCONREG',grid:34},{av:'AV33SnDadosRemessa',fld:'vSNDADOSREMESSA'},{av:'AV30SnAcrDesc',fld:'vSNACRDESC'}],[{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV34SnRemessaCPagar',fld:'vSNREMESSACPAGAR'},{av:'AV19SdtConReg',fld:'vSDTCONREG',grid:34}],[{av:'AV24BmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV25BmpAcrDes',fld:'vBMPACRDES'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Tooltiptext")',ctrl:'vBMPACRDES',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Enabled")',ctrl:'vBMPDADOSREM',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV13SnErro',fld:'vSNERRO'},{av:'AV33SnDadosRemessa',fld:'vSNDADOSREMESSA'},{av:'AV19SdtConReg',fld:'vSDTCONREG',grid:34},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV23ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A5440ContaPagRecTipoPagmto',fld:'CONTAPAGRECTIPOPAGMTO'},{av:'A5950ContaPagRecLinhaDigitavel',fld:'CONTAPAGRECLINHADIGITAVEL'},{av:'A5426ContaPagRecCodigoReceita',fld:'CONTAPAGRECCODIGORECEITA'},{av:'A5429ContaPagRecCodigoPagto',fld:'CONTAPAGRECCODIGOPAGTO'},{av:'A5494ContaPagRecCamaraComp',fld:'CONTAPAGRECCAMARACOMP'}],[{av:'AV13SnErro',fld:'vSNERRO'},{av:'AV28x',fld:'vX'},{av:'AV43ContaPagRecTipoPagmto',fld:'vCONTAPAGRECTIPOPAGMTO'},{av:'AV44ContaPagRecLinhaDigitavel',fld:'vCONTAPAGRECLINHADIGITAVEL'},{av:'AV37ContaPagRecCodigoReceita',fld:'vCONTAPAGRECCODIGORECEITA'},{av:'AV40ContaPagRecCodigoPagto',fld:'vCONTAPAGRECCODIGOPAGTO'},{av:'AV41ContaPagRecCamaraComp',fld:'vCONTAPAGRECCAMARACOMP'}]];
   this.EvtParms["'ACRESCIMODESCONTO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV24BmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV25BmpAcrDes',fld:'vBMPACRDES'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Tooltiptext")',ctrl:'vBMPACRDES',prop:'Tooltiptext'},{av:'AV32BmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'},{av:'AV33SnDadosRemessa',fld:'vSNDADOSREMESSA'},{av:'AV30SnAcrDesc',fld:'vSNACRDESC'},{av:'AV34SnRemessaCPagar',fld:'vSNREMESSACPAGAR'},{av:'AV19SdtConReg',fld:'vSDTCONREG',grid:34},{av:'AV29TpPagRec',fld:'vTPPAGREC',hsh:true}],[]];
   this.EvtParms["'OBSCONTA'"] = [[{av:'AV23ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV19SdtConReg',fld:'vSDTCONREG',grid:34},{av:'AV29TpPagRec',fld:'vTPPAGREC',hsh:true}],[]];
   this.EvtParms["'DADOSREMESSA'"] = [[{av:'AV29TpPagRec',fld:'vTPPAGREC',hsh:true},{av:'AV19SdtConReg',fld:'vSDTCONREG',grid:34},{av:'AV71Pgmname',fld:'vPGMNAME'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV24BmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV25BmpAcrDes',fld:'vBMPACRDES'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Tooltiptext")',ctrl:'vBMPACRDES',prop:'Tooltiptext'},{av:'AV32BmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'},{av:'AV33SnDadosRemessa',fld:'vSNDADOSREMESSA'},{av:'AV30SnAcrDesc',fld:'vSNACRDESC'},{av:'AV34SnRemessaCPagar',fld:'vSNREMESSACPAGAR'}],[{av:'AV71Pgmname',fld:'vPGMNAME'},{av:'AV19SdtConReg',fld:'vSDTCONREG',grid:34},{av:'AV29TpPagRec',fld:'vTPPAGREC',hsh:true}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV24BmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV25BmpAcrDes',fld:'vBMPACRDES'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Tooltiptext")',ctrl:'vBMPACRDES',prop:'Tooltiptext'},{av:'AV32BmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'},{av:'AV34SnRemessaCPagar',fld:'vSNREMESSACPAGAR'},{av:'AV33SnDadosRemessa',fld:'vSNDADOSREMESSA'},{av:'AV30SnAcrDesc',fld:'vSNACRDESC'},{av:'AV19SdtConReg',fld:'vSDTCONREG',grid:34}],[{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV24BmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV25BmpAcrDes',fld:'vBMPACRDES'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Tooltiptext")',ctrl:'vBMPACRDES',prop:'Tooltiptext'},{av:'AV32BmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'},{av:'AV34SnRemessaCPagar',fld:'vSNREMESSACPAGAR'},{av:'AV33SnDadosRemessa',fld:'vSNDADOSREMESSA'},{av:'AV30SnAcrDesc',fld:'vSNACRDESC'},{av:'AV19SdtConReg',fld:'vSDTCONREG',grid:34}],[{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV24BmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV25BmpAcrDes',fld:'vBMPACRDES'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Tooltiptext")',ctrl:'vBMPACRDES',prop:'Tooltiptext'},{av:'AV32BmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'},{av:'AV34SnRemessaCPagar',fld:'vSNREMESSACPAGAR'},{av:'AV33SnDadosRemessa',fld:'vSNDADOSREMESSA'},{av:'AV30SnAcrDesc',fld:'vSNACRDESC'},{av:'AV19SdtConReg',fld:'vSDTCONREG',grid:34}],[{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV24BmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV25BmpAcrDes',fld:'vBMPACRDES'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Tooltiptext")',ctrl:'vBMPACRDES',prop:'Tooltiptext'},{av:'AV32BmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'},{av:'AV34SnRemessaCPagar',fld:'vSNREMESSACPAGAR'},{av:'AV33SnDadosRemessa',fld:'vSNDADOSREMESSA'},{av:'AV30SnAcrDesc',fld:'vSNACRDESC'},{av:'AV19SdtConReg',fld:'vSDTCONREG',grid:34}],[{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Visible")',ctrl:'vBMPDADOSREM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPACRDES","Visible")',ctrl:'vBMPACRDES',prop:'Visible'}]];
   this.setVCMap("A1712ContaPagRecVlrAcrescimo", "CONTAPAGRECVLRACRESCIMO", 0, "decimal");
   this.setVCMap("A1713ContaPagRecVlrConta", "CONTAPAGRECVLRCONTA", 0, "decimal");
   this.setVCMap("A1714ContaPagRecVlrDesconto", "CONTAPAGRECVLRDESCONTO", 0, "decimal");
   this.setVCMap("A1715ContaPagRecVlrPagamento", "CONTAPAGRECVLRPAGAMENTO", 0, "decimal");
   this.setVCMap("A2115ContaPagRecVlrAtualSemSinal", "CONTAPAGRECVLRATUALSEMSINAL", 0, "decimal");
   this.setVCMap("AV30SnAcrDesc", "vSNACRDESC", 0, "char");
   this.setVCMap("AV34SnRemessaCPagar", "vSNREMESSACPAGAR", 0, "char");
   this.setVCMap("AV19SdtConReg", "vSDTCONREG", 0, "CollSdtConReg.SdtConRegItem");
   this.setVCMap("AV29TpPagRec", "vTPPAGREC", 0, "char");
   this.setVCMap("AV30SnAcrDesc", "vSNACRDESC", 0, "char");
   this.setVCMap("AV34SnRemessaCPagar", "vSNREMESSACPAGAR", 0, "char");
   this.setVCMap("AV19SdtConReg", "vSDTCONREG", 0, "CollSdtConReg.SdtConRegItem");
   Grid1Container.addRefreshingVar({rfrVar:"AV24BmpObs", rfrProp:"Value", gxAttId:"Bmpobs"});
   Grid1Container.addRefreshingVar({rfrVar:"AV24BmpObs", rfrProp:"Tooltiptext", gxAttId:"Bmpobs"});
   Grid1Container.addRefreshingVar({rfrVar:"AV25BmpAcrDes", rfrProp:"Value", gxAttId:"Bmpacrdes"});
   Grid1Container.addRefreshingVar({rfrVar:"AV25BmpAcrDes", rfrProp:"Tooltiptext", gxAttId:"Bmpacrdes"});
   Grid1Container.addRefreshingVar({rfrVar:"AV32BmpDadosRem", rfrProp:"Value", gxAttId:"Bmpdadosrem"});
   Grid1Container.addRefreshingVar({rfrVar:"AV32BmpDadosRem", rfrProp:"Tooltiptext", gxAttId:"Bmpdadosrem"});
   Grid1Container.addRefreshingVar({rfrVar:"AV32BmpDadosRem", rfrProp:"Visible", gxAttId:"Bmpdadosrem"});
   Grid1Container.addRefreshingVar({rfrVar:"AV25BmpAcrDes", rfrProp:"Visible", gxAttId:"Bmpacrdes"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[53]);
   Grid1Container.addRefreshingVar({rfrVar:"AV30SnAcrDesc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV34SnRemessaCPagar"});
   Grid1Container.addRefreshingVar({rfrVar:"AV19SdtConReg"});
   this.addGridBCProperty("Sdtconreg", ["NumeroConta"], this.GXValidFnc[35], "AV19SdtConReg");
   this.addGridBCProperty("Sdtconreg", ["DocumentoSeq"], this.GXValidFnc[36], "AV19SdtConReg");
   this.addGridBCProperty("Sdtconreg", ["NoParcela"], this.GXValidFnc[37], "AV19SdtConReg");
   this.addGridBCProperty("Sdtconreg", ["NumAnoProcesso"], this.GXValidFnc[38], "AV19SdtConReg");
   this.addGridBCProperty("Sdtconreg", ["Fatura"], this.GXValidFnc[39], "AV19SdtConReg");
   this.addGridBCProperty("Sdtconreg", ["Banco"], this.GXValidFnc[40], "AV19SdtConReg");
   this.addGridBCProperty("Sdtconreg", ["Agencia"], this.GXValidFnc[41], "AV19SdtConReg");
   this.addGridBCProperty("Sdtconreg", ["DtVencimento"], this.GXValidFnc[42], "AV19SdtConReg");
   this.addGridBCProperty("Sdtconreg", ["Valor"], this.GXValidFnc[43], "AV19SdtConReg");
   this.addGridBCProperty("Sdtconreg", ["TransacaoId"], this.GXValidFnc[44], "AV19SdtConReg");
   this.addGridBCProperty("Sdtconreg", ["TipoPagmto"], this.GXValidFnc[45], "AV19SdtConReg");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcontasregistradas());
