/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:31:49.68
*/
gx.evt.autoSkip = false;
gx.define('tlogtabela', false, function () {
   this.ServerClass =  "tlogtabela" ;
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
   this.Valid_Logtabelaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Logtabelaid",["gx.num.urlDecimal(gx.O.A1614LogTabelaId,\'.\',\',\')", "gx.O.A1603LogTabelaNome", "gx.O.A1604LogTabelaOperacao", 'gx.date.urlDateTime(gx.O.A1605LogTabelaDataHora,"DMY4")', "gx.O.A1606LogTabelaUsuario", "gx.O.A1607LogTabelaChave"],["A1603LogTabelaNome", "A1604LogTabelaOperacao", "A1605LogTabelaDataHora", "A1606LogTabelaUsuario", "A1607LogTabelaChave", "Gx_mode", "Z1614LogTabelaId", "Z1603LogTabelaNome", "Z1604LogTabelaOperacao", "Z1605LogTabelaDataHora", "Z1606LogTabelaUsuario", "Z1607LogTabelaChave", "Grid1", "Grid2", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.Valid_Logtabelaoperacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOGTABELAOPERACAO");
         this.AnyError  = 0;
         if ( ! ( this.A1604LogTabelaOperacao == "I" || this.A1604LogTabelaOperacao == "U" || this.A1604LogTabelaOperacao == "D" ) )
         {
            try {
               gxballoon.setError("Campo Operacao fora do intervalo");
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
   this.Valid_Logtabelacampo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(66) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LOGTABELACAMPO", gx.fn.currentGridRowImpl(66));
         this.AnyError  = 0;
         this.sMode168 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(168,66)  ;
         this.standaloneModal34168( );
         this.standaloneNotModal34168( );
         if ( gx.fn.gridDuplicateKey(68) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Campos", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode168  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal34168=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("LOGTABELACAMPO","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("LOGTABELACAMPO","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal34168=function()
   {
      return true;
   }
   this.Valid_Logtabelacampoblob=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(76) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LOGTABELACAMPOBLOB", gx.fn.currentGridRowImpl(76));
         this.AnyError  = 0;
         this.sMode169 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(169,76)  ;
         this.standaloneModal34169( );
         this.standaloneNotModal34169( );
         if ( gx.fn.gridDuplicateKey(78) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Campos Blob", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode169  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal34169=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("LOGTABELACAMPOBLOB","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("LOGTABELACAMPOBLOB","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal34169=function()
   {
      return true;
   }
   this.e1234167_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1334167_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,21,24,27,30,33,35,39,41,44,46,49,51,54,56,59,61,62,65,67,68,69,70,71,72,75,77,78,79,80,81,82,83];
   this.GXLastCtrlId =83;
   this.Grid1Container = new gx.grid.grid(this, 168,"Campos",66,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tlogtabela",[1615],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_168",67,"vNRCDDELETED_168","","","nRcdDeleted_168","int",0,"px",4,1,"right",null,[],"nRcdDeleted_168","nRcdDeleted_168",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1615,68,"LOGTABELACAMPO","Nome do Campo","","LogTabelaCampo","svchar",0,"px",31,31,"left",null,[],1615,"LogTabelaCampo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1608,69,"LOGTABELAVALORANTIGO","Valor Antigo","","LogTabelaValorAntigo","svchar",0,"px",255,80,"left",null,[],1608,"LogTabelaValorAntigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1609,70,"LOGTABELAVALORNOVO","Valor Novo","","LogTabelaValorNovo","svchar",0,"px",255,80,"left",null,[],1609,"LogTabelaValorNovo",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 169,"CamposBlob",76,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"tlogtabela",[1616],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("nRcdDeleted_169",77,"vNRCDDELETED_169","","","nRcdDeleted_169","int",0,"px",4,1,"right",null,[],"nRcdDeleted_169","nRcdDeleted_169",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(1616,78,"LOGTABELACAMPOBLOB","Nome do Campo Blob","","LogTabelaCampoBlob","svchar",0,"px",31,31,"left",null,[],1616,"LogTabelaCampoBlob",true,0,false,false,"Attribute",1,"");
   Grid2Container.addBlob(1610,79,"LOGTABELAVALORANTIGOBLOB","Valor Antigo Blob","LogTabelaValorAntigoBlob","bitstr",1,60,0,"px","px",true,false,"");
   Grid2Container.addBlob(1611,80,"LOGTABELAVALORNOVOBLOB","Valor Novo Blob","LogTabelaValorNovoBlob","bitstr",1,60,0,"px","px",true,false,"");
   Grid2Container.addSingleLineEdit(1612,81,"LOGTABELAVALORANTIGOLVARCHAR","Valor Antigo LongVarChar","","LogTabelaValorAntigoLVarChar","vchar",200,"px",65536,80,"left",null,[],1612,"LogTabelaValorAntigoLVarChar",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(1613,82,"LOGTABELAVALORNOVOLVARCHAR","Valor Novo LongVarChar","","LogTabelaValorNovoLVarChar","vchar",200,"px",65536,80,"left",null,[],1613,"LogTabelaValorNovoLVarChar",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[21]={fld:"TABLE3",grid:0};
   GXValidFnc[24]={fld:"TXTTITULO", format:0,grid:0};
   GXValidFnc[27]={fld:"TAB1",grid:0};
   GXValidFnc[30]={fld:"TABLE2",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:16,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Logtabelaid,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container],fld:"LOGTABELAID",gxz:"Z1614LogTabelaId",gxold:"O1614LogTabelaId",gxvar:"A1614LogTabelaId",ucs:[],op:[61,56,51,46,41],ip:[61,56,51,46,41,35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1614LogTabelaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1614LogTabelaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOGTABELAID",gx.O.A1614LogTabelaId,0)},c2v:function(){gx.O.A1614LogTabelaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOGTABELAID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELANOME",gxz:"Z1603LogTabelaNome",gxold:"O1603LogTabelaNome",gxvar:"A1603LogTabelaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1603LogTabelaNome=Value},v2z:function(Value){gx.O.Z1603LogTabelaNome=Value},v2c:function(){gx.fn.setControlValue("LOGTABELANOME",gx.O.A1603LogTabelaNome,0)},c2v:function(){gx.O.A1603LogTabelaNome=this.val()},val:function(){return gx.fn.getControlValue("LOGTABELANOME")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Logtabelaoperacao,isvalid:null,rgrid:[],fld:"LOGTABELAOPERACAO",gxz:"Z1604LogTabelaOperacao",gxold:"O1604LogTabelaOperacao",gxvar:"A1604LogTabelaOperacao",ucs:[],op:[46],ip:[46],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1604LogTabelaOperacao=Value},v2z:function(Value){gx.O.Z1604LogTabelaOperacao=Value},v2c:function(){gx.fn.setComboBoxValue("LOGTABELAOPERACAO",gx.O.A1604LogTabelaOperacao);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1604LogTabelaOperacao=this.val()},val:function(){return gx.fn.getControlValue("LOGTABELAOPERACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[49]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"dtime",len:10,dec:8,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELADATAHORA",gxz:"Z1605LogTabelaDataHora",gxold:"O1605LogTabelaDataHora",gxvar:"A1605LogTabelaDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1605LogTabelaDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1605LogTabelaDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOGTABELADATAHORA",gx.O.A1605LogTabelaDataHora,0)},c2v:function(){gx.O.A1605LogTabelaDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LOGTABELADATAHORA")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAUSUARIO",gxz:"Z1606LogTabelaUsuario",gxold:"O1606LogTabelaUsuario",gxvar:"A1606LogTabelaUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1606LogTabelaUsuario=Value},v2z:function(Value){gx.O.Z1606LogTabelaUsuario=Value},v2c:function(){gx.fn.setControlValue("LOGTABELAUSUARIO",gx.O.A1606LogTabelaUsuario,0)},c2v:function(){gx.O.A1606LogTabelaUsuario=this.val()},val:function(){return gx.fn.getControlValue("LOGTABELAUSUARIO")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELACHAVE",gxz:"Z1607LogTabelaChave",gxold:"O1607LogTabelaChave",gxvar:"A1607LogTabelaChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1607LogTabelaChave=Value},v2z:function(Value){gx.O.Z1607LogTabelaChave=Value},v2c:function(){gx.fn.setControlValue("LOGTABELACHAVE",gx.O.A1607LogTabelaChave,0)},c2v:function(){gx.O.A1607LogTabelaChave=this.val()},val:function(){return gx.fn.getControlValue("LOGTABELACHAVE")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TAB2",grid:0};
   GXValidFnc[65]={fld:"DIV1", format:1,grid:0};
   GXValidFnc[67]={lvl:168,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_168",gxz:"ZnRcdDeleted_168",gxold:"OnRcdDeleted_168",gxvar:"nRcdDeleted_168",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_168=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_168=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_168",row || gx.fn.currentGridRowImpl(66),gx.O.nRcdDeleted_168,0)},c2v:function(){gx.O.nRcdDeleted_168=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_168",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:168,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:1,grid:66,gxgrid:this.Grid1Container,fnc:this.Valid_Logtabelacampo,isvalid:null,rgrid:[],fld:"LOGTABELACAMPO",gxz:"Z1615LogTabelaCampo",gxold:"O1615LogTabelaCampo",gxvar:"A1615LogTabelaCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1615LogTabelaCampo=Value},v2z:function(Value){gx.O.Z1615LogTabelaCampo=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELACAMPO",row || gx.fn.currentGridRowImpl(66),gx.O.A1615LogTabelaCampo,0)},c2v:function(){gx.O.A1615LogTabelaCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELACAMPO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:168,type:"svchar",len:255,dec:0,sign:false,ro:0,isacc:1,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAVALORANTIGO",gxz:"Z1608LogTabelaValorAntigo",gxold:"O1608LogTabelaValorAntigo",gxvar:"A1608LogTabelaValorAntigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1608LogTabelaValorAntigo=Value},v2z:function(Value){gx.O.Z1608LogTabelaValorAntigo=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAVALORANTIGO",row || gx.fn.currentGridRowImpl(66),gx.O.A1608LogTabelaValorAntigo,0)},c2v:function(){gx.O.A1608LogTabelaValorAntigo=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELAVALORANTIGO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:168,type:"svchar",len:255,dec:0,sign:false,ro:0,isacc:1,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAVALORNOVO",gxz:"Z1609LogTabelaValorNovo",gxold:"O1609LogTabelaValorNovo",gxvar:"A1609LogTabelaValorNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1609LogTabelaValorNovo=Value},v2z:function(Value){gx.O.Z1609LogTabelaValorNovo=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAVALORNOVO",row || gx.fn.currentGridRowImpl(66),gx.O.A1609LogTabelaValorNovo,0)},c2v:function(){gx.O.A1609LogTabelaValorNovo=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELAVALORNOVO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[71]={fld:"DIV2", format:1,grid:0};
   GXValidFnc[72]={fld:"TAB3",grid:0};
   GXValidFnc[75]={fld:"DIV3", format:1,grid:0};
   GXValidFnc[77]={lvl:169,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:76,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_169",gxz:"ZnRcdDeleted_169",gxold:"OnRcdDeleted_169",gxvar:"nRcdDeleted_169",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_169=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_169=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_169",row || gx.fn.currentGridRowImpl(76),gx.O.nRcdDeleted_169,0)},c2v:function(){gx.O.nRcdDeleted_169=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_169",row || gx.fn.currentGridRowImpl(76),'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:169,type:"svchar",len:31,dec:0,sign:false,ro:0,isacc:1,grid:76,gxgrid:this.Grid2Container,fnc:this.Valid_Logtabelacampoblob,isvalid:null,rgrid:[],fld:"LOGTABELACAMPOBLOB",gxz:"Z1616LogTabelaCampoBlob",gxold:"O1616LogTabelaCampoBlob",gxvar:"A1616LogTabelaCampoBlob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1616LogTabelaCampoBlob=Value},v2z:function(Value){gx.O.Z1616LogTabelaCampoBlob=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELACAMPOBLOB",row || gx.fn.currentGridRowImpl(76),gx.O.A1616LogTabelaCampoBlob,0)},c2v:function(){gx.O.A1616LogTabelaCampoBlob=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELACAMPOBLOB",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:169,type:"bitstr",len:1024,dec:0,sign:false,ro:0,isacc:1,grid:76,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAVALORANTIGOBLOB",gxz:"Z1610LogTabelaValorAntigoBlob",gxold:"O1610LogTabelaValorAntigoBlob",gxvar:"A1610LogTabelaValorAntigoBlob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1610LogTabelaValorAntigoBlob=Value},v2z:function(Value){gx.O.Z1610LogTabelaValorAntigoBlob=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAVALORANTIGOBLOB",row || gx.fn.currentGridRowImpl(76),gx.O.A1610LogTabelaValorAntigoBlob,0)},c2v:function(){gx.O.A1610LogTabelaValorAntigoBlob=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELAVALORANTIGOBLOB",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[80]={lvl:169,type:"bitstr",len:1024,dec:0,sign:false,ro:0,isacc:1,grid:76,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAVALORNOVOBLOB",gxz:"Z1611LogTabelaValorNovoBlob",gxold:"O1611LogTabelaValorNovoBlob",gxvar:"A1611LogTabelaValorNovoBlob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1611LogTabelaValorNovoBlob=Value},v2z:function(Value){gx.O.Z1611LogTabelaValorNovoBlob=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAVALORNOVOBLOB",row || gx.fn.currentGridRowImpl(76),gx.O.A1611LogTabelaValorNovoBlob,0)},c2v:function(){gx.O.A1611LogTabelaValorNovoBlob=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELAVALORNOVOBLOB",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[81]={lvl:169,type:"vchar",len:65536,dec:0,sign:false,ro:0,isacc:1,grid:76,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAVALORANTIGOLVARCHAR",gxz:"Z1612LogTabelaValorAntigoLVarChar",gxold:"O1612LogTabelaValorAntigoLVarChar",gxvar:"A1612LogTabelaValorAntigoLVarChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1612LogTabelaValorAntigoLVarChar=Value},v2z:function(Value){gx.O.Z1612LogTabelaValorAntigoLVarChar=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAVALORANTIGOLVARCHAR",row || gx.fn.currentGridRowImpl(76),gx.O.A1612LogTabelaValorAntigoLVarChar,0)},c2v:function(){gx.O.A1612LogTabelaValorAntigoLVarChar=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELAVALORANTIGOLVARCHAR",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[82]={lvl:169,type:"vchar",len:65536,dec:0,sign:false,ro:0,isacc:1,grid:76,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGTABELAVALORNOVOLVARCHAR",gxz:"Z1613LogTabelaValorNovoLVarChar",gxold:"O1613LogTabelaValorNovoLVarChar",gxvar:"A1613LogTabelaValorNovoLVarChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1613LogTabelaValorNovoLVarChar=Value},v2z:function(Value){gx.O.Z1613LogTabelaValorNovoLVarChar=Value},v2c:function(row){gx.fn.setGridControlValue("LOGTABELAVALORNOVOLVARCHAR",row || gx.fn.currentGridRowImpl(76),gx.O.A1613LogTabelaValorNovoLVarChar,0)},c2v:function(){gx.O.A1613LogTabelaValorNovoLVarChar=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGTABELAVALORNOVOLVARCHAR",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[83]={fld:"DIV4", format:1,grid:0};
   this.A1614LogTabelaId = 0 ;
   this.Z1614LogTabelaId = 0 ;
   this.O1614LogTabelaId = 0 ;
   this.A1603LogTabelaNome = "" ;
   this.Z1603LogTabelaNome = "" ;
   this.O1603LogTabelaNome = "" ;
   this.A1604LogTabelaOperacao = "" ;
   this.Z1604LogTabelaOperacao = "" ;
   this.O1604LogTabelaOperacao = "" ;
   this.A1605LogTabelaDataHora = gx.date.nullDate() ;
   this.Z1605LogTabelaDataHora = gx.date.nullDate() ;
   this.O1605LogTabelaDataHora = gx.date.nullDate() ;
   this.A1606LogTabelaUsuario = "" ;
   this.Z1606LogTabelaUsuario = "" ;
   this.O1606LogTabelaUsuario = "" ;
   this.A1607LogTabelaChave = "" ;
   this.Z1607LogTabelaChave = "" ;
   this.O1607LogTabelaChave = "" ;
   this.ZnRcdDeleted_168 = 0 ;
   this.OnRcdDeleted_168 = 0 ;
   this.Z1615LogTabelaCampo = "" ;
   this.O1615LogTabelaCampo = "" ;
   this.Z1608LogTabelaValorAntigo = "" ;
   this.O1608LogTabelaValorAntigo = "" ;
   this.Z1609LogTabelaValorNovo = "" ;
   this.O1609LogTabelaValorNovo = "" ;
   this.ZnRcdDeleted_169 = 0 ;
   this.OnRcdDeleted_169 = 0 ;
   this.Z1616LogTabelaCampoBlob = "" ;
   this.O1616LogTabelaCampoBlob = "" ;
   this.Z1610LogTabelaValorAntigoBlob = "" ;
   this.O1610LogTabelaValorAntigoBlob = "" ;
   this.Z1611LogTabelaValorNovoBlob = "" ;
   this.O1611LogTabelaValorNovoBlob = "" ;
   this.Z1612LogTabelaValorAntigoLVarChar = "" ;
   this.O1612LogTabelaValorAntigoLVarChar = "" ;
   this.Z1613LogTabelaValorNovoLVarChar = "" ;
   this.O1613LogTabelaValorNovoLVarChar = "" ;
   this.A1616LogTabelaCampoBlob = "" ;
   this.A1610LogTabelaValorAntigoBlob = "" ;
   this.A1611LogTabelaValorNovoBlob = "" ;
   this.A1612LogTabelaValorAntigoLVarChar = "" ;
   this.A1613LogTabelaValorNovoLVarChar = "" ;
   this.A1615LogTabelaCampo = "" ;
   this.A1608LogTabelaValorAntigo = "" ;
   this.A1609LogTabelaValorNovo = "" ;
   this.A1614LogTabelaId = 0 ;
   this.A1603LogTabelaNome = "" ;
   this.A1604LogTabelaOperacao = "" ;
   this.A1605LogTabelaDataHora = gx.date.nullDate() ;
   this.A1606LogTabelaUsuario = "" ;
   this.A1607LogTabelaChave = "" ;
   this.Events = {"e1234167_client": ["ENTER", true] ,"e1334167_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tlogtabela());
