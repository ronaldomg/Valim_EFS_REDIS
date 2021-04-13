/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:49:58.44
*/
gx.evt.autoSkip = false;
gx.define('tacervo', false, function () {
   this.ServerClass =  "tacervo" ;
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
      this.AV16AcervoId=gx.fn.getIntegerValue("vACERVOID",'.') ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A3082AcervoEmpresaId=gx.fn.getControlValue("ACERVOEMPRESAID") ;
      this.A3080TipoItemEmpresaId=gx.fn.getControlValue("TIPOITEMEMPRESAID") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV32AcervoIdAux=gx.fn.getIntegerValue("vACERVOIDAUX",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.A126AcervoUltimaChave=gx.fn.getIntegerValue("ACERVOULTIMACHAVE",'.') ;
      this.A127AcervoUltimoIndice=gx.fn.getIntegerValue("ACERVOULTIMOINDICE",'.') ;
      this.A128AcervoUltimoAutor=gx.fn.getIntegerValue("ACERVOULTIMOAUTOR",'.') ;
      this.A43EditoraDescricao=gx.fn.getControlValue("EDITORADESCRICAO") ;
      this.A44ClassificacaoLiterariaDescrica=gx.fn.getControlValue("CLASSIFICACAOLITERARIADESCRICA") ;
      this.A46IdiomaDescricao=gx.fn.getControlValue("IDIOMADESCRICAO") ;
      this.A125AcervoQtdeAutores=gx.fn.getIntegerValue("ACERVOQTDEAUTORES",'.') ;
      this.AV63Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV62Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Acervoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Acervoid",["gx.O.A3082AcervoEmpresaId", "gx.O.A39AcervoId", "gx.O.A125AcervoQtdeAutores"],["A125AcervoQtdeAutores"]);
      return true;
   }
   this.Valid_Acervotitulo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACERVOTITULO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Editoraid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Editoraid",["gx.O.A118EditoraId", "gx.O.A43EditoraDescricao"],["A43EditoraDescricao"]);
      return true;
   }
   this.Valid_Classificacaoliterariaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classificacaoliterariaid",["gx.O.A119ClassificacaoLiterariaId", "gx.O.A44ClassificacaoLiterariaDescrica"],["A44ClassificacaoLiterariaDescrica"]);
      return true;
   }
   this.Valid_Tipoitemid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipoitemid",["gx.O.AV28TipoItemEmpresaId", "gx.O.A120TipoItemId", "gx.O.A3080TipoItemEmpresaId", "gx.O.A45TipoItemDescricao"],["A3080TipoItemEmpresaId", "A45TipoItemDescricao"]);
      return true;
   }
   this.Valid_Idiomaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Idiomaid",["gx.O.A124IdiomaId", "gx.O.A46IdiomaDescricao"],["A46IdiomaDescricao"]);
      return true;
   }
   this.Valid_Acervoestante=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACERVOESTANTE");
         this.AnyError  = 0;
         try {
            this.A3212AcervoEstante =  gx.text.upper( this.A3212AcervoEstante)  ;
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
   this.Valid_Acervoprateleira=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACERVOPRATELEIRA");
         this.AnyError  = 0;
         try {
            this.A3213AcervoPrateleira =  gx.text.upper( this.A3213AcervoPrateleira)  ;
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
   this.Valid_Acervoqtdeexemplares=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Acervoqtdeexemplares",["gx.O.A40AcervoTitulo", "gx.O.A118EditoraId", "gx.O.A119ClassificacaoLiterariaId", "gx.O.A120TipoItemId", "gx.O.A124IdiomaId", "gx.O.A122AcervoQtdeExemplares", "gx.O.AV10ret"],["AV10ret"]);
      return true;
   }
   this.Validv_Tipoitemempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOITEMEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Palavrachaveid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(164) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PALAVRACHAVEID", gx.fn.currentGridRowImpl(164));
         this.AnyError  = 0;
         this.sMode325 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(325,164)  ;
         this.standaloneModal01325( );
         this.standaloneNotModal01325( );
         if ( gx.fn.gridDuplicateKey(166) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Palavra Chave", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode325  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal01325=function()
   {
      this.A126AcervoUltimaChave = gx.num.trunc( gx.fn.serialRule( "A126AcervoUltimaChave" , "A134PalavraChaveId" , 164 , 1 , this ) ,0) ;
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("PALAVRACHAVEID","Enabled", 0 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal01325=function()
   {
      try {
         gx.fn.setCtrlProperty("PALAVRACHAVEID","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.Valid_Indiceid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(154) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("INDICEID", gx.fn.currentGridRowImpl(154));
         this.AnyError  = 0;
         this.sMode326 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(326,154)  ;
         this.standaloneModal01326( );
         this.standaloneNotModal01326( );
         if ( gx.fn.gridDuplicateKey(156) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Indice", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode326  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal01326=function()
   {
      this.A127AcervoUltimoIndice = gx.num.trunc( gx.fn.serialRule( "A127AcervoUltimoIndice" , "A135IndiceId" , 154 , 1 , this ) ,0) ;
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("INDICEID","Enabled", 0 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal01326=function()
   {
      try {
         gx.fn.setCtrlProperty("INDICEID","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.Valid_Acervoautoresid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(144) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ACERVOAUTORESID", gx.fn.currentGridRowImpl(144));
         this.AnyError  = 0;
         this.sMode327 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(327,144)  ;
         this.standaloneModal01327( );
         this.standaloneNotModal01327( );
         if ( gx.fn.gridDuplicateKey(146) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Autores", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode327  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acervoautorid=function()
   {
      this.sMode327 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(327,144)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Acervoautorid",["gx.O.Gx_mode", "gx.O.O125AcervoQtdeAutores", "gx.O.A132AcervoAutorId", "gx.O.A133AcervoAutorNome"],["A133AcervoAutorNome"]);
      this.A125AcervoQtdeAutores = gx.num.trunc( gx.fn.countFrm( "A132AcervoAutorId" , 0 , 144 , gx.trueFn , [] ) ,0) ;
      this.Gx_mode =  this.sMode327  ;
      return true;
   }
   this.standaloneModal01327=function()
   {
      this.A128AcervoUltimoAutor = gx.num.trunc( gx.fn.serialRule( "A128AcervoUltimoAutor" , "A136AcervoAutoresId" , 144 , 1 , this ) ,0) ;
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("ACERVOAUTORESID","Enabled", 0 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal01327=function()
   {
      try {
         gx.fn.setCtrlProperty("ACERVOAUTORESID","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.e12012_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13012_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14012_client=function()
   {
      this.executeServerEvent("'UPLOAD'", true, null, false, false);
   };
   this.e1501324_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1601324_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,13,16,18,21,23,26,28,31,33,36,38,41,43,46,48,51,53,56,58,61,63,66,68,69,72,74,77,79,80,81,83,86,89,92,93,96,99,102,104,107,109,112,114,117,119,122,124,127,129,130,133,136,139,140,143,145,146,147,148,149,150,153,155,156,157,158,159,160,163,165,166,167,168,175,178,179,180,184];
   this.GXLastCtrlId =184;
   this.Grid3Container = new gx.grid.grid(this, 327,"Autores",144,"Grid3","Grid3","Grid3Container",this.CmpContext,this.IsMasterPage,"tacervo",[136],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid3Container = this.Grid3Container;
   Grid3Container.addSingleLineEdit("nRcdDeleted_327",145,"vNRCDDELETED_327","","","nRcdDeleted_327","int",0,"px",4,1,"right",null,[],"nRcdDeleted_327","nRcdDeleted_327",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(136,146,"ACERVOAUTORESID","Sequência","","AcervoAutoresId","int",0,"px",4,4,"right",null,[],136,"AcervoAutoresId",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(132,147,"ACERVOAUTORID","Código","","AcervoAutorId","int",0,"px",7,7,"right",null,[],132,"AcervoAutorId",true,0,false,false,"Attribute",1,"");
   Grid3Container.addBitmap("prompt_132","PROMPT_132",185,0,"",0,"",null,"","","gx-prompt Image","");
   Grid3Container.addSingleLineEdit(133,148,"ACERVOAUTORNOME","Nome do Autor","","AcervoAutorNome","svchar",0,"px",40,40,"left",null,[],133,"AcervoAutorNome",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid3Container);
   this.Grid2Container = new gx.grid.grid(this, 326,"Indice",154,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"tacervo",[135],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("nRcdDeleted_326",155,"vNRCDDELETED_326","","","nRcdDeleted_326","int",0,"px",4,1,"right",null,[],"nRcdDeleted_326","nRcdDeleted_326",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(135,156,"INDICEID","Sequência","","IndiceId","int",0,"px",4,4,"right",null,[],135,"IndiceId",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(130,157,"INDICETITULO","Título","","IndiceTitulo","svchar",0,"px",40,40,"left",null,[],130,"IndiceTitulo",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(131,158,"INDICEPAGINA","Página","","IndicePagina","int",0,"px",4,4,"right",null,[],131,"IndicePagina",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   this.Grid1Container = new gx.grid.grid(this, 325,"PalavraChave",164,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tacervo",[134],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_325",165,"vNRCDDELETED_325","","","nRcdDeleted_325","int",0,"px",4,1,"right",null,[],"nRcdDeleted_325","nRcdDeleted_325",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(134,166,"PALAVRACHAVEID","Sequência","","PalavraChaveId","int",0,"px",4,4,"right",null,[],134,"PalavraChaveId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(129,167,"PALAVRACHAVEFRASE","Frase","","PalavraChaveFrase","svchar",0,"px",35,35,"left",null,[],129,"PalavraChaveFrase",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 9, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV47Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV47Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tacervo_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLEPRINC",grid:0};
   GXValidFnc[6]={fld:"TABLE6",grid:0};
   GXValidFnc[10]={fld:"TAB1",grid:0};
   GXValidFnc[13]={fld:"TABLE2",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Acervoid,isvalid:null,rgrid:[this.Grid3Container,this.Grid2Container,this.Grid1Container],fld:"ACERVOID",gxz:"Z39AcervoId",gxold:"O39AcervoId",gxvar:"A39AcervoId",ucs:[],op:[],ip:[18],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A39AcervoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z39AcervoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACERVOID",gx.O.A39AcervoId,0)},c2v:function(){gx.O.A39AcervoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACERVOID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acervotitulo,isvalid:null,rgrid:[],fld:"ACERVOTITULO",gxz:"Z40AcervoTitulo",gxold:"O40AcervoTitulo",gxvar:"A40AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A40AcervoTitulo=Value},v2z:function(Value){gx.O.Z40AcervoTitulo=Value},v2c:function(){gx.fn.setControlValue("ACERVOTITULO",gx.O.A40AcervoTitulo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A40AcervoTitulo=this.val()},val:function(){return gx.fn.getControlValue("ACERVOTITULO")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOSUBTITULO",gxz:"Z47AcervoSubtitulo",gxold:"O47AcervoSubtitulo",gxvar:"A47AcervoSubtitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A47AcervoSubtitulo=Value},v2z:function(Value){gx.O.Z47AcervoSubtitulo=Value},v2c:function(){gx.fn.setControlValue("ACERVOSUBTITULO",gx.O.A47AcervoSubtitulo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A47AcervoSubtitulo=this.val()},val:function(){return gx.fn.getControlValue("ACERVOSUBTITULO")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[31]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVODATAAQUISICAO",gxz:"Z112AcervoDataAquisicao",gxold:"O112AcervoDataAquisicao",gxvar:"A112AcervoDataAquisicao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A112AcervoDataAquisicao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z112AcervoDataAquisicao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACERVODATAAQUISICAO",gx.O.A112AcervoDataAquisicao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A112AcervoDataAquisicao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ACERVODATAAQUISICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[36]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVODATABAIXA",gxz:"Z113AcervoDataBaixa",gxold:"O113AcervoDataBaixa",gxvar:"A113AcervoDataBaixa",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A113AcervoDataBaixa=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z113AcervoDataBaixa=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACERVODATABAIXA",gx.O.A113AcervoDataBaixa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A113AcervoDataBaixa=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ACERVODATABAIXA")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOLOCALPUBLICACAO",gxz:"Z117AcervoLocalPublicacao",gxold:"O117AcervoLocalPublicacao",gxvar:"A117AcervoLocalPublicacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A117AcervoLocalPublicacao=Value},v2z:function(Value){gx.O.Z117AcervoLocalPublicacao=Value},v2c:function(){gx.fn.setControlValue("ACERVOLOCALPUBLICACAO",gx.O.A117AcervoLocalPublicacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A117AcervoLocalPublicacao=this.val()},val:function(){return gx.fn.getControlValue("ACERVOLOCALPUBLICACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOISBN",gxz:"Z41AcervoISBN",gxold:"O41AcervoISBN",gxvar:"A41AcervoISBN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A41AcervoISBN=Value},v2z:function(Value){gx.O.Z41AcervoISBN=Value},v2c:function(){gx.fn.setControlValue("ACERVOISBN",gx.O.A41AcervoISBN,0)},c2v:function(){gx.O.A41AcervoISBN=this.val()},val:function(){return gx.fn.getControlValue("ACERVOISBN")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:13,dec:0,sign:false,pic:"ZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOCODBARRAS",gxz:"Z42AcervoCodBarras",gxold:"O42AcervoCodBarras",gxvar:"A42AcervoCodBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A42AcervoCodBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.Z42AcervoCodBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACERVOCODBARRAS",gx.O.A42AcervoCodBarras,0)},c2v:function(){gx.O.A42AcervoCodBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACERVOCODBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Editoraid,isvalid:null,rgrid:[],fld:"EDITORAID",gxz:"Z118EditoraId",gxold:"O118EditoraId",gxvar:"A118EditoraId",ucs:[],op:[],ip:[58],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A118EditoraId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z118EditoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("EDITORAID",gx.O.A118EditoraId)},c2v:function(){gx.O.A118EditoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EDITORAID",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoliterariaid,isvalid:null,rgrid:[],fld:"CLASSIFICACAOLITERARIAID",gxz:"Z119ClassificacaoLiterariaId",gxold:"O119ClassificacaoLiterariaId",gxvar:"A119ClassificacaoLiterariaId",ucs:[],op:[],ip:[63],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A119ClassificacaoLiterariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z119ClassificacaoLiterariaId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("CLASSIFICACAOLITERARIAID",gx.O.A119ClassificacaoLiterariaId)},c2v:function(){gx.O.A119ClassificacaoLiterariaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSIFICACAOLITERARIAID",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoitemid,isvalid:null,rgrid:[],fld:"TIPOITEMID",gxz:"Z120TipoItemId",gxold:"O120TipoItemId",gxvar:"A120TipoItemId",ucs:[],op:[69],ip:[69,68,180],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A120TipoItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z120TipoItemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOITEMID",gx.O.A120TipoItemId,0)},c2v:function(){gx.O.A120TipoItemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOITEMID",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOITEMDESCRICAO",gxz:"Z45TipoItemDescricao",gxold:"O45TipoItemDescricao",gxvar:"A45TipoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A45TipoItemDescricao=Value},v2z:function(Value){gx.O.Z45TipoItemDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOITEMDESCRICAO",gx.O.A45TipoItemDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A45TipoItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOITEMDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Idiomaid,isvalid:null,rgrid:[],fld:"IDIOMAID",gxz:"Z124IdiomaId",gxold:"O124IdiomaId",gxvar:"A124IdiomaId",ucs:[],op:[],ip:[74],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A124IdiomaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z124IdiomaId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("IDIOMAID",gx.O.A124IdiomaId)},c2v:function(){gx.O.A124IdiomaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IDIOMAID",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acervoestante,isvalid:null,rgrid:[],fld:"ACERVOESTANTE",gxz:"Z3212AcervoEstante",gxold:"O3212AcervoEstante",gxvar:"A3212AcervoEstante",ucs:[],op:[79],ip:[79],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3212AcervoEstante=Value},v2z:function(Value){gx.O.Z3212AcervoEstante=Value},v2c:function(){gx.fn.setControlValue("ACERVOESTANTE",gx.O.A3212AcervoEstante,0)},c2v:function(){gx.O.A3212AcervoEstante=this.val()},val:function(){return gx.fn.getControlValue("ACERVOESTANTE")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acervoprateleira,isvalid:null,rgrid:[],fld:"ACERVOPRATELEIRA",gxz:"Z3213AcervoPrateleira",gxold:"O3213AcervoPrateleira",gxvar:"A3213AcervoPrateleira",ucs:[],op:[81],ip:[81],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3213AcervoPrateleira=Value},v2z:function(Value){gx.O.Z3213AcervoPrateleira=Value},v2c:function(){gx.fn.setControlValue("ACERVOPRATELEIRA",gx.O.A3213AcervoPrateleira,0)},c2v:function(){gx.O.A3213AcervoPrateleira=this.val()},val:function(){return gx.fn.getControlValue("ACERVOPRATELEIRA")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TABLE3",grid:0};
   GXValidFnc[86]={fld:"TABLE12",grid:0};
   GXValidFnc[89]={fld:"TABIMAGEM",grid:0};
   GXValidFnc[92]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFOTO",gxz:"ZV17Foto",gxold:"OV17Foto",gxvar:"AV17Foto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Foto=Value},v2z:function(Value){gx.O.ZV17Foto=Value},v2c:function(){gx.fn.setMultimediaValue("vFOTO",gx.O.AV17Foto,gx.O.AV64Foto_GXI)},c2v:function(){gx.O.AV64Foto_GXI=this.val_GXI();gx.O.AV17Foto=this.val()},val:function(){return gx.fn.getBlobValue("vFOTO")},val_GXI:function(){return gx.fn.getControlValue("vFOTO_GXI")}, gxvar_GXI:'AV64Foto_GXI',nac:gx.falseFn};
   GXValidFnc[93]={fld:"TABCARIMG",grid:0};
   GXValidFnc[96]={fld:"TXTCARREGARIMG", format:0,grid:0};
   GXValidFnc[99]={fld:"TABLE1",grid:0};
   GXValidFnc[102]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOANOPUBLICACAO",gxz:"Z48AcervoAnoPublicacao",gxold:"O48AcervoAnoPublicacao",gxvar:"A48AcervoAnoPublicacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A48AcervoAnoPublicacao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z48AcervoAnoPublicacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACERVOANOPUBLICACAO",gx.O.A48AcervoAnoPublicacao,0)},c2v:function(){gx.O.A48AcervoAnoPublicacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACERVOANOPUBLICACAO",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOEXEMPLAR",gxz:"Z114AcervoExemplar",gxold:"O114AcervoExemplar",gxvar:"A114AcervoExemplar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A114AcervoExemplar=gx.num.intval(Value)},v2z:function(Value){gx.O.Z114AcervoExemplar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACERVOEXEMPLAR",gx.O.A114AcervoExemplar,0)},c2v:function(){gx.O.A114AcervoExemplar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACERVOEXEMPLAR",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOVOLUME",gxz:"Z115AcervoVolume",gxold:"O115AcervoVolume",gxvar:"A115AcervoVolume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A115AcervoVolume=gx.num.intval(Value)},v2z:function(Value){gx.O.Z115AcervoVolume=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACERVOVOLUME",gx.O.A115AcervoVolume,0)},c2v:function(){gx.O.A115AcervoVolume=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACERVOVOLUME",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOEDICAO",gxz:"Z116AcervoEdicao",gxold:"O116AcervoEdicao",gxvar:"A116AcervoEdicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A116AcervoEdicao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z116AcervoEdicao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACERVOEDICAO",gx.O.A116AcervoEdicao,0)},c2v:function(){gx.O.A116AcervoEdicao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACERVOEDICAO",'.')},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acervoqtdeexemplares,isvalid:null,rgrid:[],fld:"ACERVOQTDEEXEMPLARES",gxz:"Z122AcervoQtdeExemplares",gxold:"O122AcervoQtdeExemplares",gxvar:"A122AcervoQtdeExemplares",ucs:[],op:[],ip:[124,74,68,63,58,23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A122AcervoQtdeExemplares=gx.num.intval(Value)},v2z:function(Value){gx.O.Z122AcervoQtdeExemplares=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACERVOQTDEEXEMPLARES",gx.O.A122AcervoQtdeExemplares,0)},c2v:function(){gx.O.A122AcervoQtdeExemplares=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACERVOQTDEEXEMPLARES",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOQTDEPAGINAS",gxz:"Z123AcervoQtdePaginas",gxold:"O123AcervoQtdePaginas",gxvar:"A123AcervoQtdePaginas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A123AcervoQtdePaginas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z123AcervoQtdePaginas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACERVOQTDEPAGINAS",gx.O.A123AcervoQtdePaginas,0)},c2v:function(){gx.O.A123AcervoQtdePaginas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACERVOQTDEPAGINAS",'.')},nac:gx.falseFn};
   GXValidFnc[130]={fld:"TAB2",grid:0};
   GXValidFnc[133]={fld:"TABLE4",grid:0};
   GXValidFnc[136]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOOBSERVACAO",gxz:"Z121AcervoObservacao",gxold:"O121AcervoObservacao",gxvar:"A121AcervoObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A121AcervoObservacao=Value},v2z:function(Value){gx.O.Z121AcervoObservacao=Value},v2c:function(){gx.fn.setControlValue("ACERVOOBSERVACAO",gx.O.A121AcervoObservacao,0)},c2v:function(){gx.O.A121AcervoObservacao=this.val()},val:function(){return gx.fn.getControlValue("ACERVOOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[140]={fld:"TAB3",grid:0};
   GXValidFnc[143]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[145]={lvl:327,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:144,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_327",gxz:"ZnRcdDeleted_327",gxold:"OnRcdDeleted_327",gxvar:"nRcdDeleted_327",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_327=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_327=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_327",row || gx.fn.currentGridRowImpl(144),gx.O.nRcdDeleted_327,0)},c2v:function(){gx.O.nRcdDeleted_327=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_327",row || gx.fn.currentGridRowImpl(144),'.')},nac:gx.falseFn};
   GXValidFnc[146]={lvl:327,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:144,gxgrid:this.Grid3Container,fnc:this.Valid_Acervoautoresid,isvalid:null,rgrid:[],fld:"ACERVOAUTORESID",gxz:"Z136AcervoAutoresId",gxold:"O136AcervoAutoresId",gxvar:"A136AcervoAutoresId",ucs:[],op:[146],ip:[146],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A136AcervoAutoresId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z136AcervoAutoresId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVOAUTORESID",row || gx.fn.currentGridRowImpl(144),gx.O.A136AcervoAutoresId,0)},c2v:function(){gx.O.A136AcervoAutoresId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERVOAUTORESID",row || gx.fn.currentGridRowImpl(144),'.')},nac:gx.falseFn};
   GXValidFnc[147]={lvl:327,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:1,grid:144,gxgrid:this.Grid3Container,fnc:this.Valid_Acervoautorid,isvalid:null,rgrid:[],fld:"ACERVOAUTORID",gxz:"Z132AcervoAutorId",gxold:"O132AcervoAutorId",gxvar:"A132AcervoAutorId",ucs:[],op:[148],ip:[148,147],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A132AcervoAutorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z132AcervoAutorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVOAUTORID",row || gx.fn.currentGridRowImpl(144),gx.O.A132AcervoAutorId,0)},c2v:function(){gx.O.A132AcervoAutorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERVOAUTORID",row || gx.fn.currentGridRowImpl(144),'.')},nac:gx.falseFn};
   GXValidFnc[148]={lvl:327,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:1,grid:144,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOAUTORNOME",gxz:"Z133AcervoAutorNome",gxold:"O133AcervoAutorNome",gxvar:"A133AcervoAutorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A133AcervoAutorNome=Value},v2z:function(Value){gx.O.Z133AcervoAutorNome=Value},v2c:function(row){gx.fn.setGridControlValue("ACERVOAUTORNOME",row || gx.fn.currentGridRowImpl(144),gx.O.A133AcervoAutorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A133AcervoAutorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERVOAUTORNOME",row || gx.fn.currentGridRowImpl(144))},nac:gx.falseFn};
   GXValidFnc[149]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[150]={fld:"TAB4",grid:0};
   GXValidFnc[153]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[155]={lvl:326,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:154,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_326",gxz:"ZnRcdDeleted_326",gxold:"OnRcdDeleted_326",gxvar:"nRcdDeleted_326",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_326=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_326=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_326",row || gx.fn.currentGridRowImpl(154),gx.O.nRcdDeleted_326,0)},c2v:function(){gx.O.nRcdDeleted_326=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_326",row || gx.fn.currentGridRowImpl(154),'.')},nac:gx.falseFn};
   GXValidFnc[156]={lvl:326,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:154,gxgrid:this.Grid2Container,fnc:this.Valid_Indiceid,isvalid:null,rgrid:[],fld:"INDICEID",gxz:"Z135IndiceId",gxold:"O135IndiceId",gxvar:"A135IndiceId",ucs:[],op:[156],ip:[156],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A135IndiceId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z135IndiceId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INDICEID",row || gx.fn.currentGridRowImpl(154),gx.O.A135IndiceId,0)},c2v:function(){gx.O.A135IndiceId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INDICEID",row || gx.fn.currentGridRowImpl(154),'.')},nac:gx.falseFn};
   GXValidFnc[157]={lvl:326,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:1,grid:154,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"INDICETITULO",gxz:"Z130IndiceTitulo",gxold:"O130IndiceTitulo",gxvar:"A130IndiceTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A130IndiceTitulo=Value},v2z:function(Value){gx.O.Z130IndiceTitulo=Value},v2c:function(row){gx.fn.setGridControlValue("INDICETITULO",row || gx.fn.currentGridRowImpl(154),gx.O.A130IndiceTitulo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A130IndiceTitulo=this.val()},val:function(row){return gx.fn.getGridControlValue("INDICETITULO",row || gx.fn.currentGridRowImpl(154))},nac:gx.falseFn};
   GXValidFnc[158]={lvl:326,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:154,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"INDICEPAGINA",gxz:"Z131IndicePagina",gxold:"O131IndicePagina",gxvar:"A131IndicePagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A131IndicePagina=gx.num.intval(Value)},v2z:function(Value){gx.O.Z131IndicePagina=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INDICEPAGINA",row || gx.fn.currentGridRowImpl(154),gx.O.A131IndicePagina,0)},c2v:function(){gx.O.A131IndicePagina=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INDICEPAGINA",row || gx.fn.currentGridRowImpl(154),'.')},nac:gx.falseFn};
   GXValidFnc[159]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[160]={fld:"TAB5",grid:0};
   GXValidFnc[163]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[165]={lvl:325,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:164,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_325",gxz:"ZnRcdDeleted_325",gxold:"OnRcdDeleted_325",gxvar:"nRcdDeleted_325",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_325=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_325=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_325",row || gx.fn.currentGridRowImpl(164),gx.O.nRcdDeleted_325,0)},c2v:function(){gx.O.nRcdDeleted_325=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_325",row || gx.fn.currentGridRowImpl(164),'.')},nac:gx.falseFn};
   GXValidFnc[166]={lvl:325,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:164,gxgrid:this.Grid1Container,fnc:this.Valid_Palavrachaveid,isvalid:null,rgrid:[],fld:"PALAVRACHAVEID",gxz:"Z134PalavraChaveId",gxold:"O134PalavraChaveId",gxvar:"A134PalavraChaveId",ucs:[],op:[166],ip:[166],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A134PalavraChaveId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z134PalavraChaveId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PALAVRACHAVEID",row || gx.fn.currentGridRowImpl(164),gx.O.A134PalavraChaveId,0)},c2v:function(){gx.O.A134PalavraChaveId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PALAVRACHAVEID",row || gx.fn.currentGridRowImpl(164),'.')},nac:gx.falseFn};
   GXValidFnc[167]={lvl:325,type:"svchar",len:35,dec:0,sign:false,ro:0,isacc:1,grid:164,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PALAVRACHAVEFRASE",gxz:"Z129PalavraChaveFrase",gxold:"O129PalavraChaveFrase",gxvar:"A129PalavraChaveFrase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A129PalavraChaveFrase=Value},v2z:function(Value){gx.O.Z129PalavraChaveFrase=Value},v2c:function(row){gx.fn.setGridControlValue("PALAVRACHAVEFRASE",row || gx.fn.currentGridRowImpl(164),gx.O.A129PalavraChaveFrase,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A129PalavraChaveFrase=this.val()},val:function(row){return gx.fn.getGridControlValue("PALAVRACHAVEFRASE",row || gx.fn.currentGridRowImpl(164))},nac:gx.falseFn};
   GXValidFnc[168]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[175]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAVE",gxz:"ZV54Chave",gxold:"OV54Chave",gxvar:"AV54Chave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54Chave=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54Chave=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCHAVE",gx.O.AV54Chave,0)},c2v:function(){gx.O.AV54Chave=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCHAVE",'.')},nac:gx.falseFn};
   GXValidFnc[178]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[179]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV26AcessoSistemaSequencia",gxold:"OV26AcessoSistemaSequencia",gxvar:"AV26AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV26AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV26AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[180]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoitemempresaid,isvalid:null,rgrid:[],fld:"vTIPOITEMEMPRESAID",gxz:"ZV28TipoItemEmpresaId",gxold:"OV28TipoItemEmpresaId",gxvar:"AV28TipoItemEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TipoItemEmpresaId=Value},v2z:function(Value){gx.O.ZV28TipoItemEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOITEMEMPRESAID",gx.O.AV28TipoItemEmpresaId,0)},c2v:function(){gx.O.AV28TipoItemEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOITEMEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[184]={fld:"PROMPT_120",grid:324};
   this.A39AcervoId = 0 ;
   this.Z39AcervoId = 0 ;
   this.O39AcervoId = 0 ;
   this.A40AcervoTitulo = "" ;
   this.Z40AcervoTitulo = "" ;
   this.O40AcervoTitulo = "" ;
   this.A47AcervoSubtitulo = "" ;
   this.Z47AcervoSubtitulo = "" ;
   this.O47AcervoSubtitulo = "" ;
   this.A112AcervoDataAquisicao = gx.date.nullDate() ;
   this.Z112AcervoDataAquisicao = gx.date.nullDate() ;
   this.O112AcervoDataAquisicao = gx.date.nullDate() ;
   this.A113AcervoDataBaixa = gx.date.nullDate() ;
   this.Z113AcervoDataBaixa = gx.date.nullDate() ;
   this.O113AcervoDataBaixa = gx.date.nullDate() ;
   this.A117AcervoLocalPublicacao = "" ;
   this.Z117AcervoLocalPublicacao = "" ;
   this.O117AcervoLocalPublicacao = "" ;
   this.A41AcervoISBN = "" ;
   this.Z41AcervoISBN = "" ;
   this.O41AcervoISBN = "" ;
   this.A42AcervoCodBarras = 0 ;
   this.Z42AcervoCodBarras = 0 ;
   this.O42AcervoCodBarras = 0 ;
   this.A118EditoraId = 0 ;
   this.Z118EditoraId = 0 ;
   this.O118EditoraId = 0 ;
   this.A119ClassificacaoLiterariaId = 0 ;
   this.Z119ClassificacaoLiterariaId = 0 ;
   this.O119ClassificacaoLiterariaId = 0 ;
   this.A120TipoItemId = 0 ;
   this.Z120TipoItemId = 0 ;
   this.O120TipoItemId = 0 ;
   this.A45TipoItemDescricao = "" ;
   this.Z45TipoItemDescricao = "" ;
   this.O45TipoItemDescricao = "" ;
   this.A124IdiomaId = 0 ;
   this.Z124IdiomaId = 0 ;
   this.O124IdiomaId = 0 ;
   this.A3212AcervoEstante = "" ;
   this.Z3212AcervoEstante = "" ;
   this.O3212AcervoEstante = "" ;
   this.A3213AcervoPrateleira = "" ;
   this.Z3213AcervoPrateleira = "" ;
   this.O3213AcervoPrateleira = "" ;
   this.AV64Foto_GXI = "" ;
   this.AV17Foto = "" ;
   this.ZV17Foto = "" ;
   this.OV17Foto = "" ;
   this.A48AcervoAnoPublicacao = 0 ;
   this.Z48AcervoAnoPublicacao = 0 ;
   this.O48AcervoAnoPublicacao = 0 ;
   this.A114AcervoExemplar = 0 ;
   this.Z114AcervoExemplar = 0 ;
   this.O114AcervoExemplar = 0 ;
   this.A115AcervoVolume = 0 ;
   this.Z115AcervoVolume = 0 ;
   this.O115AcervoVolume = 0 ;
   this.A116AcervoEdicao = 0 ;
   this.Z116AcervoEdicao = 0 ;
   this.O116AcervoEdicao = 0 ;
   this.A122AcervoQtdeExemplares = 0 ;
   this.Z122AcervoQtdeExemplares = 0 ;
   this.O122AcervoQtdeExemplares = 0 ;
   this.A123AcervoQtdePaginas = 0 ;
   this.Z123AcervoQtdePaginas = 0 ;
   this.O123AcervoQtdePaginas = 0 ;
   this.A121AcervoObservacao = "" ;
   this.Z121AcervoObservacao = "" ;
   this.O121AcervoObservacao = "" ;
   this.ZnRcdDeleted_327 = 0 ;
   this.OnRcdDeleted_327 = 0 ;
   this.Z136AcervoAutoresId = 0 ;
   this.O136AcervoAutoresId = 0 ;
   this.Z132AcervoAutorId = 0 ;
   this.O132AcervoAutorId = 0 ;
   this.Z133AcervoAutorNome = "" ;
   this.O133AcervoAutorNome = "" ;
   this.ZnRcdDeleted_326 = 0 ;
   this.OnRcdDeleted_326 = 0 ;
   this.Z135IndiceId = 0 ;
   this.O135IndiceId = 0 ;
   this.Z130IndiceTitulo = "" ;
   this.O130IndiceTitulo = "" ;
   this.Z131IndicePagina = 0 ;
   this.O131IndicePagina = 0 ;
   this.ZnRcdDeleted_325 = 0 ;
   this.OnRcdDeleted_325 = 0 ;
   this.Z134PalavraChaveId = 0 ;
   this.O134PalavraChaveId = 0 ;
   this.Z129PalavraChaveFrase = "" ;
   this.O129PalavraChaveFrase = "" ;
   this.AV54Chave = 0 ;
   this.ZV54Chave = 0 ;
   this.OV54Chave = 0 ;
   this.AV26AcessoSistemaSequencia = 0 ;
   this.ZV26AcessoSistemaSequencia = 0 ;
   this.OV26AcessoSistemaSequencia = 0 ;
   this.AV28TipoItemEmpresaId = "" ;
   this.ZV28TipoItemEmpresaId = "" ;
   this.OV28TipoItemEmpresaId = "" ;
   this.A136AcervoAutoresId = 0 ;
   this.A132AcervoAutorId = 0 ;
   this.A133AcervoAutorNome = "" ;
   this.A135IndiceId = 0 ;
   this.A130IndiceTitulo = "" ;
   this.A131IndicePagina = 0 ;
   this.A134PalavraChaveId = 0 ;
   this.A129PalavraChaveFrase = "" ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV62Pgmname = "" ;
   this.AV63Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV57BlueFocusEnv = {} ;
   this.AV26AcessoSistemaSequencia = 0 ;
   this.AV20Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV28TipoItemEmpresaId = "" ;
   this.AV21PastaImage = "" ;
   this.AV54Chave = 0 ;
   this.AV17Foto = "" ;
   this.AV32AcervoIdAux = 0 ;
   this.AV55NovoNomeAux = "" ;
   this.AV22path = "" ;
   this.AV56Path2 = "" ;
   this.AV19SnErro = "" ;
   this.AV10ret = 0 ;
   this.AV23File = {} ;
   this.AV16AcervoId = 0 ;
   this.AV58WebSession = {} ;
   this.A3082AcervoEmpresaId = "" ;
   this.A39AcervoId = 0 ;
   this.A3080TipoItemEmpresaId = "" ;
   this.A3212AcervoEstante = "" ;
   this.A3213AcervoPrateleira = "" ;
   this.Gx_BScreen = 0 ;
   this.A40AcervoTitulo = "" ;
   this.A47AcervoSubtitulo = "" ;
   this.A112AcervoDataAquisicao = gx.date.nullDate() ;
   this.A113AcervoDataBaixa = gx.date.nullDate() ;
   this.A114AcervoExemplar = 0 ;
   this.A115AcervoVolume = 0 ;
   this.A116AcervoEdicao = 0 ;
   this.A117AcervoLocalPublicacao = "" ;
   this.A48AcervoAnoPublicacao = 0 ;
   this.A41AcervoISBN = "" ;
   this.A42AcervoCodBarras = 0 ;
   this.A118EditoraId = 0 ;
   this.A43EditoraDescricao = "" ;
   this.A119ClassificacaoLiterariaId = 0 ;
   this.A44ClassificacaoLiterariaDescrica = "" ;
   this.A120TipoItemId = 0 ;
   this.A45TipoItemDescricao = "" ;
   this.A121AcervoObservacao = "" ;
   this.A122AcervoQtdeExemplares = 0 ;
   this.A123AcervoQtdePaginas = 0 ;
   this.A124IdiomaId = 0 ;
   this.A46IdiomaDescricao = "" ;
   this.A125AcervoQtdeAutores = 0 ;
   this.A126AcervoUltimaChave = 0 ;
   this.A127AcervoUltimoIndice = 0 ;
   this.A128AcervoUltimoAutor = 0 ;
   this.AV47Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12012_client": ["'FECHAR'", true] ,"e13012_client": ["AFTER TRN", true] ,"e14012_client": ["'UPLOAD'", true] ,"e1501324_client": ["ENTER", true] ,"e1601324_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV16AcervoId',fld:'vACERVOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV26AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV16AcervoId',fld:'vACERVOID'},{av:'AV57BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV21PastaImage',fld:'vPASTAIMAGE'},{av:'AV54Chave',fld:'vCHAVE'}],[{av:'AV38Diretorio',fld:'vDIRETORIO'},{av:'AV39CamRelat',fld:'vCAMRELAT'},{av:'AV32AcervoIdAux',fld:'vACERVOIDAUX'},{av:'AV55NovoNomeAux',fld:'vNOVONOMEAUX'},{av:'AV56Path2',fld:'vPATH2'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'A39AcervoId',fld:'ACERVOID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV57BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV21PastaImage',fld:'vPASTAIMAGE'},{av:'AV26AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV16AcervoId',fld:'vACERVOID'},{av:'AV54Chave',fld:'vCHAVE'}],[{av:'AV32AcervoIdAux',fld:'vACERVOIDAUX'},{av:'AV55NovoNomeAux',fld:'vNOVONOMEAUX'},{av:'AV22path',fld:'vPATH'},{av:'AV17Foto',fld:'vFOTO'},{av:'AV56Path2',fld:'vPATH2'}]];
   this.EvtParms["'UPLOAD'"] = [[],[{av:'AV52isCloud',fld:'vISCLOUD'},{av:'AV50DirUpload',fld:'vDIRUPLOAD'}]];
   this.setPrompt("PROMPT_120", [68]);
   this.setPrompt("PROMPT_132", [147]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV16AcervoId", "vACERVOID", 0, "int");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3082AcervoEmpresaId", "ACERVOEMPRESAID", 0, "char");
   this.setVCMap("A3080TipoItemEmpresaId", "TIPOITEMEMPRESAID", 0, "char");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV32AcervoIdAux", "vACERVOIDAUX", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("A126AcervoUltimaChave", "ACERVOULTIMACHAVE", 0, "int");
   this.setVCMap("A127AcervoUltimoIndice", "ACERVOULTIMOINDICE", 0, "int");
   this.setVCMap("A128AcervoUltimoAutor", "ACERVOULTIMOAUTOR", 0, "int");
   this.setVCMap("A43EditoraDescricao", "EDITORADESCRICAO", 0, "svchar");
   this.setVCMap("A44ClassificacaoLiterariaDescrica", "CLASSIFICACAOLITERARIADESCRICA", 0, "svchar");
   this.setVCMap("A46IdiomaDescricao", "IDIOMADESCRICAO", 0, "svchar");
   this.setVCMap("A125AcervoQtdeAutores", "ACERVOQTDEAUTORES", 0, "int");
   this.setVCMap("AV63Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV62Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 324 ]= ["O128AcervoUltimoAutor","O125AcervoQtdeAutores","O127AcervoUltimoIndice","O126AcervoUltimaChave"] ;
});
gx.setParentObj(new tacervo());
