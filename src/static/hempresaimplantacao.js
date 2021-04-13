/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:26.68
*/
gx.evt.autoSkip = false;
gx.define('hempresaimplantacao', false, function () {
   this.ServerClass =  "hempresaimplantacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV14pEmpresaId=gx.fn.getControlValue("vPEMPRESAID") ;
      this.AV13pEmpresaNome=gx.fn.getControlValue("vPEMPRESANOME") ;
      this.AV15pEmpresaCPF=gx.fn.getControlValue("vPEMPRESACPF") ;
      this.AV16pEmpresaCNPJ=gx.fn.getControlValue("vPEMPRESACNPJ") ;
   };
   this.e12tb2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e13tb2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15tb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,23,25,33];
   this.GXLastCtrlId =33;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAID",gxz:"ZV5EmpresaId",gxold:"OV5EmpresaId",gxvar:"AV5EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5EmpresaId=Value},v2z:function(Value){gx.O.ZV5EmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAID",gx.O.AV5EmpresaId,0)},c2v:function(){gx.O.AV5EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESANOME",gxz:"ZV6EmpresaNome",gxold:"OV6EmpresaNome",gxvar:"AV6EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6EmpresaNome=Value},v2z:function(Value){gx.O.ZV6EmpresaNome=Value},v2c:function(){gx.fn.setControlValue("vEMPRESANOME",gx.O.AV6EmpresaNome,0)},c2v:function(){gx.O.AV6EmpresaNome=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESANOME")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACNPJ",gxz:"ZV7EmpresaCNPJ",gxold:"OV7EmpresaCNPJ",gxvar:"AV7EmpresaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7EmpresaCNPJ=Value},v2z:function(Value){gx.O.ZV7EmpresaCNPJ=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACNPJ",gx.O.AV7EmpresaCNPJ,0)},c2v:function(){gx.O.AV7EmpresaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACNPJ")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACPF",gxz:"ZV8EmpresaCPF",gxold:"OV8EmpresaCPF",gxvar:"AV8EmpresaCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8EmpresaCPF=Value},v2z:function(Value){gx.O.ZV8EmpresaCPF=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACPF",gx.O.AV8EmpresaCPF,0)},c2v:function(){gx.O.AV8EmpresaCPF=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACPF")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"JS", format:2,grid:0};
   this.AV5EmpresaId = "" ;
   this.ZV5EmpresaId = "" ;
   this.OV5EmpresaId = "" ;
   this.AV6EmpresaNome = "" ;
   this.ZV6EmpresaNome = "" ;
   this.OV6EmpresaNome = "" ;
   this.AV7EmpresaCNPJ = "" ;
   this.ZV7EmpresaCNPJ = "" ;
   this.OV7EmpresaCNPJ = "" ;
   this.AV8EmpresaCPF = "" ;
   this.ZV8EmpresaCPF = "" ;
   this.OV8EmpresaCPF = "" ;
   this.AV5EmpresaId = "" ;
   this.AV6EmpresaNome = "" ;
   this.AV7EmpresaCNPJ = "" ;
   this.AV8EmpresaCPF = "" ;
   this.AV14pEmpresaId = "" ;
   this.AV13pEmpresaNome = "" ;
   this.AV15pEmpresaCPF = "" ;
   this.AV16pEmpresaCNPJ = "" ;
   this.Events = {"e12tb2_client": ["'CANCELAR'", true] ,"e13tb2_client": ["ENTER", true] ,"e15tb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV18SnOk',fld:'vSNOK'},{av:'AV5EmpresaId',fld:'vEMPRESAID'},{av:'AV6EmpresaNome',fld:'vEMPRESANOME'},{av:'AV8EmpresaCPF',fld:'vEMPRESACPF'},{av:'AV7EmpresaCNPJ',fld:'vEMPRESACNPJ'}],[{av:'AV18SnOk',fld:'vSNOK'}]];
   this.EvtParms["ENTER"] = [[{av:'AV9SnErro',fld:'vSNERRO'},{av:'AV5EmpresaId',fld:'vEMPRESAID'},{av:'AV6EmpresaNome',fld:'vEMPRESANOME'},{av:'AV7EmpresaCNPJ',fld:'vEMPRESACNPJ'},{av:'AV8EmpresaCPF',fld:'vEMPRESACPF'},{av:'AV18SnOk',fld:'vSNOK'}],[{av:'AV18SnOk',fld:'vSNOK'},{av:'AV9SnErro',fld:'vSNERRO'},{av:'AV10I',fld:'vI'},{av:'AV11NmAux',fld:'vNMAUX'},{av:'AV12Erro',fld:'vERRO'}]];
   this.EnterCtrl = ["BTNCONFIRMAR1"];
   this.setVCMap("AV14pEmpresaId", "vPEMPRESAID", 0, "char");
   this.setVCMap("AV13pEmpresaNome", "vPEMPRESANOME", 0, "svchar");
   this.setVCMap("AV15pEmpresaCPF", "vPEMPRESACPF", 0, "char");
   this.setVCMap("AV16pEmpresaCNPJ", "vPEMPRESACNPJ", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hempresaimplantacao());
