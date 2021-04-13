/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:9:54.25
*/
gx.evt.autoSkip = false;
gx.define('tmodelocontratolayout', false, function () {
   this.ServerClass =  "tmodelocontratolayout" ;
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
      this.AV18ModeloContratoLayoutSeq=gx.fn.getIntegerValue("vMODELOCONTRATOLAYOUTSEQ",'.') ;
      this.AV19ModeloContratoId=gx.fn.getIntegerValue("vMODELOCONTRATOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5336ModeloContratoEmpresaId=gx.fn.getControlValue("MODELOCONTRATOEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A5340ModeloContratoLayoutOrdem=gx.fn.getIntegerValue("MODELOCONTRATOLAYOUTORDEM",'.') ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Modelocontratoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Modelocontratoid",["gx.O.A5336ModeloContratoEmpresaId", "gx.O.A5337ModeloContratoId", "gx.O.A5333ModeloContratoDescricao"],["A5333ModeloContratoDescricao"]);
      return true;
   }
   this.Valid_Modelocontratolayoutseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOCONTRATOLAYOUTSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelocontratolayouttipocampo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOCONTRATOLAYOUTTIPOCAMPO");
         this.AnyError  = 0;
         if ( (0==this.A5338ModeloContratoLayoutTipoCampo) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Campo");
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
   this.Valid_Modelocontratolayoutdescampo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOCONTRATOLAYOUTDESCAMPO");
         this.AnyError  = 0;
         if ( ( (""==this.A5339ModeloContratoLayoutDesCampo) ) && ( this.A5338ModeloContratoLayoutTipoCampo == 6 ) )
         {
            try {
               gxballoon.setError("Informe a Descrição do Campo Fixo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ( ! (""==this.A5339ModeloContratoLayoutDesCampo) ) && ( this.A5338ModeloContratoLayoutTipoCampo != 6 ) )
         {
            try {
               gxballoon.setError("Informe a Descrição do Campo Fixo apenas quando tipo de campo for cláusulas contratuais");
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
   this.e128k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138k2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148k464_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158k464_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,19,21,24,26,27,30,32,34,41,44,46];
   this.GXLastCtrlId =46;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Modelocontratoid,isvalid:null,rgrid:[],fld:"MODELOCONTRATOID",gxz:"Z5337ModeloContratoId",gxold:"O5337ModeloContratoId",gxvar:"A5337ModeloContratoId",ucs:[],op:[15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5337ModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5337ModeloContratoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELOCONTRATOID",gx.O.A5337ModeloContratoId,0)},c2v:function(){gx.O.A5337ModeloContratoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELOCONTRATOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATODESCRICAO",gxz:"Z5333ModeloContratoDescricao",gxold:"O5333ModeloContratoDescricao",gxvar:"A5333ModeloContratoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5333ModeloContratoDescricao=Value},v2z:function(Value){gx.O.Z5333ModeloContratoDescricao=Value},v2c:function(){gx.fn.setControlValue("MODELOCONTRATODESCRICAO",gx.O.A5333ModeloContratoDescricao,0)},c2v:function(){gx.O.A5333ModeloContratoDescricao=this.val()},val:function(){return gx.fn.getControlValue("MODELOCONTRATODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelocontratolayouttipocampo,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTTIPOCAMPO",gxz:"Z5338ModeloContratoLayoutTipoCampo",gxold:"O5338ModeloContratoLayoutTipoCampo",gxvar:"A5338ModeloContratoLayoutTipoCampo",ucs:[],op:[21],ip:[21],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5338ModeloContratoLayoutTipoCampo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5338ModeloContratoLayoutTipoCampo=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("MODELOCONTRATOLAYOUTTIPOCAMPO",gx.O.A5338ModeloContratoLayoutTipoCampo)},c2v:function(){gx.O.A5338ModeloContratoLayoutTipoCampo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELOCONTRATOLAYOUTTIPOCAMPO",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"vchar",len:10240,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Modelocontratolayoutdescampo,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTDESCAMPO",gxz:"Z5339ModeloContratoLayoutDesCampo",gxold:"O5339ModeloContratoLayoutDesCampo",gxvar:"A5339ModeloContratoLayoutDesCampo",ucs:[],op:[21,26],ip:[21,26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5339ModeloContratoLayoutDesCampo=Value},v2z:function(Value){gx.O.Z5339ModeloContratoLayoutDesCampo=Value},v2c:function(){gx.fn.setControlValue("MODELOCONTRATOLAYOUTDESCAMPO",gx.O.A5339ModeloContratoLayoutDesCampo,0)},c2v:function(){gx.O.A5339ModeloContratoLayoutDesCampo=this.val()},val:function(){return gx.fn.getControlValue("MODELOCONTRATOLAYOUTDESCAMPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTUSUARIOALT",gxz:"Z5341ModeloContratoLayoutUsuarioAlt",gxold:"O5341ModeloContratoLayoutUsuarioAlt",gxvar:"A5341ModeloContratoLayoutUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5341ModeloContratoLayoutUsuarioAlt=Value},v2z:function(Value){gx.O.Z5341ModeloContratoLayoutUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MODELOCONTRATOLAYOUTUSUARIOALT",gx.O.A5341ModeloContratoLayoutUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5341ModeloContratoLayoutUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MODELOCONTRATOLAYOUTUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTDATAHORAAL",gxz:"Z5342ModeloContratoLayoutDataHoraAl",gxold:"O5342ModeloContratoLayoutDataHoraAl",gxvar:"A5342ModeloContratoLayoutDataHoraAl",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5342ModeloContratoLayoutDataHoraAl=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5342ModeloContratoLayoutDataHoraAl=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MODELOCONTRATOLAYOUTDATAHORAAL",gx.O.A5342ModeloContratoLayoutDataHoraAl,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5342ModeloContratoLayoutDataHoraAl=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MODELOCONTRATOLAYOUTDATAHORAAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelocontratolayoutseq,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTSEQ",gxz:"Z5343ModeloContratoLayoutSeq",gxold:"O5343ModeloContratoLayoutSeq",gxvar:"A5343ModeloContratoLayoutSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5343ModeloContratoLayoutSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5343ModeloContratoLayoutSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELOCONTRATOLAYOUTSEQ",gx.O.A5343ModeloContratoLayoutSeq,0)},c2v:function(){gx.O.A5343ModeloContratoLayoutSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELOCONTRATOLAYOUTSEQ",'.')},nac:function(){return !(0==this.AV18ModeloContratoLayoutSeq)}};
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A5337ModeloContratoId = 0 ;
   this.Z5337ModeloContratoId = 0 ;
   this.O5337ModeloContratoId = 0 ;
   this.A5333ModeloContratoDescricao = "" ;
   this.Z5333ModeloContratoDescricao = "" ;
   this.O5333ModeloContratoDescricao = "" ;
   this.A5338ModeloContratoLayoutTipoCampo = 0 ;
   this.Z5338ModeloContratoLayoutTipoCampo = 0 ;
   this.O5338ModeloContratoLayoutTipoCampo = 0 ;
   this.A5339ModeloContratoLayoutDesCampo = "" ;
   this.Z5339ModeloContratoLayoutDesCampo = "" ;
   this.O5339ModeloContratoLayoutDesCampo = "" ;
   this.A5341ModeloContratoLayoutUsuarioAlt = "" ;
   this.Z5341ModeloContratoLayoutUsuarioAlt = "" ;
   this.O5341ModeloContratoLayoutUsuarioAlt = "" ;
   this.A5342ModeloContratoLayoutDataHoraAl = gx.date.nullDate() ;
   this.Z5342ModeloContratoLayoutDataHoraAl = gx.date.nullDate() ;
   this.O5342ModeloContratoLayoutDataHoraAl = gx.date.nullDate() ;
   this.A5343ModeloContratoLayoutSeq = 0 ;
   this.Z5343ModeloContratoLayoutSeq = 0 ;
   this.O5343ModeloContratoLayoutSeq = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20SnAlterou = "" ;
   this.AV19ModeloContratoId = 0 ;
   this.AV18ModeloContratoLayoutSeq = 0 ;
   this.A5336ModeloContratoEmpresaId = "" ;
   this.A5337ModeloContratoId = 0 ;
   this.A5343ModeloContratoLayoutSeq = 0 ;
   this.A5340ModeloContratoLayoutOrdem = 0 ;
   this.A5341ModeloContratoLayoutUsuarioAlt = "" ;
   this.A5342ModeloContratoLayoutDataHoraAl = gx.date.nullDate() ;
   this.A5333ModeloContratoDescricao = "" ;
   this.A5338ModeloContratoLayoutTipoCampo = 0 ;
   this.A5339ModeloContratoLayoutDesCampo = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128k2_client": ["'FECHAR'", true] ,"e138k2_client": ["AFTER TRN", true] ,"e148k464_client": ["ENTER", true] ,"e158k464_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'AV18ModeloContratoLayoutSeq',fld:'vMODELOCONTRATOLAYOUTSEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5333ModeloContratoDescricao',fld:'MODELOCONTRATODESCRICAO'}],[{av:'A5333ModeloContratoDescricao',fld:'MODELOCONTRATODESCRICAO'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ModeloContratoLayoutSeq", "vMODELOCONTRATOLAYOUTSEQ", 0, "int");
   this.setVCMap("AV19ModeloContratoId", "vMODELOCONTRATOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5336ModeloContratoEmpresaId", "MODELOCONTRATOEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A5340ModeloContratoLayoutOrdem", "MODELOCONTRATOLAYOUTORDEM", 0, "int");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 464 ]= ["O5339ModeloContratoLayoutDesCampo","O5338ModeloContratoLayoutTipoCampo"] ;
});
gx.setParentObj(new tmodelocontratolayout());
