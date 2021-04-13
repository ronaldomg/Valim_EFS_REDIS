/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:18:11.69
*/
gx.evt.autoSkip = false;
gx.define('tsaidaitemsimplesrem', false, function () {
   this.ServerClass =  "tsaidaitemsimplesrem" ;
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
   this.Valid_Saidaitementregafutempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAITEMENTREGAFUTEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaitementregafutid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAITEMENTREGAFUTID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaitementregafutseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaitementregafutseq",["gx.O.A6605SaidaItemEntregaFutEmpId", "gx.O.A6606SaidaItemEntregaFutId", "gx.O.A6607SaidaItemEntregaFutSeq"],[]);
      return true;
   }
   this.Valid_Saidaitemsimplesremseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaitemsimplesremseq",["gx.O.A6605SaidaItemEntregaFutEmpId", "gx.O.A6606SaidaItemEntregaFutId", "gx.O.A6607SaidaItemEntregaFutSeq", "gx.O.A6608SaidaItemSimplesRemSeq", "gx.num.urlDecimal(gx.O.A6612SaidaItemSimplesRemQuantidade,\'.\',\',\')", "gx.O.A6609SaidaItemSimplesRemEmpId", "gx.O.A6610SaidaItemSimplesRemId", "gx.O.A6611SaidaItemSimplesRemSeqItem"],["A6609SaidaItemSimplesRemEmpId", "A6610SaidaItemSimplesRemId", "A6611SaidaItemSimplesRemSeqItem", "A6612SaidaItemSimplesRemQuantidade", "Gx_mode", "Z6605SaidaItemEntregaFutEmpId", "Z6606SaidaItemEntregaFutId", "Z6607SaidaItemEntregaFutSeq", "Z6608SaidaItemSimplesRemSeq", "Z6609SaidaItemSimplesRemEmpId", "Z6610SaidaItemSimplesRemId", "Z6611SaidaItemSimplesRemSeqItem", "Z6612SaidaItemSimplesRemQuantidade", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Saidaitemsimplesremempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAITEMSIMPLESREMEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaitemsimplesremid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAITEMSIMPLESREMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaitemsimplesremseqitem=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaitemsimplesremseqitem",["gx.O.A6609SaidaItemSimplesRemEmpId", "gx.O.A6610SaidaItemSimplesRemId", "gx.O.A6611SaidaItemSimplesRemSeqItem"],[]);
      return true;
   }
   this.e119l523_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e129l523_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139l523_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,51,60,62,64,65];
   this.GXLastCtrlId =65;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitementregafutempid,isvalid:null,rgrid:[],fld:"SAIDAITEMENTREGAFUTEMPID",gxz:"Z6605SaidaItemEntregaFutEmpId",gxold:"O6605SaidaItemEntregaFutEmpId",gxvar:"A6605SaidaItemEntregaFutEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6605SaidaItemEntregaFutEmpId=Value},v2z:function(Value){gx.O.Z6605SaidaItemEntregaFutEmpId=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMENTREGAFUTEMPID",gx.O.A6605SaidaItemEntregaFutEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6605SaidaItemEntregaFutEmpId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMENTREGAFUTEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitementregafutid,isvalid:null,rgrid:[],fld:"SAIDAITEMENTREGAFUTID",gxz:"Z6606SaidaItemEntregaFutId",gxold:"O6606SaidaItemEntregaFutId",gxvar:"A6606SaidaItemEntregaFutId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6606SaidaItemEntregaFutId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6606SaidaItemEntregaFutId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMENTREGAFUTID",gx.O.A6606SaidaItemEntregaFutId,0)},c2v:function(){gx.O.A6606SaidaItemEntregaFutId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMENTREGAFUTID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitementregafutseq,isvalid:null,rgrid:[],fld:"SAIDAITEMENTREGAFUTSEQ",gxz:"Z6607SaidaItemEntregaFutSeq",gxold:"O6607SaidaItemEntregaFutSeq",gxvar:"A6607SaidaItemEntregaFutSeq",ucs:[],op:[],ip:[24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6607SaidaItemEntregaFutSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6607SaidaItemEntregaFutSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMENTREGAFUTSEQ",gx.O.A6607SaidaItemEntregaFutSeq,0)},c2v:function(){gx.O.A6607SaidaItemEntregaFutSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMENTREGAFUTSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemsimplesremseq,isvalid:null,rgrid:[],fld:"SAIDAITEMSIMPLESREMSEQ",gxz:"Z6608SaidaItemSimplesRemSeq",gxold:"O6608SaidaItemSimplesRemSeq",gxvar:"A6608SaidaItemSimplesRemSeq",ucs:[],op:[45,40,35,50],ip:[45,40,35,50,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6608SaidaItemSimplesRemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6608SaidaItemSimplesRemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMSIMPLESREMSEQ",gx.O.A6608SaidaItemSimplesRemSeq,0)},c2v:function(){gx.O.A6608SaidaItemSimplesRemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMSIMPLESREMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemsimplesremempid,isvalid:null,rgrid:[],fld:"SAIDAITEMSIMPLESREMEMPID",gxz:"Z6609SaidaItemSimplesRemEmpId",gxold:"O6609SaidaItemSimplesRemEmpId",gxvar:"A6609SaidaItemSimplesRemEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6609SaidaItemSimplesRemEmpId=Value},v2z:function(Value){gx.O.Z6609SaidaItemSimplesRemEmpId=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMSIMPLESREMEMPID",gx.O.A6609SaidaItemSimplesRemEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6609SaidaItemSimplesRemEmpId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMSIMPLESREMEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemsimplesremid,isvalid:null,rgrid:[],fld:"SAIDAITEMSIMPLESREMID",gxz:"Z6610SaidaItemSimplesRemId",gxold:"O6610SaidaItemSimplesRemId",gxvar:"A6610SaidaItemSimplesRemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6610SaidaItemSimplesRemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6610SaidaItemSimplesRemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMSIMPLESREMID",gx.O.A6610SaidaItemSimplesRemId,0)},c2v:function(){gx.O.A6610SaidaItemSimplesRemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMSIMPLESREMID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemsimplesremseqitem,isvalid:null,rgrid:[],fld:"SAIDAITEMSIMPLESREMSEQITEM",gxz:"Z6611SaidaItemSimplesRemSeqItem",gxold:"O6611SaidaItemSimplesRemSeqItem",gxvar:"A6611SaidaItemSimplesRemSeqItem",ucs:[],op:[],ip:[45,40,35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6611SaidaItemSimplesRemSeqItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6611SaidaItemSimplesRemSeqItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMSIMPLESREMSEQITEM",gx.O.A6611SaidaItemSimplesRemSeqItem,0)},c2v:function(){gx.O.A6611SaidaItemSimplesRemSeqItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMSIMPLESREMSEQITEM",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMSIMPLESREMQUANTIDADE",gxz:"Z6612SaidaItemSimplesRemQuantidade",gxold:"O6612SaidaItemSimplesRemQuantidade",gxvar:"A6612SaidaItemSimplesRemQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6612SaidaItemSimplesRemQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6612SaidaItemSimplesRemQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMSIMPLESREMQUANTIDADE",gx.O.A6612SaidaItemSimplesRemQuantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6612SaidaItemSimplesRemQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMSIMPLESREMQUANTIDADE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[51]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   GXValidFnc[64]={fld:"PROMPT_6605_6606_6607",grid:523};
   GXValidFnc[65]={fld:"PROMPT_6609_6610_6611",grid:523};
   this.A6605SaidaItemEntregaFutEmpId = "" ;
   this.Z6605SaidaItemEntregaFutEmpId = "" ;
   this.O6605SaidaItemEntregaFutEmpId = "" ;
   this.A6606SaidaItemEntregaFutId = 0 ;
   this.Z6606SaidaItemEntregaFutId = 0 ;
   this.O6606SaidaItemEntregaFutId = 0 ;
   this.A6607SaidaItemEntregaFutSeq = 0 ;
   this.Z6607SaidaItemEntregaFutSeq = 0 ;
   this.O6607SaidaItemEntregaFutSeq = 0 ;
   this.A6608SaidaItemSimplesRemSeq = 0 ;
   this.Z6608SaidaItemSimplesRemSeq = 0 ;
   this.O6608SaidaItemSimplesRemSeq = 0 ;
   this.A6609SaidaItemSimplesRemEmpId = "" ;
   this.Z6609SaidaItemSimplesRemEmpId = "" ;
   this.O6609SaidaItemSimplesRemEmpId = "" ;
   this.A6610SaidaItemSimplesRemId = 0 ;
   this.Z6610SaidaItemSimplesRemId = 0 ;
   this.O6610SaidaItemSimplesRemId = 0 ;
   this.A6611SaidaItemSimplesRemSeqItem = 0 ;
   this.Z6611SaidaItemSimplesRemSeqItem = 0 ;
   this.O6611SaidaItemSimplesRemSeqItem = 0 ;
   this.A6612SaidaItemSimplesRemQuantidade = 0 ;
   this.Z6612SaidaItemSimplesRemQuantidade = 0 ;
   this.O6612SaidaItemSimplesRemQuantidade = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A6605SaidaItemEntregaFutEmpId = "" ;
   this.A6606SaidaItemEntregaFutId = 0 ;
   this.A6607SaidaItemEntregaFutSeq = 0 ;
   this.A6608SaidaItemSimplesRemSeq = 0 ;
   this.A6609SaidaItemSimplesRemEmpId = "" ;
   this.A6610SaidaItemSimplesRemId = 0 ;
   this.A6611SaidaItemSimplesRemSeqItem = 0 ;
   this.A6612SaidaItemSimplesRemQuantidade = 0 ;
   this.Events = {"e129l523_client": ["ENTER", true] ,"e139l523_client": ["CANCEL", true] ,"e119l523_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_6605_6606_6607", [14,19,24]);
   this.setPrompt("PROMPT_6609_6610_6611", [35,40,45]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidaitemsimplesrem());
