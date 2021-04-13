/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:43:8.51
*/
gx.evt.autoSkip = false;
gx.define('tdmed', false, function () {
   this.ServerClass =  "tdmed" ;
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
   this.Valid_Dmedcpfresppag=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Dmedcpfresppag",["gx.O.A3071DmedCPFRespPag", "gx.O.A3072DmedNomeRespPag", "gx.num.urlDecimal(gx.O.A3073DmedValorPago,\'.\',\',\')"],["A3072DmedNomeRespPag", "A3073DmedValorPago", "Gx_mode", "Z3071DmedCPFRespPag", "Z3072DmedNomeRespPag", "Z3073DmedValorPago", "Grid1", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Dmedcpfbenef=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(29) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("DMEDCPFBENEF", gx.fn.currentGridRowImpl(29));
         this.AnyError  = 0;
         this.sMode323 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(323,29)  ;
         this.standaloneModal5S323( );
         this.standaloneNotModal5S323( );
         if ( gx.fn.gridDuplicateKey(31) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Item", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode323  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal5S323=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("DMEDCPFBENEF","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("DMEDCPFBENEF","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal5S323=function()
   {
      return true;
   }
   this.e115s322_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e125s322_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e135s322_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,30,31,32,33,34,35,44,46];
   this.GXLastCtrlId =46;
   this.Grid1Container = new gx.grid.grid(this, 323,"Item",29,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tdmed",[3074],false,1,true,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_323",30,"vNRCDDELETED_323","","","nRcdDeleted_323","int",0,"px",4,1,"right",null,[],"nRcdDeleted_323","nRcdDeleted_323",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3074,31,"DMEDCPFBENEF","CPF Benefeciario","","DmedCPFBenef","int",0,"px",11,11,"right",null,[],3074,"DmedCPFBenef",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3075,32,"DMEDDATANASCBENEF","Data Nascimento Benefeciário","","DmedDataNascBenef","date",0,"px",10,10,"right",null,[],3075,"DmedDataNascBenef",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3076,33,"DMEDNOMEBENEF","Nome Benefeciário","","DmedNomeBenef","svchar",0,"px",60,60,"left",null,[],3076,"DmedNomeBenef",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3077,34,"DMEDVALORPAGOBENEF","Dmed Valor Pago Benef","","DmedValorPagoBenef","decimal",0,"px",22,22,"right",null,[],3077,"DmedValorPagoBenef",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:11,dec:0,sign:false,pic:"99999999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dmedcpfresppag,isvalid:null,rgrid:[this.Grid1Container],fld:"DMEDCPFRESPPAG",gxz:"Z3071DmedCPFRespPag",gxold:"O3071DmedCPFRespPag",gxvar:"A3071DmedCPFRespPag",ucs:[],op:[25,20],ip:[25,20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3071DmedCPFRespPag=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3071DmedCPFRespPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DMEDCPFRESPPAG",gx.O.A3071DmedCPFRespPag,0)},c2v:function(){gx.O.A3071DmedCPFRespPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DMEDCPFRESPPAG",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DMEDNOMERESPPAG",gxz:"Z3072DmedNomeRespPag",gxold:"O3072DmedNomeRespPag",gxvar:"A3072DmedNomeRespPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3072DmedNomeRespPag=Value},v2z:function(Value){gx.O.Z3072DmedNomeRespPag=Value},v2c:function(){gx.fn.setControlValue("DMEDNOMERESPPAG",gx.O.A3072DmedNomeRespPag,0)},c2v:function(){gx.O.A3072DmedNomeRespPag=this.val()},val:function(){return gx.fn.getControlValue("DMEDNOMERESPPAG")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DMEDVALORPAGO",gxz:"Z3073DmedValorPago",gxold:"O3073DmedValorPago",gxvar:"A3073DmedValorPago",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3073DmedValorPago=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3073DmedValorPago=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DMEDVALORPAGO",gx.O.A3073DmedValorPago,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3073DmedValorPago=this.val()},val:function(){return gx.fn.getDecimalValue("DMEDVALORPAGO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[30]={lvl:323,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:29,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_323",gxz:"ZnRcdDeleted_323",gxold:"OnRcdDeleted_323",gxvar:"nRcdDeleted_323",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_323=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_323=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_323",row || gx.fn.currentGridRowImpl(29),gx.O.nRcdDeleted_323,0)},c2v:function(){gx.O.nRcdDeleted_323=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_323",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:323,type:"int",len:11,dec:0,sign:false,pic:"99999999999",ro:0,isacc:1,grid:29,gxgrid:this.Grid1Container,fnc:this.Valid_Dmedcpfbenef,isvalid:null,rgrid:[],fld:"DMEDCPFBENEF",gxz:"Z3074DmedCPFBenef",gxold:"O3074DmedCPFBenef",gxvar:"A3074DmedCPFBenef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3074DmedCPFBenef=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3074DmedCPFBenef=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DMEDCPFBENEF",row || gx.fn.currentGridRowImpl(29),gx.O.A3074DmedCPFBenef,0)},c2v:function(){gx.O.A3074DmedCPFBenef=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DMEDCPFBENEF",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:323,type:"date",len:10,dec:0,sign:false,ro:0,isacc:1,grid:29,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DMEDDATANASCBENEF",gxz:"Z3075DmedDataNascBenef",gxold:"O3075DmedDataNascBenef",gxvar:"A3075DmedDataNascBenef",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3075DmedDataNascBenef=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3075DmedDataNascBenef=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("DMEDDATANASCBENEF",row || gx.fn.currentGridRowImpl(29),gx.O.A3075DmedDataNascBenef,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3075DmedDataNascBenef=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("DMEDDATANASCBENEF",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:323,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:1,grid:29,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DMEDNOMEBENEF",gxz:"Z3076DmedNomeBenef",gxold:"O3076DmedNomeBenef",gxvar:"A3076DmedNomeBenef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3076DmedNomeBenef=Value},v2z:function(Value){gx.O.Z3076DmedNomeBenef=Value},v2c:function(row){gx.fn.setGridControlValue("DMEDNOMEBENEF",row || gx.fn.currentGridRowImpl(29),gx.O.A3076DmedNomeBenef,0)},c2v:function(){gx.O.A3076DmedNomeBenef=this.val()},val:function(row){return gx.fn.getGridControlValue("DMEDNOMEBENEF",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:323,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:29,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DMEDVALORPAGOBENEF",gxz:"Z3077DmedValorPagoBenef",gxold:"O3077DmedValorPagoBenef",gxvar:"A3077DmedValorPagoBenef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3077DmedValorPagoBenef=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3077DmedValorPagoBenef=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("DMEDVALORPAGOBENEF",row || gx.fn.currentGridRowImpl(29),gx.O.A3077DmedValorPagoBenef,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3077DmedValorPagoBenef=this.val()},val:function(row){return gx.fn.getGridDecimalValue("DMEDVALORPAGOBENEF",row || gx.fn.currentGridRowImpl(29),'.',',')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A3071DmedCPFRespPag = 0 ;
   this.Z3071DmedCPFRespPag = 0 ;
   this.O3071DmedCPFRespPag = 0 ;
   this.A3072DmedNomeRespPag = "" ;
   this.Z3072DmedNomeRespPag = "" ;
   this.O3072DmedNomeRespPag = "" ;
   this.A3073DmedValorPago = 0 ;
   this.Z3073DmedValorPago = 0 ;
   this.O3073DmedValorPago = 0 ;
   this.ZnRcdDeleted_323 = 0 ;
   this.OnRcdDeleted_323 = 0 ;
   this.Z3074DmedCPFBenef = 0 ;
   this.O3074DmedCPFBenef = 0 ;
   this.Z3075DmedDataNascBenef = gx.date.nullDate() ;
   this.O3075DmedDataNascBenef = gx.date.nullDate() ;
   this.Z3076DmedNomeBenef = "" ;
   this.O3076DmedNomeBenef = "" ;
   this.Z3077DmedValorPagoBenef = 0 ;
   this.O3077DmedValorPagoBenef = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A3074DmedCPFBenef = 0 ;
   this.A3075DmedDataNascBenef = gx.date.nullDate() ;
   this.A3076DmedNomeBenef = "" ;
   this.A3077DmedValorPagoBenef = 0 ;
   this.AV8Logon = {} ;
   this.A3071DmedCPFRespPag = 0 ;
   this.A3072DmedNomeRespPag = "" ;
   this.A3073DmedValorPago = 0 ;
   this.Events = {"e125s322_client": ["ENTER", true] ,"e135s322_client": ["CANCEL", true] ,"e115s322_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdmed());
