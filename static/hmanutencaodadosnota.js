/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:1:23.81
*/
gx.evt.autoSkip = false;
gx.define('hmanutencaodadosnota', false, function () {
   this.ServerClass =  "hmanutencaodadosnota" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Saidaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
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
   this.Validv_Entradaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradafilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradafornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaidaux=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAIDAUX");
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
      if ( this.AV24TpTela == 3 )
      {
         this.AV24TpTela = gx.num.trunc( 2 ,0) ;
         if ( this.AV43TpNota == "E" )
         {
            gx.fn.usrSetFocus("vENTRADAID") ;
         }
         else
         {
            gx.fn.usrSetFocus("vSAIDAID") ;
         }
      }
      else
      {
         if ( this.AV24TpTela == 2 )
         {
            this.AV24TpTela = gx.num.trunc( 1 ,0) ;
            gx.fn.usrSetFocus("vTPNOTA") ;
            this.s132_client();
         }
      }
      this.s142_client();
   };
   this.s132_client=function()
   {
      this.AV15SaidaId = gx.num.trunc( 0 ,0) ;
      this.AV8FilialId = gx.num.trunc( 0 ,0) ;
      this.AV17SaidaNoDocumento = gx.num.trunc( 0 ,0) ;
      this.AV18SaidaSerie =  ""  ;
      this.AV33EntradaId = gx.num.trunc( 0 ,0) ;
      this.AV37EntradaSerie =  ""  ;
      this.AV36EntradaNumeroDocumento = gx.num.trunc( 0 ,0) ;
      this.AV29EntradaFilialId = gx.num.trunc( 0 ,0) ;
      this.AV31EntradaFornecedorId = gx.num.trunc( 0 ,0) ;
      this.AV30EntradaFilialNome =  ""  ;
      this.AV32EntradaFornecedorNome =  ""  ;
      this.AV9FilialNome =  ""  ;
   };
   this.s142_client=function()
   {
      if ( this.AV24TpTela == 1 )
      {
         gx.fn.setCtrlProperty("vTPNOTA","Enabled", true );
         gx.fn.setCtrlProperty("TABSAIDA","Visible", false );
         gx.fn.setCtrlProperty("TABENTRADA","Visible", false );
         gx.fn.setCtrlProperty("TABDADOS","Visible", false );
         gx.fn.setCtrlProperty("BTNCONFIRMAR","Visible", false );
         gx.fn.setCtrlProperty("BTNAVANCAR","Visible", true );
         gx.fn.setCtrlProperty("BTNCANCELAR","Visible", false );
         gx.fn.setCtrlProperty("BTNCONFIRMAR","Visible", false );
      }
      else if ( this.AV24TpTela == 2 )
      {
         gx.fn.setCtrlProperty("vTPNOTA","Enabled", false );
         gx.fn.setCtrlProperty("TABDADOS","Visible", false );
         if ( this.AV43TpNota == "E" )
         {
            gx.fn.setCtrlProperty("TABSAIDA","Visible", false );
            gx.fn.setCtrlProperty("TABENTRADA","Visible", true );
            gx.fn.setCtrlProperty("vENTRADAID","Enabled", true );
            gx.fn.setCtrlProperty("vENTRADAFILIALID","Enabled", true );
            gx.fn.setCtrlProperty("vENTRADANUMERODOCUMENTO","Enabled", true );
            gx.fn.setCtrlProperty("vENTRADASERIE","Enabled", true );
            gx.fn.setCtrlProperty("vENTRADAFORNECEDORID","Enabled", true );
         }
         else
         {
            gx.fn.setCtrlProperty("TABSAIDA","Visible", true );
            gx.fn.setCtrlProperty("TABENTRADA","Visible", false );
            gx.fn.setCtrlProperty("vSAIDAID","Enabled", true );
            gx.fn.setCtrlProperty("vFILIALID","Enabled", true );
            gx.fn.setCtrlProperty("vSAIDANODOCUMENTO","Enabled", true );
            gx.fn.setCtrlProperty("vSAIDASERIE","Enabled", true );
         }
         gx.fn.setCtrlProperty("BTNAVANCAR","Visible", true );
         gx.fn.setCtrlProperty("BTNCANCELAR","Visible", true );
         gx.fn.setCtrlProperty("BTNCONFIRMAR","Visible", false );
      }
      else if ( this.AV24TpTela == 3 )
      {
         gx.fn.setCtrlProperty("vTPNOTA","Enabled", false );
         gx.fn.setCtrlProperty("vENTRADAID","Enabled", false );
         gx.fn.setCtrlProperty("vENTRADAFILIALID","Enabled", false );
         gx.fn.setCtrlProperty("vENTRADANUMERODOCUMENTO","Enabled", false );
         gx.fn.setCtrlProperty("vENTRADASERIE","Enabled", false );
         gx.fn.setCtrlProperty("vENTRADAFORNECEDORID","Enabled", false );
         gx.fn.setCtrlProperty("vSAIDAID","Enabled", false );
         gx.fn.setCtrlProperty("vFILIALID","Enabled", false );
         gx.fn.setCtrlProperty("vSAIDANODOCUMENTO","Enabled", false );
         gx.fn.setCtrlProperty("vSAIDASERIE","Enabled", false );
         gx.fn.setCtrlProperty("TABDADOS","Visible", true );
         if ( this.AV43TpNota == "E" )
         {
            gx.fn.setCtrlProperty("TABSAIDA","Visible", false );
            gx.fn.setCtrlProperty("TABENTRADA","Visible", true );
         }
         else
         {
            gx.fn.setCtrlProperty("TABSAIDA","Visible", true );
            gx.fn.setCtrlProperty("TABENTRADA","Visible", false );
         }
         if ( (0==this.AV45NoDocumentoEntSai) )
         {
            gx.fn.setCtrlProperty("vNODOCUMENTOATU","Visible", true );
            gx.fn.setCtrlProperty("TXTNODOCMTO","Visible", true );
         }
         else
         {
            gx.fn.setCtrlProperty("vNODOCUMENTOATU","Visible", false );
            gx.fn.setCtrlProperty("TXTNODOCMTO","Visible", false );
         }
         gx.fn.setCtrlProperty("BTNAVANCAR","Visible", false );
         gx.fn.setCtrlProperty("BTNCANCELAR","Visible", true );
         gx.fn.setCtrlProperty("BTNCONFIRMAR","Visible", true );
      }
   };
   this.e1128r2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1328r2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1528r2_client=function()
   {
      this.executeServerEvent("VFILIALID.ISVALID", true, null, false, true);
   };
   this.e1628r2_client=function()
   {
      this.executeServerEvent("VENTRADAFORNECEDORID.ISVALID", true, null, false, true);
   };
   this.e1728r2_client=function()
   {
      this.executeServerEvent("VENTRADAFILIALID.ISVALID", true, null, false, true);
   };
   this.e1928r2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e2028r2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,24,27,30,32,35,37,38,41,43,46,48,51,54,57,59,62,64,65,68,70,73,75,78,80,81,86,89,91,94,96,99,101,104,106,113,114,115,116,119,120,121,122,124,125,126];
   this.GXLastCtrlId =126;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLEBORDER",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TABTIPONOTA",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPNOTA",gxz:"ZV43TpNota",gxold:"OV43TpNota",gxvar:"AV43TpNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV43TpNota=Value},v2z:function(Value){gx.O.ZV43TpNota=Value},v2c:function(){gx.fn.setComboBoxValue("vTPNOTA",gx.O.AV43TpNota)},c2v:function(){gx.O.AV43TpNota=this.val()},val:function(){return gx.fn.getControlValue("vTPNOTA")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABSAIDA",grid:0};
   GXValidFnc[27]={fld:"TABLE2",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidaid,isvalid:null,rgrid:[],fld:"vSAIDAID",gxz:"ZV15SaidaId",gxold:"OV15SaidaId",gxvar:"AV15SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV15SaidaId,0)},c2v:function(){gx.O.AV15SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:'e1528r2_client',rgrid:[],fld:"vFILIALID",gxz:"ZV8FilialId",gxold:"OV8FilialId",gxvar:"AV8FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV8FilialId,0)},c2v:function(){gx.O.AV8FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV9FilialNome",gxold:"OV9FilialNome",gxvar:"AV9FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9FilialNome=Value},v2z:function(Value){gx.O.ZV9FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV9FilialNome,0)},c2v:function(){gx.O.AV9FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASERIE",gxz:"ZV18SaidaSerie",gxold:"OV18SaidaSerie",gxvar:"AV18SaidaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18SaidaSerie=Value},v2z:function(Value){gx.O.ZV18SaidaSerie=Value},v2c:function(){gx.fn.setControlValue("vSAIDASERIE",gx.O.AV18SaidaSerie,0)},c2v:function(){gx.O.AV18SaidaSerie=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASERIE")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV17SaidaNoDocumento",gxold:"OV17SaidaNoDocumento",gxvar:"AV17SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17SaidaNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV17SaidaNoDocumento,0)},c2v:function(){gx.O.AV17SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABENTRADA",grid:0};
   GXValidFnc[54]={fld:"TABLE1",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaid,isvalid:null,rgrid:[],fld:"vENTRADAID",gxz:"ZV33EntradaId",gxold:"OV33EntradaId",gxvar:"AV33EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33EntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAID",gx.O.AV33EntradaId,0)},c2v:function(){gx.O.AV33EntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradafilialid,isvalid:'e1728r2_client',rgrid:[],fld:"vENTRADAFILIALID",gxz:"ZV29EntradaFilialId",gxold:"OV29EntradaFilialId",gxvar:"AV29EntradaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EntradaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29EntradaFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAFILIALID",gx.O.AV29EntradaFilialId,0)},c2v:function(){gx.O.AV29EntradaFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFILIALNOME",gxz:"ZV30EntradaFilialNome",gxold:"OV30EntradaFilialNome",gxvar:"AV30EntradaFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EntradaFilialNome=Value},v2z:function(Value){gx.O.ZV30EntradaFilialNome=Value},v2c:function(){gx.fn.setControlValue("vENTRADAFILIALNOME",gx.O.AV30EntradaFilialNome,0)},c2v:function(){gx.O.AV30EntradaFilialNome=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASERIE",gxz:"ZV37EntradaSerie",gxold:"OV37EntradaSerie",gxvar:"AV37EntradaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37EntradaSerie=Value},v2z:function(Value){gx.O.ZV37EntradaSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADASERIE",gx.O.AV37EntradaSerie,0)},c2v:function(){gx.O.AV37EntradaSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASERIE")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADANUMERODOCUMENTO",gxz:"ZV36EntradaNumeroDocumento",gxold:"OV36EntradaNumeroDocumento",gxvar:"AV36EntradaNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36EntradaNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36EntradaNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADANUMERODOCUMENTO",gx.O.AV36EntradaNumeroDocumento,0)},c2v:function(){gx.O.AV36EntradaNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADANUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradafornecedorid,isvalid:'e1628r2_client',rgrid:[],fld:"vENTRADAFORNECEDORID",gxz:"ZV31EntradaFornecedorId",gxold:"OV31EntradaFornecedorId",gxvar:"AV31EntradaFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EntradaFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31EntradaFornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAFORNECEDORID",gx.O.AV31EntradaFornecedorId,0)},c2v:function(){gx.O.AV31EntradaFornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDORNOME",gxz:"ZV32EntradaFornecedorNome",gxold:"OV32EntradaFornecedorNome",gxvar:"AV32EntradaFornecedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32EntradaFornecedorNome=Value},v2z:function(Value){gx.O.ZV32EntradaFornecedorNome=Value},v2c:function(){gx.fn.setControlValue("vENTRADAFORNECEDORNOME",gx.O.AV32EntradaFornecedorNome,0)},c2v:function(){gx.O.AV32EntradaFornecedorNome=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFORNECEDORNOME")},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TABDADOS",grid:0};
   GXValidFnc[89]={fld:"TXTNODOCMTO", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNODOCUMENTOATU",gxz:"ZV44NoDocumentoAtu",gxold:"OV44NoDocumentoAtu",gxvar:"AV44NoDocumentoAtu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44NoDocumentoAtu=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44NoDocumentoAtu=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNODOCUMENTOATU",gx.O.AV44NoDocumentoAtu,0)},c2v:function(){gx.O.AV44NoDocumentoAtu=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNODOCUMENTOATU",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOCHAVENFE",gxz:"ZV39NoChaveNFE",gxold:"OV39NoChaveNFE",gxvar:"AV39NoChaveNFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39NoChaveNFE=Value},v2z:function(Value){gx.O.ZV39NoChaveNFE=Value},v2c:function(){gx.fn.setControlValue("vNOCHAVENFE",gx.O.AV39NoChaveNFE,0)},c2v:function(){gx.O.AV39NoChaveNFE=this.val()},val:function(){return gx.fn.getControlValue("vNOCHAVENFE")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASTATUSNFE",gxz:"ZV20SaidaStatusNFE",gxold:"OV20SaidaStatusNFE",gxvar:"AV20SaidaStatusNFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20SaidaStatusNFE=Value},v2z:function(Value){gx.O.ZV20SaidaStatusNFE=Value},v2c:function(){gx.fn.setComboBoxValue("vSAIDASTATUSNFE",gx.O.AV20SaidaStatusNFE)},c2v:function(){gx.O.AV20SaidaStatusNFE=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASTATUSNFE")},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOGRAVACAO",gxz:"ZV42SituacaoGravacao",gxold:"OV42SituacaoGravacao",gxvar:"AV42SituacaoGravacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV42SituacaoGravacao=Value},v2z:function(Value){gx.O.ZV42SituacaoGravacao=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOGRAVACAO",gx.O.AV42SituacaoGravacao)},c2v:function(){gx.O.AV42SituacaoGravacao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOGRAVACAO")},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAIDAUX",gxz:"ZV26SaidaIdAux",gxold:"OV26SaidaIdAux",gxvar:"AV26SaidaIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26SaidaIdAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26SaidaIdAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAIDAUX",gx.O.AV26SaidaIdAux,0)},c2v:function(){gx.O.AV26SaidaIdAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAIDAUX",'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV24TpTela",gxold:"OV24TpTela",gxvar:"AV24TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TpTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24TpTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV24TpTela,0)},c2v:function(){gx.O.AV24TpTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPTELA",'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV14ProcessoId",gxold:"OV14ProcessoId",gxvar:"AV14ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV14ProcessoId,0)},c2v:function(){gx.O.AV14ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV5AcessoSistemaSequencia",gxold:"OV5AcessoSistemaSequencia",gxvar:"AV5AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV5AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV41Sim",gxold:"OV41Sim",gxvar:"AV41Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Sim=Value},v2z:function(Value){gx.O.ZV41Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV41Sim,0)},c2v:function(){gx.O.AV41Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV38Nao",gxold:"OV38Nao",gxvar:"AV38Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38Nao=Value},v2z:function(Value){gx.O.ZV38Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV38Nao,0)},c2v:function(){gx.O.AV38Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[121]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaidaux,isvalid:null,rgrid:[],fld:"vENTRADAIDAUX",gxz:"ZV34EntradaIdAux",gxold:"OV34EntradaIdAux",gxvar:"AV34EntradaIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34EntradaIdAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34EntradaIdAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAIDAUX",gx.O.AV34EntradaIdAux,0)},c2v:function(){gx.O.AV34EntradaIdAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAIDAUX",'.')},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNODOCUMENTOENTSAI",gxz:"ZV45NoDocumentoEntSai",gxold:"OV45NoDocumentoEntSai",gxvar:"AV45NoDocumentoEntSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45NoDocumentoEntSai=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45NoDocumentoEntSai=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNODOCUMENTOENTSAI",gx.O.AV45NoDocumentoEntSai,0)},c2v:function(){gx.O.AV45NoDocumentoEntSai=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNODOCUMENTOENTSAI",'.')},nac:gx.falseFn};
   GXValidFnc[124]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[125]={fld:"PROMPT_ENTRADAFILIALID",grid:0};
   GXValidFnc[126]={fld:"PROMPT_ENTRADAFORNECEDORID",grid:0};
   this.AV43TpNota = "" ;
   this.ZV43TpNota = "" ;
   this.OV43TpNota = "" ;
   this.AV15SaidaId = 0 ;
   this.ZV15SaidaId = 0 ;
   this.OV15SaidaId = 0 ;
   this.AV8FilialId = 0 ;
   this.ZV8FilialId = 0 ;
   this.OV8FilialId = 0 ;
   this.AV9FilialNome = "" ;
   this.ZV9FilialNome = "" ;
   this.OV9FilialNome = "" ;
   this.AV18SaidaSerie = "" ;
   this.ZV18SaidaSerie = "" ;
   this.OV18SaidaSerie = "" ;
   this.AV17SaidaNoDocumento = 0 ;
   this.ZV17SaidaNoDocumento = 0 ;
   this.OV17SaidaNoDocumento = 0 ;
   this.AV33EntradaId = 0 ;
   this.ZV33EntradaId = 0 ;
   this.OV33EntradaId = 0 ;
   this.AV29EntradaFilialId = 0 ;
   this.ZV29EntradaFilialId = 0 ;
   this.OV29EntradaFilialId = 0 ;
   this.AV30EntradaFilialNome = "" ;
   this.ZV30EntradaFilialNome = "" ;
   this.OV30EntradaFilialNome = "" ;
   this.AV37EntradaSerie = "" ;
   this.ZV37EntradaSerie = "" ;
   this.OV37EntradaSerie = "" ;
   this.AV36EntradaNumeroDocumento = 0 ;
   this.ZV36EntradaNumeroDocumento = 0 ;
   this.OV36EntradaNumeroDocumento = 0 ;
   this.AV31EntradaFornecedorId = 0 ;
   this.ZV31EntradaFornecedorId = 0 ;
   this.OV31EntradaFornecedorId = 0 ;
   this.AV32EntradaFornecedorNome = "" ;
   this.ZV32EntradaFornecedorNome = "" ;
   this.OV32EntradaFornecedorNome = "" ;
   this.AV44NoDocumentoAtu = 0 ;
   this.ZV44NoDocumentoAtu = 0 ;
   this.OV44NoDocumentoAtu = 0 ;
   this.AV39NoChaveNFE = "" ;
   this.ZV39NoChaveNFE = "" ;
   this.OV39NoChaveNFE = "" ;
   this.AV20SaidaStatusNFE = "" ;
   this.ZV20SaidaStatusNFE = "" ;
   this.OV20SaidaStatusNFE = "" ;
   this.AV42SituacaoGravacao = "" ;
   this.ZV42SituacaoGravacao = "" ;
   this.OV42SituacaoGravacao = "" ;
   this.AV26SaidaIdAux = 0 ;
   this.ZV26SaidaIdAux = 0 ;
   this.OV26SaidaIdAux = 0 ;
   this.AV24TpTela = 0 ;
   this.ZV24TpTela = 0 ;
   this.OV24TpTela = 0 ;
   this.AV14ProcessoId = 0 ;
   this.ZV14ProcessoId = 0 ;
   this.OV14ProcessoId = 0 ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.ZV5AcessoSistemaSequencia = 0 ;
   this.OV5AcessoSistemaSequencia = 0 ;
   this.AV41Sim = "" ;
   this.ZV41Sim = "" ;
   this.OV41Sim = "" ;
   this.AV38Nao = "" ;
   this.ZV38Nao = "" ;
   this.OV38Nao = "" ;
   this.AV34EntradaIdAux = 0 ;
   this.ZV34EntradaIdAux = 0 ;
   this.OV34EntradaIdAux = 0 ;
   this.AV45NoDocumentoEntSai = 0 ;
   this.ZV45NoDocumentoEntSai = 0 ;
   this.OV45NoDocumentoEntSai = 0 ;
   this.AV43TpNota = "" ;
   this.AV15SaidaId = 0 ;
   this.AV8FilialId = 0 ;
   this.AV9FilialNome = "" ;
   this.AV18SaidaSerie = "" ;
   this.AV17SaidaNoDocumento = 0 ;
   this.AV33EntradaId = 0 ;
   this.AV29EntradaFilialId = 0 ;
   this.AV30EntradaFilialNome = "" ;
   this.AV37EntradaSerie = "" ;
   this.AV36EntradaNumeroDocumento = 0 ;
   this.AV31EntradaFornecedorId = 0 ;
   this.AV32EntradaFornecedorNome = "" ;
   this.AV44NoDocumentoAtu = 0 ;
   this.AV39NoChaveNFE = "" ;
   this.AV20SaidaStatusNFE = "" ;
   this.AV42SituacaoGravacao = "" ;
   this.AV26SaidaIdAux = 0 ;
   this.AV24TpTela = 0 ;
   this.AV14ProcessoId = 0 ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.AV41Sim = "" ;
   this.AV38Nao = "" ;
   this.AV34EntradaIdAux = 0 ;
   this.AV45NoDocumentoEntSai = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A6333SaidaEntradaTerId = 0 ;
   this.A6332SaidaEntradaTerEmpId = "" ;
   this.A6053SaidaStatusNFE = "" ;
   this.A4643EntradaFornecedorId = 0 ;
   this.A4646EntradaNumeroDocumento = 0 ;
   this.A4660EntradaFilialId = 0 ;
   this.A4659EntradaFilialEmpId = "" ;
   this.A4647EntradaSerie = "" ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4649EntradaChaveNFE = "" ;
   this.A5257EntradaSituacaoGravacao = "" ;
   this.A4638EntradaId = 0 ;
   this.A5501EntradaTipoEmissao = "" ;
   this.A5960SaidaNoDocumento = 0 ;
   this.A5962SaidaSerie = "" ;
   this.A5971SaidaFilialId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A6050SaidaNoChaveNFE = "" ;
   this.A5958SaidaSituacaoGravacao = "" ;
   this.A4307SaidaId = 0 ;
   this.Events = {"e1128r2_client": ["'FECHAR'", true] ,"e1328r2_client": ["ENTER", true] ,"e1528r2_client": ["VFILIALID.ISVALID", true] ,"e1628r2_client": ["VENTRADAFORNECEDORID.ISVALID", true] ,"e1728r2_client": ["VENTRADAFILIALID.ISVALID", true] ,"e1928r2_client": ["'CANCELAR'", true] ,"e2028r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV24TpTela',fld:'vTPTELA'},{av:'AV43TpNota',fld:'vTPNOTA'},{av:'AV45NoDocumentoEntSai',fld:'vNODOCUMENTOENTSAI'}],[{ctrl:'vTPNOTA'},{av:'gx.fn.getCtrlProperty("TABSAIDA","Visible")',ctrl:'TABSAIDA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABENTRADA","Visible")',ctrl:'TABENTRADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDADOS","Visible")',ctrl:'TABDADOS',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAID","Enabled")',ctrl:'vENTRADAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAFILIALID","Enabled")',ctrl:'vENTRADAFILIALID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADANUMERODOCUMENTO","Enabled")',ctrl:'vENTRADANUMERODOCUMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADASERIE","Enabled")',ctrl:'vENTRADASERIE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAFORNECEDORID","Enabled")',ctrl:'vENTRADAFORNECEDORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDAID","Enabled")',ctrl:'vSAIDAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDANODOCUMENTO","Enabled")',ctrl:'vSAIDANODOCUMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDASERIE","Enabled")',ctrl:'vSAIDASERIE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNODOCUMENTOATU","Visible")',ctrl:'vNODOCUMENTOATU',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTNODOCMTO","Visible")',ctrl:'TXTNODOCMTO',prop:'Visible'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV5AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV22SnErro',fld:'vSNERRO'},{av:'AV24TpTela',fld:'vTPTELA'},{av:'AV43TpNota',fld:'vTPNOTA'},{av:'AV26SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV34EntradaIdAux',fld:'vENTRADAIDAUX'},{av:'AV39NoChaveNFE',fld:'vNOCHAVENFE'},{av:'AV42SituacaoGravacao',fld:'vSITUACAOGRAVACAO'},{av:'AV20SaidaStatusNFE',fld:'vSAIDASTATUSNFE'},{av:'AV44NoDocumentoAtu',fld:'vNODOCUMENTOATU'},{av:'AV33EntradaId',fld:'vENTRADAID'},{av:'AV15SaidaId',fld:'vSAIDAID'},{av:'AV17SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV8FilialId',fld:'vFILIALID'},{av:'AV18SaidaSerie',fld:'vSAIDASERIE'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'A5960SaidaNoDocumento',fld:'SAIDANODOCUMENTO'},{av:'A6050SaidaNoChaveNFE',fld:'SAIDANOCHAVENFE'},{av:'A6053SaidaStatusNFE',fld:'SAIDASTATUSNFE'},{av:'A5958SaidaSituacaoGravacao',fld:'SAIDASITUACAOGRAVACAO'},{av:'A5971SaidaFilialId',fld:'SAIDAFILIALID'},{av:'A5962SaidaSerie',fld:'SAIDASERIE'},{av:'AV36EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV29EntradaFilialId',fld:'vENTRADAFILIALID'},{av:'AV37EntradaSerie',fld:'vENTRADASERIE'},{av:'AV31EntradaFornecedorId',fld:'vENTRADAFORNECEDORID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV28EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A5501EntradaTipoEmissao',fld:'ENTRADATIPOEMISSAO'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'A4649EntradaChaveNFE',fld:'ENTRADACHAVENFE'},{av:'A5257EntradaSituacaoGravacao',fld:'ENTRADASITUACAOGRAVACAO'},{av:'A6332SaidaEntradaTerEmpId',fld:'SAIDAENTRADATEREMPID'},{av:'A6333SaidaEntradaTerId',fld:'SAIDAENTRADATERID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV27FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV40PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'AV46EntradaTipoEmissao',fld:'vENTRADATIPOEMISSAO'},{av:'AV45NoDocumentoEntSai',fld:'vNODOCUMENTOENTSAI'}],[{av:'AV44NoDocumentoAtu',fld:'vNODOCUMENTOATU'},{av:'AV20SaidaStatusNFE',fld:'vSAIDASTATUSNFE'},{av:'AV42SituacaoGravacao',fld:'vSITUACAOGRAVACAO'},{av:'AV39NoChaveNFE',fld:'vNOCHAVENFE'},{av:'AV34EntradaIdAux',fld:'vENTRADAIDAUX'},{av:'AV26SaidaIdAux',fld:'vSAIDAIDAUX'},{av:'AV24TpTela',fld:'vTPTELA'},{av:'AV22SnErro',fld:'vSNERRO'},{av:'AV51GXLvl115',fld:'vGXLVL115'},{av:'AV45NoDocumentoEntSai',fld:'vNODOCUMENTOENTSAI'},{av:'AV52GXLvl145',fld:'vGXLVL145'},{av:'AV53GXLvl205',fld:'vGXLVL205'},{av:'AV46EntradaTipoEmissao',fld:'vENTRADATIPOEMISSAO'},{av:'AV55GXLvl234',fld:'vGXLVL234'},{av:'AV56GXLvl255',fld:'vGXLVL255'},{av:'AV57GXLvl268',fld:'vGXLVL268'},{av:'AV15SaidaId',fld:'vSAIDAID'},{av:'AV8FilialId',fld:'vFILIALID'},{av:'AV17SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV18SaidaSerie',fld:'vSAIDASERIE'},{av:'AV33EntradaId',fld:'vENTRADAID'},{av:'AV37EntradaSerie',fld:'vENTRADASERIE'},{av:'AV36EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV29EntradaFilialId',fld:'vENTRADAFILIALID'},{av:'AV31EntradaFornecedorId',fld:'vENTRADAFORNECEDORID'},{av:'AV30EntradaFilialNome',fld:'vENTRADAFILIALNOME'},{av:'AV32EntradaFornecedorNome',fld:'vENTRADAFORNECEDORNOME'},{av:'AV9FilialNome',fld:'vFILIALNOME'},{ctrl:'vTPNOTA'},{av:'gx.fn.getCtrlProperty("TABSAIDA","Visible")',ctrl:'TABSAIDA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABENTRADA","Visible")',ctrl:'TABENTRADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDADOS","Visible")',ctrl:'TABDADOS',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAID","Enabled")',ctrl:'vENTRADAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAFILIALID","Enabled")',ctrl:'vENTRADAFILIALID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADANUMERODOCUMENTO","Enabled")',ctrl:'vENTRADANUMERODOCUMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADASERIE","Enabled")',ctrl:'vENTRADASERIE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAFORNECEDORID","Enabled")',ctrl:'vENTRADAFORNECEDORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDAID","Enabled")',ctrl:'vSAIDAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDANODOCUMENTO","Enabled")',ctrl:'vSAIDANODOCUMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDASERIE","Enabled")',ctrl:'vSAIDASERIE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNODOCUMENTOATU","Visible")',ctrl:'vNODOCUMENTOATU',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTNODOCMTO","Visible")',ctrl:'TXTNODOCMTO',prop:'Visible'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV24TpTela',fld:'vTPTELA'},{av:'AV43TpNota',fld:'vTPNOTA'},{av:'AV33EntradaId',fld:'vENTRADAID'},{av:'AV15SaidaId',fld:'vSAIDAID'},{av:'AV45NoDocumentoEntSai',fld:'vNODOCUMENTOENTSAI'}],[{av:'AV24TpTela',fld:'vTPTELA'},{av:'AV15SaidaId',fld:'vSAIDAID'},{av:'AV8FilialId',fld:'vFILIALID'},{av:'AV17SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV18SaidaSerie',fld:'vSAIDASERIE'},{av:'AV33EntradaId',fld:'vENTRADAID'},{av:'AV37EntradaSerie',fld:'vENTRADASERIE'},{av:'AV36EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV29EntradaFilialId',fld:'vENTRADAFILIALID'},{av:'AV31EntradaFornecedorId',fld:'vENTRADAFORNECEDORID'},{av:'AV30EntradaFilialNome',fld:'vENTRADAFILIALNOME'},{av:'AV32EntradaFornecedorNome',fld:'vENTRADAFORNECEDORNOME'},{av:'AV9FilialNome',fld:'vFILIALNOME'},{ctrl:'vTPNOTA'},{av:'gx.fn.getCtrlProperty("TABSAIDA","Visible")',ctrl:'TABSAIDA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABENTRADA","Visible")',ctrl:'TABENTRADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDADOS","Visible")',ctrl:'TABDADOS',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAID","Enabled")',ctrl:'vENTRADAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAFILIALID","Enabled")',ctrl:'vENTRADAFILIALID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADANUMERODOCUMENTO","Enabled")',ctrl:'vENTRADANUMERODOCUMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADASERIE","Enabled")',ctrl:'vENTRADASERIE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAFORNECEDORID","Enabled")',ctrl:'vENTRADAFORNECEDORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDAID","Enabled")',ctrl:'vSAIDAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDANODOCUMENTO","Enabled")',ctrl:'vSAIDANODOCUMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDASERIE","Enabled")',ctrl:'vSAIDASERIE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNODOCUMENTOATU","Visible")',ctrl:'vNODOCUMENTOATU',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTNODOCMTO","Visible")',ctrl:'TXTNODOCMTO',prop:'Visible'}]];
   this.EvtParms["VFILIALID.ISVALID"] = [[{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV60Udparg1',fld:'vUDPARG1'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV8FilialId',fld:'vFILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV9FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["VENTRADAFORNECEDORID.ISVALID"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV40PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV31EntradaFornecedorId',fld:'vENTRADAFORNECEDORID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[{av:'AV32EntradaFornecedorNome',fld:'vENTRADAFORNECEDORNOME'}]];
   this.EvtParms["VENTRADAFILIALID.ISVALID"] = [[{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV27FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV29EntradaFilialId',fld:'vENTRADAFILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV30EntradaFilialNome',fld:'vENTRADAFILIALNOME'}]];
   this.setPrompt("PROMPT_FILIALID", [37]);
   this.setPrompt("PROMPT_ENTRADAFILIALID", [64]);
   this.setPrompt("PROMPT_ENTRADAFORNECEDORID", [80]);
   this.EnterCtrl = ["BTNAVANCAR" ,"BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmanutencaodadosnota());
