/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:3:15.59
*/
gx.evt.autoSkip = false;
gx.define('hexcluirmovimentacao', false, function () {
   this.ServerClass =  "hexcluirmovimentacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
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
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("TBTRNENTRADA","Visible", 0 );
      gx.fn.setCtrlProperty("TBTRNSAIDA","Visible", 0 );
      if ( this.AV32TipoMovimento == "E" )
      {
         gx.fn.setCtrlProperty("TBTRNENTRADA","Visible", 1 );
      }
      else if ( this.AV32TipoMovimento == "S" )
      {
         gx.fn.setCtrlProperty("TBTRNSAIDA","Visible", 1 );
      }
      else if ( this.AV32TipoMovimento == "T" )
      {
         gx.fn.setCtrlProperty("TBTRNENTRADA","Visible", 1 );
         gx.fn.setCtrlProperty("TBTRNSAIDA","Visible", 1 );
      }
   };
   this.e131bk2_client=function()
   {
      this.executeServerEvent("'FILTRARTIPOMOVIMENTO'", false, null, false, false);
   };
   this.e141bk2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e111bk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e171bk2_client=function()
   {
      this.executeServerEvent("VTIPOMOVIMENTO.CLICK", true, null, false, true);
   };
   this.e181bk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,17,20,22,23,24,29,32,35,39,41,44,46,48,51,53,56,58,59,60,61,62,63,66,68,69,72,74,79,82,85,87,89,91,93,95,98,101,103,105,107,109,111,117,123,125,126,127,128,129,130,131,132,133,134,135,136,137,138];
   this.GXLastCtrlId =138;
   GXValidFnc[2]={fld:"TABLE9",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TABLE11",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV30FilialId",gxold:"OV30FilialId",gxvar:"AV30FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV30FilialId,0)},c2v:function(){gx.O.AV30FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV31FilialNome",gxold:"OV31FilialNome",gxvar:"AV31FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FilialNome=Value},v2z:function(Value){gx.O.ZV31FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV31FilialNome,0)},c2v:function(){gx.O.AV31FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOMOVIMENTO",gxz:"ZV32TipoMovimento",gxold:"OV32TipoMovimento",gxvar:"AV32TipoMovimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32TipoMovimento=Value},v2z:function(Value){gx.O.ZV32TipoMovimento=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOMOVIMENTO",gx.O.AV32TipoMovimento)},c2v:function(){gx.O.AV32TipoMovimento=this.val()},val:function(){return gx.fn.getControlValue("vTIPOMOVIMENTO")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV40FilialEmpresaId",gxold:"OV40FilialEmpresaId",gxvar:"AV40FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV40FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV40FilialEmpresaId,0)},c2v:function(){gx.O.AV40FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFIL",gxz:"ZV67QtdeFil",gxold:"OV67QtdeFil",gxvar:"AV67QtdeFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67QtdeFil=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67QtdeFil=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEFIL",gx.O.AV67QtdeFil,0)},c2v:function(){gx.O.AV67QtdeFil=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEFIL",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE12",grid:0};
   GXValidFnc[32]={fld:"TABLE13",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[41]={fld:"TABLE14",grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV45DataIni",gxold:"OV45DataIni",gxvar:"AV45DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV45DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV45DataIni,0)},c2v:function(){gx.O.AV45DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIN",gxz:"ZV46DataFin",gxold:"OV46DataFin",gxvar:"AV46DataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46DataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV46DataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIN",gx.O.AV46DataFin,0)},c2v:function(){gx.O.AV46DataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIN")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMERODOCUMENTO",gxz:"ZV33NumeroDocumento",gxold:"OV33NumeroDocumento",gxvar:"AV33NumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33NumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33NumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMERODOCUMENTO",gx.O.AV33NumeroDocumento,0)},c2v:function(){gx.O.AV33NumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV34PessoaId",gxold:"OV34PessoaId",gxvar:"AV34PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV34PessoaId,0)},c2v:function(){gx.O.AV34PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADESCRICAO",gxz:"ZV35PessoaDescricao",gxold:"OV35PessoaDescricao",gxvar:"AV35PessoaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PessoaDescricao=Value},v2z:function(Value){gx.O.ZV35PessoaDescricao=Value},v2c:function(){gx.fn.setControlValue("vPESSOADESCRICAO",gx.O.AV35PessoaDescricao,0)},c2v:function(){gx.O.AV35PessoaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPESSOADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV41PessoaEmpresaId",gxold:"OV41PessoaEmpresaId",gxvar:"AV41PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV41PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV41PessoaEmpresaId,0)},c2v:function(){gx.O.AV41PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV24Sim",gxold:"OV24Sim",gxvar:"AV24Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Sim=Value},v2z:function(Value){gx.O.ZV24Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV24Sim,0)},c2v:function(){gx.O.AV24Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV25Nao",gxold:"OV25Nao",gxvar:"AV25Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Nao=Value},v2z:function(Value){gx.O.ZV25Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV25Nao,0)},c2v:function(){gx.O.AV25Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDELIMITADORDESCRICAO",gxz:"ZV47DelimitadorDescricao",gxold:"OV47DelimitadorDescricao",gxvar:"AV47DelimitadorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47DelimitadorDescricao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47DelimitadorDescricao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDELIMITADORDESCRICAO",gx.O.AV47DelimitadorDescricao,0)},c2v:function(){gx.O.AV47DelimitadorDescricao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDELIMITADORDESCRICAO",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV36UsuarioId",gxold:"OV36UsuarioId",gxvar:"AV36UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36UsuarioId=Value},v2z:function(Value){gx.O.ZV36UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV36UsuarioId,0)},c2v:function(){gx.O.AV36UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV37UsuarioNome",gxold:"OV37UsuarioNome",gxvar:"AV37UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37UsuarioNome=Value},v2z:function(Value){gx.O.ZV37UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV37UsuarioNome,0)},c2v:function(){gx.O.AV37UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAULTIMAALT",gxz:"ZV38DataUltimaAlt",gxold:"OV38DataUltimaAlt",gxvar:"AV38DataUltimaAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38DataUltimaAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV38DataUltimaAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAULTIMAALT",gx.O.AV38DataUltimaAlt,0)},c2v:function(){gx.O.AV38DataUltimaAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAULTIMAALT")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TABLE1",grid:0};
   GXValidFnc[82]={fld:"TBTRNENTRADA",grid:0};
   GXValidFnc[85]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNENTRADA1",gxz:"ZV78TrnEntrada1",gxold:"OV78TrnEntrada1",gxvar:"AV78TrnEntrada1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78TrnEntrada1=Value},v2z:function(Value){gx.O.ZV78TrnEntrada1=Value},v2c:function(){gx.fn.setControlValue("vTRNENTRADA1",gx.O.AV78TrnEntrada1,0)},c2v:function(){gx.O.AV78TrnEntrada1=this.val()},val:function(){return gx.fn.getControlValue("vTRNENTRADA1")},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNENTRADA2",gxz:"ZV79TrnEntrada2",gxold:"OV79TrnEntrada2",gxvar:"AV79TrnEntrada2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79TrnEntrada2=Value},v2z:function(Value){gx.O.ZV79TrnEntrada2=Value},v2c:function(){gx.fn.setControlValue("vTRNENTRADA2",gx.O.AV79TrnEntrada2,0)},c2v:function(){gx.O.AV79TrnEntrada2=this.val()},val:function(){return gx.fn.getControlValue("vTRNENTRADA2")},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNENTRADA3",gxz:"ZV80TrnEntrada3",gxold:"OV80TrnEntrada3",gxvar:"AV80TrnEntrada3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80TrnEntrada3=Value},v2z:function(Value){gx.O.ZV80TrnEntrada3=Value},v2c:function(){gx.fn.setControlValue("vTRNENTRADA3",gx.O.AV80TrnEntrada3,0)},c2v:function(){gx.O.AV80TrnEntrada3=this.val()},val:function(){return gx.fn.getControlValue("vTRNENTRADA3")},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNENTRADA4",gxz:"ZV81TrnEntrada4",gxold:"OV81TrnEntrada4",gxvar:"AV81TrnEntrada4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81TrnEntrada4=Value},v2z:function(Value){gx.O.ZV81TrnEntrada4=Value},v2c:function(){gx.fn.setControlValue("vTRNENTRADA4",gx.O.AV81TrnEntrada4,0)},c2v:function(){gx.O.AV81TrnEntrada4=this.val()},val:function(){return gx.fn.getControlValue("vTRNENTRADA4")},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNENTRADA5",gxz:"ZV82TrnEntrada5",gxold:"OV82TrnEntrada5",gxvar:"AV82TrnEntrada5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82TrnEntrada5=Value},v2z:function(Value){gx.O.ZV82TrnEntrada5=Value},v2c:function(){gx.fn.setControlValue("vTRNENTRADA5",gx.O.AV82TrnEntrada5,0)},c2v:function(){gx.O.AV82TrnEntrada5=this.val()},val:function(){return gx.fn.getControlValue("vTRNENTRADA5")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TBTRNSAIDA",grid:0};
   GXValidFnc[101]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNSAIDA1",gxz:"ZV83TrnSaida1",gxold:"OV83TrnSaida1",gxvar:"AV83TrnSaida1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83TrnSaida1=Value},v2z:function(Value){gx.O.ZV83TrnSaida1=Value},v2c:function(){gx.fn.setControlValue("vTRNSAIDA1",gx.O.AV83TrnSaida1,0)},c2v:function(){gx.O.AV83TrnSaida1=this.val()},val:function(){return gx.fn.getControlValue("vTRNSAIDA1")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNSAIDA2",gxz:"ZV84TrnSaida2",gxold:"OV84TrnSaida2",gxvar:"AV84TrnSaida2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84TrnSaida2=Value},v2z:function(Value){gx.O.ZV84TrnSaida2=Value},v2c:function(){gx.fn.setControlValue("vTRNSAIDA2",gx.O.AV84TrnSaida2,0)},c2v:function(){gx.O.AV84TrnSaida2=this.val()},val:function(){return gx.fn.getControlValue("vTRNSAIDA2")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNSAIDA3",gxz:"ZV85TrnSaida3",gxold:"OV85TrnSaida3",gxvar:"AV85TrnSaida3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85TrnSaida3=Value},v2z:function(Value){gx.O.ZV85TrnSaida3=Value},v2c:function(){gx.fn.setControlValue("vTRNSAIDA3",gx.O.AV85TrnSaida3,0)},c2v:function(){gx.O.AV85TrnSaida3=this.val()},val:function(){return gx.fn.getControlValue("vTRNSAIDA3")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNSAIDA4",gxz:"ZV86TrnSaida4",gxold:"OV86TrnSaida4",gxvar:"AV86TrnSaida4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86TrnSaida4=Value},v2z:function(Value){gx.O.ZV86TrnSaida4=Value},v2c:function(){gx.fn.setControlValue("vTRNSAIDA4",gx.O.AV86TrnSaida4,0)},c2v:function(){gx.O.AV86TrnSaida4=this.val()},val:function(){return gx.fn.getControlValue("vTRNSAIDA4")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNSAIDA5",gxz:"ZV87TrnSaida5",gxold:"OV87TrnSaida5",gxvar:"AV87TrnSaida5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87TrnSaida5=Value},v2z:function(Value){gx.O.ZV87TrnSaida5=Value},v2c:function(){gx.fn.setControlValue("vTRNSAIDA5",gx.O.AV87TrnSaida5,0)},c2v:function(){gx.O.AV87TrnSaida5=this.val()},val:function(){return gx.fn.getControlValue("vTRNSAIDA5")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TABLE8",grid:0};
   GXValidFnc[123]={fld:"JS", format:2,grid:0};
   GXValidFnc[125]={fld:"BTNHELP",grid:0};
   GXValidFnc[126]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[127]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[128]={fld:"PROMPT_USUARIOID",grid:0};
   GXValidFnc[129]={fld:"PROMPT_TRNENTRADA1",grid:0};
   GXValidFnc[130]={fld:"PROMPT_TRNENTRADA2",grid:0};
   GXValidFnc[131]={fld:"PROMPT_TRNENTRADA3",grid:0};
   GXValidFnc[132]={fld:"PROMPT_TRNENTRADA4",grid:0};
   GXValidFnc[133]={fld:"PROMPT_TRNENTRADA5",grid:0};
   GXValidFnc[134]={fld:"PROMPT_TRNSAIDA1",grid:0};
   GXValidFnc[135]={fld:"PROMPT_TRNSAIDA2",grid:0};
   GXValidFnc[136]={fld:"PROMPT_TRNSAIDA3",grid:0};
   GXValidFnc[137]={fld:"PROMPT_TRNSAIDA4",grid:0};
   GXValidFnc[138]={fld:"PROMPT_TRNSAIDA5",grid:0};
   this.AV30FilialId = 0 ;
   this.ZV30FilialId = 0 ;
   this.OV30FilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.ZV31FilialNome = "" ;
   this.OV31FilialNome = "" ;
   this.AV32TipoMovimento = "" ;
   this.ZV32TipoMovimento = "" ;
   this.OV32TipoMovimento = "" ;
   this.AV40FilialEmpresaId = "" ;
   this.ZV40FilialEmpresaId = "" ;
   this.OV40FilialEmpresaId = "" ;
   this.AV67QtdeFil = 0 ;
   this.ZV67QtdeFil = 0 ;
   this.OV67QtdeFil = 0 ;
   this.AV45DataIni = gx.date.nullDate() ;
   this.ZV45DataIni = gx.date.nullDate() ;
   this.OV45DataIni = gx.date.nullDate() ;
   this.AV46DataFin = gx.date.nullDate() ;
   this.ZV46DataFin = gx.date.nullDate() ;
   this.OV46DataFin = gx.date.nullDate() ;
   this.AV33NumeroDocumento = 0 ;
   this.ZV33NumeroDocumento = 0 ;
   this.OV33NumeroDocumento = 0 ;
   this.AV34PessoaId = 0 ;
   this.ZV34PessoaId = 0 ;
   this.OV34PessoaId = 0 ;
   this.AV35PessoaDescricao = "" ;
   this.ZV35PessoaDescricao = "" ;
   this.OV35PessoaDescricao = "" ;
   this.AV41PessoaEmpresaId = "" ;
   this.ZV41PessoaEmpresaId = "" ;
   this.OV41PessoaEmpresaId = "" ;
   this.AV24Sim = "" ;
   this.ZV24Sim = "" ;
   this.OV24Sim = "" ;
   this.AV25Nao = "" ;
   this.ZV25Nao = "" ;
   this.OV25Nao = "" ;
   this.AV47DelimitadorDescricao = 0 ;
   this.ZV47DelimitadorDescricao = 0 ;
   this.OV47DelimitadorDescricao = 0 ;
   this.AV36UsuarioId = "" ;
   this.ZV36UsuarioId = "" ;
   this.OV36UsuarioId = "" ;
   this.AV37UsuarioNome = "" ;
   this.ZV37UsuarioNome = "" ;
   this.OV37UsuarioNome = "" ;
   this.AV38DataUltimaAlt = gx.date.nullDate() ;
   this.ZV38DataUltimaAlt = gx.date.nullDate() ;
   this.OV38DataUltimaAlt = gx.date.nullDate() ;
   this.AV78TrnEntrada1 = "" ;
   this.ZV78TrnEntrada1 = "" ;
   this.OV78TrnEntrada1 = "" ;
   this.AV79TrnEntrada2 = "" ;
   this.ZV79TrnEntrada2 = "" ;
   this.OV79TrnEntrada2 = "" ;
   this.AV80TrnEntrada3 = "" ;
   this.ZV80TrnEntrada3 = "" ;
   this.OV80TrnEntrada3 = "" ;
   this.AV81TrnEntrada4 = "" ;
   this.ZV81TrnEntrada4 = "" ;
   this.OV81TrnEntrada4 = "" ;
   this.AV82TrnEntrada5 = "" ;
   this.ZV82TrnEntrada5 = "" ;
   this.OV82TrnEntrada5 = "" ;
   this.AV83TrnSaida1 = "" ;
   this.ZV83TrnSaida1 = "" ;
   this.OV83TrnSaida1 = "" ;
   this.AV84TrnSaida2 = "" ;
   this.ZV84TrnSaida2 = "" ;
   this.OV84TrnSaida2 = "" ;
   this.AV85TrnSaida3 = "" ;
   this.ZV85TrnSaida3 = "" ;
   this.OV85TrnSaida3 = "" ;
   this.AV86TrnSaida4 = "" ;
   this.ZV86TrnSaida4 = "" ;
   this.OV86TrnSaida4 = "" ;
   this.AV87TrnSaida5 = "" ;
   this.ZV87TrnSaida5 = "" ;
   this.OV87TrnSaida5 = "" ;
   this.AV30FilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.AV32TipoMovimento = "" ;
   this.AV40FilialEmpresaId = "" ;
   this.AV67QtdeFil = 0 ;
   this.AV45DataIni = gx.date.nullDate() ;
   this.AV46DataFin = gx.date.nullDate() ;
   this.AV33NumeroDocumento = 0 ;
   this.AV34PessoaId = 0 ;
   this.AV35PessoaDescricao = "" ;
   this.AV41PessoaEmpresaId = "" ;
   this.AV24Sim = "" ;
   this.AV25Nao = "" ;
   this.AV47DelimitadorDescricao = 0 ;
   this.AV36UsuarioId = "" ;
   this.AV37UsuarioNome = "" ;
   this.AV38DataUltimaAlt = gx.date.nullDate() ;
   this.AV78TrnEntrada1 = "" ;
   this.AV79TrnEntrada2 = "" ;
   this.AV80TrnEntrada3 = "" ;
   this.AV81TrnEntrada4 = "" ;
   this.AV82TrnEntrada5 = "" ;
   this.AV83TrnSaida1 = "" ;
   this.AV84TrnSaida2 = "" ;
   this.AV85TrnSaida3 = "" ;
   this.AV86TrnSaida4 = "" ;
   this.AV87TrnSaida5 = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A5573TransacaoSaidaSnLancaFinanc = "" ;
   this.A5574TransacaoSaidaTipoDataFin = "" ;
   this.A6474TransacaoSaidaTipoPreVenda = "" ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A4488TransacaoEntradaSnLancaFinanc = "" ;
   this.A5210TransacaoEntradaTipoDataFin = "" ;
   this.A6005SaidaData = gx.date.nullDate() ;
   this.A4313SaidaDataHoraAlt = gx.date.nullDate() ;
   this.A4314SaidaUsuarioAlt = "" ;
   this.A5966SaidaClienteId = 0 ;
   this.A5965SaidaClienteEmpresaId = "" ;
   this.A5960SaidaNoDocumento = 0 ;
   this.A5971SaidaFilialId = 0 ;
   this.A5970SaidaFilialEmpId = "" ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4308SaidaTipo = "" ;
   this.A6398SaidaTransacaoCodigo = "" ;
   this.A5964SaidaDataEmissao = gx.date.nullDate() ;
   this.A4656EntradaDataEntrada = gx.date.nullDate() ;
   this.A4820EntradaDataHoraAlt = gx.date.nullDate() ;
   this.A4821EntradaUsuarioAlt = "" ;
   this.A4643EntradaFornecedorId = 0 ;
   this.A4642EntradaFornecedorEmpId = "" ;
   this.A4646EntradaNumeroDocumento = 0 ;
   this.A4660EntradaFilialId = 0 ;
   this.A4659EntradaFilialEmpId = "" ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4640EntradaTipo = "" ;
   this.A4655EntradaDataEmissao = gx.date.nullDate() ;
   this.A75UsuarioId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.Events = {"e131bk2_client": ["'FILTRARTIPOMOVIMENTO'", true] ,"e141bk2_client": ["ENTER", true] ,"e111bk2_client": ["'FECHAR'", true] ,"e171bk2_client": ["VTIPOMOVIMENTO.CLICK", true] ,"e181bk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV30FilialId',fld:'vFILIALID'},{av:'AV32TipoMovimento',fld:'vTIPOMOVIMENTO'},{av:'AV45DataIni',fld:'vDATAINI'},{av:'AV46DataFin',fld:'vDATAFIN'},{av:'AV33NumeroDocumento',fld:'vNUMERODOCUMENTO'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV36UsuarioId',fld:'vUSUARIOID'},{av:'AV38DataUltimaAlt',fld:'vDATAULTIMAALT'},{av:'AV43QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV42SNImpDetalhe',fld:'vSNIMPDETALHE'},{av:'AV78TrnEntrada1',fld:'vTRNENTRADA1'},{av:'AV79TrnEntrada2',fld:'vTRNENTRADA2'},{av:'AV80TrnEntrada3',fld:'vTRNENTRADA3'},{av:'AV81TrnEntrada4',fld:'vTRNENTRADA4'},{av:'AV82TrnEntrada5',fld:'vTRNENTRADA5'},{av:'AV83TrnSaida1',fld:'vTRNSAIDA1'},{av:'AV84TrnSaida2',fld:'vTRNSAIDA2'},{av:'AV85TrnSaida3',fld:'vTRNSAIDA3'},{av:'AV86TrnSaida4',fld:'vTRNSAIDA4'},{av:'AV87TrnSaida5',fld:'vTRNSAIDA5'}],[{av:'AV15NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV14NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV87TrnSaida5',fld:'vTRNSAIDA5'},{av:'AV86TrnSaida4',fld:'vTRNSAIDA4'},{av:'AV85TrnSaida3',fld:'vTRNSAIDA3'},{av:'AV84TrnSaida2',fld:'vTRNSAIDA2'},{av:'AV83TrnSaida1',fld:'vTRNSAIDA1'},{av:'AV82TrnEntrada5',fld:'vTRNENTRADA5'},{av:'AV81TrnEntrada4',fld:'vTRNENTRADA4'},{av:'AV80TrnEntrada3',fld:'vTRNENTRADA3'},{av:'AV79TrnEntrada2',fld:'vTRNENTRADA2'},{av:'AV78TrnEntrada1',fld:'vTRNENTRADA1'},{av:'AV42SNImpDetalhe',fld:'vSNIMPDETALHE'},{av:'AV43QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV38DataUltimaAlt',fld:'vDATAULTIMAALT'},{av:'AV36UsuarioId',fld:'vUSUARIOID'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV33NumeroDocumento',fld:'vNUMERODOCUMENTO'},{av:'AV46DataFin',fld:'vDATAFIN'},{av:'AV45DataIni',fld:'vDATAINI'},{av:'AV32TipoMovimento',fld:'vTIPOMOVIMENTO'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'gx.fn.getCtrlProperty("TBTRNENTRADA","Visible")',ctrl:'TBTRNENTRADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBTRNSAIDA","Visible")',ctrl:'TBTRNSAIDA',prop:'Visible'}]];
   this.EvtParms["'FILTRARTIPOMOVIMENTO'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV48SNErro',fld:'vSNERRO'},{av:'AV32TipoMovimento',fld:'vTIPOMOVIMENTO'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV40FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV45DataIni',fld:'vDATAINI'},{av:'AV46DataFin',fld:'vDATAFIN'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV41PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV36UsuarioId',fld:'vUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV78TrnEntrada1',fld:'vTRNENTRADA1'},{av:'AV79TrnEntrada2',fld:'vTRNENTRADA2'},{av:'AV80TrnEntrada3',fld:'vTRNENTRADA3'},{av:'AV81TrnEntrada4',fld:'vTRNENTRADA4'},{av:'AV82TrnEntrada5',fld:'vTRNENTRADA5'},{av:'AV88TransacaoId',fld:'vTRANSACAOID'},{av:'A4480TransacaoEntradaEmpresaId',fld:'TRANSACAOENTRADAEMPRESAID'},{av:'AV57TransacaoEntradaEmpresaId',fld:'vTRANSACAOENTRADAEMPRESAID'},{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'AV83TrnSaida1',fld:'vTRNSAIDA1'},{av:'AV84TrnSaida2',fld:'vTRNSAIDA2'},{av:'AV85TrnSaida3',fld:'vTRNSAIDA3'},{av:'AV86TrnSaida4',fld:'vTRNSAIDA4'},{av:'AV87TrnSaida5',fld:'vTRNSAIDA5'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV62TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV53EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'AV33NumeroDocumento',fld:'vNUMERODOCUMENTO'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4821EntradaUsuarioAlt',fld:'ENTRADAUSUARIOALT'},{av:'A4820EntradaDataHoraAlt',fld:'ENTRADADATAHORAALT'},{av:'AV38DataUltimaAlt',fld:'vDATAULTIMAALT'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'A4640EntradaTipo',fld:'ENTRADATIPO'},{av:'AV51Seleciona',fld:'vSELECIONA'},{av:'AV59TransacaoEntradaSnLancaFinanc',fld:'vTRANSACAOENTRADASNLANCAFINANC'},{av:'AV58TransacaoEntradaTipoDataFin',fld:'vTRANSACAOENTRADATIPODATAFIN'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV54SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A5970SaidaFilialEmpId',fld:'SAIDAFILIALEMPID'},{av:'A5971SaidaFilialId',fld:'SAIDAFILIALID'},{av:'A5960SaidaNoDocumento',fld:'SAIDANODOCUMENTO'},{av:'A5965SaidaClienteEmpresaId',fld:'SAIDACLIENTEEMPRESAID'},{av:'A5966SaidaClienteId',fld:'SAIDACLIENTEID'},{av:'A4314SaidaUsuarioAlt',fld:'SAIDAUSUARIOALT'},{av:'A4313SaidaDataHoraAlt',fld:'SAIDADATAHORAALT'},{av:'A6005SaidaData',fld:'SAIDADATA'},{av:'A4308SaidaTipo',fld:'SAIDATIPO'},{av:'A6398SaidaTransacaoCodigo',fld:'SAIDATRANSACAOCODIGO'},{av:'AV65TransacaoSaidaSnLancaFinanc',fld:'vTRANSACAOSAIDASNLANCAFINANC'},{av:'AV64TransacaoSaidaTipoDataFin',fld:'vTRANSACAOSAIDATIPODATAFIN'},{av:'A5964SaidaDataEmissao',fld:'SAIDADATAEMISSAO'},{av:'A5210TransacaoEntradaTipoDataFin',fld:'TRANSACAOENTRADATIPODATAFIN'},{av:'A4488TransacaoEntradaSnLancaFinanc',fld:'TRANSACAOENTRADASNLANCAFINANC'},{av:'AV56TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV44filtros',fld:'vFILTROS'},{av:'AV52EntradaTipo',fld:'vENTRADATIPO'},{av:'AV60SaidaTipo',fld:'vSAIDATIPO'},{av:'AV61SaidaTransacaoCodigo',fld:'vSAIDATRANSACAOCODIGO'},{av:'A6474TransacaoSaidaTipoPreVenda',fld:'TRANSACAOSAIDATIPOPREVENDA'},{av:'A5573TransacaoSaidaSnLancaFinanc',fld:'TRANSACAOSAIDASNLANCAFINANC'},{av:'A5574TransacaoSaidaTipoDataFin',fld:'TRANSACAOSAIDATIPODATAFIN'}],[{av:'AV90DescMovimento',fld:'vDESCMOVIMENTO'},{av:'AV44filtros',fld:'vFILTROS'},{av:'AV48SNErro',fld:'vSNERRO'},{av:'AV96GXLvl185',fld:'vGXLVL185'},{av:'AV97GXLvl217',fld:'vGXLVL217'},{av:'AV98GXLvl230',fld:'vGXLVL230'},{av:'AV89x',fld:'vX'},{av:'AV88TransacaoId',fld:'vTRANSACAOID'},{av:'AV99GXLvl257',fld:'vGXLVL257'},{av:'AV100GXLvl299',fld:'vGXLVL299'},{av:'AV52EntradaTipo',fld:'vENTRADATIPO'},{av:'AV56TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV55MsgErroData',fld:'vMSGERRODATA'},{av:'AV60SaidaTipo',fld:'vSAIDATIPO'},{av:'AV61SaidaTransacaoCodigo',fld:'vSAIDATRANSACAOCODIGO'},{av:'AV51Seleciona',fld:'vSELECIONA'},{av:'AV59TransacaoEntradaSnLancaFinanc',fld:'vTRANSACAOENTRADASNLANCAFINANC'},{av:'AV58TransacaoEntradaTipoDataFin',fld:'vTRANSACAOENTRADATIPODATAFIN'},{av:'AV63TransacaoSaidaTipoPreVenda',fld:'vTRANSACAOSAIDATIPOPREVENDA'},{av:'AV65TransacaoSaidaSnLancaFinanc',fld:'vTRANSACAOSAIDASNLANCAFINANC'},{av:'AV64TransacaoSaidaTipoDataFin',fld:'vTRANSACAOSAIDATIPODATAFIN'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VTIPOMOVIMENTO.CLICK"] = [[{av:'AV32TipoMovimento',fld:'vTIPOMOVIMENTO'}],[{av:'gx.fn.getCtrlProperty("TBTRNENTRADA","Visible")',ctrl:'TBTRNENTRADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBTRNSAIDA","Visible")',ctrl:'TBTRNSAIDA',prop:'Visible'}]];
   this.setPrompt("PROMPT_FILIALID", [16]);
   this.setPrompt("PROMPT_PESSOAID", [58]);
   this.setPrompt("PROMPT_USUARIOID", [68]);
   this.setPrompt("PROMPT_TRNENTRADA1", [87]);
   this.setPrompt("PROMPT_TRNENTRADA2", [89]);
   this.setPrompt("PROMPT_TRNENTRADA3", [91]);
   this.setPrompt("PROMPT_TRNENTRADA4", [93]);
   this.setPrompt("PROMPT_TRNENTRADA5", [95]);
   this.setPrompt("PROMPT_TRNSAIDA1", [103]);
   this.setPrompt("PROMPT_TRNSAIDA2", [105]);
   this.setPrompt("PROMPT_TRNSAIDA3", [107]);
   this.setPrompt("PROMPT_TRNSAIDA4", [109]);
   this.setPrompt("PROMPT_TRNSAIDA5", [111]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A4313SaidaDataHoraAlt", "SAIDADATAHORAALT", 0, "dtime");
   this.setVCMap("A4820EntradaDataHoraAlt", "ENTRADADATAHORAALT", 0, "dtime");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexcluirmovimentacao());
