/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:57.30
*/
gx.evt.autoSkip = false;
gx.define('htermotransferencia', false, function () {
   this.ServerClass =  "htermotransferencia" ;
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
   this.Validv_Contapagrecnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11kn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13kn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14kn2_client=function()
   {
      this.executeServerEvent("'PARAMETROS'", true, null, false, false);
   };
   this.e16kn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,26,28,29,31];
   this.GXLastCtrlId =31;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecnumero,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMERO",gxz:"ZV20ContaPagRecNumero",gxold:"OV20ContaPagRecNumero",gxvar:"AV20ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMERO",gx.O.AV20ContaPagRecNumero,0)},c2v:function(){gx.O.AV20ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"JS", format:2,grid:0};
   GXValidFnc[28]={fld:"BTNPARM",grid:0};
   GXValidFnc[29]={fld:"BTNHELP",grid:0};
   GXValidFnc[31]={fld:"PROMPT_CONTAPAGRECNUMERO",grid:0};
   this.AV20ContaPagRecNumero = 0 ;
   this.ZV20ContaPagRecNumero = 0 ;
   this.OV20ContaPagRecNumero = 0 ;
   this.AV20ContaPagRecNumero = 0 ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A2005ContaPagRecAnoProcesso = 0 ;
   this.A1966ContaPagRecNoProcesso = 0 ;
   this.A1688ContaPagRecConvenioId = 0 ;
   this.A1698ContaPagRecDtAceite = gx.date.nullDate() ;
   this.Events = {"e11kn2_client": ["'FECHAR'", true] ,"e13kn2_client": ["ENTER", true] ,"e14kn2_client": ["'PARAMETROS'", true] ,"e16kn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1698ContaPagRecDtAceite',fld:'CONTAPAGRECDTACEITE'},{av:'AV53Pgmname',fld:'vPGMNAME'},{av:'AV23ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'AV24ContaPagRecVlrConta',fld:'vCONTAPAGRECVLRCONTA'},{av:'AV25ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'AV26ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV27ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'AV28ContaPagRecDtAceite',fld:'vCONTAPAGRECDTACEITE'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV54Pgmdesc',fld:'vPGMDESC'}],[{av:'AV22tpErro',fld:'vTPERRO'},{av:'AV55GXLvl51',fld:'vGXLVL51'},{av:'AV23ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'AV24ContaPagRecVlrConta',fld:'vCONTAPAGRECVLRCONTA'},{av:'AV25ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'AV26ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV27ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'AV28ContaPagRecDtAceite',fld:'vCONTAPAGRECDTACEITE'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.setPrompt("PROMPT_CONTAPAGRECNUMERO", [17]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new htermotransferencia());
