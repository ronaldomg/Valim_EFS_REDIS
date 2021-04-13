/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:37:9.52
*/
gx.evt.autoSkip = false;
gx.define('hmodalentradaprovproduto', false, function () {
   this.ServerClass =  "hmodalentradaprovproduto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV13Sequencia=gx.fn.getIntegerValue("vSEQUENCIA",'.') ;
      this.AV11ProdutoDescricaoResumida=gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA") ;
      this.AV12NCMCodigo=gx.fn.getIntegerValue("vNCMCODIGO",'.') ;
      this.AV14FilialId=gx.fn.getIntegerValue("vFILIALID",'.') ;
      this.AV16CodigoBarras=gx.fn.getIntegerValue("vCODIGOBARRAS",'.') ;
      this.AV19UnidadeId=gx.fn.getControlValue("vUNIDADEID") ;
   };
   this.e141en2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151en2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXLastCtrlId =0;
   this.AV13Sequencia = 0 ;
   this.AV11ProdutoDescricaoResumida = "" ;
   this.AV12NCMCodigo = 0 ;
   this.AV14FilialId = 0 ;
   this.AV16CodigoBarras = 0 ;
   this.AV19UnidadeId = "" ;
   this.Events = {"e141en2_client": ["ENTER", true] ,"e151en2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV14FilialId',fld:'vFILIALID',hsh:true},{av:'AV10Data',fld:'vDATA'}],[{av:'AV10Data',fld:'vDATA'},{av:'AV14FilialId',fld:'vFILIALID',hsh:true}]];
   this.setVCMap("AV13Sequencia", "vSEQUENCIA", 0, "int");
   this.setVCMap("AV11ProdutoDescricaoResumida", "vPRODUTODESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("AV12NCMCodigo", "vNCMCODIGO", 0, "int");
   this.setVCMap("AV14FilialId", "vFILIALID", 0, "int");
   this.setVCMap("AV16CodigoBarras", "vCODIGOBARRAS", 0, "int");
   this.setVCMap("AV19UnidadeId", "vUNIDADEID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalentradaprovproduto());
