/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:42:29.29
*/
gx.evt.autoSkip = false;
gx.define('tmontboletodetalhe', false, function () {
   this.ServerClass =  "tmontboletodetalhe" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Montbarrasboletoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MONTBARRASBOLETOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Montbarrasboletoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Montbarrasboletoid",["gx.O.A2819MontBarrasBoletoEmpresaId", "gx.O.A2820MontBarrasBoletoId"],[]);
      return true;
   }
   this.Valid_Montboletodetalhemontagem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MONTBOLETODETALHEMONTAGEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Montboletodetalheordem=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Montboletodetalheordem",["gx.O.A2819MontBarrasBoletoEmpresaId", "gx.O.A2820MontBarrasBoletoId", "gx.O.A2831MontBoletoDetalheMontagem", "gx.O.A2832MontBoletoDetalheOrdem", "gx.O.A2833MontBoletoDetalheTipoCampo", "gx.O.A2834MontBoletoDetalheCampoFixo", "gx.O.A2835MontBoletoDetalheTabela", "gx.O.A2836MontBoletoDetalheCampoTabela", "gx.O.A2837MontBoletoDetalheCampoPosIni", "gx.O.A2838MontBoletoDetalheCampoPosFin", 'gx.date.urlDateTime(gx.O.A2839MontBoletoDetalheDataAlt,"DMY4")', "gx.O.A2840MontBoletoDetalheUsuarioAlt"],["A2833MontBoletoDetalheTipoCampo", "A2834MontBoletoDetalheCampoFixo", "A2835MontBoletoDetalheTabela", "A2836MontBoletoDetalheCampoTabela", "A2837MontBoletoDetalheCampoPosIni", "A2838MontBoletoDetalheCampoPosFin", "A2839MontBoletoDetalheDataAlt", "A2840MontBoletoDetalheUsuarioAlt", "Gx_mode", "Z2819MontBarrasBoletoEmpresaId", "Z2820MontBarrasBoletoId", "Z2831MontBoletoDetalheMontagem", "Z2832MontBoletoDetalheOrdem", "Z2833MontBoletoDetalheTipoCampo", "Z2834MontBoletoDetalheCampoFixo", "Z2835MontBoletoDetalheTabela", "Z2836MontBoletoDetalheCampoTabela", "Z2837MontBoletoDetalheCampoPosIni", "Z2838MontBoletoDetalheCampoPosFin", "Z2839MontBoletoDetalheDataAlt", "Z2840MontBoletoDetalheUsuarioAlt", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e1156295_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e1256295_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1356295_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,71,80,82,84];
   this.GXLastCtrlId =84;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montbarrasboletoempresaid,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOEMPRESAID",gxz:"Z2819MontBarrasBoletoEmpresaId",gxold:"O2819MontBarrasBoletoEmpresaId",gxvar:"A2819MontBarrasBoletoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2819MontBarrasBoletoEmpresaId=Value},v2z:function(Value){gx.O.Z2819MontBarrasBoletoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("MONTBARRASBOLETOEMPRESAID",gx.O.A2819MontBarrasBoletoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2819MontBarrasBoletoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("MONTBARRASBOLETOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montbarrasboletoid,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOID",gxz:"Z2820MontBarrasBoletoId",gxold:"O2820MontBarrasBoletoId",gxvar:"A2820MontBarrasBoletoId",ucs:[],op:[],ip:[19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2820MontBarrasBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2820MontBarrasBoletoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MONTBARRASBOLETOID",gx.O.A2820MontBarrasBoletoId,0)},c2v:function(){gx.O.A2820MontBarrasBoletoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MONTBARRASBOLETOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montboletodetalhemontagem,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHEMONTAGEM",gxz:"Z2831MontBoletoDetalheMontagem",gxold:"O2831MontBoletoDetalheMontagem",gxvar:"A2831MontBoletoDetalheMontagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2831MontBoletoDetalheMontagem=Value},v2z:function(Value){gx.O.Z2831MontBoletoDetalheMontagem=Value},v2c:function(){gx.fn.setControlValue("MONTBOLETODETALHEMONTAGEM",gx.O.A2831MontBoletoDetalheMontagem,0)},c2v:function(){gx.O.A2831MontBoletoDetalheMontagem=this.val()},val:function(){return gx.fn.getControlValue("MONTBOLETODETALHEMONTAGEM")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montboletodetalheordem,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHEORDEM",gxz:"Z2832MontBoletoDetalheOrdem",gxold:"O2832MontBoletoDetalheOrdem",gxvar:"A2832MontBoletoDetalheOrdem",ucs:[],op:[70,65,60,55,50,45,40,35],ip:[70,65,60,55,50,45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2832MontBoletoDetalheOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2832MontBoletoDetalheOrdem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MONTBOLETODETALHEORDEM",gx.O.A2832MontBoletoDetalheOrdem,0)},c2v:function(){gx.O.A2832MontBoletoDetalheOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MONTBOLETODETALHEORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHETIPOCAMPO",gxz:"Z2833MontBoletoDetalheTipoCampo",gxold:"O2833MontBoletoDetalheTipoCampo",gxvar:"A2833MontBoletoDetalheTipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2833MontBoletoDetalheTipoCampo=Value},v2z:function(Value){gx.O.Z2833MontBoletoDetalheTipoCampo=Value},v2c:function(){gx.fn.setControlValue("MONTBOLETODETALHETIPOCAMPO",gx.O.A2833MontBoletoDetalheTipoCampo,0)},c2v:function(){gx.O.A2833MontBoletoDetalheTipoCampo=this.val()},val:function(){return gx.fn.getControlValue("MONTBOLETODETALHETIPOCAMPO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHECAMPOFIXO",gxz:"Z2834MontBoletoDetalheCampoFixo",gxold:"O2834MontBoletoDetalheCampoFixo",gxvar:"A2834MontBoletoDetalheCampoFixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2834MontBoletoDetalheCampoFixo=Value},v2z:function(Value){gx.O.Z2834MontBoletoDetalheCampoFixo=Value},v2c:function(){gx.fn.setControlValue("MONTBOLETODETALHECAMPOFIXO",gx.O.A2834MontBoletoDetalheCampoFixo,0)},c2v:function(){gx.O.A2834MontBoletoDetalheCampoFixo=this.val()},val:function(){return gx.fn.getControlValue("MONTBOLETODETALHECAMPOFIXO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHETABELA",gxz:"Z2835MontBoletoDetalheTabela",gxold:"O2835MontBoletoDetalheTabela",gxvar:"A2835MontBoletoDetalheTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2835MontBoletoDetalheTabela=Value},v2z:function(Value){gx.O.Z2835MontBoletoDetalheTabela=Value},v2c:function(){gx.fn.setControlValue("MONTBOLETODETALHETABELA",gx.O.A2835MontBoletoDetalheTabela,0)},c2v:function(){gx.O.A2835MontBoletoDetalheTabela=this.val()},val:function(){return gx.fn.getControlValue("MONTBOLETODETALHETABELA")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHECAMPOTABELA",gxz:"Z2836MontBoletoDetalheCampoTabela",gxold:"O2836MontBoletoDetalheCampoTabela",gxvar:"A2836MontBoletoDetalheCampoTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2836MontBoletoDetalheCampoTabela=Value},v2z:function(Value){gx.O.Z2836MontBoletoDetalheCampoTabela=Value},v2c:function(){gx.fn.setControlValue("MONTBOLETODETALHECAMPOTABELA",gx.O.A2836MontBoletoDetalheCampoTabela,0)},c2v:function(){gx.O.A2836MontBoletoDetalheCampoTabela=this.val()},val:function(){return gx.fn.getControlValue("MONTBOLETODETALHECAMPOTABELA")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHECAMPOPOSINI",gxz:"Z2837MontBoletoDetalheCampoPosIni",gxold:"O2837MontBoletoDetalheCampoPosIni",gxvar:"A2837MontBoletoDetalheCampoPosIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2837MontBoletoDetalheCampoPosIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2837MontBoletoDetalheCampoPosIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MONTBOLETODETALHECAMPOPOSINI",gx.O.A2837MontBoletoDetalheCampoPosIni,0)},c2v:function(){gx.O.A2837MontBoletoDetalheCampoPosIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MONTBOLETODETALHECAMPOPOSINI",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHECAMPOPOSFIN",gxz:"Z2838MontBoletoDetalheCampoPosFin",gxold:"O2838MontBoletoDetalheCampoPosFin",gxvar:"A2838MontBoletoDetalheCampoPosFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2838MontBoletoDetalheCampoPosFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2838MontBoletoDetalheCampoPosFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MONTBOLETODETALHECAMPOPOSFIN",gx.O.A2838MontBoletoDetalheCampoPosFin,0)},c2v:function(){gx.O.A2838MontBoletoDetalheCampoPosFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MONTBOLETODETALHECAMPOPOSFIN",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHEDATAALT",gxz:"Z2839MontBoletoDetalheDataAlt",gxold:"O2839MontBoletoDetalheDataAlt",gxvar:"A2839MontBoletoDetalheDataAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2839MontBoletoDetalheDataAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2839MontBoletoDetalheDataAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MONTBOLETODETALHEDATAALT",gx.O.A2839MontBoletoDetalheDataAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2839MontBoletoDetalheDataAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MONTBOLETODETALHEDATAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHEUSUARIOALT",gxz:"Z2840MontBoletoDetalheUsuarioAlt",gxold:"O2840MontBoletoDetalheUsuarioAlt",gxvar:"A2840MontBoletoDetalheUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2840MontBoletoDetalheUsuarioAlt=Value},v2z:function(Value){gx.O.Z2840MontBoletoDetalheUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MONTBOLETODETALHEUSUARIOALT",gx.O.A2840MontBoletoDetalheUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2840MontBoletoDetalheUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MONTBOLETODETALHEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[71]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"BTNHELP",grid:0};
   GXValidFnc[84]={fld:"PROMPT_2819_2820",grid:295};
   this.A2819MontBarrasBoletoEmpresaId = "" ;
   this.Z2819MontBarrasBoletoEmpresaId = "" ;
   this.O2819MontBarrasBoletoEmpresaId = "" ;
   this.A2820MontBarrasBoletoId = 0 ;
   this.Z2820MontBarrasBoletoId = 0 ;
   this.O2820MontBarrasBoletoId = 0 ;
   this.A2831MontBoletoDetalheMontagem = "" ;
   this.Z2831MontBoletoDetalheMontagem = "" ;
   this.O2831MontBoletoDetalheMontagem = "" ;
   this.A2832MontBoletoDetalheOrdem = 0 ;
   this.Z2832MontBoletoDetalheOrdem = 0 ;
   this.O2832MontBoletoDetalheOrdem = 0 ;
   this.A2833MontBoletoDetalheTipoCampo = "" ;
   this.Z2833MontBoletoDetalheTipoCampo = "" ;
   this.O2833MontBoletoDetalheTipoCampo = "" ;
   this.A2834MontBoletoDetalheCampoFixo = "" ;
   this.Z2834MontBoletoDetalheCampoFixo = "" ;
   this.O2834MontBoletoDetalheCampoFixo = "" ;
   this.A2835MontBoletoDetalheTabela = "" ;
   this.Z2835MontBoletoDetalheTabela = "" ;
   this.O2835MontBoletoDetalheTabela = "" ;
   this.A2836MontBoletoDetalheCampoTabela = "" ;
   this.Z2836MontBoletoDetalheCampoTabela = "" ;
   this.O2836MontBoletoDetalheCampoTabela = "" ;
   this.A2837MontBoletoDetalheCampoPosIni = 0 ;
   this.Z2837MontBoletoDetalheCampoPosIni = 0 ;
   this.O2837MontBoletoDetalheCampoPosIni = 0 ;
   this.A2838MontBoletoDetalheCampoPosFin = 0 ;
   this.Z2838MontBoletoDetalheCampoPosFin = 0 ;
   this.O2838MontBoletoDetalheCampoPosFin = 0 ;
   this.A2839MontBoletoDetalheDataAlt = gx.date.nullDate() ;
   this.Z2839MontBoletoDetalheDataAlt = gx.date.nullDate() ;
   this.O2839MontBoletoDetalheDataAlt = gx.date.nullDate() ;
   this.A2840MontBoletoDetalheUsuarioAlt = "" ;
   this.Z2840MontBoletoDetalheUsuarioAlt = "" ;
   this.O2840MontBoletoDetalheUsuarioAlt = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A2819MontBarrasBoletoEmpresaId = "" ;
   this.A2820MontBarrasBoletoId = 0 ;
   this.A2831MontBoletoDetalheMontagem = "" ;
   this.A2832MontBoletoDetalheOrdem = 0 ;
   this.A2833MontBoletoDetalheTipoCampo = "" ;
   this.A2834MontBoletoDetalheCampoFixo = "" ;
   this.A2835MontBoletoDetalheTabela = "" ;
   this.A2836MontBoletoDetalheCampoTabela = "" ;
   this.A2837MontBoletoDetalheCampoPosIni = 0 ;
   this.A2838MontBoletoDetalheCampoPosFin = 0 ;
   this.A2839MontBoletoDetalheDataAlt = gx.date.nullDate() ;
   this.A2840MontBoletoDetalheUsuarioAlt = "" ;
   this.Events = {"e1256295_client": ["ENTER", true] ,"e1356295_client": ["CANCEL", true] ,"e1156295_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_2819_2820", [14,19]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tmontboletodetalhe());
