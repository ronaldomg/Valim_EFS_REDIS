/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:50:34.21
*/
gx.evt.autoSkip = false;
gx.define('hmensagempermissaoliberada', false, function () {
   this.ServerClass =  "hmensagempermissaoliberada" ;
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
   this.Validv_Tipopermissaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOPERMISSAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Permissaoconcseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPERMISSAOCONCSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12z12_client=function()
   {
      this.executeServerEvent("'SAIR'", false, null, false, false);
   };
   this.e15z12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16z12_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,17,21,25];
   this.GXLastCtrlId =25;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK104", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipopermissaoid,isvalid:null,rgrid:[],fld:"vTIPOPERMISSAOID",gxz:"ZV7TipoPermissaoId",gxold:"OV7TipoPermissaoId",gxvar:"AV7TipoPermissaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7TipoPermissaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7TipoPermissaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOPERMISSAOID",gx.O.AV7TipoPermissaoId,0)},c2v:function(){gx.O.AV7TipoPermissaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOPERMISSAOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPERMISSAODESCRICAOCONS",gxz:"ZV8TipoPermissaoDescricaoCons",gxold:"OV8TipoPermissaoDescricaoCons",gxvar:"AV8TipoPermissaoDescricaoCons",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8TipoPermissaoDescricaoCons=Value},v2z:function(Value){gx.O.ZV8TipoPermissaoDescricaoCons=Value},v2c:function(){gx.fn.setControlValue("vTIPOPERMISSAODESCRICAOCONS",gx.O.AV8TipoPermissaoDescricaoCons,0)},c2v:function(){gx.O.AV8TipoPermissaoDescricaoCons=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPERMISSAODESCRICAOCONS")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TXTSOLIC", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Permissaoconcseq,isvalid:null,rgrid:[],fld:"vPERMISSAOCONCSEQ",gxz:"ZV6PermissaoConcSeq",gxold:"OV6PermissaoConcSeq",gxvar:"AV6PermissaoConcSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PermissaoConcSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PermissaoConcSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPERMISSAOCONCSEQ",gx.O.AV6PermissaoConcSeq,0)},c2v:function(){gx.O.AV6PermissaoConcSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPERMISSAOCONCSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERMISSAOCONCNOAGRUPAMENTO",gxz:"ZV14PermissaoConcNoAgrupamento",gxold:"OV14PermissaoConcNoAgrupamento",gxvar:"AV14PermissaoConcNoAgrupamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PermissaoConcNoAgrupamento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PermissaoConcNoAgrupamento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPERMISSAOCONCNOAGRUPAMENTO",gx.O.AV14PermissaoConcNoAgrupamento,0)},c2v:function(){gx.O.AV14PermissaoConcNoAgrupamento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPERMISSAOCONCNOAGRUPAMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENSAGEM",gxz:"ZV5Mensagem",gxold:"OV5Mensagem",gxvar:"AV5Mensagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Mensagem=Value},v2z:function(Value){gx.O.ZV5Mensagem=Value},v2c:function(){gx.fn.setControlValue("vMENSAGEM",gx.O.AV5Mensagem,0)},c2v:function(){gx.O.AV5Mensagem=this.val()},val:function(){return gx.fn.getControlValue("vMENSAGEM")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTATUS",gxz:"ZV13Status",gxold:"OV13Status",gxvar:"AV13Status",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Status=Value},v2z:function(Value){gx.O.ZV13Status=Value},v2c:function(){gx.fn.setControlValue("vSTATUS",gx.O.AV13Status,0)},c2v:function(){gx.O.AV13Status=this.val()},val:function(){return gx.fn.getControlValue("vSTATUS")},nac:gx.falseFn};
   this.AV7TipoPermissaoId = 0 ;
   this.ZV7TipoPermissaoId = 0 ;
   this.OV7TipoPermissaoId = 0 ;
   this.AV8TipoPermissaoDescricaoCons = "" ;
   this.ZV8TipoPermissaoDescricaoCons = "" ;
   this.OV8TipoPermissaoDescricaoCons = "" ;
   this.AV6PermissaoConcSeq = 0 ;
   this.ZV6PermissaoConcSeq = 0 ;
   this.OV6PermissaoConcSeq = 0 ;
   this.AV14PermissaoConcNoAgrupamento = 0 ;
   this.ZV14PermissaoConcNoAgrupamento = 0 ;
   this.OV14PermissaoConcNoAgrupamento = 0 ;
   this.AV5Mensagem = "" ;
   this.ZV5Mensagem = "" ;
   this.OV5Mensagem = "" ;
   this.AV13Status = "" ;
   this.ZV13Status = "" ;
   this.OV13Status = "" ;
   this.AV7TipoPermissaoId = 0 ;
   this.AV8TipoPermissaoDescricaoCons = "" ;
   this.AV6PermissaoConcSeq = 0 ;
   this.AV14PermissaoConcNoAgrupamento = 0 ;
   this.AV5Mensagem = "" ;
   this.AV13Status = "" ;
   this.A6565PermissaoConcNoAgrupamento = 0 ;
   this.A568TipoPermissaoId = 0 ;
   this.A557TipoPermissaoDescricao = "" ;
   this.A6566PermissaoConcStatus = "" ;
   this.A3141PermissaoUsuarioLibId = "" ;
   this.A3142PermissaoUsuarioLibNome = "" ;
   this.A3143PermissaoConcSeq = 0 ;
   this.Events = {"e12z12_client": ["'SAIR'", true] ,"e15z12_client": ["ENTER", true] ,"e16z12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV6PermissaoConcSeq',fld:'vPERMISSAOCONCSEQ',hsh:true}],[{av:'gx.fn.getCtrlProperty("vPERMISSAOCONCSEQ","Visible")',ctrl:'vPERMISSAOCONCSEQ',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPERMISSAOCONCNOAGRUPAMENTO","Visible")',ctrl:'vPERMISSAOCONCNOAGRUPAMENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTSOLIC","Caption")',ctrl:'TXTSOLIC',prop:'Caption'}]];
   this.EvtParms["'SAIR'"] = [[{av:'AV7TipoPermissaoId',fld:'vTIPOPERMISSAOID'}],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmensagempermissaoliberada());
