/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:4:42.30
*/
gx.evt.autoSkip = false;
gx.define('hgerarsolicitacaoautomaticaped', false, function () {
   this.ServerClass =  "hgerarsolicitacaoautomaticaped" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV36TxtTela=gx.fn.getControlValue("vTXTTELA") ;
      this.AV5FilialId=gx.fn.getIntegerValue("vFILIALID",'.') ;
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
   this.Validv_Vendedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Processoconvano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Processoconvnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122a62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132a62_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152a62_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,13,14,17,19,22,24,27,29,30,33,35,38,40,43,45,47,48,51,53,54,62,63,64,65,66];
   this.GXLastCtrlId =66;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV11PessoaId",gxold:"OV11PessoaId",gxvar:"AV11PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV11PessoaId,0)},c2v:function(){gx.O.AV11PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={fld:"IMGPROMPT2",grid:0};
   GXValidFnc[12]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV17Sim",gxold:"OV17Sim",gxvar:"AV17Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Sim=Value},v2z:function(Value){gx.O.ZV17Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV17Sim,0)},c2v:function(){gx.O.AV17Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV6Nao",gxold:"OV6Nao",gxvar:"AV6Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6Nao=Value},v2z:function(Value){gx.O.ZV6Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV6Nao,0)},c2v:function(){gx.O.AV6Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV10PessoaFantasia",gxold:"OV10PessoaFantasia",gxvar:"AV10PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10PessoaFantasia=Value},v2z:function(Value){gx.O.ZV10PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV10PessoaFantasia,0)},c2v:function(){gx.O.AV10PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRADATA",gxz:"ZV8PedidoCompraData",gxold:"OV8PedidoCompraData",gxvar:"AV8PedidoCompraData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATA",gx.O.AV8PedidoCompraData,0)},c2v:function(){gx.O.AV8PedidoCompraData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRADATAPREVISAO",gxz:"ZV9PedidoCompraDataPrevisao",gxold:"OV9PedidoCompraDataPrevisao",gxvar:"AV9PedidoCompraDataPrevisao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9PedidoCompraDataPrevisao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9PedidoCompraDataPrevisao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATAPREVISAO",gx.O.AV9PedidoCompraDataPrevisao,0)},c2v:function(){gx.O.AV9PedidoCompraDataPrevisao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATAPREVISAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorid,isvalid:null,rgrid:[],fld:"vVENDEDORID",gxz:"ZV19VendedorId",gxold:"OV19VendedorId",gxvar:"AV19VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19VendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV19VendedorId,0)},c2v:function(){gx.O.AV19VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV20VendedorNome",gxold:"OV20VendedorNome",gxvar:"AV20VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20VendedorNome=Value},v2z:function(Value){gx.O.ZV20VendedorNome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV20VendedorNome,0)},c2v:function(){gx.O.AV20VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRACIFFOB",gxz:"ZV7PedidoCompraCIFFOB",gxold:"OV7PedidoCompraCIFFOB",gxvar:"AV7PedidoCompraCIFFOB",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7PedidoCompraCIFFOB=Value},v2z:function(Value){gx.O.ZV7PedidoCompraCIFFOB=Value},v2c:function(){gx.fn.setComboBoxValue("vPEDIDOCOMPRACIFFOB",gx.O.AV7PedidoCompraCIFFOB)},c2v:function(){gx.O.AV7PedidoCompraCIFFOB=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRACIFFOB")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={fld:"TABLE5",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Processoconvano,isvalid:null,rgrid:[],fld:"vPROCESSOCONVANO",gxz:"ZV15ProcessoConvAno",gxold:"OV15ProcessoConvAno",gxvar:"AV15ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15ProcessoConvAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVANO",gx.O.AV15ProcessoConvAno,0)},c2v:function(){gx.O.AV15ProcessoConvAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVANO",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Processoconvnumero,isvalid:null,rgrid:[],fld:"vPROCESSOCONVNUMERO",gxz:"ZV16ProcessoConvNumero",gxold:"OV16ProcessoConvNumero",gxvar:"AV16ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ProcessoConvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVNUMERO",gx.O.AV16ProcessoConvNumero,0)},c2v:function(){gx.O.AV16ProcessoConvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[51]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoid,isvalid:null,rgrid:[],fld:"vPRECOID",gxz:"ZV14PrecoId",gxold:"OV14PrecoId",gxvar:"AV14PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV14PrecoId,0)},c2v:function(){gx.O.AV14PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV12PrecoDescricao",gxold:"OV12PrecoDescricao",gxvar:"AV12PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PrecoDescricao=Value},v2z:function(Value){gx.O.ZV12PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV12PrecoDescricao,0)},c2v:function(){gx.O.AV12PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorempresaid,isvalid:null,rgrid:[],fld:"vVENDEDOREMPRESAID",gxz:"ZV18VendedorEmpresaId",gxold:"OV18VendedorEmpresaId",gxvar:"AV18VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18VendedorEmpresaId=Value},v2z:function(Value){gx.O.ZV18VendedorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vVENDEDOREMPRESAID",gx.O.AV18VendedorEmpresaId,0)},c2v:function(){gx.O.AV18VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV13PrecoEmpresaId",gxold:"OV13PrecoEmpresaId",gxvar:"AV13PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV13PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV13PrecoEmpresaId,0)},c2v:function(){gx.O.AV13PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[65]={fld:"PROMPT_VENDEDORID",grid:0};
   GXValidFnc[66]={fld:"PROMPT_PRECOID",grid:0};
   this.AV11PessoaId = 0 ;
   this.ZV11PessoaId = 0 ;
   this.OV11PessoaId = 0 ;
   this.AV17Sim = "" ;
   this.ZV17Sim = "" ;
   this.OV17Sim = "" ;
   this.AV6Nao = "" ;
   this.ZV6Nao = "" ;
   this.OV6Nao = "" ;
   this.AV10PessoaFantasia = "" ;
   this.ZV10PessoaFantasia = "" ;
   this.OV10PessoaFantasia = "" ;
   this.AV8PedidoCompraData = gx.date.nullDate() ;
   this.ZV8PedidoCompraData = gx.date.nullDate() ;
   this.OV8PedidoCompraData = gx.date.nullDate() ;
   this.AV9PedidoCompraDataPrevisao = gx.date.nullDate() ;
   this.ZV9PedidoCompraDataPrevisao = gx.date.nullDate() ;
   this.OV9PedidoCompraDataPrevisao = gx.date.nullDate() ;
   this.AV19VendedorId = 0 ;
   this.ZV19VendedorId = 0 ;
   this.OV19VendedorId = 0 ;
   this.AV20VendedorNome = "" ;
   this.ZV20VendedorNome = "" ;
   this.OV20VendedorNome = "" ;
   this.AV7PedidoCompraCIFFOB = "" ;
   this.ZV7PedidoCompraCIFFOB = "" ;
   this.OV7PedidoCompraCIFFOB = "" ;
   this.AV15ProcessoConvAno = 0 ;
   this.ZV15ProcessoConvAno = 0 ;
   this.OV15ProcessoConvAno = 0 ;
   this.AV16ProcessoConvNumero = 0 ;
   this.ZV16ProcessoConvNumero = 0 ;
   this.OV16ProcessoConvNumero = 0 ;
   this.AV14PrecoId = 0 ;
   this.ZV14PrecoId = 0 ;
   this.OV14PrecoId = 0 ;
   this.AV12PrecoDescricao = "" ;
   this.ZV12PrecoDescricao = "" ;
   this.OV12PrecoDescricao = "" ;
   this.AV18VendedorEmpresaId = "" ;
   this.ZV18VendedorEmpresaId = "" ;
   this.OV18VendedorEmpresaId = "" ;
   this.AV13PrecoEmpresaId = "" ;
   this.ZV13PrecoEmpresaId = "" ;
   this.OV13PrecoEmpresaId = "" ;
   this.AV11PessoaId = 0 ;
   this.AV17Sim = "" ;
   this.AV6Nao = "" ;
   this.AV10PessoaFantasia = "" ;
   this.AV8PedidoCompraData = gx.date.nullDate() ;
   this.AV9PedidoCompraDataPrevisao = gx.date.nullDate() ;
   this.AV19VendedorId = 0 ;
   this.AV20VendedorNome = "" ;
   this.AV7PedidoCompraCIFFOB = "" ;
   this.AV15ProcessoConvAno = 0 ;
   this.AV16ProcessoConvNumero = 0 ;
   this.AV14PrecoId = 0 ;
   this.AV12PrecoDescricao = "" ;
   this.AV18VendedorEmpresaId = "" ;
   this.AV13PrecoEmpresaId = "" ;
   this.AV36TxtTela = "" ;
   this.AV5FilialId = 0 ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A1237VendedorId = 0 ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1148VendedorNome = "" ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A3816ProcessoConvNoContrato = "" ;
   this.A3820ProcessoConvValor = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A711PrecoDescricao = "" ;
   this.A71PessoaFantasia = "" ;
   this.Events = {"e122a62_client": ["'FECHAR'", true] ,"e132a62_client": ["ENTER", true] ,"e152a62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV30SnErro',fld:'vSNERRO'},{av:'AV15ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV19VendedorId',fld:'vVENDEDORID'},{av:'AV9PedidoCompraDataPrevisao',fld:'vPEDIDOCOMPRADATAPREVISAO'},{av:'AV8PedidoCompraData',fld:'vPEDIDOCOMPRADATA'},{av:'AV16ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV11PessoaId',fld:'vPESSOAID'},{av:'AV7PedidoCompraCIFFOB',fld:'vPEDIDOCOMPRACIFFOB'},{av:'AV14PrecoId',fld:'vPRECOID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV21PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'AV24ProcessoConvNoContrato',fld:'vPROCESSOCONVNOCONTRATO'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'AV22ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3816ProcessoConvNoContrato',fld:'PROCESSOCONVNOCONTRATO'},{av:'AV25PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV26PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'A3820ProcessoConvValor',fld:'PROCESSOCONVVALOR'},{av:'AV5FilialId',fld:'vFILIALID',hsh:true},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV18VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV13PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'}],[{av:'AV30SnErro',fld:'vSNERRO'},{av:'AV44GXLvl101',fld:'vGXLVL101'},{av:'AV23PedidoCompraEntrega',fld:'vPEDIDOCOMPRAENTREGA'},{av:'AV24ProcessoConvNoContrato',fld:'vPROCESSOCONVNOCONTRATO'},{av:'AV45GXLvl148',fld:'vGXLVL148'},{av:'AV32QtdeAutorizacoes',fld:'vQTDEAUTORIZACOES'},{av:'AV31SomaVlrAutorizacao',fld:'vSOMAVLRAUTORIZACAO'},{av:'AV26PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV25PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV16ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV15ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV46GXLvl195',fld:'vGXLVL195'},{av:'AV20VendedorNome',fld:'vVENDEDORNOME'},{av:'AV47GXLvl229',fld:'vGXLVL229'}]];
   this.setPrompt("IMGPROMPT2", [10]);
   this.setPrompt("IMGPROMPT", [43]);
   this.setPrompt("PROMPT_VENDEDORID", [29]);
   this.setPrompt("PROMPT_PRECOID", [53]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV36TxtTela", "vTXTTELA", 0, "svchar");
   this.setVCMap("AV5FilialId", "vFILIALID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgerarsolicitacaoautomaticaped());
