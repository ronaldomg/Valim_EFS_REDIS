/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:1:41.58
*/
gx.evt.autoSkip = false;
gx.define('tccontabilccusto', false, function () {
   this.ServerClass =  "tccontabilccusto" ;
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
      this.AV17CContabilCCustoId=gx.fn.getIntegerValue("vCCONTABILCCUSTOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1434CContabilCCustoEmpresaId=gx.fn.getControlValue("CCONTABILCCUSTOEMPRESAID") ;
      this.AV26EmpresaPadraoCCus=gx.fn.getControlValue("vEMPRESAPADRAOCCUS") ;
      this.A1423CContabilCCustoCusEmpresaId=gx.fn.getControlValue("CCONTABILCCUSTOCUSEMPRESAID") ;
      this.AV27EmpresaPadraoNat=gx.fn.getControlValue("vEMPRESAPADRAONAT") ;
      this.A1426CContabilCCustoNatEmpresaId=gx.fn.getControlValue("CCONTABILCCUSTONATEMPRESAID") ;
      this.A1429CContabilCCustoContaEmpresaId=gx.fn.getControlValue("CCONTABILCCUSTOCONTAEMPRESAID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV20SnCCusSup=gx.fn.getControlValue("vSNCCUSSUP") ;
      this.AV21SnCCusSin=gx.fn.getControlValue("vSNCCUSSIN") ;
      this.AV22SnNatSup=gx.fn.getControlValue("vSNNATSUP") ;
      this.AV23SnNatSin=gx.fn.getControlValue("vSNNATSIN") ;
      this.AV32snExiste=gx.fn.getControlValue("vSNEXISTE") ;
      this.AV24ExisteConta=gx.fn.getIntegerValue("vEXISTECONTA",'.') ;
      this.AV38Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Ccontabilccustoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CCONTABILCCUSTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ccontabilccustocusid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ccontabilccustocusid",["gx.O.AV26EmpresaPadraoCCus", "gx.O.A1424CContabilCCustoCusId", "gx.O.A1423CContabilCCustoCusEmpresaId", "gx.O.A1425CContabilCCustoCusDescricao"],["A1423CContabilCCustoCusEmpresaId", "A1425CContabilCCustoCusDescricao"]);
      return true;
   }
   this.Valid_Ccontabilccustonatid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ccontabilccustonatid",["gx.O.AV27EmpresaPadraoNat", "gx.O.A1427CContabilCCustoNatId", "gx.O.A1426CContabilCCustoNatEmpresaId", "gx.O.A1424CContabilCCustoCusId", "gx.O.A1428CContabilCCustoNatDescricao"],["A1426CContabilCCustoNatEmpresaId", "A1428CContabilCCustoNatDescricao"]);
      return true;
   }
   this.Valid_Ccontabilccustocontaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ccontabilccustocontaid",["gx.O.O1430CContabilCCustoContaId", "gx.O.O1427CContabilCCustoNatId", "gx.O.O1424CContabilCCustoCusId", "gx.O.AV7UsrCod", "gx.O.A1424CContabilCCustoCusId", "gx.O.A1427CContabilCCustoNatId", "gx.O.A1430CContabilCCustoContaId", "gx.O.A1432CContabilCCustoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A1433CContabilCCustoDataHoraAlt,"DMY4")'],["A1432CContabilCCustoUsuarioAlt", "A1433CContabilCCustoDataHoraAlt"]);
      return true;
   }
   this.Valid_Ccontabilccustocontatradutor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CCONTABILCCUSTOCONTATRADUTOR");
         this.AnyError  = 0;
         if ( ! (""==this.A1430CContabilCCustoContaId) && (0==this.A1531CContabilCCustoContaTradutor) )
         {
            try {
               gxballoon.setError("Conta Contábil informada não pode ser sinética");
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
   this.Validv_Empresapadraoccontabil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOCCONTABIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122w2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132w2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142w155_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152w155_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,21,24,26,27,30,32,33,34,37,40,42,44,51,52,55,56,58,60,61,62];
   this.GXLastCtrlId =62;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilccustoid,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOID",gxz:"Z1435CContabilCCustoId",gxold:"O1435CContabilCCustoId",gxvar:"A1435CContabilCCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1435CContabilCCustoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1435CContabilCCustoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CCONTABILCCUSTOID",gx.O.A1435CContabilCCustoId,0)},c2v:function(){gx.O.A1435CContabilCCustoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CCONTABILCCUSTOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilccustocusid,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCUSID",gxz:"Z1424CContabilCCustoCusId",gxold:"O1424CContabilCCustoCusId",gxvar:"A1424CContabilCCustoCusId",ucs:[],op:[21],ip:[21,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1424CContabilCCustoCusId=Value},v2z:function(Value){gx.O.Z1424CContabilCCustoCusId=Value},v2c:function(){gx.fn.setControlValue("CCONTABILCCUSTOCUSID",gx.O.A1424CContabilCCustoCusId,0)},c2v:function(){gx.O.A1424CContabilCCustoCusId=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILCCUSTOCUSID")},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCUSDESCRICAO",gxz:"Z1425CContabilCCustoCusDescricao",gxold:"O1425CContabilCCustoCusDescricao",gxvar:"A1425CContabilCCustoCusDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1425CContabilCCustoCusDescricao=Value},v2z:function(Value){gx.O.Z1425CContabilCCustoCusDescricao=Value},v2c:function(){gx.fn.setControlValue("CCONTABILCCUSTOCUSDESCRICAO",gx.O.A1425CContabilCCustoCusDescricao,0)},c2v:function(){gx.O.A1425CContabilCCustoCusDescricao=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILCCUSTOCUSDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilccustonatid,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTONATID",gxz:"Z1427CContabilCCustoNatId",gxold:"O1427CContabilCCustoNatId",gxvar:"A1427CContabilCCustoNatId",ucs:[],op:[26,20,27],ip:[27,20,26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1427CContabilCCustoNatId=Value},v2z:function(Value){gx.O.Z1427CContabilCCustoNatId=Value},v2c:function(){gx.fn.setControlValue("CCONTABILCCUSTONATID",gx.O.A1427CContabilCCustoNatId,0)},c2v:function(){gx.O.A1427CContabilCCustoNatId=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILCCUSTONATID")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTONATDESCRICAO",gxz:"Z1428CContabilCCustoNatDescricao",gxold:"O1428CContabilCCustoNatDescricao",gxvar:"A1428CContabilCCustoNatDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1428CContabilCCustoNatDescricao=Value},v2z:function(Value){gx.O.Z1428CContabilCCustoNatDescricao=Value},v2c:function(){gx.fn.setControlValue("CCONTABILCCUSTONATDESCRICAO",gx.O.A1428CContabilCCustoNatDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1428CContabilCCustoNatDescricao=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILCCUSTONATDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[30]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilccustocontaid,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCONTAID",gxz:"Z1430CContabilCCustoContaId",gxold:"O1430CContabilCCustoContaId",gxvar:"A1430CContabilCCustoContaId",ucs:[],op:[32,44,42],ip:[44,42,32,26,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1430CContabilCCustoContaId=Value},v2z:function(Value){gx.O.Z1430CContabilCCustoContaId=Value},v2c:function(){gx.fn.setControlValue("CCONTABILCCUSTOCONTAID",gx.O.A1430CContabilCCustoContaId,0)},c2v:function(){gx.O.A1430CContabilCCustoContaId=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILCCUSTOCONTAID")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilccustocontatradutor,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCONTATRADUTOR",gxz:"Z1531CContabilCCustoContaTradutor",gxold:"O1531CContabilCCustoContaTradutor",gxvar:"A1531CContabilCCustoContaTradutor",ucs:[],op:[33,32],ip:[33,32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1531CContabilCCustoContaTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1531CContabilCCustoContaTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CCONTABILCCUSTOCONTATRADUTOR",gx.O.A1531CContabilCCustoContaTradutor,0)},c2v:function(){gx.O.A1531CContabilCCustoContaTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CCONTABILCCUSTOCONTATRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCONTANOME",gxz:"Z1431CContabilCCustoContaNome",gxold:"O1431CContabilCCustoContaNome",gxvar:"A1431CContabilCCustoContaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1431CContabilCCustoContaNome=Value},v2z:function(Value){gx.O.Z1431CContabilCCustoContaNome=Value},v2c:function(){gx.fn.setControlValue("CCONTABILCCUSTOCONTANOME",gx.O.A1431CContabilCCustoContaNome,0)},c2v:function(){gx.O.A1431CContabilCCustoContaNome=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILCCUSTOCONTANOME")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOUSUARIOALT",gxz:"Z1432CContabilCCustoUsuarioAlt",gxold:"O1432CContabilCCustoUsuarioAlt",gxvar:"A1432CContabilCCustoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1432CContabilCCustoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1432CContabilCCustoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CCONTABILCCUSTOUSUARIOALT",gx.O.A1432CContabilCCustoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1432CContabilCCustoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILCCUSTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTODATAHORAALT",gxz:"Z1433CContabilCCustoDataHoraAlt",gxold:"O1433CContabilCCustoDataHoraAlt",gxvar:"A1433CContabilCCustoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1433CContabilCCustoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1433CContabilCCustoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CCONTABILCCUSTODATAHORAALT",gx.O.A1433CContabilCCustoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1433CContabilCCustoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CCONTABILCCUSTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraoccontabil,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCCONTABIL",gxz:"ZV25EmpresaPadraoCContabil",gxold:"OV25EmpresaPadraoCContabil",gxvar:"AV25EmpresaPadraoCContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25EmpresaPadraoCContabil=Value},v2z:function(Value){gx.O.ZV25EmpresaPadraoCContabil=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCCONTABIL",gx.O.AV25EmpresaPadraoCContabil,0)},c2v:function(){gx.O.AV25EmpresaPadraoCContabil=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCCONTABIL")},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV29ChamaOnBlurMascara",gxold:"OV29ChamaOnBlurMascara",gxvar:"AV29ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV29ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV29ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV29ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"JS", format:2,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV33AcessoSistemaSequencia",gxold:"OV33AcessoSistemaSequencia",gxvar:"AV33AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV33AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV33AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"BTNHELP",grid:0};
   GXValidFnc[60]={fld:"PROMPT_1424",grid:155};
   GXValidFnc[61]={fld:"PROMPT_1427",grid:155};
   GXValidFnc[62]={fld:"PROMPT_1430",grid:155};
   this.A1435CContabilCCustoId = 0 ;
   this.Z1435CContabilCCustoId = 0 ;
   this.O1435CContabilCCustoId = 0 ;
   this.A1424CContabilCCustoCusId = "" ;
   this.Z1424CContabilCCustoCusId = "" ;
   this.O1424CContabilCCustoCusId = "" ;
   this.A1425CContabilCCustoCusDescricao = "" ;
   this.Z1425CContabilCCustoCusDescricao = "" ;
   this.O1425CContabilCCustoCusDescricao = "" ;
   this.A1427CContabilCCustoNatId = "" ;
   this.Z1427CContabilCCustoNatId = "" ;
   this.O1427CContabilCCustoNatId = "" ;
   this.A1428CContabilCCustoNatDescricao = "" ;
   this.Z1428CContabilCCustoNatDescricao = "" ;
   this.O1428CContabilCCustoNatDescricao = "" ;
   this.A1430CContabilCCustoContaId = "" ;
   this.Z1430CContabilCCustoContaId = "" ;
   this.O1430CContabilCCustoContaId = "" ;
   this.A1531CContabilCCustoContaTradutor = 0 ;
   this.Z1531CContabilCCustoContaTradutor = 0 ;
   this.O1531CContabilCCustoContaTradutor = 0 ;
   this.A1431CContabilCCustoContaNome = "" ;
   this.Z1431CContabilCCustoContaNome = "" ;
   this.O1431CContabilCCustoContaNome = "" ;
   this.A1432CContabilCCustoUsuarioAlt = "" ;
   this.Z1432CContabilCCustoUsuarioAlt = "" ;
   this.O1432CContabilCCustoUsuarioAlt = "" ;
   this.A1433CContabilCCustoDataHoraAlt = gx.date.nullDate() ;
   this.Z1433CContabilCCustoDataHoraAlt = gx.date.nullDate() ;
   this.O1433CContabilCCustoDataHoraAlt = gx.date.nullDate() ;
   this.AV25EmpresaPadraoCContabil = "" ;
   this.ZV25EmpresaPadraoCContabil = "" ;
   this.OV25EmpresaPadraoCContabil = "" ;
   this.AV29ChamaOnBlurMascara = "" ;
   this.ZV29ChamaOnBlurMascara = "" ;
   this.OV29ChamaOnBlurMascara = "" ;
   this.AV33AcessoSistemaSequencia = 0 ;
   this.ZV33AcessoSistemaSequencia = 0 ;
   this.OV33AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV37Pgmname = "" ;
   this.AV38Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV33AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV25EmpresaPadraoCContabil = "" ;
   this.AV26EmpresaPadraoCCus = "" ;
   this.AV27EmpresaPadraoNat = "" ;
   this.AV18TemMascara = "" ;
   this.AV19EstruturaContaInicial = "" ;
   this.AV29ChamaOnBlurMascara = "" ;
   this.AV30EntConta = [ ] ;
   this.AV31SaiConta = [ ] ;
   this.AV20SnCCusSup = "" ;
   this.AV21SnCCusSin = "" ;
   this.AV22SnNatSup = "" ;
   this.AV23SnNatSin = "" ;
   this.AV32snExiste = "" ;
   this.AV24ExisteConta = 0 ;
   this.AV17CContabilCCustoId = 0 ;
   this.A1434CContabilCCustoEmpresaId = "" ;
   this.A1435CContabilCCustoId = 0 ;
   this.A1423CContabilCCustoCusEmpresaId = "" ;
   this.A1426CContabilCCustoNatEmpresaId = "" ;
   this.A1429CContabilCCustoContaEmpresaId = "" ;
   this.A1432CContabilCCustoUsuarioAlt = "" ;
   this.A1433CContabilCCustoDataHoraAlt = gx.date.nullDate() ;
   this.A1424CContabilCCustoCusId = "" ;
   this.A1425CContabilCCustoCusDescricao = "" ;
   this.A1427CContabilCCustoNatId = "" ;
   this.A1428CContabilCCustoNatDescricao = "" ;
   this.A1430CContabilCCustoContaId = "" ;
   this.A1431CContabilCCustoContaNome = "" ;
   this.A1531CContabilCCustoContaTradutor = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e122w2_client": ["'FECHAR'", true] ,"e132w2_client": ["AFTER TRN", true] ,"e142w155_client": ["ENTER", true] ,"e152w155_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17CContabilCCustoId',fld:'vCCONTABILCCUSTOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV33AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV33AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1424", [20]);
   this.setPrompt("PROMPT_1427", [26]);
   this.setPrompt("PROMPT_1430", [32]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17CContabilCCustoId", "vCCONTABILCCUSTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1434CContabilCCustoEmpresaId", "CCONTABILCCUSTOEMPRESAID", 0, "char");
   this.setVCMap("AV26EmpresaPadraoCCus", "vEMPRESAPADRAOCCUS", 0, "char");
   this.setVCMap("A1423CContabilCCustoCusEmpresaId", "CCONTABILCCUSTOCUSEMPRESAID", 0, "char");
   this.setVCMap("AV27EmpresaPadraoNat", "vEMPRESAPADRAONAT", 0, "char");
   this.setVCMap("A1426CContabilCCustoNatEmpresaId", "CCONTABILCCUSTONATEMPRESAID", 0, "char");
   this.setVCMap("A1429CContabilCCustoContaEmpresaId", "CCONTABILCCUSTOCONTAEMPRESAID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV20SnCCusSup", "vSNCCUSSUP", 0, "char");
   this.setVCMap("AV21SnCCusSin", "vSNCCUSSIN", 0, "char");
   this.setVCMap("AV22SnNatSup", "vSNNATSUP", 0, "char");
   this.setVCMap("AV23SnNatSin", "vSNNATSIN", 0, "char");
   this.setVCMap("AV32snExiste", "vSNEXISTE", 0, "char");
   this.setVCMap("AV24ExisteConta", "vEXISTECONTA", 0, "int");
   this.setVCMap("AV38Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 155 ]= ["O1430CContabilCCustoContaId","O1427CContabilCCustoNatId","O1424CContabilCCustoCusId"] ;
});
gx.setParentObj(new tccontabilccusto());
