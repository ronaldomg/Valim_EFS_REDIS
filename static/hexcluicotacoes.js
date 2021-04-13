/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:59:4.71
*/
gx.evt.autoSkip = false;
gx.define('hexcluicotacoes', false, function () {
   this.ServerClass =  "hexcluicotacoes" ;
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
   this.e11o42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13o42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15o42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,26,28,30];
   this.GXLastCtrlId =30;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV20SolicitacaoNumero",gxold:"OV20SolicitacaoNumero",gxvar:"AV20SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV20SolicitacaoNumero,0)},c2v:function(){gx.O.AV20SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"JS", format:2,grid:0};
   GXValidFnc[28]={fld:"BTNHELP",grid:0};
   GXValidFnc[30]={fld:"PROMPT_SOLICITACAONUMERO",grid:0};
   this.AV20SolicitacaoNumero = 0 ;
   this.ZV20SolicitacaoNumero = 0 ;
   this.OV20SolicitacaoNumero = 0 ;
   this.AV20SolicitacaoNumero = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4021SolicitacaoSituacao = "" ;
   this.Events = {"e11o42_client": ["'FECHAR'", true] ,"e13o42_client": ["ENTER", true] ,"e15o42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV29Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV30Pgmdesc',fld:'vPGMDESC'}],[{av:'AV21Erro',fld:'vERRO'},{av:'AV31GXLvl47',fld:'vGXLVL47'},{av:'AV23MsgUsuario',fld:'vMSGUSUARIO'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV24SnLiberarSolici',fld:'vSNLIBERARSOLICI'},{av:'AV22Retorno',fld:'vRETORNO'}]];
   this.setPrompt("PROMPT_SOLICITACAONUMERO", [17]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexcluicotacoes());
