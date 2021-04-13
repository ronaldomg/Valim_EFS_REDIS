/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:53:3.37
*/
gx.evt.autoSkip = false;
gx.define('hblobupload', false, function () {
   this.ServerClass =  "hblobupload" ;
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
      this.AV10Extension=gx.fn.getControlValue("vEXTENSION") ;
      this.AV19Pasta=gx.fn.getControlValue("vPASTA") ;
      this.AV22isTemp=gx.fn.getControlValue("vISTEMP") ;
      this.AV17NomeArquivoRetorno=gx.fn.getControlValue("vNOMEARQUIVORETORNO") ;
   };
   this.e121zr2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131zr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151zr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,17];
   this.GXLastCtrlId =17;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"bitstr",len:1024,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBLOB",gxz:"ZV8blob",gxold:"OV8blob",gxvar:"AV8blob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8blob=Value},v2z:function(Value){gx.O.ZV8blob=Value},v2c:function(){gx.fn.setBlobValue("vBLOB",gx.O.AV8blob)},c2v:function(){gx.O.AV8blob=this.val()},val:function(){return gx.fn.getBlobValue("vBLOB")},nac:gx.falseFn};
   GXValidFnc[9]={lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILENAME",gxz:"ZV12FileName",gxold:"OV12FileName",gxvar:"AV12FileName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12FileName=Value},v2z:function(Value){gx.O.ZV12FileName=Value},v2c:function(){gx.fn.setControlValue("vFILENAME",gx.O.AV12FileName,0)},c2v:function(){gx.O.AV12FileName=this.val()},val:function(){return gx.fn.getControlValue("vFILENAME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"JS", format:2,grid:0};
   this.AV8blob = "" ;
   this.ZV8blob = "" ;
   this.OV8blob = "" ;
   this.AV12FileName = "" ;
   this.ZV12FileName = "" ;
   this.OV12FileName = "" ;
   this.AV8blob = "" ;
   this.AV12FileName = "" ;
   this.AV10Extension = "" ;
   this.AV19Pasta = "" ;
   this.AV22isTemp = false ;
   this.AV17NomeArquivoRetorno = "" ;
   this.Events = {"e121zr2_client": ["ENTER", true] ,"e131zr2_client": ["'FECHAR'", true] ,"e151zr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12FileName',fld:'vFILENAME'},{av:'AV19Pasta',fld:'vPASTA',hsh:true},{av:'AV22isTemp',fld:'vISTEMP',hsh:true},{av:'AV23EmpresaId',fld:'vEMPRESAID'},{av:'AV8blob',fld:'vBLOB'},{av:'AV15Img',fld:'vIMG'}],[{av:'AV5characterCollection',fld:'vCHARACTERCOLLECTION'},{av:'AV11fileExtension',fld:'vFILEEXTENSION'},{av:'AV13Rand',fld:'vRAND'},{av:'AV12FileName',fld:'vFILENAME'},{av:'AV15Img',fld:'vIMG'},{av:'AV25isCloud',fld:'vISCLOUD'},{av:'AV21PastaAux',fld:'vPASTAAUX'},{av:'AV17NomeArquivoRetorno',fld:'vNOMEARQUIVORETORNO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV15Img',fld:'vIMG'},{av:'AV12FileName',fld:'vFILENAME'}],[{av:'AV15Img',fld:'vIMG'},{av:'AV12FileName',fld:'vFILENAME'},{av:'AV17NomeArquivoRetorno',fld:'vNOMEARQUIVORETORNO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV10Extension", "vEXTENSION", 0, "char");
   this.setVCMap("AV19Pasta", "vPASTA", 0, "svchar");
   this.setVCMap("AV22isTemp", "vISTEMP", 0, "boolean");
   this.setVCMap("AV17NomeArquivoRetorno", "vNOMEARQUIVORETORNO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hblobupload());
