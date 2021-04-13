/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:48:9.52
*/
gx.evt.autoSkip = false;
gx.define('halteraracertopedido', false, function () {
   this.ServerClass =  "halteraracertopedido" ;
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
   };
   this.Validv_Pedidoacedata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOACEDATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pedidoaceid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOACEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pedidoacedatanovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOACEDATANOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pedidoaceidnovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOACEIDNOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1113h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1313h2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1513h2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,26,29,31,34,36,42,48,50];
   this.GXLastCtrlId =50;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidoacedata,isvalid:null,rgrid:[],fld:"vPEDIDOACEDATA",gxz:"ZV22PedidoAceData",gxold:"OV22PedidoAceData",gxvar:"AV22PedidoAceData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PedidoAceData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22PedidoAceData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOACEDATA",gx.O.AV22PedidoAceData,0)},c2v:function(){gx.O.AV22PedidoAceData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOACEDATA")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidoaceid,isvalid:null,rgrid:[],fld:"vPEDIDOACEID",gxz:"ZV21PedidoAceId",gxold:"OV21PedidoAceId",gxvar:"AV21PedidoAceId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PedidoAceId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PedidoAceId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOACEID",gx.O.AV21PedidoAceId,0)},c2v:function(){gx.O.AV21PedidoAceId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOACEID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidoacedatanovo,isvalid:null,rgrid:[],fld:"vPEDIDOACEDATANOVO",gxz:"ZV24PedidoAceDataNovo",gxold:"OV24PedidoAceDataNovo",gxvar:"AV24PedidoAceDataNovo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PedidoAceDataNovo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24PedidoAceDataNovo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOACEDATANOVO",gx.O.AV24PedidoAceDataNovo,0)},c2v:function(){gx.O.AV24PedidoAceDataNovo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOACEDATANOVO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidoaceidnovo,isvalid:null,rgrid:[],fld:"vPEDIDOACEIDNOVO",gxz:"ZV23PedidoAceIdNovo",gxold:"OV23PedidoAceIdNovo",gxvar:"AV23PedidoAceIdNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PedidoAceIdNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PedidoAceIdNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOACEIDNOVO",gx.O.AV23PedidoAceIdNovo,0)},c2v:function(){gx.O.AV23PedidoAceIdNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOACEIDNOVO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLE5",grid:0};
   GXValidFnc[48]={fld:"JS", format:2,grid:0};
   GXValidFnc[50]={fld:"BTNHELP",grid:0};
   this.AV22PedidoAceData = gx.date.nullDate() ;
   this.ZV22PedidoAceData = gx.date.nullDate() ;
   this.OV22PedidoAceData = gx.date.nullDate() ;
   this.AV21PedidoAceId = 0 ;
   this.ZV21PedidoAceId = 0 ;
   this.OV21PedidoAceId = 0 ;
   this.AV24PedidoAceDataNovo = gx.date.nullDate() ;
   this.ZV24PedidoAceDataNovo = gx.date.nullDate() ;
   this.OV24PedidoAceDataNovo = gx.date.nullDate() ;
   this.AV23PedidoAceIdNovo = 0 ;
   this.ZV23PedidoAceIdNovo = 0 ;
   this.OV23PedidoAceIdNovo = 0 ;
   this.AV22PedidoAceData = gx.date.nullDate() ;
   this.AV21PedidoAceId = 0 ;
   this.AV24PedidoAceDataNovo = gx.date.nullDate() ;
   this.AV23PedidoAceIdNovo = 0 ;
   this.A6743PedidoAceData = gx.date.nullDate() ;
   this.A6732PedidoAceId = 0 ;
   this.Events = {"e1113h2_client": ["'FECHAR'", true] ,"e1313h2_client": ["ENTER", true] ,"e1513h2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV22PedidoAceData',fld:'vPEDIDOACEDATA'},{av:'AV21PedidoAceId',fld:'vPEDIDOACEID'},{av:'A6732PedidoAceId',fld:'PEDIDOACEID'},{av:'A6743PedidoAceData',fld:'PEDIDOACEDATA'},{av:'AV24PedidoAceDataNovo',fld:'vPEDIDOACEDATANOVO'},{av:'AV23PedidoAceIdNovo',fld:'vPEDIDOACEIDNOVO'}],[{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV30GXLvl61',fld:'vGXLVL61'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new halteraracertopedido());
