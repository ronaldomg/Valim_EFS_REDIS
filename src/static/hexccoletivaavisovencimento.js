/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:14:50.45
*/
gx.evt.autoSkip = false;
gx.define('hexccoletivaavisovencimento', false, function () {
   this.ServerClass =  "hexccoletivaavisovencimento" ;
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
   };
   this.e121cr2_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", false, null, false, false);
   };
   this.e131cr2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151cr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,18];
   this.GXLastCtrlId =18;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTEXCLUSAO",gxz:"ZV23DtExclusao",gxold:"OV23DtExclusao",gxvar:"AV23DtExclusao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DtExclusao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DtExclusao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTEXCLUSAO",gx.O.AV23DtExclusao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23DtExclusao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTEXCLUSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 10 , function() {
   });
   GXValidFnc[18]={fld:"JSDATA", format:2,grid:0};
   this.AV23DtExclusao = gx.date.nullDate() ;
   this.ZV23DtExclusao = gx.date.nullDate() ;
   this.OV23DtExclusao = gx.date.nullDate() ;
   this.AV23DtExclusao = gx.date.nullDate() ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A4185VencimentoProdutoUsuarioAlt = "" ;
   this.A4182VencimentoProdutoData = gx.date.nullDate() ;
   this.A1156FilialId = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A4187VencimentoProdutoDsLote = "" ;
   this.A4188VencimentoProdutoSequencia = 0 ;
   this.Events = {"e121cr2_client": ["'FECHARMODAL'", true] ,"e131cr2_client": ["ENTER", true] ,"e151cr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHARMODAL'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV23DtExclusao',fld:'vDTEXCLUSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV24FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV12ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A4185VencimentoProdutoUsuarioAlt',fld:'VENCIMENTOPRODUTOUSUARIOALT'},{av:'A4182VencimentoProdutoData',fld:'VENCIMENTOPRODUTODATA'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV25EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A4187VencimentoProdutoDsLote',fld:'VENCIMENTOPRODUTODSLOTE'},{av:'A4188VencimentoProdutoSequencia',fld:'VENCIMENTOPRODUTOSEQUENCIA'}],[{av:'AV26SnPermissao',fld:'vSNPERMISSAO'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexccoletivaavisovencimento());
