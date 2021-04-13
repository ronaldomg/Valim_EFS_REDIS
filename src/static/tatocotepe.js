/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:26.98
*/
gx.evt.autoSkip = false;
gx.define('tatocotepe', false, function () {
   this.ServerClass =  "tatocotepe" ;
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
      this.A9310AtoCotepeValorDesconto=gx.fn.getDecimalValue("ATOCOTEPEVALORDESCONTO",'.',',') ;
      this.A9311AtoCotepeValorAcrescimo=gx.fn.getDecimalValue("ATOCOTEPEVALORACRESCIMO",'.',',') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Atocotepeempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATOCOTEPEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Atocotepeecf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATOCOTEPEECF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Atocotepenumerocoo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Atocotepenumerocoo",["gx.O.A8500AtoCotepeEmpresaId", "gx.O.A8501AtoCotepeECF", "gx.O.A8502AtoCotepeNumeroCOO", 'gx.date.urlDate(gx.O.A8498AtoCotepeData,"DMY4")', "gx.O.A8499AtoCotepeSnCancelamento", "gx.num.urlDecimal(gx.O.A9126AtoCotepeValorTotal,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9310AtoCotepeValorDesconto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9311AtoCotepeValorAcrescimo,\'.\',\',\')", "gx.O.A9127AtoCotepeCPFCNPJ"],["A8498AtoCotepeData", "A8499AtoCotepeSnCancelamento", "A9126AtoCotepeValorTotal", "A9310AtoCotepeValorDesconto", "A9311AtoCotepeValorAcrescimo", "A9127AtoCotepeCPFCNPJ", "Gx_mode", "Z8500AtoCotepeEmpresaId", "Z8501AtoCotepeECF", "Z8502AtoCotepeNumeroCOO", "Z8498AtoCotepeData", "Z8499AtoCotepeSnCancelamento", "Z9126AtoCotepeValorTotal", "Z9310AtoCotepeValorDesconto", "Z9311AtoCotepeValorAcrescimo", "Z9127AtoCotepeCPFCNPJ", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Atocotepesncancelamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATOCOTEPESNCANCELAMENTO");
         this.AnyError  = 0;
         if ( ! ( this.A8499AtoCotepeSnCancelamento == "N" || this.A8499AtoCotepeSnCancelamento == "S" || (""==this.A8499AtoCotepeSnCancelamento) ) )
         {
            try {
               gxballoon.setError("Campo Cancelamento fora do intervalo");
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
   this.e11bz625_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12bz625_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,27,29,33,36,38,41,43,44,52,54];
   this.GXLastCtrlId =54;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atocotepeempresaid,isvalid:null,rgrid:[],fld:"ATOCOTEPEEMPRESAID",gxz:"Z8500AtoCotepeEmpresaId",gxold:"O8500AtoCotepeEmpresaId",gxvar:"A8500AtoCotepeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8500AtoCotepeEmpresaId=Value},v2z:function(Value){gx.O.Z8500AtoCotepeEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ATOCOTEPEEMPRESAID",gx.O.A8500AtoCotepeEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8500AtoCotepeEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ATOCOTEPEEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atocotepeecf,isvalid:null,rgrid:[],fld:"ATOCOTEPEECF",gxz:"Z8501AtoCotepeECF",gxold:"O8501AtoCotepeECF",gxvar:"A8501AtoCotepeECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8501AtoCotepeECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8501AtoCotepeECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ATOCOTEPEECF",gx.O.A8501AtoCotepeECF,0)},c2v:function(){gx.O.A8501AtoCotepeECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ATOCOTEPEECF",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atocotepenumerocoo,isvalid:null,rgrid:[],fld:"ATOCOTEPENUMEROCOO",gxz:"Z8502AtoCotepeNumeroCOO",gxold:"O8502AtoCotepeNumeroCOO",gxvar:"A8502AtoCotepeNumeroCOO",ucs:[],op:[43,38,33,29],ip:[43,38,33,29,23,18,13],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8502AtoCotepeNumeroCOO=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8502AtoCotepeNumeroCOO=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ATOCOTEPENUMEROCOO",gx.O.A8502AtoCotepeNumeroCOO,0)},c2v:function(){gx.O.A8502AtoCotepeNumeroCOO=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ATOCOTEPENUMEROCOO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPEDATA",gxz:"Z8498AtoCotepeData",gxold:"O8498AtoCotepeData",gxvar:"A8498AtoCotepeData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8498AtoCotepeData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8498AtoCotepeData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ATOCOTEPEDATA",gx.O.A8498AtoCotepeData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8498AtoCotepeData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ATOCOTEPEDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atocotepesncancelamento,isvalid:null,rgrid:[],fld:"ATOCOTEPESNCANCELAMENTO",gxz:"Z8499AtoCotepeSnCancelamento",gxold:"O8499AtoCotepeSnCancelamento",gxvar:"A8499AtoCotepeSnCancelamento",ucs:[],op:[33],ip:[33],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8499AtoCotepeSnCancelamento=Value},v2z:function(Value){gx.O.Z8499AtoCotepeSnCancelamento=Value},v2c:function(){gx.fn.setCheckBoxValue("ATOCOTEPESNCANCELAMENTO",gx.O.A8499AtoCotepeSnCancelamento,"S")},c2v:function(){gx.O.A8499AtoCotepeSnCancelamento=this.val()},val:function(){return gx.fn.getControlValue("ATOCOTEPESNCANCELAMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[36]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPEVALORTOTAL",gxz:"Z9126AtoCotepeValorTotal",gxold:"O9126AtoCotepeValorTotal",gxvar:"A9126AtoCotepeValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9126AtoCotepeValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9126AtoCotepeValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ATOCOTEPEVALORTOTAL",gx.O.A9126AtoCotepeValorTotal,2,',')},c2v:function(){gx.O.A9126AtoCotepeValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("ATOCOTEPEVALORTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ATOCOTEPECPFCNPJ",gxz:"Z9127AtoCotepeCPFCNPJ",gxold:"O9127AtoCotepeCPFCNPJ",gxvar:"A9127AtoCotepeCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9127AtoCotepeCPFCNPJ=Value},v2z:function(Value){gx.O.Z9127AtoCotepeCPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("ATOCOTEPECPFCNPJ",gx.O.A9127AtoCotepeCPFCNPJ,0)},c2v:function(){gx.O.A9127AtoCotepeCPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("ATOCOTEPECPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"BTNHELP",grid:0};
   this.A8500AtoCotepeEmpresaId = "" ;
   this.Z8500AtoCotepeEmpresaId = "" ;
   this.O8500AtoCotepeEmpresaId = "" ;
   this.A8501AtoCotepeECF = 0 ;
   this.Z8501AtoCotepeECF = 0 ;
   this.O8501AtoCotepeECF = 0 ;
   this.A8502AtoCotepeNumeroCOO = 0 ;
   this.Z8502AtoCotepeNumeroCOO = 0 ;
   this.O8502AtoCotepeNumeroCOO = 0 ;
   this.A8498AtoCotepeData = gx.date.nullDate() ;
   this.Z8498AtoCotepeData = gx.date.nullDate() ;
   this.O8498AtoCotepeData = gx.date.nullDate() ;
   this.A8499AtoCotepeSnCancelamento = "" ;
   this.Z8499AtoCotepeSnCancelamento = "" ;
   this.O8499AtoCotepeSnCancelamento = "" ;
   this.A9126AtoCotepeValorTotal = 0 ;
   this.Z9126AtoCotepeValorTotal = 0 ;
   this.O9126AtoCotepeValorTotal = 0 ;
   this.A9127AtoCotepeCPFCNPJ = "" ;
   this.Z9127AtoCotepeCPFCNPJ = "" ;
   this.O9127AtoCotepeCPFCNPJ = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8500AtoCotepeEmpresaId = "" ;
   this.A8501AtoCotepeECF = 0 ;
   this.A8502AtoCotepeNumeroCOO = 0 ;
   this.A8498AtoCotepeData = gx.date.nullDate() ;
   this.A8499AtoCotepeSnCancelamento = "" ;
   this.A9126AtoCotepeValorTotal = 0 ;
   this.A9310AtoCotepeValorDesconto = 0 ;
   this.A9311AtoCotepeValorAcrescimo = 0 ;
   this.A9127AtoCotepeCPFCNPJ = "" ;
   this.Events = {"e11bz625_client": ["ENTER", true] ,"e12bz625_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A9310AtoCotepeValorDesconto", "ATOCOTEPEVALORDESCONTO", 0, "decimal");
   this.setVCMap("A9311AtoCotepeValorAcrescimo", "ATOCOTEPEVALORACRESCIMO", 0, "decimal");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tatocotepe());
