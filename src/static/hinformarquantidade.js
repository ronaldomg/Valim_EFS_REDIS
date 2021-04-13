/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:11:3.11
*/
gx.evt.autoSkip = false;
gx.define('hinformarquantidade', false, function () {
   this.ServerClass =  "hinformarquantidade" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("10", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e132cj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e112cj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152cj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADE",gxz:"ZV10Quantidade",gxold:"OV10Quantidade",gxvar:"AV10Quantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10Quantidade=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10Quantidade=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQUANTIDADE",gx.O.AV10Quantidade,0)},c2v:function(){gx.O.AV10Quantidade=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQUANTIDADE",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRAS",gxz:"ZV5CodigoBarras",gxold:"OV5CodigoBarras",gxvar:"AV5CodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5CodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5CodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRAS",gx.O.AV5CodigoBarras,0)},c2v:function(){gx.O.AV5CodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRAS",'.')},nac:gx.falseFn};
   this.AV10Quantidade = 0 ;
   this.ZV10Quantidade = 0 ;
   this.OV10Quantidade = 0 ;
   this.AV5CodigoBarras = 0 ;
   this.ZV5CodigoBarras = 0 ;
   this.OV5CodigoBarras = 0 ;
   this.AV10Quantidade = 0 ;
   this.AV5CodigoBarras = 0 ;
   this.Events = {"e132cj2_client": ["ENTER", true] ,"e112cj2_client": ["'FECHAR'", true] ,"e152cj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13TpErro',fld:'vTPERRO'},{av:'AV10Quantidade',fld:'vQUANTIDADE'},{av:'AV5CodigoBarras',fld:'vCODIGOBARRAS'}],[{av:'AV13TpErro',fld:'vTPERRO'},{av:'AV11SdtProdutoAgr',fld:'vSDTPRODUTOAGR'},{av:'AV17GXV1',fld:'vGXV1'},{av:'AV12SdtProdutoAgrItem',fld:'vSDTPRODUTOAGRITEM'},{av:'AV9QtdeRestante',fld:'vQTDERESTANTE'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hinformarquantidade());
