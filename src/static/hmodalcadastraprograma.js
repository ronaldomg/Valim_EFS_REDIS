/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:42:58.18
*/
gx.evt.autoSkip = false;
gx.define('hmodalcadastraprograma', false, function () {
   this.ServerClass =  "hmodalcadastraprograma" ;
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
      this.AV13ProgramaLink=gx.fn.getControlValue("vPROGRAMALINK") ;
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
   this.e121fo2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141fo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e161fo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,16,19,22,25,28,36,37,38,41];
   this.GXLastCtrlId =41;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABUSUARIO",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV8UsuarioId",gxold:"OV8UsuarioId",gxvar:"AV8UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8UsuarioId=Value},v2z:function(Value){gx.O.ZV8UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV8UsuarioId,0)},c2v:function(){gx.O.AV8UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:32,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSENHA",gxz:"ZV9Senha",gxold:"OV9Senha",gxvar:"AV9Senha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9Senha=Value},v2z:function(Value){gx.O.ZV9Senha=Value},v2c:function(){gx.fn.setControlValue("vSENHA",gx.O.AV9Senha,0)},c2v:function(){gx.O.AV9Senha=this.val()},val:function(){return gx.fn.getControlValue("vSENHA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABCHECKS",grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNINCLUIR",gxz:"ZV17SNIncluir",gxold:"OV17SNIncluir",gxvar:"AV17SNIncluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17SNIncluir=Value},v2z:function(Value){gx.O.ZV17SNIncluir=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNINCLUIR",gx.O.AV17SNIncluir,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17SNIncluir=this.val()},val:function(){return gx.fn.getControlValue("vSNINCLUIR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXCLUIR",gxz:"ZV18SNExcluir",gxold:"OV18SNExcluir",gxvar:"AV18SNExcluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18SNExcluir=Value},v2z:function(Value){gx.O.ZV18SNExcluir=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNEXCLUIR",gx.O.AV18SNExcluir,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18SNExcluir=this.val()},val:function(){return gx.fn.getControlValue("vSNEXCLUIR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNALTERAR",gxz:"ZV19SNAlterar",gxold:"OV19SNAlterar",gxvar:"AV19SNAlterar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV19SNAlterar=Value},v2z:function(Value){gx.O.ZV19SNAlterar=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNALTERAR",gx.O.AV19SNAlterar,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19SNAlterar=this.val()},val:function(){return gx.fn.getControlValue("vSNALTERAR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCONSULTAR",gxz:"ZV20SNConsultar",gxold:"OV20SNConsultar",gxvar:"AV20SNConsultar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20SNConsultar=Value},v2z:function(Value){gx.O.ZV20SNConsultar=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCONSULTAR",gx.O.AV20SNConsultar,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20SNConsultar=this.val()},val:function(){return gx.fn.getControlValue("vSNCONSULTAR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[36]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTELA",gxz:"ZV15Tela",gxold:"OV15Tela",gxvar:"AV15Tela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Tela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15Tela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTELA",gx.O.AV15Tela,0)},c2v:function(){gx.O.AV15Tela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTELA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCADASTRA",gxz:"ZV14SNCadastra",gxold:"OV14SNCadastra",gxvar:"AV14SNCadastra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SNCadastra=Value},v2z:function(Value){gx.O.ZV14SNCadastra=Value},v2c:function(){gx.fn.setControlValue("vSNCADASTRA",gx.O.AV14SNCadastra,0)},c2v:function(){gx.O.AV14SNCadastra=this.val()},val:function(){return gx.fn.getControlValue("vSNCADASTRA")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABMSG",grid:0};
   GXValidFnc[41]={fld:"TXTMSG", format:0,grid:0};
   this.AV8UsuarioId = "" ;
   this.ZV8UsuarioId = "" ;
   this.OV8UsuarioId = "" ;
   this.AV9Senha = "" ;
   this.ZV9Senha = "" ;
   this.OV9Senha = "" ;
   this.AV17SNIncluir = "" ;
   this.ZV17SNIncluir = "" ;
   this.OV17SNIncluir = "" ;
   this.AV18SNExcluir = "" ;
   this.ZV18SNExcluir = "" ;
   this.OV18SNExcluir = "" ;
   this.AV19SNAlterar = "" ;
   this.ZV19SNAlterar = "" ;
   this.OV19SNAlterar = "" ;
   this.AV20SNConsultar = "" ;
   this.ZV20SNConsultar = "" ;
   this.OV20SNConsultar = "" ;
   this.AV15Tela = 0 ;
   this.ZV15Tela = 0 ;
   this.OV15Tela = 0 ;
   this.AV14SNCadastra = "" ;
   this.ZV14SNCadastra = "" ;
   this.OV14SNCadastra = "" ;
   this.AV8UsuarioId = "" ;
   this.AV9Senha = "" ;
   this.AV17SNIncluir = "" ;
   this.AV18SNExcluir = "" ;
   this.AV19SNAlterar = "" ;
   this.AV20SNConsultar = "" ;
   this.AV15Tela = 0 ;
   this.AV14SNCadastra = "" ;
   this.AV13ProgramaLink = "" ;
   this.A75UsuarioId = "" ;
   this.A612UsuarioSituacao = "" ;
   this.A3329UsuarioBloqueado = "" ;
   this.A604UsuarioPrivilegio = "" ;
   this.A605UsuarioSenha = "" ;
   this.A608UsuarioChave = "" ;
   this.Events = {"e121fo2_client": ["ENTER", true] ,"e141fo2_client": ["'FECHAR'", true] ,"e161fo2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV15Tela',fld:'vTELA'},{av:'AV14SNCadastra',fld:'vSNCADASTRA'}],[{av:'gx.fn.getCtrlProperty("TABMSG","Visible")',ctrl:'TABMSG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE1","Visible")',ctrl:'TABLE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABUSUARIO","Visible")',ctrl:'TABUSUARIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCHECKS","Visible")',ctrl:'TABCHECKS',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTMSG","Caption")',ctrl:'TXTMSG',prop:'Caption'}]];
   this.EvtParms["ENTER"] = [[{av:'AV15Tela',fld:'vTELA'},{av:'AV8UsuarioId',fld:'vUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'A3329UsuarioBloqueado',fld:'USUARIOBLOQUEADO'},{av:'A604UsuarioPrivilegio',fld:'USUARIOPRIVILEGIO'},{av:'A605UsuarioSenha',fld:'USUARIOSENHA'},{av:'A608UsuarioChave',fld:'USUARIOCHAVE'},{av:'AV9Senha',fld:'vSENHA'},{av:'AV10UsuarioChave',fld:'vUSUARIOCHAVE'},{av:'AV12UsuarioSenha',fld:'vUSUARIOSENHA'},{av:'AV13ProgramaLink',fld:'vPROGRAMALINK',hsh:true},{av:'AV6UsrCod',fld:'vUSRCOD'},{av:'AV17SNIncluir',fld:'vSNINCLUIR'},{av:'AV18SNExcluir',fld:'vSNEXCLUIR'},{av:'AV19SNAlterar',fld:'vSNALTERAR'},{av:'AV20SNConsultar',fld:'vSNCONSULTAR'}],[{av:'AV7SNErro',fld:'vSNERRO'},{av:'AV23GXLvl56',fld:'vGXLVL56'},{av:'AV12UsuarioSenha',fld:'vUSUARIOSENHA'},{av:'AV10UsuarioChave',fld:'vUSUARIOCHAVE'},{av:'AV11SenhaCriptografada',fld:'vSENHACRIPTOGRAFADA'},{av:'AV14SNCadastra',fld:'vSNCADASTRA'},{av:'AV15Tela',fld:'vTELA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV13ProgramaLink", "vPROGRAMALINK", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalcadastraprograma());
