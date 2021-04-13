/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:34:24.38
*/
gx.evt.autoSkip = false;
gx.define('tusuarioforcavenda', false, function () {
   this.ServerClass =  "tusuarioforcavenda" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV20UsuarioFvId=gx.fn.getControlValue("vUSUARIOFVID") ;
      this.A10654UsuarioFVEmpresaId=gx.fn.getControlValue("USUARIOFVEMPRESAID") ;
      this.AV21UsuarioFvNome=gx.fn.getControlValue("vUSUARIOFVNOME") ;
      this.AV31ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.A10657UsuarioFVChave=gx.fn.getControlValue("USUARIOFVCHAVE") ;
      this.A10621UsuarioFVSenha=gx.fn.getControlValue("USUARIOFVSENHA") ;
      this.AV34Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV7isPrompt=gx.fn.getControlValue("vISPROMPT") ;
   };
   this.Valid_Usuariofvid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuariofvid",["gx.O.A10620UsuarioFVId", "gx.O.AV21UsuarioFvNome"],["AV21UsuarioFvNome"]);
      return true;
   }
   this.Valid_Usuariofvnome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("USUARIOFVNOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Usuariofvipservico=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("USUARIOFVIPSERVICO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Usuariofvvendedorid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuariofvvendedorid",["gx.O.AV10EmpresaPadrao", "gx.O.A10660UsuarioFVVendedorId", "gx.O.AV24Vendedornome"],["AV24Vendedornome"]);
      return true;
   }
   this.Valid_Usuariofvfilialid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuariofvfilialid",["gx.O.AV10EmpresaPadrao", "gx.O.A10661UsuarioFVFilialId", "gx.O.AV25FilialNome"],["AV25FilialNome"]);
      return true;
   }
   this.Validv_Usuariofvsenha=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOFVSENHA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Usuariofvsnaltpreco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("USUARIOFVSNALTPRECO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Usuariofvsndesconto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("USUARIOFVSNDESCONTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Usuarioprecopadrao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuarioprecopadrao",["gx.O.A10620UsuarioFVId", "gx.O.A10658UsuarioFVNome", "gx.O.A10656UsuarioFVIpServico", "gx.O.A10660UsuarioFVVendedorId", "gx.O.A10661UsuarioFVFilialId", "gx.O.AV32UsuarioFvSenha", "gx.O.A11053UsuarioPrecoPadrao", "gx.O.A11149UsuarioFvSnAltPreco", "gx.O.A11150UsuarioFvSnDesconto", "gx.O.AV31ret"],["AV31ret"]);
      return true;
   }
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
   this.e12ff2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ff788_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14ff788_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,20,22,27,29,34,36,41,43,44,49,51,52,57,59,64,66,71,73,78,80,85,87,92,94,97,100,103,105,107,109,112,114,116,118,121,123,125,127,130,132,134,136,139,141,146,148,149,154,156,157,162,164,176,177,178,179,181,183,184,185];
   this.GXLastCtrlId =185;
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV29Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV29Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV29Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tusuarioforcavenda_tabcss_1", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariofvid,isvalid:null,rgrid:[],fld:"USUARIOFVID",gxz:"Z10620UsuarioFVId",gxold:"O10620UsuarioFVId",gxvar:"A10620UsuarioFVId",ucs:[],op:[],ip:[15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10620UsuarioFVId=Value},v2z:function(Value){gx.O.Z10620UsuarioFVId=Value},v2c:function(){gx.fn.setControlValue("USUARIOFVID",gx.O.A10620UsuarioFVId,0)},c2v:function(){gx.O.A10620UsuarioFVId=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFVID")},nac:function(){return !(""==this.AV20UsuarioFvId)}};
   GXValidFnc[20]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariofvnome,isvalid:null,rgrid:[],fld:"USUARIOFVNOME",gxz:"Z10658UsuarioFVNome",gxold:"O10658UsuarioFVNome",gxvar:"A10658UsuarioFVNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10658UsuarioFVNome=Value},v2z:function(Value){gx.O.Z10658UsuarioFVNome=Value},v2c:function(){gx.fn.setControlValue("USUARIOFVNOME",gx.O.A10658UsuarioFVNome,0)},c2v:function(){gx.O.A10658UsuarioFVNome=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFVNOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:36,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVEMPRESAGUID",gxz:"Z10655UsuarioFVEmpresaGuid",gxold:"O10655UsuarioFVEmpresaGuid",gxvar:"A10655UsuarioFVEmpresaGuid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10655UsuarioFVEmpresaGuid=Value},v2z:function(Value){gx.O.Z10655UsuarioFVEmpresaGuid=Value},v2c:function(){gx.fn.setControlValue("USUARIOFVEMPRESAGUID",gx.O.A10655UsuarioFVEmpresaGuid,0)},c2v:function(){gx.O.A10655UsuarioFVEmpresaGuid=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFVEMPRESAGUID")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:250,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariofvipservico,isvalid:null,rgrid:[],fld:"USUARIOFVIPSERVICO",gxz:"Z10656UsuarioFVIpServico",gxold:"O10656UsuarioFVIpServico",gxvar:"A10656UsuarioFVIpServico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10656UsuarioFVIpServico=Value},v2z:function(Value){gx.O.Z10656UsuarioFVIpServico=Value},v2c:function(){gx.fn.setControlValue("USUARIOFVIPSERVICO",gx.O.A10656UsuarioFVIpServico,0)},c2v:function(){gx.O.A10656UsuarioFVIpServico=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFVIPSERVICO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariofvvendedorid,isvalid:null,rgrid:[],fld:"USUARIOFVVENDEDORID",gxz:"Z10660UsuarioFVVendedorId",gxold:"O10660UsuarioFVVendedorId",gxvar:"A10660UsuarioFVVendedorId",ucs:[],op:[44],ip:[44,43,178],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10660UsuarioFVVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10660UsuarioFVVendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFVVENDEDORID",gx.O.A10660UsuarioFVVendedorId,0)},c2v:function(){gx.O.A10660UsuarioFVVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOFVVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV24Vendedornome",gxold:"OV24Vendedornome",gxvar:"AV24Vendedornome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Vendedornome=Value},v2z:function(Value){gx.O.ZV24Vendedornome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV24Vendedornome,0)},c2v:function(){gx.O.AV24Vendedornome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariofvfilialid,isvalid:null,rgrid:[],fld:"USUARIOFVFILIALID",gxz:"Z10661UsuarioFVFilialId",gxold:"O10661UsuarioFVFilialId",gxvar:"A10661UsuarioFVFilialId",ucs:[],op:[52],ip:[52,51,178],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10661UsuarioFVFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10661UsuarioFVFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFVFILIALID",gx.O.A10661UsuarioFVFilialId,0)},c2v:function(){gx.O.A10661UsuarioFVFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOFVFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV25FilialNome",gxold:"OV25FilialNome",gxvar:"AV25FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25FilialNome=Value},v2z:function(Value){gx.O.ZV25FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV25FilialNome,0)},c2v:function(){gx.O.AV25FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVEMAIL",gxz:"Z10659UsuarioFVEmail",gxold:"O10659UsuarioFVEmail",gxvar:"A10659UsuarioFVEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10659UsuarioFVEmail=Value},v2z:function(Value){gx.O.Z10659UsuarioFVEmail=Value},v2c:function(){gx.fn.setControlValue("USUARIOFVEMAIL",gx.O.A10659UsuarioFVEmail,0)},c2v:function(){gx.O.A10659UsuarioFVEmail=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFVEMAIL")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:32,dec:0,sign:false,isPwd:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Usuariofvsenha,isvalid:null,rgrid:[],fld:"vUSUARIOFVSENHA",gxz:"ZV32UsuarioFvSenha",gxold:"OV32UsuarioFvSenha",gxvar:"AV32UsuarioFvSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32UsuarioFvSenha=Value},v2z:function(Value){gx.O.ZV32UsuarioFvSenha=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOFVSENHA",gx.O.AV32UsuarioFvSenha,0)},c2v:function(){gx.O.AV32UsuarioFvSenha=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOFVSENHA")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVQTDDIASCONFERENCIA",gxz:"Z10664UsuarioFVQtdDiasConferencia",gxold:"O10664UsuarioFVQtdDiasConferencia",gxvar:"A10664UsuarioFVQtdDiasConferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10664UsuarioFVQtdDiasConferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10664UsuarioFVQtdDiasConferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFVQTDDIASCONFERENCIA",gx.O.A10664UsuarioFVQtdDiasConferencia,0)},c2v:function(){gx.O.A10664UsuarioFVQtdDiasConferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOFVQTDDIASCONFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVULTACESSO",gxz:"Z10662UsuarioFVUltAcesso",gxold:"O10662UsuarioFVUltAcesso",gxvar:"A10662UsuarioFVUltAcesso",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10662UsuarioFVUltAcesso=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10662UsuarioFVUltAcesso=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFVULTACESSO",gx.O.A10662UsuarioFVUltAcesso,0)},c2v:function(){gx.O.A10662UsuarioFVUltAcesso=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("USUARIOFVULTACESSO")},nac:function(){return (this.Gx_mode == 'INS')}};
   GXValidFnc[85]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVULTATUALIZACAO",gxz:"Z10663UsuarioFVUltAtualizacao",gxold:"O10663UsuarioFVUltAtualizacao",gxvar:"A10663UsuarioFVUltAtualizacao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10663UsuarioFVUltAtualizacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10663UsuarioFVUltAtualizacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFVULTATUALIZACAO",gx.O.A10663UsuarioFVUltAtualizacao,0)},c2v:function(){gx.O.A10663UsuarioFVUltAtualizacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("USUARIOFVULTATUALIZACAO")},nac:function(){return (this.Gx_mode == 'INS')}};
   GXValidFnc[92]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVDATAULTVERSAO",gxz:"Z11147UsuarioFvDataUltVersao",gxold:"O11147UsuarioFvDataUltVersao",gxvar:"A11147UsuarioFvDataUltVersao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11147UsuarioFvDataUltVersao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11147UsuarioFvDataUltVersao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFVDATAULTVERSAO",gx.O.A11147UsuarioFvDataUltVersao,0)},c2v:function(){gx.O.A11147UsuarioFvDataUltVersao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("USUARIOFVDATAULTVERSAO")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TAB2",grid:0};
   GXValidFnc[100]={fld:"TABLE4",grid:0};
   GXValidFnc[103]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVTELAINICIAL",gxz:"Z10665UsuarioFVTelaInicial",gxold:"O10665UsuarioFVTelaInicial",gxvar:"A10665UsuarioFVTelaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10665UsuarioFVTelaInicial=Value},v2z:function(Value){gx.O.Z10665UsuarioFVTelaInicial=Value},v2c:function(){gx.fn.setComboBoxValue("USUARIOFVTELAINICIAL",gx.O.A10665UsuarioFVTelaInicial)},c2v:function(){gx.O.A10665UsuarioFVTelaInicial=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFVTELAINICIAL")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVQUEBRA",gxz:"Z10753UsuarioFVQuebra",gxold:"O10753UsuarioFVQuebra",gxvar:"A10753UsuarioFVQuebra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10753UsuarioFVQuebra=Value},v2z:function(Value){gx.O.Z10753UsuarioFVQuebra=Value},v2c:function(){gx.fn.setCheckBoxValue("USUARIOFVQUEBRA",gx.O.A10753UsuarioFVQuebra,"S")},c2v:function(){gx.O.A10753UsuarioFVQuebra=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFVQUEBRA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[112]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVMODELOVENDA",gxz:"Z10666UsuarioFVModeloVenda",gxold:"O10666UsuarioFVModeloVenda",gxvar:"A10666UsuarioFVModeloVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10666UsuarioFVModeloVenda=Value},v2z:function(Value){gx.O.Z10666UsuarioFVModeloVenda=Value},v2c:function(){gx.fn.setComboBoxValue("USUARIOFVMODELOVENDA",gx.O.A10666UsuarioFVModeloVenda)},c2v:function(){gx.O.A10666UsuarioFVModeloVenda=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFVMODELOVENDA")},nac:gx.falseFn};
   GXValidFnc[116]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[118]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOSNCONTROLAESTOQUE",gxz:"Z11052UsuarioSnControlaEstoque",gxold:"O11052UsuarioSnControlaEstoque",gxvar:"A11052UsuarioSnControlaEstoque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A11052UsuarioSnControlaEstoque=Value},v2z:function(Value){gx.O.Z11052UsuarioSnControlaEstoque=Value},v2c:function(){gx.fn.setCheckBoxValue("USUARIOSNCONTROLAESTOQUE",gx.O.A11052UsuarioSnControlaEstoque,"S")},c2v:function(){gx.O.A11052UsuarioSnControlaEstoque=this.val()},val:function(){return gx.fn.getControlValue("USUARIOSNCONTROLAESTOQUE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[121]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVENTREGAPADRAO",gxz:"Z10868UsuarioFVEntregaPadrao",gxold:"O10868UsuarioFVEntregaPadrao",gxvar:"A10868UsuarioFVEntregaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10868UsuarioFVEntregaPadrao=Value},v2z:function(Value){gx.O.Z10868UsuarioFVEntregaPadrao=Value},v2c:function(){gx.fn.setComboBoxValue("USUARIOFVENTREGAPADRAO",gx.O.A10868UsuarioFVEntregaPadrao)},c2v:function(){gx.O.A10868UsuarioFVEntregaPadrao=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFVENTREGAPADRAO")},nac:gx.falseFn};
   GXValidFnc[125]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[127]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariofvsnaltpreco,isvalid:null,rgrid:[],fld:"USUARIOFVSNALTPRECO",gxz:"Z11149UsuarioFvSnAltPreco",gxold:"O11149UsuarioFvSnAltPreco",gxvar:"A11149UsuarioFvSnAltPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A11149UsuarioFvSnAltPreco=Value},v2z:function(Value){gx.O.Z11149UsuarioFvSnAltPreco=Value},v2c:function(){gx.fn.setCheckBoxValue("USUARIOFVSNALTPRECO",gx.O.A11149UsuarioFvSnAltPreco,"S")},c2v:function(){gx.O.A11149UsuarioFvSnAltPreco=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFVSNALTPRECO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[130]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[132]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVQTDPADRAO",gxz:"Z10869UsuarioFVQtdPadrao",gxold:"O10869UsuarioFVQtdPadrao",gxvar:"A10869UsuarioFVQtdPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10869UsuarioFVQtdPadrao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10869UsuarioFVQtdPadrao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFVQTDPADRAO",gx.O.A10869UsuarioFVQtdPadrao,0)},c2v:function(){gx.O.A10869UsuarioFVQtdPadrao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOFVQTDPADRAO",'.')},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[136]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariofvsndesconto,isvalid:null,rgrid:[],fld:"USUARIOFVSNDESCONTO",gxz:"Z11150UsuarioFvSnDesconto",gxold:"O11150UsuarioFvSnDesconto",gxvar:"A11150UsuarioFvSnDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A11150UsuarioFvSnDesconto=Value},v2z:function(Value){gx.O.Z11150UsuarioFvSnDesconto=Value},v2c:function(){gx.fn.setCheckBoxValue("USUARIOFVSNDESCONTO",gx.O.A11150UsuarioFvSnDesconto,"S")},c2v:function(){gx.O.A11150UsuarioFvSnDesconto=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFVSNDESCONTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[139]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCASASDECIMAIS",gxz:"Z11054UsuarioCasasDecimais",gxold:"O11054UsuarioCasasDecimais",gxvar:"A11054UsuarioCasasDecimais",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11054UsuarioCasasDecimais=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11054UsuarioCasasDecimais=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOCASASDECIMAIS",gx.O.A11054UsuarioCasasDecimais,0)},c2v:function(){gx.O.A11054UsuarioCasasDecimais=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOCASASDECIMAIS",'.')},nac:gx.falseFn};
   GXValidFnc[146]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[148]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarioprecopadrao,isvalid:null,rgrid:[],fld:"USUARIOPRECOPADRAO",gxz:"Z11053UsuarioPrecoPadrao",gxold:"O11053UsuarioPrecoPadrao",gxvar:"A11053UsuarioPrecoPadrao",ucs:[],op:[],ip:[136,127,148,66,51,43,36,22,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11053UsuarioPrecoPadrao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11053UsuarioPrecoPadrao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOPRECOPADRAO",gx.O.A11053UsuarioPrecoPadrao,0)},c2v:function(){gx.O.A11053UsuarioPrecoPadrao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOPRECOPADRAO",'.')},nac:gx.falseFn};
   GXValidFnc[149]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV28PrecoDescricao",gxold:"OV28PrecoDescricao",gxvar:"AV28PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PrecoDescricao=Value},v2z:function(Value){gx.O.ZV28PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV28PrecoDescricao,0)},c2v:function(){gx.O.AV28PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[154]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[156]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVPCDESCONTO",gxz:"Z11148UsuarioFVPcDesconto",gxold:"O11148UsuarioFVPcDesconto",gxvar:"A11148UsuarioFVPcDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11148UsuarioFVPcDesconto=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11148UsuarioFVPcDesconto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFVPCDESCONTO",gx.O.A11148UsuarioFVPcDesconto,0)},c2v:function(){gx.O.A11148UsuarioFVPcDesconto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOFVPCDESCONTO",'.')},nac:gx.falseFn};
   GXValidFnc[157]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[162]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[164]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVQTDDIASEXVENDAS",gxz:"Z11146UsuarioFVQtdDiasExVendas",gxold:"O11146UsuarioFVQtdDiasExVendas",gxvar:"A11146UsuarioFVQtdDiasExVendas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11146UsuarioFVQtdDiasExVendas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11146UsuarioFVQtdDiasExVendas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFVQTDDIASEXVENDAS",gx.O.A11146UsuarioFVQtdDiasExVendas,0)},c2v:function(){gx.O.A11146UsuarioFVQtdDiasExVendas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOFVQTDDIASEXVENDAS",'.')},nac:gx.falseFn};
   GXValidFnc[176]={fld:"JS", format:2,grid:0};
   GXValidFnc[177]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV8AcessoSistemaSequencia",gxold:"OV8AcessoSistemaSequencia",gxvar:"AV8AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV8AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[178]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV10EmpresaPadrao",gxold:"OV10EmpresaPadrao",gxvar:"AV10EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV10EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV10EmpresaPadrao,0)},c2v:function(){gx.O.AV10EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[179]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFIL",gxz:"ZV26QtdeFil",gxold:"OV26QtdeFil",gxvar:"AV26QtdeFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26QtdeFil=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26QtdeFil=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEFIL",gx.O.AV26QtdeFil,0)},c2v:function(){gx.O.AV26QtdeFil=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEFIL",'.')},nac:gx.falseFn};
   GXValidFnc[181]={fld:"BTNHELP",grid:0};
   GXValidFnc[183]={fld:"PROMPT_10660",grid:788};
   GXValidFnc[184]={fld:"PROMPT_10661",grid:788};
   GXValidFnc[185]={fld:"PROMPT_11053",grid:788};
   this.A10620UsuarioFVId = "" ;
   this.Z10620UsuarioFVId = "" ;
   this.O10620UsuarioFVId = "" ;
   this.A10658UsuarioFVNome = "" ;
   this.Z10658UsuarioFVNome = "" ;
   this.O10658UsuarioFVNome = "" ;
   this.A10655UsuarioFVEmpresaGuid = "" ;
   this.Z10655UsuarioFVEmpresaGuid = "" ;
   this.O10655UsuarioFVEmpresaGuid = "" ;
   this.A10656UsuarioFVIpServico = "" ;
   this.Z10656UsuarioFVIpServico = "" ;
   this.O10656UsuarioFVIpServico = "" ;
   this.A10660UsuarioFVVendedorId = 0 ;
   this.Z10660UsuarioFVVendedorId = 0 ;
   this.O10660UsuarioFVVendedorId = 0 ;
   this.AV24Vendedornome = "" ;
   this.ZV24Vendedornome = "" ;
   this.OV24Vendedornome = "" ;
   this.A10661UsuarioFVFilialId = 0 ;
   this.Z10661UsuarioFVFilialId = 0 ;
   this.O10661UsuarioFVFilialId = 0 ;
   this.AV25FilialNome = "" ;
   this.ZV25FilialNome = "" ;
   this.OV25FilialNome = "" ;
   this.A10659UsuarioFVEmail = "" ;
   this.Z10659UsuarioFVEmail = "" ;
   this.O10659UsuarioFVEmail = "" ;
   this.AV32UsuarioFvSenha = "" ;
   this.ZV32UsuarioFvSenha = "" ;
   this.OV32UsuarioFvSenha = "" ;
   this.A10664UsuarioFVQtdDiasConferencia = 0 ;
   this.Z10664UsuarioFVQtdDiasConferencia = 0 ;
   this.O10664UsuarioFVQtdDiasConferencia = 0 ;
   this.A10662UsuarioFVUltAcesso = gx.date.nullDate() ;
   this.Z10662UsuarioFVUltAcesso = gx.date.nullDate() ;
   this.O10662UsuarioFVUltAcesso = gx.date.nullDate() ;
   this.A10663UsuarioFVUltAtualizacao = gx.date.nullDate() ;
   this.Z10663UsuarioFVUltAtualizacao = gx.date.nullDate() ;
   this.O10663UsuarioFVUltAtualizacao = gx.date.nullDate() ;
   this.A11147UsuarioFvDataUltVersao = gx.date.nullDate() ;
   this.Z11147UsuarioFvDataUltVersao = gx.date.nullDate() ;
   this.O11147UsuarioFvDataUltVersao = gx.date.nullDate() ;
   this.A10665UsuarioFVTelaInicial = "" ;
   this.Z10665UsuarioFVTelaInicial = "" ;
   this.O10665UsuarioFVTelaInicial = "" ;
   this.A10753UsuarioFVQuebra = "" ;
   this.Z10753UsuarioFVQuebra = "" ;
   this.O10753UsuarioFVQuebra = "" ;
   this.A10666UsuarioFVModeloVenda = "" ;
   this.Z10666UsuarioFVModeloVenda = "" ;
   this.O10666UsuarioFVModeloVenda = "" ;
   this.A11052UsuarioSnControlaEstoque = "" ;
   this.Z11052UsuarioSnControlaEstoque = "" ;
   this.O11052UsuarioSnControlaEstoque = "" ;
   this.A10868UsuarioFVEntregaPadrao = "" ;
   this.Z10868UsuarioFVEntregaPadrao = "" ;
   this.O10868UsuarioFVEntregaPadrao = "" ;
   this.A11149UsuarioFvSnAltPreco = "" ;
   this.Z11149UsuarioFvSnAltPreco = "" ;
   this.O11149UsuarioFvSnAltPreco = "" ;
   this.A10869UsuarioFVQtdPadrao = 0 ;
   this.Z10869UsuarioFVQtdPadrao = 0 ;
   this.O10869UsuarioFVQtdPadrao = 0 ;
   this.A11150UsuarioFvSnDesconto = "" ;
   this.Z11150UsuarioFvSnDesconto = "" ;
   this.O11150UsuarioFvSnDesconto = "" ;
   this.A11054UsuarioCasasDecimais = 0 ;
   this.Z11054UsuarioCasasDecimais = 0 ;
   this.O11054UsuarioCasasDecimais = 0 ;
   this.A11053UsuarioPrecoPadrao = 0 ;
   this.Z11053UsuarioPrecoPadrao = 0 ;
   this.O11053UsuarioPrecoPadrao = 0 ;
   this.AV28PrecoDescricao = "" ;
   this.ZV28PrecoDescricao = "" ;
   this.OV28PrecoDescricao = "" ;
   this.A11148UsuarioFVPcDesconto = 0 ;
   this.Z11148UsuarioFVPcDesconto = 0 ;
   this.O11148UsuarioFVPcDesconto = 0 ;
   this.A11146UsuarioFVQtdDiasExVendas = 0 ;
   this.Z11146UsuarioFVQtdDiasExVendas = 0 ;
   this.O11146UsuarioFVQtdDiasExVendas = 0 ;
   this.AV8AcessoSistemaSequencia = 0 ;
   this.ZV8AcessoSistemaSequencia = 0 ;
   this.OV8AcessoSistemaSequencia = 0 ;
   this.AV10EmpresaPadrao = "" ;
   this.ZV10EmpresaPadrao = "" ;
   this.OV10EmpresaPadrao = "" ;
   this.AV26QtdeFil = 0 ;
   this.ZV26QtdeFil = 0 ;
   this.OV26QtdeFil = 0 ;
   this.AV19UsrCod = "" ;
   this.AV9EmpresaLogadaId = "" ;
   this.AV17Sistema = "" ;
   this.AV33Pgmname = "" ;
   this.AV34Pgmdesc = "" ;
   this.AV15MsgErro = "" ;
   this.AV8AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV18Tabela = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV11Entrada = [ ] ;
   this.AV16Saida = [ ] ;
   this.AV20UsuarioFvId = "" ;
   this.AV7isPrompt = false ;
   this.A10620UsuarioFVId = "" ;
   this.A10654UsuarioFVEmpresaId = "" ;
   this.AV21UsuarioFvNome = "" ;
   this.AV31ret = 0 ;
   this.A10657UsuarioFVChave = "" ;
   this.AV32UsuarioFvSenha = "" ;
   this.AV24Vendedornome = "" ;
   this.AV25FilialNome = "" ;
   this.A10655UsuarioFVEmpresaGuid = "" ;
   this.A10656UsuarioFVIpServico = "" ;
   this.A10621UsuarioFVSenha = "" ;
   this.A10658UsuarioFVNome = "" ;
   this.A10659UsuarioFVEmail = "" ;
   this.A10660UsuarioFVVendedorId = 0 ;
   this.A10661UsuarioFVFilialId = 0 ;
   this.A10662UsuarioFVUltAcesso = gx.date.nullDate() ;
   this.A10663UsuarioFVUltAtualizacao = gx.date.nullDate() ;
   this.A10664UsuarioFVQtdDiasConferencia = 0 ;
   this.A10665UsuarioFVTelaInicial = "" ;
   this.A10666UsuarioFVModeloVenda = "" ;
   this.A10753UsuarioFVQuebra = "" ;
   this.A10868UsuarioFVEntregaPadrao = "" ;
   this.A10869UsuarioFVQtdPadrao = 0 ;
   this.A11054UsuarioCasasDecimais = 0 ;
   this.A11052UsuarioSnControlaEstoque = "" ;
   this.A11053UsuarioPrecoPadrao = 0 ;
   this.A11148UsuarioFVPcDesconto = 0 ;
   this.A11146UsuarioFVQtdDiasExVendas = 0 ;
   this.A11147UsuarioFvDataUltVersao = gx.date.nullDate() ;
   this.A11149UsuarioFvSnAltPreco = "" ;
   this.A11150UsuarioFvSnDesconto = "" ;
   this.AV29Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12ff2_client": ["'FECHAR'", true] ,"e13ff788_client": ["ENTER", true] ,"e14ff788_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20UsuarioFvId',fld:'vUSUARIOFVID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV7isPrompt',fld:'vISPROMPT'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV8AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV7isPrompt',fld:'vISPROMPT'}],[]];
   this.setPrompt("PROMPT_10660", [43]);
   this.setPrompt("PROMPT_10661", [51]);
   this.setPrompt("PROMPT_11053", [148]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20UsuarioFvId", "vUSUARIOFVID", 0, "char");
   this.setVCMap("A10654UsuarioFVEmpresaId", "USUARIOFVEMPRESAID", 0, "char");
   this.setVCMap("AV21UsuarioFvNome", "vUSUARIOFVNOME", 0, "svchar");
   this.setVCMap("AV31ret", "vRET", 0, "int");
   this.setVCMap("A10657UsuarioFVChave", "USUARIOFVCHAVE", 0, "char");
   this.setVCMap("A10621UsuarioFVSenha", "USUARIOFVSENHA", 0, "char");
   this.setVCMap("AV34Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV7isPrompt", "vISPROMPT", 0, "boolean");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tusuarioforcavenda());
