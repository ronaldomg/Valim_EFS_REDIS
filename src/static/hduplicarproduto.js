/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:57:52.91
*/
gx.evt.autoSkip = false;
gx.define('hduplicarproduto', false, function () {
   this.ServerClass =  "hduplicarproduto" ;
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
      this.AV12ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.AV13ProdutoId=gx.fn.getIntegerValue("vPRODUTOID",'.') ;
   };
   this.e12vh2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13vh2_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", false, null, false, false);
   };
   this.e15vh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16];
   this.GXLastCtrlId =16;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV17ProdutoDescricaoResumida",gxold:"OV17ProdutoDescricaoResumida",gxvar:"AV17ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV17ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV17ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV17ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TXTDESC", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV11ProdutoDescricao",gxold:"OV11ProdutoDescricao",gxvar:"AV11ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV11ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV11ProdutoDescricao,0)},c2v:function(){gx.O.AV11ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   this.AV17ProdutoDescricaoResumida = "" ;
   this.ZV17ProdutoDescricaoResumida = "" ;
   this.OV17ProdutoDescricaoResumida = "" ;
   this.AV11ProdutoDescricao = "" ;
   this.ZV11ProdutoDescricao = "" ;
   this.OV11ProdutoDescricao = "" ;
   this.AV17ProdutoDescricaoResumida = "" ;
   this.AV11ProdutoDescricao = "" ;
   this.AV12ProdutoEmpresaId = "" ;
   this.AV13ProdutoId = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A2960ProdutoDescricao = "" ;
   this.Events = {"e12vh2_client": ["ENTER", true] ,"e13vh2_client": ["'FECHARMODAL'", true] ,"e15vh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV11ProdutoDescricao',fld:'vPRODUTODESCRICAO'},{av:'AV12ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'AV13ProdutoId',fld:'vPRODUTOID',hsh:true}],[{av:'AV18ProdutoCadastrado',fld:'vPRODUTOCADASTRADO'},{av:'AV16Retorno',fld:'vRETORNO'}]];
   this.EvtParms["'FECHARMODAL'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV13ProdutoId", "vPRODUTOID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarproduto());
