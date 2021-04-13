/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:16.44
*/
gx.evt.autoSkip = false;
gx.define('hupload', false, function () {
   this.ServerClass =  "hupload" ;
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
      this.AV30File=gx.fn.getControlValue("vFILE") ;
      this.AV36Extensoes=gx.fn.getControlValue("vEXTENSOES") ;
      this.AV42Pasta=gx.fn.getControlValue("vPASTA") ;
      this.AV39NomeArquivoRetorno=gx.fn.getControlValue("vNOMEARQUIVORETORNO") ;
   };
   this.e16bq1_client=function()
   {
      this.clearMessages();
      this.AV30File =  this.UPLOADIFYContainer.File  ;
      this.addMessage("Erro ao copiar o arquivo \""+this.AV30File.OriginalFileName+"\". Erro: "+this.UPLOADIFYContainer.Error);
      this.refreshOutputs([{av:'AV30File',fld:'vFILE'}]);
   };
   this.e13bq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14bq2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11bq2_client=function()
   {
      this.executeServerEvent("UPLOADIFY.ONALLCOMPLETE", false, null, true, true);
   };
   this.e17bq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   this.UPLOADIFYContainer = gx.uc.getNew(this, 8, 0, "Uploadify", "UPLOADIFYContainer", "Uploadify");
   var UPLOADIFYContainer = this.UPLOADIFYContainer;
   UPLOADIFYContainer.setProp("Width", "Width", "109", "str");
   UPLOADIFYContainer.setProp("Height", "Height", "30", "str");
   UPLOADIFYContainer.setProp("Multi", "Multi", false, "bool");
   UPLOADIFYContainer.setProp("AutomaticUpload", "Automaticupload", false, "bool");
   UPLOADIFYContainer.setProp("ButtonText", "Buttontext", "Arquivo", "str");
   UPLOADIFYContainer.setProp("ButtonImage", "Buttonimage", "", "str");
   UPLOADIFYContainer.setProp("SizeLimit", "Sizelimit", 5120, "num");
   UPLOADIFYContainer.setProp("SimultaneousUploadLimit", "Simultaneousuploadlimit", "1", "str");
   UPLOADIFYContainer.setProp("Error", "Error", "", "char");
   UPLOADIFYContainer.File = '';
   UPLOADIFYContainer.addV2CFunction('AV29UploadedFiles', "vUPLOADEDFILES", 'SetUploadedFiles');
   UPLOADIFYContainer.addC2VFunction(function(UC) { UC.ParentObject.AV29UploadedFiles=UC.GetUploadedFiles();gx.fn.setControlValue("vUPLOADEDFILES",UC.ParentObject.AV29UploadedFiles); });
   UPLOADIFYContainer.addV2CFunction('AV31QueuedFiles', "vQUEUEDFILES", 'SetQueuedFiles');
   UPLOADIFYContainer.addC2VFunction(function(UC) { UC.ParentObject.AV31QueuedFiles=UC.GetQueuedFiles();gx.fn.setControlValue("vQUEUEDFILES",UC.ParentObject.AV31QueuedFiles); });
   UPLOADIFYContainer.setDynProp("FileExtension", "Fileextension", "*.*", "str");
   UPLOADIFYContainer.setProp("FileDescription", "Filedescription", "Arquivos", "str");
   UPLOADIFYContainer.setProp("UploadScript", "Uploadscript", "", "str");
   UPLOADIFYContainer.setProp("Visible", "Visible", true, "bool");
   UPLOADIFYContainer.setProp("Enabled", "Enabled", true, "boolean");
   UPLOADIFYContainer.setProp("Class", "Class", "", "char");
   UPLOADIFYContainer.setC2ShowFunction(function(UC) { UC.show(); });
   UPLOADIFYContainer.addEventHandler("OnAllComplete", this.e11bq2_client);
   UPLOADIFYContainer.addEventHandler("OnError", this.e16bq1_client);
   this.setUserControl(UPLOADIFYContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK4", format:0,grid:0};
   this.AV29UploadedFiles = [ ] ;
   this.AV36Extensoes = "" ;
   this.AV42Pasta = "" ;
   this.AV39NomeArquivoRetorno = "" ;
   this.AV30File = {} ;
   this.Events = {"e13bq2_client": ["'FECHAR'", true] ,"e14bq2_client": ["ENTER", true] ,"e11bq2_client": ["UPLOADIFY.ONALLCOMPLETE", true] ,"e17bq2_client": ["CANCEL", true] ,"e16bq1_client": ["UPLOADIFY.ONERROR", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV28Img',fld:'vIMG'},{av:'AV35NewFileName',fld:'vNEWFILENAME'}],[{av:'AV28Img',fld:'vIMG'},{av:'AV35NewFileName',fld:'vNEWFILENAME'},{av:'AV39NomeArquivoRetorno',fld:'vNOMEARQUIVORETORNO'}]];
   this.EvtParms["UPLOADIFY.ONERROR"] = [[{av:'this.UPLOADIFYContainer.File',ctrl:'UPLOADIFY',prop:'File'},{av:'this.UPLOADIFYContainer.Error',ctrl:'UPLOADIFY',prop:'Error'}],[{av:'AV30File',fld:'vFILE'}]];
   this.EvtParms["ENTER"] = [[{av:'AV31QueuedFiles',fld:'vQUEUEDFILES'}],[]];
   this.EvtParms["UPLOADIFY.ONALLCOMPLETE"] = [[{av:'AV29UploadedFiles',fld:'vUPLOADEDFILES'},{av:'AV42Pasta',fld:'vPASTA',hsh:true},{av:'AV28Img',fld:'vIMG'},{av:'AV35NewFileName',fld:'vNEWFILENAME'}],[{av:'AV47GXV1',fld:'vGXV1'},{av:'AV30File',fld:'vFILE'},{av:'AV32Path',fld:'vPATH'},{av:'AV44Upload',fld:'vUPLOAD'},{av:'AV35NewFileName',fld:'vNEWFILENAME'},{av:'AV28Img',fld:'vIMG'},{av:'AV39NomeArquivoRetorno',fld:'vNOMEARQUIVORETORNO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV30File", "vFILE", 0, "UploadifyOutput");
   this.setVCMap("AV36Extensoes", "vEXTENSOES", 0, "svchar");
   this.setVCMap("AV42Pasta", "vPASTA", 0, "svchar");
   this.setVCMap("AV39NomeArquivoRetorno", "vNOMEARQUIVORETORNO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hupload());
