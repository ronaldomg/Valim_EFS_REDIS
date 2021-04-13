/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:33:37.49
*/
gx.evt.autoSkip = false;
gx.define('hregistrarprevendadescprod', false, function () {
   this.ServerClass =  "hregistrarprevendadescprod" ;
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
      this.AV12ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
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
   this.e12yz2_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", false, null, false, false);
   };
   this.e14yz2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15yz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV13ProdutoId",gxold:"OV13ProdutoId",gxvar:"AV13ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV13ProdutoId,0)},c2v:function(){gx.O.AV13ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV11ProdutoDescricao",gxold:"OV11ProdutoDescricao",gxvar:"AV11ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV11ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV11ProdutoDescricao,0)},c2v:function(){gx.O.AV11ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   this.AV13ProdutoId = 0 ;
   this.ZV13ProdutoId = 0 ;
   this.OV13ProdutoId = 0 ;
   this.AV11ProdutoDescricao = "" ;
   this.ZV11ProdutoDescricao = "" ;
   this.OV11ProdutoDescricao = "" ;
   this.AV13ProdutoId = 0 ;
   this.AV11ProdutoDescricao = "" ;
   this.AV12ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A2960ProdutoDescricao = "" ;
   this.Events = {"e12yz2_client": ["'FECHARMODAL'", true] ,"e14yz2_client": ["ENTER", true] ,"e15yz2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHARMODAL'"] = [[],[]];
   this.setVCMap("AV12ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarprevendadescprod());
