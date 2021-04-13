/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:36:11.79
*/
gx.evt.autoSkip = false;
gx.define('ttabelavencimento', false, function () {
   this.ServerClass =  "ttabelavencimento" ;
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
      this.AV25TabelaVencimentoId=gx.fn.getIntegerValue("vTABELAVENCIMENTOID",'.') ;
      this.AV24TabelaVencimentoEmpresaId=gx.fn.getControlValue("vTABELAVENCIMENTOEMPRESAID") ;
      this.AV30ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV26SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV18UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV32Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tabelavencimentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TABELAVENCIMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tabelavencimentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TABELAVENCIMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tabelavencimentodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TABELAVENCIMENTODESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tabelavencimentovalormaximo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tabelavencimentovalormaximo",["gx.O.A11097TabelaVencimentoDescricao", "gx.num.urlDecimal(gx.O.A11081TabelaVencimentoValorMaximo,\'.\',\',\')", "gx.O.AV30ret"],["AV30ret"]);
      return true;
   }
   this.Valid_Tabelavencimentoparcelaqtdedia=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(31) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TABELAVENCIMENTOPARCELAQTDEDIA", gx.fn.currentGridRowImpl(31));
         this.AnyError  = 0;
         this.sMode814 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(814,31)  ;
         this.standaloneModalFY814( );
         this.standaloneNotModalFY814( );
         if ( gx.fn.gridDuplicateKey(33) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Parcela", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode814  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModalFY814=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("TABELAVENCIMENTOPARCELAQTDEDIA","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("TABELAVENCIMENTOPARCELAQTDEDIA","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModalFY814=function()
   {
      try {
         gx.fn.setCtrlProperty("TABELAVENCIMENTOPARCELAUSUARIO","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("TABELAVENCIMENTOPARCELADATAHOR","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("TABELAVENCIMENTOUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("TABELAVENCIMENTODATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("TABELAVENCIMENTOUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("TABELAVENCIMENTODATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      try {
         if ( (""==this.A11097TabelaVencimentoDescricao) && gx.ajax.aggSelInteger("vRET","13",["gx.O.A11097TabelaVencimentoDescricao","gx.num.urlDecimal(gx.O.A11081TabelaVencimentoValorMaximo,\'.\',\',\')"]) )
         {
            this.AV30ret = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( (0.0==this.A11081TabelaVencimentoValorMaximo) && gx.ajax.aggSelInteger("vRET","13",["gx.O.A11097TabelaVencimentoDescricao","gx.num.urlDecimal(gx.O.A11081TabelaVencimentoValorMaximo,\'.\',\',\')"]) )
            {
               this.AV30ret = gx.num.trunc( 1 ,0) ;
            }
         }
      }
      catch(e){}
      return true;
   }
   this.e12fy2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fy2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14fy813_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15fy813_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,21,24,26,27,30,32,33,34,35,36,39,42,44,46,55,56,58];
   this.GXLastCtrlId =58;
   this.Grid1Container = new gx.grid.grid(this, 814,"Parcela",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"ttabelavencimento",[11073],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_814",32,"vNRCDDELETED_814","","","nRcdDeleted_814","int",0,"px",4,1,"right",null,[],"nRcdDeleted_814","nRcdDeleted_814",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11073,33,"TABELAVENCIMENTOPARCELAQTDEDIA","Qtde Dias","","TabelaVencimentoParcelaQtdeDia","int",0,"px",3,3,"right",null,[],11073,"TabelaVencimentoParcelaQtdeDia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11103,34,"TABELAVENCIMENTOPARCELAUSUARIO","Usuário Alteração","","TabelaVencimentoParcelaUsuario","char",0,"px",12,12,"left",null,[],11103,"TabelaVencimentoParcelaUsuario",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11104,35,"TABELAVENCIMENTOPARCELADATAHOR","Data/Hora Alteração","","TabelaVencimentoParcelaDataHor","dtime",0,"px",16,16,"right",null,[],11104,"TabelaVencimentoParcelaDataHor",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV27tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV27tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV27tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "ttabelavencimento_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tabelavencimentoid,isvalid:null,rgrid:[this.Grid1Container],fld:"TABELAVENCIMENTOID",gxz:"Z11072TabelaVencimentoId",gxold:"O11072TabelaVencimentoId",gxvar:"A11072TabelaVencimentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11072TabelaVencimentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11072TabelaVencimentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TABELAVENCIMENTOID",gx.O.A11072TabelaVencimentoId,0)},c2v:function(){gx.O.A11072TabelaVencimentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TABELAVENCIMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabelavencimentodescricao,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTODESCRICAO",gxz:"Z11097TabelaVencimentoDescricao",gxold:"O11097TabelaVencimentoDescricao",gxvar:"A11097TabelaVencimentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11097TabelaVencimentoDescricao=Value},v2z:function(Value){gx.O.Z11097TabelaVencimentoDescricao=Value},v2c:function(){gx.fn.setControlValue("TABELAVENCIMENTODESCRICAO",gx.O.A11097TabelaVencimentoDescricao,0)},c2v:function(){gx.O.A11097TabelaVencimentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TABELAVENCIMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabelavencimentovalormaximo,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTOVALORMAXIMO",gxz:"Z11081TabelaVencimentoValorMaximo",gxold:"O11081TabelaVencimentoValorMaximo",gxvar:"A11081TabelaVencimentoValorMaximo",ucs:[],op:[],ip:[26,21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11081TabelaVencimentoValorMaximo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11081TabelaVencimentoValorMaximo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TABELAVENCIMENTOVALORMAXIMO",gx.O.A11081TabelaVencimentoValorMaximo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11081TabelaVencimentoValorMaximo=this.val()},val:function(){return gx.fn.getDecimalValue("TABELAVENCIMENTOVALORMAXIMO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[27]={fld:"TAB2",grid:0};
   GXValidFnc[30]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[32]={lvl:814,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_814",gxz:"ZnRcdDeleted_814",gxold:"OnRcdDeleted_814",gxvar:"nRcdDeleted_814",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_814=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_814=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_814",row || gx.fn.currentGridRowImpl(31),gx.O.nRcdDeleted_814,0)},c2v:function(){gx.O.nRcdDeleted_814=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_814",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:814,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:1,grid:31,gxgrid:this.Grid1Container,fnc:this.Valid_Tabelavencimentoparcelaqtdedia,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTOPARCELAQTDEDIA",gxz:"Z11073TabelaVencimentoParcelaQtdeDia",gxold:"O11073TabelaVencimentoParcelaQtdeDia",gxvar:"A11073TabelaVencimentoParcelaQtdeDia",ucs:[],op:[],ip:[26,21],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11073TabelaVencimentoParcelaQtdeDia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11073TabelaVencimentoParcelaQtdeDia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TABELAVENCIMENTOPARCELAQTDEDIA",row || gx.fn.currentGridRowImpl(31),gx.O.A11073TabelaVencimentoParcelaQtdeDia,0)},c2v:function(){gx.O.A11073TabelaVencimentoParcelaQtdeDia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TABELAVENCIMENTOPARCELAQTDEDIA",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:814,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTOPARCELAUSUARIO",gxz:"Z11103TabelaVencimentoParcelaUsuario",gxold:"O11103TabelaVencimentoParcelaUsuario",gxvar:"A11103TabelaVencimentoParcelaUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11103TabelaVencimentoParcelaUsuario=Value},v2z:function(Value){gx.O.Z11103TabelaVencimentoParcelaUsuario=Value},v2c:function(row){gx.fn.setGridControlValue("TABELAVENCIMENTOPARCELAUSUARIO",row || gx.fn.currentGridRowImpl(31),gx.O.A11103TabelaVencimentoParcelaUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11103TabelaVencimentoParcelaUsuario=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELAVENCIMENTOPARCELAUSUARIO",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:814,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTOPARCELADATAHOR",gxz:"Z11104TabelaVencimentoParcelaDataHor",gxold:"O11104TabelaVencimentoParcelaDataHor",gxvar:"A11104TabelaVencimentoParcelaDataHor",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11104TabelaVencimentoParcelaDataHor=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11104TabelaVencimentoParcelaDataHor=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("TABELAVENCIMENTOPARCELADATAHOR",row || gx.fn.currentGridRowImpl(31),gx.O.A11104TabelaVencimentoParcelaDataHor,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11104TabelaVencimentoParcelaDataHor=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("TABELAVENCIMENTOPARCELADATAHOR",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[36]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[39]={fld:"TABLE22",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTOUSUARIOALT",gxz:"Z11101TabelaVencimentoUsuarioAlt",gxold:"O11101TabelaVencimentoUsuarioAlt",gxvar:"A11101TabelaVencimentoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11101TabelaVencimentoUsuarioAlt=Value},v2z:function(Value){gx.O.Z11101TabelaVencimentoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TABELAVENCIMENTOUSUARIOALT",gx.O.A11101TabelaVencimentoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11101TabelaVencimentoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TABELAVENCIMENTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTODATAHORAALT",gxz:"Z11102TabelaVencimentoDataHoraAlt",gxold:"O11102TabelaVencimentoDataHoraAlt",gxvar:"A11102TabelaVencimentoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11102TabelaVencimentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11102TabelaVencimentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TABELAVENCIMENTODATAHORAALT",gx.O.A11102TabelaVencimentoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11102TabelaVencimentoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TABELAVENCIMENTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[55]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV13AcessoSistemaSequencia",gxold:"OV13AcessoSistemaSequencia",gxvar:"AV13AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV13AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV13AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabelavencimentoempresaid,isvalid:null,rgrid:[this.Grid1Container],fld:"TABELAVENCIMENTOEMPRESAID",gxz:"Z11071TabelaVencimentoEmpresaId",gxold:"O11071TabelaVencimentoEmpresaId",gxvar:"A11071TabelaVencimentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11071TabelaVencimentoEmpresaId=Value},v2z:function(Value){gx.O.Z11071TabelaVencimentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("TABELAVENCIMENTOEMPRESAID",gx.O.A11071TabelaVencimentoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11071TabelaVencimentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("TABELAVENCIMENTOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[58]={fld:"BTNHELP",grid:0};
   this.A11072TabelaVencimentoId = 0 ;
   this.Z11072TabelaVencimentoId = 0 ;
   this.O11072TabelaVencimentoId = 0 ;
   this.A11097TabelaVencimentoDescricao = "" ;
   this.Z11097TabelaVencimentoDescricao = "" ;
   this.O11097TabelaVencimentoDescricao = "" ;
   this.A11081TabelaVencimentoValorMaximo = 0 ;
   this.Z11081TabelaVencimentoValorMaximo = 0 ;
   this.O11081TabelaVencimentoValorMaximo = 0 ;
   this.ZnRcdDeleted_814 = 0 ;
   this.OnRcdDeleted_814 = 0 ;
   this.Z11073TabelaVencimentoParcelaQtdeDia = 0 ;
   this.O11073TabelaVencimentoParcelaQtdeDia = 0 ;
   this.Z11103TabelaVencimentoParcelaUsuario = "" ;
   this.O11103TabelaVencimentoParcelaUsuario = "" ;
   this.Z11104TabelaVencimentoParcelaDataHor = gx.date.nullDate() ;
   this.O11104TabelaVencimentoParcelaDataHor = gx.date.nullDate() ;
   this.A11101TabelaVencimentoUsuarioAlt = "" ;
   this.Z11101TabelaVencimentoUsuarioAlt = "" ;
   this.O11101TabelaVencimentoUsuarioAlt = "" ;
   this.A11102TabelaVencimentoDataHoraAlt = gx.date.nullDate() ;
   this.Z11102TabelaVencimentoDataHoraAlt = gx.date.nullDate() ;
   this.O11102TabelaVencimentoDataHoraAlt = gx.date.nullDate() ;
   this.AV13AcessoSistemaSequencia = 0 ;
   this.ZV13AcessoSistemaSequencia = 0 ;
   this.OV13AcessoSistemaSequencia = 0 ;
   this.A11071TabelaVencimentoEmpresaId = "" ;
   this.Z11071TabelaVencimentoEmpresaId = "" ;
   this.O11071TabelaVencimentoEmpresaId = "" ;
   this.A11073TabelaVencimentoParcelaQtdeDia = 0 ;
   this.A11103TabelaVencimentoParcelaUsuario = "" ;
   this.A11104TabelaVencimentoParcelaDataHor = gx.date.nullDate() ;
   this.AV18UsrCod = "" ;
   this.AV19EmpresaLogadaId = "" ;
   this.AV20Sistema = "" ;
   this.AV31Pgmname = "" ;
   this.AV32Pgmdesc = "" ;
   this.AV21MsgErro = "" ;
   this.AV13AcessoSistemaSequencia = 0 ;
   this.AV22Modulo = "" ;
   this.AV23Logon = {} ;
   this.AV29Tabela = "" ;
   this.AV24TabelaVencimentoEmpresaId = "" ;
   this.AV30ret = 0 ;
   this.AV25TabelaVencimentoId = 0 ;
   this.A11071TabelaVencimentoEmpresaId = "" ;
   this.A11072TabelaVencimentoId = 0 ;
   this.AV26SnAlterou = "" ;
   this.A11097TabelaVencimentoDescricao = "" ;
   this.A11081TabelaVencimentoValorMaximo = 0 ;
   this.A11101TabelaVencimentoUsuarioAlt = "" ;
   this.A11102TabelaVencimentoDataHoraAlt = gx.date.nullDate() ;
   this.AV27tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12fy2_client": ["'FECHAR'", true] ,"e13fy2_client": ["AFTER TRN", true] ,"e14fy813_client": ["ENTER", true] ,"e15fy813_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV25TabelaVencimentoId',fld:'vTABELAVENCIMENTOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV13AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV13AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV25TabelaVencimentoId", "vTABELAVENCIMENTOID", 0, "int");
   this.setVCMap("AV24TabelaVencimentoEmpresaId", "vTABELAVENCIMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV30ret", "vRET", 0, "int");
   this.setVCMap("AV26SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV18UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV32Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV31Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 813 ]= ["O11081TabelaVencimentoValorMaximo","O11097TabelaVencimentoDescricao"] ;
   this.LvlOlds[ 814 ]= ["O11073TabelaVencimentoParcelaQtdeDia","O11081TabelaVencimentoValorMaximo","O11097TabelaVencimentoDescricao"] ;
});
gx.setParentObj(new ttabelavencimento());
