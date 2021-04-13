/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:56:53.5
*/
gx.evt.autoSkip = false;
gx.define('hregistrarprevendaimagem', false, function () {
   this.ServerClass =  "hregistrarprevendaimagem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("11", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV6ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.AV10path=gx.fn.getControlValue("vPATH") ;
      this.AV12SnFecharAut=gx.fn.getControlValue("vSNFECHARAUT") ;
   };
   this.e1120f2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1420f2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1520f2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,20];
   this.GXLastCtrlId =20;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV5ProdutoId",gxold:"OV5ProdutoId",gxvar:"AV5ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV5ProdutoId,0)},c2v:function(){gx.O.AV5ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV7ProdutoDescricaoResumida",gxold:"OV7ProdutoDescricaoResumida",gxvar:"AV7ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV7ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV7ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV7ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM",gxz:"ZV11Imagem",gxold:"OV11Imagem",gxvar:"AV11Imagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11Imagem=Value},v2z:function(Value){gx.O.ZV11Imagem=Value},v2c:function(){gx.fn.setMultimediaValue("vIMAGEM",gx.O.AV11Imagem,gx.O.AV15Imagem_GXI)},c2v:function(){gx.O.AV15Imagem_GXI=this.val_GXI();gx.O.AV11Imagem=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEM")},val_GXI:function(){return gx.fn.getControlValue("vIMAGEM_GXI")}, gxvar_GXI:'AV15Imagem_GXI',nac:gx.falseFn};
   this.AV5ProdutoId = 0 ;
   this.ZV5ProdutoId = 0 ;
   this.OV5ProdutoId = 0 ;
   this.AV7ProdutoDescricaoResumida = "" ;
   this.ZV7ProdutoDescricaoResumida = "" ;
   this.OV7ProdutoDescricaoResumida = "" ;
   this.AV15Imagem_GXI = "" ;
   this.AV11Imagem = "" ;
   this.ZV11Imagem = "" ;
   this.OV11Imagem = "" ;
   this.AV5ProdutoId = 0 ;
   this.AV7ProdutoDescricaoResumida = "" ;
   this.AV11Imagem = "" ;
   this.AV6ProdutoEmpresaId = "" ;
   this.AV10path = "" ;
   this.AV12SnFecharAut = "" ;
   this.Events = {"e1120f2_client": ["'FECHAR'", true] ,"e1420f2_client": ["ENTER", true] ,"e1520f2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV6ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV10path", "vPATH", 0, "svchar");
   this.setVCMap("AV12SnFecharAut", "vSNFECHARAUT", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarprevendaimagem());
