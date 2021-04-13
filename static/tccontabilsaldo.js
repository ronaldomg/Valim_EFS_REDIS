/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:38:57.44
*/
gx.evt.autoSkip = false;
gx.define('tccontabilsaldo', false, function () {
   this.ServerClass =  "tccontabilsaldo" ;
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
   this.Valid_Ccontabilsaldoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CCONTABILSALDOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ccontabilsaldodata=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ccontabilsaldodata",["gx.O.A2305CContabilSaldoId", 'gx.date.urlDate(gx.O.A2306CContabilSaldoData,"DMY4")', "gx.num.urlDecimal(gx.O.A2295CContabilSaldoDebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2296CContabilSaldoCredito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2297CContabilSaldoDebitoApu,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2298CContabilSaldoCreditoApu,\'.\',\',\')"],["A2295CContabilSaldoDebito", "A2296CContabilSaldoCredito", "A2297CContabilSaldoDebitoApu", "A2298CContabilSaldoCreditoApu", "Gx_mode", "Z2305CContabilSaldoId", "Z2306CContabilSaldoData", "Z2295CContabilSaldoDebito", "Z2296CContabilSaldoCredito", "Z2297CContabilSaldoDebitoApu", "Z2298CContabilSaldoCreditoApu", "Grid1", "Grid2", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Ccustosaldoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(44) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CCUSTOSALDOID", gx.fn.currentGridRowImpl(44));
         this.AnyError  = 0;
         this.sMode242 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(242,44)  ;
         this.standaloneModal4B242( );
         this.standaloneNotModal4B242( );
         if ( gx.fn.gridDuplicateKey(46) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "CCusto Saldo", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode242  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal4B242=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CCUSTOSALDOID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CCUSTOSALDOID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4B242=function()
   {
      return true;
   }
   this.Valid_Correntistasaldoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CORRENTISTASALDOID", gx.fn.currentGridRowImpl(54));
         this.AnyError  = 0;
         this.sMode243 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(243,54)  ;
         this.standaloneModal4B243( );
         this.standaloneNotModal4B243( );
         if ( gx.fn.gridDuplicateKey(56) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Correntista Saldo", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode243  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal4B243=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CORRENTISTASALDOID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CORRENTISTASALDOID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4B243=function()
   {
      return true;
   }
   this.e114b241_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e124b241_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e134b241_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,45,46,47,48,49,50,55,56,57,58,59,69];
   this.GXLastCtrlId =69;
   this.Grid1Container = new gx.grid.grid(this, 242,"CCustoSaldo",44,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tccontabilsaldo",[2307],false,1,true,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_242",45,"vNRCDDELETED_242","","","nRcdDeleted_242","int",0,"px",4,1,"right",null,[],"nRcdDeleted_242","nRcdDeleted_242",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2307,46,"CCUSTOSALDOID","CCusto Saldo Id","","CCustoSaldoId","svchar",0,"px",30,30,"left",null,[],2307,"CCustoSaldoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2299,47,"CCUSTOSALDODEBITO","CCusto Saldo Debito","","CCustoSaldoDebito","decimal",0,"px",22,22,"right",null,[],2299,"CCustoSaldoDebito",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2300,48,"CCUSTOSALDODEBITOAPU","CCusto Saldo Debito Apu","","CCustoSaldoDebitoApu","decimal",0,"px",22,22,"right",null,[],2300,"CCustoSaldoDebitoApu",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2301,49,"CCUSTOSALDOCREDITO","CCusto Saldo Credito","","CCustoSaldoCredito","decimal",0,"px",22,22,"right",null,[],2301,"CCustoSaldoCredito",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2302,50,"CCUSTOSALDOCREDITOAPU","CCusto Saldo Credito Apu","","CCustoSaldoCreditoApu","decimal",0,"px",22,22,"right",null,[],2302,"CCustoSaldoCreditoApu",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 243,"CorrentistaSaldo",54,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"tccontabilsaldo",[2308],false,1,true,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("nRcdDeleted_243",55,"vNRCDDELETED_243","","","nRcdDeleted_243","int",0,"px",4,1,"right",null,[],"nRcdDeleted_243","nRcdDeleted_243",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2308,56,"CORRENTISTASALDOID","Correntista Saldo Id","","CorrentistaSaldoId","int",0,"px",7,7,"right",null,[],2308,"CorrentistaSaldoId",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2303,57,"CORRENTISTASALDODEBITO","Correntista Saldo Debito","","CorrentistaSaldoDebito","decimal",0,"px",22,22,"right",null,[],2303,"CorrentistaSaldoDebito",true,2,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2304,58,"CORRENTISTASALDOCREDITO","Correntista Saldo Credito","","CorrentistaSaldoCredito","decimal",0,"px",22,22,"right",null,[],2304,"CorrentistaSaldoCredito",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilsaldoid,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container],fld:"CCONTABILSALDOID",gxz:"Z2305CContabilSaldoId",gxold:"O2305CContabilSaldoId",gxvar:"A2305CContabilSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2305CContabilSaldoId=Value},v2z:function(Value){gx.O.Z2305CContabilSaldoId=Value},v2c:function(){gx.fn.setControlValue("CCONTABILSALDOID",gx.O.A2305CContabilSaldoId,0)},c2v:function(){gx.O.A2305CContabilSaldoId=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILSALDOID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilsaldodata,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container],fld:"CCONTABILSALDODATA",gxz:"Z2306CContabilSaldoData",gxold:"O2306CContabilSaldoData",gxvar:"A2306CContabilSaldoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[40,35,30,25],ip:[40,35,30,25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2306CContabilSaldoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2306CContabilSaldoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CCONTABILSALDODATA",gx.O.A2306CContabilSaldoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2306CContabilSaldoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CCONTABILSALDODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILSALDODEBITO",gxz:"Z2295CContabilSaldoDebito",gxold:"O2295CContabilSaldoDebito",gxvar:"A2295CContabilSaldoDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2295CContabilSaldoDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2295CContabilSaldoDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CCONTABILSALDODEBITO",gx.O.A2295CContabilSaldoDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2295CContabilSaldoDebito=this.val()},val:function(){return gx.fn.getDecimalValue("CCONTABILSALDODEBITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILSALDOCREDITO",gxz:"Z2296CContabilSaldoCredito",gxold:"O2296CContabilSaldoCredito",gxvar:"A2296CContabilSaldoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2296CContabilSaldoCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2296CContabilSaldoCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CCONTABILSALDOCREDITO",gx.O.A2296CContabilSaldoCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2296CContabilSaldoCredito=this.val()},val:function(){return gx.fn.getDecimalValue("CCONTABILSALDOCREDITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILSALDODEBITOAPU",gxz:"Z2297CContabilSaldoDebitoApu",gxold:"O2297CContabilSaldoDebitoApu",gxvar:"A2297CContabilSaldoDebitoApu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2297CContabilSaldoDebitoApu=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2297CContabilSaldoDebitoApu=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CCONTABILSALDODEBITOAPU",gx.O.A2297CContabilSaldoDebitoApu,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2297CContabilSaldoDebitoApu=this.val()},val:function(){return gx.fn.getDecimalValue("CCONTABILSALDODEBITOAPU",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILSALDOCREDITOAPU",gxz:"Z2298CContabilSaldoCreditoApu",gxold:"O2298CContabilSaldoCreditoApu",gxvar:"A2298CContabilSaldoCreditoApu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2298CContabilSaldoCreditoApu=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2298CContabilSaldoCreditoApu=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CCONTABILSALDOCREDITOAPU",gx.O.A2298CContabilSaldoCreditoApu,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2298CContabilSaldoCreditoApu=this.val()},val:function(){return gx.fn.getDecimalValue("CCONTABILSALDOCREDITOAPU",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[45]={lvl:242,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_242",gxz:"ZnRcdDeleted_242",gxold:"OnRcdDeleted_242",gxvar:"nRcdDeleted_242",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_242=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_242=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_242",row || gx.fn.currentGridRowImpl(44),gx.O.nRcdDeleted_242,0)},c2v:function(){gx.O.nRcdDeleted_242=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_242",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:242,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:44,gxgrid:this.Grid1Container,fnc:this.Valid_Ccustosaldoid,isvalid:null,rgrid:[],fld:"CCUSTOSALDOID",gxz:"Z2307CCustoSaldoId",gxold:"O2307CCustoSaldoId",gxvar:"A2307CCustoSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2307CCustoSaldoId=Value},v2z:function(Value){gx.O.Z2307CCustoSaldoId=Value},v2c:function(row){gx.fn.setGridControlValue("CCUSTOSALDOID",row || gx.fn.currentGridRowImpl(44),gx.O.A2307CCustoSaldoId,0)},c2v:function(){gx.O.A2307CCustoSaldoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CCUSTOSALDOID",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:242,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCUSTOSALDODEBITO",gxz:"Z2299CCustoSaldoDebito",gxold:"O2299CCustoSaldoDebito",gxvar:"A2299CCustoSaldoDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2299CCustoSaldoDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2299CCustoSaldoDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CCUSTOSALDODEBITO",row || gx.fn.currentGridRowImpl(44),gx.O.A2299CCustoSaldoDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2299CCustoSaldoDebito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CCUSTOSALDODEBITO",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:242,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCUSTOSALDODEBITOAPU",gxz:"Z2300CCustoSaldoDebitoApu",gxold:"O2300CCustoSaldoDebitoApu",gxvar:"A2300CCustoSaldoDebitoApu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2300CCustoSaldoDebitoApu=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2300CCustoSaldoDebitoApu=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CCUSTOSALDODEBITOAPU",row || gx.fn.currentGridRowImpl(44),gx.O.A2300CCustoSaldoDebitoApu,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2300CCustoSaldoDebitoApu=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CCUSTOSALDODEBITOAPU",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:242,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCUSTOSALDOCREDITO",gxz:"Z2301CCustoSaldoCredito",gxold:"O2301CCustoSaldoCredito",gxvar:"A2301CCustoSaldoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2301CCustoSaldoCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2301CCustoSaldoCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CCUSTOSALDOCREDITO",row || gx.fn.currentGridRowImpl(44),gx.O.A2301CCustoSaldoCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2301CCustoSaldoCredito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CCUSTOSALDOCREDITO",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:242,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCUSTOSALDOCREDITOAPU",gxz:"Z2302CCustoSaldoCreditoApu",gxold:"O2302CCustoSaldoCreditoApu",gxvar:"A2302CCustoSaldoCreditoApu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2302CCustoSaldoCreditoApu=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2302CCustoSaldoCreditoApu=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CCUSTOSALDOCREDITOAPU",row || gx.fn.currentGridRowImpl(44),gx.O.A2302CCustoSaldoCreditoApu,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2302CCustoSaldoCreditoApu=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CCUSTOSALDOCREDITOAPU",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:243,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:54,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_243",gxz:"ZnRcdDeleted_243",gxold:"OnRcdDeleted_243",gxvar:"nRcdDeleted_243",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_243=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_243=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_243",row || gx.fn.currentGridRowImpl(54),gx.O.nRcdDeleted_243,0)},c2v:function(){gx.O.nRcdDeleted_243=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_243",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:243,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:1,grid:54,gxgrid:this.Grid2Container,fnc:this.Valid_Correntistasaldoid,isvalid:null,rgrid:[],fld:"CORRENTISTASALDOID",gxz:"Z2308CorrentistaSaldoId",gxold:"O2308CorrentistaSaldoId",gxvar:"A2308CorrentistaSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2308CorrentistaSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2308CorrentistaSaldoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CORRENTISTASALDOID",row || gx.fn.currentGridRowImpl(54),gx.O.A2308CorrentistaSaldoId,0)},c2v:function(){gx.O.A2308CorrentistaSaldoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CORRENTISTASALDOID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:243,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:54,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CORRENTISTASALDODEBITO",gxz:"Z2303CorrentistaSaldoDebito",gxold:"O2303CorrentistaSaldoDebito",gxvar:"A2303CorrentistaSaldoDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2303CorrentistaSaldoDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2303CorrentistaSaldoDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CORRENTISTASALDODEBITO",row || gx.fn.currentGridRowImpl(54),gx.O.A2303CorrentistaSaldoDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2303CorrentistaSaldoDebito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CORRENTISTASALDODEBITO",row || gx.fn.currentGridRowImpl(54),'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:243,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:54,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CORRENTISTASALDOCREDITO",gxz:"Z2304CorrentistaSaldoCredito",gxold:"O2304CorrentistaSaldoCredito",gxvar:"A2304CorrentistaSaldoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2304CorrentistaSaldoCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2304CorrentistaSaldoCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CORRENTISTASALDOCREDITO",row || gx.fn.currentGridRowImpl(54),gx.O.A2304CorrentistaSaldoCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2304CorrentistaSaldoCredito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CORRENTISTASALDOCREDITO",row || gx.fn.currentGridRowImpl(54),'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[69]={fld:"BTNHELP",grid:0};
   this.A2305CContabilSaldoId = "" ;
   this.Z2305CContabilSaldoId = "" ;
   this.O2305CContabilSaldoId = "" ;
   this.A2306CContabilSaldoData = gx.date.nullDate() ;
   this.Z2306CContabilSaldoData = gx.date.nullDate() ;
   this.O2306CContabilSaldoData = gx.date.nullDate() ;
   this.A2295CContabilSaldoDebito = 0 ;
   this.Z2295CContabilSaldoDebito = 0 ;
   this.O2295CContabilSaldoDebito = 0 ;
   this.A2296CContabilSaldoCredito = 0 ;
   this.Z2296CContabilSaldoCredito = 0 ;
   this.O2296CContabilSaldoCredito = 0 ;
   this.A2297CContabilSaldoDebitoApu = 0 ;
   this.Z2297CContabilSaldoDebitoApu = 0 ;
   this.O2297CContabilSaldoDebitoApu = 0 ;
   this.A2298CContabilSaldoCreditoApu = 0 ;
   this.Z2298CContabilSaldoCreditoApu = 0 ;
   this.O2298CContabilSaldoCreditoApu = 0 ;
   this.ZnRcdDeleted_242 = 0 ;
   this.OnRcdDeleted_242 = 0 ;
   this.Z2307CCustoSaldoId = "" ;
   this.O2307CCustoSaldoId = "" ;
   this.Z2299CCustoSaldoDebito = 0 ;
   this.O2299CCustoSaldoDebito = 0 ;
   this.Z2300CCustoSaldoDebitoApu = 0 ;
   this.O2300CCustoSaldoDebitoApu = 0 ;
   this.Z2301CCustoSaldoCredito = 0 ;
   this.O2301CCustoSaldoCredito = 0 ;
   this.Z2302CCustoSaldoCreditoApu = 0 ;
   this.O2302CCustoSaldoCreditoApu = 0 ;
   this.ZnRcdDeleted_243 = 0 ;
   this.OnRcdDeleted_243 = 0 ;
   this.Z2308CorrentistaSaldoId = 0 ;
   this.O2308CorrentistaSaldoId = 0 ;
   this.Z2303CorrentistaSaldoDebito = 0 ;
   this.O2303CorrentistaSaldoDebito = 0 ;
   this.Z2304CorrentistaSaldoCredito = 0 ;
   this.O2304CorrentistaSaldoCredito = 0 ;
   this.A2308CorrentistaSaldoId = 0 ;
   this.A2303CorrentistaSaldoDebito = 0 ;
   this.A2304CorrentistaSaldoCredito = 0 ;
   this.A2307CCustoSaldoId = "" ;
   this.A2299CCustoSaldoDebito = 0 ;
   this.A2300CCustoSaldoDebitoApu = 0 ;
   this.A2301CCustoSaldoCredito = 0 ;
   this.A2302CCustoSaldoCreditoApu = 0 ;
   this.AV8Logon = {} ;
   this.A2305CContabilSaldoId = "" ;
   this.A2306CContabilSaldoData = gx.date.nullDate() ;
   this.A2295CContabilSaldoDebito = 0 ;
   this.A2296CContabilSaldoCredito = 0 ;
   this.A2297CContabilSaldoDebitoApu = 0 ;
   this.A2298CContabilSaldoCreditoApu = 0 ;
   this.Events = {"e124b241_client": ["ENTER", true] ,"e134b241_client": ["CANCEL", true] ,"e114b241_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tccontabilsaldo());
