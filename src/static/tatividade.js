/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:24:29.9
*/
gx.evt.autoSkip = false;
gx.define('tatividade', false, function () {
   this.ServerClass =  "tatividade" ;
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
      this.AV20AtividadeId=gx.fn.getIntegerValue("vATIVIDADEID",'.') ;
      this.AV10EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10003AtividadeEmpresaId=gx.fn.getControlValue("ATIVIDADEEMPRESAID") ;
      this.A10005AtividadeGrupoOcoEmpId=gx.fn.getControlValue("ATIVIDADEGRUPOOCOEMPID") ;
      this.AV8AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV19UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Atividadeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATIVIDADEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Atividadedescricaoservico=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATIVIDADEDESCRICAOSERVICO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Atividadegrupoocoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Atividadegrupoocoid",["gx.O.AV10EmpresaPadrao", "gx.O.A10006AtividadeGrupoOcoId", "gx.O.A10005AtividadeGrupoOcoEmpId", "gx.O.A10079AtividadeGrupoOcoDescricao"],["A10005AtividadeGrupoOcoEmpId", "A10079AtividadeGrupoOcoDescricao"]);
      return true;
   }
   this.Valid_Atividadetipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATIVIDADETIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Atividadedesconto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATIVIDADEDESCONTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Atividadetipoacumulacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATIVIDADETIPOACUMULACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12ep2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ep2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14ep752_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ep752_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,26,29,31,34,36,39,41,44,47,49,51,60,62,64];
   this.GXLastCtrlId =64;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atividadeid,isvalid:null,rgrid:[],fld:"ATIVIDADEID",gxz:"Z10004AtividadeId",gxold:"O10004AtividadeId",gxvar:"A10004AtividadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10004AtividadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10004AtividadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ATIVIDADEID",gx.O.A10004AtividadeId,0)},c2v:function(){gx.O.A10004AtividadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ATIVIDADEID",'.')},nac:function(){return this.Gx_mode=="UPD"}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atividadedescricaoservico,isvalid:null,rgrid:[],fld:"ATIVIDADEDESCRICAOSERVICO",gxz:"Z10078AtividadeDescricaoServico",gxold:"O10078AtividadeDescricaoServico",gxvar:"A10078AtividadeDescricaoServico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10078AtividadeDescricaoServico=Value},v2z:function(Value){gx.O.Z10078AtividadeDescricaoServico=Value},v2c:function(){gx.fn.setControlValue("ATIVIDADEDESCRICAOSERVICO",gx.O.A10078AtividadeDescricaoServico,0)},c2v:function(){gx.O.A10078AtividadeDescricaoServico=this.val()},val:function(){return gx.fn.getControlValue("ATIVIDADEDESCRICAOSERVICO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"ZZ",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atividadegrupoocoid,isvalid:null,rgrid:[],fld:"ATIVIDADEGRUPOOCOID",gxz:"Z10006AtividadeGrupoOcoId",gxold:"O10006AtividadeGrupoOcoId",gxvar:"A10006AtividadeGrupoOcoId",ucs:[],op:[26],ip:[26,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10006AtividadeGrupoOcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10006AtividadeGrupoOcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ATIVIDADEGRUPOOCOID",gx.O.A10006AtividadeGrupoOcoId,0)},c2v:function(){gx.O.A10006AtividadeGrupoOcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ATIVIDADEGRUPOOCOID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ATIVIDADEGRUPOOCODESCRICAO",gxz:"Z10079AtividadeGrupoOcoDescricao",gxold:"O10079AtividadeGrupoOcoDescricao",gxvar:"A10079AtividadeGrupoOcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10079AtividadeGrupoOcoDescricao=Value},v2z:function(Value){gx.O.Z10079AtividadeGrupoOcoDescricao=Value},v2c:function(){gx.fn.setControlValue("ATIVIDADEGRUPOOCODESCRICAO",gx.O.A10079AtividadeGrupoOcoDescricao,0)},c2v:function(){gx.O.A10079AtividadeGrupoOcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("ATIVIDADEGRUPOOCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atividadetipo,isvalid:null,rgrid:[],fld:"ATIVIDADETIPO",gxz:"Z10083AtividadeTipo",gxold:"O10083AtividadeTipo",gxvar:"A10083AtividadeTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10083AtividadeTipo=Value},v2z:function(Value){gx.O.Z10083AtividadeTipo=Value},v2c:function(){gx.fn.setComboBoxValue("ATIVIDADETIPO",gx.O.A10083AtividadeTipo)},c2v:function(){gx.O.A10083AtividadeTipo=this.val()},val:function(){return gx.fn.getControlValue("ATIVIDADETIPO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atividadedesconto,isvalid:null,rgrid:[],fld:"ATIVIDADEDESCONTO",gxz:"Z10077AtividadeDesconto",gxold:"O10077AtividadeDesconto",gxvar:"A10077AtividadeDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10077AtividadeDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10077AtividadeDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ATIVIDADEDESCONTO",gx.O.A10077AtividadeDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10077AtividadeDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("ATIVIDADEDESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atividadetipoacumulacao,isvalid:null,rgrid:[],fld:"ATIVIDADETIPOACUMULACAO",gxz:"Z10084AtividadeTipoAcumulacao",gxold:"O10084AtividadeTipoAcumulacao",gxvar:"A10084AtividadeTipoAcumulacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10084AtividadeTipoAcumulacao=Value},v2z:function(Value){gx.O.Z10084AtividadeTipoAcumulacao=Value},v2c:function(){gx.fn.setComboBoxValue("ATIVIDADETIPOACUMULACAO",gx.O.A10084AtividadeTipoAcumulacao)},c2v:function(){gx.O.A10084AtividadeTipoAcumulacao=this.val()},val:function(){return gx.fn.getControlValue("ATIVIDADETIPOACUMULACAO")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLE4",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ATIVIDADEUSUARIOALT",gxz:"Z10085AtividadeUsuarioAlt",gxold:"O10085AtividadeUsuarioAlt",gxvar:"A10085AtividadeUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10085AtividadeUsuarioAlt=Value},v2z:function(Value){gx.O.Z10085AtividadeUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ATIVIDADEUSUARIOALT",gx.O.A10085AtividadeUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10085AtividadeUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ATIVIDADEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ATIVIDADEDATAHORAALT",gxz:"Z10076AtividadeDataHoraAlt",gxold:"O10076AtividadeDataHoraAlt",gxvar:"A10076AtividadeDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10076AtividadeDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10076AtividadeDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ATIVIDADEDATAHORAALT",gx.O.A10076AtividadeDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10076AtividadeDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ATIVIDADEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   GXValidFnc[64]={fld:"PROMPT_10006",grid:752};
   this.A10004AtividadeId = 0 ;
   this.Z10004AtividadeId = 0 ;
   this.O10004AtividadeId = 0 ;
   this.A10078AtividadeDescricaoServico = "" ;
   this.Z10078AtividadeDescricaoServico = "" ;
   this.O10078AtividadeDescricaoServico = "" ;
   this.A10006AtividadeGrupoOcoId = 0 ;
   this.Z10006AtividadeGrupoOcoId = 0 ;
   this.O10006AtividadeGrupoOcoId = 0 ;
   this.A10079AtividadeGrupoOcoDescricao = "" ;
   this.Z10079AtividadeGrupoOcoDescricao = "" ;
   this.O10079AtividadeGrupoOcoDescricao = "" ;
   this.A10083AtividadeTipo = "" ;
   this.Z10083AtividadeTipo = "" ;
   this.O10083AtividadeTipo = "" ;
   this.A10077AtividadeDesconto = 0 ;
   this.Z10077AtividadeDesconto = 0 ;
   this.O10077AtividadeDesconto = 0 ;
   this.A10084AtividadeTipoAcumulacao = "" ;
   this.Z10084AtividadeTipoAcumulacao = "" ;
   this.O10084AtividadeTipoAcumulacao = "" ;
   this.A10085AtividadeUsuarioAlt = "" ;
   this.Z10085AtividadeUsuarioAlt = "" ;
   this.O10085AtividadeUsuarioAlt = "" ;
   this.A10076AtividadeDataHoraAlt = gx.date.nullDate() ;
   this.Z10076AtividadeDataHoraAlt = gx.date.nullDate() ;
   this.O10076AtividadeDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV19UsrCod = "" ;
   this.AV9EmpresaLogadaId = "" ;
   this.AV17Sistema = "" ;
   this.AV21Pgmname = "" ;
   this.AV22Pgmdesc = "" ;
   this.AV16MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV15Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV18Tabela = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV8AlterDados = "" ;
   this.AV20AtividadeId = 0 ;
   this.A10003AtividadeEmpresaId = "" ;
   this.A10004AtividadeId = 0 ;
   this.A10005AtividadeGrupoOcoEmpId = "" ;
   this.A10085AtividadeUsuarioAlt = "" ;
   this.A10076AtividadeDataHoraAlt = gx.date.nullDate() ;
   this.A10078AtividadeDescricaoServico = "" ;
   this.A10077AtividadeDesconto = 0 ;
   this.A10083AtividadeTipo = "" ;
   this.A10084AtividadeTipoAcumulacao = "" ;
   this.A10006AtividadeGrupoOcoId = 0 ;
   this.A10079AtividadeGrupoOcoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12ep2_client": ["'FECHAR'", true] ,"e13ep2_client": ["AFTER TRN", true] ,"e14ep752_client": ["ENTER", true] ,"e15ep752_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20AtividadeId',fld:'vATIVIDADEID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_10006", [25]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20AtividadeId", "vATIVIDADEID", 0, "int");
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10003AtividadeEmpresaId", "ATIVIDADEEMPRESAID", 0, "char");
   this.setVCMap("A10005AtividadeGrupoOcoEmpId", "ATIVIDADEGRUPOOCOEMPID", 0, "char");
   this.setVCMap("AV8AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV19UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV21Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 752 ]= ["O10006AtividadeGrupoOcoId","O10084AtividadeTipoAcumulacao","O10077AtividadeDesconto","O10083AtividadeTipo","O10078AtividadeDescricaoServico","O10004AtividadeId"] ;
});
gx.setParentObj(new tatividade());
