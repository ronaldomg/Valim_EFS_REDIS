/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:3:58.65
*/
gx.evt.autoSkip = false;
gx.define('hpedidolicitacao', false, function () {
   this.ServerClass =  "hpedidolicitacao" ;
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
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11pl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13pl2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15pl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,27,29];
   this.GXLastCtrlId =29;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV20SolicitacaoNumero",gxold:"OV20SolicitacaoNumero",gxvar:"AV20SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV20SolicitacaoNumero,0)},c2v:function(){gx.O.AV20SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"BTNHELP",grid:0};
   GXValidFnc[29]={fld:"PROMPT_SOLICITACAONUMERO",grid:0};
   this.AV20SolicitacaoNumero = 0 ;
   this.ZV20SolicitacaoNumero = 0 ;
   this.OV20SolicitacaoNumero = 0 ;
   this.AV20SolicitacaoNumero = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.Events = {"e11pl2_client": ["'FECHAR'", true] ,"e13pl2_client": ["ENTER", true] ,"e15pl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV48Pgmname',fld:'vPGMNAME'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV49Pgmdesc',fld:'vPGMDESC'}],[{av:'AV21tpErro',fld:'vTPERRO'},{av:'AV50GXLvl54',fld:'vGXLVL54'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV20SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.setPrompt("PROMPT_SOLICITACAONUMERO", [17]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpedidolicitacao());
