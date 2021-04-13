/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:46:14.3
*/
gx.evt.autoSkip = false;
gx.define('tgrupoproduto', false, function () {
   this.ServerClass =  "tgrupoproduto" ;
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
      this.AV19GrupoProdutoId=gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Grupoprodutoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPOPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grupoprodutoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPOPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grupoprodutodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPOPRODUTODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A3536GrupoProdutoDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição");
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
   this.e126p2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136p2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146p380_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156p380_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Grupoprodutoid,isvalid:null,rgrid:[],fld:"GRUPOPRODUTOID",gxz:"Z3408GrupoProdutoId",gxold:"O3408GrupoProdutoId",gxvar:"A3408GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3408GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3408GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRUPOPRODUTOID",gx.O.A3408GrupoProdutoId,0)},c2v:function(){gx.O.A3408GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupoprodutodescricao,isvalid:null,rgrid:[],fld:"GRUPOPRODUTODESCRICAO",gxz:"Z3536GrupoProdutoDescricao",gxold:"O3536GrupoProdutoDescricao",gxvar:"A3536GrupoProdutoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3536GrupoProdutoDescricao=Value},v2z:function(Value){gx.O.Z3536GrupoProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("GRUPOPRODUTODESCRICAO",gx.O.A3536GrupoProdutoDescricao,0)},c2v:function(){gx.O.A3536GrupoProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("GRUPOPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRODUTOUSUARIOALT",gxz:"Z3537GrupoProdutoUsuarioAlt",gxold:"O3537GrupoProdutoUsuarioAlt",gxvar:"A3537GrupoProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3537GrupoProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3537GrupoProdutoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("GRUPOPRODUTOUSUARIOALT",gx.O.A3537GrupoProdutoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3537GrupoProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("GRUPOPRODUTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRODUTODATAHORAALT",gxz:"Z3538GrupoProdutoDataHoraAlt",gxold:"O3538GrupoProdutoDataHoraAlt",gxvar:"A3538GrupoProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3538GrupoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3538GrupoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("GRUPOPRODUTODATAHORAALT",gx.O.A3538GrupoProdutoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3538GrupoProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("GRUPOPRODUTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupoprodutoempresaid,isvalid:null,rgrid:[],fld:"GRUPOPRODUTOEMPRESAID",gxz:"Z3539GrupoProdutoEmpresaId",gxold:"O3539GrupoProdutoEmpresaId",gxvar:"A3539GrupoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3539GrupoProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z3539GrupoProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("GRUPOPRODUTOEMPRESAID",gx.O.A3539GrupoProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3539GrupoProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("GRUPOPRODUTOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.A3408GrupoProdutoId = 0 ;
   this.Z3408GrupoProdutoId = 0 ;
   this.O3408GrupoProdutoId = 0 ;
   this.A3536GrupoProdutoDescricao = "" ;
   this.Z3536GrupoProdutoDescricao = "" ;
   this.O3536GrupoProdutoDescricao = "" ;
   this.A3537GrupoProdutoUsuarioAlt = "" ;
   this.Z3537GrupoProdutoUsuarioAlt = "" ;
   this.O3537GrupoProdutoUsuarioAlt = "" ;
   this.A3538GrupoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Z3538GrupoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.O3538GrupoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A3539GrupoProdutoEmpresaId = "" ;
   this.Z3539GrupoProdutoEmpresaId = "" ;
   this.O3539GrupoProdutoEmpresaId = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18SnAlterou = "" ;
   this.AV19GrupoProdutoId = 0 ;
   this.A3539GrupoProdutoEmpresaId = "" ;
   this.A3408GrupoProdutoId = 0 ;
   this.A3537GrupoProdutoUsuarioAlt = "" ;
   this.A3538GrupoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.A3536GrupoProdutoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126p2_client": ["'FECHAR'", true] ,"e136p2_client": ["AFTER TRN", true] ,"e146p380_client": ["ENTER", true] ,"e156p380_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19GrupoProdutoId", "vGRUPOPRODUTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 380 ]= ["O3536GrupoProdutoDescricao"] ;
});
gx.setParentObj(new tgrupoproduto());
