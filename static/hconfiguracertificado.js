/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:32:40.44
*/
gx.evt.autoSkip = false;
gx.define('hconfiguracertificado', false, function () {
   this.ServerClass =  "hconfiguracertificado" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Url=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vURL");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.AV19URL, "^((?:[a-zA-Z]+:(//)?)?((?:(?:[a-zA-Z]([a-zA-Z0-9$\\-_@&+!*\"'(),]|%[0-9a-fA-F]{2})*)(?:\\.(?:([a-zA-Z0-9$\\-_@&+!*\"'(),]|%[0-9a-fA-F]{2})*))*)|(?:(\\d{1,3}\\.){3}\\d{1,3}))(?::\\d+)?(?:/([a-zA-Z0-9$\\-_@.&+!*\"'(),=;: ]|%[0-9a-fA-F]{2})+)*/?(?:[#?](?:[a-zA-Z0-9$\\-_@.&+!*\"'(),=;: /]|%[0-9a-fA-F]{2})*)?)?\\s*$") ) )
         {
            try {
               gxballoon.setError("O valor de URL não coincide com o padrão especificado");
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
   this.e132352_client=function()
   {
      this.executeServerEvent("'CANCEL'", false, null, false, false);
   };
   this.e142352_client=function()
   {
      this.executeServerEvent("'BUSCAR'", true, null, false, false);
   };
   this.e152352_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e172352_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,10,12,13,14,17,19,27,30,33,35,38,40,41,42,43,44];
   this.GXLastCtrlId =44;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"CERTLBL", format:0,grid:0};
   GXValidFnc[7]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILENAME",gxz:"ZV15FileName",gxold:"OV15FileName",gxvar:"AV15FileName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15FileName=Value},v2z:function(Value){gx.O.ZV15FileName=Value},v2c:function(){gx.fn.setControlValue("vFILENAME",gx.O.AV15FileName,0)},c2v:function(){gx.O.AV15FileName=this.val()},val:function(){return gx.fn.getControlValue("vFILENAME")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"BUSCAR",grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCERTURL",gxz:"ZV10CertURL",gxold:"OV10CertURL",gxvar:"AV10CertURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10CertURL=Value},v2z:function(Value){gx.O.ZV10CertURL=Value},v2c:function(){gx.fn.setControlValue("vCERTURL",gx.O.AV10CertURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10CertURL=this.val()},val:function(){return gx.fn.getControlValue("vCERTURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[14]={lvl:0,type:"svchar",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILEEXTENSION",gxz:"ZV23FileExtension",gxold:"OV23FileExtension",gxvar:"AV23FileExtension",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FileExtension=Value},v2z:function(Value){gx.O.ZV23FileExtension=Value},v2c:function(){gx.fn.setControlValue("vFILEEXTENSION",gx.O.AV23FileExtension,0)},c2v:function(){gx.O.AV23FileExtension=this.val()},val:function(){return gx.fn.getControlValue("vFILEEXTENSION")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"CERTPWDLBL", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:20,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCERTPWD",gxz:"ZV9CertPwd",gxold:"OV9CertPwd",gxvar:"AV9CertPwd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9CertPwd=Value},v2z:function(Value){gx.O.ZV9CertPwd=Value},v2c:function(){gx.fn.setControlValue("vCERTPWD",gx.O.AV9CertPwd,0)},c2v:function(){gx.O.AV9CertPwd=this.val()},val:function(){return gx.fn.getControlValue("vCERTPWD")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLEVARS",grid:0};
   GXValidFnc[30]={fld:"TABLE4",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCERTPWD",gxz:"ZV9CertPwd",gxold:"OV9CertPwd",gxvar:"AV9CertPwd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9CertPwd=Value},v2z:function(Value){gx.O.ZV9CertPwd=Value},v2c:function(){gx.fn.setControlValue("vCERTPWD",gx.O.AV9CertPwd,0)},c2v:function(){gx.O.AV9CertPwd=this.val()},val:function(){return gx.fn.getControlValue("vCERTPWD")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCERTURL",gxz:"ZV10CertURL",gxold:"OV10CertURL",gxvar:"AV10CertURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10CertURL=Value},v2z:function(Value){gx.O.ZV10CertURL=Value},v2c:function(){gx.fn.setControlValue("vCERTURL",gx.O.AV10CertURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10CertURL=this.val()},val:function(){return gx.fn.getControlValue("vCERTURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV25filialempresaid",gxold:"OV25filialempresaid",gxvar:"AV25filialempresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25filialempresaid=Value},v2z:function(Value){gx.O.ZV25filialempresaid=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV25filialempresaid,0)},c2v:function(){gx.O.AV25filialempresaid=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV24filialid",gxold:"OV24filialid",gxvar:"AV24filialid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24filialid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24filialid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV24filialid,0)},c2v:function(){gx.O.AV24filialid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTRCNPJ",gxz:"ZV16strCNPJ",gxold:"OV16strCNPJ",gxvar:"AV16strCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16strCNPJ=Value},v2z:function(Value){gx.O.ZV16strCNPJ=Value},v2c:function(){gx.fn.setControlValue("vSTRCNPJ",gx.O.AV16strCNPJ,0)},c2v:function(){gx.O.AV16strCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vSTRCNPJ")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Url,isvalid:null,rgrid:[],fld:"vURL",gxz:"ZV19URL",gxold:"OV19URL",gxvar:"AV19URL",ucs:[],op:[],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19URL=Value},v2z:function(Value){gx.O.ZV19URL=Value},v2c:function(){gx.fn.setControlValue("vURL",gx.O.AV19URL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19URL=this.val()},val:function(){return gx.fn.getControlValue("vURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   this.AV15FileName = "" ;
   this.ZV15FileName = "" ;
   this.OV15FileName = "" ;
   this.AV10CertURL = "" ;
   this.ZV10CertURL = "" ;
   this.OV10CertURL = "" ;
   this.AV23FileExtension = "" ;
   this.ZV23FileExtension = "" ;
   this.OV23FileExtension = "" ;
   this.AV9CertPwd = "" ;
   this.ZV9CertPwd = "" ;
   this.OV9CertPwd = "" ;
   this.AV25filialempresaid = "" ;
   this.ZV25filialempresaid = "" ;
   this.OV25filialempresaid = "" ;
   this.AV24filialid = 0 ;
   this.ZV24filialid = 0 ;
   this.OV24filialid = 0 ;
   this.AV16strCNPJ = "" ;
   this.ZV16strCNPJ = "" ;
   this.OV16strCNPJ = "" ;
   this.AV19URL = "" ;
   this.ZV19URL = "" ;
   this.OV19URL = "" ;
   this.AV15FileName = "" ;
   this.AV10CertURL = "" ;
   this.AV23FileExtension = "" ;
   this.AV9CertPwd = "" ;
   this.AV25filialempresaid = "" ;
   this.AV24filialid = 0 ;
   this.AV16strCNPJ = "" ;
   this.AV19URL = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1245FilialCNPJ = "" ;
   this.Events = {"e132352_client": ["'CANCEL'", true] ,"e142352_client": ["'BUSCAR'", true] ,"e152352_client": ["ENTER", true] ,"e172352_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV10CertURL',fld:'vCERTURL'},{av:'AV7Split',fld:'vSPLIT'},{av:'AV23FileExtension',fld:'vFILEEXTENSION'},{av:'AV15FileName',fld:'vFILENAME'}]];
   this.EvtParms["'CANCEL'"] = [[],[]];
   this.EvtParms["'BUSCAR'"] = [[],[{av:'AV8caminho',fld:'vCAMINHO'},{av:'AV10CertURL',fld:'vCERTURL'}]];
   this.EvtParms["ENTER"] = [[{av:'AV9CertPwd',fld:'vCERTPWD'},{av:'AV10CertURL',fld:'vCERTURL'},{av:'AV16strCNPJ',fld:'vSTRCNPJ'},{av:'AV24filialid',fld:'vFILIALID',hsh:true},{av:'Gx_date',fld:'vTODAY'},{av:'AV23FileExtension',fld:'vFILEEXTENSION'}],[{av:'AV12EmpresaId',fld:'vEMPRESAID'},{av:'AV26oldURL',fld:'vOLDURL'},{av:'AV19URL',fld:'vURL'},{av:'AV10CertURL',fld:'vCERTURL'},{av:'AV9CertPwd',fld:'vCERTPWD'},{av:'AV7Split',fld:'vSPLIT'},{av:'AV5AuxSplit',fld:'vAUXSPLIT'}]];
   this.EnterCtrl = ["CONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfiguracertificado());
