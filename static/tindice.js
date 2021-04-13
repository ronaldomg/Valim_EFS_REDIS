/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:39:4.84
*/
gx.evt.autoSkip = false;
gx.define('tindice', false, function () {
   this.ServerClass =  "tindice" ;
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
      this.AV20IndiceSigla=gx.fn.getControlValue("vINDICESIGLA") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV35Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV31IndiceValoresValor=gx.fn.getDecimalValue("vINDICEVALORESVALOR",'.',',') ;
      this.AV32IndiceValoresPercentual=gx.fn.getDecimalValue("vINDICEVALORESPERCENTUAL",'.',',') ;
      this.AV23SnAlterou2=gx.fn.getControlValue("vSNALTEROU2") ;
   };
   this.Valid_Indicesigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INDICESIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Indicedescricao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Indicedescricao",["gx.O.O2356IndiceDescricao", "gx.O.O2363IndiceSigla", "gx.O.A2363IndiceSigla", "gx.O.A2356IndiceDescricao", "gx.O.AV10ret", "gx.O.AV22SnAlterou"],["AV10ret", "AV22SnAlterou"]);
      return true;
   }
   this.Valid_Indicevaloresdata=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("INDICEVALORESDATA", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;
         this.sMode248 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(248,26)  ;
         this.standaloneModal4D248( );
         this.standaloneNotModal4D248( );
         if ( gx.fn.gridDuplicateKey(28) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Indice Valores", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode248  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Indicevaloresvalor=function()
   {
      this.sMode248 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(248,26)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Indicevaloresvalor",["gx.num.urlDecimal(gx.O.A2359IndiceValoresValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.AV31IndiceValoresValor,\'.\',\',\')"],["AV31IndiceValoresValor"]);
      this.Gx_mode =  this.sMode248  ;
      return true;
   }
   this.Valid_Indicevalorespercentual=function()
   {
      this.sMode248 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(248,26)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Indicevalorespercentual",["gx.num.urlDecimal(gx.O.O2360IndiceValoresPercentual,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O2359IndiceValoresValor,\'.\',\',\')", 'gx.date.urlDate(gx.O.O2364IndiceValoresData,"DMY4")', "gx.num.urlDecimal(gx.O.A2360IndiceValoresPercentual,\'.\',\',\')", "gx.O.A2363IndiceSigla", "gx.O.A2356IndiceDescricao", "gx.num.urlDecimal(gx.O.A2359IndiceValoresValor,\'.\',\',\')", 'gx.date.urlDate(gx.O.A2364IndiceValoresData,"DMY4")', "gx.num.urlDecimal(gx.O.AV32IndiceValoresPercentual,\'.\',\',\')", "gx.O.AV10ret", "gx.O.AV23SnAlterou2"],["AV32IndiceValoresPercentual", "AV10ret", "AV23SnAlterou2"]);
      this.Gx_mode =  this.sMode248  ;
      return true;
   }
   this.standaloneModal4D248=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("INDICEVALORESDATA","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("INDICEVALORESDATA","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4D248=function()
   {
      try {
         gx.fn.setCtrlProperty("INDICEVALORESUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("INDICEVALORESDATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.e124d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134d2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144d247_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154d247_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,21,22,25,27,28,29,30,31,32,33,36,39,41,43,52,57];
   this.GXLastCtrlId =57;
   this.Grid1Container = new gx.grid.grid(this, 248,"IndiceValores",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tindice",[2364],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_248",27,"vNRCDDELETED_248","","","nRcdDeleted_248","int",0,"px",4,1,"right",null,[],"nRcdDeleted_248","nRcdDeleted_248",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2364,28,"INDICEVALORESDATA","Data","","IndiceValoresData","date",0,"px",10,10,"right",null,[],2364,"IndiceValoresData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2359,29,"INDICEVALORESVALOR","Valor","","IndiceValoresValor","decimal",0,"px",11,11,"right",null,[],2359,"IndiceValoresValor",true,6,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2360,30,"INDICEVALORESPERCENTUAL","Percentual","","IndiceValoresPercentual","decimal",0,"px",11,11,"right",null,[],2360,"IndiceValoresPercentual",true,6,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2361,31,"INDICEVALORESUSUARIOALT","Usuário Alteração","","IndiceValoresUsuarioAlt","char",0,"px",12,12,"left",null,[],2361,"IndiceValoresUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2362,32,"INDICEVALORESDATAHORAALT","Data/Hora Alteração","","IndiceValoresDataHoraAlt","dtime",0,"px",16,16,"right",null,[],2362,"IndiceValoresDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV29Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV29Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV29Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tindice_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.HDMASKDATAContainer = gx.uc.getNew(this, 53, 15, "HDMask", "HDMASKDATAContainer", "Hdmaskdata");
   var HDMASKDATAContainer = this.HDMASKDATAContainer;
   HDMASKDATAContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKDATAContainer.setProp("Picture", "Picture", "99/99/9999", "str");
   HDMASKDATAContainer.setProp("Default", "Default", "", "str");
   HDMASKDATAContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKDATAContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKDATAContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKDATAContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKDATAContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKDATAContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKDATAContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKDATAContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKDATAContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKDATAContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKDATAContainer.setProp("Class", "Class", "", "char");
   HDMASKDATAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKDATAContainer);
   this.HDMASKVALORContainer = gx.uc.getNew(this, 54, 15, "HDMask", "HDMASKVALORContainer", "Hdmaskvalor");
   var HDMASKVALORContainer = this.HDMASKVALORContainer;
   HDMASKVALORContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKVALORContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORContainer);
   this.HDMASKPERCContainer = gx.uc.getNew(this, 55, 15, "HDMask", "HDMASKPERCContainer", "Hdmaskperc");
   var HDMASKPERCContainer = this.HDMASKPERCContainer;
   HDMASKPERCContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKPERCContainer.setProp("Picture", "Picture", "", "str");
   HDMASKPERCContainer.setProp("Default", "Default", "", "str");
   HDMASKPERCContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKPERCContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKPERCContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKPERCContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKPERCContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKPERCContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKPERCContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKPERCContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKPERCContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKPERCContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKPERCContainer.setProp("Class", "Class", "", "char");
   HDMASKPERCContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKPERCContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:6,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Indicesigla,isvalid:null,rgrid:[this.Grid1Container],fld:"INDICESIGLA",gxz:"Z2363IndiceSigla",gxold:"O2363IndiceSigla",gxvar:"A2363IndiceSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2363IndiceSigla=Value},v2z:function(Value){gx.O.Z2363IndiceSigla=Value},v2c:function(){gx.fn.setControlValue("INDICESIGLA",gx.O.A2363IndiceSigla,0)},c2v:function(){gx.O.A2363IndiceSigla=this.val()},val:function(){return gx.fn.getControlValue("INDICESIGLA")},nac:function(){return !(""==this.AV20IndiceSigla)}};
   GXValidFnc[19]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Indicedescricao,isvalid:null,rgrid:[],fld:"INDICEDESCRICAO",gxz:"Z2356IndiceDescricao",gxold:"O2356IndiceDescricao",gxvar:"A2356IndiceDescricao",ucs:[],op:[],ip:[21,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2356IndiceDescricao=Value},v2z:function(Value){gx.O.Z2356IndiceDescricao=Value},v2c:function(){gx.fn.setControlValue("INDICEDESCRICAO",gx.O.A2356IndiceDescricao,0)},c2v:function(){gx.O.A2356IndiceDescricao=this.val()},val:function(){return gx.fn.getControlValue("INDICEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TAB2",grid:0};
   GXValidFnc[25]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[27]={lvl:248,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_248",gxz:"ZnRcdDeleted_248",gxold:"OnRcdDeleted_248",gxvar:"nRcdDeleted_248",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_248=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_248=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_248",row || gx.fn.currentGridRowImpl(26),gx.O.nRcdDeleted_248,0)},c2v:function(){gx.O.nRcdDeleted_248=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_248",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:248,type:"date",len:10,dec:0,sign:false,ro:0,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Indicevaloresdata,isvalid:null,rgrid:[],fld:"INDICEVALORESDATA",gxz:"Z2364IndiceValoresData",gxold:"O2364IndiceValoresData",gxvar:"A2364IndiceValoresData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2364IndiceValoresData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2364IndiceValoresData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("INDICEVALORESDATA",row || gx.fn.currentGridRowImpl(26),gx.O.A2364IndiceValoresData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2364IndiceValoresData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("INDICEVALORESDATA",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:248,type:"decimal",len:11,dec:6,sign:true,pic:"ZZZ9.999999",ro:0,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Indicevaloresvalor,isvalid:null,rgrid:[],fld:"INDICEVALORESVALOR",gxz:"Z2359IndiceValoresValor",gxold:"O2359IndiceValoresValor",gxvar:"A2359IndiceValoresValor",ucs:[],op:[],ip:[29],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2359IndiceValoresValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2359IndiceValoresValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("INDICEVALORESVALOR",row || gx.fn.currentGridRowImpl(26),gx.O.A2359IndiceValoresValor,6,',')},c2v:function(){gx.O.A2359IndiceValoresValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("INDICEVALORESVALOR",row || gx.fn.currentGridRowImpl(26),'.',',')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:248,type:"decimal",len:11,dec:6,sign:true,pic:"ZZZ9.999999",ro:0,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Indicevalorespercentual,isvalid:null,rgrid:[],fld:"INDICEVALORESPERCENTUAL",gxz:"Z2360IndiceValoresPercentual",gxold:"O2360IndiceValoresPercentual",gxvar:"A2360IndiceValoresPercentual",ucs:[],op:[],ip:[28,29,21,15,30],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2360IndiceValoresPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2360IndiceValoresPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("INDICEVALORESPERCENTUAL",row || gx.fn.currentGridRowImpl(26),gx.O.A2360IndiceValoresPercentual,6,',')},c2v:function(){gx.O.A2360IndiceValoresPercentual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("INDICEVALORESPERCENTUAL",row || gx.fn.currentGridRowImpl(26),'.',',')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:248,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INDICEVALORESUSUARIOALT",gxz:"Z2361IndiceValoresUsuarioAlt",gxold:"O2361IndiceValoresUsuarioAlt",gxvar:"A2361IndiceValoresUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2361IndiceValoresUsuarioAlt=Value},v2z:function(Value){gx.O.Z2361IndiceValoresUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("INDICEVALORESUSUARIOALT",row || gx.fn.currentGridRowImpl(26),gx.O.A2361IndiceValoresUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2361IndiceValoresUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("INDICEVALORESUSUARIOALT",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:248,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INDICEVALORESDATAHORAALT",gxz:"Z2362IndiceValoresDataHoraAlt",gxold:"O2362IndiceValoresDataHoraAlt",gxvar:"A2362IndiceValoresDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2362IndiceValoresDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2362IndiceValoresDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("INDICEVALORESDATAHORAALT",row || gx.fn.currentGridRowImpl(26),gx.O.A2362IndiceValoresDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2362IndiceValoresDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("INDICEVALORESDATAHORAALT",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[33]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[36]={fld:"TABLE21",grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INDICEUSUARIOALT",gxz:"Z2357IndiceUsuarioAlt",gxold:"O2357IndiceUsuarioAlt",gxvar:"A2357IndiceUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2357IndiceUsuarioAlt=Value},v2z:function(Value){gx.O.Z2357IndiceUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("INDICEUSUARIOALT",gx.O.A2357IndiceUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2357IndiceUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("INDICEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INDICEDATAHORAALT",gxz:"Z2358IndiceDataHoraAlt",gxold:"O2358IndiceDataHoraAlt",gxvar:"A2358IndiceDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2358IndiceDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2358IndiceDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("INDICEDATAHORAALT",gx.O.A2358IndiceDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2358IndiceDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("INDICEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[52]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV25AcessoSistemaSequencia",gxold:"OV25AcessoSistemaSequencia",gxvar:"AV25AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV25AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"BTNHELP",grid:0};
   this.A2363IndiceSigla = "" ;
   this.Z2363IndiceSigla = "" ;
   this.O2363IndiceSigla = "" ;
   this.A2356IndiceDescricao = "" ;
   this.Z2356IndiceDescricao = "" ;
   this.O2356IndiceDescricao = "" ;
   this.ZnRcdDeleted_248 = 0 ;
   this.OnRcdDeleted_248 = 0 ;
   this.Z2364IndiceValoresData = gx.date.nullDate() ;
   this.O2364IndiceValoresData = gx.date.nullDate() ;
   this.Z2359IndiceValoresValor = 0 ;
   this.O2359IndiceValoresValor = 0 ;
   this.Z2360IndiceValoresPercentual = 0 ;
   this.O2360IndiceValoresPercentual = 0 ;
   this.Z2361IndiceValoresUsuarioAlt = "" ;
   this.O2361IndiceValoresUsuarioAlt = "" ;
   this.Z2362IndiceValoresDataHoraAlt = gx.date.nullDate() ;
   this.O2362IndiceValoresDataHoraAlt = gx.date.nullDate() ;
   this.A2357IndiceUsuarioAlt = "" ;
   this.Z2357IndiceUsuarioAlt = "" ;
   this.O2357IndiceUsuarioAlt = "" ;
   this.A2358IndiceDataHoraAlt = gx.date.nullDate() ;
   this.Z2358IndiceDataHoraAlt = gx.date.nullDate() ;
   this.O2358IndiceDataHoraAlt = gx.date.nullDate() ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.ZV25AcessoSistemaSequencia = 0 ;
   this.OV25AcessoSistemaSequencia = 0 ;
   this.A2364IndiceValoresData = gx.date.nullDate() ;
   this.AV31IndiceValoresValor = 0 ;
   this.AV32IndiceValoresPercentual = 0 ;
   this.A2361IndiceValoresUsuarioAlt = "" ;
   this.A2362IndiceValoresDataHoraAlt = gx.date.nullDate() ;
   this.A2359IndiceValoresValor = 0 ;
   this.A2360IndiceValoresPercentual = 0 ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV34Pgmname = "" ;
   this.AV35Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV22SnAlterou = "" ;
   this.AV23SnAlterou2 = "" ;
   this.AV20IndiceSigla = "" ;
   this.A2363IndiceSigla = "" ;
   this.AV10ret = 0 ;
   this.A2357IndiceUsuarioAlt = "" ;
   this.A2358IndiceDataHoraAlt = gx.date.nullDate() ;
   this.A2356IndiceDescricao = "" ;
   this.AV29Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e124d2_client": ["'FECHAR'", true] ,"e134d2_client": ["AFTER TRN", true] ,"e144d247_client": ["ENTER", true] ,"e154d247_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20IndiceSigla',fld:'vINDICESIGLA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20IndiceSigla", "vINDICESIGLA", 0, "char");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV35Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV31IndiceValoresValor", "vINDICEVALORESVALOR", 0, "decimal");
   this.setVCMap("AV32IndiceValoresPercentual", "vINDICEVALORESPERCENTUAL", 0, "decimal");
   this.setVCMap("AV23SnAlterou2", "vSNALTEROU2", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 247 ]= ["O2356IndiceDescricao","O2363IndiceSigla"] ;
   this.LvlOlds[ 248 ]= ["O2360IndiceValoresPercentual","O2359IndiceValoresValor","O2364IndiceValoresData"] ;
});
gx.setParentObj(new tindice());
