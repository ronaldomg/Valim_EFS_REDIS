/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:56.87
*/
gx.evt.autoSkip = false;
gx.define('tmodeloproposta', false, function () {
   this.ServerClass =  "tmodeloproposta" ;
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
      this.AV22CaminhoImagem=gx.fn.getControlValue("vCAMINHOIMAGEM") ;
      this.AV20ModeloPropostaEmpresaId=gx.fn.getControlValue("vMODELOPROPOSTAEMPRESAID") ;
      this.A8298ModeloPropostaEmpresaId=gx.fn.getControlValue("MODELOPROPOSTAEMPRESAID") ;
      this.AV18ModeloPropostaId=gx.fn.getIntegerValue("vMODELOPROPOSTAID",'.') ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV32Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Modelopropostaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOPROPOSTAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelopropostadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOPROPOSTADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8291ModeloPropostaDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
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
   this.Valid_Modelopropostalogomarca=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Modelopropostalogomarca",["gx.O.A8292ModeloPropostaLogomarca", "gx.O.AV23ModeloPropostaLogomarca", "gx.O.AV27Imagem", "gx.O.AV22CaminhoImagem"],["AV23ModeloPropostaLogomarca", "AV27Imagem", "AV22CaminhoImagem"]);
      return true;
   }
   this.Valid_Modelopropostatextocabecalho=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOPROPOSTATEXTOCABECALHO");
         this.AnyError  = 0;
         if ( (""==this.A8293ModeloPropostaTextoCabecalho) )
         {
            try {
               gxballoon.setError("Informe o Texto do Cabeçalho");
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
   this.Valid_Modelopropostatextorodape=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOPROPOSTATEXTORODAPE");
         this.AnyError  = 0;
         if ( (""==this.A8294ModeloPropostaTextoRodape) )
         {
            try {
               gxballoon.setError("Informe o Texto do Rodapé");
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
   this.Validv_Modelopropostalogomarca=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMODELOPROPOSTALOGOMARCA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12bo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bo2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14bo2_client=function()
   {
      this.executeServerEvent("'DIALOG'", false, null, false, false);
   };
   this.e15bo614_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16bo614_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,26,28,31,32,35,38,40,43,45,47,50,53,55,57,66,68];
   this.GXLastCtrlId =68;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostaid,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAID",gxz:"Z8297ModeloPropostaId",gxold:"O8297ModeloPropostaId",gxvar:"A8297ModeloPropostaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8297ModeloPropostaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8297ModeloPropostaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTAID",gx.O.A8297ModeloPropostaId,0)},c2v:function(){gx.O.A8297ModeloPropostaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELOPROPOSTAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostadescricao,isvalid:null,rgrid:[],fld:"MODELOPROPOSTADESCRICAO",gxz:"Z8291ModeloPropostaDescricao",gxold:"O8291ModeloPropostaDescricao",gxvar:"A8291ModeloPropostaDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8291ModeloPropostaDescricao=Value},v2z:function(Value){gx.O.Z8291ModeloPropostaDescricao=Value},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTADESCRICAO",gx.O.A8291ModeloPropostaDescricao,0)},c2v:function(){gx.O.A8291ModeloPropostaDescricao=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostalogomarca,isvalid:null,rgrid:[],fld:"MODELOPROPOSTALOGOMARCA",gxz:"Z8292ModeloPropostaLogomarca",gxold:"O8292ModeloPropostaLogomarca",gxvar:"A8292ModeloPropostaLogomarca",ucs:[],op:[26,31,47],ip:[31,47,26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8292ModeloPropostaLogomarca=Value},v2z:function(Value){gx.O.Z8292ModeloPropostaLogomarca=Value},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTALOGOMARCA",gx.O.A8292ModeloPropostaLogomarca,0)},c2v:function(){gx.O.A8292ModeloPropostaLogomarca=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTALOGOMARCA")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM",gxz:"ZV27Imagem",gxold:"OV27Imagem",gxvar:"AV27Imagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Imagem=Value},v2z:function(Value){gx.O.ZV27Imagem=Value},v2c:function(){gx.fn.setMultimediaValue("vIMAGEM",gx.O.AV27Imagem,"")},c2v:function(){gx.O.AV27Imagem=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEM")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE5",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostatextocabecalho,isvalid:null,rgrid:[],fld:"MODELOPROPOSTATEXTOCABECALHO",gxz:"Z8293ModeloPropostaTextoCabecalho",gxold:"O8293ModeloPropostaTextoCabecalho",gxvar:"A8293ModeloPropostaTextoCabecalho",ucs:[],op:[40],ip:[40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8293ModeloPropostaTextoCabecalho=Value},v2z:function(Value){gx.O.Z8293ModeloPropostaTextoCabecalho=Value},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTATEXTOCABECALHO",gx.O.A8293ModeloPropostaTextoCabecalho,0)},c2v:function(){gx.O.A8293ModeloPropostaTextoCabecalho=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTATEXTOCABECALHO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostatextorodape,isvalid:null,rgrid:[],fld:"MODELOPROPOSTATEXTORODAPE",gxz:"Z8294ModeloPropostaTextoRodape",gxold:"O8294ModeloPropostaTextoRodape",gxvar:"A8294ModeloPropostaTextoRodape",ucs:[],op:[45],ip:[45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8294ModeloPropostaTextoRodape=Value},v2z:function(Value){gx.O.Z8294ModeloPropostaTextoRodape=Value},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTATEXTORODAPE",gx.O.A8294ModeloPropostaTextoRodape,0)},c2v:function(){gx.O.A8294ModeloPropostaTextoRodape=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTATEXTORODAPE")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Modelopropostalogomarca,isvalid:null,rgrid:[],fld:"vMODELOPROPOSTALOGOMARCA",gxz:"ZV23ModeloPropostaLogomarca",gxold:"OV23ModeloPropostaLogomarca",gxvar:"AV23ModeloPropostaLogomarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ModeloPropostaLogomarca=Value},v2z:function(Value){gx.O.ZV23ModeloPropostaLogomarca=Value},v2c:function(){gx.fn.setControlValue("vMODELOPROPOSTALOGOMARCA",gx.O.AV23ModeloPropostaLogomarca,0)},c2v:function(){gx.O.AV23ModeloPropostaLogomarca=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPROPOSTALOGOMARCA")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE6",grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAUSUARIOALT",gxz:"Z8295ModeloPropostaUsuarioAlt",gxold:"O8295ModeloPropostaUsuarioAlt",gxvar:"A8295ModeloPropostaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8295ModeloPropostaUsuarioAlt=Value},v2z:function(Value){gx.O.Z8295ModeloPropostaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTAUSUARIOALT",gx.O.A8295ModeloPropostaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8295ModeloPropostaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[57]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTADATAHORAALT",gxz:"Z8296ModeloPropostaDataHoraAlt",gxold:"O8296ModeloPropostaDataHoraAlt",gxvar:"A8296ModeloPropostaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8296ModeloPropostaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8296ModeloPropostaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTADATAHORAALT",gx.O.A8296ModeloPropostaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8296ModeloPropostaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MODELOPROPOSTADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"BTNHELP",grid:0};
   this.A8297ModeloPropostaId = 0 ;
   this.Z8297ModeloPropostaId = 0 ;
   this.O8297ModeloPropostaId = 0 ;
   this.A8291ModeloPropostaDescricao = "" ;
   this.Z8291ModeloPropostaDescricao = "" ;
   this.O8291ModeloPropostaDescricao = "" ;
   this.A8292ModeloPropostaLogomarca = "" ;
   this.Z8292ModeloPropostaLogomarca = "" ;
   this.O8292ModeloPropostaLogomarca = "" ;
   this.AV27Imagem = "" ;
   this.ZV27Imagem = "" ;
   this.OV27Imagem = "" ;
   this.A8293ModeloPropostaTextoCabecalho = "" ;
   this.Z8293ModeloPropostaTextoCabecalho = "" ;
   this.O8293ModeloPropostaTextoCabecalho = "" ;
   this.A8294ModeloPropostaTextoRodape = "" ;
   this.Z8294ModeloPropostaTextoRodape = "" ;
   this.O8294ModeloPropostaTextoRodape = "" ;
   this.AV23ModeloPropostaLogomarca = "" ;
   this.ZV23ModeloPropostaLogomarca = "" ;
   this.OV23ModeloPropostaLogomarca = "" ;
   this.A8295ModeloPropostaUsuarioAlt = "" ;
   this.Z8295ModeloPropostaUsuarioAlt = "" ;
   this.O8295ModeloPropostaUsuarioAlt = "" ;
   this.A8296ModeloPropostaDataHoraAlt = gx.date.nullDate() ;
   this.Z8296ModeloPropostaDataHoraAlt = gx.date.nullDate() ;
   this.O8296ModeloPropostaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV31Pgmname = "" ;
   this.AV32Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV20ModeloPropostaEmpresaId = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18ModeloPropostaId = 0 ;
   this.AV30WebSession = {} ;
   this.A8297ModeloPropostaId = 0 ;
   this.A8298ModeloPropostaEmpresaId = "" ;
   this.AV23ModeloPropostaLogomarca = "" ;
   this.AV22CaminhoImagem = "" ;
   this.A8295ModeloPropostaUsuarioAlt = "" ;
   this.A8296ModeloPropostaDataHoraAlt = gx.date.nullDate() ;
   this.A8291ModeloPropostaDescricao = "" ;
   this.A8292ModeloPropostaLogomarca = "" ;
   this.A8293ModeloPropostaTextoCabecalho = "" ;
   this.A8294ModeloPropostaTextoRodape = "" ;
   this.AV27Imagem = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12bo2_client": ["'FECHAR'", true] ,"e13bo2_client": ["AFTER TRN", true] ,"e14bo2_client": ["'DIALOG'", true] ,"e15bo614_client": ["ENTER", true] ,"e16bo614_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'DIALOG'"] = [[],[{av:'AV29isCloud',fld:'vISCLOUD'},{av:'AV28DirUpload',fld:'vDIRUPLOAD'},{av:'A8292ModeloPropostaLogomarca',fld:'MODELOPROPOSTALOGOMARCA'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV22CaminhoImagem", "vCAMINHOIMAGEM", 0, "svchar");
   this.setVCMap("AV20ModeloPropostaEmpresaId", "vMODELOPROPOSTAEMPRESAID", 0, "char");
   this.setVCMap("A8298ModeloPropostaEmpresaId", "MODELOPROPOSTAEMPRESAID", 0, "char");
   this.setVCMap("AV18ModeloPropostaId", "vMODELOPROPOSTAID", 0, "int");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV32Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV31Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 614 ]= ["O8294ModeloPropostaTextoRodape","O8293ModeloPropostaTextoCabecalho","O8292ModeloPropostaLogomarca","O8291ModeloPropostaDescricao"] ;
});
gx.setParentObj(new tmodeloproposta());
