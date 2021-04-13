/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:16.13
*/
gx.evt.autoSkip = false;
gx.define('hmodalaltdatalancamentobem', false, function () {
   this.ServerClass =  "hmodalaltdatalancamentobem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV13BemEmpresaId=gx.fn.getControlValue("vBEMEMPRESAID") ;
      this.AV14BemCodigo=gx.fn.getIntegerValue("vBEMCODIGO",'.') ;
      this.AV15BemSubgrupo=gx.fn.getIntegerValue("vBEMSUBGRUPO",'.') ;
      this.AV16LancamentoBemData=gx.fn.getDateValue("vLANCAMENTOBEMDATA") ;
      this.AV17LancamentoBemSequencia=gx.fn.getIntegerValue("vLANCAMENTOBEMSEQUENCIA",'.') ;
   };
   this.e13js2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11js2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15js2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,18];
   this.GXLastCtrlId =18;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOBEMDATANOVO",gxz:"ZV11LancamentoBemDataNovo",gxold:"OV11LancamentoBemDataNovo",gxvar:"AV11LancamentoBemDataNovo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11LancamentoBemDataNovo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11LancamentoBemDataNovo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOBEMDATANOVO",gx.O.AV11LancamentoBemDataNovo,0)},c2v:function(){gx.O.AV11LancamentoBemDataNovo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOBEMDATANOVO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"JS", format:1,grid:0};
   this.AV11LancamentoBemDataNovo = gx.date.nullDate() ;
   this.ZV11LancamentoBemDataNovo = gx.date.nullDate() ;
   this.OV11LancamentoBemDataNovo = gx.date.nullDate() ;
   this.AV11LancamentoBemDataNovo = gx.date.nullDate() ;
   this.AV12EmpresaPadrao = "" ;
   this.AV13BemEmpresaId = "" ;
   this.AV14BemCodigo = 0 ;
   this.AV15BemSubgrupo = 0 ;
   this.AV16LancamentoBemData = gx.date.nullDate() ;
   this.AV17LancamentoBemSequencia = 0 ;
   this.Events = {"e13js2_client": ["ENTER", true] ,"e11js2_client": ["'FECHAR'", true] ,"e15js2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11LancamentoBemDataNovo',fld:'vLANCAMENTOBEMDATANOVO'},{av:'AV16LancamentoBemData',fld:'vLANCAMENTOBEMDATA'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'AV14BemCodigo',fld:'vBEMCODIGO'},{av:'AV15BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV17LancamentoBemSequencia',fld:'vLANCAMENTOBEMSEQUENCIA'}],[{av:'AV19tpErro',fld:'vTPERRO'},{av:'AV18MsgmErro',fld:'vMSGMERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17LancamentoBemSequencia',fld:'vLANCAMENTOBEMSEQUENCIA'},{av:'AV16LancamentoBemData',fld:'vLANCAMENTOBEMDATA'},{av:'AV15BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV14BemCodigo',fld:'vBEMCODIGO'},{av:'AV13BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV13BemEmpresaId", "vBEMEMPRESAID", 0, "char");
   this.setVCMap("AV14BemCodigo", "vBEMCODIGO", 0, "int");
   this.setVCMap("AV15BemSubgrupo", "vBEMSUBGRUPO", 0, "int");
   this.setVCMap("AV16LancamentoBemData", "vLANCAMENTOBEMDATA", 0, "date");
   this.setVCMap("AV17LancamentoBemSequencia", "vLANCAMENTOBEMSEQUENCIA", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalaltdatalancamentobem());
