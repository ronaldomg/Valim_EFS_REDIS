/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:46:20.78
*/
gx.evt.autoSkip = false;
gx.define('tnfe', false, function () {
   this.ServerClass =  "tnfe" ;
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
   this.Valid_Nfecnpj=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFECNPJ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfeserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFESERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfenumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nfenumero",["gx.O.A11675NFeCNPJ", "gx.O.A11676NFeSerie", "gx.O.A11677NFeNumero", "gx.O.A11679NFeChaveNfe", "gx.num.urlDecimal(gx.O.A11685NFeProtocolo,\'.\',\',\')", "gx.O.A11680NFePessoaEmpresaId", "gx.O.A11681NFePessoaId", 'gx.date.urlDate(gx.O.A11682NFeDataEmissao,"DMY4")', "gx.O.A11683NFeSituacao", "gx.O.A11684NFeXml", "gx.O.A11707NFeAmbiente"],["A11679NFeChaveNfe", "A11685NFeProtocolo", "A11680NFePessoaEmpresaId", "A11681NFePessoaId", "A11682NFeDataEmissao", "A11683NFeSituacao", "A11684NFeXml", "A11707NFeAmbiente", "Gx_mode", "Z11675NFeCNPJ", "Z11676NFeSerie", "Z11677NFeNumero", "Z11679NFeChaveNfe", "Z11685NFeProtocolo", "Z11680NFePessoaEmpresaId", "Z11681NFePessoaId", "Z11682NFeDataEmissao", "Z11683NFeSituacao", "Z11684NFeXml", "Z11707NFeAmbiente", "Gridtnfe_evento", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Nfesituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFESITUACAO");
         this.AnyError  = 0;
         if ( ! ( this.A11683NFeSituacao == "0" || this.A11683NFeSituacao == "1" || this.A11683NFeSituacao == "2" || this.A11683NFeSituacao == "3" || this.A11683NFeSituacao == "4" || this.A11683NFeSituacao == "5" || this.A11683NFeSituacao == "6" ) )
         {
            try {
               gxballoon.setError("Campo Situação fora do intervalo");
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
   this.Valid_Nfeeventosequencia=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(96) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("NFEEVENTOSEQUENCIA", gx.fn.currentGridRowImpl(96));
         this.AnyError  = 0;
         this.sMode870 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(870,96)  ;
         this.standaloneModalH2870( );
         this.standaloneNotModalH2870( );

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode870  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfeeventocodigo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(96) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("NFEEVENTOCODIGO", gx.fn.currentGridRowImpl(96));
         this.AnyError  = 0;
         this.sMode870 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(870,96)  ;
         if ( gx.fn.gridDuplicateKey(98) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Evento", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode870  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModalH2870=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("NFEEVENTOSEQUENCIA","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("NFEEVENTOSEQUENCIA","Enabled", 1 );
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("NFEEVENTOCODIGO","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("NFEEVENTOCODIGO","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModalH2870=function()
   {
      return true;
   }
   this.e11h2862_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12h2862_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,95,97,98,99,100];
   this.GXLastCtrlId =100;
   this.Gridtnfe_eventoContainer = new gx.grid.grid(this, 870,"Evento",96,"Gridtnfe_evento","Gridtnfe_evento","Gridtnfe_eventoContainer",this.CmpContext,this.IsMasterPage,"tnfe",[11678,11686],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Gridtnfe_eventoContainer = this.Gridtnfe_eventoContainer;
   Gridtnfe_eventoContainer.addSingleLineEdit(11678,97,"NFEEVENTOSEQUENCIA","Sequência","","NfeEventoSequencia","int",0,"px",2,2,"right",null,[],11678,"NfeEventoSequencia",true,0,false,false,"Attribute",1,"");
   Gridtnfe_eventoContainer.addSingleLineEdit(11686,98,"NFEEVENTOCODIGO","Evento","","NfeEventoCodigo","int",0,"px",6,6,"right",null,[],11686,"NfeEventoCodigo",true,0,false,false,"Attribute",1,"");
   Gridtnfe_eventoContainer.addSingleLineEdit(11687,99,"NFEEVENTODATA","Data","","NfeEventoData","dtime",0,"px",16,16,"right",null,[],11687,"NfeEventoData",true,5,false,false,"Attribute",1,"");
   Gridtnfe_eventoContainer.addSingleLineEdit(11688,100,"NFEEVENTOXML","Xml","","NFeEventoXml","vchar",0,"px",2097152,80,"left",null,[],11688,"NFeEventoXml",true,0,false,false,"Attribute",1,"");
   this.setGrid(Gridtnfe_eventoContainer);
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKNFECNPJ", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfecnpj,isvalid:null,rgrid:[this.Gridtnfe_eventoContainer],fld:"NFECNPJ",gxz:"Z11675NFeCNPJ",gxold:"O11675NFeCNPJ",gxvar:"A11675NFeCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11675NFeCNPJ=Value},v2z:function(Value){gx.O.Z11675NFeCNPJ=Value},v2c:function(){gx.fn.setControlValue("NFECNPJ",gx.O.A11675NFeCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11675NFeCNPJ=this.val()},val:function(){return gx.fn.getControlValue("NFECNPJ")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKNFESERIE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfeserie,isvalid:null,rgrid:[this.Gridtnfe_eventoContainer],fld:"NFESERIE",gxz:"Z11676NFeSerie",gxold:"O11676NFeSerie",gxvar:"A11676NFeSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11676NFeSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11676NFeSerie=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFESERIE",gx.O.A11676NFeSerie,0)},c2v:function(){gx.O.A11676NFeSerie=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFESERIE",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKNFENUMERO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfenumero,isvalid:null,rgrid:[this.Gridtnfe_eventoContainer],fld:"NFENUMERO",gxz:"Z11677NFeNumero",gxold:"O11677NFeNumero",gxvar:"A11677NFeNumero",ucs:[],op:[89,84,79,74,69,64,59,54],ip:[89,84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11677NFeNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11677NFeNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFENUMERO",gx.O.A11677NFeNumero,0)},c2v:function(){gx.O.A11677NFeNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFENUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKNFECHAVENFE", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFECHAVENFE",gxz:"Z11679NFeChaveNfe",gxold:"O11679NFeChaveNfe",gxvar:"A11679NFeChaveNfe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11679NFeChaveNfe=Value},v2z:function(Value){gx.O.Z11679NFeChaveNfe=Value},v2c:function(){gx.fn.setControlValue("NFECHAVENFE",gx.O.A11679NFeChaveNfe,0)},c2v:function(){gx.O.A11679NFeChaveNfe=this.val()},val:function(){return gx.fn.getControlValue("NFECHAVENFE")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKNFEPROTOCOLO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFEPROTOCOLO",gxz:"Z11685NFeProtocolo",gxold:"O11685NFeProtocolo",gxvar:"A11685NFeProtocolo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11685NFeProtocolo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11685NFeProtocolo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFEPROTOCOLO",gx.O.A11685NFeProtocolo,0)},c2v:function(){gx.O.A11685NFeProtocolo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFEPROTOCOLO",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKNFEPESSOAEMPRESAID", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFEPESSOAEMPRESAID",gxz:"Z11680NFePessoaEmpresaId",gxold:"O11680NFePessoaEmpresaId",gxvar:"A11680NFePessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11680NFePessoaEmpresaId=Value},v2z:function(Value){gx.O.Z11680NFePessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("NFEPESSOAEMPRESAID",gx.O.A11680NFePessoaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11680NFePessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("NFEPESSOAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKNFEPESSOAID", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFEPESSOAID",gxz:"Z11681NFePessoaId",gxold:"O11681NFePessoaId",gxvar:"A11681NFePessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11681NFePessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11681NFePessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFEPESSOAID",gx.O.A11681NFePessoaId,0)},c2v:function(){gx.O.A11681NFePessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFEPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKNFEDATAEMISSAO", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFEDATAEMISSAO",gxz:"Z11682NFeDataEmissao",gxold:"O11682NFeDataEmissao",gxvar:"A11682NFeDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11682NFeDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11682NFeDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NFEDATAEMISSAO",gx.O.A11682NFeDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11682NFeDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("NFEDATAEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCKNFESITUACAO", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfesituacao,isvalid:null,rgrid:[],fld:"NFESITUACAO",gxz:"Z11683NFeSituacao",gxold:"O11683NFeSituacao",gxvar:"A11683NFeSituacao",ucs:[],op:[79],ip:[79],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11683NFeSituacao=Value},v2z:function(Value){gx.O.Z11683NFeSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("NFESITUACAO",gx.O.A11683NFeSituacao);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11683NFeSituacao=this.val()},val:function(){return gx.fn.getControlValue("NFESITUACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKNFEXML", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFEXML",gxz:"Z11684NFeXml",gxold:"O11684NFeXml",gxvar:"A11684NFeXml",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11684NFeXml=Value},v2z:function(Value){gx.O.Z11684NFeXml=Value},v2c:function(){gx.fn.setControlValue("NFEXML",gx.O.A11684NFeXml,0)},c2v:function(){gx.O.A11684NFeXml=this.val()},val:function(){return gx.fn.getControlValue("NFEXML")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKNFEAMBIENTE", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFEAMBIENTE",gxz:"Z11707NFeAmbiente",gxold:"O11707NFeAmbiente",gxvar:"A11707NFeAmbiente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11707NFeAmbiente=Value},v2z:function(Value){gx.O.Z11707NFeAmbiente=Value},v2c:function(){gx.fn.setComboBoxValue("NFEAMBIENTE",gx.O.A11707NFeAmbiente)},c2v:function(){gx.O.A11707NFeAmbiente=this.val()},val:function(){return gx.fn.getControlValue("NFEAMBIENTE")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TABLE3",grid:0};
   GXValidFnc[95]={fld:"TITLEEVENTO", format:0,grid:0};
   GXValidFnc[97]={lvl:870,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:1,grid:96,gxgrid:this.Gridtnfe_eventoContainer,fnc:this.Valid_Nfeeventosequencia,isvalid:null,rgrid:[],fld:"NFEEVENTOSEQUENCIA",gxz:"Z11678NfeEventoSequencia",gxold:"O11678NfeEventoSequencia",gxvar:"A11678NfeEventoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11678NfeEventoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11678NfeEventoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFEEVENTOSEQUENCIA",row || gx.fn.currentGridRowImpl(96),gx.O.A11678NfeEventoSequencia,0)},c2v:function(){gx.O.A11678NfeEventoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFEEVENTOSEQUENCIA",row || gx.fn.currentGridRowImpl(96),'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:870,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:1,grid:96,gxgrid:this.Gridtnfe_eventoContainer,fnc:this.Valid_Nfeeventocodigo,isvalid:null,rgrid:[],fld:"NFEEVENTOCODIGO",gxz:"Z11686NfeEventoCodigo",gxold:"O11686NfeEventoCodigo",gxvar:"A11686NfeEventoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11686NfeEventoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11686NfeEventoCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFEEVENTOCODIGO",row || gx.fn.currentGridRowImpl(96),gx.O.A11686NfeEventoCodigo,0)},c2v:function(){gx.O.A11686NfeEventoCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFEEVENTOCODIGO",row || gx.fn.currentGridRowImpl(96),'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:870,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:1,grid:96,gxgrid:this.Gridtnfe_eventoContainer,fnc:null,isvalid:null,rgrid:[],fld:"NFEEVENTODATA",gxz:"Z11687NfeEventoData",gxold:"O11687NfeEventoData",gxvar:"A11687NfeEventoData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11687NfeEventoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11687NfeEventoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("NFEEVENTODATA",row || gx.fn.currentGridRowImpl(96),gx.O.A11687NfeEventoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11687NfeEventoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("NFEEVENTODATA",row || gx.fn.currentGridRowImpl(96))},nac:gx.falseFn};
   GXValidFnc[100]={lvl:870,type:"vchar",len:2097152,dec:0,sign:false,ro:0,isacc:1,grid:96,gxgrid:this.Gridtnfe_eventoContainer,fnc:null,isvalid:null,rgrid:[],fld:"NFEEVENTOXML",gxz:"Z11688NFeEventoXml",gxold:"O11688NFeEventoXml",gxvar:"A11688NFeEventoXml",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11688NFeEventoXml=Value},v2z:function(Value){gx.O.Z11688NFeEventoXml=Value},v2c:function(row){gx.fn.setGridControlValue("NFEEVENTOXML",row || gx.fn.currentGridRowImpl(96),gx.O.A11688NFeEventoXml,0)},c2v:function(){gx.O.A11688NFeEventoXml=this.val()},val:function(row){return gx.fn.getGridControlValue("NFEEVENTOXML",row || gx.fn.currentGridRowImpl(96))},nac:gx.falseFn};
   this.A11675NFeCNPJ = "" ;
   this.Z11675NFeCNPJ = "" ;
   this.O11675NFeCNPJ = "" ;
   this.A11676NFeSerie = 0 ;
   this.Z11676NFeSerie = 0 ;
   this.O11676NFeSerie = 0 ;
   this.A11677NFeNumero = 0 ;
   this.Z11677NFeNumero = 0 ;
   this.O11677NFeNumero = 0 ;
   this.A11679NFeChaveNfe = "" ;
   this.Z11679NFeChaveNfe = "" ;
   this.O11679NFeChaveNfe = "" ;
   this.A11685NFeProtocolo = 0 ;
   this.Z11685NFeProtocolo = 0 ;
   this.O11685NFeProtocolo = 0 ;
   this.A11680NFePessoaEmpresaId = "" ;
   this.Z11680NFePessoaEmpresaId = "" ;
   this.O11680NFePessoaEmpresaId = "" ;
   this.A11681NFePessoaId = 0 ;
   this.Z11681NFePessoaId = 0 ;
   this.O11681NFePessoaId = 0 ;
   this.A11682NFeDataEmissao = gx.date.nullDate() ;
   this.Z11682NFeDataEmissao = gx.date.nullDate() ;
   this.O11682NFeDataEmissao = gx.date.nullDate() ;
   this.A11683NFeSituacao = "" ;
   this.Z11683NFeSituacao = "" ;
   this.O11683NFeSituacao = "" ;
   this.A11684NFeXml = "" ;
   this.Z11684NFeXml = "" ;
   this.O11684NFeXml = "" ;
   this.A11707NFeAmbiente = "" ;
   this.Z11707NFeAmbiente = "" ;
   this.O11707NFeAmbiente = "" ;
   this.Z11678NfeEventoSequencia = 0 ;
   this.O11678NfeEventoSequencia = 0 ;
   this.Z11686NfeEventoCodigo = 0 ;
   this.O11686NfeEventoCodigo = 0 ;
   this.Z11687NfeEventoData = gx.date.nullDate() ;
   this.O11687NfeEventoData = gx.date.nullDate() ;
   this.Z11688NFeEventoXml = "" ;
   this.O11688NFeEventoXml = "" ;
   this.A11678NfeEventoSequencia = 0 ;
   this.A11686NfeEventoCodigo = 0 ;
   this.A11687NfeEventoData = gx.date.nullDate() ;
   this.A11688NFeEventoXml = "" ;
   this.A11675NFeCNPJ = "" ;
   this.A11676NFeSerie = 0 ;
   this.A11677NFeNumero = 0 ;
   this.A11679NFeChaveNfe = "" ;
   this.A11685NFeProtocolo = 0 ;
   this.A11680NFePessoaEmpresaId = "" ;
   this.A11681NFePessoaId = 0 ;
   this.A11682NFeDataEmissao = gx.date.nullDate() ;
   this.A11683NFeSituacao = "" ;
   this.A11684NFeXml = "" ;
   this.A11707NFeAmbiente = "" ;
   this.Events = {"e11h2862_client": ["ENTER", true] ,"e12h2862_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnfe());
