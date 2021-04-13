/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:35:52.87
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcontasprovisorias', false, function () {
   this.ServerClass =  "hregistrarcontasprovisorias" ;
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
      this.AV55TipoOperacao=gx.fn.getControlValue("vTIPOOPERACAO") ;
      this.AV73Sdt=gx.fn.getControlValue("vSDT") ;
   };
   this.Validv_Transacaopagrecid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOPAGRECID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaotransfsigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOTRANSFSIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancocredid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOCREDID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancodebid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCODEBID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaocxbcosigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOCXBCOSIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancolancid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOLANCID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipoconta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCONTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaopagrecempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOPAGRECEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaocxbcoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOCXBCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Trntransfempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRNTRANSFEMPRESAID");
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
      gx.fn.setCtrlProperty("vTIPOCONTA","Visible", 0 );
      gx.fn.setCtrlProperty("vTIPOLANCAMENTOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vQTDECARAC","Visible", 0 );
      gx.fn.setCtrlProperty("vTRANSACAOPAGRECEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vCONVENIOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vCONVENIOID","Visible", 0 );
      gx.fn.setCtrlProperty("vCONVENIODESCRICAO","Visible", 0 );
      gx.fn.setCtrlProperty("vTPTELA","Visible", 0 );
      gx.fn.setCtrlProperty("vCAIXABANCOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vTRANSACAOCXBCOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vTRNTRANSFEMPRESAID","Visible", 0 );
   };
   this.s1811_client=function()
   {
      this.AV85SnExiste =  "N"  ;
      if ( this.AV55TipoOperacao == "T" )
      {
         this.AV121GXV2 = gx.num.trunc( 1 ,0) ;
         while ( this.AV121GXV2 <= this.AV73Sdt.length )
         {
            this.AV72SdtItem =  this.AV73Sdt[this.AV121GXV2 - 1]  ;
            if ( this.AV86ContaProvisorioNumPedido == this.AV72SdtItem.ContaProvisorioNumPedido )
            {
               this.AV72SdtItem.ContaProvisorioNumeroTransf = gx.num.trunc( this.AV87ContaProvisorioNumeroTransf ,0) ;
               this.AV85SnExiste =  "S"  ;
               break;
            }
            this.AV121GXV2 = gx.num.trunc( this.AV121GXV2 + 1 ,0) ;
         }
      }
   };
   this.e11hn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16hn2_client=function()
   {
      this.executeServerEvent("'EFETIVAR'", true, arguments[0], false, false);
   };
   this.e17hn2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e12hn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13hn2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e14hn2_client=function()
   {
      this.executeServerEvent("'DIALOG'", false, null, false, false);
   };
   this.e20hn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,16,19,21,24,26,29,31,34,36,39,41,43,47,49,52,55,58,60,61,64,66,67,68,71,73,74,77,79,80,83,85,86,87,90,92,93,96,98,99,108,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151];
   this.GXLastCtrlId =151;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",109,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrarcontasprovisorias",[],false,1,true,true,0,false,false,false,"CollSdtContaProvisoria.SdtContaProvisoriaItem",0,"px","Novo registro",false,false,false,null,null,false,"AV73Sdt",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV132",110,"CTLCONTAPROVISORIOCODCIENTEC","Cód. Cientec","","ContaProvisorioCodCientec","svchar",0,"px",20,20,"left",null,[],"GXV132","GXV132",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV133",111,"CTLCONTAPROVISORIOVALORNOTA","Valor","","ContaProvisorioValorNota","decimal",0,"px",22,22,"right",null,[],"GXV133","GXV133",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV134",112,"CTLCONTAPROVISORIODATAEMISSAO","Emissão","","ContaProvisorioDataEmissao","date",0,"px",10,10,"right",null,[],"GXV134","GXV134",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV135",113,"CTLCONTAPROVISORIODATAVENCIMEN","Vencimento","","ContaProvisorioDataVencimento","date",0,"px",10,10,"right",null,[],"GXV135","GXV135",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV136",114,"CTLCONTAPROVISORIONUMERODOCUME","Documento","","ContaProvisorioNumeroDocumento","svchar",0,"px",20,20,"left",null,[],"GXV136","GXV136",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Cnpjcpf",115,"vCNPJCPF","CNPJ/CPF","","CnpjCpf","char",0,"px",18,18,"left",null,[],"Cnpjcpf","CnpjCpf",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV138",116,"CTLCONTAPROVISORIOPESSOANOME","Nome","","ContaProvisorioPessoaNome","svchar",0,"px",100,80,"left",null,[],"GXV138","GXV138",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Bmpcon","vBMPCON",117,0,"px",17,"px","e17hn2_client","","Consultar","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpefe","vBMPEFE",118,0,"px",17,"px","e16hn2_client","","Efetivar","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("GXV13B",119,"CTLCONTAPROVISORIONUMERO","Número","","ContaProvisorioNumero","int",0,"px",8,8,"right",null,[],"GXV13B","GXV13B",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV13C",120,"CTLCONTAPROVISORIOCNPJ","CNPJ","","ContaProvisorioCNPJ","char",0,"px",18,18,"left",null,[],"GXV13C","GXV13C",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV13D",121,"CTLCONTAPROVISORIOCPF","CPF","","ContaProvisorioCPF","char",0,"px",14,14,"left",null,[],"GXV13D","GXV13D",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV13E",122,"CTLCONTAPROVISORIOOPERACAO","Operação","","ContaProvisorioOperacao","char",0,"px",1,1,"left",null,[],"GXV13E","GXV13E",false,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox("GXV13F",123,"CTLCONTAPROVISORIOPESSOATIPO","Tipo da Pessoa","ContaProvisorioPessoaTipo","char",null,0,false,false,0,"px","");
   Grid1Container.addCheckBox("GXV13G",124,"CTLCONTAPROVISORIOEFETIVADA","Conta Provisorio Efetivada","","ContaProvisorioEfetivada","char","S","N",null,false,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV56Diretorio",gxold:"OV56Diretorio",gxvar:"AV56Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56Diretorio=Value},v2z:function(Value){gx.O.ZV56Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV56Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV56Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCPF",gxz:"ZV17Cpf",gxold:"OV17Cpf",gxvar:"AV17Cpf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Cpf=Value},v2z:function(Value){gx.O.ZV17Cpf=Value},v2c:function(){gx.fn.setControlValue("vCPF",gx.O.AV17Cpf,0)},c2v:function(){gx.O.AV17Cpf=this.val()},val:function(){return gx.fn.getControlValue("vCPF")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCNPJ",gxz:"ZV18Cnpj",gxold:"OV18Cnpj",gxvar:"AV18Cnpj",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Cnpj=Value},v2z:function(Value){gx.O.ZV18Cnpj=Value},v2c:function(){gx.fn.setControlValue("vCNPJ",gx.O.AV18Cnpj,0)},c2v:function(){gx.O.AV18Cnpj=this.val()},val:function(){return gx.fn.getControlValue("vCNPJ")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPROVISORIOCODCIENTEC",gxz:"ZV57ContaProvisorioCodCientec",gxold:"OV57ContaProvisorioCodCientec",gxvar:"AV57ContaProvisorioCodCientec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ContaProvisorioCodCientec=Value},v2z:function(Value){gx.O.ZV57ContaProvisorioCodCientec=Value},v2c:function(){gx.fn.setControlValue("vCONTAPROVISORIOCODCIENTEC",gx.O.AV57ContaProvisorioCodCientec,0)},c2v:function(){gx.O.AV57ContaProvisorioCodCientec=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPROVISORIOCODCIENTEC")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[36]={fld:"TABLE2",grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV19DataIni",gxold:"OV19DataIni",gxvar:"AV19DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV19DataIni,0)},c2v:function(){gx.O.AV19DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIN",gxz:"ZV20DataFin",gxold:"OV20DataFin",gxvar:"AV20DataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIN",gx.O.AV20DataFin,0)},c2v:function(){gx.O.AV20DataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIN")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPENASNAOEFETIVADAS",gxz:"ZV25ApenasNaoEfetivadas",gxold:"OV25ApenasNaoEfetivadas",gxvar:"AV25ApenasNaoEfetivadas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25ApenasNaoEfetivadas=Value},v2z:function(Value){gx.O.ZV25ApenasNaoEfetivadas=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPENASNAOEFETIVADAS",gx.O.AV25ApenasNaoEfetivadas,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25ApenasNaoEfetivadas=this.val()},val:function(){return gx.fn.getControlValue("vAPENASNAOEFETIVADAS")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[49]={fld:"TABLE6",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[55]={fld:"TABCPR",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaopagrecid,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECID",gxz:"ZV27TransacaoPagRecId",gxold:"OV27TransacaoPagRecId",gxvar:"AV27TransacaoPagRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TransacaoPagRecId=Value},v2z:function(Value){gx.O.ZV27TransacaoPagRecId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECID",gx.O.AV27TransacaoPagRecId,0)},c2v:function(){gx.O.AV27TransacaoPagRecId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECID")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECDESCRICAO",gxz:"ZV38TransacaoPagRecDescricao",gxold:"OV38TransacaoPagRecDescricao",gxvar:"AV38TransacaoPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38TransacaoPagRecDescricao=Value},v2z:function(Value){gx.O.ZV38TransacaoPagRecDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECDESCRICAO",gx.O.AV38TransacaoPagRecDescricao,0)},c2v:function(){gx.O.AV38TransacaoPagRecDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOID",gxz:"ZV26TipoLancamentoId",gxold:"OV26TipoLancamentoId",gxvar:"AV26TipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26TipoLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOID",gx.O.AV26TipoLancamentoId,0)},c2v:function(){gx.O.AV26TipoLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTODESCRICAO",gxz:"ZV34TipoLancamentoDescricao",gxold:"OV34TipoLancamentoDescricao",gxvar:"AV34TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.ZV34TipoLancamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTODESCRICAO",gx.O.AV34TipoLancamentoDescricao,0)},c2v:function(){gx.O.AV34TipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TABTRANSF",grid:0};
   GXValidFnc[71]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaotransfsigla,isvalid:null,rgrid:[],fld:"vTRANSACAOTRANSFSIGLA",gxz:"ZV59TransacaoTransfSigla",gxold:"OV59TransacaoTransfSigla",gxvar:"AV59TransacaoTransfSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59TransacaoTransfSigla=Value},v2z:function(Value){gx.O.ZV59TransacaoTransfSigla=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOTRANSFSIGLA",gx.O.AV59TransacaoTransfSigla,0)},c2v:function(){gx.O.AV59TransacaoTransfSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOTRANSFSIGLA")},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOTRANSFDESCRICAO",gxz:"ZV60TransacaoTransfDescricao",gxold:"OV60TransacaoTransfDescricao",gxvar:"AV60TransacaoTransfDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60TransacaoTransfDescricao=Value},v2z:function(Value){gx.O.ZV60TransacaoTransfDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOTRANSFDESCRICAO",gx.O.AV60TransacaoTransfDescricao,0)},c2v:function(){gx.O.AV60TransacaoTransfDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOTRANSFDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancocredid,isvalid:null,rgrid:[],fld:"vCAIXABANCOCREDID",gxz:"ZV63CaixaBancoCredId",gxold:"OV63CaixaBancoCredId",gxvar:"AV63CaixaBancoCredId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63CaixaBancoCredId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63CaixaBancoCredId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOCREDID",gx.O.AV63CaixaBancoCredId,0)},c2v:function(){gx.O.AV63CaixaBancoCredId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOCREDID",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOCREDDESCRICAO",gxz:"ZV66CaixaBancoCredDescricao",gxold:"OV66CaixaBancoCredDescricao",gxvar:"AV66CaixaBancoCredDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66CaixaBancoCredDescricao=Value},v2z:function(Value){gx.O.ZV66CaixaBancoCredDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOCREDDESCRICAO",gx.O.AV66CaixaBancoCredDescricao,0)},c2v:function(){gx.O.AV66CaixaBancoCredDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOCREDDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancodebid,isvalid:null,rgrid:[],fld:"vCAIXABANCODEBID",gxz:"ZV64CaixaBancoDebId",gxold:"OV64CaixaBancoDebId",gxvar:"AV64CaixaBancoDebId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64CaixaBancoDebId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64CaixaBancoDebId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCODEBID",gx.O.AV64CaixaBancoDebId,0)},c2v:function(){gx.O.AV64CaixaBancoDebId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCODEBID",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODEBDESCRICAO",gxz:"ZV65CaixaBancoDebDescricao",gxold:"OV65CaixaBancoDebDescricao",gxvar:"AV65CaixaBancoDebDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65CaixaBancoDebDescricao=Value},v2z:function(Value){gx.O.ZV65CaixaBancoDebDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODEBDESCRICAO",gx.O.AV65CaixaBancoDebDescricao,0)},c2v:function(){gx.O.AV65CaixaBancoDebDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODEBDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TABLANC",grid:0};
   GXValidFnc[90]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaocxbcosigla,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCOSIGLA",gxz:"ZV67TransacaoCxBcoSigla",gxold:"OV67TransacaoCxBcoSigla",gxvar:"AV67TransacaoCxBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67TransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.ZV67TransacaoCxBcoSigla=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOSIGLA",gx.O.AV67TransacaoCxBcoSigla,0)},c2v:function(){gx.O.AV67TransacaoCxBcoSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOSIGLA")},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCODESCRICAO",gxz:"ZV68TransacaoCxBcoDescricao",gxold:"OV68TransacaoCxBcoDescricao",gxvar:"AV68TransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.ZV68TransacaoCxBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCODESCRICAO",gx.O.AV68TransacaoCxBcoDescricao,0)},c2v:function(){gx.O.AV68TransacaoCxBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancolancid,isvalid:null,rgrid:[],fld:"vCAIXABANCOLANCID",gxz:"ZV83CaixaBancoLancId",gxold:"OV83CaixaBancoLancId",gxvar:"AV83CaixaBancoLancId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83CaixaBancoLancId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83CaixaBancoLancId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOLANCID",gx.O.AV83CaixaBancoLancId,0)},c2v:function(){gx.O.AV83CaixaBancoLancId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOLANCID",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOLANCDESCRICAO",gxz:"ZV84CaixaBancoLancDescricao",gxold:"OV84CaixaBancoLancDescricao",gxvar:"AV84CaixaBancoLancDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84CaixaBancoLancDescricao=Value},v2z:function(Value){gx.O.ZV84CaixaBancoLancDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOLANCDESCRICAO",gx.O.AV84CaixaBancoLancDescricao,0)},c2v:function(){gx.O.AV84CaixaBancoLancDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOLANCDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[110]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIOCODCIENTEC",gxz:"ZV96GXV132",gxold:"OV96GXV132",gxvar:"GXV132",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV132=Value},v2z:function(Value){gx.O.ZV96GXV132=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPROVISORIOCODCIENTEC",row || gx.fn.currentGridRowImpl(109),gx.O.GXV132,0)},c2v:function(){gx.O.GXV132=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPROVISORIOCODCIENTEC",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[111]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIOVALORNOTA",gxz:"ZV97GXV133",gxold:"OV97GXV133",gxvar:"GXV133",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV133=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV97GXV133=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCONTAPROVISORIOVALORNOTA",row || gx.fn.currentGridRowImpl(109),gx.O.GXV133,2,',')},c2v:function(){gx.O.GXV133=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCONTAPROVISORIOVALORNOTA",row || gx.fn.currentGridRowImpl(109),'.',',')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIODATAEMISSAO",gxz:"ZV98GXV134",gxold:"OV98GXV134",gxvar:"GXV134",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV134=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV98GXV134=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPROVISORIODATAEMISSAO",row || gx.fn.currentGridRowImpl(109),gx.O.GXV134,0)},c2v:function(){gx.O.GXV134=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLCONTAPROVISORIODATAEMISSAO",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[113]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIODATAVENCIMEN",gxz:"ZV99GXV135",gxold:"OV99GXV135",gxvar:"GXV135",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV135=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV99GXV135=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPROVISORIODATAVENCIMEN",row || gx.fn.currentGridRowImpl(109),gx.O.GXV135,0)},c2v:function(){gx.O.GXV135=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLCONTAPROVISORIODATAVENCIMEN",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[114]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIONUMERODOCUME",gxz:"ZV100GXV136",gxold:"OV100GXV136",gxvar:"GXV136",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV136=Value},v2z:function(Value){gx.O.ZV100GXV136=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPROVISORIONUMERODOCUME",row || gx.fn.currentGridRowImpl(109),gx.O.GXV136,0)},c2v:function(){gx.O.GXV136=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPROVISORIONUMERODOCUME",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[115]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCNPJCPF",gxz:"ZV14CnpjCpf",gxold:"OV14CnpjCpf",gxvar:"AV14CnpjCpf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV14CnpjCpf=Value},v2z:function(Value){gx.O.ZV14CnpjCpf=Value},v2c:function(row){gx.fn.setGridControlValue("vCNPJCPF",row || gx.fn.currentGridRowImpl(109),gx.O.AV14CnpjCpf,0)},c2v:function(){gx.O.AV14CnpjCpf=this.val()},val:function(row){return gx.fn.getGridControlValue("vCNPJCPF",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[116]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIOPESSOANOME",gxz:"ZV101GXV138",gxold:"OV101GXV138",gxvar:"GXV138",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV138=Value},v2z:function(Value){gx.O.ZV101GXV138=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPROVISORIOPESSOANOME",row || gx.fn.currentGridRowImpl(109),gx.O.GXV138,0)},c2v:function(){gx.O.GXV138=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPROVISORIOPESSOANOME",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[117]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(109),gx.O.AV16bmpCon,gx.O.AV111Bmpcon_GXI)},c2v:function(){gx.O.AV111Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(109))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(109))}, gxvar_GXI:'AV111Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[118]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEFE",gxz:"ZV15bmpEfe",gxold:"OV15bmpEfe",gxvar:"AV15bmpEfe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15bmpEfe=Value},v2z:function(Value){gx.O.ZV15bmpEfe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEFE",row || gx.fn.currentGridRowImpl(109),gx.O.AV15bmpEfe,gx.O.AV110Bmpefe_GXI)},c2v:function(){gx.O.AV110Bmpefe_GXI=this.val_GXI();gx.O.AV15bmpEfe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEFE",row || gx.fn.currentGridRowImpl(109))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEFE_GXI",row || gx.fn.currentGridRowImpl(109))}, gxvar_GXI:'AV110Bmpefe_GXI',nac:gx.falseFn};
   GXValidFnc[119]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIONUMERO",gxz:"ZV102GXV13B",gxold:"OV102GXV13B",gxvar:"GXV13B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13B=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV102GXV13B=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPROVISORIONUMERO",row || gx.fn.currentGridRowImpl(109),gx.O.GXV13B,0)},c2v:function(){gx.O.GXV13B=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCONTAPROVISORIONUMERO",row || gx.fn.currentGridRowImpl(109),'.')},nac:gx.falseFn};
   GXValidFnc[120]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIOCNPJ",gxz:"ZV103GXV13C",gxold:"OV103GXV13C",gxvar:"GXV13C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13C=Value},v2z:function(Value){gx.O.ZV103GXV13C=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPROVISORIOCNPJ",row || gx.fn.currentGridRowImpl(109),gx.O.GXV13C,0)},c2v:function(){gx.O.GXV13C=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPROVISORIOCNPJ",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[121]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIOCPF",gxz:"ZV104GXV13D",gxold:"OV104GXV13D",gxvar:"GXV13D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13D=Value},v2z:function(Value){gx.O.ZV104GXV13D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPROVISORIOCPF",row || gx.fn.currentGridRowImpl(109),gx.O.GXV13D,0)},c2v:function(){gx.O.GXV13D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPROVISORIOCPF",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[122]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIOOPERACAO",gxz:"ZV105GXV13E",gxold:"OV105GXV13E",gxvar:"GXV13E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13E=Value},v2z:function(Value){gx.O.ZV105GXV13E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPROVISORIOOPERACAO",row || gx.fn.currentGridRowImpl(109),gx.O.GXV13E,0)},c2v:function(){gx.O.GXV13E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPROVISORIOOPERACAO",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[123]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIOPESSOATIPO",gxz:"ZV106GXV13F",gxold:"OV106GXV13F",gxvar:"GXV13F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.GXV13F=Value},v2z:function(Value){gx.O.ZV106GXV13F=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLCONTAPROVISORIOPESSOATIPO",row || gx.fn.currentGridRowImpl(109),gx.O.GXV13F)},c2v:function(){gx.O.GXV13F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPROVISORIOPESSOATIPO",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[124]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPROVISORIOEFETIVADA",gxz:"ZV107GXV13G",gxold:"OV107GXV13G",gxvar:"GXV13G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV13G=Value},v2z:function(Value){gx.O.ZV107GXV13G=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLCONTAPROVISORIOEFETIVADA",row || gx.fn.currentGridRowImpl(109),gx.O.GXV13G,"S")},c2v:function(){gx.O.GXV13G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPROVISORIOEFETIVADA",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[125]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[132]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipoconta,isvalid:null,rgrid:[],fld:"vTIPOCONTA",gxz:"ZV30TipoConta",gxold:"OV30TipoConta",gxvar:"AV30TipoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TipoConta=Value},v2z:function(Value){gx.O.ZV30TipoConta=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONTA",gx.O.AV30TipoConta,0)},c2v:function(){gx.O.AV30TipoConta=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTA")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"JS", format:2,grid:0};
   GXValidFnc[134]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV77TpTela",gxold:"OV77TpTela",gxvar:"AV77TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77TpTela=Value},v2z:function(Value){gx.O.ZV77TpTela=Value},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV77TpTela,0)},c2v:function(){gx.O.AV77TpTela=this.val()},val:function(){return gx.fn.getControlValue("vTPTELA")},nac:gx.falseFn};
   GXValidFnc[135]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV54AcessoSistemaSequencia",gxold:"OV54AcessoSistemaSequencia",gxvar:"AV54AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV54AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV54AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoempresaid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOEMPRESAID",gxz:"ZV33TipoLancamentoEmpresaid",gxold:"OV33TipoLancamentoEmpresaid",gxvar:"AV33TipoLancamentoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33TipoLancamentoEmpresaid=Value},v2z:function(Value){gx.O.ZV33TipoLancamentoEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOEMPRESAID",gx.O.AV33TipoLancamentoEmpresaid,0)},c2v:function(){gx.O.AV33TipoLancamentoEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[137]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARAC",gxz:"ZV35QtdeCarac",gxold:"OV35QtdeCarac",gxvar:"AV35QtdeCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35QtdeCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35QtdeCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARAC",gx.O.AV35QtdeCarac,0)},c2v:function(){gx.O.AV35QtdeCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARAC",'.')},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaopagrecempresaid,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECEMPRESAID",gxz:"ZV32TransacaoPagRecEmpresaId",gxold:"OV32TransacaoPagRecEmpresaId",gxvar:"AV32TransacaoPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TransacaoPagRecEmpresaId=Value},v2z:function(Value){gx.O.ZV32TransacaoPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECEMPRESAID",gx.O.AV32TransacaoPagRecEmpresaId,0)},c2v:function(){gx.O.AV32TransacaoPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[139]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV48ConvenioId",gxold:"OV48ConvenioId",gxvar:"AV48ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV48ConvenioId,0)},c2v:function(){gx.O.AV48ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV47ConvenioDescricao",gxold:"OV47ConvenioDescricao",gxvar:"AV47ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV47ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV47ConvenioDescricao,0)},c2v:function(){gx.O.AV47ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[141]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV49ConvenioEmpresaId",gxold:"OV49ConvenioEmpresaId",gxvar:"AV49ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV49ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV49ConvenioEmpresaId,0)},c2v:function(){gx.O.AV49ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoempresaid,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV61CaixaBancoEmpresaId",gxold:"OV61CaixaBancoEmpresaId",gxvar:"AV61CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV61CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV61CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV61CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[143]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaocxbcoempresaid,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCOEMPRESAID",gxz:"ZV58TransacaoCxBcoEmpresaId",gxold:"OV58TransacaoCxBcoEmpresaId",gxvar:"AV58TransacaoCxBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58TransacaoCxBcoEmpresaId=Value},v2z:function(Value){gx.O.ZV58TransacaoCxBcoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOEMPRESAID",gx.O.AV58TransacaoCxBcoEmpresaId,0)},c2v:function(){gx.O.AV58TransacaoCxBcoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[144]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trntransfempresaid,isvalid:null,rgrid:[],fld:"vTRNTRANSFEMPRESAID",gxz:"ZV82TrnTransfEmpresaID",gxold:"OV82TrnTransfEmpresaID",gxvar:"AV82TrnTransfEmpresaID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82TrnTransfEmpresaID=Value},v2z:function(Value){gx.O.ZV82TrnTransfEmpresaID=Value},v2c:function(){gx.fn.setControlValue("vTRNTRANSFEMPRESAID",gx.O.AV82TrnTransfEmpresaID,0)},c2v:function(){gx.O.AV82TrnTransfEmpresaID=this.val()},val:function(){return gx.fn.getControlValue("vTRNTRANSFEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[145]={fld:"PROMPT_TRANSACAOPAGRECID",grid:0};
   GXValidFnc[146]={fld:"PROMPT_TIPOLANCAMENTOID",grid:0};
   GXValidFnc[147]={fld:"PROMPT_TRANSACAOTRANSFSIGLA",grid:0};
   GXValidFnc[148]={fld:"PROMPT_CAIXABANCOCREDID",grid:0};
   GXValidFnc[149]={fld:"PROMPT_CAIXABANCODEBID",grid:0};
   GXValidFnc[150]={fld:"PROMPT_TRANSACAOCXBCOSIGLA",grid:0};
   GXValidFnc[151]={fld:"PROMPT_CAIXABANCOLANCID",grid:0};
   this.AV56Diretorio = "" ;
   this.ZV56Diretorio = "" ;
   this.OV56Diretorio = "" ;
   this.AV17Cpf = "" ;
   this.ZV17Cpf = "" ;
   this.OV17Cpf = "" ;
   this.AV18Cnpj = "" ;
   this.ZV18Cnpj = "" ;
   this.OV18Cnpj = "" ;
   this.AV57ContaProvisorioCodCientec = "" ;
   this.ZV57ContaProvisorioCodCientec = "" ;
   this.OV57ContaProvisorioCodCientec = "" ;
   this.AV19DataIni = gx.date.nullDate() ;
   this.ZV19DataIni = gx.date.nullDate() ;
   this.OV19DataIni = gx.date.nullDate() ;
   this.AV20DataFin = gx.date.nullDate() ;
   this.ZV20DataFin = gx.date.nullDate() ;
   this.OV20DataFin = gx.date.nullDate() ;
   this.AV25ApenasNaoEfetivadas = "" ;
   this.ZV25ApenasNaoEfetivadas = "" ;
   this.OV25ApenasNaoEfetivadas = "" ;
   this.AV27TransacaoPagRecId = "" ;
   this.ZV27TransacaoPagRecId = "" ;
   this.OV27TransacaoPagRecId = "" ;
   this.AV38TransacaoPagRecDescricao = "" ;
   this.ZV38TransacaoPagRecDescricao = "" ;
   this.OV38TransacaoPagRecDescricao = "" ;
   this.AV26TipoLancamentoId = 0 ;
   this.ZV26TipoLancamentoId = 0 ;
   this.OV26TipoLancamentoId = 0 ;
   this.AV34TipoLancamentoDescricao = "" ;
   this.ZV34TipoLancamentoDescricao = "" ;
   this.OV34TipoLancamentoDescricao = "" ;
   this.AV59TransacaoTransfSigla = "" ;
   this.ZV59TransacaoTransfSigla = "" ;
   this.OV59TransacaoTransfSigla = "" ;
   this.AV60TransacaoTransfDescricao = "" ;
   this.ZV60TransacaoTransfDescricao = "" ;
   this.OV60TransacaoTransfDescricao = "" ;
   this.AV63CaixaBancoCredId = 0 ;
   this.ZV63CaixaBancoCredId = 0 ;
   this.OV63CaixaBancoCredId = 0 ;
   this.AV66CaixaBancoCredDescricao = "" ;
   this.ZV66CaixaBancoCredDescricao = "" ;
   this.OV66CaixaBancoCredDescricao = "" ;
   this.AV64CaixaBancoDebId = 0 ;
   this.ZV64CaixaBancoDebId = 0 ;
   this.OV64CaixaBancoDebId = 0 ;
   this.AV65CaixaBancoDebDescricao = "" ;
   this.ZV65CaixaBancoDebDescricao = "" ;
   this.OV65CaixaBancoDebDescricao = "" ;
   this.AV67TransacaoCxBcoSigla = "" ;
   this.ZV67TransacaoCxBcoSigla = "" ;
   this.OV67TransacaoCxBcoSigla = "" ;
   this.AV68TransacaoCxBcoDescricao = "" ;
   this.ZV68TransacaoCxBcoDescricao = "" ;
   this.OV68TransacaoCxBcoDescricao = "" ;
   this.AV83CaixaBancoLancId = 0 ;
   this.ZV83CaixaBancoLancId = 0 ;
   this.OV83CaixaBancoLancId = 0 ;
   this.AV84CaixaBancoLancDescricao = "" ;
   this.ZV84CaixaBancoLancDescricao = "" ;
   this.OV84CaixaBancoLancDescricao = "" ;
   this.ZV96GXV132 = "" ;
   this.OV96GXV132 = "" ;
   this.ZV97GXV133 = 0 ;
   this.OV97GXV133 = 0 ;
   this.ZV98GXV134 = gx.date.nullDate() ;
   this.OV98GXV134 = gx.date.nullDate() ;
   this.ZV99GXV135 = gx.date.nullDate() ;
   this.OV99GXV135 = gx.date.nullDate() ;
   this.ZV100GXV136 = "" ;
   this.OV100GXV136 = "" ;
   this.ZV14CnpjCpf = "" ;
   this.OV14CnpjCpf = "" ;
   this.ZV101GXV138 = "" ;
   this.OV101GXV138 = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV15bmpEfe = "" ;
   this.OV15bmpEfe = "" ;
   this.ZV102GXV13B = 0 ;
   this.OV102GXV13B = 0 ;
   this.ZV103GXV13C = "" ;
   this.OV103GXV13C = "" ;
   this.ZV104GXV13D = "" ;
   this.OV104GXV13D = "" ;
   this.ZV105GXV13E = "" ;
   this.OV105GXV13E = "" ;
   this.ZV106GXV13F = "" ;
   this.OV106GXV13F = "" ;
   this.ZV107GXV13G = "" ;
   this.OV107GXV13G = "" ;
   this.AV30TipoConta = "" ;
   this.ZV30TipoConta = "" ;
   this.OV30TipoConta = "" ;
   this.AV77TpTela = "" ;
   this.ZV77TpTela = "" ;
   this.OV77TpTela = "" ;
   this.AV54AcessoSistemaSequencia = 0 ;
   this.ZV54AcessoSistemaSequencia = 0 ;
   this.OV54AcessoSistemaSequencia = 0 ;
   this.AV33TipoLancamentoEmpresaid = "" ;
   this.ZV33TipoLancamentoEmpresaid = "" ;
   this.OV33TipoLancamentoEmpresaid = "" ;
   this.AV35QtdeCarac = 0 ;
   this.ZV35QtdeCarac = 0 ;
   this.OV35QtdeCarac = 0 ;
   this.AV32TransacaoPagRecEmpresaId = "" ;
   this.ZV32TransacaoPagRecEmpresaId = "" ;
   this.OV32TransacaoPagRecEmpresaId = "" ;
   this.AV48ConvenioId = 0 ;
   this.ZV48ConvenioId = 0 ;
   this.OV48ConvenioId = 0 ;
   this.AV47ConvenioDescricao = "" ;
   this.ZV47ConvenioDescricao = "" ;
   this.OV47ConvenioDescricao = "" ;
   this.AV49ConvenioEmpresaId = "" ;
   this.ZV49ConvenioEmpresaId = "" ;
   this.OV49ConvenioEmpresaId = "" ;
   this.AV61CaixaBancoEmpresaId = "" ;
   this.ZV61CaixaBancoEmpresaId = "" ;
   this.OV61CaixaBancoEmpresaId = "" ;
   this.AV58TransacaoCxBcoEmpresaId = "" ;
   this.ZV58TransacaoCxBcoEmpresaId = "" ;
   this.OV58TransacaoCxBcoEmpresaId = "" ;
   this.AV82TrnTransfEmpresaID = "" ;
   this.ZV82TrnTransfEmpresaID = "" ;
   this.OV82TrnTransfEmpresaID = "" ;
   this.AV56Diretorio = "" ;
   this.AV17Cpf = "" ;
   this.AV18Cnpj = "" ;
   this.AV57ContaProvisorioCodCientec = "" ;
   this.AV19DataIni = gx.date.nullDate() ;
   this.AV20DataFin = gx.date.nullDate() ;
   this.AV25ApenasNaoEfetivadas = "" ;
   this.AV27TransacaoPagRecId = "" ;
   this.AV38TransacaoPagRecDescricao = "" ;
   this.AV26TipoLancamentoId = 0 ;
   this.AV34TipoLancamentoDescricao = "" ;
   this.AV59TransacaoTransfSigla = "" ;
   this.AV60TransacaoTransfDescricao = "" ;
   this.AV63CaixaBancoCredId = 0 ;
   this.AV66CaixaBancoCredDescricao = "" ;
   this.AV64CaixaBancoDebId = 0 ;
   this.AV65CaixaBancoDebDescricao = "" ;
   this.AV67TransacaoCxBcoSigla = "" ;
   this.AV68TransacaoCxBcoDescricao = "" ;
   this.AV83CaixaBancoLancId = 0 ;
   this.AV84CaixaBancoLancDescricao = "" ;
   this.AV30TipoConta = "" ;
   this.AV77TpTela = "" ;
   this.AV54AcessoSistemaSequencia = 0 ;
   this.AV33TipoLancamentoEmpresaid = "" ;
   this.AV35QtdeCarac = 0 ;
   this.AV32TransacaoPagRecEmpresaId = "" ;
   this.AV48ConvenioId = 0 ;
   this.AV47ConvenioDescricao = "" ;
   this.AV49ConvenioEmpresaId = "" ;
   this.AV61CaixaBancoEmpresaId = "" ;
   this.AV58TransacaoCxBcoEmpresaId = "" ;
   this.AV82TrnTransfEmpresaID = "" ;
   this.AV55TipoOperacao = "" ;
   this.GXV132 = "" ;
   this.GXV133 = 0 ;
   this.GXV134 = gx.date.nullDate() ;
   this.GXV135 = gx.date.nullDate() ;
   this.GXV136 = "" ;
   this.AV14CnpjCpf = "" ;
   this.GXV138 = "" ;
   this.AV16bmpCon = "" ;
   this.AV15bmpEfe = "" ;
   this.GXV13B = 0 ;
   this.GXV13C = "" ;
   this.GXV13D = "" ;
   this.GXV13E = "" ;
   this.GXV13F = "" ;
   this.GXV13G = "" ;
   this.A9009ContaProvisorioOperacao = "" ;
   this.A9010ContaProvisorioCodCientec = "" ;
   this.A2708ContaProvisorioDataEmissao = gx.date.nullDate() ;
   this.A2705ContaProvisorioCPF = "" ;
   this.A2704ContaProvisorioCNPJ = "" ;
   this.A2715ContaProvisorioUsuarioAlt = "" ;
   this.A9053ContaProvisorioUsuarioCriacao = "" ;
   this.A2702ContaProvisorioEmpresaId = "" ;
   this.A9040ContaProvisorioNumPedido = "" ;
   this.A2709ContaProvisorioDataVencimento = gx.date.nullDate() ;
   this.A2710ContaProvisorioValorNota = 0 ;
   this.A9011ContaProvisorioNumeroDocumento = "" ;
   this.A9012ContaProvisorioPessoaNome = "" ;
   this.A9013ContaProvisorioPessoaTipo = "" ;
   this.A9014ContaProvisorioConvenioA = 0 ;
   this.A9016ContaProvisorioHistorico = "" ;
   this.A9038ContaProvisorioCentroCustoA = "" ;
   this.A2703ContaProvisorioNumero = 0 ;
   this.A2718ContaProvisorioQtdeContas = 0 ;
   this.A2717ContaProvisorioEfetivada = "" ;
   this.A2111ConvenioCaixaBancoId = 0 ;
   this.A2110ConvenioCaixaBancoEmpId = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A1019CaixaBancoSnAtivo = "" ;
   this.A1114TransacaoCxBcoSigla = "" ;
   this.A1115TransacaoCxBcoEmpresaId = "" ;
   this.A1116TransacaoCxBcoDescricao = "" ;
   this.A1415TrnTransfSigla = "" ;
   this.A1414TrnTransfEmpresaID = "" ;
   this.A1370TrnTransfDescricao = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A963TipoLancamentoDescricao = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A1266TransacaoPagRecId = "" ;
   this.A1175TransacaoPagRecTipo = "" ;
   this.A1212TransacaoPagRecEmpresaId = "" ;
   this.A1204TransacaoPagRecDescricao = "" ;
   this.A1163TipoLancamentoPagRecEmpresaId = "" ;
   this.A1217TipoLancamentoPagRecId = 0 ;
   this.AV73Sdt = [ ] ;
   this.AV87ContaProvisorioNumeroTransf = 0 ;
   this.AV72SdtItem = {} ;
   this.AV86ContaProvisorioNumPedido = "" ;
   this.AV121GXV2 = 0 ;
   this.AV85SnExiste = "" ;
   this.Events = {"e11hn2_client": ["'FECHAR'", true] ,"e16hn2_client": ["'EFETIVAR'", true] ,"e17hn2_client": ["'CONSULTAR'", true] ,"e12hn2_client": ["ENTER", true] ,"e13hn2_client": ["'CANCELAR'", true] ,"e14hn2_client": ["'DIALOG'", true] ,"e20hn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV15bmpEfe',fld:'vBMPEFE'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'AV73Sdt',fld:'vSDT',grid:109},{av:'AV55TipoOperacao',fld:'vTIPOOPERACAO',hsh:true},{av:'AV77TpTela',fld:'vTPTELA'}],[{ctrl:'CTLCONTAPROVISORIODATAVENCIMEN',prop:'Visible'},{ctrl:'CTLCONTAPROVISORIODATAEMISSAO',prop:'Visible'},{ctrl:'CTLCONTAPROVISORIOPESSOANOME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLANC","Visible")',ctrl:'TABLANC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTRANSF","Visible")',ctrl:'TABTRANSF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCPR","Visible")',ctrl:'TABCPR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNDIALOG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCPF","Enabled")',ctrl:'vCPF',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCNPJ","Enabled")',ctrl:'vCNPJ',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTAPROVISORIOCODCIENTEC","Enabled")',ctrl:'vCONTAPROVISORIOCODCIENTEC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAINI","Enabled")',ctrl:'vDATAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFIN","Enabled")',ctrl:'vDATAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPENASNAOEFETIVADAS","Enabled")',ctrl:'vAPENASNAOEFETIVADAS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOPAGRECID","Enabled")',ctrl:'vTRANSACAOPAGRECID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTIPOLANCAMENTOID","Enabled")',ctrl:'vTIPOLANCAMENTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCXBCOSIGLA","Enabled")',ctrl:'vTRANSACAOCXBCOSIGLA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCAIXABANCOCREDID","Enabled")',ctrl:'vCAIXABANCOCREDID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCAIXABANCODEBID","Enabled")',ctrl:'vCAIXABANCODEBID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRNTRANSFEMPRESAID","Enabled")',ctrl:'vTRNTRANSFEMPRESAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOTRANSFSIGLA","Enabled")',ctrl:'vTRANSACAOTRANSFSIGLA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCAIXABANCOLANCID","Enabled")',ctrl:'vCAIXABANCOLANCID',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV54AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'EFETIVAR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV15bmpEfe',fld:'vBMPEFE'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'AV55TipoOperacao',fld:'vTIPOOPERACAO',hsh:true},{av:'AV77TpTela',fld:'vTPTELA'},{av:'AV73Sdt',fld:'vSDT',grid:109},{av:'AV27TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV26TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV18Cnpj',fld:'vCNPJ'},{av:'AV17Cpf',fld:'vCPF'},{av:'AV19DataIni',fld:'vDATAINI'},{av:'AV20DataFin',fld:'vDATAFIN'},{av:'AV25ApenasNaoEfetivadas',fld:'vAPENASNAOEFETIVADAS'},{av:'AV57ContaProvisorioCodCientec',fld:'vCONTAPROVISORIOCODCIENTEC'},{av:'AV78ContaProvisorioEmpresaId',fld:'vCONTAPROVISORIOEMPRESAID'},{av:'AV67TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV83CaixaBancoLancId',fld:'vCAIXABANCOLANCID'},{av:'AV59TransacaoTransfSigla',fld:'vTRANSACAOTRANSFSIGLA'},{av:'AV63CaixaBancoCredId',fld:'vCAIXABANCOCREDID'},{av:'AV64CaixaBancoDebId',fld:'vCAIXABANCODEBID'}],[{av:'AV88SnErroTela',fld:'vSNERROTELA'},{av:'AV42ApresentaTela',fld:'vAPRESENTATELA'},{av:'AV43message',fld:'vMESSAGE'},{av:'AV41Filtro',fld:'vFILTRO'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV78ContaProvisorioEmpresaId',fld:'vCONTAPROVISORIOEMPRESAID'},{av:'AV73Sdt',fld:'vSDT',grid:109}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV56Diretorio',fld:'vDIRETORIO'},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV55TipoOperacao',fld:'vTIPOOPERACAO',hsh:true},{av:'AV75NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV76QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV28SnErro',fld:'vSNERRO'},{av:'AV17Cpf',fld:'vCPF'},{av:'AV18Cnpj',fld:'vCNPJ'},{av:'AV45TipoLancamentoPagRecEmpresaId',fld:'vTIPOLANCAMENTOPAGRECEMPRESAID'},{av:'AV46TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'AV27TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'A1212TransacaoPagRecEmpresaId',fld:'TRANSACAOPAGRECEMPRESAID'},{av:'AV32TransacaoPagRecEmpresaId',fld:'vTRANSACAOPAGRECEMPRESAID'},{av:'A1175TransacaoPagRecTipo',fld:'TRANSACAOPAGRECTIPO'},{av:'AV30TipoConta',fld:'vTIPOCONTA'},{av:'A1266TransacaoPagRecId',fld:'TRANSACAOPAGRECID'},{av:'A1204TransacaoPagRecDescricao',fld:'TRANSACAOPAGRECDESCRICAO'},{av:'A1163TipoLancamentoPagRecEmpresaId',fld:'TIPOLANCAMENTOPAGRECEMPRESAID'},{av:'A1217TipoLancamentoPagRecId',fld:'TIPOLANCAMENTOPAGRECID'},{av:'AV26TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV33TipoLancamentoEmpresaid',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A963TipoLancamentoDescricao',fld:'TIPOLANCAMENTODESCRICAO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'AV59TransacaoTransfSigla',fld:'vTRANSACAOTRANSFSIGLA'},{av:'A1414TrnTransfEmpresaID',fld:'TRNTRANSFEMPRESAID'},{av:'AV82TrnTransfEmpresaID',fld:'vTRNTRANSFEMPRESAID'},{av:'A1415TrnTransfSigla',fld:'TRNTRANSFSIGLA'},{av:'A1370TrnTransfDescricao',fld:'TRNTRANSFDESCRICAO'},{av:'AV63CaixaBancoCredId',fld:'vCAIXABANCOCREDID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV61CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'AV71SemConvenio',fld:'vSEMCONVENIO'},{av:'AV64CaixaBancoDebId',fld:'vCAIXABANCODEBID'},{av:'AV67TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'A1115TransacaoCxBcoEmpresaId',fld:'TRANSACAOCXBCOEMPRESAID'},{av:'AV58TransacaoCxBcoEmpresaId',fld:'vTRANSACAOCXBCOEMPRESAID'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'},{av:'A1116TransacaoCxBcoDescricao',fld:'TRANSACAOCXBCODESCRICAO'},{av:'AV83CaixaBancoLancId',fld:'vCAIXABANCOLANCID'},{av:'AV19DataIni',fld:'vDATAINI'},{av:'AV20DataFin',fld:'vDATAFIN'},{av:'A2702ContaProvisorioEmpresaId',fld:'CONTAPROVISORIOEMPRESAID'},{av:'A2703ContaProvisorioNumero',fld:'CONTAPROVISORIONUMERO'},{av:'AV78ContaProvisorioEmpresaId',fld:'vCONTAPROVISORIOEMPRESAID'},{av:'A9053ContaProvisorioUsuarioCriacao',fld:'CONTAPROVISORIOUSUARIOCRIACAO'},{av:'A2715ContaProvisorioUsuarioAlt',fld:'CONTAPROVISORIOUSUARIOALT'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A2704ContaProvisorioCNPJ',fld:'CONTAPROVISORIOCNPJ'},{av:'A2705ContaProvisorioCPF',fld:'CONTAPROVISORIOCPF'},{av:'A2708ContaProvisorioDataEmissao',fld:'CONTAPROVISORIODATAEMISSAO'},{av:'A9010ContaProvisorioCodCientec',fld:'CONTAPROVISORIOCODCIENTEC'},{av:'AV57ContaProvisorioCodCientec',fld:'vCONTAPROVISORIOCODCIENTEC'},{av:'A9009ContaProvisorioOperacao',fld:'CONTAPROVISORIOOPERACAO'},{av:'A2717ContaProvisorioEfetivada',fld:'CONTAPROVISORIOEFETIVADA'},{av:'AV25ApenasNaoEfetivadas',fld:'vAPENASNAOEFETIVADAS'},{av:'A9040ContaProvisorioNumPedido',fld:'CONTAPROVISORIONUMPEDIDO'},{av:'AV85SnExiste',fld:'vSNEXISTE'},{av:'A2709ContaProvisorioDataVencimento',fld:'CONTAPROVISORIODATAVENCIMENTO'},{av:'A2710ContaProvisorioValorNota',fld:'CONTAPROVISORIOVALORNOTA'},{av:'A9011ContaProvisorioNumeroDocumento',fld:'CONTAPROVISORIONUMERODOCUMENTO'},{av:'A9012ContaProvisorioPessoaNome',fld:'CONTAPROVISORIOPESSOANOME'},{av:'A9013ContaProvisorioPessoaTipo',fld:'CONTAPROVISORIOPESSOATIPO'},{av:'A9014ContaProvisorioConvenioA',fld:'CONTAPROVISORIOCONVENIOA'},{av:'A9016ContaProvisorioHistorico',fld:'CONTAPROVISORIOHISTORICO'},{av:'A9038ContaProvisorioCentroCustoA',fld:'CONTAPROVISORIOCENTROCUSTOA'},{av:'AV73Sdt',fld:'vSDT',grid:109},{av:'A2110ConvenioCaixaBancoEmpId',fld:'CONVENIOCAIXABANCOEMPID'},{av:'A2111ConvenioCaixaBancoId',fld:'CONVENIOCAIXABANCOID'},{av:'AV70CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV86ContaProvisorioNumPedido',fld:'vCONTAPROVISORIONUMPEDIDO'},{av:'AV87ContaProvisorioNumeroTransf',fld:'vCONTAPROVISORIONUMEROTRANSF'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV15bmpEfe',fld:'vBMPEFE'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'AV77TpTela',fld:'vTPTELA'}],[{av:'AV73Sdt',fld:'vSDT',grid:109},{av:'AV28SnErro',fld:'vSNERRO'},{av:'AV75NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV74NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV76QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV56Diretorio',fld:'vDIRETORIO'},{av:'AV77TpTela',fld:'vTPTELA'},{av:'AV29NumErro',fld:'vNUMERRO'},{av:'AV45TipoLancamentoPagRecEmpresaId',fld:'vTIPOLANCAMENTOPAGRECEMPRESAID'},{av:'AV46TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'AV112GXLvl110',fld:'vGXLVL110'},{av:'AV38TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'},{av:'AV26TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV113GXLvl147',fld:'vGXLVL147'},{av:'AV34TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'},{av:'AV114GXLvl179',fld:'vGXLVL179'},{av:'AV60TransacaoTransfDescricao',fld:'vTRANSACAOTRANSFDESCRICAO'},{av:'AV115GXLvl197',fld:'vGXLVL197'},{av:'AV66CaixaBancoCredDescricao',fld:'vCAIXABANCOCREDDESCRICAO'},{av:'AV70CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV116GXLvl237',fld:'vGXLVL237'},{av:'AV65CaixaBancoDebDescricao',fld:'vCAIXABANCODEBDESCRICAO'},{av:'AV117GXLvl272',fld:'vGXLVL272'},{av:'AV68TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV118GXLvl290',fld:'vGXLVL290'},{av:'AV84CaixaBancoLancDescricao',fld:'vCAIXABANCOLANCDESCRICAO'},{av:'AV19DataIni',fld:'vDATAINI'},{av:'AV20DataFin',fld:'vDATAFIN'},{av:'AV86ContaProvisorioNumPedido',fld:'vCONTAPROVISORIONUMPEDIDO'},{av:'AV87ContaProvisorioNumeroTransf',fld:'vCONTAPROVISORIONUMEROTRANSF'},{av:'AV72SdtItem',fld:'vSDTITEM'},{av:'AV71SemConvenio',fld:'vSEMCONVENIO'},{av:'AV85SnExiste',fld:'vSNEXISTE'},{av:'AV121GXV2',fld:'vGXV2'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV73Sdt',fld:'vSDT',grid:109}],[{av:'AV14CnpjCpf',fld:'vCNPJCPF'},{av:'gx.fn.getCtrlProperty("vBMPEFE","Enabled")',ctrl:'vBMPEFE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCON","Enabled")',ctrl:'vBMPCON',prop:'Enabled'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV73Sdt',fld:'vSDT',grid:109},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV15bmpEfe',fld:'vBMPEFE'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'AV55TipoOperacao',fld:'vTIPOOPERACAO',hsh:true},{av:'AV77TpTela',fld:'vTPTELA'}],[{av:'AV77TpTela',fld:'vTPTELA'},{av:'AV73Sdt',fld:'vSDT',grid:109}]];
   this.EvtParms["'DIALOG'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV15bmpEfe',fld:'vBMPEFE'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'AV55TipoOperacao',fld:'vTIPOOPERACAO',hsh:true},{av:'AV77TpTela',fld:'vTPTELA'},{av:'AV73Sdt',fld:'vSDT',grid:109}],[{av:'AV91isCloud',fld:'vISCLOUD'},{av:'AV90DirUpload',fld:'vDIRUPLOAD'},{av:'AV56Diretorio',fld:'vDIRETORIO'}]];
   this.setPrompt("PROMPT_TRANSACAOPAGRECID", [60]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOID", [66]);
   this.setPrompt("PROMPT_TRANSACAOTRANSFSIGLA", [73]);
   this.setPrompt("PROMPT_CAIXABANCOCREDID", [79]);
   this.setPrompt("PROMPT_CAIXABANCODEBID", [85]);
   this.setPrompt("PROMPT_TRANSACAOCXBCOSIGLA", [92]);
   this.setPrompt("PROMPT_CAIXABANCOLANCID", [98]);
   this.EnterCtrl = ["BTNAVANCAR"];
   this.setVCMap("A2718ContaProvisorioQtdeContas", "CONTAPROVISORIOQTDECONTAS", 0, "int");
   this.setVCMap("A2717ContaProvisorioEfetivada", "CONTAPROVISORIOEFETIVADA", 0, "char");
   this.setVCMap("AV55TipoOperacao", "vTIPOOPERACAO", 0, "char");
   this.setVCMap("AV73Sdt", "vSDT", 0, "CollSdtContaProvisoria.SdtContaProvisoriaItem");
   this.setVCMap("AV55TipoOperacao", "vTIPOOPERACAO", 0, "char");
   this.setVCMap("AV73Sdt", "vSDT", 0, "CollSdtContaProvisoria.SdtContaProvisoriaItem");
   Grid1Container.addRefreshingVar({rfrVar:"AV15bmpEfe", rfrProp:"Value", gxAttId:"Bmpefe"});
   Grid1Container.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   Grid1Container.addRefreshingVar({rfrVar:"AV55TipoOperacao"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[134]);
   Grid1Container.addRefreshingVar({rfrVar:"AV73Sdt"});
   this.addGridBCProperty("Sdt", ["ContaProvisorioCodCientec"], this.GXValidFnc[110], "AV73Sdt");
   this.addGridBCProperty("Sdt", ["ContaProvisorioValorNota"], this.GXValidFnc[111], "AV73Sdt");
   this.addGridBCProperty("Sdt", ["ContaProvisorioDataEmissao"], this.GXValidFnc[112], "AV73Sdt");
   this.addGridBCProperty("Sdt", ["ContaProvisorioDataVencimento"], this.GXValidFnc[113], "AV73Sdt");
   this.addGridBCProperty("Sdt", ["ContaProvisorioNumeroDocumento"], this.GXValidFnc[114], "AV73Sdt");
   this.addGridBCProperty("Sdt", ["ContaProvisorioPessoaNome"], this.GXValidFnc[116], "AV73Sdt");
   this.addGridBCProperty("Sdt", ["ContaProvisorioNumero"], this.GXValidFnc[119], "AV73Sdt");
   this.addGridBCProperty("Sdt", ["ContaProvisorioCNPJ"], this.GXValidFnc[120], "AV73Sdt");
   this.addGridBCProperty("Sdt", ["ContaProvisorioCPF"], this.GXValidFnc[121], "AV73Sdt");
   this.addGridBCProperty("Sdt", ["ContaProvisorioOperacao"], this.GXValidFnc[122], "AV73Sdt");
   this.addGridBCProperty("Sdt", ["ContaProvisorioPessoaTipo"], this.GXValidFnc[123], "AV73Sdt");
   this.addGridBCProperty("Sdt", ["ContaProvisorioEfetivada"], this.GXValidFnc[124], "AV73Sdt");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcontasprovisorias());
