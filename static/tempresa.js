/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:16:26.59
*/
gx.evt.autoSkip = false;
gx.define('tempresa', false, function () {
   this.ServerClass =  "tempresa" ;
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
      this.AV10EmpresaId=gx.fn.getControlValue("vEMPRESAID") ;
      this.AV24ErrDsc=gx.fn.getControlValue("vERRDSC") ;
      this.AV31EmpresaTipoPessoa=gx.fn.getControlValue("vEMPRESATIPOPESSOA") ;
      this.AV9Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.AV28Erro1=gx.fn.getIntegerValue("vERRO1",'.') ;
      this.AV14ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.A200EmpresaLogomarca=gx.fn.getControlValue("EMPRESALOGOMARCA") ;
      this.AV22SistemaEmpresaSoma=gx.fn.getIntegerValue("vSISTEMAEMPRESASOMA",'.') ;
      this.A5255EmpresaChaveEmailPOP=gx.fn.getControlValue("EMPRESACHAVEEMAILPOP") ;
      this.AV43Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV42Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.A4303SistemaEmpresaSoma=gx.fn.getIntegerValue("SISTEMAEMPRESASOMA",'.') ;
      this.A539SistemaNome=gx.fn.getControlValue("SISTEMANOME") ;
   };
   this.Valid_Empresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresaid",["gx.O.A138EmpresaId", "gx.O.AV24ErrDsc"],["AV24ErrDsc"]);
      return true;
   }
   this.Valid_Empresatipopessoa=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresatipopessoa",["gx.O.A194EmpresaTipoPessoa", "gx.O.AV31EmpresaTipoPessoa"],["AV31EmpresaTipoPessoa"]);
      return true;
   }
   this.Valid_Empresanome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESANOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresafantasia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESAFANTASIA");
         this.AnyError  = 0;
         try {
            if ( (""==this.A191EmpresaFantasia) )
            {
               this.A191EmpresaFantasia =  this.A186EmpresaNome  ;
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresacnpj=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresacnpj",["gx.O.A202EmpresaCNPJ", "gx.O.A194EmpresaTipoPessoa", "gx.O.AV28Erro1"],["AV28Erro1"]);
      return true;
   }
   this.Valid_Empresacpf=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresacpf",["gx.O.A203EmpresaCPF", "gx.O.AV31EmpresaTipoPessoa", "gx.O.AV9Erro"],["AV9Erro"]);
      return true;
   }
   this.Valid_Empresaendereco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESAENDERECO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresacidade=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESACIDADE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresauf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESAUF");
         this.AnyError  = 0;
         if ( ! ( this.A190EmpresaUF == "" || this.A190EmpresaUF == "AC" || this.A190EmpresaUF == "AL" || this.A190EmpresaUF == "AP" || this.A190EmpresaUF == "AM" || this.A190EmpresaUF == "BA" || this.A190EmpresaUF == "CE" || this.A190EmpresaUF == "DF" || this.A190EmpresaUF == "ES" || this.A190EmpresaUF == "GO" || this.A190EmpresaUF == "MA" || this.A190EmpresaUF == "MT" || this.A190EmpresaUF == "MS" || this.A190EmpresaUF == "MG" || this.A190EmpresaUF == "PA" || this.A190EmpresaUF == "PB" || this.A190EmpresaUF == "PR" || this.A190EmpresaUF == "PE" || this.A190EmpresaUF == "PI" || this.A190EmpresaUF == "RJ" || this.A190EmpresaUF == "RN" || this.A190EmpresaUF == "RS" || this.A190EmpresaUF == "RO" || this.A190EmpresaUF == "RR" || this.A190EmpresaUF == "SC" || this.A190EmpresaUF == "SP" || this.A190EmpresaUF == "SE" || this.A190EmpresaUF == "TO" || this.A190EmpresaUF == "EX" ) )
         {
            try {
               gxballoon.setError("Campo UF fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Impressoraid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Impressoraid",["gx.O.A198ImpressoraId"],[]);
      return true;
   }
   this.Valid_Empresadiretoriorelatorio=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresadiretoriorelatorio",["gx.O.A138EmpresaId", "gx.O.AV24ErrDsc", "gx.O.A194EmpresaTipoPessoa", "gx.O.A186EmpresaNome", "gx.O.AV31EmpresaTipoPessoa", "gx.O.A203EmpresaCPF", "gx.O.AV9Erro", "gx.O.A202EmpresaCNPJ", "gx.O.AV28Erro1", "gx.O.A187EmpresaEndereco", "gx.O.A189EmpresaCidade", "gx.O.A201EmpresaDiretorioRelatorio", "gx.O.AV14ret"],["AV14ret"]);
      return true;
   }
   this.Valid_Empresaufinscricaoestadual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESAUFINSCRICAOESTADUAL");
         this.AnyError  = 0;
         if ( ! ( this.A210EmpresaUFInscricaoEstadual == "" || this.A210EmpresaUFInscricaoEstadual == "AC" || this.A210EmpresaUFInscricaoEstadual == "AL" || this.A210EmpresaUFInscricaoEstadual == "AP" || this.A210EmpresaUFInscricaoEstadual == "AM" || this.A210EmpresaUFInscricaoEstadual == "BA" || this.A210EmpresaUFInscricaoEstadual == "CE" || this.A210EmpresaUFInscricaoEstadual == "DF" || this.A210EmpresaUFInscricaoEstadual == "ES" || this.A210EmpresaUFInscricaoEstadual == "GO" || this.A210EmpresaUFInscricaoEstadual == "MA" || this.A210EmpresaUFInscricaoEstadual == "MT" || this.A210EmpresaUFInscricaoEstadual == "MS" || this.A210EmpresaUFInscricaoEstadual == "MG" || this.A210EmpresaUFInscricaoEstadual == "PA" || this.A210EmpresaUFInscricaoEstadual == "PB" || this.A210EmpresaUFInscricaoEstadual == "PR" || this.A210EmpresaUFInscricaoEstadual == "PE" || this.A210EmpresaUFInscricaoEstadual == "PI" || this.A210EmpresaUFInscricaoEstadual == "RJ" || this.A210EmpresaUFInscricaoEstadual == "RN" || this.A210EmpresaUFInscricaoEstadual == "RS" || this.A210EmpresaUFInscricaoEstadual == "RO" || this.A210EmpresaUFInscricaoEstadual == "RR" || this.A210EmpresaUFInscricaoEstadual == "SC" || this.A210EmpresaUFInscricaoEstadual == "SP" || this.A210EmpresaUFInscricaoEstadual == "SE" || this.A210EmpresaUFInscricaoEstadual == "TO" || this.A210EmpresaUFInscricaoEstadual == "EX" ) )
         {
            try {
               gxballoon.setError("Campo UF Inscricao Estadual fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresaultimoacesso=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresaultimoacesso",['gx.date.urlDateTime(gx.O.A195EmpresaUltimoAcesso,"DMY4")'],["A195EmpresaUltimoAcesso"]);
      return true;
   }
   this.Validv_Empresasenhaemailpop=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESASENHAEMAILPOP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sistemaid=function()
   {
      this.sMode18 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(18,215)  ;
      this.standaloneModal0D18( );
      this.standaloneNotModal0D18( );
      if(  gx.fn.currentGridRowImpl(215) ===0) {
         this.Gx_mode =  this.sMode18  ;
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("SISTEMAID", gx.fn.currentGridRowImpl(215));
      if ( gx.fn.gridDuplicateKey(217) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Sistemas da Empresa", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         this.Gx_mode =  this.sMode18  ;
         return gxballoon.show();
      }
      gx.ajax.validSrvEvt("dyncall","valid_Sistemaid",["gx.O.A140SistemaId", "gx.O.A539SistemaNome"],["A539SistemaNome"]);
      this.Gx_mode =  this.sMode18  ;
      return true;
   }
   this.standaloneModal0D18=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("SISTEMAID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("SISTEMAID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal0D18=function()
   {
      return true;
   }
   this.e120d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130d2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140d2_client=function()
   {
      this.executeServerEvent("'UPLOAD'", true, null, false, false);
   };
   this.e150d17_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e160d17_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,22,24,29,31,34,36,39,41,43,45,48,50,51,54,56,59,61,63,65,68,70,72,74,77,79,81,83,86,88,93,95,98,100,103,105,107,110,111,114,115,118,121,123,126,128,131,133,136,138,141,143,146,148,151,153,159,161,164,166,172,174,176,178,179,182,185,187,190,192,195,197,200,202,206,210,211,214,216,217,218,219,220,227,228,231,232,234,236];
   this.GXLastCtrlId =236;
   this.Grid1Container = new gx.grid.grid(this, 18,"SistemaEmpresa",215,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tempresa",[140],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_18",216,"vNRCDDELETED_18","","","nRcdDeleted_18","int",0,"px",4,1,"right",null,[],"nRcdDeleted_18","nRcdDeleted_18",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(140,217,"SISTEMAID","Sistema","","SistemaId","char",0,"px",8,8,"left",null,[],140,"SistemaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_140","PROMPT_140",237,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(214,218,"SISTEMAEMPRESAVENCIMENTO","Data Vencimento do Sistema","","SistemaEmpresaVencimento","date",0,"px",10,10,"right",null,[],214,"SistemaEmpresaVencimento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox(215,219,"SISTEMABLOQUEARACESSOSIMULTANE","Bloquear Acesso Simultâneo","","SistemaBloquearAcessoSimultane","char","S","N",null,true,false,0,"px","GridColumnImage");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV29Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV29Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV29Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tempresa_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaid,isvalid:null,rgrid:[this.Grid1Container],fld:"EMPRESAID",gxz:"Z138EmpresaId",gxold:"O138EmpresaId",gxvar:"A138EmpresaId",ucs:[],op:[],ip:[15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A138EmpresaId=Value},v2z:function(Value){gx.O.Z138EmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAID",gx.O.A138EmpresaId,0)},c2v:function(){gx.O.A138EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAID")},nac:function(){return !(""==this.AV10EmpresaId)}};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESASITUACAO",gxz:"Z4302EmpresaSituacao",gxold:"O4302EmpresaSituacao",gxvar:"A4302EmpresaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A4302EmpresaSituacao=Value},v2z:function(Value){gx.O.Z4302EmpresaSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("EMPRESASITUACAO",gx.O.A4302EmpresaSituacao,"A")},c2v:function(){gx.O.A4302EmpresaSituacao=this.val()},val:function(){return gx.fn.getControlValue("EMPRESASITUACAO")},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[22]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresatipopessoa,isvalid:null,rgrid:[],fld:"EMPRESATIPOPESSOA",gxz:"Z194EmpresaTipoPessoa",gxold:"O194EmpresaTipoPessoa",gxvar:"A194EmpresaTipoPessoa",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A194EmpresaTipoPessoa=Value},v2z:function(Value){gx.O.Z194EmpresaTipoPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("EMPRESATIPOPESSOA",gx.O.A194EmpresaTipoPessoa);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A194EmpresaTipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("EMPRESATIPOPESSOA")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresanome,isvalid:null,rgrid:[],fld:"EMPRESANOME",gxz:"Z186EmpresaNome",gxold:"O186EmpresaNome",gxvar:"A186EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A186EmpresaNome=Value},v2z:function(Value){gx.O.Z186EmpresaNome=Value},v2c:function(){gx.fn.setControlValue("EMPRESANOME",gx.O.A186EmpresaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A186EmpresaNome=this.val()},val:function(){return gx.fn.getControlValue("EMPRESANOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresafantasia,isvalid:null,rgrid:[],fld:"EMPRESAFANTASIA",gxz:"Z191EmpresaFantasia",gxold:"O191EmpresaFantasia",gxvar:"A191EmpresaFantasia",ucs:[],op:[36],ip:[36,31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A191EmpresaFantasia=Value},v2z:function(Value){gx.O.Z191EmpresaFantasia=Value},v2c:function(){gx.fn.setControlValue("EMPRESAFANTASIA",gx.O.A191EmpresaFantasia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A191EmpresaFantasia=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAFANTASIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresacnpj,isvalid:null,rgrid:[],fld:"EMPRESACNPJ",gxz:"Z202EmpresaCNPJ",gxold:"O202EmpresaCNPJ",gxvar:"A202EmpresaCNPJ",ucs:[],op:[],ip:[24,41],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A202EmpresaCNPJ=Value},v2z:function(Value){gx.O.Z202EmpresaCNPJ=Value},v2c:function(){gx.fn.setControlValue("EMPRESACNPJ",gx.O.A202EmpresaCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A202EmpresaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("EMPRESACNPJ")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresacpf,isvalid:null,rgrid:[],fld:"EMPRESACPF",gxz:"Z203EmpresaCPF",gxold:"O203EmpresaCPF",gxvar:"A203EmpresaCPF",ucs:[],op:[],ip:[45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A203EmpresaCPF=Value},v2z:function(Value){gx.O.Z203EmpresaCPF=Value},v2c:function(){gx.fn.setControlValue("EMPRESACPF",gx.O.A203EmpresaCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A203EmpresaCPF=this.val()},val:function(){return gx.fn.getControlValue("EMPRESACPF")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaendereco,isvalid:null,rgrid:[],fld:"EMPRESAENDERECO",gxz:"Z187EmpresaEndereco",gxold:"O187EmpresaEndereco",gxvar:"A187EmpresaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A187EmpresaEndereco=Value},v2z:function(Value){gx.O.Z187EmpresaEndereco=Value},v2c:function(){gx.fn.setControlValue("EMPRESAENDERECO",gx.O.A187EmpresaEndereco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A187EmpresaEndereco=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAENDERECO")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESANUMEROENDERECO",gxz:"Z204EmpresaNumeroEndereco",gxold:"O204EmpresaNumeroEndereco",gxvar:"A204EmpresaNumeroEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A204EmpresaNumeroEndereco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z204EmpresaNumeroEndereco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EMPRESANUMEROENDERECO",gx.O.A204EmpresaNumeroEndereco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A204EmpresaNumeroEndereco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EMPRESANUMEROENDERECO",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESACOMPLEMENTO",gxz:"Z188EmpresaComplemento",gxold:"O188EmpresaComplemento",gxvar:"A188EmpresaComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A188EmpresaComplemento=Value},v2z:function(Value){gx.O.Z188EmpresaComplemento=Value},v2c:function(){gx.fn.setControlValue("EMPRESACOMPLEMENTO",gx.O.A188EmpresaComplemento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A188EmpresaComplemento=this.val()},val:function(){return gx.fn.getControlValue("EMPRESACOMPLEMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESABAIRRO",gxz:"Z205EmpresaBairro",gxold:"O205EmpresaBairro",gxvar:"A205EmpresaBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A205EmpresaBairro=Value},v2z:function(Value){gx.O.Z205EmpresaBairro=Value},v2c:function(){gx.fn.setControlValue("EMPRESABAIRRO",gx.O.A205EmpresaBairro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A205EmpresaBairro=this.val()},val:function(){return gx.fn.getControlValue("EMPRESABAIRRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESACEP",gxz:"Z196EmpresaCEP",gxold:"O196EmpresaCEP",gxvar:"A196EmpresaCEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A196EmpresaCEP=Value},v2z:function(Value){gx.O.Z196EmpresaCEP=Value},v2c:function(){gx.fn.setControlValue("EMPRESACEP",gx.O.A196EmpresaCEP,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A196EmpresaCEP=this.val()},val:function(){return gx.fn.getControlValue("EMPRESACEP")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresacidade,isvalid:null,rgrid:[],fld:"EMPRESACIDADE",gxz:"Z189EmpresaCidade",gxold:"O189EmpresaCidade",gxvar:"A189EmpresaCidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A189EmpresaCidade=Value},v2z:function(Value){gx.O.Z189EmpresaCidade=Value},v2c:function(){gx.fn.setControlValue("EMPRESACIDADE",gx.O.A189EmpresaCidade,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A189EmpresaCidade=this.val()},val:function(){return gx.fn.getControlValue("EMPRESACIDADE")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresauf,isvalid:null,rgrid:[],fld:"EMPRESAUF",gxz:"Z190EmpresaUF",gxold:"O190EmpresaUF",gxvar:"A190EmpresaUF",ucs:[],op:[74],ip:[74],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A190EmpresaUF=Value},v2z:function(Value){gx.O.Z190EmpresaUF=Value},v2c:function(){gx.fn.setComboBoxValue("EMPRESAUF",gx.O.A190EmpresaUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A190EmpresaUF=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESATELEFONE",gxz:"Z192EmpresaTelefone",gxold:"O192EmpresaTelefone",gxvar:"A192EmpresaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A192EmpresaTelefone=Value},v2z:function(Value){gx.O.Z192EmpresaTelefone=Value},v2c:function(){gx.fn.setControlValue("EMPRESATELEFONE",gx.O.A192EmpresaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A192EmpresaTelefone=this.val()},val:function(){return gx.fn.getControlValue("EMPRESATELEFONE")},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[81]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAFAX",gxz:"Z193EmpresaFax",gxold:"O193EmpresaFax",gxvar:"A193EmpresaFax",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A193EmpresaFax=Value},v2z:function(Value){gx.O.Z193EmpresaFax=Value},v2c:function(){gx.fn.setControlValue("EMPRESAFAX",gx.O.A193EmpresaFax,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A193EmpresaFax=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAFAX")},nac:gx.falseFn};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[86]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Impressoraid,isvalid:null,rgrid:[],fld:"IMPRESSORAID",gxz:"Z198ImpressoraId",gxold:"O198ImpressoraId",gxvar:"A198ImpressoraId",ucs:[],op:[],ip:[88],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A198ImpressoraId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z198ImpressoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAID",gx.O.A198ImpressoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A198ImpressoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresadiretoriorelatorio,isvalid:null,rgrid:[],fld:"EMPRESADIRETORIORELATORIO",gxz:"Z201EmpresaDiretorioRelatorio",gxold:"O201EmpresaDiretorioRelatorio",gxvar:"A201EmpresaDiretorioRelatorio",ucs:[],op:[],ip:[95,70,50,41,45,31,24,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A201EmpresaDiretorioRelatorio=Value},v2z:function(Value){gx.O.Z201EmpresaDiretorioRelatorio=Value},v2c:function(){gx.fn.setControlValue("EMPRESADIRETORIORELATORIO",gx.O.A201EmpresaDiretorioRelatorio,0)},c2v:function(){gx.O.A201EmpresaDiretorioRelatorio=this.val()},val:function(){return gx.fn.getControlValue("EMPRESADIRETORIORELATORIO")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESASITE",gxz:"Z206EmpresaSite",gxold:"O206EmpresaSite",gxvar:"A206EmpresaSite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A206EmpresaSite=Value},v2z:function(Value){gx.O.Z206EmpresaSite=Value},v2c:function(){gx.fn.setControlValue("EMPRESASITE",gx.O.A206EmpresaSite,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A206EmpresaSite=this.val()},val:function(){return gx.fn.getControlValue("EMPRESASITE")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[103]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAEMAIL",gxz:"Z207EmpresaEmail",gxold:"O207EmpresaEmail",gxvar:"A207EmpresaEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A207EmpresaEmail=Value},v2z:function(Value){gx.O.Z207EmpresaEmail=Value},v2c:function(){gx.fn.setControlValue("EMPRESAEMAIL",gx.O.A207EmpresaEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A207EmpresaEmail=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[107]={fld:"TABLE3",grid:0};
   GXValidFnc[110]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM",gxz:"ZV15Imagem",gxold:"OV15Imagem",gxvar:"AV15Imagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Imagem=Value},v2z:function(Value){gx.O.ZV15Imagem=Value},v2c:function(){gx.fn.setMultimediaValue("vIMAGEM",gx.O.AV15Imagem,gx.O.AV44Imagem_GXI)},c2v:function(){gx.O.AV44Imagem_GXI=this.val_GXI();gx.O.AV15Imagem=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEM")},val_GXI:function(){return gx.fn.getControlValue("vIMAGEM_GXI")}, gxvar_GXI:'AV44Imagem_GXI',nac:gx.falseFn};
   GXValidFnc[111]={fld:"TABLE5",grid:0};
   GXValidFnc[114]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[115]={fld:"TAB2",grid:0};
   GXValidFnc[118]={fld:"TABLE4",grid:0};
   GXValidFnc[121]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAINSCRICAOMUNICIPAL",gxz:"Z208EmpresaInscricaoMunicipal",gxold:"O208EmpresaInscricaoMunicipal",gxvar:"A208EmpresaInscricaoMunicipal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A208EmpresaInscricaoMunicipal=Value},v2z:function(Value){gx.O.Z208EmpresaInscricaoMunicipal=Value},v2c:function(){gx.fn.setControlValue("EMPRESAINSCRICAOMUNICIPAL",gx.O.A208EmpresaInscricaoMunicipal,0)},c2v:function(){gx.O.A208EmpresaInscricaoMunicipal=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAINSCRICAOMUNICIPAL")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[128]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAINSCRICAOESTADUAL",gxz:"Z209EmpresaInscricaoEstadual",gxold:"O209EmpresaInscricaoEstadual",gxvar:"A209EmpresaInscricaoEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A209EmpresaInscricaoEstadual=Value},v2z:function(Value){gx.O.Z209EmpresaInscricaoEstadual=Value},v2c:function(){gx.fn.setControlValue("EMPRESAINSCRICAOESTADUAL",gx.O.A209EmpresaInscricaoEstadual,0)},c2v:function(){gx.O.A209EmpresaInscricaoEstadual=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAINSCRICAOESTADUAL")},nac:gx.falseFn};
   GXValidFnc[131]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaufinscricaoestadual,isvalid:null,rgrid:[],fld:"EMPRESAUFINSCRICAOESTADUAL",gxz:"Z210EmpresaUFInscricaoEstadual",gxold:"O210EmpresaUFInscricaoEstadual",gxvar:"A210EmpresaUFInscricaoEstadual",ucs:[],op:[133],ip:[133],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A210EmpresaUFInscricaoEstadual=Value},v2z:function(Value){gx.O.Z210EmpresaUFInscricaoEstadual=Value},v2c:function(){gx.fn.setComboBoxValue("EMPRESAUFINSCRICAOESTADUAL",gx.O.A210EmpresaUFInscricaoEstadual);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A210EmpresaUFInscricaoEstadual=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAUFINSCRICAOESTADUAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 133 , function() {
   });
   GXValidFnc[136]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[138]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAINSCRICAOSUFRAMA",gxz:"Z211EmpresaInscricaoSuframa",gxold:"O211EmpresaInscricaoSuframa",gxvar:"A211EmpresaInscricaoSuframa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A211EmpresaInscricaoSuframa=Value},v2z:function(Value){gx.O.Z211EmpresaInscricaoSuframa=Value},v2c:function(){gx.fn.setControlValue("EMPRESAINSCRICAOSUFRAMA",gx.O.A211EmpresaInscricaoSuframa,0)},c2v:function(){gx.O.A211EmpresaInscricaoSuframa=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAINSCRICAOSUFRAMA")},nac:gx.falseFn};
   GXValidFnc[141]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPERFIL",gxz:"Z212EmpresaPerfil",gxold:"O212EmpresaPerfil",gxvar:"A212EmpresaPerfil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A212EmpresaPerfil=Value},v2z:function(Value){gx.O.Z212EmpresaPerfil=Value},v2c:function(){gx.fn.setComboBoxValue("EMPRESAPERFIL",gx.O.A212EmpresaPerfil)},c2v:function(){gx.O.A212EmpresaPerfil=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAPERFIL")},nac:gx.falseFn};
   GXValidFnc[146]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[148]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAATIVIDADE",gxz:"Z213EmpresaAtividade",gxold:"O213EmpresaAtividade",gxvar:"A213EmpresaAtividade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A213EmpresaAtividade=Value},v2z:function(Value){gx.O.Z213EmpresaAtividade=Value},v2c:function(){gx.fn.setComboBoxValue("EMPRESAATIVIDADE",gx.O.A213EmpresaAtividade)},c2v:function(){gx.O.A213EmpresaAtividade=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAATIVIDADE")},nac:gx.falseFn};
   GXValidFnc[151]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[153]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAREGIMETRIBUTARIO",gxz:"Z4964EmpresaRegimeTributario",gxold:"O4964EmpresaRegimeTributario",gxvar:"A4964EmpresaRegimeTributario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A4964EmpresaRegimeTributario=Value},v2z:function(Value){gx.O.Z4964EmpresaRegimeTributario=Value},v2c:function(){gx.fn.setComboBoxValue("EMPRESAREGIMETRIBUTARIO",gx.O.A4964EmpresaRegimeTributario)},c2v:function(){gx.O.A4964EmpresaRegimeTributario=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAREGIMETRIBUTARIO")},nac:gx.falseFn};
   GXValidFnc[159]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[161]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAVERSAOSISTEMA",gxz:"Z197EmpresaVersaoSistema",gxold:"O197EmpresaVersaoSistema",gxvar:"A197EmpresaVersaoSistema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A197EmpresaVersaoSistema=gx.num.intval(Value)},v2z:function(Value){gx.O.Z197EmpresaVersaoSistema=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EMPRESAVERSAOSISTEMA",gx.O.A197EmpresaVersaoSistema,0)},c2v:function(){gx.O.A197EmpresaVersaoSistema=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EMPRESAVERSAOSISTEMA",'.')},nac:gx.falseFn};
   GXValidFnc[164]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[166]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaultimoacesso,isvalid:null,rgrid:[],fld:"EMPRESAULTIMOACESSO",gxz:"Z195EmpresaUltimoAcesso",gxold:"O195EmpresaUltimoAcesso",gxvar:"A195EmpresaUltimoAcesso",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[166],ip:[166],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A195EmpresaUltimoAcesso=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z195EmpresaUltimoAcesso=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("EMPRESAULTIMOACESSO",gx.O.A195EmpresaUltimoAcesso,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A195EmpresaUltimoAcesso=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("EMPRESAULTIMOACESSO")},nac:gx.falseFn};
   this.declareDomainHdlr( 166 , function() {
   });
   GXValidFnc[172]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESALINHAGRID",gxz:"Z199EmpresaLinhaGrid",gxold:"O199EmpresaLinhaGrid",gxvar:"A199EmpresaLinhaGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A199EmpresaLinhaGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z199EmpresaLinhaGrid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EMPRESALINHAGRID",gx.O.A199EmpresaLinhaGrid,0)},c2v:function(){gx.O.A199EmpresaLinhaGrid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EMPRESALINHAGRID",'.')},nac:gx.falseFn};
   GXValidFnc[176]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[178]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESALINHAPROMPT",gxz:"Z2695EmpresaLinhaPrompt",gxold:"O2695EmpresaLinhaPrompt",gxvar:"A2695EmpresaLinhaPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2695EmpresaLinhaPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2695EmpresaLinhaPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EMPRESALINHAPROMPT",gx.O.A2695EmpresaLinhaPrompt,0)},c2v:function(){gx.O.A2695EmpresaLinhaPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EMPRESALINHAPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[179]={fld:"TAB3",grid:0};
   GXValidFnc[182]={fld:"TABLE6",grid:0};
   GXValidFnc[185]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[187]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESANOPORTAPOP",gxz:"Z5252EmpresaNoPortaPOP",gxold:"O5252EmpresaNoPortaPOP",gxvar:"A5252EmpresaNoPortaPOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5252EmpresaNoPortaPOP=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5252EmpresaNoPortaPOP=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EMPRESANOPORTAPOP",gx.O.A5252EmpresaNoPortaPOP,0)},c2v:function(){gx.O.A5252EmpresaNoPortaPOP=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EMPRESANOPORTAPOP",'.')},nac:gx.falseFn};
   GXValidFnc[190]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[192]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESASERVIDOREMAILPOP",gxz:"Z5251EmpresaServidorEmailPOP",gxold:"O5251EmpresaServidorEmailPOP",gxvar:"A5251EmpresaServidorEmailPOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5251EmpresaServidorEmailPOP=Value},v2z:function(Value){gx.O.Z5251EmpresaServidorEmailPOP=Value},v2c:function(){gx.fn.setControlValue("EMPRESASERVIDOREMAILPOP",gx.O.A5251EmpresaServidorEmailPOP,0)},c2v:function(){gx.O.A5251EmpresaServidorEmailPOP=this.val()},val:function(){return gx.fn.getControlValue("EMPRESASERVIDOREMAILPOP")},nac:gx.falseFn};
   GXValidFnc[195]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[197]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAEMAILPOP",gxz:"Z5253EmpresaEmailPOP",gxold:"O5253EmpresaEmailPOP",gxvar:"A5253EmpresaEmailPOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5253EmpresaEmailPOP=Value},v2z:function(Value){gx.O.Z5253EmpresaEmailPOP=Value},v2c:function(){gx.fn.setControlValue("EMPRESAEMAILPOP",gx.O.A5253EmpresaEmailPOP,0)},c2v:function(){gx.O.A5253EmpresaEmailPOP=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAEMAILPOP")},nac:gx.falseFn};
   GXValidFnc[200]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[202]={lvl:0,type:"svchar",len:60,dec:0,sign:false,isPwd:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresasenhaemailpop,isvalid:null,rgrid:[],fld:"vEMPRESASENHAEMAILPOP",gxz:"ZV23EmpresaSenhaEmailPOP",gxold:"OV23EmpresaSenhaEmailPOP",gxvar:"AV23EmpresaSenhaEmailPOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23EmpresaSenhaEmailPOP=Value},v2z:function(Value){gx.O.ZV23EmpresaSenhaEmailPOP=Value},v2c:function(){gx.fn.setControlValue("vEMPRESASENHAEMAILPOP",gx.O.AV23EmpresaSenhaEmailPOP,0)},c2v:function(){gx.O.AV23EmpresaSenhaEmailPOP=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESASENHAEMAILPOP")},nac:gx.falseFn};
   GXValidFnc[206]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESASNSEGEMAILPOP",gxz:"Z5256EmpresaSnSegEmailPOP",gxold:"O5256EmpresaSnSegEmailPOP",gxvar:"A5256EmpresaSnSegEmailPOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A5256EmpresaSnSegEmailPOP=Value},v2z:function(Value){gx.O.Z5256EmpresaSnSegEmailPOP=Value},v2c:function(){gx.fn.setCheckBoxValue("EMPRESASNSEGEMAILPOP",gx.O.A5256EmpresaSnSegEmailPOP,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5256EmpresaSnSegEmailPOP=this.val()},val:function(){return gx.fn.getControlValue("EMPRESASNSEGEMAILPOP")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 206 , function() {
   });
   GXValidFnc[210]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESASNEXCLUIEMAILPOP",gxz:"Z6631EmpresaSnExcluiEmailPOP",gxold:"O6631EmpresaSnExcluiEmailPOP",gxvar:"A6631EmpresaSnExcluiEmailPOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A6631EmpresaSnExcluiEmailPOP=Value},v2z:function(Value){gx.O.Z6631EmpresaSnExcluiEmailPOP=Value},v2c:function(){gx.fn.setCheckBoxValue("EMPRESASNEXCLUIEMAILPOP",gx.O.A6631EmpresaSnExcluiEmailPOP,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6631EmpresaSnExcluiEmailPOP=this.val()},val:function(){return gx.fn.getControlValue("EMPRESASNEXCLUIEMAILPOP")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 210 , function() {
   });
   GXValidFnc[211]={fld:"TAB4",grid:0};
   GXValidFnc[214]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[216]={lvl:18,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:215,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_18",gxz:"ZnRcdDeleted_18",gxold:"OnRcdDeleted_18",gxvar:"nRcdDeleted_18",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_18=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_18=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_18",row || gx.fn.currentGridRowImpl(215),gx.O.nRcdDeleted_18,0)},c2v:function(){gx.O.nRcdDeleted_18=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_18",row || gx.fn.currentGridRowImpl(215),'.')},nac:gx.falseFn};
   GXValidFnc[217]={lvl:18,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:215,gxgrid:this.Grid1Container,fnc:this.Valid_Sistemaid,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[217],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(215),gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(215))},nac:gx.falseFn};
   GXValidFnc[218]={lvl:18,type:"date",len:10,dec:0,sign:false,ro:0,isacc:1,grid:215,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAEMPRESAVENCIMENTO",gxz:"Z214SistemaEmpresaVencimento",gxold:"O214SistemaEmpresaVencimento",gxvar:"A214SistemaEmpresaVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A214SistemaEmpresaVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z214SistemaEmpresaVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SISTEMAEMPRESAVENCIMENTO",row || gx.fn.currentGridRowImpl(215),gx.O.A214SistemaEmpresaVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A214SistemaEmpresaVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SISTEMAEMPRESAVENCIMENTO",row || gx.fn.currentGridRowImpl(215))},nac:gx.falseFn};
   GXValidFnc[219]={lvl:18,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:215,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMABLOQUEARACESSOSIMULTANE",gxz:"Z215SistemaBloquearAcessoSimultane",gxold:"O215SistemaBloquearAcessoSimultane",gxvar:"A215SistemaBloquearAcessoSimultane",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A215SistemaBloquearAcessoSimultane=Value},v2z:function(Value){gx.O.Z215SistemaBloquearAcessoSimultane=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("SISTEMABLOQUEARACESSOSIMULTANE",row || gx.fn.currentGridRowImpl(215),gx.O.A215SistemaBloquearAcessoSimultane,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A215SistemaBloquearAcessoSimultane=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMABLOQUEARACESSOSIMULTANE",row || gx.fn.currentGridRowImpl(215))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[220]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[227]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESALOGOMARCA",gxz:"ZV34EmpresaLogomarca",gxold:"OV34EmpresaLogomarca",gxvar:"AV34EmpresaLogomarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34EmpresaLogomarca=Value},v2z:function(Value){gx.O.ZV34EmpresaLogomarca=Value},v2c:function(){gx.fn.setControlValue("vEMPRESALOGOMARCA",gx.O.AV34EmpresaLogomarca,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34EmpresaLogomarca=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESALOGOMARCA")},nac:gx.falseFn};
   this.declareDomainHdlr( 227 , function() {
   });
   GXValidFnc[228]={lvl:0,type:"svchar",len:60,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESASENHAEMAILPOP",gxz:"Z5254EmpresaSenhaEmailPOP",gxold:"O5254EmpresaSenhaEmailPOP",gxvar:"A5254EmpresaSenhaEmailPOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5254EmpresaSenhaEmailPOP=Value},v2z:function(Value){gx.O.Z5254EmpresaSenhaEmailPOP=Value},v2c:function(){gx.fn.setControlValue("EMPRESASENHAEMAILPOP",gx.O.A5254EmpresaSenhaEmailPOP,0)},c2v:function(){gx.O.A5254EmpresaSenhaEmailPOP=this.val()},val:function(){return gx.fn.getControlValue("EMPRESASENHAEMAILPOP")},nac:gx.falseFn};
   GXValidFnc[231]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[232]={fld:"JS", format:2,grid:0};
   GXValidFnc[234]={fld:"BTNHELP",grid:0};
   GXValidFnc[236]={fld:"PROMPT_198",grid:17};
   this.A138EmpresaId = "" ;
   this.Z138EmpresaId = "" ;
   this.O138EmpresaId = "" ;
   this.A4302EmpresaSituacao = "" ;
   this.Z4302EmpresaSituacao = "" ;
   this.O4302EmpresaSituacao = "" ;
   this.A194EmpresaTipoPessoa = "" ;
   this.Z194EmpresaTipoPessoa = "" ;
   this.O194EmpresaTipoPessoa = "" ;
   this.A186EmpresaNome = "" ;
   this.Z186EmpresaNome = "" ;
   this.O186EmpresaNome = "" ;
   this.A191EmpresaFantasia = "" ;
   this.Z191EmpresaFantasia = "" ;
   this.O191EmpresaFantasia = "" ;
   this.A202EmpresaCNPJ = "" ;
   this.Z202EmpresaCNPJ = "" ;
   this.O202EmpresaCNPJ = "" ;
   this.A203EmpresaCPF = "" ;
   this.Z203EmpresaCPF = "" ;
   this.O203EmpresaCPF = "" ;
   this.A187EmpresaEndereco = "" ;
   this.Z187EmpresaEndereco = "" ;
   this.O187EmpresaEndereco = "" ;
   this.A204EmpresaNumeroEndereco = 0 ;
   this.Z204EmpresaNumeroEndereco = 0 ;
   this.O204EmpresaNumeroEndereco = 0 ;
   this.A188EmpresaComplemento = "" ;
   this.Z188EmpresaComplemento = "" ;
   this.O188EmpresaComplemento = "" ;
   this.A205EmpresaBairro = "" ;
   this.Z205EmpresaBairro = "" ;
   this.O205EmpresaBairro = "" ;
   this.A196EmpresaCEP = "" ;
   this.Z196EmpresaCEP = "" ;
   this.O196EmpresaCEP = "" ;
   this.A189EmpresaCidade = "" ;
   this.Z189EmpresaCidade = "" ;
   this.O189EmpresaCidade = "" ;
   this.A190EmpresaUF = "" ;
   this.Z190EmpresaUF = "" ;
   this.O190EmpresaUF = "" ;
   this.A192EmpresaTelefone = "" ;
   this.Z192EmpresaTelefone = "" ;
   this.O192EmpresaTelefone = "" ;
   this.A193EmpresaFax = "" ;
   this.Z193EmpresaFax = "" ;
   this.O193EmpresaFax = "" ;
   this.A198ImpressoraId = 0 ;
   this.Z198ImpressoraId = 0 ;
   this.O198ImpressoraId = 0 ;
   this.A201EmpresaDiretorioRelatorio = "" ;
   this.Z201EmpresaDiretorioRelatorio = "" ;
   this.O201EmpresaDiretorioRelatorio = "" ;
   this.A206EmpresaSite = "" ;
   this.Z206EmpresaSite = "" ;
   this.O206EmpresaSite = "" ;
   this.A207EmpresaEmail = "" ;
   this.Z207EmpresaEmail = "" ;
   this.O207EmpresaEmail = "" ;
   this.AV44Imagem_GXI = "" ;
   this.AV15Imagem = "" ;
   this.ZV15Imagem = "" ;
   this.OV15Imagem = "" ;
   this.A208EmpresaInscricaoMunicipal = "" ;
   this.Z208EmpresaInscricaoMunicipal = "" ;
   this.O208EmpresaInscricaoMunicipal = "" ;
   this.A209EmpresaInscricaoEstadual = "" ;
   this.Z209EmpresaInscricaoEstadual = "" ;
   this.O209EmpresaInscricaoEstadual = "" ;
   this.A210EmpresaUFInscricaoEstadual = "" ;
   this.Z210EmpresaUFInscricaoEstadual = "" ;
   this.O210EmpresaUFInscricaoEstadual = "" ;
   this.A211EmpresaInscricaoSuframa = "" ;
   this.Z211EmpresaInscricaoSuframa = "" ;
   this.O211EmpresaInscricaoSuframa = "" ;
   this.A212EmpresaPerfil = "" ;
   this.Z212EmpresaPerfil = "" ;
   this.O212EmpresaPerfil = "" ;
   this.A213EmpresaAtividade = "" ;
   this.Z213EmpresaAtividade = "" ;
   this.O213EmpresaAtividade = "" ;
   this.A4964EmpresaRegimeTributario = "" ;
   this.Z4964EmpresaRegimeTributario = "" ;
   this.O4964EmpresaRegimeTributario = "" ;
   this.A197EmpresaVersaoSistema = 0 ;
   this.Z197EmpresaVersaoSistema = 0 ;
   this.O197EmpresaVersaoSistema = 0 ;
   this.A195EmpresaUltimoAcesso = gx.date.nullDate() ;
   this.Z195EmpresaUltimoAcesso = gx.date.nullDate() ;
   this.O195EmpresaUltimoAcesso = gx.date.nullDate() ;
   this.A199EmpresaLinhaGrid = 0 ;
   this.Z199EmpresaLinhaGrid = 0 ;
   this.O199EmpresaLinhaGrid = 0 ;
   this.A2695EmpresaLinhaPrompt = 0 ;
   this.Z2695EmpresaLinhaPrompt = 0 ;
   this.O2695EmpresaLinhaPrompt = 0 ;
   this.A5252EmpresaNoPortaPOP = 0 ;
   this.Z5252EmpresaNoPortaPOP = 0 ;
   this.O5252EmpresaNoPortaPOP = 0 ;
   this.A5251EmpresaServidorEmailPOP = "" ;
   this.Z5251EmpresaServidorEmailPOP = "" ;
   this.O5251EmpresaServidorEmailPOP = "" ;
   this.A5253EmpresaEmailPOP = "" ;
   this.Z5253EmpresaEmailPOP = "" ;
   this.O5253EmpresaEmailPOP = "" ;
   this.AV23EmpresaSenhaEmailPOP = "" ;
   this.ZV23EmpresaSenhaEmailPOP = "" ;
   this.OV23EmpresaSenhaEmailPOP = "" ;
   this.A5256EmpresaSnSegEmailPOP = "" ;
   this.Z5256EmpresaSnSegEmailPOP = "" ;
   this.O5256EmpresaSnSegEmailPOP = "" ;
   this.A6631EmpresaSnExcluiEmailPOP = "" ;
   this.Z6631EmpresaSnExcluiEmailPOP = "" ;
   this.O6631EmpresaSnExcluiEmailPOP = "" ;
   this.ZnRcdDeleted_18 = 0 ;
   this.OnRcdDeleted_18 = 0 ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.Z214SistemaEmpresaVencimento = gx.date.nullDate() ;
   this.O214SistemaEmpresaVencimento = gx.date.nullDate() ;
   this.Z215SistemaBloquearAcessoSimultane = "" ;
   this.O215SistemaBloquearAcessoSimultane = "" ;
   this.AV34EmpresaLogomarca = "" ;
   this.ZV34EmpresaLogomarca = "" ;
   this.OV34EmpresaLogomarca = "" ;
   this.A5254EmpresaSenhaEmailPOP = "" ;
   this.Z5254EmpresaSenhaEmailPOP = "" ;
   this.O5254EmpresaSenhaEmailPOP = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.A140SistemaId = "" ;
   this.A539SistemaNome = "" ;
   this.A214SistemaEmpresaVencimento = gx.date.nullDate() ;
   this.A215SistemaBloquearAcessoSimultane = "" ;
   this.A4303SistemaEmpresaSoma = 0 ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaId = "" ;
   this.AV23EmpresaSenhaEmailPOP = "" ;
   this.AV38BlueFocusEnv = {} ;
   this.AV42Pgmname = "" ;
   this.AV43Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.AV17Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV16Tabela = "" ;
   this.AV24ErrDsc = "" ;
   this.AV9Erro = 0 ;
   this.AV28Erro1 = 0 ;
   this.AV14ret = 0 ;
   this.AV10EmpresaId = "" ;
   this.AV34EmpresaLogomarca = "" ;
   this.AV15Imagem = "" ;
   this.AV37path = "" ;
   this.AV36File = {} ;
   this.AV40WebSession = {} ;
   this.A138EmpresaId = "" ;
   this.A191EmpresaFantasia = "" ;
   this.A195EmpresaUltimoAcesso = gx.date.nullDate() ;
   this.AV31EmpresaTipoPessoa = "" ;
   this.AV22SistemaEmpresaSoma = 0 ;
   this.Gx_BScreen = 0 ;
   this.A194EmpresaTipoPessoa = "" ;
   this.A186EmpresaNome = "" ;
   this.A203EmpresaCPF = "" ;
   this.A202EmpresaCNPJ = "" ;
   this.A187EmpresaEndereco = "" ;
   this.A188EmpresaComplemento = "" ;
   this.A189EmpresaCidade = "" ;
   this.A190EmpresaUF = "" ;
   this.A192EmpresaTelefone = "" ;
   this.A193EmpresaFax = "" ;
   this.A196EmpresaCEP = "" ;
   this.A197EmpresaVersaoSistema = 0 ;
   this.A198ImpressoraId = 0 ;
   this.A199EmpresaLinhaGrid = 0 ;
   this.A2695EmpresaLinhaPrompt = 0 ;
   this.A200EmpresaLogomarca = "" ;
   this.A201EmpresaDiretorioRelatorio = "" ;
   this.A204EmpresaNumeroEndereco = 0 ;
   this.A205EmpresaBairro = "" ;
   this.A206EmpresaSite = "" ;
   this.A207EmpresaEmail = "" ;
   this.A208EmpresaInscricaoMunicipal = "" ;
   this.A209EmpresaInscricaoEstadual = "" ;
   this.A210EmpresaUFInscricaoEstadual = "" ;
   this.A211EmpresaInscricaoSuframa = "" ;
   this.A212EmpresaPerfil = "" ;
   this.A213EmpresaAtividade = "" ;
   this.A4302EmpresaSituacao = "" ;
   this.A4964EmpresaRegimeTributario = "" ;
   this.A5251EmpresaServidorEmailPOP = "" ;
   this.A5252EmpresaNoPortaPOP = 0 ;
   this.A5253EmpresaEmailPOP = "" ;
   this.A5254EmpresaSenhaEmailPOP = "" ;
   this.A5255EmpresaChaveEmailPOP = "" ;
   this.A5256EmpresaSnSegEmailPOP = "" ;
   this.A6631EmpresaSnExcluiEmailPOP = "" ;
   this.AV29Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e120d2_client": ["'FECHAR'", true] ,"e130d2_client": ["AFTER TRN", true] ,"e140d2_client": ["'UPLOAD'", true] ,"e150d17_client": ["ENTER", true] ,"e160d17_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV10EmpresaId',fld:'vEMPRESAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV34EmpresaLogomarca',fld:'vEMPRESALOGOMARCA'},{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV15Imagem',fld:'vIMAGEM'}]];
   this.EvtParms["'UPLOAD'"] = [[],[{av:'AV39isCloud',fld:'vISCLOUD'},{av:'AV34EmpresaLogomarca',fld:'vEMPRESALOGOMARCA'}]];
   this.setPrompt("PROMPT_198", [88]);
   this.setPrompt("PROMPT_140", [217]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV10EmpresaId", "vEMPRESAID", 0, "char");
   this.setVCMap("AV24ErrDsc", "vERRDSC", 0, "svchar");
   this.setVCMap("AV31EmpresaTipoPessoa", "vEMPRESATIPOPESSOA", 0, "char");
   this.setVCMap("AV9Erro", "vERRO", 0, "int");
   this.setVCMap("AV28Erro1", "vERRO1", 0, "int");
   this.setVCMap("AV14ret", "vRET", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("A200EmpresaLogomarca", "EMPRESALOGOMARCA", 0, "svchar");
   this.setVCMap("AV22SistemaEmpresaSoma", "vSISTEMAEMPRESASOMA", 0, "int");
   this.setVCMap("A5255EmpresaChaveEmailPOP", "EMPRESACHAVEEMAILPOP", 0, "char");
   this.setVCMap("AV43Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("A4303SistemaEmpresaSoma", "SISTEMAEMPRESASOMA", 215, "int");
   this.setVCMap("A539SistemaNome", "SISTEMANOME", 215, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tempresa());
