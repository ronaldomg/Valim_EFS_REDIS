/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:30:22.66
*/
gx.evt.autoSkip = false;
gx.define('tnotaservicoparametro', false, function () {
   this.ServerClass =  "tnotaservicoparametro" ;
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
      this.A9370NotaServicoParametroTipoRps=gx.fn.getIntegerValue("NOTASERVICOPARAMETROTIPORPS",'.') ;
      this.A9382NotaServicoParametroDatAlt=gx.fn.getDateTimeValue("NOTASERVICOPARAMETRODATALT") ;
      this.A9383NotaServicoParametroUsuAlt=gx.fn.getControlValue("NOTASERVICOPARAMETROUSUALT") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Notaservicoparametroempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NOTASERVICOPARAMETROEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Notaservicoparametrofilialid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Notaservicoparametrofilialid",["gx.O.A9384NotaServicoParametroEmpresaId", "gx.O.A11565NotaServicoParametroFilialid", "gx.O.A9375NotaServicoParametroNatOpe", "gx.O.A9376NotaServicoParametroRegEspTrib", "gx.O.A9378NotaServicoParametroOpSimNac", "gx.O.A9377NotaServicoParametroInCultural", "gx.O.A9381NotaServicoParametroSerieRps", "gx.O.A9370NotaServicoParametroTipoRps", 'gx.date.urlDateTime(gx.O.A9382NotaServicoParametroDatAlt,"DMY4")', "gx.O.A9383NotaServicoParametroUsuAlt"],["A9375NotaServicoParametroNatOpe", "A9376NotaServicoParametroRegEspTrib", "A9378NotaServicoParametroOpSimNac", "A9377NotaServicoParametroInCultural", "A9381NotaServicoParametroSerieRps", "A9370NotaServicoParametroTipoRps", "A9382NotaServicoParametroDatAlt", "A9383NotaServicoParametroUsuAlt", "Gx_mode", "Z9384NotaServicoParametroEmpresaId", "Z11565NotaServicoParametroFilialid", "Z9375NotaServicoParametroNatOpe", "Z9376NotaServicoParametroRegEspTrib", "Z9378NotaServicoParametroOpSimNac", "Z9377NotaServicoParametroInCultural", "Z9381NotaServicoParametroSerieRps", "Z9370NotaServicoParametroTipoRps", "Z9382NotaServicoParametroDatAlt", "Z9383NotaServicoParametroUsuAlt", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11dh850_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12dh850_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,43,45,46,55,57];
   this.GXLastCtrlId =57;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicoparametroempresaid,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETROEMPRESAID",gxz:"Z9384NotaServicoParametroEmpresaId",gxold:"O9384NotaServicoParametroEmpresaId",gxvar:"A9384NotaServicoParametroEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9384NotaServicoParametroEmpresaId=Value},v2z:function(Value){gx.O.Z9384NotaServicoParametroEmpresaId=Value},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARAMETROEMPRESAID",gx.O.A9384NotaServicoParametroEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9384NotaServicoParametroEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("NOTASERVICOPARAMETROEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETRONATOPE",gxz:"Z9375NotaServicoParametroNatOpe",gxold:"O9375NotaServicoParametroNatOpe",gxvar:"A9375NotaServicoParametroNatOpe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9375NotaServicoParametroNatOpe=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9375NotaServicoParametroNatOpe=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARAMETRONATOPE",gx.O.A9375NotaServicoParametroNatOpe,0)},c2v:function(){gx.O.A9375NotaServicoParametroNatOpe=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPARAMETRONATOPE",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETROREGESPTRIB",gxz:"Z9376NotaServicoParametroRegEspTrib",gxold:"O9376NotaServicoParametroRegEspTrib",gxvar:"A9376NotaServicoParametroRegEspTrib",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9376NotaServicoParametroRegEspTrib=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9376NotaServicoParametroRegEspTrib=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARAMETROREGESPTRIB",gx.O.A9376NotaServicoParametroRegEspTrib,0)},c2v:function(){gx.O.A9376NotaServicoParametroRegEspTrib=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPARAMETROREGESPTRIB",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETROOPSIMNAC",gxz:"Z9378NotaServicoParametroOpSimNac",gxold:"O9378NotaServicoParametroOpSimNac",gxvar:"A9378NotaServicoParametroOpSimNac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9378NotaServicoParametroOpSimNac=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9378NotaServicoParametroOpSimNac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARAMETROOPSIMNAC",gx.O.A9378NotaServicoParametroOpSimNac,0)},c2v:function(){gx.O.A9378NotaServicoParametroOpSimNac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPARAMETROOPSIMNAC",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETROINCULTURAL",gxz:"Z9377NotaServicoParametroInCultural",gxold:"O9377NotaServicoParametroInCultural",gxvar:"A9377NotaServicoParametroInCultural",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9377NotaServicoParametroInCultural=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9377NotaServicoParametroInCultural=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARAMETROINCULTURAL",gx.O.A9377NotaServicoParametroInCultural,0)},c2v:function(){gx.O.A9377NotaServicoParametroInCultural=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPARAMETROINCULTURAL",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETROSERIERPS",gxz:"Z9381NotaServicoParametroSerieRps",gxold:"O9381NotaServicoParametroSerieRps",gxvar:"A9381NotaServicoParametroSerieRps",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9381NotaServicoParametroSerieRps=Value},v2z:function(Value){gx.O.Z9381NotaServicoParametroSerieRps=Value},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARAMETROSERIERPS",gx.O.A9381NotaServicoParametroSerieRps,0)},c2v:function(){gx.O.A9381NotaServicoParametroSerieRps=this.val()},val:function(){return gx.fn.getControlValue("NOTASERVICOPARAMETROSERIERPS")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicoparametrofilialid,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETROFILIALID",gxz:"Z11565NotaServicoParametroFilialid",gxold:"O11565NotaServicoParametroFilialid",gxvar:"A11565NotaServicoParametroFilialid",ucs:[],op:[40,35,30,25,20],ip:[40,35,30,25,20,45,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11565NotaServicoParametroFilialid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11565NotaServicoParametroFilialid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARAMETROFILIALID",gx.O.A11565NotaServicoParametroFilialid,0)},c2v:function(){gx.O.A11565NotaServicoParametroFilialid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPARAMETROFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"BTNHELP",grid:0};
   this.A9384NotaServicoParametroEmpresaId = "" ;
   this.Z9384NotaServicoParametroEmpresaId = "" ;
   this.O9384NotaServicoParametroEmpresaId = "" ;
   this.A9375NotaServicoParametroNatOpe = 0 ;
   this.Z9375NotaServicoParametroNatOpe = 0 ;
   this.O9375NotaServicoParametroNatOpe = 0 ;
   this.A9376NotaServicoParametroRegEspTrib = 0 ;
   this.Z9376NotaServicoParametroRegEspTrib = 0 ;
   this.O9376NotaServicoParametroRegEspTrib = 0 ;
   this.A9378NotaServicoParametroOpSimNac = 0 ;
   this.Z9378NotaServicoParametroOpSimNac = 0 ;
   this.O9378NotaServicoParametroOpSimNac = 0 ;
   this.A9377NotaServicoParametroInCultural = 0 ;
   this.Z9377NotaServicoParametroInCultural = 0 ;
   this.O9377NotaServicoParametroInCultural = 0 ;
   this.A9381NotaServicoParametroSerieRps = "" ;
   this.Z9381NotaServicoParametroSerieRps = "" ;
   this.O9381NotaServicoParametroSerieRps = "" ;
   this.A11565NotaServicoParametroFilialid = 0 ;
   this.Z11565NotaServicoParametroFilialid = 0 ;
   this.O11565NotaServicoParametroFilialid = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A9384NotaServicoParametroEmpresaId = "" ;
   this.A11565NotaServicoParametroFilialid = 0 ;
   this.A9375NotaServicoParametroNatOpe = 0 ;
   this.A9376NotaServicoParametroRegEspTrib = 0 ;
   this.A9378NotaServicoParametroOpSimNac = 0 ;
   this.A9377NotaServicoParametroInCultural = 0 ;
   this.A9381NotaServicoParametroSerieRps = "" ;
   this.A9370NotaServicoParametroTipoRps = 0 ;
   this.A9382NotaServicoParametroDatAlt = gx.date.nullDate() ;
   this.A9383NotaServicoParametroUsuAlt = "" ;
   this.Events = {"e11dh850_client": ["ENTER", true] ,"e12dh850_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A9370NotaServicoParametroTipoRps", "NOTASERVICOPARAMETROTIPORPS", 0, "int");
   this.setVCMap("A9382NotaServicoParametroDatAlt", "NOTASERVICOPARAMETRODATALT", 0, "dtime");
   this.setVCMap("A9383NotaServicoParametroUsuAlt", "NOTASERVICOPARAMETROUSUALT", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnotaservicoparametro());
