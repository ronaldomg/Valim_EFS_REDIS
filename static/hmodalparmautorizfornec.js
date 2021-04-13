/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:15:36.87
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmautorizfornec', false, function () {
   this.ServerClass =  "hmodalparmautorizfornec" ;
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
      this.AV6EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.e15sp1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms8",[this.AV6EmpresaLogadaId, "COM", "PRIMEIRAASSAUT", "SEGUNDAASSAUT", "TERCEIRAASSAUT", "QUARTAASSAUT", "PRIMEIROCARAUT", "SEGUNDOCARAUT", "TERCEIROCARAUT", "QUARTOCARAUT"]), []);
      this.refreshOutputs([]);
   };
   this.e12sp2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13sp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16sp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,23,25,28,30,33,35,38,40,43,45,51,58];
   this.GXLastCtrlId =58;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIMEIRAASS",gxz:"ZV11PrimeiraAss",gxold:"OV11PrimeiraAss",gxvar:"AV11PrimeiraAss",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PrimeiraAss=Value},v2z:function(Value){gx.O.ZV11PrimeiraAss=Value},v2c:function(){gx.fn.setControlValue("vPRIMEIRAASS",gx.O.AV11PrimeiraAss,0)},c2v:function(){gx.O.AV11PrimeiraAss=this.val()},val:function(){return gx.fn.getControlValue("vPRIMEIRAASS")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSEGUNDAASS",gxz:"ZV12SegundaAss",gxold:"OV12SegundaAss",gxvar:"AV12SegundaAss",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12SegundaAss=Value},v2z:function(Value){gx.O.ZV12SegundaAss=Value},v2c:function(){gx.fn.setControlValue("vSEGUNDAASS",gx.O.AV12SegundaAss,0)},c2v:function(){gx.O.AV12SegundaAss=this.val()},val:function(){return gx.fn.getControlValue("vSEGUNDAASS")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERCEIRAASS",gxz:"ZV13TerceiraAss",gxold:"OV13TerceiraAss",gxvar:"AV13TerceiraAss",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13TerceiraAss=Value},v2z:function(Value){gx.O.ZV13TerceiraAss=Value},v2c:function(){gx.fn.setControlValue("vTERCEIRAASS",gx.O.AV13TerceiraAss,0)},c2v:function(){gx.O.AV13TerceiraAss=this.val()},val:function(){return gx.fn.getControlValue("vTERCEIRAASS")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUARTAASS",gxz:"ZV14QuartaAss",gxold:"OV14QuartaAss",gxvar:"AV14QuartaAss",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14QuartaAss=Value},v2z:function(Value){gx.O.ZV14QuartaAss=Value},v2c:function(){gx.fn.setControlValue("vQUARTAASS",gx.O.AV14QuartaAss,0)},c2v:function(){gx.O.AV14QuartaAss=this.val()},val:function(){return gx.fn.getControlValue("vQUARTAASS")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIMEIROCARGO",gxz:"ZV15PrimeiroCargo",gxold:"OV15PrimeiroCargo",gxvar:"AV15PrimeiroCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PrimeiroCargo=Value},v2z:function(Value){gx.O.ZV15PrimeiroCargo=Value},v2c:function(){gx.fn.setControlValue("vPRIMEIROCARGO",gx.O.AV15PrimeiroCargo,0)},c2v:function(){gx.O.AV15PrimeiroCargo=this.val()},val:function(){return gx.fn.getControlValue("vPRIMEIROCARGO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSEGUNDOCARGO",gxz:"ZV16SegundoCargo",gxold:"OV16SegundoCargo",gxvar:"AV16SegundoCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SegundoCargo=Value},v2z:function(Value){gx.O.ZV16SegundoCargo=Value},v2c:function(){gx.fn.setControlValue("vSEGUNDOCARGO",gx.O.AV16SegundoCargo,0)},c2v:function(){gx.O.AV16SegundoCargo=this.val()},val:function(){return gx.fn.getControlValue("vSEGUNDOCARGO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERCEIROCARGO",gxz:"ZV17TerceiroCargo",gxold:"OV17TerceiroCargo",gxvar:"AV17TerceiroCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TerceiroCargo=Value},v2z:function(Value){gx.O.ZV17TerceiroCargo=Value},v2c:function(){gx.fn.setControlValue("vTERCEIROCARGO",gx.O.AV17TerceiroCargo,0)},c2v:function(){gx.O.AV17TerceiroCargo=this.val()},val:function(){return gx.fn.getControlValue("vTERCEIROCARGO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUARTOCARGO",gxz:"ZV18QuartoCargo",gxold:"OV18QuartoCargo",gxvar:"AV18QuartoCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18QuartoCargo=Value},v2z:function(Value){gx.O.ZV18QuartoCargo=Value},v2c:function(){gx.fn.setControlValue("vQUARTOCARGO",gx.O.AV18QuartoCargo,0)},c2v:function(){gx.O.AV18QuartoCargo=this.val()},val:function(){return gx.fn.getControlValue("vQUARTOCARGO")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE1",grid:0};
   GXValidFnc[58]={fld:"BTNOBS",grid:0};
   this.AV11PrimeiraAss = "" ;
   this.ZV11PrimeiraAss = "" ;
   this.OV11PrimeiraAss = "" ;
   this.AV12SegundaAss = "" ;
   this.ZV12SegundaAss = "" ;
   this.OV12SegundaAss = "" ;
   this.AV13TerceiraAss = "" ;
   this.ZV13TerceiraAss = "" ;
   this.OV13TerceiraAss = "" ;
   this.AV14QuartaAss = "" ;
   this.ZV14QuartaAss = "" ;
   this.OV14QuartaAss = "" ;
   this.AV15PrimeiroCargo = "" ;
   this.ZV15PrimeiroCargo = "" ;
   this.OV15PrimeiroCargo = "" ;
   this.AV16SegundoCargo = "" ;
   this.ZV16SegundoCargo = "" ;
   this.OV16SegundoCargo = "" ;
   this.AV17TerceiroCargo = "" ;
   this.ZV17TerceiroCargo = "" ;
   this.OV17TerceiroCargo = "" ;
   this.AV18QuartoCargo = "" ;
   this.ZV18QuartoCargo = "" ;
   this.OV18QuartoCargo = "" ;
   this.AV11PrimeiraAss = "" ;
   this.AV12SegundaAss = "" ;
   this.AV13TerceiraAss = "" ;
   this.AV14QuartaAss = "" ;
   this.AV15PrimeiroCargo = "" ;
   this.AV16SegundoCargo = "" ;
   this.AV17TerceiroCargo = "" ;
   this.AV18QuartoCargo = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12sp2_client": ["ENTER", true] ,"e13sp2_client": ["'FECHAR'", true] ,"e16sp2_client": ["CANCEL", true] ,"e15sp1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11PrimeiraAss',fld:'vPRIMEIRAASS'},{av:'AV12SegundaAss',fld:'vSEGUNDAASS'},{av:'AV13TerceiraAss',fld:'vTERCEIRAASS'},{av:'AV14QuartaAss',fld:'vQUARTAASS'},{av:'AV15PrimeiroCargo',fld:'vPRIMEIROCARGO'},{av:'AV16SegundoCargo',fld:'vSEGUNDOCARGO'},{av:'AV17TerceiroCargo',fld:'vTERCEIROCARGO'},{av:'AV18QuartoCargo',fld:'vQUARTOCARGO'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV19tpErro',fld:'vTPERRO'},{av:'AV11PrimeiraAss',fld:'vPRIMEIRAASS'},{av:'AV12SegundaAss',fld:'vSEGUNDAASS'},{av:'AV13TerceiraAss',fld:'vTERCEIRAASS'},{av:'AV14QuartaAss',fld:'vQUARTAASS'},{av:'AV15PrimeiroCargo',fld:'vPRIMEIROCARGO'},{av:'AV16SegundoCargo',fld:'vSEGUNDOCARGO'},{av:'AV17TerceiroCargo',fld:'vTERCEIROCARGO'},{av:'AV18QuartoCargo',fld:'vQUARTOCARGO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmautorizfornec());
