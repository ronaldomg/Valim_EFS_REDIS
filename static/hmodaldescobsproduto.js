/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:1:29.67
*/
gx.evt.autoSkip = false;
gx.define('hmodaldescobsproduto', false, function () {
   this.ServerClass =  "hmodaldescobsproduto" ;
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
   };
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12oy2_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", false, null, false, false);
   };
   this.e14oy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15oy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,23,24];
   this.GXLastCtrlId =24;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE4",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV11ProdutoId",gxold:"OV11ProdutoId",gxvar:"AV11ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV11ProdutoId,0)},c2v:function(){gx.O.AV11ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV12ProdutoDescricaoResumida",gxold:"OV12ProdutoDescricaoResumida",gxvar:"AV12ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV12ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV12ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV12ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"DESCOBS", format:0,grid:0};
   GXValidFnc[22]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[23]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOOBSERVACAO",gxz:"ZV13ProdutoObservacao",gxold:"OV13ProdutoObservacao",gxvar:"AV13ProdutoObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ProdutoObservacao=Value},v2z:function(Value){gx.O.ZV13ProdutoObservacao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOOBSERVACAO",gx.O.AV13ProdutoObservacao,0)},c2v:function(){gx.O.AV13ProdutoObservacao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"DIV2", format:2,grid:0};
   this.AV11ProdutoId = 0 ;
   this.ZV11ProdutoId = 0 ;
   this.OV11ProdutoId = 0 ;
   this.AV12ProdutoDescricaoResumida = "" ;
   this.ZV12ProdutoDescricaoResumida = "" ;
   this.OV12ProdutoDescricaoResumida = "" ;
   this.AV13ProdutoObservacao = "" ;
   this.ZV13ProdutoObservacao = "" ;
   this.OV13ProdutoObservacao = "" ;
   this.AV11ProdutoId = 0 ;
   this.AV12ProdutoDescricaoResumida = "" ;
   this.AV13ProdutoObservacao = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A2960ProdutoDescricao = "" ;
   this.A3828ProdutoObservacao = "" ;
   this.Events = {"e12oy2_client": ["'FECHARMODAL'", true] ,"e14oy2_client": ["ENTER", true] ,"e15oy2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHARMODAL'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaldescobsproduto());
