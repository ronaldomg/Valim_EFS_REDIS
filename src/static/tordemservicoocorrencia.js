/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:11:51.47
*/
gx.evt.autoSkip = false;
gx.define('tordemservicoocorrencia', false, function () {
   this.ServerClass =  "tordemservicoocorrencia" ;
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
   this.Valid_Ordemservicoocorrenciaosempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOOCORRENCIAOSEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicoocorrenciaosid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOOCORRENCIAOSID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicoocorrenciaapaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOOCORRENCIAAPAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicoocorrenciaapaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ordemservicoocorrenciaapaid",["gx.O.A9108OrdemServicoOcorrenciaApaEmpId", "gx.O.A9109OrdemServicoOcorrenciaApaId"],[]);
      return true;
   }
   this.Valid_Ordemservicoocorrenciaapaseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOOCORRENCIAAPASEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicoocorrenciaseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ordemservicoocorrenciaseq",["gx.O.A9106OrdemServicoOcorrenciaOSEmpId", "gx.O.A9107OrdemServicoOcorrenciaOSId", "gx.O.A9108OrdemServicoOcorrenciaApaEmpId", "gx.O.A9109OrdemServicoOcorrenciaApaId", "gx.O.A9110OrdemServicoOcorrenciaApaSeq", "gx.O.A8814OrdemServicoOcorrenciaSeq", "gx.O.A8810OrdemServicoOcorrenciaObs", "gx.O.A9105OrdemServicoOcorrenciaFaseEpId", "gx.O.A8813OrdemServicoOcorrenciaFase", "gx.O.A9229OrdemServicoOcorrenciaOSSit", 'gx.date.urlDateTime(gx.O.A9230OrdemServicoOcorrenciaOSEmi,"DMY4")', 'gx.date.urlDateTime(gx.O.A9231OrdemServicoOcorrenciaOSFecha,"DMY4")', "gx.O.A8809OrdemServicoOcorrenciaUsu", 'gx.date.urlDateTime(gx.O.A8808OrdemServicoOcorrenciaDtHr,"DMY4")', "gx.O.A8811OSOcorrenciaProfissionalEmpId", "gx.O.A8812OSOcorrenciaProfissionalId", "gx.O.A9225OSOcorrenciaClienteEmpId", "gx.O.A9226OSOcorrenciaClienteId", "gx.O.A9227OSOcorrenciaTipoEmpId", "gx.O.A9228OSOcorrenciaTipoId"],["A8810OrdemServicoOcorrenciaObs", "A9105OrdemServicoOcorrenciaFaseEpId", "A8813OrdemServicoOcorrenciaFase", "A8811OSOcorrenciaProfissionalEmpId", "A8812OSOcorrenciaProfissionalId", "A9225OSOcorrenciaClienteEmpId", "A9226OSOcorrenciaClienteId", "A9227OSOcorrenciaTipoEmpId", "A9228OSOcorrenciaTipoId", "A9229OrdemServicoOcorrenciaOSSit", "A9230OrdemServicoOcorrenciaOSEmi", "A9231OrdemServicoOcorrenciaOSFecha", "A8809OrdemServicoOcorrenciaUsu", "A8808OrdemServicoOcorrenciaDtHr", "Gx_mode", "Z9106OrdemServicoOcorrenciaOSEmpId", "Z9107OrdemServicoOcorrenciaOSId", "Z9108OrdemServicoOcorrenciaApaEmpId", "Z9109OrdemServicoOcorrenciaApaId", "Z9110OrdemServicoOcorrenciaApaSeq", "Z8814OrdemServicoOcorrenciaSeq", "Z8810OrdemServicoOcorrenciaObs", "Z9105OrdemServicoOcorrenciaFaseEpId", "Z8813OrdemServicoOcorrenciaFase", "Z8811OSOcorrenciaProfissionalEmpId", "Z8812OSOcorrenciaProfissionalId", "Z9225OSOcorrenciaClienteEmpId", "Z9226OSOcorrenciaClienteId", "Z9227OSOcorrenciaTipoEmpId", "Z9228OSOcorrenciaTipoId", "Z9229OrdemServicoOcorrenciaOSSit", "Z9230OrdemServicoOcorrenciaOSEmi", "Z9231OrdemServicoOcorrenciaOSFecha", "Z8809OrdemServicoOcorrenciaUsu", "Z8808OrdemServicoOcorrenciaDtHr", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.Valid_Osocorrenciaprofissionalempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OSOCORRENCIAPROFISSIONALEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Osocorrenciaprofissionalid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Osocorrenciaprofissionalid",["gx.O.A8811OSOcorrenciaProfissionalEmpId", "gx.O.A8812OSOcorrenciaProfissionalId"],[]);
      return true;
   }
   this.Valid_Osocorrenciaclienteempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OSOCORRENCIACLIENTEEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Osocorrenciaclienteid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Osocorrenciaclienteid",["gx.O.A9225OSOcorrenciaClienteEmpId", "gx.O.A9226OSOcorrenciaClienteId"],[]);
      return true;
   }
   this.Valid_Osocorrenciatipoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OSOCORRENCIATIPOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Osocorrenciatipoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Osocorrenciatipoid",["gx.O.A9227OSOcorrenciaTipoEmpId", "gx.O.A9228OSOcorrenciaTipoId"],[]);
      return true;
   }
   this.e11cp676_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12cp676_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,43,45,49,51,54,56,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96,99,101,104,106,109,111,114,116,124,125,126,127];
   this.GXLastCtrlId =127;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicoocorrenciaosempid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAOSEMPID",gxz:"Z9106OrdemServicoOcorrenciaOSEmpId",gxold:"O9106OrdemServicoOcorrenciaOSEmpId",gxvar:"A9106OrdemServicoOcorrenciaOSEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9106OrdemServicoOcorrenciaOSEmpId=Value},v2z:function(Value){gx.O.Z9106OrdemServicoOcorrenciaOSEmpId=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAOSEMPID",gx.O.A9106OrdemServicoOcorrenciaOSEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9106OrdemServicoOcorrenciaOSEmpId=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOOCORRENCIAOSEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicoocorrenciaosid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAOSID",gxz:"Z9107OrdemServicoOcorrenciaOSId",gxold:"O9107OrdemServicoOcorrenciaOSId",gxvar:"A9107OrdemServicoOcorrenciaOSId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9107OrdemServicoOcorrenciaOSId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9107OrdemServicoOcorrenciaOSId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAOSID",gx.O.A9107OrdemServicoOcorrenciaOSId,0)},c2v:function(){gx.O.A9107OrdemServicoOcorrenciaOSId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOOCORRENCIAOSID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicoocorrenciaapaempid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAAPAEMPID",gxz:"Z9108OrdemServicoOcorrenciaApaEmpId",gxold:"O9108OrdemServicoOcorrenciaApaEmpId",gxvar:"A9108OrdemServicoOcorrenciaApaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9108OrdemServicoOcorrenciaApaEmpId=Value},v2z:function(Value){gx.O.Z9108OrdemServicoOcorrenciaApaEmpId=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAAPAEMPID",gx.O.A9108OrdemServicoOcorrenciaApaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9108OrdemServicoOcorrenciaApaEmpId=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOOCORRENCIAAPAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicoocorrenciaapaid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAAPAID",gxz:"Z9109OrdemServicoOcorrenciaApaId",gxold:"O9109OrdemServicoOcorrenciaApaId",gxvar:"A9109OrdemServicoOcorrenciaApaId",ucs:[],op:[],ip:[35,30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9109OrdemServicoOcorrenciaApaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9109OrdemServicoOcorrenciaApaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAAPAID",gx.O.A9109OrdemServicoOcorrenciaApaId,0)},c2v:function(){gx.O.A9109OrdemServicoOcorrenciaApaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOOCORRENCIAAPAID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicoocorrenciaapaseq,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAAPASEQ",gxz:"Z9110OrdemServicoOcorrenciaApaSeq",gxold:"O9110OrdemServicoOcorrenciaApaSeq",gxvar:"A9110OrdemServicoOcorrenciaApaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9110OrdemServicoOcorrenciaApaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9110OrdemServicoOcorrenciaApaSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAAPASEQ",gx.O.A9110OrdemServicoOcorrenciaApaSeq,0)},c2v:function(){gx.O.A9110OrdemServicoOcorrenciaApaSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOOCORRENCIAAPASEQ",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicoocorrenciaseq,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIASEQ",gxz:"Z8814OrdemServicoOcorrenciaSeq",gxold:"O8814OrdemServicoOcorrenciaSeq",gxvar:"A8814OrdemServicoOcorrenciaSeq",ucs:[],op:[91,86,81,76,71,66,116,111,106,101,96,61,56,51],ip:[91,86,81,76,71,66,116,111,106,101,96,61,56,51,45,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8814OrdemServicoOcorrenciaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8814OrdemServicoOcorrenciaSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIASEQ",gx.O.A8814OrdemServicoOcorrenciaSeq,0)},c2v:function(){gx.O.A8814OrdemServicoOcorrenciaSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOOCORRENCIASEQ",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"vchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAOBS",gxz:"Z8810OrdemServicoOcorrenciaObs",gxold:"O8810OrdemServicoOcorrenciaObs",gxvar:"A8810OrdemServicoOcorrenciaObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8810OrdemServicoOcorrenciaObs=Value},v2z:function(Value){gx.O.Z8810OrdemServicoOcorrenciaObs=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAOBS",gx.O.A8810OrdemServicoOcorrenciaObs,0)},c2v:function(){gx.O.A8810OrdemServicoOcorrenciaObs=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOOCORRENCIAOBS")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAFASEEPID",gxz:"Z9105OrdemServicoOcorrenciaFaseEpId",gxold:"O9105OrdemServicoOcorrenciaFaseEpId",gxvar:"A9105OrdemServicoOcorrenciaFaseEpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9105OrdemServicoOcorrenciaFaseEpId=Value},v2z:function(Value){gx.O.Z9105OrdemServicoOcorrenciaFaseEpId=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAFASEEPID",gx.O.A9105OrdemServicoOcorrenciaFaseEpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9105OrdemServicoOcorrenciaFaseEpId=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOOCORRENCIAFASEEPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAFASE",gxz:"Z8813OrdemServicoOcorrenciaFase",gxold:"O8813OrdemServicoOcorrenciaFase",gxvar:"A8813OrdemServicoOcorrenciaFase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8813OrdemServicoOcorrenciaFase=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8813OrdemServicoOcorrenciaFase=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAFASE",gx.O.A8813OrdemServicoOcorrenciaFase,0)},c2v:function(){gx.O.A8813OrdemServicoOcorrenciaFase=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOOCORRENCIAFASE",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Osocorrenciaprofissionalempid,isvalid:null,rgrid:[],fld:"OSOCORRENCIAPROFISSIONALEMPID",gxz:"Z8811OSOcorrenciaProfissionalEmpId",gxold:"O8811OSOcorrenciaProfissionalEmpId",gxvar:"A8811OSOcorrenciaProfissionalEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8811OSOcorrenciaProfissionalEmpId=Value},v2z:function(Value){gx.O.Z8811OSOcorrenciaProfissionalEmpId=Value},v2c:function(){gx.fn.setControlValue("OSOCORRENCIAPROFISSIONALEMPID",gx.O.A8811OSOcorrenciaProfissionalEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8811OSOcorrenciaProfissionalEmpId=this.val()},val:function(){return gx.fn.getControlValue("OSOCORRENCIAPROFISSIONALEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[69]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Osocorrenciaprofissionalid,isvalid:null,rgrid:[],fld:"OSOCORRENCIAPROFISSIONALID",gxz:"Z8812OSOcorrenciaProfissionalId",gxold:"O8812OSOcorrenciaProfissionalId",gxvar:"A8812OSOcorrenciaProfissionalId",ucs:[],op:[],ip:[71,66],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8812OSOcorrenciaProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8812OSOcorrenciaProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OSOCORRENCIAPROFISSIONALID",gx.O.A8812OSOcorrenciaProfissionalId,0)},c2v:function(){gx.O.A8812OSOcorrenciaProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OSOCORRENCIAPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Osocorrenciaclienteempid,isvalid:null,rgrid:[],fld:"OSOCORRENCIACLIENTEEMPID",gxz:"Z9225OSOcorrenciaClienteEmpId",gxold:"O9225OSOcorrenciaClienteEmpId",gxvar:"A9225OSOcorrenciaClienteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9225OSOcorrenciaClienteEmpId=Value},v2z:function(Value){gx.O.Z9225OSOcorrenciaClienteEmpId=Value},v2c:function(){gx.fn.setControlValue("OSOCORRENCIACLIENTEEMPID",gx.O.A9225OSOcorrenciaClienteEmpId,0)},c2v:function(){gx.O.A9225OSOcorrenciaClienteEmpId=this.val()},val:function(){return gx.fn.getControlValue("OSOCORRENCIACLIENTEEMPID")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Osocorrenciaclienteid,isvalid:null,rgrid:[],fld:"OSOCORRENCIACLIENTEID",gxz:"Z9226OSOcorrenciaClienteId",gxold:"O9226OSOcorrenciaClienteId",gxvar:"A9226OSOcorrenciaClienteId",ucs:[],op:[],ip:[81,76],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9226OSOcorrenciaClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9226OSOcorrenciaClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OSOCORRENCIACLIENTEID",gx.O.A9226OSOcorrenciaClienteId,0)},c2v:function(){gx.O.A9226OSOcorrenciaClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OSOCORRENCIACLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Osocorrenciatipoempid,isvalid:null,rgrid:[],fld:"OSOCORRENCIATIPOEMPID",gxz:"Z9227OSOcorrenciaTipoEmpId",gxold:"O9227OSOcorrenciaTipoEmpId",gxvar:"A9227OSOcorrenciaTipoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9227OSOcorrenciaTipoEmpId=Value},v2z:function(Value){gx.O.Z9227OSOcorrenciaTipoEmpId=Value},v2c:function(){gx.fn.setControlValue("OSOCORRENCIATIPOEMPID",gx.O.A9227OSOcorrenciaTipoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9227OSOcorrenciaTipoEmpId=this.val()},val:function(){return gx.fn.getControlValue("OSOCORRENCIATIPOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 86 , function() {
   });
   GXValidFnc[89]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Osocorrenciatipoid,isvalid:null,rgrid:[],fld:"OSOCORRENCIATIPOID",gxz:"Z9228OSOcorrenciaTipoId",gxold:"O9228OSOcorrenciaTipoId",gxvar:"A9228OSOcorrenciaTipoId",ucs:[],op:[],ip:[91,86],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9228OSOcorrenciaTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9228OSOcorrenciaTipoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OSOCORRENCIATIPOID",gx.O.A9228OSOcorrenciaTipoId,0)},c2v:function(){gx.O.A9228OSOcorrenciaTipoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OSOCORRENCIATIPOID",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAOSSIT",gxz:"Z9229OrdemServicoOcorrenciaOSSit",gxold:"O9229OrdemServicoOcorrenciaOSSit",gxvar:"A9229OrdemServicoOcorrenciaOSSit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9229OrdemServicoOcorrenciaOSSit=Value},v2z:function(Value){gx.O.Z9229OrdemServicoOcorrenciaOSSit=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAOSSIT",gx.O.A9229OrdemServicoOcorrenciaOSSit,0)},c2v:function(){gx.O.A9229OrdemServicoOcorrenciaOSSit=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOOCORRENCIAOSSIT")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAOSEMI",gxz:"Z9230OrdemServicoOcorrenciaOSEmi",gxold:"O9230OrdemServicoOcorrenciaOSEmi",gxvar:"A9230OrdemServicoOcorrenciaOSEmi",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9230OrdemServicoOcorrenciaOSEmi=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9230OrdemServicoOcorrenciaOSEmi=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAOSEMI",gx.O.A9230OrdemServicoOcorrenciaOSEmi,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9230OrdemServicoOcorrenciaOSEmi=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ORDEMSERVICOOCORRENCIAOSEMI")},nac:gx.falseFn};
   this.declareDomainHdlr( 101 , function() {
   });
   GXValidFnc[104]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAOSFECHA",gxz:"Z9231OrdemServicoOcorrenciaOSFecha",gxold:"O9231OrdemServicoOcorrenciaOSFecha",gxvar:"A9231OrdemServicoOcorrenciaOSFecha",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9231OrdemServicoOcorrenciaOSFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9231OrdemServicoOcorrenciaOSFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAOSFECHA",gx.O.A9231OrdemServicoOcorrenciaOSFecha,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9231OrdemServicoOcorrenciaOSFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ORDEMSERVICOOCORRENCIAOSFECHA")},nac:gx.falseFn};
   this.declareDomainHdlr( 106 , function() {
   });
   GXValidFnc[109]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAUSU",gxz:"Z8809OrdemServicoOcorrenciaUsu",gxold:"O8809OrdemServicoOcorrenciaUsu",gxvar:"A8809OrdemServicoOcorrenciaUsu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8809OrdemServicoOcorrenciaUsu=Value},v2z:function(Value){gx.O.Z8809OrdemServicoOcorrenciaUsu=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIAUSU",gx.O.A8809OrdemServicoOcorrenciaUsu,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8809OrdemServicoOcorrenciaUsu=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOOCORRENCIAUSU")},nac:gx.falseFn};
   this.declareDomainHdlr( 111 , function() {
   });
   GXValidFnc[114]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIADTHR",gxz:"Z8808OrdemServicoOcorrenciaDtHr",gxold:"O8808OrdemServicoOcorrenciaDtHr",gxvar:"A8808OrdemServicoOcorrenciaDtHr",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8808OrdemServicoOcorrenciaDtHr=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8808OrdemServicoOcorrenciaDtHr=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOOCORRENCIADTHR",gx.O.A8808OrdemServicoOcorrenciaDtHr,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8808OrdemServicoOcorrenciaDtHr=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ORDEMSERVICOOCORRENCIADTHR")},nac:gx.falseFn};
   this.declareDomainHdlr( 116 , function() {
   });
   GXValidFnc[124]={fld:"PROMPT_9108_9109",grid:676};
   GXValidFnc[125]={fld:"PROMPT_8811_8812",grid:676};
   GXValidFnc[126]={fld:"PROMPT_9225_9226",grid:676};
   GXValidFnc[127]={fld:"PROMPT_9227_9228",grid:676};
   this.A9106OrdemServicoOcorrenciaOSEmpId = "" ;
   this.Z9106OrdemServicoOcorrenciaOSEmpId = "" ;
   this.O9106OrdemServicoOcorrenciaOSEmpId = "" ;
   this.A9107OrdemServicoOcorrenciaOSId = 0 ;
   this.Z9107OrdemServicoOcorrenciaOSId = 0 ;
   this.O9107OrdemServicoOcorrenciaOSId = 0 ;
   this.A9108OrdemServicoOcorrenciaApaEmpId = "" ;
   this.Z9108OrdemServicoOcorrenciaApaEmpId = "" ;
   this.O9108OrdemServicoOcorrenciaApaEmpId = "" ;
   this.A9109OrdemServicoOcorrenciaApaId = 0 ;
   this.Z9109OrdemServicoOcorrenciaApaId = 0 ;
   this.O9109OrdemServicoOcorrenciaApaId = 0 ;
   this.A9110OrdemServicoOcorrenciaApaSeq = 0 ;
   this.Z9110OrdemServicoOcorrenciaApaSeq = 0 ;
   this.O9110OrdemServicoOcorrenciaApaSeq = 0 ;
   this.A8814OrdemServicoOcorrenciaSeq = 0 ;
   this.Z8814OrdemServicoOcorrenciaSeq = 0 ;
   this.O8814OrdemServicoOcorrenciaSeq = 0 ;
   this.A8810OrdemServicoOcorrenciaObs = "" ;
   this.Z8810OrdemServicoOcorrenciaObs = "" ;
   this.O8810OrdemServicoOcorrenciaObs = "" ;
   this.A9105OrdemServicoOcorrenciaFaseEpId = "" ;
   this.Z9105OrdemServicoOcorrenciaFaseEpId = "" ;
   this.O9105OrdemServicoOcorrenciaFaseEpId = "" ;
   this.A8813OrdemServicoOcorrenciaFase = 0 ;
   this.Z8813OrdemServicoOcorrenciaFase = 0 ;
   this.O8813OrdemServicoOcorrenciaFase = 0 ;
   this.A8811OSOcorrenciaProfissionalEmpId = "" ;
   this.Z8811OSOcorrenciaProfissionalEmpId = "" ;
   this.O8811OSOcorrenciaProfissionalEmpId = "" ;
   this.A8812OSOcorrenciaProfissionalId = 0 ;
   this.Z8812OSOcorrenciaProfissionalId = 0 ;
   this.O8812OSOcorrenciaProfissionalId = 0 ;
   this.A9225OSOcorrenciaClienteEmpId = "" ;
   this.Z9225OSOcorrenciaClienteEmpId = "" ;
   this.O9225OSOcorrenciaClienteEmpId = "" ;
   this.A9226OSOcorrenciaClienteId = 0 ;
   this.Z9226OSOcorrenciaClienteId = 0 ;
   this.O9226OSOcorrenciaClienteId = 0 ;
   this.A9227OSOcorrenciaTipoEmpId = "" ;
   this.Z9227OSOcorrenciaTipoEmpId = "" ;
   this.O9227OSOcorrenciaTipoEmpId = "" ;
   this.A9228OSOcorrenciaTipoId = 0 ;
   this.Z9228OSOcorrenciaTipoId = 0 ;
   this.O9228OSOcorrenciaTipoId = 0 ;
   this.A9229OrdemServicoOcorrenciaOSSit = "" ;
   this.Z9229OrdemServicoOcorrenciaOSSit = "" ;
   this.O9229OrdemServicoOcorrenciaOSSit = "" ;
   this.A9230OrdemServicoOcorrenciaOSEmi = gx.date.nullDate() ;
   this.Z9230OrdemServicoOcorrenciaOSEmi = gx.date.nullDate() ;
   this.O9230OrdemServicoOcorrenciaOSEmi = gx.date.nullDate() ;
   this.A9231OrdemServicoOcorrenciaOSFecha = gx.date.nullDate() ;
   this.Z9231OrdemServicoOcorrenciaOSFecha = gx.date.nullDate() ;
   this.O9231OrdemServicoOcorrenciaOSFecha = gx.date.nullDate() ;
   this.A8809OrdemServicoOcorrenciaUsu = "" ;
   this.Z8809OrdemServicoOcorrenciaUsu = "" ;
   this.O8809OrdemServicoOcorrenciaUsu = "" ;
   this.A8808OrdemServicoOcorrenciaDtHr = gx.date.nullDate() ;
   this.Z8808OrdemServicoOcorrenciaDtHr = gx.date.nullDate() ;
   this.O8808OrdemServicoOcorrenciaDtHr = gx.date.nullDate() ;
   this.A9106OrdemServicoOcorrenciaOSEmpId = "" ;
   this.A9107OrdemServicoOcorrenciaOSId = 0 ;
   this.A9108OrdemServicoOcorrenciaApaEmpId = "" ;
   this.A9109OrdemServicoOcorrenciaApaId = 0 ;
   this.A9110OrdemServicoOcorrenciaApaSeq = 0 ;
   this.A8814OrdemServicoOcorrenciaSeq = 0 ;
   this.A8810OrdemServicoOcorrenciaObs = "" ;
   this.A9105OrdemServicoOcorrenciaFaseEpId = "" ;
   this.A8813OrdemServicoOcorrenciaFase = 0 ;
   this.A8811OSOcorrenciaProfissionalEmpId = "" ;
   this.A8812OSOcorrenciaProfissionalId = 0 ;
   this.A9225OSOcorrenciaClienteEmpId = "" ;
   this.A9226OSOcorrenciaClienteId = 0 ;
   this.A9227OSOcorrenciaTipoEmpId = "" ;
   this.A9228OSOcorrenciaTipoId = 0 ;
   this.A9229OrdemServicoOcorrenciaOSSit = "" ;
   this.A9230OrdemServicoOcorrenciaOSEmi = gx.date.nullDate() ;
   this.A9231OrdemServicoOcorrenciaOSFecha = gx.date.nullDate() ;
   this.A8809OrdemServicoOcorrenciaUsu = "" ;
   this.A8808OrdemServicoOcorrenciaDtHr = gx.date.nullDate() ;
   this.Events = {"e11cp676_client": ["ENTER", true] ,"e12cp676_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_9108_9109", [30,35]);
   this.setPrompt("PROMPT_8811_8812", [66,71]);
   this.setPrompt("PROMPT_9225_9226", [76,81]);
   this.setPrompt("PROMPT_9227_9228", [86,91]);
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tordemservicoocorrencia());
