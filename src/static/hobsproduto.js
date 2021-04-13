/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:38.49
*/
gx.evt.autoSkip = false;
gx.define('hobsproduto', false, function () {
   this.ServerClass =  "hobsproduto" ;
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
      this.AV14SolicitacaoNumero=gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.') ;
      this.AV15SolicitacaoItemSeq=gx.fn.getIntegerValue("vSOLICITACAOITEMSEQ",'.') ;
      this.AV13ProdutoId=gx.fn.getIntegerValue("vPRODUTOID",'.') ;
   };
   this.e12pi2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14pi2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSPRODUTO",gxz:"ZV11ObsProduto",gxold:"OV11ObsProduto",gxvar:"AV11ObsProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ObsProduto=Value},v2z:function(Value){gx.O.ZV11ObsProduto=Value},v2c:function(){gx.fn.setControlValue("vOBSPRODUTO",gx.O.AV11ObsProduto,0)},c2v:function(){gx.O.AV11ObsProduto=this.val()},val:function(){return gx.fn.getControlValue("vOBSPRODUTO")},nac:gx.falseFn};
   this.AV11ObsProduto = "" ;
   this.ZV11ObsProduto = "" ;
   this.OV11ObsProduto = "" ;
   this.AV11ObsProduto = "" ;
   this.AV14SolicitacaoNumero = 0 ;
   this.AV15SolicitacaoItemSeq = 0 ;
   this.AV13ProdutoId = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3828ProdutoObservacao = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4049SolicitacaoItemObservacao = "" ;
   this.Events = {"e12pi2_client": ["ENTER", true] ,"e14pi2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BUTTON2"];
   this.setVCMap("AV14SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV15SolicitacaoItemSeq", "vSOLICITACAOITEMSEQ", 0, "int");
   this.setVCMap("AV13ProdutoId", "vPRODUTOID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hobsproduto());
