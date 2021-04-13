/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:27.15
*/
gx.evt.autoSkip = false;
gx.define('hupdateimagem', false, function () {
   this.ServerClass =  "hupdateimagem" ;
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
      this.AV14NomeArquivoRetorno=gx.fn.getControlValue("vNOMEARQUIVORETORNO") ;
   };
   this.e1227i2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1327i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1527i2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,19];
   this.GXLastCtrlId =19;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"bitstr",len:1024,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBLOB",gxz:"ZV5blob",gxold:"OV5blob",gxvar:"AV5blob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5blob=Value},v2z:function(Value){gx.O.ZV5blob=Value},v2c:function(){gx.fn.setBlobValue("vBLOB",gx.O.AV5blob)},c2v:function(){gx.O.AV5blob=this.val()},val:function(){return gx.fn.getBlobValue("vBLOB")},nac:gx.falseFn};
   GXValidFnc[9]={lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILENAME",gxz:"ZV10FileName",gxold:"OV10FileName",gxvar:"AV10FileName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10FileName=Value},v2z:function(Value){gx.O.ZV10FileName=Value},v2c:function(){gx.fn.setControlValue("vFILENAME",gx.O.AV10FileName,0)},c2v:function(){gx.O.AV10FileName=this.val()},val:function(){return gx.fn.getControlValue("vFILENAME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"JS", format:2,grid:0};
   this.AV5blob = "" ;
   this.ZV5blob = "" ;
   this.OV5blob = "" ;
   this.AV10FileName = "" ;
   this.ZV10FileName = "" ;
   this.OV10FileName = "" ;
   this.AV5blob = "" ;
   this.AV10FileName = "" ;
   this.AV14NomeArquivoRetorno = "" ;
   this.Events = {"e1227i2_client": ["ENTER", true] ,"e1327i2_client": ["'FECHAR'", true] ,"e1527i2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10FileName',fld:'vFILENAME'},{av:'AV5blob',fld:'vBLOB'},{av:'this.AV11HttpRequest.Baseurl',ctrl:'vHTTPREQUEST',prop:'Baseurl'}],[{av:'AV6characterCollection',fld:'vCHARACTERCOLLECTION'},{av:'AV10FileName',fld:'vFILENAME'},{av:'AV18Url',fld:'vURL'},{av:'AV14NomeArquivoRetorno',fld:'vNOMEARQUIVORETORNO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV14NomeArquivoRetorno',fld:'vNOMEARQUIVORETORNO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14NomeArquivoRetorno", "vNOMEARQUIVORETORNO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hupdateimagem());
