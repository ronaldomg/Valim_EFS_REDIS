/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:32:19.16
*/
gx.evt.autoSkip = false;
gx.define('hmensagemdetalhadapermissao', false, function () {
   this.ServerClass =  "hmensagemdetalhadapermissao" ;
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
      this.AV6NomeSessao=gx.fn.getControlValue("vNOMESESSAO") ;
      this.AV7TipoPermissaoId=gx.fn.getIntegerValue("vTIPOPERMISSAOID",'.') ;
      this.AV11PermissaoConcSeq=gx.fn.getIntegerValue("vPERMISSAOCONCSEQ",'.') ;
   };
   this.e12yj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14yj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15yj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENSAGEM",gxz:"ZV5Mensagem",gxold:"OV5Mensagem",gxvar:"AV5Mensagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Mensagem=Value},v2z:function(Value){gx.O.ZV5Mensagem=Value},v2c:function(){gx.fn.setControlValue("vMENSAGEM",gx.O.AV5Mensagem,0)},c2v:function(){gx.O.AV5Mensagem=this.val()},val:function(){return gx.fn.getControlValue("vMENSAGEM")},nac:gx.falseFn};
   this.AV5Mensagem = "" ;
   this.ZV5Mensagem = "" ;
   this.OV5Mensagem = "" ;
   this.AV5Mensagem = "" ;
   this.AV6NomeSessao = "" ;
   this.AV7TipoPermissaoId = 0 ;
   this.AV11PermissaoConcSeq = 0 ;
   this.A568TipoPermissaoId = 0 ;
   this.A563TipoPermissaoMensagemSenha = "" ;
   this.Events = {"e12yj2_client": ["'FECHAR'", true] ,"e14yj2_client": ["ENTER", true] ,"e15yj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV6NomeSessao", "vNOMESESSAO", 0, "svchar");
   this.setVCMap("AV7TipoPermissaoId", "vTIPOPERMISSAOID", 0, "int");
   this.setVCMap("AV11PermissaoConcSeq", "vPERMISSAOCONCSEQ", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmensagemdetalhadapermissao());
