/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:51:49.67
*/
gx.evt.autoSkip = false;
gx.define('hcadastrarmenu', false, function () {
   this.ServerClass =  "hcadastrarmenu" ;
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
      this.AV8MenuNivel1Id=gx.fn.getIntegerValue("vMENUNIVEL1ID",'.') ;
      this.AV9MenuNivel2Id=gx.fn.getIntegerValue("vMENUNIVEL2ID",'.') ;
      this.AV10MenuNivel3Id=gx.fn.getIntegerValue("vMENUNIVEL3ID",'.') ;
   };
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121zn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131zn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141zn2_client=function()
   {
      this.executeServerEvent("VUSUARIOID.ISVALID", true, null, false, true);
   };
   this.e151zn2_client=function()
   {
      this.executeServerEvent("VGRUPOID.ISVALID", true, null, false, true);
   };
   this.e171zn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,12,15,17,18,22,26,30,34,43,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:'e141zn2_client',rgrid:[],fld:"vUSUARIOID",gxz:"ZV21UsuarioId",gxold:"OV21UsuarioId",gxvar:"AV21UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21UsuarioId=Value},v2z:function(Value){gx.O.ZV21UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV21UsuarioId,0)},c2v:function(){gx.O.AV21UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[12]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV22UsuarioNome",gxold:"OV22UsuarioNome",gxvar:"AV22UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22UsuarioNome=Value},v2z:function(Value){gx.O.ZV22UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV22UsuarioNome,0)},c2v:function(){gx.O.AV22UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoid,isvalid:'e151zn2_client',rgrid:[],fld:"vGRUPOID",gxz:"ZV5GrupoId",gxold:"OV5GrupoId",gxvar:"AV5GrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5GrupoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5GrupoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOID",gx.O.AV5GrupoId,0)},c2v:function(){gx.O.AV5GrupoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPONOME",gxz:"ZV6GrupoNome",gxold:"OV6GrupoNome",gxvar:"AV6GrupoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6GrupoNome=Value},v2z:function(Value){gx.O.ZV6GrupoNome=Value},v2c:function(){gx.fn.setControlValue("vGRUPONOME",gx.O.AV6GrupoNome,0)},c2v:function(){gx.O.AV6GrupoNome=this.val()},val:function(){return gx.fn.getControlValue("vGRUPONOME")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCONSULTAR",gxz:"ZV15SnConsultar",gxold:"OV15SnConsultar",gxvar:"AV15SnConsultar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15SnConsultar=Value},v2z:function(Value){gx.O.ZV15SnConsultar=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCONSULTAR",gx.O.AV15SnConsultar,"S")},c2v:function(){gx.O.AV15SnConsultar=this.val()},val:function(){return gx.fn.getControlValue("vSNCONSULTAR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNALTERAR",gxz:"ZV13SnAlterar",gxold:"OV13SnAlterar",gxvar:"AV13SnAlterar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV13SnAlterar=Value},v2z:function(Value){gx.O.ZV13SnAlterar=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNALTERAR",gx.O.AV13SnAlterar,"S")},c2v:function(){gx.O.AV13SnAlterar=this.val()},val:function(){return gx.fn.getControlValue("vSNALTERAR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXCLUIR",gxz:"ZV17SnExcluir",gxold:"OV17SnExcluir",gxvar:"AV17SnExcluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17SnExcluir=Value},v2z:function(Value){gx.O.ZV17SnExcluir=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNEXCLUIR",gx.O.AV17SnExcluir,"S")},c2v:function(){gx.O.AV17SnExcluir=this.val()},val:function(){return gx.fn.getControlValue("vSNEXCLUIR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNINCLUIR",gxz:"ZV18SnIncluir",gxold:"OV18SnIncluir",gxvar:"AV18SnIncluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18SnIncluir=Value},v2z:function(Value){gx.O.ZV18SnIncluir=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNINCLUIR",gx.O.AV18SnIncluir,"S")},c2v:function(){gx.O.AV18SnIncluir=this.val()},val:function(){return gx.fn.getControlValue("vSNINCLUIR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[43]={fld:"PROMPT_USUARIOID",grid:0};
   GXValidFnc[44]={fld:"PROMPT_GRUPOID",grid:0};
   this.AV21UsuarioId = "" ;
   this.ZV21UsuarioId = "" ;
   this.OV21UsuarioId = "" ;
   this.AV22UsuarioNome = "" ;
   this.ZV22UsuarioNome = "" ;
   this.OV22UsuarioNome = "" ;
   this.AV5GrupoId = 0 ;
   this.ZV5GrupoId = 0 ;
   this.OV5GrupoId = 0 ;
   this.AV6GrupoNome = "" ;
   this.ZV6GrupoNome = "" ;
   this.OV6GrupoNome = "" ;
   this.AV15SnConsultar = "" ;
   this.ZV15SnConsultar = "" ;
   this.OV15SnConsultar = "" ;
   this.AV13SnAlterar = "" ;
   this.ZV13SnAlterar = "" ;
   this.OV13SnAlterar = "" ;
   this.AV17SnExcluir = "" ;
   this.ZV17SnExcluir = "" ;
   this.OV17SnExcluir = "" ;
   this.AV18SnIncluir = "" ;
   this.ZV18SnIncluir = "" ;
   this.OV18SnIncluir = "" ;
   this.AV21UsuarioId = "" ;
   this.AV22UsuarioNome = "" ;
   this.AV5GrupoId = 0 ;
   this.AV6GrupoNome = "" ;
   this.AV15SnConsultar = "" ;
   this.AV13SnAlterar = "" ;
   this.AV17SnExcluir = "" ;
   this.AV18SnIncluir = "" ;
   this.AV8MenuNivel1Id = 0 ;
   this.AV9MenuNivel2Id = 0 ;
   this.AV10MenuNivel3Id = 0 ;
   this.A244GrupoId = 0 ;
   this.A75UsuarioId = "" ;
   this.Events = {"e121zn2_client": ["ENTER", true] ,"e131zn2_client": ["'FECHAR'", true] ,"e141zn2_client": ["VUSUARIOID.ISVALID", true] ,"e151zn2_client": ["VGRUPOID.ISVALID", true] ,"e171zn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV5GrupoId',fld:'vGRUPOID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A244GrupoId',fld:'GRUPOID'},{av:'AV8MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true},{av:'AV9MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'AV10MenuNivel3Id',fld:'vMENUNIVEL3ID',hsh:true},{av:'AV13SnAlterar',fld:'vSNALTERAR'},{av:'AV15SnConsultar',fld:'vSNCONSULTAR'},{av:'AV17SnExcluir',fld:'vSNEXCLUIR'},{av:'AV18SnIncluir',fld:'vSNINCLUIR'}],[{av:'AV16SNErro',fld:'vSNERRO'},{av:'AV27GXLvl30',fld:'vGXLVL30'},{av:'AV28GXLvl42',fld:'vGXLVL42'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VUSUARIOID.ISVALID"] = [[{av:'AV21UsuarioId',fld:'vUSUARIOID'}],[{av:'AV22UsuarioNome',fld:'vUSUARIONOME'}]];
   this.EvtParms["VGRUPOID.ISVALID"] = [[{av:'AV5GrupoId',fld:'vGRUPOID'}],[{av:'AV6GrupoNome',fld:'vGRUPONOME'}]];
   this.setPrompt("PROMPT_USUARIOID", [11]);
   this.setPrompt("PROMPT_GRUPOID", [17]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV8MenuNivel1Id", "vMENUNIVEL1ID", 0, "int");
   this.setVCMap("AV9MenuNivel2Id", "vMENUNIVEL2ID", 0, "int");
   this.setVCMap("AV10MenuNivel3Id", "vMENUNIVEL3ID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastrarmenu());
