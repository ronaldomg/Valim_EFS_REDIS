/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:12:23.28
*/
gx.evt.autoSkip = false;
gx.define('hregistrartransferenciadisnuv', false, function () {
   this.ServerClass =  "hregistrartransferenciadisnuv" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A11151TransfDisEmpresaId=gx.fn.getControlValue("TRANSFDISEMPRESAID") ;
      this.AV5TransfDisEmpresaId=gx.fn.getControlValue("vTRANSFDISEMPRESAID") ;
      this.A11152TransfDisNumero=gx.fn.getIntegerValue("TRANSFDISNUMERO",'.') ;
      this.A11157TransfDisItemSequencia=gx.fn.getIntegerValue("TRANSFDISITEMSEQUENCIA",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.A2915EsquemaCodigo=gx.fn.getIntegerValue("ESQUEMACODIGO",'.') ;
      this.A2921AtributoEsquemaCodigo=gx.fn.getIntegerValue("ATRIBUTOESQUEMACODIGO",'.') ;
      this.A2941ValorAtributoCodigo=gx.fn.getIntegerValue("VALORATRIBUTOCODIGO",'.') ;
      this.A2916AtributoEsquemaDescricao=gx.fn.getControlValue("ATRIBUTOESQUEMADESCRICAO") ;
      this.AV63TransfDisNumeroParm=gx.fn.getIntegerValue("vTRANSFDISNUMEROPARM",'.') ;
      this.AV32OrigemDestino=gx.fn.getControlValue("vORIGEMDESTINO") ;
   };
   this.Validv_Lote1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTE1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lote2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTE2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lote3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTE3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lote4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTE4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lote5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTE5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transfdisnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSFDISNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Esquemacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vESQUEMACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Attesqcod5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vATTESQCOD5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Attesqcod4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vATTESQCOD4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Attesqcod3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vATTESQCOD3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Attesqcod2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vATTESQCOD2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Attesqcod1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vATTESQCOD1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s152_client=function()
   {
   };
   this.e112dh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e162dh2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e122dh2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e132dh2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e142dh2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e152dh2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e172dh2_client=function()
   {
      this.executeServerEvent("'FINALIZARTRANSFERENCIA'", false, null, false, false);
   };
   this.e212dh2_client=function()
   {
      this.executeServerEvent("'EXCLUIRITEMTRANSFERENCIA'", true, arguments[0], false, false);
   };
   this.e222dh2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e182dh2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e242dh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,17,18,20,22,24,26,28,32,34,36,38,40,45,48,51,53,54,56,58,62,65,67,69,71,74,76,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,102,105,107,109,111,119,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147];
   this.GXLastCtrlId =147;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",83,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrartransferenciadisnuv",[],false,1,false,true,0,false,false,false,"CollConsTransfDis.ConsTransfDisItem",0,"px","Novo registro",false,false,false,null,null,false,"AV12ConsTransfDis",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV12C",84,"CTLPRODUTOID","Código","","ProdutoId","int",0,"px",10,10,"right",null,[],"GXV12C","GXV12C",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12D",85,"CTLPRODUTOREFERENCIA","Referência","","ProdutoReferencia","svchar",0,"px",20,20,"left",null,[],"GXV12D","GXV12D",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12E",86,"CTLPRODUTOCODIGOBARRAS","Codigo de barras","","ProdutoCodigoBarras","int",0,"px",15,15,"right",null,[],"GXV12E","GXV12E",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12F",87,"CTLPRODUTONOME","Nome do produto","","ProdutoNome","svchar",0,"px",120,80,"left",null,[],"GXV12F","GXV12F",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12G",88,"CTLLOCALORIGEM","Local de origem","","LocalOrigem","char",0,"px",20,20,"left",null,[],"GXV12G","GXV12G",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12H",89,"CTLQTDEESTOQUE","Qtde estoque","","QtdeEstoque","decimal",0,"px",21,21,"right",null,[],"GXV12H","GXV12H",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12I",90,"CTLLOCALDESTINO","Local Destino","","LocalDestino","char",0,"px",20,20,"left",null,[],"GXV12I","GXV12I",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12J",91,"CTLQTDELOCALORIGEM","Qtde a transferir","","QtdeLocalOrigem","decimal",0,"px",21,21,"right",null,[],"GXV12J","GXV12J",true,4,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Bmpalt","vBMPALT",92,0,"px",17,"px","e222dh2_client","","Alt","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",93,0,"px",17,"px","e212dh2_client","","Exc","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("GXV12M",94,"CTLQTDELOCALDESTINO","Qtde","","QtdeLocalDestino","decimal",0,"px",21,21,"right",null,[],"GXV12M","GXV12M",false,4,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12N",95,"CTLQTDEDISPONIVEL","Qtde Restante","","QtdeDisponivel","decimal",0,"px",21,21,"right",null,[],"GXV12N","GXV12N",false,4,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12O",96,"CTLSEQUENCIA","Transf Dis Item Sequencia","","Sequencia","int",0,"px",4,4,"right",null,[],"GXV12O","GXV12O",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12P",97,"CTLENTRADAORIGEMEMPID","Empresa da Entrada","","EntradaOrigemEmpId","char",0,"px",10,10,"left",null,[],"GXV12P","GXV12P",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12Q",98,"CTLENTRADAORIGEMID","Código da Entrada","","EntradaOrigemId","int",0,"px",10,10,"right",null,[],"GXV12Q","GXV12Q",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12R",99,"CTLENTRADAORIGEMSEQ","Sequência do Item","","EntradaOrigemSeq","int",0,"px",6,6,"right",null,[],"GXV12R","GXV12R",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TABLE14",grid:0};
   GXValidFnc[14]={fld:"TABORIGEM",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={fld:"DESC1", format:0,grid:0};
   GXValidFnc[22]={fld:"DESC2", format:0,grid:0};
   GXValidFnc[24]={fld:"DESC3", format:0,grid:0};
   GXValidFnc[26]={fld:"DESC4", format:0,grid:0};
   GXValidFnc[28]={fld:"DESC5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lote1,isvalid:null,rgrid:[],fld:"vLOTE1",gxz:"ZV93Lote1",gxold:"OV93Lote1",gxvar:"AV93Lote1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93Lote1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93Lote1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTE1",gx.O.AV93Lote1,0)},c2v:function(){gx.O.AV93Lote1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTE1",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lote2,isvalid:null,rgrid:[],fld:"vLOTE2",gxz:"ZV94Lote2",gxold:"OV94Lote2",gxvar:"AV94Lote2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94Lote2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV94Lote2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTE2",gx.O.AV94Lote2,0)},c2v:function(){gx.O.AV94Lote2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTE2",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lote3,isvalid:null,rgrid:[],fld:"vLOTE3",gxz:"ZV95Lote3",gxold:"OV95Lote3",gxvar:"AV95Lote3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95Lote3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95Lote3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTE3",gx.O.AV95Lote3,0)},c2v:function(){gx.O.AV95Lote3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTE3",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lote4,isvalid:null,rgrid:[],fld:"vLOTE4",gxz:"ZV96Lote4",gxold:"OV96Lote4",gxvar:"AV96Lote4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96Lote4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV96Lote4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTE4",gx.O.AV96Lote4,0)},c2v:function(){gx.O.AV96Lote4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTE4",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lote5,isvalid:null,rgrid:[],fld:"vLOTE5",gxz:"ZV97Lote5",gxold:"OV97Lote5",gxvar:"AV97Lote5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97Lote5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV97Lote5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTE5",gx.O.AV97Lote5,0)},c2v:function(){gx.O.AV97Lote5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTE5",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE15",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[51]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV40ProdutoId",gxold:"OV40ProdutoId",gxvar:"AV40ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV40ProdutoId,0)},c2v:function(){gx.O.AV40ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"PROMPTBARRAS",grid:0};
   GXValidFnc[56]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADE",gxz:"ZV46Quantidade",gxold:"OV46Quantidade",gxvar:"AV46Quantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46Quantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV46Quantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQUANTIDADE",gx.O.AV46Quantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV46Quantidade=this.val()},val:function(){return gx.fn.getDecimalValue("vQUANTIDADE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[62]={fld:"TABLE2",grid:0};
   GXValidFnc[65]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transfdisnumero,isvalid:null,rgrid:[],fld:"vTRANSFDISNUMERO",gxz:"ZV61TransfDisNumero",gxold:"OV61TransfDisNumero",gxvar:"AV61TransfDisNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61TransfDisNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61TransfDisNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSFDISNUMERO",gx.O.AV61TransfDisNumero,0)},c2v:function(){gx.O.AV61TransfDisNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSFDISNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSFDISDATA",gxz:"ZV60TransfDisData",gxold:"OV60TransfDisData",gxvar:"AV60TransfDisData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60TransfDisData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV60TransfDisData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTRANSFDISDATA",gx.O.AV60TransfDisData,0)},c2v:function(){gx.O.AV60TransfDisData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTRANSFDISDATA")},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSFDISUSUARIO",gxz:"ZV64TransfDisUsuario",gxold:"OV64TransfDisUsuario",gxvar:"AV64TransfDisUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64TransfDisUsuario=Value},v2z:function(Value){gx.O.ZV64TransfDisUsuario=Value},v2c:function(){gx.fn.setControlValue("vTRANSFDISUSUARIO",gx.O.AV64TransfDisUsuario,0)},c2v:function(){gx.O.AV64TransfDisUsuario=this.val()},val:function(){return gx.fn.getControlValue("vTRANSFDISUSUARIO")},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOID",gxz:"ZV110GXV12C",gxold:"OV110GXV12C",gxvar:"GXV12C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12C=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV110GXV12C=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12C,0)},c2v:function(){gx.O.GXV12C=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(83),'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOREFERENCIA",gxz:"ZV111GXV12D",gxold:"OV111GXV12D",gxvar:"GXV12D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12D=Value},v2z:function(Value){gx.O.ZV111GXV12D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOREFERENCIA",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12D,0)},c2v:function(){gx.O.GXV12D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOREFERENCIA",row || gx.fn.currentGridRowImpl(83))},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCODIGOBARRAS",gxz:"ZV112GXV12E",gxold:"OV112GXV12E",gxvar:"GXV12E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12E=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV112GXV12E=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOCODIGOBARRAS",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12E,0)},c2v:function(){gx.O.GXV12E=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOCODIGOBARRAS",row || gx.fn.currentGridRowImpl(83),'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"svchar",len:120,dec:0,sign:false,ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTONOME",gxz:"ZV113GXV12F",gxold:"OV113GXV12F",gxvar:"GXV12F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12F=Value},v2z:function(Value){gx.O.ZV113GXV12F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTONOME",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12F,0)},c2v:function(){gx.O.GXV12F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTONOME",row || gx.fn.currentGridRowImpl(83))},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOCALORIGEM",gxz:"ZV114GXV12G",gxold:"OV114GXV12G",gxvar:"GXV12G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12G=Value},v2z:function(Value){gx.O.ZV114GXV12G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOCALORIGEM",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12G,0)},c2v:function(){gx.O.GXV12G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOCALORIGEM",row || gx.fn.currentGridRowImpl(83))},nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDEESTOQUE",gxz:"ZV115GXV12H",gxold:"OV115GXV12H",gxvar:"GXV12H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12H=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV115GXV12H=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQTDEESTOQUE",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12H,4,',')},c2v:function(){gx.O.GXV12H=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQTDEESTOQUE",row || gx.fn.currentGridRowImpl(83),'.',',')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOCALDESTINO",gxz:"ZV116GXV12I",gxold:"OV116GXV12I",gxvar:"GXV12I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12I=Value},v2z:function(Value){gx.O.ZV116GXV12I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOCALDESTINO",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12I,0)},c2v:function(){gx.O.GXV12I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOCALDESTINO",row || gx.fn.currentGridRowImpl(83))},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDELOCALORIGEM",gxz:"ZV117GXV12J",gxold:"OV117GXV12J",gxvar:"GXV12J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12J=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV117GXV12J=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQTDELOCALORIGEM",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12J,4,',')},c2v:function(){gx.O.GXV12J=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQTDELOCALORIGEM",row || gx.fn.currentGridRowImpl(83),'.',',')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV67bmpAlt",gxold:"OV67bmpAlt",gxvar:"AV67bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV67bmpAlt=Value},v2z:function(Value){gx.O.ZV67bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(83),gx.O.AV67bmpAlt,gx.O.AV127Bmpalt_GXI)},c2v:function(){gx.O.AV127Bmpalt_GXI=this.val_GXI();gx.O.AV67bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(83))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(83))}, gxvar_GXI:'AV127Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpexc",gxold:"OV8bmpexc",gxvar:"AV8bmpexc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpexc=Value},v2z:function(Value){gx.O.ZV8bmpexc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(83),gx.O.AV8bmpexc,gx.O.AV126Bmpexc_GXI)},c2v:function(){gx.O.AV126Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpexc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(83))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(83))}, gxvar_GXI:'AV126Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDELOCALDESTINO",gxz:"ZV118GXV12M",gxold:"OV118GXV12M",gxvar:"GXV12M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12M=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV118GXV12M=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQTDELOCALDESTINO",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12M,4,',')},c2v:function(){gx.O.GXV12M=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQTDELOCALDESTINO",row || gx.fn.currentGridRowImpl(83),'.',',')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDEDISPONIVEL",gxz:"ZV119GXV12N",gxold:"OV119GXV12N",gxvar:"GXV12N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12N=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV119GXV12N=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQTDEDISPONIVEL",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12N,4,',')},c2v:function(){gx.O.GXV12N=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQTDEDISPONIVEL",row || gx.fn.currentGridRowImpl(83),'.',',')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSEQUENCIA",gxz:"ZV120GXV12O",gxold:"OV120GXV12O",gxvar:"GXV12O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12O=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV120GXV12O=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSEQUENCIA",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12O,0)},c2v:function(){gx.O.GXV12O=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSEQUENCIA",row || gx.fn.currentGridRowImpl(83),'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLENTRADAORIGEMEMPID",gxz:"ZV121GXV12P",gxold:"OV121GXV12P",gxvar:"GXV12P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12P=Value},v2z:function(Value){gx.O.ZV121GXV12P=Value},v2c:function(row){gx.fn.setGridControlValue("CTLENTRADAORIGEMEMPID",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12P,0)},c2v:function(){gx.O.GXV12P=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLENTRADAORIGEMEMPID",row || gx.fn.currentGridRowImpl(83))},nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLENTRADAORIGEMID",gxz:"ZV122GXV12Q",gxold:"OV122GXV12Q",gxvar:"GXV12Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12Q=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV122GXV12Q=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLENTRADAORIGEMID",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12Q,0)},c2v:function(){gx.O.GXV12Q=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLENTRADAORIGEMID",row || gx.fn.currentGridRowImpl(83),'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:83,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLENTRADAORIGEMSEQ",gxz:"ZV123GXV12R",gxold:"OV123GXV12R",gxvar:"GXV12R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12R=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV123GXV12R=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLENTRADAORIGEMSEQ",row || gx.fn.currentGridRowImpl(83),gx.O.GXV12R,0)},c2v:function(){gx.O.GXV12R=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLENTRADAORIGEMSEQ",row || gx.fn.currentGridRowImpl(83),'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TABLE10",grid:0};
   GXValidFnc[105]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[107]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[109]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[111]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[119]={fld:"TABINVISIVEL",grid:0};
   GXValidFnc[122]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV40ProdutoId",gxold:"OV40ProdutoId",gxvar:"AV40ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV40ProdutoId,0)},c2v:function(){gx.O.AV40ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV33Pagina",gxold:"OV33Pagina",gxvar:"AV33Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV33Pagina,0)},c2v:function(){gx.O.AV33Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[124]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAGINA",gxz:"ZV44QtdePagina",gxold:"OV44QtdePagina",gxvar:"AV44QtdePagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44QtdePagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44QtdePagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAGINA",gx.O.AV44QtdePagina,0)},c2v:function(){gx.O.AV44QtdePagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transfdisnumero,isvalid:null,rgrid:[],fld:"vTRANSFDISNUMERO",gxz:"ZV61TransfDisNumero",gxold:"OV61TransfDisNumero",gxvar:"AV61TransfDisNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61TransfDisNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61TransfDisNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSFDISNUMERO",gx.O.AV61TransfDisNumero,0)},c2v:function(){gx.O.AV61TransfDisNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSFDISNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV51Sim",gxold:"OV51Sim",gxvar:"AV51Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51Sim=Value},v2z:function(Value){gx.O.ZV51Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV51Sim,0)},c2v:function(){gx.O.AV51Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV31Nao",gxold:"OV31Nao",gxvar:"AV31Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Nao=Value},v2z:function(Value){gx.O.ZV31Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV31Nao,0)},c2v:function(){gx.O.AV31Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV23IntAux",gxold:"OV23IntAux",gxvar:"AV23IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV23IntAux,0)},c2v:function(){gx.O.AV23IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV9CharAux",gxold:"OV9CharAux",gxvar:"AV9CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9CharAux=Value},v2z:function(Value){gx.O.ZV9CharAux=Value},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV9CharAux,0)},c2v:function(){gx.O.AV9CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV54SNVenda",gxold:"OV54SNVenda",gxvar:"AV54SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54SNVenda=Value},v2z:function(Value){gx.O.ZV54SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV54SNVenda,0)},c2v:function(){gx.O.AV54SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATA",gxz:"ZV14Data",gxold:"OV14Data",gxvar:"AV14Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATA",gx.O.AV14Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 131 , function() {
   });
   GXValidFnc[132]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV57TpTela",gxold:"OV57TpTela",gxvar:"AV57TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57TpTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57TpTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV57TpTela,0)},c2v:function(){gx.O.AV57TpTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPTELA",'.')},nac:gx.falseFn};
   GXValidFnc[133]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCOLUNA",gxz:"ZV98QtColuna",gxold:"OV98QtColuna",gxvar:"AV98QtColuna",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98QtColuna=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV98QtColuna=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCOLUNA",gx.O.AV98QtColuna,0)},c2v:function(){gx.O.AV98QtColuna=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCOLUNA",'.')},nac:gx.falseFn};
   GXValidFnc[134]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOCAL",gxz:"ZV92Local",gxold:"OV92Local",gxvar:"AV92Local",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92Local=Value},v2z:function(Value){gx.O.ZV92Local=Value},v2c:function(){gx.fn.setControlValue("vLOCAL",gx.O.AV92Local,0)},c2v:function(){gx.O.AV92Local=this.val()},val:function(){return gx.fn.getControlValue("vLOCAL")},nac:gx.falseFn};
   GXValidFnc[135]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Esquemacodigo,isvalid:null,rgrid:[],fld:"vESQUEMACODIGO",gxz:"ZV18EsquemaCodigo",gxold:"OV18EsquemaCodigo",gxvar:"AV18EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV18EsquemaCodigo,0)},c2v:function(){gx.O.AV18EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Attesqcod5,isvalid:null,rgrid:[],fld:"vATTESQCOD5",gxz:"ZV105AttEsqCod5",gxold:"OV105AttEsqCod5",gxvar:"AV105AttEsqCod5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105AttEsqCod5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV105AttEsqCod5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATTESQCOD5",gx.O.AV105AttEsqCod5,0)},c2v:function(){gx.O.AV105AttEsqCod5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATTESQCOD5",'.')},nac:gx.falseFn};
   GXValidFnc[137]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Attesqcod4,isvalid:null,rgrid:[],fld:"vATTESQCOD4",gxz:"ZV104AttEsqCod4",gxold:"OV104AttEsqCod4",gxvar:"AV104AttEsqCod4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104AttEsqCod4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV104AttEsqCod4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATTESQCOD4",gx.O.AV104AttEsqCod4,0)},c2v:function(){gx.O.AV104AttEsqCod4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATTESQCOD4",'.')},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Attesqcod3,isvalid:null,rgrid:[],fld:"vATTESQCOD3",gxz:"ZV103AttEsqCod3",gxold:"OV103AttEsqCod3",gxvar:"AV103AttEsqCod3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103AttEsqCod3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV103AttEsqCod3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATTESQCOD3",gx.O.AV103AttEsqCod3,0)},c2v:function(){gx.O.AV103AttEsqCod3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATTESQCOD3",'.')},nac:gx.falseFn};
   GXValidFnc[139]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Attesqcod2,isvalid:null,rgrid:[],fld:"vATTESQCOD2",gxz:"ZV102AttEsqCod2",gxold:"OV102AttEsqCod2",gxvar:"AV102AttEsqCod2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102AttEsqCod2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV102AttEsqCod2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATTESQCOD2",gx.O.AV102AttEsqCod2,0)},c2v:function(){gx.O.AV102AttEsqCod2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATTESQCOD2",'.')},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Attesqcod1,isvalid:null,rgrid:[],fld:"vATTESQCOD1",gxz:"ZV101AttEsqCod1",gxold:"OV101AttEsqCod1",gxvar:"AV101AttEsqCod1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101AttEsqCod1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV101AttEsqCod1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATTESQCOD1",gx.O.AV101AttEsqCod1,0)},c2v:function(){gx.O.AV101AttEsqCod1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATTESQCOD1",'.')},nac:gx.falseFn};
   GXValidFnc[141]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAOAUX",gxz:"ZV27LoteProdutoCombinacaoAux",gxold:"OV27LoteProdutoCombinacaoAux",gxvar:"AV27LoteProdutoCombinacaoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27LoteProdutoCombinacaoAux=Value},v2z:function(Value){gx.O.ZV27LoteProdutoCombinacaoAux=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAOAUX",gx.O.AV27LoteProdutoCombinacaoAux,0)},c2v:function(){gx.O.AV27LoteProdutoCombinacaoAux=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAOAUX")},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV37ProdutoCodigoId",gxold:"OV37ProdutoCodigoId",gxvar:"AV37ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV37ProdutoCodigoId,0)},c2v:function(){gx.O.AV37ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[143]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV56Tipo",gxold:"OV56Tipo",gxvar:"AV56Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56Tipo=Value},v2z:function(Value){gx.O.ZV56Tipo=Value},v2c:function(){gx.fn.setControlValue("vTIPO",gx.O.AV56Tipo,0)},c2v:function(){gx.O.AV56Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   GXValidFnc[144]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERIE",gxz:"ZV50Serie",gxold:"OV50Serie",gxvar:"AV50Serie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50Serie=Value},v2z:function(Value){gx.O.ZV50Serie=Value},v2c:function(){gx.fn.setControlValue("vSERIE",gx.O.AV50Serie,0)},c2v:function(){gx.O.AV50Serie=this.val()},val:function(){return gx.fn.getControlValue("vSERIE")},nac:gx.falseFn};
   GXValidFnc[145]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV55SubGrupoProdutoId",gxold:"OV55SubGrupoProdutoId",gxvar:"AV55SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV55SubGrupoProdutoId,0)},c2v:function(){gx.O.AV55SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[146]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV21GrupoProdutoId",gxold:"OV21GrupoProdutoId",gxvar:"AV21GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV21GrupoProdutoId,0)},c2v:function(){gx.O.AV21GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[147]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV42ProdutoReferencia",gxold:"OV42ProdutoReferencia",gxvar:"AV42ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV42ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV42ProdutoReferencia,0)},c2v:function(){gx.O.AV42ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   this.AV93Lote1 = 0 ;
   this.ZV93Lote1 = 0 ;
   this.OV93Lote1 = 0 ;
   this.AV94Lote2 = 0 ;
   this.ZV94Lote2 = 0 ;
   this.OV94Lote2 = 0 ;
   this.AV95Lote3 = 0 ;
   this.ZV95Lote3 = 0 ;
   this.OV95Lote3 = 0 ;
   this.AV96Lote4 = 0 ;
   this.ZV96Lote4 = 0 ;
   this.OV96Lote4 = 0 ;
   this.AV97Lote5 = 0 ;
   this.ZV97Lote5 = 0 ;
   this.OV97Lote5 = 0 ;
   this.AV40ProdutoId = 0 ;
   this.ZV40ProdutoId = 0 ;
   this.OV40ProdutoId = 0 ;
   this.AV46Quantidade = 0 ;
   this.ZV46Quantidade = 0 ;
   this.OV46Quantidade = 0 ;
   this.AV61TransfDisNumero = 0 ;
   this.ZV61TransfDisNumero = 0 ;
   this.OV61TransfDisNumero = 0 ;
   this.AV60TransfDisData = gx.date.nullDate() ;
   this.ZV60TransfDisData = gx.date.nullDate() ;
   this.OV60TransfDisData = gx.date.nullDate() ;
   this.AV64TransfDisUsuario = "" ;
   this.ZV64TransfDisUsuario = "" ;
   this.OV64TransfDisUsuario = "" ;
   this.ZV110GXV12C = 0 ;
   this.OV110GXV12C = 0 ;
   this.ZV111GXV12D = "" ;
   this.OV111GXV12D = "" ;
   this.ZV112GXV12E = 0 ;
   this.OV112GXV12E = 0 ;
   this.ZV113GXV12F = "" ;
   this.OV113GXV12F = "" ;
   this.ZV114GXV12G = "" ;
   this.OV114GXV12G = "" ;
   this.ZV115GXV12H = 0 ;
   this.OV115GXV12H = 0 ;
   this.ZV116GXV12I = "" ;
   this.OV116GXV12I = "" ;
   this.ZV117GXV12J = 0 ;
   this.OV117GXV12J = 0 ;
   this.ZV67bmpAlt = "" ;
   this.OV67bmpAlt = "" ;
   this.ZV8bmpexc = "" ;
   this.OV8bmpexc = "" ;
   this.ZV118GXV12M = 0 ;
   this.OV118GXV12M = 0 ;
   this.ZV119GXV12N = 0 ;
   this.OV119GXV12N = 0 ;
   this.ZV120GXV12O = 0 ;
   this.OV120GXV12O = 0 ;
   this.ZV121GXV12P = "" ;
   this.OV121GXV12P = "" ;
   this.ZV122GXV12Q = 0 ;
   this.OV122GXV12Q = 0 ;
   this.ZV123GXV12R = 0 ;
   this.OV123GXV12R = 0 ;
   this.AV33Pagina = 0 ;
   this.ZV33Pagina = 0 ;
   this.OV33Pagina = 0 ;
   this.AV44QtdePagina = 0 ;
   this.ZV44QtdePagina = 0 ;
   this.OV44QtdePagina = 0 ;
   this.AV51Sim = "" ;
   this.ZV51Sim = "" ;
   this.OV51Sim = "" ;
   this.AV31Nao = "" ;
   this.ZV31Nao = "" ;
   this.OV31Nao = "" ;
   this.AV23IntAux = 0 ;
   this.ZV23IntAux = 0 ;
   this.OV23IntAux = 0 ;
   this.AV9CharAux = "" ;
   this.ZV9CharAux = "" ;
   this.OV9CharAux = "" ;
   this.AV54SNVenda = "" ;
   this.ZV54SNVenda = "" ;
   this.OV54SNVenda = "" ;
   this.AV14Data = gx.date.nullDate() ;
   this.ZV14Data = gx.date.nullDate() ;
   this.OV14Data = gx.date.nullDate() ;
   this.AV57TpTela = 0 ;
   this.ZV57TpTela = 0 ;
   this.OV57TpTela = 0 ;
   this.AV98QtColuna = 0 ;
   this.ZV98QtColuna = 0 ;
   this.OV98QtColuna = 0 ;
   this.AV92Local = "" ;
   this.ZV92Local = "" ;
   this.OV92Local = "" ;
   this.AV18EsquemaCodigo = 0 ;
   this.ZV18EsquemaCodigo = 0 ;
   this.OV18EsquemaCodigo = 0 ;
   this.AV105AttEsqCod5 = 0 ;
   this.ZV105AttEsqCod5 = 0 ;
   this.OV105AttEsqCod5 = 0 ;
   this.AV104AttEsqCod4 = 0 ;
   this.ZV104AttEsqCod4 = 0 ;
   this.OV104AttEsqCod4 = 0 ;
   this.AV103AttEsqCod3 = 0 ;
   this.ZV103AttEsqCod3 = 0 ;
   this.OV103AttEsqCod3 = 0 ;
   this.AV102AttEsqCod2 = 0 ;
   this.ZV102AttEsqCod2 = 0 ;
   this.OV102AttEsqCod2 = 0 ;
   this.AV101AttEsqCod1 = 0 ;
   this.ZV101AttEsqCod1 = 0 ;
   this.OV101AttEsqCod1 = 0 ;
   this.AV27LoteProdutoCombinacaoAux = "" ;
   this.ZV27LoteProdutoCombinacaoAux = "" ;
   this.OV27LoteProdutoCombinacaoAux = "" ;
   this.AV37ProdutoCodigoId = 0 ;
   this.ZV37ProdutoCodigoId = 0 ;
   this.OV37ProdutoCodigoId = 0 ;
   this.AV56Tipo = "" ;
   this.ZV56Tipo = "" ;
   this.OV56Tipo = "" ;
   this.AV50Serie = "" ;
   this.ZV50Serie = "" ;
   this.OV50Serie = "" ;
   this.AV55SubGrupoProdutoId = 0 ;
   this.ZV55SubGrupoProdutoId = 0 ;
   this.OV55SubGrupoProdutoId = 0 ;
   this.AV21GrupoProdutoId = 0 ;
   this.ZV21GrupoProdutoId = 0 ;
   this.OV21GrupoProdutoId = 0 ;
   this.AV42ProdutoReferencia = "" ;
   this.ZV42ProdutoReferencia = "" ;
   this.OV42ProdutoReferencia = "" ;
   this.AV93Lote1 = 0 ;
   this.AV94Lote2 = 0 ;
   this.AV95Lote3 = 0 ;
   this.AV96Lote4 = 0 ;
   this.AV97Lote5 = 0 ;
   this.AV40ProdutoId = 0 ;
   this.AV46Quantidade = 0 ;
   this.AV61TransfDisNumero = 0 ;
   this.AV60TransfDisData = gx.date.nullDate() ;
   this.AV64TransfDisUsuario = "" ;
   this.AV33Pagina = 0 ;
   this.AV44QtdePagina = 0 ;
   this.AV51Sim = "" ;
   this.AV31Nao = "" ;
   this.AV23IntAux = 0 ;
   this.AV9CharAux = "" ;
   this.AV54SNVenda = "" ;
   this.AV14Data = gx.date.nullDate() ;
   this.AV57TpTela = 0 ;
   this.AV98QtColuna = 0 ;
   this.AV92Local = "" ;
   this.AV18EsquemaCodigo = 0 ;
   this.AV105AttEsqCod5 = 0 ;
   this.AV104AttEsqCod4 = 0 ;
   this.AV103AttEsqCod3 = 0 ;
   this.AV102AttEsqCod2 = 0 ;
   this.AV101AttEsqCod1 = 0 ;
   this.AV27LoteProdutoCombinacaoAux = "" ;
   this.AV37ProdutoCodigoId = 0 ;
   this.AV56Tipo = "" ;
   this.AV50Serie = "" ;
   this.AV55SubGrupoProdutoId = 0 ;
   this.AV21GrupoProdutoId = 0 ;
   this.AV42ProdutoReferencia = "" ;
   this.AV63TransfDisNumeroParm = 0 ;
   this.AV32OrigemDestino = "" ;
   this.GXV12C = 0 ;
   this.GXV12D = "" ;
   this.GXV12E = 0 ;
   this.GXV12F = "" ;
   this.GXV12G = "" ;
   this.GXV12H = 0 ;
   this.GXV12I = "" ;
   this.GXV12J = 0 ;
   this.AV67bmpAlt = "" ;
   this.AV8bmpexc = "" ;
   this.GXV12M = 0 ;
   this.GXV12N = 0 ;
   this.GXV12O = 0 ;
   this.GXV12P = "" ;
   this.GXV12Q = 0 ;
   this.GXV12R = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A11152TransfDisNumero = 0 ;
   this.A11151TransfDisEmpresaId = "" ;
   this.A11157TransfDisItemSequencia = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2962ProdutoUsuarioAlt = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3645LoteProdutoQtdeAtual = 0 ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A11167TransfDisItemQuantidade = 0 ;
   this.A11174TransfDisItemLoteOrigem = "" ;
   this.A11162TransfDisItemProdId = 0 ;
   this.A11172TransfDisItemLoteDestino = "" ;
   this.A11161TransfDisItemProdEmpresaId = "" ;
   this.A11163TransfDisData = gx.date.nullDate() ;
   this.A11164TransfDisUsuario = "" ;
   this.A3830ProdutoEmbalagem = 0 ;
   this.AV5TransfDisEmpresaId = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e112dh2_client": ["'FECHAR'", true] ,"e162dh2_client": ["ENTER", true] ,"e122dh2_client": ["'GXM_FIRST'", true] ,"e132dh2_client": ["'GXM_PREVIOUS'", true] ,"e142dh2_client": ["'GXM_NEXT'", true] ,"e152dh2_client": ["'GXM_LAST'", true] ,"e172dh2_client": ["'FINALIZARTRANSFERENCIA'", true] ,"e212dh2_client": ["'EXCLUIRITEMTRANSFERENCIA'", true] ,"e222dh2_client": ["'ALTERAR'", true] ,"e182dh2_client": ["'CANCELAR'", true] ,"e242dh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV8bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV67bmpAlt',fld:'vBMPALT'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'AV5TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'A11157TransfDisItemSequencia',fld:'TRANSFDISITEMSEQUENCIA'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV57TpTela',fld:'vTPTELA'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV44QtdePagina',fld:'vQTDEPAGINA'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV45QtdeReg',fld:'vQTDEREG'},{av:'AV47Res',fld:'vRES'},{av:'AV48ResInt',fld:'vRESINT'},{av:'AV44QtdePagina',fld:'vQTDEPAGINA'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83},{av:'gx.fn.getCtrlProperty("vLOTE1","Enabled")',ctrl:'vLOTE1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTE2","Enabled")',ctrl:'vLOTE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTE3","Enabled")',ctrl:'vLOTE3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTE4","Enabled")',ctrl:'vLOTE4',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTE5","Enabled")',ctrl:'vLOTE5',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOID","Enabled")',ctrl:'vPRODUTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vQUANTIDADE","Enabled")',ctrl:'vQUANTIDADE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("PROMPTBARRAS","Enabled")',ctrl:'PROMPTBARRAS',prop:'Enabled'},{ctrl:'BTNAV1',prop:'Visible'},{ctrl:'BTNAV2',prop:'Visible'},{ctrl:'BTNCAN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABORIGEM","Visible")',ctrl:'TABORIGEM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE3","Visible")',ctrl:'TABLE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE2","Visible")',ctrl:'TABLE2',prop:'Visible'},{ctrl:'BTNFINALIZAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTE1","Visible")',ctrl:'vLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC1","Visible")',ctrl:'DESC1',prop:'Visible'},{av:'AV101AttEsqCod1',fld:'vATTESQCOD1'},{av:'gx.fn.getCtrlProperty("vLOTE2","Visible")',ctrl:'vLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC2","Visible")',ctrl:'DESC2',prop:'Visible'},{av:'AV102AttEsqCod2',fld:'vATTESQCOD2'},{av:'gx.fn.getCtrlProperty("vLOTE3","Visible")',ctrl:'vLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC3","Visible")',ctrl:'DESC3',prop:'Visible'},{av:'AV103AttEsqCod3',fld:'vATTESQCOD3'},{av:'gx.fn.getCtrlProperty("vLOTE4","Visible")',ctrl:'vLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC4","Visible")',ctrl:'DESC4',prop:'Visible'},{av:'AV104AttEsqCod4',fld:'vATTESQCOD4'},{av:'gx.fn.getCtrlProperty("vLOTE5","Visible")',ctrl:'vLOTE5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC5","Visible")',ctrl:'DESC5',prop:'Visible'},{av:'AV105AttEsqCod5',fld:'vATTESQCOD5'},{av:'AV13Count',fld:'vCOUNT'},{av:'AV100AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'gx.fn.getCtrlProperty("DESC1","Caption")',ctrl:'DESC1',prop:'Caption'},{av:'gx.fn.getCtrlProperty("DESC2","Caption")',ctrl:'DESC2',prop:'Caption'},{av:'gx.fn.getCtrlProperty("DESC3","Caption")',ctrl:'DESC3',prop:'Caption'},{av:'gx.fn.getCtrlProperty("DESC4","Caption")',ctrl:'DESC4',prop:'Caption'},{av:'gx.fn.getCtrlProperty("DESC5","Caption")',ctrl:'DESC5',prop:'Caption'},{av:'AV98QtColuna',fld:'vQTCOLUNA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV57TpTela',fld:'vTPTELA'},{av:'AV40ProdutoId',fld:'vPRODUTOID'},{av:'AV53SnErro',fld:'vSNERRO'},{av:'AV98QtColuna',fld:'vQTCOLUNA'},{av:'AV93Lote1',fld:'vLOTE1'},{av:'gx.fn.getCtrlProperty("DESC1","Caption")',ctrl:'DESC1',prop:'Caption'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV101AttEsqCod1',fld:'vATTESQCOD1'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV94Lote2',fld:'vLOTE2'},{av:'gx.fn.getCtrlProperty("DESC2","Caption")',ctrl:'DESC2',prop:'Caption'},{av:'AV102AttEsqCod2',fld:'vATTESQCOD2'},{av:'AV95Lote3',fld:'vLOTE3'},{av:'gx.fn.getCtrlProperty("DESC3","Caption")',ctrl:'DESC3',prop:'Caption'},{av:'AV103AttEsqCod3',fld:'vATTESQCOD3'},{av:'AV96Lote4',fld:'vLOTE4'},{av:'gx.fn.getCtrlProperty("DESC4","Caption")',ctrl:'DESC4',prop:'Caption'},{av:'AV104AttEsqCod4',fld:'vATTESQCOD4'},{av:'AV97Lote5',fld:'vLOTE5'},{av:'gx.fn.getCtrlProperty("DESC5","Caption")',ctrl:'DESC5',prop:'Caption'},{av:'AV105AttEsqCod5',fld:'vATTESQCOD5'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV39ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3830ProdutoEmbalagem',fld:'PRODUTOEMBALAGEM'},{av:'AV46Quantidade',fld:'vQUANTIDADE'},{av:'AV76ProdutoEmbalagem',fld:'vPRODUTOEMBALAGEM'},{av:'AV32OrigemDestino',fld:'vORIGEMDESTINO',hsh:true},{av:'AV92Local',fld:'vLOCAL'},{av:'AV16EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV20FilialUnicaId',fld:'vFILIALUNICAID'},{av:'AV28MesSaldo',fld:'vMESSALDO'},{av:'AV6AnoSaldo',fld:'vANOSALDO'},{av:'AV15DiaSaldo',fld:'vDIASALDO'},{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'AV5TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'A11161TransfDisItemProdEmpresaId',fld:'TRANSFDISITEMPRODEMPRESAID'},{av:'A11162TransfDisItemProdId',fld:'TRANSFDISITEMPRODID'},{av:'A11174TransfDisItemLoteOrigem',fld:'TRANSFDISITEMLOTEORIGEM'},{av:'A11172TransfDisItemLoteDestino',fld:'TRANSFDISITEMLOTEDESTINO'},{av:'A11157TransfDisItemSequencia',fld:'TRANSFDISITEMSEQUENCIA'},{av:'AV69TransfDisItemSequencia',fld:'vTRANSFDISITEMSEQUENCIA'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV44QtdePagina',fld:'vQTDEPAGINA'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV8bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV67bmpAlt',fld:'vBMPALT'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV53SnErro',fld:'vSNERRO'},{av:'AV57TpTela',fld:'vTPTELA'},{av:'AV46Quantidade',fld:'vQUANTIDADE'},{av:'AV40ProdutoId',fld:'vPRODUTOID'},{av:'AV38ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV128GXLvl131',fld:'vGXLVL131'},{av:'AV129GXLvl151',fld:'vGXLVL151'},{av:'AV130GXLvl171',fld:'vGXLVL171'},{av:'AV131GXLvl191',fld:'vGXLVL191'},{av:'AV132GXLvl211',fld:'vGXLVL211'},{av:'AV92Local',fld:'vLOCAL'},{av:'AV133GXLvl233',fld:'vGXLVL233'},{av:'AV76ProdutoEmbalagem',fld:'vPRODUTOEMBALAGEM'},{av:'AV99LocalSaldo',fld:'vLOCALSALDO'},{av:'AV43QtdeDisponivel',fld:'vQTDEDISPONIVEL'},{av:'AV68hasReg',fld:'vHASREG'},{av:'AV69TransfDisItemSequencia',fld:'vTRANSFDISITEMSEQUENCIA'},{av:'AV25LocalOrigem',fld:'vLOCALORIGEM'},{av:'AV24LocalDestino',fld:'vLOCALDESTINO'},{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'AV45QtdeReg',fld:'vQTDEREG'},{av:'AV47Res',fld:'vRES'},{av:'AV48ResInt',fld:'vRESINT'},{av:'AV44QtdePagina',fld:'vQTDEPAGINA'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'CANCELAR'"] = [[],[{av:'AV57TpTela',fld:'vTPTELA'},{av:'AV46Quantidade',fld:'vQUANTIDADE'},{av:'AV40ProdutoId',fld:'vPRODUTOID'},{av:'AV93Lote1',fld:'vLOTE1'},{av:'AV94Lote2',fld:'vLOTE2'},{av:'AV95Lote3',fld:'vLOTE3'},{av:'AV96Lote4',fld:'vLOTE4'},{av:'AV97Lote5',fld:'vLOTE5'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'AV5TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV8bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV67bmpAlt',fld:'vBMPALT'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'A11157TransfDisItemSequencia',fld:'TRANSFDISITEMSEQUENCIA'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV57TpTela',fld:'vTPTELA'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV44QtdePagina',fld:'vQTDEPAGINA'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV5TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV8bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV67bmpAlt',fld:'vBMPALT'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'A11157TransfDisItemSequencia',fld:'TRANSFDISITEMSEQUENCIA'},{av:'AV57TpTela',fld:'vTPTELA'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV44QtdePagina',fld:'vQTDEPAGINA'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV5TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV8bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV67bmpAlt',fld:'vBMPALT'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'A11157TransfDisItemSequencia',fld:'TRANSFDISITEMSEQUENCIA'},{av:'AV57TpTela',fld:'vTPTELA'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV44QtdePagina',fld:'vQTDEPAGINA'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'AV44QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV8bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV67bmpAlt',fld:'vBMPALT'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'A11157TransfDisItemSequencia',fld:'TRANSFDISITEMSEQUENCIA'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV57TpTela',fld:'vTPTELA'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83}]];
   this.EvtParms["'FINALIZARTRANSFERENCIA'"] = [[{av:'A11162TransfDisItemProdId',fld:'TRANSFDISITEMPRODID'},{av:'A11174TransfDisItemLoteOrigem',fld:'TRANSFDISITEMLOTEORIGEM'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'AV5TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'A11157TransfDisItemSequencia',fld:'TRANSFDISITEMSEQUENCIA'},{av:'AV43QtdeDisponivel',fld:'vQTDEDISPONIVEL'},{av:'AV75ProdutoDescricaoAux',fld:'vPRODUTODESCRICAOAUX'},{av:'AV40ProdutoId',fld:'vPRODUTOID'},{av:'A11167TransfDisItemQuantidade',fld:'TRANSFDISITEMQUANTIDADE'},{av:'AV72ProdutoAnt',fld:'vPRODUTOANT'},{av:'AV74QtdeTransferida',fld:'vQTDETRANSFERIDA'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV39ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV19FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV73LoteAnt',fld:'vLOTEANT'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2962ProdutoUsuarioAlt',fld:'PRODUTOUSUARIOALT'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'}],[{av:'AV71isErro',fld:'vISERRO'},{av:'AV72ProdutoAnt',fld:'vPRODUTOANT'},{av:'AV73LoteAnt',fld:'vLOTEANT'},{av:'AV74QtdeTransferida',fld:'vQTDETRANSFERIDA'},{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'AV43QtdeDisponivel',fld:'vQTDEDISPONIVEL'},{av:'AV75ProdutoDescricaoAux',fld:'vPRODUTODESCRICAOAUX'}]];
   this.EvtParms["'EXCLUIRITEMTRANSFERENCIA'"] = [[{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'AV5TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'A11157TransfDisItemSequencia',fld:'TRANSFDISITEMSEQUENCIA'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV40ProdutoId',fld:'vPRODUTOID'},{av:'AV44QtdePagina',fld:'vQTDEPAGINA'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV8bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV67bmpAlt',fld:'vBMPALT'},{av:'AV57TpTela',fld:'vTPTELA'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'AV45QtdeReg',fld:'vQTDEREG'},{av:'AV47Res',fld:'vRES'},{av:'AV48ResInt',fld:'vRESINT'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83},{av:'AV44QtdePagina',fld:'vQTDEPAGINA'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV12ConsTransfDis',fld:'vCONSTRANSFDIS',grid:83},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV8bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV67bmpAlt',fld:'vBMPALT'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'AV5TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV61TransfDisNumero',fld:'vTRANSFDISNUMERO'},{av:'A11157TransfDisItemSequencia',fld:'TRANSFDISITEMSEQUENCIA'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV57TpTela',fld:'vTPTELA'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV44QtdePagina',fld:'vQTDEPAGINA'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV32OrigemDestino',fld:'vORIGEMDESTINO',hsh:true}],[]];
   this.setPrompt("PROMPTBARRAS", [53,122,146,145,142,141,147]);
   this.EnterCtrl = ["BTNAV1" ,"BTNAV2"];
   this.setVCMap("A11151TransfDisEmpresaId", "TRANSFDISEMPRESAID", 0, "char");
   this.setVCMap("AV5TransfDisEmpresaId", "vTRANSFDISEMPRESAID", 0, "char");
   this.setVCMap("A11152TransfDisNumero", "TRANSFDISNUMERO", 0, "int");
   this.setVCMap("A11157TransfDisItemSequencia", "TRANSFDISITEMSEQUENCIA", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("AV63TransfDisNumeroParm", "vTRANSFDISNUMEROPARM", 0, "int");
   this.setVCMap("AV32OrigemDestino", "vORIGEMDESTINO", 0, "char");
   this.setVCMap("A11151TransfDisEmpresaId", "TRANSFDISEMPRESAID", 0, "char");
   this.setVCMap("AV5TransfDisEmpresaId", "vTRANSFDISEMPRESAID", 0, "char");
   this.setVCMap("A11152TransfDisNumero", "TRANSFDISNUMERO", 0, "int");
   this.setVCMap("A11157TransfDisItemSequencia", "TRANSFDISITEMSEQUENCIA", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV8bmpexc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV8bmpexc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV67bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV67bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"A11151TransfDisEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV5TransfDisEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A11152TransfDisNumero"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[67]);
   Grid1Container.addRefreshingVar({rfrVar:"A11157TransfDisItemSequencia"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[123]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[132]);
   Grid1Container.addRefreshingVar({rfrVar:"Gx_mode"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[124]);
   Grid1Container.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2941ValorAtributoCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   this.addGridBCProperty("Constransfdis", ["ProdutoId"], this.GXValidFnc[84], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["ProdutoReferencia"], this.GXValidFnc[85], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["ProdutoCodigoBarras"], this.GXValidFnc[86], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["ProdutoNome"], this.GXValidFnc[87], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["LocalOrigem"], this.GXValidFnc[88], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["QtdeEstoque"], this.GXValidFnc[89], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["LocalDestino"], this.GXValidFnc[90], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["QtdeLocalOrigem"], this.GXValidFnc[91], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["QtdeLocalDestino"], this.GXValidFnc[94], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["QtdeDisponivel"], this.GXValidFnc[95], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["Sequencia"], this.GXValidFnc[96], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["EntradaOrigemEmpId"], this.GXValidFnc[97], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["EntradaOrigemId"], this.GXValidFnc[98], "AV12ConsTransfDis");
   this.addGridBCProperty("Constransfdis", ["EntradaOrigemSeq"], this.GXValidFnc[99], "AV12ConsTransfDis");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrartransferenciadisnuv());
