/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:11:52.53
*/
gx.evt.autoSkip = false;
gx.define('tconvenioverba', false, function () {
   this.ServerClass =  "tconvenioverba" ;
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
      this.AV18ConvenioVerbaContaId=gx.fn.getControlValue("vCONVENIOVERBACONTAID") ;
      this.AV19ConvenioVerbaNatDesId=gx.fn.getIntegerValue("vCONVENIOVERBANATDESID",'.') ;
      this.AV20ConvenioId=gx.fn.getIntegerValue("vCONVENIOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1680ConvenioEmpresaId=gx.fn.getControlValue("CONVENIOEMPRESAID") ;
      this.AV21ConvenioVerbaContaEmpId=gx.fn.getControlValue("vCONVENIOVERBACONTAEMPID") ;
      this.A2090ConvenioVerbaContaEmpId=gx.fn.getControlValue("CONVENIOVERBACONTAEMPID") ;
      this.AV22ConvenioVerbaNatDesEmpId=gx.fn.getControlValue("vCONVENIOVERBANATDESEMPID") ;
      this.A2093ConvenioVerbaNatDesEmpId=gx.fn.getControlValue("CONVENIOVERBANATDESEMPID") ;
      this.A2286ConvenioVerbaNatDesTpImpressao=gx.fn.getControlValue("CONVENIOVERBANATDESTPIMPRESSAO") ;
      this.AV24SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV32MsgRetorno=gx.fn.getControlValue("vMSGRETORNO") ;
      this.A2082ConvenioDescricao=gx.fn.getControlValue("CONVENIODESCRICAO") ;
      this.A2724ConvenioVerbaContaTradutor=gx.fn.getIntegerValue("CONVENIOVERBACONTATRADUTOR",'.') ;
      this.A10184ConvenioVerbaContaTipoConta=gx.fn.getControlValue("CONVENIOVERBACONTATIPOCONTA") ;
      this.A2721ConvenioVerbaNatDesTipo=gx.fn.getControlValue("CONVENIOVERBANATDESTIPO") ;
      this.AV41Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV40Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Convenioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioid",["gx.O.A1680ConvenioEmpresaId", "gx.O.A1681ConvenioId", "gx.O.A2082ConvenioDescricao"],["A2082ConvenioDescricao"]);
      return true;
   }
   this.Valid_Convenioverbacontaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioverbacontaid",["gx.O.A2090ConvenioVerbaContaEmpId", "gx.O.A2091ConvenioVerbaContaId", "gx.O.A2092ConvenioVerbaContaNome", "gx.O.A2724ConvenioVerbaContaTradutor", "gx.O.A10184ConvenioVerbaContaTipoConta"],["A2092ConvenioVerbaContaNome", "A2724ConvenioVerbaContaTradutor", "A10184ConvenioVerbaContaTipoConta"]);
      return true;
   }
   this.Valid_Convenioverbanatdesid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVENIOVERBANATDESID");
         this.AnyError  = 0;
         if ( (0==this.A2094ConvenioVerbaNatDesId) )
         {
            try {
               gxballoon.setError("Informe a Natureza da Despesa");
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
   this.Valid_Convenioverbasnpatrimonio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVENIOVERBASNPATRIMONIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e124l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134l2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144l259_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154l259_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,20,22,23,24,25,28,30,31,35,38,41,43,45,54,55,57,59];
   this.GXLastCtrlId =59;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Convenioid,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOID",gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV23ConvenioDescricao",gxold:"OV23ConvenioDescricao",gxvar:"AV23ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV23ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV23ConvenioDescricao,0)},c2v:function(){gx.O.AV23ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convenioverbacontaid,isvalid:null,rgrid:[],fld:"CONVENIOVERBACONTAID",gxz:"Z2091ConvenioVerbaContaId",gxold:"O2091ConvenioVerbaContaId",gxvar:"A2091ConvenioVerbaContaId",ucs:[],op:[22,24],ip:[24,22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2091ConvenioVerbaContaId=Value},v2z:function(Value){gx.O.Z2091ConvenioVerbaContaId=Value},v2c:function(){gx.fn.setControlValue("CONVENIOVERBACONTAID",gx.O.A2091ConvenioVerbaContaId,0)},c2v:function(){gx.O.A2091ConvenioVerbaContaId=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOVERBACONTAID")},nac:function(){return !(""==this.AV18ConvenioVerbaContaId)}};
   GXValidFnc[23]={fld:"PROMPTCCONTABIL",grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOVERBACONTANOME",gxz:"Z2092ConvenioVerbaContaNome",gxold:"O2092ConvenioVerbaContaNome",gxvar:"A2092ConvenioVerbaContaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2092ConvenioVerbaContaNome=Value},v2z:function(Value){gx.O.Z2092ConvenioVerbaContaNome=Value},v2c:function(){gx.fn.setControlValue("CONVENIOVERBACONTANOME",gx.O.A2092ConvenioVerbaContaNome,0)},c2v:function(){gx.O.A2092ConvenioVerbaContaNome=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOVERBACONTANOME")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR",gxz:"ZV17Tradutor",gxold:"OV17Tradutor",gxvar:"AV17Tradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Tradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Tradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR",gx.O.AV17Tradutor,0)},c2v:function(){gx.O.AV17Tradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convenioverbanatdesid,isvalid:null,rgrid:[],fld:"CONVENIOVERBANATDESID",gxz:"Z2094ConvenioVerbaNatDesId",gxold:"O2094ConvenioVerbaNatDesId",gxvar:"A2094ConvenioVerbaNatDesId",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2094ConvenioVerbaNatDesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2094ConvenioVerbaNatDesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOVERBANATDESID",gx.O.A2094ConvenioVerbaNatDesId,0)},c2v:function(){gx.O.A2094ConvenioVerbaNatDesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOVERBANATDESID",'.')},nac:function(){return !(0==this.AV19ConvenioVerbaNatDesId)}};
   GXValidFnc[31]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOVERBANATDESDESCRICAO",gxz:"Z2095ConvenioVerbaNatDesDescricao",gxold:"O2095ConvenioVerbaNatDesDescricao",gxvar:"A2095ConvenioVerbaNatDesDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2095ConvenioVerbaNatDesDescricao=Value},v2z:function(Value){gx.O.Z2095ConvenioVerbaNatDesDescricao=Value},v2c:function(){gx.fn.setControlValue("CONVENIOVERBANATDESDESCRICAO",gx.O.A2095ConvenioVerbaNatDesDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2095ConvenioVerbaNatDesDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOVERBANATDESDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convenioverbasnpatrimonio,isvalid:null,rgrid:[],fld:"CONVENIOVERBASNPATRIMONIO",gxz:"Z3090ConvenioVerbaSnPatrimonio",gxold:"O3090ConvenioVerbaSnPatrimonio",gxvar:"A3090ConvenioVerbaSnPatrimonio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3090ConvenioVerbaSnPatrimonio=Value},v2z:function(Value){gx.O.Z3090ConvenioVerbaSnPatrimonio=Value},v2c:function(){gx.fn.setCheckBoxValue("CONVENIOVERBASNPATRIMONIO",gx.O.A3090ConvenioVerbaSnPatrimonio,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3090ConvenioVerbaSnPatrimonio=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOVERBASNPATRIMONIO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TABLE22",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOVERBAUSUARIOALT",gxz:"Z2103ConvenioVerbaUsuarioAlt",gxold:"O2103ConvenioVerbaUsuarioAlt",gxvar:"A2103ConvenioVerbaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2103ConvenioVerbaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2103ConvenioVerbaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONVENIOVERBAUSUARIOALT",gx.O.A2103ConvenioVerbaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2103ConvenioVerbaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOVERBAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOVERBADATAHORAALT",gxz:"Z2104ConvenioVerbaDataHoraAlt",gxold:"O2104ConvenioVerbaDataHoraAlt",gxvar:"A2104ConvenioVerbaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2104ConvenioVerbaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2104ConvenioVerbaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOVERBADATAHORAALT",gx.O.A2104ConvenioVerbaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2104ConvenioVerbaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONVENIOVERBADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[54]={fld:"JS", format:2,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV28AcessoSistemaSequencia",gxold:"OV28AcessoSistemaSequencia",gxvar:"AV28AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV28AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV28AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"BTNHELP",grid:0};
   GXValidFnc[59]={fld:"PROMPT_2094",grid:259};
   this.A1681ConvenioId = 0 ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.AV23ConvenioDescricao = "" ;
   this.ZV23ConvenioDescricao = "" ;
   this.OV23ConvenioDescricao = "" ;
   this.A2091ConvenioVerbaContaId = "" ;
   this.Z2091ConvenioVerbaContaId = "" ;
   this.O2091ConvenioVerbaContaId = "" ;
   this.A2092ConvenioVerbaContaNome = "" ;
   this.Z2092ConvenioVerbaContaNome = "" ;
   this.O2092ConvenioVerbaContaNome = "" ;
   this.AV17Tradutor = 0 ;
   this.ZV17Tradutor = 0 ;
   this.OV17Tradutor = 0 ;
   this.A2094ConvenioVerbaNatDesId = 0 ;
   this.Z2094ConvenioVerbaNatDesId = 0 ;
   this.O2094ConvenioVerbaNatDesId = 0 ;
   this.A2095ConvenioVerbaNatDesDescricao = "" ;
   this.Z2095ConvenioVerbaNatDesDescricao = "" ;
   this.O2095ConvenioVerbaNatDesDescricao = "" ;
   this.A3090ConvenioVerbaSnPatrimonio = "" ;
   this.Z3090ConvenioVerbaSnPatrimonio = "" ;
   this.O3090ConvenioVerbaSnPatrimonio = "" ;
   this.A2103ConvenioVerbaUsuarioAlt = "" ;
   this.Z2103ConvenioVerbaUsuarioAlt = "" ;
   this.O2103ConvenioVerbaUsuarioAlt = "" ;
   this.A2104ConvenioVerbaDataHoraAlt = gx.date.nullDate() ;
   this.Z2104ConvenioVerbaDataHoraAlt = gx.date.nullDate() ;
   this.O2104ConvenioVerbaDataHoraAlt = gx.date.nullDate() ;
   this.AV28AcessoSistemaSequencia = 0 ;
   this.ZV28AcessoSistemaSequencia = 0 ;
   this.OV28AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV40Pgmname = "" ;
   this.AV41Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV28AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21ConvenioVerbaContaEmpId = "" ;
   this.AV22ConvenioVerbaNatDesEmpId = "" ;
   this.AV25ChamaOnBlurMascara = "" ;
   this.AV26TemMascara = "" ;
   this.AV27EstruturaContaInicial = "" ;
   this.AV32MsgRetorno = "" ;
   this.AV20ConvenioId = 0 ;
   this.AV18ConvenioVerbaContaId = "" ;
   this.AV19ConvenioVerbaNatDesId = 0 ;
   this.AV23ConvenioDescricao = "" ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2090ConvenioVerbaContaEmpId = "" ;
   this.A2091ConvenioVerbaContaId = "" ;
   this.A2094ConvenioVerbaNatDesId = 0 ;
   this.A2093ConvenioVerbaNatDesEmpId = "" ;
   this.AV24SnAlterou = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.A2092ConvenioVerbaContaNome = "" ;
   this.A2724ConvenioVerbaContaTradutor = 0 ;
   this.A10184ConvenioVerbaContaTipoConta = "" ;
   this.A2095ConvenioVerbaNatDesDescricao = "" ;
   this.A2286ConvenioVerbaNatDesTpImpressao = "" ;
   this.A2721ConvenioVerbaNatDesTipo = "" ;
   this.A3090ConvenioVerbaSnPatrimonio = "" ;
   this.A2103ConvenioVerbaUsuarioAlt = "" ;
   this.A2104ConvenioVerbaDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e124l2_client": ["'FECHAR'", true] ,"e134l2_client": ["AFTER TRN", true] ,"e144l259_client": ["ENTER", true] ,"e154l259_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20ConvenioId',fld:'vCONVENIOID'},{av:'AV18ConvenioVerbaContaId',fld:'vCONVENIOVERBACONTAID'},{av:'AV19ConvenioVerbaNatDesId',fld:'vCONVENIOVERBANATDESID'},{av:'AV23ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV28AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20ConvenioId',fld:'vCONVENIOID'},{av:'AV23ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2090ConvenioVerbaContaEmpId',fld:'CONVENIOVERBACONTAEMPID'},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'A2093ConvenioVerbaNatDesEmpId',fld:'CONVENIOVERBANATDESEMPID'},{av:'A2094ConvenioVerbaNatDesId',fld:'CONVENIOVERBANATDESID'},{av:'A3090ConvenioVerbaSnPatrimonio',fld:'CONVENIOVERBASNPATRIMONIO'},{av:'AV28AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV30SnProcessoConta',fld:'vSNPROCESSOCONTA'}]];
   this.setPrompt("PROMPTCCONTABIL", [22]);
   this.setPrompt("PROMPT_2094", [30]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ConvenioVerbaContaId", "vCONVENIOVERBACONTAID", 0, "svchar");
   this.setVCMap("AV19ConvenioVerbaNatDesId", "vCONVENIOVERBANATDESID", 0, "int");
   this.setVCMap("AV20ConvenioId", "vCONVENIOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1680ConvenioEmpresaId", "CONVENIOEMPRESAID", 0, "char");
   this.setVCMap("AV21ConvenioVerbaContaEmpId", "vCONVENIOVERBACONTAEMPID", 0, "char");
   this.setVCMap("A2090ConvenioVerbaContaEmpId", "CONVENIOVERBACONTAEMPID", 0, "char");
   this.setVCMap("AV22ConvenioVerbaNatDesEmpId", "vCONVENIOVERBANATDESEMPID", 0, "char");
   this.setVCMap("A2093ConvenioVerbaNatDesEmpId", "CONVENIOVERBANATDESEMPID", 0, "char");
   this.setVCMap("A2286ConvenioVerbaNatDesTpImpressao", "CONVENIOVERBANATDESTPIMPRESSAO", 0, "char");
   this.setVCMap("AV24SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV32MsgRetorno", "vMSGRETORNO", 0, "svchar");
   this.setVCMap("A2082ConvenioDescricao", "CONVENIODESCRICAO", 0, "svchar");
   this.setVCMap("A2724ConvenioVerbaContaTradutor", "CONVENIOVERBACONTATRADUTOR", 0, "int");
   this.setVCMap("A10184ConvenioVerbaContaTipoConta", "CONVENIOVERBACONTATIPOCONTA", 0, "char");
   this.setVCMap("A2721ConvenioVerbaNatDesTipo", "CONVENIOVERBANATDESTIPO", 0, "char");
   this.setVCMap("AV41Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 259 ]= ["O3090ConvenioVerbaSnPatrimonio","O2286ConvenioVerbaNatDesTpImpressao","O2094ConvenioVerbaNatDesId","O2091ConvenioVerbaContaId"] ;
});
gx.setParentObj(new tconvenioverba());
