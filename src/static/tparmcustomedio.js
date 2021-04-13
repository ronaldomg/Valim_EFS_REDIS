/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:17:59.80
*/
gx.evt.autoSkip = false;
gx.define('tparmcustomedio', false, function () {
   this.ServerClass =  "tparmcustomedio" ;
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
   this.Valid_Parmcustomedioempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARMCUSTOMEDIOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parmcustomediousuario=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Parmcustomediousuario",["gx.O.A6446ParmCustoMedioEmpId", "gx.O.A6447ParmCustoMedioUsuario", 'gx.date.urlDate(gx.O.A6443ParmCustoMedioData,"DMY4")', "gx.O.A6444ParmCustoMedioFinalizado", "gx.O.A6445ParmCustoMedioPrograma"],["A6443ParmCustoMedioData", "A6444ParmCustoMedioFinalizado", "A6445ParmCustoMedioPrograma", "Gx_mode", "Z6446ParmCustoMedioEmpId", "Z6447ParmCustoMedioUsuario", "Z6443ParmCustoMedioData", "Z6444ParmCustoMedioFinalizado", "Z6445ParmCustoMedioPrograma", "Grid1", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Parmcustomedioprodutoemp=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(38) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PARMCUSTOMEDIOPRODUTOEMP", gx.fn.currentGridRowImpl(38));
         this.AnyError  = 0;
         this.sMode514 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(514,38)  ;
         this.standaloneModal9F514( );
         this.standaloneNotModal9F514( );

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode514  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parmcustomedioprodutoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(38) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PARMCUSTOMEDIOPRODUTOID", gx.fn.currentGridRowImpl(38));
         this.AnyError  = 0;
         this.sMode514 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(514,38)  ;
         if ( gx.fn.gridDuplicateKey(41) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Produtos do Custo Médio", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode514  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal9F514=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("PARMCUSTOMEDIOPRODUTOEMP","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("PARMCUSTOMEDIOPRODUTOEMP","Enabled", 1 );
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("PARMCUSTOMEDIOPRODUTOID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("PARMCUSTOMEDIOPRODUTOID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal9F514=function()
   {
      return true;
   }
   this.e119f513_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e129f513_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139f513_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,29,32,34,39,40,41,42,51,53];
   this.GXLastCtrlId =53;
   this.Grid1Container = new gx.grid.grid(this, 514,"ParmCustoMedioProduto",38,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tparmcustomedio",[6448,6449],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_514",39,"vNRCDDELETED_514","","","nRcdDeleted_514","int",0,"px",4,1,"right",null,[],"nRcdDeleted_514","nRcdDeleted_514",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6448,40,"PARMCUSTOMEDIOPRODUTOEMP","Empresa","","ParmCustoMedioProdutoEmp","char",0,"px",10,10,"left",null,[],6448,"ParmCustoMedioProdutoEmp",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6449,41,"PARMCUSTOMEDIOPRODUTOID","Produto","","ParmCustoMedioProdutoId","int",0,"px",10,10,"right",null,[],6449,"ParmCustoMedioProdutoId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parmcustomedioempid,isvalid:null,rgrid:[this.Grid1Container],fld:"PARMCUSTOMEDIOEMPID",gxz:"Z6446ParmCustoMedioEmpId",gxold:"O6446ParmCustoMedioEmpId",gxvar:"A6446ParmCustoMedioEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6446ParmCustoMedioEmpId=Value},v2z:function(Value){gx.O.Z6446ParmCustoMedioEmpId=Value},v2c:function(){gx.fn.setControlValue("PARMCUSTOMEDIOEMPID",gx.O.A6446ParmCustoMedioEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6446ParmCustoMedioEmpId=this.val()},val:function(){return gx.fn.getControlValue("PARMCUSTOMEDIOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parmcustomediousuario,isvalid:null,rgrid:[this.Grid1Container],fld:"PARMCUSTOMEDIOUSUARIO",gxz:"Z6447ParmCustoMedioUsuario",gxold:"O6447ParmCustoMedioUsuario",gxvar:"A6447ParmCustoMedioUsuario",ucs:[],op:[34,29,25],ip:[34,29,25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6447ParmCustoMedioUsuario=Value},v2z:function(Value){gx.O.Z6447ParmCustoMedioUsuario=Value},v2c:function(){gx.fn.setControlValue("PARMCUSTOMEDIOUSUARIO",gx.O.A6447ParmCustoMedioUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6447ParmCustoMedioUsuario=this.val()},val:function(){return gx.fn.getControlValue("PARMCUSTOMEDIOUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMCUSTOMEDIODATA",gxz:"Z6443ParmCustoMedioData",gxold:"O6443ParmCustoMedioData",gxvar:"A6443ParmCustoMedioData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6443ParmCustoMedioData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6443ParmCustoMedioData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PARMCUSTOMEDIODATA",gx.O.A6443ParmCustoMedioData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6443ParmCustoMedioData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PARMCUSTOMEDIODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMCUSTOMEDIOFINALIZADO",gxz:"Z6444ParmCustoMedioFinalizado",gxold:"O6444ParmCustoMedioFinalizado",gxvar:"A6444ParmCustoMedioFinalizado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6444ParmCustoMedioFinalizado=Value},v2z:function(Value){gx.O.Z6444ParmCustoMedioFinalizado=Value},v2c:function(){gx.fn.setControlValue("PARMCUSTOMEDIOFINALIZADO",gx.O.A6444ParmCustoMedioFinalizado,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6444ParmCustoMedioFinalizado=this.val()},val:function(){return gx.fn.getControlValue("PARMCUSTOMEDIOFINALIZADO")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMCUSTOMEDIOPROGRAMA",gxz:"Z6445ParmCustoMedioPrograma",gxold:"O6445ParmCustoMedioPrograma",gxvar:"A6445ParmCustoMedioPrograma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6445ParmCustoMedioPrograma=Value},v2z:function(Value){gx.O.Z6445ParmCustoMedioPrograma=Value},v2c:function(){gx.fn.setControlValue("PARMCUSTOMEDIOPROGRAMA",gx.O.A6445ParmCustoMedioPrograma,0)},c2v:function(){gx.O.A6445ParmCustoMedioPrograma=this.val()},val:function(){return gx.fn.getControlValue("PARMCUSTOMEDIOPROGRAMA")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:514,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:38,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_514",gxz:"ZnRcdDeleted_514",gxold:"OnRcdDeleted_514",gxvar:"nRcdDeleted_514",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_514=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_514=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_514",row || gx.fn.currentGridRowImpl(38),gx.O.nRcdDeleted_514,0)},c2v:function(){gx.O.nRcdDeleted_514=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_514",row || gx.fn.currentGridRowImpl(38),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:514,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:38,gxgrid:this.Grid1Container,fnc:this.Valid_Parmcustomedioprodutoemp,isvalid:null,rgrid:[],fld:"PARMCUSTOMEDIOPRODUTOEMP",gxz:"Z6448ParmCustoMedioProdutoEmp",gxold:"O6448ParmCustoMedioProdutoEmp",gxvar:"A6448ParmCustoMedioProdutoEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6448ParmCustoMedioProdutoEmp=Value},v2z:function(Value){gx.O.Z6448ParmCustoMedioProdutoEmp=Value},v2c:function(row){gx.fn.setGridControlValue("PARMCUSTOMEDIOPRODUTOEMP",row || gx.fn.currentGridRowImpl(38),gx.O.A6448ParmCustoMedioProdutoEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6448ParmCustoMedioProdutoEmp=this.val()},val:function(row){return gx.fn.getGridControlValue("PARMCUSTOMEDIOPRODUTOEMP",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:514,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:1,grid:38,gxgrid:this.Grid1Container,fnc:this.Valid_Parmcustomedioprodutoid,isvalid:null,rgrid:[],fld:"PARMCUSTOMEDIOPRODUTOID",gxz:"Z6449ParmCustoMedioProdutoId",gxold:"O6449ParmCustoMedioProdutoId",gxvar:"A6449ParmCustoMedioProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6449ParmCustoMedioProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6449ParmCustoMedioProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARMCUSTOMEDIOPRODUTOID",row || gx.fn.currentGridRowImpl(38),gx.O.A6449ParmCustoMedioProdutoId,0)},c2v:function(){gx.O.A6449ParmCustoMedioProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARMCUSTOMEDIOPRODUTOID",row || gx.fn.currentGridRowImpl(38),'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"BTNHELP",grid:0};
   this.A6446ParmCustoMedioEmpId = "" ;
   this.Z6446ParmCustoMedioEmpId = "" ;
   this.O6446ParmCustoMedioEmpId = "" ;
   this.A6447ParmCustoMedioUsuario = "" ;
   this.Z6447ParmCustoMedioUsuario = "" ;
   this.O6447ParmCustoMedioUsuario = "" ;
   this.A6443ParmCustoMedioData = gx.date.nullDate() ;
   this.Z6443ParmCustoMedioData = gx.date.nullDate() ;
   this.O6443ParmCustoMedioData = gx.date.nullDate() ;
   this.A6444ParmCustoMedioFinalizado = "" ;
   this.Z6444ParmCustoMedioFinalizado = "" ;
   this.O6444ParmCustoMedioFinalizado = "" ;
   this.A6445ParmCustoMedioPrograma = "" ;
   this.Z6445ParmCustoMedioPrograma = "" ;
   this.O6445ParmCustoMedioPrograma = "" ;
   this.ZnRcdDeleted_514 = 0 ;
   this.OnRcdDeleted_514 = 0 ;
   this.Z6448ParmCustoMedioProdutoEmp = "" ;
   this.O6448ParmCustoMedioProdutoEmp = "" ;
   this.Z6449ParmCustoMedioProdutoId = 0 ;
   this.O6449ParmCustoMedioProdutoId = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A6448ParmCustoMedioProdutoEmp = "" ;
   this.A6449ParmCustoMedioProdutoId = 0 ;
   this.AV8Logon = {} ;
   this.A6446ParmCustoMedioEmpId = "" ;
   this.A6447ParmCustoMedioUsuario = "" ;
   this.A6443ParmCustoMedioData = gx.date.nullDate() ;
   this.A6444ParmCustoMedioFinalizado = "" ;
   this.A6445ParmCustoMedioPrograma = "" ;
   this.Events = {"e129f513_client": ["ENTER", true] ,"e139f513_client": ["CANCEL", true] ,"e119f513_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tparmcustomedio());
