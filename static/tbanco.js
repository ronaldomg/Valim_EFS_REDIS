/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:25:58.38
*/
gx.evt.autoSkip = false;
gx.define('tbanco', false, function () {
   this.ServerClass =  "tbanco" ;
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
      this.AV18BancoId=gx.fn.getIntegerValue("vBANCOID",'.') ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A950BancoEmpresaId=gx.fn.getControlValue("BANCOEMPRESAID") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Bancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Banconome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BANCONOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bancoqtdedigitoboleto=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Bancoqtdedigitoboleto",["gx.O.O949BancoQtdeDigitoBoleto", "gx.O.O948BancoNome", "gx.O.O947BancoId", "gx.O.A947BancoId", "gx.O.A948BancoNome", "gx.O.A949BancoQtdeDigitoBoleto", "gx.O.AV7UsrCod", "gx.O.AV10ret", "gx.O.A951BancoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A952BancoDataHoraAlt,"DMY4")'],["AV10ret", "A951BancoUsuarioAlt", "A952BancoDataHoraAlt"]);
      return true;
   }
   this.Valid_Bancoagenciaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(31) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BANCOAGENCIAID", gx.fn.currentGridRowImpl(31));
         this.AnyError  = 0;
         this.sMode128 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(128,31)  ;
         this.standaloneModal29128( );
         this.standaloneNotModal29128( );
         if ( gx.fn.gridDuplicateKey(33) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Agencia", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode128  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bancoagencianome=function()
   {
      this.sMode128 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(128,31)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Bancoagencianome",["gx.O.O954BancoAgenciaNome", "gx.O.O953BancoAgenciaId", "gx.O.O947BancoId", "gx.O.A947BancoId", "gx.O.A948BancoNome", "gx.O.A949BancoQtdeDigitoBoleto", "gx.O.A953BancoAgenciaId", "gx.O.A954BancoAgenciaNome", "gx.O.AV7UsrCod", "gx.O.AV10ret", "gx.O.A955BancoAgenciaUsuarioAlt", 'gx.date.urlDateTime(gx.O.A956BancoAgenciaDataHoraAlt,"DMY4")'],["AV10ret", "A955BancoAgenciaUsuarioAlt", "A956BancoAgenciaDataHoraAlt"]);
      this.Gx_mode =  this.sMode128  ;
      return true;
   }
   this.standaloneModal29128=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("BANCOAGENCIAID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("BANCOAGENCIAID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal29128=function()
   {
      try {
         gx.fn.setCtrlProperty("BANCOAGENCIAUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("BANCOAGENCIADATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.e12292_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13292_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1429127_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1529127_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,21,24,26,27,30,32,33,34,35,36,37,40,43,45,47,56,58];
   this.GXLastCtrlId =58;
   this.Grid1Container = new gx.grid.grid(this, 128,"Agencia",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tbanco",[953],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_128",32,"vNRCDDELETED_128","","","nRcdDeleted_128","int",0,"px",4,1,"right",null,[],"nRcdDeleted_128","nRcdDeleted_128",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(953,33,"BANCOAGENCIAID","Agência","","BancoAgenciaId","int",0,"px",4,4,"right",null,[],953,"BancoAgenciaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(954,34,"BANCOAGENCIANOME","Nome da Agência","","BancoAgenciaNome","svchar",0,"px",40,40,"left",null,[],954,"BancoAgenciaNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(955,35,"BANCOAGENCIAUSUARIOALT","Usuário Alteração","","BancoAgenciaUsuarioAlt","char",0,"px",12,12,"left",null,[],955,"BancoAgenciaUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(956,36,"BANCOAGENCIADATAHORAALT","Data/Hora Alteração","","BancoAgenciaDataHoraAlt","dtime",0,"px",16,16,"right",null,[],956,"BancoAgenciaDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV26Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV26Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV26Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tbanco_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bancoid,isvalid:null,rgrid:[this.Grid1Container],fld:"BANCOID",gxz:"Z947BancoId",gxold:"O947BancoId",gxvar:"A947BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A947BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z947BancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BANCOID",gx.O.A947BancoId,0)},c2v:function(){gx.O.A947BancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BANCOID",'.')},nac:function(){return !(0==this.AV18BancoId)}};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Banconome,isvalid:null,rgrid:[],fld:"BANCONOME",gxz:"Z948BancoNome",gxold:"O948BancoNome",gxvar:"A948BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A948BancoNome=Value},v2z:function(Value){gx.O.Z948BancoNome=Value},v2c:function(){gx.fn.setControlValue("BANCONOME",gx.O.A948BancoNome,0)},c2v:function(){gx.O.A948BancoNome=this.val()},val:function(){return gx.fn.getControlValue("BANCONOME")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bancoqtdedigitoboleto,isvalid:null,rgrid:[],fld:"BANCOQTDEDIGITOBOLETO",gxz:"Z949BancoQtdeDigitoBoleto",gxold:"O949BancoQtdeDigitoBoleto",gxvar:"A949BancoQtdeDigitoBoleto",ucs:[],op:[45,47],ip:[45,47,26,21,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A949BancoQtdeDigitoBoleto=gx.num.intval(Value)},v2z:function(Value){gx.O.Z949BancoQtdeDigitoBoleto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BANCOQTDEDIGITOBOLETO",gx.O.A949BancoQtdeDigitoBoleto,0)},c2v:function(){gx.O.A949BancoQtdeDigitoBoleto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BANCOQTDEDIGITOBOLETO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TAB2",grid:0};
   GXValidFnc[30]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[32]={lvl:128,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_128",gxz:"ZnRcdDeleted_128",gxold:"OnRcdDeleted_128",gxvar:"nRcdDeleted_128",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_128=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_128=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_128",row || gx.fn.currentGridRowImpl(31),gx.O.nRcdDeleted_128,0)},c2v:function(){gx.O.nRcdDeleted_128=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_128",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:128,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:31,gxgrid:this.Grid1Container,fnc:this.Valid_Bancoagenciaid,isvalid:null,rgrid:[],fld:"BANCOAGENCIAID",gxz:"Z953BancoAgenciaId",gxold:"O953BancoAgenciaId",gxvar:"A953BancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A953BancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z953BancoAgenciaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(31),gx.O.A953BancoAgenciaId,0)},c2v:function(){gx.O.A953BancoAgenciaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:128,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:1,grid:31,gxgrid:this.Grid1Container,fnc:this.Valid_Bancoagencianome,isvalid:null,rgrid:[],fld:"BANCOAGENCIANOME",gxz:"Z954BancoAgenciaNome",gxold:"O954BancoAgenciaNome",gxvar:"A954BancoAgenciaNome",ucs:[],op:[36,35],ip:[36,35,34,33,26,21,15],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A954BancoAgenciaNome=Value},v2z:function(Value){gx.O.Z954BancoAgenciaNome=Value},v2c:function(row){gx.fn.setGridControlValue("BANCOAGENCIANOME",row || gx.fn.currentGridRowImpl(31),gx.O.A954BancoAgenciaNome,0)},c2v:function(){gx.O.A954BancoAgenciaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCOAGENCIANOME",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:128,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOAGENCIAUSUARIOALT",gxz:"Z955BancoAgenciaUsuarioAlt",gxold:"O955BancoAgenciaUsuarioAlt",gxvar:"A955BancoAgenciaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A955BancoAgenciaUsuarioAlt=Value},v2z:function(Value){gx.O.Z955BancoAgenciaUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("BANCOAGENCIAUSUARIOALT",row || gx.fn.currentGridRowImpl(31),gx.O.A955BancoAgenciaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A955BancoAgenciaUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCOAGENCIAUSUARIOALT",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:128,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOAGENCIADATAHORAALT",gxz:"Z956BancoAgenciaDataHoraAlt",gxold:"O956BancoAgenciaDataHoraAlt",gxvar:"A956BancoAgenciaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A956BancoAgenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z956BancoAgenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOAGENCIADATAHORAALT",row || gx.fn.currentGridRowImpl(31),gx.O.A956BancoAgenciaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A956BancoAgenciaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BANCOAGENCIADATAHORAALT",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[37]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[40]={fld:"TABLE22",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BANCODATAHORAALT",gxz:"Z952BancoDataHoraAlt",gxold:"O952BancoDataHoraAlt",gxvar:"A952BancoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A952BancoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z952BancoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BANCODATAHORAALT",gx.O.A952BancoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A952BancoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("BANCODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BANCOUSUARIOALT",gxz:"Z951BancoUsuarioAlt",gxold:"O951BancoUsuarioAlt",gxvar:"A951BancoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A951BancoUsuarioAlt=Value},v2z:function(Value){gx.O.Z951BancoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("BANCOUSUARIOALT",gx.O.A951BancoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A951BancoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("BANCOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV21AcessoSistemaSequencia",gxold:"OV21AcessoSistemaSequencia",gxvar:"AV21AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV21AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"BTNHELP",grid:0};
   this.A947BancoId = 0 ;
   this.Z947BancoId = 0 ;
   this.O947BancoId = 0 ;
   this.A948BancoNome = "" ;
   this.Z948BancoNome = "" ;
   this.O948BancoNome = "" ;
   this.A949BancoQtdeDigitoBoleto = 0 ;
   this.Z949BancoQtdeDigitoBoleto = 0 ;
   this.O949BancoQtdeDigitoBoleto = 0 ;
   this.ZnRcdDeleted_128 = 0 ;
   this.OnRcdDeleted_128 = 0 ;
   this.Z953BancoAgenciaId = 0 ;
   this.O953BancoAgenciaId = 0 ;
   this.Z954BancoAgenciaNome = "" ;
   this.O954BancoAgenciaNome = "" ;
   this.Z955BancoAgenciaUsuarioAlt = "" ;
   this.O955BancoAgenciaUsuarioAlt = "" ;
   this.Z956BancoAgenciaDataHoraAlt = gx.date.nullDate() ;
   this.O956BancoAgenciaDataHoraAlt = gx.date.nullDate() ;
   this.A952BancoDataHoraAlt = gx.date.nullDate() ;
   this.Z952BancoDataHoraAlt = gx.date.nullDate() ;
   this.O952BancoDataHoraAlt = gx.date.nullDate() ;
   this.A951BancoUsuarioAlt = "" ;
   this.Z951BancoUsuarioAlt = "" ;
   this.O951BancoUsuarioAlt = "" ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.ZV21AcessoSistemaSequencia = 0 ;
   this.OV21AcessoSistemaSequencia = 0 ;
   this.A953BancoAgenciaId = 0 ;
   this.A955BancoAgenciaUsuarioAlt = "" ;
   this.A956BancoAgenciaDataHoraAlt = gx.date.nullDate() ;
   this.A954BancoAgenciaNome = "" ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV28Pgmname = "" ;
   this.AV29Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV10ret = 0 ;
   this.AV18BancoId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A947BancoId = 0 ;
   this.A951BancoUsuarioAlt = "" ;
   this.A952BancoDataHoraAlt = gx.date.nullDate() ;
   this.A948BancoNome = "" ;
   this.A949BancoQtdeDigitoBoleto = 0 ;
   this.AV26Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12292_client": ["'FECHAR'", true] ,"e13292_client": ["AFTER TRN", true] ,"e1429127_client": ["ENTER", true] ,"e1529127_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18BancoId',fld:'vBANCOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18BancoId", "vBANCOID", 0, "int");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A950BancoEmpresaId", "BANCOEMPRESAID", 0, "char");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 127 ]= ["O949BancoQtdeDigitoBoleto","O948BancoNome","O947BancoId"] ;
   this.LvlOlds[ 128 ]= ["O954BancoAgenciaNome","O953BancoAgenciaId","O947BancoId"] ;
});
gx.setParentObj(new tbanco());
