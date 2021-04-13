/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:45:30.42
*/
gx.evt.autoSkip = false;
gx.define('hmodaldocmtosaida', false, function () {
   this.ServerClass =  "hmodaldocmtosaida" ;
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
   };
   this.Validv_Saidanodocumento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDANODOCUMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121g32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141g32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidanodocumento,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV16SaidaNoDocumento",gxold:"OV16SaidaNoDocumento",gxvar:"AV16SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16SaidaNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV16SaidaNoDocumento,0)},c2v:function(){gx.O.AV16SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",'.')},nac:gx.falseFn};
   this.AV16SaidaNoDocumento = 0 ;
   this.ZV16SaidaNoDocumento = 0 ;
   this.OV16SaidaNoDocumento = 0 ;
   this.AV16SaidaNoDocumento = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A5960SaidaNoDocumento = 0 ;
   this.A5971SaidaFilialId = 0 ;
   this.A5962SaidaSerie = "" ;
   this.A7718SaidaInutilizadaNumero = 0 ;
   this.A7717SaidaInutilizadaSerie = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.Events = {"e121g32_client": ["ENTER", true] ,"e141g32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV15SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A5971SaidaFilialId',fld:'SAIDAFILIALID'},{av:'AV17SaidaFilialId',fld:'vSAIDAFILIALID'},{av:'A5962SaidaSerie',fld:'SAIDASERIE'},{av:'AV18SaidaSerie',fld:'vSAIDASERIE'},{av:'A5960SaidaNoDocumento',fld:'SAIDANODOCUMENTO'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'AV13SaidaId',fld:'vSAIDAID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV19FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A7717SaidaInutilizadaSerie',fld:'SAIDAINUTILIZADASERIE'},{av:'A7718SaidaInutilizadaNumero',fld:'SAIDAINUTILIZADANUMERO'}],[{av:'AV22GXLvl24',fld:'vGXLVL24'},{av:'AV23GXLvl34',fld:'vGXLVL34'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaldocmtosaida());
