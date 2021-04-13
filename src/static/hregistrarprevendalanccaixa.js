/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:33:35.31
*/
gx.evt.autoSkip = false;
gx.define('hregistrarprevendalanccaixa', false, function () {
   this.ServerClass =  "hregistrarprevendalanccaixa" ;
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
      this.AV11UsuarioId=gx.fn.getControlValue("vUSUARIOID") ;
   };
   this.Validv_Historicofcxid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOFCXID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Historicofcxempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOFCXEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12yx2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13yx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15yx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,19,21,29,30,31];
   this.GXLastCtrlId =31;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicofcxid,isvalid:null,rgrid:[],fld:"vHISTORICOFCXID",gxz:"ZV19HistoricoFcxId",gxold:"OV19HistoricoFcxId",gxvar:"AV19HistoricoFcxId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19HistoricoFcxId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19HistoricoFcxId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOFCXID",gx.O.AV19HistoricoFcxId,0)},c2v:function(){gx.O.AV19HistoricoFcxId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOFCXID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOFCXDESCRICAO",gxz:"ZV18HistoricoFcxDescricao",gxold:"OV18HistoricoFcxDescricao",gxvar:"AV18HistoricoFcxDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18HistoricoFcxDescricao=Value},v2z:function(Value){gx.O.ZV18HistoricoFcxDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOFCXDESCRICAO",gx.O.AV18HistoricoFcxDescricao,0)},c2v:function(){gx.O.AV18HistoricoFcxDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOFCXDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLANCAMENTO",gxz:"ZV14ValorLancamento",gxold:"OV14ValorLancamento",gxvar:"AV14ValorLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ValorLancamento=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV14ValorLancamento=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORLANCAMENTO",gx.O.AV14ValorLancamento,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14ValorLancamento=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORLANCAMENTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCAIXAOBSERVACAO",gxz:"ZV20LancamentoCaixaObservacao",gxold:"OV20LancamentoCaixaObservacao",gxvar:"AV20LancamentoCaixaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20LancamentoCaixaObservacao=Value},v2z:function(Value){gx.O.ZV20LancamentoCaixaObservacao=Value},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCAIXAOBSERVACAO",gx.O.AV20LancamentoCaixaObservacao,0)},c2v:function(){gx.O.AV20LancamentoCaixaObservacao=this.val()},val:function(){return gx.fn.getControlValue("vLANCAMENTOCAIXAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"JS", format:2,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicofcxempresaid,isvalid:null,rgrid:[],fld:"vHISTORICOFCXEMPRESAID",gxz:"ZV23HistoricoFcxEmpresaID",gxold:"OV23HistoricoFcxEmpresaID",gxvar:"AV23HistoricoFcxEmpresaID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23HistoricoFcxEmpresaID=Value},v2z:function(Value){gx.O.ZV23HistoricoFcxEmpresaID=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOFCXEMPRESAID",gx.O.AV23HistoricoFcxEmpresaID,0)},c2v:function(){gx.O.AV23HistoricoFcxEmpresaID=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOFCXEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"PROMPT_HISTORICOFCXID",grid:0};
   this.AV19HistoricoFcxId = 0 ;
   this.ZV19HistoricoFcxId = 0 ;
   this.OV19HistoricoFcxId = 0 ;
   this.AV18HistoricoFcxDescricao = "" ;
   this.ZV18HistoricoFcxDescricao = "" ;
   this.OV18HistoricoFcxDescricao = "" ;
   this.AV14ValorLancamento = 0 ;
   this.ZV14ValorLancamento = 0 ;
   this.OV14ValorLancamento = 0 ;
   this.AV20LancamentoCaixaObservacao = "" ;
   this.ZV20LancamentoCaixaObservacao = "" ;
   this.OV20LancamentoCaixaObservacao = "" ;
   this.AV23HistoricoFcxEmpresaID = "" ;
   this.ZV23HistoricoFcxEmpresaID = "" ;
   this.OV23HistoricoFcxEmpresaID = "" ;
   this.AV19HistoricoFcxId = 0 ;
   this.AV18HistoricoFcxDescricao = "" ;
   this.AV14ValorLancamento = 0 ;
   this.AV20LancamentoCaixaObservacao = "" ;
   this.AV23HistoricoFcxEmpresaID = "" ;
   this.AV11UsuarioId = "" ;
   this.A3550HistoricoFcxId = 0 ;
   this.A3549HistoricoFcxEmpresaID = "" ;
   this.A3540HistoricoFcxDescricao = "" ;
   this.A3544HistoricoFcxExiComplemento = "" ;
   this.A3542HistoricoFcxSinal = "" ;
   this.A3543HistoricoFcxTipo = "" ;
   this.Events = {"e12yx2_client": ["ENTER", true] ,"e13yx2_client": ["'FECHAR'", true] ,"e15yx2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12TpErro',fld:'vTPERRO'},{av:'AV13EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV11UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV17CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV19HistoricoFcxId',fld:'vHISTORICOFCXID'},{av:'AV14ValorLancamento',fld:'vVALORLANCAMENTO'},{av:'AV20LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'A3549HistoricoFcxEmpresaID',fld:'HISTORICOFCXEMPRESAID'},{av:'AV23HistoricoFcxEmpresaID',fld:'vHISTORICOFCXEMPRESAID'},{av:'A3550HistoricoFcxId',fld:'HISTORICOFCXID'},{av:'A3540HistoricoFcxDescricao',fld:'HISTORICOFCXDESCRICAO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'AV21HistoricoFcxExiComplemento',fld:'vHISTORICOFCXEXICOMPLEMENTO'},{av:'AV22HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'}],[{av:'AV15DataAtual',fld:'vDATAATUAL'},{av:'AV12TpErro',fld:'vTPERRO'},{av:'AV33GXLvl67',fld:'vGXLVL67'},{av:'AV18HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV21HistoricoFcxExiComplemento',fld:'vHISTORICOFCXEXICOMPLEMENTO'},{av:'AV22HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV29SdtApuracao',fld:'vSDTAPURACAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_HISTORICOFCXID", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11UsuarioId", "vUSUARIOID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarprevendalanccaixa());
