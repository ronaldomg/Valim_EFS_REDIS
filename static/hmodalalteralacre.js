/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:34:3.42
*/
gx.evt.autoSkip = false;
gx.define('hmodalalteralacre', false, function () {
   this.ServerClass =  "hmodalalteralacre" ;
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
      this.AV25SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
      this.AV17SaidaId=gx.fn.getIntegerValue("vSAIDAID",'.') ;
      this.AV15SaidaVolumeTranspSeq=gx.fn.getIntegerValue("vSAIDAVOLUMETRANSPSEQ",'.') ;
      this.AV16Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.Validv_Saidalacresseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDALACRESSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      this.AV26SnErro =  "N"  ;
      if ( (""==this.AV14SaidaLacresNumero) )
      {
         this.addMessage("Informe Numero");
         gx.fn.usrSetFocus("vSAIDALACRESNUMERO") ;
         this.AV26SnErro =  "S"  ;
      }
   };
   this.e1212q2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1312q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1512q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Saidalacresseq,isvalid:null,rgrid:[],fld:"vSAIDALACRESSEQ",gxz:"ZV13SaidaLacresSeq",gxold:"OV13SaidaLacresSeq",gxvar:"AV13SaidaLacresSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13SaidaLacresSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13SaidaLacresSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDALACRESSEQ",gx.O.AV13SaidaLacresSeq,0)},c2v:function(){gx.O.AV13SaidaLacresSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDALACRESSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDALACRESNUMERO",gxz:"ZV14SaidaLacresNumero",gxold:"OV14SaidaLacresNumero",gxvar:"AV14SaidaLacresNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SaidaLacresNumero=Value},v2z:function(Value){gx.O.ZV14SaidaLacresNumero=Value},v2c:function(){gx.fn.setControlValue("vSAIDALACRESNUMERO",gx.O.AV14SaidaLacresNumero,0)},c2v:function(){gx.O.AV14SaidaLacresNumero=this.val()},val:function(){return gx.fn.getControlValue("vSAIDALACRESNUMERO")},nac:gx.falseFn};
   this.AV13SaidaLacresSeq = 0 ;
   this.ZV13SaidaLacresSeq = 0 ;
   this.OV13SaidaLacresSeq = 0 ;
   this.AV14SaidaLacresNumero = "" ;
   this.ZV14SaidaLacresNumero = "" ;
   this.OV14SaidaLacresNumero = "" ;
   this.AV13SaidaLacresSeq = 0 ;
   this.AV14SaidaLacresNumero = "" ;
   this.AV25SaidaEmpresaId = "" ;
   this.AV17SaidaId = 0 ;
   this.AV15SaidaVolumeTranspSeq = 0 ;
   this.AV16Modo = "" ;
   this.A6311SaidaLacresSeq = 0 ;
   this.A6310SaidaVolumeTranspSeq = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A6292SaidaLacresNumero = "" ;
   this.AV26SnErro = "" ;
   this.Events = {"e1212q2_client": ["ENTER", true] ,"e1312q2_client": ["'FECHAR'", true] ,"e1512q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV26SnErro',fld:'vSNERRO'},{av:'AV25SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV17SaidaId',fld:'vSAIDAID'},{av:'AV19SaidaVolumeTranspQtde',fld:'vSAIDAVOLUMETRANSPQTDE'},{av:'AV20SaidaVolumeTranspEspecie',fld:'vSAIDAVOLUMETRANSPESPECIE'},{av:'AV21SaidaVolumeTranspMarca',fld:'vSAIDAVOLUMETRANSPMARCA'},{av:'AV22SaidaVolumeTranspNumero',fld:'vSAIDAVOLUMETRANSPNUMERO'},{av:'AV23SaidaVolumeTranspPesoLiq',fld:'vSAIDAVOLUMETRANSPPESOLIQ'},{av:'AV24SaidaVolumeTranspPesoBruto',fld:'vSAIDAVOLUMETRANSPPESOBRUTO'},{av:'AV14SaidaLacresNumero',fld:'vSAIDALACRESNUMERO'},{av:'AV13SaidaLacresSeq',fld:'vSAIDALACRESSEQ'},{av:'AV15SaidaVolumeTranspSeq',fld:'vSAIDAVOLUMETRANSPSEQ'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV16Modo',fld:'vMODO'}],[{av:'AV29ContLacres',fld:'vCONTLACRES'},{av:'AV27SnInseriu',fld:'vSNINSERIU'},{av:'AV28SnAlterou',fld:'vSNALTEROU'},{av:'AV26SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16Modo',fld:'vMODO'},{av:'AV13SaidaLacresSeq',fld:'vSAIDALACRESSEQ'},{av:'AV15SaidaVolumeTranspSeq',fld:'vSAIDAVOLUMETRANSPSEQ'},{av:'AV17SaidaId',fld:'vSAIDAID'},{av:'AV25SaidaEmpresaId',fld:'vSAIDAEMPRESAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV25SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV17SaidaId", "vSAIDAID", 0, "int");
   this.setVCMap("AV15SaidaVolumeTranspSeq", "vSAIDAVOLUMETRANSPSEQ", 0, "int");
   this.setVCMap("AV16Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalalteralacre());
