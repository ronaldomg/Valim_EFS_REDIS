/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:13:30.89
*/
gx.evt.autoSkip = false;
gx.define('tconvite', false, function () {
   this.ServerClass =  "tconvite" ;
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
      this.AV22ConviteNumero=gx.fn.getIntegerValue("vCONVITENUMERO",'.') ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2585ConviteEmpresaid=gx.fn.getControlValue("CONVITEEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV33Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV23ConvidadoId=gx.fn.getIntegerValue("vCONVIDADOID",'.') ;
      this.AV21ConvidadoEmpresaId=gx.fn.getControlValue("vCONVIDADOEMPRESAID") ;
      this.A2638ConviteConvidadoUsuarioAlt=gx.fn.getControlValue("CONVITECONVIDADOUSUARIOALT") ;
      this.A2639ConviteConvidadoDtHrAlt=gx.fn.getDateTimeValue("CONVITECONVIDADODTHRALT") ;
      this.A2626ConvidadoCPF=gx.fn.getControlValue("CONVIDADOCPF") ;
      this.A2627ConvidadoRG=gx.fn.getControlValue("CONVIDADORG") ;
      this.A2628ConvidadoDataNascimento=gx.fn.getDateValue("CONVIDADODATANASCIMENTO") ;
   };
   this.Valid_Convitenumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVITENUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convitedatainicial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVITEDATAINICIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convitedatafinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVITEDATAFINAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convitetipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVITETIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaid",["gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId", "gx.O.A70PessoaRazaoSocial"],["A70PessoaRazaoSocial"]);
      return true;
   }
   this.Valid_Convidadoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(43) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVIDADOEMPRESAID", gx.fn.currentGridRowImpl(43));
         this.AnyError  = 0;
         this.sMode276 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(276,43)  ;
         this.standaloneModal4S276( );
         this.standaloneNotModal4S276( );
         try {
            if ( ! (""==this.A2631ConvidadoEmpresaid) )
            {
               this.A2631ConvidadoEmpresaid =  this.AV21ConvidadoEmpresaId  ;
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode276  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convidadoid=function()
   {
      this.sMode276 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(276,43)  ;
      if(  gx.fn.currentGridRowImpl(43) ===0) {
         this.Gx_mode =  this.sMode276  ;
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("CONVIDADOID", gx.fn.currentGridRowImpl(43));
      if ( gx.fn.gridDuplicateKey(45) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Convidados do Convite", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         this.Gx_mode =  this.sMode276  ;
         return gxballoon.show();
      }
      gx.ajax.validSrvEvt("dyncall","valid_Convidadoid",["gx.O.A2631ConvidadoEmpresaid", "gx.O.A2632ConvidadoId", "gx.O.A2625ConvidadoNome", "gx.O.A2626ConvidadoCPF", "gx.O.A2627ConvidadoRG", 'gx.date.urlDate(gx.O.A2628ConvidadoDataNascimento,"DMY4")'],["A2625ConvidadoNome", "A2626ConvidadoCPF", "A2627ConvidadoRG", "A2628ConvidadoDataNascimento"]);
      this.Gx_mode =  this.sMode276  ;
      return true;
   }
   this.standaloneModal4S276=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CONVIDADOEMPRESAID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CONVIDADOEMPRESAID","Enabled", 1 );
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CONVIDADOID","Enabled", 0 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4S276=function()
   {
      try {
         if ( ! (0==this.AV23ConvidadoId) )
         {
            gx.fn.setCtrlProperty("CONVIDADOID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CONVIDADOID","Enabled", 1 );
         }
      }
      catch(e){}
      try {
         if ( ! (0==this.AV23ConvidadoId) )
         {
            this.A2632ConvidadoId = gx.num.trunc( this.AV23ConvidadoId ,0) ;
         }
      }
      catch(e){}
      return true;
   }
   this.e124s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134s2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144s275_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154s275_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,21,24,26,29,31,34,36,37,38,41,42,44,45,46,49,52,54,56,65,67,70];
   this.GXLastCtrlId =70;
   this.Grid1Container = new gx.grid.grid(this, 276,"Convidado",43,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tconvite",[2631,2632],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(2631,44,"CONVIDADOEMPRESAID","Empresa","","ConvidadoEmpresaid","char",0,"px",10,10,"left",null,[],2631,"ConvidadoEmpresaid",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2632,45,"CONVIDADOID","Código","","ConvidadoId","int",0,"px",6,6,"right",null,[],2632,"ConvidadoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_2631_2632","PROMPT_2631_2632",71,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(2625,46,"CONVIDADONOME","Nome do Convidado","","ConvidadoNome","svchar",0,"px",50,50,"left",null,[],2625,"ConvidadoNome",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV30Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV30Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tabcss_1", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Convitenumero,isvalid:null,rgrid:[this.Grid1Container],fld:"CONVITENUMERO",gxz:"Z2586ConviteNumero",gxold:"O2586ConviteNumero",gxvar:"A2586ConviteNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2586ConviteNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2586ConviteNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVITENUMERO",gx.O.A2586ConviteNumero,0)},c2v:function(){gx.O.A2586ConviteNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVITENUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convitedatainicial,isvalid:null,rgrid:[],fld:"CONVITEDATAINICIAL",gxz:"Z2633ConviteDataInicial",gxold:"O2633ConviteDataInicial",gxvar:"A2633ConviteDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2633ConviteDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2633ConviteDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONVITEDATAINICIAL",gx.O.A2633ConviteDataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2633ConviteDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONVITEDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convitedatafinal,isvalid:null,rgrid:[],fld:"CONVITEDATAFINAL",gxz:"Z2634ConviteDataFinal",gxold:"O2634ConviteDataFinal",gxvar:"A2634ConviteDataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2634ConviteDataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2634ConviteDataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONVITEDATAFINAL",gx.O.A2634ConviteDataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2634ConviteDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONVITEDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convitetipo,isvalid:null,rgrid:[],fld:"CONVITETIPO",gxz:"Z2635ConviteTipo",gxold:"O2635ConviteTipo",gxvar:"A2635ConviteTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2635ConviteTipo=Value},v2z:function(Value){gx.O.Z2635ConviteTipo=Value},v2c:function(){gx.fn.setComboBoxValue("CONVITETIPO",gx.O.A2635ConviteTipo)},c2v:function(){gx.O.A2635ConviteTipo=this.val()},val:function(){return gx.fn.getControlValue("CONVITETIPO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[37],ip:[37,36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIAL",gxz:"Z70PessoaRazaoSocial",gxold:"O70PessoaRazaoSocial",gxvar:"A70PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A70PessoaRazaoSocial=Value},v2z:function(Value){gx.O.Z70PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("PESSOARAZAOSOCIAL",gx.O.A70PessoaRazaoSocial,0)},c2v:function(){gx.O.A70PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("PESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TAB2",grid:0};
   GXValidFnc[41]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[42]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[44]={lvl:276,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:43,gxgrid:this.Grid1Container,fnc:this.Valid_Convidadoempresaid,isvalid:null,rgrid:[],fld:"CONVIDADOEMPRESAID",gxz:"Z2631ConvidadoEmpresaid",gxold:"O2631ConvidadoEmpresaid",gxvar:"A2631ConvidadoEmpresaid",ucs:[],op:[45,44],ip:[45,44],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2631ConvidadoEmpresaid=Value},v2z:function(Value){gx.O.Z2631ConvidadoEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADOEMPRESAID",row || gx.fn.currentGridRowImpl(43),gx.O.A2631ConvidadoEmpresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2631ConvidadoEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADOEMPRESAID",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:276,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:1,grid:43,gxgrid:this.Grid1Container,fnc:this.Valid_Convidadoid,isvalid:null,rgrid:[],fld:"CONVIDADOID",gxz:"Z2632ConvidadoId",gxold:"O2632ConvidadoId",gxvar:"A2632ConvidadoId",ucs:[],op:[46],ip:[46,45,44],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2632ConvidadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2632ConvidadoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVIDADOID",row || gx.fn.currentGridRowImpl(43),gx.O.A2632ConvidadoId,0)},c2v:function(){gx.O.A2632ConvidadoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVIDADOID",row || gx.fn.currentGridRowImpl(43),'.')},nac:function(){return !(0==this.AV23ConvidadoId)}};
   GXValidFnc[46]={lvl:276,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:1,grid:43,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADONOME",gxz:"Z2625ConvidadoNome",gxold:"O2625ConvidadoNome",gxvar:"A2625ConvidadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2625ConvidadoNome=Value},v2z:function(Value){gx.O.Z2625ConvidadoNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADONOME",row || gx.fn.currentGridRowImpl(43),gx.O.A2625ConvidadoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2625ConvidadoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADONOME",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLE21",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVITEUSUARIOALT",gxz:"Z2636ConviteUsuarioAlt",gxold:"O2636ConviteUsuarioAlt",gxvar:"A2636ConviteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2636ConviteUsuarioAlt=Value},v2z:function(Value){gx.O.Z2636ConviteUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONVITEUSUARIOALT",gx.O.A2636ConviteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2636ConviteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONVITEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVITEDATAHORAALT",gxz:"Z2637ConviteDataHoraAlt",gxold:"O2637ConviteDataHoraAlt",gxvar:"A2637ConviteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2637ConviteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2637ConviteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONVITEDATAHORAALT",gx.O.A2637ConviteDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2637ConviteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONVITEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[65]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV24AcessoSistemaSequencia",gxold:"OV24AcessoSistemaSequencia",gxvar:"AV24AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV24AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   GXValidFnc[70]={fld:"PROMPT_69",grid:275};
   this.A2586ConviteNumero = 0 ;
   this.Z2586ConviteNumero = 0 ;
   this.O2586ConviteNumero = 0 ;
   this.A2633ConviteDataInicial = gx.date.nullDate() ;
   this.Z2633ConviteDataInicial = gx.date.nullDate() ;
   this.O2633ConviteDataInicial = gx.date.nullDate() ;
   this.A2634ConviteDataFinal = gx.date.nullDate() ;
   this.Z2634ConviteDataFinal = gx.date.nullDate() ;
   this.O2634ConviteDataFinal = gx.date.nullDate() ;
   this.A2635ConviteTipo = "" ;
   this.Z2635ConviteTipo = "" ;
   this.O2635ConviteTipo = "" ;
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.Z70PessoaRazaoSocial = "" ;
   this.O70PessoaRazaoSocial = "" ;
   this.Z2631ConvidadoEmpresaid = "" ;
   this.O2631ConvidadoEmpresaid = "" ;
   this.Z2632ConvidadoId = 0 ;
   this.O2632ConvidadoId = 0 ;
   this.Z2625ConvidadoNome = "" ;
   this.O2625ConvidadoNome = "" ;
   this.A2636ConviteUsuarioAlt = "" ;
   this.Z2636ConviteUsuarioAlt = "" ;
   this.O2636ConviteUsuarioAlt = "" ;
   this.A2637ConviteDataHoraAlt = gx.date.nullDate() ;
   this.Z2637ConviteDataHoraAlt = gx.date.nullDate() ;
   this.O2637ConviteDataHoraAlt = gx.date.nullDate() ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.ZV24AcessoSistemaSequencia = 0 ;
   this.OV24AcessoSistemaSequencia = 0 ;
   this.A2631ConvidadoEmpresaid = "" ;
   this.A2632ConvidadoId = 0 ;
   this.A2625ConvidadoNome = "" ;
   this.A2626ConvidadoCPF = "" ;
   this.A2627ConvidadoRG = "" ;
   this.A2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.A2638ConviteConvidadoUsuarioAlt = "" ;
   this.A2639ConviteConvidadoDtHrAlt = gx.date.nullDate() ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV32Pgmname = "" ;
   this.AV33Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV21ConvidadoEmpresaId = "" ;
   this.AV10ret = 0 ;
   this.AV20SnAlterou = "" ;
   this.AV22ConviteNumero = 0 ;
   this.AV23ConvidadoId = 0 ;
   this.A2585ConviteEmpresaid = "" ;
   this.A2586ConviteNumero = 0 ;
   this.A2636ConviteUsuarioAlt = "" ;
   this.A2637ConviteDataHoraAlt = gx.date.nullDate() ;
   this.A2633ConviteDataInicial = gx.date.nullDate() ;
   this.A2634ConviteDataFinal = gx.date.nullDate() ;
   this.A2635ConviteTipo = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.AV30Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e124s2_client": ["'FECHAR'", true] ,"e134s2_client": ["AFTER TRN", true] ,"e144s275_client": ["ENTER", true] ,"e154s275_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV22ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV23ConvidadoId',fld:'vCONVIDADOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV24AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV24AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_69", [36]);
   this.setPrompt("PROMPT_2631_2632", [44,45]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV22ConviteNumero", "vCONVITENUMERO", 0, "int");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2585ConviteEmpresaid", "CONVITEEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV33Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV23ConvidadoId", "vCONVIDADOID", 0, "int");
   this.setVCMap("AV21ConvidadoEmpresaId", "vCONVIDADOEMPRESAID", 0, "char");
   this.setVCMap("A2638ConviteConvidadoUsuarioAlt", "CONVITECONVIDADOUSUARIOALT", 43, "char");
   this.setVCMap("A2639ConviteConvidadoDtHrAlt", "CONVITECONVIDADODTHRALT", 43, "dtime");
   this.setVCMap("A2626ConvidadoCPF", "CONVIDADOCPF", 43, "char");
   this.setVCMap("A2627ConvidadoRG", "CONVIDADORG", 43, "svchar");
   this.setVCMap("A2628ConvidadoDataNascimento", "CONVIDADODATANASCIMENTO", 43, "date");
   this.InitStandaloneVars( );
   this.LvlOlds[ 275 ]= ["O69PessoaId","O2635ConviteTipo","O2634ConviteDataFinal","O2633ConviteDataInicial"] ;
});
gx.setParentObj(new tconvite());
