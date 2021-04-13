/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:32:20.16
*/
gx.evt.autoSkip = false;
gx.define('hpermissaousuariosenha', false, function () {
   this.ServerClass =  "hpermissaousuariosenha" ;
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
      this.AV11TipoPermissaoId=gx.fn.getIntegerValue("vTIPOPERMISSAOID",'.') ;
      this.AV12PermissaoConcSeq=gx.fn.getIntegerValue("vPERMISSAOCONCSEQ",'.') ;
      this.AV13PermissaoConcNoAgrupamento=gx.fn.getIntegerValue("vPERMISSAOCONCNOAGRUPAMENTO",'.') ;
      this.AV15SnUsuario=gx.fn.getControlValue("vSNUSUARIO") ;
      this.AV21NomeSessao=gx.fn.getControlValue("vNOMESESSAO") ;
   };
   this.Validv_Usuario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12yk2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13yk2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15yk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuario,isvalid:null,rgrid:[],fld:"vUSUARIO",gxz:"ZV5Usuario",gxold:"OV5Usuario",gxvar:"AV5Usuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Usuario=Value},v2z:function(Value){gx.O.ZV5Usuario=Value},v2c:function(){gx.fn.setControlValue("vUSUARIO",gx.O.AV5Usuario,0)},c2v:function(){gx.O.AV5Usuario=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPASSWORD",gxz:"ZV6Password",gxold:"OV6Password",gxvar:"AV6Password",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6Password=Value},v2z:function(Value){gx.O.ZV6Password=Value},v2c:function(){gx.fn.setControlValue("vPASSWORD",gx.O.AV6Password,0)},c2v:function(){gx.O.AV6Password=this.val()},val:function(){return gx.fn.getControlValue("vPASSWORD")},nac:gx.falseFn};
   this.AV5Usuario = "" ;
   this.ZV5Usuario = "" ;
   this.OV5Usuario = "" ;
   this.AV6Password = "" ;
   this.ZV6Password = "" ;
   this.OV6Password = "" ;
   this.AV5Usuario = "" ;
   this.AV6Password = "" ;
   this.AV11TipoPermissaoId = 0 ;
   this.AV12PermissaoConcSeq = 0 ;
   this.AV13PermissaoConcNoAgrupamento = 0 ;
   this.AV15SnUsuario = "" ;
   this.AV21NomeSessao = "" ;
   this.A75UsuarioId = "" ;
   this.A1566UsuarioFilialEmpresaId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.A608UsuarioChave = "" ;
   this.A605UsuarioSenha = "" ;
   this.A6567PermissaoConcSnPendente = "" ;
   this.A3141PermissaoUsuarioLibId = "" ;
   this.A6565PermissaoConcNoAgrupamento = 0 ;
   this.A568TipoPermissaoId = 0 ;
   this.Events = {"e12yk2_client": ["ENTER", true] ,"e13yk2_client": ["'CANCELAR'", true] ,"e15yk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21NomeSessao',fld:'vNOMESESSAO',hsh:true},{av:'AV5Usuario',fld:'vUSUARIO'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A6565PermissaoConcNoAgrupamento',fld:'PERMISSAOCONCNOAGRUPAMENTO'},{av:'AV13PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO',hsh:true},{av:'A3141PermissaoUsuarioLibId',fld:'PERMISSAOUSUARIOLIBID'},{av:'A6567PermissaoConcSnPendente',fld:'PERMISSAOCONCSNPENDENTE'},{av:'AV17SnInsere',fld:'vSNINSERE'},{av:'AV6Password',fld:'vPASSWORD'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A608UsuarioChave',fld:'USUARIOCHAVE'},{av:'A605UsuarioSenha',fld:'USUARIOSENHA'},{av:'AV11TipoPermissaoId',fld:'vTIPOPERMISSAOID',hsh:true},{av:'AV12PermissaoConcSeq',fld:'vPERMISSAOCONCSEQ',hsh:true},{av:'A1566UsuarioFilialEmpresaId',fld:'USUARIOFILIALEMPRESAID'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'},{av:'AV16TipoPermissaoIdAux',fld:'vTIPOPERMISSAOIDAUX'},{av:'AV20EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV10SnOk',fld:'vSNOK'}],[{av:'AV8SnErro',fld:'vSNERRO'},{av:'AV22SdtIn',fld:'vSDTIN'},{av:'AV16TipoPermissaoIdAux',fld:'vTIPOPERMISSAOIDAUX'},{av:'AV9UsuarioSenhaAux',fld:'vUSUARIOSENHAAUX'},{av:'AV14SnLiberado',fld:'vSNLIBERADO'},{av:'AV11TipoPermissaoId',fld:'vTIPOPERMISSAOID',hsh:true},{av:'AV10SnOk',fld:'vSNOK'},{av:'AV28GXLvl87',fld:'vGXLVL87'},{av:'AV18UsuarioFilialEmpresaId',fld:'vUSUARIOFILIALEMPRESAID'},{av:'AV19UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV17SnInsere',fld:'vSNINSERE'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV10SnOk',fld:'vSNOK'}],[{av:'AV10SnOk',fld:'vSNOK'}]];
   this.EnterCtrl = ["BTNOK"];
   this.setVCMap("AV11TipoPermissaoId", "vTIPOPERMISSAOID", 0, "int");
   this.setVCMap("AV12PermissaoConcSeq", "vPERMISSAOCONCSEQ", 0, "int");
   this.setVCMap("AV13PermissaoConcNoAgrupamento", "vPERMISSAOCONCNOAGRUPAMENTO", 0, "int");
   this.setVCMap("AV15SnUsuario", "vSNUSUARIO", 0, "char");
   this.setVCMap("AV21NomeSessao", "vNOMESESSAO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpermissaousuariosenha());
