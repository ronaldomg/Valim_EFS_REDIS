/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:50:5.79
*/
gx.evt.autoSkip = false;
gx.define('tclassificacao', false, function () {
   this.ServerClass =  "tclassificacao" ;
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
      this.AV11ClassificacaoId=gx.fn.getControlValue("vCLASSIFICACAOID") ;
      this.AV16EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.AV13ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV30Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV29Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Classificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSIFICACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classificacaodescricao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classificacaodescricao",["gx.O.A54ClassificacaoId", "gx.O.A55ClassificacaoDescricao", "gx.O.AV13ret"],["AV13ret"]);
      return true;
   }
   this.Valid_Classificacaoobrigatorio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSIFICACAOOBRIGATORIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Opcaoclassificacaoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(30) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("OPCAOCLASSIFICACAOID", gx.fn.currentGridRowImpl(30));
         this.AnyError  = 0;
         this.sMode11 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(11,30)  ;
         this.standaloneModal0711( );
         this.standaloneNotModal0711( );
         if ( gx.fn.gridDuplicateKey(32) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Opcao Classificacao", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode11  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Opcaoclassificacaodescricao=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(30) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("OPCAOCLASSIFICACAODESCRICAO", gx.fn.currentGridRowImpl(30));
         this.AnyError  = 0;
         this.sMode11 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(11,30)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode11  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal0711=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("OPCAOCLASSIFICACAOID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("OPCAOCLASSIFICACAOID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal0711=function()
   {
      try {
         gx.fn.setCtrlProperty("OPCAOCLASSIFICACAONIVELUSUARIO","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("OPCAOCLASSIFICACAONIVELDATAHOR","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.e12072_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13072_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140710_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150710_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,21,25,26,29,31,32,33,34,35,36,39,42,44,46,56,58];
   this.GXLastCtrlId =58;
   this.Grid1Container = new gx.grid.grid(this, 11,"OpcaoClassificacao",30,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tclassificacao",[56],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_11",31,"vNRCDDELETED_11","","","nRcdDeleted_11","int",0,"px",4,1,"right",null,[],"nRcdDeleted_11","nRcdDeleted_11",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(56,32,"OPCAOCLASSIFICACAOID","Código","","OpcaoClassificacaoId","char",0,"px",20,20,"left",null,[],56,"OpcaoClassificacaoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(57,33,"OPCAOCLASSIFICACAODESCRICAO","Descrição","","OpcaoClassificacaoDescricao","char",0,"px",20,20,"left",null,[],57,"OpcaoClassificacaoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(850,34,"OPCAOCLASSIFICACAONIVELUSUARIO","Usuário","","OpcaoClassificacaoNivelUsuario","char",0,"px",12,12,"left",null,[],850,"OpcaoClassificacaoNivelUsuario",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(851,35,"OPCAOCLASSIFICACAONIVELDATAHOR","Última alteração","","OpcaoClassificacaoNivelDataHor","dtime",0,"px",16,16,"right",null,[],851,"OpcaoClassificacaoNivelDataHor",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV26Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV26Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV26Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tclassificacao_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoid,isvalid:null,rgrid:[this.Grid1Container],fld:"CLASSIFICACAOID",gxz:"Z54ClassificacaoId",gxold:"O54ClassificacaoId",gxvar:"A54ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A54ClassificacaoId=Value},v2z:function(Value){gx.O.Z54ClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("CLASSIFICACAOID",gx.O.A54ClassificacaoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A54ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOID")},nac:function(){return !(""==this.AV11ClassificacaoId)}};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classificacaodescricao,isvalid:null,rgrid:[],fld:"CLASSIFICACAODESCRICAO",gxz:"Z55ClassificacaoDescricao",gxold:"O55ClassificacaoDescricao",gxvar:"A55ClassificacaoDescricao",ucs:[],op:[],ip:[21,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A55ClassificacaoDescricao=Value},v2z:function(Value){gx.O.Z55ClassificacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("CLASSIFICACAODESCRICAO",gx.O.A55ClassificacaoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A55ClassificacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoobrigatorio,isvalid:null,rgrid:[],fld:"CLASSIFICACAOOBRIGATORIO",gxz:"Z161ClassificacaoObrigatorio",gxold:"O161ClassificacaoObrigatorio",gxvar:"A161ClassificacaoObrigatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A161ClassificacaoObrigatorio=Value},v2z:function(Value){gx.O.Z161ClassificacaoObrigatorio=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSIFICACAOOBRIGATORIO",gx.O.A161ClassificacaoObrigatorio,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A161ClassificacaoObrigatorio=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOOBRIGATORIO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={fld:"TAB2",grid:0};
   GXValidFnc[29]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[31]={lvl:11,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:30,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_11",gxz:"ZnRcdDeleted_11",gxold:"OnRcdDeleted_11",gxvar:"nRcdDeleted_11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_11=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_11=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_11",row || gx.fn.currentGridRowImpl(30),gx.O.nRcdDeleted_11,0)},c2v:function(){gx.O.nRcdDeleted_11=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_11",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:11,type:"char",len:20,dec:0,sign:false,ro:0,isacc:1,grid:30,gxgrid:this.Grid1Container,fnc:this.Valid_Opcaoclassificacaoid,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAOID",gxz:"Z56OpcaoClassificacaoId",gxold:"O56OpcaoClassificacaoId",gxvar:"A56OpcaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A56OpcaoClassificacaoId=Value},v2z:function(Value){gx.O.Z56OpcaoClassificacaoId=Value},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(30),gx.O.A56OpcaoClassificacaoId,0)},c2v:function(){gx.O.A56OpcaoClassificacaoId=this.val()},val:function(row){return gx.fn.getGridControlValue("OPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:11,type:"char",len:20,dec:0,sign:false,ro:0,isacc:1,grid:30,gxgrid:this.Grid1Container,fnc:this.Valid_Opcaoclassificacaodescricao,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAODESCRICAO",gxz:"Z57OpcaoClassificacaoDescricao",gxold:"O57OpcaoClassificacaoDescricao",gxvar:"A57OpcaoClassificacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A57OpcaoClassificacaoDescricao=Value},v2z:function(Value){gx.O.Z57OpcaoClassificacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(30),gx.O.A57OpcaoClassificacaoDescricao,0)},c2v:function(){gx.O.A57OpcaoClassificacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OPCAOCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:11,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:30,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAONIVELUSUARIO",gxz:"Z850OpcaoClassificacaoNivelUsuario",gxold:"O850OpcaoClassificacaoNivelUsuario",gxvar:"A850OpcaoClassificacaoNivelUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A850OpcaoClassificacaoNivelUsuario=Value},v2z:function(Value){gx.O.Z850OpcaoClassificacaoNivelUsuario=Value},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAONIVELUSUARIO",row || gx.fn.currentGridRowImpl(30),gx.O.A850OpcaoClassificacaoNivelUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A850OpcaoClassificacaoNivelUsuario=this.val()},val:function(row){return gx.fn.getGridControlValue("OPCAOCLASSIFICACAONIVELUSUARIO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:11,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:30,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAONIVELDATAHOR",gxz:"Z851OpcaoClassificacaoNivelDataHor",gxold:"O851OpcaoClassificacaoNivelDataHor",gxvar:"A851OpcaoClassificacaoNivelDataHor",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A851OpcaoClassificacaoNivelDataHor=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z851OpcaoClassificacaoNivelDataHor=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAONIVELDATAHOR",row || gx.fn.currentGridRowImpl(30),gx.O.A851OpcaoClassificacaoNivelDataHor,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A851OpcaoClassificacaoNivelDataHor=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("OPCAOCLASSIFICACAONIVELDATAHOR",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[36]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[39]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAOUSUARIOID",gxz:"Z848ClassificacaoUsuarioId",gxold:"O848ClassificacaoUsuarioId",gxvar:"A848ClassificacaoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A848ClassificacaoUsuarioId=Value},v2z:function(Value){gx.O.Z848ClassificacaoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("CLASSIFICACAOUSUARIOID",gx.O.A848ClassificacaoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A848ClassificacaoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAODATAHORAALT",gxz:"Z849ClassificacaoDataHoraAlt",gxold:"O849ClassificacaoDataHoraAlt",gxvar:"A849ClassificacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A849ClassificacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z849ClassificacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CLASSIFICACAODATAHORAALT",gx.O.A849ClassificacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A849ClassificacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CLASSIFICACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"BTNHELP",grid:0};
   this.A54ClassificacaoId = "" ;
   this.Z54ClassificacaoId = "" ;
   this.O54ClassificacaoId = "" ;
   this.A55ClassificacaoDescricao = "" ;
   this.Z55ClassificacaoDescricao = "" ;
   this.O55ClassificacaoDescricao = "" ;
   this.A161ClassificacaoObrigatorio = "" ;
   this.Z161ClassificacaoObrigatorio = "" ;
   this.O161ClassificacaoObrigatorio = "" ;
   this.ZnRcdDeleted_11 = 0 ;
   this.OnRcdDeleted_11 = 0 ;
   this.Z56OpcaoClassificacaoId = "" ;
   this.O56OpcaoClassificacaoId = "" ;
   this.Z57OpcaoClassificacaoDescricao = "" ;
   this.O57OpcaoClassificacaoDescricao = "" ;
   this.Z850OpcaoClassificacaoNivelUsuario = "" ;
   this.O850OpcaoClassificacaoNivelUsuario = "" ;
   this.Z851OpcaoClassificacaoNivelDataHor = gx.date.nullDate() ;
   this.O851OpcaoClassificacaoNivelDataHor = gx.date.nullDate() ;
   this.A848ClassificacaoUsuarioId = "" ;
   this.Z848ClassificacaoUsuarioId = "" ;
   this.O848ClassificacaoUsuarioId = "" ;
   this.A849ClassificacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z849ClassificacaoDataHoraAlt = gx.date.nullDate() ;
   this.O849ClassificacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A850OpcaoClassificacaoNivelUsuario = "" ;
   this.A851OpcaoClassificacaoNivelDataHor = gx.date.nullDate() ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV29Pgmname = "" ;
   this.AV30Pgmdesc = "" ;
   this.AV9MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV21UrlMobile = "" ;
   this.AV15Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV14Tabela = "" ;
   this.AV16EmpresaPadrao = "" ;
   this.AV13ret = 0 ;
   this.AV11ClassificacaoId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A848ClassificacaoUsuarioId = "" ;
   this.A849ClassificacaoDataHoraAlt = gx.date.nullDate() ;
   this.A55ClassificacaoDescricao = "" ;
   this.A161ClassificacaoObrigatorio = "" ;
   this.AV26Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12072_client": ["'FECHAR'", true] ,"e13072_client": ["AFTER TRN", true] ,"e140710_client": ["ENTER", true] ,"e150710_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'AV21UrlMobile',fld:'vURLMOBILE'},{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'}],[{av:'AV20SdtClassificacao',fld:'vSDTCLASSIFICACAO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11ClassificacaoId", "vCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV13ret", "vRET", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV30Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 10 ]= ["O161ClassificacaoObrigatorio","O55ClassificacaoDescricao"] ;
   this.LvlOlds[ 11 ]= ["O57OpcaoClassificacaoDescricao"] ;
});
gx.setParentObj(new tclassificacao());
